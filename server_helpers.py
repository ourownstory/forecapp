import pandas as pd


def determine_timeframe(data, time_unit):

    """
    Background:
    This function determines whether the data is daily, weekly, monthly or yearly by checking the delta between the first and second date in the df.
    Input:
    data: a df containg a dimension and a metric
    time_unit: is the dimension name for the date.
    Output:
    time_list: a list of strings to be used within the UI (time, desc) and when using the function future = m.make_future_dataframe(periods=fs_period, freq=freq_val)
    """

    # Determine whether the data is daily, weekly, monthly or yearly
    date1 = data[time_unit][0]
    date2 = data[time_unit][1]

    first_date = pd.Timestamp(data[time_unit][0])
    second_date = pd.Timestamp(data[time_unit][1])
    time_delta = second_date - first_date
    print()
    time_delta_int = int(str(time_delta).split(" ")[0])

    print([data[time_unit][0], data[time_unit][1]])
    print([second_date, first_date, time_delta])

    if time_delta == pd.Timedelta(5, unit="m"):
        time = "5 min periods"
        freq = "5min"
        desc = "5 minutely"
    elif time_delta_int == 1:
        time = "days"
        freq = "D"
        desc = "daily"
    elif time_delta_int >= 7 and time_delta_int <= 27:
        time = "weeks"
        freq = "W"
        desc = "weekly"
    elif time_delta_int >= 28 and time_delta_int <= 31:
        time = "months"
        freq = "MS"
        desc = "monthly"
    elif time_delta_int >= 364:
        time = "years"
        freq = "Y"
        desc = "yearly"
    else:
        print("Frequency not supported")

    time_list = [time, freq, desc]
    # print(time_list)

    return time_list
