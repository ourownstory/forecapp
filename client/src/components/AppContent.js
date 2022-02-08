import React, { Suspense, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'
import MyContext from 'src/context'

const AppContent = () => {
  // initialize the context
  // const [globalData, setGlobalData] = useState({
  //   csvData: [
  //     ['ds', 'y'],
  //     ['1946', '1'],
  //     ['1947', '2'],
  //     ['1948', '3'],
  //     ['1949', '4'],
  //   ],
  //   setGlobalDataHandler: (n) => setGlobalData({ csvData: n }),
  // })

  const [csvData, setCsvData] = useState([
    ['ds', 'y'],
    ['1949-01-01', '1'],
    ['1949-02-01', '2'],
    ['1949-03-01', '3'],
    ['1949-04-01', '4'],
  ])
  const [forecastData, setForecastData] = useState([
    ['ds', 'y'],
    ['1949-01-01', '1'],
    ['1949-02-01', '2'],
    ['1949-03-01', '3'],
    ['1949-04-01', '4'],
  ])
  const [dataProps, setDataProps] = useState({
    mean: 0,
    std: 0,
    min: 0,
    max: 0,
    freq: ['days', 'D', 'daily'],
  })
  const [settings, setSettings] = useState({ timeSpan: 0, lossFunc: 'huber' })

  return (
    <MyContext.Provider
      value={{
        csvData,
        setCsvData,
        dataProps,
        setDataProps,
        settings,
        setSettings,
        forecastData,
        setForecastData,
      }}
    >
      <CContainer lg>
        <Suspense fallback={<CSpinner color="primary" />}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <>
                        <route.component {...props} />
                      </>
                    )}
                  />
                )
              )
            })}
            <Redirect from="/" to="/upload" />
          </Switch>
        </Suspense>
      </CContainer>
    </MyContext.Provider>
  )
}

export default React.memo(AppContent)
