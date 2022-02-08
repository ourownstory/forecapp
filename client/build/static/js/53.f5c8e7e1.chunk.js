;(this['webpackJsonp@coreui/coreui-free-react-admin-template'] =
  this['webpackJsonp@coreui/coreui-free-react-admin-template'] || []).push([
  [53],
  {
    475: function (e, c, r) {
      r.r(c)
      var a = r(1),
        s = (r(72), r(18)),
        t = r(353),
        l = r(356)
      const i = [
          '512 512',
          "<path fill='var(--ci-primary-color, currentColor)' d='M16,360H496V120H16ZM48,152H464V328H48Z' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='152 184 120 184 120 224 80 224 80 256 120 256 120 296 152 296 152 256 192 256 192 224 152 224 152 184' class='ci-primary'/><rect width='32' height='32' x='336' y='256' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='400' y='192' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>",
        ],
        o = [
          '512 512',
          "<path fill='var(--ci-primary-color, currentColor)' d='M366.156,392H328V320H184v72H145.373L9.607,256.235,145.845,120H184v72H328V120h38.627L502.393,255.765ZM54.863,256.235,152,353.373V288H360v64.9l97.137-97.137L360,158.627V224H152V159.1Z' class='ci-primary'/>",
        ],
        n = [
          '512 512',
          "<rect width='480' height='32' x='16' y='16' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='155.883 195.883 178.51 218.51 240 157.02 240 456 272 456 272 157.02 333.49 218.51 356.117 195.883 256 95.764 155.883 195.883' class='ci-primary'/>",
        ],
        j = [
          '512 512',
          "<polygon fill='var(--ci-primary-color, currentColor)' points='356.117 316.117 333.49 293.49 272 354.98 272 56 240 56 240 354.98 178.51 293.49 155.883 316.117 256 416.236 356.117 316.117' class='ci-primary'/><rect width='480' height='32' x='16' y='464' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>",
        ]
      var m = r(360),
        d = r(357),
        b = r(19)
      c.default = () => {
        const { csvData: e, dataProps: c, setSettings: r } = Object(a.useContext)(m.a),
          h = ['huber', 'mse', 'mae'],
          x = ['Huber (default)', 'MSE', 'MAE']
        var p = 5
        const [O, u] = Object(a.useState)([!0, !1, !1]),
          y = Object(s.g)(),
          f = e.slice(1).map(function (e, c) {
            return e[0]
          }),
          N = e.slice(1).map(function (e, c) {
            return e[1]
          })
        return Object(b.jsx)(t.rb, {
          children: Object(b.jsxs)(t.A, {
            xs: 12,
            children: [
              Object(b.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(b.jsxs)(t.r, {
                    children: [
                      Object(b.jsx)('small', { className: 'smallHeader', children: 'TRAIN' }),
                      Object(b.jsx)('h3', { className: 'midHeader', children: 'Plot' }),
                      Object(b.jsx)('small', {
                        className: 'bottomHeader',
                        children: 'Plot data and get metrics.',
                      }),
                    ],
                  }),
                  Object(b.jsxs)(t.o, {
                    children: [
                      Object(b.jsx)(d.d, {
                        data: {
                          labels: f,
                          datasets: [
                            {
                              label: 'actuals',
                              backgroundColor: 'rgba(220, 220, 220, 0.2)',
                              borderColor: 'rgba(220, 220, 220, 1)',
                              borderWidth: 2,
                              pointRadius: 0,
                              data: N,
                            },
                          ],
                        },
                      }),
                      Object(b.jsx)('hr', {}),
                      Object(b.jsxs)(t.rb, {
                        children: [
                          Object(b.jsx)(t.A, {
                            xs: 3,
                            children: Object(b.jsx)(t.Rb, {
                              className: 'mb-3',
                              color: 'primary',
                              icon: Object(b.jsx)(l.a, { icon: i, height: 24 }),
                              title: 'Mean',
                              value: c.mean,
                            }),
                          }),
                          Object(b.jsx)(t.A, {
                            xs: 3,
                            children: Object(b.jsx)(t.Rb, {
                              className: 'mb-3',
                              color: 'primary',
                              icon: Object(b.jsx)(l.a, { icon: o, height: 24 }),
                              title: 'Std',
                              value: c.std,
                            }),
                          }),
                          Object(b.jsx)(t.A, {
                            xs: 3,
                            children: Object(b.jsx)(t.Rb, {
                              className: 'mb-3',
                              color: 'primary',
                              icon: Object(b.jsx)(l.a, { icon: n, height: 24 }),
                              title: 'Max',
                              value: c.max,
                            }),
                          }),
                          Object(b.jsx)(t.A, {
                            xs: 3,
                            children: Object(b.jsx)(t.Rb, {
                              className: 'mb-3',
                              color: 'primary',
                              icon: Object(b.jsx)(l.a, { icon: j, height: 24 }),
                              title: 'Min',
                              value: c.min,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(b.jsxs)(t.n, {
                children: [
                  Object(b.jsxs)(t.r, {
                    children: [
                      Object(b.jsx)('small', { className: 'smallHeader', children: 'TRAIN' }),
                      Object(b.jsx)('h3', { className: 'midHeader', children: 'Initialize Model' }),
                      Object(b.jsx)('small', {
                        className: 'bottomHeader',
                        children: 'Configure your settings and train model.',
                      }),
                    ],
                  }),
                  Object(b.jsxs)(t.o, {
                    children: [
                      Object(b.jsxs)(t.rb, {
                        className: 'mb-3',
                        children: [
                          Object(b.jsxs)(t.A, {
                            className: ' first-col',
                            sm: 6,
                            children: [
                              Object(b.jsxs)(t.O, {
                                htmlFor: 'inputEmail3',
                                children: [
                                  Object(b.jsxs)('small', {
                                    className: 'smallHeader',
                                    children: ['FORECAST LENGTH', Object(b.jsx)('br', {})],
                                  }),
                                  'How many ',
                                  Object(b.jsx)('strong', { children: c.freq[0] }),
                                  ' do you want to forecast out?',
                                ],
                              }),
                              Object(b.jsx)(t.A, {
                                sm: 3,
                                children: Object(b.jsx)(t.N, {
                                  type: 'email',
                                  onChange: (e) => {
                                    p = e.target.value
                                  },
                                  id: 'inputEmail3',
                                }),
                              }),
                            ],
                          }),
                          Object(b.jsxs)(t.A, {
                            sm: 6,
                            children: [
                              Object(b.jsx)('small', {
                                className: 'smallHeader',
                                children: 'LOSS FUNCTION',
                              }),
                              h.map((e, c) =>
                                Object(b.jsxs)(
                                  'div',
                                  {
                                    className: 'form-check',
                                    children: [
                                      Object(b.jsx)('input', {
                                        className: 'form-check-input',
                                        type: 'radio',
                                        id: 'radio-'.concat(e),
                                        checked: O[c],
                                        onChange: () =>
                                          ((e) => {
                                            const c = O.map((c, r) => r === e)
                                            u(c)
                                          })(c),
                                      }),
                                      Object(b.jsx)('label', {
                                        htmlFor: 'radio-'.concat(e),
                                        children: x[c],
                                      }),
                                    ],
                                  },
                                  c,
                                ),
                              ),
                            ],
                          }),
                        ],
                      }),
                      Object(b.jsx)(t.j, {
                        type: 'submit',
                        className: 'text-white',
                        onClick: () =>
                          (function () {
                            const e = O.flatMap((e, c) => (e ? c : []))
                            r({ timeSpan: p, lossFunc: h[e] }), y.push('/analyze')
                          })(),
                        children: 'Train Model',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      }
    },
  },
])
//# sourceMappingURL=53.f5c8e7e1.chunk.js.map
