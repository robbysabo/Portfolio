var Lm = Object.defineProperty
var Im = (e, t, n) =>
  t in e
    ? Lm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n)
var pt = (e, t, n) => Im(e, typeof t != 'symbol' ? t + '' : t, n)
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i)
  new MutationObserver(i => {
    for (const o of i)
      if (o.type === 'childList')
        for (const r of o.addedNodes)
          r.tagName === 'LINK' && r.rel === 'modulepreload' && s(r)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const o = {}
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    )
  }
  function s(i) {
    if (i.ep) return
    i.ep = !0
    const o = n(i)
    fetch(i.href, o)
  }
})()
/**
 * @vue/shared v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ml(e) {
  const t = Object.create(null)
  for (const n of e.split(',')) t[n] = 1
  return n => n in t
}
const kt = {},
  Os = [],
  ze = () => {},
  Nm = () => !1,
  wr = e =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Pl = e => e.startsWith('onUpdate:'),
  Ht = Object.assign,
  Dl = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Rm = Object.prototype.hasOwnProperty,
  Et = (e, t) => Rm.call(e, t),
  ut = Array.isArray,
  xi = e => Ar(e) === '[object Map]',
  $m = e => Ar(e) === '[object Set]',
  ft = e => typeof e == 'function',
  jt = e => typeof e == 'string',
  Ks = e => typeof e == 'symbol',
  Nt = e => e !== null && typeof e == 'object',
  Zd = e => (Nt(e) || ft(e)) && ft(e.then) && ft(e.catch),
  Fm = Object.prototype.toString,
  Ar = e => Fm.call(e),
  Hm = e => Ar(e).slice(8, -1),
  jm = e => Ar(e) === '[object Object]',
  Ll = e => jt(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Ei = Ml(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  Sr = e => {
    const t = Object.create(null)
    return n => t[n] || (t[n] = e(n))
  },
  zm = /-(\w)/g,
  ye = Sr(e => e.replace(zm, (t, n) => (n ? n.toUpperCase() : ''))),
  Bm = /\B([A-Z])/g,
  fs = Sr(e => e.replace(Bm, '-$1').toLowerCase()),
  Tr = Sr(e => e.charAt(0).toUpperCase() + e.slice(1)),
  Qr = Sr(e => (e ? `on${Tr(e)}` : '')),
  Tn = (e, t) => !Object.is(e, t),
  Jr = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  th = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    })
  },
  Wm = e => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Yc
const Or = () =>
  Yc ||
  (Yc =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function Il(e) {
  if (ut(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        i = jt(s) ? Km(s) : Il(s)
      if (i) for (const o in i) t[o] = i[o]
    }
    return t
  } else if (jt(e) || Nt(e)) return e
}
const Vm = /;(?![^(]*\))/g,
  Um = /:([^]+)/,
  Ym = /\/\*[^]*?\*\//g
function Km(e) {
  const t = {}
  return (
    e
      .replace(Ym, '')
      .split(Vm)
      .forEach(n => {
        if (n) {
          const s = n.split(Um)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function Nl(e) {
  let t = ''
  if (jt(e)) t = e
  else if (ut(e))
    for (let n = 0; n < e.length; n++) {
      const s = Nl(e[n])
      s && (t += s + ' ')
    }
  else if (Nt(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const qm =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Gm = Ml(qm)
function eh(e) {
  return !!e || e === ''
}
/**
 * @vue/reactivity v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let ce
class Xm {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = ce),
      !t && ce && (this.index = (ce.scopes || (ce.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = ce
      try {
        return (ce = this), t()
      } finally {
        ce = n
      }
    }
  }
  on() {
    ce = this
  }
  off() {
    ce = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop()
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function Qm() {
  return ce
}
let Ct
const Zr = new WeakSet()
class nh {
  constructor(t) {
    ;(this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      ce && ce.active && ce.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Zr.has(this) && (Zr.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || ih(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), Kc(this), oh(this)
    const t = Ct,
      n = Te
    ;(Ct = this), (Te = !0)
    try {
      return this.fn()
    } finally {
      rh(this), (Ct = t), (Te = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Fl(t)
      ;(this.deps = this.depsTail = void 0),
        Kc(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64
      ? Zr.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty()
  }
  runIfDirty() {
    za(this) && this.run()
  }
  get dirty() {
    return za(this)
  }
}
let sh = 0,
  wi,
  Ai
function ih(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;(e.next = Ai), (Ai = e)
    return
  }
  ;(e.next = wi), (wi = e)
}
function Rl() {
  sh++
}
function $l() {
  if (--sh > 0) return
  if (Ai) {
    let t = Ai
    for (Ai = void 0; t; ) {
      const n = t.next
      ;(t.next = void 0), (t.flags &= -9), (t = n)
    }
  }
  let e
  for (; wi; ) {
    let t = wi
    for (wi = void 0; t; ) {
      const n = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (s) {
          e || (e = s)
        }
      t = n
    }
  }
  if (e) throw e
}
function oh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t)
}
function rh(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const i = s.prevDep
    s.version === -1 ? (s === n && (n = i), Fl(s), Jm(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = i)
  }
  ;(e.deps = t), (e.depsTail = n)
}
function za(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (ah(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function ah(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === ji)
  )
    return
  e.globalVersion = ji
  const t = e.dep
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !za(e))) {
    e.flags &= -3
    return
  }
  const n = Ct,
    s = Te
  ;(Ct = e), (Te = !0)
  try {
    oh(e)
    const i = e.fn(e._value)
    ;(t.version === 0 || Tn(i, e._value)) && ((e._value = i), t.version++)
  } catch (i) {
    throw (t.version++, i)
  } finally {
    ;(Ct = n), (Te = s), rh(e), (e.flags &= -3)
  }
}
function Fl(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e
  if (
    (s && ((s.nextSub = i), (e.prevSub = void 0)),
    i && ((i.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5
    for (let o = n.computed.deps; o; o = o.nextDep) Fl(o, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function Jm(e) {
  const { prevDep: t, nextDep: n } = e
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0))
}
let Te = !0
const lh = []
function Nn() {
  lh.push(Te), (Te = !1)
}
function Rn() {
  const e = lh.pop()
  Te = e === void 0 ? !0 : e
}
function Kc(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = Ct
    Ct = void 0
    try {
      t()
    } finally {
      Ct = n
    }
  }
}
let ji = 0
class Zm {
  constructor(t, n) {
    ;(this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0)
  }
}
class Hl {
  constructor(t) {
    ;(this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0)
  }
  track(t) {
    if (!Ct || !Te || Ct === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== Ct)
      (n = this.activeLink = new Zm(Ct, this)),
        Ct.deps
          ? ((n.prevDep = Ct.depsTail),
            (Ct.depsTail.nextDep = n),
            (Ct.depsTail = n))
          : (Ct.deps = Ct.depsTail = n),
        ch(n)
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep
      ;(s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = Ct.depsTail),
        (n.nextDep = void 0),
        (Ct.depsTail.nextDep = n),
        (Ct.depsTail = n),
        Ct.deps === n && (Ct.deps = s)
    }
    return n
  }
  trigger(t) {
    this.version++, ji++, this.notify(t)
  }
  notify(t) {
    Rl()
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify()
    } finally {
      $l()
    }
  }
}
function ch(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) ch(s)
    }
    const n = e.dep.subs
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e)
  }
}
const Ba = new WeakMap(),
  Jn = Symbol(''),
  Wa = Symbol(''),
  zi = Symbol('')
function Vt(e, t, n) {
  if (Te && Ct) {
    let s = Ba.get(e)
    s || Ba.set(e, (s = new Map()))
    let i = s.get(n)
    i || (s.set(n, (i = new Hl())), (i.map = s), (i.key = n)), i.track()
  }
}
function en(e, t, n, s, i, o) {
  const r = Ba.get(e)
  if (!r) {
    ji++
    return
  }
  const a = l => {
    l && l.trigger()
  }
  if ((Rl(), t === 'clear')) r.forEach(a)
  else {
    const l = ut(e),
      c = l && Ll(n)
    if (l && n === 'length') {
      const f = Number(s)
      r.forEach((u, d) => {
        ;(d === 'length' || d === zi || (!Ks(d) && d >= f)) && a(u)
      })
    } else
      switch (
        ((n !== void 0 || r.has(void 0)) && a(r.get(n)), c && a(r.get(zi)), t)
      ) {
        case 'add':
          l ? c && a(r.get('length')) : (a(r.get(Jn)), xi(e) && a(r.get(Wa)))
          break
        case 'delete':
          l || (a(r.get(Jn)), xi(e) && a(r.get(Wa)))
          break
        case 'set':
          xi(e) && a(r.get(Jn))
          break
      }
  }
  $l()
}
function ps(e) {
  const t = bt(e)
  return t === e ? t : (Vt(t, 'iterate', zi), Oe(e) ? t : t.map(qt))
}
function jl(e) {
  return Vt((e = bt(e)), 'iterate', zi), e
}
const t_ = {
  __proto__: null,
  [Symbol.iterator]() {
    return ta(this, Symbol.iterator, qt)
  },
  concat(...e) {
    return ps(this).concat(...e.map(t => (ut(t) ? ps(t) : t)))
  },
  entries() {
    return ta(this, 'entries', e => ((e[1] = qt(e[1])), e))
  },
  every(e, t) {
    return Ke(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return Ke(this, 'filter', e, t, n => n.map(qt), arguments)
  },
  find(e, t) {
    return Ke(this, 'find', e, t, qt, arguments)
  },
  findIndex(e, t) {
    return Ke(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Ke(this, 'findLast', e, t, qt, arguments)
  },
  findLastIndex(e, t) {
    return Ke(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return Ke(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return ea(this, 'includes', e)
  },
  indexOf(...e) {
    return ea(this, 'indexOf', e)
  },
  join(e) {
    return ps(this).join(e)
  },
  lastIndexOf(...e) {
    return ea(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return Ke(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return ni(this, 'pop')
  },
  push(...e) {
    return ni(this, 'push', e)
  },
  reduce(e, ...t) {
    return qc(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return qc(this, 'reduceRight', e, t)
  },
  shift() {
    return ni(this, 'shift')
  },
  some(e, t) {
    return Ke(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return ni(this, 'splice', e)
  },
  toReversed() {
    return ps(this).toReversed()
  },
  toSorted(e) {
    return ps(this).toSorted(e)
  },
  toSpliced(...e) {
    return ps(this).toSpliced(...e)
  },
  unshift(...e) {
    return ni(this, 'unshift', e)
  },
  values() {
    return ta(this, 'values', qt)
  },
}
function ta(e, t, n) {
  const s = jl(e),
    i = s[t]()
  return (
    s !== e &&
      !Oe(e) &&
      ((i._next = i.next),
      (i.next = () => {
        const o = i._next()
        return o.value && (o.value = n(o.value)), o
      })),
    i
  )
}
const e_ = Array.prototype
function Ke(e, t, n, s, i, o) {
  const r = jl(e),
    a = r !== e && !Oe(e),
    l = r[t]
  if (l !== e_[t]) {
    const u = l.apply(e, o)
    return a ? qt(u) : u
  }
  let c = n
  r !== e &&
    (a
      ? (c = function (u, d) {
          return n.call(this, qt(u), d, e)
        })
      : n.length > 2 &&
        (c = function (u, d) {
          return n.call(this, u, d, e)
        }))
  const f = l.call(r, c, s)
  return a && i ? i(f) : f
}
function qc(e, t, n, s) {
  const i = jl(e)
  let o = n
  return (
    i !== e &&
      (Oe(e)
        ? n.length > 3 &&
          (o = function (r, a, l) {
            return n.call(this, r, a, l, e)
          })
        : (o = function (r, a, l) {
            return n.call(this, r, qt(a), l, e)
          })),
    i[t](o, ...s)
  )
}
function ea(e, t, n) {
  const s = bt(e)
  Vt(s, 'iterate', zi)
  const i = s[t](...n)
  return (i === -1 || i === !1) && eo(n[0])
    ? ((n[0] = bt(n[0])), s[t](...n))
    : i
}
function ni(e, t, n = []) {
  Nn(), Rl()
  const s = bt(e)[t].apply(e, n)
  return $l(), Rn(), s
}
const n_ = Ml('__proto__,__v_isRef,__isVue'),
  fh = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter(e => e !== 'arguments' && e !== 'caller')
      .map(e => Symbol[e])
      .filter(Ks),
  )
function s_(e) {
  Ks(e) || (e = String(e))
  const t = bt(this)
  return Vt(t, 'has', e), t.hasOwnProperty(e)
}
class uh {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    const i = this._isReadonly,
      o = this._isShallow
    if (n === '__v_isReactive') return !i
    if (n === '__v_isReadonly') return i
    if (n === '__v_isShallow') return o
    if (n === '__v_raw')
      return s === (i ? (o ? h_ : gh) : o ? ph : hh).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const r = ut(t)
    if (!i) {
      let l
      if (r && (l = t_[n])) return l
      if (n === 'hasOwnProperty') return s_
    }
    const a = Reflect.get(t, n, Yt(t) ? t : s)
    return (Ks(n) ? fh.has(n) : n_(n)) || (i || Vt(t, 'get', n), o)
      ? a
      : Yt(a)
        ? r && Ll(n)
          ? a
          : a.value
        : Nt(a)
          ? i
            ? _h(a)
            : Cr(a)
          : a
  }
}
class dh extends uh {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, i) {
    let o = t[n]
    if (!this._isShallow) {
      const l = ss(o)
      if (
        (!Oe(s) && !ss(s) && ((o = bt(o)), (s = bt(s))),
        !ut(t) && Yt(o) && !Yt(s))
      )
        return l ? !1 : ((o.value = s), !0)
    }
    const r = ut(t) && Ll(n) ? Number(n) < t.length : Et(t, n),
      a = Reflect.set(t, n, s, Yt(t) ? t : i)
    return (
      t === bt(i) && (r ? Tn(s, o) && en(t, 'set', n, s) : en(t, 'add', n, s)),
      a
    )
  }
  deleteProperty(t, n) {
    const s = Et(t, n)
    t[n]
    const i = Reflect.deleteProperty(t, n)
    return i && s && en(t, 'delete', n, void 0), i
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!Ks(n) || !fh.has(n)) && Vt(t, 'has', n), s
  }
  ownKeys(t) {
    return Vt(t, 'iterate', ut(t) ? 'length' : Jn), Reflect.ownKeys(t)
  }
}
class i_ extends uh {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const o_ = new dh(),
  r_ = new i_(),
  a_ = new dh(!0)
const Va = e => e,
  _o = e => Reflect.getPrototypeOf(e)
function l_(e, t, n) {
  return function (...s) {
    const i = this.__v_raw,
      o = bt(i),
      r = xi(o),
      a = e === 'entries' || (e === Symbol.iterator && r),
      l = e === 'keys' && r,
      c = i[e](...s),
      f = n ? Va : t ? Ua : qt
    return (
      !t && Vt(o, 'iterate', l ? Wa : Jn),
      {
        next() {
          const { value: u, done: d } = c.next()
          return d
            ? { value: u, done: d }
            : { value: a ? [f(u[0]), f(u[1])] : f(u), done: d }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function bo(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function c_(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw,
        r = bt(o),
        a = bt(i)
      e || (Tn(i, a) && Vt(r, 'get', i), Vt(r, 'get', a))
      const { has: l } = _o(r),
        c = t ? Va : e ? Ua : qt
      if (l.call(r, i)) return c(o.get(i))
      if (l.call(r, a)) return c(o.get(a))
      o !== r && o.get(i)
    },
    get size() {
      const i = this.__v_raw
      return !e && Vt(bt(i), 'iterate', Jn), Reflect.get(i, 'size', i)
    },
    has(i) {
      const o = this.__v_raw,
        r = bt(o),
        a = bt(i)
      return (
        e || (Tn(i, a) && Vt(r, 'has', i), Vt(r, 'has', a)),
        i === a ? o.has(i) : o.has(i) || o.has(a)
      )
    },
    forEach(i, o) {
      const r = this,
        a = r.__v_raw,
        l = bt(a),
        c = t ? Va : e ? Ua : qt
      return (
        !e && Vt(l, 'iterate', Jn),
        a.forEach((f, u) => i.call(o, c(f), c(u), r))
      )
    },
  }
  return (
    Ht(
      n,
      e
        ? {
            add: bo('add'),
            set: bo('set'),
            delete: bo('delete'),
            clear: bo('clear'),
          }
        : {
            add(i) {
              !t && !Oe(i) && !ss(i) && (i = bt(i))
              const o = bt(this)
              return (
                _o(o).has.call(o, i) || (o.add(i), en(o, 'add', i, i)), this
              )
            },
            set(i, o) {
              !t && !Oe(o) && !ss(o) && (o = bt(o))
              const r = bt(this),
                { has: a, get: l } = _o(r)
              let c = a.call(r, i)
              c || ((i = bt(i)), (c = a.call(r, i)))
              const f = l.call(r, i)
              return (
                r.set(i, o),
                c ? Tn(o, f) && en(r, 'set', i, o) : en(r, 'add', i, o),
                this
              )
            },
            delete(i) {
              const o = bt(this),
                { has: r, get: a } = _o(o)
              let l = r.call(o, i)
              l || ((i = bt(i)), (l = r.call(o, i))), a && a.call(o, i)
              const c = o.delete(i)
              return l && en(o, 'delete', i, void 0), c
            },
            clear() {
              const i = bt(this),
                o = i.size !== 0,
                r = i.clear()
              return o && en(i, 'clear', void 0, void 0), r
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach(i => {
      n[i] = l_(i, e, t)
    }),
    n
  )
}
function zl(e, t) {
  const n = c_(e, t)
  return (s, i, o) =>
    i === '__v_isReactive'
      ? !e
      : i === '__v_isReadonly'
        ? e
        : i === '__v_raw'
          ? s
          : Reflect.get(Et(n, i) && i in s ? n : s, i, o)
}
const f_ = { get: zl(!1, !1) },
  u_ = { get: zl(!1, !0) },
  d_ = { get: zl(!0, !1) }
const hh = new WeakMap(),
  ph = new WeakMap(),
  gh = new WeakMap(),
  h_ = new WeakMap()
function p_(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function g_(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : p_(Hm(e))
}
function Cr(e) {
  return ss(e) ? e : Bl(e, !1, o_, f_, hh)
}
function mh(e) {
  return Bl(e, !1, a_, u_, ph)
}
function _h(e) {
  return Bl(e, !0, r_, d_, gh)
}
function Bl(e, t, n, s, i) {
  if (!Nt(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = i.get(e)
  if (o) return o
  const r = g_(e)
  if (r === 0) return e
  const a = new Proxy(e, r === 2 ? s : n)
  return i.set(e, a), a
}
function Si(e) {
  return ss(e) ? Si(e.__v_raw) : !!(e && e.__v_isReactive)
}
function ss(e) {
  return !!(e && e.__v_isReadonly)
}
function Oe(e) {
  return !!(e && e.__v_isShallow)
}
function eo(e) {
  return e ? !!e.__v_raw : !1
}
function bt(e) {
  const t = e && e.__v_raw
  return t ? bt(t) : e
}
function m_(e) {
  return (
    !Et(e, '__v_skip') && Object.isExtensible(e) && th(e, '__v_skip', !0), e
  )
}
const qt = e => (Nt(e) ? Cr(e) : e),
  Ua = e => (Nt(e) ? _h(e) : e)
function Yt(e) {
  return e ? e.__v_isRef === !0 : !1
}
function bh(e) {
  return vh(e, !1)
}
function Wl(e) {
  return vh(e, !0)
}
function vh(e, t) {
  return Yt(e) ? e : new __(e, t)
}
class __ {
  constructor(t, n) {
    ;(this.dep = new Hl()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : bt(t)),
      (this._value = n ? t : qt(t)),
      (this.__v_isShallow = n)
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Oe(t) || ss(t)
    ;(t = s ? t : bt(t)),
      Tn(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : qt(t)),
        this.dep.trigger())
  }
}
function it(e) {
  return Yt(e) ? e.value : e
}
const b_ = {
  get: (e, t, n) => (t === '__v_raw' ? e : it(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const i = e[t]
    return Yt(i) && !Yt(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function yh(e) {
  return Si(e) ? e : new Proxy(e, b_)
}
class v_ {
  constructor(t, n, s) {
    ;(this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Hl(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = ji - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s)
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Ct !== this))
      return ih(this, !0), !0
  }
  get value() {
    const t = this.dep.track()
    return ah(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function y_(e, t, n = !1) {
  let s, i
  return ft(e) ? (s = e) : ((s = e.get), (i = e.set)), new v_(s, i, n)
}
const vo = {},
  Zo = new WeakMap()
let Yn
function x_(e, t = !1, n = Yn) {
  if (n) {
    let s = Zo.get(n)
    s || Zo.set(n, (s = [])), s.push(e)
  }
}
function E_(e, t, n = kt) {
  const {
      immediate: s,
      deep: i,
      once: o,
      scheduler: r,
      augmentJob: a,
      call: l,
    } = n,
    c = x => (i ? x : Oe(x) || i === !1 || i === 0 ? En(x, 1) : En(x))
  let f,
    u,
    d,
    h,
    _ = !1,
    g = !1
  if (
    (Yt(e)
      ? ((u = () => e.value), (_ = Oe(e)))
      : Si(e)
        ? ((u = () => c(e)), (_ = !0))
        : ut(e)
          ? ((g = !0),
            (_ = e.some(x => Si(x) || Oe(x))),
            (u = () =>
              e.map(x => {
                if (Yt(x)) return x.value
                if (Si(x)) return c(x)
                if (ft(x)) return l ? l(x, 2) : x()
              })))
          : ft(e)
            ? t
              ? (u = l ? () => l(e, 2) : e)
              : (u = () => {
                  if (d) {
                    Nn()
                    try {
                      d()
                    } finally {
                      Rn()
                    }
                  }
                  const x = Yn
                  Yn = f
                  try {
                    return l ? l(e, 3, [h]) : e(h)
                  } finally {
                    Yn = x
                  }
                })
            : (u = ze),
    t && i)
  ) {
    const x = u,
      T = i === !0 ? 1 / 0 : i
    u = () => En(x(), T)
  }
  const v = Qm(),
    m = () => {
      f.stop(), v && Dl(v.effects, f)
    }
  if (o && t) {
    const x = t
    t = (...T) => {
      x(...T), m()
    }
  }
  let y = g ? new Array(e.length).fill(vo) : vo
  const E = x => {
    if (!(!(f.flags & 1) || (!f.dirty && !x)))
      if (t) {
        const T = f.run()
        if (i || _ || (g ? T.some((P, R) => Tn(P, y[R])) : Tn(T, y))) {
          d && d()
          const P = Yn
          Yn = f
          try {
            const R = [T, y === vo ? void 0 : g && y[0] === vo ? [] : y, h]
            l ? l(t, 3, R) : t(...R), (y = T)
          } finally {
            Yn = P
          }
        }
      } else f.run()
  }
  return (
    a && a(E),
    (f = new nh(u)),
    (f.scheduler = r ? () => r(E, !1) : E),
    (h = x => x_(x, !1, f)),
    (d = f.onStop =
      () => {
        const x = Zo.get(f)
        if (x) {
          if (l) l(x, 4)
          else for (const T of x) T()
          Zo.delete(f)
        }
      }),
    t ? (s ? E(!0) : (y = f.run())) : r ? r(E.bind(null, !0), !0) : f.run(),
    (m.pause = f.pause.bind(f)),
    (m.resume = f.resume.bind(f)),
    (m.stop = m),
    m
  )
}
function En(e, t = 1 / 0, n) {
  if (t <= 0 || !Nt(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e
  if ((n.add(e), t--, Yt(e))) En(e.value, t, n)
  else if (ut(e)) for (let s = 0; s < e.length; s++) En(e[s], t, n)
  else if ($m(e) || xi(e))
    e.forEach(s => {
      En(s, t, n)
    })
  else if (jm(e)) {
    for (const s in e) En(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && En(e[s], t, n)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function no(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (i) {
    kr(i, t, n)
  }
}
function Ve(e, t, n, s) {
  if (ft(e)) {
    const i = no(e, t, n, s)
    return (
      i &&
        Zd(i) &&
        i.catch(o => {
          kr(o, t, n)
        }),
      i
    )
  }
  if (ut(e)) {
    const i = []
    for (let o = 0; o < e.length; o++) i.push(Ve(e[o], t, n, s))
    return i
  }
}
function kr(e, t, n, s = !0) {
  const i = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: r } =
      (t && t.appContext.config) || kt
  if (t) {
    let a = t.parent
    const l = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; a; ) {
      const f = a.ec
      if (f) {
        for (let u = 0; u < f.length; u++) if (f[u](e, l, c) === !1) return
      }
      a = a.parent
    }
    if (o) {
      Nn(), no(o, null, 10, [e, l, c]), Rn()
      return
    }
  }
  w_(e, n, i, s, r)
}
function w_(e, t, n, s = !0, i = !1) {
  if (i) throw e
  console.error(e)
}
const Gt = []
let Ne = -1
const Cs = []
let vn = null,
  ys = 0
const xh = Promise.resolve()
let tr = null
function Vl(e) {
  const t = tr || xh
  return e ? t.then(this ? e.bind(this) : e) : t
}
function A_(e) {
  let t = Ne + 1,
    n = Gt.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      i = Gt[s],
      o = Bi(i)
    o < e || (o === e && i.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function Ul(e) {
  if (!(e.flags & 1)) {
    const t = Bi(e),
      n = Gt[Gt.length - 1]
    !n || (!(e.flags & 2) && t >= Bi(n)) ? Gt.push(e) : Gt.splice(A_(t), 0, e),
      (e.flags |= 1),
      Eh()
  }
}
function Eh() {
  tr || (tr = xh.then(Ah))
}
function S_(e) {
  ut(e)
    ? Cs.push(...e)
    : vn && e.id === -1
      ? vn.splice(ys + 1, 0, e)
      : e.flags & 1 || (Cs.push(e), (e.flags |= 1)),
    Eh()
}
function Gc(e, t, n = Ne + 1) {
  for (; n < Gt.length; n++) {
    const s = Gt[n]
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue
      Gt.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2)
    }
  }
}
function wh(e) {
  if (Cs.length) {
    const t = [...new Set(Cs)].sort((n, s) => Bi(n) - Bi(s))
    if (((Cs.length = 0), vn)) {
      vn.push(...t)
      return
    }
    for (vn = t, ys = 0; ys < vn.length; ys++) {
      const n = vn[ys]
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2)
    }
    ;(vn = null), (ys = 0)
  }
}
const Bi = e => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function Ah(e) {
  try {
    for (Ne = 0; Ne < Gt.length; Ne++) {
      const t = Gt[Ne]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        no(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; Ne < Gt.length; Ne++) {
      const t = Gt[Ne]
      t && (t.flags &= -2)
    }
    ;(Ne = -1),
      (Gt.length = 0),
      wh(),
      (tr = null),
      (Gt.length || Cs.length) && Ah()
  }
}
let Se = null,
  Sh = null
function er(e) {
  const t = Se
  return (Se = e), (Sh = (e && e.type.__scopeId) || null), t
}
function Fe(e, t = Se, n) {
  if (!t || e._n) return e
  const s = (...i) => {
    s._d && of(-1)
    const o = er(t)
    let r
    try {
      r = e(...i)
    } finally {
      er(o), s._d && of(1)
    }
    return r
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function jn(e, t, n, s) {
  const i = e.dirs,
    o = t && t.dirs
  for (let r = 0; r < i.length; r++) {
    const a = i[r]
    o && (a.oldValue = o[r].value)
    let l = a.dir[s]
    l && (Nn(), Ve(l, n, 8, [e.el, a, e, t]), Rn())
  }
}
const T_ = Symbol('_vte'),
  O_ = e => e.__isTeleport
function Yl(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Yl(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
/*! #__NO_SIDE_EFFECTS__ */ function so(e, t) {
  return ft(e) ? Ht({ name: e.name }, t, { setup: e }) : e
}
function Th(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function Ya(e, t, n, s, i = !1) {
  if (ut(e)) {
    e.forEach((_, g) => Ya(_, t && (ut(t) ? t[g] : t), n, s, i))
    return
  }
  if (Ti(s) && !i) return
  const o = s.shapeFlag & 4 ? Jl(s.component) : s.el,
    r = i ? null : o,
    { i: a, r: l } = e,
    c = t && t.r,
    f = a.refs === kt ? (a.refs = {}) : a.refs,
    u = a.setupState,
    d = bt(u),
    h = u === kt ? () => !1 : _ => Et(d, _)
  if (
    (c != null &&
      c !== l &&
      (jt(c)
        ? ((f[c] = null), h(c) && (u[c] = null))
        : Yt(c) && (c.value = null)),
    ft(l))
  )
    no(l, a, 12, [r, f])
  else {
    const _ = jt(l),
      g = Yt(l)
    if (_ || g) {
      const v = () => {
        if (e.f) {
          const m = _ ? (h(l) ? u[l] : f[l]) : l.value
          i
            ? ut(m) && Dl(m, o)
            : ut(m)
              ? m.includes(o) || m.push(o)
              : _
                ? ((f[l] = [o]), h(l) && (u[l] = f[l]))
                : ((l.value = [o]), e.k && (f[e.k] = l.value))
        } else
          _
            ? ((f[l] = r), h(l) && (u[l] = r))
            : g && ((l.value = r), e.k && (f[e.k] = r))
      }
      r ? ((v.id = -1), ae(v, n)) : v()
    }
  }
}
Or().requestIdleCallback
Or().cancelIdleCallback
const Ti = e => !!e.type.__asyncLoader,
  Oh = e => e.type.__isKeepAlive
function C_(e, t) {
  Ch(e, 'a', t)
}
function k_(e, t) {
  Ch(e, 'da', t)
}
function Ch(e, t, n = Ut) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n
      for (; i; ) {
        if (i.isDeactivated) return
        i = i.parent
      }
      return e()
    })
  if ((Mr(t, s, n), n)) {
    let i = n.parent
    for (; i && i.parent; ) Oh(i.parent.vnode) && M_(s, t, n, i), (i = i.parent)
  }
}
function M_(e, t, n, s) {
  const i = Mr(t, e, s, !0)
  ql(() => {
    Dl(s[t], i)
  }, n)
}
function Mr(e, t, n = Ut, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...r) => {
          Nn()
          const a = io(n),
            l = Ve(t, n, e, r)
          return a(), Rn(), l
        })
    return s ? i.unshift(o) : i.push(o), o
  }
}
const un =
    e =>
    (t, n = Ut) => {
      ;(!Ui || e === 'sp') && Mr(e, (...s) => t(...s), n)
    },
  P_ = un('bm'),
  Kl = un('m'),
  D_ = un('bu'),
  L_ = un('u'),
  I_ = un('bum'),
  ql = un('um'),
  N_ = un('sp'),
  R_ = un('rtg'),
  $_ = un('rtc')
function F_(e, t = Ut) {
  Mr('ec', e, t)
}
const H_ = 'components'
function kh(e, t) {
  return z_(H_, e, !0, t) || e
}
const j_ = Symbol.for('v-ndc')
function z_(e, t, n = !0, s = !1) {
  const i = Se || Ut
  if (i) {
    const o = i.type
    {
      const a = Ob(o, !1)
      if (a && (a === t || a === ye(t) || a === Tr(ye(t)))) return o
    }
    const r = Xc(i[e] || o[e], t) || Xc(i.appContext[e], t)
    return !r && s ? o : r
  }
}
function Xc(e, t) {
  return e && (e[t] || e[ye(t)] || e[Tr(ye(t))])
}
const Ka = e => (e ? (Xh(e) ? Jl(e) : Ka(e.parent)) : null),
  Oi = Ht(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Ka(e.parent),
    $root: e => Ka(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => Gl(e),
    $forceUpdate: e =>
      e.f ||
      (e.f = () => {
        Ul(e.update)
      }),
    $nextTick: e => e.n || (e.n = Vl.bind(e.proxy)),
    $watch: e => lb.bind(e),
  }),
  na = (e, t) => e !== kt && !e.__isScriptSetup && Et(e, t),
  B_ = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const {
        ctx: n,
        setupState: s,
        data: i,
        props: o,
        accessCache: r,
        type: a,
        appContext: l,
      } = e
      let c
      if (t[0] !== '$') {
        const h = r[t]
        if (h !== void 0)
          switch (h) {
            case 1:
              return s[t]
            case 2:
              return i[t]
            case 4:
              return n[t]
            case 3:
              return o[t]
          }
        else {
          if (na(s, t)) return (r[t] = 1), s[t]
          if (i !== kt && Et(i, t)) return (r[t] = 2), i[t]
          if ((c = e.propsOptions[0]) && Et(c, t)) return (r[t] = 3), o[t]
          if (n !== kt && Et(n, t)) return (r[t] = 4), n[t]
          qa && (r[t] = 0)
        }
      }
      const f = Oi[t]
      let u, d
      if (f) return t === '$attrs' && Vt(e.attrs, 'get', ''), f(e)
      if ((u = a.__cssModules) && (u = u[t])) return u
      if (n !== kt && Et(n, t)) return (r[t] = 4), n[t]
      if (((d = l.config.globalProperties), Et(d, t))) return d[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: i, ctx: o } = e
      return na(i, t)
        ? ((i[t] = n), !0)
        : s !== kt && Et(s, t)
          ? ((s[t] = n), !0)
          : Et(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: i,
          propsOptions: o,
        },
      },
      r,
    ) {
      let a
      return (
        !!n[r] ||
        (e !== kt && Et(e, r)) ||
        na(t, r) ||
        ((a = o[0]) && Et(a, r)) ||
        Et(s, r) ||
        Et(Oi, r) ||
        Et(i.config.globalProperties, r)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Et(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function Qc(e) {
  return ut(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let qa = !0
function W_(e) {
  const t = Gl(e),
    n = e.proxy,
    s = e.ctx
  ;(qa = !1), t.beforeCreate && Jc(t.beforeCreate, e, 'bc')
  const {
    data: i,
    computed: o,
    methods: r,
    watch: a,
    provide: l,
    inject: c,
    created: f,
    beforeMount: u,
    mounted: d,
    beforeUpdate: h,
    updated: _,
    activated: g,
    deactivated: v,
    beforeDestroy: m,
    beforeUnmount: y,
    destroyed: E,
    unmounted: x,
    render: T,
    renderTracked: P,
    renderTriggered: R,
    errorCaptured: q,
    serverPrefetch: J,
    expose: G,
    inheritAttrs: tt,
    components: U,
    directives: rt,
    filters: At,
  } = t
  if ((c && V_(c, s, null), r))
    for (const N in r) {
      const H = r[N]
      ft(H) && (s[N] = H.bind(n))
    }
  if (i) {
    const N = i.call(n, n)
    Nt(N) && (e.data = Cr(N))
  }
  if (((qa = !0), o))
    for (const N in o) {
      const H = o[N],
        at = ft(H) ? H.bind(n, n) : ft(H.get) ? H.get.bind(n, n) : ze,
        S = !ft(H) && ft(H.set) ? H.set.bind(n) : ze,
        Lt = zt({ get: at, set: S })
      Object.defineProperty(s, N, {
        enumerable: !0,
        configurable: !0,
        get: () => Lt.value,
        set: j => (Lt.value = j),
      })
    }
  if (a) for (const N in a) Mh(a[N], s, n, N)
  if (l) {
    const N = ft(l) ? l.call(n) : l
    Reflect.ownKeys(N).forEach(H => {
      Bo(H, N[H])
    })
  }
  f && Jc(f, e, 'c')
  function k(N, H) {
    ut(H) ? H.forEach(at => N(at.bind(n))) : H && N(H.bind(n))
  }
  if (
    (k(P_, u),
    k(Kl, d),
    k(D_, h),
    k(L_, _),
    k(C_, g),
    k(k_, v),
    k(F_, q),
    k($_, P),
    k(R_, R),
    k(I_, y),
    k(ql, x),
    k(N_, J),
    ut(G))
  )
    if (G.length) {
      const N = e.exposed || (e.exposed = {})
      G.forEach(H => {
        Object.defineProperty(N, H, { get: () => n[H], set: at => (n[H] = at) })
      })
    } else e.exposed || (e.exposed = {})
  T && e.render === ze && (e.render = T),
    tt != null && (e.inheritAttrs = tt),
    U && (e.components = U),
    rt && (e.directives = rt),
    J && Th(e)
}
function V_(e, t, n = ze) {
  ut(e) && (e = Ga(e))
  for (const s in e) {
    const i = e[s]
    let o
    Nt(i)
      ? 'default' in i
        ? (o = sn(i.from || s, i.default, !0))
        : (o = sn(i.from || s))
      : (o = sn(i)),
      Yt(o)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: r => (o.value = r),
          })
        : (t[s] = o)
  }
}
function Jc(e, t, n) {
  Ve(ut(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Mh(e, t, n, s) {
  let i = s.includes('.') ? Vh(n, s) : () => n[s]
  if (jt(e)) {
    const o = t[e]
    ft(o) && Ms(i, o)
  } else if (ft(e)) Ms(i, e.bind(n))
  else if (Nt(e))
    if (ut(e)) e.forEach(o => Mh(o, t, n, s))
    else {
      const o = ft(e.handler) ? e.handler.bind(n) : t[e.handler]
      ft(o) && Ms(i, o, e)
    }
}
function Gl(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: i,
      optionsCache: o,
      config: { optionMergeStrategies: r },
    } = e.appContext,
    a = o.get(t)
  let l
  return (
    a
      ? (l = a)
      : !i.length && !n && !s
        ? (l = t)
        : ((l = {}), i.length && i.forEach(c => nr(l, c, r, !0)), nr(l, t, r)),
    Nt(t) && o.set(t, l),
    l
  )
}
function nr(e, t, n, s = !1) {
  const { mixins: i, extends: o } = t
  o && nr(e, o, n, !0), i && i.forEach(r => nr(e, r, n, !0))
  for (const r in t)
    if (!(s && r === 'expose')) {
      const a = U_[r] || (n && n[r])
      e[r] = a ? a(e[r], t[r]) : t[r]
    }
  return e
}
const U_ = {
  data: Zc,
  props: tf,
  emits: tf,
  methods: di,
  computed: di,
  beforeCreate: Kt,
  created: Kt,
  beforeMount: Kt,
  mounted: Kt,
  beforeUpdate: Kt,
  updated: Kt,
  beforeDestroy: Kt,
  beforeUnmount: Kt,
  destroyed: Kt,
  unmounted: Kt,
  activated: Kt,
  deactivated: Kt,
  errorCaptured: Kt,
  serverPrefetch: Kt,
  components: di,
  directives: di,
  watch: K_,
  provide: Zc,
  inject: Y_,
}
function Zc(e, t) {
  return t
    ? e
      ? function () {
          return Ht(
            ft(e) ? e.call(this, this) : e,
            ft(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function Y_(e, t) {
  return di(Ga(e), Ga(t))
}
function Ga(e) {
  if (ut(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Kt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function di(e, t) {
  return e ? Ht(Object.create(null), e, t) : t
}
function tf(e, t) {
  return e
    ? ut(e) && ut(t)
      ? [...new Set([...e, ...t])]
      : Ht(Object.create(null), Qc(e), Qc(t ?? {}))
    : t
}
function K_(e, t) {
  if (!e) return t
  if (!t) return e
  const n = Ht(Object.create(null), e)
  for (const s in t) n[s] = Kt(e[s], t[s])
  return n
}
function Ph() {
  return {
    app: null,
    config: {
      isNativeTag: Nm,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let q_ = 0
function G_(e, t) {
  return function (s, i = null) {
    ft(s) || (s = Ht({}, s)), i != null && !Nt(i) && (i = null)
    const o = Ph(),
      r = new WeakSet(),
      a = []
    let l = !1
    const c = (o.app = {
      _uid: q_++,
      _component: s,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Jh,
      get config() {
        return o.config
      },
      set config(f) {},
      use(f, ...u) {
        return (
          r.has(f) ||
            (f && ft(f.install)
              ? (r.add(f), f.install(c, ...u))
              : ft(f) && (r.add(f), f(c, ...u))),
          c
        )
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), c
      },
      component(f, u) {
        return u ? ((o.components[f] = u), c) : o.components[f]
      },
      directive(f, u) {
        return u ? ((o.directives[f] = u), c) : o.directives[f]
      },
      mount(f, u, d) {
        if (!l) {
          const h = c._ceVNode || Y(s, i)
          return (
            (h.appContext = o),
            d === !0 ? (d = 'svg') : d === !1 && (d = void 0),
            u && t ? t(h, f) : e(h, f, d),
            (l = !0),
            (c._container = f),
            (f.__vue_app__ = c),
            Jl(h.component)
          )
        }
      },
      onUnmount(f) {
        a.push(f)
      },
      unmount() {
        l &&
          (Ve(a, c._instance, 16),
          e(null, c._container),
          delete c._container.__vue_app__)
      },
      provide(f, u) {
        return (o.provides[f] = u), c
      },
      runWithContext(f) {
        const u = ks
        ks = c
        try {
          return f()
        } finally {
          ks = u
        }
      },
    })
    return c
  }
}
let ks = null
function Bo(e, t) {
  if (Ut) {
    let n = Ut.provides
    const s = Ut.parent && Ut.parent.provides
    s === n && (n = Ut.provides = Object.create(s)), (n[e] = t)
  }
}
function sn(e, t, n = !1) {
  const s = Ut || Se
  if (s || ks) {
    const i = ks
      ? ks._context.provides
      : s
        ? s.parent == null
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0
    if (i && e in i) return i[e]
    if (arguments.length > 1) return n && ft(t) ? t.call(s && s.proxy) : t
  }
}
const Dh = {},
  Lh = () => Object.create(Dh),
  Ih = e => Object.getPrototypeOf(e) === Dh
function X_(e, t, n, s = !1) {
  const i = {},
    o = Lh()
  ;(e.propsDefaults = Object.create(null)), Nh(e, t, i, o)
  for (const r in e.propsOptions[0]) r in i || (i[r] = void 0)
  n ? (e.props = s ? i : mh(i)) : e.type.props ? (e.props = i) : (e.props = o),
    (e.attrs = o)
}
function Q_(e, t, n, s) {
  const {
      props: i,
      attrs: o,
      vnode: { patchFlag: r },
    } = e,
    a = bt(i),
    [l] = e.propsOptions
  let c = !1
  if ((s || r > 0) && !(r & 16)) {
    if (r & 8) {
      const f = e.vnode.dynamicProps
      for (let u = 0; u < f.length; u++) {
        let d = f[u]
        if (Pr(e.emitsOptions, d)) continue
        const h = t[d]
        if (l)
          if (Et(o, d)) h !== o[d] && ((o[d] = h), (c = !0))
          else {
            const _ = ye(d)
            i[_] = Xa(l, a, _, h, e, !1)
          }
        else h !== o[d] && ((o[d] = h), (c = !0))
      }
    }
  } else {
    Nh(e, t, i, o) && (c = !0)
    let f
    for (const u in a)
      (!t || (!Et(t, u) && ((f = fs(u)) === u || !Et(t, f)))) &&
        (l
          ? n &&
            (n[u] !== void 0 || n[f] !== void 0) &&
            (i[u] = Xa(l, a, u, void 0, e, !0))
          : delete i[u])
    if (o !== a) for (const u in o) (!t || !Et(t, u)) && (delete o[u], (c = !0))
  }
  c && en(e.attrs, 'set', '')
}
function Nh(e, t, n, s) {
  const [i, o] = e.propsOptions
  let r = !1,
    a
  if (t)
    for (let l in t) {
      if (Ei(l)) continue
      const c = t[l]
      let f
      i && Et(i, (f = ye(l)))
        ? !o || !o.includes(f)
          ? (n[f] = c)
          : ((a || (a = {}))[f] = c)
        : Pr(e.emitsOptions, l) ||
          ((!(l in s) || c !== s[l]) && ((s[l] = c), (r = !0)))
    }
  if (o) {
    const l = bt(n),
      c = a || kt
    for (let f = 0; f < o.length; f++) {
      const u = o[f]
      n[u] = Xa(i, l, u, c[u], e, !Et(c, u))
    }
  }
  return r
}
function Xa(e, t, n, s, i, o) {
  const r = e[n]
  if (r != null) {
    const a = Et(r, 'default')
    if (a && s === void 0) {
      const l = r.default
      if (r.type !== Function && !r.skipFactory && ft(l)) {
        const { propsDefaults: c } = i
        if (n in c) s = c[n]
        else {
          const f = io(i)
          ;(s = c[n] = l.call(null, t)), f()
        }
      } else s = l
      i.ce && i.ce._setProp(n, s)
    }
    r[0] && (o && !a ? (s = !1) : r[1] && (s === '' || s === fs(n)) && (s = !0))
  }
  return s
}
const J_ = new WeakMap()
function Rh(e, t, n = !1) {
  const s = n ? J_ : t.propsCache,
    i = s.get(e)
  if (i) return i
  const o = e.props,
    r = {},
    a = []
  let l = !1
  if (!ft(e)) {
    const f = u => {
      l = !0
      const [d, h] = Rh(u, t, !0)
      Ht(r, d), h && a.push(...h)
    }
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f)
  }
  if (!o && !l) return Nt(e) && s.set(e, Os), Os
  if (ut(o))
    for (let f = 0; f < o.length; f++) {
      const u = ye(o[f])
      ef(u) && (r[u] = kt)
    }
  else if (o)
    for (const f in o) {
      const u = ye(f)
      if (ef(u)) {
        const d = o[f],
          h = (r[u] = ut(d) || ft(d) ? { type: d } : Ht({}, d)),
          _ = h.type
        let g = !1,
          v = !0
        if (ut(_))
          for (let m = 0; m < _.length; ++m) {
            const y = _[m],
              E = ft(y) && y.name
            if (E === 'Boolean') {
              g = !0
              break
            } else E === 'String' && (v = !1)
          }
        else g = ft(_) && _.name === 'Boolean'
        ;(h[0] = g), (h[1] = v), (g || Et(h, 'default')) && a.push(u)
      }
    }
  const c = [r, a]
  return Nt(e) && s.set(e, c), c
}
function ef(e) {
  return e[0] !== '$' && !Ei(e)
}
const $h = e => e[0] === '_' || e === '$stable',
  Xl = e => (ut(e) ? e.map($e) : [$e(e)]),
  Z_ = (e, t, n) => {
    if (t._n) return t
    const s = Fe((...i) => Xl(t(...i)), n)
    return (s._c = !1), s
  },
  Fh = (e, t, n) => {
    const s = e._ctx
    for (const i in e) {
      if ($h(i)) continue
      const o = e[i]
      if (ft(o)) t[i] = Z_(i, o, s)
      else if (o != null) {
        const r = Xl(o)
        t[i] = () => r
      }
    }
  },
  Hh = (e, t) => {
    const n = Xl(t)
    e.slots.default = () => n
  },
  jh = (e, t, n) => {
    for (const s in t) (n || s !== '_') && (e[s] = t[s])
  },
  tb = (e, t, n) => {
    const s = (e.slots = Lh())
    if (e.vnode.shapeFlag & 32) {
      const i = t._
      i ? (jh(s, t, n), n && th(s, '_', i, !0)) : Fh(t, s)
    } else t && Hh(e, t)
  },
  eb = (e, t, n) => {
    const { vnode: s, slots: i } = e
    let o = !0,
      r = kt
    if (s.shapeFlag & 32) {
      const a = t._
      a
        ? n && a === 1
          ? (o = !1)
          : jh(i, t, n)
        : ((o = !t.$stable), Fh(t, i)),
        (r = t)
    } else t && (Hh(e, t), (r = { default: 1 }))
    if (o) for (const a in i) !$h(a) && r[a] == null && delete i[a]
  },
  ae = gb
function nb(e) {
  return sb(e)
}
function sb(e, t) {
  const n = Or()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: i,
      patchProp: o,
      createElement: r,
      createText: a,
      createComment: l,
      setText: c,
      setElementText: f,
      parentNode: u,
      nextSibling: d,
      setScopeId: h = ze,
      insertStaticContent: _,
    } = e,
    g = (
      p,
      b,
      A,
      M = null,
      C = null,
      D = null,
      V = void 0,
      F = null,
      $ = !!b.dynamicChildren,
    ) => {
      if (p === b) return
      p && !si(p, b) && ((M = O(p)), j(p, C, D, !0), (p = null)),
        b.patchFlag === -2 && (($ = !1), (b.dynamicChildren = null))
      const { type: L, ref: et, shapeFlag: K } = b
      switch (L) {
        case Dr:
          v(p, b, A, M)
          break
        case Wi:
          m(p, b, A, M)
          break
        case Wo:
          p == null && y(b, A, M, V)
          break
        case Ze:
          U(p, b, A, M, C, D, V, F, $)
          break
        default:
          K & 1
            ? T(p, b, A, M, C, D, V, F, $)
            : K & 6
              ? rt(p, b, A, M, C, D, V, F, $)
              : (K & 64 || K & 128) && L.process(p, b, A, M, C, D, V, F, $, X)
      }
      et != null && C && Ya(et, p && p.ref, D, b || p, !b)
    },
    v = (p, b, A, M) => {
      if (p == null) s((b.el = a(b.children)), A, M)
      else {
        const C = (b.el = p.el)
        b.children !== p.children && c(C, b.children)
      }
    },
    m = (p, b, A, M) => {
      p == null ? s((b.el = l(b.children || '')), A, M) : (b.el = p.el)
    },
    y = (p, b, A, M) => {
      ;[p.el, p.anchor] = _(p.children, b, A, M, p.el, p.anchor)
    },
    E = ({ el: p, anchor: b }, A, M) => {
      let C
      for (; p && p !== b; ) (C = d(p)), s(p, A, M), (p = C)
      s(b, A, M)
    },
    x = ({ el: p, anchor: b }) => {
      let A
      for (; p && p !== b; ) (A = d(p)), i(p), (p = A)
      i(b)
    },
    T = (p, b, A, M, C, D, V, F, $) => {
      b.type === 'svg' ? (V = 'svg') : b.type === 'math' && (V = 'mathml'),
        p == null ? P(b, A, M, C, D, V, F, $) : J(p, b, C, D, V, F, $)
    },
    P = (p, b, A, M, C, D, V, F) => {
      let $, L
      const { props: et, shapeFlag: K, transition: Z, dirs: st } = p
      if (
        (($ = p.el = r(p.type, D, et && et.is, et)),
        K & 8
          ? f($, p.children)
          : K & 16 && q(p.children, $, null, M, C, sa(p, D), V, F),
        st && jn(p, null, M, 'created'),
        R($, p, p.scopeId, V, M),
        et)
      ) {
        for (const _t in et)
          _t !== 'value' && !Ei(_t) && o($, _t, null, et[_t], D, M)
        'value' in et && o($, 'value', null, et.value, D),
          (L = et.onVnodeBeforeMount) && De(L, M, p)
      }
      st && jn(p, null, M, 'beforeMount')
      const dt = ib(C, Z)
      dt && Z.beforeEnter($),
        s($, b, A),
        ((L = et && et.onVnodeMounted) || dt || st) &&
          ae(() => {
            L && De(L, M, p), dt && Z.enter($), st && jn(p, null, M, 'mounted')
          }, C)
    },
    R = (p, b, A, M, C) => {
      if ((A && h(p, A), M)) for (let D = 0; D < M.length; D++) h(p, M[D])
      if (C) {
        let D = C.subTree
        if (
          b === D ||
          (Yh(D.type) && (D.ssContent === b || D.ssFallback === b))
        ) {
          const V = C.vnode
          R(p, V, V.scopeId, V.slotScopeIds, C.parent)
        }
      }
    },
    q = (p, b, A, M, C, D, V, F, $ = 0) => {
      for (let L = $; L < p.length; L++) {
        const et = (p[L] = F ? yn(p[L]) : $e(p[L]))
        g(null, et, b, A, M, C, D, V, F)
      }
    },
    J = (p, b, A, M, C, D, V) => {
      const F = (b.el = p.el)
      let { patchFlag: $, dynamicChildren: L, dirs: et } = b
      $ |= p.patchFlag & 16
      const K = p.props || kt,
        Z = b.props || kt
      let st
      if (
        (A && zn(A, !1),
        (st = Z.onVnodeBeforeUpdate) && De(st, A, b, p),
        et && jn(b, p, A, 'beforeUpdate'),
        A && zn(A, !0),
        ((K.innerHTML && Z.innerHTML == null) ||
          (K.textContent && Z.textContent == null)) &&
          f(F, ''),
        L
          ? G(p.dynamicChildren, L, F, A, M, sa(b, C), D)
          : V || H(p, b, F, null, A, M, sa(b, C), D, !1),
        $ > 0)
      ) {
        if ($ & 16) tt(F, K, Z, A, C)
        else if (
          ($ & 2 && K.class !== Z.class && o(F, 'class', null, Z.class, C),
          $ & 4 && o(F, 'style', K.style, Z.style, C),
          $ & 8)
        ) {
          const dt = b.dynamicProps
          for (let _t = 0; _t < dt.length; _t++) {
            const xt = dt[_t],
              ie = K[xt],
              Wt = Z[xt]
            ;(Wt !== ie || xt === 'value') && o(F, xt, ie, Wt, C, A)
          }
        }
        $ & 1 && p.children !== b.children && f(F, b.children)
      } else !V && L == null && tt(F, K, Z, A, C)
      ;((st = Z.onVnodeUpdated) || et) &&
        ae(() => {
          st && De(st, A, b, p), et && jn(b, p, A, 'updated')
        }, M)
    },
    G = (p, b, A, M, C, D, V) => {
      for (let F = 0; F < b.length; F++) {
        const $ = p[F],
          L = b[F],
          et =
            $.el && ($.type === Ze || !si($, L) || $.shapeFlag & 70)
              ? u($.el)
              : A
        g($, L, et, null, M, C, D, V, !0)
      }
    },
    tt = (p, b, A, M, C) => {
      if (b !== A) {
        if (b !== kt)
          for (const D in b) !Ei(D) && !(D in A) && o(p, D, b[D], null, C, M)
        for (const D in A) {
          if (Ei(D)) continue
          const V = A[D],
            F = b[D]
          V !== F && D !== 'value' && o(p, D, F, V, C, M)
        }
        'value' in A && o(p, 'value', b.value, A.value, C)
      }
    },
    U = (p, b, A, M, C, D, V, F, $) => {
      const L = (b.el = p ? p.el : a('')),
        et = (b.anchor = p ? p.anchor : a(''))
      let { patchFlag: K, dynamicChildren: Z, slotScopeIds: st } = b
      st && (F = F ? F.concat(st) : st),
        p == null
          ? (s(L, A, M), s(et, A, M), q(b.children || [], A, et, C, D, V, F, $))
          : K > 0 && K & 64 && Z && p.dynamicChildren
            ? (G(p.dynamicChildren, Z, A, C, D, V, F),
              (b.key != null || (C && b === C.subTree)) && zh(p, b, !0))
            : H(p, b, A, et, C, D, V, F, $)
    },
    rt = (p, b, A, M, C, D, V, F, $) => {
      ;(b.slotScopeIds = F),
        p == null
          ? b.shapeFlag & 512
            ? C.ctx.activate(b, A, M, V, $)
            : At(b, A, M, C, D, V, $)
          : W(p, b, $)
    },
    At = (p, b, A, M, C, D, V) => {
      const F = (p.component = Eb(p, M, C))
      if ((Oh(p) && (F.ctx.renderer = X), wb(F, !1, V), F.asyncDep)) {
        if ((C && C.registerDep(F, k, V), !p.el)) {
          const $ = (F.subTree = Y(Wi))
          m(null, $, b, A)
        }
      } else k(F, p, b, A, C, D, V)
    },
    W = (p, b, A) => {
      const M = (b.component = p.component)
      if (hb(p, b, A))
        if (M.asyncDep && !M.asyncResolved) {
          N(M, b, A)
          return
        } else (M.next = b), M.update()
      else (b.el = p.el), (M.vnode = b)
    },
    k = (p, b, A, M, C, D, V) => {
      const F = () => {
        if (p.isMounted) {
          let { next: K, bu: Z, u: st, parent: dt, vnode: _t } = p
          {
            const oe = Bh(p)
            if (oe) {
              K && ((K.el = _t.el), N(p, K, V)),
                oe.asyncDep.then(() => {
                  p.isUnmounted || F()
                })
              return
            }
          }
          let xt = K,
            ie
          zn(p, !1),
            K ? ((K.el = _t.el), N(p, K, V)) : (K = _t),
            Z && Jr(Z),
            (ie = K.props && K.props.onVnodeBeforeUpdate) && De(ie, dt, K, _t),
            zn(p, !0)
          const Wt = ia(p),
            Ae = p.subTree
          ;(p.subTree = Wt),
            g(Ae, Wt, u(Ae.el), O(Ae), p, C, D),
            (K.el = Wt.el),
            xt === null && pb(p, Wt.el),
            st && ae(st, C),
            (ie = K.props && K.props.onVnodeUpdated) &&
              ae(() => De(ie, dt, K, _t), C)
        } else {
          let K
          const { el: Z, props: st } = b,
            { bm: dt, m: _t, parent: xt, root: ie, type: Wt } = p,
            Ae = Ti(b)
          if (
            (zn(p, !1),
            dt && Jr(dt),
            !Ae && (K = st && st.onVnodeBeforeMount) && De(K, xt, b),
            zn(p, !0),
            Z && yt)
          ) {
            const oe = () => {
              ;(p.subTree = ia(p)), yt(Z, p.subTree, p, C, null)
            }
            Ae && Wt.__asyncHydrate ? Wt.__asyncHydrate(Z, p, oe) : oe()
          } else {
            ie.ce && ie.ce._injectChildStyle(Wt)
            const oe = (p.subTree = ia(p))
            g(null, oe, A, M, p, C, D), (b.el = oe.el)
          }
          if ((_t && ae(_t, C), !Ae && (K = st && st.onVnodeMounted))) {
            const oe = b
            ae(() => De(K, xt, oe), C)
          }
          ;(b.shapeFlag & 256 ||
            (xt && Ti(xt.vnode) && xt.vnode.shapeFlag & 256)) &&
            p.a &&
            ae(p.a, C),
            (p.isMounted = !0),
            (b = A = M = null)
        }
      }
      p.scope.on()
      const $ = (p.effect = new nh(F))
      p.scope.off()
      const L = (p.update = $.run.bind($)),
        et = (p.job = $.runIfDirty.bind($))
      ;(et.i = p), (et.id = p.uid), ($.scheduler = () => Ul(et)), zn(p, !0), L()
    },
    N = (p, b, A) => {
      b.component = p
      const M = p.vnode.props
      ;(p.vnode = b),
        (p.next = null),
        Q_(p, b.props, M, A),
        eb(p, b.children, A),
        Nn(),
        Gc(p),
        Rn()
    },
    H = (p, b, A, M, C, D, V, F, $ = !1) => {
      const L = p && p.children,
        et = p ? p.shapeFlag : 0,
        K = b.children,
        { patchFlag: Z, shapeFlag: st } = b
      if (Z > 0) {
        if (Z & 128) {
          S(L, K, A, M, C, D, V, F, $)
          return
        } else if (Z & 256) {
          at(L, K, A, M, C, D, V, F, $)
          return
        }
      }
      st & 8
        ? (et & 16 && ot(L, C, D), K !== L && f(A, K))
        : et & 16
          ? st & 16
            ? S(L, K, A, M, C, D, V, F, $)
            : ot(L, C, D, !0)
          : (et & 8 && f(A, ''), st & 16 && q(K, A, M, C, D, V, F, $))
    },
    at = (p, b, A, M, C, D, V, F, $) => {
      ;(p = p || Os), (b = b || Os)
      const L = p.length,
        et = b.length,
        K = Math.min(L, et)
      let Z
      for (Z = 0; Z < K; Z++) {
        const st = (b[Z] = $ ? yn(b[Z]) : $e(b[Z]))
        g(p[Z], st, A, null, C, D, V, F, $)
      }
      L > et ? ot(p, C, D, !0, !1, K) : q(b, A, M, C, D, V, F, $, K)
    },
    S = (p, b, A, M, C, D, V, F, $) => {
      let L = 0
      const et = b.length
      let K = p.length - 1,
        Z = et - 1
      for (; L <= K && L <= Z; ) {
        const st = p[L],
          dt = (b[L] = $ ? yn(b[L]) : $e(b[L]))
        if (si(st, dt)) g(st, dt, A, null, C, D, V, F, $)
        else break
        L++
      }
      for (; L <= K && L <= Z; ) {
        const st = p[K],
          dt = (b[Z] = $ ? yn(b[Z]) : $e(b[Z]))
        if (si(st, dt)) g(st, dt, A, null, C, D, V, F, $)
        else break
        K--, Z--
      }
      if (L > K) {
        if (L <= Z) {
          const st = Z + 1,
            dt = st < et ? b[st].el : M
          for (; L <= Z; )
            g(null, (b[L] = $ ? yn(b[L]) : $e(b[L])), A, dt, C, D, V, F, $), L++
        }
      } else if (L > Z) for (; L <= K; ) j(p[L], C, D, !0), L++
      else {
        const st = L,
          dt = L,
          _t = new Map()
        for (L = dt; L <= Z; L++) {
          const re = (b[L] = $ ? yn(b[L]) : $e(b[L]))
          re.key != null && _t.set(re.key, L)
        }
        let xt,
          ie = 0
        const Wt = Z - dt + 1
        let Ae = !1,
          oe = 0
        const ei = new Array(Wt)
        for (L = 0; L < Wt; L++) ei[L] = 0
        for (L = st; L <= K; L++) {
          const re = p[L]
          if (ie >= Wt) {
            j(re, C, D, !0)
            continue
          }
          let Pe
          if (re.key != null) Pe = _t.get(re.key)
          else
            for (xt = dt; xt <= Z; xt++)
              if (ei[xt - dt] === 0 && si(re, b[xt])) {
                Pe = xt
                break
              }
          Pe === void 0
            ? j(re, C, D, !0)
            : ((ei[Pe - dt] = L + 1),
              Pe >= oe ? (oe = Pe) : (Ae = !0),
              g(re, b[Pe], A, null, C, D, V, F, $),
              ie++)
        }
        const Vc = Ae ? ob(ei) : Os
        for (xt = Vc.length - 1, L = Wt - 1; L >= 0; L--) {
          const re = dt + L,
            Pe = b[re],
            Uc = re + 1 < et ? b[re + 1].el : M
          ei[L] === 0
            ? g(null, Pe, A, Uc, C, D, V, F, $)
            : Ae && (xt < 0 || L !== Vc[xt] ? Lt(Pe, A, Uc, 2) : xt--)
        }
      }
    },
    Lt = (p, b, A, M, C = null) => {
      const { el: D, type: V, transition: F, children: $, shapeFlag: L } = p
      if (L & 6) {
        Lt(p.component.subTree, b, A, M)
        return
      }
      if (L & 128) {
        p.suspense.move(b, A, M)
        return
      }
      if (L & 64) {
        V.move(p, b, A, X)
        return
      }
      if (V === Ze) {
        s(D, b, A)
        for (let K = 0; K < $.length; K++) Lt($[K], b, A, M)
        s(p.anchor, b, A)
        return
      }
      if (V === Wo) {
        E(p, b, A)
        return
      }
      if (M !== 2 && L & 1 && F)
        if (M === 0) F.beforeEnter(D), s(D, b, A), ae(() => F.enter(D), C)
        else {
          const { leave: K, delayLeave: Z, afterLeave: st } = F,
            dt = () => s(D, b, A),
            _t = () => {
              K(D, () => {
                dt(), st && st()
              })
            }
          Z ? Z(D, dt, _t) : _t()
        }
      else s(D, b, A)
    },
    j = (p, b, A, M = !1, C = !1) => {
      const {
        type: D,
        props: V,
        ref: F,
        children: $,
        dynamicChildren: L,
        shapeFlag: et,
        patchFlag: K,
        dirs: Z,
        cacheIndex: st,
      } = p
      if (
        (K === -2 && (C = !1),
        F != null && Ya(F, null, A, p, !0),
        st != null && (b.renderCache[st] = void 0),
        et & 256)
      ) {
        b.ctx.deactivate(p)
        return
      }
      const dt = et & 1 && Z,
        _t = !Ti(p)
      let xt
      if ((_t && (xt = V && V.onVnodeBeforeUnmount) && De(xt, b, p), et & 6))
        gt(p.component, A, M)
      else {
        if (et & 128) {
          p.suspense.unmount(A, M)
          return
        }
        dt && jn(p, null, b, 'beforeUnmount'),
          et & 64
            ? p.type.remove(p, b, A, X, M)
            : L && !L.hasOnce && (D !== Ze || (K > 0 && K & 64))
              ? ot(L, b, A, !1, !0)
              : ((D === Ze && K & 384) || (!C && et & 16)) && ot($, b, A),
          M && lt(p)
      }
      ;((_t && (xt = V && V.onVnodeUnmounted)) || dt) &&
        ae(() => {
          xt && De(xt, b, p), dt && jn(p, null, b, 'unmounted')
        }, A)
    },
    lt = p => {
      const { type: b, el: A, anchor: M, transition: C } = p
      if (b === Ze) {
        ht(A, M)
        return
      }
      if (b === Wo) {
        x(p)
        return
      }
      const D = () => {
        i(A), C && !C.persisted && C.afterLeave && C.afterLeave()
      }
      if (p.shapeFlag & 1 && C && !C.persisted) {
        const { leave: V, delayLeave: F } = C,
          $ = () => V(A, D)
        F ? F(p.el, D, $) : $()
      } else D()
    },
    ht = (p, b) => {
      let A
      for (; p !== b; ) (A = d(p)), i(p), (p = A)
      i(b)
    },
    gt = (p, b, A) => {
      const { bum: M, scope: C, job: D, subTree: V, um: F, m: $, a: L } = p
      nf($),
        nf(L),
        M && Jr(M),
        C.stop(),
        D && ((D.flags |= 8), j(V, p, b, A)),
        F && ae(F, b),
        ae(() => {
          p.isUnmounted = !0
        }, b),
        b &&
          b.pendingBranch &&
          !b.isUnmounted &&
          p.asyncDep &&
          !p.asyncResolved &&
          p.suspenseId === b.pendingId &&
          (b.deps--, b.deps === 0 && b.resolve())
    },
    ot = (p, b, A, M = !1, C = !1, D = 0) => {
      for (let V = D; V < p.length; V++) j(p[V], b, A, M, C)
    },
    O = p => {
      if (p.shapeFlag & 6) return O(p.component.subTree)
      if (p.shapeFlag & 128) return p.suspense.next()
      const b = d(p.anchor || p.el),
        A = b && b[T_]
      return A ? d(A) : b
    }
  let B = !1
  const z = (p, b, A) => {
      p == null
        ? b._vnode && j(b._vnode, null, null, !0)
        : g(b._vnode || null, p, b, null, null, null, A),
        (b._vnode = p),
        B || ((B = !0), Gc(), wh(), (B = !1))
    },
    X = { p: g, um: j, m: Lt, r: lt, mt: At, mc: q, pc: H, pbc: G, n: O, o: e }
  let mt, yt
  return { render: z, hydrate: mt, createApp: G_(z, mt) }
}
function sa({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : n
}
function zn({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function ib(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function zh(e, t, n = !1) {
  const s = e.children,
    i = t.children
  if (ut(s) && ut(i))
    for (let o = 0; o < s.length; o++) {
      const r = s[o]
      let a = i[o]
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = i[o] = yn(i[o])), (a.el = r.el)),
        !n && a.patchFlag !== -2 && zh(r, a)),
        a.type === Dr && (a.el = r.el)
    }
}
function ob(e) {
  const t = e.slice(),
    n = [0]
  let s, i, o, r, a
  const l = e.length
  for (s = 0; s < l; s++) {
    const c = e[s]
    if (c !== 0) {
      if (((i = n[n.length - 1]), e[i] < c)) {
        ;(t[s] = i), n.push(s)
        continue
      }
      for (o = 0, r = n.length - 1; o < r; )
        (a = (o + r) >> 1), e[n[a]] < c ? (o = a + 1) : (r = a)
      c < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s))
    }
  }
  for (o = n.length, r = n[o - 1]; o-- > 0; ) (n[o] = r), (r = t[r])
  return n
}
function Bh(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Bh(t)
}
function nf(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const rb = Symbol.for('v-scx'),
  ab = () => sn(rb)
function Ms(e, t, n) {
  return Wh(e, t, n)
}
function Wh(e, t, n = kt) {
  const { immediate: s, deep: i, flush: o, once: r } = n,
    a = Ht({}, n),
    l = (t && s) || (!t && o !== 'post')
  let c
  if (Ui) {
    if (o === 'sync') {
      const h = ab()
      c = h.__watcherHandles || (h.__watcherHandles = [])
    } else if (!l) {
      const h = () => {}
      return (h.stop = ze), (h.resume = ze), (h.pause = ze), h
    }
  }
  const f = Ut
  a.call = (h, _, g) => Ve(h, f, _, g)
  let u = !1
  o === 'post'
    ? (a.scheduler = h => {
        ae(h, f && f.suspense)
      })
    : o !== 'sync' &&
      ((u = !0),
      (a.scheduler = (h, _) => {
        _ ? h() : Ul(h)
      })),
    (a.augmentJob = h => {
      t && (h.flags |= 4),
        u && ((h.flags |= 2), f && ((h.id = f.uid), (h.i = f)))
    })
  const d = E_(e, t, a)
  return Ui && (c ? c.push(d) : l && d()), d
}
function lb(e, t, n) {
  const s = this.proxy,
    i = jt(e) ? (e.includes('.') ? Vh(s, e) : () => s[e]) : e.bind(s, s)
  let o
  ft(t) ? (o = t) : ((o = t.handler), (n = t))
  const r = io(this),
    a = Wh(i, o.bind(s), n)
  return r(), a
}
function Vh(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let i = 0; i < n.length && s; i++) s = s[n[i]]
    return s
  }
}
const cb = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${ye(t)}Modifiers`] || e[`${fs(t)}Modifiers`]
function fb(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || kt
  let i = n
  const o = t.startsWith('update:'),
    r = o && cb(s, t.slice(7))
  r &&
    (r.trim && (i = n.map(f => (jt(f) ? f.trim() : f))),
    r.number && (i = n.map(Wm)))
  let a,
    l = s[(a = Qr(t))] || s[(a = Qr(ye(t)))]
  !l && o && (l = s[(a = Qr(fs(t)))]), l && Ve(l, e, 6, i)
  const c = s[a + 'Once']
  if (c) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[a]) return
    ;(e.emitted[a] = !0), Ve(c, e, 6, i)
  }
}
function Uh(e, t, n = !1) {
  const s = t.emitsCache,
    i = s.get(e)
  if (i !== void 0) return i
  const o = e.emits
  let r = {},
    a = !1
  if (!ft(e)) {
    const l = c => {
      const f = Uh(c, t, !0)
      f && ((a = !0), Ht(r, f))
    }
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l)
  }
  return !o && !a
    ? (Nt(e) && s.set(e, null), null)
    : (ut(o) ? o.forEach(l => (r[l] = null)) : Ht(r, o),
      Nt(e) && s.set(e, r),
      r)
}
function Pr(e, t) {
  return !e || !wr(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      Et(e, t[0].toLowerCase() + t.slice(1)) || Et(e, fs(t)) || Et(e, t))
}
function ia(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: i,
      propsOptions: [o],
      slots: r,
      attrs: a,
      emit: l,
      render: c,
      renderCache: f,
      props: u,
      data: d,
      setupState: h,
      ctx: _,
      inheritAttrs: g,
    } = e,
    v = er(e)
  let m, y
  try {
    if (n.shapeFlag & 4) {
      const x = i || s,
        T = x
      ;(m = $e(c.call(T, x, f, u, h, d, _))), (y = a)
    } else {
      const x = t
      ;(m = $e(
        x.length > 1 ? x(u, { attrs: a, slots: r, emit: l }) : x(u, null),
      )),
        (y = t.props ? a : ub(a))
    }
  } catch (x) {
    ;(Ci.length = 0), kr(x, e, 1), (m = Y(Wi))
  }
  let E = m
  if (y && g !== !1) {
    const x = Object.keys(y),
      { shapeFlag: T } = E
    x.length &&
      T & 7 &&
      (o && x.some(Pl) && (y = db(y, o)), (E = Ls(E, y, !1, !0)))
  }
  return (
    n.dirs &&
      ((E = Ls(E, null, !1, !0)),
      (E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Yl(E, n.transition),
    (m = E),
    er(v),
    m
  )
}
const ub = e => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || wr(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  db = (e, t) => {
    const n = {}
    for (const s in e) (!Pl(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function hb(e, t, n) {
  const { props: s, children: i, component: o } = e,
    { props: r, children: a, patchFlag: l } = t,
    c = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return s ? sf(s, r, c) : !!r
    if (l & 8) {
      const f = t.dynamicProps
      for (let u = 0; u < f.length; u++) {
        const d = f[u]
        if (r[d] !== s[d] && !Pr(c, d)) return !0
      }
    }
  } else
    return (i || a) && (!a || !a.$stable)
      ? !0
      : s === r
        ? !1
        : s
          ? r
            ? sf(s, r, c)
            : !0
          : !!r
  return !1
}
function sf(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let i = 0; i < s.length; i++) {
    const o = s[i]
    if (t[o] !== e[o] && !Pr(n, o)) return !0
  }
  return !1
}
function pb({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Yh = e => e.__isSuspense
function gb(e, t) {
  t && t.pendingBranch
    ? ut(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : S_(e)
}
const Ze = Symbol.for('v-fgt'),
  Dr = Symbol.for('v-txt'),
  Wi = Symbol.for('v-cmt'),
  Wo = Symbol.for('v-stc'),
  Ci = []
let fe = null
function dn(e = !1) {
  Ci.push((fe = e ? null : []))
}
function mb() {
  Ci.pop(), (fe = Ci[Ci.length - 1] || null)
}
let Vi = 1
function of(e) {
  ;(Vi += e), e < 0 && fe && (fe.hasOnce = !0)
}
function Kh(e) {
  return (
    (e.dynamicChildren = Vi > 0 ? fe || Os : null),
    mb(),
    Vi > 0 && fe && fe.push(e),
    e
  )
}
function us(e, t, n, s, i, o) {
  return Kh(w(e, t, n, s, i, o, !0))
}
function qh(e, t, n, s, i) {
  return Kh(Y(e, t, n, s, i, !0))
}
function sr(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function si(e, t) {
  return e.type === t.type && e.key === t.key
}
const Gh = ({ key: e }) => e ?? null,
  Vo = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? jt(e) || Yt(e) || ft(e)
        ? { i: Se, r: e, k: t, f: !!n }
        : e
      : null
  )
function w(
  e,
  t = null,
  n = null,
  s = 0,
  i = null,
  o = e === Ze ? 0 : 1,
  r = !1,
  a = !1,
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Gh(t),
    ref: t && Vo(t),
    scopeId: Sh,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Se,
  }
  return (
    a
      ? (Ql(l, n), o & 128 && e.normalize(l))
      : n && (l.shapeFlag |= jt(n) ? 8 : 16),
    Vi > 0 &&
      !r &&
      fe &&
      (l.patchFlag > 0 || o & 6) &&
      l.patchFlag !== 32 &&
      fe.push(l),
    l
  )
}
const Y = _b
function _b(e, t = null, n = null, s = 0, i = null, o = !1) {
  if (((!e || e === j_) && (e = Wi), sr(e))) {
    const a = Ls(e, t, !0)
    return (
      n && Ql(a, n),
      Vi > 0 &&
        !o &&
        fe &&
        (a.shapeFlag & 6 ? (fe[fe.indexOf(e)] = a) : fe.push(a)),
      (a.patchFlag = -2),
      a
    )
  }
  if ((Cb(e) && (e = e.__vccOpts), t)) {
    t = bb(t)
    let { class: a, style: l } = t
    a && !jt(a) && (t.class = Nl(a)),
      Nt(l) && (eo(l) && !ut(l) && (l = Ht({}, l)), (t.style = Il(l)))
  }
  const r = jt(e) ? 1 : Yh(e) ? 128 : O_(e) ? 64 : Nt(e) ? 4 : ft(e) ? 2 : 0
  return w(e, t, n, s, i, r, o, !0)
}
function bb(e) {
  return e ? (eo(e) || Ih(e) ? Ht({}, e) : e) : null
}
function Ls(e, t, n = !1, s = !1) {
  const { props: i, ref: o, patchFlag: r, children: a, transition: l } = e,
    c = t ? vb(i || {}, t) : i,
    f = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && Gh(c),
      ref:
        t && t.ref
          ? n && o
            ? ut(o)
              ? o.concat(Vo(t))
              : [o, Vo(t)]
            : Vo(t)
          : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Ze ? (r === -1 ? 16 : r | 16) : r,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Ls(e.ssContent),
      ssFallback: e.ssFallback && Ls(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return l && s && Yl(f, l.clone(f)), f
}
function wt(e = ' ', t = 0) {
  return Y(Dr, null, e, t)
}
function is(e, t) {
  const n = Y(Wo, null, e)
  return (n.staticCount = t), n
}
function $e(e) {
  return e == null || typeof e == 'boolean'
    ? Y(Wi)
    : ut(e)
      ? Y(Ze, null, e.slice())
      : sr(e)
        ? yn(e)
        : Y(Dr, null, String(e))
}
function yn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ls(e)
}
function Ql(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (ut(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const i = t.default
      i && (i._c && (i._d = !1), Ql(e, i()), i._c && (i._d = !0))
      return
    } else {
      n = 32
      const i = t._
      !i && !Ih(t)
        ? (t._ctx = Se)
        : i === 3 &&
          Se &&
          (Se.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    ft(t)
      ? ((t = { default: t, _ctx: Se }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [wt(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function vb(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const i in s)
      if (i === 'class')
        t.class !== s.class && (t.class = Nl([t.class, s.class]))
      else if (i === 'style') t.style = Il([t.style, s.style])
      else if (wr(i)) {
        const o = t[i],
          r = s[i]
        r &&
          o !== r &&
          !(ut(o) && o.includes(r)) &&
          (t[i] = o ? [].concat(o, r) : r)
      } else i !== '' && (t[i] = s[i])
  }
  return t
}
function De(e, t, n, s = null) {
  Ve(e, t, 7, [n, s])
}
const yb = Ph()
let xb = 0
function Eb(e, t, n) {
  const s = e.type,
    i = (t ? t.appContext : e.appContext) || yb,
    o = {
      uid: xb++,
      vnode: e,
      type: s,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Xm(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Rh(s, i),
      emitsOptions: Uh(s, i),
      emit: null,
      emitted: null,
      propsDefaults: kt,
      inheritAttrs: s.inheritAttrs,
      ctx: kt,
      data: kt,
      props: kt,
      attrs: kt,
      slots: kt,
      refs: kt,
      setupState: kt,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = fb.bind(null, o)),
    e.ce && e.ce(o),
    o
  )
}
let Ut = null,
  ir,
  Qa
{
  const e = Or(),
    t = (n, s) => {
      let i
      return (
        (i = e[n]) || (i = e[n] = []),
        i.push(s),
        o => {
          i.length > 1 ? i.forEach(r => r(o)) : i[0](o)
        }
      )
    }
  ;(ir = t('__VUE_INSTANCE_SETTERS__', n => (Ut = n))),
    (Qa = t('__VUE_SSR_SETTERS__', n => (Ui = n)))
}
const io = e => {
    const t = Ut
    return (
      ir(e),
      e.scope.on(),
      () => {
        e.scope.off(), ir(t)
      }
    )
  },
  rf = () => {
    Ut && Ut.scope.off(), ir(null)
  }
function Xh(e) {
  return e.vnode.shapeFlag & 4
}
let Ui = !1
function wb(e, t = !1, n = !1) {
  t && Qa(t)
  const { props: s, children: i } = e.vnode,
    o = Xh(e)
  X_(e, s, o, t), tb(e, i, n)
  const r = o ? Ab(e, t) : void 0
  return t && Qa(!1), r
}
function Ab(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, B_))
  const { setup: s } = n
  if (s) {
    Nn()
    const i = (e.setupContext = s.length > 1 ? Tb(e) : null),
      o = io(e),
      r = no(s, e, 0, [e.props, i]),
      a = Zd(r)
    if ((Rn(), o(), (a || e.sp) && !Ti(e) && Th(e), a)) {
      if ((r.then(rf, rf), t))
        return r
          .then(l => {
            af(e, l, t)
          })
          .catch(l => {
            kr(l, e, 0)
          })
      e.asyncDep = r
    } else af(e, r, t)
  } else Qh(e, t)
}
function af(e, t, n) {
  ft(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Nt(t) && (e.setupState = yh(t)),
    Qh(e, n)
}
let lf
function Qh(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && lf && !s.render) {
      const i = s.template || Gl(e).template
      if (i) {
        const { isCustomElement: o, compilerOptions: r } = e.appContext.config,
          { delimiters: a, compilerOptions: l } = s,
          c = Ht(Ht({ isCustomElement: o, delimiters: a }, r), l)
        s.render = lf(i, c)
      }
    }
    e.render = s.render || ze
  }
  {
    const i = io(e)
    Nn()
    try {
      W_(e)
    } finally {
      Rn(), i()
    }
  }
}
const Sb = {
  get(e, t) {
    return Vt(e, 'get', ''), e[t]
  },
}
function Tb(e) {
  const t = n => {
    e.exposed = n || {}
  }
  return {
    attrs: new Proxy(e.attrs, Sb),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Jl(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(yh(m_(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in Oi) return Oi[n](e)
          },
          has(t, n) {
            return n in t || n in Oi
          },
        }))
    : e.proxy
}
function Ob(e, t = !0) {
  return ft(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Cb(e) {
  return ft(e) && '__vccOpts' in e
}
const zt = (e, t) => y_(e, t, Ui)
function Is(e, t, n) {
  const s = arguments.length
  return s === 2
    ? Nt(t) && !ut(t)
      ? sr(t)
        ? Y(e, null, [t])
        : Y(e, t)
      : Y(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && sr(n) && (n = [n]),
      Y(e, t, n))
}
const Jh = '3.5.12'
/**
 * @vue/runtime-dom v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ja
const cf = typeof window < 'u' && window.trustedTypes
if (cf)
  try {
    Ja = cf.createPolicy('vue', { createHTML: e => e })
  } catch {}
const Zh = Ja ? e => Ja.createHTML(e) : e => e,
  kb = 'http://www.w3.org/2000/svg',
  Mb = 'http://www.w3.org/1998/Math/MathML',
  Je = typeof document < 'u' ? document : null,
  ff = Je && Je.createElement('template'),
  Pb = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: e => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const i =
        t === 'svg'
          ? Je.createElementNS(kb, e)
          : t === 'mathml'
            ? Je.createElementNS(Mb, e)
            : n
              ? Je.createElement(e, { is: n })
              : Je.createElement(e)
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          i.setAttribute('multiple', s.multiple),
        i
      )
    },
    createText: e => Je.createTextNode(e),
    createComment: e => Je.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Je.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, i, o) {
      const r = n ? n.previousSibling : t.lastChild
      if (i && (i === o || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === o || !(i = i.nextSibling));

        );
      else {
        ff.innerHTML = Zh(
          s === 'svg'
            ? `<svg>${e}</svg>`
            : s === 'mathml'
              ? `<math>${e}</math>`
              : e,
        )
        const a = ff.content
        if (s === 'svg' || s === 'mathml') {
          const l = a.firstChild
          for (; l.firstChild; ) a.appendChild(l.firstChild)
          a.removeChild(l)
        }
        t.insertBefore(a, n)
      }
      return [
        r ? r.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  },
  Db = Symbol('_vtc')
function Lb(e, t, n) {
  const s = e[Db]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
        ? e.setAttribute('class', t)
        : (e.className = t)
}
const uf = Symbol('_vod'),
  Ib = Symbol('_vsh'),
  Nb = Symbol(''),
  Rb = /(^|;)\s*display\s*:/
function $b(e, t, n) {
  const s = e.style,
    i = jt(n)
  let o = !1
  if (n && !i) {
    if (t)
      if (jt(t))
        for (const r of t.split(';')) {
          const a = r.slice(0, r.indexOf(':')).trim()
          n[a] == null && Uo(s, a, '')
        }
      else for (const r in t) n[r] == null && Uo(s, r, '')
    for (const r in n) r === 'display' && (o = !0), Uo(s, r, n[r])
  } else if (i) {
    if (t !== n) {
      const r = s[Nb]
      r && (n += ';' + r), (s.cssText = n), (o = Rb.test(n))
    }
  } else t && e.removeAttribute('style')
  uf in e && ((e[uf] = o ? s.display : ''), e[Ib] && (s.display = 'none'))
}
const df = /\s*!important$/
function Uo(e, t, n) {
  if (ut(n)) n.forEach(s => Uo(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = Fb(e, t)
    df.test(n)
      ? e.setProperty(fs(s), n.replace(df, ''), 'important')
      : (e[s] = n)
  }
}
const hf = ['Webkit', 'Moz', 'ms'],
  oa = {}
function Fb(e, t) {
  const n = oa[t]
  if (n) return n
  let s = ye(t)
  if (s !== 'filter' && s in e) return (oa[t] = s)
  s = Tr(s)
  for (let i = 0; i < hf.length; i++) {
    const o = hf[i] + s
    if (o in e) return (oa[t] = o)
  }
  return t
}
const pf = 'http://www.w3.org/1999/xlink'
function gf(e, t, n, s, i, o = Gm(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(pf, t.slice(6, t.length))
      : e.setAttributeNS(pf, t, n)
    : n == null || (o && !eh(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : Ks(n) ? String(n) : n)
}
function mf(e, t, n, s, i) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? Zh(n) : n)
    return
  }
  const o = e.tagName
  if (t === 'value' && o !== 'PROGRESS' && !o.includes('-')) {
    const a = o === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      l = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
    ;(a !== l || !('_value' in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let r = !1
  if (n === '' || n == null) {
    const a = typeof e[t]
    a === 'boolean'
      ? (n = eh(n))
      : n == null && a === 'string'
        ? ((n = ''), (r = !0))
        : a === 'number' && ((n = 0), (r = !0))
  }
  try {
    e[t] = n
  } catch {}
  r && e.removeAttribute(i || t)
}
function Hb(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function jb(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const _f = Symbol('_vei')
function zb(e, t, n, s, i = null) {
  const o = e[_f] || (e[_f] = {}),
    r = o[t]
  if (s && r) r.value = s
  else {
    const [a, l] = Bb(t)
    if (s) {
      const c = (o[t] = Ub(s, i))
      Hb(e, a, c, l)
    } else r && (jb(e, a, r, l), (o[t] = void 0))
  }
}
const bf = /(?:Once|Passive|Capture)$/
function Bb(e) {
  let t
  if (bf.test(e)) {
    t = {}
    let s
    for (; (s = e.match(bf)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : fs(e.slice(2)), t]
}
let ra = 0
const Wb = Promise.resolve(),
  Vb = () => ra || (Wb.then(() => (ra = 0)), (ra = Date.now()))
function Ub(e, t) {
  const n = s => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Ve(Yb(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = Vb()), n
}
function Yb(e, t) {
  if (ut(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map(s => i => !i._stopped && s && s(i))
    )
  } else return t
}
const vf = e =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Kb = (e, t, n, s, i, o) => {
    const r = i === 'svg'
    t === 'class'
      ? Lb(e, s, r)
      : t === 'style'
        ? $b(e, n, s)
        : wr(t)
          ? Pl(t) || zb(e, t, n, s, o)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : qb(e, t, s, r)
              )
            ? (mf(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                gf(e, t, s, r, o, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !jt(s))
              ? mf(e, ye(t), s, o, t)
              : (t === 'true-value'
                  ? (e._trueValue = s)
                  : t === 'false-value' && (e._falseValue = s),
                gf(e, t, s, r))
  }
function qb(e, t, n, s) {
  if (s)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && vf(t) && ft(n))
    )
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const i = e.tagName
    if (i === 'IMG' || i === 'VIDEO' || i === 'CANVAS' || i === 'SOURCE')
      return !1
  }
  return vf(t) && jt(n) ? !1 : t in e
}
const Gb = Ht({ patchProp: Kb }, Pb)
let yf
function Xb() {
  return yf || (yf = nb(Gb))
}
const Qb = (...e) => {
  const t = Xb().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = s => {
      const i = Zb(s)
      if (!i) return
      const o = t._component
      !ft(o) && !o.render && !o.template && (o.template = i.innerHTML),
        i.nodeType === 1 && (i.textContent = '')
      const r = n(i, !1, Jb(i))
      return (
        i instanceof Element &&
          (i.removeAttribute('v-cloak'), i.setAttribute('data-v-app', '')),
        r
      )
    }),
    t
  )
}
function Jb(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml'
}
function Zb(e) {
  return jt(e) ? document.querySelector(e) : e
}
/*!
 * vue-router v4.4.5
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const xs = typeof document < 'u'
function tp(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  )
}
function tv(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === 'Module' ||
    (e.default && tp(e.default))
  )
}
const St = Object.assign
function aa(e, t) {
  const n = {}
  for (const s in t) {
    const i = t[s]
    n[s] = Ce(i) ? i.map(e) : e(i)
  }
  return n
}
const ki = () => {},
  Ce = Array.isArray,
  ep = /#/g,
  ev = /&/g,
  nv = /\//g,
  sv = /=/g,
  iv = /\?/g,
  np = /\+/g,
  ov = /%5B/g,
  rv = /%5D/g,
  sp = /%5E/g,
  av = /%60/g,
  ip = /%7B/g,
  lv = /%7C/g,
  op = /%7D/g,
  cv = /%20/g
function Zl(e) {
  return encodeURI('' + e)
    .replace(lv, '|')
    .replace(ov, '[')
    .replace(rv, ']')
}
function fv(e) {
  return Zl(e).replace(ip, '{').replace(op, '}').replace(sp, '^')
}
function Za(e) {
  return Zl(e)
    .replace(np, '%2B')
    .replace(cv, '+')
    .replace(ep, '%23')
    .replace(ev, '%26')
    .replace(av, '`')
    .replace(ip, '{')
    .replace(op, '}')
    .replace(sp, '^')
}
function uv(e) {
  return Za(e).replace(sv, '%3D')
}
function dv(e) {
  return Zl(e).replace(ep, '%23').replace(iv, '%3F')
}
function hv(e) {
  return e == null ? '' : dv(e).replace(nv, '%2F')
}
function Yi(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const pv = /\/$/,
  gv = e => e.replace(pv, '')
function la(e, t, n = '/') {
  let s,
    i = {},
    o = '',
    r = ''
  const a = t.indexOf('#')
  let l = t.indexOf('?')
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((s = t.slice(0, l)),
      (o = t.slice(l + 1, a > -1 ? a : t.length)),
      (i = e(o))),
    a > -1 && ((s = s || t.slice(0, a)), (r = t.slice(a, t.length))),
    (s = vv(s ?? t, n)),
    { fullPath: s + (o && '?') + o + r, path: s, query: i, hash: Yi(r) }
  )
}
function mv(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function xf(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/'
}
function _v(e, t, n) {
  const s = t.matched.length - 1,
    i = n.matched.length - 1
  return (
    s > -1 &&
    s === i &&
    Ns(t.matched[s], n.matched[i]) &&
    rp(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Ns(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function rp(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!bv(e[n], t[n])) return !1
  return !0
}
function bv(e, t) {
  return Ce(e) ? Ef(e, t) : Ce(t) ? Ef(t, e) : e === t
}
function Ef(e, t) {
  return Ce(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function vv(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    s = e.split('/'),
    i = s[s.length - 1]
  ;(i === '..' || i === '.') && s.push('')
  let o = n.length - 1,
    r,
    a
  for (r = 0; r < s.length; r++)
    if (((a = s[r]), a !== '.'))
      if (a === '..') o > 1 && o--
      else break
  return n.slice(0, o).join('/') + '/' + s.slice(r).join('/')
}
const gn = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
}
var Ki
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(Ki || (Ki = {}))
var Mi
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Mi || (Mi = {}))
function yv(e) {
  if (!e)
    if (xs) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), gv(e)
}
const xv = /^[^#]+#/
function Ev(e, t) {
  return e.replace(xv, '#') + t
}
function wv(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  }
}
const Lr = () => ({ left: window.scrollX, top: window.scrollY })
function Av(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      i =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!i) return
    t = wv(i, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      )
}
function wf(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const tl = new Map()
function Sv(e, t) {
  tl.set(e, t)
}
function Tv(e) {
  const t = tl.get(e)
  return tl.delete(e), t
}
let Ov = () => location.protocol + '//' + location.host
function ap(e, t) {
  const { pathname: n, search: s, hash: i } = t,
    o = e.indexOf('#')
  if (o > -1) {
    let a = i.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = i.slice(a)
    return l[0] !== '/' && (l = '/' + l), xf(l, '')
  }
  return xf(n, e) + s + i
}
function Cv(e, t, n, s) {
  let i = [],
    o = [],
    r = null
  const a = ({ state: d }) => {
    const h = ap(e, location),
      _ = n.value,
      g = t.value
    let v = 0
    if (d) {
      if (((n.value = h), (t.value = d), r && r === _)) {
        r = null
        return
      }
      v = g ? d.position - g.position : 0
    } else s(h)
    i.forEach(m => {
      m(n.value, _, {
        delta: v,
        type: Ki.pop,
        direction: v ? (v > 0 ? Mi.forward : Mi.back) : Mi.unknown,
      })
    })
  }
  function l() {
    r = n.value
  }
  function c(d) {
    i.push(d)
    const h = () => {
      const _ = i.indexOf(d)
      _ > -1 && i.splice(_, 1)
    }
    return o.push(h), h
  }
  function f() {
    const { history: d } = window
    d.state && d.replaceState(St({}, d.state, { scroll: Lr() }), '')
  }
  function u() {
    for (const d of o) d()
    ;(o = []),
      window.removeEventListener('popstate', a),
      window.removeEventListener('beforeunload', f)
  }
  return (
    window.addEventListener('popstate', a),
    window.addEventListener('beforeunload', f, { passive: !0 }),
    { pauseListeners: l, listen: c, destroy: u }
  )
}
function Af(e, t, n, s = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: i ? Lr() : null,
  }
}
function kv(e) {
  const { history: t, location: n } = window,
    s = { value: ap(e, n) },
    i = { value: t.state }
  i.value ||
    o(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    )
  function o(l, c, f) {
    const u = e.indexOf('#'),
      d =
        u > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(u)) + l
          : Ov() + e + l
    try {
      t[f ? 'replaceState' : 'pushState'](c, '', d), (i.value = c)
    } catch (h) {
      console.error(h), n[f ? 'replace' : 'assign'](d)
    }
  }
  function r(l, c) {
    const f = St({}, t.state, Af(i.value.back, l, i.value.forward, !0), c, {
      position: i.value.position,
    })
    o(l, f, !0), (s.value = l)
  }
  function a(l, c) {
    const f = St({}, i.value, t.state, { forward: l, scroll: Lr() })
    o(f.current, f, !0)
    const u = St({}, Af(s.value, l, null), { position: f.position + 1 }, c)
    o(l, u, !1), (s.value = l)
  }
  return { location: s, state: i, push: a, replace: r }
}
function Mv(e) {
  e = yv(e)
  const t = kv(e),
    n = Cv(e, t.state, t.location, t.replace)
  function s(o, r = !0) {
    r || n.pauseListeners(), history.go(o)
  }
  const i = St(
    { location: '', base: e, go: s, createHref: Ev.bind(null, e) },
    t,
    n,
  )
  return (
    Object.defineProperty(i, 'location', {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(i, 'state', {
      enumerable: !0,
      get: () => t.state.value,
    }),
    i
  )
}
function Pv(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function lp(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const cp = Symbol('')
var Sf
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(Sf || (Sf = {}))
function Rs(e, t) {
  return St(new Error(), { type: e, [cp]: !0 }, t)
}
function qe(e, t) {
  return e instanceof Error && cp in e && (t == null || !!(e.type & t))
}
const Tf = '[^/]+?',
  Dv = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Lv = /[.+*?^${}()[\]/\\]/g
function Iv(e, t) {
  const n = St({}, Dv, t),
    s = []
  let i = n.start ? '^' : ''
  const o = []
  for (const c of e) {
    const f = c.length ? [] : [90]
    n.strict && !c.length && (i += '/')
    for (let u = 0; u < c.length; u++) {
      const d = c[u]
      let h = 40 + (n.sensitive ? 0.25 : 0)
      if (d.type === 0)
        u || (i += '/'), (i += d.value.replace(Lv, '\\$&')), (h += 40)
      else if (d.type === 1) {
        const { value: _, repeatable: g, optional: v, regexp: m } = d
        o.push({ name: _, repeatable: g, optional: v })
        const y = m || Tf
        if (y !== Tf) {
          h += 10
          try {
            new RegExp(`(${y})`)
          } catch (x) {
            throw new Error(
              `Invalid custom RegExp for param "${_}" (${y}): ` + x.message,
            )
          }
        }
        let E = g ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`
        u || (E = v && c.length < 2 ? `(?:/${E})` : '/' + E),
          v && (E += '?'),
          (i += E),
          (h += 20),
          v && (h += -8),
          g && (h += -20),
          y === '.*' && (h += -50)
      }
      f.push(h)
    }
    s.push(f)
  }
  if (n.strict && n.end) {
    const c = s.length - 1
    s[c][s[c].length - 1] += 0.7000000000000001
  }
  n.strict || (i += '/?'), n.end ? (i += '$') : n.strict && (i += '(?:/|$)')
  const r = new RegExp(i, n.sensitive ? '' : 'i')
  function a(c) {
    const f = c.match(r),
      u = {}
    if (!f) return null
    for (let d = 1; d < f.length; d++) {
      const h = f[d] || '',
        _ = o[d - 1]
      u[_.name] = h && _.repeatable ? h.split('/') : h
    }
    return u
  }
  function l(c) {
    let f = '',
      u = !1
    for (const d of e) {
      ;(!u || !f.endsWith('/')) && (f += '/'), (u = !1)
      for (const h of d)
        if (h.type === 0) f += h.value
        else if (h.type === 1) {
          const { value: _, repeatable: g, optional: v } = h,
            m = _ in c ? c[_] : ''
          if (Ce(m) && !g)
            throw new Error(
              `Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const y = Ce(m) ? m.join('/') : m
          if (!y)
            if (v)
              d.length < 2 &&
                (f.endsWith('/') ? (f = f.slice(0, -1)) : (u = !0))
            else throw new Error(`Missing required param "${_}"`)
          f += y
        }
    }
    return f || '/'
  }
  return { re: r, score: s, keys: o, parse: a, stringify: l }
}
function Nv(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n]
    if (s) return s
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0
}
function fp(e, t) {
  let n = 0
  const s = e.score,
    i = t.score
  for (; n < s.length && n < i.length; ) {
    const o = Nv(s[n], i[n])
    if (o) return o
    n++
  }
  if (Math.abs(i.length - s.length) === 1) {
    if (Of(s)) return 1
    if (Of(i)) return -1
  }
  return i.length - s.length
}
function Of(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const Rv = { type: 0, value: '' },
  $v = /[a-zA-Z0-9_]/
function Fv(e) {
  if (!e) return [[]]
  if (e === '/') return [[Rv]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(h) {
    throw new Error(`ERR (${n})/"${c}": ${h}`)
  }
  let n = 0,
    s = n
  const i = []
  let o
  function r() {
    o && i.push(o), (o = [])
  }
  let a = 0,
    l,
    c = '',
    f = ''
  function u() {
    c &&
      (n === 0
        ? o.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
          ? (o.length > 1 &&
              (l === '*' || l === '+') &&
              t(
                `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`,
              ),
            o.push({
              type: 1,
              value: c,
              regexp: f,
              repeatable: l === '*' || l === '+',
              optional: l === '*' || l === '?',
            }))
          : t('Invalid state to consume buffer'),
      (c = ''))
  }
  function d() {
    c += l
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === '\\' && n !== 2)) {
      ;(s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        l === '/' ? (c && u(), r()) : l === ':' ? (u(), (n = 1)) : d()
        break
      case 4:
        d(), (n = s)
        break
      case 1:
        l === '('
          ? (n = 2)
          : $v.test(l)
            ? d()
            : (u(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--)
        break
      case 2:
        l === ')'
          ? f[f.length - 1] == '\\'
            ? (f = f.slice(0, -1) + l)
            : (n = 3)
          : (f += l)
        break
      case 3:
        u(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--, (f = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), u(), r(), i
}
function Hv(e, t, n) {
  const s = Iv(Fv(e.path), n),
    i = St(s, { record: e, parent: t, children: [], alias: [] })
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i
}
function jv(e, t) {
  const n = [],
    s = new Map()
  t = Pf({ strict: !1, end: !0, sensitive: !1 }, t)
  function i(u) {
    return s.get(u)
  }
  function o(u, d, h) {
    const _ = !h,
      g = kf(u)
    g.aliasOf = h && h.record
    const v = Pf(t, u),
      m = [g]
    if ('alias' in u) {
      const x = typeof u.alias == 'string' ? [u.alias] : u.alias
      for (const T of x)
        m.push(
          kf(
            St({}, g, {
              components: h ? h.record.components : g.components,
              path: T,
              aliasOf: h ? h.record : g,
            }),
          ),
        )
    }
    let y, E
    for (const x of m) {
      const { path: T } = x
      if (d && T[0] !== '/') {
        const P = d.record.path,
          R = P[P.length - 1] === '/' ? '' : '/'
        x.path = d.record.path + (T && R + T)
      }
      if (
        ((y = Hv(x, d, v)),
        h
          ? h.alias.push(y)
          : ((E = E || y),
            E !== y && E.alias.push(y),
            _ && u.name && !Mf(y) && r(u.name)),
        up(y) && l(y),
        g.children)
      ) {
        const P = g.children
        for (let R = 0; R < P.length; R++) o(P[R], y, h && h.children[R])
      }
      h = h || y
    }
    return E
      ? () => {
          r(E)
        }
      : ki
  }
  function r(u) {
    if (lp(u)) {
      const d = s.get(u)
      d &&
        (s.delete(u),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(r),
        d.alias.forEach(r))
    } else {
      const d = n.indexOf(u)
      d > -1 &&
        (n.splice(d, 1),
        u.record.name && s.delete(u.record.name),
        u.children.forEach(r),
        u.alias.forEach(r))
    }
  }
  function a() {
    return n
  }
  function l(u) {
    const d = Wv(u, n)
    n.splice(d, 0, u), u.record.name && !Mf(u) && s.set(u.record.name, u)
  }
  function c(u, d) {
    let h,
      _ = {},
      g,
      v
    if ('name' in u && u.name) {
      if (((h = s.get(u.name)), !h)) throw Rs(1, { location: u })
      ;(v = h.record.name),
        (_ = St(
          Cf(
            d.params,
            h.keys
              .filter(E => !E.optional)
              .concat(h.parent ? h.parent.keys.filter(E => E.optional) : [])
              .map(E => E.name),
          ),
          u.params &&
            Cf(
              u.params,
              h.keys.map(E => E.name),
            ),
        )),
        (g = h.stringify(_))
    } else if (u.path != null)
      (g = u.path),
        (h = n.find(E => E.re.test(g))),
        h && ((_ = h.parse(g)), (v = h.record.name))
    else {
      if (((h = d.name ? s.get(d.name) : n.find(E => E.re.test(d.path))), !h))
        throw Rs(1, { location: u, currentLocation: d })
      ;(v = h.record.name),
        (_ = St({}, d.params, u.params)),
        (g = h.stringify(_))
    }
    const m = []
    let y = h
    for (; y; ) m.unshift(y.record), (y = y.parent)
    return { name: v, path: g, params: _, matched: m, meta: Bv(m) }
  }
  e.forEach(u => o(u))
  function f() {
    ;(n.length = 0), s.clear()
  }
  return {
    addRoute: o,
    resolve: c,
    removeRoute: r,
    clearRoutes: f,
    getRoutes: a,
    getRecordMatcher: i,
  }
}
function Cf(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function kf(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: zv(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e
        ? e.components || null
        : e.component && { default: e.component },
  }
  return Object.defineProperty(t, 'mods', { value: {} }), t
}
function zv(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n
  return t
}
function Mf(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Bv(e) {
  return e.reduce((t, n) => St(t, n.meta), {})
}
function Pf(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function Wv(e, t) {
  let n = 0,
    s = t.length
  for (; n !== s; ) {
    const o = (n + s) >> 1
    fp(e, t[o]) < 0 ? (s = o) : (n = o + 1)
  }
  const i = Vv(e)
  return i && (s = t.lastIndexOf(i, s - 1)), s
}
function Vv(e) {
  let t = e
  for (; (t = t.parent); ) if (up(t) && fp(e, t) === 0) return t
}
function up({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  )
}
function Uv(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const s = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let i = 0; i < s.length; ++i) {
    const o = s[i].replace(np, ' '),
      r = o.indexOf('='),
      a = Yi(r < 0 ? o : o.slice(0, r)),
      l = r < 0 ? null : Yi(o.slice(r + 1))
    if (a in t) {
      let c = t[a]
      Ce(c) || (c = t[a] = [c]), c.push(l)
    } else t[a] = l
  }
  return t
}
function Df(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = uv(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Ce(s) ? s.map(o => o && Za(o)) : [s && Za(s)]).forEach(o => {
      o !== void 0 &&
        ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o))
    })
  }
  return t
}
function Yv(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Ce(s)
        ? s.map(i => (i == null ? null : '' + i))
        : s == null
          ? s
          : '' + s)
  }
  return t
}
const Kv = Symbol(''),
  Lf = Symbol(''),
  tc = Symbol(''),
  dp = Symbol(''),
  el = Symbol('')
function ii() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const i = e.indexOf(s)
        i > -1 && e.splice(i, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function xn(e, t, n, s, i, o = r => r()) {
  const r = s && (s.enterCallbacks[i] = s.enterCallbacks[i] || [])
  return () =>
    new Promise((a, l) => {
      const c = d => {
          d === !1
            ? l(Rs(4, { from: n, to: t }))
            : d instanceof Error
              ? l(d)
              : Pv(d)
                ? l(Rs(2, { from: t, to: d }))
                : (r &&
                    s.enterCallbacks[i] === r &&
                    typeof d == 'function' &&
                    r.push(d),
                  a())
        },
        f = o(() => e.call(s && s.instances[i], t, n, c))
      let u = Promise.resolve(f)
      e.length < 3 && (u = u.then(c)), u.catch(d => l(d))
    })
}
function ca(e, t, n, s, i = o => o()) {
  const o = []
  for (const r of e)
    for (const a in r.components) {
      let l = r.components[a]
      if (!(t !== 'beforeRouteEnter' && !r.instances[a]))
        if (tp(l)) {
          const f = (l.__vccOpts || l)[t]
          f && o.push(xn(f, n, s, r, a, i))
        } else {
          let c = l()
          o.push(() =>
            c.then(f => {
              if (!f)
                throw new Error(
                  `Couldn't resolve component "${a}" at "${r.path}"`,
                )
              const u = tv(f) ? f.default : f
              ;(r.mods[a] = f), (r.components[a] = u)
              const h = (u.__vccOpts || u)[t]
              return h && xn(h, n, s, r, a, i)()
            }),
          )
        }
    }
  return o
}
function If(e) {
  const t = sn(tc),
    n = sn(dp),
    s = zt(() => {
      const l = it(e.to)
      return t.resolve(l)
    }),
    i = zt(() => {
      const { matched: l } = s.value,
        { length: c } = l,
        f = l[c - 1],
        u = n.matched
      if (!f || !u.length) return -1
      const d = u.findIndex(Ns.bind(null, f))
      if (d > -1) return d
      const h = Nf(l[c - 2])
      return c > 1 && Nf(f) === h && u[u.length - 1].path !== h
        ? u.findIndex(Ns.bind(null, l[c - 2]))
        : d
    }),
    o = zt(() => i.value > -1 && Qv(n.params, s.value.params)),
    r = zt(
      () =>
        i.value > -1 &&
        i.value === n.matched.length - 1 &&
        rp(n.params, s.value.params),
    )
  function a(l = {}) {
    return Xv(l)
      ? t[it(e.replace) ? 'replace' : 'push'](it(e.to)).catch(ki)
      : Promise.resolve()
  }
  return {
    route: s,
    href: zt(() => s.value.href),
    isActive: o,
    isExactActive: r,
    navigate: a,
  }
}
const qv = so({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: If,
    setup(e, { slots: t }) {
      const n = Cr(If(e)),
        { options: s } = sn(tc),
        i = zt(() => ({
          [Rf(e.activeClass, s.linkActiveClass, 'router-link-active')]:
            n.isActive,
          [Rf(
            e.exactActiveClass,
            s.linkExactActiveClass,
            'router-link-exact-active',
          )]: n.isExactActive,
        }))
      return () => {
        const o = t.default && t.default(n)
        return e.custom
          ? o
          : Is(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value,
              },
              o,
            )
      }
    },
  }),
  Gv = qv
function Xv(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function Qv(e, t) {
  for (const n in t) {
    const s = t[n],
      i = e[n]
    if (typeof s == 'string') {
      if (s !== i) return !1
    } else if (!Ce(i) || i.length !== s.length || s.some((o, r) => o !== i[r]))
      return !1
  }
  return !0
}
function Nf(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const Rf = (e, t, n) => e ?? t ?? n,
  Jv = so({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = sn(el),
        i = zt(() => e.route || s.value),
        o = sn(Lf, 0),
        r = zt(() => {
          let c = it(o)
          const { matched: f } = i.value
          let u
          for (; (u = f[c]) && !u.components; ) c++
          return c
        }),
        a = zt(() => i.value.matched[r.value])
      Bo(
        Lf,
        zt(() => r.value + 1),
      ),
        Bo(Kv, a),
        Bo(el, i)
      const l = bh()
      return (
        Ms(
          () => [l.value, a.value, e.name],
          ([c, f, u], [d, h, _]) => {
            f &&
              ((f.instances[u] = c),
              h &&
                h !== f &&
                c &&
                c === d &&
                (f.leaveGuards.size || (f.leaveGuards = h.leaveGuards),
                f.updateGuards.size || (f.updateGuards = h.updateGuards))),
              c &&
                f &&
                (!h || !Ns(f, h) || !d) &&
                (f.enterCallbacks[u] || []).forEach(g => g(c))
          },
          { flush: 'post' },
        ),
        () => {
          const c = i.value,
            f = e.name,
            u = a.value,
            d = u && u.components[f]
          if (!d) return $f(n.default, { Component: d, route: c })
          const h = u.props[f],
            _ = h
              ? h === !0
                ? c.params
                : typeof h == 'function'
                  ? h(c)
                  : h
              : null,
            v = Is(
              d,
              St({}, _, t, {
                onVnodeUnmounted: m => {
                  m.component.isUnmounted && (u.instances[f] = null)
                },
                ref: l,
              }),
            )
          return $f(n.default, { Component: v, route: c }) || v
        }
      )
    },
  })
function $f(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const hp = Jv
function Zv(e) {
  const t = jv(e.routes, e),
    n = e.parseQuery || Uv,
    s = e.stringifyQuery || Df,
    i = e.history,
    o = ii(),
    r = ii(),
    a = ii(),
    l = Wl(gn)
  let c = gn
  xs &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual')
  const f = aa.bind(null, O => '' + O),
    u = aa.bind(null, hv),
    d = aa.bind(null, Yi)
  function h(O, B) {
    let z, X
    return (
      lp(O) ? ((z = t.getRecordMatcher(O)), (X = B)) : (X = O), t.addRoute(X, z)
    )
  }
  function _(O) {
    const B = t.getRecordMatcher(O)
    B && t.removeRoute(B)
  }
  function g() {
    return t.getRoutes().map(O => O.record)
  }
  function v(O) {
    return !!t.getRecordMatcher(O)
  }
  function m(O, B) {
    if (((B = St({}, B || l.value)), typeof O == 'string')) {
      const b = la(n, O, B.path),
        A = t.resolve({ path: b.path }, B),
        M = i.createHref(b.fullPath)
      return St(b, A, {
        params: d(A.params),
        hash: Yi(b.hash),
        redirectedFrom: void 0,
        href: M,
      })
    }
    let z
    if (O.path != null) z = St({}, O, { path: la(n, O.path, B.path).path })
    else {
      const b = St({}, O.params)
      for (const A in b) b[A] == null && delete b[A]
      ;(z = St({}, O, { params: u(b) })), (B.params = u(B.params))
    }
    const X = t.resolve(z, B),
      mt = O.hash || ''
    X.params = f(d(X.params))
    const yt = mv(s, St({}, O, { hash: fv(mt), path: X.path })),
      p = i.createHref(yt)
    return St(
      { fullPath: yt, hash: mt, query: s === Df ? Yv(O.query) : O.query || {} },
      X,
      { redirectedFrom: void 0, href: p },
    )
  }
  function y(O) {
    return typeof O == 'string' ? la(n, O, l.value.path) : St({}, O)
  }
  function E(O, B) {
    if (c !== O) return Rs(8, { from: B, to: O })
  }
  function x(O) {
    return R(O)
  }
  function T(O) {
    return x(St(y(O), { replace: !0 }))
  }
  function P(O) {
    const B = O.matched[O.matched.length - 1]
    if (B && B.redirect) {
      const { redirect: z } = B
      let X = typeof z == 'function' ? z(O) : z
      return (
        typeof X == 'string' &&
          ((X = X.includes('?') || X.includes('#') ? (X = y(X)) : { path: X }),
          (X.params = {})),
        St(
          {
            query: O.query,
            hash: O.hash,
            params: X.path != null ? {} : O.params,
          },
          X,
        )
      )
    }
  }
  function R(O, B) {
    const z = (c = m(O)),
      X = l.value,
      mt = O.state,
      yt = O.force,
      p = O.replace === !0,
      b = P(z)
    if (b)
      return R(
        St(y(b), {
          state: typeof b == 'object' ? St({}, mt, b.state) : mt,
          force: yt,
          replace: p,
        }),
        B || z,
      )
    const A = z
    A.redirectedFrom = B
    let M
    return (
      !yt &&
        _v(s, X, z) &&
        ((M = Rs(16, { to: A, from: X })), Lt(X, X, !0, !1)),
      (M ? Promise.resolve(M) : G(A, X))
        .catch(C => (qe(C) ? (qe(C, 2) ? C : S(C)) : H(C, A, X)))
        .then(C => {
          if (C) {
            if (qe(C, 2))
              return R(
                St({ replace: p }, y(C.to), {
                  state: typeof C.to == 'object' ? St({}, mt, C.to.state) : mt,
                  force: yt,
                }),
                B || A,
              )
          } else C = U(A, X, !0, p, mt)
          return tt(A, X, C), C
        })
    )
  }
  function q(O, B) {
    const z = E(O, B)
    return z ? Promise.reject(z) : Promise.resolve()
  }
  function J(O) {
    const B = ht.values().next().value
    return B && typeof B.runWithContext == 'function'
      ? B.runWithContext(O)
      : O()
  }
  function G(O, B) {
    let z
    const [X, mt, yt] = ty(O, B)
    z = ca(X.reverse(), 'beforeRouteLeave', O, B)
    for (const b of X)
      b.leaveGuards.forEach(A => {
        z.push(xn(A, O, B))
      })
    const p = q.bind(null, O, B)
    return (
      z.push(p),
      ot(z)
        .then(() => {
          z = []
          for (const b of o.list()) z.push(xn(b, O, B))
          return z.push(p), ot(z)
        })
        .then(() => {
          z = ca(mt, 'beforeRouteUpdate', O, B)
          for (const b of mt)
            b.updateGuards.forEach(A => {
              z.push(xn(A, O, B))
            })
          return z.push(p), ot(z)
        })
        .then(() => {
          z = []
          for (const b of yt)
            if (b.beforeEnter)
              if (Ce(b.beforeEnter))
                for (const A of b.beforeEnter) z.push(xn(A, O, B))
              else z.push(xn(b.beforeEnter, O, B))
          return z.push(p), ot(z)
        })
        .then(
          () => (
            O.matched.forEach(b => (b.enterCallbacks = {})),
            (z = ca(yt, 'beforeRouteEnter', O, B, J)),
            z.push(p),
            ot(z)
          ),
        )
        .then(() => {
          z = []
          for (const b of r.list()) z.push(xn(b, O, B))
          return z.push(p), ot(z)
        })
        .catch(b => (qe(b, 8) ? b : Promise.reject(b)))
    )
  }
  function tt(O, B, z) {
    a.list().forEach(X => J(() => X(O, B, z)))
  }
  function U(O, B, z, X, mt) {
    const yt = E(O, B)
    if (yt) return yt
    const p = B === gn,
      b = xs ? history.state : {}
    z &&
      (X || p
        ? i.replace(O.fullPath, St({ scroll: p && b && b.scroll }, mt))
        : i.push(O.fullPath, mt)),
      (l.value = O),
      Lt(O, B, z, p),
      S()
  }
  let rt
  function At() {
    rt ||
      (rt = i.listen((O, B, z) => {
        if (!gt.listening) return
        const X = m(O),
          mt = P(X)
        if (mt) {
          R(St(mt, { replace: !0 }), X).catch(ki)
          return
        }
        c = X
        const yt = l.value
        xs && Sv(wf(yt.fullPath, z.delta), Lr()),
          G(X, yt)
            .catch(p =>
              qe(p, 12)
                ? p
                : qe(p, 2)
                  ? (R(p.to, X)
                      .then(b => {
                        qe(b, 20) &&
                          !z.delta &&
                          z.type === Ki.pop &&
                          i.go(-1, !1)
                      })
                      .catch(ki),
                    Promise.reject())
                  : (z.delta && i.go(-z.delta, !1), H(p, X, yt)),
            )
            .then(p => {
              ;(p = p || U(X, yt, !1)),
                p &&
                  (z.delta && !qe(p, 8)
                    ? i.go(-z.delta, !1)
                    : z.type === Ki.pop && qe(p, 20) && i.go(-1, !1)),
                tt(X, yt, p)
            })
            .catch(ki)
      }))
  }
  let W = ii(),
    k = ii(),
    N
  function H(O, B, z) {
    S(O)
    const X = k.list()
    return (
      X.length ? X.forEach(mt => mt(O, B, z)) : console.error(O),
      Promise.reject(O)
    )
  }
  function at() {
    return N && l.value !== gn
      ? Promise.resolve()
      : new Promise((O, B) => {
          W.add([O, B])
        })
  }
  function S(O) {
    return (
      N ||
        ((N = !O),
        At(),
        W.list().forEach(([B, z]) => (O ? z(O) : B())),
        W.reset()),
      O
    )
  }
  function Lt(O, B, z, X) {
    const { scrollBehavior: mt } = e
    if (!xs || !mt) return Promise.resolve()
    const yt =
      (!z && Tv(wf(O.fullPath, 0))) ||
      ((X || !z) && history.state && history.state.scroll) ||
      null
    return Vl()
      .then(() => mt(O, B, yt))
      .then(p => p && Av(p))
      .catch(p => H(p, O, B))
  }
  const j = O => i.go(O)
  let lt
  const ht = new Set(),
    gt = {
      currentRoute: l,
      listening: !0,
      addRoute: h,
      removeRoute: _,
      clearRoutes: t.clearRoutes,
      hasRoute: v,
      getRoutes: g,
      resolve: m,
      options: e,
      push: x,
      replace: T,
      go: j,
      back: () => j(-1),
      forward: () => j(1),
      beforeEach: o.add,
      beforeResolve: r.add,
      afterEach: a.add,
      onError: k.add,
      isReady: at,
      install(O) {
        const B = this
        O.component('RouterLink', Gv),
          O.component('RouterView', hp),
          (O.config.globalProperties.$router = B),
          Object.defineProperty(O.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => it(l),
          }),
          xs &&
            !lt &&
            l.value === gn &&
            ((lt = !0), x(i.location).catch(mt => {}))
        const z = {}
        for (const mt in gn)
          Object.defineProperty(z, mt, {
            get: () => l.value[mt],
            enumerable: !0,
          })
        O.provide(tc, B), O.provide(dp, mh(z)), O.provide(el, l)
        const X = O.unmount
        ht.add(O),
          (O.unmount = function () {
            ht.delete(O),
              ht.size < 1 &&
                ((c = gn),
                rt && rt(),
                (rt = null),
                (l.value = gn),
                (lt = !1),
                (N = !1)),
              X()
          })
      },
    }
  function ot(O) {
    return O.reduce((B, z) => B.then(() => J(z)), Promise.resolve())
  }
  return gt
}
function ty(e, t) {
  const n = [],
    s = [],
    i = [],
    o = Math.max(t.matched.length, e.matched.length)
  for (let r = 0; r < o; r++) {
    const a = t.matched[r]
    a && (e.matched.find(c => Ns(c, a)) ? s.push(a) : n.push(a))
    const l = e.matched[r]
    l && (t.matched.find(c => Ns(c, l)) || i.push(l))
  }
  return [n, s, i]
}
const ey = {
    __name: 'App',
    setup(e) {
      return (t, n) => (dn(), qh(it(hp)))
    },
  },
  ny = 'assets/me-B5qNX3UT.jpg',
  sy = 'assets/logo-B2coHTAG.png',
  qs = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, i] of t) n[s] = i
    return n
  },
  iy = {},
  oy = { class: 'navbar navbar-expand-lg' },
  ry = { class: 'container-fluid p-0' },
  ay = { class: 'collapse navbar-collapse', id: 'navbarNav' },
  ly = { class: 'navbar-nav w-100 karla' },
  cy = { class: 'nav-item' },
  fy = { class: 'nav-item' },
  uy = { class: 'nav-item' },
  dy = { class: 'nav-item' }
function hy(e, t) {
  const n = kh('RouterLink')
  return (
    dn(),
    us('nav', oy, [
      w('div', ry, [
        Y(
          n,
          { class: 'navbar-brand ps-3', to: '/' },
          {
            default: Fe(
              () =>
                t[0] ||
                (t[0] = [
                  w(
                    'img',
                    {
                      src: sy,
                      alt: 'logo',
                      class: 'img-fluid m-0 p-0',
                      width: '128',
                    },
                    null,
                    -1,
                  ),
                ]),
            ),
            _: 1,
          },
        ),
        t[5] ||
          (t[5] = w(
            'button',
            {
              class: 'navbar-toggler',
              type: 'button',
              'data-bs-toggle': 'collapse',
              'data-bs-target': '#navbarNav',
              'aria-controls': 'navbarNav',
              'aria-expanded': 'false',
              'aria-label': 'Toggle navigation',
            },
            [w('span', { class: 'navbar-toggler-icon' })],
            -1,
          )),
        w('div', ay, [
          w('ul', ly, [
            w('li', cy, [
              Y(
                n,
                {
                  class: 'nav-link ms-3 ms-lg-0 fs-5',
                  'aria-current': 'page',
                  to: '/',
                },
                { default: Fe(() => t[1] || (t[1] = [wt('Home')])), _: 1 },
              ),
            ]),
            w('li', fy, [
              Y(
                n,
                { class: 'nav-link ms-3 ms-lg-0 fs-5', to: '/about' },
                { default: Fe(() => t[2] || (t[2] = [wt('About')])), _: 1 },
              ),
            ]),
            w('li', uy, [
              Y(
                n,
                { class: 'nav-link ms-3 ms-lg-0 fs-5', to: '/experience' },
                {
                  default: Fe(() => t[3] || (t[3] = [wt('Experience')])),
                  _: 1,
                },
              ),
            ]),
            w('li', dy, [
              Y(
                n,
                { class: 'nav-link ms-3 ms-lg-0 fs-5', to: '/contact' },
                { default: Fe(() => t[4] || (t[4] = [wt('Contact')])), _: 1 },
              ),
            ]),
          ]),
        ]),
      ]),
    ])
  )
}
const oo = qs(iy, [
  ['render', hy],
  ['__scopeId', 'data-v-41e98ff5'],
])
var py =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {}
function gy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var pp = { exports: {} }
;(function (e, t) {
  ;(function (n, s) {
    e.exports = s()
  })(typeof self < 'u' ? self : py, () =>
    (() => {
      var n = {
          75: function (r) {
            ;(function () {
              var a, l, c, f, u, d
              typeof performance < 'u' &&
              performance !== null &&
              performance.now
                ? (r.exports = function () {
                    return performance.now()
                  })
                : typeof process < 'u' && process !== null && process.hrtime
                  ? ((r.exports = function () {
                      return (a() - u) / 1e6
                    }),
                    (l = process.hrtime),
                    (f = (a = function () {
                      var h
                      return 1e9 * (h = l())[0] + h[1]
                    })()),
                    (d = 1e9 * process.uptime()),
                    (u = f - d))
                  : Date.now
                    ? ((r.exports = function () {
                        return Date.now() - c
                      }),
                      (c = Date.now()))
                    : ((r.exports = function () {
                        return new Date().getTime() - c
                      }),
                      (c = new Date().getTime()))
            }).call(this)
          },
          4087: (r, a, l) => {
            for (
              var c = l(75),
                f = typeof window > 'u' ? l.g : window,
                u = ['moz', 'webkit'],
                d = 'AnimationFrame',
                h = f['request' + d],
                _ = f['cancel' + d] || f['cancelRequest' + d],
                g = 0;
              !h && g < u.length;
              g++
            )
              (h = f[u[g] + 'Request' + d]),
                (_ = f[u[g] + 'Cancel' + d] || f[u[g] + 'CancelRequest' + d])
            if (!h || !_) {
              var v = 0,
                m = 0,
                y = []
              ;(h = function (E) {
                if (y.length === 0) {
                  var x = c(),
                    T = Math.max(0, 16.666666666666668 - (x - v))
                  ;(v = T + x),
                    setTimeout(function () {
                      var P = y.slice(0)
                      y.length = 0
                      for (var R = 0; R < P.length; R++)
                        if (!P[R].cancelled)
                          try {
                            P[R].callback(v)
                          } catch (q) {
                            setTimeout(function () {
                              throw q
                            }, 0)
                          }
                    }, Math.round(T))
                }
                return y.push({ handle: ++m, callback: E, cancelled: !1 }), m
              }),
                (_ = function (E) {
                  for (var x = 0; x < y.length; x++)
                    y[x].handle === E && (y[x].cancelled = !0)
                })
            }
            ;(r.exports = function (E) {
              return h.call(f, E)
            }),
              (r.exports.cancel = function () {
                _.apply(f, arguments)
              }),
              (r.exports.polyfill = function (E) {
                E || (E = f),
                  (E.requestAnimationFrame = h),
                  (E.cancelAnimationFrame = _)
              })
          },
        },
        s = {}
      function i(r) {
        var a = s[r]
        if (a !== void 0) return a.exports
        var l = (s[r] = { exports: {} })
        return n[r].call(l.exports, l, l.exports, i), l.exports
      }
      ;(i.n = r => {
        var a = r && r.__esModule ? () => r.default : () => r
        return i.d(a, { a }), a
      }),
        (i.d = (r, a) => {
          for (var l in a)
            i.o(a, l) &&
              !i.o(r, l) &&
              Object.defineProperty(r, l, { enumerable: !0, get: a[l] })
        }),
        (i.g = (function () {
          if (typeof globalThis == 'object') return globalThis
          try {
            return this || new Function('return this')()
          } catch {
            if (typeof window == 'object') return window
          }
        })()),
        (i.o = (r, a) => Object.prototype.hasOwnProperty.call(r, a))
      var o = {}
      return (
        (() => {
          i.d(o, { default: () => At })
          var r = i(4087),
            a = i.n(r)
          const l = function (W) {
              return new RegExp(/<[a-z][\s\S]*>/i).test(W)
            },
            c = function (W, k) {
              return Math.floor(Math.random() * (k - W + 1)) + W
            }
          var f = 'TYPE_CHARACTER',
            u = 'REMOVE_CHARACTER',
            d = 'REMOVE_ALL',
            h = 'REMOVE_LAST_VISIBLE_NODE',
            _ = 'PAUSE_FOR',
            g = 'CALL_FUNCTION',
            v = 'ADD_HTML_TAG_ELEMENT',
            m = 'CHANGE_DELETE_SPEED',
            y = 'CHANGE_DELAY',
            E = 'CHANGE_CURSOR',
            x = 'PASTE_STRING',
            T = 'HTML_TAG'
          function P(W) {
            return (
              (P =
                typeof Symbol == 'function' &&
                typeof Symbol.iterator == 'symbol'
                  ? function (k) {
                      return typeof k
                    }
                  : function (k) {
                      return k &&
                        typeof Symbol == 'function' &&
                        k.constructor === Symbol &&
                        k !== Symbol.prototype
                        ? 'symbol'
                        : typeof k
                    }),
              P(W)
            )
          }
          function R(W, k) {
            var N = Object.keys(W)
            if (Object.getOwnPropertySymbols) {
              var H = Object.getOwnPropertySymbols(W)
              k &&
                (H = H.filter(function (at) {
                  return Object.getOwnPropertyDescriptor(W, at).enumerable
                })),
                N.push.apply(N, H)
            }
            return N
          }
          function q(W) {
            for (var k = 1; k < arguments.length; k++) {
              var N = arguments[k] != null ? arguments[k] : {}
              k % 2
                ? R(Object(N), !0).forEach(function (H) {
                    U(W, H, N[H])
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      W,
                      Object.getOwnPropertyDescriptors(N),
                    )
                  : R(Object(N)).forEach(function (H) {
                      Object.defineProperty(
                        W,
                        H,
                        Object.getOwnPropertyDescriptor(N, H),
                      )
                    })
            }
            return W
          }
          function J(W) {
            return (
              (function (k) {
                if (Array.isArray(k)) return G(k)
              })(W) ||
              (function (k) {
                if (
                  (typeof Symbol < 'u' && k[Symbol.iterator] != null) ||
                  k['@@iterator'] != null
                )
                  return Array.from(k)
              })(W) ||
              (function (k, N) {
                if (k) {
                  if (typeof k == 'string') return G(k, N)
                  var H = Object.prototype.toString.call(k).slice(8, -1)
                  return (
                    H === 'Object' && k.constructor && (H = k.constructor.name),
                    H === 'Map' || H === 'Set'
                      ? Array.from(k)
                      : H === 'Arguments' ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H)
                        ? G(k, N)
                        : void 0
                  )
                }
              })(W) ||
              (function () {
                throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
              })()
            )
          }
          function G(W, k) {
            ;(k == null || k > W.length) && (k = W.length)
            for (var N = 0, H = new Array(k); N < k; N++) H[N] = W[N]
            return H
          }
          function tt(W, k) {
            for (var N = 0; N < k.length; N++) {
              var H = k[N]
              ;(H.enumerable = H.enumerable || !1),
                (H.configurable = !0),
                'value' in H && (H.writable = !0),
                Object.defineProperty(W, rt(H.key), H)
            }
          }
          function U(W, k, N) {
            return (
              (k = rt(k)) in W
                ? Object.defineProperty(W, k, {
                    value: N,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (W[k] = N),
              W
            )
          }
          function rt(W) {
            var k = (function (N, H) {
              if (P(N) !== 'object' || N === null) return N
              var at = N[Symbol.toPrimitive]
              if (at !== void 0) {
                var S = at.call(N, 'string')
                if (P(S) !== 'object') return S
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.',
                )
              }
              return String(N)
            })(W)
            return P(k) === 'symbol' ? k : String(k)
          }
          const At = (function () {
            function W(H, at) {
              var S = this
              if (
                ((function (j, lt) {
                  if (!(j instanceof lt))
                    throw new TypeError('Cannot call a class as a function')
                })(this, W),
                U(this, 'state', {
                  cursorAnimation: null,
                  lastFrameTime: null,
                  pauseUntil: null,
                  eventQueue: [],
                  eventLoop: null,
                  eventLoopPaused: !1,
                  reverseCalledEvents: [],
                  calledEvents: [],
                  visibleNodes: [],
                  initialOptions: null,
                  elements: {
                    container: null,
                    wrapper: document.createElement('span'),
                    cursor: document.createElement('span'),
                  },
                }),
                U(this, 'options', {
                  strings: null,
                  cursor: '|',
                  delay: 'natural',
                  pauseFor: 1500,
                  deleteSpeed: 'natural',
                  loop: !1,
                  autoStart: !1,
                  devMode: !1,
                  skipAddStyles: !1,
                  wrapperClassName: 'Typewriter__wrapper',
                  cursorClassName: 'Typewriter__cursor',
                  stringSplitter: null,
                  onCreateTextNode: null,
                  onRemoveNode: null,
                }),
                U(this, 'setupWrapperElement', function () {
                  S.state.elements.container &&
                    ((S.state.elements.wrapper.className =
                      S.options.wrapperClassName),
                    (S.state.elements.cursor.className =
                      S.options.cursorClassName),
                    (S.state.elements.cursor.innerHTML = S.options.cursor),
                    (S.state.elements.container.innerHTML = ''),
                    S.state.elements.container.appendChild(
                      S.state.elements.wrapper,
                    ),
                    S.state.elements.container.appendChild(
                      S.state.elements.cursor,
                    ))
                }),
                U(this, 'start', function () {
                  return (S.state.eventLoopPaused = !1), S.runEventLoop(), S
                }),
                U(this, 'pause', function () {
                  return (S.state.eventLoopPaused = !0), S
                }),
                U(this, 'stop', function () {
                  return (
                    S.state.eventLoop &&
                      ((0, r.cancel)(S.state.eventLoop),
                      (S.state.eventLoop = null)),
                    S
                  )
                }),
                U(this, 'pauseFor', function (j) {
                  return S.addEventToQueue(_, { ms: j }), S
                }),
                U(this, 'typeOutAllStrings', function () {
                  return typeof S.options.strings == 'string'
                    ? (S.typeString(S.options.strings).pauseFor(
                        S.options.pauseFor,
                      ),
                      S)
                    : (S.options.strings.forEach(function (j) {
                        S.typeString(j)
                          .pauseFor(S.options.pauseFor)
                          .deleteAll(S.options.deleteSpeed)
                      }),
                      S)
                }),
                U(this, 'typeString', function (j) {
                  var lt =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : null
                  if (l(j)) return S.typeOutHTMLString(j, lt)
                  if (j) {
                    var ht = (S.options || {}).stringSplitter,
                      gt = typeof ht == 'function' ? ht(j) : j.split('')
                    S.typeCharacters(gt, lt)
                  }
                  return S
                }),
                U(this, 'pasteString', function (j) {
                  var lt =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : null
                  return l(j)
                    ? S.typeOutHTMLString(j, lt, !0)
                    : (j && S.addEventToQueue(x, { character: j, node: lt }), S)
                }),
                U(this, 'typeOutHTMLString', function (j) {
                  var lt =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null,
                    ht = arguments.length > 2 ? arguments[2] : void 0,
                    gt = (function (z) {
                      var X = document.createElement('div')
                      return (X.innerHTML = z), X.childNodes
                    })(j)
                  if (gt.length > 0)
                    for (var ot = 0; ot < gt.length; ot++) {
                      var O = gt[ot],
                        B = O.innerHTML
                      O && O.nodeType !== 3
                        ? ((O.innerHTML = ''),
                          S.addEventToQueue(v, { node: O, parentNode: lt }),
                          ht ? S.pasteString(B, O) : S.typeString(B, O))
                        : O.textContent &&
                          (ht
                            ? S.pasteString(O.textContent, lt)
                            : S.typeString(O.textContent, lt))
                    }
                  return S
                }),
                U(this, 'deleteAll', function () {
                  var j =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : 'natural'
                  return S.addEventToQueue(d, { speed: j }), S
                }),
                U(this, 'changeDeleteSpeed', function (j) {
                  if (!j) throw new Error('Must provide new delete speed')
                  return S.addEventToQueue(m, { speed: j }), S
                }),
                U(this, 'changeDelay', function (j) {
                  if (!j) throw new Error('Must provide new delay')
                  return S.addEventToQueue(y, { delay: j }), S
                }),
                U(this, 'changeCursor', function (j) {
                  if (!j) throw new Error('Must provide new cursor')
                  return S.addEventToQueue(E, { cursor: j }), S
                }),
                U(this, 'deleteChars', function (j) {
                  if (!j)
                    throw new Error(
                      'Must provide amount of characters to delete',
                    )
                  for (var lt = 0; lt < j; lt++) S.addEventToQueue(u)
                  return S
                }),
                U(this, 'callFunction', function (j, lt) {
                  if (!j || typeof j != 'function')
                    throw new Error('Callback must be a function')
                  return S.addEventToQueue(g, { cb: j, thisArg: lt }), S
                }),
                U(this, 'typeCharacters', function (j) {
                  var lt =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : null
                  if (!j || !Array.isArray(j))
                    throw new Error('Characters must be an array')
                  return (
                    j.forEach(function (ht) {
                      S.addEventToQueue(f, { character: ht, node: lt })
                    }),
                    S
                  )
                }),
                U(this, 'removeCharacters', function (j) {
                  if (!j || !Array.isArray(j))
                    throw new Error('Characters must be an array')
                  return (
                    j.forEach(function () {
                      S.addEventToQueue(u)
                    }),
                    S
                  )
                }),
                U(this, 'addEventToQueue', function (j, lt) {
                  var ht =
                    arguments.length > 2 &&
                    arguments[2] !== void 0 &&
                    arguments[2]
                  return S.addEventToStateProperty(j, lt, ht, 'eventQueue')
                }),
                U(this, 'addReverseCalledEvent', function (j, lt) {
                  var ht =
                    arguments.length > 2 &&
                    arguments[2] !== void 0 &&
                    arguments[2]
                  return S.options.loop
                    ? S.addEventToStateProperty(
                        j,
                        lt,
                        ht,
                        'reverseCalledEvents',
                      )
                    : S
                }),
                U(this, 'addEventToStateProperty', function (j, lt) {
                  var ht =
                      arguments.length > 2 &&
                      arguments[2] !== void 0 &&
                      arguments[2],
                    gt = arguments.length > 3 ? arguments[3] : void 0,
                    ot = { eventName: j, eventArgs: lt || {} }
                  return (
                    (S.state[gt] = ht
                      ? [ot].concat(J(S.state[gt]))
                      : [].concat(J(S.state[gt]), [ot])),
                    S
                  )
                }),
                U(this, 'runEventLoop', function () {
                  S.state.lastFrameTime || (S.state.lastFrameTime = Date.now())
                  var j = Date.now(),
                    lt = j - S.state.lastFrameTime
                  if (!S.state.eventQueue.length) {
                    if (!S.options.loop) return
                    ;(S.state.eventQueue = J(S.state.calledEvents)),
                      (S.state.calledEvents = []),
                      (S.options = q({}, S.state.initialOptions))
                  }
                  if (
                    ((S.state.eventLoop = a()(S.runEventLoop)),
                    !S.state.eventLoopPaused)
                  ) {
                    if (S.state.pauseUntil) {
                      if (j < S.state.pauseUntil) return
                      S.state.pauseUntil = null
                    }
                    var ht,
                      gt = J(S.state.eventQueue),
                      ot = gt.shift()
                    if (
                      !(
                        lt <=
                        (ht =
                          ot.eventName === h || ot.eventName === u
                            ? S.options.deleteSpeed === 'natural'
                              ? c(40, 80)
                              : S.options.deleteSpeed
                            : S.options.delay === 'natural'
                              ? c(120, 160)
                              : S.options.delay)
                      )
                    ) {
                      var O = ot.eventName,
                        B = ot.eventArgs
                      switch (
                        (S.logInDevMode({
                          currentEvent: ot,
                          state: S.state,
                          delay: ht,
                        }),
                        O)
                      ) {
                        case x:
                        case f:
                          var z = B.character,
                            X = B.node,
                            mt = document.createTextNode(z),
                            yt = mt
                          S.options.onCreateTextNode &&
                            typeof S.options.onCreateTextNode == 'function' &&
                            (yt = S.options.onCreateTextNode(z, mt)),
                            yt &&
                              (X
                                ? X.appendChild(yt)
                                : S.state.elements.wrapper.appendChild(yt)),
                            (S.state.visibleNodes = [].concat(
                              J(S.state.visibleNodes),
                              [{ type: 'TEXT_NODE', character: z, node: yt }],
                            ))
                          break
                        case u:
                          gt.unshift({
                            eventName: h,
                            eventArgs: { removingCharacterNode: !0 },
                          })
                          break
                        case _:
                          var p = ot.eventArgs.ms
                          S.state.pauseUntil = Date.now() + parseInt(p)
                          break
                        case g:
                          var b = ot.eventArgs,
                            A = b.cb,
                            M = b.thisArg
                          A.call(M, { elements: S.state.elements })
                          break
                        case v:
                          var C = ot.eventArgs,
                            D = C.node,
                            V = C.parentNode
                          V
                            ? V.appendChild(D)
                            : S.state.elements.wrapper.appendChild(D),
                            (S.state.visibleNodes = [].concat(
                              J(S.state.visibleNodes),
                              [
                                {
                                  type: T,
                                  node: D,
                                  parentNode: V || S.state.elements.wrapper,
                                },
                              ],
                            ))
                          break
                        case d:
                          var F = S.state.visibleNodes,
                            $ = B.speed,
                            L = []
                          $ &&
                            L.push({
                              eventName: m,
                              eventArgs: { speed: $, temp: !0 },
                            })
                          for (var et = 0, K = F.length; et < K; et++)
                            L.push({
                              eventName: h,
                              eventArgs: { removingCharacterNode: !1 },
                            })
                          $ &&
                            L.push({
                              eventName: m,
                              eventArgs: {
                                speed: S.options.deleteSpeed,
                                temp: !0,
                              },
                            }),
                            gt.unshift.apply(gt, L)
                          break
                        case h:
                          var Z = ot.eventArgs.removingCharacterNode
                          if (S.state.visibleNodes.length) {
                            var st = S.state.visibleNodes.pop(),
                              dt = st.type,
                              _t = st.node,
                              xt = st.character
                            S.options.onRemoveNode &&
                              typeof S.options.onRemoveNode == 'function' &&
                              S.options.onRemoveNode({
                                node: _t,
                                character: xt,
                              }),
                              _t && _t.parentNode.removeChild(_t),
                              dt === T &&
                                Z &&
                                gt.unshift({ eventName: h, eventArgs: {} })
                          }
                          break
                        case m:
                          S.options.deleteSpeed = ot.eventArgs.speed
                          break
                        case y:
                          S.options.delay = ot.eventArgs.delay
                          break
                        case E:
                          ;(S.options.cursor = ot.eventArgs.cursor),
                            (S.state.elements.cursor.innerHTML =
                              ot.eventArgs.cursor)
                      }
                      S.options.loop &&
                        (ot.eventName === h ||
                          (ot.eventArgs && ot.eventArgs.temp) ||
                          (S.state.calledEvents = [].concat(
                            J(S.state.calledEvents),
                            [ot],
                          ))),
                        (S.state.eventQueue = gt),
                        (S.state.lastFrameTime = j)
                    }
                  }
                }),
                H)
              )
                if (typeof H == 'string') {
                  var Lt = document.querySelector(H)
                  if (!Lt) throw new Error('Could not find container element')
                  this.state.elements.container = Lt
                } else this.state.elements.container = H
              at && (this.options = q(q({}, this.options), at)),
                (this.state.initialOptions = q({}, this.options)),
                this.init()
            }
            var k, N
            return (
              (k = W),
              (N = [
                {
                  key: 'init',
                  value: function () {
                    var H, at
                    this.setupWrapperElement(),
                      this.addEventToQueue(
                        E,
                        { cursor: this.options.cursor },
                        !0,
                      ),
                      this.addEventToQueue(d, null, !0),
                      !window ||
                        window.___TYPEWRITER_JS_STYLES_ADDED___ ||
                        this.options.skipAddStyles ||
                        ((H =
                          '.Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}'),
                        (at = document.createElement('style')).appendChild(
                          document.createTextNode(H),
                        ),
                        document.head.appendChild(at),
                        (window.___TYPEWRITER_JS_STYLES_ADDED___ = !0)),
                      this.options.autoStart === !0 &&
                        this.options.strings &&
                        this.typeOutAllStrings().start()
                  },
                },
                {
                  key: 'logInDevMode',
                  value: function (H) {
                    this.options.devMode && console.log(H)
                  },
                },
              ]) && tt(k.prototype, N),
              Object.defineProperty(k, 'prototype', { writable: !1 }),
              W
            )
          })()
        })(),
        o.default
      )
    })(),
  )
})(pp)
var my = pp.exports
const _y = gy(my),
  by = { ref: 'root' },
  Ff = {
    __name: 'HomeView',
    setup(e) {
      function t() {
        const n = document.querySelector('.typed')
        new _y(n, { loop: !0 })
          .pauseFor(2500)
          .typeString('person.')
          .pauseFor(300)
          .deleteChars(1)
          .typeString(' who writes code.')
          .pauseFor(1e3)
          .deleteAll()
          .pauseFor(300)
          .typeString('👨🏻‍💻')
          .pauseFor(1e3)
          .deleteAll()
          .pauseFor(300)
          .typeString('software engineer.')
          .pauseFor(2e3)
          .deleteChars(9)
          .typeString('developer.')
          .pauseFor(2e3)
          .deleteAll()
          .pauseFor(300)
          .typeString('game developer.')
          .pauseFor(2e3)
          .deleteAll()
          .pauseFor(300)
          .typeString('web developer.')
          .pauseFor(1e4)
          .start()
      }
      return (
        Kl(() => t()),
        (n, s) => (
          dn(),
          us(
            'div',
            by,
            [
              Y(oo),
              s[0] ||
                (s[0] = is(
                  '<div class="container-fluid d-flex flex-column justify-content-center align-items-center text-center py-5 home"><img src="' +
                    ny +
                    '" alt="Me, Robert Sabo" class="img-me animate__animated animate__fadeIn animate__delay-1s img-thumbnail rounded-circle"><h1 class="animate__animated animate__backInDown d-flex justify-content-center align-items-center"><div class="animate__animated animate__tada animate__delay-2s">👋</div><span class="mx-2">Hello, I&#39;m Robert</span><div class="animate__animated animate__tada animate__delay-2s">👋</div></h1><p class="lead">Welcome to my website!</p><h4>I am a <span class="typed"></span></h4></div>',
                  1,
                )),
            ],
            512,
          )
        )
      )
    },
  },
  vy = 'assets/90s-aesthetic-bg-wallpaperaccess-DzoMY13t.jpg',
  yy = 'assets/ai-gen-90s-background-Htq7q2Lq.png',
  Hf = () => {}
let ec = {},
  gp = {},
  mp = null,
  _p = { mark: Hf, measure: Hf }
try {
  typeof window < 'u' && (ec = window),
    typeof document < 'u' && (gp = document),
    typeof MutationObserver < 'u' && (mp = MutationObserver),
    typeof performance < 'u' && (_p = performance)
} catch {}
const { userAgent: jf = '' } = ec.navigator || {},
  Cn = ec,
  Pt = gp,
  zf = mp,
  yo = _p
Cn.document
const hn =
    !!Pt.documentElement &&
    !!Pt.head &&
    typeof Pt.addEventListener == 'function' &&
    typeof Pt.createElement == 'function',
  bp = ~jf.indexOf('MSIE') || ~jf.indexOf('Trident/')
var Dt = 'classic',
  vp = 'duotone',
  ue = 'sharp',
  de = 'sharp-duotone',
  xy = [Dt, vp, ue, de],
  Ey = {
    classic: { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' },
    sharp: { 900: 'fass', 400: 'fasr', 300: 'fasl', 100: 'fast' },
    'sharp-duotone': { 900: 'fasds' },
  },
  Bf = {
    kit: { fak: 'kit', 'fa-kit': 'kit' },
    'kit-duotone': { fakd: 'kit-duotone', 'fa-kit-duotone': 'kit-duotone' },
  },
  wy = ['kit'],
  Ay = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,
  Sy =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
  Ty = {
    'Font Awesome 5 Free': { 900: 'fas', 400: 'far' },
    'Font Awesome 5 Pro': { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal' },
    'Font Awesome 5 Brands': { 400: 'fab', normal: 'fab' },
    'Font Awesome 5 Duotone': { 900: 'fad' },
  },
  Oy = {
    'Font Awesome 6 Free': { 900: 'fas', 400: 'far' },
    'Font Awesome 6 Pro': {
      900: 'fas',
      400: 'far',
      normal: 'far',
      300: 'fal',
      100: 'fat',
    },
    'Font Awesome 6 Brands': { 400: 'fab', normal: 'fab' },
    'Font Awesome 6 Duotone': { 900: 'fad' },
    'Font Awesome 6 Sharp': {
      900: 'fass',
      400: 'fasr',
      normal: 'fasr',
      300: 'fasl',
      100: 'fast',
    },
    'Font Awesome 6 Sharp Duotone': { 900: 'fasds' },
  },
  Cy = {
    classic: {
      'fa-brands': 'fab',
      'fa-duotone': 'fad',
      'fa-light': 'fal',
      'fa-regular': 'far',
      'fa-solid': 'fas',
      'fa-thin': 'fat',
    },
    sharp: {
      'fa-solid': 'fass',
      'fa-regular': 'fasr',
      'fa-light': 'fasl',
      'fa-thin': 'fast',
    },
    'sharp-duotone': { 'fa-solid': 'fasds' },
  },
  ky = {
    classic: ['fas', 'far', 'fal', 'fat'],
    sharp: ['fass', 'fasr', 'fasl', 'fast'],
    'sharp-duotone': ['fasds'],
  },
  My = {
    classic: {
      fab: 'fa-brands',
      fad: 'fa-duotone',
      fal: 'fa-light',
      far: 'fa-regular',
      fas: 'fa-solid',
      fat: 'fa-thin',
    },
    sharp: {
      fass: 'fa-solid',
      fasr: 'fa-regular',
      fasl: 'fa-light',
      fast: 'fa-thin',
    },
    'sharp-duotone': { fasds: 'fa-solid' },
  },
  Py = {
    classic: {
      solid: 'fas',
      regular: 'far',
      light: 'fal',
      thin: 'fat',
      duotone: 'fad',
      brands: 'fab',
    },
    sharp: { solid: 'fass', regular: 'fasr', light: 'fasl', thin: 'fast' },
    'sharp-duotone': { solid: 'fasds' },
  },
  yp = {
    classic: {
      fa: 'solid',
      fas: 'solid',
      'fa-solid': 'solid',
      far: 'regular',
      'fa-regular': 'regular',
      fal: 'light',
      'fa-light': 'light',
      fat: 'thin',
      'fa-thin': 'thin',
      fad: 'duotone',
      'fa-duotone': 'duotone',
      fab: 'brands',
      'fa-brands': 'brands',
    },
    sharp: {
      fa: 'solid',
      fass: 'solid',
      'fa-solid': 'solid',
      fasr: 'regular',
      'fa-regular': 'regular',
      fasl: 'light',
      'fa-light': 'light',
      fast: 'thin',
      'fa-thin': 'thin',
    },
    'sharp-duotone': { fa: 'solid', fasds: 'solid', 'fa-solid': 'solid' },
  },
  Dy = ['solid', 'regular', 'light', 'thin', 'duotone', 'brands'],
  xp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Ly = xp.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  hi = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
  },
  Iy = [
    ...Object.keys(ky),
    ...Dy,
    '2xs',
    'xs',
    'sm',
    'lg',
    'xl',
    '2xl',
    'beat',
    'border',
    'fade',
    'beat-fade',
    'bounce',
    'flip-both',
    'flip-horizontal',
    'flip-vertical',
    'flip',
    'fw',
    'inverse',
    'layers-counter',
    'layers-text',
    'layers',
    'li',
    'pull-left',
    'pull-right',
    'pulse',
    'rotate-180',
    'rotate-270',
    'rotate-90',
    'rotate-by',
    'shake',
    'spin-pulse',
    'spin-reverse',
    'spin',
    'stack-1x',
    'stack-2x',
    'stack',
    'ul',
    hi.GROUP,
    hi.SWAP_OPACITY,
    hi.PRIMARY,
    hi.SECONDARY,
  ]
    .concat(xp.map(e => ''.concat(e, 'x')))
    .concat(Ly.map(e => 'w-'.concat(e))),
  Ny = {
    'Font Awesome Kit': { 400: 'fak', normal: 'fak' },
    'Font Awesome Kit Duotone': { 400: 'fakd', normal: 'fakd' },
  },
  Ry = {
    kit: { 'fa-kit': 'fak' },
    'kit-duotone': { 'fa-kit-duotone': 'fakd' },
  },
  $y = { kit: { fak: 'fa-kit' }, 'kit-duotone': { fakd: 'fa-kit-duotone' } },
  Wf = { kit: { kit: 'fak' }, 'kit-duotone': { 'kit-duotone': 'fakd' } }
const an = '___FONT_AWESOME___',
  nl = 16,
  Ep = 'fa',
  wp = 'svg-inline--fa',
  os = 'data-fa-i2svg',
  sl = 'data-fa-pseudo-element',
  Fy = 'data-fa-pseudo-element-pending',
  nc = 'data-prefix',
  sc = 'data-icon',
  Vf = 'fontawesome-i2svg',
  Hy = 'async',
  jy = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  Ap = (() => {
    try {
      return !0
    } catch {
      return !1
    }
  })(),
  Sp = [Dt, ue, de]
function ro(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Dt]
    },
  })
}
const Tp = { ...yp }
Tp[Dt] = { ...yp[Dt], ...Bf.kit, ...Bf['kit-duotone'] }
const Zn = ro(Tp),
  il = { ...Py }
il[Dt] = { ...il[Dt], ...Wf.kit, ...Wf['kit-duotone'] }
const qi = ro(il),
  ol = { ...My }
ol[Dt] = { ...ol[Dt], ...$y.kit }
const ts = ro(ol),
  rl = { ...Cy }
rl[Dt] = { ...rl[Dt], ...Ry.kit }
const zy = ro(rl),
  By = Ay,
  Op = 'fa-layers-text',
  Wy = Sy,
  Vy = { ...Ey }
ro(Vy)
const Uy = [
    'class',
    'data-prefix',
    'data-icon',
    'data-fa-transform',
    'data-fa-mask',
  ],
  fa = hi,
  $s = new Set()
Object.keys(qi[Dt]).map($s.add.bind($s))
Object.keys(qi[ue]).map($s.add.bind($s))
Object.keys(qi[de]).map($s.add.bind($s))
const Yy = [...wy, ...Iy],
  Pi = Cn.FontAwesomeConfig || {}
function Ky(e) {
  var t = Pt.querySelector('script[' + e + ']')
  if (t) return t.getAttribute(e)
}
function qy(e) {
  return e === '' ? !0 : e === 'false' ? !1 : e === 'true' ? !0 : e
}
Pt &&
  typeof Pt.querySelector == 'function' &&
  [
    ['data-family-prefix', 'familyPrefix'],
    ['data-css-prefix', 'cssPrefix'],
    ['data-family-default', 'familyDefault'],
    ['data-style-default', 'styleDefault'],
    ['data-replacement-class', 'replacementClass'],
    ['data-auto-replace-svg', 'autoReplaceSvg'],
    ['data-auto-add-css', 'autoAddCss'],
    ['data-auto-a11y', 'autoA11y'],
    ['data-search-pseudo-elements', 'searchPseudoElements'],
    ['data-observe-mutations', 'observeMutations'],
    ['data-mutate-approach', 'mutateApproach'],
    ['data-keep-original-source', 'keepOriginalSource'],
    ['data-measure-performance', 'measurePerformance'],
    ['data-show-missing-icons', 'showMissingIcons'],
  ].forEach(t => {
    let [n, s] = t
    const i = qy(Ky(n))
    i != null && (Pi[s] = i)
  })
const Cp = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: Ep,
  replacementClass: wp,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: 'async',
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
}
Pi.familyPrefix && (Pi.cssPrefix = Pi.familyPrefix)
const Fs = { ...Cp, ...Pi }
Fs.autoReplaceSvg || (Fs.observeMutations = !1)
const Q = {}
Object.keys(Cp).forEach(e => {
  Object.defineProperty(Q, e, {
    enumerable: !0,
    set: function (t) {
      ;(Fs[e] = t), Di.forEach(n => n(Q))
    },
    get: function () {
      return Fs[e]
    },
  })
})
Object.defineProperty(Q, 'familyPrefix', {
  enumerable: !0,
  set: function (e) {
    ;(Fs.cssPrefix = e), Di.forEach(t => t(Q))
  },
  get: function () {
    return Fs.cssPrefix
  },
})
Cn.FontAwesomeConfig = Q
const Di = []
function Gy(e) {
  return (
    Di.push(e),
    () => {
      Di.splice(Di.indexOf(e), 1)
    }
  )
}
const mn = nl,
  He = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 }
function Xy(e) {
  if (!e || !hn) return
  const t = Pt.createElement('style')
  t.setAttribute('type', 'text/css'), (t.innerHTML = e)
  const n = Pt.head.childNodes
  let s = null
  for (let i = n.length - 1; i > -1; i--) {
    const o = n[i],
      r = (o.tagName || '').toUpperCase()
    ;['STYLE', 'LINK'].indexOf(r) > -1 && (s = o)
  }
  return Pt.head.insertBefore(t, s), e
}
const Qy = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
function Gi() {
  let e = 12,
    t = ''
  for (; e-- > 0; ) t += Qy[(Math.random() * 62) | 0]
  return t
}
function Gs(e) {
  const t = []
  for (let n = (e || []).length >>> 0; n--; ) t[n] = e[n]
  return t
}
function ic(e) {
  return e.classList
    ? Gs(e.classList)
    : (e.getAttribute('class') || '').split(' ').filter(t => t)
}
function kp(e) {
  return ''
    .concat(e)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
function Jy(e) {
  return Object.keys(e || {})
    .reduce((t, n) => t + ''.concat(n, '="').concat(kp(e[n]), '" '), '')
    .trim()
}
function Ir(e) {
  return Object.keys(e || {}).reduce(
    (t, n) => t + ''.concat(n, ': ').concat(e[n].trim(), ';'),
    '',
  )
}
function oc(e) {
  return (
    e.size !== He.size ||
    e.x !== He.x ||
    e.y !== He.y ||
    e.rotate !== He.rotate ||
    e.flipX ||
    e.flipY
  )
}
function Zy(e) {
  let { transform: t, containerWidth: n, iconWidth: s } = e
  const i = { transform: 'translate('.concat(n / 2, ' 256)') },
    o = 'translate('.concat(t.x * 32, ', ').concat(t.y * 32, ') '),
    r = 'scale('
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ', ')
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ') '),
    a = 'rotate('.concat(t.rotate, ' 0 0)'),
    l = { transform: ''.concat(o, ' ').concat(r, ' ').concat(a) },
    c = { transform: 'translate('.concat((s / 2) * -1, ' -256)') }
  return { outer: i, inner: l, path: c }
}
function t0(e) {
  let {
      transform: t,
      width: n = nl,
      height: s = nl,
      startCentered: i = !1,
    } = e,
    o = ''
  return (
    i && bp
      ? (o += 'translate('
          .concat(t.x / mn - n / 2, 'em, ')
          .concat(t.y / mn - s / 2, 'em) '))
      : i
        ? (o += 'translate(calc(-50% + '
            .concat(t.x / mn, 'em), calc(-50% + ')
            .concat(t.y / mn, 'em)) '))
        : (o += 'translate('.concat(t.x / mn, 'em, ').concat(t.y / mn, 'em) ')),
    (o += 'scale('
      .concat((t.size / mn) * (t.flipX ? -1 : 1), ', ')
      .concat((t.size / mn) * (t.flipY ? -1 : 1), ') ')),
    (o += 'rotate('.concat(t.rotate, 'deg) ')),
    o
  )
}
var e0 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`
function Mp() {
  const e = Ep,
    t = wp,
    n = Q.cssPrefix,
    s = Q.replacementClass
  let i = e0
  if (n !== e || s !== t) {
    const o = new RegExp('\\.'.concat(e, '\\-'), 'g'),
      r = new RegExp('\\--'.concat(e, '\\-'), 'g'),
      a = new RegExp('\\.'.concat(t), 'g')
    i = i
      .replace(o, '.'.concat(n, '-'))
      .replace(r, '--'.concat(n, '-'))
      .replace(a, '.'.concat(s))
  }
  return i
}
let Uf = !1
function ua() {
  Q.autoAddCss && !Uf && (Xy(Mp()), (Uf = !0))
}
var n0 = {
  mixout() {
    return { dom: { css: Mp, insertCss: ua } }
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        ua()
      },
      beforeI2svg() {
        ua()
      },
    }
  },
}
const ln = Cn || {}
ln[an] || (ln[an] = {})
ln[an].styles || (ln[an].styles = {})
ln[an].hooks || (ln[an].hooks = {})
ln[an].shims || (ln[an].shims = [])
var je = ln[an]
const Pp = [],
  Dp = function () {
    Pt.removeEventListener('DOMContentLoaded', Dp), (or = 1), Pp.map(e => e())
  }
let or = !1
hn &&
  ((or = (Pt.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    Pt.readyState,
  )),
  or || Pt.addEventListener('DOMContentLoaded', Dp))
function s0(e) {
  hn && (or ? setTimeout(e, 0) : Pp.push(e))
}
function ao(e) {
  const { tag: t, attributes: n = {}, children: s = [] } = e
  return typeof e == 'string'
    ? kp(e)
    : '<'
        .concat(t, ' ')
        .concat(Jy(n), '>')
        .concat(s.map(ao).join(''), '</')
        .concat(t, '>')
}
function Yf(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] }
}
var da = function (t, n, s, i) {
  var o = Object.keys(t),
    r = o.length,
    a = n,
    l,
    c,
    f
  for (s === void 0 ? ((l = 1), (f = t[o[0]])) : ((l = 0), (f = s)); l < r; l++)
    (c = o[l]), (f = a(f, t[c], c, t))
  return f
}
function i0(e) {
  const t = []
  let n = 0
  const s = e.length
  for (; n < s; ) {
    const i = e.charCodeAt(n++)
    if (i >= 55296 && i <= 56319 && n < s) {
      const o = e.charCodeAt(n++)
      ;(o & 64512) == 56320
        ? t.push(((i & 1023) << 10) + (o & 1023) + 65536)
        : (t.push(i), n--)
    } else t.push(i)
  }
  return t
}
function al(e) {
  const t = i0(e)
  return t.length === 1 ? t[0].toString(16) : null
}
function o0(e, t) {
  const n = e.length
  let s = e.charCodeAt(t),
    i
  return s >= 55296 &&
    s <= 56319 &&
    n > t + 1 &&
    ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (s - 55296) * 1024 + i - 56320 + 65536
    : s
}
function Kf(e) {
  return Object.keys(e).reduce((t, n) => {
    const s = e[n]
    return !!s.icon ? (t[s.iconName] = s.icon) : (t[n] = s), t
  }, {})
}
function ll(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
  const { skipHooks: s = !1 } = n,
    i = Kf(t)
  typeof je.hooks.addPack == 'function' && !s
    ? je.hooks.addPack(e, Kf(t))
    : (je.styles[e] = { ...(je.styles[e] || {}), ...i }),
    e === 'fas' && ll('fa', t)
}
const { styles: qn, shims: r0 } = je,
  a0 = {
    [Dt]: Object.values(ts[Dt]),
    [ue]: Object.values(ts[ue]),
    [de]: Object.values(ts[de]),
  }
let rc = null,
  Lp = {},
  Ip = {},
  Np = {},
  Rp = {},
  $p = {}
const l0 = {
  [Dt]: Object.keys(Zn[Dt]),
  [ue]: Object.keys(Zn[ue]),
  [de]: Object.keys(Zn[de]),
}
function c0(e) {
  return ~Yy.indexOf(e)
}
function f0(e, t) {
  const n = t.split('-'),
    s = n[0],
    i = n.slice(1).join('-')
  return s === e && i !== '' && !c0(i) ? i : null
}
const Fp = () => {
  const e = s => da(qn, (i, o, r) => ((i[r] = da(o, s, {})), i), {})
  ;(Lp = e(
    (s, i, o) => (
      i[3] && (s[i[3]] = o),
      i[2] &&
        i[2]
          .filter(a => typeof a == 'number')
          .forEach(a => {
            s[a.toString(16)] = o
          }),
      s
    ),
  )),
    (Ip = e(
      (s, i, o) => (
        (s[o] = o),
        i[2] &&
          i[2]
            .filter(a => typeof a == 'string')
            .forEach(a => {
              s[a] = o
            }),
        s
      ),
    )),
    ($p = e((s, i, o) => {
      const r = i[2]
      return (
        (s[o] = o),
        r.forEach(a => {
          s[a] = o
        }),
        s
      )
    }))
  const t = 'far' in qn || Q.autoFetchSvg,
    n = da(
      r0,
      (s, i) => {
        const o = i[0]
        let r = i[1]
        const a = i[2]
        return (
          r === 'far' && !t && (r = 'fas'),
          typeof o == 'string' && (s.names[o] = { prefix: r, iconName: a }),
          typeof o == 'number' &&
            (s.unicodes[o.toString(16)] = { prefix: r, iconName: a }),
          s
        )
      },
      { names: {}, unicodes: {} },
    )
  ;(Np = n.names),
    (Rp = n.unicodes),
    (rc = Nr(Q.styleDefault, { family: Q.familyDefault }))
}
Gy(e => {
  rc = Nr(e.styleDefault, { family: Q.familyDefault })
})
Fp()
function ac(e, t) {
  return (Lp[e] || {})[t]
}
function u0(e, t) {
  return (Ip[e] || {})[t]
}
function wn(e, t) {
  return ($p[e] || {})[t]
}
function Hp(e) {
  return Np[e] || { prefix: null, iconName: null }
}
function d0(e) {
  const t = Rp[e],
    n = ac('fas', e)
  return (
    t ||
    (n ? { prefix: 'fas', iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  )
}
function kn() {
  return rc
}
const lc = () => ({ prefix: null, iconName: null, rest: [] })
function Nr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  const { family: n = Dt } = t,
    s = Zn[n][e],
    i = qi[n][e] || qi[n][s],
    o = e in je.styles ? e : null
  return i || o || null
}
const h0 = {
  [Dt]: Object.keys(ts[Dt]),
  [ue]: Object.keys(ts[ue]),
  [de]: Object.keys(ts[de]),
}
function Rr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  const { skipLookups: n = !1 } = t,
    s = {
      [Dt]: ''.concat(Q.cssPrefix, '-').concat(Dt),
      [ue]: ''.concat(Q.cssPrefix, '-').concat(ue),
      [de]: ''.concat(Q.cssPrefix, '-').concat(de),
    }
  let i = null,
    o = Dt
  const r = xy.filter(l => l !== vp)
  r.forEach(l => {
    ;(e.includes(s[l]) || e.some(c => h0[l].includes(c))) && (o = l)
  })
  const a = e.reduce((l, c) => {
    const f = f0(Q.cssPrefix, c)
    if (
      (qn[c]
        ? ((c = a0[o].includes(c) ? zy[o][c] : c), (i = c), (l.prefix = c))
        : l0[o].indexOf(c) > -1
          ? ((i = c), (l.prefix = Nr(c, { family: o })))
          : f
            ? (l.iconName = f)
            : c !== Q.replacementClass &&
              !r.some(u => c === s[u]) &&
              l.rest.push(c),
      !n && l.prefix && l.iconName)
    ) {
      const u = i === 'fa' ? Hp(l.iconName) : {},
        d = wn(l.prefix, l.iconName)
      u.prefix && (i = null),
        (l.iconName = u.iconName || d || l.iconName),
        (l.prefix = u.prefix || l.prefix),
        l.prefix === 'far' &&
          !qn.far &&
          qn.fas &&
          !Q.autoFetchSvg &&
          (l.prefix = 'fas')
    }
    return l
  }, lc())
  return (
    (e.includes('fa-brands') || e.includes('fab')) && (a.prefix = 'fab'),
    (e.includes('fa-duotone') || e.includes('fad')) && (a.prefix = 'fad'),
    !a.prefix &&
      o === ue &&
      (qn.fass || Q.autoFetchSvg) &&
      ((a.prefix = 'fass'),
      (a.iconName = wn(a.prefix, a.iconName) || a.iconName)),
    !a.prefix &&
      o === de &&
      (qn.fasds || Q.autoFetchSvg) &&
      ((a.prefix = 'fasds'),
      (a.iconName = wn(a.prefix, a.iconName) || a.iconName)),
    (a.prefix === 'fa' || i === 'fa') && (a.prefix = kn() || 'fas'),
    a
  )
}
class p0 {
  constructor() {
    this.definitions = {}
  }
  add() {
    for (var t = arguments.length, n = new Array(t), s = 0; s < t; s++)
      n[s] = arguments[s]
    const i = n.reduce(this._pullDefinitions, {})
    Object.keys(i).forEach(o => {
      ;(this.definitions[o] = { ...(this.definitions[o] || {}), ...i[o] }),
        ll(o, i[o])
      const r = ts[Dt][o]
      r && ll(r, i[o]), Fp()
    })
  }
  reset() {
    this.definitions = {}
  }
  _pullDefinitions(t, n) {
    const s = n.prefix && n.iconName && n.icon ? { 0: n } : n
    return (
      Object.keys(s).map(i => {
        const { prefix: o, iconName: r, icon: a } = s[i],
          l = a[2]
        t[o] || (t[o] = {}),
          l.length > 0 &&
            l.forEach(c => {
              typeof c == 'string' && (t[o][c] = a)
            }),
          (t[o][r] = a)
      }),
      t
    )
  }
}
let qf = [],
  Ss = {}
const Ps = {},
  g0 = Object.keys(Ps)
function m0(e, t) {
  let { mixoutsTo: n } = t
  return (
    (qf = e),
    (Ss = {}),
    Object.keys(Ps).forEach(s => {
      g0.indexOf(s) === -1 && delete Ps[s]
    }),
    qf.forEach(s => {
      const i = s.mixout ? s.mixout() : {}
      if (
        (Object.keys(i).forEach(o => {
          typeof i[o] == 'function' && (n[o] = i[o]),
            typeof i[o] == 'object' &&
              Object.keys(i[o]).forEach(r => {
                n[o] || (n[o] = {}), (n[o][r] = i[o][r])
              })
        }),
        s.hooks)
      ) {
        const o = s.hooks()
        Object.keys(o).forEach(r => {
          Ss[r] || (Ss[r] = []), Ss[r].push(o[r])
        })
      }
      s.provides && s.provides(Ps)
    }),
    n
  )
}
function cl(e, t) {
  for (
    var n = arguments.length, s = new Array(n > 2 ? n - 2 : 0), i = 2;
    i < n;
    i++
  )
    s[i - 2] = arguments[i]
  return (
    (Ss[e] || []).forEach(r => {
      t = r.apply(null, [t, ...s])
    }),
    t
  )
}
function rs(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1;
    s < t;
    s++
  )
    n[s - 1] = arguments[s]
  ;(Ss[e] || []).forEach(o => {
    o.apply(null, n)
  })
}
function Mn() {
  const e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1)
  return Ps[e] ? Ps[e].apply(null, t) : void 0
}
function fl(e) {
  e.prefix === 'fa' && (e.prefix = 'fas')
  let { iconName: t } = e
  const n = e.prefix || kn()
  if (t)
    return (t = wn(n, t) || t), Yf(jp.definitions, n, t) || Yf(je.styles, n, t)
}
const jp = new p0(),
  _0 = () => {
    ;(Q.autoReplaceSvg = !1), (Q.observeMutations = !1), rs('noAuto')
  },
  b0 = {
    i2svg: function () {
      let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      return hn
        ? (rs('beforeI2svg', e), Mn('pseudoElements2svg', e), Mn('i2svg', e))
        : Promise.reject(new Error('Operation requires a DOM of some kind.'))
    },
    watch: function () {
      let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      const { autoReplaceSvgRoot: t } = e
      Q.autoReplaceSvg === !1 && (Q.autoReplaceSvg = !0),
        (Q.observeMutations = !0),
        s0(() => {
          y0({ autoReplaceSvgRoot: t }), rs('watch', e)
        })
    },
  },
  v0 = {
    icon: e => {
      if (e === null) return null
      if (typeof e == 'object' && e.prefix && e.iconName)
        return {
          prefix: e.prefix,
          iconName: wn(e.prefix, e.iconName) || e.iconName,
        }
      if (Array.isArray(e) && e.length === 2) {
        const t = e[1].indexOf('fa-') === 0 ? e[1].slice(3) : e[1],
          n = Nr(e[0])
        return { prefix: n, iconName: wn(n, t) || t }
      }
      if (
        typeof e == 'string' &&
        (e.indexOf(''.concat(Q.cssPrefix, '-')) > -1 || e.match(By))
      ) {
        const t = Rr(e.split(' '), { skipLookups: !0 })
        return {
          prefix: t.prefix || kn(),
          iconName: wn(t.prefix, t.iconName) || t.iconName,
        }
      }
      if (typeof e == 'string') {
        const t = kn()
        return { prefix: t, iconName: wn(t, e) || e }
      }
    },
  },
  me = {
    noAuto: _0,
    config: Q,
    dom: b0,
    parse: v0,
    library: jp,
    findIconDefinition: fl,
    toHtml: ao,
  },
  y0 = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    const { autoReplaceSvgRoot: t = Pt } = e
    ;(Object.keys(je.styles).length > 0 || Q.autoFetchSvg) &&
      hn &&
      Q.autoReplaceSvg &&
      me.dom.i2svg({ node: t })
  }
function $r(e, t) {
  return (
    Object.defineProperty(e, 'abstract', { get: t }),
    Object.defineProperty(e, 'html', {
      get: function () {
        return e.abstract.map(n => ao(n))
      },
    }),
    Object.defineProperty(e, 'node', {
      get: function () {
        if (!hn) return
        const n = Pt.createElement('div')
        return (n.innerHTML = e.html), n.children
      },
    }),
    e
  )
}
function x0(e) {
  let {
    children: t,
    main: n,
    mask: s,
    attributes: i,
    styles: o,
    transform: r,
  } = e
  if (oc(r) && n.found && !s.found) {
    const { width: a, height: l } = n,
      c = { x: a / l / 2, y: 0.5 }
    i.style = Ir({
      ...o,
      'transform-origin': ''
        .concat(c.x + r.x / 16, 'em ')
        .concat(c.y + r.y / 16, 'em'),
    })
  }
  return [{ tag: 'svg', attributes: i, children: t }]
}
function E0(e) {
  let { prefix: t, iconName: n, children: s, attributes: i, symbol: o } = e
  const r = o === !0 ? ''.concat(t, '-').concat(Q.cssPrefix, '-').concat(n) : o
  return [
    {
      tag: 'svg',
      attributes: { style: 'display: none;' },
      children: [{ tag: 'symbol', attributes: { ...i, id: r }, children: s }],
    },
  ]
}
function cc(e) {
  const {
      icons: { main: t, mask: n },
      prefix: s,
      iconName: i,
      transform: o,
      symbol: r,
      title: a,
      maskId: l,
      titleId: c,
      extra: f,
      watchable: u = !1,
    } = e,
    { width: d, height: h } = n.found ? n : t,
    _ = s === 'fak',
    g = [Q.replacementClass, i ? ''.concat(Q.cssPrefix, '-').concat(i) : '']
      .filter(T => f.classes.indexOf(T) === -1)
      .filter(T => T !== '' || !!T)
      .concat(f.classes)
      .join(' ')
  let v = {
    children: [],
    attributes: {
      ...f.attributes,
      'data-prefix': s,
      'data-icon': i,
      class: g,
      role: f.attributes.role || 'img',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 '.concat(d, ' ').concat(h),
    },
  }
  const m =
    _ && !~f.classes.indexOf('fa-fw')
      ? { width: ''.concat((d / h) * 16 * 0.0625, 'em') }
      : {}
  u && (v.attributes[os] = ''),
    a &&
      (v.children.push({
        tag: 'title',
        attributes: {
          id: v.attributes['aria-labelledby'] || 'title-'.concat(c || Gi()),
        },
        children: [a],
      }),
      delete v.attributes.title)
  const y = {
      ...v,
      prefix: s,
      iconName: i,
      main: t,
      mask: n,
      maskId: l,
      transform: o,
      symbol: r,
      styles: { ...m, ...f.styles },
    },
    { children: E, attributes: x } =
      n.found && t.found
        ? Mn('generateAbstractMask', y) || { children: [], attributes: {} }
        : Mn('generateAbstractIcon', y) || { children: [], attributes: {} }
  return (y.children = E), (y.attributes = x), r ? E0(y) : x0(y)
}
function Gf(e) {
  const {
      content: t,
      width: n,
      height: s,
      transform: i,
      title: o,
      extra: r,
      watchable: a = !1,
    } = e,
    l = {
      ...r.attributes,
      ...(o ? { title: o } : {}),
      class: r.classes.join(' '),
    }
  a && (l[os] = '')
  const c = { ...r.styles }
  oc(i) &&
    ((c.transform = t0({
      transform: i,
      startCentered: !0,
      width: n,
      height: s,
    })),
    (c['-webkit-transform'] = c.transform))
  const f = Ir(c)
  f.length > 0 && (l.style = f)
  const u = []
  return (
    u.push({ tag: 'span', attributes: l, children: [t] }),
    o &&
      u.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [o] }),
    u
  )
}
function w0(e) {
  const { content: t, title: n, extra: s } = e,
    i = {
      ...s.attributes,
      ...(n ? { title: n } : {}),
      class: s.classes.join(' '),
    },
    o = Ir(s.styles)
  o.length > 0 && (i.style = o)
  const r = []
  return (
    r.push({ tag: 'span', attributes: i, children: [t] }),
    n &&
      r.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [n] }),
    r
  )
}
const { styles: ha } = je
function ul(e) {
  const t = e[0],
    n = e[1],
    [s] = e.slice(4)
  let i = null
  return (
    Array.isArray(s)
      ? (i = {
          tag: 'g',
          attributes: { class: ''.concat(Q.cssPrefix, '-').concat(fa.GROUP) },
          children: [
            {
              tag: 'path',
              attributes: {
                class: ''.concat(Q.cssPrefix, '-').concat(fa.SECONDARY),
                fill: 'currentColor',
                d: s[0],
              },
            },
            {
              tag: 'path',
              attributes: {
                class: ''.concat(Q.cssPrefix, '-').concat(fa.PRIMARY),
                fill: 'currentColor',
                d: s[1],
              },
            },
          ],
        })
      : (i = { tag: 'path', attributes: { fill: 'currentColor', d: s } }),
    { found: !0, width: t, height: n, icon: i }
  )
}
const A0 = { found: !1, width: 512, height: 512 }
function S0(e, t) {
  !Ap &&
    !Q.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'),
    )
}
function dl(e, t) {
  let n = t
  return (
    t === 'fa' && Q.styleDefault !== null && (t = kn()),
    new Promise((s, i) => {
      if (n === 'fa') {
        const o = Hp(e) || {}
        ;(e = o.iconName || e), (t = o.prefix || t)
      }
      if (e && t && ha[t] && ha[t][e]) {
        const o = ha[t][e]
        return s(ul(o))
      }
      S0(e, t),
        s({
          ...A0,
          icon: Q.showMissingIcons && e ? Mn('missingIconAbstract') || {} : {},
        })
    })
  )
}
const Xf = () => {},
  hl =
    Q.measurePerformance && yo && yo.mark && yo.measure
      ? yo
      : { mark: Xf, measure: Xf },
  pi = 'FA "6.6.0"',
  T0 = e => (hl.mark(''.concat(pi, ' ').concat(e, ' begins')), () => zp(e)),
  zp = e => {
    hl.mark(''.concat(pi, ' ').concat(e, ' ends')),
      hl.measure(
        ''.concat(pi, ' ').concat(e),
        ''.concat(pi, ' ').concat(e, ' begins'),
        ''.concat(pi, ' ').concat(e, ' ends'),
      )
  }
var fc = { begin: T0, end: zp }
const Yo = () => {}
function Qf(e) {
  return typeof (e.getAttribute ? e.getAttribute(os) : null) == 'string'
}
function O0(e) {
  const t = e.getAttribute ? e.getAttribute(nc) : null,
    n = e.getAttribute ? e.getAttribute(sc) : null
  return t && n
}
function C0(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(Q.replacementClass)
  )
}
function k0() {
  return Q.autoReplaceSvg === !0
    ? Ko.replace
    : Ko[Q.autoReplaceSvg] || Ko.replace
}
function M0(e) {
  return Pt.createElementNS('http://www.w3.org/2000/svg', e)
}
function P0(e) {
  return Pt.createElement(e)
}
function Bp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  const { ceFn: n = e.tag === 'svg' ? M0 : P0 } = t
  if (typeof e == 'string') return Pt.createTextNode(e)
  const s = n(e.tag)
  return (
    Object.keys(e.attributes || []).forEach(function (o) {
      s.setAttribute(o, e.attributes[o])
    }),
    (e.children || []).forEach(function (o) {
      s.appendChild(Bp(o, { ceFn: n }))
    }),
    s
  )
}
function D0(e) {
  let t = ' '.concat(e.outerHTML, ' ')
  return (t = ''.concat(t, 'Font Awesome fontawesome.com ')), t
}
const Ko = {
  replace: function (e) {
    const t = e[0]
    if (t.parentNode)
      if (
        (e[1].forEach(n => {
          t.parentNode.insertBefore(Bp(n), t)
        }),
        t.getAttribute(os) === null && Q.keepOriginalSource)
      ) {
        let n = Pt.createComment(D0(t))
        t.parentNode.replaceChild(n, t)
      } else t.remove()
  },
  nest: function (e) {
    const t = e[0],
      n = e[1]
    if (~ic(t).indexOf(Q.replacementClass)) return Ko.replace(e)
    const s = new RegExp(''.concat(Q.cssPrefix, '-.*'))
    if ((delete n[0].attributes.id, n[0].attributes.class)) {
      const o = n[0].attributes.class
        .split(' ')
        .reduce(
          (r, a) => (
            a === Q.replacementClass || a.match(s)
              ? r.toSvg.push(a)
              : r.toNode.push(a),
            r
          ),
          { toNode: [], toSvg: [] },
        )
      ;(n[0].attributes.class = o.toSvg.join(' ')),
        o.toNode.length === 0
          ? t.removeAttribute('class')
          : t.setAttribute('class', o.toNode.join(' '))
    }
    const i = n.map(o => ao(o)).join(`
`)
    t.setAttribute(os, ''), (t.innerHTML = i)
  },
}
function Jf(e) {
  e()
}
function Wp(e, t) {
  const n = typeof t == 'function' ? t : Yo
  if (e.length === 0) n()
  else {
    let s = Jf
    Q.mutateApproach === Hy && (s = Cn.requestAnimationFrame || Jf),
      s(() => {
        const i = k0(),
          o = fc.begin('mutate')
        e.map(i), o(), n()
      })
  }
}
let uc = !1
function Vp() {
  uc = !0
}
function pl() {
  uc = !1
}
let rr = null
function Zf(e) {
  if (!zf || !Q.observeMutations) return
  const {
    treeCallback: t = Yo,
    nodeCallback: n = Yo,
    pseudoElementsCallback: s = Yo,
    observeMutationsRoot: i = Pt,
  } = e
  ;(rr = new zf(o => {
    if (uc) return
    const r = kn()
    Gs(o).forEach(a => {
      if (
        (a.type === 'childList' &&
          a.addedNodes.length > 0 &&
          !Qf(a.addedNodes[0]) &&
          (Q.searchPseudoElements && s(a.target), t(a.target)),
        a.type === 'attributes' &&
          a.target.parentNode &&
          Q.searchPseudoElements &&
          s(a.target.parentNode),
        a.type === 'attributes' && Qf(a.target) && ~Uy.indexOf(a.attributeName))
      )
        if (a.attributeName === 'class' && O0(a.target)) {
          const { prefix: l, iconName: c } = Rr(ic(a.target))
          a.target.setAttribute(nc, l || r), c && a.target.setAttribute(sc, c)
        } else C0(a.target) && n(a.target)
    })
  })),
    hn &&
      rr.observe(i, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0,
      })
}
function L0() {
  rr && rr.disconnect()
}
function I0(e) {
  const t = e.getAttribute('style')
  let n = []
  return (
    t &&
      (n = t.split(';').reduce((s, i) => {
        const o = i.split(':'),
          r = o[0],
          a = o.slice(1)
        return r && a.length > 0 && (s[r] = a.join(':').trim()), s
      }, {})),
    n
  )
}
function N0(e) {
  const t = e.getAttribute('data-prefix'),
    n = e.getAttribute('data-icon'),
    s = e.innerText !== void 0 ? e.innerText.trim() : ''
  let i = Rr(ic(e))
  return (
    i.prefix || (i.prefix = kn()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        s.length > 0 &&
        (i.iconName =
          u0(i.prefix, e.innerText) || ac(i.prefix, al(e.innerText))),
      !i.iconName &&
        Q.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  )
}
function R0(e) {
  const t = Gs(e.attributes).reduce(
      (i, o) => (
        i.name !== 'class' && i.name !== 'style' && (i[o.name] = o.value), i
      ),
      {},
    ),
    n = e.getAttribute('title'),
    s = e.getAttribute('data-fa-title-id')
  return (
    Q.autoA11y &&
      (n
        ? (t['aria-labelledby'] = ''
            .concat(Q.replacementClass, '-title-')
            .concat(s || Gi()))
        : ((t['aria-hidden'] = 'true'), (t.focusable = 'false'))),
    t
  )
}
function $0() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: He,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  }
}
function tu(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { styleParser: !0 }
  const { iconName: n, prefix: s, rest: i } = N0(e),
    o = R0(e),
    r = cl('parseNodeAttributes', {}, e)
  let a = t.styleParser ? I0(e) : []
  return {
    iconName: n,
    title: e.getAttribute('title'),
    titleId: e.getAttribute('data-fa-title-id'),
    prefix: s,
    transform: He,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    symbol: !1,
    extra: { classes: i, styles: a, attributes: o },
    ...r,
  }
}
const { styles: F0 } = je
function Up(e) {
  const t = Q.autoReplaceSvg === 'nest' ? tu(e, { styleParser: !1 }) : tu(e)
  return ~t.extra.classes.indexOf(Op)
    ? Mn('generateLayersText', e, t)
    : Mn('generateSvgReplacementMutation', e, t)
}
let Ue = new Set()
Sp.map(e => {
  Ue.add('fa-'.concat(e))
})
Object.keys(Zn[Dt]).map(Ue.add.bind(Ue))
Object.keys(Zn[ue]).map(Ue.add.bind(Ue))
Object.keys(Zn[de]).map(Ue.add.bind(Ue))
Ue = [...Ue]
function eu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null
  if (!hn) return Promise.resolve()
  const n = Pt.documentElement.classList,
    s = f => n.add(''.concat(Vf, '-').concat(f)),
    i = f => n.remove(''.concat(Vf, '-').concat(f)),
    o = Q.autoFetchSvg
      ? Ue
      : Sp.map(f => 'fa-'.concat(f)).concat(Object.keys(F0))
  o.includes('fa') || o.push('fa')
  const r = ['.'.concat(Op, ':not([').concat(os, '])')]
    .concat(o.map(f => '.'.concat(f, ':not([').concat(os, '])')))
    .join(', ')
  if (r.length === 0) return Promise.resolve()
  let a = []
  try {
    a = Gs(e.querySelectorAll(r))
  } catch {}
  if (a.length > 0) s('pending'), i('complete')
  else return Promise.resolve()
  const l = fc.begin('onTree'),
    c = a.reduce((f, u) => {
      try {
        const d = Up(u)
        d && f.push(d)
      } catch (d) {
        Ap || (d.name === 'MissingIcon' && console.error(d))
      }
      return f
    }, [])
  return new Promise((f, u) => {
    Promise.all(c)
      .then(d => {
        Wp(d, () => {
          s('active'),
            s('complete'),
            i('pending'),
            typeof t == 'function' && t(),
            l(),
            f()
        })
      })
      .catch(d => {
        l(), u(d)
      })
  })
}
function H0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null
  Up(e).then(n => {
    n && Wp([n], t)
  })
}
function j0(e) {
  return function (t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const s = (t || {}).icon ? t : fl(t || {})
    let { mask: i } = n
    return i && (i = (i || {}).icon ? i : fl(i || {})), e(s, { ...n, mask: i })
  }
}
const z0 = function (e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  const {
    transform: n = He,
    symbol: s = !1,
    mask: i = null,
    maskId: o = null,
    title: r = null,
    titleId: a = null,
    classes: l = [],
    attributes: c = {},
    styles: f = {},
  } = t
  if (!e) return
  const { prefix: u, iconName: d, icon: h } = e
  return $r(
    { type: 'icon', ...e },
    () => (
      rs('beforeDOMElementCreation', { iconDefinition: e, params: t }),
      Q.autoA11y &&
        (r
          ? (c['aria-labelledby'] = ''
              .concat(Q.replacementClass, '-title-')
              .concat(a || Gi()))
          : ((c['aria-hidden'] = 'true'), (c.focusable = 'false'))),
      cc({
        icons: {
          main: ul(h),
          mask: i
            ? ul(i.icon)
            : { found: !1, width: null, height: null, icon: {} },
        },
        prefix: u,
        iconName: d,
        transform: { ...He, ...n },
        symbol: s,
        title: r,
        maskId: o,
        titleId: a,
        extra: { attributes: c, styles: f, classes: l },
      })
    ),
  )
}
var B0 = {
    mixout() {
      return { icon: j0(z0) }
    },
    hooks() {
      return {
        mutationObserverCallbacks(e) {
          return (e.treeCallback = eu), (e.nodeCallback = H0), e
        },
      }
    },
    provides(e) {
      ;(e.i2svg = function (t) {
        const { node: n = Pt, callback: s = () => {} } = t
        return eu(n, s)
      }),
        (e.generateSvgReplacementMutation = function (t, n) {
          const {
            iconName: s,
            title: i,
            titleId: o,
            prefix: r,
            transform: a,
            symbol: l,
            mask: c,
            maskId: f,
            extra: u,
          } = n
          return new Promise((d, h) => {
            Promise.all([
              dl(s, r),
              c.iconName
                ? dl(c.iconName, c.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(_ => {
                let [g, v] = _
                d([
                  t,
                  cc({
                    icons: { main: g, mask: v },
                    prefix: r,
                    iconName: s,
                    transform: a,
                    symbol: l,
                    maskId: f,
                    title: i,
                    titleId: o,
                    extra: u,
                    watchable: !0,
                  }),
                ])
              })
              .catch(h)
          })
        }),
        (e.generateAbstractIcon = function (t) {
          let {
            children: n,
            attributes: s,
            main: i,
            transform: o,
            styles: r,
          } = t
          const a = Ir(r)
          a.length > 0 && (s.style = a)
          let l
          return (
            oc(o) &&
              (l = Mn('generateAbstractTransformGrouping', {
                main: i,
                transform: o,
                containerWidth: i.width,
                iconWidth: i.width,
              })),
            n.push(l || i.icon),
            { children: n, attributes: s }
          )
        })
    },
  },
  W0 = {
    mixout() {
      return {
        layer(e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          const { classes: n = [] } = t
          return $r({ type: 'layer' }, () => {
            rs('beforeDOMElementCreation', { assembler: e, params: t })
            let s = []
            return (
              e(i => {
                Array.isArray(i)
                  ? i.map(o => {
                      s = s.concat(o.abstract)
                    })
                  : (s = s.concat(i.abstract))
              }),
              [
                {
                  tag: 'span',
                  attributes: {
                    class: [''.concat(Q.cssPrefix, '-layers'), ...n].join(' '),
                  },
                  children: s,
                },
              ]
            )
          })
        },
      }
    },
  },
  V0 = {
    mixout() {
      return {
        counter(e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          const {
            title: n = null,
            classes: s = [],
            attributes: i = {},
            styles: o = {},
          } = t
          return $r(
            { type: 'counter', content: e },
            () => (
              rs('beforeDOMElementCreation', { content: e, params: t }),
              w0({
                content: e.toString(),
                title: n,
                extra: {
                  attributes: i,
                  styles: o,
                  classes: [''.concat(Q.cssPrefix, '-layers-counter'), ...s],
                },
              })
            ),
          )
        },
      }
    },
  },
  U0 = {
    mixout() {
      return {
        text(e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          const {
            transform: n = He,
            title: s = null,
            classes: i = [],
            attributes: o = {},
            styles: r = {},
          } = t
          return $r(
            { type: 'text', content: e },
            () => (
              rs('beforeDOMElementCreation', { content: e, params: t }),
              Gf({
                content: e,
                transform: { ...He, ...n },
                title: s,
                extra: {
                  attributes: o,
                  styles: r,
                  classes: [''.concat(Q.cssPrefix, '-layers-text'), ...i],
                },
              })
            ),
          )
        },
      }
    },
    provides(e) {
      e.generateLayersText = function (t, n) {
        const { title: s, transform: i, extra: o } = n
        let r = null,
          a = null
        if (bp) {
          const l = parseInt(getComputedStyle(t).fontSize, 10),
            c = t.getBoundingClientRect()
          ;(r = c.width / l), (a = c.height / l)
        }
        return (
          Q.autoA11y && !s && (o.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            t,
            Gf({
              content: t.innerHTML,
              width: r,
              height: a,
              transform: i,
              title: s,
              extra: o,
              watchable: !0,
            }),
          ])
        )
      }
    },
  }
const Y0 = new RegExp('"', 'ug'),
  nu = [1105920, 1112319],
  su = { FontAwesome: { normal: 'fas', 400: 'fas' }, ...Oy, ...Ty, ...Ny },
  gl = Object.keys(su).reduce((e, t) => ((e[t.toLowerCase()] = su[t]), e), {}),
  K0 = Object.keys(gl).reduce((e, t) => {
    const n = gl[t]
    return (e[t] = n[900] || [...Object.entries(n)][0][1]), e
  }, {})
function q0(e) {
  const t = e.replace(Y0, ''),
    n = o0(t, 0),
    s = n >= nu[0] && n <= nu[1],
    i = t.length === 2 ? t[0] === t[1] : !1
  return { value: al(i ? t[0] : t), isSecondary: s || i }
}
function G0(e, t) {
  const n = e.replace(/^['"]|['"]$/g, '').toLowerCase(),
    s = parseInt(t),
    i = isNaN(s) ? 'normal' : s
  return (gl[n] || {})[i] || K0[n]
}
function iu(e, t) {
  const n = ''.concat(Fy).concat(t.replace(':', '-'))
  return new Promise((s, i) => {
    if (e.getAttribute(n) !== null) return s()
    const r = Gs(e.children).filter(d => d.getAttribute(sl) === t)[0],
      a = Cn.getComputedStyle(e, t),
      l = a.getPropertyValue('font-family'),
      c = l.match(Wy),
      f = a.getPropertyValue('font-weight'),
      u = a.getPropertyValue('content')
    if (r && !c) return e.removeChild(r), s()
    if (c && u !== 'none' && u !== '') {
      const d = a.getPropertyValue('content')
      let h = G0(l, f)
      const { value: _, isSecondary: g } = q0(d),
        v = c[0].startsWith('FontAwesome')
      let m = ac(h, _),
        y = m
      if (v) {
        const E = d0(_)
        E.iconName && E.prefix && ((m = E.iconName), (h = E.prefix))
      }
      if (
        m &&
        !g &&
        (!r || r.getAttribute(nc) !== h || r.getAttribute(sc) !== y)
      ) {
        e.setAttribute(n, y), r && e.removeChild(r)
        const E = $0(),
          { extra: x } = E
        ;(x.attributes[sl] = t),
          dl(m, h)
            .then(T => {
              const P = cc({
                  ...E,
                  icons: { main: T, mask: lc() },
                  prefix: h,
                  iconName: y,
                  extra: x,
                  watchable: !0,
                }),
                R = Pt.createElementNS('http://www.w3.org/2000/svg', 'svg')
              t === '::before'
                ? e.insertBefore(R, e.firstChild)
                : e.appendChild(R),
                (R.outerHTML = P.map(q => ao(q)).join(`
`)),
                e.removeAttribute(n),
                s()
            })
            .catch(i)
      } else s()
    } else s()
  })
}
function X0(e) {
  return Promise.all([iu(e, '::before'), iu(e, '::after')])
}
function Q0(e) {
  return (
    e.parentNode !== document.head &&
    !~jy.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(sl) &&
    (!e.parentNode || e.parentNode.tagName !== 'svg')
  )
}
function ou(e) {
  if (hn)
    return new Promise((t, n) => {
      const s = Gs(e.querySelectorAll('*')).filter(Q0).map(X0),
        i = fc.begin('searchPseudoElements')
      Vp(),
        Promise.all(s)
          .then(() => {
            i(), pl(), t()
          })
          .catch(() => {
            i(), pl(), n()
          })
    })
}
var J0 = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return (e.pseudoElementsCallback = ou), e
      },
    }
  },
  provides(e) {
    e.pseudoElements2svg = function (t) {
      const { node: n = Pt } = t
      Q.searchPseudoElements && ou(n)
    }
  },
}
let ru = !1
var Z0 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Vp(), (ru = !0)
        },
      },
    }
  },
  hooks() {
    return {
      bootstrap() {
        Zf(cl('mutationObserverCallbacks', {}))
      },
      noAuto() {
        L0()
      },
      watch(e) {
        const { observeMutationsRoot: t } = e
        ru
          ? pl()
          : Zf(cl('mutationObserverCallbacks', { observeMutationsRoot: t }))
      },
    }
  },
}
const au = e => {
  let t = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }
  return e
    .toLowerCase()
    .split(' ')
    .reduce((n, s) => {
      const i = s.toLowerCase().split('-'),
        o = i[0]
      let r = i.slice(1).join('-')
      if (o && r === 'h') return (n.flipX = !0), n
      if (o && r === 'v') return (n.flipY = !0), n
      if (((r = parseFloat(r)), isNaN(r))) return n
      switch (o) {
        case 'grow':
          n.size = n.size + r
          break
        case 'shrink':
          n.size = n.size - r
          break
        case 'left':
          n.x = n.x - r
          break
        case 'right':
          n.x = n.x + r
          break
        case 'up':
          n.y = n.y - r
          break
        case 'down':
          n.y = n.y + r
          break
        case 'rotate':
          n.rotate = n.rotate + r
          break
      }
      return n
    }, t)
}
var t1 = {
  mixout() {
    return { parse: { transform: e => au(e) } }
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute('data-fa-transform')
        return n && (e.transform = au(n)), e
      },
    }
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function (t) {
      let { main: n, transform: s, containerWidth: i, iconWidth: o } = t
      const r = { transform: 'translate('.concat(i / 2, ' 256)') },
        a = 'translate('.concat(s.x * 32, ', ').concat(s.y * 32, ') '),
        l = 'scale('
          .concat((s.size / 16) * (s.flipX ? -1 : 1), ', ')
          .concat((s.size / 16) * (s.flipY ? -1 : 1), ') '),
        c = 'rotate('.concat(s.rotate, ' 0 0)'),
        f = { transform: ''.concat(a, ' ').concat(l, ' ').concat(c) },
        u = { transform: 'translate('.concat((o / 2) * -1, ' -256)') },
        d = { outer: r, inner: f, path: u }
      return {
        tag: 'g',
        attributes: { ...d.outer },
        children: [
          {
            tag: 'g',
            attributes: { ...d.inner },
            children: [
              {
                tag: n.icon.tag,
                children: n.icon.children,
                attributes: { ...n.icon.attributes, ...d.path },
              },
            ],
          },
        ],
      }
    }
  },
}
const pa = { x: 0, y: 0, width: '100%', height: '100%' }
function lu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = 'black'), e
  )
}
function e1(e) {
  return e.tag === 'g' ? e.children : [e]
}
var n1 = {
    hooks() {
      return {
        parseNodeAttributes(e, t) {
          const n = t.getAttribute('data-fa-mask'),
            s = n ? Rr(n.split(' ').map(i => i.trim())) : lc()
          return (
            s.prefix || (s.prefix = kn()),
            (e.mask = s),
            (e.maskId = t.getAttribute('data-fa-mask-id')),
            e
          )
        },
      }
    },
    provides(e) {
      e.generateAbstractMask = function (t) {
        let {
          children: n,
          attributes: s,
          main: i,
          mask: o,
          maskId: r,
          transform: a,
        } = t
        const { width: l, icon: c } = i,
          { width: f, icon: u } = o,
          d = Zy({ transform: a, containerWidth: f, iconWidth: l }),
          h = { tag: 'rect', attributes: { ...pa, fill: 'white' } },
          _ = c.children ? { children: c.children.map(lu) } : {},
          g = {
            tag: 'g',
            attributes: { ...d.inner },
            children: [
              lu({
                tag: c.tag,
                attributes: { ...c.attributes, ...d.path },
                ..._,
              }),
            ],
          },
          v = { tag: 'g', attributes: { ...d.outer }, children: [g] },
          m = 'mask-'.concat(r || Gi()),
          y = 'clip-'.concat(r || Gi()),
          E = {
            tag: 'mask',
            attributes: {
              ...pa,
              id: m,
              maskUnits: 'userSpaceOnUse',
              maskContentUnits: 'userSpaceOnUse',
            },
            children: [h, v],
          },
          x = {
            tag: 'defs',
            children: [
              { tag: 'clipPath', attributes: { id: y }, children: e1(u) },
              E,
            ],
          }
        return (
          n.push(x, {
            tag: 'rect',
            attributes: {
              fill: 'currentColor',
              'clip-path': 'url(#'.concat(y, ')'),
              mask: 'url(#'.concat(m, ')'),
              ...pa,
            },
          }),
          { children: n, attributes: s }
        )
      }
    },
  },
  s1 = {
    provides(e) {
      let t = !1
      Cn.matchMedia &&
        (t = Cn.matchMedia('(prefers-reduced-motion: reduce)').matches),
        (e.missingIconAbstract = function () {
          const n = [],
            s = { fill: 'currentColor' },
            i = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' }
          n.push({
            tag: 'path',
            attributes: {
              ...s,
              d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
            },
          })
          const o = { ...i, attributeName: 'opacity' },
            r = {
              tag: 'circle',
              attributes: { ...s, cx: '256', cy: '364', r: '28' },
              children: [],
            }
          return (
            t ||
              r.children.push(
                {
                  tag: 'animate',
                  attributes: {
                    ...i,
                    attributeName: 'r',
                    values: '28;14;28;28;14;28;',
                  },
                },
                {
                  tag: 'animate',
                  attributes: { ...o, values: '1;0;1;1;0;1;' },
                },
              ),
            n.push(r),
            n.push({
              tag: 'path',
              attributes: {
                ...s,
                opacity: '1',
                d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
              },
              children: t
                ? []
                : [
                    {
                      tag: 'animate',
                      attributes: { ...o, values: '1;0;0;0;0;1;' },
                    },
                  ],
            }),
            t ||
              n.push({
                tag: 'path',
                attributes: {
                  ...s,
                  opacity: '0',
                  d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                },
                children: [
                  {
                    tag: 'animate',
                    attributes: { ...o, values: '0;0;1;1;0;0;' },
                  },
                ],
              }),
            { tag: 'g', attributes: { class: 'missing' }, children: n }
          )
        })
    },
  },
  i1 = {
    hooks() {
      return {
        parseNodeAttributes(e, t) {
          const n = t.getAttribute('data-fa-symbol'),
            s = n === null ? !1 : n === '' ? !0 : n
          return (e.symbol = s), e
        },
      }
    },
  },
  o1 = [n0, B0, W0, V0, U0, J0, Z0, t1, n1, s1, i1]
m0(o1, { mixoutsTo: me })
me.noAuto
me.config
const r1 = me.library
me.dom
const ml = me.parse
me.findIconDefinition
me.toHtml
const a1 = me.icon
me.layer
me.text
me.counter
function cu(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e)
    t &&
      (s = s.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      n.push.apply(n, s)
  }
  return n
}
function nn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? cu(Object(n), !0).forEach(function (s) {
          Zt(e, s, n[s])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : cu(Object(n)).forEach(function (s) {
            Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(n, s))
          })
  }
  return e
}
function l1(e, t) {
  if (typeof e != 'object' || !e) return e
  var n = e[Symbol.toPrimitive]
  if (n !== void 0) {
    var s = n.call(e, t || 'default')
    if (typeof s != 'object') return s
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function c1(e) {
  var t = l1(e, 'string')
  return typeof t == 'symbol' ? t : t + ''
}
function ar(e) {
  '@babel/helpers - typeof'
  return (
    (ar =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    ar(e)
  )
}
function Zt(e, t, n) {
  return (
    (t = c1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function f1(e, t) {
  if (e == null) return {}
  var n = {}
  for (var s in e)
    if (Object.prototype.hasOwnProperty.call(e, s)) {
      if (t.indexOf(s) >= 0) continue
      n[s] = e[s]
    }
  return n
}
function u1(e, t) {
  if (e == null) return {}
  var n = f1(e, t),
    s,
    i
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e)
    for (i = 0; i < o.length; i++)
      (s = o[i]),
        !(t.indexOf(s) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, s) &&
          (n[s] = e[s])
  }
  return n
}
var d1 =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  Yp = { exports: {} }
;(function (e) {
  ;(function (t) {
    var n = function (m, y, E) {
        if (!c(y) || u(y) || d(y) || h(y) || l(y)) return y
        var x,
          T = 0,
          P = 0
        if (f(y)) for (x = [], P = y.length; T < P; T++) x.push(n(m, y[T], E))
        else {
          x = {}
          for (var R in y)
            Object.prototype.hasOwnProperty.call(y, R) &&
              (x[m(R, E)] = n(m, y[R], E))
        }
        return x
      },
      s = function (m, y) {
        y = y || {}
        var E = y.separator || '_',
          x = y.split || /(?=[A-Z])/
        return m.split(x).join(E)
      },
      i = function (m) {
        return _(m)
          ? m
          : ((m = m.replace(/[\-_\s]+(.)?/g, function (y, E) {
              return E ? E.toUpperCase() : ''
            })),
            m.substr(0, 1).toLowerCase() + m.substr(1))
      },
      o = function (m) {
        var y = i(m)
        return y.substr(0, 1).toUpperCase() + y.substr(1)
      },
      r = function (m, y) {
        return s(m, y).toLowerCase()
      },
      a = Object.prototype.toString,
      l = function (m) {
        return typeof m == 'function'
      },
      c = function (m) {
        return m === Object(m)
      },
      f = function (m) {
        return a.call(m) == '[object Array]'
      },
      u = function (m) {
        return a.call(m) == '[object Date]'
      },
      d = function (m) {
        return a.call(m) == '[object RegExp]'
      },
      h = function (m) {
        return a.call(m) == '[object Boolean]'
      },
      _ = function (m) {
        return (m = m - 0), m === m
      },
      g = function (m, y) {
        var E = y && 'process' in y ? y.process : y
        return typeof E != 'function'
          ? m
          : function (x, T) {
              return E(x, m, T)
            }
      },
      v = {
        camelize: i,
        decamelize: r,
        pascalize: o,
        depascalize: r,
        camelizeKeys: function (m, y) {
          return n(g(i, y), m)
        },
        decamelizeKeys: function (m, y) {
          return n(g(r, y), m, y)
        },
        pascalizeKeys: function (m, y) {
          return n(g(o, y), m)
        },
        depascalizeKeys: function () {
          return this.decamelizeKeys.apply(this, arguments)
        },
      }
    e.exports ? (e.exports = v) : (t.humps = v)
  })(d1)
})(Yp)
var h1 = Yp.exports,
  p1 = ['class', 'style']
function g1(e) {
  return e
    .split(';')
    .map(function (t) {
      return t.trim()
    })
    .filter(function (t) {
      return t
    })
    .reduce(function (t, n) {
      var s = n.indexOf(':'),
        i = h1.camelize(n.slice(0, s)),
        o = n.slice(s + 1).trim()
      return (t[i] = o), t
    }, {})
}
function m1(e) {
  return e.split(/\s+/).reduce(function (t, n) {
    return (t[n] = !0), t
  }, {})
}
function Kp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
  if (typeof e == 'string') return e
  var s = (e.children || []).map(function (l) {
      return Kp(l)
    }),
    i = Object.keys(e.attributes || {}).reduce(
      function (l, c) {
        var f = e.attributes[c]
        switch (c) {
          case 'class':
            l.class = m1(f)
            break
          case 'style':
            l.style = g1(f)
            break
          default:
            l.attrs[c] = f
        }
        return l
      },
      { attrs: {}, class: {}, style: {} },
    )
  n.class
  var o = n.style,
    r = o === void 0 ? {} : o,
    a = u1(n, p1)
  return Is(
    e.tag,
    nn(
      nn(
        nn({}, t),
        {},
        { class: i.class, style: nn(nn({}, i.style), r) },
        i.attrs,
      ),
      a,
    ),
    s,
  )
}
var qp = !1
try {
  qp = !0
} catch {}
function _1() {
  if (!qp && console && typeof console.error == 'function') {
    var e
    ;(e = console).error.apply(e, arguments)
  }
}
function ga(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? Zt({}, e, t)
    : {}
}
function b1(e) {
  var t,
    n =
      ((t = {
        'fa-spin': e.spin,
        'fa-pulse': e.pulse,
        'fa-fw': e.fixedWidth,
        'fa-border': e.border,
        'fa-li': e.listItem,
        'fa-inverse': e.inverse,
        'fa-flip': e.flip === !0,
        'fa-flip-horizontal': e.flip === 'horizontal' || e.flip === 'both',
        'fa-flip-vertical': e.flip === 'vertical' || e.flip === 'both',
      }),
      Zt(
        Zt(
          Zt(
            Zt(
              Zt(
                Zt(
                  Zt(
                    Zt(
                      Zt(
                        Zt(t, 'fa-'.concat(e.size), e.size !== null),
                        'fa-rotate-'.concat(e.rotation),
                        e.rotation !== null,
                      ),
                      'fa-pull-'.concat(e.pull),
                      e.pull !== null,
                    ),
                    'fa-swap-opacity',
                    e.swapOpacity,
                  ),
                  'fa-bounce',
                  e.bounce,
                ),
                'fa-shake',
                e.shake,
              ),
              'fa-beat',
              e.beat,
            ),
            'fa-fade',
            e.fade,
          ),
          'fa-beat-fade',
          e.beatFade,
        ),
        'fa-flash',
        e.flash,
      ),
      Zt(Zt(t, 'fa-spin-pulse', e.spinPulse), 'fa-spin-reverse', e.spinReverse))
  return Object.keys(n)
    .map(function (s) {
      return n[s] ? s : null
    })
    .filter(function (s) {
      return s
    })
}
function fu(e) {
  if (e && ar(e) === 'object' && e.prefix && e.iconName && e.icon) return e
  if (ml.icon) return ml.icon(e)
  if (e === null) return null
  if (ar(e) === 'object' && e.prefix && e.iconName) return e
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] }
  if (typeof e == 'string') return { prefix: 'fas', iconName: e }
}
var ct = so({
  name: 'FontAwesomeIcon',
  props: {
    border: { type: Boolean, default: !1 },
    fixedWidth: { type: Boolean, default: !1 },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function (t) {
        return [!0, !1, 'horizontal', 'vertical', 'both'].indexOf(t) > -1
      },
    },
    icon: { type: [Object, Array, String], required: !0 },
    mask: { type: [Object, Array, String], default: null },
    maskId: { type: String, default: null },
    listItem: { type: Boolean, default: !1 },
    pull: {
      type: String,
      default: null,
      validator: function (t) {
        return ['right', 'left'].indexOf(t) > -1
      },
    },
    pulse: { type: Boolean, default: !1 },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function (t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1
      },
    },
    swapOpacity: { type: Boolean, default: !1 },
    size: {
      type: String,
      default: null,
      validator: function (t) {
        return (
          [
            '2xs',
            'xs',
            'sm',
            'lg',
            'xl',
            '2xl',
            '1x',
            '2x',
            '3x',
            '4x',
            '5x',
            '6x',
            '7x',
            '8x',
            '9x',
            '10x',
          ].indexOf(t) > -1
        )
      },
    },
    spin: { type: Boolean, default: !1 },
    transform: { type: [String, Object], default: null },
    symbol: { type: [Boolean, String], default: !1 },
    title: { type: String, default: null },
    titleId: { type: String, default: null },
    inverse: { type: Boolean, default: !1 },
    bounce: { type: Boolean, default: !1 },
    shake: { type: Boolean, default: !1 },
    beat: { type: Boolean, default: !1 },
    fade: { type: Boolean, default: !1 },
    beatFade: { type: Boolean, default: !1 },
    flash: { type: Boolean, default: !1 },
    spinPulse: { type: Boolean, default: !1 },
    spinReverse: { type: Boolean, default: !1 },
  },
  setup: function (t, n) {
    var s = n.attrs,
      i = zt(function () {
        return fu(t.icon)
      }),
      o = zt(function () {
        return ga('classes', b1(t))
      }),
      r = zt(function () {
        return ga(
          'transform',
          typeof t.transform == 'string'
            ? ml.transform(t.transform)
            : t.transform,
        )
      }),
      a = zt(function () {
        return ga('mask', fu(t.mask))
      }),
      l = zt(function () {
        return a1(
          i.value,
          nn(
            nn(nn(nn({}, o.value), r.value), a.value),
            {},
            {
              symbol: t.symbol,
              title: t.title,
              titleId: t.titleId,
              maskId: t.maskId,
            },
          ),
        )
      })
    Ms(
      l,
      function (f) {
        if (!f)
          return _1('Could not find one or more icon(s)', i.value, a.value)
      },
      { immediate: !0 },
    )
    var c = zt(function () {
      return l.value ? Kp(l.value.abstract[0], {}, s) : null
    })
    return function () {
      return c.value
    }
  },
})
const v1 = { class: 'text-center text-white' },
  y1 = { class: 'container text-center pt-1' },
  x1 = { class: 'row mt-3' },
  E1 = { class: 'col-md-3 col-lg-2 col-xl-2 mx-auto mb-4' },
  w1 = { class: 'col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4' },
  A1 = { href: 'mailto:robertalensabo@gmail.com', class: 'text-white' },
  S1 = { href: 'tel:+12087408655', class: 'text-white' },
  T1 = {
    class:
      'd-flex justify-content-between align-items-center p-3 bottom-section',
  },
  O1 = { class: 'd-flex justify-content-center align-items-center ms-3' },
  C1 = { href: 'https://github.com/robbysabo', class: 'text-white me-4 h2' },
  k1 = {
    href: 'https://www.linkedin.com/in/robert-sabo-308860212',
    class: 'text-white me-4 h2',
  },
  M1 = {
    href: 'https://codesandbox.io/u/robbysabo',
    class: 'text-white me-4 h2',
  },
  P1 = {
    __name: 'FooterComponent',
    setup(e) {
      return (t, n) => {
        const s = kh('router-link')
        return (
          dn(),
          us('footer', v1, [
            w('section', y1, [
              w('div', x1, [
                n[10] ||
                  (n[10] = is(
                    '<div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" data-v-c4a85c31><h5 class="text-uppercase" data-v-c4a85c31>Projects</h5><hr class="mb-4 mt-0 d-inline-block mx-auto line-break" data-v-c4a85c31><p data-v-c4a85c31><a href="https://www.wegeektogether.com/" target="_blank" class="text-white" data-v-c4a85c31>We Geek Together</a></p><p data-v-c4a85c31><a href="https://mrzig0.csb.app/" target="_blank" class="text-white" data-v-c4a85c31>Case Study: Pokémon</a></p><p data-v-c4a85c31><a href="https://m0xyh7.csb.app/" target="_blank" class="text-white" data-v-c4a85c31>Music Company</a></p></div>',
                    1,
                  )),
                w('div', E1, [
                  n[4] ||
                    (n[4] = w(
                      'h5',
                      { class: 'text-uppercase' },
                      'Navigation',
                      -1,
                    )),
                  n[5] ||
                    (n[5] = w(
                      'hr',
                      { class: 'mb-4 mt-0 d-inline-block mx-auto line-break' },
                      null,
                      -1,
                    )),
                  w('p', null, [
                    Y(
                      s,
                      { class: 'text-white', to: '/' },
                      {
                        default: Fe(() => n[0] || (n[0] = [wt('Home')])),
                        _: 1,
                      },
                    ),
                  ]),
                  w('p', null, [
                    Y(
                      s,
                      { class: 'text-white', to: '/about' },
                      {
                        default: Fe(() => n[1] || (n[1] = [wt('About')])),
                        _: 1,
                      },
                    ),
                  ]),
                  w('p', null, [
                    Y(
                      s,
                      { class: 'text-white', to: '/experience' },
                      {
                        default: Fe(() => n[2] || (n[2] = [wt('Experience')])),
                        _: 1,
                      },
                    ),
                  ]),
                  w('p', null, [
                    Y(
                      s,
                      { class: 'text-white', to: '/contact' },
                      {
                        default: Fe(() => n[3] || (n[3] = [wt('Contact')])),
                        _: 1,
                      },
                    ),
                  ]),
                ]),
                w('div', w1, [
                  n[8] ||
                    (n[8] = w(
                      'h5',
                      { class: 'text-uppercase' },
                      'Contact',
                      -1,
                    )),
                  n[9] ||
                    (n[9] = w(
                      'hr',
                      { class: 'mb-4 mt-0 d-inline-block mx-auto line-break' },
                      null,
                      -1,
                    )),
                  w('p', null, [
                    w('a', A1, [
                      Y(it(ct), {
                        icon: 'fa-solid fa-envelope',
                        class: 'me-1',
                      }),
                      n[6] || (n[6] = wt('robertalensabo@gmail.com')),
                    ]),
                  ]),
                  w('p', null, [
                    w('a', S1, [
                      Y(it(ct), { icon: 'fa-solid fa-phone', class: 'me-1' }),
                      n[7] || (n[7] = wt('1 (208) 740 - 8655')),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            w('section', T1, [
              w('div', O1, [
                n[11] ||
                  (n[11] = w(
                    'span',
                    { class: 'd-none d-md-inline' },
                    'Connect with me on social networks:',
                    -1,
                  )),
                n[12] ||
                  (n[12] = w(
                    'hr',
                    { class: 'vr pb-5 my-0 m-3 d-none d-md-inline-block' },
                    null,
                    -1,
                  )),
                w('div', null, [
                  w('a', C1, [
                    Y(it(ct), { icon: 'fa-brands fa-square-github' }),
                  ]),
                  w('a', k1, [Y(it(ct), { icon: 'fa-brands fa-linkedin' })]),
                  w('a', M1, [Y(it(ct), { icon: 'fa-regular fa-square' })]),
                ]),
              ]),
              n[13] ||
                (n[13] = is(
                  '<div class="d-none d-md-block" data-v-c4a85c31><p class="m-0" data-v-c4a85c31><small data-v-c4a85c31>Made with <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" class="text-white text-decoration-none" data-v-c4a85c31> Vue </a> and <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer" class="text-white text-decoration-none" data-v-c4a85c31> Bootstrap </a> | <a href="https://github.com/robbysabo/Portfolio" target="_blank" rel="noopener noreferrer" class="text-white text-decoration-none" data-v-c4a85c31> Source Code </a></small></p></div><div class="me-3" data-v-c4a85c31><span class="karla" data-v-c4a85c31><a class="text-white" href="https://github.com/robbysabo/" data-v-c4a85c31>Robert Sabo</a> © 2024</span></div>',
                  2,
                )),
            ]),
          ])
        )
      }
    },
  },
  Fr = qs(P1, [['__scopeId', 'data-v-c4a85c31']]),
  D1 = { class: 'about' },
  L1 = {
    class:
      'w-100 d-flex flex-column justify-content-center align-items-center text-center mt-5',
  },
  I1 = { class: 'container-fluid px-md-5' },
  N1 = { class: 'row w-100 my-5 mx-0' },
  R1 = { class: 'col-12 col-md-5 mx-auto' },
  $1 = { class: 'text-start' },
  F1 = {
    href: 'https://godotengine.org/',
    target: '_blank',
    rel: 'noopener noreferrer',
    class: 'links',
  },
  H1 = {
    href: 'https://www.unrealengine.com/',
    target: '_blank',
    rel: 'noopener noreferrer',
    class: 'links',
  },
  j1 = {
    __name: 'AboutView',
    setup(e) {
      return (t, n) => (
        dn(),
        us('div', D1, [
          Y(oo),
          w('div', L1, [
            n[12] ||
              (n[12] = w(
                'div',
                { class: 'dark-bg w-100' },
                [
                  w(
                    'h1',
                    {
                      class:
                        'w-100 pt-4 pb-3 m-0 display-3 text-white text-uppercase',
                    },
                    ' About ',
                  ),
                  w(
                    'p',
                    { class: 'fs-6 text-white pb-4' },
                    'Little bit about me',
                  ),
                ],
                -1,
              )),
            w('div', I1, [
              n[11] ||
                (n[11] = is(
                  '<div class="row w-100 my-5 mx-0" data-v-297a61b4><div class="col-12 col-md-5 mx-auto" data-v-297a61b4><h3 class="w-100 text-start h1 m-0 text-title" data-v-297a61b4>Bio</h3><hr class="hor-rule" data-v-297a61b4><p class="text-start" data-v-297a61b4> Hello again, Robert here! Let me tell you a little bit about myself. Born in &#39;95, I grew up in the city of Anahiem, California. At the age of 13 years old in <i data-v-297a61b4>2008</i>, I began my journey into game development and general programming. </p><p class="text-start" data-v-297a61b4> I started making little 2D games in a game engine called <i data-v-297a61b4>Game Maker 8</i>. After a few of years of making little games in Game Maker, by <i data-v-297a61b4>2013</i> I made the switch over to <i data-v-297a61b4>Unity</i>. This would become my main game engine. Also came along with learning more programming languages. This is where I learned C-Sharp (C#) and Object-Oriented Programming (OOP). </p><p class="text-start" data-v-297a61b4> I had a fantastic experience learning about developing a game. After many years of game development, in <i data-v-297a61b4>2019</i> I wanted to learning about web development. I took many online bootcamps and that summer I signed up to go to the <i data-v-297a61b4>College of Western Idaho</i>. Where I learned to hone in my craft has a software developer. </p><p class="text-start" data-v-297a61b4> Today, and onwards I am a student to all technologies. As it still grows and improves, I want to be near first in line to the next technologies. </p></div><div class="col-12 col-md-5 mx-auto" data-v-297a61b4><div class="card d-none d-md-block" data-v-297a61b4><img src="' +
                    vy +
                    '" class="card-img" alt="..." data-v-297a61b4><div class="card-img-overlay d-flex justify-content-center align-items-center px-0 pb-0" data-v-297a61b4><h5 class="card-title text-white display-3 merriweather py-1" data-v-297a61b4> Born in &#39;95 </h5></div></div></div></div>',
                  1,
                )),
              w('div', N1, [
                w('div', R1, [
                  n[6] ||
                    (n[6] = w(
                      'h3',
                      { class: 'w-100 text-start h1 m-0 text-title' },
                      'Hobbies',
                      -1,
                    )),
                  n[7] || (n[7] = w('hr', { class: 'hor-rule' }, null, -1)),
                  w('p', $1, [
                    n[2] ||
                      (n[2] = w(
                        'span',
                        { class: 'fw-bolder fs-3 karla' },
                        'Game dev.',
                        -1,
                      )),
                    n[3] ||
                      (n[3] = wt(
                        ' For refining and for fun, I like to make little games. I play around with different game engines to see how it all operates. Right now, the current engine I am looking at is ',
                      )),
                    w('a', F1, [
                      n[0] || (n[0] = wt('Godot')),
                      Y(it(ct), {
                        icon: 'fa-solid fa-up-right-from-square',
                        class: 'fs-6',
                      }),
                    ]),
                    n[4] || (n[4] = wt(' and another game engine ')),
                    w('a', H1, [
                      n[1] || (n[1] = wt('Unreal Engine')),
                      Y(it(ct), {
                        icon: 'fa-solid fa-up-right-from-square',
                        class: 'fs-6',
                      }),
                    ]),
                    n[5] || (n[5] = wt('. ')),
                  ]),
                  n[8] ||
                    (n[8] = w(
                      'p',
                      { class: 'text-start' },
                      [
                        w('span', { class: 'fw-bolder fs-3 karla' }, 'Arcade.'),
                        wt(
                          " While I am not at the computer coding, one of those things is fixing up an arcade or playing it. I found myself enjoying classic games of the 80's and 90's. So on the side I took an arcade gutted it and hooked all the controller to a circuit board to map to gamepad on a Raspberry Pi 4. Were I am able to put almost every classic game on the arcade. ",
                        ),
                      ],
                      -1,
                    )),
                  n[9] ||
                    (n[9] = w(
                      'p',
                      { class: 'text-start' },
                      [
                        w(
                          'span',
                          { class: 'fw-bolder fs-3 karla' },
                          'Traveling.',
                        ),
                        wt(
                          ' One thing I like to do is defiantly going to see other place. That also can mean I like to walk most of the time. I have been up and down the west coast of the United States of America. ',
                        ),
                      ],
                      -1,
                    )),
                ]),
                n[10] ||
                  (n[10] = w(
                    'div',
                    { class: 'col-12 col-md-5 mx-auto' },
                    [
                      w('div', { class: 'card d-none d-md-block' }, [
                        w('img', { src: yy, class: 'card-img', alt: '...' }),
                      ]),
                    ],
                    -1,
                  )),
              ]),
            ]),
          ]),
          Y(Fr),
        ])
      )
    },
  },
  z1 = qs(j1, [['__scopeId', 'data-v-297a61b4']]),
  B1 = 'assets/we-geek-together-sign-GqMulxYX.jpg',
  W1 = 'assets/fakearcade-CLdjnjUD.png',
  V1 = 'assets/pokedex-4k7uS9Xj.png',
  U1 = 'assets/robofriends-CuES9JeO.png',
  Y1 = 'assets/reactdemo-DRVFHBCh.png',
  K1 = 'assets/backend-BgKZE4ss.png',
  q1 = 'assets/cwi-3CQhAdvB.png',
  G1 = 'assets/ITS-Badges_HTML-5-BmCWojXU.png'
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function lo(e) {
  return (e + 0.5) | 0
}
const An = (e, t, n) => Math.max(Math.min(e, n), t)
function gi(e) {
  return An(lo(e * 2.55), 0, 255)
}
function On(e) {
  return An(lo(e * 255), 0, 255)
}
function tn(e) {
  return An(lo(e / 2.55) / 100, 0, 1)
}
function uu(e) {
  return An(lo(e * 100), 0, 100)
}
const _e = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  _l = [...'0123456789ABCDEF'],
  X1 = e => _l[e & 15],
  Q1 = e => _l[(e & 240) >> 4] + _l[e & 15],
  xo = e => (e & 240) >> 4 === (e & 15),
  J1 = e => xo(e.r) && xo(e.g) && xo(e.b) && xo(e.a)
function Z1(e) {
  var t = e.length,
    n
  return (
    e[0] === '#' &&
      (t === 4 || t === 5
        ? (n = {
            r: 255 & (_e[e[1]] * 17),
            g: 255 & (_e[e[2]] * 17),
            b: 255 & (_e[e[3]] * 17),
            a: t === 5 ? _e[e[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (n = {
            r: (_e[e[1]] << 4) | _e[e[2]],
            g: (_e[e[3]] << 4) | _e[e[4]],
            b: (_e[e[5]] << 4) | _e[e[6]],
            a: t === 9 ? (_e[e[7]] << 4) | _e[e[8]] : 255,
          })),
    n
  )
}
const tx = (e, t) => (e < 255 ? t(e) : '')
function ex(e) {
  var t = J1(e) ? X1 : Q1
  return e ? '#' + t(e.r) + t(e.g) + t(e.b) + tx(e.a, t) : void 0
}
const nx =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/
function Gp(e, t, n) {
  const s = t * Math.min(n, 1 - n),
    i = (o, r = (o + e / 30) % 12) =>
      n - s * Math.max(Math.min(r - 3, 9 - r, 1), -1)
  return [i(0), i(8), i(4)]
}
function sx(e, t, n) {
  const s = (i, o = (i + e / 60) % 6) =>
    n - n * t * Math.max(Math.min(o, 4 - o, 1), 0)
  return [s(5), s(3), s(1)]
}
function ix(e, t, n) {
  const s = Gp(e, 1, 0.5)
  let i
  for (t + n > 1 && ((i = 1 / (t + n)), (t *= i), (n *= i)), i = 0; i < 3; i++)
    (s[i] *= 1 - t - n), (s[i] += t)
  return s
}
function ox(e, t, n, s, i) {
  return e === i
    ? (t - n) / s + (t < n ? 6 : 0)
    : t === i
      ? (n - e) / s + 2
      : (e - t) / s + 4
}
function dc(e) {
  const n = e.r / 255,
    s = e.g / 255,
    i = e.b / 255,
    o = Math.max(n, s, i),
    r = Math.min(n, s, i),
    a = (o + r) / 2
  let l, c, f
  return (
    o !== r &&
      ((f = o - r),
      (c = a > 0.5 ? f / (2 - o - r) : f / (o + r)),
      (l = ox(n, s, i, f, o)),
      (l = l * 60 + 0.5)),
    [l | 0, c || 0, a]
  )
}
function hc(e, t, n, s) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, s)).map(On)
}
function pc(e, t, n) {
  return hc(Gp, e, t, n)
}
function rx(e, t, n) {
  return hc(ix, e, t, n)
}
function ax(e, t, n) {
  return hc(sx, e, t, n)
}
function Xp(e) {
  return ((e % 360) + 360) % 360
}
function lx(e) {
  const t = nx.exec(e)
  let n = 255,
    s
  if (!t) return
  t[5] !== s && (n = t[6] ? gi(+t[5]) : On(+t[5]))
  const i = Xp(+t[2]),
    o = +t[3] / 100,
    r = +t[4] / 100
  return (
    t[1] === 'hwb'
      ? (s = rx(i, o, r))
      : t[1] === 'hsv'
        ? (s = ax(i, o, r))
        : (s = pc(i, o, r)),
    { r: s[0], g: s[1], b: s[2], a: n }
  )
}
function cx(e, t) {
  var n = dc(e)
  ;(n[0] = Xp(n[0] + t)), (n = pc(n)), (e.r = n[0]), (e.g = n[1]), (e.b = n[2])
}
function fx(e) {
  if (!e) return
  const t = dc(e),
    n = t[0],
    s = uu(t[1]),
    i = uu(t[2])
  return e.a < 255
    ? `hsla(${n}, ${s}%, ${i}%, ${tn(e.a)})`
    : `hsl(${n}, ${s}%, ${i}%)`
}
const du = {
    x: 'dark',
    Z: 'light',
    Y: 're',
    X: 'blu',
    W: 'gr',
    V: 'medium',
    U: 'slate',
    A: 'ee',
    T: 'ol',
    S: 'or',
    B: 'ra',
    C: 'lateg',
    D: 'ights',
    R: 'in',
    Q: 'turquois',
    E: 'hi',
    P: 'ro',
    O: 'al',
    N: 'le',
    M: 'de',
    L: 'yello',
    F: 'en',
    K: 'ch',
    G: 'arks',
    H: 'ea',
    I: 'ightg',
    J: 'wh',
  },
  hu = {
    OiceXe: 'f0f8ff',
    antiquewEte: 'faebd7',
    aqua: 'ffff',
    aquamarRe: '7fffd4',
    azuY: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '0',
    blanKedOmond: 'ffebcd',
    Xe: 'ff',
    XeviTet: '8a2be2',
    bPwn: 'a52a2a',
    burlywood: 'deb887',
    caMtXe: '5f9ea0',
    KartYuse: '7fff00',
    KocTate: 'd2691e',
    cSO: 'ff7f50',
    cSnflowerXe: '6495ed',
    cSnsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: 'ffff',
    xXe: '8b',
    xcyan: '8b8b',
    xgTMnPd: 'b8860b',
    xWay: 'a9a9a9',
    xgYF: '6400',
    xgYy: 'a9a9a9',
    xkhaki: 'bdb76b',
    xmagFta: '8b008b',
    xTivegYF: '556b2f',
    xSange: 'ff8c00',
    xScEd: '9932cc',
    xYd: '8b0000',
    xsOmon: 'e9967a',
    xsHgYF: '8fbc8f',
    xUXe: '483d8b',
    xUWay: '2f4f4f',
    xUgYy: '2f4f4f',
    xQe: 'ced1',
    xviTet: '9400d3',
    dAppRk: 'ff1493',
    dApskyXe: 'bfff',
    dimWay: '696969',
    dimgYy: '696969',
    dodgerXe: '1e90ff',
    fiYbrick: 'b22222',
    flSOwEte: 'fffaf0',
    foYstWAn: '228b22',
    fuKsia: 'ff00ff',
    gaRsbSo: 'dcdcdc',
    ghostwEte: 'f8f8ff',
    gTd: 'ffd700',
    gTMnPd: 'daa520',
    Way: '808080',
    gYF: '8000',
    gYFLw: 'adff2f',
    gYy: '808080',
    honeyMw: 'f0fff0',
    hotpRk: 'ff69b4',
    RdianYd: 'cd5c5c',
    Rdigo: '4b0082',
    ivSy: 'fffff0',
    khaki: 'f0e68c',
    lavFMr: 'e6e6fa',
    lavFMrXsh: 'fff0f5',
    lawngYF: '7cfc00',
    NmoncEffon: 'fffacd',
    ZXe: 'add8e6',
    ZcSO: 'f08080',
    Zcyan: 'e0ffff',
    ZgTMnPdLw: 'fafad2',
    ZWay: 'd3d3d3',
    ZgYF: '90ee90',
    ZgYy: 'd3d3d3',
    ZpRk: 'ffb6c1',
    ZsOmon: 'ffa07a',
    ZsHgYF: '20b2aa',
    ZskyXe: '87cefa',
    ZUWay: '778899',
    ZUgYy: '778899',
    ZstAlXe: 'b0c4de',
    ZLw: 'ffffe0',
    lime: 'ff00',
    limegYF: '32cd32',
    lRF: 'faf0e6',
    magFta: 'ff00ff',
    maPon: '800000',
    VaquamarRe: '66cdaa',
    VXe: 'cd',
    VScEd: 'ba55d3',
    VpurpN: '9370db',
    VsHgYF: '3cb371',
    VUXe: '7b68ee',
    VsprRggYF: 'fa9a',
    VQe: '48d1cc',
    VviTetYd: 'c71585',
    midnightXe: '191970',
    mRtcYam: 'f5fffa',
    mistyPse: 'ffe4e1',
    moccasR: 'ffe4b5',
    navajowEte: 'ffdead',
    navy: '80',
    Tdlace: 'fdf5e6',
    Tive: '808000',
    TivedBb: '6b8e23',
    Sange: 'ffa500',
    SangeYd: 'ff4500',
    ScEd: 'da70d6',
    pOegTMnPd: 'eee8aa',
    pOegYF: '98fb98',
    pOeQe: 'afeeee',
    pOeviTetYd: 'db7093',
    papayawEp: 'ffefd5',
    pHKpuff: 'ffdab9',
    peru: 'cd853f',
    pRk: 'ffc0cb',
    plum: 'dda0dd',
    powMrXe: 'b0e0e6',
    purpN: '800080',
    YbeccapurpN: '663399',
    Yd: 'ff0000',
    Psybrown: 'bc8f8f',
    PyOXe: '4169e1',
    saddNbPwn: '8b4513',
    sOmon: 'fa8072',
    sandybPwn: 'f4a460',
    sHgYF: '2e8b57',
    sHshell: 'fff5ee',
    siFna: 'a0522d',
    silver: 'c0c0c0',
    skyXe: '87ceeb',
    UXe: '6a5acd',
    UWay: '708090',
    UgYy: '708090',
    snow: 'fffafa',
    sprRggYF: 'ff7f',
    stAlXe: '4682b4',
    tan: 'd2b48c',
    teO: '8080',
    tEstN: 'd8bfd8',
    tomato: 'ff6347',
    Qe: '40e0d0',
    viTet: 'ee82ee',
    JHt: 'f5deb3',
    wEte: 'ffffff',
    wEtesmoke: 'f5f5f5',
    Lw: 'ffff00',
    LwgYF: '9acd32',
  }
function ux() {
  const e = {},
    t = Object.keys(hu),
    n = Object.keys(du)
  let s, i, o, r, a
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], i = 0; i < n.length; i++)
      (o = n[i]), (a = a.replace(o, du[o]))
    ;(o = parseInt(hu[r], 16)),
      (e[a] = [(o >> 16) & 255, (o >> 8) & 255, o & 255])
  }
  return e
}
let Eo
function dx(e) {
  Eo || ((Eo = ux()), (Eo.transparent = [0, 0, 0, 0]))
  const t = Eo[e.toLowerCase()]
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 }
}
const hx =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/
function px(e) {
  const t = hx.exec(e)
  let n = 255,
    s,
    i,
    o
  if (t) {
    if (t[7] !== s) {
      const r = +t[7]
      n = t[8] ? gi(r) : An(r * 255, 0, 255)
    }
    return (
      (s = +t[1]),
      (i = +t[3]),
      (o = +t[5]),
      (s = 255 & (t[2] ? gi(s) : An(s, 0, 255))),
      (i = 255 & (t[4] ? gi(i) : An(i, 0, 255))),
      (o = 255 & (t[6] ? gi(o) : An(o, 0, 255))),
      { r: s, g: i, b: o, a: n }
    )
  }
}
function gx(e) {
  return (
    e &&
    (e.a < 255
      ? `rgba(${e.r}, ${e.g}, ${e.b}, ${tn(e.a)})`
      : `rgb(${e.r}, ${e.g}, ${e.b})`)
  )
}
const ma = e =>
    e <= 0.0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055,
  gs = e => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4))
function mx(e, t, n) {
  const s = gs(tn(e.r)),
    i = gs(tn(e.g)),
    o = gs(tn(e.b))
  return {
    r: On(ma(s + n * (gs(tn(t.r)) - s))),
    g: On(ma(i + n * (gs(tn(t.g)) - i))),
    b: On(ma(o + n * (gs(tn(t.b)) - o))),
    a: e.a + n * (t.a - e.a),
  }
}
function wo(e, t, n) {
  if (e) {
    let s = dc(e)
    ;(s[t] = Math.max(0, Math.min(s[t] + s[t] * n, t === 0 ? 360 : 1))),
      (s = pc(s)),
      (e.r = s[0]),
      (e.g = s[1]),
      (e.b = s[2])
  }
}
function Qp(e, t) {
  return e && Object.assign(t || {}, e)
}
function pu(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 }
  return (
    Array.isArray(e)
      ? e.length >= 3 &&
        ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
        e.length > 3 && (t.a = On(e[3])))
      : ((t = Qp(e, { r: 0, g: 0, b: 0, a: 1 })), (t.a = On(t.a))),
    t
  )
}
function _x(e) {
  return e.charAt(0) === 'r' ? px(e) : lx(e)
}
class Xi {
  constructor(t) {
    if (t instanceof Xi) return t
    const n = typeof t
    let s
    n === 'object'
      ? (s = pu(t))
      : n === 'string' && (s = Z1(t) || dx(t) || _x(t)),
      (this._rgb = s),
      (this._valid = !!s)
  }
  get valid() {
    return this._valid
  }
  get rgb() {
    var t = Qp(this._rgb)
    return t && (t.a = tn(t.a)), t
  }
  set rgb(t) {
    this._rgb = pu(t)
  }
  rgbString() {
    return this._valid ? gx(this._rgb) : void 0
  }
  hexString() {
    return this._valid ? ex(this._rgb) : void 0
  }
  hslString() {
    return this._valid ? fx(this._rgb) : void 0
  }
  mix(t, n) {
    if (t) {
      const s = this.rgb,
        i = t.rgb
      let o
      const r = n === o ? 0.5 : n,
        a = 2 * r - 1,
        l = s.a - i.a,
        c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2
      ;(o = 1 - c),
        (s.r = 255 & (c * s.r + o * i.r + 0.5)),
        (s.g = 255 & (c * s.g + o * i.g + 0.5)),
        (s.b = 255 & (c * s.b + o * i.b + 0.5)),
        (s.a = r * s.a + (1 - r) * i.a),
        (this.rgb = s)
    }
    return this
  }
  interpolate(t, n) {
    return t && (this._rgb = mx(this._rgb, t._rgb, n)), this
  }
  clone() {
    return new Xi(this.rgb)
  }
  alpha(t) {
    return (this._rgb.a = On(t)), this
  }
  clearer(t) {
    const n = this._rgb
    return (n.a *= 1 - t), this
  }
  greyscale() {
    const t = this._rgb,
      n = lo(t.r * 0.3 + t.g * 0.59 + t.b * 0.11)
    return (t.r = t.g = t.b = n), this
  }
  opaquer(t) {
    const n = this._rgb
    return (n.a *= 1 + t), this
  }
  negate() {
    const t = this._rgb
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this
  }
  lighten(t) {
    return wo(this._rgb, 2, t), this
  }
  darken(t) {
    return wo(this._rgb, 2, -t), this
  }
  saturate(t) {
    return wo(this._rgb, 1, t), this
  }
  desaturate(t) {
    return wo(this._rgb, 1, -t), this
  }
  rotate(t) {
    return cx(this._rgb, t), this
  }
}
/*!
 * Chart.js v4.4.5
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ function Ge() {}
const bx = (() => {
  let e = 0
  return () => e++
})()
function se(e) {
  return e === null || typeof e > 'u'
}
function Bt(e) {
  if (Array.isArray && Array.isArray(e)) return !0
  const t = Object.prototype.toString.call(e)
  return t.slice(0, 7) === '[object' && t.slice(-6) === 'Array]'
}
function vt(e) {
  return e !== null && Object.prototype.toString.call(e) === '[object Object]'
}
function cn(e) {
  return (typeof e == 'number' || e instanceof Number) && isFinite(+e)
}
function Le(e, t) {
  return cn(e) ? e : t
}
function Ot(e, t) {
  return typeof e > 'u' ? t : e
}
const vx = (e, t) =>
    typeof e == 'string' && e.endsWith('%') ? parseFloat(e) / 100 : +e / t,
  Jp = (e, t) =>
    typeof e == 'string' && e.endsWith('%') ? (parseFloat(e) / 100) * t : +e
function Mt(e, t, n) {
  if (e && typeof e.call == 'function') return e.apply(n, t)
}
function Tt(e, t, n, s) {
  let i, o, r
  if (Bt(e)) for (o = e.length, i = 0; i < o; i++) t.call(n, e[i], i)
  else if (vt(e))
    for (r = Object.keys(e), o = r.length, i = 0; i < o; i++)
      t.call(n, e[r[i]], r[i])
}
function lr(e, t) {
  let n, s, i, o
  if (!e || !t || e.length !== t.length) return !1
  for (n = 0, s = e.length; n < s; ++n)
    if (
      ((i = e[n]),
      (o = t[n]),
      i.datasetIndex !== o.datasetIndex || i.index !== o.index)
    )
      return !1
  return !0
}
function cr(e) {
  if (Bt(e)) return e.map(cr)
  if (vt(e)) {
    const t = Object.create(null),
      n = Object.keys(e),
      s = n.length
    let i = 0
    for (; i < s; ++i) t[n[i]] = cr(e[n[i]])
    return t
  }
  return e
}
function Zp(e) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(e) === -1
}
function yx(e, t, n, s) {
  if (!Zp(e)) return
  const i = t[e],
    o = n[e]
  vt(i) && vt(o) ? Qi(i, o, s) : (t[e] = cr(o))
}
function Qi(e, t, n) {
  const s = Bt(t) ? t : [t],
    i = s.length
  if (!vt(e)) return e
  n = n || {}
  const o = n.merger || yx
  let r
  for (let a = 0; a < i; ++a) {
    if (((r = s[a]), !vt(r))) continue
    const l = Object.keys(r)
    for (let c = 0, f = l.length; c < f; ++c) o(l[c], e, r, n)
  }
  return e
}
function Li(e, t) {
  return Qi(e, t, { merger: xx })
}
function xx(e, t, n) {
  if (!Zp(e)) return
  const s = t[e],
    i = n[e]
  vt(s) && vt(i)
    ? Li(s, i)
    : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = cr(i))
}
const gu = { '': e => e, x: e => e.x, y: e => e.y }
function Ex(e) {
  const t = e.split('.'),
    n = []
  let s = ''
  for (const i of t)
    (s += i),
      s.endsWith('\\') ? (s = s.slice(0, -1) + '.') : (n.push(s), (s = ''))
  return n
}
function wx(e) {
  const t = Ex(e)
  return n => {
    for (const s of t) {
      if (s === '') break
      n = n && n[s]
    }
    return n
  }
}
function Ji(e, t) {
  return (gu[t] || (gu[t] = wx(t)))(e)
}
function gc(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}
const fr = e => typeof e < 'u',
  Pn = e => typeof e == 'function',
  mu = (e, t) => {
    if (e.size !== t.size) return !1
    for (const n of e) if (!t.has(n)) return !1
    return !0
  }
function Ax(e) {
  return e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu'
}
const Ft = Math.PI,
  Rt = 2 * Ft,
  ur = Number.POSITIVE_INFINITY,
  Sx = Ft / 180,
  $t = Ft / 2,
  Bn = Ft / 4,
  _u = (Ft * 2) / 3,
  bu = Math.log10,
  vu = Math.sign
function Tx(e) {
  const t = [],
    n = Math.sqrt(e)
  let s
  for (s = 1; s < n; s++) e % s === 0 && (t.push(s), t.push(e / s))
  return n === (n | 0) && t.push(n), t.sort((i, o) => i - o).pop(), t
}
function dr(e) {
  return !isNaN(parseFloat(e)) && isFinite(e)
}
function Gn(e) {
  return e * (Ft / 180)
}
function Ox(e) {
  return e * (180 / Ft)
}
function tg(e, t) {
  const n = t.x - e.x,
    s = t.y - e.y,
    i = Math.sqrt(n * n + s * s)
  let o = Math.atan2(s, n)
  return o < -0.5 * Ft && (o += Rt), { angle: o, distance: i }
}
function Cx(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
}
function Wn(e) {
  return ((e % Rt) + Rt) % Rt
}
function hr(e, t, n, s) {
  const i = Wn(e),
    o = Wn(t),
    r = Wn(n),
    a = Wn(o - i),
    l = Wn(r - i),
    c = Wn(i - o),
    f = Wn(i - r)
  return i === o || i === r || (s && o === r) || (a > l && c < f)
}
function be(e, t, n) {
  return Math.max(t, Math.min(n, e))
}
function kx(e) {
  return be(e, -32768, 32767)
}
function mi(e, t, n, s = 1e-6) {
  return e >= Math.min(t, n) - s && e <= Math.max(t, n) + s
}
function mc(e, t, n) {
  n = n || (r => e[r] < t)
  let s = e.length - 1,
    i = 0,
    o
  for (; s - i > 1; ) (o = (i + s) >> 1), n(o) ? (i = o) : (s = o)
  return { lo: i, hi: s }
}
const bl = (e, t, n, s) =>
    mc(
      e,
      n,
      s
        ? i => {
            const o = e[i][t]
            return o < n || (o === n && e[i + 1][t] === n)
          }
        : i => e[i][t] < n,
    ),
  Mx = (e, t, n) => mc(e, n, s => e[s][t] >= n)
function Px(e, t, n) {
  let s = 0,
    i = e.length
  for (; s < i && e[s] < t; ) s++
  for (; i > s && e[i - 1] > n; ) i--
  return s > 0 || i < e.length ? e.slice(s, i) : e
}
const eg = ['push', 'pop', 'shift', 'splice', 'unshift']
function Dx(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t)
    return
  }
  Object.defineProperty(e, '_chartjs', {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    eg.forEach(n => {
      const s = '_onData' + gc(n),
        i = e[n]
      Object.defineProperty(e, n, {
        configurable: !0,
        enumerable: !1,
        value(...o) {
          const r = i.apply(this, o)
          return (
            e._chartjs.listeners.forEach(a => {
              typeof a[s] == 'function' && a[s](...o)
            }),
            r
          )
        },
      })
    })
}
function yu(e, t) {
  const n = e._chartjs
  if (!n) return
  const s = n.listeners,
    i = s.indexOf(t)
  i !== -1 && s.splice(i, 1),
    !(s.length > 0) &&
      (eg.forEach(o => {
        delete e[o]
      }),
      delete e._chartjs)
}
function Lx(e) {
  const t = new Set(e)
  return t.size === e.length ? e : Array.from(t)
}
const ng = (function () {
  return typeof window > 'u'
    ? function (e) {
        return e()
      }
    : window.requestAnimationFrame
})()
function sg(e, t) {
  let n = [],
    s = !1
  return function (...i) {
    ;(n = i),
      s ||
        ((s = !0),
        ng.call(window, () => {
          ;(s = !1), e.apply(t, n)
        }))
  }
}
function Ix(e, t) {
  let n
  return function (...s) {
    return (
      t ? (clearTimeout(n), (n = setTimeout(e, t, s))) : e.apply(this, s), t
    )
  }
}
const ig = e => (e === 'start' ? 'left' : e === 'end' ? 'right' : 'center'),
  le = (e, t, n) => (e === 'start' ? t : e === 'end' ? n : (t + n) / 2),
  Nx = (e, t, n, s) =>
    e === (s ? 'left' : 'right') ? n : e === 'center' ? (t + n) / 2 : t,
  Ao = e => e === 0 || e === 1,
  xu = (e, t, n) =>
    -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * Rt) / n)),
  Eu = (e, t, n) => Math.pow(2, -10 * e) * Math.sin(((e - t) * Rt) / n) + 1,
  Ii = {
    linear: e => e,
    easeInQuad: e => e * e,
    easeOutQuad: e => -e * (e - 2),
    easeInOutQuad: e =>
      (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
    easeInCubic: e => e * e * e,
    easeOutCubic: e => (e -= 1) * e * e + 1,
    easeInOutCubic: e =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
    easeInQuart: e => e * e * e * e,
    easeOutQuart: e => -((e -= 1) * e * e * e - 1),
    easeInOutQuart: e =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
    easeInQuint: e => e * e * e * e * e,
    easeOutQuint: e => (e -= 1) * e * e * e * e + 1,
    easeInOutQuint: e =>
      (e /= 0.5) < 1
        ? 0.5 * e * e * e * e * e
        : 0.5 * ((e -= 2) * e * e * e * e + 2),
    easeInSine: e => -Math.cos(e * $t) + 1,
    easeOutSine: e => Math.sin(e * $t),
    easeInOutSine: e => -0.5 * (Math.cos(Ft * e) - 1),
    easeInExpo: e => (e === 0 ? 0 : Math.pow(2, 10 * (e - 1))),
    easeOutExpo: e => (e === 1 ? 1 : -Math.pow(2, -10 * e) + 1),
    easeInOutExpo: e =>
      Ao(e)
        ? e
        : e < 0.5
          ? 0.5 * Math.pow(2, 10 * (e * 2 - 1))
          : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
    easeInCirc: e => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
    easeOutCirc: e => Math.sqrt(1 - (e -= 1) * e),
    easeInOutCirc: e =>
      (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
    easeInElastic: e => (Ao(e) ? e : xu(e, 0.075, 0.3)),
    easeOutElastic: e => (Ao(e) ? e : Eu(e, 0.075, 0.3)),
    easeInOutElastic(e) {
      return Ao(e)
        ? e
        : e < 0.5
          ? 0.5 * xu(e * 2, 0.1125, 0.45)
          : 0.5 + 0.5 * Eu(e * 2 - 1, 0.1125, 0.45)
    },
    easeInBack(e) {
      return e * e * ((1.70158 + 1) * e - 1.70158)
    },
    easeOutBack(e) {
      return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1
    },
    easeInOutBack(e) {
      let t = 1.70158
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    },
    easeInBounce: e => 1 - Ii.easeOutBounce(1 - e),
    easeOutBounce(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
            ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
            : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375
    },
    easeInOutBounce: e =>
      e < 0.5
        ? Ii.easeInBounce(e * 2) * 0.5
        : Ii.easeOutBounce(e * 2 - 1) * 0.5 + 0.5,
  }
function og(e) {
  if (e && typeof e == 'object') {
    const t = e.toString()
    return t === '[object CanvasPattern]' || t === '[object CanvasGradient]'
  }
  return !1
}
function wu(e) {
  return og(e) ? e : new Xi(e)
}
function _a(e) {
  return og(e) ? e : new Xi(e).saturate(0.5).darken(0.1).hexString()
}
const Rx = ['x', 'y', 'borderWidth', 'radius', 'tension'],
  $x = ['color', 'borderColor', 'backgroundColor']
function Fx(e) {
  e.set('animation', {
    delay: void 0,
    duration: 1e3,
    easing: 'easeOutQuart',
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    e.describe('animation', {
      _fallback: !1,
      _indexable: !1,
      _scriptable: t => t !== 'onProgress' && t !== 'onComplete' && t !== 'fn',
    }),
    e.set('animations', {
      colors: { type: 'color', properties: $x },
      numbers: { type: 'number', properties: Rx },
    }),
    e.describe('animations', { _fallback: 'animation' }),
    e.set('transitions', {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: 'transparent' },
          visible: { type: 'boolean', duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: 'transparent' },
          visible: { type: 'boolean', easing: 'linear', fn: t => t | 0 },
        },
      },
    })
}
function Hx(e) {
  e.set('layout', {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  })
}
const Au = new Map()
function jx(e, t) {
  t = t || {}
  const n = e + JSON.stringify(t)
  let s = Au.get(n)
  return s || ((s = new Intl.NumberFormat(e, t)), Au.set(n, s)), s
}
function rg(e, t, n) {
  return jx(t, n).format(e)
}
const ag = {
  values(e) {
    return Bt(e) ? e : '' + e
  },
  numeric(e, t, n) {
    if (e === 0) return '0'
    const s = this.chart.options.locale
    let i,
      o = e
    if (n.length > 1) {
      const c = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value))
      ;(c < 1e-4 || c > 1e15) && (i = 'scientific'), (o = zx(e, n))
    }
    const r = bu(Math.abs(o)),
      a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0),
      l = { notation: i, minimumFractionDigits: a, maximumFractionDigits: a }
    return Object.assign(l, this.options.ticks.format), rg(e, s, l)
  },
  logarithmic(e, t, n) {
    if (e === 0) return '0'
    const s = n[t].significand || e / Math.pow(10, Math.floor(bu(e)))
    return [1, 2, 3, 5, 10, 15].includes(s) || t > 0.8 * n.length
      ? ag.numeric.call(this, e, t, n)
      : ''
  },
}
function zx(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n
}
var Bx = { formatters: ag }
function Wx(e) {
  e.set('scale', {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: 'ticks',
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, n) => n.lineWidth,
      tickColor: (t, n) => n.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: '',
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Bx.formatters.values,
      minor: {},
      major: {},
      align: 'center',
      crossAlign: 'near',
      showLabelBackdrop: !1,
      backdropColor: 'rgba(255, 255, 255, 0.75)',
      backdropPadding: 2,
    },
  }),
    e.route('scale.ticks', 'color', '', 'color'),
    e.route('scale.grid', 'color', '', 'borderColor'),
    e.route('scale.border', 'color', '', 'borderColor'),
    e.route('scale.title', 'color', '', 'color'),
    e.describe('scale', {
      _fallback: !1,
      _scriptable: t =>
        !t.startsWith('before') &&
        !t.startsWith('after') &&
        t !== 'callback' &&
        t !== 'parser',
      _indexable: t =>
        t !== 'borderDash' && t !== 'tickBorderDash' && t !== 'dash',
    }),
    e.describe('scales', { _fallback: 'scale' }),
    e.describe('scale.ticks', {
      _scriptable: t => t !== 'backdropPadding' && t !== 'callback',
      _indexable: t => t !== 'backdropPadding',
    })
}
const as = Object.create(null),
  vl = Object.create(null)
function Ni(e, t) {
  if (!t) return e
  const n = t.split('.')
  for (let s = 0, i = n.length; s < i; ++s) {
    const o = n[s]
    e = e[o] || (e[o] = Object.create(null))
  }
  return e
}
function ba(e, t, n) {
  return typeof t == 'string' ? Qi(Ni(e, t), n) : Qi(Ni(e, ''), t)
}
class Vx {
  constructor(t, n) {
    ;(this.animation = void 0),
      (this.backgroundColor = 'rgba(0,0,0,0.1)'),
      (this.borderColor = 'rgba(0,0,0,0.1)'),
      (this.color = '#666'),
      (this.datasets = {}),
      (this.devicePixelRatio = s => s.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        'mousemove',
        'mouseout',
        'click',
        'touchstart',
        'touchmove',
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: 'normal',
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (s, i) => _a(i.backgroundColor)),
      (this.hoverBorderColor = (s, i) => _a(i.borderColor)),
      (this.hoverColor = (s, i) => _a(i.color)),
      (this.indexAxis = 'x'),
      (this.interaction = {
        mode: 'nearest',
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(n)
  }
  set(t, n) {
    return ba(this, t, n)
  }
  get(t) {
    return Ni(this, t)
  }
  describe(t, n) {
    return ba(vl, t, n)
  }
  override(t, n) {
    return ba(as, t, n)
  }
  route(t, n, s, i) {
    const o = Ni(this, t),
      r = Ni(this, s),
      a = '_' + n
    Object.defineProperties(o, {
      [a]: { value: o[n], writable: !0 },
      [n]: {
        enumerable: !0,
        get() {
          const l = this[a],
            c = r[i]
          return vt(l) ? Object.assign({}, c, l) : Ot(l, c)
        },
        set(l) {
          this[a] = l
        },
      },
    })
  }
  apply(t) {
    t.forEach(n => n(this))
  }
}
var It = new Vx(
  {
    _scriptable: e => !e.startsWith('on'),
    _indexable: e => e !== 'events',
    hover: { _fallback: 'interaction' },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [Fx, Hx, Wx],
)
function Ux(e) {
  return !e || se(e.size) || se(e.family)
    ? null
    : (e.style ? e.style + ' ' : '') +
        (e.weight ? e.weight + ' ' : '') +
        e.size +
        'px ' +
        e.family
}
function Su(e, t, n, s, i) {
  let o = t[i]
  return (
    o || ((o = t[i] = e.measureText(i).width), n.push(i)), o > s && (s = o), s
  )
}
function Vn(e, t, n) {
  const s = e.currentDevicePixelRatio,
    i = n !== 0 ? Math.max(n / 2, 0.5) : 0
  return Math.round((t - i) * s) / s + i
}
function Tu(e, t) {
  ;(!t && !e) ||
    ((t = t || e.getContext('2d')),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, e.width, e.height),
    t.restore())
}
function Ou(e, t, n, s) {
  lg(e, t, n, s, null)
}
function lg(e, t, n, s, i) {
  let o, r, a, l, c, f, u, d
  const h = t.pointStyle,
    _ = t.rotation,
    g = t.radius
  let v = (_ || 0) * Sx
  if (
    h &&
    typeof h == 'object' &&
    ((o = h.toString()),
    o === '[object HTMLImageElement]' || o === '[object HTMLCanvasElement]')
  ) {
    e.save(),
      e.translate(n, s),
      e.rotate(v),
      e.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height),
      e.restore()
    return
  }
  if (!(isNaN(g) || g <= 0)) {
    switch ((e.beginPath(), h)) {
      default:
        i ? e.ellipse(n, s, i / 2, g, 0, 0, Rt) : e.arc(n, s, g, 0, Rt),
          e.closePath()
        break
      case 'triangle':
        ;(f = i ? i / 2 : g),
          e.moveTo(n + Math.sin(v) * f, s - Math.cos(v) * g),
          (v += _u),
          e.lineTo(n + Math.sin(v) * f, s - Math.cos(v) * g),
          (v += _u),
          e.lineTo(n + Math.sin(v) * f, s - Math.cos(v) * g),
          e.closePath()
        break
      case 'rectRounded':
        ;(c = g * 0.516),
          (l = g - c),
          (r = Math.cos(v + Bn) * l),
          (u = Math.cos(v + Bn) * (i ? i / 2 - c : l)),
          (a = Math.sin(v + Bn) * l),
          (d = Math.sin(v + Bn) * (i ? i / 2 - c : l)),
          e.arc(n - u, s - a, c, v - Ft, v - $t),
          e.arc(n + d, s - r, c, v - $t, v),
          e.arc(n + u, s + a, c, v, v + $t),
          e.arc(n - d, s + r, c, v + $t, v + Ft),
          e.closePath()
        break
      case 'rect':
        if (!_) {
          ;(l = Math.SQRT1_2 * g),
            (f = i ? i / 2 : l),
            e.rect(n - f, s - l, 2 * f, 2 * l)
          break
        }
        v += Bn
      case 'rectRot':
        ;(u = Math.cos(v) * (i ? i / 2 : g)),
          (r = Math.cos(v) * g),
          (a = Math.sin(v) * g),
          (d = Math.sin(v) * (i ? i / 2 : g)),
          e.moveTo(n - u, s - a),
          e.lineTo(n + d, s - r),
          e.lineTo(n + u, s + a),
          e.lineTo(n - d, s + r),
          e.closePath()
        break
      case 'crossRot':
        v += Bn
      case 'cross':
        ;(u = Math.cos(v) * (i ? i / 2 : g)),
          (r = Math.cos(v) * g),
          (a = Math.sin(v) * g),
          (d = Math.sin(v) * (i ? i / 2 : g)),
          e.moveTo(n - u, s - a),
          e.lineTo(n + u, s + a),
          e.moveTo(n + d, s - r),
          e.lineTo(n - d, s + r)
        break
      case 'star':
        ;(u = Math.cos(v) * (i ? i / 2 : g)),
          (r = Math.cos(v) * g),
          (a = Math.sin(v) * g),
          (d = Math.sin(v) * (i ? i / 2 : g)),
          e.moveTo(n - u, s - a),
          e.lineTo(n + u, s + a),
          e.moveTo(n + d, s - r),
          e.lineTo(n - d, s + r),
          (v += Bn),
          (u = Math.cos(v) * (i ? i / 2 : g)),
          (r = Math.cos(v) * g),
          (a = Math.sin(v) * g),
          (d = Math.sin(v) * (i ? i / 2 : g)),
          e.moveTo(n - u, s - a),
          e.lineTo(n + u, s + a),
          e.moveTo(n + d, s - r),
          e.lineTo(n - d, s + r)
        break
      case 'line':
        ;(r = i ? i / 2 : Math.cos(v) * g),
          (a = Math.sin(v) * g),
          e.moveTo(n - r, s - a),
          e.lineTo(n + r, s + a)
        break
      case 'dash':
        e.moveTo(n, s),
          e.lineTo(n + Math.cos(v) * (i ? i / 2 : g), s + Math.sin(v) * g)
        break
      case !1:
        e.closePath()
        break
    }
    e.fill(), t.borderWidth > 0 && e.stroke()
  }
}
function cg(e, t, n) {
  return (
    (n = n || 0.5),
    !t ||
      (e &&
        e.x > t.left - n &&
        e.x < t.right + n &&
        e.y > t.top - n &&
        e.y < t.bottom + n)
  )
}
function _c(e, t) {
  e.save(),
    e.beginPath(),
    e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    e.clip()
}
function bc(e) {
  e.restore()
}
function Yx(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]),
    se(t.rotation) || e.rotate(t.rotation),
    t.color && (e.fillStyle = t.color),
    t.textAlign && (e.textAlign = t.textAlign),
    t.textBaseline && (e.textBaseline = t.textBaseline)
}
function Kx(e, t, n, s, i) {
  if (i.strikethrough || i.underline) {
    const o = e.measureText(s),
      r = t - o.actualBoundingBoxLeft,
      a = t + o.actualBoundingBoxRight,
      l = n - o.actualBoundingBoxAscent,
      c = n + o.actualBoundingBoxDescent,
      f = i.strikethrough ? (l + c) / 2 : c
    ;(e.strokeStyle = e.fillStyle),
      e.beginPath(),
      (e.lineWidth = i.decorationWidth || 2),
      e.moveTo(r, f),
      e.lineTo(a, f),
      e.stroke()
  }
}
function qx(e, t) {
  const n = e.fillStyle
  ;(e.fillStyle = t.color),
    e.fillRect(t.left, t.top, t.width, t.height),
    (e.fillStyle = n)
}
function pr(e, t, n, s, i, o = {}) {
  const r = Bt(t) ? t : [t],
    a = o.strokeWidth > 0 && o.strokeColor !== ''
  let l, c
  for (e.save(), e.font = i.string, Yx(e, o), l = 0; l < r.length; ++l)
    (c = r[l]),
      o.backdrop && qx(e, o.backdrop),
      a &&
        (o.strokeColor && (e.strokeStyle = o.strokeColor),
        se(o.strokeWidth) || (e.lineWidth = o.strokeWidth),
        e.strokeText(c, n, s, o.maxWidth)),
      e.fillText(c, n, s, o.maxWidth),
      Kx(e, n, s, c, o),
      (s += Number(i.lineHeight))
  e.restore()
}
function yl(e, t) {
  const { x: n, y: s, w: i, h: o, radius: r } = t
  e.arc(n + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * Ft, Ft, !0),
    e.lineTo(n, s + o - r.bottomLeft),
    e.arc(n + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, Ft, $t, !0),
    e.lineTo(n + i - r.bottomRight, s + o),
    e.arc(
      n + i - r.bottomRight,
      s + o - r.bottomRight,
      r.bottomRight,
      $t,
      0,
      !0,
    ),
    e.lineTo(n + i, s + r.topRight),
    e.arc(n + i - r.topRight, s + r.topRight, r.topRight, 0, -$t, !0),
    e.lineTo(n + r.topLeft, s)
}
const Gx = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  Xx = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
function Qx(e, t) {
  const n = ('' + e).match(Gx)
  if (!n || n[1] === 'normal') return t * 1.2
  switch (((e = +n[2]), n[3])) {
    case 'px':
      return e
    case '%':
      e /= 100
      break
  }
  return t * e
}
const Jx = e => +e || 0
function vc(e, t) {
  const n = {},
    s = vt(t),
    i = s ? Object.keys(t) : t,
    o = vt(e) ? (s ? r => Ot(e[r], e[t[r]]) : r => e[r]) : () => e
  for (const r of i) n[r] = Jx(o(r))
  return n
}
function Zx(e) {
  return vc(e, { top: 'y', right: 'x', bottom: 'y', left: 'x' })
}
function Ri(e) {
  return vc(e, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
}
function ke(e) {
  const t = Zx(e)
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t
}
function ne(e, t) {
  ;(e = e || {}), (t = t || It.font)
  let n = Ot(e.size, t.size)
  typeof n == 'string' && (n = parseInt(n, 10))
  let s = Ot(e.style, t.style)
  s &&
    !('' + s).match(Xx) &&
    (console.warn('Invalid font style specified: "' + s + '"'), (s = void 0))
  const i = {
    family: Ot(e.family, t.family),
    lineHeight: Qx(Ot(e.lineHeight, t.lineHeight), n),
    size: n,
    style: s,
    weight: Ot(e.weight, t.weight),
    string: '',
  }
  return (i.string = Ux(i)), i
}
function So(e, t, n, s) {
  let i, o, r
  for (i = 0, o = e.length; i < o; ++i)
    if (((r = e[i]), r !== void 0 && r !== void 0)) return r
}
function tE(e, t, n) {
  const { min: s, max: i } = e,
    o = Jp(t, (i - s) / 2),
    r = (a, l) => (n && a === 0 ? 0 : a + l)
  return { min: r(s, -Math.abs(o)), max: r(i, o) }
}
function Xs(e, t) {
  return Object.assign(Object.create(e), t)
}
function yc(e, t = [''], n, s, i = () => e[0]) {
  const o = n || e
  typeof s > 'u' && (s = hg('_fallback', e))
  const r = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: !0,
    _scopes: e,
    _rootScopes: o,
    _fallback: s,
    _getTarget: i,
    override: a => yc([a, ...e], t, o, s),
  }
  return new Proxy(r, {
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete e[0][l], !0
    },
    get(a, l) {
      return ug(a, l, () => lE(l, t, e, a))
    },
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l)
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0])
    },
    has(a, l) {
      return ku(a).includes(l)
    },
    ownKeys(a) {
      return ku(a)
    },
    set(a, l, c) {
      const f = a._storage || (a._storage = i())
      return (a[l] = f[l] = c), delete a._keys, !0
    },
  })
}
function Hs(e, t, n, s) {
  const i = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: new Set(),
    _descriptors: fg(e, s),
    setContext: o => Hs(e, o, n, s),
    override: o => Hs(e.override(o), t, n, s),
  }
  return new Proxy(i, {
    deleteProperty(o, r) {
      return delete o[r], delete e[r], !0
    },
    get(o, r, a) {
      return ug(o, r, () => nE(o, r, a))
    },
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys
        ? Reflect.has(e, r)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(e, r)
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e)
    },
    has(o, r) {
      return Reflect.has(e, r)
    },
    ownKeys() {
      return Reflect.ownKeys(e)
    },
    set(o, r, a) {
      return (e[r] = a), delete o[r], !0
    },
  })
}
function fg(e, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: n = t.scriptable,
    _indexable: s = t.indexable,
    _allKeys: i = t.allKeys,
  } = e
  return {
    allKeys: i,
    scriptable: n,
    indexable: s,
    isScriptable: Pn(n) ? n : () => n,
    isIndexable: Pn(s) ? s : () => s,
  }
}
const eE = (e, t) => (e ? e + gc(t) : t),
  xc = (e, t) =>
    vt(t) &&
    e !== 'adapters' &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object)
function ug(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t) || t === 'constructor')
    return e[t]
  const s = n()
  return (e[t] = s), s
}
function nE(e, t, n) {
  const { _proxy: s, _context: i, _subProxy: o, _descriptors: r } = e
  let a = s[t]
  return (
    Pn(a) && r.isScriptable(t) && (a = sE(t, a, e, n)),
    Bt(a) && a.length && (a = iE(t, a, e, r.isIndexable)),
    xc(t, a) && (a = Hs(a, i, o && o[t], r)),
    a
  )
}
function sE(e, t, n, s) {
  const { _proxy: i, _context: o, _subProxy: r, _stack: a } = n
  if (a.has(e))
    throw new Error(
      'Recursion detected: ' + Array.from(a).join('->') + '->' + e,
    )
  a.add(e)
  let l = t(o, r || s)
  return a.delete(e), xc(e, l) && (l = Ec(i._scopes, i, e, l)), l
}
function iE(e, t, n, s) {
  const { _proxy: i, _context: o, _subProxy: r, _descriptors: a } = n
  if (typeof o.index < 'u' && s(e)) return t[o.index % t.length]
  if (vt(t[0])) {
    const l = t,
      c = i._scopes.filter(f => f !== l)
    t = []
    for (const f of l) {
      const u = Ec(c, i, e, f)
      t.push(Hs(u, o, r && r[e], a))
    }
  }
  return t
}
function dg(e, t, n) {
  return Pn(e) ? e(t, n) : e
}
const oE = (e, t) => (e === !0 ? t : typeof e == 'string' ? Ji(t, e) : void 0)
function rE(e, t, n, s, i) {
  for (const o of t) {
    const r = oE(n, o)
    if (r) {
      e.add(r)
      const a = dg(r._fallback, n, i)
      if (typeof a < 'u' && a !== n && a !== s) return a
    } else if (r === !1 && typeof s < 'u' && n !== s) return null
  }
  return !1
}
function Ec(e, t, n, s) {
  const i = t._rootScopes,
    o = dg(t._fallback, n, s),
    r = [...e, ...i],
    a = new Set()
  a.add(s)
  let l = Cu(a, r, n, o || n, s)
  return l === null ||
    (typeof o < 'u' && o !== n && ((l = Cu(a, r, o, l, s)), l === null))
    ? !1
    : yc(Array.from(a), [''], i, o, () => aE(t, n, s))
}
function Cu(e, t, n, s, i) {
  for (; n; ) n = rE(e, t, n, s, i)
  return n
}
function aE(e, t, n) {
  const s = e._getTarget()
  t in s || (s[t] = {})
  const i = s[t]
  return Bt(i) && vt(n) ? n : i || {}
}
function lE(e, t, n, s) {
  let i
  for (const o of t)
    if (((i = hg(eE(o, e), n)), typeof i < 'u'))
      return xc(e, i) ? Ec(n, s, e, i) : i
}
function hg(e, t) {
  for (const n of t) {
    if (!n) continue
    const s = n[e]
    if (typeof s < 'u') return s
  }
}
function ku(e) {
  let t = e._keys
  return t || (t = e._keys = cE(e._scopes)), t
}
function cE(e) {
  const t = new Set()
  for (const n of e)
    for (const s of Object.keys(n).filter(i => !i.startsWith('_'))) t.add(s)
  return Array.from(t)
}
function wc() {
  return typeof window < 'u' && typeof document < 'u'
}
function Ac(e) {
  let t = e.parentNode
  return t && t.toString() === '[object ShadowRoot]' && (t = t.host), t
}
function gr(e, t, n) {
  let s
  return (
    typeof e == 'string'
      ? ((s = parseInt(e, 10)),
        e.indexOf('%') !== -1 && (s = (s / 100) * t.parentNode[n]))
      : (s = e),
    s
  )
}
const Hr = e => e.ownerDocument.defaultView.getComputedStyle(e, null)
function fE(e, t) {
  return Hr(e).getPropertyValue(t)
}
const uE = ['top', 'right', 'bottom', 'left']
function es(e, t, n) {
  const s = {}
  n = n ? '-' + n : ''
  for (let i = 0; i < 4; i++) {
    const o = uE[i]
    s[o] = parseFloat(e[t + '-' + o + n]) || 0
  }
  return (s.width = s.left + s.right), (s.height = s.top + s.bottom), s
}
const dE = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot)
function hE(e, t) {
  const n = e.touches,
    s = n && n.length ? n[0] : e,
    { offsetX: i, offsetY: o } = s
  let r = !1,
    a,
    l
  if (dE(i, o, e.target)) (a = i), (l = o)
  else {
    const c = t.getBoundingClientRect()
    ;(a = s.clientX - c.left), (l = s.clientY - c.top), (r = !0)
  }
  return { x: a, y: l, box: r }
}
function Kn(e, t) {
  if ('native' in e) return e
  const { canvas: n, currentDevicePixelRatio: s } = t,
    i = Hr(n),
    o = i.boxSizing === 'border-box',
    r = es(i, 'padding'),
    a = es(i, 'border', 'width'),
    { x: l, y: c, box: f } = hE(e, n),
    u = r.left + (f && a.left),
    d = r.top + (f && a.top)
  let { width: h, height: _ } = t
  return (
    o && ((h -= r.width + a.width), (_ -= r.height + a.height)),
    {
      x: Math.round((((l - u) / h) * n.width) / s),
      y: Math.round((((c - d) / _) * n.height) / s),
    }
  )
}
function pE(e, t, n) {
  let s, i
  if (t === void 0 || n === void 0) {
    const o = e && Ac(e)
    if (!o) (t = e.clientWidth), (n = e.clientHeight)
    else {
      const r = o.getBoundingClientRect(),
        a = Hr(o),
        l = es(a, 'border', 'width'),
        c = es(a, 'padding')
      ;(t = r.width - c.width - l.width),
        (n = r.height - c.height - l.height),
        (s = gr(a.maxWidth, o, 'clientWidth')),
        (i = gr(a.maxHeight, o, 'clientHeight'))
    }
  }
  return { width: t, height: n, maxWidth: s || ur, maxHeight: i || ur }
}
const To = e => Math.round(e * 10) / 10
function gE(e, t, n, s) {
  const i = Hr(e),
    o = es(i, 'margin'),
    r = gr(i.maxWidth, e, 'clientWidth') || ur,
    a = gr(i.maxHeight, e, 'clientHeight') || ur,
    l = pE(e, t, n)
  let { width: c, height: f } = l
  if (i.boxSizing === 'content-box') {
    const d = es(i, 'border', 'width'),
      h = es(i, 'padding')
    ;(c -= h.width + d.width), (f -= h.height + d.height)
  }
  return (
    (c = Math.max(0, c - o.width)),
    (f = Math.max(0, s ? c / s : f - o.height)),
    (c = To(Math.min(c, r, l.maxWidth))),
    (f = To(Math.min(f, a, l.maxHeight))),
    c && !f && (f = To(c / 2)),
    (t !== void 0 || n !== void 0) &&
      s &&
      l.height &&
      f > l.height &&
      ((f = l.height), (c = To(Math.floor(f * s)))),
    { width: c, height: f }
  )
}
function Mu(e, t, n) {
  const s = t || 1,
    i = Math.floor(e.height * s),
    o = Math.floor(e.width * s)
  ;(e.height = Math.floor(e.height)), (e.width = Math.floor(e.width))
  const r = e.canvas
  return (
    r.style &&
      (n || (!r.style.height && !r.style.width)) &&
      ((r.style.height = `${e.height}px`), (r.style.width = `${e.width}px`)),
    e.currentDevicePixelRatio !== s || r.height !== i || r.width !== o
      ? ((e.currentDevicePixelRatio = s),
        (r.height = i),
        (r.width = o),
        e.ctx.setTransform(s, 0, 0, s, 0, 0),
        !0)
      : !1
  )
}
const mE = (function () {
  let e = !1
  try {
    const t = {
      get passive() {
        return (e = !0), !1
      },
    }
    wc() &&
      (window.addEventListener('test', null, t),
      window.removeEventListener('test', null, t))
  } catch {}
  return e
})()
function Pu(e, t) {
  const n = fE(e, t),
    s = n && n.match(/^(\d+)(\.\d+)?px$/)
  return s ? +s[1] : void 0
}
const _E = function (e, t) {
    return {
      x(n) {
        return e + e + t - n
      },
      setWidth(n) {
        t = n
      },
      textAlign(n) {
        return n === 'center' ? n : n === 'right' ? 'left' : 'right'
      },
      xPlus(n, s) {
        return n - s
      },
      leftForLtr(n, s) {
        return n - s
      },
    }
  },
  bE = function () {
    return {
      x(e) {
        return e
      },
      setWidth(e) {},
      textAlign(e) {
        return e
      },
      xPlus(e, t) {
        return e + t
      },
      leftForLtr(e, t) {
        return e
      },
    }
  }
function Ds(e, t, n) {
  return e ? _E(t, n) : bE()
}
function pg(e, t) {
  let n, s
  ;(t === 'ltr' || t === 'rtl') &&
    ((n = e.canvas.style),
    (s = [n.getPropertyValue('direction'), n.getPropertyPriority('direction')]),
    n.setProperty('direction', t, 'important'),
    (e.prevTextDirection = s))
}
function gg(e, t) {
  t !== void 0 &&
    (delete e.prevTextDirection,
    e.canvas.style.setProperty('direction', t[0], t[1]))
}
/*!
 * Chart.js v4.4.5
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ class vE {
  constructor() {
    ;(this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0)
  }
  _notify(t, n, s, i) {
    const o = n.listeners[i],
      r = n.duration
    o.forEach(a =>
      a({
        chart: t,
        initial: n.initial,
        numSteps: r,
        currentStep: Math.min(s - n.start, r),
      }),
    )
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = ng.call(window, () => {
        this._update(), (this._request = null), this._running && this._refresh()
      })))
  }
  _update(t = Date.now()) {
    let n = 0
    this._charts.forEach((s, i) => {
      if (!s.running || !s.items.length) return
      const o = s.items
      let r = o.length - 1,
        a = !1,
        l
      for (; r >= 0; --r)
        (l = o[r]),
          l._active
            ? (l._total > s.duration && (s.duration = l._total),
              l.tick(t),
              (a = !0))
            : ((o[r] = o[o.length - 1]), o.pop())
      a && (i.draw(), this._notify(i, s, t, 'progress')),
        o.length ||
          ((s.running = !1),
          this._notify(i, s, t, 'complete'),
          (s.initial = !1)),
        (n += o.length)
    }),
      (this._lastDate = t),
      n === 0 && (this._running = !1)
  }
  _getAnims(t) {
    const n = this._charts
    let s = n.get(t)
    return (
      s ||
        ((s = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        n.set(t, s)),
      s
    )
  }
  listen(t, n, s) {
    this._getAnims(t).listeners[n].push(s)
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n)
  }
  has(t) {
    return this._getAnims(t).items.length > 0
  }
  start(t) {
    const n = this._charts.get(t)
    n &&
      ((n.running = !0),
      (n.start = Date.now()),
      (n.duration = n.items.reduce((s, i) => Math.max(s, i._duration), 0)),
      this._refresh())
  }
  running(t) {
    if (!this._running) return !1
    const n = this._charts.get(t)
    return !(!n || !n.running || !n.items.length)
  }
  stop(t) {
    const n = this._charts.get(t)
    if (!n || !n.items.length) return
    const s = n.items
    let i = s.length - 1
    for (; i >= 0; --i) s[i].cancel()
    ;(n.items = []), this._notify(t, n, Date.now(), 'complete')
  }
  remove(t) {
    return this._charts.delete(t)
  }
}
var Xe = new vE()
const Du = 'transparent',
  yE = {
    boolean(e, t, n) {
      return n > 0.5 ? t : e
    },
    color(e, t, n) {
      const s = wu(e || Du),
        i = s.valid && wu(t || Du)
      return i && i.valid ? i.mix(s, n).hexString() : t
    },
    number(e, t, n) {
      return e + (t - e) * n
    },
  }
class xE {
  constructor(t, n, s, i) {
    const o = n[s]
    i = So([t.to, i, o, t.from])
    const r = So([t.from, o, i])
    ;(this._active = !0),
      (this._fn = t.fn || yE[t.type || typeof r]),
      (this._easing = Ii[t.easing] || Ii.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = n),
      (this._prop = s),
      (this._from = r),
      (this._to = i),
      (this._promises = void 0)
  }
  active() {
    return this._active
  }
  update(t, n, s) {
    if (this._active) {
      this._notify(!1)
      const i = this._target[this._prop],
        o = s - this._start,
        r = this._duration - o
      ;(this._start = s),
        (this._duration = Math.floor(Math.max(r, t.duration))),
        (this._total += o),
        (this._loop = !!t.loop),
        (this._to = So([t.to, n, i, t.from])),
        (this._from = So([t.from, i, n]))
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1))
  }
  tick(t) {
    const n = t - this._start,
      s = this._duration,
      i = this._prop,
      o = this._from,
      r = this._loop,
      a = this._to
    let l
    if (((this._active = o !== a && (r || n < s)), !this._active)) {
      ;(this._target[i] = a), this._notify(!0)
      return
    }
    if (n < 0) {
      this._target[i] = o
      return
    }
    ;(l = (n / s) % 2),
      (l = r && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[i] = this._fn(o, a, l))
  }
  wait() {
    const t = this._promises || (this._promises = [])
    return new Promise((n, s) => {
      t.push({ res: n, rej: s })
    })
  }
  _notify(t) {
    const n = t ? 'res' : 'rej',
      s = this._promises || []
    for (let i = 0; i < s.length; i++) s[i][n]()
  }
}
class mg {
  constructor(t, n) {
    ;(this._chart = t), (this._properties = new Map()), this.configure(n)
  }
  configure(t) {
    if (!vt(t)) return
    const n = Object.keys(It.animation),
      s = this._properties
    Object.getOwnPropertyNames(t).forEach(i => {
      const o = t[i]
      if (!vt(o)) return
      const r = {}
      for (const a of n) r[a] = o[a]
      ;((Bt(o.properties) && o.properties) || [i]).forEach(a => {
        ;(a === i || !s.has(a)) && s.set(a, r)
      })
    })
  }
  _animateOptions(t, n) {
    const s = n.options,
      i = wE(t, s)
    if (!i) return []
    const o = this._createAnimations(i, s)
    return (
      s.$shared &&
        EE(t.options.$animations, s).then(
          () => {
            t.options = s
          },
          () => {},
        ),
      o
    )
  }
  _createAnimations(t, n) {
    const s = this._properties,
      i = [],
      o = t.$animations || (t.$animations = {}),
      r = Object.keys(n),
      a = Date.now()
    let l
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l]
      if (c.charAt(0) === '$') continue
      if (c === 'options') {
        i.push(...this._animateOptions(t, n))
        continue
      }
      const f = n[c]
      let u = o[c]
      const d = s.get(c)
      if (u)
        if (d && u.active()) {
          u.update(d, f, a)
          continue
        } else u.cancel()
      if (!d || !d.duration) {
        t[c] = f
        continue
      }
      ;(o[c] = u = new xE(d, t, c, f)), i.push(u)
    }
    return i
  }
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n)
      return
    }
    const s = this._createAnimations(t, n)
    if (s.length) return Xe.add(this._chart, s), !0
  }
}
function EE(e, t) {
  const n = [],
    s = Object.keys(t)
  for (let i = 0; i < s.length; i++) {
    const o = e[s[i]]
    o && o.active() && n.push(o.wait())
  }
  return Promise.all(n)
}
function wE(e, t) {
  if (!t) return
  let n = e.options
  if (!n) {
    e.options = t
    return
  }
  return (
    n.$shared &&
      (e.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })),
    n
  )
}
function Lu(e, t) {
  const n = (e && e.options) || {},
    s = n.reverse,
    i = n.min === void 0 ? t : 0,
    o = n.max === void 0 ? t : 0
  return { start: s ? o : i, end: s ? i : o }
}
function AE(e, t, n) {
  if (n === !1) return !1
  const s = Lu(e, n),
    i = Lu(t, n)
  return { top: i.end, right: s.end, bottom: i.start, left: s.start }
}
function SE(e) {
  let t, n, s, i
  return (
    vt(e)
      ? ((t = e.top), (n = e.right), (s = e.bottom), (i = e.left))
      : (t = n = s = i = e),
    { top: t, right: n, bottom: s, left: i, disabled: e === !1 }
  )
}
function _g(e, t) {
  const n = [],
    s = e._getSortedDatasetMetas(t)
  let i, o
  for (i = 0, o = s.length; i < o; ++i) n.push(s[i].index)
  return n
}
function Iu(e, t, n, s = {}) {
  const i = e.keys,
    o = s.mode === 'single'
  let r, a, l, c
  if (t !== null) {
    for (r = 0, a = i.length; r < a; ++r) {
      if (((l = +i[r]), l === n)) {
        if (s.all) continue
        break
      }
      ;(c = e.values[l]), cn(c) && (o || t === 0 || vu(t) === vu(c)) && (t += c)
    }
    return t
  }
}
function TE(e, t) {
  const { iScale: n, vScale: s } = t,
    i = n.axis === 'x' ? 'x' : 'y',
    o = s.axis === 'x' ? 'x' : 'y',
    r = Object.keys(e),
    a = new Array(r.length)
  let l, c, f
  for (l = 0, c = r.length; l < c; ++l)
    (f = r[l]), (a[l] = { [i]: f, [o]: e[f] })
  return a
}
function va(e, t) {
  const n = e && e.options.stacked
  return n || (n === void 0 && t.stack !== void 0)
}
function OE(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`
}
function CE(e) {
  const { min: t, max: n, minDefined: s, maxDefined: i } = e.getUserBounds()
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: i ? n : Number.POSITIVE_INFINITY,
  }
}
function kE(e, t, n) {
  const s = e[t] || (e[t] = {})
  return s[n] || (s[n] = {})
}
function Nu(e, t, n, s) {
  for (const i of t.getMatchingVisibleMetas(s).reverse()) {
    const o = e[i.index]
    if ((n && o > 0) || (!n && o < 0)) return i.index
  }
  return null
}
function Ru(e, t) {
  const { chart: n, _cachedMeta: s } = e,
    i = n._stacks || (n._stacks = {}),
    { iScale: o, vScale: r, index: a } = s,
    l = o.axis,
    c = r.axis,
    f = OE(o, r, s),
    u = t.length
  let d
  for (let h = 0; h < u; ++h) {
    const _ = t[h],
      { [l]: g, [c]: v } = _,
      m = _._stacks || (_._stacks = {})
    ;(d = m[c] = kE(i, f, g)),
      (d[a] = v),
      (d._top = Nu(d, r, !0, s.type)),
      (d._bottom = Nu(d, r, !1, s.type))
    const y = d._visualValues || (d._visualValues = {})
    y[a] = v
  }
}
function ya(e, t) {
  const n = e.scales
  return Object.keys(n)
    .filter(s => n[s].axis === t)
    .shift()
}
function ME(e, t) {
  return Xs(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: 'default',
    type: 'dataset',
  })
}
function PE(e, t, n) {
  return Xs(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: t,
    mode: 'default',
    type: 'data',
  })
}
function oi(e, t) {
  const n = e.controller.index,
    s = e.vScale && e.vScale.axis
  if (s) {
    t = t || e._parsed
    for (const i of t) {
      const o = i._stacks
      if (!o || o[s] === void 0 || o[s][n] === void 0) return
      delete o[s][n],
        o[s]._visualValues !== void 0 &&
          o[s]._visualValues[n] !== void 0 &&
          delete o[s]._visualValues[n]
    }
  }
}
const xa = e => e === 'reset' || e === 'none',
  $u = (e, t) => (t ? e : Object.assign({}, e)),
  DE = (e, t, n) =>
    e && !t.hidden && t._stacked && { keys: _g(n, !0), values: null }
class $i {
  constructor(t, n) {
    ;(this.chart = t),
      (this._ctx = t.ctx),
      (this.index = n),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize()
  }
  initialize() {
    const t = this._cachedMeta
    this.configure(),
      this.linkScales(),
      (t._stacked = va(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled('filler') &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
        )
  }
  updateIndex(t) {
    this.index !== t && oi(this._cachedMeta), (this.index = t)
  }
  linkScales() {
    const t = this.chart,
      n = this._cachedMeta,
      s = this.getDataset(),
      i = (u, d, h, _) => (u === 'x' ? d : u === 'r' ? _ : h),
      o = (n.xAxisID = Ot(s.xAxisID, ya(t, 'x'))),
      r = (n.yAxisID = Ot(s.yAxisID, ya(t, 'y'))),
      a = (n.rAxisID = Ot(s.rAxisID, ya(t, 'r'))),
      l = n.indexAxis,
      c = (n.iAxisID = i(l, o, r, a)),
      f = (n.vAxisID = i(l, r, o, a))
    ;(n.xScale = this.getScaleForId(o)),
      (n.yScale = this.getScaleForId(r)),
      (n.rScale = this.getScaleForId(a)),
      (n.iScale = this.getScaleForId(c)),
      (n.vScale = this.getScaleForId(f))
  }
  getDataset() {
    return this.chart.data.datasets[this.index]
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index)
  }
  getScaleForId(t) {
    return this.chart.scales[t]
  }
  _getOtherScale(t) {
    const n = this._cachedMeta
    return t === n.iScale ? n.vScale : n.iScale
  }
  reset() {
    this._update('reset')
  }
  _destroy() {
    const t = this._cachedMeta
    this._data && yu(this._data, this), t._stacked && oi(t)
  }
  _dataCheck() {
    const t = this.getDataset(),
      n = t.data || (t.data = []),
      s = this._data
    if (vt(n)) {
      const i = this._cachedMeta
      this._data = TE(n, i)
    } else if (s !== n) {
      if (s) {
        yu(s, this)
        const i = this._cachedMeta
        oi(i), (i._parsed = [])
      }
      n && Object.isExtensible(n) && Dx(n, this),
        (this._syncList = []),
        (this._data = n)
    }
  }
  addElements() {
    const t = this._cachedMeta
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType())
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta,
      s = this.getDataset()
    let i = !1
    this._dataCheck()
    const o = n._stacked
    ;(n._stacked = va(n.vScale, n)),
      n.stack !== s.stack && ((i = !0), oi(n), (n.stack = s.stack)),
      this._resyncElements(t),
      (i || o !== n._stacked) &&
        (Ru(this, n._parsed), (n._stacked = va(n.vScale, n)))
  }
  configure() {
    const t = this.chart.config,
      n = t.datasetScopeKeys(this._type),
      s = t.getOptionScopes(this.getDataset(), n, !0)
    ;(this.options = t.createResolver(s, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {})
  }
  parse(t, n) {
    const { _cachedMeta: s, _data: i } = this,
      { iScale: o, _stacked: r } = s,
      a = o.axis
    let l = t === 0 && n === i.length ? !0 : s._sorted,
      c = t > 0 && s._parsed[t - 1],
      f,
      u,
      d
    if (this._parsing === !1) (s._parsed = i), (s._sorted = !0), (d = i)
    else {
      Bt(i[t])
        ? (d = this.parseArrayData(s, i, t, n))
        : vt(i[t])
          ? (d = this.parseObjectData(s, i, t, n))
          : (d = this.parsePrimitiveData(s, i, t, n))
      const h = () => u[a] === null || (c && u[a] < c[a])
      for (f = 0; f < n; ++f)
        (s._parsed[f + t] = u = d[f]), l && (h() && (l = !1), (c = u))
      s._sorted = l
    }
    r && Ru(this, d)
  }
  parsePrimitiveData(t, n, s, i) {
    const { iScale: o, vScale: r } = t,
      a = o.axis,
      l = r.axis,
      c = o.getLabels(),
      f = o === r,
      u = new Array(i)
    let d, h, _
    for (d = 0, h = i; d < h; ++d)
      (_ = d + s),
        (u[d] = { [a]: f || o.parse(c[_], _), [l]: r.parse(n[_], _) })
    return u
  }
  parseArrayData(t, n, s, i) {
    const { xScale: o, yScale: r } = t,
      a = new Array(i)
    let l, c, f, u
    for (l = 0, c = i; l < c; ++l)
      (f = l + s),
        (u = n[f]),
        (a[l] = { x: o.parse(u[0], f), y: r.parse(u[1], f) })
    return a
  }
  parseObjectData(t, n, s, i) {
    const { xScale: o, yScale: r } = t,
      { xAxisKey: a = 'x', yAxisKey: l = 'y' } = this._parsing,
      c = new Array(i)
    let f, u, d, h
    for (f = 0, u = i; f < u; ++f)
      (d = f + s),
        (h = n[d]),
        (c[f] = { x: o.parse(Ji(h, a), d), y: r.parse(Ji(h, l), d) })
    return c
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t]
  }
  getDataElement(t) {
    return this._cachedMeta.data[t]
  }
  applyStack(t, n, s) {
    const i = this.chart,
      o = this._cachedMeta,
      r = n[t.axis],
      a = { keys: _g(i, !0), values: n._stacks[t.axis]._visualValues }
    return Iu(a, r, o.index, { mode: s })
  }
  updateRangeFromParsed(t, n, s, i) {
    const o = s[n.axis]
    let r = o === null ? NaN : o
    const a = i && s._stacks[n.axis]
    i && a && ((i.values = a), (r = Iu(i, o, this._cachedMeta.index))),
      (t.min = Math.min(t.min, r)),
      (t.max = Math.max(t.max, r))
  }
  getMinMax(t, n) {
    const s = this._cachedMeta,
      i = s._parsed,
      o = s._sorted && t === s.iScale,
      r = i.length,
      a = this._getOtherScale(t),
      l = DE(n, s, this.chart),
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: f, max: u } = CE(a)
    let d, h
    function _() {
      h = i[d]
      const g = h[a.axis]
      return !cn(h[t.axis]) || f > g || u < g
    }
    for (
      d = 0;
      d < r && !(!_() && (this.updateRangeFromParsed(c, t, h, l), o));
      ++d
    );
    if (o) {
      for (d = r - 1; d >= 0; --d)
        if (!_()) {
          this.updateRangeFromParsed(c, t, h, l)
          break
        }
    }
    return c
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed,
      s = []
    let i, o, r
    for (i = 0, o = n.length; i < o; ++i) (r = n[i][t.axis]), cn(r) && s.push(r)
    return s
  }
  getMaxOverflow() {
    return !1
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      s = n.iScale,
      i = n.vScale,
      o = this.getParsed(t)
    return {
      label: s ? '' + s.getLabelForValue(o[s.axis]) : '',
      value: i ? '' + i.getLabelForValue(o[i.axis]) : '',
    }
  }
  _update(t) {
    const n = this._cachedMeta
    this.update(t || 'default'),
      (n._clip = SE(
        Ot(this.options.clip, AE(n.xScale, n.yScale, this.getMaxOverflow())),
      ))
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      n = this.chart,
      s = this._cachedMeta,
      i = s.data || [],
      o = n.chartArea,
      r = [],
      a = this._drawStart || 0,
      l = this._drawCount || i.length - a,
      c = this.options.drawActiveElementsOnTop
    let f
    for (s.dataset && s.dataset.draw(t, o, a, l), f = a; f < a + l; ++f) {
      const u = i[f]
      u.hidden || (u.active && c ? r.push(u) : u.draw(t, o))
    }
    for (f = 0; f < r.length; ++f) r[f].draw(t, o)
  }
  getStyle(t, n) {
    const s = n ? 'active' : 'default'
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(s)
      : this.resolveDataElementOptions(t || 0, s)
  }
  getContext(t, n, s) {
    const i = this.getDataset()
    let o
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t]
      ;(o = r.$context || (r.$context = PE(this.getContext(), t, r))),
        (o.parsed = this.getParsed(t)),
        (o.raw = i.data[t]),
        (o.index = o.dataIndex = t)
    } else
      (o =
        this.$context ||
        (this.$context = ME(this.chart.getContext(), this.index))),
        (o.dataset = i),
        (o.index = o.datasetIndex = this.index)
    return (o.active = !!n), (o.mode = s), o
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t)
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t)
  }
  _resolveElementOptions(t, n = 'default', s) {
    const i = n === 'active',
      o = this._cachedDataOpts,
      r = t + '-' + n,
      a = o[r],
      l = this.enableOptionSharing && fr(s)
    if (a) return $u(a, l)
    const c = this.chart.config,
      f = c.datasetElementScopeKeys(this._type, t),
      u = i ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
      d = c.getOptionScopes(this.getDataset(), f),
      h = Object.keys(It.elements[t]),
      _ = () => this.getContext(s, i, n),
      g = c.resolveNamedOptions(d, h, _, u)
    return g.$shared && ((g.$shared = l), (o[r] = Object.freeze($u(g, l)))), g
  }
  _resolveAnimations(t, n, s) {
    const i = this.chart,
      o = this._cachedDataOpts,
      r = `animation-${n}`,
      a = o[r]
    if (a) return a
    let l
    if (i.options.animation !== !1) {
      const f = this.chart.config,
        u = f.datasetAnimationScopeKeys(this._type, n),
        d = f.getOptionScopes(this.getDataset(), u)
      l = f.createResolver(d, this.getContext(t, s, n))
    }
    const c = new mg(i, l && l.animations)
    return l && l._cacheable && (o[r] = Object.freeze(c)), c
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
  }
  includeOptions(t, n) {
    return !n || xa(t) || this.chart._animationsDisabled
  }
  _getSharedOptions(t, n) {
    const s = this.resolveDataElementOptions(t, n),
      i = this._sharedOptions,
      o = this.getSharedOptions(s),
      r = this.includeOptions(n, o) || o !== i
    return (
      this.updateSharedOptions(o, n, s), { sharedOptions: o, includeOptions: r }
    )
  }
  updateElement(t, n, s, i) {
    xa(i) ? Object.assign(t, s) : this._resolveAnimations(n, i).update(t, s)
  }
  updateSharedOptions(t, n, s) {
    t && !xa(n) && this._resolveAnimations(void 0, n).update(t, s)
  }
  _setStyle(t, n, s, i) {
    t.active = i
    const o = this.getStyle(n, i)
    this._resolveAnimations(n, s, i).update(t, {
      options: (!i && this.getSharedOptions(o)) || o,
    })
  }
  removeHoverStyle(t, n, s) {
    this._setStyle(t, s, 'active', !1)
  }
  setHoverStyle(t, n, s) {
    this._setStyle(t, s, 'active', !0)
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset
    t && this._setStyle(t, void 0, 'active', !1)
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset
    t && this._setStyle(t, void 0, 'active', !0)
  }
  _resyncElements(t) {
    const n = this._data,
      s = this._cachedMeta.data
    for (const [a, l, c] of this._syncList) this[a](l, c)
    this._syncList = []
    const i = s.length,
      o = n.length,
      r = Math.min(o, i)
    r && this.parse(0, r),
      o > i
        ? this._insertElements(i, o - i, t)
        : o < i && this._removeElements(o, i - o)
  }
  _insertElements(t, n, s = !0) {
    const i = this._cachedMeta,
      o = i.data,
      r = t + n
    let a
    const l = c => {
      for (c.length += n, a = c.length - 1; a >= r; a--) c[a] = c[a - n]
    }
    for (l(o), a = t; a < r; ++a) o[a] = new this.dataElementType()
    this._parsing && l(i._parsed),
      this.parse(t, n),
      s && this.updateElements(o, t, n, 'reset')
  }
  updateElements(t, n, s, i) {}
  _removeElements(t, n) {
    const s = this._cachedMeta
    if (this._parsing) {
      const i = s._parsed.splice(t, n)
      s._stacked && oi(s, i)
    }
    s.data.splice(t, n)
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t)
    else {
      const [n, s, i] = t
      this[n](s, i)
    }
    this.chart._dataChanges.push([this.index, ...t])
  }
  _onDataPush() {
    const t = arguments.length
    this._sync(['_insertElements', this.getDataset().data.length - t, t])
  }
  _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1])
  }
  _onDataShift() {
    this._sync(['_removeElements', 0, 1])
  }
  _onDataSplice(t, n) {
    n && this._sync(['_removeElements', t, n])
    const s = arguments.length - 2
    s && this._sync(['_insertElements', t, s])
  }
  _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length])
  }
}
pt($i, 'defaults', {}),
  pt($i, 'datasetElementType', null),
  pt($i, 'dataElementType', null)
function LE(e, t, n) {
  let s = 1,
    i = 1,
    o = 0,
    r = 0
  if (t < Rt) {
    const a = e,
      l = a + t,
      c = Math.cos(a),
      f = Math.sin(a),
      u = Math.cos(l),
      d = Math.sin(l),
      h = (E, x, T) => (hr(E, a, l, !0) ? 1 : Math.max(x, x * n, T, T * n)),
      _ = (E, x, T) => (hr(E, a, l, !0) ? -1 : Math.min(x, x * n, T, T * n)),
      g = h(0, c, u),
      v = h($t, f, d),
      m = _(Ft, c, u),
      y = _(Ft + $t, f, d)
    ;(s = (g - m) / 2),
      (i = (v - y) / 2),
      (o = -(g + m) / 2),
      (r = -(v + y) / 2)
  }
  return { ratioX: s, ratioY: i, offsetX: o, offsetY: r }
}
class _i extends $i {
  constructor(t, n) {
    super(t, n),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0)
  }
  linkScales() {}
  parse(t, n) {
    const s = this.getDataset().data,
      i = this._cachedMeta
    if (this._parsing === !1) i._parsed = s
    else {
      let o = l => +s[l]
      if (vt(s[t])) {
        const { key: l = 'value' } = this._parsing
        o = c => +Ji(s[c], l)
      }
      let r, a
      for (r = t, a = t + n; r < a; ++r) i._parsed[r] = o(r)
    }
  }
  _getRotation() {
    return Gn(this.options.rotation - 90)
  }
  _getCircumference() {
    return Gn(this.options.circumference)
  }
  _getRotationExtents() {
    let t = Rt,
      n = -Rt
    for (let s = 0; s < this.chart.data.datasets.length; ++s)
      if (
        this.chart.isDatasetVisible(s) &&
        this.chart.getDatasetMeta(s).type === this._type
      ) {
        const i = this.chart.getDatasetMeta(s).controller,
          o = i._getRotation(),
          r = i._getCircumference()
        ;(t = Math.min(t, o)), (n = Math.max(n, o + r))
      }
    return { rotation: t, circumference: n - t }
  }
  update(t) {
    const n = this.chart,
      { chartArea: s } = n,
      i = this._cachedMeta,
      o = i.data,
      r =
        this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing,
      a = Math.max((Math.min(s.width, s.height) - r) / 2, 0),
      l = Math.min(vx(this.options.cutout, a), 1),
      c = this._getRingWeight(this.index),
      { circumference: f, rotation: u } = this._getRotationExtents(),
      { ratioX: d, ratioY: h, offsetX: _, offsetY: g } = LE(u, f, l),
      v = (s.width - r) / d,
      m = (s.height - r) / h,
      y = Math.max(Math.min(v, m) / 2, 0),
      E = Jp(this.options.radius, y),
      x = Math.max(E * l, 0),
      T = (E - x) / this._getVisibleDatasetWeightTotal()
    ;(this.offsetX = _ * E),
      (this.offsetY = g * E),
      (i.total = this.calculateTotal()),
      (this.outerRadius = E - T * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - T * c, 0)),
      this.updateElements(o, 0, o.length, t)
  }
  _circumference(t, n) {
    const s = this.options,
      i = this._cachedMeta,
      o = this._getCircumference()
    return (n && s.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      i._parsed[t] === null ||
      i.data[t].hidden
      ? 0
      : this.calculateCircumference((i._parsed[t] * o) / Rt)
  }
  updateElements(t, n, s, i) {
    const o = i === 'reset',
      r = this.chart,
      a = r.chartArea,
      c = r.options.animation,
      f = (a.left + a.right) / 2,
      u = (a.top + a.bottom) / 2,
      d = o && c.animateScale,
      h = d ? 0 : this.innerRadius,
      _ = d ? 0 : this.outerRadius,
      { sharedOptions: g, includeOptions: v } = this._getSharedOptions(n, i)
    let m = this._getRotation(),
      y
    for (y = 0; y < n; ++y) m += this._circumference(y, o)
    for (y = n; y < n + s; ++y) {
      const E = this._circumference(y, o),
        x = t[y],
        T = {
          x: f + this.offsetX,
          y: u + this.offsetY,
          startAngle: m,
          endAngle: m + E,
          circumference: E,
          outerRadius: _,
          innerRadius: h,
        }
      v &&
        (T.options =
          g || this.resolveDataElementOptions(y, x.active ? 'active' : i)),
        (m += E),
        this.updateElement(x, y, T, i)
    }
  }
  calculateTotal() {
    const t = this._cachedMeta,
      n = t.data
    let s = 0,
      i
    for (i = 0; i < n.length; i++) {
      const o = t._parsed[i]
      o !== null &&
        !isNaN(o) &&
        this.chart.getDataVisibility(i) &&
        !n[i].hidden &&
        (s += Math.abs(o))
    }
    return s
  }
  calculateCircumference(t) {
    const n = this._cachedMeta.total
    return n > 0 && !isNaN(t) ? Rt * (Math.abs(t) / n) : 0
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      s = this.chart,
      i = s.data.labels || [],
      o = rg(n._parsed[t], s.options.locale)
    return { label: i[t] || '', value: o }
  }
  getMaxBorderWidth(t) {
    let n = 0
    const s = this.chart
    let i, o, r, a, l
    if (!t) {
      for (i = 0, o = s.data.datasets.length; i < o; ++i)
        if (s.isDatasetVisible(i)) {
          ;(r = s.getDatasetMeta(i)), (t = r.data), (a = r.controller)
          break
        }
    }
    if (!t) return 0
    for (i = 0, o = t.length; i < o; ++i)
      (l = a.resolveDataElementOptions(i)),
        l.borderAlign !== 'inner' &&
          (n = Math.max(n, l.borderWidth || 0, l.hoverBorderWidth || 0))
    return n
  }
  getMaxOffset(t) {
    let n = 0
    for (let s = 0, i = t.length; s < i; ++s) {
      const o = this.resolveDataElementOptions(s)
      n = Math.max(n, o.offset || 0, o.hoverOffset || 0)
    }
    return n
  }
  _getRingWeightOffset(t) {
    let n = 0
    for (let s = 0; s < t; ++s)
      this.chart.isDatasetVisible(s) && (n += this._getRingWeight(s))
    return n
  }
  _getRingWeight(t) {
    return Math.max(Ot(this.chart.data.datasets[t].weight, 1), 0)
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
  }
}
pt(_i, 'id', 'doughnut'),
  pt(_i, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'arc',
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
      numbers: {
        type: 'number',
        properties: [
          'circumference',
          'endAngle',
          'innerRadius',
          'outerRadius',
          'startAngle',
          'x',
          'y',
          'offset',
          'borderWidth',
          'spacing',
        ],
      },
    },
    cutout: '50%',
    rotation: 0,
    circumference: 360,
    radius: '100%',
    spacing: 0,
    indexAxis: 'r',
  }),
  pt(_i, 'descriptors', {
    _scriptable: t => t !== 'spacing',
    _indexable: t =>
      t !== 'spacing' &&
      !t.startsWith('borderDash') &&
      !t.startsWith('hoverBorderDash'),
  }),
  pt(_i, 'overrides', {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const n = t.data
            if (n.labels.length && n.datasets.length) {
              const {
                labels: { pointStyle: s, color: i },
              } = t.legend.options
              return n.labels.map((o, r) => {
                const l = t.getDatasetMeta(0).controller.getStyle(r)
                return {
                  text: o,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: i,
                  lineWidth: l.borderWidth,
                  pointStyle: s,
                  hidden: !t.getDataVisibility(r),
                  index: r,
                }
              })
            }
            return []
          },
        },
        onClick(t, n, s) {
          s.chart.toggleDataVisibility(n.index), s.chart.update()
        },
      },
    },
  })
function Un() {
  throw new Error(
    'This method is not implemented: Check that a complete date adapter is provided.',
  )
}
class Sc {
  constructor(t) {
    pt(this, 'options')
    this.options = t || {}
  }
  static override(t) {
    Object.assign(Sc.prototype, t)
  }
  init() {}
  formats() {
    return Un()
  }
  parse() {
    return Un()
  }
  format() {
    return Un()
  }
  add() {
    return Un()
  }
  diff() {
    return Un()
  }
  startOf() {
    return Un()
  }
  endOf() {
    return Un()
  }
}
var IE = { _date: Sc }
function NE(e, t, n, s) {
  const { controller: i, data: o, _sorted: r } = e,
    a = i._cachedMeta.iScale
  if (a && t === a.axis && t !== 'r' && r && o.length) {
    const l = a._reversePixels ? Mx : bl
    if (s) {
      if (i._sharedOptions) {
        const c = o[0],
          f = typeof c.getRange == 'function' && c.getRange(t)
        if (f) {
          const u = l(o, t, n - f),
            d = l(o, t, n + f)
          return { lo: u.lo, hi: d.hi }
        }
      }
    } else return l(o, t, n)
  }
  return { lo: 0, hi: o.length - 1 }
}
function co(e, t, n, s, i) {
  const o = e.getSortedVisibleDatasetMetas(),
    r = n[t]
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: f } = o[a],
      { lo: u, hi: d } = NE(o[a], t, r, i)
    for (let h = u; h <= d; ++h) {
      const _ = f[h]
      _.skip || s(_, c, h)
    }
  }
}
function RE(e) {
  const t = e.indexOf('x') !== -1,
    n = e.indexOf('y') !== -1
  return function (s, i) {
    const o = t ? Math.abs(s.x - i.x) : 0,
      r = n ? Math.abs(s.y - i.y) : 0
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2))
  }
}
function Ea(e, t, n, s, i) {
  const o = []
  return (
    (!i && !e.isPointInArea(t)) ||
      co(
        e,
        n,
        t,
        function (a, l, c) {
          ;(!i && !cg(a, e.chartArea, 0)) ||
            (a.inRange(t.x, t.y, s) &&
              o.push({ element: a, datasetIndex: l, index: c }))
        },
        !0,
      ),
    o
  )
}
function $E(e, t, n, s) {
  let i = []
  function o(r, a, l) {
    const { startAngle: c, endAngle: f } = r.getProps(
        ['startAngle', 'endAngle'],
        s,
      ),
      { angle: u } = tg(r, { x: t.x, y: t.y })
    hr(u, c, f) && i.push({ element: r, datasetIndex: a, index: l })
  }
  return co(e, n, t, o), i
}
function FE(e, t, n, s, i, o) {
  let r = []
  const a = RE(n)
  let l = Number.POSITIVE_INFINITY
  function c(f, u, d) {
    const h = f.inRange(t.x, t.y, i)
    if (s && !h) return
    const _ = f.getCenterPoint(i)
    if (!(!!o || e.isPointInArea(_)) && !h) return
    const v = a(t, _)
    v < l
      ? ((r = [{ element: f, datasetIndex: u, index: d }]), (l = v))
      : v === l && r.push({ element: f, datasetIndex: u, index: d })
  }
  return co(e, n, t, c), r
}
function wa(e, t, n, s, i, o) {
  return !o && !e.isPointInArea(t)
    ? []
    : n === 'r' && !s
      ? $E(e, t, n, i)
      : FE(e, t, n, s, i, o)
}
function Fu(e, t, n, s, i) {
  const o = [],
    r = n === 'x' ? 'inXRange' : 'inYRange'
  let a = !1
  return (
    co(e, n, t, (l, c, f) => {
      l[r] &&
        l[r](t[n], i) &&
        (o.push({ element: l, datasetIndex: c, index: f }),
        (a = a || l.inRange(t.x, t.y, i)))
    }),
    s && !a ? [] : o
  )
}
var HE = {
  evaluateInteractionItems: co,
  modes: {
    index(e, t, n, s) {
      const i = Kn(t, e),
        o = n.axis || 'x',
        r = n.includeInvisible || !1,
        a = n.intersect ? Ea(e, i, o, s, r) : wa(e, i, o, !1, s, r),
        l = []
      return a.length
        ? (e.getSortedVisibleDatasetMetas().forEach(c => {
            const f = a[0].index,
              u = c.data[f]
            u &&
              !u.skip &&
              l.push({ element: u, datasetIndex: c.index, index: f })
          }),
          l)
        : []
    },
    dataset(e, t, n, s) {
      const i = Kn(t, e),
        o = n.axis || 'xy',
        r = n.includeInvisible || !1
      let a = n.intersect ? Ea(e, i, o, s, r) : wa(e, i, o, !1, s, r)
      if (a.length > 0) {
        const l = a[0].datasetIndex,
          c = e.getDatasetMeta(l).data
        a = []
        for (let f = 0; f < c.length; ++f)
          a.push({ element: c[f], datasetIndex: l, index: f })
      }
      return a
    },
    point(e, t, n, s) {
      const i = Kn(t, e),
        o = n.axis || 'xy',
        r = n.includeInvisible || !1
      return Ea(e, i, o, s, r)
    },
    nearest(e, t, n, s) {
      const i = Kn(t, e),
        o = n.axis || 'xy',
        r = n.includeInvisible || !1
      return wa(e, i, o, n.intersect, s, r)
    },
    x(e, t, n, s) {
      const i = Kn(t, e)
      return Fu(e, i, 'x', n.intersect, s)
    },
    y(e, t, n, s) {
      const i = Kn(t, e)
      return Fu(e, i, 'y', n.intersect, s)
    },
  },
}
const bg = ['left', 'top', 'right', 'bottom']
function ri(e, t) {
  return e.filter(n => n.pos === t)
}
function Hu(e, t) {
  return e.filter(n => bg.indexOf(n.pos) === -1 && n.box.axis === t)
}
function ai(e, t) {
  return e.sort((n, s) => {
    const i = t ? s : n,
      o = t ? n : s
    return i.weight === o.weight ? i.index - o.index : i.weight - o.weight
  })
}
function jE(e) {
  const t = []
  let n, s, i, o, r, a
  for (n = 0, s = (e || []).length; n < s; ++n)
    (i = e[n]),
      ({
        position: o,
        options: { stack: r, stackWeight: a = 1 },
      } = i),
      t.push({
        index: n,
        box: i,
        pos: o,
        horizontal: i.isHorizontal(),
        weight: i.weight,
        stack: r && o + r,
        stackWeight: a,
      })
  return t
}
function zE(e) {
  const t = {}
  for (const n of e) {
    const { stack: s, pos: i, stackWeight: o } = n
    if (!s || !bg.includes(i)) continue
    const r = t[s] || (t[s] = { count: 0, placed: 0, weight: 0, size: 0 })
    r.count++, (r.weight += o)
  }
  return t
}
function BE(e, t) {
  const n = zE(e),
    { vBoxMaxWidth: s, hBoxMaxHeight: i } = t
  let o, r, a
  for (o = 0, r = e.length; o < r; ++o) {
    a = e[o]
    const { fullSize: l } = a.box,
      c = n[a.stack],
      f = c && a.stackWeight / c.weight
    a.horizontal
      ? ((a.width = f ? f * s : l && t.availableWidth), (a.height = i))
      : ((a.width = s), (a.height = f ? f * i : l && t.availableHeight))
  }
  return n
}
function WE(e) {
  const t = jE(e),
    n = ai(
      t.filter(c => c.box.fullSize),
      !0,
    ),
    s = ai(ri(t, 'left'), !0),
    i = ai(ri(t, 'right')),
    o = ai(ri(t, 'top'), !0),
    r = ai(ri(t, 'bottom')),
    a = Hu(t, 'x'),
    l = Hu(t, 'y')
  return {
    fullSize: n,
    leftAndTop: s.concat(o),
    rightAndBottom: i.concat(l).concat(r).concat(a),
    chartArea: ri(t, 'chartArea'),
    vertical: s.concat(i).concat(l),
    horizontal: o.concat(r).concat(a),
  }
}
function ju(e, t, n, s) {
  return Math.max(e[n], t[n]) + Math.max(e[s], t[s])
}
function vg(e, t) {
  ;(e.top = Math.max(e.top, t.top)),
    (e.left = Math.max(e.left, t.left)),
    (e.bottom = Math.max(e.bottom, t.bottom)),
    (e.right = Math.max(e.right, t.right))
}
function VE(e, t, n, s) {
  const { pos: i, box: o } = n,
    r = e.maxPadding
  if (!vt(i)) {
    n.size && (e[i] -= n.size)
    const u = s[n.stack] || { size: 0, count: 1 }
    ;(u.size = Math.max(u.size, n.horizontal ? o.height : o.width)),
      (n.size = u.size / u.count),
      (e[i] += n.size)
  }
  o.getPadding && vg(r, o.getPadding())
  const a = Math.max(0, t.outerWidth - ju(r, e, 'left', 'right')),
    l = Math.max(0, t.outerHeight - ju(r, e, 'top', 'bottom')),
    c = a !== e.w,
    f = l !== e.h
  return (
    (e.w = a),
    (e.h = l),
    n.horizontal ? { same: c, other: f } : { same: f, other: c }
  )
}
function UE(e) {
  const t = e.maxPadding
  function n(s) {
    const i = Math.max(t[s] - e[s], 0)
    return (e[s] += i), i
  }
  ;(e.y += n('top')), (e.x += n('left')), n('right'), n('bottom')
}
function YE(e, t) {
  const n = t.maxPadding
  function s(i) {
    const o = { left: 0, top: 0, right: 0, bottom: 0 }
    return (
      i.forEach(r => {
        o[r] = Math.max(t[r], n[r])
      }),
      o
    )
  }
  return s(e ? ['left', 'right'] : ['top', 'bottom'])
}
function bi(e, t, n, s) {
  const i = []
  let o, r, a, l, c, f
  for (o = 0, r = e.length, c = 0; o < r; ++o) {
    ;(a = e[o]),
      (l = a.box),
      l.update(a.width || t.w, a.height || t.h, YE(a.horizontal, t))
    const { same: u, other: d } = VE(t, n, a, s)
    ;(c |= u && i.length), (f = f || d), l.fullSize || i.push(a)
  }
  return (c && bi(i, t, n, s)) || f
}
function Oo(e, t, n, s, i) {
  ;(e.top = n),
    (e.left = t),
    (e.right = t + s),
    (e.bottom = n + i),
    (e.width = s),
    (e.height = i)
}
function zu(e, t, n, s) {
  const i = n.padding
  let { x: o, y: r } = t
  for (const a of e) {
    const l = a.box,
      c = s[a.stack] || { count: 1, placed: 0, weight: 1 },
      f = a.stackWeight / c.weight || 1
    if (a.horizontal) {
      const u = t.w * f,
        d = c.size || l.height
      fr(c.start) && (r = c.start),
        l.fullSize
          ? Oo(l, i.left, r, n.outerWidth - i.right - i.left, d)
          : Oo(l, t.left + c.placed, r, u, d),
        (c.start = r),
        (c.placed += u),
        (r = l.bottom)
    } else {
      const u = t.h * f,
        d = c.size || l.width
      fr(c.start) && (o = c.start),
        l.fullSize
          ? Oo(l, o, i.top, d, n.outerHeight - i.bottom - i.top)
          : Oo(l, o, t.top + c.placed, d, u),
        (c.start = o),
        (c.placed += u),
        (o = l.right)
    }
  }
  ;(t.x = o), (t.y = r)
}
var Sn = {
  addBox(e, t) {
    e.boxes || (e.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || 'top'),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(n) {
                t.draw(n)
              },
            },
          ]
        }),
      e.boxes.push(t)
  },
  removeBox(e, t) {
    const n = e.boxes ? e.boxes.indexOf(t) : -1
    n !== -1 && e.boxes.splice(n, 1)
  },
  configure(e, t, n) {
    ;(t.fullSize = n.fullSize), (t.position = n.position), (t.weight = n.weight)
  },
  update(e, t, n, s) {
    if (!e) return
    const i = ke(e.options.layout.padding),
      o = Math.max(t - i.width, 0),
      r = Math.max(n - i.height, 0),
      a = WE(e.boxes),
      l = a.vertical,
      c = a.horizontal
    Tt(e.boxes, g => {
      typeof g.beforeLayout == 'function' && g.beforeLayout()
    })
    const f =
        l.reduce(
          (g, v) => (v.box.options && v.box.options.display === !1 ? g : g + 1),
          0,
        ) || 1,
      u = Object.freeze({
        outerWidth: t,
        outerHeight: n,
        padding: i,
        availableWidth: o,
        availableHeight: r,
        vBoxMaxWidth: o / 2 / f,
        hBoxMaxHeight: r / 2,
      }),
      d = Object.assign({}, i)
    vg(d, ke(s))
    const h = Object.assign(
        { maxPadding: d, w: o, h: r, x: i.left, y: i.top },
        i,
      ),
      _ = BE(l.concat(c), u)
    bi(a.fullSize, h, u, _),
      bi(l, h, u, _),
      bi(c, h, u, _) && bi(l, h, u, _),
      UE(h),
      zu(a.leftAndTop, h, u, _),
      (h.x += h.w),
      (h.y += h.h),
      zu(a.rightAndBottom, h, u, _),
      (e.chartArea = {
        left: h.left,
        top: h.top,
        right: h.left + h.w,
        bottom: h.top + h.h,
        height: h.h,
        width: h.w,
      }),
      Tt(a.chartArea, g => {
        const v = g.box
        Object.assign(v, e.chartArea),
          v.update(h.w, h.h, { left: 0, top: 0, right: 0, bottom: 0 })
      })
  },
}
class yg {
  acquireContext(t, n) {}
  releaseContext(t) {
    return !1
  }
  addEventListener(t, n, s) {}
  removeEventListener(t, n, s) {}
  getDevicePixelRatio() {
    return 1
  }
  getMaximumSize(t, n, s, i) {
    return (
      (n = Math.max(0, n || t.width)),
      (s = s || t.height),
      { width: n, height: Math.max(0, i ? Math.floor(n / i) : s) }
    )
  }
  isAttached(t) {
    return !0
  }
  updateConfig(t) {}
}
class KE extends yg {
  acquireContext(t) {
    return (t && t.getContext && t.getContext('2d')) || null
  }
  updateConfig(t) {
    t.options.animation = !1
  }
}
const qo = '$chartjs',
  qE = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout',
  },
  Bu = e => e === null || e === ''
function GE(e, t) {
  const n = e.style,
    s = e.getAttribute('height'),
    i = e.getAttribute('width')
  if (
    ((e[qo] = {
      initial: {
        height: s,
        width: i,
        style: { display: n.display, height: n.height, width: n.width },
      },
    }),
    (n.display = n.display || 'block'),
    (n.boxSizing = n.boxSizing || 'border-box'),
    Bu(i))
  ) {
    const o = Pu(e, 'width')
    o !== void 0 && (e.width = o)
  }
  if (Bu(s))
    if (e.style.height === '') e.height = e.width / (t || 2)
    else {
      const o = Pu(e, 'height')
      o !== void 0 && (e.height = o)
    }
  return e
}
const xg = mE ? { passive: !0 } : !1
function XE(e, t, n) {
  e && e.addEventListener(t, n, xg)
}
function QE(e, t, n) {
  e && e.canvas && e.canvas.removeEventListener(t, n, xg)
}
function JE(e, t) {
  const n = qE[e.type] || e.type,
    { x: s, y: i } = Kn(e, t)
  return {
    type: n,
    chart: t,
    native: e,
    x: s !== void 0 ? s : null,
    y: i !== void 0 ? i : null,
  }
}
function mr(e, t) {
  for (const n of e) if (n === t || n.contains(t)) return !0
}
function ZE(e, t, n) {
  const s = e.canvas,
    i = new MutationObserver(o => {
      let r = !1
      for (const a of o)
        (r = r || mr(a.addedNodes, s)), (r = r && !mr(a.removedNodes, s))
      r && n()
    })
  return i.observe(document, { childList: !0, subtree: !0 }), i
}
function tw(e, t, n) {
  const s = e.canvas,
    i = new MutationObserver(o => {
      let r = !1
      for (const a of o)
        (r = r || mr(a.removedNodes, s)), (r = r && !mr(a.addedNodes, s))
      r && n()
    })
  return i.observe(document, { childList: !0, subtree: !0 }), i
}
const Zi = new Map()
let Wu = 0
function Eg() {
  const e = window.devicePixelRatio
  e !== Wu &&
    ((Wu = e),
    Zi.forEach((t, n) => {
      n.currentDevicePixelRatio !== e && t()
    }))
}
function ew(e, t) {
  Zi.size || window.addEventListener('resize', Eg), Zi.set(e, t)
}
function nw(e) {
  Zi.delete(e), Zi.size || window.removeEventListener('resize', Eg)
}
function sw(e, t, n) {
  const s = e.canvas,
    i = s && Ac(s)
  if (!i) return
  const o = sg((a, l) => {
      const c = i.clientWidth
      n(a, l), c < i.clientWidth && n()
    }, window),
    r = new ResizeObserver(a => {
      const l = a[0],
        c = l.contentRect.width,
        f = l.contentRect.height
      ;(c === 0 && f === 0) || o(c, f)
    })
  return r.observe(i), ew(e, o), r
}
function Aa(e, t, n) {
  n && n.disconnect(), t === 'resize' && nw(e)
}
function iw(e, t, n) {
  const s = e.canvas,
    i = sg(o => {
      e.ctx !== null && n(JE(o, e))
    }, e)
  return XE(s, t, i), i
}
class ow extends yg {
  acquireContext(t, n) {
    const s = t && t.getContext && t.getContext('2d')
    return s && s.canvas === t ? (GE(t, n), s) : null
  }
  releaseContext(t) {
    const n = t.canvas
    if (!n[qo]) return !1
    const s = n[qo].initial
    ;['height', 'width'].forEach(o => {
      const r = s[o]
      se(r) ? n.removeAttribute(o) : n.setAttribute(o, r)
    })
    const i = s.style || {}
    return (
      Object.keys(i).forEach(o => {
        n.style[o] = i[o]
      }),
      (n.width = n.width),
      delete n[qo],
      !0
    )
  }
  addEventListener(t, n, s) {
    this.removeEventListener(t, n)
    const i = t.$proxies || (t.$proxies = {}),
      r = { attach: ZE, detach: tw, resize: sw }[n] || iw
    i[n] = r(t, n, s)
  }
  removeEventListener(t, n) {
    const s = t.$proxies || (t.$proxies = {}),
      i = s[n]
    if (!i) return
    ;(({ attach: Aa, detach: Aa, resize: Aa })[n] || QE)(t, n, i),
      (s[n] = void 0)
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio
  }
  getMaximumSize(t, n, s, i) {
    return gE(t, n, s, i)
  }
  isAttached(t) {
    const n = t && Ac(t)
    return !!(n && n.isConnected)
  }
}
function rw(e) {
  return !wc() || (typeof OffscreenCanvas < 'u' && e instanceof OffscreenCanvas)
    ? KE
    : ow
}
var zo
let fo =
  ((zo = class {
    constructor() {
      pt(this, 'x')
      pt(this, 'y')
      pt(this, 'active', !1)
      pt(this, 'options')
      pt(this, '$animations')
    }
    tooltipPosition(t) {
      const { x: n, y: s } = this.getProps(['x', 'y'], t)
      return { x: n, y: s }
    }
    hasValue() {
      return dr(this.x) && dr(this.y)
    }
    getProps(t, n) {
      const s = this.$animations
      if (!n || !s) return this
      const i = {}
      return (
        t.forEach(o => {
          i[o] = s[o] && s[o].active() ? s[o]._to : this[o]
        }),
        i
      )
    }
  }),
  pt(zo, 'defaults', {}),
  pt(zo, 'defaultRoutes'),
  zo)
function aw(e, t) {
  const n = e.options.ticks,
    s = lw(e),
    i = Math.min(n.maxTicksLimit || s, s),
    o = n.major.enabled ? fw(t) : [],
    r = o.length,
    a = o[0],
    l = o[r - 1],
    c = []
  if (r > i) return uw(t, c, o, r / i), c
  const f = cw(o, t, i)
  if (r > 0) {
    let u, d
    const h = r > 1 ? Math.round((l - a) / (r - 1)) : null
    for (Co(t, c, f, se(h) ? 0 : a - h, a), u = 0, d = r - 1; u < d; u++)
      Co(t, c, f, o[u], o[u + 1])
    return Co(t, c, f, l, se(h) ? t.length : l + h), c
  }
  return Co(t, c, f), c
}
function lw(e) {
  const t = e.options.offset,
    n = e._tickSize(),
    s = e._length / n + (t ? 0 : 1),
    i = e._maxLength / n
  return Math.floor(Math.min(s, i))
}
function cw(e, t, n) {
  const s = dw(e),
    i = t.length / n
  if (!s) return Math.max(i, 1)
  const o = Tx(s)
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r]
    if (l > i) return l
  }
  return Math.max(i, 1)
}
function fw(e) {
  const t = []
  let n, s
  for (n = 0, s = e.length; n < s; n++) e[n].major && t.push(n)
  return t
}
function uw(e, t, n, s) {
  let i = 0,
    o = n[0],
    r
  for (s = Math.ceil(s), r = 0; r < e.length; r++)
    r === o && (t.push(e[r]), i++, (o = n[i * s]))
}
function Co(e, t, n, s, i) {
  const o = Ot(s, 0),
    r = Math.min(Ot(i, e.length), e.length)
  let a = 0,
    l,
    c,
    f
  for (
    n = Math.ceil(n), i && ((l = i - s), (n = l / Math.floor(l / n))), f = o;
    f < 0;

  )
    a++, (f = Math.round(o + a * n))
  for (c = Math.max(o, 0); c < r; c++)
    c === f && (t.push(e[c]), a++, (f = Math.round(o + a * n)))
}
function dw(e) {
  const t = e.length
  let n, s
  if (t < 2) return !1
  for (s = e[0], n = 1; n < t; ++n) if (e[n] - e[n - 1] !== s) return !1
  return s
}
const hw = e => (e === 'left' ? 'right' : e === 'right' ? 'left' : e),
  Vu = (e, t, n) => (t === 'top' || t === 'left' ? e[t] + n : e[t] - n),
  Uu = (e, t) => Math.min(t || e, e)
function Yu(e, t) {
  const n = [],
    s = e.length / t,
    i = e.length
  let o = 0
  for (; o < i; o += s) n.push(e[Math.floor(o)])
  return n
}
function pw(e, t, n) {
  const s = e.ticks.length,
    i = Math.min(t, s - 1),
    o = e._startPixel,
    r = e._endPixel,
    a = 1e-6
  let l = e.getPixelForTick(i),
    c
  if (
    !(
      n &&
      (s === 1
        ? (c = Math.max(l - o, r - l))
        : t === 0
          ? (c = (e.getPixelForTick(1) - l) / 2)
          : (c = (l - e.getPixelForTick(i - 1)) / 2),
      (l += i < t ? c : -c),
      l < o - a || l > r + a)
    )
  )
    return l
}
function gw(e, t) {
  Tt(e, n => {
    const s = n.gc,
      i = s.length / 2
    let o
    if (i > t) {
      for (o = 0; o < i; ++o) delete n.data[s[o]]
      s.splice(0, i)
    }
  })
}
function li(e) {
  return e.drawTicks ? e.tickLength : 0
}
function Ku(e, t) {
  if (!e.display) return 0
  const n = ne(e.font, t),
    s = ke(e.padding)
  return (Bt(e.text) ? e.text.length : 1) * n.lineHeight + s.height
}
function mw(e, t) {
  return Xs(e, { scale: t, type: 'scale' })
}
function _w(e, t, n) {
  return Xs(e, { tick: n, index: t, type: 'tick' })
}
function bw(e, t, n) {
  let s = ig(e)
  return ((n && t !== 'right') || (!n && t === 'right')) && (s = hw(s)), s
}
function vw(e, t, n, s) {
  const { top: i, left: o, bottom: r, right: a, chart: l } = e,
    { chartArea: c, scales: f } = l
  let u = 0,
    d,
    h,
    _
  const g = r - i,
    v = a - o
  if (e.isHorizontal()) {
    if (((h = le(s, o, a)), vt(n))) {
      const m = Object.keys(n)[0],
        y = n[m]
      _ = f[m].getPixelForValue(y) + g - t
    } else
      n === 'center' ? (_ = (c.bottom + c.top) / 2 + g - t) : (_ = Vu(e, n, t))
    d = a - o
  } else {
    if (vt(n)) {
      const m = Object.keys(n)[0],
        y = n[m]
      h = f[m].getPixelForValue(y) - v + t
    } else
      n === 'center' ? (h = (c.left + c.right) / 2 - v + t) : (h = Vu(e, n, t))
    ;(_ = le(s, r, i)), (u = n === 'left' ? -$t : $t)
  }
  return { titleX: h, titleY: _, maxWidth: d, rotation: u }
}
class jr extends fo {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0)
  }
  init(t) {
    ;(this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax))
  }
  parse(t, n) {
    return t
  }
  getUserBounds() {
    let { _userMin: t, _userMax: n, _suggestedMin: s, _suggestedMax: i } = this
    return (
      (t = Le(t, Number.POSITIVE_INFINITY)),
      (n = Le(n, Number.NEGATIVE_INFINITY)),
      (s = Le(s, Number.POSITIVE_INFINITY)),
      (i = Le(i, Number.NEGATIVE_INFINITY)),
      { min: Le(t, s), max: Le(n, i), minDefined: cn(t), maxDefined: cn(n) }
    )
  }
  getMinMax(t) {
    let { min: n, max: s, minDefined: i, maxDefined: o } = this.getUserBounds(),
      r
    if (i && o) return { min: n, max: s }
    const a = this.getMatchingVisibleMetas()
    for (let l = 0, c = a.length; l < c; ++l)
      (r = a[l].controller.getMinMax(this, t)),
        i || (n = Math.min(n, r.min)),
        o || (s = Math.max(s, r.max))
    return (
      (n = o && n > s ? s : n),
      (s = i && n > s ? n : s),
      { min: Le(n, Le(s, n)), max: Le(s, Le(n, s)) }
    )
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    }
  }
  getTicks() {
    return this.ticks
  }
  getLabels() {
    const t = this.chart.data
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    )
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t))
  }
  beforeLayout() {
    ;(this._cache = {}), (this._dataLimitsCached = !1)
  }
  beforeUpdate() {
    Mt(this.options.beforeUpdate, [this])
  }
  update(t, n, s) {
    const { beginAtZero: i, grace: o, ticks: r } = this.options,
      a = r.sampleSize
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = s =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, s)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + s.left + s.right
        : this.height + s.top + s.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = tE(this, o, i)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks()
    const l = a < this.ticks.length
    this._convertTicksToLabels(l ? Yu(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      r.display &&
        (r.autoSkip || r.source === 'auto') &&
        ((this.ticks = aw(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate()
  }
  configure() {
    let t = this.options.reverse,
      n,
      s
    this.isHorizontal()
      ? ((n = this.left), (s = this.right))
      : ((n = this.top), (s = this.bottom), (t = !t)),
      (this._startPixel = n),
      (this._endPixel = s),
      (this._reversePixels = t),
      (this._length = s - n),
      (this._alignToPixels = this.options.alignToPixels)
  }
  afterUpdate() {
    Mt(this.options.afterUpdate, [this])
  }
  beforeSetDimensions() {
    Mt(this.options.beforeSetDimensions, [this])
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0)
  }
  afterSetDimensions() {
    Mt(this.options.afterSetDimensions, [this])
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), Mt(this.options[t], [this])
  }
  beforeDataLimits() {
    this._callHooks('beforeDataLimits')
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks('afterDataLimits')
  }
  beforeBuildTicks() {
    this._callHooks('beforeBuildTicks')
  }
  buildTicks() {
    return []
  }
  afterBuildTicks() {
    this._callHooks('afterBuildTicks')
  }
  beforeTickToLabelConversion() {
    Mt(this.options.beforeTickToLabelConversion, [this])
  }
  generateTickLabels(t) {
    const n = this.options.ticks
    let s, i, o
    for (s = 0, i = t.length; s < i; s++)
      (o = t[s]), (o.label = Mt(n.callback, [o.value, s, t], this))
  }
  afterTickToLabelConversion() {
    Mt(this.options.afterTickToLabelConversion, [this])
  }
  beforeCalculateLabelRotation() {
    Mt(this.options.beforeCalculateLabelRotation, [this])
  }
  calculateLabelRotation() {
    const t = this.options,
      n = t.ticks,
      s = Uu(this.ticks.length, t.ticks.maxTicksLimit),
      i = n.minRotation || 0,
      o = n.maxRotation
    let r = i,
      a,
      l,
      c
    if (
      !this._isVisible() ||
      !n.display ||
      i >= o ||
      s <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = i
      return
    }
    const f = this._getLabelSizes(),
      u = f.widest.width,
      d = f.highest.height,
      h = be(this.chart.width - u, 0, this.maxWidth)
    ;(a = t.offset ? this.maxWidth / s : h / (s - 1)),
      u + 6 > a &&
        ((a = h / (s - (t.offset ? 0.5 : 1))),
        (l =
          this.maxHeight -
          li(t.grid) -
          n.padding -
          Ku(t.title, this.chart.options.font)),
        (c = Math.sqrt(u * u + d * d)),
        (r = Ox(
          Math.min(
            Math.asin(be((f.highest.height + 6) / a, -1, 1)),
            Math.asin(be(l / c, -1, 1)) - Math.asin(be(d / c, -1, 1)),
          ),
        )),
        (r = Math.max(i, Math.min(o, r)))),
      (this.labelRotation = r)
  }
  afterCalculateLabelRotation() {
    Mt(this.options.afterCalculateLabelRotation, [this])
  }
  afterAutoSkip() {}
  beforeFit() {
    Mt(this.options.beforeFit, [this])
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: n,
        options: { ticks: s, title: i, grid: o },
      } = this,
      r = this._isVisible(),
      a = this.isHorizontal()
    if (r) {
      const l = Ku(i, n.options.font)
      if (
        (a
          ? ((t.width = this.maxWidth), (t.height = li(o) + l))
          : ((t.height = this.maxHeight), (t.width = li(o) + l)),
        s.display && this.ticks.length)
      ) {
        const {
            first: c,
            last: f,
            widest: u,
            highest: d,
          } = this._getLabelSizes(),
          h = s.padding * 2,
          _ = Gn(this.labelRotation),
          g = Math.cos(_),
          v = Math.sin(_)
        if (a) {
          const m = s.mirror ? 0 : v * u.width + g * d.height
          t.height = Math.min(this.maxHeight, t.height + m + h)
        } else {
          const m = s.mirror ? 0 : g * u.width + v * d.height
          t.width = Math.min(this.maxWidth, t.width + m + h)
        }
        this._calculatePadding(c, f, v, g)
      }
    }
    this._handleMargins(),
      a
        ? ((this.width = this._length =
            n.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            n.height - this._margins.top - this._margins.bottom))
  }
  _calculatePadding(t, n, s, i) {
    const {
        ticks: { align: o, padding: r },
        position: a,
      } = this.options,
      l = this.labelRotation !== 0,
      c = a !== 'top' && this.axis === 'x'
    if (this.isHorizontal()) {
      const f = this.getPixelForTick(0) - this.left,
        u = this.right - this.getPixelForTick(this.ticks.length - 1)
      let d = 0,
        h = 0
      l
        ? c
          ? ((d = i * t.width), (h = s * n.height))
          : ((d = s * t.height), (h = i * n.width))
        : o === 'start'
          ? (h = n.width)
          : o === 'end'
            ? (d = t.width)
            : o !== 'inner' && ((d = t.width / 2), (h = n.width / 2)),
        (this.paddingLeft = Math.max(
          ((d - f + r) * this.width) / (this.width - f),
          0,
        )),
        (this.paddingRight = Math.max(
          ((h - u + r) * this.width) / (this.width - u),
          0,
        ))
    } else {
      let f = n.height / 2,
        u = t.height / 2
      o === 'start'
        ? ((f = 0), (u = t.height))
        : o === 'end' && ((f = n.height), (u = 0)),
        (this.paddingTop = f + r),
        (this.paddingBottom = u + r)
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom,
      )))
  }
  afterFit() {
    Mt(this.options.afterFit, [this])
  }
  isHorizontal() {
    const { axis: t, position: n } = this.options
    return n === 'top' || n === 'bottom' || t === 'x'
  }
  isFullSize() {
    return this.options.fullSize
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t)
    let n, s
    for (n = 0, s = t.length; n < s; n++)
      se(t[n].label) && (t.splice(n, 1), s--, n--)
    this.afterTickToLabelConversion()
  }
  _getLabelSizes() {
    let t = this._labelSizes
    if (!t) {
      const n = this.options.ticks.sampleSize
      let s = this.ticks
      n < s.length && (s = Yu(s, n)),
        (this._labelSizes = t =
          this._computeLabelSizes(
            s,
            s.length,
            this.options.ticks.maxTicksLimit,
          ))
    }
    return t
  }
  _computeLabelSizes(t, n, s) {
    const { ctx: i, _longestTextCache: o } = this,
      r = [],
      a = [],
      l = Math.floor(n / Uu(n, s))
    let c = 0,
      f = 0,
      u,
      d,
      h,
      _,
      g,
      v,
      m,
      y,
      E,
      x,
      T
    for (u = 0; u < n; u += l) {
      if (
        ((_ = t[u].label),
        (g = this._resolveTickFontOptions(u)),
        (i.font = v = g.string),
        (m = o[v] = o[v] || { data: {}, gc: [] }),
        (y = g.lineHeight),
        (E = x = 0),
        !se(_) && !Bt(_))
      )
        (E = Su(i, m.data, m.gc, E, _)), (x = y)
      else if (Bt(_))
        for (d = 0, h = _.length; d < h; ++d)
          (T = _[d]),
            !se(T) && !Bt(T) && ((E = Su(i, m.data, m.gc, E, T)), (x += y))
      r.push(E), a.push(x), (c = Math.max(E, c)), (f = Math.max(x, f))
    }
    gw(o, n)
    const P = r.indexOf(c),
      R = a.indexOf(f),
      q = J => ({ width: r[J] || 0, height: a[J] || 0 })
    return {
      first: q(0),
      last: q(n - 1),
      widest: q(P),
      highest: q(R),
      widths: r,
      heights: a,
    }
  }
  getLabelForValue(t) {
    return t
  }
  getPixelForValue(t, n) {
    return NaN
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const n = this.ticks
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value)
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t)
    const n = this._startPixel + t * this._length
    return kx(this._alignToPixels ? Vn(this.chart, n, 0) : n)
  }
  getDecimalForPixel(t) {
    const n = (t - this._startPixel) / this._length
    return this._reversePixels ? 1 - n : n
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue())
  }
  getBaseValue() {
    const { min: t, max: n } = this
    return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0
  }
  getContext(t) {
    const n = this.ticks || []
    if (t >= 0 && t < n.length) {
      const s = n[t]
      return s.$context || (s.$context = _w(this.getContext(), t, s))
    }
    return this.$context || (this.$context = mw(this.chart.getContext(), this))
  }
  _tickSize() {
    const t = this.options.ticks,
      n = Gn(this.labelRotation),
      s = Math.abs(Math.cos(n)),
      i = Math.abs(Math.sin(n)),
      o = this._getLabelSizes(),
      r = t.autoSkipPadding || 0,
      a = o ? o.widest.width + r : 0,
      l = o ? o.highest.height + r : 0
    return this.isHorizontal()
      ? l * s > a * i
        ? a / s
        : l / i
      : l * i < a * s
        ? l / s
        : a / i
  }
  _isVisible() {
    const t = this.options.display
    return t !== 'auto' ? !!t : this.getMatchingVisibleMetas().length > 0
  }
  _computeGridLineItems(t) {
    const n = this.axis,
      s = this.chart,
      i = this.options,
      { grid: o, position: r, border: a } = i,
      l = o.offset,
      c = this.isHorizontal(),
      u = this.ticks.length + (l ? 1 : 0),
      d = li(o),
      h = [],
      _ = a.setContext(this.getContext()),
      g = _.display ? _.width : 0,
      v = g / 2,
      m = function (k) {
        return Vn(s, k, g)
      }
    let y, E, x, T, P, R, q, J, G, tt, U, rt
    if (r === 'top')
      (y = m(this.bottom)),
        (R = this.bottom - d),
        (J = y - v),
        (tt = m(t.top) + v),
        (rt = t.bottom)
    else if (r === 'bottom')
      (y = m(this.top)),
        (tt = t.top),
        (rt = m(t.bottom) - v),
        (R = y + v),
        (J = this.top + d)
    else if (r === 'left')
      (y = m(this.right)),
        (P = this.right - d),
        (q = y - v),
        (G = m(t.left) + v),
        (U = t.right)
    else if (r === 'right')
      (y = m(this.left)),
        (G = t.left),
        (U = m(t.right) - v),
        (P = y + v),
        (q = this.left + d)
    else if (n === 'x') {
      if (r === 'center') y = m((t.top + t.bottom) / 2 + 0.5)
      else if (vt(r)) {
        const k = Object.keys(r)[0],
          N = r[k]
        y = m(this.chart.scales[k].getPixelForValue(N))
      }
      ;(tt = t.top), (rt = t.bottom), (R = y + v), (J = R + d)
    } else if (n === 'y') {
      if (r === 'center') y = m((t.left + t.right) / 2)
      else if (vt(r)) {
        const k = Object.keys(r)[0],
          N = r[k]
        y = m(this.chart.scales[k].getPixelForValue(N))
      }
      ;(P = y - v), (q = P - d), (G = t.left), (U = t.right)
    }
    const At = Ot(i.ticks.maxTicksLimit, u),
      W = Math.max(1, Math.ceil(u / At))
    for (E = 0; E < u; E += W) {
      const k = this.getContext(E),
        N = o.setContext(k),
        H = a.setContext(k),
        at = N.lineWidth,
        S = N.color,
        Lt = H.dash || [],
        j = H.dashOffset,
        lt = N.tickWidth,
        ht = N.tickColor,
        gt = N.tickBorderDash || [],
        ot = N.tickBorderDashOffset
      ;(x = pw(this, E, l)),
        x !== void 0 &&
          ((T = Vn(s, x, at)),
          c ? (P = q = G = U = T) : (R = J = tt = rt = T),
          h.push({
            tx1: P,
            ty1: R,
            tx2: q,
            ty2: J,
            x1: G,
            y1: tt,
            x2: U,
            y2: rt,
            width: at,
            color: S,
            borderDash: Lt,
            borderDashOffset: j,
            tickWidth: lt,
            tickColor: ht,
            tickBorderDash: gt,
            tickBorderDashOffset: ot,
          }))
    }
    return (this._ticksLength = u), (this._borderValue = y), h
  }
  _computeLabelItems(t) {
    const n = this.axis,
      s = this.options,
      { position: i, ticks: o } = s,
      r = this.isHorizontal(),
      a = this.ticks,
      { align: l, crossAlign: c, padding: f, mirror: u } = o,
      d = li(s.grid),
      h = d + f,
      _ = u ? -f : h,
      g = -Gn(this.labelRotation),
      v = []
    let m,
      y,
      E,
      x,
      T,
      P,
      R,
      q,
      J,
      G,
      tt,
      U,
      rt = 'middle'
    if (i === 'top') (P = this.bottom - _), (R = this._getXAxisLabelAlignment())
    else if (i === 'bottom')
      (P = this.top + _), (R = this._getXAxisLabelAlignment())
    else if (i === 'left') {
      const W = this._getYAxisLabelAlignment(d)
      ;(R = W.textAlign), (T = W.x)
    } else if (i === 'right') {
      const W = this._getYAxisLabelAlignment(d)
      ;(R = W.textAlign), (T = W.x)
    } else if (n === 'x') {
      if (i === 'center') P = (t.top + t.bottom) / 2 + h
      else if (vt(i)) {
        const W = Object.keys(i)[0],
          k = i[W]
        P = this.chart.scales[W].getPixelForValue(k) + h
      }
      R = this._getXAxisLabelAlignment()
    } else if (n === 'y') {
      if (i === 'center') T = (t.left + t.right) / 2 - h
      else if (vt(i)) {
        const W = Object.keys(i)[0],
          k = i[W]
        T = this.chart.scales[W].getPixelForValue(k)
      }
      R = this._getYAxisLabelAlignment(d).textAlign
    }
    n === 'y' && (l === 'start' ? (rt = 'top') : l === 'end' && (rt = 'bottom'))
    const At = this._getLabelSizes()
    for (m = 0, y = a.length; m < y; ++m) {
      ;(E = a[m]), (x = E.label)
      const W = o.setContext(this.getContext(m))
      ;(q = this.getPixelForTick(m) + o.labelOffset),
        (J = this._resolveTickFontOptions(m)),
        (G = J.lineHeight),
        (tt = Bt(x) ? x.length : 1)
      const k = tt / 2,
        N = W.color,
        H = W.textStrokeColor,
        at = W.textStrokeWidth
      let S = R
      r
        ? ((T = q),
          R === 'inner' &&
            (m === y - 1
              ? (S = this.options.reverse ? 'left' : 'right')
              : m === 0
                ? (S = this.options.reverse ? 'right' : 'left')
                : (S = 'center')),
          i === 'top'
            ? c === 'near' || g !== 0
              ? (U = -tt * G + G / 2)
              : c === 'center'
                ? (U = -At.highest.height / 2 - k * G + G)
                : (U = -At.highest.height + G / 2)
            : c === 'near' || g !== 0
              ? (U = G / 2)
              : c === 'center'
                ? (U = At.highest.height / 2 - k * G)
                : (U = At.highest.height - tt * G),
          u && (U *= -1),
          g !== 0 && !W.showLabelBackdrop && (T += (G / 2) * Math.sin(g)))
        : ((P = q), (U = ((1 - tt) * G) / 2))
      let Lt
      if (W.showLabelBackdrop) {
        const j = ke(W.backdropPadding),
          lt = At.heights[m],
          ht = At.widths[m]
        let gt = U - j.top,
          ot = 0 - j.left
        switch (rt) {
          case 'middle':
            gt -= lt / 2
            break
          case 'bottom':
            gt -= lt
            break
        }
        switch (R) {
          case 'center':
            ot -= ht / 2
            break
          case 'right':
            ot -= ht
            break
          case 'inner':
            m === y - 1 ? (ot -= ht) : m > 0 && (ot -= ht / 2)
            break
        }
        Lt = {
          left: ot,
          top: gt,
          width: ht + j.width,
          height: lt + j.height,
          color: W.backdropColor,
        }
      }
      v.push({
        label: x,
        font: J,
        textOffset: U,
        options: {
          rotation: g,
          color: N,
          strokeColor: H,
          strokeWidth: at,
          textAlign: S,
          textBaseline: rt,
          translation: [T, P],
          backdrop: Lt,
        },
      })
    }
    return v
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options
    if (-Gn(this.labelRotation)) return t === 'top' ? 'left' : 'right'
    let i = 'center'
    return (
      n.align === 'start'
        ? (i = 'left')
        : n.align === 'end'
          ? (i = 'right')
          : n.align === 'inner' && (i = 'inner'),
      i
    )
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: n,
        ticks: { crossAlign: s, mirror: i, padding: o },
      } = this.options,
      r = this._getLabelSizes(),
      a = t + o,
      l = r.widest.width
    let c, f
    return (
      n === 'left'
        ? i
          ? ((f = this.right + o),
            s === 'near'
              ? (c = 'left')
              : s === 'center'
                ? ((c = 'center'), (f += l / 2))
                : ((c = 'right'), (f += l)))
          : ((f = this.right - a),
            s === 'near'
              ? (c = 'right')
              : s === 'center'
                ? ((c = 'center'), (f -= l / 2))
                : ((c = 'left'), (f = this.left)))
        : n === 'right'
          ? i
            ? ((f = this.left + o),
              s === 'near'
                ? (c = 'right')
                : s === 'center'
                  ? ((c = 'center'), (f -= l / 2))
                  : ((c = 'left'), (f -= l)))
            : ((f = this.left + a),
              s === 'near'
                ? (c = 'left')
                : s === 'center'
                  ? ((c = 'center'), (f += l / 2))
                  : ((c = 'right'), (f = this.right)))
          : (c = 'right'),
      { textAlign: c, x: f }
    )
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return
    const t = this.chart,
      n = this.options.position
    if (n === 'left' || n === 'right')
      return { top: 0, left: this.left, bottom: t.height, right: this.right }
    if (n === 'top' || n === 'bottom')
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width }
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: n },
      left: s,
      top: i,
      width: o,
      height: r,
    } = this
    n && (t.save(), (t.fillStyle = n), t.fillRect(s, i, o, r), t.restore())
  }
  getLineWidthForValue(t) {
    const n = this.options.grid
    if (!this._isVisible() || !n.display) return 0
    const i = this.ticks.findIndex(o => o.value === t)
    return i >= 0 ? n.setContext(this.getContext(i)).lineWidth : 0
  }
  drawGrid(t) {
    const n = this.options.grid,
      s = this.ctx,
      i =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t))
    let o, r
    const a = (l, c, f) => {
      !f.width ||
        !f.color ||
        (s.save(),
        (s.lineWidth = f.width),
        (s.strokeStyle = f.color),
        s.setLineDash(f.borderDash || []),
        (s.lineDashOffset = f.borderDashOffset),
        s.beginPath(),
        s.moveTo(l.x, l.y),
        s.lineTo(c.x, c.y),
        s.stroke(),
        s.restore())
    }
    if (n.display)
      for (o = 0, r = i.length; o < r; ++o) {
        const l = i[o]
        n.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
          n.drawTicks &&
            a(
              { x: l.tx1, y: l.ty1 },
              { x: l.tx2, y: l.ty2 },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset,
              },
            )
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: n,
        options: { border: s, grid: i },
      } = this,
      o = s.setContext(this.getContext()),
      r = s.display ? o.width : 0
    if (!r) return
    const a = i.setContext(this.getContext(0)).lineWidth,
      l = this._borderValue
    let c, f, u, d
    this.isHorizontal()
      ? ((c = Vn(t, this.left, r) - r / 2),
        (f = Vn(t, this.right, a) + a / 2),
        (u = d = l))
      : ((u = Vn(t, this.top, r) - r / 2),
        (d = Vn(t, this.bottom, a) + a / 2),
        (c = f = l)),
      n.save(),
      (n.lineWidth = o.width),
      (n.strokeStyle = o.color),
      n.beginPath(),
      n.moveTo(c, u),
      n.lineTo(f, d),
      n.stroke(),
      n.restore()
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return
    const s = this.ctx,
      i = this._computeLabelArea()
    i && _c(s, i)
    const o = this.getLabelItems(t)
    for (const r of o) {
      const a = r.options,
        l = r.font,
        c = r.label,
        f = r.textOffset
      pr(s, c, 0, f, l, a)
    }
    i && bc(s)
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: n, title: s, reverse: i },
    } = this
    if (!s.display) return
    const o = ne(s.font),
      r = ke(s.padding),
      a = s.align
    let l = o.lineHeight / 2
    n === 'bottom' || n === 'center' || vt(n)
      ? ((l += r.bottom),
        Bt(s.text) && (l += o.lineHeight * (s.text.length - 1)))
      : (l += r.top)
    const { titleX: c, titleY: f, maxWidth: u, rotation: d } = vw(this, l, n, a)
    pr(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: u,
      rotation: d,
      textAlign: bw(a, n, i),
      textBaseline: 'middle',
      translation: [c, f],
    })
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t))
  }
  _layers() {
    const t = this.options,
      n = (t.ticks && t.ticks.z) || 0,
      s = Ot(t.grid && t.grid.z, -1),
      i = Ot(t.border && t.border.z, 0)
    return !this._isVisible() || this.draw !== jr.prototype.draw
      ? [
          {
            z: n,
            draw: o => {
              this.draw(o)
            },
          },
        ]
      : [
          {
            z: s,
            draw: o => {
              this.drawBackground(), this.drawGrid(o), this.drawTitle()
            },
          },
          {
            z: i,
            draw: () => {
              this.drawBorder()
            },
          },
          {
            z: n,
            draw: o => {
              this.drawLabels(o)
            },
          },
        ]
  }
  getMatchingVisibleMetas(t) {
    const n = this.chart.getSortedVisibleDatasetMetas(),
      s = this.axis + 'AxisID',
      i = []
    let o, r
    for (o = 0, r = n.length; o < r; ++o) {
      const a = n[o]
      a[s] === this.id && (!t || a.type === t) && i.push(a)
    }
    return i
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t))
    return ne(n.font)
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight
    return (this.isHorizontal() ? this.width : this.height) / t
  }
}
class ko {
  constructor(t, n, s) {
    ;(this.type = t),
      (this.scope = n),
      (this.override = s),
      (this.items = Object.create(null))
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
  }
  register(t) {
    const n = Object.getPrototypeOf(t)
    let s
    Ew(n) && (s = this.register(n))
    const i = this.items,
      o = t.id,
      r = this.scope + '.' + o
    if (!o) throw new Error('class does not have id: ' + t)
    return (
      o in i ||
        ((i[o] = t),
        yw(t, r, s),
        this.override && It.override(t.id, t.overrides)),
      r
    )
  }
  get(t) {
    return this.items[t]
  }
  unregister(t) {
    const n = this.items,
      s = t.id,
      i = this.scope
    s in n && delete n[s],
      i && s in It[i] && (delete It[i][s], this.override && delete as[s])
  }
}
function yw(e, t, n) {
  const s = Qi(Object.create(null), [n ? It.get(n) : {}, It.get(t), e.defaults])
  It.set(t, s),
    e.defaultRoutes && xw(t, e.defaultRoutes),
    e.descriptors && It.describe(t, e.descriptors)
}
function xw(e, t) {
  Object.keys(t).forEach(n => {
    const s = n.split('.'),
      i = s.pop(),
      o = [e].concat(s).join('.'),
      r = t[n].split('.'),
      a = r.pop(),
      l = r.join('.')
    It.route(o, i, l, a)
  })
}
function Ew(e) {
  return 'id' in e && 'defaults' in e
}
class ww {
  constructor() {
    ;(this.controllers = new ko($i, 'datasets', !0)),
      (this.elements = new ko(fo, 'elements')),
      (this.plugins = new ko(Object, 'plugins')),
      (this.scales = new ko(jr, 'scales')),
      (this._typedRegistries = [this.controllers, this.scales, this.elements])
  }
  add(...t) {
    this._each('register', t)
  }
  remove(...t) {
    this._each('unregister', t)
  }
  addControllers(...t) {
    this._each('register', t, this.controllers)
  }
  addElements(...t) {
    this._each('register', t, this.elements)
  }
  addPlugins(...t) {
    this._each('register', t, this.plugins)
  }
  addScales(...t) {
    this._each('register', t, this.scales)
  }
  getController(t) {
    return this._get(t, this.controllers, 'controller')
  }
  getElement(t) {
    return this._get(t, this.elements, 'element')
  }
  getPlugin(t) {
    return this._get(t, this.plugins, 'plugin')
  }
  getScale(t) {
    return this._get(t, this.scales, 'scale')
  }
  removeControllers(...t) {
    this._each('unregister', t, this.controllers)
  }
  removeElements(...t) {
    this._each('unregister', t, this.elements)
  }
  removePlugins(...t) {
    this._each('unregister', t, this.plugins)
  }
  removeScales(...t) {
    this._each('unregister', t, this.scales)
  }
  _each(t, n, s) {
    ;[...n].forEach(i => {
      const o = s || this._getRegistryForType(i)
      s || o.isForType(i) || (o === this.plugins && i.id)
        ? this._exec(t, o, i)
        : Tt(i, r => {
            const a = s || this._getRegistryForType(r)
            this._exec(t, a, r)
          })
    })
  }
  _exec(t, n, s) {
    const i = gc(t)
    Mt(s['before' + i], [], s), n[t](s), Mt(s['after' + i], [], s)
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const s = this._typedRegistries[n]
      if (s.isForType(t)) return s
    }
    return this.plugins
  }
  _get(t, n, s) {
    const i = n.get(t)
    if (i === void 0)
      throw new Error('"' + t + '" is not a registered ' + s + '.')
    return i
  }
}
var Re = new ww()
class Aw {
  constructor() {
    this._init = []
  }
  notify(t, n, s, i) {
    n === 'beforeInit' &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, 'install'))
    const o = i ? this._descriptors(t).filter(i) : this._descriptors(t),
      r = this._notify(o, t, n, s)
    return (
      n === 'afterDestroy' &&
        (this._notify(o, t, 'stop'), this._notify(this._init, t, 'uninstall')),
      r
    )
  }
  _notify(t, n, s, i) {
    i = i || {}
    for (const o of t) {
      const r = o.plugin,
        a = r[s],
        l = [n, i, o.options]
      if (Mt(a, l, r) === !1 && i.cancelable) return !1
    }
    return !0
  }
  invalidate() {
    se(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0))
  }
  _descriptors(t) {
    if (this._cache) return this._cache
    const n = (this._cache = this._createDescriptors(t))
    return this._notifyStateChanges(t), n
  }
  _createDescriptors(t, n) {
    const s = t && t.config,
      i = Ot(s.options && s.options.plugins, {}),
      o = Sw(s)
    return i === !1 && !n ? [] : Ow(t, o, i, n)
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [],
      s = this._cache,
      i = (o, r) => o.filter(a => !r.some(l => a.plugin.id === l.plugin.id))
    this._notify(i(n, s), t, 'stop'), this._notify(i(s, n), t, 'start')
  }
}
function Sw(e) {
  const t = {},
    n = [],
    s = Object.keys(Re.plugins.items)
  for (let o = 0; o < s.length; o++) n.push(Re.getPlugin(s[o]))
  const i = e.plugins || []
  for (let o = 0; o < i.length; o++) {
    const r = i[o]
    n.indexOf(r) === -1 && (n.push(r), (t[r.id] = !0))
  }
  return { plugins: n, localIds: t }
}
function Tw(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e
}
function Ow(e, { plugins: t, localIds: n }, s, i) {
  const o = [],
    r = e.getContext()
  for (const a of t) {
    const l = a.id,
      c = Tw(s[l], i)
    c !== null &&
      o.push({
        plugin: a,
        options: Cw(e.config, { plugin: a, local: n[l] }, c, r),
      })
  }
  return o
}
function Cw(e, { plugin: t, local: n }, s, i) {
  const o = e.pluginScopeKeys(t),
    r = e.getOptionScopes(s, o)
  return (
    n && t.defaults && r.push(t.defaults),
    e.createResolver(r, i, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
  )
}
function xl(e, t) {
  const n = It.datasets[e] || {}
  return (
    ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || 'x'
  )
}
function kw(e, t) {
  let n = e
  return (
    e === '_index_' ? (n = t) : e === '_value_' && (n = t === 'x' ? 'y' : 'x'),
    n
  )
}
function Mw(e, t) {
  return e === t ? '_index_' : '_value_'
}
function qu(e) {
  if (e === 'x' || e === 'y' || e === 'r') return e
}
function Pw(e) {
  if (e === 'top' || e === 'bottom') return 'x'
  if (e === 'left' || e === 'right') return 'y'
}
function El(e, ...t) {
  if (qu(e)) return e
  for (const n of t) {
    const s =
      n.axis || Pw(n.position) || (e.length > 1 && qu(e[0].toLowerCase()))
    if (s) return s
  }
  throw new Error(
    `Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`,
  )
}
function Gu(e, t, n) {
  if (n[t + 'AxisID'] === e) return { axis: t }
}
function Dw(e, t) {
  if (t.data && t.data.datasets) {
    const n = t.data.datasets.filter(s => s.xAxisID === e || s.yAxisID === e)
    if (n.length) return Gu(e, 'x', n[0]) || Gu(e, 'y', n[0])
  }
  return {}
}
function Lw(e, t) {
  const n = as[e.type] || { scales: {} },
    s = t.scales || {},
    i = xl(e.type, t),
    o = Object.create(null)
  return (
    Object.keys(s).forEach(r => {
      const a = s[r]
      if (!vt(a))
        return console.error(`Invalid scale configuration for scale: ${r}`)
      if (a._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${r}`,
        )
      const l = El(r, a, Dw(r, e), It.scales[a.type]),
        c = Mw(l, i),
        f = n.scales || {}
      o[r] = Li(Object.create(null), [{ axis: l }, a, f[l], f[c]])
    }),
    e.data.datasets.forEach(r => {
      const a = r.type || e.type,
        l = r.indexAxis || xl(a, t),
        f = (as[a] || {}).scales || {}
      Object.keys(f).forEach(u => {
        const d = kw(u, l),
          h = r[d + 'AxisID'] || d
        ;(o[h] = o[h] || Object.create(null)),
          Li(o[h], [{ axis: d }, s[h], f[u]])
      })
    }),
    Object.keys(o).forEach(r => {
      const a = o[r]
      Li(a, [It.scales[a.type], It.scale])
    }),
    o
  )
}
function wg(e) {
  const t = e.options || (e.options = {})
  ;(t.plugins = Ot(t.plugins, {})), (t.scales = Lw(e, t))
}
function Ag(e) {
  return (
    (e = e || {}),
    (e.datasets = e.datasets || []),
    (e.labels = e.labels || []),
    e
  )
}
function Iw(e) {
  return (e = e || {}), (e.data = Ag(e.data)), wg(e), e
}
const Xu = new Map(),
  Sg = new Set()
function Mo(e, t) {
  let n = Xu.get(e)
  return n || ((n = t()), Xu.set(e, n), Sg.add(n)), n
}
const ci = (e, t, n) => {
  const s = Ji(t, n)
  s !== void 0 && e.add(s)
}
let Nw = class {
  constructor(t) {
    ;(this._config = Iw(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map())
  }
  get platform() {
    return this._config.platform
  }
  get type() {
    return this._config.type
  }
  set type(t) {
    this._config.type = t
  }
  get data() {
    return this._config.data
  }
  set data(t) {
    this._config.data = Ag(t)
  }
  get options() {
    return this._config.options
  }
  set options(t) {
    this._config.options = t
  }
  get plugins() {
    return this._config.plugins
  }
  update() {
    const t = this._config
    this.clearCache(), wg(t)
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear()
  }
  datasetScopeKeys(t) {
    return Mo(t, () => [[`datasets.${t}`, '']])
  }
  datasetAnimationScopeKeys(t, n) {
    return Mo(`${t}.transition.${n}`, () => [
      [`datasets.${t}.transitions.${n}`, `transitions.${n}`],
      [`datasets.${t}`, ''],
    ])
  }
  datasetElementScopeKeys(t, n) {
    return Mo(`${t}-${n}`, () => [
      [`datasets.${t}.elements.${n}`, `datasets.${t}`, `elements.${n}`, ''],
    ])
  }
  pluginScopeKeys(t) {
    const n = t.id,
      s = this.type
    return Mo(`${s}-plugin-${n}`, () => [
      [`plugins.${n}`, ...(t.additionalOptionScopes || [])],
    ])
  }
  _cachedScopes(t, n) {
    const s = this._scopeCache
    let i = s.get(t)
    return (!i || n) && ((i = new Map()), s.set(t, i)), i
  }
  getOptionScopes(t, n, s) {
    const { options: i, type: o } = this,
      r = this._cachedScopes(t, s),
      a = r.get(n)
    if (a) return a
    const l = new Set()
    n.forEach(f => {
      t && (l.add(t), f.forEach(u => ci(l, t, u))),
        f.forEach(u => ci(l, i, u)),
        f.forEach(u => ci(l, as[o] || {}, u)),
        f.forEach(u => ci(l, It, u)),
        f.forEach(u => ci(l, vl, u))
    })
    const c = Array.from(l)
    return (
      c.length === 0 && c.push(Object.create(null)), Sg.has(n) && r.set(n, c), c
    )
  }
  chartOptionScopes() {
    const { options: t, type: n } = this
    return [t, as[n] || {}, It.datasets[n] || {}, { type: n }, It, vl]
  }
  resolveNamedOptions(t, n, s, i = ['']) {
    const o = { $shared: !0 },
      { resolver: r, subPrefixes: a } = Qu(this._resolverCache, t, i)
    let l = r
    if ($w(r, n)) {
      ;(o.$shared = !1), (s = Pn(s) ? s() : s)
      const c = this.createResolver(t, s, a)
      l = Hs(r, s, c)
    }
    for (const c of n) o[c] = l[c]
    return o
  }
  createResolver(t, n, s = [''], i) {
    const { resolver: o } = Qu(this._resolverCache, t, s)
    return vt(n) ? Hs(o, n, void 0, i) : o
  }
}
function Qu(e, t, n) {
  let s = e.get(t)
  s || ((s = new Map()), e.set(t, s))
  const i = n.join()
  let o = s.get(i)
  return (
    o ||
      ((o = {
        resolver: yc(t, n),
        subPrefixes: n.filter(a => !a.toLowerCase().includes('hover')),
      }),
      s.set(i, o)),
    o
  )
}
const Rw = e => vt(e) && Object.getOwnPropertyNames(e).some(t => Pn(e[t]))
function $w(e, t) {
  const { isScriptable: n, isIndexable: s } = fg(e)
  for (const i of t) {
    const o = n(i),
      r = s(i),
      a = (r || o) && e[i]
    if ((o && (Pn(a) || Rw(a))) || (r && Bt(a))) return !0
  }
  return !1
}
var Fw = '4.4.5'
const Hw = ['top', 'bottom', 'left', 'right', 'chartArea']
function Ju(e, t) {
  return e === 'top' || e === 'bottom' || (Hw.indexOf(e) === -1 && t === 'x')
}
function Zu(e, t) {
  return function (n, s) {
    return n[e] === s[e] ? n[t] - s[t] : n[e] - s[e]
  }
}
function td(e) {
  const t = e.chart,
    n = t.options.animation
  t.notifyPlugins('afterRender'), Mt(n && n.onComplete, [e], t)
}
function jw(e) {
  const t = e.chart,
    n = t.options.animation
  Mt(n && n.onProgress, [e], t)
}
function Tg(e) {
  return (
    wc() && typeof e == 'string'
      ? (e = document.getElementById(e))
      : e && e.length && (e = e[0]),
    e && e.canvas && (e = e.canvas),
    e
  )
}
const Go = {},
  ed = e => {
    const t = Tg(e)
    return Object.values(Go)
      .filter(n => n.canvas === t)
      .pop()
  }
function zw(e, t, n) {
  const s = Object.keys(e)
  for (const i of s) {
    const o = +i
    if (o >= t) {
      const r = e[i]
      delete e[i], (n > 0 || o > t) && (e[o + n] = r)
    }
  }
}
function Bw(e, t, n, s) {
  return !n || e.type === 'mouseout' ? null : s ? t : e
}
function Po(e, t, n) {
  return e.options.clip ? e[n] : t[n]
}
function Ww(e, t) {
  const { xScale: n, yScale: s } = e
  return n && s
    ? {
        left: Po(n, t, 'left'),
        right: Po(n, t, 'right'),
        top: Po(s, t, 'top'),
        bottom: Po(s, t, 'bottom'),
      }
    : t
}
var bn
let zr =
  ((bn = class {
    static register(...t) {
      Re.add(...t), nd()
    }
    static unregister(...t) {
      Re.remove(...t), nd()
    }
    constructor(t, n) {
      const s = (this.config = new Nw(n)),
        i = Tg(t),
        o = ed(i)
      if (o)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            o.id +
            "' must be destroyed before the canvas with ID '" +
            o.canvas.id +
            "' can be reused.",
        )
      const r = s.createResolver(s.chartOptionScopes(), this.getContext())
      ;(this.platform = new (s.platform || rw(i))()),
        this.platform.updateConfig(s)
      const a = this.platform.acquireContext(i, r.aspectRatio),
        l = a && a.canvas,
        c = l && l.height,
        f = l && l.width
      if (
        ((this.id = bx()),
        (this.ctx = a),
        (this.canvas = l),
        (this.width = f),
        (this.height = c),
        (this._options = r),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new Aw()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = Ix(u => this.update(u), r.resizeDelay || 0)),
        (this._dataChanges = []),
        (Go[this.id] = this),
        !a || !l)
      ) {
        console.error(
          "Failed to create chart: can't acquire context from the given item",
        )
        return
      }
      Xe.listen(this, 'complete', td),
        Xe.listen(this, 'progress', jw),
        this._initialize(),
        this.attached && this.update()
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: t, maintainAspectRatio: n },
        width: s,
        height: i,
        _aspectRatio: o,
      } = this
      return se(t) ? (n && o ? o : i ? s / i : null) : t
    }
    get data() {
      return this.config.data
    }
    set data(t) {
      this.config.data = t
    }
    get options() {
      return this._options
    }
    set options(t) {
      this.config.options = t
    }
    get registry() {
      return Re
    }
    _initialize() {
      return (
        this.notifyPlugins('beforeInit'),
        this.options.responsive
          ? this.resize()
          : Mu(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins('afterInit'),
        this
      )
    }
    clear() {
      return Tu(this.canvas, this.ctx), this
    }
    stop() {
      return Xe.stop(this), this
    }
    resize(t, n) {
      Xe.running(this)
        ? (this._resizeBeforeDraw = { width: t, height: n })
        : this._resize(t, n)
    }
    _resize(t, n) {
      const s = this.options,
        i = this.canvas,
        o = s.maintainAspectRatio && this.aspectRatio,
        r = this.platform.getMaximumSize(i, t, n, o),
        a = s.devicePixelRatio || this.platform.getDevicePixelRatio(),
        l = this.width ? 'resize' : 'attach'
      ;(this.width = r.width),
        (this.height = r.height),
        (this._aspectRatio = this.aspectRatio),
        Mu(this, a, !0) &&
          (this.notifyPlugins('resize', { size: r }),
          Mt(s.onResize, [this, r], this),
          this.attached && this._doResize(l) && this.render())
    }
    ensureScalesHaveIDs() {
      const n = this.options.scales || {}
      Tt(n, (s, i) => {
        s.id = i
      })
    }
    buildOrUpdateScales() {
      const t = this.options,
        n = t.scales,
        s = this.scales,
        i = Object.keys(s).reduce((r, a) => ((r[a] = !1), r), {})
      let o = []
      n &&
        (o = o.concat(
          Object.keys(n).map(r => {
            const a = n[r],
              l = El(r, a),
              c = l === 'r',
              f = l === 'x'
            return {
              options: a,
              dposition: c ? 'chartArea' : f ? 'bottom' : 'left',
              dtype: c ? 'radialLinear' : f ? 'category' : 'linear',
            }
          }),
        )),
        Tt(o, r => {
          const a = r.options,
            l = a.id,
            c = El(l, a),
            f = Ot(a.type, r.dtype)
          ;(a.position === void 0 || Ju(a.position, c) !== Ju(r.dposition)) &&
            (a.position = r.dposition),
            (i[l] = !0)
          let u = null
          if (l in s && s[l].type === f) u = s[l]
          else {
            const d = Re.getScale(f)
            ;(u = new d({ id: l, type: f, ctx: this.ctx, chart: this })),
              (s[u.id] = u)
          }
          u.init(a, t)
        }),
        Tt(i, (r, a) => {
          r || delete s[a]
        }),
        Tt(s, r => {
          Sn.configure(this, r, r.options), Sn.addBox(this, r)
        })
    }
    _updateMetasets() {
      const t = this._metasets,
        n = this.data.datasets.length,
        s = t.length
      if ((t.sort((i, o) => i.index - o.index), s > n)) {
        for (let i = n; i < s; ++i) this._destroyDatasetMeta(i)
        t.splice(n, s - n)
      }
      this._sortedMetasets = t.slice(0).sort(Zu('order', 'index'))
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: t,
        data: { datasets: n },
      } = this
      t.length > n.length && delete this._stacks,
        t.forEach((s, i) => {
          n.filter(o => o === s._dataset).length === 0 &&
            this._destroyDatasetMeta(i)
        })
    }
    buildOrUpdateControllers() {
      const t = [],
        n = this.data.datasets
      let s, i
      for (
        this._removeUnreferencedMetasets(), s = 0, i = n.length;
        s < i;
        s++
      ) {
        const o = n[s]
        let r = this.getDatasetMeta(s)
        const a = o.type || this.config.type
        if (
          (r.type &&
            r.type !== a &&
            (this._destroyDatasetMeta(s), (r = this.getDatasetMeta(s))),
          (r.type = a),
          (r.indexAxis = o.indexAxis || xl(a, this.options)),
          (r.order = o.order || 0),
          (r.index = s),
          (r.label = '' + o.label),
          (r.visible = this.isDatasetVisible(s)),
          r.controller)
        )
          r.controller.updateIndex(s), r.controller.linkScales()
        else {
          const l = Re.getController(a),
            { datasetElementType: c, dataElementType: f } = It.datasets[a]
          Object.assign(l, {
            dataElementType: Re.getElement(f),
            datasetElementType: c && Re.getElement(c),
          }),
            (r.controller = new l(this, s)),
            t.push(r.controller)
        }
      }
      return this._updateMetasets(), t
    }
    _resetElements() {
      Tt(
        this.data.datasets,
        (t, n) => {
          this.getDatasetMeta(n).controller.reset()
        },
        this,
      )
    }
    reset() {
      this._resetElements(), this.notifyPlugins('reset')
    }
    update(t) {
      const n = this.config
      n.update()
      const s = (this._options = n.createResolver(
          n.chartOptionScopes(),
          this.getContext(),
        )),
        i = (this._animationsDisabled = !s.animation)
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }) === !1)
      )
        return
      const o = this.buildOrUpdateControllers()
      this.notifyPlugins('beforeElementsUpdate')
      let r = 0
      for (let c = 0, f = this.data.datasets.length; c < f; c++) {
        const { controller: u } = this.getDatasetMeta(c),
          d = !i && o.indexOf(u) === -1
        u.buildOrUpdateElements(d), (r = Math.max(+u.getMaxOverflow(), r))
      }
      ;(r = this._minPadding = s.layout.autoPadding ? r : 0),
        this._updateLayout(r),
        i ||
          Tt(o, c => {
            c.reset()
          }),
        this._updateDatasets(t),
        this.notifyPlugins('afterUpdate', { mode: t }),
        this._layers.sort(Zu('z', '_idx'))
      const { _active: a, _lastEvent: l } = this
      l
        ? this._eventHandler(l, !0)
        : a.length && this._updateHoverStyles(a, a, !0),
        this.render()
    }
    _updateScales() {
      Tt(this.scales, t => {
        Sn.removeBox(this, t)
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales()
    }
    _checkEventBindings() {
      const t = this.options,
        n = new Set(Object.keys(this._listeners)),
        s = new Set(t.events)
      ;(!mu(n, s) || !!this._responsiveListeners !== t.responsive) &&
        (this.unbindEvents(), this.bindEvents())
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t } = this,
        n = this._getUniformDataChanges() || []
      for (const { method: s, start: i, count: o } of n) {
        const r = s === '_removeElements' ? -o : o
        zw(t, i, r)
      }
    }
    _getUniformDataChanges() {
      const t = this._dataChanges
      if (!t || !t.length) return
      this._dataChanges = []
      const n = this.data.datasets.length,
        s = o =>
          new Set(
            t
              .filter(r => r[0] === o)
              .map((r, a) => a + ',' + r.splice(1).join(',')),
          ),
        i = s(0)
      for (let o = 1; o < n; o++) if (!mu(i, s(o))) return
      return Array.from(i)
        .map(o => o.split(','))
        .map(o => ({ method: o[1], start: +o[2], count: +o[3] }))
    }
    _updateLayout(t) {
      if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return
      Sn.update(this, this.width, this.height, t)
      const n = this.chartArea,
        s = n.width <= 0 || n.height <= 0
      ;(this._layers = []),
        Tt(
          this.boxes,
          i => {
            ;(s && i.position === 'chartArea') ||
              (i.configure && i.configure(), this._layers.push(...i._layers()))
          },
          this,
        ),
        this._layers.forEach((i, o) => {
          i._idx = o
        }),
        this.notifyPlugins('afterLayout')
    }
    _updateDatasets(t) {
      if (
        this.notifyPlugins('beforeDatasetsUpdate', {
          mode: t,
          cancelable: !0,
        }) !== !1
      ) {
        for (let n = 0, s = this.data.datasets.length; n < s; ++n)
          this.getDatasetMeta(n).controller.configure()
        for (let n = 0, s = this.data.datasets.length; n < s; ++n)
          this._updateDataset(n, Pn(t) ? t({ datasetIndex: n }) : t)
        this.notifyPlugins('afterDatasetsUpdate', { mode: t })
      }
    }
    _updateDataset(t, n) {
      const s = this.getDatasetMeta(t),
        i = { meta: s, index: t, mode: n, cancelable: !0 }
      this.notifyPlugins('beforeDatasetUpdate', i) !== !1 &&
        (s.controller._update(n),
        (i.cancelable = !1),
        this.notifyPlugins('afterDatasetUpdate', i))
    }
    render() {
      this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
        (Xe.has(this)
          ? this.attached && !Xe.running(this) && Xe.start(this)
          : (this.draw(), td({ chart: this })))
    }
    draw() {
      let t
      if (this._resizeBeforeDraw) {
        const { width: s, height: i } = this._resizeBeforeDraw
        ;(this._resizeBeforeDraw = null), this._resize(s, i)
      }
      if (
        (this.clear(),
        this.width <= 0 ||
          this.height <= 0 ||
          this.notifyPlugins('beforeDraw', { cancelable: !0 }) === !1)
      )
        return
      const n = this._layers
      for (t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(this.chartArea)
      for (this._drawDatasets(); t < n.length; ++t) n[t].draw(this.chartArea)
      this.notifyPlugins('afterDraw')
    }
    _getSortedDatasetMetas(t) {
      const n = this._sortedMetasets,
        s = []
      let i, o
      for (i = 0, o = n.length; i < o; ++i) {
        const r = n[i]
        ;(!t || r.visible) && s.push(r)
      }
      return s
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0)
    }
    _drawDatasets() {
      if (this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) === !1)
        return
      const t = this.getSortedVisibleDatasetMetas()
      for (let n = t.length - 1; n >= 0; --n) this._drawDataset(t[n])
      this.notifyPlugins('afterDatasetsDraw')
    }
    _drawDataset(t) {
      const n = this.ctx,
        s = t._clip,
        i = !s.disabled,
        o = Ww(t, this.chartArea),
        r = { meta: t, index: t.index, cancelable: !0 }
      this.notifyPlugins('beforeDatasetDraw', r) !== !1 &&
        (i &&
          _c(n, {
            left: s.left === !1 ? 0 : o.left - s.left,
            right: s.right === !1 ? this.width : o.right + s.right,
            top: s.top === !1 ? 0 : o.top - s.top,
            bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom,
          }),
        t.controller.draw(),
        i && bc(n),
        (r.cancelable = !1),
        this.notifyPlugins('afterDatasetDraw', r))
    }
    isPointInArea(t) {
      return cg(t, this.chartArea, this._minPadding)
    }
    getElementsAtEventForMode(t, n, s, i) {
      const o = HE.modes[n]
      return typeof o == 'function' ? o(this, t, s, i) : []
    }
    getDatasetMeta(t) {
      const n = this.data.datasets[t],
        s = this._metasets
      let i = s.filter(o => o && o._dataset === n).pop()
      return (
        i ||
          ((i = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (n && n.order) || 0,
            index: t,
            _dataset: n,
            _parsed: [],
            _sorted: !1,
          }),
          s.push(i)),
        i
      )
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = Xs(null, { chart: this, type: 'chart' }))
      )
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length
    }
    isDatasetVisible(t) {
      const n = this.data.datasets[t]
      if (!n) return !1
      const s = this.getDatasetMeta(t)
      return typeof s.hidden == 'boolean' ? !s.hidden : !n.hidden
    }
    setDatasetVisibility(t, n) {
      const s = this.getDatasetMeta(t)
      s.hidden = !n
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t]
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t]
    }
    _updateVisibility(t, n, s) {
      const i = s ? 'show' : 'hide',
        o = this.getDatasetMeta(t),
        r = o.controller._resolveAnimations(void 0, i)
      fr(n)
        ? ((o.data[n].hidden = !s), this.update())
        : (this.setDatasetVisibility(t, s),
          r.update(o, { visible: s }),
          this.update(a => (a.datasetIndex === t ? i : void 0)))
    }
    hide(t, n) {
      this._updateVisibility(t, n, !1)
    }
    show(t, n) {
      this._updateVisibility(t, n, !0)
    }
    _destroyDatasetMeta(t) {
      const n = this._metasets[t]
      n && n.controller && n.controller._destroy(), delete this._metasets[t]
    }
    _stop() {
      let t, n
      for (
        this.stop(), Xe.remove(this), t = 0, n = this.data.datasets.length;
        t < n;
        ++t
      )
        this._destroyDatasetMeta(t)
    }
    destroy() {
      this.notifyPlugins('beforeDestroy')
      const { canvas: t, ctx: n } = this
      this._stop(),
        this.config.clearCache(),
        t &&
          (this.unbindEvents(),
          Tu(t, n),
          this.platform.releaseContext(n),
          (this.canvas = null),
          (this.ctx = null)),
        delete Go[this.id],
        this.notifyPlugins('afterDestroy')
    }
    toBase64Image(...t) {
      return this.canvas.toDataURL(...t)
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : (this.attached = !0)
    }
    bindUserEvents() {
      const t = this._listeners,
        n = this.platform,
        s = (o, r) => {
          n.addEventListener(this, o, r), (t[o] = r)
        },
        i = (o, r, a) => {
          ;(o.offsetX = r), (o.offsetY = a), this._eventHandler(o)
        }
      Tt(this.options.events, o => s(o, i))
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {})
      const t = this._responsiveListeners,
        n = this.platform,
        s = (l, c) => {
          n.addEventListener(this, l, c), (t[l] = c)
        },
        i = (l, c) => {
          t[l] && (n.removeEventListener(this, l, c), delete t[l])
        },
        o = (l, c) => {
          this.canvas && this.resize(l, c)
        }
      let r
      const a = () => {
        i('attach', a),
          (this.attached = !0),
          this.resize(),
          s('resize', o),
          s('detach', r)
      }
      ;(r = () => {
        ;(this.attached = !1),
          i('resize', o),
          this._stop(),
          this._resize(0, 0),
          s('attach', a)
      }),
        n.isAttached(this.canvas) ? a() : r()
    }
    unbindEvents() {
      Tt(this._listeners, (t, n) => {
        this.platform.removeEventListener(this, n, t)
      }),
        (this._listeners = {}),
        Tt(this._responsiveListeners, (t, n) => {
          this.platform.removeEventListener(this, n, t)
        }),
        (this._responsiveListeners = void 0)
    }
    updateHoverStyle(t, n, s) {
      const i = s ? 'set' : 'remove'
      let o, r, a, l
      for (
        n === 'dataset' &&
          ((o = this.getDatasetMeta(t[0].datasetIndex)),
          o.controller['_' + i + 'DatasetHoverStyle']()),
          a = 0,
          l = t.length;
        a < l;
        ++a
      ) {
        r = t[a]
        const c = r && this.getDatasetMeta(r.datasetIndex).controller
        c && c[i + 'HoverStyle'](r.element, r.datasetIndex, r.index)
      }
    }
    getActiveElements() {
      return this._active || []
    }
    setActiveElements(t) {
      const n = this._active || [],
        s = t.map(({ datasetIndex: o, index: r }) => {
          const a = this.getDatasetMeta(o)
          if (!a) throw new Error('No dataset found at index ' + o)
          return { datasetIndex: o, element: a.data[r], index: r }
        })
      !lr(s, n) &&
        ((this._active = s),
        (this._lastEvent = null),
        this._updateHoverStyles(s, n))
    }
    notifyPlugins(t, n, s) {
      return this._plugins.notify(this, t, n, s)
    }
    isPluginEnabled(t) {
      return this._plugins._cache.filter(n => n.plugin.id === t).length === 1
    }
    _updateHoverStyles(t, n, s) {
      const i = this.options.hover,
        o = (l, c) =>
          l.filter(
            f =>
              !c.some(
                u => f.datasetIndex === u.datasetIndex && f.index === u.index,
              ),
          ),
        r = o(n, t),
        a = s ? t : o(t, n)
      r.length && this.updateHoverStyle(r, i.mode, !1),
        a.length && i.mode && this.updateHoverStyle(a, i.mode, !0)
    }
    _eventHandler(t, n) {
      const s = {
          event: t,
          replay: n,
          cancelable: !0,
          inChartArea: this.isPointInArea(t),
        },
        i = r =>
          (r.options.events || this.options.events).includes(t.native.type)
      if (this.notifyPlugins('beforeEvent', s, i) === !1) return
      const o = this._handleEvent(t, n, s.inChartArea)
      return (
        (s.cancelable = !1),
        this.notifyPlugins('afterEvent', s, i),
        (o || s.changed) && this.render(),
        this
      )
    }
    _handleEvent(t, n, s) {
      const { _active: i = [], options: o } = this,
        r = n,
        a = this._getActiveElements(t, i, s, r),
        l = Ax(t),
        c = Bw(t, this._lastEvent, s, l)
      s &&
        ((this._lastEvent = null),
        Mt(o.onHover, [t, a, this], this),
        l && Mt(o.onClick, [t, a, this], this))
      const f = !lr(a, i)
      return (
        (f || n) && ((this._active = a), this._updateHoverStyles(a, i, n)),
        (this._lastEvent = c),
        f
      )
    }
    _getActiveElements(t, n, s, i) {
      if (t.type === 'mouseout') return []
      if (!s) return n
      const o = this.options.hover
      return this.getElementsAtEventForMode(t, o.mode, o, i)
    }
  }),
  pt(bn, 'defaults', It),
  pt(bn, 'instances', Go),
  pt(bn, 'overrides', as),
  pt(bn, 'registry', Re),
  pt(bn, 'version', Fw),
  pt(bn, 'getChart', ed),
  bn)
function nd() {
  return Tt(zr.instances, e => e._plugins.invalidate())
}
function Vw(e, t, n) {
  const {
    startAngle: s,
    pixelMargin: i,
    x: o,
    y: r,
    outerRadius: a,
    innerRadius: l,
  } = t
  let c = i / a
  e.beginPath(),
    e.arc(o, r, a, s - c, n + c),
    l > i
      ? ((c = i / l), e.arc(o, r, l, n + c, s - c, !0))
      : e.arc(o, r, i, n + $t, s - $t),
    e.closePath(),
    e.clip()
}
function Uw(e) {
  return vc(e, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd'])
}
function Yw(e, t, n, s) {
  const i = Uw(e.options.borderRadius),
    o = (n - t) / 2,
    r = Math.min(o, (s * t) / 2),
    a = l => {
      const c = ((n - Math.min(o, l)) * s) / 2
      return be(l, 0, Math.min(o, c))
    }
  return {
    outerStart: a(i.outerStart),
    outerEnd: a(i.outerEnd),
    innerStart: be(i.innerStart, 0, r),
    innerEnd: be(i.innerEnd, 0, r),
  }
}
function ms(e, t, n, s) {
  return { x: n + e * Math.cos(t), y: s + e * Math.sin(t) }
}
function _r(e, t, n, s, i, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: f } = t,
    u = Math.max(t.outerRadius + s + n - c, 0),
    d = f > 0 ? f + s + n + c : 0
  let h = 0
  const _ = i - l
  if (s) {
    const W = f > 0 ? f - s : 0,
      k = u > 0 ? u - s : 0,
      N = (W + k) / 2,
      H = N !== 0 ? (_ * N) / (N + s) : _
    h = (_ - H) / 2
  }
  const g = Math.max(0.001, _ * u - n / Ft) / u,
    v = (_ - g) / 2,
    m = l + v + h,
    y = i - v - h,
    {
      outerStart: E,
      outerEnd: x,
      innerStart: T,
      innerEnd: P,
    } = Yw(t, d, u, y - m),
    R = u - E,
    q = u - x,
    J = m + E / R,
    G = y - x / q,
    tt = d + T,
    U = d + P,
    rt = m + T / tt,
    At = y - P / U
  if ((e.beginPath(), o)) {
    const W = (J + G) / 2
    if ((e.arc(r, a, u, J, W), e.arc(r, a, u, W, G), x > 0)) {
      const at = ms(q, G, r, a)
      e.arc(at.x, at.y, x, G, y + $t)
    }
    const k = ms(U, y, r, a)
    if ((e.lineTo(k.x, k.y), P > 0)) {
      const at = ms(U, At, r, a)
      e.arc(at.x, at.y, P, y + $t, At + Math.PI)
    }
    const N = (y - P / d + (m + T / d)) / 2
    if (
      (e.arc(r, a, d, y - P / d, N, !0),
      e.arc(r, a, d, N, m + T / d, !0),
      T > 0)
    ) {
      const at = ms(tt, rt, r, a)
      e.arc(at.x, at.y, T, rt + Math.PI, m - $t)
    }
    const H = ms(R, m, r, a)
    if ((e.lineTo(H.x, H.y), E > 0)) {
      const at = ms(R, J, r, a)
      e.arc(at.x, at.y, E, m - $t, J)
    }
  } else {
    e.moveTo(r, a)
    const W = Math.cos(J) * u + r,
      k = Math.sin(J) * u + a
    e.lineTo(W, k)
    const N = Math.cos(G) * u + r,
      H = Math.sin(G) * u + a
    e.lineTo(N, H)
  }
  e.closePath()
}
function Kw(e, t, n, s, i) {
  const { fullCircles: o, startAngle: r, circumference: a } = t
  let l = t.endAngle
  if (o) {
    _r(e, t, n, s, l, i)
    for (let c = 0; c < o; ++c) e.fill()
    isNaN(a) || (l = r + (a % Rt || Rt))
  }
  return _r(e, t, n, s, l, i), e.fill(), l
}
function qw(e, t, n, s, i) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t,
    {
      borderWidth: c,
      borderJoinStyle: f,
      borderDash: u,
      borderDashOffset: d,
    } = l,
    h = l.borderAlign === 'inner'
  if (!c) return
  e.setLineDash(u || []),
    (e.lineDashOffset = d),
    h
      ? ((e.lineWidth = c * 2), (e.lineJoin = f || 'round'))
      : ((e.lineWidth = c), (e.lineJoin = f || 'bevel'))
  let _ = t.endAngle
  if (o) {
    _r(e, t, n, s, _, i)
    for (let g = 0; g < o; ++g) e.stroke()
    isNaN(a) || (_ = r + (a % Rt || Rt))
  }
  h && Vw(e, t, _), o || (_r(e, t, n, s, _, i), e.stroke())
}
class vi extends fo {
  constructor(n) {
    super()
    pt(this, 'circumference')
    pt(this, 'endAngle')
    pt(this, 'fullCircles')
    pt(this, 'innerRadius')
    pt(this, 'outerRadius')
    pt(this, 'pixelMargin')
    pt(this, 'startAngle')
    ;(this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      n && Object.assign(this, n)
  }
  inRange(n, s, i) {
    const o = this.getProps(['x', 'y'], i),
      { angle: r, distance: a } = tg(o, { x: n, y: s }),
      {
        startAngle: l,
        endAngle: c,
        innerRadius: f,
        outerRadius: u,
        circumference: d,
      } = this.getProps(
        [
          'startAngle',
          'endAngle',
          'innerRadius',
          'outerRadius',
          'circumference',
        ],
        i,
      ),
      h = (this.options.spacing + this.options.borderWidth) / 2,
      _ = Ot(d, c - l),
      g = hr(r, l, c) && l !== c,
      v = _ >= Rt || g,
      m = mi(a, f + h, u + h)
    return v && m
  }
  getCenterPoint(n) {
    const {
        x: s,
        y: i,
        startAngle: o,
        endAngle: r,
        innerRadius: a,
        outerRadius: l,
      } = this.getProps(
        ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'],
        n,
      ),
      { offset: c, spacing: f } = this.options,
      u = (o + r) / 2,
      d = (a + l + f + c) / 2
    return { x: s + Math.cos(u) * d, y: i + Math.sin(u) * d }
  }
  tooltipPosition(n) {
    return this.getCenterPoint(n)
  }
  draw(n) {
    const { options: s, circumference: i } = this,
      o = (s.offset || 0) / 4,
      r = (s.spacing || 0) / 2,
      a = s.circular
    if (
      ((this.pixelMargin = s.borderAlign === 'inner' ? 0.33 : 0),
      (this.fullCircles = i > Rt ? Math.floor(i / Rt) : 0),
      i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return
    n.save()
    const l = (this.startAngle + this.endAngle) / 2
    n.translate(Math.cos(l) * o, Math.sin(l) * o)
    const c = 1 - Math.sin(Math.min(Ft, i || 0)),
      f = o * c
    ;(n.fillStyle = s.backgroundColor),
      (n.strokeStyle = s.borderColor),
      Kw(n, this, f, r, a),
      qw(n, this, f, r, a),
      n.restore()
  }
}
pt(vi, 'id', 'arc'),
  pt(vi, 'defaults', {
    borderAlign: 'center',
    borderColor: '#fff',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
  }),
  pt(vi, 'defaultRoutes', { backgroundColor: 'backgroundColor' }),
  pt(vi, 'descriptors', {
    _scriptable: !0,
    _indexable: n => n !== 'borderDash',
  })
const sd = (e, t) => {
    let { boxHeight: n = t, boxWidth: s = t } = e
    return (
      e.usePointStyle &&
        ((n = Math.min(n, t)), (s = e.pointStyleWidth || Math.min(s, t))),
      { boxWidth: s, boxHeight: n, itemHeight: Math.max(t, n) }
    )
  },
  Gw = (e, t) =>
    e !== null &&
    t !== null &&
    e.datasetIndex === t.datasetIndex &&
    e.index === t.index
class id extends fo {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0)
  }
  update(t, n, s) {
    ;(this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = s),
      this.setDimensions(),
      this.buildLabels(),
      this.fit()
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height))
  }
  buildLabels() {
    const t = this.options.labels || {}
    let n = Mt(t.generateLabels, [this.chart], this) || []
    t.filter && (n = n.filter(s => t.filter(s, this.chart.data))),
      t.sort && (n = n.sort((s, i) => t.sort(s, i, this.chart.data))),
      this.options.reverse && n.reverse(),
      (this.legendItems = n)
  }
  fit() {
    const { options: t, ctx: n } = this
    if (!t.display) {
      this.width = this.height = 0
      return
    }
    const s = t.labels,
      i = ne(s.font),
      o = i.size,
      r = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: l } = sd(s, o)
    let c, f
    ;(n.font = i.string),
      this.isHorizontal()
        ? ((c = this.maxWidth), (f = this._fitRows(r, o, a, l) + 10))
        : ((f = this.maxHeight), (c = this._fitCols(r, i, a, l) + 10)),
      (this.width = Math.min(c, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(f, t.maxHeight || this.maxHeight))
  }
  _fitRows(t, n, s, i) {
    const {
        ctx: o,
        maxWidth: r,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.lineWidths = [0]),
      f = i + a
    let u = t
    ;(o.textAlign = 'left'), (o.textBaseline = 'middle')
    let d = -1,
      h = -f
    return (
      this.legendItems.forEach((_, g) => {
        const v = s + n / 2 + o.measureText(_.text).width
        ;(g === 0 || c[c.length - 1] + v + 2 * a > r) &&
          ((u += f), (c[c.length - (g > 0 ? 0 : 1)] = 0), (h += f), d++),
          (l[g] = { left: 0, top: h, row: d, width: v, height: i }),
          (c[c.length - 1] += v + a)
      }),
      u
    )
  }
  _fitCols(t, n, s, i) {
    const {
        ctx: o,
        maxHeight: r,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.columnSizes = []),
      f = r - t
    let u = a,
      d = 0,
      h = 0,
      _ = 0,
      g = 0
    return (
      this.legendItems.forEach((v, m) => {
        const { itemWidth: y, itemHeight: E } = Xw(s, n, o, v, i)
        m > 0 &&
          h + E + 2 * a > f &&
          ((u += d + a),
          c.push({ width: d, height: h }),
          (_ += d + a),
          g++,
          (d = h = 0)),
          (l[m] = { left: _, top: h, col: g, width: y, height: E }),
          (d = Math.max(d, y)),
          (h += E + a)
      }),
      (u += d),
      c.push({ width: d, height: h }),
      u
    )
  }
  adjustHitBoxes() {
    if (!this.options.display) return
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: n,
        options: {
          align: s,
          labels: { padding: i },
          rtl: o,
        },
      } = this,
      r = Ds(o, this.left, this.width)
    if (this.isHorizontal()) {
      let a = 0,
        l = le(s, this.left + i, this.right - this.lineWidths[a])
      for (const c of n)
        a !== c.row &&
          ((a = c.row),
          (l = le(s, this.left + i, this.right - this.lineWidths[a]))),
          (c.top += this.top + t + i),
          (c.left = r.leftForLtr(r.x(l), c.width)),
          (l += c.width + i)
    } else {
      let a = 0,
        l = le(s, this.top + t + i, this.bottom - this.columnSizes[a].height)
      for (const c of n)
        c.col !== a &&
          ((a = c.col),
          (l = le(
            s,
            this.top + t + i,
            this.bottom - this.columnSizes[a].height,
          ))),
          (c.top = l),
          (c.left += this.left + i),
          (c.left = r.leftForLtr(r.x(c.left), c.width)),
          (l += c.height + i)
    }
  }
  isHorizontal() {
    return this.options.position === 'top' || this.options.position === 'bottom'
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx
      _c(t, this), this._draw(), bc(t)
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: s, ctx: i } = this,
      { align: o, labels: r } = t,
      a = It.color,
      l = Ds(t.rtl, this.left, this.width),
      c = ne(r.font),
      { padding: f } = r,
      u = c.size,
      d = u / 2
    let h
    this.drawTitle(),
      (i.textAlign = l.textAlign('left')),
      (i.textBaseline = 'middle'),
      (i.lineWidth = 0.5),
      (i.font = c.string)
    const { boxWidth: _, boxHeight: g, itemHeight: v } = sd(r, u),
      m = function (P, R, q) {
        if (isNaN(_) || _ <= 0 || isNaN(g) || g < 0) return
        i.save()
        const J = Ot(q.lineWidth, 1)
        if (
          ((i.fillStyle = Ot(q.fillStyle, a)),
          (i.lineCap = Ot(q.lineCap, 'butt')),
          (i.lineDashOffset = Ot(q.lineDashOffset, 0)),
          (i.lineJoin = Ot(q.lineJoin, 'miter')),
          (i.lineWidth = J),
          (i.strokeStyle = Ot(q.strokeStyle, a)),
          i.setLineDash(Ot(q.lineDash, [])),
          r.usePointStyle)
        ) {
          const G = {
              radius: (g * Math.SQRT2) / 2,
              pointStyle: q.pointStyle,
              rotation: q.rotation,
              borderWidth: J,
            },
            tt = l.xPlus(P, _ / 2),
            U = R + d
          lg(i, G, tt, U, r.pointStyleWidth && _)
        } else {
          const G = R + Math.max((u - g) / 2, 0),
            tt = l.leftForLtr(P, _),
            U = Ri(q.borderRadius)
          i.beginPath(),
            Object.values(U).some(rt => rt !== 0)
              ? yl(i, { x: tt, y: G, w: _, h: g, radius: U })
              : i.rect(tt, G, _, g),
            i.fill(),
            J !== 0 && i.stroke()
        }
        i.restore()
      },
      y = function (P, R, q) {
        pr(i, q.text, P, R + v / 2, c, {
          strikethrough: q.hidden,
          textAlign: l.textAlign(q.textAlign),
        })
      },
      E = this.isHorizontal(),
      x = this._computeTitleHeight()
    E
      ? (h = {
          x: le(o, this.left + f, this.right - s[0]),
          y: this.top + f + x,
          line: 0,
        })
      : (h = {
          x: this.left + f,
          y: le(o, this.top + x + f, this.bottom - n[0].height),
          line: 0,
        }),
      pg(this.ctx, t.textDirection)
    const T = v + f
    this.legendItems.forEach((P, R) => {
      ;(i.strokeStyle = P.fontColor), (i.fillStyle = P.fontColor)
      const q = i.measureText(P.text).width,
        J = l.textAlign(P.textAlign || (P.textAlign = r.textAlign)),
        G = _ + d + q
      let tt = h.x,
        U = h.y
      l.setWidth(this.width),
        E
          ? R > 0 &&
            tt + G + f > this.right &&
            ((U = h.y += T),
            h.line++,
            (tt = h.x = le(o, this.left + f, this.right - s[h.line])))
          : R > 0 &&
            U + T > this.bottom &&
            ((tt = h.x = tt + n[h.line].width + f),
            h.line++,
            (U = h.y = le(o, this.top + x + f, this.bottom - n[h.line].height)))
      const rt = l.x(tt)
      if (
        (m(rt, U, P),
        (tt = Nx(J, tt + _ + d, E ? tt + G : this.right, t.rtl)),
        y(l.x(tt), U, P),
        E)
      )
        h.x += G + f
      else if (typeof P.text != 'string') {
        const At = c.lineHeight
        h.y += Og(P, At) + f
      } else h.y += T
    }),
      gg(this.ctx, t.textDirection)
  }
  drawTitle() {
    const t = this.options,
      n = t.title,
      s = ne(n.font),
      i = ke(n.padding)
    if (!n.display) return
    const o = Ds(t.rtl, this.left, this.width),
      r = this.ctx,
      a = n.position,
      l = s.size / 2,
      c = i.top + l
    let f,
      u = this.left,
      d = this.width
    if (this.isHorizontal())
      (d = Math.max(...this.lineWidths)),
        (f = this.top + c),
        (u = le(t.align, u, this.right - d))
    else {
      const _ = this.columnSizes.reduce((g, v) => Math.max(g, v.height), 0)
      f =
        c +
        le(
          t.align,
          this.top,
          this.bottom - _ - t.labels.padding - this._computeTitleHeight(),
        )
    }
    const h = le(a, u, u + d)
    ;(r.textAlign = o.textAlign(ig(a))),
      (r.textBaseline = 'middle'),
      (r.strokeStyle = n.color),
      (r.fillStyle = n.color),
      (r.font = s.string),
      pr(r, n.text, h, f, s)
  }
  _computeTitleHeight() {
    const t = this.options.title,
      n = ne(t.font),
      s = ke(t.padding)
    return t.display ? n.lineHeight + s.height : 0
  }
  _getLegendItemAt(t, n) {
    let s, i, o
    if (mi(t, this.left, this.right) && mi(n, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (
          ((i = o[s]),
          mi(t, i.left, i.left + i.width) && mi(n, i.top, i.top + i.height))
        )
          return this.legendItems[s]
    }
    return null
  }
  handleEvent(t) {
    const n = this.options
    if (!Zw(t.type, n)) return
    const s = this._getLegendItemAt(t.x, t.y)
    if (t.type === 'mousemove' || t.type === 'mouseout') {
      const i = this._hoveredItem,
        o = Gw(i, s)
      i && !o && Mt(n.onLeave, [t, i, this], this),
        (this._hoveredItem = s),
        s && !o && Mt(n.onHover, [t, s, this], this)
    } else s && Mt(n.onClick, [t, s, this], this)
  }
}
function Xw(e, t, n, s, i) {
  const o = Qw(s, e, t, n),
    r = Jw(i, s, t.lineHeight)
  return { itemWidth: o, itemHeight: r }
}
function Qw(e, t, n, s) {
  let i = e.text
  return (
    i &&
      typeof i != 'string' &&
      (i = i.reduce((o, r) => (o.length > r.length ? o : r))),
    t + n.size / 2 + s.measureText(i).width
  )
}
function Jw(e, t, n) {
  let s = e
  return typeof t.text != 'string' && (s = Og(t, n)), s
}
function Og(e, t) {
  const n = e.text ? e.text.length : 0
  return t * n
}
function Zw(e, t) {
  return !!(
    ((e === 'mousemove' || e === 'mouseout') && (t.onHover || t.onLeave)) ||
    (t.onClick && (e === 'click' || e === 'mouseup'))
  )
}
var tA = {
  id: 'legend',
  _element: id,
  start(e, t, n) {
    const s = (e.legend = new id({ ctx: e.ctx, options: n, chart: e }))
    Sn.configure(e, s, n), Sn.addBox(e, s)
  },
  stop(e) {
    Sn.removeBox(e, e.legend), delete e.legend
  },
  beforeUpdate(e, t, n) {
    const s = e.legend
    Sn.configure(e, s, n), (s.options = n)
  },
  afterUpdate(e) {
    const t = e.legend
    t.buildLabels(), t.adjustHitBoxes()
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event)
  },
  defaults: {
    display: !0,
    position: 'top',
    align: 'center',
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, n) {
      const s = t.datasetIndex,
        i = n.chart
      i.isDatasetVisible(s)
        ? (i.hide(s), (t.hidden = !0))
        : (i.show(s), (t.hidden = !1))
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: e => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets,
          {
            labels: {
              usePointStyle: n,
              pointStyle: s,
              textAlign: i,
              color: o,
              useBorderRadius: r,
              borderRadius: a,
            },
          } = e.legend.options
        return e._getSortedDatasetMetas().map(l => {
          const c = l.controller.getStyle(n ? 0 : void 0),
            f = ke(c.borderWidth)
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (f.width + f.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: s || c.pointStyle,
            rotation: c.rotation,
            textAlign: i || c.textAlign,
            borderRadius: r && (a || c.borderRadius),
            datasetIndex: l.index,
          }
        }, this)
      },
    },
    title: {
      color: e => e.chart.options.color,
      display: !1,
      position: 'center',
      text: '',
    },
  },
  descriptors: {
    _scriptable: e => !e.startsWith('on'),
    labels: {
      _scriptable: e => !['generateLabels', 'filter', 'sort'].includes(e),
    },
  },
}
const yi = {
  average(e) {
    if (!e.length) return !1
    let t,
      n,
      s = new Set(),
      i = 0,
      o = 0
    for (t = 0, n = e.length; t < n; ++t) {
      const a = e[t].element
      if (a && a.hasValue()) {
        const l = a.tooltipPosition()
        s.add(l.x), (i += l.y), ++o
      }
    }
    return o === 0 || s.size === 0
      ? !1
      : { x: [...s].reduce((a, l) => a + l) / s.size, y: i / o }
  },
  nearest(e, t) {
    if (!e.length) return !1
    let n = t.x,
      s = t.y,
      i = Number.POSITIVE_INFINITY,
      o,
      r,
      a
    for (o = 0, r = e.length; o < r; ++o) {
      const l = e[o].element
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(),
          f = Cx(t, c)
        f < i && ((i = f), (a = l))
      }
    }
    if (a) {
      const l = a.tooltipPosition()
      ;(n = l.x), (s = l.y)
    }
    return { x: n, y: s }
  },
}
function Ie(e, t) {
  return t && (Bt(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
}
function Qe(e) {
  return (typeof e == 'string' || e instanceof String) &&
    e.indexOf(`
`) > -1
    ? e.split(`
`)
    : e
}
function eA(e, t) {
  const { element: n, datasetIndex: s, index: i } = t,
    o = e.getDatasetMeta(s).controller,
    { label: r, value: a } = o.getLabelAndValue(i)
  return {
    chart: e,
    label: r,
    parsed: o.getParsed(i),
    raw: e.data.datasets[s].data[i],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: i,
    datasetIndex: s,
    element: n,
  }
}
function od(e, t) {
  const n = e.chart.ctx,
    { body: s, footer: i, title: o } = e,
    { boxWidth: r, boxHeight: a } = t,
    l = ne(t.bodyFont),
    c = ne(t.titleFont),
    f = ne(t.footerFont),
    u = o.length,
    d = i.length,
    h = s.length,
    _ = ke(t.padding)
  let g = _.height,
    v = 0,
    m = s.reduce(
      (x, T) => x + T.before.length + T.lines.length + T.after.length,
      0,
    )
  if (
    ((m += e.beforeBody.length + e.afterBody.length),
    u &&
      (g += u * c.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom),
    m)
  ) {
    const x = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight
    g += h * x + (m - h) * l.lineHeight + (m - 1) * t.bodySpacing
  }
  d && (g += t.footerMarginTop + d * f.lineHeight + (d - 1) * t.footerSpacing)
  let y = 0
  const E = function (x) {
    v = Math.max(v, n.measureText(x).width + y)
  }
  return (
    n.save(),
    (n.font = c.string),
    Tt(e.title, E),
    (n.font = l.string),
    Tt(e.beforeBody.concat(e.afterBody), E),
    (y = t.displayColors ? r + 2 + t.boxPadding : 0),
    Tt(s, x => {
      Tt(x.before, E), Tt(x.lines, E), Tt(x.after, E)
    }),
    (y = 0),
    (n.font = f.string),
    Tt(e.footer, E),
    n.restore(),
    (v += _.width),
    { width: v, height: g }
  )
}
function nA(e, t) {
  const { y: n, height: s } = t
  return n < s / 2 ? 'top' : n > e.height - s / 2 ? 'bottom' : 'center'
}
function sA(e, t, n, s) {
  const { x: i, width: o } = s,
    r = n.caretSize + n.caretPadding
  if ((e === 'left' && i + o + r > t.width) || (e === 'right' && i - o - r < 0))
    return !0
}
function iA(e, t, n, s) {
  const { x: i, width: o } = n,
    {
      width: r,
      chartArea: { left: a, right: l },
    } = e
  let c = 'center'
  return (
    s === 'center'
      ? (c = i <= (a + l) / 2 ? 'left' : 'right')
      : i <= o / 2
        ? (c = 'left')
        : i >= r - o / 2 && (c = 'right'),
    sA(c, e, t, n) && (c = 'center'),
    c
  )
}
function rd(e, t, n) {
  const s = n.yAlign || t.yAlign || nA(e, n)
  return { xAlign: n.xAlign || t.xAlign || iA(e, t, n, s), yAlign: s }
}
function oA(e, t) {
  let { x: n, width: s } = e
  return t === 'right' ? (n -= s) : t === 'center' && (n -= s / 2), n
}
function rA(e, t, n) {
  let { y: s, height: i } = e
  return (
    t === 'top' ? (s += n) : t === 'bottom' ? (s -= i + n) : (s -= i / 2), s
  )
}
function ad(e, t, n, s) {
  const { caretSize: i, caretPadding: o, cornerRadius: r } = e,
    { xAlign: a, yAlign: l } = n,
    c = i + o,
    { topLeft: f, topRight: u, bottomLeft: d, bottomRight: h } = Ri(r)
  let _ = oA(t, a)
  const g = rA(t, l, c)
  return (
    l === 'center'
      ? a === 'left'
        ? (_ += c)
        : a === 'right' && (_ -= c)
      : a === 'left'
        ? (_ -= Math.max(f, d) + i)
        : a === 'right' && (_ += Math.max(u, h) + i),
    { x: be(_, 0, s.width - t.width), y: be(g, 0, s.height - t.height) }
  )
}
function Do(e, t, n) {
  const s = ke(n.padding)
  return t === 'center'
    ? e.x + e.width / 2
    : t === 'right'
      ? e.x + e.width - s.right
      : e.x + s.left
}
function ld(e) {
  return Ie([], Qe(e))
}
function aA(e, t, n) {
  return Xs(e, { tooltip: t, tooltipItems: n, type: 'tooltip' })
}
function cd(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks
  return n ? e.override(n) : e
}
const Cg = {
  beforeTitle: Ge,
  title(e) {
    if (e.length > 0) {
      const t = e[0],
        n = t.chart.data.labels,
        s = n ? n.length : 0
      if (this && this.options && this.options.mode === 'dataset')
        return t.dataset.label || ''
      if (t.label) return t.label
      if (s > 0 && t.dataIndex < s) return n[t.dataIndex]
    }
    return ''
  },
  afterTitle: Ge,
  beforeBody: Ge,
  beforeLabel: Ge,
  label(e) {
    if (this && this.options && this.options.mode === 'dataset')
      return e.label + ': ' + e.formattedValue || e.formattedValue
    let t = e.dataset.label || ''
    t && (t += ': ')
    const n = e.formattedValue
    return se(n) || (t += n), t
  },
  labelColor(e) {
    const n = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex)
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0,
    }
  },
  labelTextColor() {
    return this.options.bodyColor
  },
  labelPointStyle(e) {
    const n = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex)
    return { pointStyle: n.pointStyle, rotation: n.rotation }
  },
  afterLabel: Ge,
  afterBody: Ge,
  beforeFooter: Ge,
  footer: Ge,
  afterFooter: Ge,
}
function Jt(e, t, n, s) {
  const i = e[t].call(n, s)
  return typeof i > 'u' ? Cg[t].call(n, s) : i
}
var ja
let fd =
  ((ja = class extends fo {
    constructor(t) {
      super(),
        (this.opacity = 0),
        (this._active = []),
        (this._eventPosition = void 0),
        (this._size = void 0),
        (this._cachedAnimations = void 0),
        (this._tooltipItems = []),
        (this.$animations = void 0),
        (this.$context = void 0),
        (this.chart = t.chart),
        (this.options = t.options),
        (this.dataPoints = void 0),
        (this.title = void 0),
        (this.beforeBody = void 0),
        (this.body = void 0),
        (this.afterBody = void 0),
        (this.footer = void 0),
        (this.xAlign = void 0),
        (this.yAlign = void 0),
        (this.x = void 0),
        (this.y = void 0),
        (this.height = void 0),
        (this.width = void 0),
        (this.caretX = void 0),
        (this.caretY = void 0),
        (this.labelColors = void 0),
        (this.labelPointStyles = void 0),
        (this.labelTextColors = void 0)
    }
    initialize(t) {
      ;(this.options = t),
        (this._cachedAnimations = void 0),
        (this.$context = void 0)
    }
    _resolveAnimations() {
      const t = this._cachedAnimations
      if (t) return t
      const n = this.chart,
        s = this.options.setContext(this.getContext()),
        i = s.enabled && n.options.animation && s.animations,
        o = new mg(this.chart, i)
      return i._cacheable && (this._cachedAnimations = Object.freeze(o)), o
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = aA(this.chart.getContext(), this, this._tooltipItems))
      )
    }
    getTitle(t, n) {
      const { callbacks: s } = n,
        i = Jt(s, 'beforeTitle', this, t),
        o = Jt(s, 'title', this, t),
        r = Jt(s, 'afterTitle', this, t)
      let a = []
      return (a = Ie(a, Qe(i))), (a = Ie(a, Qe(o))), (a = Ie(a, Qe(r))), a
    }
    getBeforeBody(t, n) {
      return ld(Jt(n.callbacks, 'beforeBody', this, t))
    }
    getBody(t, n) {
      const { callbacks: s } = n,
        i = []
      return (
        Tt(t, o => {
          const r = { before: [], lines: [], after: [] },
            a = cd(s, o)
          Ie(r.before, Qe(Jt(a, 'beforeLabel', this, o))),
            Ie(r.lines, Jt(a, 'label', this, o)),
            Ie(r.after, Qe(Jt(a, 'afterLabel', this, o))),
            i.push(r)
        }),
        i
      )
    }
    getAfterBody(t, n) {
      return ld(Jt(n.callbacks, 'afterBody', this, t))
    }
    getFooter(t, n) {
      const { callbacks: s } = n,
        i = Jt(s, 'beforeFooter', this, t),
        o = Jt(s, 'footer', this, t),
        r = Jt(s, 'afterFooter', this, t)
      let a = []
      return (a = Ie(a, Qe(i))), (a = Ie(a, Qe(o))), (a = Ie(a, Qe(r))), a
    }
    _createItems(t) {
      const n = this._active,
        s = this.chart.data,
        i = [],
        o = [],
        r = []
      let a = [],
        l,
        c
      for (l = 0, c = n.length; l < c; ++l) a.push(eA(this.chart, n[l]))
      return (
        t.filter && (a = a.filter((f, u, d) => t.filter(f, u, d, s))),
        t.itemSort && (a = a.sort((f, u) => t.itemSort(f, u, s))),
        Tt(a, f => {
          const u = cd(t.callbacks, f)
          i.push(Jt(u, 'labelColor', this, f)),
            o.push(Jt(u, 'labelPointStyle', this, f)),
            r.push(Jt(u, 'labelTextColor', this, f))
        }),
        (this.labelColors = i),
        (this.labelPointStyles = o),
        (this.labelTextColors = r),
        (this.dataPoints = a),
        a
      )
    }
    update(t, n) {
      const s = this.options.setContext(this.getContext()),
        i = this._active
      let o,
        r = []
      if (!i.length) this.opacity !== 0 && (o = { opacity: 0 })
      else {
        const a = yi[s.position].call(this, i, this._eventPosition)
        ;(r = this._createItems(s)),
          (this.title = this.getTitle(r, s)),
          (this.beforeBody = this.getBeforeBody(r, s)),
          (this.body = this.getBody(r, s)),
          (this.afterBody = this.getAfterBody(r, s)),
          (this.footer = this.getFooter(r, s))
        const l = (this._size = od(this, s)),
          c = Object.assign({}, a, l),
          f = rd(this.chart, s, c),
          u = ad(s, c, f, this.chart)
        ;(this.xAlign = f.xAlign),
          (this.yAlign = f.yAlign),
          (o = {
            opacity: 1,
            x: u.x,
            y: u.y,
            width: l.width,
            height: l.height,
            caretX: a.x,
            caretY: a.y,
          })
      }
      ;(this._tooltipItems = r),
        (this.$context = void 0),
        o && this._resolveAnimations().update(this, o),
        t &&
          s.external &&
          s.external.call(this, { chart: this.chart, tooltip: this, replay: n })
    }
    drawCaret(t, n, s, i) {
      const o = this.getCaretPosition(t, s, i)
      n.lineTo(o.x1, o.y1), n.lineTo(o.x2, o.y2), n.lineTo(o.x3, o.y3)
    }
    getCaretPosition(t, n, s) {
      const { xAlign: i, yAlign: o } = this,
        { caretSize: r, cornerRadius: a } = s,
        { topLeft: l, topRight: c, bottomLeft: f, bottomRight: u } = Ri(a),
        { x: d, y: h } = t,
        { width: _, height: g } = n
      let v, m, y, E, x, T
      return (
        o === 'center'
          ? ((x = h + g / 2),
            i === 'left'
              ? ((v = d), (m = v - r), (E = x + r), (T = x - r))
              : ((v = d + _), (m = v + r), (E = x - r), (T = x + r)),
            (y = v))
          : (i === 'left'
              ? (m = d + Math.max(l, f) + r)
              : i === 'right'
                ? (m = d + _ - Math.max(c, u) - r)
                : (m = this.caretX),
            o === 'top'
              ? ((E = h), (x = E - r), (v = m - r), (y = m + r))
              : ((E = h + g), (x = E + r), (v = m + r), (y = m - r)),
            (T = E)),
        { x1: v, x2: m, x3: y, y1: E, y2: x, y3: T }
      )
    }
    drawTitle(t, n, s) {
      const i = this.title,
        o = i.length
      let r, a, l
      if (o) {
        const c = Ds(s.rtl, this.x, this.width)
        for (
          t.x = Do(this, s.titleAlign, s),
            n.textAlign = c.textAlign(s.titleAlign),
            n.textBaseline = 'middle',
            r = ne(s.titleFont),
            a = s.titleSpacing,
            n.fillStyle = s.titleColor,
            n.font = r.string,
            l = 0;
          l < o;
          ++l
        )
          n.fillText(i[l], c.x(t.x), t.y + r.lineHeight / 2),
            (t.y += r.lineHeight + a),
            l + 1 === o && (t.y += s.titleMarginBottom - a)
      }
    }
    _drawColorBox(t, n, s, i, o) {
      const r = this.labelColors[s],
        a = this.labelPointStyles[s],
        { boxHeight: l, boxWidth: c } = o,
        f = ne(o.bodyFont),
        u = Do(this, 'left', o),
        d = i.x(u),
        h = l < f.lineHeight ? (f.lineHeight - l) / 2 : 0,
        _ = n.y + h
      if (o.usePointStyle) {
        const g = {
            radius: Math.min(c, l) / 2,
            pointStyle: a.pointStyle,
            rotation: a.rotation,
            borderWidth: 1,
          },
          v = i.leftForLtr(d, c) + c / 2,
          m = _ + l / 2
        ;(t.strokeStyle = o.multiKeyBackground),
          (t.fillStyle = o.multiKeyBackground),
          Ou(t, g, v, m),
          (t.strokeStyle = r.borderColor),
          (t.fillStyle = r.backgroundColor),
          Ou(t, g, v, m)
      } else {
        ;(t.lineWidth = vt(r.borderWidth)
          ? Math.max(...Object.values(r.borderWidth))
          : r.borderWidth || 1),
          (t.strokeStyle = r.borderColor),
          t.setLineDash(r.borderDash || []),
          (t.lineDashOffset = r.borderDashOffset || 0)
        const g = i.leftForLtr(d, c),
          v = i.leftForLtr(i.xPlus(d, 1), c - 2),
          m = Ri(r.borderRadius)
        Object.values(m).some(y => y !== 0)
          ? (t.beginPath(),
            (t.fillStyle = o.multiKeyBackground),
            yl(t, { x: g, y: _, w: c, h: l, radius: m }),
            t.fill(),
            t.stroke(),
            (t.fillStyle = r.backgroundColor),
            t.beginPath(),
            yl(t, { x: v, y: _ + 1, w: c - 2, h: l - 2, radius: m }),
            t.fill())
          : ((t.fillStyle = o.multiKeyBackground),
            t.fillRect(g, _, c, l),
            t.strokeRect(g, _, c, l),
            (t.fillStyle = r.backgroundColor),
            t.fillRect(v, _ + 1, c - 2, l - 2))
      }
      t.fillStyle = this.labelTextColors[s]
    }
    drawBody(t, n, s) {
      const { body: i } = this,
        {
          bodySpacing: o,
          bodyAlign: r,
          displayColors: a,
          boxHeight: l,
          boxWidth: c,
          boxPadding: f,
        } = s,
        u = ne(s.bodyFont)
      let d = u.lineHeight,
        h = 0
      const _ = Ds(s.rtl, this.x, this.width),
        g = function (q) {
          n.fillText(q, _.x(t.x + h), t.y + d / 2), (t.y += d + o)
        },
        v = _.textAlign(r)
      let m, y, E, x, T, P, R
      for (
        n.textAlign = r,
          n.textBaseline = 'middle',
          n.font = u.string,
          t.x = Do(this, v, s),
          n.fillStyle = s.bodyColor,
          Tt(this.beforeBody, g),
          h = a && v !== 'right' ? (r === 'center' ? c / 2 + f : c + 2 + f) : 0,
          x = 0,
          P = i.length;
        x < P;
        ++x
      ) {
        for (
          m = i[x],
            y = this.labelTextColors[x],
            n.fillStyle = y,
            Tt(m.before, g),
            E = m.lines,
            a &&
              E.length &&
              (this._drawColorBox(n, t, x, _, s),
              (d = Math.max(u.lineHeight, l))),
            T = 0,
            R = E.length;
          T < R;
          ++T
        )
          g(E[T]), (d = u.lineHeight)
        Tt(m.after, g)
      }
      ;(h = 0), (d = u.lineHeight), Tt(this.afterBody, g), (t.y -= o)
    }
    drawFooter(t, n, s) {
      const i = this.footer,
        o = i.length
      let r, a
      if (o) {
        const l = Ds(s.rtl, this.x, this.width)
        for (
          t.x = Do(this, s.footerAlign, s),
            t.y += s.footerMarginTop,
            n.textAlign = l.textAlign(s.footerAlign),
            n.textBaseline = 'middle',
            r = ne(s.footerFont),
            n.fillStyle = s.footerColor,
            n.font = r.string,
            a = 0;
          a < o;
          ++a
        )
          n.fillText(i[a], l.x(t.x), t.y + r.lineHeight / 2),
            (t.y += r.lineHeight + s.footerSpacing)
      }
    }
    drawBackground(t, n, s, i) {
      const { xAlign: o, yAlign: r } = this,
        { x: a, y: l } = t,
        { width: c, height: f } = s,
        {
          topLeft: u,
          topRight: d,
          bottomLeft: h,
          bottomRight: _,
        } = Ri(i.cornerRadius)
      ;(n.fillStyle = i.backgroundColor),
        (n.strokeStyle = i.borderColor),
        (n.lineWidth = i.borderWidth),
        n.beginPath(),
        n.moveTo(a + u, l),
        r === 'top' && this.drawCaret(t, n, s, i),
        n.lineTo(a + c - d, l),
        n.quadraticCurveTo(a + c, l, a + c, l + d),
        r === 'center' && o === 'right' && this.drawCaret(t, n, s, i),
        n.lineTo(a + c, l + f - _),
        n.quadraticCurveTo(a + c, l + f, a + c - _, l + f),
        r === 'bottom' && this.drawCaret(t, n, s, i),
        n.lineTo(a + h, l + f),
        n.quadraticCurveTo(a, l + f, a, l + f - h),
        r === 'center' && o === 'left' && this.drawCaret(t, n, s, i),
        n.lineTo(a, l + u),
        n.quadraticCurveTo(a, l, a + u, l),
        n.closePath(),
        n.fill(),
        i.borderWidth > 0 && n.stroke()
    }
    _updateAnimationTarget(t) {
      const n = this.chart,
        s = this.$animations,
        i = s && s.x,
        o = s && s.y
      if (i || o) {
        const r = yi[t.position].call(this, this._active, this._eventPosition)
        if (!r) return
        const a = (this._size = od(this, t)),
          l = Object.assign({}, r, this._size),
          c = rd(n, t, l),
          f = ad(t, l, c, n)
        ;(i._to !== f.x || o._to !== f.y) &&
          ((this.xAlign = c.xAlign),
          (this.yAlign = c.yAlign),
          (this.width = a.width),
          (this.height = a.height),
          (this.caretX = r.x),
          (this.caretY = r.y),
          this._resolveAnimations().update(this, f))
      }
    }
    _willRender() {
      return !!this.opacity
    }
    draw(t) {
      const n = this.options.setContext(this.getContext())
      let s = this.opacity
      if (!s) return
      this._updateAnimationTarget(n)
      const i = { width: this.width, height: this.height },
        o = { x: this.x, y: this.y }
      s = Math.abs(s) < 0.001 ? 0 : s
      const r = ke(n.padding),
        a =
          this.title.length ||
          this.beforeBody.length ||
          this.body.length ||
          this.afterBody.length ||
          this.footer.length
      n.enabled &&
        a &&
        (t.save(),
        (t.globalAlpha = s),
        this.drawBackground(o, t, i, n),
        pg(t, n.textDirection),
        (o.y += r.top),
        this.drawTitle(o, t, n),
        this.drawBody(o, t, n),
        this.drawFooter(o, t, n),
        gg(t, n.textDirection),
        t.restore())
    }
    getActiveElements() {
      return this._active || []
    }
    setActiveElements(t, n) {
      const s = this._active,
        i = t.map(({ datasetIndex: a, index: l }) => {
          const c = this.chart.getDatasetMeta(a)
          if (!c) throw new Error('Cannot find a dataset at index ' + a)
          return { datasetIndex: a, element: c.data[l], index: l }
        }),
        o = !lr(s, i),
        r = this._positionChanged(i, n)
      ;(o || r) &&
        ((this._active = i),
        (this._eventPosition = n),
        (this._ignoreReplayEvents = !0),
        this.update(!0))
    }
    handleEvent(t, n, s = !0) {
      if (n && this._ignoreReplayEvents) return !1
      this._ignoreReplayEvents = !1
      const i = this.options,
        o = this._active || [],
        r = this._getActiveElements(t, o, n, s),
        a = this._positionChanged(r, t),
        l = n || !lr(r, o) || a
      return (
        l &&
          ((this._active = r),
          (i.enabled || i.external) &&
            ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, n))),
        l
      )
    }
    _getActiveElements(t, n, s, i) {
      const o = this.options
      if (t.type === 'mouseout') return []
      if (!i)
        return n.filter(
          a =>
            this.chart.data.datasets[a.datasetIndex] &&
            this.chart
              .getDatasetMeta(a.datasetIndex)
              .controller.getParsed(a.index) !== void 0,
        )
      const r = this.chart.getElementsAtEventForMode(t, o.mode, o, s)
      return o.reverse && r.reverse(), r
    }
    _positionChanged(t, n) {
      const { caretX: s, caretY: i, options: o } = this,
        r = yi[o.position].call(this, t, n)
      return r !== !1 && (s !== r.x || i !== r.y)
    }
  }),
  pt(ja, 'positioners', yi),
  ja)
var lA = {
  id: 'tooltip',
  _element: fd,
  positioners: yi,
  afterInit(e, t, n) {
    n && (e.tooltip = new fd({ chart: e, options: n }))
  },
  beforeUpdate(e, t, n) {
    e.tooltip && e.tooltip.initialize(n)
  },
  reset(e, t, n) {
    e.tooltip && e.tooltip.initialize(n)
  },
  afterDraw(e) {
    const t = e.tooltip
    if (t && t._willRender()) {
      const n = { tooltip: t }
      if (e.notifyPlugins('beforeTooltipDraw', { ...n, cancelable: !0 }) === !1)
        return
      t.draw(e.ctx), e.notifyPlugins('afterTooltipDraw', n)
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const n = t.replay
      e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0)
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: 'average',
    backgroundColor: 'rgba(0,0,0,0.8)',
    titleColor: '#fff',
    titleFont: { weight: 'bold' },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: 'left',
    bodyColor: '#fff',
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: 'left',
    footerColor: '#fff',
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: 'bold' },
    footerAlign: 'left',
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: '#fff',
    displayColors: !0,
    boxPadding: 0,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    animation: { duration: 400, easing: 'easeOutQuart' },
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
      },
      opacity: { easing: 'linear', duration: 200 },
    },
    callbacks: Cg,
  },
  defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
  descriptors: {
    _scriptable: e => e !== 'filter' && e !== 'itemSort' && e !== 'external',
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: 'animation' },
  },
  additionalOptionScopes: ['interaction'],
}
const Br = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  te = Object.keys(Br)
function ud(e, t) {
  return e - t
}
function dd(e, t) {
  if (se(t)) return null
  const n = e._adapter,
    { parser: s, round: i, isoWeekday: o } = e._parseOpts
  let r = t
  return (
    typeof s == 'function' && (r = s(r)),
    cn(r) || (r = typeof s == 'string' ? n.parse(r, s) : n.parse(r)),
    r === null
      ? null
      : (i &&
          (r =
            i === 'week' && (dr(o) || o === !0)
              ? n.startOf(r, 'isoWeek', o)
              : n.startOf(r, i)),
        +r)
  )
}
function hd(e, t, n, s) {
  const i = te.length
  for (let o = te.indexOf(e); o < i - 1; ++o) {
    const r = Br[te[o]],
      a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER
    if (r.common && Math.ceil((n - t) / (a * r.size)) <= s) return te[o]
  }
  return te[i - 1]
}
function cA(e, t, n, s, i) {
  for (let o = te.length - 1; o >= te.indexOf(n); o--) {
    const r = te[o]
    if (Br[r].common && e._adapter.diff(i, s, r) >= t - 1) return r
  }
  return te[n ? te.indexOf(n) : 0]
}
function fA(e) {
  for (let t = te.indexOf(e) + 1, n = te.length; t < n; ++t)
    if (Br[te[t]].common) return te[t]
}
function pd(e, t, n) {
  if (!n) e[t] = !0
  else if (n.length) {
    const { lo: s, hi: i } = mc(n, t),
      o = n[s] >= t ? n[s] : n[i]
    e[o] = !0
  }
}
function uA(e, t, n, s) {
  const i = e._adapter,
    o = +i.startOf(t[0].value, s),
    r = t[t.length - 1].value
  let a, l
  for (a = o; a <= r; a = +i.add(a, 1, s))
    (l = n[a]), l >= 0 && (t[l].major = !0)
  return t
}
function gd(e, t, n) {
  const s = [],
    i = {},
    o = t.length
  let r, a
  for (r = 0; r < o; ++r)
    (a = t[r]), (i[a] = r), s.push({ value: a, major: !1 })
  return o === 0 || !n ? s : uA(e, s, i, n)
}
class br extends jr {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = 'day'),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0)
  }
  init(t, n = {}) {
    const s = t.time || (t.time = {}),
      i = (this._adapter = new IE._date(t.adapters.date))
    i.init(n),
      Li(s.displayFormats, i.formats()),
      (this._parseOpts = {
        parser: s.parser,
        round: s.round,
        isoWeekday: s.isoWeekday,
      }),
      super.init(t),
      (this._normalized = n.normalized)
  }
  parse(t, n) {
    return t === void 0 ? null : dd(this, t)
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] })
  }
  determineDataLimits() {
    const t = this.options,
      n = this._adapter,
      s = t.time.unit || 'day'
    let { min: i, max: o, minDefined: r, maxDefined: a } = this.getUserBounds()
    function l(c) {
      !r && !isNaN(c.min) && (i = Math.min(i, c.min)),
        !a && !isNaN(c.max) && (o = Math.max(o, c.max))
    }
    ;(!r || !a) &&
      (l(this._getLabelBounds()),
      (t.bounds !== 'ticks' || t.ticks.source !== 'labels') &&
        l(this.getMinMax(!1))),
      (i = cn(i) && !isNaN(i) ? i : +n.startOf(Date.now(), s)),
      (o = cn(o) && !isNaN(o) ? o : +n.endOf(Date.now(), s) + 1),
      (this.min = Math.min(i, o - 1)),
      (this.max = Math.max(i + 1, o))
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps()
    let n = Number.POSITIVE_INFINITY,
      s = Number.NEGATIVE_INFINITY
    return t.length && ((n = t[0]), (s = t[t.length - 1])), { min: n, max: s }
  }
  buildTicks() {
    const t = this.options,
      n = t.time,
      s = t.ticks,
      i = s.source === 'labels' ? this.getLabelTimestamps() : this._generate()
    t.bounds === 'ticks' &&
      i.length &&
      ((this.min = this._userMin || i[0]),
      (this.max = this._userMax || i[i.length - 1]))
    const o = this.min,
      r = this.max,
      a = Px(i, o, r)
    return (
      (this._unit =
        n.unit ||
        (s.autoSkip
          ? hd(n.minUnit, this.min, this.max, this._getLabelCapacity(o))
          : cA(this, a.length, n.minUnit, this.min, this.max))),
      (this._majorUnit =
        !s.major.enabled || this._unit === 'year' ? void 0 : fA(this._unit)),
      this.initOffsets(i),
      t.reverse && a.reverse(),
      gd(this, a, this._majorUnit)
    )
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map(t => +t.value))
  }
  initOffsets(t = []) {
    let n = 0,
      s = 0,
      i,
      o
    this.options.offset &&
      t.length &&
      ((i = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (n = 1 - i)
        : (n = (this.getDecimalForValue(t[1]) - i) / 2),
      (o = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (s = o)
        : (s = (o - this.getDecimalForValue(t[t.length - 2])) / 2))
    const r = t.length < 3 ? 0.5 : 0.25
    ;(n = be(n, 0, r)),
      (s = be(s, 0, r)),
      (this._offsets = { start: n, end: s, factor: 1 / (n + 1 + s) })
  }
  _generate() {
    const t = this._adapter,
      n = this.min,
      s = this.max,
      i = this.options,
      o = i.time,
      r = o.unit || hd(o.minUnit, n, s, this._getLabelCapacity(n)),
      a = Ot(i.ticks.stepSize, 1),
      l = r === 'week' ? o.isoWeekday : !1,
      c = dr(l) || l === !0,
      f = {}
    let u = n,
      d,
      h
    if (
      (c && (u = +t.startOf(u, 'isoWeek', l)),
      (u = +t.startOf(u, c ? 'day' : r)),
      t.diff(s, n, r) > 1e5 * a)
    )
      throw new Error(
        n + ' and ' + s + ' are too far apart with stepSize of ' + a + ' ' + r,
      )
    const _ = i.ticks.source === 'data' && this.getDataTimestamps()
    for (d = u, h = 0; d < s; d = +t.add(d, a, r), h++) pd(f, d, _)
    return (
      (d === s || i.bounds === 'ticks' || h === 1) && pd(f, d, _),
      Object.keys(f)
        .sort(ud)
        .map(g => +g)
    )
  }
  getLabelForValue(t) {
    const n = this._adapter,
      s = this.options.time
    return s.tooltipFormat
      ? n.format(t, s.tooltipFormat)
      : n.format(t, s.displayFormats.datetime)
  }
  format(t, n) {
    const i = this.options.time.displayFormats,
      o = this._unit,
      r = n || i[o]
    return this._adapter.format(t, r)
  }
  _tickFormatFunction(t, n, s, i) {
    const o = this.options,
      r = o.ticks.callback
    if (r) return Mt(r, [t, n, s], this)
    const a = o.time.displayFormats,
      l = this._unit,
      c = this._majorUnit,
      f = l && a[l],
      u = c && a[c],
      d = s[n],
      h = c && u && d && d.major
    return this._adapter.format(t, i || (h ? u : f))
  }
  generateTickLabels(t) {
    let n, s, i
    for (n = 0, s = t.length; n < s; ++n)
      (i = t[n]), (i.label = this._tickFormatFunction(i.value, n, t))
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min)
  }
  getPixelForValue(t) {
    const n = this._offsets,
      s = this.getDecimalForValue(t)
    return this.getPixelForDecimal((n.start + s) * n.factor)
  }
  getValueForPixel(t) {
    const n = this._offsets,
      s = this.getDecimalForPixel(t) / n.factor - n.end
    return this.min + s * (this.max - this.min)
  }
  _getLabelSize(t) {
    const n = this.options.ticks,
      s = this.ctx.measureText(t).width,
      i = Gn(this.isHorizontal() ? n.maxRotation : n.minRotation),
      o = Math.cos(i),
      r = Math.sin(i),
      a = this._resolveTickFontOptions(0).size
    return { w: s * o + a * r, h: s * r + a * o }
  }
  _getLabelCapacity(t) {
    const n = this.options.time,
      s = n.displayFormats,
      i = s[n.unit] || s.millisecond,
      o = this._tickFormatFunction(t, 0, gd(this, [t], this._majorUnit), i),
      r = this._getLabelSize(o),
      a =
        Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) -
        1
    return a > 0 ? a : 1
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      n,
      s
    if (t.length) return t
    const i = this.getMatchingVisibleMetas()
    if (this._normalized && i.length)
      return (this._cache.data = i[0].controller.getAllParsedValues(this))
    for (n = 0, s = i.length; n < s; ++n)
      t = t.concat(i[n].controller.getAllParsedValues(this))
    return (this._cache.data = this.normalize(t))
  }
  getLabelTimestamps() {
    const t = this._cache.labels || []
    let n, s
    if (t.length) return t
    const i = this.getLabels()
    for (n = 0, s = i.length; n < s; ++n) t.push(dd(this, i[n]))
    return (this._cache.labels = this._normalized ? t : this.normalize(t))
  }
  normalize(t) {
    return Lx(t.sort(ud))
  }
}
pt(br, 'id', 'time'),
  pt(br, 'defaults', {
    bounds: 'data',
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: 'millisecond',
      displayFormats: {},
    },
    ticks: { source: 'auto', callback: !1, major: { enabled: !1 } },
  })
function Lo(e, t, n) {
  let s = 0,
    i = e.length - 1,
    o,
    r,
    a,
    l
  n
    ? (t >= e[s].pos && t <= e[i].pos && ({ lo: s, hi: i } = bl(e, 'pos', t)),
      ({ pos: o, time: a } = e[s]),
      ({ pos: r, time: l } = e[i]))
    : (t >= e[s].time &&
        t <= e[i].time &&
        ({ lo: s, hi: i } = bl(e, 'time', t)),
      ({ time: o, pos: a } = e[s]),
      ({ time: r, pos: l } = e[i]))
  const c = r - o
  return c ? a + ((l - a) * (t - o)) / c : a
}
class md extends br {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0)
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      n = (this._table = this.buildLookupTable(t))
    ;(this._minPos = Lo(n, this.min)),
      (this._tableRange = Lo(n, this.max) - this._minPos),
      super.initOffsets(t)
  }
  buildLookupTable(t) {
    const { min: n, max: s } = this,
      i = [],
      o = []
    let r, a, l, c, f
    for (r = 0, a = t.length; r < a; ++r)
      (c = t[r]), c >= n && c <= s && i.push(c)
    if (i.length < 2)
      return [
        { time: n, pos: 0 },
        { time: s, pos: 1 },
      ]
    for (r = 0, a = i.length; r < a; ++r)
      (f = i[r + 1]),
        (l = i[r - 1]),
        (c = i[r]),
        Math.round((f + l) / 2) !== c && o.push({ time: c, pos: r / (a - 1) })
    return o
  }
  _generate() {
    const t = this.min,
      n = this.max
    let s = super.getDataTimestamps()
    return (
      (!s.includes(t) || !s.length) && s.splice(0, 0, t),
      (!s.includes(n) || s.length === 1) && s.push(n),
      s.sort((i, o) => i - o)
    )
  }
  _getTimestampsForTable() {
    let t = this._cache.all || []
    if (t.length) return t
    const n = this.getDataTimestamps(),
      s = this.getLabelTimestamps()
    return (
      n.length && s.length
        ? (t = this.normalize(n.concat(s)))
        : (t = n.length ? n : s),
      (t = this._cache.all = t),
      t
    )
  }
  getDecimalForValue(t) {
    return (Lo(this._table, t) - this._minPos) / this._tableRange
  }
  getValueForPixel(t) {
    const n = this._offsets,
      s = this.getDecimalForPixel(t) / n.factor - n.end
    return Lo(this._table, s * this._tableRange + this._minPos, !0)
  }
}
pt(md, 'id', 'timeseries'), pt(md, 'defaults', br.defaults)
const kg = {
    data: { type: Object, required: !0 },
    options: { type: Object, default: () => ({}) },
    plugins: { type: Array, default: () => [] },
    datasetIdKey: { type: String, default: 'label' },
    updateMode: { type: String, default: void 0 },
  },
  dA = { ariaLabel: { type: String }, ariaDescribedby: { type: String } },
  hA = {
    type: { type: String, required: !0 },
    destroyDelay: { type: Number, default: 0 },
    ...kg,
    ...dA,
  },
  pA =
    Jh[0] === '2'
      ? (e, t) => Object.assign(e, { attrs: t })
      : (e, t) => Object.assign(e, t)
function _s(e) {
  return eo(e) ? bt(e) : e
}
function gA(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e
  return eo(t) ? new Proxy(e, {}) : e
}
function mA(e, t) {
  const n = e.options
  n && t && Object.assign(n, t)
}
function Mg(e, t) {
  e.labels = t
}
function Pg(e, t, n) {
  const s = []
  e.datasets = t.map(i => {
    const o = e.datasets.find(r => r[n] === i[n])
    return !o || !i.data || s.includes(o)
      ? { ...i }
      : (s.push(o), Object.assign(o, i), o)
  })
}
function _A(e, t) {
  const n = { labels: [], datasets: [] }
  return Mg(n, e.labels), Pg(n, e.datasets, t), n
}
const bA = so({
  props: hA,
  setup(e, t) {
    let { expose: n, slots: s } = t
    const i = bh(null),
      o = Wl(null)
    n({ chart: o })
    const r = () => {
        if (!i.value) return
        const { type: c, data: f, options: u, plugins: d, datasetIdKey: h } = e,
          _ = _A(f, h),
          g = gA(_, f)
        o.value = new zr(i.value, {
          type: c,
          data: g,
          options: { ...u },
          plugins: d,
        })
      },
      a = () => {
        const c = bt(o.value)
        c &&
          (e.destroyDelay > 0
            ? setTimeout(() => {
                c.destroy(), (o.value = null)
              }, e.destroyDelay)
            : (c.destroy(), (o.value = null)))
      },
      l = c => {
        c.update(e.updateMode)
      }
    return (
      Kl(r),
      ql(a),
      Ms(
        [() => e.options, () => e.data],
        (c, f) => {
          let [u, d] = c,
            [h, _] = f
          const g = bt(o.value)
          if (!g) return
          let v = !1
          if (u) {
            const m = _s(u),
              y = _s(h)
            m && m !== y && (mA(g, m), (v = !0))
          }
          if (d) {
            const m = _s(d.labels),
              y = _s(_.labels),
              E = _s(d.datasets),
              x = _s(_.datasets)
            m !== y && (Mg(g.config.data, m), (v = !0)),
              E && E !== x && (Pg(g.config.data, E, e.datasetIdKey), (v = !0))
          }
          v &&
            Vl(() => {
              l(g)
            })
        },
        { deep: !0 },
      ),
      () =>
        Is(
          'canvas',
          {
            role: 'img',
            ariaLabel: e.ariaLabel,
            ariaDescribedby: e.ariaDescribedby,
            ref: i,
          },
          [Is('p', {}, [s.default ? s.default() : ''])],
        )
    )
  },
})
function vA(e, t) {
  return (
    zr.register(t),
    so({
      props: kg,
      setup(n, s) {
        let { expose: i } = s
        const o = Wl(null),
          r = a => {
            o.value = a == null ? void 0 : a.chart
          }
        return i({ chart: o }), () => Is(bA, pA({ ref: r }, { type: e, ...n }))
      },
    })
  )
}
const yA = vA('doughnut', _i),
  xA = {
    labels: ['HTML/CSS', 'JavaScript', 'C# (.NET)', 'VueJs', 'ReactJs', 'AWS'],
    datasets: [
      {
        backgroundColor: [
          '#c96249',
          '#e48050',
          '#eec16c',
          '#819e89',
          '#82b2cd',
          '#a08ebd',
        ],
        data: [100, 90, 80, 70, 50, 20],
      },
    ],
  },
  EA = { responsive: !0, maintainAspectRatio: !1 },
  wA = Object.freeze(
    Object.defineProperty(
      { __proto__: null, data: xA, options: EA },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  AA = {
    data() {
      return wA
    },
  },
  SA = Object.assign(AA, {
    __name: 'ChartComponent',
    setup(e) {
      return (
        zr.register(vi, lA, tA),
        (t, n) => (
          dn(),
          qh(it(yA), { data: t.data, options: t.options }, null, 8, [
            'data',
            'options',
          ])
        )
      )
    },
  }),
  TA = {
    class:
      'w-100 d-flex flex-column justify-content-center align-items-center text-center mt-5 experience',
  },
  OA = { class: 'container-fluid px-0 mt-4' },
  CA = { class: 'row w-100 mb-5 mt-0 mx-0' },
  kA = { class: 'col-12 col-md-6 py-5' },
  MA = { class: 'col-12 col-md-6 h-100 my-auto' },
  PA = { class: 'list-group list-group-flush' },
  DA = {
    class: 'list-group-item d-flex justify-content-between bg-transparent',
  },
  LA = { class: 'pe-2' },
  IA = {
    class: 'list-group-item d-flex justify-content-between bg-transparent',
  },
  NA = { class: 'pe-2' },
  RA = {
    class: 'list-group-item d-flex justify-content-between bg-transparent',
  },
  $A = { class: 'pe-2' },
  FA = {
    class: 'list-group-item d-flex justify-content-between bg-transparent',
  },
  HA = { class: 'pe-2' },
  jA = {
    class: 'list-group-item d-flex justify-content-between bg-transparent',
  },
  zA = { class: 'pe-2' },
  BA = {
    class: 'list-group-item d-flex justify-content-between bg-transparent',
  },
  WA = { class: 'pe-2' },
  VA = { class: 'row w-100 pb-md-5 px-3 m-0' },
  UA = { class: 'col-12 col-md-4' },
  YA = { class: 'card h-100' },
  KA = { class: 'card-body d-flex flex-column' },
  qA = { class: 'card-text mt-auto' },
  GA = {
    href: 'https://robbysabo.github.io/Project3-Vue-SPA-WeGeekTogether/',
    target: '_blank',
    rel: 'noopener noreferrer',
    class: 'text-decoration-none',
  },
  XA = { class: 'text-muted' },
  QA = { class: 'col-12 col-md-4' },
  JA = { class: 'card h-100' },
  ZA = { class: 'card-body d-flex flex-column' },
  tS = { class: 'card-text mt-auto' },
  eS = {
    href: 'https://robbysabo.github.io/Fall2022-Final/index.html',
    target: '_blank',
    rel: 'noopener noreferrer',
    class: 'text-decoration-none',
  },
  nS = { class: 'text-muted' },
  sS = { class: 'col-12 col-md-4' },
  iS = { class: 'card h-100' },
  oS = { class: 'card-body d-flex flex-column' },
  rS = { class: 'card-text mt-auto' },
  aS = {
    href: 'https://mrzig0.csb.app/',
    target: '_blank',
    rel: 'noopener noreferrer',
    class: 'text-decoration-none',
  },
  lS = { class: 'text-muted' },
  cS = { class: 'row pb-5 px-3 m-0' },
  fS = { class: 'col-12 col-md-4' },
  uS = { class: 'card h-100' },
  dS = { class: 'card-body d-flex flex-column' },
  hS = { class: 'card-text mt-auto' },
  pS = {
    href: 'https://8p1fy8.csb.app/',
    target: '_blank',
    rel: 'noopener noreferrer',
    class: 'text-decoration-none',
  },
  gS = { class: 'text-muted' },
  mS = { class: 'col-12 col-md-4 mx-auto' },
  _S = { class: 'card h-100' },
  bS = { class: 'card-body d-flex flex-column' },
  vS = { class: 'card-text mt-auto' },
  yS = {
    href: 'https://m0xyh7.csb.app/',
    target: '_blank',
    rel: 'noopener noreferrer',
    class: 'text-decoration-none',
  },
  xS = { class: 'text-muted' },
  ES = { class: 'col-12 col-md-4 mx-auto' },
  wS = { class: 'card h-100' },
  AS = { class: 'card-body d-flex flex-column' },
  SS = { class: 'card-text mt-auto' },
  TS = {
    href: 'https://github.com/robbysabo',
    target: '_blank',
    rel: 'noopener noreferrer',
    class: 'text-decoration-none mb-0 me-3',
  },
  OS = { class: 'text-muted' },
  CS = {
    href: 'https://codesandbox.io/u/robbysabo',
    target: '_blank',
    rel: 'noopener noreferrer',
    class: 'text-decoration-none',
  },
  kS = { class: 'text-muted' },
  MS = {
    __name: 'ExperienceView',
    setup(e) {
      return (t, n) => (
        dn(),
        us('div', null, [
          Y(oo),
          w('div', TA, [
            n[36] ||
              (n[36] = w(
                'div',
                { class: 'dark-bg w-100' },
                [
                  w(
                    'h1',
                    {
                      class:
                        'w-100 pt-4 pb-3 m-0 display-3 text-white text-uppercase',
                    },
                    ' Experience ',
                  ),
                  w(
                    'p',
                    { class: 'fs-6 text-white pb-4' },
                    'Here is all of my accomplishments',
                  ),
                ],
                -1,
              )),
            w('div', OA, [
              n[33] ||
                (n[33] = w(
                  'h2',
                  { class: 'pt-3 m-0 fw-bolder title-color' },
                  'Programming Skills',
                  -1,
                )),
              w('div', CA, [
                w('div', kA, [Y(SA)]),
                w('div', MA, [
                  n[6] || (n[6] = w('h5', null, 'Skill Rating', -1)),
                  w('ul', PA, [
                    w('li', DA, [
                      n[0] ||
                        (n[0] = w(
                          'div',
                          { class: 'ps-2' },
                          [w('p', { class: 'm-0' }, 'HTML/CSS')],
                          -1,
                        )),
                      w('div', LA, [
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                      ]),
                    ]),
                    w('li', IA, [
                      n[1] ||
                        (n[1] = w('div', { class: 'ps-2' }, 'JavaScript', -1)),
                      w('div', NA, [
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-solid fa-star-half-stroke' }),
                      ]),
                    ]),
                    w('li', RA, [
                      n[2] ||
                        (n[2] = w('div', { class: 'ps-2' }, 'C# (.NET)', -1)),
                      w('div', $A, [
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-regular fa-star' }),
                      ]),
                    ]),
                    w('li', FA, [
                      n[3] || (n[3] = w('div', { class: 'ps-2' }, 'VueJs', -1)),
                      w('div', HA, [
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-solid fa-star-half-stroke' }),
                        Y(it(ct), { icon: 'fa-regular fa-star' }),
                      ]),
                    ]),
                    w('li', jA, [
                      n[4] ||
                        (n[4] = w('div', { class: 'ps-2' }, 'ReactJs', -1)),
                      w('div', zA, [
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-solid fa-star-half-stroke' }),
                        Y(it(ct), { icon: 'fa-regular fa-star' }),
                        Y(it(ct), { icon: 'fa-regular fa-star' }),
                      ]),
                    ]),
                    w('li', BA, [
                      n[5] || (n[5] = w('div', { class: 'ps-2' }, 'AWS', -1)),
                      w('div', WA, [
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-solid fa-star' }),
                        Y(it(ct), { icon: 'fa-regular fa-star' }),
                        Y(it(ct), { icon: 'fa-regular fa-star' }),
                        Y(it(ct), { icon: 'fa-regular fa-star' }),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              n[34] ||
                (n[34] = is(
                  '<div class="row w-100 mb-5 mt-0 mx-0 pt-5 border-top border-light" data-v-86a32153><div class="col-12 col-md-6 col-xl-4" data-v-86a32153><h3 class="text-border" data-v-86a32153>HTML/CSS</h3><p data-v-86a32153> I have <strong data-v-86a32153>5 years</strong> of writing HTML and CSS. Started with basic static sites for practice. </p></div><div class="col-12 col-md-6 col-xl-4" data-v-86a32153><h3 class="text-border" data-v-86a32153>JavaScript</h3><p data-v-86a32153> I also have <strong data-v-86a32153>5 years</strong> of writting JavaScript. It was mostly from learning JavaScript frameworks. Built in React and Vue. </p></div><div class="col-12 col-md-6 col-xl-4" data-v-86a32153><h3 class="text-border" data-v-86a32153>C# (.NET)</h3><p data-v-86a32153> I started with the C# language as my first programming language. I have <strong data-v-86a32153>11 years</strong> of experience with C#, starting all the way <em data-v-86a32153>back in 2014</em>. I mostly used it for game development in the game engine <i data-v-86a32153>Unity.</i></p></div><div class="col-12 col-md-6 col-xl-4" data-v-86a32153><h3 class="text-border" data-v-86a32153>VueJs</h3><p data-v-86a32153> About 2 Years of using Vue framework. It has been an easy learning curve to anyone that needs a fast and reliable framework. I built some my recent web projects with Vue. </p></div><div class="col-12 col-md-6 col-xl-4" data-v-86a32153><h3 class="text-border" data-v-86a32153>ReactJs</h3><p data-v-86a32153> I started with React framework a little over a <strong data-v-86a32153>1 year</strong>. I built small web apps learning the framework. Though, this framework went through a lot of changes over the past couple of years. I have a great foundation for React. </p></div><div class="col-12 col-md-6 col-xl-4" data-v-86a32153><h3 class="text-border" data-v-86a32153>AWS</h3><p data-v-86a32153> Only recently in the last year, I have been pushing my way into AWS. So far I can setup a simple serverless website for any site made with AWS S3. </p></div></div><h2 class="py-3 m-0 fw-bolder border-top border-light title-color" data-v-86a32153> Projects </h2>',
                  2,
                )),
              w('div', VA, [
                w('div', UA, [
                  w('div', YA, [
                    n[10] ||
                      (n[10] = w(
                        'a',
                        {
                          href: 'https://robbysabo.github.io/Project3-Vue-SPA-WeGeekTogether/',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        },
                        [
                          w('img', {
                            src: B1,
                            class: 'card-img-top d-none d-md-block',
                            alt: 'website of my project Fake Arcade',
                          }),
                        ],
                        -1,
                      )),
                    w('div', KA, [
                      n[8] ||
                        (n[8] = w(
                          'h5',
                          { class: 'card-title title-color text-border' },
                          ' We Geek Together ',
                          -1,
                        )),
                      n[9] ||
                        (n[9] = w(
                          'p',
                          { class: 'card-text' },
                          " A D&D shop with D.M's to hire for a 4 hour campaign. Or shop around for D&D products. This is one of the first website outside of College that I worked on. ",
                          -1,
                        )),
                      w('p', qA, [
                        w('a', GA, [
                          w('small', XA, [
                            n[7] || (n[7] = wt('Click here to view ')),
                            Y(it(ct), {
                              icon: 'fa-solid fa-up-right-from-square',
                            }),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                w('div', QA, [
                  w('div', JA, [
                    n[14] ||
                      (n[14] = w(
                        'a',
                        {
                          href: 'https://robbysabo.github.io/Fall2022-Final/index.html',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        },
                        [
                          w('img', {
                            src: W1,
                            class: 'card-img-top d-none d-md-block',
                            alt: 'website of my project Fake Arcade',
                          }),
                        ],
                        -1,
                      )),
                    w('div', ZA, [
                      n[12] ||
                        (n[12] = w(
                          'h5',
                          { class: 'card-title title-color text-border' },
                          'Fake Arcade',
                          -1,
                        )),
                      n[13] ||
                        (n[13] = w(
                          'p',
                          { class: 'card-text' },
                          ' This is a static website I created from vanilla HTML, CSS, and JavaScript. It is a demonstration of JavaScript and jQuery library. ',
                          -1,
                        )),
                      w('p', tS, [
                        w('a', eS, [
                          w('small', nS, [
                            n[11] || (n[11] = wt('Click here to view ')),
                            Y(it(ct), {
                              icon: 'fa-solid fa-up-right-from-square',
                            }),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                w('div', sS, [
                  w('div', iS, [
                    n[18] ||
                      (n[18] = w(
                        'a',
                        {
                          href: 'https://mrzig0.csb.app/',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        },
                        [
                          w('img', {
                            src: V1,
                            class: 'card-img-top d-none d-md-block',
                            alt: 'website of my project Fake Arcade',
                          }),
                        ],
                        -1,
                      )),
                    w('div', oS, [
                      n[16] ||
                        (n[16] = w(
                          'h5',
                          { class: 'card-title title-color text-border' },
                          ' Case Study: Pokemon ',
                          -1,
                        )),
                      n[17] ||
                        (n[17] = w(
                          'p',
                          { class: 'card-text' },
                          ' This a demonstration website of using VueJs. The website shows off the routing system with Vue Routing. ',
                          -1,
                        )),
                      w('p', rS, [
                        w('a', aS, [
                          w('small', lS, [
                            n[15] || (n[15] = wt('Click here to view ')),
                            Y(it(ct), {
                              icon: 'fa-solid fa-up-right-from-square',
                            }),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              w('div', cS, [
                w('div', fS, [
                  w('div', uS, [
                    n[22] ||
                      (n[22] = w(
                        'a',
                        {
                          href: 'https://8p1fy8.csb.app/',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        },
                        [
                          w('img', {
                            src: U1,
                            class: 'card-img-top d-none d-md-block',
                            alt: 'A demo site of Vue and Bootstrap',
                          }),
                        ],
                        -1,
                      )),
                    w('div', dS, [
                      n[20] ||
                        (n[20] = w(
                          'h5',
                          { class: 'card-title title-color text-border' },
                          'Robofriends',
                          -1,
                        )),
                      n[21] ||
                        (n[21] = w(
                          'p',
                          { class: 'card-text' },
                          ' A frontend demonstration of using the Vue and Bootstrap together. It also shows the use of getting data and parse it with Vue and JSON. ',
                          -1,
                        )),
                      w('p', hS, [
                        w('a', pS, [
                          w('small', gS, [
                            n[19] || (n[19] = wt('Click here to view ')),
                            Y(it(ct), {
                              icon: 'fa-solid fa-up-right-from-square',
                            }),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                w('div', mS, [
                  w('div', _S, [
                    n[26] ||
                      (n[26] = w(
                        'a',
                        {
                          href: 'https://m0xyh7.csb.app/',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        },
                        [
                          w('img', {
                            src: Y1,
                            class: 'card-img-top d-none d-md-block',
                            alt: 'A demo site of React framework',
                          }),
                        ],
                        -1,
                      )),
                    w('div', bS, [
                      n[24] ||
                        (n[24] = w(
                          'h5',
                          { class: 'card-title title-color text-border' },
                          ' Music Company ',
                          -1,
                        )),
                      n[25] ||
                        (n[25] = w(
                          'p',
                          { class: 'card-text' },
                          ' A demonstration of using the framework ReactJs as a frontend. ',
                          -1,
                        )),
                      w('p', vS, [
                        w('a', yS, [
                          w('small', xS, [
                            n[23] || (n[23] = wt('Click here to view ')),
                            Y(it(ct), {
                              icon: 'fa-solid fa-up-right-from-square',
                            }),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                w('div', ES, [
                  w('div', wS, [
                    n[32] ||
                      (n[32] = w(
                        'img',
                        {
                          src: K1,
                          class: 'card-img-top d-none d-md-block',
                          alt: 'Code in an editor',
                        },
                        null,
                        -1,
                      )),
                    w('div', AS, [
                      n[30] ||
                        (n[30] = w(
                          'h5',
                          { class: 'card-title title-color text-border' },
                          ' Example of Backend ',
                          -1,
                        )),
                      n[31] ||
                        (n[31] = w(
                          'p',
                          { class: 'card-text' },
                          ' Backend work can be located at my Github or CodeSandbox ',
                          -1,
                        )),
                      w('p', SS, [
                        w('a', TS, [
                          w('small', OS, [
                            n[27] || (n[27] = wt('View in Github ')),
                            Y(it(ct), {
                              icon: 'fa-solid fa-up-right-from-square',
                            }),
                          ]),
                        ]),
                        w('a', CS, [
                          w('small', kS, [
                            n[28] || (n[28] = wt('View in CodeSandbox ')),
                            Y(it(ct), {
                              icon: 'fa-solid fa-up-right-from-square',
                            }),
                            n[29] || (n[29] = wt(' ')),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              n[35] ||
                (n[35] = is(
                  '<h2 class="py-3 m-0 fw-bolder border-top border-light title-color" data-v-86a32153> Education </h2><div class="row w-100 m-0" data-v-86a32153><div class="col-12 col-sm-6" data-v-86a32153><h3 class="text-border" data-v-86a32153>Degree</h3><h5 data-v-86a32153>College of Western Idaho</h5><p data-v-86a32153> Associate of Applied Science: Software Development <i data-v-86a32153>2024</i></p><a href="https://cwi.edu" target="_blank" rel="noopener noreferrer" class="text-decoration-none" data-v-86a32153><img src="' +
                    q1 +
                    '" alt="College of Western Idaho" data-v-86a32153></a></div><div class="col-12 col-sm-6" data-v-86a32153><h3 class="text-border" data-v-86a32153>Certification</h3><p data-v-86a32153>I.T.S. Badges HTML 5 Application Developer</p><img src="' +
                    G1 +
                    '" alt="I.T.S. Badges HTML 5 Application Developer" class="h-50" data-v-86a32153></div></div>',
                  2,
                )),
            ]),
          ]),
          Y(Fr),
        ])
      )
    },
  },
  PS = qs(MS, [['__scopeId', 'data-v-86a32153']]),
  DS = { class: 'contact' },
  LS = {
    __name: 'ContactView',
    setup(e) {
      return (t, n) => (
        dn(),
        us('div', DS, [
          Y(oo),
          n[0] ||
            (n[0] = w(
              'div',
              {
                class:
                  'w-100 d-flex flex-column justify-content-center align-items-center mt-5',
              },
              [
                w('div', { class: 'dark-bg w-100 text-center' }, [
                  w(
                    'h1',
                    {
                      class:
                        'w-100 pt-4 pb-3 m-0 display-3 text-white text-uppercase',
                    },
                    ' Contact ',
                  ),
                  w(
                    'p',
                    { class: 'fs-6 text-white pb-4' },
                    ' Come talk to me! Comments and Questions are always welcome! ',
                  ),
                ]),
                w('div', { class: 'container-fluid px-5' }, [
                  w('div', { class: 'row w-100 my-5 mx-0' }, [
                    w('div', { class: 'col-12' }, [
                      w(
                        'form',
                        {
                          class: 'row g-3',
                          action:
                            'https://formsubmit.co/f7197e9ceb965e0267401d2782db5ef4',
                          method: 'POST',
                        },
                        [
                          w('input', {
                            type: 'text',
                            name: '_honey',
                            class: 'd-none',
                          }),
                          w('input', {
                            type: 'hidden',
                            name: '_captcha',
                            value: 'false',
                          }),
                          w('input', {
                            type: 'hidden',
                            name: '_next',
                            value:
                              'https://robbysabo.github.io/Portfolio/success',
                          }),
                          w('div', { class: 'col-md-6' }, [
                            w(
                              'label',
                              { for: 'firstName', class: 'form-label fs-5' },
                              [
                                w('span', { class: 'text-danger' }, '*'),
                                wt('First Name:'),
                              ],
                            ),
                            w('input', {
                              type: 'text',
                              class: 'form-control',
                              name: 'name',
                              id: 'firstName',
                              placeholder: 'First Name',
                              required: '',
                            }),
                          ]),
                          w('div', { class: 'col-md-6' }, [
                            w(
                              'label',
                              { for: 'lastName', class: 'form-label fs-5' },
                              [
                                w('span', { class: 'text-danger' }, '*'),
                                wt('Last Name:'),
                              ],
                            ),
                            w('input', {
                              type: 'text',
                              class: 'form-control',
                              name: 'Last Name',
                              id: 'lastName',
                              placeholder: 'Last Name',
                              required: '',
                            }),
                          ]),
                          w('div', { class: 'col-md-8' }, [
                            w(
                              'label',
                              { for: 'emailInfo', class: 'form-label fs-5' },
                              [
                                w('span', { class: 'text-danger' }, '*'),
                                wt('E-mail:'),
                              ],
                            ),
                            w('input', {
                              type: 'email',
                              class: 'form-control',
                              name: 'email',
                              id: 'emailInfo',
                              pattern: '[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}',
                              placeholder: 'example@email.com',
                              required: '',
                            }),
                          ]),
                          w('div', { class: 'col-md-4' }, [
                            w(
                              'label',
                              { for: 'phoneNumber', class: 'form-label fs-5' },
                              'Phone Number:',
                            ),
                            w('input', {
                              type: 'text',
                              class: 'form-control',
                              name: 'phone',
                              id: 'phoneNumber',
                              pattern:
                                '(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}',
                              placeholder: '208-123-4567',
                            }),
                          ]),
                          w('div', { class: 'col-md-12' }, [
                            w(
                              'label',
                              { for: 'comments', class: 'form-label fs-5' },
                              [
                                w('span', { class: 'text-danger' }, '*'),
                                wt('Message:'),
                              ],
                            ),
                            w('textarea', {
                              class: 'form-control',
                              name: 'comments',
                              id: 'comments',
                              rows: '5',
                              placeholder: 'Message goes here...',
                              required: '',
                            }),
                          ]),
                          w('div', { class: 'col-md-12' }, [
                            w(
                              'button',
                              {
                                type: 'submit',
                                class: 'btn btn-primary my-btn-color',
                              },
                              ' Submit ',
                            ),
                          ]),
                        ],
                      ),
                    ]),
                  ]),
                ]),
              ],
              -1,
            )),
          Y(Fr),
        ])
      )
    },
  },
  IS = qs(LS, [['__scopeId', 'data-v-d3e185f1']]),
  NS = { class: 'success' },
  RS = {
    __name: 'SuccessView',
    setup(e) {
      return (t, n) => (
        dn(),
        us('div', NS, [
          Y(oo),
          n[0] ||
            (n[0] = is(
              '<div class="w-100 d-flex flex-column justify-content-center align-items-center mt-5" data-v-bcb27efd><div class="dark-bg w-100 text-center" data-v-bcb27efd><h1 class="w-100 pt-4 pb-3 m-0 display-3 text-white text-uppercase" data-v-bcb27efd> Contact </h1><p class="fs-6 text-white pb-4" data-v-bcb27efd> Come talk to me! Comments and Questions are always welcome! </p></div><div class="container-fluid px-5" data-v-bcb27efd><div class="row w-100 my-5 mx-0" data-v-bcb27efd><div class="col-12 text-center" data-v-bcb27efd><p class="fs-3 py-5 my-5" data-v-bcb27efd><span class="fw-bold" data-v-bcb27efd>Success</span>! I will get back to you shortly. </p></div></div></div></div>',
              1,
            )),
          Y(Fr),
        ])
      )
    },
  },
  $S = qs(RS, [['__scopeId', 'data-v-bcb27efd']]),
  FS = Zv({
    history: Mv('/'),
    routes: [
      { path: '/Portfolio', name: 'home', component: Ff },
      { path: '/Portfolio/about', name: 'about', component: z1 },
      { path: '/Portfolio/experience', name: 'experience', component: PS },
      { path: '/Portfolio/contact', name: 'contact', component: IS },
      { path: '/Portfolio/success', name: 'success', component: $S },
      { path: '/Portfolio/:pathMatch(.*)*', component: Ff },
    ],
  })
var Xt = 'top',
  he = 'bottom',
  pe = 'right',
  Qt = 'left',
  Wr = 'auto',
  Qs = [Xt, he, pe, Qt],
  ls = 'start',
  js = 'end',
  Dg = 'clippingParents',
  Tc = 'viewport',
  Es = 'popper',
  Lg = 'reference',
  wl = Qs.reduce(function (e, t) {
    return e.concat([t + '-' + ls, t + '-' + js])
  }, []),
  Oc = [].concat(Qs, [Wr]).reduce(function (e, t) {
    return e.concat([t, t + '-' + ls, t + '-' + js])
  }, []),
  Ig = 'beforeRead',
  Ng = 'read',
  Rg = 'afterRead',
  $g = 'beforeMain',
  Fg = 'main',
  Hg = 'afterMain',
  jg = 'beforeWrite',
  zg = 'write',
  Bg = 'afterWrite',
  Wg = [Ig, Ng, Rg, $g, Fg, Hg, jg, zg, Bg]
function Ye(e) {
  return e ? (e.nodeName || '').toLowerCase() : null
}
function ge(e) {
  if (e == null) return window
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument
    return (t && t.defaultView) || window
  }
  return e
}
function cs(e) {
  var t = ge(e).Element
  return e instanceof t || e instanceof Element
}
function ve(e) {
  var t = ge(e).HTMLElement
  return e instanceof t || e instanceof HTMLElement
}
function Cc(e) {
  if (typeof ShadowRoot > 'u') return !1
  var t = ge(e).ShadowRoot
  return e instanceof t || e instanceof ShadowRoot
}
function HS(e) {
  var t = e.state
  Object.keys(t.elements).forEach(function (n) {
    var s = t.styles[n] || {},
      i = t.attributes[n] || {},
      o = t.elements[n]
    !ve(o) ||
      !Ye(o) ||
      (Object.assign(o.style, s),
      Object.keys(i).forEach(function (r) {
        var a = i[r]
        a === !1 ? o.removeAttribute(r) : o.setAttribute(r, a === !0 ? '' : a)
      }))
  })
}
function jS(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: '0',
        top: '0',
        margin: '0',
      },
      arrow: { position: 'absolute' },
      reference: {},
    }
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (s) {
        var i = t.elements[s],
          o = t.attributes[s] || {},
          r = Object.keys(t.styles.hasOwnProperty(s) ? t.styles[s] : n[s]),
          a = r.reduce(function (l, c) {
            return (l[c] = ''), l
          }, {})
        !ve(i) ||
          !Ye(i) ||
          (Object.assign(i.style, a),
          Object.keys(o).forEach(function (l) {
            i.removeAttribute(l)
          }))
      })
    }
  )
}
const kc = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: HS,
  effect: jS,
  requires: ['computeStyles'],
}
function Be(e) {
  return e.split('-')[0]
}
var ns = Math.max,
  vr = Math.min,
  zs = Math.round
function Al() {
  var e = navigator.userAgentData
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version
        })
        .join(' ')
    : navigator.userAgent
}
function Vg() {
  return !/^((?!chrome|android).)*safari/i.test(Al())
}
function Bs(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1)
  var s = e.getBoundingClientRect(),
    i = 1,
    o = 1
  t &&
    ve(e) &&
    ((i = (e.offsetWidth > 0 && zs(s.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && zs(s.height) / e.offsetHeight) || 1))
  var r = cs(e) ? ge(e) : window,
    a = r.visualViewport,
    l = !Vg() && n,
    c = (s.left + (l && a ? a.offsetLeft : 0)) / i,
    f = (s.top + (l && a ? a.offsetTop : 0)) / o,
    u = s.width / i,
    d = s.height / o
  return {
    width: u,
    height: d,
    top: f,
    right: c + u,
    bottom: f + d,
    left: c,
    x: c,
    y: f,
  }
}
function Mc(e) {
  var t = Bs(e),
    n = e.offsetWidth,
    s = e.offsetHeight
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - s) <= 1 && (s = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: s }
  )
}
function Ug(e, t) {
  var n = t.getRootNode && t.getRootNode()
  if (e.contains(t)) return !0
  if (n && Cc(n)) {
    var s = t
    do {
      if (s && e.isSameNode(s)) return !0
      s = s.parentNode || s.host
    } while (s)
  }
  return !1
}
function fn(e) {
  return ge(e).getComputedStyle(e)
}
function zS(e) {
  return ['table', 'td', 'th'].indexOf(Ye(e)) >= 0
}
function $n(e) {
  return ((cs(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement
}
function Vr(e) {
  return Ye(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (Cc(e) ? e.host : null) || $n(e)
}
function _d(e) {
  return !ve(e) || fn(e).position === 'fixed' ? null : e.offsetParent
}
function BS(e) {
  var t = /firefox/i.test(Al()),
    n = /Trident/i.test(Al())
  if (n && ve(e)) {
    var s = fn(e)
    if (s.position === 'fixed') return null
  }
  var i = Vr(e)
  for (Cc(i) && (i = i.host); ve(i) && ['html', 'body'].indexOf(Ye(i)) < 0; ) {
    var o = fn(i)
    if (
      o.transform !== 'none' ||
      o.perspective !== 'none' ||
      o.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(o.willChange) !== -1 ||
      (t && o.willChange === 'filter') ||
      (t && o.filter && o.filter !== 'none')
    )
      return i
    i = i.parentNode
  }
  return null
}
function uo(e) {
  for (var t = ge(e), n = _d(e); n && zS(n) && fn(n).position === 'static'; )
    n = _d(n)
  return n &&
    (Ye(n) === 'html' || (Ye(n) === 'body' && fn(n).position === 'static'))
    ? t
    : n || BS(e) || t
}
function Pc(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
}
function Fi(e, t, n) {
  return ns(e, vr(t, n))
}
function WS(e, t, n) {
  var s = Fi(e, t, n)
  return s > n ? n : s
}
function Yg() {
  return { top: 0, right: 0, bottom: 0, left: 0 }
}
function Kg(e) {
  return Object.assign({}, Yg(), e)
}
function qg(e, t) {
  return t.reduce(function (n, s) {
    return (n[s] = e), n
  }, {})
}
var VS = function (t, n) {
  return (
    (t =
      typeof t == 'function'
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    Kg(typeof t != 'number' ? t : qg(t, Qs))
  )
}
function US(e) {
  var t,
    n = e.state,
    s = e.name,
    i = e.options,
    o = n.elements.arrow,
    r = n.modifiersData.popperOffsets,
    a = Be(n.placement),
    l = Pc(a),
    c = [Qt, pe].indexOf(a) >= 0,
    f = c ? 'height' : 'width'
  if (!(!o || !r)) {
    var u = VS(i.padding, n),
      d = Mc(o),
      h = l === 'y' ? Xt : Qt,
      _ = l === 'y' ? he : pe,
      g =
        n.rects.reference[f] + n.rects.reference[l] - r[l] - n.rects.popper[f],
      v = r[l] - n.rects.reference[l],
      m = uo(o),
      y = m ? (l === 'y' ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
      E = g / 2 - v / 2,
      x = u[h],
      T = y - d[f] - u[_],
      P = y / 2 - d[f] / 2 + E,
      R = Fi(x, P, T),
      q = l
    n.modifiersData[s] = ((t = {}), (t[q] = R), (t.centerOffset = R - P), t)
  }
}
function YS(e) {
  var t = e.state,
    n = e.options,
    s = n.element,
    i = s === void 0 ? '[data-popper-arrow]' : s
  i != null &&
    ((typeof i == 'string' && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (Ug(t.elements.popper, i) && (t.elements.arrow = i)))
}
const Gg = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: US,
  effect: YS,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
}
function Ws(e) {
  return e.split('-')[1]
}
var KS = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
function qS(e, t) {
  var n = e.x,
    s = e.y,
    i = t.devicePixelRatio || 1
  return { x: zs(n * i) / i || 0, y: zs(s * i) / i || 0 }
}
function bd(e) {
  var t,
    n = e.popper,
    s = e.popperRect,
    i = e.placement,
    o = e.variation,
    r = e.offsets,
    a = e.position,
    l = e.gpuAcceleration,
    c = e.adaptive,
    f = e.roundOffsets,
    u = e.isFixed,
    d = r.x,
    h = d === void 0 ? 0 : d,
    _ = r.y,
    g = _ === void 0 ? 0 : _,
    v = typeof f == 'function' ? f({ x: h, y: g }) : { x: h, y: g }
  ;(h = v.x), (g = v.y)
  var m = r.hasOwnProperty('x'),
    y = r.hasOwnProperty('y'),
    E = Qt,
    x = Xt,
    T = window
  if (c) {
    var P = uo(n),
      R = 'clientHeight',
      q = 'clientWidth'
    if (
      (P === ge(n) &&
        ((P = $n(n)),
        fn(P).position !== 'static' &&
          a === 'absolute' &&
          ((R = 'scrollHeight'), (q = 'scrollWidth'))),
      (P = P),
      i === Xt || ((i === Qt || i === pe) && o === js))
    ) {
      x = he
      var J = u && P === T && T.visualViewport ? T.visualViewport.height : P[R]
      ;(g -= J - s.height), (g *= l ? 1 : -1)
    }
    if (i === Qt || ((i === Xt || i === he) && o === js)) {
      E = pe
      var G = u && P === T && T.visualViewport ? T.visualViewport.width : P[q]
      ;(h -= G - s.width), (h *= l ? 1 : -1)
    }
  }
  var tt = Object.assign({ position: a }, c && KS),
    U = f === !0 ? qS({ x: h, y: g }, ge(n)) : { x: h, y: g }
  if (((h = U.x), (g = U.y), l)) {
    var rt
    return Object.assign(
      {},
      tt,
      ((rt = {}),
      (rt[x] = y ? '0' : ''),
      (rt[E] = m ? '0' : ''),
      (rt.transform =
        (T.devicePixelRatio || 1) <= 1
          ? 'translate(' + h + 'px, ' + g + 'px)'
          : 'translate3d(' + h + 'px, ' + g + 'px, 0)'),
      rt),
    )
  }
  return Object.assign(
    {},
    tt,
    ((t = {}),
    (t[x] = y ? g + 'px' : ''),
    (t[E] = m ? h + 'px' : ''),
    (t.transform = ''),
    t),
  )
}
function GS(e) {
  var t = e.state,
    n = e.options,
    s = n.gpuAcceleration,
    i = s === void 0 ? !0 : s,
    o = n.adaptive,
    r = o === void 0 ? !0 : o,
    a = n.roundOffsets,
    l = a === void 0 ? !0 : a,
    c = {
      placement: Be(t.placement),
      variation: Ws(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === 'fixed',
    }
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      bd(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: r,
          roundOffsets: l,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        bd(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: l,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement,
    }))
}
const Dc = {
  name: 'computeStyles',
  enabled: !0,
  phase: 'beforeWrite',
  fn: GS,
  data: {},
}
var Io = { passive: !0 }
function XS(e) {
  var t = e.state,
    n = e.instance,
    s = e.options,
    i = s.scroll,
    o = i === void 0 ? !0 : i,
    r = s.resize,
    a = r === void 0 ? !0 : r,
    l = ge(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper)
  return (
    o &&
      c.forEach(function (f) {
        f.addEventListener('scroll', n.update, Io)
      }),
    a && l.addEventListener('resize', n.update, Io),
    function () {
      o &&
        c.forEach(function (f) {
          f.removeEventListener('scroll', n.update, Io)
        }),
        a && l.removeEventListener('resize', n.update, Io)
    }
  )
}
const Lc = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: XS,
  data: {},
}
var QS = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
function Xo(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return QS[t]
  })
}
var JS = { start: 'end', end: 'start' }
function vd(e) {
  return e.replace(/start|end/g, function (t) {
    return JS[t]
  })
}
function Ic(e) {
  var t = ge(e),
    n = t.pageXOffset,
    s = t.pageYOffset
  return { scrollLeft: n, scrollTop: s }
}
function Nc(e) {
  return Bs($n(e)).left + Ic(e).scrollLeft
}
function ZS(e, t) {
  var n = ge(e),
    s = $n(e),
    i = n.visualViewport,
    o = s.clientWidth,
    r = s.clientHeight,
    a = 0,
    l = 0
  if (i) {
    ;(o = i.width), (r = i.height)
    var c = Vg()
    ;(c || (!c && t === 'fixed')) && ((a = i.offsetLeft), (l = i.offsetTop))
  }
  return { width: o, height: r, x: a + Nc(e), y: l }
}
function tT(e) {
  var t,
    n = $n(e),
    s = Ic(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = ns(
      n.scrollWidth,
      n.clientWidth,
      i ? i.scrollWidth : 0,
      i ? i.clientWidth : 0,
    ),
    r = ns(
      n.scrollHeight,
      n.clientHeight,
      i ? i.scrollHeight : 0,
      i ? i.clientHeight : 0,
    ),
    a = -s.scrollLeft + Nc(e),
    l = -s.scrollTop
  return (
    fn(i || n).direction === 'rtl' &&
      (a += ns(n.clientWidth, i ? i.clientWidth : 0) - o),
    { width: o, height: r, x: a, y: l }
  )
}
function Rc(e) {
  var t = fn(e),
    n = t.overflow,
    s = t.overflowX,
    i = t.overflowY
  return /auto|scroll|overlay|hidden/.test(n + i + s)
}
function Xg(e) {
  return ['html', 'body', '#document'].indexOf(Ye(e)) >= 0
    ? e.ownerDocument.body
    : ve(e) && Rc(e)
      ? e
      : Xg(Vr(e))
}
function Hi(e, t) {
  var n
  t === void 0 && (t = [])
  var s = Xg(e),
    i = s === ((n = e.ownerDocument) == null ? void 0 : n.body),
    o = ge(s),
    r = i ? [o].concat(o.visualViewport || [], Rc(s) ? s : []) : s,
    a = t.concat(r)
  return i ? a : a.concat(Hi(Vr(r)))
}
function Sl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  })
}
function eT(e, t) {
  var n = Bs(e, !1, t === 'fixed')
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  )
}
function yd(e, t, n) {
  return t === Tc ? Sl(ZS(e, n)) : cs(t) ? eT(t, n) : Sl(tT($n(e)))
}
function nT(e) {
  var t = Hi(Vr(e)),
    n = ['absolute', 'fixed'].indexOf(fn(e).position) >= 0,
    s = n && ve(e) ? uo(e) : e
  return cs(s)
    ? t.filter(function (i) {
        return cs(i) && Ug(i, s) && Ye(i) !== 'body'
      })
    : []
}
function sT(e, t, n, s) {
  var i = t === 'clippingParents' ? nT(e) : [].concat(t),
    o = [].concat(i, [n]),
    r = o[0],
    a = o.reduce(
      function (l, c) {
        var f = yd(e, c, s)
        return (
          (l.top = ns(f.top, l.top)),
          (l.right = vr(f.right, l.right)),
          (l.bottom = vr(f.bottom, l.bottom)),
          (l.left = ns(f.left, l.left)),
          l
        )
      },
      yd(e, r, s),
    )
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  )
}
function Qg(e) {
  var t = e.reference,
    n = e.element,
    s = e.placement,
    i = s ? Be(s) : null,
    o = s ? Ws(s) : null,
    r = t.x + t.width / 2 - n.width / 2,
    a = t.y + t.height / 2 - n.height / 2,
    l
  switch (i) {
    case Xt:
      l = { x: r, y: t.y - n.height }
      break
    case he:
      l = { x: r, y: t.y + t.height }
      break
    case pe:
      l = { x: t.x + t.width, y: a }
      break
    case Qt:
      l = { x: t.x - n.width, y: a }
      break
    default:
      l = { x: t.x, y: t.y }
  }
  var c = i ? Pc(i) : null
  if (c != null) {
    var f = c === 'y' ? 'height' : 'width'
    switch (o) {
      case ls:
        l[c] = l[c] - (t[f] / 2 - n[f] / 2)
        break
      case js:
        l[c] = l[c] + (t[f] / 2 - n[f] / 2)
        break
    }
  }
  return l
}
function Vs(e, t) {
  t === void 0 && (t = {})
  var n = t,
    s = n.placement,
    i = s === void 0 ? e.placement : s,
    o = n.strategy,
    r = o === void 0 ? e.strategy : o,
    a = n.boundary,
    l = a === void 0 ? Dg : a,
    c = n.rootBoundary,
    f = c === void 0 ? Tc : c,
    u = n.elementContext,
    d = u === void 0 ? Es : u,
    h = n.altBoundary,
    _ = h === void 0 ? !1 : h,
    g = n.padding,
    v = g === void 0 ? 0 : g,
    m = Kg(typeof v != 'number' ? v : qg(v, Qs)),
    y = d === Es ? Lg : Es,
    E = e.rects.popper,
    x = e.elements[_ ? y : d],
    T = sT(cs(x) ? x : x.contextElement || $n(e.elements.popper), l, f, r),
    P = Bs(e.elements.reference),
    R = Qg({ reference: P, element: E, strategy: 'absolute', placement: i }),
    q = Sl(Object.assign({}, E, R)),
    J = d === Es ? q : P,
    G = {
      top: T.top - J.top + m.top,
      bottom: J.bottom - T.bottom + m.bottom,
      left: T.left - J.left + m.left,
      right: J.right - T.right + m.right,
    },
    tt = e.modifiersData.offset
  if (d === Es && tt) {
    var U = tt[i]
    Object.keys(G).forEach(function (rt) {
      var At = [pe, he].indexOf(rt) >= 0 ? 1 : -1,
        W = [Xt, he].indexOf(rt) >= 0 ? 'y' : 'x'
      G[rt] += U[W] * At
    })
  }
  return G
}
function iT(e, t) {
  t === void 0 && (t = {})
  var n = t,
    s = n.placement,
    i = n.boundary,
    o = n.rootBoundary,
    r = n.padding,
    a = n.flipVariations,
    l = n.allowedAutoPlacements,
    c = l === void 0 ? Oc : l,
    f = Ws(s),
    u = f
      ? a
        ? wl
        : wl.filter(function (_) {
            return Ws(_) === f
          })
      : Qs,
    d = u.filter(function (_) {
      return c.indexOf(_) >= 0
    })
  d.length === 0 && (d = u)
  var h = d.reduce(function (_, g) {
    return (
      (_[g] = Vs(e, { placement: g, boundary: i, rootBoundary: o, padding: r })[
        Be(g)
      ]),
      _
    )
  }, {})
  return Object.keys(h).sort(function (_, g) {
    return h[_] - h[g]
  })
}
function oT(e) {
  if (Be(e) === Wr) return []
  var t = Xo(e)
  return [vd(e), t, vd(t)]
}
function rT(e) {
  var t = e.state,
    n = e.options,
    s = e.name
  if (!t.modifiersData[s]._skip) {
    for (
      var i = n.mainAxis,
        o = i === void 0 ? !0 : i,
        r = n.altAxis,
        a = r === void 0 ? !0 : r,
        l = n.fallbackPlacements,
        c = n.padding,
        f = n.boundary,
        u = n.rootBoundary,
        d = n.altBoundary,
        h = n.flipVariations,
        _ = h === void 0 ? !0 : h,
        g = n.allowedAutoPlacements,
        v = t.options.placement,
        m = Be(v),
        y = m === v,
        E = l || (y || !_ ? [Xo(v)] : oT(v)),
        x = [v].concat(E).reduce(function (ht, gt) {
          return ht.concat(
            Be(gt) === Wr
              ? iT(t, {
                  placement: gt,
                  boundary: f,
                  rootBoundary: u,
                  padding: c,
                  flipVariations: _,
                  allowedAutoPlacements: g,
                })
              : gt,
          )
        }, []),
        T = t.rects.reference,
        P = t.rects.popper,
        R = new Map(),
        q = !0,
        J = x[0],
        G = 0;
      G < x.length;
      G++
    ) {
      var tt = x[G],
        U = Be(tt),
        rt = Ws(tt) === ls,
        At = [Xt, he].indexOf(U) >= 0,
        W = At ? 'width' : 'height',
        k = Vs(t, {
          placement: tt,
          boundary: f,
          rootBoundary: u,
          altBoundary: d,
          padding: c,
        }),
        N = At ? (rt ? pe : Qt) : rt ? he : Xt
      T[W] > P[W] && (N = Xo(N))
      var H = Xo(N),
        at = []
      if (
        (o && at.push(k[U] <= 0),
        a && at.push(k[N] <= 0, k[H] <= 0),
        at.every(function (ht) {
          return ht
        }))
      ) {
        ;(J = tt), (q = !1)
        break
      }
      R.set(tt, at)
    }
    if (q)
      for (
        var S = _ ? 3 : 1,
          Lt = function (gt) {
            var ot = x.find(function (O) {
              var B = R.get(O)
              if (B)
                return B.slice(0, gt).every(function (z) {
                  return z
                })
            })
            if (ot) return (J = ot), 'break'
          },
          j = S;
        j > 0;
        j--
      ) {
        var lt = Lt(j)
        if (lt === 'break') break
      }
    t.placement !== J &&
      ((t.modifiersData[s]._skip = !0), (t.placement = J), (t.reset = !0))
  }
}
const Jg = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: rT,
  requiresIfExists: ['offset'],
  data: { _skip: !1 },
}
function xd(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  )
}
function Ed(e) {
  return [Xt, pe, he, Qt].some(function (t) {
    return e[t] >= 0
  })
}
function aT(e) {
  var t = e.state,
    n = e.name,
    s = t.rects.reference,
    i = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    r = Vs(t, { elementContext: 'reference' }),
    a = Vs(t, { altBoundary: !0 }),
    l = xd(r, s),
    c = xd(a, i, o),
    f = Ed(l),
    u = Ed(c)
  ;(t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: f,
    hasPopperEscaped: u,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': f,
      'data-popper-escaped': u,
    }))
}
const Zg = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: aT,
}
function lT(e, t, n) {
  var s = Be(e),
    i = [Qt, Xt].indexOf(s) >= 0 ? -1 : 1,
    o = typeof n == 'function' ? n(Object.assign({}, t, { placement: e })) : n,
    r = o[0],
    a = o[1]
  return (
    (r = r || 0),
    (a = (a || 0) * i),
    [Qt, pe].indexOf(s) >= 0 ? { x: a, y: r } : { x: r, y: a }
  )
}
function cT(e) {
  var t = e.state,
    n = e.options,
    s = e.name,
    i = n.offset,
    o = i === void 0 ? [0, 0] : i,
    r = Oc.reduce(function (f, u) {
      return (f[u] = lT(u, t.rects, o)), f
    }, {}),
    a = r[t.placement],
    l = a.x,
    c = a.y
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[s] = r)
}
const tm = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: cT,
}
function fT(e) {
  var t = e.state,
    n = e.name
  t.modifiersData[n] = Qg({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  })
}
const $c = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: fT,
  data: {},
}
function uT(e) {
  return e === 'x' ? 'y' : 'x'
}
function dT(e) {
  var t = e.state,
    n = e.options,
    s = e.name,
    i = n.mainAxis,
    o = i === void 0 ? !0 : i,
    r = n.altAxis,
    a = r === void 0 ? !1 : r,
    l = n.boundary,
    c = n.rootBoundary,
    f = n.altBoundary,
    u = n.padding,
    d = n.tether,
    h = d === void 0 ? !0 : d,
    _ = n.tetherOffset,
    g = _ === void 0 ? 0 : _,
    v = Vs(t, { boundary: l, rootBoundary: c, padding: u, altBoundary: f }),
    m = Be(t.placement),
    y = Ws(t.placement),
    E = !y,
    x = Pc(m),
    T = uT(x),
    P = t.modifiersData.popperOffsets,
    R = t.rects.reference,
    q = t.rects.popper,
    J =
      typeof g == 'function'
        ? g(Object.assign({}, t.rects, { placement: t.placement }))
        : g,
    G =
      typeof J == 'number'
        ? { mainAxis: J, altAxis: J }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, J),
    tt = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    U = { x: 0, y: 0 }
  if (P) {
    if (o) {
      var rt,
        At = x === 'y' ? Xt : Qt,
        W = x === 'y' ? he : pe,
        k = x === 'y' ? 'height' : 'width',
        N = P[x],
        H = N + v[At],
        at = N - v[W],
        S = h ? -q[k] / 2 : 0,
        Lt = y === ls ? R[k] : q[k],
        j = y === ls ? -q[k] : -R[k],
        lt = t.elements.arrow,
        ht = h && lt ? Mc(lt) : { width: 0, height: 0 },
        gt = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : Yg(),
        ot = gt[At],
        O = gt[W],
        B = Fi(0, R[k], ht[k]),
        z = E ? R[k] / 2 - S - B - ot - G.mainAxis : Lt - B - ot - G.mainAxis,
        X = E ? -R[k] / 2 + S + B + O + G.mainAxis : j + B + O + G.mainAxis,
        mt = t.elements.arrow && uo(t.elements.arrow),
        yt = mt ? (x === 'y' ? mt.clientTop || 0 : mt.clientLeft || 0) : 0,
        p = (rt = tt == null ? void 0 : tt[x]) != null ? rt : 0,
        b = N + z - p - yt,
        A = N + X - p,
        M = Fi(h ? vr(H, b) : H, N, h ? ns(at, A) : at)
      ;(P[x] = M), (U[x] = M - N)
    }
    if (a) {
      var C,
        D = x === 'x' ? Xt : Qt,
        V = x === 'x' ? he : pe,
        F = P[T],
        $ = T === 'y' ? 'height' : 'width',
        L = F + v[D],
        et = F - v[V],
        K = [Xt, Qt].indexOf(m) !== -1,
        Z = (C = tt == null ? void 0 : tt[T]) != null ? C : 0,
        st = K ? L : F - R[$] - q[$] - Z + G.altAxis,
        dt = K ? F + R[$] + q[$] - Z - G.altAxis : et,
        _t = h && K ? WS(st, F, dt) : Fi(h ? st : L, F, h ? dt : et)
      ;(P[T] = _t), (U[T] = _t - F)
    }
    t.modifiersData[s] = U
  }
}
const em = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: dT,
  requiresIfExists: ['offset'],
}
function hT(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
}
function pT(e) {
  return e === ge(e) || !ve(e) ? Ic(e) : hT(e)
}
function gT(e) {
  var t = e.getBoundingClientRect(),
    n = zs(t.width) / e.offsetWidth || 1,
    s = zs(t.height) / e.offsetHeight || 1
  return n !== 1 || s !== 1
}
function mT(e, t, n) {
  n === void 0 && (n = !1)
  var s = ve(t),
    i = ve(t) && gT(t),
    o = $n(t),
    r = Bs(e, i, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 }
  return (
    (s || (!s && !n)) &&
      ((Ye(t) !== 'body' || Rc(o)) && (a = pT(t)),
      ve(t)
        ? ((l = Bs(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : o && (l.x = Nc(o))),
    {
      x: r.left + a.scrollLeft - l.x,
      y: r.top + a.scrollTop - l.y,
      width: r.width,
      height: r.height,
    }
  )
}
function _T(e) {
  var t = new Map(),
    n = new Set(),
    s = []
  e.forEach(function (o) {
    t.set(o.name, o)
  })
  function i(o) {
    n.add(o.name)
    var r = [].concat(o.requires || [], o.requiresIfExists || [])
    r.forEach(function (a) {
      if (!n.has(a)) {
        var l = t.get(a)
        l && i(l)
      }
    }),
      s.push(o)
  }
  return (
    e.forEach(function (o) {
      n.has(o.name) || i(o)
    }),
    s
  )
}
function bT(e) {
  var t = _T(e)
  return Wg.reduce(function (n, s) {
    return n.concat(
      t.filter(function (i) {
        return i.phase === s
      }),
    )
  }, [])
}
function vT(e) {
  var t
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            ;(t = void 0), n(e())
          })
        })),
      t
    )
  }
}
function yT(e) {
  var t = e.reduce(function (n, s) {
    var i = n[s.name]
    return (
      (n[s.name] = i
        ? Object.assign({}, i, s, {
            options: Object.assign({}, i.options, s.options),
            data: Object.assign({}, i.data, s.data),
          })
        : s),
      n
    )
  }, {})
  return Object.keys(t).map(function (n) {
    return t[n]
  })
}
var wd = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
function Ad() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  return !t.some(function (s) {
    return !(s && typeof s.getBoundingClientRect == 'function')
  })
}
function Ur(e) {
  e === void 0 && (e = {})
  var t = e,
    n = t.defaultModifiers,
    s = n === void 0 ? [] : n,
    i = t.defaultOptions,
    o = i === void 0 ? wd : i
  return function (a, l, c) {
    c === void 0 && (c = o)
    var f = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, wd, o),
        modifiersData: {},
        elements: { reference: a, popper: l },
        attributes: {},
        styles: {},
      },
      u = [],
      d = !1,
      h = {
        state: f,
        setOptions: function (m) {
          var y = typeof m == 'function' ? m(f.options) : m
          g(),
            (f.options = Object.assign({}, o, f.options, y)),
            (f.scrollParents = {
              reference: cs(a)
                ? Hi(a)
                : a.contextElement
                  ? Hi(a.contextElement)
                  : [],
              popper: Hi(l),
            })
          var E = bT(yT([].concat(s, f.options.modifiers)))
          return (
            (f.orderedModifiers = E.filter(function (x) {
              return x.enabled
            })),
            _(),
            h.update()
          )
        },
        forceUpdate: function () {
          if (!d) {
            var m = f.elements,
              y = m.reference,
              E = m.popper
            if (Ad(y, E)) {
              ;(f.rects = {
                reference: mT(y, uo(E), f.options.strategy === 'fixed'),
                popper: Mc(E),
              }),
                (f.reset = !1),
                (f.placement = f.options.placement),
                f.orderedModifiers.forEach(function (G) {
                  return (f.modifiersData[G.name] = Object.assign({}, G.data))
                })
              for (var x = 0; x < f.orderedModifiers.length; x++) {
                if (f.reset === !0) {
                  ;(f.reset = !1), (x = -1)
                  continue
                }
                var T = f.orderedModifiers[x],
                  P = T.fn,
                  R = T.options,
                  q = R === void 0 ? {} : R,
                  J = T.name
                typeof P == 'function' &&
                  (f = P({ state: f, options: q, name: J, instance: h }) || f)
              }
            }
          }
        },
        update: vT(function () {
          return new Promise(function (v) {
            h.forceUpdate(), v(f)
          })
        }),
        destroy: function () {
          g(), (d = !0)
        },
      }
    if (!Ad(a, l)) return h
    h.setOptions(c).then(function (v) {
      !d && c.onFirstUpdate && c.onFirstUpdate(v)
    })
    function _() {
      f.orderedModifiers.forEach(function (v) {
        var m = v.name,
          y = v.options,
          E = y === void 0 ? {} : y,
          x = v.effect
        if (typeof x == 'function') {
          var T = x({ state: f, name: m, instance: h, options: E }),
            P = function () {}
          u.push(T || P)
        }
      })
    }
    function g() {
      u.forEach(function (v) {
        return v()
      }),
        (u = [])
    }
    return h
  }
}
var xT = Ur(),
  ET = [Lc, $c, Dc, kc],
  wT = Ur({ defaultModifiers: ET }),
  AT = [Lc, $c, Dc, kc, tm, Jg, em, Gg, Zg],
  Fc = Ur({ defaultModifiers: AT })
const nm = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      afterMain: Hg,
      afterRead: Rg,
      afterWrite: Bg,
      applyStyles: kc,
      arrow: Gg,
      auto: Wr,
      basePlacements: Qs,
      beforeMain: $g,
      beforeRead: Ig,
      beforeWrite: jg,
      bottom: he,
      clippingParents: Dg,
      computeStyles: Dc,
      createPopper: Fc,
      createPopperBase: xT,
      createPopperLite: wT,
      detectOverflow: Vs,
      end: js,
      eventListeners: Lc,
      flip: Jg,
      hide: Zg,
      left: Qt,
      main: Fg,
      modifierPhases: Wg,
      offset: tm,
      placements: Oc,
      popper: Es,
      popperGenerator: Ur,
      popperOffsets: $c,
      preventOverflow: em,
      read: Ng,
      reference: Lg,
      right: pe,
      start: ls,
      top: Xt,
      variationPlacements: wl,
      viewport: Tc,
      write: zg,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
)
/*!
 * Bootstrap v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ const _n = new Map(),
  Sa = {
    set(e, t, n) {
      _n.has(e) || _n.set(e, new Map())
      const s = _n.get(e)
      if (!s.has(t) && s.size !== 0) {
        console.error(
          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`,
        )
        return
      }
      s.set(t, n)
    },
    get(e, t) {
      return (_n.has(e) && _n.get(e).get(t)) || null
    },
    remove(e, t) {
      if (!_n.has(e)) return
      const n = _n.get(e)
      n.delete(t), n.size === 0 && _n.delete(e)
    },
  },
  ST = 1e6,
  TT = 1e3,
  Tl = 'transitionend',
  sm = e => (
    e &&
      window.CSS &&
      window.CSS.escape &&
      (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)),
    e
  ),
  OT = e =>
    e == null
      ? `${e}`
      : Object.prototype.toString
          .call(e)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase(),
  CT = e => {
    do e += Math.floor(Math.random() * ST)
    while (document.getElementById(e))
    return e
  },
  kT = e => {
    if (!e) return 0
    let { transitionDuration: t, transitionDelay: n } =
      window.getComputedStyle(e)
    const s = Number.parseFloat(t),
      i = Number.parseFloat(n)
    return !s && !i
      ? 0
      : ((t = t.split(',')[0]),
        (n = n.split(',')[0]),
        (Number.parseFloat(t) + Number.parseFloat(n)) * TT)
  },
  im = e => {
    e.dispatchEvent(new Event(Tl))
  },
  on = e =>
    !e || typeof e != 'object'
      ? !1
      : (typeof e.jquery < 'u' && (e = e[0]), typeof e.nodeType < 'u'),
  Dn = e =>
    on(e)
      ? e.jquery
        ? e[0]
        : e
      : typeof e == 'string' && e.length > 0
        ? document.querySelector(sm(e))
        : null,
  Js = e => {
    if (!on(e) || e.getClientRects().length === 0) return !1
    const t = getComputedStyle(e).getPropertyValue('visibility') === 'visible',
      n = e.closest('details:not([open])')
    if (!n) return t
    if (n !== e) {
      const s = e.closest('summary')
      if ((s && s.parentNode !== n) || s === null) return !1
    }
    return t
  },
  Ln = e =>
    !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains('disabled')
      ? !0
      : typeof e.disabled < 'u'
        ? e.disabled
        : e.hasAttribute('disabled') && e.getAttribute('disabled') !== 'false',
  om = e => {
    if (!document.documentElement.attachShadow) return null
    if (typeof e.getRootNode == 'function') {
      const t = e.getRootNode()
      return t instanceof ShadowRoot ? t : null
    }
    return e instanceof ShadowRoot ? e : e.parentNode ? om(e.parentNode) : null
  },
  yr = () => {},
  ho = e => {
    e.offsetHeight
  },
  rm = () =>
    window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')
      ? window.jQuery
      : null,
  Ta = [],
  MT = e => {
    document.readyState === 'loading'
      ? (Ta.length ||
          document.addEventListener('DOMContentLoaded', () => {
            for (const t of Ta) t()
          }),
        Ta.push(e))
      : e()
  },
  xe = () => document.documentElement.dir === 'rtl',
  we = e => {
    MT(() => {
      const t = rm()
      if (t) {
        const n = e.NAME,
          s = t.fn[n]
        ;(t.fn[n] = e.jQueryInterface),
          (t.fn[n].Constructor = e),
          (t.fn[n].noConflict = () => ((t.fn[n] = s), e.jQueryInterface))
      }
    })
  },
  ee = (e, t = [], n = e) => (typeof e == 'function' ? e(...t) : n),
  am = (e, t, n = !0) => {
    if (!n) {
      ee(e)
      return
    }
    const i = kT(t) + 5
    let o = !1
    const r = ({ target: a }) => {
      a === t && ((o = !0), t.removeEventListener(Tl, r), ee(e))
    }
    t.addEventListener(Tl, r),
      setTimeout(() => {
        o || im(t)
      }, i)
  },
  Hc = (e, t, n, s) => {
    const i = e.length
    let o = e.indexOf(t)
    return o === -1
      ? !n && s
        ? e[i - 1]
        : e[0]
      : ((o += n ? 1 : -1),
        s && (o = (o + i) % i),
        e[Math.max(0, Math.min(o, i - 1))])
  },
  PT = /[^.]*(?=\..*)\.|.*/,
  DT = /\..*/,
  LT = /::\d+$/,
  Oa = {}
let Sd = 1
const lm = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
  IT = new Set([
    'click',
    'dblclick',
    'mouseup',
    'mousedown',
    'contextmenu',
    'mousewheel',
    'DOMMouseScroll',
    'mouseover',
    'mouseout',
    'mousemove',
    'selectstart',
    'selectend',
    'keydown',
    'keypress',
    'keyup',
    'orientationchange',
    'touchstart',
    'touchmove',
    'touchend',
    'touchcancel',
    'pointerdown',
    'pointermove',
    'pointerup',
    'pointerleave',
    'pointercancel',
    'gesturestart',
    'gesturechange',
    'gestureend',
    'focus',
    'blur',
    'change',
    'reset',
    'select',
    'submit',
    'focusin',
    'focusout',
    'load',
    'unload',
    'beforeunload',
    'resize',
    'move',
    'DOMContentLoaded',
    'readystatechange',
    'error',
    'abort',
    'scroll',
  ])
function cm(e, t) {
  return (t && `${t}::${Sd++}`) || e.uidEvent || Sd++
}
function fm(e) {
  const t = cm(e)
  return (e.uidEvent = t), (Oa[t] = Oa[t] || {}), Oa[t]
}
function NT(e, t) {
  return function n(s) {
    return (
      jc(s, { delegateTarget: e }),
      n.oneOff && I.off(e, s.type, t),
      t.apply(e, [s])
    )
  }
}
function RT(e, t, n) {
  return function s(i) {
    const o = e.querySelectorAll(t)
    for (let { target: r } = i; r && r !== this; r = r.parentNode)
      for (const a of o)
        if (a === r)
          return (
            jc(i, { delegateTarget: r }),
            s.oneOff && I.off(e, i.type, t, n),
            n.apply(r, [i])
          )
  }
}
function um(e, t, n = null) {
  return Object.values(e).find(
    s => s.callable === t && s.delegationSelector === n,
  )
}
function dm(e, t, n) {
  const s = typeof t == 'string',
    i = s ? n : t || n
  let o = hm(e)
  return IT.has(o) || (o = e), [s, i, o]
}
function Td(e, t, n, s, i) {
  if (typeof t != 'string' || !e) return
  let [o, r, a] = dm(t, n, s)
  t in lm &&
    (r = (_ =>
      function (g) {
        if (
          !g.relatedTarget ||
          (g.relatedTarget !== g.delegateTarget &&
            !g.delegateTarget.contains(g.relatedTarget))
        )
          return _.call(this, g)
      })(r))
  const l = fm(e),
    c = l[a] || (l[a] = {}),
    f = um(c, r, o ? n : null)
  if (f) {
    f.oneOff = f.oneOff && i
    return
  }
  const u = cm(r, t.replace(PT, '')),
    d = o ? RT(e, n, r) : NT(e, r)
  ;(d.delegationSelector = o ? n : null),
    (d.callable = r),
    (d.oneOff = i),
    (d.uidEvent = u),
    (c[u] = d),
    e.addEventListener(a, d, o)
}
function Ol(e, t, n, s, i) {
  const o = um(t[n], s, i)
  o && (e.removeEventListener(n, o, !!i), delete t[n][o.uidEvent])
}
function $T(e, t, n, s) {
  const i = t[n] || {}
  for (const [o, r] of Object.entries(i))
    o.includes(s) && Ol(e, t, n, r.callable, r.delegationSelector)
}
function hm(e) {
  return (e = e.replace(DT, '')), lm[e] || e
}
const I = {
  on(e, t, n, s) {
    Td(e, t, n, s, !1)
  },
  one(e, t, n, s) {
    Td(e, t, n, s, !0)
  },
  off(e, t, n, s) {
    if (typeof t != 'string' || !e) return
    const [i, o, r] = dm(t, n, s),
      a = r !== t,
      l = fm(e),
      c = l[r] || {},
      f = t.startsWith('.')
    if (typeof o < 'u') {
      if (!Object.keys(c).length) return
      Ol(e, l, r, o, i ? n : null)
      return
    }
    if (f) for (const u of Object.keys(l)) $T(e, l, u, t.slice(1))
    for (const [u, d] of Object.entries(c)) {
      const h = u.replace(LT, '')
      ;(!a || t.includes(h)) && Ol(e, l, r, d.callable, d.delegationSelector)
    }
  },
  trigger(e, t, n) {
    if (typeof t != 'string' || !e) return null
    const s = rm(),
      i = hm(t),
      o = t !== i
    let r = null,
      a = !0,
      l = !0,
      c = !1
    o &&
      s &&
      ((r = s.Event(t, n)),
      s(e).trigger(r),
      (a = !r.isPropagationStopped()),
      (l = !r.isImmediatePropagationStopped()),
      (c = r.isDefaultPrevented()))
    const f = jc(new Event(t, { bubbles: a, cancelable: !0 }), n)
    return (
      c && f.preventDefault(),
      l && e.dispatchEvent(f),
      f.defaultPrevented && r && r.preventDefault(),
      f
    )
  },
}
function jc(e, t = {}) {
  for (const [n, s] of Object.entries(t))
    try {
      e[n] = s
    } catch {
      Object.defineProperty(e, n, {
        configurable: !0,
        get() {
          return s
        },
      })
    }
  return e
}
function Od(e) {
  if (e === 'true') return !0
  if (e === 'false') return !1
  if (e === Number(e).toString()) return Number(e)
  if (e === '' || e === 'null') return null
  if (typeof e != 'string') return e
  try {
    return JSON.parse(decodeURIComponent(e))
  } catch {
    return e
  }
}
function Ca(e) {
  return e.replace(/[A-Z]/g, t => `-${t.toLowerCase()}`)
}
const rn = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-bs-${Ca(t)}`, n)
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${Ca(t)}`)
  },
  getDataAttributes(e) {
    if (!e) return {}
    const t = {},
      n = Object.keys(e.dataset).filter(
        s => s.startsWith('bs') && !s.startsWith('bsConfig'),
      )
    for (const s of n) {
      let i = s.replace(/^bs/, '')
      ;(i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
        (t[i] = Od(e.dataset[s]))
    }
    return t
  },
  getDataAttribute(e, t) {
    return Od(e.getAttribute(`data-bs-${Ca(t)}`))
  },
}
class po {
  static get Default() {
    return {}
  }
  static get DefaultType() {
    return {}
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!',
    )
  }
  _getConfig(t) {
    return (
      (t = this._mergeConfigObj(t)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    )
  }
  _configAfterMerge(t) {
    return t
  }
  _mergeConfigObj(t, n) {
    const s = on(n) ? rn.getDataAttribute(n, 'config') : {}
    return {
      ...this.constructor.Default,
      ...(typeof s == 'object' ? s : {}),
      ...(on(n) ? rn.getDataAttributes(n) : {}),
      ...(typeof t == 'object' ? t : {}),
    }
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const [s, i] of Object.entries(n)) {
      const o = t[s],
        r = on(o) ? 'element' : OT(o)
      if (!new RegExp(i).test(r))
        throw new TypeError(
          `${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${i}".`,
        )
    }
  }
}
const FT = '5.3.3'
class Me extends po {
  constructor(t, n) {
    super(),
      (t = Dn(t)),
      t &&
        ((this._element = t),
        (this._config = this._getConfig(n)),
        Sa.set(this._element, this.constructor.DATA_KEY, this))
  }
  dispose() {
    Sa.remove(this._element, this.constructor.DATA_KEY),
      I.off(this._element, this.constructor.EVENT_KEY)
    for (const t of Object.getOwnPropertyNames(this)) this[t] = null
  }
  _queueCallback(t, n, s = !0) {
    am(t, n, s)
  }
  _getConfig(t) {
    return (
      (t = this._mergeConfigObj(t, this._element)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    )
  }
  static getInstance(t) {
    return Sa.get(Dn(t), this.DATA_KEY)
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == 'object' ? n : null)
  }
  static get VERSION() {
    return FT
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`
  }
  static eventName(t) {
    return `${t}${this.EVENT_KEY}`
  }
}
const ka = e => {
    let t = e.getAttribute('data-bs-target')
    if (!t || t === '#') {
      let n = e.getAttribute('href')
      if (!n || (!n.includes('#') && !n.startsWith('.'))) return null
      n.includes('#') && !n.startsWith('#') && (n = `#${n.split('#')[1]}`),
        (t = n && n !== '#' ? n.trim() : null)
    }
    return t
      ? t
          .split(',')
          .map(n => sm(n))
          .join(',')
      : null
  },
  nt = {
    find(e, t = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(t, e))
    },
    findOne(e, t = document.documentElement) {
      return Element.prototype.querySelector.call(t, e)
    },
    children(e, t) {
      return [].concat(...e.children).filter(n => n.matches(t))
    },
    parents(e, t) {
      const n = []
      let s = e.parentNode.closest(t)
      for (; s; ) n.push(s), (s = s.parentNode.closest(t))
      return n
    },
    prev(e, t) {
      let n = e.previousElementSibling
      for (; n; ) {
        if (n.matches(t)) return [n]
        n = n.previousElementSibling
      }
      return []
    },
    next(e, t) {
      let n = e.nextElementSibling
      for (; n; ) {
        if (n.matches(t)) return [n]
        n = n.nextElementSibling
      }
      return []
    },
    focusableChildren(e) {
      const t = [
        'a',
        'button',
        'input',
        'textarea',
        'select',
        'details',
        '[tabindex]',
        '[contenteditable="true"]',
      ]
        .map(n => `${n}:not([tabindex^="-"])`)
        .join(',')
      return this.find(t, e).filter(n => !Ln(n) && Js(n))
    },
    getSelectorFromElement(e) {
      const t = ka(e)
      return t && nt.findOne(t) ? t : null
    },
    getElementFromSelector(e) {
      const t = ka(e)
      return t ? nt.findOne(t) : null
    },
    getMultipleElementsFromSelector(e) {
      const t = ka(e)
      return t ? nt.find(t) : []
    },
  },
  Yr = (e, t = 'hide') => {
    const n = `click.dismiss${e.EVENT_KEY}`,
      s = e.NAME
    I.on(document, n, `[data-bs-dismiss="${s}"]`, function (i) {
      if (
        (['A', 'AREA'].includes(this.tagName) && i.preventDefault(), Ln(this))
      )
        return
      const o = nt.getElementFromSelector(this) || this.closest(`.${s}`)
      e.getOrCreateInstance(o)[t]()
    })
  },
  HT = 'alert',
  jT = 'bs.alert',
  pm = `.${jT}`,
  zT = `close${pm}`,
  BT = `closed${pm}`,
  WT = 'fade',
  VT = 'show'
class Kr extends Me {
  static get NAME() {
    return HT
  }
  close() {
    if (I.trigger(this._element, zT).defaultPrevented) return
    this._element.classList.remove(VT)
    const n = this._element.classList.contains(WT)
    this._queueCallback(() => this._destroyElement(), this._element, n)
  }
  _destroyElement() {
    this._element.remove(), I.trigger(this._element, BT), this.dispose()
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Kr.getOrCreateInstance(this)
      if (typeof t == 'string') {
        if (n[t] === void 0 || t.startsWith('_') || t === 'constructor')
          throw new TypeError(`No method named "${t}"`)
        n[t](this)
      }
    })
  }
}
Yr(Kr, 'close')
we(Kr)
const UT = 'button',
  YT = 'bs.button',
  KT = `.${YT}`,
  qT = '.data-api',
  GT = 'active',
  Cd = '[data-bs-toggle="button"]',
  XT = `click${KT}${qT}`
class qr extends Me {
  static get NAME() {
    return UT
  }
  toggle() {
    this._element.setAttribute(
      'aria-pressed',
      this._element.classList.toggle(GT),
    )
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = qr.getOrCreateInstance(this)
      t === 'toggle' && n[t]()
    })
  }
}
I.on(document, XT, Cd, e => {
  e.preventDefault()
  const t = e.target.closest(Cd)
  qr.getOrCreateInstance(t).toggle()
})
we(qr)
const QT = 'swipe',
  Zs = '.bs.swipe',
  JT = `touchstart${Zs}`,
  ZT = `touchmove${Zs}`,
  t2 = `touchend${Zs}`,
  e2 = `pointerdown${Zs}`,
  n2 = `pointerup${Zs}`,
  s2 = 'touch',
  i2 = 'pen',
  o2 = 'pointer-event',
  r2 = 40,
  a2 = { endCallback: null, leftCallback: null, rightCallback: null },
  l2 = {
    endCallback: '(function|null)',
    leftCallback: '(function|null)',
    rightCallback: '(function|null)',
  }
class xr extends po {
  constructor(t, n) {
    super(),
      (this._element = t),
      !(!t || !xr.isSupported()) &&
        ((this._config = this._getConfig(n)),
        (this._deltaX = 0),
        (this._supportPointerEvents = !!window.PointerEvent),
        this._initEvents())
  }
  static get Default() {
    return a2
  }
  static get DefaultType() {
    return l2
  }
  static get NAME() {
    return QT
  }
  dispose() {
    I.off(this._element, Zs)
  }
  _start(t) {
    if (!this._supportPointerEvents) {
      this._deltaX = t.touches[0].clientX
      return
    }
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
  }
  _end(t) {
    this._eventIsPointerPenTouch(t) &&
      (this._deltaX = t.clientX - this._deltaX),
      this._handleSwipe(),
      ee(this._config.endCallback)
  }
  _move(t) {
    this._deltaX =
      t.touches && t.touches.length > 1
        ? 0
        : t.touches[0].clientX - this._deltaX
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX)
    if (t <= r2) return
    const n = t / this._deltaX
    ;(this._deltaX = 0),
      n && ee(n > 0 ? this._config.rightCallback : this._config.leftCallback)
  }
  _initEvents() {
    this._supportPointerEvents
      ? (I.on(this._element, e2, t => this._start(t)),
        I.on(this._element, n2, t => this._end(t)),
        this._element.classList.add(o2))
      : (I.on(this._element, JT, t => this._start(t)),
        I.on(this._element, ZT, t => this._move(t)),
        I.on(this._element, t2, t => this._end(t)))
  }
  _eventIsPointerPenTouch(t) {
    return (
      this._supportPointerEvents &&
      (t.pointerType === i2 || t.pointerType === s2)
    )
  }
  static isSupported() {
    return (
      'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0
    )
  }
}
const c2 = 'carousel',
  f2 = 'bs.carousel',
  Fn = `.${f2}`,
  gm = '.data-api',
  u2 = 'ArrowLeft',
  d2 = 'ArrowRight',
  h2 = 500,
  fi = 'next',
  bs = 'prev',
  ws = 'left',
  Qo = 'right',
  p2 = `slide${Fn}`,
  Ma = `slid${Fn}`,
  g2 = `keydown${Fn}`,
  m2 = `mouseenter${Fn}`,
  _2 = `mouseleave${Fn}`,
  b2 = `dragstart${Fn}`,
  v2 = `load${Fn}${gm}`,
  y2 = `click${Fn}${gm}`,
  mm = 'carousel',
  No = 'active',
  x2 = 'slide',
  E2 = 'carousel-item-end',
  w2 = 'carousel-item-start',
  A2 = 'carousel-item-next',
  S2 = 'carousel-item-prev',
  _m = '.active',
  bm = '.carousel-item',
  T2 = _m + bm,
  O2 = '.carousel-item img',
  C2 = '.carousel-indicators',
  k2 = '[data-bs-slide], [data-bs-slide-to]',
  M2 = '[data-bs-ride="carousel"]',
  P2 = { [u2]: Qo, [d2]: ws },
  D2 = {
    interval: 5e3,
    keyboard: !0,
    pause: 'hover',
    ride: !1,
    touch: !0,
    wrap: !0,
  },
  L2 = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    pause: '(string|boolean)',
    ride: '(boolean|string)',
    touch: 'boolean',
    wrap: 'boolean',
  }
class go extends Me {
  constructor(t, n) {
    super(t, n),
      (this._interval = null),
      (this._activeElement = null),
      (this._isSliding = !1),
      (this.touchTimeout = null),
      (this._swipeHelper = null),
      (this._indicatorsElement = nt.findOne(C2, this._element)),
      this._addEventListeners(),
      this._config.ride === mm && this.cycle()
  }
  static get Default() {
    return D2
  }
  static get DefaultType() {
    return L2
  }
  static get NAME() {
    return c2
  }
  next() {
    this._slide(fi)
  }
  nextWhenVisible() {
    !document.hidden && Js(this._element) && this.next()
  }
  prev() {
    this._slide(bs)
  }
  pause() {
    this._isSliding && im(this._element), this._clearInterval()
  }
  cycle() {
    this._clearInterval(),
      this._updateInterval(),
      (this._interval = setInterval(
        () => this.nextWhenVisible(),
        this._config.interval,
      ))
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        I.one(this._element, Ma, () => this.cycle())
        return
      }
      this.cycle()
    }
  }
  to(t) {
    const n = this._getItems()
    if (t > n.length - 1 || t < 0) return
    if (this._isSliding) {
      I.one(this._element, Ma, () => this.to(t))
      return
    }
    const s = this._getItemIndex(this._getActive())
    if (s === t) return
    const i = t > s ? fi : bs
    this._slide(i, n[t])
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
  }
  _configAfterMerge(t) {
    return (t.defaultInterval = t.interval), t
  }
  _addEventListeners() {
    this._config.keyboard && I.on(this._element, g2, t => this._keydown(t)),
      this._config.pause === 'hover' &&
        (I.on(this._element, m2, () => this.pause()),
        I.on(this._element, _2, () => this._maybeEnableCycle())),
      this._config.touch && xr.isSupported() && this._addTouchEventListeners()
  }
  _addTouchEventListeners() {
    for (const s of nt.find(O2, this._element))
      I.on(s, b2, i => i.preventDefault())
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(ws)),
      rightCallback: () => this._slide(this._directionToOrder(Qo)),
      endCallback: () => {
        this._config.pause === 'hover' &&
          (this.pause(),
          this.touchTimeout && clearTimeout(this.touchTimeout),
          (this.touchTimeout = setTimeout(
            () => this._maybeEnableCycle(),
            h2 + this._config.interval,
          )))
      },
    }
    this._swipeHelper = new xr(this._element, n)
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName)) return
    const n = P2[t.key]
    n && (t.preventDefault(), this._slide(this._directionToOrder(n)))
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t)
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement) return
    const n = nt.findOne(_m, this._indicatorsElement)
    n.classList.remove(No), n.removeAttribute('aria-current')
    const s = nt.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement)
    s && (s.classList.add(No), s.setAttribute('aria-current', 'true'))
  }
  _updateInterval() {
    const t = this._activeElement || this._getActive()
    if (!t) return
    const n = Number.parseInt(t.getAttribute('data-bs-interval'), 10)
    this._config.interval = n || this._config.defaultInterval
  }
  _slide(t, n = null) {
    if (this._isSliding) return
    const s = this._getActive(),
      i = t === fi,
      o = n || Hc(this._getItems(), s, i, this._config.wrap)
    if (o === s) return
    const r = this._getItemIndex(o),
      a = h =>
        I.trigger(this._element, h, {
          relatedTarget: o,
          direction: this._orderToDirection(t),
          from: this._getItemIndex(s),
          to: r,
        })
    if (a(p2).defaultPrevented || !s || !o) return
    const c = !!this._interval
    this.pause(),
      (this._isSliding = !0),
      this._setActiveIndicatorElement(r),
      (this._activeElement = o)
    const f = i ? w2 : E2,
      u = i ? A2 : S2
    o.classList.add(u), ho(o), s.classList.add(f), o.classList.add(f)
    const d = () => {
      o.classList.remove(f, u),
        o.classList.add(No),
        s.classList.remove(No, u, f),
        (this._isSliding = !1),
        a(Ma)
    }
    this._queueCallback(d, s, this._isAnimated()), c && this.cycle()
  }
  _isAnimated() {
    return this._element.classList.contains(x2)
  }
  _getActive() {
    return nt.findOne(T2, this._element)
  }
  _getItems() {
    return nt.find(bm, this._element)
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), (this._interval = null))
  }
  _directionToOrder(t) {
    return xe() ? (t === ws ? bs : fi) : t === ws ? fi : bs
  }
  _orderToDirection(t) {
    return xe() ? (t === bs ? ws : Qo) : t === bs ? Qo : ws
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = go.getOrCreateInstance(this, t)
      if (typeof t == 'number') {
        n.to(t)
        return
      }
      if (typeof t == 'string') {
        if (n[t] === void 0 || t.startsWith('_') || t === 'constructor')
          throw new TypeError(`No method named "${t}"`)
        n[t]()
      }
    })
  }
}
I.on(document, y2, k2, function (e) {
  const t = nt.getElementFromSelector(this)
  if (!t || !t.classList.contains(mm)) return
  e.preventDefault()
  const n = go.getOrCreateInstance(t),
    s = this.getAttribute('data-bs-slide-to')
  if (s) {
    n.to(s), n._maybeEnableCycle()
    return
  }
  if (rn.getDataAttribute(this, 'slide') === 'next') {
    n.next(), n._maybeEnableCycle()
    return
  }
  n.prev(), n._maybeEnableCycle()
})
I.on(window, v2, () => {
  const e = nt.find(M2)
  for (const t of e) go.getOrCreateInstance(t)
})
we(go)
const I2 = 'collapse',
  N2 = 'bs.collapse',
  mo = `.${N2}`,
  R2 = '.data-api',
  $2 = `show${mo}`,
  F2 = `shown${mo}`,
  H2 = `hide${mo}`,
  j2 = `hidden${mo}`,
  z2 = `click${mo}${R2}`,
  Pa = 'show',
  Ts = 'collapse',
  Ro = 'collapsing',
  B2 = 'collapsed',
  W2 = `:scope .${Ts} .${Ts}`,
  V2 = 'collapse-horizontal',
  U2 = 'width',
  Y2 = 'height',
  K2 = '.collapse.show, .collapse.collapsing',
  Cl = '[data-bs-toggle="collapse"]',
  q2 = { parent: null, toggle: !0 },
  G2 = { parent: '(null|element)', toggle: 'boolean' }
class to extends Me {
  constructor(t, n) {
    super(t, n), (this._isTransitioning = !1), (this._triggerArray = [])
    const s = nt.find(Cl)
    for (const i of s) {
      const o = nt.getSelectorFromElement(i),
        r = nt.find(o).filter(a => a === this._element)
      o !== null && r.length && this._triggerArray.push(i)
    }
    this._initializeChildren(),
      this._config.parent ||
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
      this._config.toggle && this.toggle()
  }
  static get Default() {
    return q2
  }
  static get DefaultType() {
    return G2
  }
  static get NAME() {
    return I2
  }
  toggle() {
    this._isShown() ? this.hide() : this.show()
  }
  show() {
    if (this._isTransitioning || this._isShown()) return
    let t = []
    if (
      (this._config.parent &&
        (t = this._getFirstLevelChildren(K2)
          .filter(a => a !== this._element)
          .map(a => to.getOrCreateInstance(a, { toggle: !1 }))),
      (t.length && t[0]._isTransitioning) ||
        I.trigger(this._element, $2).defaultPrevented)
    )
      return
    for (const a of t) a.hide()
    const s = this._getDimension()
    this._element.classList.remove(Ts),
      this._element.classList.add(Ro),
      (this._element.style[s] = 0),
      this._addAriaAndCollapsedClass(this._triggerArray, !0),
      (this._isTransitioning = !0)
    const i = () => {
        ;(this._isTransitioning = !1),
          this._element.classList.remove(Ro),
          this._element.classList.add(Ts, Pa),
          (this._element.style[s] = ''),
          I.trigger(this._element, F2)
      },
      r = `scroll${s[0].toUpperCase() + s.slice(1)}`
    this._queueCallback(i, this._element, !0),
      (this._element.style[s] = `${this._element[r]}px`)
  }
  hide() {
    if (
      this._isTransitioning ||
      !this._isShown() ||
      I.trigger(this._element, H2).defaultPrevented
    )
      return
    const n = this._getDimension()
    ;(this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`),
      ho(this._element),
      this._element.classList.add(Ro),
      this._element.classList.remove(Ts, Pa)
    for (const i of this._triggerArray) {
      const o = nt.getElementFromSelector(i)
      o && !this._isShown(o) && this._addAriaAndCollapsedClass([i], !1)
    }
    this._isTransitioning = !0
    const s = () => {
      ;(this._isTransitioning = !1),
        this._element.classList.remove(Ro),
        this._element.classList.add(Ts),
        I.trigger(this._element, j2)
    }
    ;(this._element.style[n] = ''), this._queueCallback(s, this._element, !0)
  }
  _isShown(t = this._element) {
    return t.classList.contains(Pa)
  }
  _configAfterMerge(t) {
    return (t.toggle = !!t.toggle), (t.parent = Dn(t.parent)), t
  }
  _getDimension() {
    return this._element.classList.contains(V2) ? U2 : Y2
  }
  _initializeChildren() {
    if (!this._config.parent) return
    const t = this._getFirstLevelChildren(Cl)
    for (const n of t) {
      const s = nt.getElementFromSelector(n)
      s && this._addAriaAndCollapsedClass([n], this._isShown(s))
    }
  }
  _getFirstLevelChildren(t) {
    const n = nt.find(W2, this._config.parent)
    return nt.find(t, this._config.parent).filter(s => !n.includes(s))
  }
  _addAriaAndCollapsedClass(t, n) {
    if (t.length)
      for (const s of t)
        s.classList.toggle(B2, !n), s.setAttribute('aria-expanded', n)
  }
  static jQueryInterface(t) {
    const n = {}
    return (
      typeof t == 'string' && /show|hide/.test(t) && (n.toggle = !1),
      this.each(function () {
        const s = to.getOrCreateInstance(this, n)
        if (typeof t == 'string') {
          if (typeof s[t] > 'u') throw new TypeError(`No method named "${t}"`)
          s[t]()
        }
      })
    )
  }
}
I.on(document, z2, Cl, function (e) {
  ;(e.target.tagName === 'A' ||
    (e.delegateTarget && e.delegateTarget.tagName === 'A')) &&
    e.preventDefault()
  for (const t of nt.getMultipleElementsFromSelector(this))
    to.getOrCreateInstance(t, { toggle: !1 }).toggle()
})
we(to)
const kd = 'dropdown',
  X2 = 'bs.dropdown',
  ds = `.${X2}`,
  zc = '.data-api',
  Q2 = 'Escape',
  Md = 'Tab',
  J2 = 'ArrowUp',
  Pd = 'ArrowDown',
  Z2 = 2,
  tO = `hide${ds}`,
  eO = `hidden${ds}`,
  nO = `show${ds}`,
  sO = `shown${ds}`,
  vm = `click${ds}${zc}`,
  ym = `keydown${ds}${zc}`,
  iO = `keyup${ds}${zc}`,
  As = 'show',
  oO = 'dropup',
  rO = 'dropend',
  aO = 'dropstart',
  lO = 'dropup-center',
  cO = 'dropdown-center',
  Xn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
  fO = `${Xn}.${As}`,
  Jo = '.dropdown-menu',
  uO = '.navbar',
  dO = '.navbar-nav',
  hO = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
  pO = xe() ? 'top-end' : 'top-start',
  gO = xe() ? 'top-start' : 'top-end',
  mO = xe() ? 'bottom-end' : 'bottom-start',
  _O = xe() ? 'bottom-start' : 'bottom-end',
  bO = xe() ? 'left-start' : 'right-start',
  vO = xe() ? 'right-start' : 'left-start',
  yO = 'top',
  xO = 'bottom',
  EO = {
    autoClose: !0,
    boundary: 'clippingParents',
    display: 'dynamic',
    offset: [0, 2],
    popperConfig: null,
    reference: 'toggle',
  },
  wO = {
    autoClose: '(boolean|string)',
    boundary: '(string|element)',
    display: 'string',
    offset: '(array|string|function)',
    popperConfig: '(null|object|function)',
    reference: '(string|element|object)',
  }
class We extends Me {
  constructor(t, n) {
    super(t, n),
      (this._popper = null),
      (this._parent = this._element.parentNode),
      (this._menu =
        nt.next(this._element, Jo)[0] ||
        nt.prev(this._element, Jo)[0] ||
        nt.findOne(Jo, this._parent)),
      (this._inNavbar = this._detectNavbar())
  }
  static get Default() {
    return EO
  }
  static get DefaultType() {
    return wO
  }
  static get NAME() {
    return kd
  }
  toggle() {
    return this._isShown() ? this.hide() : this.show()
  }
  show() {
    if (Ln(this._element) || this._isShown()) return
    const t = { relatedTarget: this._element }
    if (!I.trigger(this._element, nO, t).defaultPrevented) {
      if (
        (this._createPopper(),
        'ontouchstart' in document.documentElement && !this._parent.closest(dO))
      )
        for (const s of [].concat(...document.body.children))
          I.on(s, 'mouseover', yr)
      this._element.focus(),
        this._element.setAttribute('aria-expanded', !0),
        this._menu.classList.add(As),
        this._element.classList.add(As),
        I.trigger(this._element, sO, t)
    }
  }
  hide() {
    if (Ln(this._element) || !this._isShown()) return
    const t = { relatedTarget: this._element }
    this._completeHide(t)
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose()
  }
  update() {
    ;(this._inNavbar = this._detectNavbar()),
      this._popper && this._popper.update()
  }
  _completeHide(t) {
    if (!I.trigger(this._element, tO, t).defaultPrevented) {
      if ('ontouchstart' in document.documentElement)
        for (const s of [].concat(...document.body.children))
          I.off(s, 'mouseover', yr)
      this._popper && this._popper.destroy(),
        this._menu.classList.remove(As),
        this._element.classList.remove(As),
        this._element.setAttribute('aria-expanded', 'false'),
        rn.removeDataAttribute(this._menu, 'popper'),
        I.trigger(this._element, eO, t)
    }
  }
  _getConfig(t) {
    if (
      ((t = super._getConfig(t)),
      typeof t.reference == 'object' &&
        !on(t.reference) &&
        typeof t.reference.getBoundingClientRect != 'function')
    )
      throw new TypeError(
        `${kd.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`,
      )
    return t
  }
  _createPopper() {
    if (typeof nm > 'u')
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)",
      )
    let t = this._element
    this._config.reference === 'parent'
      ? (t = this._parent)
      : on(this._config.reference)
        ? (t = Dn(this._config.reference))
        : typeof this._config.reference == 'object' &&
          (t = this._config.reference)
    const n = this._getPopperConfig()
    this._popper = Fc(t, this._menu, n)
  }
  _isShown() {
    return this._menu.classList.contains(As)
  }
  _getPlacement() {
    const t = this._parent
    if (t.classList.contains(rO)) return bO
    if (t.classList.contains(aO)) return vO
    if (t.classList.contains(lO)) return yO
    if (t.classList.contains(cO)) return xO
    const n =
      getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() ===
      'end'
    return t.classList.contains(oO) ? (n ? gO : pO) : n ? _O : mO
  }
  _detectNavbar() {
    return this._element.closest(uO) !== null
  }
  _getOffset() {
    const { offset: t } = this._config
    return typeof t == 'string'
      ? t.split(',').map(n => Number.parseInt(n, 10))
      : typeof t == 'function'
        ? n => t(n, this._element)
        : t
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [
        {
          name: 'preventOverflow',
          options: { boundary: this._config.boundary },
        },
        { name: 'offset', options: { offset: this._getOffset() } },
      ],
    }
    return (
      (this._inNavbar || this._config.display === 'static') &&
        (rn.setDataAttribute(this._menu, 'popper', 'static'),
        (t.modifiers = [{ name: 'applyStyles', enabled: !1 }])),
      { ...t, ...ee(this._config.popperConfig, [t]) }
    )
  }
  _selectMenuItem({ key: t, target: n }) {
    const s = nt.find(hO, this._menu).filter(i => Js(i))
    s.length && Hc(s, n, t === Pd, !s.includes(n)).focus()
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = We.getOrCreateInstance(this, t)
      if (typeof t == 'string') {
        if (typeof n[t] > 'u') throw new TypeError(`No method named "${t}"`)
        n[t]()
      }
    })
  }
  static clearMenus(t) {
    if (t.button === Z2 || (t.type === 'keyup' && t.key !== Md)) return
    const n = nt.find(fO)
    for (const s of n) {
      const i = We.getInstance(s)
      if (!i || i._config.autoClose === !1) continue
      const o = t.composedPath(),
        r = o.includes(i._menu)
      if (
        o.includes(i._element) ||
        (i._config.autoClose === 'inside' && !r) ||
        (i._config.autoClose === 'outside' && r) ||
        (i._menu.contains(t.target) &&
          ((t.type === 'keyup' && t.key === Md) ||
            /input|select|option|textarea|form/i.test(t.target.tagName)))
      )
        continue
      const a = { relatedTarget: i._element }
      t.type === 'click' && (a.clickEvent = t), i._completeHide(a)
    }
  }
  static dataApiKeydownHandler(t) {
    const n = /input|textarea/i.test(t.target.tagName),
      s = t.key === Q2,
      i = [J2, Pd].includes(t.key)
    if ((!i && !s) || (n && !s)) return
    t.preventDefault()
    const o = this.matches(Xn)
        ? this
        : nt.prev(this, Xn)[0] ||
          nt.next(this, Xn)[0] ||
          nt.findOne(Xn, t.delegateTarget.parentNode),
      r = We.getOrCreateInstance(o)
    if (i) {
      t.stopPropagation(), r.show(), r._selectMenuItem(t)
      return
    }
    r._isShown() && (t.stopPropagation(), r.hide(), o.focus())
  }
}
I.on(document, ym, Xn, We.dataApiKeydownHandler)
I.on(document, ym, Jo, We.dataApiKeydownHandler)
I.on(document, vm, We.clearMenus)
I.on(document, iO, We.clearMenus)
I.on(document, vm, Xn, function (e) {
  e.preventDefault(), We.getOrCreateInstance(this).toggle()
})
we(We)
const xm = 'backdrop',
  AO = 'fade',
  Dd = 'show',
  Ld = `mousedown.bs.${xm}`,
  SO = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: 'body',
  },
  TO = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)',
  }
class Em extends po {
  constructor(t) {
    super(),
      (this._config = this._getConfig(t)),
      (this._isAppended = !1),
      (this._element = null)
  }
  static get Default() {
    return SO
  }
  static get DefaultType() {
    return TO
  }
  static get NAME() {
    return xm
  }
  show(t) {
    if (!this._config.isVisible) {
      ee(t)
      return
    }
    this._append()
    const n = this._getElement()
    this._config.isAnimated && ho(n),
      n.classList.add(Dd),
      this._emulateAnimation(() => {
        ee(t)
      })
  }
  hide(t) {
    if (!this._config.isVisible) {
      ee(t)
      return
    }
    this._getElement().classList.remove(Dd),
      this._emulateAnimation(() => {
        this.dispose(), ee(t)
      })
  }
  dispose() {
    this._isAppended &&
      (I.off(this._element, Ld),
      this._element.remove(),
      (this._isAppended = !1))
  }
  _getElement() {
    if (!this._element) {
      const t = document.createElement('div')
      ;(t.className = this._config.className),
        this._config.isAnimated && t.classList.add(AO),
        (this._element = t)
    }
    return this._element
  }
  _configAfterMerge(t) {
    return (t.rootElement = Dn(t.rootElement)), t
  }
  _append() {
    if (this._isAppended) return
    const t = this._getElement()
    this._config.rootElement.append(t),
      I.on(t, Ld, () => {
        ee(this._config.clickCallback)
      }),
      (this._isAppended = !0)
  }
  _emulateAnimation(t) {
    am(t, this._getElement(), this._config.isAnimated)
  }
}
const OO = 'focustrap',
  CO = 'bs.focustrap',
  Er = `.${CO}`,
  kO = `focusin${Er}`,
  MO = `keydown.tab${Er}`,
  PO = 'Tab',
  DO = 'forward',
  Id = 'backward',
  LO = { autofocus: !0, trapElement: null },
  IO = { autofocus: 'boolean', trapElement: 'element' }
class wm extends po {
  constructor(t) {
    super(),
      (this._config = this._getConfig(t)),
      (this._isActive = !1),
      (this._lastTabNavDirection = null)
  }
  static get Default() {
    return LO
  }
  static get DefaultType() {
    return IO
  }
  static get NAME() {
    return OO
  }
  activate() {
    this._isActive ||
      (this._config.autofocus && this._config.trapElement.focus(),
      I.off(document, Er),
      I.on(document, kO, t => this._handleFocusin(t)),
      I.on(document, MO, t => this._handleKeydown(t)),
      (this._isActive = !0))
  }
  deactivate() {
    this._isActive && ((this._isActive = !1), I.off(document, Er))
  }
  _handleFocusin(t) {
    const { trapElement: n } = this._config
    if (t.target === document || t.target === n || n.contains(t.target)) return
    const s = nt.focusableChildren(n)
    s.length === 0
      ? n.focus()
      : this._lastTabNavDirection === Id
        ? s[s.length - 1].focus()
        : s[0].focus()
  }
  _handleKeydown(t) {
    t.key === PO && (this._lastTabNavDirection = t.shiftKey ? Id : DO)
  }
}
const Nd = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  Rd = '.sticky-top',
  $o = 'padding-right',
  $d = 'margin-right'
class kl {
  constructor() {
    this._element = document.body
  }
  getWidth() {
    const t = document.documentElement.clientWidth
    return Math.abs(window.innerWidth - t)
  }
  hide() {
    const t = this.getWidth()
    this._disableOverFlow(),
      this._setElementAttributes(this._element, $o, n => n + t),
      this._setElementAttributes(Nd, $o, n => n + t),
      this._setElementAttributes(Rd, $d, n => n - t)
  }
  reset() {
    this._resetElementAttributes(this._element, 'overflow'),
      this._resetElementAttributes(this._element, $o),
      this._resetElementAttributes(Nd, $o),
      this._resetElementAttributes(Rd, $d)
  }
  isOverflowing() {
    return this.getWidth() > 0
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, 'overflow'),
      (this._element.style.overflow = 'hidden')
  }
  _setElementAttributes(t, n, s) {
    const i = this.getWidth(),
      o = r => {
        if (r !== this._element && window.innerWidth > r.clientWidth + i) return
        this._saveInitialAttribute(r, n)
        const a = window.getComputedStyle(r).getPropertyValue(n)
        r.style.setProperty(n, `${s(Number.parseFloat(a))}px`)
      }
    this._applyManipulationCallback(t, o)
  }
  _saveInitialAttribute(t, n) {
    const s = t.style.getPropertyValue(n)
    s && rn.setDataAttribute(t, n, s)
  }
  _resetElementAttributes(t, n) {
    const s = i => {
      const o = rn.getDataAttribute(i, n)
      if (o === null) {
        i.style.removeProperty(n)
        return
      }
      rn.removeDataAttribute(i, n), i.style.setProperty(n, o)
    }
    this._applyManipulationCallback(t, s)
  }
  _applyManipulationCallback(t, n) {
    if (on(t)) {
      n(t)
      return
    }
    for (const s of nt.find(t, this._element)) n(s)
  }
}
const NO = 'modal',
  RO = 'bs.modal',
  Ee = `.${RO}`,
  $O = '.data-api',
  FO = 'Escape',
  HO = `hide${Ee}`,
  jO = `hidePrevented${Ee}`,
  Am = `hidden${Ee}`,
  Sm = `show${Ee}`,
  zO = `shown${Ee}`,
  BO = `resize${Ee}`,
  WO = `click.dismiss${Ee}`,
  VO = `mousedown.dismiss${Ee}`,
  UO = `keydown.dismiss${Ee}`,
  YO = `click${Ee}${$O}`,
  Fd = 'modal-open',
  KO = 'fade',
  Hd = 'show',
  Da = 'modal-static',
  qO = '.modal.show',
  GO = '.modal-dialog',
  XO = '.modal-body',
  QO = '[data-bs-toggle="modal"]',
  JO = { backdrop: !0, focus: !0, keyboard: !0 },
  ZO = { backdrop: '(boolean|string)', focus: 'boolean', keyboard: 'boolean' }
class Us extends Me {
  constructor(t, n) {
    super(t, n),
      (this._dialog = nt.findOne(GO, this._element)),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      (this._isShown = !1),
      (this._isTransitioning = !1),
      (this._scrollBar = new kl()),
      this._addEventListeners()
  }
  static get Default() {
    return JO
  }
  static get DefaultType() {
    return ZO
  }
  static get NAME() {
    return NO
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t)
  }
  show(t) {
    this._isShown ||
      this._isTransitioning ||
      I.trigger(this._element, Sm, { relatedTarget: t }).defaultPrevented ||
      ((this._isShown = !0),
      (this._isTransitioning = !0),
      this._scrollBar.hide(),
      document.body.classList.add(Fd),
      this._adjustDialog(),
      this._backdrop.show(() => this._showElement(t)))
  }
  hide() {
    !this._isShown ||
      this._isTransitioning ||
      I.trigger(this._element, HO).defaultPrevented ||
      ((this._isShown = !1),
      (this._isTransitioning = !0),
      this._focustrap.deactivate(),
      this._element.classList.remove(Hd),
      this._queueCallback(
        () => this._hideModal(),
        this._element,
        this._isAnimated(),
      ))
  }
  dispose() {
    I.off(window, Ee),
      I.off(this._dialog, Ee),
      this._backdrop.dispose(),
      this._focustrap.deactivate(),
      super.dispose()
  }
  handleUpdate() {
    this._adjustDialog()
  }
  _initializeBackDrop() {
    return new Em({
      isVisible: !!this._config.backdrop,
      isAnimated: this._isAnimated(),
    })
  }
  _initializeFocusTrap() {
    return new wm({ trapElement: this._element })
  }
  _showElement(t) {
    document.body.contains(this._element) ||
      document.body.append(this._element),
      (this._element.style.display = 'block'),
      this._element.removeAttribute('aria-hidden'),
      this._element.setAttribute('aria-modal', !0),
      this._element.setAttribute('role', 'dialog'),
      (this._element.scrollTop = 0)
    const n = nt.findOne(XO, this._dialog)
    n && (n.scrollTop = 0), ho(this._element), this._element.classList.add(Hd)
    const s = () => {
      this._config.focus && this._focustrap.activate(),
        (this._isTransitioning = !1),
        I.trigger(this._element, zO, { relatedTarget: t })
    }
    this._queueCallback(s, this._dialog, this._isAnimated())
  }
  _addEventListeners() {
    I.on(this._element, UO, t => {
      if (t.key === FO) {
        if (this._config.keyboard) {
          this.hide()
          return
        }
        this._triggerBackdropTransition()
      }
    }),
      I.on(window, BO, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog()
      }),
      I.on(this._element, VO, t => {
        I.one(this._element, WO, n => {
          if (!(this._element !== t.target || this._element !== n.target)) {
            if (this._config.backdrop === 'static') {
              this._triggerBackdropTransition()
              return
            }
            this._config.backdrop && this.hide()
          }
        })
      })
  }
  _hideModal() {
    ;(this._element.style.display = 'none'),
      this._element.setAttribute('aria-hidden', !0),
      this._element.removeAttribute('aria-modal'),
      this._element.removeAttribute('role'),
      (this._isTransitioning = !1),
      this._backdrop.hide(() => {
        document.body.classList.remove(Fd),
          this._resetAdjustments(),
          this._scrollBar.reset(),
          I.trigger(this._element, Am)
      })
  }
  _isAnimated() {
    return this._element.classList.contains(KO)
  }
  _triggerBackdropTransition() {
    if (I.trigger(this._element, jO).defaultPrevented) return
    const n =
        this._element.scrollHeight > document.documentElement.clientHeight,
      s = this._element.style.overflowY
    s === 'hidden' ||
      this._element.classList.contains(Da) ||
      (n || (this._element.style.overflowY = 'hidden'),
      this._element.classList.add(Da),
      this._queueCallback(() => {
        this._element.classList.remove(Da),
          this._queueCallback(() => {
            this._element.style.overflowY = s
          }, this._dialog)
      }, this._dialog),
      this._element.focus())
  }
  _adjustDialog() {
    const t =
        this._element.scrollHeight > document.documentElement.clientHeight,
      n = this._scrollBar.getWidth(),
      s = n > 0
    if (s && !t) {
      const i = xe() ? 'paddingLeft' : 'paddingRight'
      this._element.style[i] = `${n}px`
    }
    if (!s && t) {
      const i = xe() ? 'paddingRight' : 'paddingLeft'
      this._element.style[i] = `${n}px`
    }
  }
  _resetAdjustments() {
    ;(this._element.style.paddingLeft = ''),
      (this._element.style.paddingRight = '')
  }
  static jQueryInterface(t, n) {
    return this.each(function () {
      const s = Us.getOrCreateInstance(this, t)
      if (typeof t == 'string') {
        if (typeof s[t] > 'u') throw new TypeError(`No method named "${t}"`)
        s[t](n)
      }
    })
  }
}
I.on(document, YO, QO, function (e) {
  const t = nt.getElementFromSelector(this)
  ;['A', 'AREA'].includes(this.tagName) && e.preventDefault(),
    I.one(t, Sm, i => {
      i.defaultPrevented ||
        I.one(t, Am, () => {
          Js(this) && this.focus()
        })
    })
  const n = nt.findOne(qO)
  n && Us.getInstance(n).hide(), Us.getOrCreateInstance(t).toggle(this)
})
Yr(Us)
we(Us)
const tC = 'offcanvas',
  eC = 'bs.offcanvas',
  pn = `.${eC}`,
  Tm = '.data-api',
  nC = `load${pn}${Tm}`,
  sC = 'Escape',
  jd = 'show',
  zd = 'showing',
  Bd = 'hiding',
  iC = 'offcanvas-backdrop',
  Om = '.offcanvas.show',
  oC = `show${pn}`,
  rC = `shown${pn}`,
  aC = `hide${pn}`,
  Wd = `hidePrevented${pn}`,
  Cm = `hidden${pn}`,
  lC = `resize${pn}`,
  cC = `click${pn}${Tm}`,
  fC = `keydown.dismiss${pn}`,
  uC = '[data-bs-toggle="offcanvas"]',
  dC = { backdrop: !0, keyboard: !0, scroll: !1 },
  hC = { backdrop: '(boolean|string)', keyboard: 'boolean', scroll: 'boolean' }
class In extends Me {
  constructor(t, n) {
    super(t, n),
      (this._isShown = !1),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      this._addEventListeners()
  }
  static get Default() {
    return dC
  }
  static get DefaultType() {
    return hC
  }
  static get NAME() {
    return tC
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t)
  }
  show(t) {
    if (
      this._isShown ||
      I.trigger(this._element, oC, { relatedTarget: t }).defaultPrevented
    )
      return
    ;(this._isShown = !0),
      this._backdrop.show(),
      this._config.scroll || new kl().hide(),
      this._element.setAttribute('aria-modal', !0),
      this._element.setAttribute('role', 'dialog'),
      this._element.classList.add(zd)
    const s = () => {
      ;(!this._config.scroll || this._config.backdrop) &&
        this._focustrap.activate(),
        this._element.classList.add(jd),
        this._element.classList.remove(zd),
        I.trigger(this._element, rC, { relatedTarget: t })
    }
    this._queueCallback(s, this._element, !0)
  }
  hide() {
    if (!this._isShown || I.trigger(this._element, aC).defaultPrevented) return
    this._focustrap.deactivate(),
      this._element.blur(),
      (this._isShown = !1),
      this._element.classList.add(Bd),
      this._backdrop.hide()
    const n = () => {
      this._element.classList.remove(jd, Bd),
        this._element.removeAttribute('aria-modal'),
        this._element.removeAttribute('role'),
        this._config.scroll || new kl().reset(),
        I.trigger(this._element, Cm)
    }
    this._queueCallback(n, this._element, !0)
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
  }
  _initializeBackDrop() {
    const t = () => {
        if (this._config.backdrop === 'static') {
          I.trigger(this._element, Wd)
          return
        }
        this.hide()
      },
      n = !!this._config.backdrop
    return new Em({
      className: iC,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? t : null,
    })
  }
  _initializeFocusTrap() {
    return new wm({ trapElement: this._element })
  }
  _addEventListeners() {
    I.on(this._element, fC, t => {
      if (t.key === sC) {
        if (this._config.keyboard) {
          this.hide()
          return
        }
        I.trigger(this._element, Wd)
      }
    })
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = In.getOrCreateInstance(this, t)
      if (typeof t == 'string') {
        if (n[t] === void 0 || t.startsWith('_') || t === 'constructor')
          throw new TypeError(`No method named "${t}"`)
        n[t](this)
      }
    })
  }
}
I.on(document, cC, uC, function (e) {
  const t = nt.getElementFromSelector(this)
  if ((['A', 'AREA'].includes(this.tagName) && e.preventDefault(), Ln(this)))
    return
  I.one(t, Cm, () => {
    Js(this) && this.focus()
  })
  const n = nt.findOne(Om)
  n && n !== t && In.getInstance(n).hide(),
    In.getOrCreateInstance(t).toggle(this)
})
I.on(window, nC, () => {
  for (const e of nt.find(Om)) In.getOrCreateInstance(e).show()
})
I.on(window, lC, () => {
  for (const e of nt.find('[aria-modal][class*=show][class*=offcanvas-]'))
    getComputedStyle(e).position !== 'fixed' && In.getOrCreateInstance(e).hide()
})
Yr(In)
we(In)
const pC = /^aria-[\w-]*$/i,
  km = {
    '*': ['class', 'dir', 'id', 'lang', 'role', pC],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: [],
  },
  gC = new Set([
    'background',
    'cite',
    'href',
    'itemtype',
    'longdesc',
    'poster',
    'src',
    'xlink:href',
  ]),
  mC = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
  _C = (e, t) => {
    const n = e.nodeName.toLowerCase()
    return t.includes(n)
      ? gC.has(n)
        ? !!mC.test(e.nodeValue)
        : !0
      : t.filter(s => s instanceof RegExp).some(s => s.test(n))
  }
function bC(e, t, n) {
  if (!e.length) return e
  if (n && typeof n == 'function') return n(e)
  const i = new window.DOMParser().parseFromString(e, 'text/html'),
    o = [].concat(...i.body.querySelectorAll('*'))
  for (const r of o) {
    const a = r.nodeName.toLowerCase()
    if (!Object.keys(t).includes(a)) {
      r.remove()
      continue
    }
    const l = [].concat(...r.attributes),
      c = [].concat(t['*'] || [], t[a] || [])
    for (const f of l) _C(f, c) || r.removeAttribute(f.nodeName)
  }
  return i.body.innerHTML
}
const vC = 'TemplateFactory',
  yC = {
    allowList: km,
    content: {},
    extraClass: '',
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: '<div></div>',
  },
  xC = {
    allowList: 'object',
    content: 'object',
    extraClass: '(string|function)',
    html: 'boolean',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    template: 'string',
  },
  EC = { entry: '(string|element|function|null)', selector: '(string|element)' }
class wC extends po {
  constructor(t) {
    super(), (this._config = this._getConfig(t))
  }
  static get Default() {
    return yC
  }
  static get DefaultType() {
    return xC
  }
  static get NAME() {
    return vC
  }
  getContent() {
    return Object.values(this._config.content)
      .map(t => this._resolvePossibleFunction(t))
      .filter(Boolean)
  }
  hasContent() {
    return this.getContent().length > 0
  }
  changeContent(t) {
    return (
      this._checkContent(t),
      (this._config.content = { ...this._config.content, ...t }),
      this
    )
  }
  toHtml() {
    const t = document.createElement('div')
    t.innerHTML = this._maybeSanitize(this._config.template)
    for (const [i, o] of Object.entries(this._config.content))
      this._setContent(t, o, i)
    const n = t.children[0],
      s = this._resolvePossibleFunction(this._config.extraClass)
    return s && n.classList.add(...s.split(' ')), n
  }
  _typeCheckConfig(t) {
    super._typeCheckConfig(t), this._checkContent(t.content)
  }
  _checkContent(t) {
    for (const [n, s] of Object.entries(t))
      super._typeCheckConfig({ selector: n, entry: s }, EC)
  }
  _setContent(t, n, s) {
    const i = nt.findOne(s, t)
    if (i) {
      if (((n = this._resolvePossibleFunction(n)), !n)) {
        i.remove()
        return
      }
      if (on(n)) {
        this._putElementInTemplate(Dn(n), i)
        return
      }
      if (this._config.html) {
        i.innerHTML = this._maybeSanitize(n)
        return
      }
      i.textContent = n
    }
  }
  _maybeSanitize(t) {
    return this._config.sanitize
      ? bC(t, this._config.allowList, this._config.sanitizeFn)
      : t
  }
  _resolvePossibleFunction(t) {
    return ee(t, [this])
  }
  _putElementInTemplate(t, n) {
    if (this._config.html) {
      ;(n.innerHTML = ''), n.append(t)
      return
    }
    n.textContent = t.textContent
  }
}
const AC = 'tooltip',
  SC = new Set(['sanitize', 'allowList', 'sanitizeFn']),
  La = 'fade',
  TC = 'modal',
  Fo = 'show',
  OC = '.tooltip-inner',
  Vd = `.${TC}`,
  Ud = 'hide.bs.modal',
  ui = 'hover',
  Ia = 'focus',
  CC = 'click',
  kC = 'manual',
  MC = 'hide',
  PC = 'hidden',
  DC = 'show',
  LC = 'shown',
  IC = 'inserted',
  NC = 'click',
  RC = 'focusin',
  $C = 'focusout',
  FC = 'mouseenter',
  HC = 'mouseleave',
  jC = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: xe() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: xe() ? 'right' : 'left',
  },
  zC = {
    allowList: km,
    animation: !0,
    boundary: 'clippingParents',
    container: !1,
    customClass: '',
    delay: 0,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    html: !1,
    offset: [0, 6],
    placement: 'top',
    popperConfig: null,
    sanitize: !0,
    sanitizeFn: null,
    selector: !1,
    template:
      '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: '',
    trigger: 'hover focus',
  },
  BC = {
    allowList: 'object',
    animation: 'boolean',
    boundary: '(string|element)',
    container: '(string|element|boolean)',
    customClass: '(string|function)',
    delay: '(number|object)',
    fallbackPlacements: 'array',
    html: 'boolean',
    offset: '(array|string|function)',
    placement: '(string|function)',
    popperConfig: '(null|object|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    selector: '(string|boolean)',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
  }
class ti extends Me {
  constructor(t, n) {
    if (typeof nm > 'u')
      throw new TypeError(
        "Bootstrap's tooltips require Popper (https://popper.js.org)",
      )
    super(t, n),
      (this._isEnabled = !0),
      (this._timeout = 0),
      (this._isHovered = null),
      (this._activeTrigger = {}),
      (this._popper = null),
      (this._templateFactory = null),
      (this._newContent = null),
      (this.tip = null),
      this._setListeners(),
      this._config.selector || this._fixTitle()
  }
  static get Default() {
    return zC
  }
  static get DefaultType() {
    return BC
  }
  static get NAME() {
    return AC
  }
  enable() {
    this._isEnabled = !0
  }
  disable() {
    this._isEnabled = !1
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled
  }
  toggle() {
    if (this._isEnabled) {
      if (
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown())
      ) {
        this._leave()
        return
      }
      this._enter()
    }
  }
  dispose() {
    clearTimeout(this._timeout),
      I.off(this._element.closest(Vd), Ud, this._hideModalHandler),
      this._element.getAttribute('data-bs-original-title') &&
        this._element.setAttribute(
          'title',
          this._element.getAttribute('data-bs-original-title'),
        ),
      this._disposePopper(),
      super.dispose()
  }
  show() {
    if (this._element.style.display === 'none')
      throw new Error('Please use show on visible elements')
    if (!(this._isWithContent() && this._isEnabled)) return
    const t = I.trigger(this._element, this.constructor.eventName(DC)),
      s = (
        om(this._element) || this._element.ownerDocument.documentElement
      ).contains(this._element)
    if (t.defaultPrevented || !s) return
    this._disposePopper()
    const i = this._getTipElement()
    this._element.setAttribute('aria-describedby', i.getAttribute('id'))
    const { container: o } = this._config
    if (
      (this._element.ownerDocument.documentElement.contains(this.tip) ||
        (o.append(i), I.trigger(this._element, this.constructor.eventName(IC))),
      (this._popper = this._createPopper(i)),
      i.classList.add(Fo),
      'ontouchstart' in document.documentElement)
    )
      for (const a of [].concat(...document.body.children))
        I.on(a, 'mouseover', yr)
    const r = () => {
      I.trigger(this._element, this.constructor.eventName(LC)),
        this._isHovered === !1 && this._leave(),
        (this._isHovered = !1)
    }
    this._queueCallback(r, this.tip, this._isAnimated())
  }
  hide() {
    if (
      !this._isShown() ||
      I.trigger(this._element, this.constructor.eventName(MC)).defaultPrevented
    )
      return
    if (
      (this._getTipElement().classList.remove(Fo),
      'ontouchstart' in document.documentElement)
    )
      for (const i of [].concat(...document.body.children))
        I.off(i, 'mouseover', yr)
    ;(this._activeTrigger[CC] = !1),
      (this._activeTrigger[Ia] = !1),
      (this._activeTrigger[ui] = !1),
      (this._isHovered = null)
    const s = () => {
      this._isWithActiveTrigger() ||
        (this._isHovered || this._disposePopper(),
        this._element.removeAttribute('aria-describedby'),
        I.trigger(this._element, this.constructor.eventName(PC)))
    }
    this._queueCallback(s, this.tip, this._isAnimated())
  }
  update() {
    this._popper && this._popper.update()
  }
  _isWithContent() {
    return !!this._getTitle()
  }
  _getTipElement() {
    return (
      this.tip ||
        (this.tip = this._createTipElement(
          this._newContent || this._getContentForTemplate(),
        )),
      this.tip
    )
  }
  _createTipElement(t) {
    const n = this._getTemplateFactory(t).toHtml()
    if (!n) return null
    n.classList.remove(La, Fo),
      n.classList.add(`bs-${this.constructor.NAME}-auto`)
    const s = CT(this.constructor.NAME).toString()
    return n.setAttribute('id', s), this._isAnimated() && n.classList.add(La), n
  }
  setContent(t) {
    ;(this._newContent = t),
      this._isShown() && (this._disposePopper(), this.show())
  }
  _getTemplateFactory(t) {
    return (
      this._templateFactory
        ? this._templateFactory.changeContent(t)
        : (this._templateFactory = new wC({
            ...this._config,
            content: t,
            extraClass: this._resolvePossibleFunction(this._config.customClass),
          })),
      this._templateFactory
    )
  }
  _getContentForTemplate() {
    return { [OC]: this._getTitle() }
  }
  _getTitle() {
    return (
      this._resolvePossibleFunction(this._config.title) ||
      this._element.getAttribute('data-bs-original-title')
    )
  }
  _initializeOnDelegatedTarget(t) {
    return this.constructor.getOrCreateInstance(
      t.delegateTarget,
      this._getDelegateConfig(),
    )
  }
  _isAnimated() {
    return (
      this._config.animation || (this.tip && this.tip.classList.contains(La))
    )
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(Fo)
  }
  _createPopper(t) {
    const n = ee(this._config.placement, [this, t, this._element]),
      s = jC[n.toUpperCase()]
    return Fc(this._element, t, this._getPopperConfig(s))
  }
  _getOffset() {
    const { offset: t } = this._config
    return typeof t == 'string'
      ? t.split(',').map(n => Number.parseInt(n, 10))
      : typeof t == 'function'
        ? n => t(n, this._element)
        : t
  }
  _resolvePossibleFunction(t) {
    return ee(t, [this._element])
  }
  _getPopperConfig(t) {
    const n = {
      placement: t,
      modifiers: [
        {
          name: 'flip',
          options: { fallbackPlacements: this._config.fallbackPlacements },
        },
        { name: 'offset', options: { offset: this._getOffset() } },
        {
          name: 'preventOverflow',
          options: { boundary: this._config.boundary },
        },
        {
          name: 'arrow',
          options: { element: `.${this.constructor.NAME}-arrow` },
        },
        {
          name: 'preSetPlacement',
          enabled: !0,
          phase: 'beforeMain',
          fn: s => {
            this._getTipElement().setAttribute(
              'data-popper-placement',
              s.state.placement,
            )
          },
        },
      ],
    }
    return { ...n, ...ee(this._config.popperConfig, [n]) }
  }
  _setListeners() {
    const t = this._config.trigger.split(' ')
    for (const n of t)
      if (n === 'click')
        I.on(
          this._element,
          this.constructor.eventName(NC),
          this._config.selector,
          s => {
            this._initializeOnDelegatedTarget(s).toggle()
          },
        )
      else if (n !== kC) {
        const s =
            n === ui
              ? this.constructor.eventName(FC)
              : this.constructor.eventName(RC),
          i =
            n === ui
              ? this.constructor.eventName(HC)
              : this.constructor.eventName($C)
        I.on(this._element, s, this._config.selector, o => {
          const r = this._initializeOnDelegatedTarget(o)
          ;(r._activeTrigger[o.type === 'focusin' ? Ia : ui] = !0), r._enter()
        }),
          I.on(this._element, i, this._config.selector, o => {
            const r = this._initializeOnDelegatedTarget(o)
            ;(r._activeTrigger[o.type === 'focusout' ? Ia : ui] =
              r._element.contains(o.relatedTarget)),
              r._leave()
          })
      }
    ;(this._hideModalHandler = () => {
      this._element && this.hide()
    }),
      I.on(this._element.closest(Vd), Ud, this._hideModalHandler)
  }
  _fixTitle() {
    const t = this._element.getAttribute('title')
    t &&
      (!this._element.getAttribute('aria-label') &&
        !this._element.textContent.trim() &&
        this._element.setAttribute('aria-label', t),
      this._element.setAttribute('data-bs-original-title', t),
      this._element.removeAttribute('title'))
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = !0
      return
    }
    ;(this._isHovered = !0),
      this._setTimeout(() => {
        this._isHovered && this.show()
      }, this._config.delay.show)
  }
  _leave() {
    this._isWithActiveTrigger() ||
      ((this._isHovered = !1),
      this._setTimeout(() => {
        this._isHovered || this.hide()
      }, this._config.delay.hide))
  }
  _setTimeout(t, n) {
    clearTimeout(this._timeout), (this._timeout = setTimeout(t, n))
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0)
  }
  _getConfig(t) {
    const n = rn.getDataAttributes(this._element)
    for (const s of Object.keys(n)) SC.has(s) && delete n[s]
    return (
      (t = { ...n, ...(typeof t == 'object' && t ? t : {}) }),
      (t = this._mergeConfigObj(t)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    )
  }
  _configAfterMerge(t) {
    return (
      (t.container = t.container === !1 ? document.body : Dn(t.container)),
      typeof t.delay == 'number' &&
        (t.delay = { show: t.delay, hide: t.delay }),
      typeof t.title == 'number' && (t.title = t.title.toString()),
      typeof t.content == 'number' && (t.content = t.content.toString()),
      t
    )
  }
  _getDelegateConfig() {
    const t = {}
    for (const [n, s] of Object.entries(this._config))
      this.constructor.Default[n] !== s && (t[n] = s)
    return (t.selector = !1), (t.trigger = 'manual'), t
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), (this._popper = null)),
      this.tip && (this.tip.remove(), (this.tip = null))
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = ti.getOrCreateInstance(this, t)
      if (typeof t == 'string') {
        if (typeof n[t] > 'u') throw new TypeError(`No method named "${t}"`)
        n[t]()
      }
    })
  }
}
we(ti)
const WC = 'popover',
  VC = '.popover-header',
  UC = '.popover-body',
  YC = {
    ...ti.Default,
    content: '',
    offset: [0, 8],
    placement: 'right',
    template:
      '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: 'click',
  },
  KC = { ...ti.DefaultType, content: '(null|string|element|function)' }
class Bc extends ti {
  static get Default() {
    return YC
  }
  static get DefaultType() {
    return KC
  }
  static get NAME() {
    return WC
  }
  _isWithContent() {
    return this._getTitle() || this._getContent()
  }
  _getContentForTemplate() {
    return { [VC]: this._getTitle(), [UC]: this._getContent() }
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content)
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Bc.getOrCreateInstance(this, t)
      if (typeof t == 'string') {
        if (typeof n[t] > 'u') throw new TypeError(`No method named "${t}"`)
        n[t]()
      }
    })
  }
}
we(Bc)
const qC = 'scrollspy',
  GC = 'bs.scrollspy',
  Wc = `.${GC}`,
  XC = '.data-api',
  QC = `activate${Wc}`,
  Yd = `click${Wc}`,
  JC = `load${Wc}${XC}`,
  ZC = 'dropdown-item',
  vs = 'active',
  tk = '[data-bs-spy="scroll"]',
  Na = '[href]',
  ek = '.nav, .list-group',
  Kd = '.nav-link',
  nk = '.nav-item',
  sk = '.list-group-item',
  ik = `${Kd}, ${nk} > ${Kd}, ${sk}`,
  ok = '.dropdown',
  rk = '.dropdown-toggle',
  ak = {
    offset: null,
    rootMargin: '0px 0px -25%',
    smoothScroll: !1,
    target: null,
    threshold: [0.1, 0.5, 1],
  },
  lk = {
    offset: '(number|null)',
    rootMargin: 'string',
    smoothScroll: 'boolean',
    target: 'element',
    threshold: 'array',
  }
class Gr extends Me {
  constructor(t, n) {
    super(t, n),
      (this._targetLinks = new Map()),
      (this._observableSections = new Map()),
      (this._rootElement =
        getComputedStyle(this._element).overflowY === 'visible'
          ? null
          : this._element),
      (this._activeTarget = null),
      (this._observer = null),
      (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
      this.refresh()
  }
  static get Default() {
    return ak
  }
  static get DefaultType() {
    return lk
  }
  static get NAME() {
    return qC
  }
  refresh() {
    this._initializeTargetsAndObservables(),
      this._maybeEnableSmoothScroll(),
      this._observer
        ? this._observer.disconnect()
        : (this._observer = this._getNewObserver())
    for (const t of this._observableSections.values()) this._observer.observe(t)
  }
  dispose() {
    this._observer.disconnect(), super.dispose()
  }
  _configAfterMerge(t) {
    return (
      (t.target = Dn(t.target) || document.body),
      (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
      typeof t.threshold == 'string' &&
        (t.threshold = t.threshold.split(',').map(n => Number.parseFloat(n))),
      t
    )
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll &&
      (I.off(this._config.target, Yd),
      I.on(this._config.target, Yd, Na, t => {
        const n = this._observableSections.get(t.target.hash)
        if (n) {
          t.preventDefault()
          const s = this._rootElement || window,
            i = n.offsetTop - this._element.offsetTop
          if (s.scrollTo) {
            s.scrollTo({ top: i, behavior: 'smooth' })
            return
          }
          s.scrollTop = i
        }
      }))
  }
  _getNewObserver() {
    const t = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin,
    }
    return new IntersectionObserver(n => this._observerCallback(n), t)
  }
  _observerCallback(t) {
    const n = r => this._targetLinks.get(`#${r.target.id}`),
      s = r => {
        ;(this._previousScrollData.visibleEntryTop = r.target.offsetTop),
          this._process(n(r))
      },
      i = (this._rootElement || document.documentElement).scrollTop,
      o = i >= this._previousScrollData.parentScrollTop
    this._previousScrollData.parentScrollTop = i
    for (const r of t) {
      if (!r.isIntersecting) {
        ;(this._activeTarget = null), this._clearActiveClass(n(r))
        continue
      }
      const a = r.target.offsetTop >= this._previousScrollData.visibleEntryTop
      if (o && a) {
        if ((s(r), !i)) return
        continue
      }
      !o && !a && s(r)
    }
  }
  _initializeTargetsAndObservables() {
    ;(this._targetLinks = new Map()), (this._observableSections = new Map())
    const t = nt.find(Na, this._config.target)
    for (const n of t) {
      if (!n.hash || Ln(n)) continue
      const s = nt.findOne(decodeURI(n.hash), this._element)
      Js(s) &&
        (this._targetLinks.set(decodeURI(n.hash), n),
        this._observableSections.set(n.hash, s))
    }
  }
  _process(t) {
    this._activeTarget !== t &&
      (this._clearActiveClass(this._config.target),
      (this._activeTarget = t),
      t.classList.add(vs),
      this._activateParents(t),
      I.trigger(this._element, QC, { relatedTarget: t }))
  }
  _activateParents(t) {
    if (t.classList.contains(ZC)) {
      nt.findOne(rk, t.closest(ok)).classList.add(vs)
      return
    }
    for (const n of nt.parents(t, ek))
      for (const s of nt.prev(n, ik)) s.classList.add(vs)
  }
  _clearActiveClass(t) {
    t.classList.remove(vs)
    const n = nt.find(`${Na}.${vs}`, t)
    for (const s of n) s.classList.remove(vs)
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Gr.getOrCreateInstance(this, t)
      if (typeof t == 'string') {
        if (n[t] === void 0 || t.startsWith('_') || t === 'constructor')
          throw new TypeError(`No method named "${t}"`)
        n[t]()
      }
    })
  }
}
I.on(window, JC, () => {
  for (const e of nt.find(tk)) Gr.getOrCreateInstance(e)
})
we(Gr)
const ck = 'tab',
  fk = 'bs.tab',
  hs = `.${fk}`,
  uk = `hide${hs}`,
  dk = `hidden${hs}`,
  hk = `show${hs}`,
  pk = `shown${hs}`,
  gk = `click${hs}`,
  mk = `keydown${hs}`,
  _k = `load${hs}`,
  bk = 'ArrowLeft',
  qd = 'ArrowRight',
  vk = 'ArrowUp',
  Gd = 'ArrowDown',
  Ra = 'Home',
  Xd = 'End',
  Qn = 'active',
  Qd = 'fade',
  $a = 'show',
  yk = 'dropdown',
  Mm = '.dropdown-toggle',
  xk = '.dropdown-menu',
  Fa = `:not(${Mm})`,
  Ek = '.list-group, .nav, [role="tablist"]',
  wk = '.nav-item, .list-group-item',
  Ak = `.nav-link${Fa}, .list-group-item${Fa}, [role="tab"]${Fa}`,
  Pm =
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
  Ha = `${Ak}, ${Pm}`,
  Sk = `.${Qn}[data-bs-toggle="tab"], .${Qn}[data-bs-toggle="pill"], .${Qn}[data-bs-toggle="list"]`
class Ys extends Me {
  constructor(t) {
    super(t),
      (this._parent = this._element.closest(Ek)),
      this._parent &&
        (this._setInitialAttributes(this._parent, this._getChildren()),
        I.on(this._element, mk, n => this._keydown(n)))
  }
  static get NAME() {
    return ck
  }
  show() {
    const t = this._element
    if (this._elemIsActive(t)) return
    const n = this._getActiveElem(),
      s = n ? I.trigger(n, uk, { relatedTarget: t }) : null
    I.trigger(t, hk, { relatedTarget: n }).defaultPrevented ||
      (s && s.defaultPrevented) ||
      (this._deactivate(n, t), this._activate(t, n))
  }
  _activate(t, n) {
    if (!t) return
    t.classList.add(Qn), this._activate(nt.getElementFromSelector(t))
    const s = () => {
      if (t.getAttribute('role') !== 'tab') {
        t.classList.add($a)
        return
      }
      t.removeAttribute('tabindex'),
        t.setAttribute('aria-selected', !0),
        this._toggleDropDown(t, !0),
        I.trigger(t, pk, { relatedTarget: n })
    }
    this._queueCallback(s, t, t.classList.contains(Qd))
  }
  _deactivate(t, n) {
    if (!t) return
    t.classList.remove(Qn),
      t.blur(),
      this._deactivate(nt.getElementFromSelector(t))
    const s = () => {
      if (t.getAttribute('role') !== 'tab') {
        t.classList.remove($a)
        return
      }
      t.setAttribute('aria-selected', !1),
        t.setAttribute('tabindex', '-1'),
        this._toggleDropDown(t, !1),
        I.trigger(t, dk, { relatedTarget: n })
    }
    this._queueCallback(s, t, t.classList.contains(Qd))
  }
  _keydown(t) {
    if (![bk, qd, vk, Gd, Ra, Xd].includes(t.key)) return
    t.stopPropagation(), t.preventDefault()
    const n = this._getChildren().filter(i => !Ln(i))
    let s
    if ([Ra, Xd].includes(t.key)) s = n[t.key === Ra ? 0 : n.length - 1]
    else {
      const i = [qd, Gd].includes(t.key)
      s = Hc(n, t.target, i, !0)
    }
    s && (s.focus({ preventScroll: !0 }), Ys.getOrCreateInstance(s).show())
  }
  _getChildren() {
    return nt.find(Ha, this._parent)
  }
  _getActiveElem() {
    return this._getChildren().find(t => this._elemIsActive(t)) || null
  }
  _setInitialAttributes(t, n) {
    this._setAttributeIfNotExists(t, 'role', 'tablist')
    for (const s of n) this._setInitialAttributesOnChild(s)
  }
  _setInitialAttributesOnChild(t) {
    t = this._getInnerElement(t)
    const n = this._elemIsActive(t),
      s = this._getOuterElement(t)
    t.setAttribute('aria-selected', n),
      s !== t && this._setAttributeIfNotExists(s, 'role', 'presentation'),
      n || t.setAttribute('tabindex', '-1'),
      this._setAttributeIfNotExists(t, 'role', 'tab'),
      this._setInitialAttributesOnTargetPanel(t)
  }
  _setInitialAttributesOnTargetPanel(t) {
    const n = nt.getElementFromSelector(t)
    n &&
      (this._setAttributeIfNotExists(n, 'role', 'tabpanel'),
      t.id && this._setAttributeIfNotExists(n, 'aria-labelledby', `${t.id}`))
  }
  _toggleDropDown(t, n) {
    const s = this._getOuterElement(t)
    if (!s.classList.contains(yk)) return
    const i = (o, r) => {
      const a = nt.findOne(o, s)
      a && a.classList.toggle(r, n)
    }
    i(Mm, Qn), i(xk, $a), s.setAttribute('aria-expanded', n)
  }
  _setAttributeIfNotExists(t, n, s) {
    t.hasAttribute(n) || t.setAttribute(n, s)
  }
  _elemIsActive(t) {
    return t.classList.contains(Qn)
  }
  _getInnerElement(t) {
    return t.matches(Ha) ? t : nt.findOne(Ha, t)
  }
  _getOuterElement(t) {
    return t.closest(wk) || t
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Ys.getOrCreateInstance(this)
      if (typeof t == 'string') {
        if (n[t] === void 0 || t.startsWith('_') || t === 'constructor')
          throw new TypeError(`No method named "${t}"`)
        n[t]()
      }
    })
  }
}
I.on(document, gk, Pm, function (e) {
  ;['A', 'AREA'].includes(this.tagName) && e.preventDefault(),
    !Ln(this) && Ys.getOrCreateInstance(this).show()
})
I.on(window, _k, () => {
  for (const e of nt.find(Sk)) Ys.getOrCreateInstance(e)
})
we(Ys)
const Tk = 'toast',
  Ok = 'bs.toast',
  Hn = `.${Ok}`,
  Ck = `mouseover${Hn}`,
  kk = `mouseout${Hn}`,
  Mk = `focusin${Hn}`,
  Pk = `focusout${Hn}`,
  Dk = `hide${Hn}`,
  Lk = `hidden${Hn}`,
  Ik = `show${Hn}`,
  Nk = `shown${Hn}`,
  Rk = 'fade',
  Jd = 'hide',
  Ho = 'show',
  jo = 'showing',
  $k = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
  Fk = { animation: !0, autohide: !0, delay: 5e3 }
class Xr extends Me {
  constructor(t, n) {
    super(t, n),
      (this._timeout = null),
      (this._hasMouseInteraction = !1),
      (this._hasKeyboardInteraction = !1),
      this._setListeners()
  }
  static get Default() {
    return Fk
  }
  static get DefaultType() {
    return $k
  }
  static get NAME() {
    return Tk
  }
  show() {
    if (I.trigger(this._element, Ik).defaultPrevented) return
    this._clearTimeout(),
      this._config.animation && this._element.classList.add(Rk)
    const n = () => {
      this._element.classList.remove(jo),
        I.trigger(this._element, Nk),
        this._maybeScheduleHide()
    }
    this._element.classList.remove(Jd),
      ho(this._element),
      this._element.classList.add(Ho, jo),
      this._queueCallback(n, this._element, this._config.animation)
  }
  hide() {
    if (!this.isShown() || I.trigger(this._element, Dk).defaultPrevented) return
    const n = () => {
      this._element.classList.add(Jd),
        this._element.classList.remove(jo, Ho),
        I.trigger(this._element, Lk)
    }
    this._element.classList.add(jo),
      this._queueCallback(n, this._element, this._config.animation)
  }
  dispose() {
    this._clearTimeout(),
      this.isShown() && this._element.classList.remove(Ho),
      super.dispose()
  }
  isShown() {
    return this._element.classList.contains(Ho)
  }
  _maybeScheduleHide() {
    this._config.autohide &&
      (this._hasMouseInteraction ||
        this._hasKeyboardInteraction ||
        (this._timeout = setTimeout(() => {
          this.hide()
        }, this._config.delay)))
  }
  _onInteraction(t, n) {
    switch (t.type) {
      case 'mouseover':
      case 'mouseout': {
        this._hasMouseInteraction = n
        break
      }
      case 'focusin':
      case 'focusout': {
        this._hasKeyboardInteraction = n
        break
      }
    }
    if (n) {
      this._clearTimeout()
      return
    }
    const s = t.relatedTarget
    this._element === s ||
      this._element.contains(s) ||
      this._maybeScheduleHide()
  }
  _setListeners() {
    I.on(this._element, Ck, t => this._onInteraction(t, !0)),
      I.on(this._element, kk, t => this._onInteraction(t, !1)),
      I.on(this._element, Mk, t => this._onInteraction(t, !0)),
      I.on(this._element, Pk, t => this._onInteraction(t, !1))
  }
  _clearTimeout() {
    clearTimeout(this._timeout), (this._timeout = null)
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Xr.getOrCreateInstance(this, t)
      if (typeof t == 'string') {
        if (typeof n[t] > 'u') throw new TypeError(`No method named "${t}"`)
        n[t](this)
      }
    })
  }
}
Yr(Xr)
we(Xr)
const Hk = {
    prefix: 'fab',
    iconName: 'square-github',
    icon: [
      448,
      512,
      ['github-square'],
      'f092',
      'M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z',
    ],
  },
  jk = Hk,
  zk = {
    prefix: 'fab',
    iconName: 'linkedin',
    icon: [
      448,
      512,
      [],
      'f08c',
      'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
    ],
  },
  Bk = {
    prefix: 'far',
    iconName: 'star',
    icon: [
      576,
      512,
      [11088, 61446],
      'f005',
      'M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z',
    ],
  },
  Wk = {
    prefix: 'far',
    iconName: 'square',
    icon: [
      448,
      512,
      [9632, 9723, 9724, 61590],
      'f0c8',
      'M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z',
    ],
  },
  Vk = {
    prefix: 'fas',
    iconName: 'star',
    icon: [
      576,
      512,
      [11088, 61446],
      'f005',
      'M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z',
    ],
  },
  Uk = {
    prefix: 'fas',
    iconName: 'star-half-stroke',
    icon: [
      576,
      512,
      ['star-half-alt'],
      'f5c0',
      'M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3 0 289.2zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z',
    ],
  },
  Yk = {
    prefix: 'fas',
    iconName: 'phone',
    icon: [
      512,
      512,
      [128222, 128379],
      'f095',
      'M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z',
    ],
  },
  Kk = {
    prefix: 'fas',
    iconName: 'up-right-from-square',
    icon: [
      512,
      512,
      ['external-link-alt'],
      'f35d',
      'M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z',
    ],
  },
  qk = {
    prefix: 'fas',
    iconName: 'envelope',
    icon: [
      512,
      512,
      [128386, 9993, 61443],
      'f0e0',
      'M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z',
    ],
  }
r1.add(jk, zk, qk, Yk, Bk, Vk, Uk, Kk, Wk)
const Dm = Qb(ey)
Dm.use(FS)
Dm.mount('#app')
