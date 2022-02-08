import React, { useState, useContext } from 'react'
import Async from 'react-async'
import { css } from '@emotion/react'
import HashLoader from 'react-spinners/HashLoader'
import GridLoader from 'react-spinners/GridLoader'
import PropagateLoader from 'react-spinners/PropagateLoader'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton, CWidgetStatsF } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilVerticalAlignTop,
  cilVerticalAlignBottom,
  cilResizeWidth,
  cilVideogame,
} from '@coreui/icons'
import MyContext from 'src/context'
import { CChartLine } from '@coreui/react-chartjs'
import { CChart } from '@coreui/react-chartjs'

const Analyze = () => {
  const { csvData, setCsvData, dataProps, settings, setSettings, forecastData, setForecastData } =
    useContext(MyContext)

  //api analysis endpoint url
  // const api_base_url_train = 'http://localhost:5000/api/training/'
  const api_base_url_train = 'https://forecapp.herokuapp.com/api/training'

  // Can be a string as well. Need to ensure each key-value pair ends with ;
  const override = css`
    display: block;
    margin: 200px auto 20px;
  `
  let [loading, setLoading] = useState(true)
  let [color, setColor] = useState('#4285F4')

  // function fetch Server and get forecast
  const loadJson = () => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify([csvData, dataProps, settings]),
      redirect: 'follow',
    }
    const myResponse = fetch(api_base_url_train, requestOptions)
      .then((response) => (response.ok ? response : Promise.reject(response)))
      .then((response) => response.json())

    return myResponse
  }

  function buttonHandler() {
    console.log('current csvData')
    console.log(csvData)
  }

  // Replace '' in array with Nans, required for chart.js to handle plots with different length
  function insertNan(originalForecast) {
    return originalForecast.map((value, index) => (value[1] === '' ? NaN : value[1]))
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <small className="smallHeader">ANALYZE</small>
            <h3 className="midHeader">Forecast</h3>
            <small className="bottomHeader">Analyze and understand your forecast.</small>
          </CCardHeader>
          <CCardBody>
            <Async promiseFn={loadJson}>
              {({ data, error, isLoading }) => {
                if (isLoading)
                  return (
                    <div className="sweet-loading">
                      <GridLoader color="#4285F4" css={override} size={15} />

                      <div className="analyzeContent">
                        <p>
                          Training your model <span>&nbsp;&#129497;&nbsp;</span>
                        </p>
                      </div>
                    </div>
                  )
                if (error) return <p> There seems to be an error {error.message} </p>
                if (data)
                  return (
                    <div>
                      <CChart
                        type="line"
                        data={{
                          labels: data.xLabels,
                          datasets: [
                            {
                              label: 'actuals',
                              borderWidth: 2,
                              backgroundColor: 'rgb(197, 218, 252)',
                              borderColor: 'rgb(197, 218, 252)',
                              pointRadius: 0,
                              data: insertNan(data.forecast_y),
                            },
                            {
                              label: 'forecast',
                              borderWidth: 2,
                              backgroundColor: 'rgba(66, 133, 244, 1)',
                              borderColor: 'rgba(66, 133, 244, 1)',
                              pointRadius: 0,
                              data: data.forecast_yhat1,
                            },
                          ],
                        }}
                        options={{
                          animations: {
                            tension: {
                              duration: 300,
                              easing: 'easeInQuad',
                              from: 1,
                              to: 0,
                              loop: false,
                            },
                          },
                        }}
                      />
                    </div>
                  )

                return <p>I have no idea what to do here..</p>
              }}
            </Async>
            <CButton
              type="submit"
              className="text-white d-flex justify-content-center align-items-center'"
              onClick={() => buttonHandler()}
            >
              Console Log Baby
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Analyze
