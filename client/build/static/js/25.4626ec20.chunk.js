;(this['webpackJsonp@coreui/coreui-free-react-admin-template'] =
  this['webpackJsonp@coreui/coreui-free-react-admin-template'] || []).push([
  [25],
  {
    443: function (e, s, c) {
      c.r(s)
      c(1)
      var t = c(353),
        i = c(354),
        l = c(19)
      s.default = () =>
        Object(l.jsxs)(t.rb, {
          children: [
            Object(l.jsx)(t.A, {
              xs: 12,
              children: Object(l.jsx)(i.e, { name: 'List Group', href: 'components/list-group' }),
            }),
            Object(l.jsx)(t.A, {
              xs: 12,
              children: Object(l.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(t.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Basic example' }),
                    ],
                  }),
                  Object(l.jsxs)(t.o, {
                    children: [
                      Object(l.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children:
                          'The default list group is an unordered list with items and the proper CSS classes. Build upon it with the options that follow, or with your CSS as required.',
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/list-group',
                        children: Object(l.jsxs)(t.Z, {
                          children: [
                            Object(l.jsx)(t.ab, { children: 'Cras justo odio' }),
                            Object(l.jsx)(t.ab, { children: 'Dapibus ac facilisis in' }),
                            Object(l.jsx)(t.ab, { children: 'Morbi leo risus' }),
                            Object(l.jsx)(t.ab, { children: 'Porta ac consectetur ac' }),
                            Object(l.jsx)(t.ab, { children: 'Vestibulum at eros' }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(l.jsx)(t.A, {
              xs: 12,
              children: Object(l.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(t.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Active items' }),
                    ],
                  }),
                  Object(l.jsxs)(t.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Add ',
                          Object(l.jsx)('code', { children: 'active' }),
                          ' boolean property to a ',
                          Object(l.jsx)('code', { children: '<CListGroupItem>' }),
                          ' to show the current active selection.',
                        ],
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/list-group/#active-items',
                        children: Object(l.jsxs)(t.Z, {
                          children: [
                            Object(l.jsx)(t.ab, { active: !0, children: 'Cras justo odio' }),
                            Object(l.jsx)(t.ab, { children: 'Dapibus ac facilisis in' }),
                            Object(l.jsx)(t.ab, { children: 'Morbi leo risus' }),
                            Object(l.jsx)(t.ab, { children: 'Porta ac consectetur ac' }),
                            Object(l.jsx)(t.ab, { children: 'Vestibulum at eros' }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(l.jsx)(t.A, {
              xs: 12,
              children: Object(l.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(t.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Disabled items' }),
                    ],
                  }),
                  Object(l.jsxs)(t.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Add ',
                          Object(l.jsx)('code', { children: 'disabled' }),
                          ' boolean property to a ',
                          Object(l.jsx)('code', { children: '<CListGroupItem>' }),
                          ' to make it appear disabled.',
                        ],
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/list-group/#disabled-items',
                        children: Object(l.jsxs)(t.Z, {
                          children: [
                            Object(l.jsx)(t.ab, { disabled: !0, children: 'Cras justo odio' }),
                            Object(l.jsx)(t.ab, { children: 'Dapibus ac facilisis in' }),
                            Object(l.jsx)(t.ab, { children: 'Morbi leo risus' }),
                            Object(l.jsx)(t.ab, { children: 'Porta ac consectetur ac' }),
                            Object(l.jsx)(t.ab, { children: 'Vestibulum at eros' }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(l.jsx)(t.A, {
              xs: 12,
              children: Object(l.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(t.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Links and buttons' }),
                    ],
                  }),
                  Object(l.jsxs)(t.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Use ',
                          Object(l.jsx)('code', { children: '<a>' }),
                          's or ',
                          Object(l.jsx)('code', { children: '<button>' }),
                          's to create',
                          ' ',
                          Object(l.jsx)('em', { children: 'actionable' }),
                          ' list group items with hover, disabled, and active states by adding',
                          ' ',
                          Object(l.jsx)('code', { children: 'component="a|button"' }),
                          '. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like ',
                          Object(l.jsx)('code', { children: '<li>' }),
                          's or',
                          ' ',
                          Object(l.jsx)('code', { children: '<div>' }),
                          "s) don'tprovide a click or tap affordance.",
                        ],
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/list-group/#links-and-buttons',
                        children: Object(l.jsxs)(t.Z, {
                          children: [
                            Object(l.jsx)(t.ab, {
                              component: 'a',
                              href: '#',
                              active: !0,
                              children: 'Cras justo odio',
                            }),
                            Object(l.jsx)(t.ab, {
                              component: 'a',
                              href: '#',
                              children: 'Dapibus ac facilisis in',
                            }),
                            Object(l.jsx)(t.ab, {
                              component: 'a',
                              href: '#',
                              children: 'Morbi leo risus',
                            }),
                            Object(l.jsx)(t.ab, {
                              component: 'a',
                              href: '#',
                              children: 'Porta ac consectetur ac',
                            }),
                            Object(l.jsx)(t.ab, {
                              component: 'a',
                              href: '#',
                              disabled: !0,
                              children: 'Vestibulum at eros',
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(l.jsx)(t.A, {
              xs: 12,
              children: Object(l.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(t.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Flush' }),
                    ],
                  }),
                  Object(l.jsxs)(t.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Add ',
                          Object(l.jsx)('code', { children: 'flush' }),
                          ' boolean property to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).',
                        ],
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/list-group/#flush',
                        children: Object(l.jsxs)(t.Z, {
                          flush: !0,
                          children: [
                            Object(l.jsx)(t.ab, { children: 'Cras justo odio' }),
                            Object(l.jsx)(t.ab, { children: 'Dapibus ac facilisis in' }),
                            Object(l.jsx)(t.ab, { children: 'Morbi leo risus' }),
                            Object(l.jsx)(t.ab, { children: 'Porta ac consectetur ac' }),
                            Object(l.jsx)(t.ab, { children: 'Vestibulum at eros' }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(l.jsx)(t.A, {
              xs: 12,
              children: Object(l.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(t.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Horizontal' }),
                    ],
                  }),
                  Object(l.jsxs)(t.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Add ',
                          Object(l.jsx)('code', { children: 'layout="horizontal"' }),
                          ' to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant ',
                          Object(l.jsx)('code', {
                            children: '.layout="horizontal-{sm | md | lg | xl | xxl}"',
                          }),
                          ' ',
                          "to make a list group horizontal starting at that breakpoint's",
                          ' ',
                          Object(l.jsx)('code', { children: 'min-width' }),
                          '. Currently',
                          ' ',
                          Object(l.jsx)('strong', {
                            children:
                              'horizontal list groups cannot be combined with flush list groups.',
                          }),
                        ],
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/list-group/#flush',
                        children: ['', '-sm', '-md', '-lg', '-xl', '-xxl'].map((e, s) =>
                          Object(l.jsxs)(
                            t.Z,
                            {
                              className: 'mb-2',
                              layout: 'horizontal'.concat(e),
                              children: [
                                Object(l.jsx)(t.ab, { children: 'Cras justo odio' }),
                                Object(l.jsx)(t.ab, { children: 'Dapibus ac facilisis in' }),
                                Object(l.jsx)(t.ab, { children: 'Morbi leo risus' }),
                              ],
                            },
                            s,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(l.jsx)(t.A, {
              xs: 12,
              children: Object(l.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(t.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Contextual classes' }),
                    ],
                  }),
                  Object(l.jsxs)(t.o, {
                    children: [
                      Object(l.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children:
                          'Use contextual classes to style list items with a stateful background and color.',
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/list-group/#contextual-classes',
                        children: Object(l.jsxs)(t.Z, {
                          children: [
                            Object(l.jsx)(t.ab, { children: 'Dapibus ac facilisis in' }),
                            [
                              'primary',
                              'secondary',
                              'success',
                              'danger',
                              'warning',
                              'info',
                              'light',
                              'dark',
                            ].map((e, s) =>
                              Object(l.jsxs)(
                                t.ab,
                                { color: e, children: ['A simple ', e, ' list group item'] },
                                s,
                              ),
                            ),
                          ],
                        }),
                      }),
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Contextual classes also work with ',
                          Object(l.jsx)('code', { children: '<a>' }),
                          's or',
                          ' ',
                          Object(l.jsx)('code', { children: '<button>' }),
                          's. Note the addition of the hover styles here not present in the previous example. Also supported is the ',
                          Object(l.jsx)('code', { children: 'active' }),
                          ' state; apply it to indicate an active selection on a contextual list group item.',
                        ],
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/list-group/#contextual-classes',
                        children: Object(l.jsxs)(t.Z, {
                          children: [
                            Object(l.jsx)(t.ab, {
                              component: 'a',
                              href: '#',
                              children: 'Dapibus ac facilisis in',
                            }),
                            [
                              'primary',
                              'secondary',
                              'success',
                              'danger',
                              'warning',
                              'info',
                              'light',
                              'dark',
                            ].map((e, s) =>
                              Object(l.jsxs)(
                                t.ab,
                                {
                                  component: 'a',
                                  href: '#',
                                  color: e,
                                  children: ['A simple ', e, ' list group item'],
                                },
                                s,
                              ),
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(l.jsx)(t.A, {
              xs: 12,
              children: Object(l.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(t.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'With badges' }),
                    ],
                  }),
                  Object(l.jsxs)(t.o, {
                    children: [
                      Object(l.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children:
                          'Add badges to any list group item to show unread counts, activity, and more.',
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/list-group/#with-badges',
                        children: Object(l.jsxs)(t.Z, {
                          children: [
                            Object(l.jsxs)(t.ab, {
                              className: 'd-flex justify-content-between align-items-center',
                              children: [
                                'Cras justo odio',
                                Object(l.jsx)(t.i, {
                                  color: 'primary',
                                  shape: 'rounded-pill',
                                  children: '14',
                                }),
                              ],
                            }),
                            Object(l.jsxs)(t.ab, {
                              className: 'd-flex justify-content-between align-items-center',
                              children: [
                                'Dapibus ac facilisis in',
                                Object(l.jsx)(t.i, {
                                  color: 'primary',
                                  shape: 'rounded-pill',
                                  children: '2',
                                }),
                              ],
                            }),
                            Object(l.jsxs)(t.ab, {
                              className: 'd-flex justify-content-between align-items-center',
                              children: [
                                'Morbi leo risus',
                                Object(l.jsx)(t.i, {
                                  color: 'primary',
                                  shape: 'rounded-pill',
                                  children: '1',
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(l.jsx)(t.A, {
              xs: 12,
              children: Object(l.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(t.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Custom content' }),
                    ],
                  }),
                  Object(l.jsxs)(t.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Add nearly any HTML within, even for linked list groups like the one below, with the help of ',
                          Object(l.jsx)('a', {
                            href: 'https://coreui.io/docs/utilities/flex/',
                            children: 'flexbox utilities',
                          }),
                          '.',
                        ],
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/list-group/#custom-content',
                        children: Object(l.jsxs)(t.Z, {
                          children: [
                            Object(l.jsxs)(t.ab, {
                              component: 'a',
                              href: '#',
                              active: !0,
                              children: [
                                Object(l.jsxs)('div', {
                                  className: 'd-flex w-100 justify-content-between',
                                  children: [
                                    Object(l.jsx)('h5', {
                                      className: 'mb-1',
                                      children: 'List group item heading',
                                    }),
                                    Object(l.jsx)('small', { children: '3 days ago' }),
                                  ],
                                }),
                                Object(l.jsx)('p', {
                                  className: 'mb-1',
                                  children:
                                    'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
                                }),
                                Object(l.jsx)('small', { children: 'Donec id elit non mi porta.' }),
                              ],
                            }),
                            Object(l.jsxs)(t.ab, {
                              component: 'a',
                              href: '#',
                              children: [
                                Object(l.jsxs)('div', {
                                  className: 'd-flex w-100 justify-content-between',
                                  children: [
                                    Object(l.jsx)('h5', {
                                      className: 'mb-1',
                                      children: 'List group item heading',
                                    }),
                                    Object(l.jsx)('small', {
                                      className: 'text-medium-emphasis',
                                      children: '3 days ago',
                                    }),
                                  ],
                                }),
                                Object(l.jsx)('p', {
                                  className: 'mb-1',
                                  children:
                                    'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
                                }),
                                Object(l.jsx)('small', {
                                  className: 'text-medium-emphasis',
                                  children: 'Donec id elit non mi porta.',
                                }),
                              ],
                            }),
                            Object(l.jsxs)(t.ab, {
                              component: 'a',
                              href: '#',
                              children: [
                                Object(l.jsxs)('div', {
                                  className: 'd-flex w-100 justify-content-between',
                                  children: [
                                    Object(l.jsx)('h5', {
                                      className: 'mb-1',
                                      children: 'List group item heading',
                                    }),
                                    Object(l.jsx)('small', {
                                      className: 'text-medium-emphasis',
                                      children: '3 days ago',
                                    }),
                                  ],
                                }),
                                Object(l.jsx)('p', {
                                  className: 'mb-1',
                                  children:
                                    'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
                                }),
                                Object(l.jsx)('small', {
                                  className: 'text-medium-emphasis',
                                  children: 'Donec id elit non mi porta.',
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(l.jsx)(t.A, {
              xs: 12,
              children: Object(l.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(t.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React List Group' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Checkboxes and radios' }),
                    ],
                  }),
                  Object(l.jsxs)(t.o, {
                    children: [
                      Object(l.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children:
                          "Place CoreUI's checkboxes and radios within list group items and customize as needed.",
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/list-group/#checkboxes-and-radios',
                        children: Object(l.jsxs)(t.Z, {
                          children: [
                            Object(l.jsx)(t.ab, {
                              children: Object(l.jsx)(t.K, { label: 'Cras justo odio' }),
                            }),
                            Object(l.jsx)(t.ab, {
                              children: Object(l.jsx)(t.K, {
                                label: 'Dapibus ac facilisis in',
                                defaultChecked: !0,
                              }),
                            }),
                            Object(l.jsx)(t.ab, {
                              children: Object(l.jsx)(t.K, {
                                label: 'Morbi leo risus',
                                defaultChecked: !0,
                              }),
                            }),
                            Object(l.jsx)(t.ab, {
                              children: Object(l.jsx)(t.K, { label: 'orta ac consectetur ac' }),
                            }),
                            Object(l.jsx)(t.ab, {
                              children: Object(l.jsx)(t.K, { label: 'Vestibulum at eros' }),
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
//# sourceMappingURL=25.4626ec20.chunk.js.map
