from flask import (
    Flask,
    render_template,
    send_from_directory,
    request,
    jsonify,
    make_response,
)
from flask_cors import CORS, cross_origin
import boto3
import os
import pandas as pd
from neuralprophet import NeuralProphet
import time
from server_helpers import determine_timeframe

app = Flask(__name__, static_folder="client/build", static_url_path="")
cors = CORS(app)


@app.route("/api")
@cross_origin()
def Welcome():
    return "Welcome to the API!!!"


@app.route("/api/analysis/", methods=["POST"])
@cross_origin()
def AnalyseCSV():

    content_type = request.headers.get("Content-Type")
    csv_list = 0
    if content_type == "application/json":
        csv_list = request.json

    csv_dataframe = pd.DataFrame(csv_list[1:], columns=[csv_list[0][0], csv_list[0][1]])

    # get description of data column (assuming data column is the second column)
    data_mean = round(csv_dataframe.iloc[:, 1].astype(float).mean(), 3)
    data_std = round(csv_dataframe.iloc[:, 1].astype(float).std(), 3)
    data_min = round(csv_dataframe.iloc[:, 1].astype(float).min(), 3)
    data_max = round(csv_dataframe.iloc[:, 1].astype(float).max(), 3)

    data_list = [list(csv_dataframe)] + csv_dataframe.values.tolist()

    status = {}
    status["data"] = data_list
    status["data_props"] = {
        "mean": data_mean,
        "std": data_std,
        "min": data_min,
        "max": data_max,
        "freq": determine_timeframe(csv_dataframe, csv_dataframe.columns[0]),
    }

    return make_response(jsonify(status), 200)


@app.route("/api/training/", methods=["POST"])
@cross_origin()
def TrainModel():
    # received payload = [csvData, dataProps, settings]
    # csvData: data to be fitted, e.g. [['ds', 'y'], ['1949-01-01', '1'],]
    # dataProps: data properties, e.g. {mean: 0, std: 0, min: 0, max: 0, freq: ['days', 'D', 'daily'],}
    # settings: forecast settings, e.g. {timespan: 3}

    content_type = request.headers.get("Content-Type")
    received_payload = 0
    if content_type == "application/json":
        received_payload = request.json

    # receiving client payload
    data_list = received_payload[0]
    data_df = pd.DataFrame(data_list[1:], columns=[data_list[0][0], data_list[0][1]])
    data_props = received_payload[1]
    settings_dict = received_payload[2]

    # setting up neuralprophet
    m = NeuralProphet(
        loss_func=settings_dict["lossFunc"],
    )
    metrics = m.fit(data_df, freq=data_props["freq"][1])
    future = m.make_future_dataframe(
        data_df,
        periods=int(settings_dict["timeSpan"]),
        n_historic_predictions=True,
    )

    forecast = m.predict(future)

    # Convert pandas Timestamp objects to strings (mainly for plotting later)
    forecast["ds"] = forecast["ds"].apply(lambda x: x.strftime("%Y-%m-%d"))

    # clean out dataframe with nan values
    forecast = forecast.fillna("")

    # create list containing "ds" and "yhat" from forecast dataframe
    forecast_yhat1_list = forecast[["ds", "yhat1"]].tail(1000).values.tolist()

    # create list containing "ds" and "yhat" from original data dataframe
    forecast_y_list = forecast[["ds", "y"]].tail(1000).values.tolist()

    time.sleep(2)

    status = {}
    status["xLabels"] = forecast["ds"].tolist()
    status["forecast_y"] = forecast_y_list
    status["forecast_yhat1"] = forecast_yhat1_list

    return make_response(jsonify(status), 200)


@app.route("/")
def serve():
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(host("0.0.0.0"))
