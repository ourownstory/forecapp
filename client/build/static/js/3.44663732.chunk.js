/*! For license information please see 3.44663732.chunk.js.LICENSE.txt */
;(this['webpackJsonp@coreui/coreui-free-react-admin-template'] =
  this['webpackJsonp@coreui/coreui-free-react-admin-template'] || []).push([
  [3],
  {
    368: function (e, t, r) {
      var i = r(1),
        n = r(121),
        s = r(382),
        a = r.p + 'static/media/doc_upload.cc0e0823.svg',
        o = (r(353), r(19))
      t.a = (e) => {
        let { paramFunc: t } = e
        const [r, h] = Object(i.useState)(!1),
          [u, c] = Object(i.useState)([
            ['ds', 'y'],
            ['1949-01-01', '112'],
            ['1949-02-01', '118'],
            ['1949-03-01', '132'],
            ['1949-04-01', '129'],
          ]),
          f = Object(n.b)()
        Object(i.useEffect)(() => {
          t(u),
            console.log("I'M inside the effect"),
            console.log("I'M inside the effect"),
            console.log(u)
        }, [f, u])
        const [l, d] = Object(i.useState)(),
          [p, g] = Object(i.useState)(!1),
          m = Object(i.useRef)(null)
        return Object(o.jsx)('div', {
          children: Object(o.jsxs)('div', {
            style: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '300px',
              cursor: 'pointer',
            },
            className: r ? 'drag-drop-active' : 'drag-drop-default',
            onClick: (e) => {
              m.current.click()
            },
            onDragEnter: (e) => {
              h(!0)
            },
            onDragLeave: (e) => {
              h(!1)
            },
            onDragOver: (e) => {
              e.preventDefault()
            },
            onDrop: (e) => {
              e.preventDefault(),
                h(!1),
                g(!0),
                d(e.dataTransfer.files[0]),
                Array.from(e.dataTransfer.files)
                  .filter((e) => 'text/csv' === e.type)
                  .forEach(async (e) => {
                    const t = await e.text(),
                      r = Object(s.parse)(t, { header: !1 })
                    c(r.data)
                  })
            },
            children: [
              Object(o.jsx)('input', {
                type: 'file',
                id: 'file',
                className: 'myInput',
                ref: m,
                style: { display: 'none' },
                onChange: (e) => {
                  e.preventDefault(),
                    d(e.target.files[0]),
                    g(!0),
                    Array.from(e.target.files)
                      .filter((e) => 'text/csv' === e.type)
                      .forEach(async (e) => {
                        const t = await e.text(),
                          r = Object(s.parse)(t, { header: !1 })
                        c(r.data)
                      })
                },
              }),
              Object(o.jsxs)('div', {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                children: [
                  Object(o.jsx)('img', {
                    style: { paddingBottom: '1rem' },
                    src: a,
                    alt: 'Doc upload image',
                    width: 100,
                    height: 100,
                  }),
                  Object(o.jsxs)('p', {
                    className: 'dragDropContent',
                    children: [
                      'Drop it right in here ',
                      Object(o.jsx)('strong', { children: 'or' }),
                      ' click to browse.',
                    ],
                  }),
                  p
                    ? Object(o.jsxs)('p', {
                        className: 'dragDropContent',
                        children: ['Filename: ', l.name],
                      })
                    : Object(o.jsx)('p', {
                        className: 'dragDropContent',
                        children: Object(o.jsx)('i', { children: 'No file selected.' }),
                      }),
                ],
              }),
            ],
          }),
        })
      }
    },
    382: function (e, t, r) {
      var i, n, s
      ;(n = []),
        (i = function e() {
          var t =
              'undefined' != typeof self
                ? self
                : 'undefined' != typeof window
                ? window
                : void 0 !== t
                ? t
                : {},
            r = !t.document && !!t.postMessage,
            i = r && /blob:/i.test((t.location || {}).protocol),
            n = {},
            s = 0,
            a = {
              parse: function (r, i) {
                var o = (i = i || {}).dynamicTyping || !1
                if (
                  (b(o) && ((i.dynamicTypingFunction = o), (o = {})),
                  (i.dynamicTyping = o),
                  (i.transform = !!b(i.transform) && i.transform),
                  i.worker && a.WORKERS_SUPPORTED)
                ) {
                  var h = (function () {
                    if (!a.WORKERS_SUPPORTED) return !1
                    var r,
                      i,
                      o =
                        ((r = t.URL || t.webkitURL || null),
                        (i = e.toString()),
                        a.BLOB_URL ||
                          (a.BLOB_URL = r.createObjectURL(
                            new Blob(['(', i, ')();'], { type: 'text/javascript' }),
                          ))),
                      h = new t.Worker(o)
                    return (h.onmessage = m), (h.id = s++), (n[h.id] = h)
                  })()
                  return (
                    (h.userStep = i.step),
                    (h.userChunk = i.chunk),
                    (h.userComplete = i.complete),
                    (h.userError = i.error),
                    (i.step = b(i.step)),
                    (i.chunk = b(i.chunk)),
                    (i.complete = b(i.complete)),
                    (i.error = b(i.error)),
                    delete i.worker,
                    void h.postMessage({ input: r, config: i, workerId: h.id })
                  )
                }
                var d = null
                return (
                  a.NODE_STREAM_INPUT,
                  'string' == typeof r
                    ? (d = i.download ? new u(i) : new f(i))
                    : !0 === r.readable && b(r.read) && b(r.on)
                    ? (d = new l(i))
                    : ((t.File && r instanceof File) || r instanceof Object) && (d = new c(i)),
                  d.stream(r)
                )
              },
              unparse: function (e, t) {
                var r = !1,
                  i = !0,
                  n = ',',
                  s = '\r\n',
                  o = '"',
                  h = o + o,
                  u = !1,
                  c = null,
                  f = !1
                !(function () {
                  if ('object' == typeof t) {
                    if (
                      ('string' != typeof t.delimiter ||
                        a.BAD_DELIMITERS.filter(function (e) {
                          return -1 !== t.delimiter.indexOf(e)
                        }).length ||
                        (n = t.delimiter),
                      ('boolean' == typeof t.quotes ||
                        'function' == typeof t.quotes ||
                        Array.isArray(t.quotes)) &&
                        (r = t.quotes),
                      ('boolean' != typeof t.skipEmptyLines &&
                        'string' != typeof t.skipEmptyLines) ||
                        (u = t.skipEmptyLines),
                      'string' == typeof t.newline && (s = t.newline),
                      'string' == typeof t.quoteChar && (o = t.quoteChar),
                      'boolean' == typeof t.header && (i = t.header),
                      Array.isArray(t.columns))
                    ) {
                      if (0 === t.columns.length) throw new Error('Option columns is empty')
                      c = t.columns
                    }
                    void 0 !== t.escapeChar && (h = t.escapeChar + o),
                      'boolean' == typeof t.escapeFormulae && (f = t.escapeFormulae)
                  }
                })()
                var l = new RegExp(p(o), 'g')
                if (('string' == typeof e && (e = JSON.parse(e)), Array.isArray(e))) {
                  if (!e.length || Array.isArray(e[0])) return d(null, e, u)
                  if ('object' == typeof e[0]) return d(c || Object.keys(e[0]), e, u)
                } else if ('object' == typeof e)
                  return (
                    'string' == typeof e.data && (e.data = JSON.parse(e.data)),
                    Array.isArray(e.data) &&
                      (e.fields || (e.fields = e.meta && e.meta.fields),
                      e.fields ||
                        (e.fields = Array.isArray(e.data[0])
                          ? e.fields
                          : 'object' == typeof e.data[0]
                          ? Object.keys(e.data[0])
                          : []),
                      Array.isArray(e.data[0]) ||
                        'object' == typeof e.data[0] ||
                        (e.data = [e.data])),
                    d(e.fields || [], e.data || [], u)
                  )
                throw new Error('Unable to serialize unrecognized input')
                function d(e, t, r) {
                  var a = ''
                  'string' == typeof e && (e = JSON.parse(e)),
                    'string' == typeof t && (t = JSON.parse(t))
                  var o = Array.isArray(e) && 0 < e.length,
                    h = !Array.isArray(t[0])
                  if (o && i) {
                    for (var u = 0; u < e.length; u++) 0 < u && (a += n), (a += g(e[u], u))
                    0 < t.length && (a += s)
                  }
                  for (var c = 0; c < t.length; c++) {
                    var f = o ? e.length : t[c].length,
                      l = !1,
                      d = o ? 0 === Object.keys(t[c]).length : 0 === t[c].length
                    if (
                      (r &&
                        !o &&
                        (l =
                          'greedy' === r
                            ? '' === t[c].join('').trim()
                            : 1 === t[c].length && 0 === t[c][0].length),
                      'greedy' === r && o)
                    ) {
                      for (var p = [], m = 0; m < f; m++) {
                        var _ = h ? e[m] : m
                        p.push(t[c][_])
                      }
                      l = '' === p.join('').trim()
                    }
                    if (!l) {
                      for (var y = 0; y < f; y++) {
                        0 < y && !d && (a += n)
                        var v = o && h ? e[y] : y
                        a += g(t[c][v], y)
                      }
                      c < t.length - 1 && (!r || (0 < f && !d)) && (a += s)
                    }
                  }
                  return a
                }
                function g(e, t) {
                  if (null == e) return ''
                  if (e.constructor === Date) return JSON.stringify(e).slice(1, 25)
                  !0 === f &&
                    'string' == typeof e &&
                    null !== e.match(/^[=+\-@].*$/) &&
                    (e = "'" + e)
                  var i = e.toString().replace(l, h),
                    s =
                      ('boolean' == typeof r && r) ||
                      ('function' == typeof r && r(e, t)) ||
                      (Array.isArray(r) && r[t]) ||
                      (function (e, t) {
                        for (var r = 0; r < t.length; r++) if (-1 < e.indexOf(t[r])) return !0
                        return !1
                      })(i, a.BAD_DELIMITERS) ||
                      -1 < i.indexOf(n) ||
                      ' ' === i.charAt(0) ||
                      ' ' === i.charAt(i.length - 1)
                  return s ? o + i + o : i
                }
              },
            }
          if (
            ((a.RECORD_SEP = String.fromCharCode(30)),
            (a.UNIT_SEP = String.fromCharCode(31)),
            (a.BYTE_ORDER_MARK = '\ufeff'),
            (a.BAD_DELIMITERS = ['\r', '\n', '"', a.BYTE_ORDER_MARK]),
            (a.WORKERS_SUPPORTED = !r && !!t.Worker),
            (a.NODE_STREAM_INPUT = 1),
            (a.LocalChunkSize = 10485760),
            (a.RemoteChunkSize = 5242880),
            (a.DefaultDelimiter = ','),
            (a.Parser = g),
            (a.ParserHandle = d),
            (a.NetworkStreamer = u),
            (a.FileStreamer = c),
            (a.StringStreamer = f),
            (a.ReadableStreamStreamer = l),
            t.jQuery)
          ) {
            var o = t.jQuery
            o.fn.parse = function (e) {
              var r = e.config || {},
                i = []
              return (
                this.each(function (e) {
                  if (
                    'INPUT' !== o(this).prop('tagName').toUpperCase() ||
                    'file' !== o(this).attr('type').toLowerCase() ||
                    !t.FileReader ||
                    !this.files ||
                    0 === this.files.length
                  )
                    return !0
                  for (var n = 0; n < this.files.length; n++)
                    i.push({
                      file: this.files[n],
                      inputElem: this,
                      instanceConfig: o.extend({}, r),
                    })
                }),
                n(),
                this
              )
              function n() {
                if (0 !== i.length) {
                  var t,
                    r,
                    n,
                    h,
                    u = i[0]
                  if (b(e.before)) {
                    var c = e.before(u.file, u.inputElem)
                    if ('object' == typeof c) {
                      if ('abort' === c.action)
                        return (
                          (t = 'AbortError'),
                          (r = u.file),
                          (n = u.inputElem),
                          (h = c.reason),
                          void (b(e.error) && e.error({ name: t }, r, n, h))
                        )
                      if ('skip' === c.action) return void s()
                      'object' == typeof c.config &&
                        (u.instanceConfig = o.extend(u.instanceConfig, c.config))
                    } else if ('skip' === c) return void s()
                  }
                  var f = u.instanceConfig.complete
                  ;(u.instanceConfig.complete = function (e) {
                    b(f) && f(e, u.file, u.inputElem), s()
                  }),
                    a.parse(u.file, u.instanceConfig)
                } else b(e.complete) && e.complete()
              }
              function s() {
                i.splice(0, 1), n()
              }
            }
          }
          function h(e) {
            ;(this._handle = null),
              (this._finished = !1),
              (this._completed = !1),
              (this._halted = !1),
              (this._input = null),
              (this._baseIndex = 0),
              (this._partialLine = ''),
              (this._rowCount = 0),
              (this._start = 0),
              (this._nextChunk = null),
              (this.isFirstChunk = !0),
              (this._completeResults = { data: [], errors: [], meta: {} }),
              function (e) {
                var t = v(e)
                ;(t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new d(t)),
                  ((this._handle.streamer = this)._config = t)
              }.call(this, e),
              (this.parseChunk = function (e, r) {
                if (this.isFirstChunk && b(this._config.beforeFirstChunk)) {
                  var n = this._config.beforeFirstChunk(e)
                  void 0 !== n && (e = n)
                }
                ;(this.isFirstChunk = !1), (this._halted = !1)
                var s = this._partialLine + e
                this._partialLine = ''
                var o = this._handle.parse(s, this._baseIndex, !this._finished)
                if (!this._handle.paused() && !this._handle.aborted()) {
                  var h = o.meta.cursor
                  this._finished ||
                    ((this._partialLine = s.substring(h - this._baseIndex)), (this._baseIndex = h)),
                    o && o.data && (this._rowCount += o.data.length)
                  var u =
                    this._finished ||
                    (this._config.preview && this._rowCount >= this._config.preview)
                  if (i) t.postMessage({ results: o, workerId: a.WORKER_ID, finished: u })
                  else if (b(this._config.chunk) && !r) {
                    if (
                      (this._config.chunk(o, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0)
                    ;(o = void 0), (this._completeResults = void 0)
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data = this._completeResults.data.concat(o.data)),
                      (this._completeResults.errors = this._completeResults.errors.concat(
                        o.errors,
                      )),
                      (this._completeResults.meta = o.meta)),
                    this._completed ||
                      !u ||
                      !b(this._config.complete) ||
                      (o && o.meta.aborted) ||
                      (this._config.complete(this._completeResults, this._input),
                      (this._completed = !0)),
                    u || (o && o.meta.paused) || this._nextChunk(),
                    o
                  )
                }
                this._halted = !0
              }),
              (this._sendError = function (e) {
                b(this._config.error)
                  ? this._config.error(e)
                  : i &&
                    this._config.error &&
                    t.postMessage({ workerId: a.WORKER_ID, error: e, finished: !1 })
              })
          }
          function u(e) {
            var t
            ;(e = e || {}).chunkSize || (e.chunkSize = a.RemoteChunkSize),
              h.call(this, e),
              (this._nextChunk = r
                ? function () {
                    this._readChunk(), this._chunkLoaded()
                  }
                : function () {
                    this._readChunk()
                  }),
              (this.stream = function (e) {
                ;(this._input = e), this._nextChunk()
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded()
                else {
                  if (
                    ((t = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (t.withCredentials = this._config.withCredentials),
                    r ||
                      ((t.onload = k(this._chunkLoaded, this)),
                      (t.onerror = k(this._chunkError, this))),
                    t.open(this._config.downloadRequestBody ? 'POST' : 'GET', this._input, !r),
                    this._config.downloadRequestHeaders)
                  ) {
                    var e = this._config.downloadRequestHeaders
                    for (var i in e) t.setRequestHeader(i, e[i])
                  }
                  if (this._config.chunkSize) {
                    var n = this._start + this._config.chunkSize - 1
                    t.setRequestHeader('Range', 'bytes=' + this._start + '-' + n)
                  }
                  try {
                    t.send(this._config.downloadRequestBody)
                  } catch (e) {
                    this._chunkError(e.message)
                  }
                  r && 0 === t.status && this._chunkError()
                }
              }),
              (this._chunkLoaded = function () {
                4 === t.readyState &&
                  (t.status < 200 || 400 <= t.status
                    ? this._chunkError()
                    : ((this._start += this._config.chunkSize
                        ? this._config.chunkSize
                        : t.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          (function (e) {
                            var t = e.getResponseHeader('Content-Range')
                            return null === t ? -1 : parseInt(t.substring(t.lastIndexOf('/') + 1))
                          })(t)),
                      this.parseChunk(t.responseText)))
              }),
              (this._chunkError = function (e) {
                var r = t.statusText || e
                this._sendError(new Error(r))
              })
          }
          function c(e) {
            var t, r
            ;(e = e || {}).chunkSize || (e.chunkSize = a.LocalChunkSize), h.call(this, e)
            var i = 'undefined' != typeof FileReader
            ;(this.stream = function (e) {
              ;(this._input = e),
                (r = e.slice || e.webkitSlice || e.mozSlice),
                i
                  ? (((t = new FileReader()).onload = k(this._chunkLoaded, this)),
                    (t.onerror = k(this._chunkError, this)))
                  : (t = new FileReaderSync()),
                this._nextChunk()
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview && !(this._rowCount < this._config.preview)) ||
                  this._readChunk()
              }),
              (this._readChunk = function () {
                var e = this._input
                if (this._config.chunkSize) {
                  var n = Math.min(this._start + this._config.chunkSize, this._input.size)
                  e = r.call(e, this._start, n)
                }
                var s = t.readAsText(e, this._config.encoding)
                i || this._chunkLoaded({ target: { result: s } })
              }),
              (this._chunkLoaded = function (e) {
                ;(this._start += this._config.chunkSize),
                  (this._finished = !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(e.target.result)
              }),
              (this._chunkError = function () {
                this._sendError(t.error)
              })
          }
          function f(e) {
            var t
            h.call(this, (e = e || {})),
              (this.stream = function (e) {
                return (t = e), this._nextChunk()
              }),
              (this._nextChunk = function () {
                if (!this._finished) {
                  var e,
                    r = this._config.chunkSize
                  return (
                    r ? ((e = t.substring(0, r)), (t = t.substring(r))) : ((e = t), (t = '')),
                    (this._finished = !t),
                    this.parseChunk(e)
                  )
                }
              })
          }
          function l(e) {
            h.call(this, (e = e || {}))
            var t = [],
              r = !0,
              i = !1
            ;(this.pause = function () {
              h.prototype.pause.apply(this, arguments), this._input.pause()
            }),
              (this.resume = function () {
                h.prototype.resume.apply(this, arguments), this._input.resume()
              }),
              (this.stream = function (e) {
                ;(this._input = e),
                  this._input.on('data', this._streamData),
                  this._input.on('end', this._streamEnd),
                  this._input.on('error', this._streamError)
              }),
              (this._checkIsFinished = function () {
                i && 1 === t.length && (this._finished = !0)
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : (r = !0)
              }),
              (this._streamData = k(function (e) {
                try {
                  t.push('string' == typeof e ? e : e.toString(this._config.encoding)),
                    r && ((r = !1), this._checkIsFinished(), this.parseChunk(t.shift()))
                } catch (e) {
                  this._streamError(e)
                }
              }, this)),
              (this._streamError = k(function (e) {
                this._streamCleanUp(), this._sendError(e)
              }, this)),
              (this._streamEnd = k(function () {
                this._streamCleanUp(), (i = !0), this._streamData('')
              }, this)),
              (this._streamCleanUp = k(function () {
                this._input.removeListener('data', this._streamData),
                  this._input.removeListener('end', this._streamEnd),
                  this._input.removeListener('error', this._streamError)
              }, this))
          }
          function d(e) {
            var t,
              r,
              i,
              n = Math.pow(2, 53),
              s = -n,
              o = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              h =
                /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/,
              u = this,
              c = 0,
              f = 0,
              l = !1,
              d = !1,
              m = [],
              _ = { data: [], errors: [], meta: {} }
            if (b(e.step)) {
              var y = e.step
              e.step = function (t) {
                if (((_ = t), E())) w()
                else {
                  if ((w(), 0 === _.data.length)) return
                  ;(c += t.data.length),
                    e.preview && c > e.preview ? r.abort() : ((_.data = _.data[0]), y(_, u))
                }
              }
            }
            function k(t) {
              return 'greedy' === e.skipEmptyLines
                ? '' === t.join('').trim()
                : 1 === t.length && 0 === t[0].length
            }
            function w() {
              if (
                (_ &&
                  i &&
                  (O(
                    'Delimiter',
                    'UndetectableDelimiter',
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      a.DefaultDelimiter +
                      "'",
                  ),
                  (i = !1)),
                e.skipEmptyLines)
              )
                for (var t = 0; t < _.data.length; t++) k(_.data[t]) && _.data.splice(t--, 1)
              return (
                E() &&
                  (function () {
                    if (_)
                      if (Array.isArray(_.data[0])) {
                        for (var t = 0; E() && t < _.data.length; t++) _.data[t].forEach(r)
                        _.data.splice(0, 1)
                      } else _.data.forEach(r)
                    function r(t, r) {
                      b(e.transformHeader) && (t = e.transformHeader(t, r)), m.push(t)
                    }
                  })(),
                (function () {
                  if (!_ || (!e.header && !e.dynamicTyping && !e.transform)) return _
                  function t(t, r) {
                    var i,
                      n = e.header ? {} : []
                    for (i = 0; i < t.length; i++) {
                      var s = i,
                        a = t[i]
                      e.header && (s = i >= m.length ? '__parsed_extra' : m[i]),
                        e.transform && (a = e.transform(a, s)),
                        (a = C(s, a)),
                        '__parsed_extra' === s ? ((n[s] = n[s] || []), n[s].push(a)) : (n[s] = a)
                    }
                    return (
                      e.header &&
                        (i > m.length
                          ? O(
                              'FieldMismatch',
                              'TooManyFields',
                              'Too many fields: expected ' + m.length + ' fields but parsed ' + i,
                              f + r,
                            )
                          : i < m.length &&
                            O(
                              'FieldMismatch',
                              'TooFewFields',
                              'Too few fields: expected ' + m.length + ' fields but parsed ' + i,
                              f + r,
                            )),
                      n
                    )
                  }
                  var r = 1
                  return (
                    !_.data.length || Array.isArray(_.data[0])
                      ? ((_.data = _.data.map(t)), (r = _.data.length))
                      : (_.data = t(_.data, 0)),
                    e.header && _.meta && (_.meta.fields = m),
                    (f += r),
                    _
                  )
                })()
              )
            }
            function E() {
              return e.header && 0 === m.length
            }
            function C(t, r) {
              return (
                (i = t),
                e.dynamicTypingFunction &&
                  void 0 === e.dynamicTyping[i] &&
                  (e.dynamicTyping[i] = e.dynamicTypingFunction(i)),
                !0 === (e.dynamicTyping[i] || e.dynamicTyping)
                  ? 'true' === r ||
                    'TRUE' === r ||
                    ('false' !== r &&
                      'FALSE' !== r &&
                      ((function (e) {
                        if (o.test(e)) {
                          var t = parseFloat(e)
                          if (s < t && t < n) return !0
                        }
                        return !1
                      })(r)
                        ? parseFloat(r)
                        : h.test(r)
                        ? new Date(r)
                        : '' === r
                        ? null
                        : r))
                  : r
              )
              var i
            }
            function O(e, t, r, i) {
              var n = { type: e, code: t, message: r }
              void 0 !== i && (n.row = i), _.errors.push(n)
            }
            ;(this.parse = function (n, s, o) {
              var h = e.quoteChar || '"'
              if (
                (e.newline ||
                  (e.newline = (function (e, t) {
                    e = e.substring(0, 1048576)
                    var r = new RegExp(p(t) + '([^]*?)' + p(t), 'gm'),
                      i = (e = e.replace(r, '')).split('\r'),
                      n = e.split('\n'),
                      s = 1 < n.length && n[0].length < i[0].length
                    if (1 === i.length || s) return '\n'
                    for (var a = 0, o = 0; o < i.length; o++) '\n' === i[o][0] && a++
                    return a >= i.length / 2 ? '\r\n' : '\r'
                  })(n, h)),
                (i = !1),
                e.delimiter)
              )
                b(e.delimiter) && ((e.delimiter = e.delimiter(n)), (_.meta.delimiter = e.delimiter))
              else {
                var u = (function (t, r, i, n, s) {
                  var o, h, u, c
                  s = s || [',', '\t', '|', ';', a.RECORD_SEP, a.UNIT_SEP]
                  for (var f = 0; f < s.length; f++) {
                    var l = s[f],
                      d = 0,
                      p = 0,
                      m = 0
                    u = void 0
                    for (
                      var _ = new g({ comments: n, delimiter: l, newline: r, preview: 10 }).parse(
                          t,
                        ),
                        y = 0;
                      y < _.data.length;
                      y++
                    )
                      if (i && k(_.data[y])) m++
                      else {
                        var v = _.data[y].length
                        ;(p += v),
                          void 0 !== u ? 0 < v && ((d += Math.abs(v - u)), (u = v)) : (u = v)
                      }
                    0 < _.data.length && (p /= _.data.length - m),
                      (void 0 === h || d <= h) &&
                        (void 0 === c || c < p) &&
                        1.99 < p &&
                        ((h = d), (o = l), (c = p))
                  }
                  return { successful: !!(e.delimiter = o), bestDelimiter: o }
                })(n, e.newline, e.skipEmptyLines, e.comments, e.delimitersToGuess)
                u.successful
                  ? (e.delimiter = u.bestDelimiter)
                  : ((i = !0), (e.delimiter = a.DefaultDelimiter)),
                  (_.meta.delimiter = e.delimiter)
              }
              var c = v(e)
              return (
                e.preview && e.header && c.preview++,
                (t = n),
                (r = new g(c)),
                (_ = r.parse(t, s, o)),
                w(),
                l ? { meta: { paused: !0 } } : _ || { meta: { paused: !1 } }
              )
            }),
              (this.paused = function () {
                return l
              }),
              (this.pause = function () {
                ;(l = !0), r.abort(), (t = b(e.chunk) ? '' : t.substring(r.getCharIndex()))
              }),
              (this.resume = function () {
                u.streamer._halted
                  ? ((l = !1), u.streamer.parseChunk(t, !0))
                  : setTimeout(u.resume, 3)
              }),
              (this.aborted = function () {
                return d
              }),
              (this.abort = function () {
                ;(d = !0),
                  r.abort(),
                  (_.meta.aborted = !0),
                  b(e.complete) && e.complete(_),
                  (t = '')
              })
          }
          function p(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
          }
          function g(e) {
            var t,
              r = (e = e || {}).delimiter,
              i = e.newline,
              n = e.comments,
              s = e.step,
              o = e.preview,
              h = e.fastMode,
              u = (t = void 0 === e.quoteChar ? '"' : e.quoteChar)
            if (
              (void 0 !== e.escapeChar && (u = e.escapeChar),
              ('string' != typeof r || -1 < a.BAD_DELIMITERS.indexOf(r)) && (r = ','),
              n === r)
            )
              throw new Error('Comment character same as delimiter')
            !0 === n
              ? (n = '#')
              : ('string' != typeof n || -1 < a.BAD_DELIMITERS.indexOf(n)) && (n = !1),
              '\n' !== i && '\r' !== i && '\r\n' !== i && (i = '\n')
            var c = 0,
              f = !1
            ;(this.parse = function (e, a, l) {
              if ('string' != typeof e) throw new Error('Input must be a string')
              var d = e.length,
                g = r.length,
                m = i.length,
                _ = n.length,
                y = b(s),
                v = [],
                k = [],
                w = [],
                E = (c = 0)
              if (!e) return M()
              if (h || (!1 !== h && -1 === e.indexOf(t))) {
                for (var C = e.split(i), O = 0; O < C.length; O++) {
                  if (((w = C[O]), (c += w.length), O !== C.length - 1)) c += i.length
                  else if (l) return M()
                  if (!n || w.substring(0, _) !== n) {
                    if (y) {
                      if (((v = []), T(w.split(r)), z(), f)) return M()
                    } else T(w.split(r))
                    if (o && o <= O) return (v = v.slice(0, o)), M(!0)
                  }
                }
                return M()
              }
              for (
                var R = e.indexOf(r, c),
                  x = e.indexOf(i, c),
                  S = new RegExp(p(u) + p(t), 'g'),
                  j = e.indexOf(t, c);
                ;

              )
                if (e[c] !== t)
                  if (n && 0 === w.length && e.substring(c, c + _) === n) {
                    if (-1 === x) return M()
                    ;(c = x + m), (x = e.indexOf(i, c)), (R = e.indexOf(r, c))
                  } else if (-1 !== R && (R < x || -1 === x))
                    w.push(e.substring(c, R)), (c = R + g), (R = e.indexOf(r, c))
                  else {
                    if (-1 === x) break
                    if ((w.push(e.substring(c, x)), F(x + m), y && (z(), f))) return M()
                    if (o && v.length >= o) return M(!0)
                  }
                else
                  for (j = c, c++; ; ) {
                    if (-1 === (j = e.indexOf(t, j + 1)))
                      return (
                        l ||
                          k.push({
                            type: 'Quotes',
                            code: 'MissingQuotes',
                            message: 'Quoted field unterminated',
                            row: v.length,
                            index: c,
                          }),
                        L()
                      )
                    if (j === d - 1) return L(e.substring(c, j).replace(S, t))
                    if (t !== u || e[j + 1] !== u) {
                      if (t === u || 0 === j || e[j - 1] !== u) {
                        ;-1 !== R && R < j + 1 && (R = e.indexOf(r, j + 1)),
                          -1 !== x && x < j + 1 && (x = e.indexOf(i, j + 1))
                        var D = A(-1 === x ? R : Math.min(R, x))
                        if (e[j + 1 + D] === r) {
                          w.push(e.substring(c, j).replace(S, t)),
                            e[(c = j + 1 + D + g)] !== t && (j = e.indexOf(t, c)),
                            (R = e.indexOf(r, c)),
                            (x = e.indexOf(i, c))
                          break
                        }
                        var I = A(x)
                        if (e.substring(j + 1 + I, j + 1 + I + m) === i) {
                          if (
                            (w.push(e.substring(c, j).replace(S, t)),
                            F(j + 1 + I + m),
                            (R = e.indexOf(r, c)),
                            (j = e.indexOf(t, c)),
                            y && (z(), f))
                          )
                            return M()
                          if (o && v.length >= o) return M(!0)
                          break
                        }
                        k.push({
                          type: 'Quotes',
                          code: 'InvalidQuotes',
                          message: 'Trailing quote on quoted field is malformed',
                          row: v.length,
                          index: c,
                        }),
                          j++
                      }
                    } else j++
                  }
              return L()
              function T(e) {
                v.push(e), (E = c)
              }
              function A(t) {
                var r = 0
                if (-1 !== t) {
                  var i = e.substring(j + 1, t)
                  i && '' === i.trim() && (r = i.length)
                }
                return r
              }
              function L(t) {
                return (
                  l || (void 0 === t && (t = e.substring(c)), w.push(t), (c = d), T(w), y && z()),
                  M()
                )
              }
              function F(t) {
                ;(c = t), T(w), (w = []), (x = e.indexOf(i, c))
              }
              function M(e) {
                return {
                  data: v,
                  errors: k,
                  meta: {
                    delimiter: r,
                    linebreak: i,
                    aborted: f,
                    truncated: !!e,
                    cursor: E + (a || 0),
                  },
                }
              }
              function z() {
                s(M()), (v = []), (k = [])
              }
            }),
              (this.abort = function () {
                f = !0
              }),
              (this.getCharIndex = function () {
                return c
              })
          }
          function m(e) {
            var t = e.data,
              r = n[t.workerId],
              i = !1
            if (t.error) r.userError(t.error, t.file)
            else if (t.results && t.results.data) {
              var s = {
                abort: function () {
                  ;(i = !0), _(t.workerId, { data: [], errors: [], meta: { aborted: !0 } })
                },
                pause: y,
                resume: y,
              }
              if (b(r.userStep)) {
                for (
                  var a = 0;
                  a < t.results.data.length &&
                  (r.userStep(
                    { data: t.results.data[a], errors: t.results.errors, meta: t.results.meta },
                    s,
                  ),
                  !i);
                  a++
                );
                delete t.results
              } else b(r.userChunk) && (r.userChunk(t.results, s, t.file), delete t.results)
            }
            t.finished && !i && _(t.workerId, t.results)
          }
          function _(e, t) {
            var r = n[e]
            b(r.userComplete) && r.userComplete(t), r.terminate(), delete n[e]
          }
          function y() {
            throw new Error('Not implemented.')
          }
          function v(e) {
            if ('object' != typeof e || null === e) return e
            var t = Array.isArray(e) ? [] : {}
            for (var r in e) t[r] = v(e[r])
            return t
          }
          function k(e, t) {
            return function () {
              e.apply(t, arguments)
            }
          }
          function b(e) {
            return 'function' == typeof e
          }
          return (
            i &&
              (t.onmessage = function (e) {
                var r = e.data
                if (
                  (void 0 === a.WORKER_ID && r && (a.WORKER_ID = r.workerId),
                  'string' == typeof r.input)
                )
                  t.postMessage({
                    workerId: a.WORKER_ID,
                    results: a.parse(r.input, r.config),
                    finished: !0,
                  })
                else if ((t.File && r.input instanceof File) || r.input instanceof Object) {
                  var i = a.parse(r.input, r.config)
                  i && t.postMessage({ workerId: a.WORKER_ID, results: i, finished: !0 })
                }
              }),
            ((u.prototype = Object.create(h.prototype)).constructor = u),
            ((c.prototype = Object.create(h.prototype)).constructor = c),
            ((f.prototype = Object.create(f.prototype)).constructor = f),
            ((l.prototype = Object.create(h.prototype)).constructor = l),
            a
          )
        }),
        void 0 === (s = 'function' === typeof i ? i.apply(t, n) : i) || (e.exports = s)
    },
  },
])
//# sourceMappingURL=3.44663732.chunk.js.map
