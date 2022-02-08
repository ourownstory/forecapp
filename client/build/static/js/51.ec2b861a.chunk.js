;(this['webpackJsonp@coreui/coreui-free-react-admin-template'] =
  this['webpackJsonp@coreui/coreui-free-react-admin-template'] || []).push([
  [51],
  {
    437: function (e, s, t) {
      t.r(s)
      var c = t(1),
        l = t(353),
        j = (t(368), t(19))
      s.default = () => {
        const [e, s] = Object(c.useState)(''),
          [t, r] = Object(c.useState)('40,60'),
          [n, a] = Object(c.useState)('003049,ffcdb2'),
          [i, o] = Object(c.useState)('0.05')
        return Object(j.jsxs)(l.rb, {
          children: [
            Object(j.jsx)(l.A, {
              xs: 12,
              sm: 6,
              children: Object(j.jsxs)(l.n, {
                className: 'mb-4',
                children: [
                  Object(j.jsxs)(l.r, {
                    children: [
                      Object(j.jsx)('strong', { children: 'API Inputs' }),
                      ' ',
                      Object(j.jsx)('small', { children: 'Make some pie!' }),
                    ],
                  }),
                  Object(j.jsx)(l.o, {
                    children: Object(j.jsxs)(l.J, {
                      children: [
                        Object(j.jsxs)(l.rb, {
                          className: 'mb-3',
                          children: [
                            Object(j.jsx)(l.O, {
                              htmlFor: 'data',
                              className: 'col-sm-2 col-form-label',
                              children: 'Data',
                            }),
                            Object(j.jsxs)(l.A, {
                              sm: 10,
                              children: [
                                Object(j.jsx)(l.N, {
                                  type: 'text',
                                  id: 'inpuData',
                                  value: t,
                                  onChange: (e) => r(e.target.value),
                                }),
                                Object(j.jsx)('p', {
                                  children: Object(j.jsx)('small', {
                                    children: 'Enter csv of data summing to 100',
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(j.jsxs)(l.rb, {
                          className: 'mb-3',
                          children: [
                            Object(j.jsx)(l.O, {
                              htmlFor: 'colorSet',
                              className: 'col-sm-2 col-form-label',
                              children: 'Color Set',
                            }),
                            Object(j.jsxs)(l.A, {
                              sm: 10,
                              children: [
                                Object(j.jsx)(l.N, {
                                  type: 'text',
                                  id: 'inputColorSet',
                                  value: n,
                                  onChange: (e) => a(e.target.value),
                                }),
                                Object(j.jsx)('p', {
                                  children: Object(j.jsx)('small', {
                                    children: 'Enter csv of color hex without #',
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(j.jsxs)(l.rb, {
                          className: 'mb-3',
                          children: [
                            Object(j.jsx)(l.O, {
                              htmlFor: 'wedge',
                              className: 'col-sm-2 col-form-label',
                              children: 'Wedge',
                            }),
                            Object(j.jsxs)(l.A, {
                              sm: 10,
                              children: [
                                Object(j.jsx)(l.N, {
                                  type: 'text',
                                  id: 'inputWedge',
                                  value: i,
                                  onChange: (e) => o(e.target.value),
                                }),
                                Object(j.jsx)('p', {
                                  children: Object(j.jsx)('small', {
                                    children: 'Enter wedge size',
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(j.jsx)(l.j, {
                          type: 'submit',
                          onClick: () => (
                            s(''),
                            void fetch(
                              'https://forecapp.herokuapp.com/api/justpie/?data=' +
                                t +
                                '&colors=' +
                                n +
                                '&wedge=' +
                                i,
                            )
                              .then((e) => e.json())
                              .then(
                                (t) => {
                                  s(t.message),
                                    (document.getElementById('htmlDownloadLink').innerHTML = e),
                                    (document.getElementById('json_response').innerHTML =
                                      JSON.stringify(t, void 0, 2))
                                },
                                (e) => {
                                  console.log(e)
                                },
                              )
                          ),
                          children: 'Submit',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            Object(j.jsx)(l.A, {
              xs: 12,
              sm: 6,
              children: Object(j.jsxs)(l.n, {
                className: 'mb-4',
                children: [
                  Object(j.jsxs)(l.r, {
                    children: [
                      Object(j.jsx)('strong', { children: 'Piechart' }),
                      ' ',
                      Object(j.jsx)('small', { children: 'Plot from AWS' }),
                    ],
                  }),
                  Object(j.jsxs)(l.o, {
                    children: [
                      Object(j.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children: 'Here\u2019s the requested downloadlink from the AWS Bucket',
                      }),
                      Object(j.jsx)('p', { id: 'htmlDownloadLink', children: 'Test' }),
                      Object(j.jsx)('img', {
                        className: 'd-block w-100',
                        src: e,
                        alt: 'download from s3 bucket',
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(j.jsx)(l.A, {
              xs: 12,
              sm: 6,
              children: Object(j.jsxs)(l.n, {
                className: 'mb-4',
                children: [
                  Object(j.jsxs)(l.r, {
                    children: [
                      Object(j.jsx)('strong', { children: 'Response' }),
                      ' ',
                      Object(j.jsx)('small', { children: 'show API response' }),
                    ],
                  }),
                  Object(j.jsx)(l.o, {
                    children: Object(j.jsxs)(l.J, {
                      children: [
                        Object(j.jsx)('p', {
                          className: 'text-medium-emphasis small',
                          children: 'Here is the last API response',
                        }),
                        Object(j.jsx)(l.A, {
                          children: Object(j.jsx)('pre', { id: 'json_response' }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        })
      }
    },
  },
])
//# sourceMappingURL=51.ec2b861a.chunk.js.map
