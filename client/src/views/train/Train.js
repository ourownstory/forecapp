import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import Async from 'react-async'
import { useHistory } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CWidgetStatsF,
  CFormInput,
  CFormLabel,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilVerticalAlignTop,
  cilVerticalAlignBottom,
  cilResizeWidth,
  cilVideogame,
} from '@coreui/icons'
import MyContext from 'src/context'
import { CChartLine } from '@coreui/react-chartjs'

const Train = () => {
  const { csvData, dataProps, setSettings } = useContext(MyContext)

  const lossFunction = ['huber', 'mse', 'mae']
  const lossFunctionLabel = ['Huber (default)', 'MSE', 'MAE']

  var button_value = 5

  const [checkedLossFunction, setCheckedLossFunction] = useState(
    // new Array(lossFunction.length).fill(false),
    [true, false, false],
  )
  const handleOnChange = (position) => {
    // if state of position is true -> uncheck all others
    const updatedCheckedState = checkedLossFunction.map((item, index) =>
      index === position ? true : false,
    )
    setCheckedLossFunction(updatedCheckedState)
  }
  //useHistory hook to programmatically navigate to different route
  const history = useHistory()

  const myLabels = csvData.slice(1).map(function (element, index) {
    return element[0]
  })

  const myData = csvData.slice(1).map(function (element, index) {
    return element[1]
  })

  function buttonHandler() {
    // get selected frequency by mapping boolean array
    const selectedIndex = checkedLossFunction.flatMap((bool, index) => (bool ? index : []))
    var inputFormString = button_value
    setSettings({ timeSpan: inputFormString, lossFunc: lossFunction[selectedIndex] })
    history.push('/analyze')
  }

  const formHandler = (e) => {
    button_value = e.target.value
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <small className="smallHeader">TRAIN</small>
            <h3 className="midHeader">Plot</h3>
            <small className="bottomHeader">Plot data and get metrics.</small>
          </CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: myLabels,
                datasets: [
                  {
                    label: 'actuals',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    borderWidth: 2,
                    pointRadius: 0,
                    data: myData,
                  },
                ],
              }}
            />
            <hr></hr>
            <CRow>
              <CCol xs={3}>
                <CWidgetStatsF
                  className="mb-3"
                  color="primary"
                  icon={<CIcon icon={cilVideogame} height={24} />}
                  title="Mean"
                  value={dataProps.mean}
                />
              </CCol>
              <CCol xs={3}>
                <CWidgetStatsF
                  className="mb-3"
                  color="primary"
                  icon={<CIcon icon={cilResizeWidth} height={24} />}
                  title="Std"
                  value={dataProps.std}
                />
              </CCol>
              <CCol xs={3}>
                <CWidgetStatsF
                  className="mb-3"
                  color="primary"
                  icon={<CIcon icon={cilVerticalAlignTop} height={24} />}
                  title="Max"
                  value={dataProps.max}
                />
              </CCol>
              <CCol xs={3}>
                <CWidgetStatsF
                  className="mb-3"
                  color="primary"
                  icon={<CIcon icon={cilVerticalAlignBottom} height={24} />}
                  title="Min"
                  value={dataProps.min}
                />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            <small className="smallHeader">TRAIN</small>
            <h3 className="midHeader">Initialize Model</h3>
            <small className="bottomHeader">Configure your settings and train model.</small>
          </CCardHeader>
          <CCardBody>
            <CRow className="mb-3">
              <CCol className=" first-col" sm={6}>
                <CFormLabel htmlFor="inputEmail3">
                  <small className="smallHeader">
                    FORECAST LENGTH<br></br>
                  </small>
                  How many <strong>{dataProps.freq[0]}</strong> do you want to forecast out?
                </CFormLabel>
                <CCol sm={3}>
                  <CFormInput type="email" onChange={formHandler} id="inputEmail3" />
                </CCol>
              </CCol>
              <CCol sm={6}>
                <small className="smallHeader">LOSS FUNCTION</small>

                {lossFunction.map((value, index) => {
                  return (
                    <div key={index} className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id={`radio-${value}`}
                        checked={checkedLossFunction[index]}
                        onChange={() => handleOnChange(index)}
                      ></input>
                      <label htmlFor={`radio-${value}`}>{lossFunctionLabel[index]}</label>
                    </div>
                  )
                })}
              </CCol>
            </CRow>
            <CButton type="submit" className="text-white" onClick={() => buttonHandler()}>
              Train Model
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Train
// DUMP
