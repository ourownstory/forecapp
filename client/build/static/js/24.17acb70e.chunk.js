;(this['webpackJsonp@coreui/coreui-free-react-admin-template'] =
  this['webpackJsonp@coreui/coreui-free-react-admin-template'] || []).push([
  [24],
  {
    442: function (e, c, s) {
      s.r(c)
      var t = s(1),
        i = s(353),
        n = s(354),
        l = s(19)
      c.default = () => {
        const [e, c] = Object(t.useState)(!1),
          [s, r] = Object(t.useState)(!1),
          [a, j] = Object(t.useState)(!1),
          [h, d] = Object(t.useState)(!1)
        return Object(l.jsxs)(i.rb, {
          children: [
            Object(l.jsx)(i.A, {
              xs: 12,
              children: Object(l.jsx)(n.e, { name: 'Collapse', href: 'components/collapse' }),
            }),
            Object(l.jsx)(i.A, {
              xs: 12,
              children: Object(l.jsxs)(i.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsx)(i.r, {
                    children: Object(l.jsx)('strong', { children: 'React Collapse' }),
                  }),
                  Object(l.jsxs)(i.o, {
                    children: [
                      Object(l.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children: 'You can use a link or a button component.',
                      }),
                      Object(l.jsxs)(n.f, {
                        href: 'components/collapse',
                        children: [
                          Object(l.jsx)(i.j, {
                            href: '#',
                            onClick: (s) => {
                              s.preventDefault(), c(!e)
                            },
                            children: 'Link',
                          }),
                          Object(l.jsx)(i.j, { onClick: () => c(!e), children: 'Button' }),
                          Object(l.jsx)(i.B, {
                            visible: e,
                            children: Object(l.jsx)(i.n, {
                              className: 'mt-3',
                              children: Object(l.jsx)(i.o, {
                                children:
                                  'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(l.jsx)(i.A, {
              xs: 12,
              children: Object(l.jsxs)(i.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(i.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React Collapse' }),
                      ' ',
                      Object(l.jsx)('small', { children: ' Horizontal' }),
                    ],
                  }),
                  Object(l.jsxs)(i.o, {
                    children: [
                      Object(l.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children: 'You can use a link or a button component.',
                      }),
                      Object(l.jsxs)(n.f, {
                        href: 'components/collapse#horizontal',
                        children: [
                          Object(l.jsx)(i.j, {
                            className: 'mb-3',
                            onClick: () => r(!s),
                            'aria-expanded': s,
                            'aria-controls': 'collapseWidthExample',
                            children: 'Button',
                          }),
                          Object(l.jsx)('div', {
                            style: { minHeight: '120px' },
                            children: Object(l.jsx)(i.B, {
                              id: 'collapseWidthExample',
                              horizontal: !0,
                              visible: s,
                              children: Object(l.jsx)(i.n, {
                                style: { width: '300px' },
                                children: Object(l.jsx)(i.o, {
                                  children:
                                    "This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(l.jsx)(i.A, {
              xs: 12,
              children: Object(l.jsxs)(i.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(i.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React Collapse' }),
                      ' ',
                      Object(l.jsx)('small', { children: ' multi target' }),
                    ],
                  }),
                  Object(l.jsxs)(i.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'A ',
                          Object(l.jsx)('code', { children: '<CButton>' }),
                          ' can show and hide multiple elements.',
                        ],
                      }),
                      Object(l.jsxs)(n.f, {
                        href: 'components/collapse#multiple-targets',
                        children: [
                          Object(l.jsx)(i.j, {
                            onClick: () => j(!a),
                            children: 'Toggle first element',
                          }),
                          Object(l.jsx)(i.j, {
                            onClick: () => d(!h),
                            children: 'Toggle second element',
                          }),
                          Object(l.jsx)(i.j, {
                            onClick: () => {
                              j(!a), d(!h)
                            },
                            children: 'Toggle both elements',
                          }),
                          Object(l.jsxs)(i.rb, {
                            children: [
                              Object(l.jsx)(i.A, {
                                xs: 6,
                                children: Object(l.jsx)(i.B, {
                                  visible: a,
                                  children: Object(l.jsx)(i.n, {
                                    className: 'mt-3',
                                    children: Object(l.jsx)(i.o, {
                                      children:
                                        'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
                                    }),
                                  }),
                                }),
                              }),
                              Object(l.jsx)(i.A, {
                                xs: 6,
                                children: Object(l.jsx)(i.B, {
                                  visible: h,
                                  children: Object(l.jsx)(i.n, {
                                    className: 'mt-3',
                                    children: Object(l.jsx)(i.o, {
                                      children:
                                        'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
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
//# sourceMappingURL=24.17acb70e.chunk.js.map
