import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CCard, CCardText, CCardBody, CCardHeader, CCol, CRow, CButton, CWidgetStatsF } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCloudDownload } from '@coreui/icons'
import {
  cilVerticalAlignTop,
  cilVerticalAlignBottom,
  cilResizeWidth,
  cilVideogame,
} from '@coreui/icons'
import MyContext from 'src/context'
import DragAndDrop from 'src/components/DragAndDrop'
import DownloadButton from './DownloadButton'

const Upload = () => {
  //useHistory hook to programmatically navigate to different route
  const history = useHistory()

  // render context
  const { csvData, setCsvData, setDataProps } = useContext(MyContext)

  //api analysis endpoint url
  // const api_base_url = 'https://npforecast.herokuapp.com/api/analysis/'
  const api_base_url = 'http://localhost:5050/api/analysis/'

  const childToParent = (childData) => {
    setCsvData(childData)
  }

  //function to fetch data from the API
  function fetchData() {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(csvData),
      redirect: 'follow',
    }

    fetch(api_base_url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCsvData(result.data)
        setDataProps(result.data_props)
        history.push('/train')
      })
  }

  return (
    <CRow>
      <CCol xs={12}>

        <CCard xs={12} className="mb-4">
          <CCardHeader>
            <h3 className="midHeader">Quick Start</h3>
          </CCardHeader>
          <CCardBody>
            <CCardText>
              Upload a CSV file containing your data. The file must be a spreadsheet with two columns, where the first column contains the dates/times, and the second column contains the y values. Download and try forcasting with the example files below!
            </CCardText>

            <CCardText>
              Example Files:
            </CCardText>
            <CRow className='justify-content-start'>
              <DownloadButton name={"Air Passengers"} url={"http://localhost:5050/api/download-file1"} />
              <DownloadButton name={"Retail Sales"} url={"http://localhost:5050/api/download-file2"} />
              <DownloadButton name={"Peyton Manning"} url={"http://localhost:5050/api/download-file3"} />
            </CRow>
          </CCardBody>
        </CCard>

        <CCard className="mb-12">
          <CCardHeader>
            <small className="smallHeader">UPLOAD</small>
            <h3 className="midHeader">Collect data</h3>
            <small className="bottomHeader">Select your .csv file and upload it.</small>
          </CCardHeader>
          <CCardBody>
            <DragAndDrop paramFunc={childToParent} />
            <hr></hr>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CButton type="submit" className="text-white" onClick={() => fetchData()}>
                Submit
              </CButton>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Upload
