;(this['webpackJsonp@coreui/coreui-free-react-admin-template'] =
  this['webpackJsonp@coreui/coreui-free-react-admin-template'] || []).push([
  [22],
  {
    439: function (e, t, a) {
      a.r(t)
      var s,
        r = a(383),
        c = a(1),
        o = a(365),
        n = a(366),
        i = a(388),
        l = a.n(i),
        d = a(353),
        b = (a(356), a(360)),
        j = a(357),
        h = a(19)
      t.default = () => {
        const {
            csvData: e,
            setCsvData: t,
            dataProps: a,
            settings: i,
            setSettings: p,
            forecastData: m,
            setForecastData: u,
          } = Object(c.useContext)(b.a),
          x = Object(n.css)(
            s || (s = Object(r.a)(['\n    display: block;\n    margin: 200px auto 20px;\n  '])),
          )
        let [O, g] = Object(c.useState)(!0),
          [f, y] = Object(c.useState)('#4285F4')
        return Object(h.jsx)(d.rb, {
          children: Object(h.jsx)(d.A, {
            xs: 12,
            children: Object(h.jsxs)(d.n, {
              className: 'mb-12',
              children: [
                Object(h.jsxs)(d.r, {
                  children: [
                    Object(h.jsx)('small', { className: 'smallHeader', children: 'ANALYZE' }),
                    Object(h.jsx)('h3', { className: 'midHeader', children: 'Forecast' }),
                    Object(h.jsx)('small', {
                      className: 'bottomHeader',
                      children: 'Analyze and understand your forecast.',
                    }),
                  ],
                }),
                Object(h.jsxs)(d.o, {
                  children: [
                    Object(h.jsx)(o.a, {
                      promiseFn: () => {
                        var t = new Headers()
                        t.append('Content-Type', 'application/json')
                        var s = {
                          method: 'POST',
                          headers: t,
                          body: JSON.stringify([e, a, i]),
                          redirect: 'follow',
                        }
                        return fetch('https://forecapp.herokuapp.com/api/training', s)
                          .then((e) => (e.ok ? e : Promise.reject(e)))
                          .then((e) => e.json())
                      },
                      children: (e) => {
                        let { data: t, error: a, isLoading: s } = e
                        return s
                          ? Object(h.jsxs)('div', {
                              className: 'sweet-loading',
                              children: [
                                Object(h.jsx)(l.a, { color: '#4285F4', css: x, size: 15 }),
                                Object(h.jsx)('div', {
                                  className: 'analyzeContent',
                                  children: Object(h.jsxs)('p', {
                                    children: [
                                      'Training your model ',
                                      Object(h.jsx)('span', { children: '\xa0\ud83e\uddd9\xa0' }),
                                    ],
                                  }),
                                }),
                              ],
                            })
                          : a
                          ? Object(h.jsxs)('p', {
                              children: [' There seems to be an error ', a.message, ' '],
                            })
                          : t
                          ? Object(h.jsx)('div', {
                              children: Object(h.jsx)(j.a, {
                                type: 'line',
                                data: {
                                  labels: t.xLabels,
                                  datasets: [
                                    {
                                      label: 'actuals',
                                      borderWidth: 2,
                                      backgroundColor: 'rgb(197, 218, 252)',
                                      borderColor: 'rgb(197, 218, 252)',
                                      pointRadius: 0,
                                      data:
                                        ((r = t.forecast_y),
                                        r.map((e, t) => ('' === e[1] ? NaN : e[1]))),
                                    },
                                    {
                                      label: 'forecast',
                                      borderWidth: 2,
                                      backgroundColor: 'rgba(66, 133, 244, 1)',
                                      borderColor: 'rgba(66, 133, 244, 1)',
                                      pointRadius: 0,
                                      data: t.forecast_yhat1,
                                    },
                                  ],
                                },
                                options: {
                                  animations: {
                                    tension: {
                                      duration: 300,
                                      easing: 'easeInQuad',
                                      from: 1,
                                      to: 0,
                                      loop: !1,
                                    },
                                  },
                                },
                              }),
                            })
                          : Object(h.jsx)('p', { children: 'I have no idea what to do here..' })
                        var r
                      },
                    }),
                    Object(h.jsx)(d.j, {
                      type: 'submit',
                      className: "text-white d-flex justify-content-center align-items-center'",
                      onClick: () => (console.log('current csvData'), void console.log(e)),
                      children: 'Console Log Baby',
                    }),
                  ],
                }),
              ],
            }),
          }),
        })
      }
    },
  },
])
//# sourceMappingURL=22.9c272245.chunk.js.map
