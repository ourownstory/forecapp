import React from 'react'
import { CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCloudDownload } from '@coreui/icons'


const DownloadButton = (props) => {

  const { name, url } = props;

  return (
    <a className="sampleDownload" href={`${url}`}>
      <CIcon name={cilCloudDownload} /> {name}
    </a>
  )
}

export default DownloadButton