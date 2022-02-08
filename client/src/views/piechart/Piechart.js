import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'

import DragAndDrop from 'src/components/DragAndDrop'

const Piechart = () => {
  //Set up the state variables

  //Image
  const [downloadLink, setDownloadLink] = useState('')

  //Form variables
  const [data, setData] = useState('40,60')
  const [colors, setColors] = useState('003049,ffcdb2')
  const [wedge, setWedge] = useState('0.05')

  //api base url
  const api_base_url = 'https://forecapp.herokuapp.com/api/justpie/'

  //function to fetch data from the API
  function fetchData() {
    //set image to be empty
    setDownloadLink('')

    //build up API endpoint
    var url_req_string = api_base_url + '?data=' + data + '&colors=' + colors + '&wedge=' + wedge

    //fetch url and parse JSON response
    fetch(url_req_string)
      .then((res) => res.json())
      .then(
        (result) => {
          //set the image to be the API return message
          setDownloadLink(result.message)
          document.getElementById('htmlDownloadLink').innerHTML = downloadLink
          document.getElementById('json_response').innerHTML = JSON.stringify(result, undefined, 2)
        },
        (error) => {
          console.log(error)
        },
      )
  }

  return (
    <CRow>
      <CCol xs={12} sm={6}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>API Inputs</strong> <small>Make some pie!</small>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CRow className="mb-3">
                <CFormLabel htmlFor="data" className="col-sm-2 col-form-label">
                  Data
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                    type="text"
                    id="inpuData"
                    value={data}
                    onChange={(event) => setData(event.target.value)}
                  />
                  <p>
                    <small>Enter csv of data summing to 100</small>
                  </p>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="colorSet" className="col-sm-2 col-form-label">
                  Color Set
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                    type="text"
                    id="inputColorSet"
                    value={colors}
                    onChange={(event) => setColors(event.target.value)}
                  />
                  <p>
                    <small>Enter csv of color hex without #</small>
                  </p>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="wedge" className="col-sm-2 col-form-label">
                  Wedge
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                    type="text"
                    id="inputWedge"
                    value={wedge}
                    onChange={(event) => setWedge(event.target.value)}
                  />
                  <p>
                    <small>Enter wedge size</small>
                  </p>
                </CCol>
              </CRow>
              <CButton type="submit" onClick={() => fetchData()}>
                Submit
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} sm={6}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Piechart</strong> <small>Plot from AWS</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Here’s the requested downloadlink from the AWS Bucket
            </p>
            <p id="htmlDownloadLink">Test</p>
            <img className="d-block w-100" src={downloadLink} alt="download from s3 bucket" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} sm={6}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Response</strong> <small>show API response</small>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <p className="text-medium-emphasis small">Here is the last API response</p>
              <CCol>
                <pre id="json_response"></pre>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Piechart
