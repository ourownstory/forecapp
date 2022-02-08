;(this['webpackJsonp@coreui/coreui-free-react-admin-template'] =
  this['webpackJsonp@coreui/coreui-free-react-admin-template'] || []).push([
  [41],
  {
    458: function (e, t, c) {
      c.r(t)
      c(1)
      var s = c(353),
        n = c(354),
        i = c(19)
      t.default = () =>
        Object(i.jsxs)(s.rb, {
          children: [
            Object(i.jsx)(s.A, {
              xs: 12,
              children: Object(i.jsx)(n.e, { name: 'Input Group', href: 'forms/input-group' }),
            }),
            Object(i.jsx)(s.A, {
              xs: 12,
              children: Object(i.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(i.jsxs)(s.r, {
                    children: [
                      Object(i.jsx)('strong', { children: 'React Input group' }),
                      ' ',
                      Object(i.jsx)('small', { children: 'Basic example' }),
                    ],
                  }),
                  Object(i.jsxs)(s.o, {
                    children: [
                      Object(i.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place ',
                          Object(i.jsx)('code', { children: '<CFormLabel>' }),
                          's outside the input group.',
                        ],
                      }),
                      Object(i.jsxs)(n.f, {
                        href: 'forms/input-group',
                        children: [
                          Object(i.jsxs)(s.W, {
                            className: 'mb-3',
                            children: [
                              Object(i.jsx)(s.X, { id: 'basic-addon1', children: '@' }),
                              Object(i.jsx)(s.N, {
                                placeholder: 'Username',
                                'aria-label': 'Username',
                                'aria-describedby': 'basic-addon1',
                              }),
                            ],
                          }),
                          Object(i.jsxs)(s.W, {
                            className: 'mb-3',
                            children: [
                              Object(i.jsx)(s.N, {
                                placeholder: "Recipient's username",
                                'aria-label': "Recipient's username",
                                'aria-describedby': 'basic-addon2',
                              }),
                              Object(i.jsx)(s.X, { id: 'basic-addon2', children: '@example.com' }),
                            ],
                          }),
                          Object(i.jsx)(s.O, { htmlFor: 'basic-url', children: 'Your vanity URL' }),
                          Object(i.jsxs)(s.W, {
                            className: 'mb-3',
                            children: [
                              Object(i.jsx)(s.X, {
                                id: 'basic-addon3',
                                children: 'https://example.com/users/',
                              }),
                              Object(i.jsx)(s.N, {
                                id: 'basic-url',
                                'aria-describedby': 'basic-addon3',
                              }),
                            ],
                          }),
                          Object(i.jsxs)(s.W, {
                            className: 'mb-3',
                            children: [
                              Object(i.jsx)(s.X, { children: '$' }),
                              Object(i.jsx)(s.N, {
                                'aria-label': 'Amount (to the nearest dollar)',
                              }),
                              Object(i.jsx)(s.X, { children: '.00' }),
                            ],
                          }),
                          Object(i.jsxs)(s.W, {
                            className: 'mb-3',
                            children: [
                              Object(i.jsx)(s.N, {
                                placeholder: 'Username',
                                'aria-label': 'Username',
                              }),
                              Object(i.jsx)(s.X, { children: '@' }),
                              Object(i.jsx)(s.N, { placeholder: 'Server', 'aria-label': 'Server' }),
                            ],
                          }),
                          Object(i.jsxs)(s.W, {
                            children: [
                              Object(i.jsx)(s.X, { children: 'With textarea' }),
                              Object(i.jsx)(s.S, { 'aria-label': 'With textarea' }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(i.jsx)(s.A, {
              xs: 12,
              children: Object(i.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(i.jsxs)(s.r, {
                    children: [
                      Object(i.jsx)('strong', { children: 'React Input group' }),
                      ' ',
                      Object(i.jsx)('small', { children: 'Wrapping' }),
                    ],
                  }),
                  Object(i.jsxs)(s.o, {
                    children: [
                      Object(i.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Input groups wrap by default via ',
                          Object(i.jsx)('code', { children: 'flex-wrap: wrap' }),
                          ' in order to accommodate custom form field validation within an input group. You may disable this with',
                          ' ',
                          Object(i.jsx)('code', { children: '.flex-nowrap' }),
                          '.',
                        ],
                      }),
                      Object(i.jsx)(n.f, {
                        href: 'forms/input-group#wrapping',
                        children: Object(i.jsxs)(s.W, {
                          className: 'flex-nowrap',
                          children: [
                            Object(i.jsx)(s.X, { id: 'addon-wrapping', children: '@' }),
                            Object(i.jsx)(s.N, {
                              placeholder: 'Username',
                              'aria-label': 'Username',
                              'aria-describedby': 'addon-wrapping',
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(i.jsx)(s.A, {
              xs: 12,
              children: Object(i.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(i.jsxs)(s.r, {
                    children: [
                      Object(i.jsx)('strong', { children: 'React Input group' }),
                      ' ',
                      Object(i.jsx)('small', { children: 'Sizing' }),
                    ],
                  }),
                  Object(i.jsxs)(s.o, {
                    children: [
                      Object(i.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Add the relative form sizing classes to the ',
                          Object(i.jsx)('code', { children: '<CInputGroup>' }),
                          ' itself and contents within will automatically resize\u2014no need for repeating the form control size classes on each element.',
                        ],
                      }),
                      Object(i.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children: Object(i.jsx)('strong', {
                          children: "Sizing on the individual input group elements isn'tsupported.",
                        }),
                      }),
                      Object(i.jsxs)(n.f, {
                        href: 'forms/input-group#sizing',
                        children: [
                          Object(i.jsxs)(s.W, {
                            size: 'sm',
                            className: 'mb-3',
                            children: [
                              Object(i.jsx)(s.X, { id: 'inputGroup-sizing-sm', children: 'Small' }),
                              Object(i.jsx)(s.N, {
                                'aria-label': 'Sizing example input',
                                'aria-describedby': 'inputGroup-sizing-sm',
                              }),
                            ],
                          }),
                          Object(i.jsxs)(s.W, {
                            className: 'mb-3',
                            children: [
                              Object(i.jsx)(s.X, {
                                id: 'inputGroup-sizing-default',
                                children: 'Default',
                              }),
                              Object(i.jsx)(s.N, {
                                'aria-label': 'Sizing example input',
                                'aria-describedby': 'inputGroup-sizing-default',
                              }),
                            ],
                          }),
                          Object(i.jsxs)(s.W, {
                            size: 'lg',
                            children: [
                              Object(i.jsx)(s.X, { id: 'inputGroup-sizing-lg', children: 'Large' }),
                              Object(i.jsx)(s.N, {
                                'aria-label': 'Sizing example input',
                                'aria-describedby': 'inputGroup-sizing-lg',
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
            Object(i.jsx)(s.A, {
              xs: 12,
              children: Object(i.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(i.jsxs)(s.r, {
                    children: [
                      Object(i.jsx)('strong', { children: 'React Input group' }),
                      ' ',
                      Object(i.jsx)('small', { children: 'Checkboxes and radios' }),
                    ],
                  }),
                  Object(i.jsxs)(s.o, {
                    children: [
                      Object(i.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children:
                          "Place any checkbox or radio option within an input group's addon instead of text.",
                      }),
                      Object(i.jsxs)(n.f, {
                        href: 'forms/input-group#checkboxes-and-radios',
                        children: [
                          Object(i.jsxs)(s.W, {
                            className: 'mb-3',
                            children: [
                              Object(i.jsx)(s.X, {
                                children: Object(i.jsx)(s.K, {
                                  type: 'checkbox',
                                  value: '',
                                  'aria-label': 'Checkbox for following text input',
                                }),
                              }),
                              Object(i.jsx)(s.N, { 'aria-label': 'Text input with checkbox' }),
                            ],
                          }),
                          Object(i.jsxs)(s.W, {
                            children: [
                              Object(i.jsx)(s.X, {
                                children: Object(i.jsx)(s.K, {
                                  type: 'radio',
                                  value: '',
                                  'aria-label': 'Radio button for following text input',
                                }),
                              }),
                              Object(i.jsx)(s.N, { 'aria-label': 'Text input with radio button' }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(i.jsx)(s.A, {
              xs: 12,
              children: Object(i.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(i.jsxs)(s.r, {
                    children: [
                      Object(i.jsx)('strong', { children: 'React Input group' }),
                      ' ',
                      Object(i.jsx)('small', { children: 'Multiple inputs' }),
                    ],
                  }),
                  Object(i.jsxs)(s.o, {
                    children: [
                      Object(i.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'While multiple ',
                          Object(i.jsx)('code', { children: '<CFormInput>' }),
                          's are supported visually, validation styles are only available for input groups with a single',
                          ' ',
                          Object(i.jsx)('code', { children: '<CFormInput>' }),
                          '.',
                        ],
                      }),
                      Object(i.jsx)(n.f, {
                        href: 'forms/input-group#multiple-inputs',
                        children: Object(i.jsxs)(s.W, {
                          children: [
                            Object(i.jsx)(s.X, { children: 'First and last name' }),
                            Object(i.jsx)(s.N, { 'aria-label': 'First name' }),
                            Object(i.jsx)(s.N, { 'aria-label': 'Last name' }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(i.jsx)(s.A, {
              xs: 12,
              children: Object(i.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(i.jsxs)(s.r, {
                    children: [
                      Object(i.jsx)('strong', { children: 'React Input group' }),
                      ' ',
                      Object(i.jsx)('small', { children: 'Multiple addons' }),
                    ],
                  }),
                  Object(i.jsxs)(s.o, {
                    children: [
                      Object(i.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children:
                          'Multiple add-ons are supported and can be mixed with checkbox and radio input versions..',
                      }),
                      Object(i.jsxs)(n.f, {
                        href: 'forms/input-group#multiple-addons',
                        children: [
                          Object(i.jsxs)(s.W, {
                            className: 'mb-3',
                            children: [
                              Object(i.jsx)(s.X, { children: '$' }),
                              Object(i.jsx)(s.X, { children: '0.00' }),
                              Object(i.jsx)(s.N, {
                                'aria-label': 'Dollar amount (with dot and two decimal places)',
                              }),
                            ],
                          }),
                          Object(i.jsxs)(s.W, {
                            children: [
                              Object(i.jsx)(s.N, {
                                'aria-label': 'Dollar amount (with dot and two decimal places)',
                              }),
                              Object(i.jsx)(s.X, { children: '$' }),
                              Object(i.jsx)(s.X, { children: '0.00' }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(i.jsx)(s.A, {
              xs: 12,
              children: Object(i.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(i.jsxs)(s.r, {
                    children: [
                      Object(i.jsx)('strong', { children: 'React Input group' }),
                      ' ',
                      Object(i.jsx)('small', { children: 'Button addons' }),
                    ],
                  }),
                  Object(i.jsxs)(s.o, {
                    children: [
                      Object(i.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children:
                          'Multiple add-ons are supported and can be mixed with checkbox and radio input versions..',
                      }),
                      Object(i.jsxs)(n.f, {
                        href: 'forms/input-group#button-addons',
                        children: [
                          Object(i.jsxs)(s.W, {
                            className: 'mb-3',
                            children: [
                              Object(i.jsx)(s.j, {
                                type: 'button',
                                color: 'secondary',
                                variant: 'outline',
                                id: 'button-addon1',
                                children: 'Button',
                              }),
                              Object(i.jsx)(s.N, {
                                placeholder: '',
                                'aria-label': 'Example text with button addon',
                                'aria-describedby': 'button-addon1',
                              }),
                            ],
                          }),
                          Object(i.jsxs)(s.W, {
                            className: 'mb-3',
                            children: [
                              Object(i.jsx)(s.N, {
                                placeholder: "Recipient's username",
                                'aria-label': "Recipient's username",
                                'aria-describedby': 'button-addon2',
                              }),
                              Object(i.jsx)(s.j, {
                                type: 'button',
                                color: 'secondary',
                                variant: 'outline',
                                id: 'button-addon2',
                                children: 'Button',
                              }),
                            ],
                          }),
                          Object(i.jsxs)(s.W, {
                            className: 'mb-3',
                            children: [
                              Object(i.jsx)(s.j, {
                                type: 'button',
                                color: 'secondary',
                                variant: 'outline',
                                children: 'Button',
                              }),
                              Object(i.jsx)(s.j, {
                                type: 'button',
                                color: 'secondary',
                                variant: 'outline',
                                children: 'Button',
                              }),
                              Object(i.jsx)(s.N, {
                                placeholder: '',
                                'aria-label': 'Example text with two button addons',
                              }),
                            ],
                          }),
                          Object(i.jsxs)(s.W, {
                            children: [
                              Object(i.jsx)(s.N, {
                                placeholder: "Recipient's username",
                                'aria-label': "Recipient's username with two button addons",
                              }),
                              Object(i.jsx)(s.j, {
                                type: 'button',
                                color: 'secondary',
                                variant: 'outline',
                                children: 'Button',
                              }),
                              Object(i.jsx)(s.j, {
                                type: 'button',
                                color: 'secondary',
                                variant: 'outline',
                                children: 'Button',
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
            Object(i.jsx)(s.A, {
              xs: 12,
              children: Object(i.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(i.jsxs)(s.r, {
                    children: [
                      Object(i.jsx)('strong', { children: 'React Input group' }),
                      ' ',
                      Object(i.jsx)('small', { children: 'Buttons with dropdowns' }),
                    ],
                  }),
                  Object(i.jsx)(s.o, {
                    children: Object(i.jsxs)(n.f, {
                      href: 'forms/input-group#buttons-with-dropdowns',
                      children: [
                        Object(i.jsxs)(s.W, {
                          className: 'mb-3',
                          children: [
                            Object(i.jsxs)(s.D, {
                              variant: 'input-group',
                              children: [
                                Object(i.jsx)(s.I, {
                                  color: 'secondary',
                                  variant: 'outline',
                                  children: 'Dropdown',
                                }),
                                Object(i.jsxs)(s.H, {
                                  children: [
                                    Object(i.jsx)(s.G, { href: '#', children: 'Action' }),
                                    Object(i.jsx)(s.G, { href: '#', children: 'Another action' }),
                                    Object(i.jsx)(s.G, {
                                      href: '#',
                                      children: 'Something else here',
                                    }),
                                    Object(i.jsx)(s.E, {}),
                                    Object(i.jsx)(s.G, { href: '#', children: 'Separated link' }),
                                  ],
                                }),
                              ],
                            }),
                            Object(i.jsx)(s.N, { 'aria-label': 'Text input with dropdown button' }),
                          ],
                        }),
                        Object(i.jsxs)(s.W, {
                          className: 'mb-3',
                          children: [
                            Object(i.jsx)(s.N, { 'aria-label': 'Text input with dropdown button' }),
                            Object(i.jsxs)(s.D, {
                              alignment: 'end',
                              variant: 'input-group',
                              children: [
                                Object(i.jsx)(s.I, {
                                  color: 'secondary',
                                  variant: 'outline',
                                  children: 'Dropdown',
                                }),
                                Object(i.jsxs)(s.H, {
                                  children: [
                                    Object(i.jsx)(s.G, { href: '#', children: 'Action' }),
                                    Object(i.jsx)(s.G, { href: '#', children: 'Another action' }),
                                    Object(i.jsx)(s.G, {
                                      href: '#',
                                      children: 'Something else here',
                                    }),
                                    Object(i.jsx)(s.E, {}),
                                    Object(i.jsx)(s.G, { href: '#', children: 'Separated link' }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(i.jsxs)(s.W, {
                          children: [
                            Object(i.jsxs)(s.D, {
                              variant: 'input-group',
                              children: [
                                Object(i.jsx)(s.I, {
                                  color: 'secondary',
                                  variant: 'outline',
                                  children: 'Dropdown',
                                }),
                                Object(i.jsxs)(s.H, {
                                  children: [
                                    Object(i.jsx)(s.G, { href: '#', children: 'Action' }),
                                    Object(i.jsx)(s.G, { href: '#', children: 'Another action' }),
                                    Object(i.jsx)(s.G, {
                                      href: '#',
                                      children: 'Something else here',
                                    }),
                                    Object(i.jsx)(s.E, {}),
                                    Object(i.jsx)(s.G, { href: '#', children: 'Separated link' }),
                                  ],
                                }),
                              ],
                            }),
                            Object(i.jsx)(s.N, {
                              'aria-label': 'Text input with 2 dropdown buttons',
                            }),
                            Object(i.jsxs)(s.D, {
                              alignment: 'end',
                              variant: 'input-group',
                              children: [
                                Object(i.jsx)(s.I, {
                                  color: 'secondary',
                                  variant: 'outline',
                                  children: 'Dropdown',
                                }),
                                Object(i.jsxs)(s.H, {
                                  children: [
                                    Object(i.jsx)(s.G, { href: '#', children: 'Action' }),
                                    Object(i.jsx)(s.G, { href: '#', children: 'Another action' }),
                                    Object(i.jsx)(s.G, {
                                      href: '#',
                                      children: 'Something else here',
                                    }),
                                    Object(i.jsx)(s.E, {}),
                                    Object(i.jsx)(s.G, { href: '#', children: 'Separated link' }),
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
              }),
            }),
            Object(i.jsx)(s.A, {
              xs: 12,
              children: Object(i.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(i.jsxs)(s.r, {
                    children: [
                      Object(i.jsx)('strong', { children: 'React Input group' }),
                      ' ',
                      Object(i.jsx)('small', { children: 'Segmented buttons' }),
                    ],
                  }),
                  Object(i.jsx)(s.o, {
                    children: Object(i.jsxs)(n.f, {
                      href: 'forms/input-group#segmented-buttons',
                      children: [
                        Object(i.jsxs)(s.W, {
                          className: 'mb-3',
                          children: [
                            Object(i.jsxs)(s.D, {
                              variant: 'input-group',
                              children: [
                                Object(i.jsx)(s.j, {
                                  type: 'button',
                                  color: 'secondary',
                                  variant: 'outline',
                                  children: 'Action',
                                }),
                                Object(i.jsx)(s.I, {
                                  color: 'secondary',
                                  variant: 'outline',
                                  split: !0,
                                }),
                                Object(i.jsxs)(s.H, {
                                  children: [
                                    Object(i.jsx)(s.G, { href: '#', children: 'Action' }),
                                    Object(i.jsx)(s.G, { href: '#', children: 'Another action' }),
                                    Object(i.jsx)(s.G, {
                                      href: '#',
                                      children: 'Something else here',
                                    }),
                                    Object(i.jsx)(s.E, {}),
                                    Object(i.jsx)(s.G, { href: '#', children: 'Separated link' }),
                                  ],
                                }),
                              ],
                            }),
                            Object(i.jsx)(s.N, {
                              'aria-label': 'Text input with segmented dropdown button',
                            }),
                          ],
                        }),
                        Object(i.jsxs)(s.W, {
                          children: [
                            Object(i.jsx)(s.N, {
                              'aria-label': 'Text input with segmented dropdown button',
                            }),
                            Object(i.jsxs)(s.D, {
                              alignment: 'end',
                              variant: 'input-group',
                              children: [
                                Object(i.jsx)(s.j, {
                                  type: 'button',
                                  color: 'secondary',
                                  variant: 'outline',
                                  children: 'Action',
                                }),
                                Object(i.jsx)(s.I, {
                                  color: 'secondary',
                                  variant: 'outline',
                                  split: !0,
                                }),
                                Object(i.jsxs)(s.H, {
                                  children: [
                                    Object(i.jsx)(s.G, { href: '#', children: 'Action' }),
                                    Object(i.jsx)(s.G, { href: '#', children: 'Another action' }),
                                    Object(i.jsx)(s.G, {
                                      href: '#',
                                      children: 'Something else here',
                                    }),
                                    Object(i.jsx)(s.E, {}),
                                    Object(i.jsx)(s.G, { href: '#', children: 'Separated link' }),
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
              }),
            }),
            Object(i.jsx)(s.A, {
              xs: 12,
              children: Object(i.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(i.jsxs)(s.r, {
                    children: [
                      Object(i.jsx)('strong', { children: 'React Input group' }),
                      ' ',
                      Object(i.jsx)('small', { children: 'Custom select' }),
                    ],
                  }),
                  Object(i.jsx)(s.o, {
                    children: Object(i.jsxs)(n.f, {
                      href: 'forms/input-group#custom-select',
                      children: [
                        Object(i.jsxs)(s.W, {
                          className: 'mb-3',
                          children: [
                            Object(i.jsx)(s.X, {
                              component: 'label',
                              htmlFor: 'inputGroupSelect01',
                              children: 'Options',
                            }),
                            Object(i.jsxs)(s.Q, {
                              id: 'inputGroupSelect01',
                              children: [
                                Object(i.jsx)('option', { children: 'Choose...' }),
                                Object(i.jsx)('option', { value: '1', children: 'One' }),
                                Object(i.jsx)('option', { value: '2', children: 'Two' }),
                                Object(i.jsx)('option', { value: '3', children: 'Three' }),
                              ],
                            }),
                          ],
                        }),
                        Object(i.jsxs)(s.W, {
                          className: 'mb-3',
                          children: [
                            Object(i.jsxs)(s.Q, {
                              id: 'inputGroupSelect02',
                              children: [
                                Object(i.jsx)('option', { children: 'Choose...' }),
                                Object(i.jsx)('option', { value: '1', children: 'One' }),
                                Object(i.jsx)('option', { value: '2', children: 'Two' }),
                                Object(i.jsx)('option', { value: '3', children: 'Three' }),
                              ],
                            }),
                            Object(i.jsx)(s.X, {
                              component: 'label',
                              htmlFor: 'inputGroupSelect02',
                              children: 'Options',
                            }),
                          ],
                        }),
                        Object(i.jsxs)(s.W, {
                          className: 'mb-3',
                          children: [
                            Object(i.jsx)(s.j, {
                              type: 'button',
                              color: 'secondary',
                              variant: 'outline',
                              children: 'Button',
                            }),
                            Object(i.jsxs)(s.Q, {
                              id: 'inputGroupSelect03',
                              'aria-label': 'Example select with button addon',
                              children: [
                                Object(i.jsx)('option', { children: 'Choose...' }),
                                Object(i.jsx)('option', { value: '1', children: 'One' }),
                                Object(i.jsx)('option', { value: '2', children: 'Two' }),
                                Object(i.jsx)('option', { value: '3', children: 'Three' }),
                              ],
                            }),
                          ],
                        }),
                        Object(i.jsxs)(s.W, {
                          children: [
                            Object(i.jsxs)(s.Q, {
                              id: 'inputGroupSelect04',
                              'aria-label': 'Example select with button addon',
                              children: [
                                Object(i.jsx)('option', { children: 'Choose...' }),
                                Object(i.jsx)('option', { value: '1', children: 'One' }),
                                Object(i.jsx)('option', { value: '2', children: 'Two' }),
                                Object(i.jsx)('option', { value: '3', children: 'Three' }),
                              ],
                            }),
                            Object(i.jsx)(s.j, {
                              type: 'button',
                              color: 'secondary',
                              variant: 'outline',
                              children: 'Button',
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            Object(i.jsx)(s.A, {
              xs: 12,
              children: Object(i.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(i.jsxs)(s.r, {
                    children: [
                      Object(i.jsx)('strong', { children: 'React Input group' }),
                      ' ',
                      Object(i.jsx)('small', { children: 'Custom file input' }),
                    ],
                  }),
                  Object(i.jsx)(s.o, {
                    children: Object(i.jsxs)(n.f, {
                      href: 'forms/input-group#custom-file-input',
                      children: [
                        Object(i.jsxs)(s.W, {
                          className: 'mb-3',
                          children: [
                            Object(i.jsx)(s.X, {
                              component: 'label',
                              htmlFor: 'inputGroupFile01',
                              children: 'Upload',
                            }),
                            Object(i.jsx)(s.N, { type: 'file', id: 'inputGroupFile01' }),
                          ],
                        }),
                        Object(i.jsxs)(s.W, {
                          className: 'mb-3',
                          children: [
                            Object(i.jsx)(s.N, { type: 'file', id: 'inputGroupFile02' }),
                            Object(i.jsx)(s.X, {
                              component: 'label',
                              htmlFor: 'inputGroupFile02',
                              children: 'Upload',
                            }),
                          ],
                        }),
                        Object(i.jsxs)(s.W, {
                          className: 'mb-3',
                          children: [
                            Object(i.jsx)(s.j, {
                              type: 'button',
                              color: 'secondary',
                              variant: 'outline',
                              id: 'inputGroupFileAddon03',
                              children: 'Button',
                            }),
                            Object(i.jsx)(s.N, {
                              type: 'file',
                              id: 'inputGroupFile03',
                              'aria-describedby': 'inputGroupFileAddon03',
                              'aria-label': 'Upload',
                            }),
                          ],
                        }),
                        Object(i.jsxs)(s.W, {
                          children: [
                            Object(i.jsx)(s.N, {
                              type: 'file',
                              id: 'inputGroupFile04',
                              'aria-describedby': 'inputGroupFileAddon04',
                              'aria-label': 'Upload',
                            }),
                            Object(i.jsx)(s.j, {
                              type: 'button',
                              color: 'secondary',
                              variant: 'outline',
                              id: 'inputGroupFileAddon04',
                              children: 'Button',
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        })
    },
  },
])
//# sourceMappingURL=41.6f3ffdc3.chunk.js.map
