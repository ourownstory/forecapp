;(this['webpackJsonp@coreui/coreui-free-react-admin-template'] =
  this['webpackJsonp@coreui/coreui-free-react-admin-template'] || []).push([
  [37],
  {
    473: function (e, s, a) {
      a.r(s)
      var t = a(1),
        c = a(353),
        r = a(357),
        i = a(358),
        l = a(356),
        n = a(362),
        d = a(420),
        o = a(421),
        j = a(377),
        b = a(378),
        m = a(379),
        u = a(422),
        x = a(423),
        h = a(424),
        p = a(425),
        O = a(426),
        v = a(427),
        g = a(428),
        y = a(429),
        N = a(430),
        f = a(431),
        w = a(432),
        J = a(433),
        A = a(434),
        C = a(380),
        k = a.p + 'static/media/1.34eedf58.jpg',
        S = a.p + 'static/media/2.0c06e43d.jpg',
        M = a.p + 'static/media/3.07e357f5.jpg',
        T = a.p + 'static/media/4.3ddf28ab.jpg',
        z = a.p + 'static/media/5.3e55ee5f.jpg',
        F = a.p + 'static/media/6.edefb235.jpg',
        R = a(19)
      const E = Object(t.lazy)(() => a.e(56).then(a.bind(null, 367))),
        U = Object(t.lazy)(() => a.e(55).then(a.bind(null, 369)))
      s.default = () => {
        const e = (e, s) => Math.floor(Math.random() * (s - e + 1) + e),
          s = [
            { title: 'Male', icon: n.a, value: 53 },
            { title: 'Female', icon: d.a, value: 43 },
          ],
          a = [
            { title: 'Organic Search', icon: o.a, percent: 56, value: '191,235' },
            { title: 'Facebook', icon: j.a, percent: 15, value: '51,223' },
            { title: 'Twitter', icon: b.a, percent: 11, value: '37,564' },
            { title: 'LinkedIn', icon: m.a, percent: 8, value: '27,319' },
          ],
          t = [
            {
              avatar: { src: k, status: 'success' },
              user: { name: 'Yiorgos Avraamu', new: !0, registered: 'Jan 1, 2021' },
              country: { name: 'USA', flag: u.a },
              usage: { value: 50, period: 'Jun 11, 2021 - Jul 10, 2021', color: 'success' },
              payment: { name: 'Mastercard', icon: x.a },
              activity: '10 sec ago',
            },
            {
              avatar: { src: S, status: 'danger' },
              user: { name: 'Avram Tarasios', new: !1, registered: 'Jan 1, 2021' },
              country: { name: 'Brazil', flag: h.a },
              usage: { value: 22, period: 'Jun 11, 2021 - Jul 10, 2021', color: 'info' },
              payment: { name: 'Visa', icon: p.a },
              activity: '5 minutes ago',
            },
            {
              avatar: { src: M, status: 'warning' },
              user: { name: 'Quintin Ed', new: !0, registered: 'Jan 1, 2021' },
              country: { name: 'India', flag: O.a },
              usage: { value: 74, period: 'Jun 11, 2021 - Jul 10, 2021', color: 'warning' },
              payment: { name: 'Stripe', icon: v.a },
              activity: '1 hour ago',
            },
            {
              avatar: { src: T, status: 'secondary' },
              user: { name: 'En\xe9as Kwadwo', new: !0, registered: 'Jan 1, 2021' },
              country: { name: 'France', flag: g.a },
              usage: { value: 98, period: 'Jun 11, 2021 - Jul 10, 2021', color: 'danger' },
              payment: { name: 'PayPal', icon: y.a },
              activity: 'Last month',
            },
            {
              avatar: { src: z, status: 'success' },
              user: { name: 'Agapetus Tade\xe1\u0161', new: !0, registered: 'Jan 1, 2021' },
              country: { name: 'Spain', flag: N.a },
              usage: { value: 22, period: 'Jun 11, 2021 - Jul 10, 2021', color: 'primary' },
              payment: { name: 'Google Wallet', icon: f.a },
              activity: 'Last week',
            },
            {
              avatar: { src: F, status: 'danger' },
              user: { name: 'Friderik D\xe1vid', new: !0, registered: 'Jan 1, 2021' },
              country: { name: 'Poland', flag: w.a },
              usage: { value: 43, period: 'Jun 11, 2021 - Jul 10, 2021', color: 'success' },
              payment: { name: 'Amex', icon: J.a },
              activity: 'Last week',
            },
          ]
        return Object(R.jsxs)(R.Fragment, {
          children: [
            Object(R.jsx)(E, {}),
            Object(R.jsxs)(c.n, {
              className: 'mb-4',
              children: [
                Object(R.jsxs)(c.o, {
                  children: [
                    Object(R.jsxs)(c.rb, {
                      children: [
                        Object(R.jsxs)(c.A, {
                          sm: 5,
                          children: [
                            Object(R.jsx)('h4', {
                              id: 'traffic',
                              className: 'card-title mb-0',
                              children: 'Traffic',
                            }),
                            Object(R.jsx)('div', {
                              className: 'small text-medium-emphasis',
                              children: 'January - July 2021',
                            }),
                          ],
                        }),
                        Object(R.jsxs)(c.A, {
                          sm: 7,
                          className: 'd-none d-md-block',
                          children: [
                            Object(R.jsx)(c.j, {
                              color: 'primary',
                              className: 'float-end',
                              children: Object(R.jsx)(l.a, { icon: A.a }),
                            }),
                            Object(R.jsx)(c.k, {
                              className: 'float-end me-3',
                              children: ['Day', 'Month', 'Year'].map((e) =>
                                Object(R.jsx)(
                                  c.j,
                                  {
                                    color: 'outline-secondary',
                                    className: 'mx-0',
                                    active: 'Month' === e,
                                    children: e,
                                  },
                                  e,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(R.jsx)(r.d, {
                      style: { height: '300px', marginTop: '40px' },
                      data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                          {
                            label: 'My First dataset',
                            backgroundColor: Object(i.hexToRgba)(
                              Object(i.getStyle)('--cui-info'),
                              10,
                            ),
                            borderColor: Object(i.getStyle)('--cui-info'),
                            pointHoverBackgroundColor: Object(i.getStyle)('--cui-info'),
                            borderWidth: 2,
                            data: [
                              e(50, 200),
                              e(50, 200),
                              e(50, 200),
                              e(50, 200),
                              e(50, 200),
                              e(50, 200),
                              e(50, 200),
                            ],
                            fill: !0,
                          },
                          {
                            label: 'My Second dataset',
                            backgroundColor: 'transparent',
                            borderColor: Object(i.getStyle)('--cui-success'),
                            pointHoverBackgroundColor: Object(i.getStyle)('--cui-success'),
                            borderWidth: 2,
                            data: [
                              e(50, 200),
                              e(50, 200),
                              e(50, 200),
                              e(50, 200),
                              e(50, 200),
                              e(50, 200),
                              e(50, 200),
                            ],
                          },
                          {
                            label: 'My Third dataset',
                            backgroundColor: 'transparent',
                            borderColor: Object(i.getStyle)('--cui-danger'),
                            pointHoverBackgroundColor: Object(i.getStyle)('--cui-danger'),
                            borderWidth: 1,
                            borderDash: [8, 5],
                            data: [65, 65, 65, 65, 65, 65, 65],
                          },
                        ],
                      },
                      options: {
                        maintainAspectRatio: !1,
                        plugins: { legend: { display: !1 } },
                        scales: {
                          x: { grid: { drawOnChartArea: !1 } },
                          y: {
                            ticks: {
                              beginAtZero: !0,
                              maxTicksLimit: 5,
                              stepSize: Math.ceil(50),
                              max: 250,
                            },
                          },
                        },
                        elements: {
                          line: { tension: 0.4 },
                          point: { radius: 0, hitRadius: 10, hoverRadius: 4, hoverBorderWidth: 3 },
                        },
                      },
                    }),
                  ],
                }),
                Object(R.jsx)(c.p, {
                  children: Object(R.jsx)(c.rb, {
                    xs: { cols: 1 },
                    md: { cols: 5 },
                    className: 'text-center',
                    children: [
                      { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
                      { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
                      { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
                      { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
                      {
                        title: 'Bounce Rate',
                        value: 'Average Rate',
                        percent: 40.15,
                        color: 'primary',
                      },
                    ].map((e, s) =>
                      Object(R.jsxs)(
                        c.A,
                        {
                          className: 'mb-sm-2 mb-0',
                          children: [
                            Object(R.jsx)('div', {
                              className: 'text-medium-emphasis',
                              children: e.title,
                            }),
                            Object(R.jsxs)('strong', {
                              children: [e.value, ' (', e.percent, '%)'],
                            }),
                            Object(R.jsx)(c.pb, {
                              thin: !0,
                              className: 'mt-2',
                              color: e.color,
                              value: e.percent,
                            }),
                          ],
                        },
                        s,
                      ),
                    ),
                  }),
                }),
              ],
            }),
            Object(R.jsx)(U, { withCharts: !0 }),
            Object(R.jsx)(c.rb, {
              children: Object(R.jsx)(c.A, {
                xs: !0,
                children: Object(R.jsxs)(c.n, {
                  className: 'mb-4',
                  children: [
                    Object(R.jsxs)(c.r, { children: ['Traffic ', ' & ', ' Sales'] }),
                    Object(R.jsxs)(c.o, {
                      children: [
                        Object(R.jsxs)(c.rb, {
                          children: [
                            Object(R.jsxs)(c.A, {
                              xs: 12,
                              md: 6,
                              xl: 6,
                              children: [
                                Object(R.jsxs)(c.rb, {
                                  children: [
                                    Object(R.jsx)(c.A, {
                                      sm: 6,
                                      children: Object(R.jsxs)('div', {
                                        className:
                                          'border-start border-start-4 border-start-info py-1 px-3',
                                        children: [
                                          Object(R.jsx)('div', {
                                            className: 'text-medium-emphasis small',
                                            children: 'New Clients',
                                          }),
                                          Object(R.jsx)('div', {
                                            className: 'fs-5 fw-semibold',
                                            children: '9,123',
                                          }),
                                        ],
                                      }),
                                    }),
                                    Object(R.jsx)(c.A, {
                                      sm: 6,
                                      children: Object(R.jsxs)('div', {
                                        className:
                                          'border-start border-start-4 border-start-danger py-1 px-3 mb-3',
                                        children: [
                                          Object(R.jsx)('div', {
                                            className: 'text-medium-emphasis small',
                                            children: 'Recurring Clients',
                                          }),
                                          Object(R.jsx)('div', {
                                            className: 'fs-5 fw-semibold',
                                            children: '22,643',
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                Object(R.jsx)('hr', { className: 'mt-0' }),
                                [
                                  { title: 'Monday', value1: 34, value2: 78 },
                                  { title: 'Tuesday', value1: 56, value2: 94 },
                                  { title: 'Wednesday', value1: 12, value2: 67 },
                                  { title: 'Thursday', value1: 43, value2: 91 },
                                  { title: 'Friday', value1: 22, value2: 73 },
                                  { title: 'Saturday', value1: 53, value2: 82 },
                                  { title: 'Sunday', value1: 9, value2: 69 },
                                ].map((e, s) =>
                                  Object(R.jsxs)(
                                    'div',
                                    {
                                      className: 'progress-group mb-4',
                                      children: [
                                        Object(R.jsx)('div', {
                                          className: 'progress-group-prepend',
                                          children: Object(R.jsx)('span', {
                                            className: 'text-medium-emphasis small',
                                            children: e.title,
                                          }),
                                        }),
                                        Object(R.jsxs)('div', {
                                          className: 'progress-group-bars',
                                          children: [
                                            Object(R.jsx)(c.pb, {
                                              thin: !0,
                                              color: 'info',
                                              value: e.value1,
                                            }),
                                            Object(R.jsx)(c.pb, {
                                              thin: !0,
                                              color: 'danger',
                                              value: e.value2,
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    s,
                                  ),
                                ),
                              ],
                            }),
                            Object(R.jsxs)(c.A, {
                              xs: 12,
                              md: 6,
                              xl: 6,
                              children: [
                                Object(R.jsxs)(c.rb, {
                                  children: [
                                    Object(R.jsx)(c.A, {
                                      sm: 6,
                                      children: Object(R.jsxs)('div', {
                                        className:
                                          'border-start border-start-4 border-start-warning py-1 px-3 mb-3',
                                        children: [
                                          Object(R.jsx)('div', {
                                            className: 'text-medium-emphasis small',
                                            children: 'Pageviews',
                                          }),
                                          Object(R.jsx)('div', {
                                            className: 'fs-5 fw-semibold',
                                            children: '78,623',
                                          }),
                                        ],
                                      }),
                                    }),
                                    Object(R.jsx)(c.A, {
                                      sm: 6,
                                      children: Object(R.jsxs)('div', {
                                        className:
                                          'border-start border-start-4 border-start-success py-1 px-3 mb-3',
                                        children: [
                                          Object(R.jsx)('div', {
                                            className: 'text-medium-emphasis small',
                                            children: 'Organic',
                                          }),
                                          Object(R.jsx)('div', {
                                            className: 'fs-5 fw-semibold',
                                            children: '49,123',
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                Object(R.jsx)('hr', { className: 'mt-0' }),
                                s.map((e, s) =>
                                  Object(R.jsxs)(
                                    'div',
                                    {
                                      className: 'progress-group mb-4',
                                      children: [
                                        Object(R.jsxs)('div', {
                                          className: 'progress-group-header',
                                          children: [
                                            Object(R.jsx)(l.a, {
                                              className: 'me-2',
                                              icon: e.icon,
                                              size: 'lg',
                                            }),
                                            Object(R.jsx)('span', { children: e.title }),
                                            Object(R.jsxs)('span', {
                                              className: 'ms-auto fw-semibold',
                                              children: [e.value, '%'],
                                            }),
                                          ],
                                        }),
                                        Object(R.jsx)('div', {
                                          className: 'progress-group-bars',
                                          children: Object(R.jsx)(c.pb, {
                                            thin: !0,
                                            color: 'warning',
                                            value: e.value,
                                          }),
                                        }),
                                      ],
                                    },
                                    s,
                                  ),
                                ),
                                Object(R.jsx)('div', { className: 'mb-5' }),
                                a.map((e, s) =>
                                  Object(R.jsxs)(
                                    'div',
                                    {
                                      className: 'progress-group',
                                      children: [
                                        Object(R.jsxs)('div', {
                                          className: 'progress-group-header',
                                          children: [
                                            Object(R.jsx)(l.a, {
                                              className: 'me-2',
                                              icon: e.icon,
                                              size: 'lg',
                                            }),
                                            Object(R.jsx)('span', { children: e.title }),
                                            Object(R.jsxs)('span', {
                                              className: 'ms-auto fw-semibold',
                                              children: [
                                                e.value,
                                                ' ',
                                                Object(R.jsxs)('span', {
                                                  className: 'text-medium-emphasis small',
                                                  children: ['(', e.percent, '%)'],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        Object(R.jsx)('div', {
                                          className: 'progress-group-bars',
                                          children: Object(R.jsx)(c.pb, {
                                            thin: !0,
                                            color: 'success',
                                            value: e.percent,
                                          }),
                                        }),
                                      ],
                                    },
                                    s,
                                  ),
                                ),
                              ],
                            }),
                          ],
                        }),
                        Object(R.jsx)('br', {}),
                        Object(R.jsxs)(c.zb, {
                          align: 'middle',
                          className: 'mb-0 border',
                          hover: !0,
                          responsive: !0,
                          children: [
                            Object(R.jsx)(c.Db, {
                              color: 'light',
                              children: Object(R.jsxs)(c.Fb, {
                                children: [
                                  Object(R.jsx)(c.Eb, {
                                    className: 'text-center',
                                    children: Object(R.jsx)(l.a, { icon: C.a }),
                                  }),
                                  Object(R.jsx)(c.Eb, { children: 'User' }),
                                  Object(R.jsx)(c.Eb, {
                                    className: 'text-center',
                                    children: 'Country',
                                  }),
                                  Object(R.jsx)(c.Eb, { children: 'Usage' }),
                                  Object(R.jsx)(c.Eb, {
                                    className: 'text-center',
                                    children: 'Payment Method',
                                  }),
                                  Object(R.jsx)(c.Eb, { children: 'Activity' }),
                                ],
                              }),
                            }),
                            Object(R.jsx)(c.Ab, {
                              children: t.map((e, s) =>
                                Object(R.jsxs)(
                                  c.Fb,
                                  {
                                    'v-for': 'item in tableItems',
                                    children: [
                                      Object(R.jsx)(c.Cb, {
                                        className: 'text-center',
                                        children: Object(R.jsx)(c.h, {
                                          size: 'md',
                                          src: e.avatar.src,
                                          status: e.avatar.status,
                                        }),
                                      }),
                                      Object(R.jsxs)(c.Cb, {
                                        children: [
                                          Object(R.jsx)('div', { children: e.user.name }),
                                          Object(R.jsxs)('div', {
                                            className: 'small text-medium-emphasis',
                                            children: [
                                              Object(R.jsx)('span', {
                                                children: e.user.new ? 'New' : 'Recurring',
                                              }),
                                              ' | Registered:',
                                              ' ',
                                              e.user.registered,
                                            ],
                                          }),
                                        ],
                                      }),
                                      Object(R.jsx)(c.Cb, {
                                        className: 'text-center',
                                        children: Object(R.jsx)(l.a, {
                                          size: 'xl',
                                          icon: e.country.flag,
                                          title: e.country.name,
                                        }),
                                      }),
                                      Object(R.jsxs)(c.Cb, {
                                        children: [
                                          Object(R.jsxs)('div', {
                                            className: 'clearfix',
                                            children: [
                                              Object(R.jsx)('div', {
                                                className: 'float-start',
                                                children: Object(R.jsxs)('strong', {
                                                  children: [e.usage.value, '%'],
                                                }),
                                              }),
                                              Object(R.jsx)('div', {
                                                className: 'float-end',
                                                children: Object(R.jsx)('small', {
                                                  className: 'text-medium-emphasis',
                                                  children: e.usage.period,
                                                }),
                                              }),
                                            ],
                                          }),
                                          Object(R.jsx)(c.pb, {
                                            thin: !0,
                                            color: e.usage.color,
                                            value: e.usage.value,
                                          }),
                                        ],
                                      }),
                                      Object(R.jsx)(c.Cb, {
                                        className: 'text-center',
                                        children: Object(R.jsx)(l.a, {
                                          size: 'xl',
                                          icon: e.payment.icon,
                                        }),
                                      }),
                                      Object(R.jsxs)(c.Cb, {
                                        children: [
                                          Object(R.jsx)('div', {
                                            className: 'small text-medium-emphasis',
                                            children: 'Last login',
                                          }),
                                          Object(R.jsx)('strong', { children: e.activity }),
                                        ],
                                      }),
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
                  ],
                }),
              }),
            }),
          ],
        })
      }
    },
  },
])
//# sourceMappingURL=37.b8928e45.chunk.js.map
