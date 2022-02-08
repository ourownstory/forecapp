import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <div className="myfooter d-flex justify-content-center align-items-center">
      Made with <span>&nbsp;&#127794;&nbsp;</span>at Stanford University
    </div>
  )
}

export default React.memo(AppFooter)
