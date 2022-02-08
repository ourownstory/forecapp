;(this['webpackJsonp@coreui/coreui-free-react-admin-template'] =
  this['webpackJsonp@coreui/coreui-free-react-admin-template'] || []).push([
  [39],
  {
    456: function (e, t, l) {
      l.r(t)
      l(1)
      var s = l(353),
        c = l(354),
        a = l(19)
      t.default = () =>
        Object(a.jsxs)(s.rb, {
          children: [
            Object(a.jsx)(s.A, {
              xs: 12,
              children: Object(a.jsx)(c.e, {
                name: 'Floating Label',
                href: 'forms/floating-label',
              }),
            }),
            Object(a.jsx)(s.A, {
              xs: 12,
              children: Object(a.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(a.jsx)(s.r, {
                    children: Object(a.jsx)('strong', { children: 'React Floating labels' }),
                  }),
                  Object(a.jsxs)(s.o, {
                    children: [
                      Object(a.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Wrap a pair of ',
                          Object(a.jsx)('code', { children: '<CFormInput>' }),
                          ' and ',
                          Object(a.jsx)('code', { children: '<CFormLabel>' }),
                          ' ',
                          'elements in ',
                          Object(a.jsx)('code', { children: 'CFormFloating' }),
                          ' to enable floating labels with textual form fields. A ',
                          Object(a.jsx)('code', { children: 'placeholder' }),
                          ' is required on each ',
                          Object(a.jsx)('code', { children: '<CFormInput>' }),
                          ' ',
                          'as our method of CSS-only floating labels uses the ',
                          Object(a.jsx)('code', { children: ':placeholder-shown' }),
                          ' ',
                          'pseudo-element. Also note that the ',
                          Object(a.jsx)('code', { children: '<CFormInput>' }),
                          ' must come first so we can utilize a sibling selector (e.g., ',
                          Object(a.jsx)('code', { children: '~' }),
                          ').',
                        ],
                      }),
                      Object(a.jsxs)(c.f, {
                        href: 'forms/floating-labels',
                        children: [
                          Object(a.jsxs)(s.M, {
                            className: 'mb-3',
                            children: [
                              Object(a.jsx)(s.N, {
                                type: 'email',
                                id: 'floatingInput',
                                placeholder: 'name@example.com',
                              }),
                              Object(a.jsx)(s.O, {
                                htmlFor: 'floatingInput',
                                children: 'Email address',
                              }),
                            ],
                          }),
                          Object(a.jsxs)(s.M, {
                            children: [
                              Object(a.jsx)(s.N, {
                                type: 'password',
                                id: 'floatingPassword',
                                placeholder: 'Password',
                              }),
                              Object(a.jsx)(s.O, {
                                htmlFor: 'floatingPassword',
                                children: 'Password',
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(a.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          "When there's a ",
                          Object(a.jsx)('code', { children: 'value' }),
                          ' already defined, ',
                          Object(a.jsx)('code', { children: '<CFormLabel>' }),
                          's will automatically adjust to their floated position.',
                        ],
                      }),
                      Object(a.jsx)(c.f, {
                        href: 'forms/floating-labels',
                        children: Object(a.jsxs)(s.M, {
                          children: [
                            Object(a.jsx)(s.N, {
                              type: 'email',
                              id: 'floatingInputValue',
                              placeholder: 'name@example.com',
                              defaultValue: 'test@example.com',
                            }),
                            Object(a.jsx)(s.O, {
                              htmlFor: 'floatingInputValue',
                              children: 'Input with value',
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(a.jsx)(s.A, {
              xs: 12,
              children: Object(a.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(a.jsxs)(s.r, {
                    children: [
                      Object(a.jsx)('strong', { children: 'React Floating labels' }),
                      ' ',
                      Object(a.jsx)('small', { children: 'Textareas' }),
                    ],
                  }),
                  Object(a.jsxs)(s.o, {
                    children: [
                      Object(a.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'By default, ',
                          Object(a.jsx)('code', { children: '<CFormTextarea>' }),
                          's will be the same height as',
                          ' ',
                          Object(a.jsx)('code', { children: '<CFormInput>' }),
                          's.',
                        ],
                      }),
                      Object(a.jsx)(c.f, {
                        href: 'forms/floating-labels#textareas',
                        children: Object(a.jsxs)(s.M, {
                          children: [
                            Object(a.jsx)(s.S, {
                              id: 'floatingTextarea',
                              placeholder: 'Leave a comment here',
                            }),
                            Object(a.jsx)(s.O, {
                              htmlFor: 'floatingTextarea',
                              children: 'Comments',
                            }),
                          ],
                        }),
                      }),
                      Object(a.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'To set a custom height on your ',
                          Object(a.jsx)('code', { children: '<CFormTextarea;>' }),
                          ', do not use the',
                          ' ',
                          Object(a.jsx)('code', { children: 'rows' }),
                          ' attribute. Instead, set an explicit ',
                          Object(a.jsx)('code', { children: 'height' }),
                          ' (either inline or via custom CSS).',
                        ],
                      }),
                      Object(a.jsx)(c.f, {
                        href: 'forms/floating-labels#textareas',
                        children: Object(a.jsxs)(s.M, {
                          children: [
                            Object(a.jsx)(s.S, {
                              placeholder: 'Leave a comment here',
                              id: 'floatingTextarea2',
                              style: { height: '100px' },
                            }),
                            Object(a.jsx)(s.O, {
                              htmlFor: 'floatingTextarea2',
                              children: 'Comments',
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(a.jsx)(s.A, {
              xs: 12,
              children: Object(a.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(a.jsxs)(s.r, {
                    children: [
                      Object(a.jsx)('strong', { children: 'React Floating labels' }),
                      ' ',
                      Object(a.jsx)('small', { children: 'Selects' }),
                    ],
                  }),
                  Object(a.jsxs)(s.o, {
                    children: [
                      Object(a.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Other than ',
                          Object(a.jsx)('code', { children: '<CFormInput>' }),
                          ', floating labels are only available on',
                          ' ',
                          Object(a.jsx)('code', { children: '<CFormSelect>' }),
                          's. They work in the same way, but unlike',
                          ' ',
                          Object(a.jsx)('code', { children: '<CFormInput>' }),
                          "s, they'll always show the",
                          ' ',
                          Object(a.jsx)('code', { children: '<CFormLabel>' }),
                          ' in its floated state.',
                          ' ',
                          Object(a.jsxs)('strong', {
                            children: [
                              'Selects with ',
                              Object(a.jsx)('code', { children: 'size' }),
                              ' and ',
                              Object(a.jsx)('code', { children: 'multiple' }),
                              ' are not supported.',
                            ],
                          }),
                        ],
                      }),
                      Object(a.jsx)(c.f, {
                        href: 'forms/floating-labels#selects',
                        children: Object(a.jsxs)(s.M, {
                          children: [
                            Object(a.jsxs)(s.Q, {
                              id: 'floatingSelect',
                              'aria-label': 'Floating label select example',
                              children: [
                                Object(a.jsx)('option', { children: 'Open this select menu' }),
                                Object(a.jsx)('option', { value: '1', children: 'One' }),
                                Object(a.jsx)('option', { value: '2', children: 'Two' }),
                                Object(a.jsx)('option', { value: '3', children: 'Three' }),
                              ],
                            }),
                            Object(a.jsx)(s.O, {
                              htmlFor: 'floatingSelect',
                              children: 'Works with selects',
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(a.jsx)(s.A, {
              xs: 12,
              children: Object(a.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(a.jsxs)(s.r, {
                    children: [
                      Object(a.jsx)('strong', { children: 'React Floating labels' }),
                      ' ',
                      Object(a.jsx)('small', { children: 'Layout' }),
                    ],
                  }),
                  Object(a.jsxs)(s.o, {
                    children: [
                      Object(a.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children:
                          'When working with the CoreUI for Bootstrap grid system, be sure to place form elements within column classes.',
                      }),
                      Object(a.jsx)(c.f, {
                        href: 'forms/floating-labels#layout',
                        children: Object(a.jsxs)(s.rb, {
                          xs: { gutter: 2 },
                          children: [
                            Object(a.jsx)(s.A, {
                              md: !0,
                              children: Object(a.jsxs)(s.M, {
                                children: [
                                  Object(a.jsx)(s.N, {
                                    type: 'email',
                                    id: 'floatingInputGrid',
                                    placeholder: 'name@example.com',
                                    defaultValue: 'email@example.com',
                                  }),
                                  Object(a.jsx)(s.O, {
                                    htmlFor: 'floatingInputGrid',
                                    children: 'Email address',
                                  }),
                                ],
                              }),
                            }),
                            Object(a.jsx)(s.A, {
                              md: !0,
                              children: Object(a.jsxs)(s.M, {
                                children: [
                                  Object(a.jsxs)(s.Q, {
                                    id: 'floatingSelectGrid',
                                    'aria-label': 'Floating label select example',
                                    children: [
                                      Object(a.jsx)('option', {
                                        children: 'Open this select menu',
                                      }),
                                      Object(a.jsx)('option', { value: '1', children: 'One' }),
                                      Object(a.jsx)('option', { value: '2', children: 'Two' }),
                                      Object(a.jsx)('option', { value: '3', children: 'Three' }),
                                    ],
                                  }),
                                  Object(a.jsx)(s.O, {
                                    htmlFor: 'floatingSelectGrid',
                                    children: 'Works with selects',
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
    },
  },
])
//# sourceMappingURL=39.09367c07.chunk.js.map
