;(this['webpackJsonp@coreui/coreui-free-react-admin-template'] =
  this['webpackJsonp@coreui/coreui-free-react-admin-template'] || []).push([
  [54],
  {
    438: function (e, t, a) {
      a.r(t)
      var s = a(1),
        c = a(18),
        r = a(353),
        n = (a(356), a(360)),
        i = a(368),
        l = a(19)
      t.default = () => {
        const e = Object(c.g)(),
          { csvData: t, setCsvData: a, setDataProps: o } = Object(s.useContext)(n.a)
        return Object(l.jsx)(r.rb, {
          children: Object(l.jsx)(r.A, {
            xs: 12,
            children: Object(l.jsxs)(r.n, {
              className: 'mb-12',
              children: [
                Object(l.jsxs)(r.r, {
                  children: [
                    Object(l.jsx)('small', { className: 'smallHeader', children: 'UPLOAD' }),
                    Object(l.jsx)('h3', { className: 'midHeader', children: 'Collect data' }),
                    Object(l.jsx)('small', {
                      className: 'bottomHeader',
                      children: 'Select your .csv file and upload it.',
                    }),
                  ],
                }),
                Object(l.jsxs)(r.o, {
                  children: [
                    Object(l.jsx)(i.a, {
                      paramFunc: (e) => {
                        a(e)
                      },
                    }),
                    Object(l.jsx)('hr', {}),
                    Object(l.jsx)('div', {
                      style: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
                      children: Object(l.jsx)(r.j, {
                        type: 'submit',
                        className: 'text-white',
                        onClick: () =>
                          (function () {
                            var s = new Headers()
                            s.append('Content-Type', 'application/json')
                            var c = {
                              method: 'POST',
                              headers: s,
                              body: JSON.stringify(t),
                              redirect: 'follow',
                            }
                            fetch('https://forecapp.herokuapp.com/api/analysis/', c)
                              .then((e) => e.json())
                              .then((t) => {
                                a(t.data), o(t.data_props), e.push('/train')
                              })
                          })(),
                        children: 'Submit',
                      }),
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
//# sourceMappingURL=54.6fd375ac.chunk.js.map
