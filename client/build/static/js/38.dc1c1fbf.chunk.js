;(this['webpackJsonp@coreui/coreui-free-react-admin-template'] =
  this['webpackJsonp@coreui/coreui-free-react-admin-template'] || []).push([
  [38],
  {
    455: function (e, c, s) {
      s.r(c)
      s(1)
      var t = s(353),
        i = s(354),
        l = s(19)
      c.default = () =>
        Object(l.jsxs)(t.rb, {
          children: [
            Object(l.jsx)(t.A, {
              xs: 12,
              children: Object(l.jsx)(i.e, {
                name: 'Check and Radios',
                href: 'forms/checks-radios',
              }),
            }),
            Object(l.jsx)(t.A, {
              xs: 12,
              children: Object(l.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsx)(t.r, {
                    children: Object(l.jsx)('strong', { children: 'React Checkbox' }),
                  }),
                  Object(l.jsx)(t.o, {
                    children: Object(l.jsxs)(i.f, {
                      href: 'forms/checks-radios',
                      children: [
                        Object(l.jsx)(t.K, { id: 'flexCheckDefault', label: 'Default checkbox' }),
                        Object(l.jsx)(t.K, {
                          id: 'flexCheckChecked',
                          label: 'Checked checkbox',
                          defaultChecked: !0,
                        }),
                      ],
                    }),
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
                      Object(l.jsx)('strong', { children: 'React Checkbox' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Disabled' }),
                    ],
                  }),
                  Object(l.jsxs)(t.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Add the ',
                          Object(l.jsx)('code', { children: 'disabled' }),
                          ' attribute and the associated ',
                          Object(l.jsx)('code', { children: '<label>' }),
                          "s are automatically styled to match with a lighter color to help indicate the input's state.",
                        ],
                      }),
                      Object(l.jsxs)(i.f, {
                        href: 'forms/checks-radios#disabled',
                        children: [
                          Object(l.jsx)(t.K, { label: 'Disabled checkbox', disabled: !0 }),
                          Object(l.jsx)(t.K, {
                            label: 'Disabled checked checkbox',
                            defaultChecked: !0,
                            disabled: !0,
                          }),
                        ],
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
                  Object(l.jsx)(t.r, {
                    children: Object(l.jsx)('strong', { children: 'React Radio' }),
                  }),
                  Object(l.jsxs)(t.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Add the ',
                          Object(l.jsx)('code', { children: 'disabled' }),
                          ' attribute and the associated ',
                          Object(l.jsx)('code', { children: '<label>' }),
                          "s are automatically styled to match with a lighter color to help indicate the input's state.",
                        ],
                      }),
                      Object(l.jsxs)(i.f, {
                        href: 'forms/checks-radios#radios',
                        children: [
                          Object(l.jsx)(t.K, {
                            type: 'radio',
                            name: 'flexRadioDefault',
                            id: 'flexRadioDefault1',
                            label: 'Default radio',
                          }),
                          Object(l.jsx)(t.K, {
                            type: 'radio',
                            name: 'flexRadioDefault',
                            id: 'flexRadioDefault2',
                            label: 'Checked radio',
                            defaultChecked: !0,
                          }),
                        ],
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
                      Object(l.jsx)('strong', { children: 'React Radio' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Disabled' }),
                    ],
                  }),
                  Object(l.jsx)(t.o, {
                    children: Object(l.jsxs)(i.f, {
                      href: 'forms/checks-radios#disabled-1',
                      children: [
                        Object(l.jsx)(t.K, {
                          type: 'radio',
                          name: 'flexRadioDisabled',
                          id: 'flexRadioDisabled',
                          label: 'Disabled radio',
                          disabled: !0,
                        }),
                        Object(l.jsx)(t.K, {
                          type: 'radio',
                          name: 'flexRadioDisabled',
                          id: 'flexRadioCheckedDisabled',
                          label: 'Disabled checked radio',
                          defaultChecked: !0,
                          disabled: !0,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            Object(l.jsx)(t.A, {
              xs: 12,
              children: Object(l.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsx)(t.r, {
                    children: Object(l.jsx)('strong', { children: 'React Switches' }),
                  }),
                  Object(l.jsxs)(t.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'A switch has the markup of a custom checkbox but uses the ',
                          Object(l.jsx)('code', { children: 'switch' }),
                          ' boolean properly to render a toggle switch. Switches also support the ',
                          Object(l.jsx)('code', { children: 'disabled' }),
                          ' ',
                          'attribute.',
                        ],
                      }),
                      Object(l.jsxs)(i.f, {
                        href: 'forms/checks-radios#switches',
                        children: [
                          Object(l.jsx)(t.R, {
                            label: 'Default switch checkbox input',
                            id: 'formSwitchCheckDefault',
                          }),
                          Object(l.jsx)(t.R, {
                            label: 'Checked switch checkbox input',
                            id: 'formSwitchCheckChecked',
                            defaultChecked: !0,
                          }),
                          Object(l.jsx)(t.R, {
                            label: 'Disabled switch checkbox input',
                            id: 'formSwitchCheckDisabled',
                            disabled: !0,
                          }),
                          Object(l.jsx)(t.R, {
                            label: 'Disabled checked switch checkbox input',
                            id: 'formSwitchCheckCheckedDisabled',
                            defaultChecked: !0,
                            disabled: !0,
                          }),
                        ],
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
                      Object(l.jsx)('strong', { children: 'React Switches' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Sizes' }),
                    ],
                  }),
                  Object(l.jsx)(t.o, {
                    children: Object(l.jsxs)(i.f, {
                      href: 'forms/checks-radios#sizes',
                      children: [
                        Object(l.jsx)(t.R, {
                          label: 'Default switch checkbox input',
                          id: 'formSwitchCheckDefault',
                        }),
                        Object(l.jsx)(t.R, {
                          size: 'lg',
                          label: 'Large switch checkbox input',
                          id: 'formSwitchCheckDefaultLg',
                        }),
                        Object(l.jsx)(t.R, {
                          size: 'xl',
                          label: 'Extra large switch checkbox input',
                          id: 'formSwitchCheckDefaultXL',
                        }),
                      ],
                    }),
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
                      Object(l.jsx)('strong', { children: 'React Checks and Radios' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Default layout (stacked)' }),
                    ],
                  }),
                  Object(l.jsxs)(t.o, {
                    children: [
                      Object(l.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children:
                          'By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced.',
                      }),
                      Object(l.jsxs)(i.f, {
                        href: 'forms/checks-radios#default-stacked',
                        children: [
                          Object(l.jsx)(t.K, { id: 'defaultCheck1', label: 'Default checkbox' }),
                          Object(l.jsx)(t.K, {
                            id: 'defaultCheck2',
                            label: 'Disabled checkbox',
                            disabled: !0,
                          }),
                        ],
                      }),
                      Object(l.jsxs)(i.f, {
                        href: 'forms/checks-radios#default-stacked',
                        children: [
                          Object(l.jsx)(t.K, {
                            type: 'radio',
                            name: 'exampleRadios',
                            id: 'exampleRadios1',
                            value: 'option1',
                            label: 'Default radio',
                            defaultChecked: !0,
                          }),
                          Object(l.jsx)(t.K, {
                            type: 'radio',
                            name: 'exampleRadios',
                            id: 'exampleRadios2',
                            value: 'option2',
                            label: 'Second default radio',
                          }),
                          Object(l.jsx)(t.K, {
                            type: 'radio',
                            name: 'exampleRadios',
                            id: 'exampleRadios3',
                            value: 'option3',
                            label: 'Disabled radio',
                            disabled: !0,
                          }),
                        ],
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
                      Object(l.jsx)('strong', { children: 'React Checks and Radios' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Inline' }),
                    ],
                  }),
                  Object(l.jsxs)(t.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Group checkboxes or radios on the same horizontal row by adding ',
                          Object(l.jsx)('code', { children: 'inline' }),
                          ' ',
                          'boolean property to any ',
                          Object(l.jsx)('code', { children: '<CFormCheck>' }),
                          '.',
                        ],
                      }),
                      Object(l.jsxs)(i.f, {
                        href: 'forms/checks-radios#inline',
                        children: [
                          Object(l.jsx)(t.K, {
                            inline: !0,
                            id: 'inlineCheckbox1',
                            value: 'option1',
                            label: '1',
                          }),
                          Object(l.jsx)(t.K, {
                            inline: !0,
                            id: 'inlineCheckbox2',
                            value: 'option2',
                            label: '2',
                          }),
                          Object(l.jsx)(t.K, {
                            inline: !0,
                            id: 'inlineCheckbox3',
                            value: 'option3',
                            label: '3 (disabled)',
                            disabled: !0,
                          }),
                        ],
                      }),
                      Object(l.jsxs)(i.f, {
                        href: 'forms/checks-radios#inline',
                        children: [
                          Object(l.jsx)(t.K, {
                            inline: !0,
                            type: 'radio',
                            name: 'inlineRadioOptions',
                            id: 'inlineCheckbox1',
                            value: 'option1',
                            label: '1',
                          }),
                          Object(l.jsx)(t.K, {
                            inline: !0,
                            type: 'radio',
                            name: 'inlineRadioOptions',
                            id: 'inlineCheckbox2',
                            value: 'option2',
                            label: '2',
                          }),
                          Object(l.jsx)(t.K, {
                            inline: !0,
                            type: 'radio',
                            name: 'inlineRadioOptions',
                            id: 'inlineCheckbox3',
                            value: 'option3',
                            label: '3 (disabled)',
                            disabled: !0,
                          }),
                        ],
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
                      Object(l.jsx)('strong', { children: 'React Checks and Radios' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Without labels' }),
                    ],
                  }),
                  Object(l.jsxs)(t.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Remember to still provide some form of accessible name for assistive technologies (for instance, using ',
                          Object(l.jsx)('code', { children: 'aria-label' }),
                          ').',
                        ],
                      }),
                      Object(l.jsxs)(i.f, {
                        href: 'forms/checks-radios#without-labels',
                        children: [
                          Object(l.jsx)('div', {
                            children: Object(l.jsx)(t.K, {
                              id: 'checkboxNoLabel',
                              value: '',
                              'aria-label': '...',
                            }),
                          }),
                          Object(l.jsx)('div', {
                            children: Object(l.jsx)(t.K, {
                              type: 'radio',
                              name: 'radioNoLabel',
                              id: 'radioNoLabel',
                              value: '',
                              'aria-label': '...',
                            }),
                          }),
                        ],
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
                  Object(l.jsx)(t.r, {
                    children: Object(l.jsx)('strong', { children: 'Toggle buttons' }),
                  }),
                  Object(l.jsxs)(t.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Create button-like checkboxes and radio buttons by using ',
                          Object(l.jsx)('code', { children: 'button' }),
                          ' boolean property on the ',
                          Object(l.jsx)('code', { children: '<CFormCheck>' }),
                          ' component. These toggle buttons can further be grouped in a button group if needed.',
                        ],
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'forms/checks-radios#toggle-buttons',
                        children: Object(l.jsx)(t.K, {
                          button: { color: 'primary ' },
                          id: 'btn-check',
                          autoComplete: 'off',
                          label: 'Single toggle',
                        }),
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'forms/checks-radios#toggle-buttons',
                        children: Object(l.jsx)(t.K, {
                          button: { color: 'primary ' },
                          id: 'btn-check-2',
                          autoComplete: 'off',
                          label: 'Checked',
                          defaultChecked: !0,
                        }),
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'forms/checks-radios#toggle-buttons',
                        children: Object(l.jsx)(t.K, {
                          button: { color: 'primary ' },
                          id: 'btn-check-3',
                          autoComplete: 'off',
                          label: 'Disabled',
                          disabled: !0,
                        }),
                      }),
                      Object(l.jsx)('h3', { children: 'Radio toggle buttons' }),
                      Object(l.jsxs)(i.f, {
                        href: 'forms/checks-radios#toggle-buttons',
                        children: [
                          Object(l.jsx)(t.K, {
                            button: { color: 'secondary' },
                            type: 'radio',
                            name: 'options',
                            id: 'option1',
                            autoComplete: 'off',
                            label: 'Checked',
                            defaultChecked: !0,
                          }),
                          Object(l.jsx)(t.K, {
                            button: { color: 'secondary' },
                            type: 'radio',
                            name: 'options',
                            id: 'option2',
                            autoComplete: 'off',
                            label: 'Radio',
                          }),
                          Object(l.jsx)(t.K, {
                            button: { color: 'secondary' },
                            type: 'radio',
                            name: 'options',
                            id: 'option3',
                            autoComplete: 'off',
                            label: 'Radio',
                            disabled: !0,
                          }),
                          Object(l.jsx)(t.K, {
                            button: { color: 'secondary' },
                            type: 'radio',
                            name: 'options',
                            id: 'option4',
                            autoComplete: 'off',
                            label: 'Radio',
                          }),
                        ],
                      }),
                      Object(l.jsx)('h3', { children: 'Outlined styles' }),
                      Object(l.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children:
                          'Different variants of button, such at the various outlined styles, are supported.',
                      }),
                      Object(l.jsxs)(i.f, {
                        href: 'forms/checks-radios#toggle-buttons',
                        children: [
                          Object(l.jsx)('div', {
                            children: Object(l.jsx)(t.K, {
                              button: { color: 'primary', variant: 'outline' },
                              id: 'btn-check-outlined',
                              autoComplete: 'off',
                              label: 'Single toggle',
                            }),
                          }),
                          Object(l.jsx)('div', {
                            children: Object(l.jsx)(t.K, {
                              button: { color: 'secondary', variant: 'outline' },
                              id: 'btn-check-2-outlined',
                              autoComplete: 'off',
                              label: 'Checked',
                              defaultChecked: !0,
                            }),
                          }),
                          Object(l.jsxs)('div', {
                            children: [
                              Object(l.jsx)(t.K, {
                                button: { color: 'success', variant: 'outline' },
                                type: 'radio',
                                name: 'options-outlined',
                                id: 'success-outlined',
                                autoComplete: 'off',
                                label: 'Radio',
                                defaultChecked: !0,
                              }),
                              Object(l.jsx)(t.K, {
                                button: { color: 'danger', variant: 'outline' },
                                type: 'radio',
                                name: 'options-outlined',
                                id: 'danger-outlined',
                                autoComplete: 'off',
                                label: 'Radio',
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
    },
  },
])
//# sourceMappingURL=38.dc1c1fbf.chunk.js.map
