!function (e, t) {
    function n(e) {
        var t = e.length, n = ce.type(e);
        return !ce.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
    }

    function r(e) {
        var t = ke[e] = {};
        return ce.each(e.match(pe) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function i(e, n, r, i) {
        if (ce.acceptData(e)) {
            var o, a, s = ce.expando, l = e.nodeType, u = l ? ce.cache : e, c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = te.pop() || ce.guid++ : s), u[c] || (u[c] = l ? {} : {toJSON: ce.noop}), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = ce.extend(u[c], n) : u[c].data = ce.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[ce.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[ce.camelCase(n)])) : o = a, o
        }
    }

    function o(e, t, n) {
        if (ce.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? ce.cache : e, l = o ? e[ce.expando] : ce.expando;
            if (a[l]) {
                if (t && (r = n ? a[l] : a[l].data)) {
                    ce.isArray(t) ? t = t.concat(ce.map(t, ce.camelCase)) : t in r ? t = [t] : (t = ce.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !s(r) : !ce.isEmptyObject(r)) return
                }
                (n || (delete a[l].data, s(a[l]))) && (o ? ce.cleanData([e], !0) : ce.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
            }
        }
    }

    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Se, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : Ee.test(r) ? ce.parseJSON(r) : r)
                } catch (o) {
                }
                ce.data(e, n, r)
            } else r = t
        }
        return r
    }

    function s(e) {
        var t;
        for (t in e) if (("data" !== t || !ce.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function l() {
        return !0
    }

    function u() {
        return !1
    }

    function c() {
        try {
            return G.activeElement
        } catch (e) {
        }
    }

    function f(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function p(e, t, n) {
        if (ce.isFunction(t)) return ce.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ce.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if ($e.test(t)) return ce.filter(t, e, n);
            t = ce.filter(t, e)
        }
        return ce.grep(e, function (e) {
            return ce.inArray(e, t) >= 0 !== n
        })
    }

    function d(e) {
        var t = Ue.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        return ce.nodeName(e, "table") && ce.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function g(e) {
        return e.type = (null !== ce.find.attr(e, "type")) + "/" + e.type, e
    }

    function m(e) {
        var t = it.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function y(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ce._data(n, "globalEval", !t || ce._data(t[r], "globalEval"))
    }

    function v(e, t) {
        if (1 === t.nodeType && ce.hasData(e)) {
            var n, r, i, o = ce._data(e), a = ce._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) ce.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ce.extend({}, a.data))
        }
    }

    function b(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ce.support.noCloneEvent && t[ce.expando]) {
                i = ce._data(t);
                for (r in i.events) ce.removeEvent(t, r, i.handle);
                t.removeAttribute(ce.expando)
            }
            "script" === n && t.text !== e.text ? (g(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ce.support.html5Clone && e.innerHTML && !ce.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function x(e, n) {
        var r, i, o = 0,
            a = typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== Y ? e.querySelectorAll(n || "*") : t;
        if (!a) for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) !n || ce.nodeName(i, n) ? a.push(i) : ce.merge(a, x(i, n));
        return n === t || n && ce.nodeName(e, n) ? ce.merge([e], a) : a
    }

    function T(e) {
        tt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function w(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Nt.length; i--;) if (t = Nt[i] + n, t in e) return t;
        return r
    }

    function C(e, t) {
        return e = t || e, "none" === ce.css(e, "display") || !ce.contains(e.ownerDocument, e)
    }

    function N(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ce._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && C(r) && (o[a] = ce._data(r, "olddisplay", A(r.nodeName)))) : o[a] || (i = C(r), (n && "none" !== n || !i) && ce._data(r, "olddisplay", i ? n : ce.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function k(e, t, n) {
        var r = yt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function E(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ce.css(e, n + Ct[o], !0, i)), r ? ("content" === n && (a -= ce.css(e, "padding" + Ct[o], !0, i)), "margin" !== n && (a -= ce.css(e, "border" + Ct[o] + "Width", !0, i))) : (a += ce.css(e, "padding" + Ct[o], !0, i), "padding" !== n && (a += ce.css(e, "border" + Ct[o] + "Width", !0, i)));
        return a
    }

    function S(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = ct(e),
            a = ce.support.boxSizing && "border-box" === ce.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = ft(e, t, o), (0 > i || null == i) && (i = e.style[t]), vt.test(i)) return i;
            r = a && (ce.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + E(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function A(e) {
        var t = G, n = xt[e];
        return n || (n = j(e, t), "none" !== n && n || (ut = (ut || ce("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ut[0].contentWindow || ut[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = j(e, t), ut.detach()), xt[e] = n), n
    }

    function j(e, t) {
        var n = ce(t.createElement(e)).appendTo(t.body), r = ce.css(n[0], "display");
        return n.remove(), r
    }

    function D(e, t, n, r) {
        var i;
        if (ce.isArray(t)) ce.each(t, function (t, i) {
            n || Et.test(e) ? r(e, i) : D(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== ce.type(t)) r(e, t); else for (i in t) D(e + "[" + i + "]", t[i], n, r)
    }

    function L(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(pe) || [];
            if (ce.isFunction(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function H(e, n, r, i) {
        function o(l) {
            var u;
            return a[l] = !0, ce.each(e[l] || [], function (e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || s || a[c] ? s ? !(u = c) : t : (n.dataTypes.unshift(c), o(c), !1)
            }), u
        }

        var a = {}, s = e === It;
        return o(n.dataTypes[0]) || !a["*"] && o("*")
    }

    function q(e, n) {
        var r, i, o = ce.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && ce.extend(!0, e, r), e
    }

    function _(e, n, r) {
        for (var i, o, a, s, l = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o) for (s in l) if (l[s] && l[s].test(o)) {
            u.unshift(s);
            break
        }
        if (u[0] in r) a = u[0]; else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function M(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a) for (i in u) if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break
            }
            if (a !== !0) if (a && e["throws"]) t = a(t); else try {
                t = a(t)
            } catch (f) {
                return {state: "parsererror", error: a ? f : "No conversion from " + l + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function O() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function F() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function B() {
        return setTimeout(function () {
            Kt = t
        }), Kt = ce.now()
    }

    function P(e, t, n) {
        for (var r, i = (on[t] || []).concat(on["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, t, e)) return r
    }

    function R(e, t, n) {
        var r, i, o = 0, a = rn.length, s = ce.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (i) return !1;
            for (var t = Kt || B(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
            return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
        }, u = s.promise({
            elem: e,
            props: ce.extend({}, t),
            opts: ce.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Kt || B(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = ce.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? u.tweens.length : 0;
                if (i) return this;
                for (i = !0; r > n; n++) u.tweens[n].run(1);
                return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
            }
        }), c = u.props;
        for (W(c, u.opts.specialEasing); a > o; o++) if (r = rn[o].call(u, e, c, u.opts)) return r;
        return ce.map(c, P, u), ce.isFunction(u.opts.start) && u.opts.start.call(e, u), ce.fx.timer(ce.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function W(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = ce.camelCase(n), i = t[r], o = e[n], ce.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ce.cssHooks[r], a && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function $(e, t, n) {
        var r, i, o, a, s, l, u = this, c = {}, f = e.style, p = e.nodeType && C(e), d = ce._data(e, "fxshow");
        n.queue || (s = ce._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, u.always(function () {
            u.always(function () {
                s.unqueued--, ce.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ce.css(e, "display") && "none" === ce.css(e, "float") && (ce.support.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ce.support.shrinkWrapBlocks || u.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (r in t) if (i = t[r], en.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) continue;
            c[r] = d && d[r] || ce.style(e, r)
        }
        if (!ce.isEmptyObject(c)) {
            d ? "hidden" in d && (p = d.hidden) : d = ce._data(e, "fxshow", {}), o && (d.hidden = !p), p ? ce(e).show() : u.done(function () {
                ce(e).hide()
            }), u.done(function () {
                var t;
                ce._removeData(e, "fxshow");
                for (t in c) ce.style(e, t, c[t])
            });
            for (r in c) a = P(p ? d[r] : 0, r, u), r in d || (d[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function I(e, t, n, r, i) {
        return new I.prototype.init(e, t, n, r, i)
    }

    function z(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Ct[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function X(e) {
        return ce.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    var U, V, Y = typeof t, J = e.location, G = e.document, Q = G.documentElement, K = e.jQuery, Z = e.$, ee = {},
        te = [], ne = "", re = te.concat, ie = te.push, oe = te.slice, ae = te.indexOf, se = ee.toString,
        le = ee.hasOwnProperty, ue = ne.trim, ce = function (e, t) {
            return new ce.fn.init(e, t, V)
        }, fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, pe = /\S+/g, de = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ge = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, me = /^[\],:{}\s]*$/,
        ye = /(?:^|:|,)(?:\s*\[)+/g, ve = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        be = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, xe = /^-ms-/, Te = /-([\da-z])/gi,
        we = function (e, t) {
            return t.toUpperCase()
        }, Ce = function (e) {
            (G.addEventListener || "load" === e.type || "complete" === G.readyState) && (Ne(), ce.ready())
        }, Ne = function () {
            G.addEventListener ? (G.removeEventListener("DOMContentLoaded", Ce, !1), e.removeEventListener("load", Ce, !1)) : (G.detachEvent("onreadystatechange", Ce), e.detachEvent("onload", Ce))
        };
    ce.fn = ce.prototype = {
        jquery: ne, constructor: ce, init: function (e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : he.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof ce ? n[0] : n, ce.merge(this, ce.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : G, !0)), ge.test(i[1]) && ce.isPlainObject(n)) for (i in n) ce.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = G.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = G, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ce.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ce.makeArray(e, this))
        }, selector: "", length: 0, toArray: function () {
            return oe.call(this)
        }, get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        }, pushStack: function (e) {
            var t = ce.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return ce.each(this, e, t)
        }, ready: function (e) {
            return ce.ready.promise().done(e), this
        }, slice: function () {
            return this.pushStack(oe.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, map: function (e) {
            return this.pushStack(ce.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: ie, sort: [].sort, splice: [].splice
    }, ce.fn.init.prototype = ce.fn, ce.extend = ce.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || ce.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) if (null != (o = arguments[l])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (ce.isPlainObject(r) || (n = ce.isArray(r))) ? (n ? (n = !1, a = e && ce.isArray(e) ? e : []) : a = e && ce.isPlainObject(e) ? e : {}, s[i] = ce.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, ce.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
            return e.$ === ce && (e.$ = Z), t && e.jQuery === ce && (e.jQuery = K), ce
        }, isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? ce.readyWait++ : ce.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? !--ce.readyWait : !ce.isReady) {
                if (!G.body) return setTimeout(ce.ready);
                ce.isReady = !0, e !== !0 && --ce.readyWait > 0 || (U.resolveWith(G, [ce]), ce.fn.trigger && ce(G).trigger("ready").off("ready"))
            }
        }, isFunction: function (e) {
            return "function" === ce.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === ce.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[se.call(e)] || "object" : typeof e
        }, isPlainObject: function (e) {
            var n;
            if (!e || "object" !== ce.type(e) || e.nodeType || ce.isWindow(e)) return !1;
            try {
                if (e.constructor && !le.call(e, "constructor") && !le.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            if (ce.support.ownLast) for (n in e) return le.call(e, n);
            for (n in e) ;
            return n === t || le.call(e, n)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, error: function (e) {
            throw Error(e)
        }, parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || G;
            var r = ge.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = ce.buildFragment([e], t, i), i && ce(i).remove(), ce.merge([], r.childNodes))
        }, parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ce.trim(n), n && me.test(n.replace(ve, "@").replace(be, "]").replace(ye, ""))) ? Function("return " + n)() : (ce.error("Invalid JSON: " + n), t)
        }, parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ce.error("Invalid XML: " + n), r
        }, noop: function () {
        }, globalEval: function (t) {
            t && ce.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(xe, "ms-").replace(Te, we)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, r) {
            var i, o = 0, a = e.length, s = n(e);
            if (r) {
                if (s) for (; a > o && (i = t.apply(e[o], r), i !== !1); o++) ; else for (o in e) if (i = t.apply(e[o], r), i === !1) break
            } else if (s) for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++) ; else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        }, trim: ue && !ue.call("\ufeff聽") ? function (e) {
            return null == e ? "" : ue.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(de, "")
        }, makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ce.merge(r, "string" == typeof e ? [e] : e) : ie.call(r, e)), r
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (ae) return ae.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n
            }
            return -1
        }, merge: function (e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o]; else for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        }, map: function (e, t, r) {
            var i, o = 0, a = e.length, s = n(e), l = [];
            if (s) for (; a > o; o++) i = t(e[o], o, r), null != i && (l[l.length] = i); else for (o in e) i = t(e[o], o, r), null != i && (l[l.length] = i);
            return re.apply([], l)
        }, guid: 1, proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), ce.isFunction(e) ? (r = oe.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(oe.call(arguments)))
            }, i.guid = e.guid = e.guid || ce.guid++, i) : t
        }, access: function (e, n, r, i, o, a, s) {
            var l = 0, u = e.length, c = null == r;
            if ("object" === ce.type(r)) {
                o = !0;
                for (l in r) ce.access(e, n, l, r[l], !0, a, s)
            } else if (i !== t && (o = !0, ce.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                return c.call(ce(e), n)
            })), n)) for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        }, now: function () {
            return (new Date).getTime()
        }, swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), ce.ready.promise = function (t) {
        if (!U) if (U = ce.Deferred(), "complete" === G.readyState) setTimeout(ce.ready); else if (G.addEventListener) G.addEventListener("DOMContentLoaded", Ce, !1), e.addEventListener("load", Ce, !1); else {
            G.attachEvent("onreadystatechange", Ce), e.attachEvent("onload", Ce);
            var n = !1;
            try {
                n = null == e.frameElement && G.documentElement
            } catch (r) {
            }
            n && n.doScroll && function i() {
                if (!ce.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    Ne(), ce.ready()
                }
            }()
        }
        return U.promise(t)
    }, ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    }), V = ce(G), function (e, t) {
        function n(e, t, n, r) {
            var i, o, a, s, l, u, c, f, h, g;
            if ((t ? t.ownerDocument || t : R) !== H && L(t), t = t || H, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (_ && !r) {
                if (i = be.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode) return n;
                        if (o.id === a) return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a) return n.push(o), n
                } else {
                    if (i[2]) return ee.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = i[3]) && C.getElementsByClassName && t.getElementsByClassName) return ee.apply(n, t.getElementsByClassName(a)), n
                }
                if (C.qsa && (!M || !M.test(e))) {
                    if (f = c = P, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = p(e), (c = t.getAttribute("id")) ? f = c.replace(we, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + d(u[l]);
                        h = de.test(e) && t.parentNode || t, g = u.join(",")
                    }
                    if (g) try {
                        return ee.apply(n, h.querySelectorAll(g)), n
                    } catch (m) {
                    } finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return T(e.replace(ue, "$1"), t, n, r)
        }

        function r() {
            function e(n, r) {
                return t.push(n += " ") > k.cacheLength && delete e[t.shift()], e[n] = r
            }

            var t = [];
            return e
        }

        function i(e) {
            return e[P] = !0, e
        }

        function o(e) {
            var t = H.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) k.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return i(function (t) {
                return t = +t, i(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function f() {
        }

        function p(e, t) {
            var r, i, o, a, s, l, u, c = z[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, l = [], u = k.preFilter; s;) {
                (!r || (i = fe.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = pe.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }), s = s.slice(r.length));
                for (a in k.filter) !(i = ye[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return t ? s.length : s ? n.error(e) : z(e, l).slice(0)
        }

        function d(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = $++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
            } : function (t, n, a) {
                var s, l, u, c = W + " " + o;
                if (a) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else for (; t = t[r];) if (1 === t.nodeType || i) if (u = t[P] || (t[P] = {}), (l = u[r]) && l[0] === c) {
                    if ((s = l[1]) === !0 || s === N) return s === !0
                } else if (l = u[r] = [c], l[1] = e(t, n, a) || N, l[1] === !0) return !0
            }
        }

        function g(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function m(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }

        function y(e, t, n, r, o, a) {
            return r && !r[P] && (r = y(r)), o && !o[P] && (o = y(o, a)), i(function (i, a, s, l) {
                var u, c, f, p = [], d = [], h = a.length, g = i || x(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? g : m(g, p, e, s, l), v = n ? o || (i ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, l), r) for (u = m(v, d), r(u, [], s, l), c = u.length; c--;) (f = u[c]) && (v[d[c]] = !(y[d[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = v.length; c--;) (f = v[c]) && u.push(y[c] = f);
                            o(null, v = [], u, l)
                        }
                        for (c = v.length; c--;) (f = v[c]) && (u = o ? ne.call(i, f) : p[c]) > -1 && (i[u] = !(a[u] = f))
                    }
                } else v = m(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, l) : ee.apply(a, v)
            })
        }

        function v(e) {
            for (var t, n, r, i = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, l = h(function (e) {
                return e === t
            }, a, !0), u = h(function (e) {
                return ne.call(t, e) > -1
            }, a, !0), c = [function (e, n, r) {
                return !o && (r || n !== j) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r))
            }]; i > s; s++) if (n = k.relative[e[s].type]) c = [h(g(c), n)]; else {
                if (n = k.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                    for (r = ++s; i > r && !k.relative[e[r].type]; r++) ;
                    return y(s > 1 && g(c), s > 1 && d(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(ue, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && d(e))
                }
                c.push(n)
            }
            return g(c)
        }

        function b(e, t) {
            var r = 0, o = t.length > 0, a = e.length > 0, s = function (i, s, l, u, c) {
                var f, p, d, h = [], g = 0, y = "0", v = i && [], b = null != c, x = j,
                    T = i || a && k.find.TAG("*", c && s.parentNode || s), w = W += null == x ? 1 : Math.random() || .1;
                for (b && (j = s !== H && s, N = r); null != (f = T[y]); y++) {
                    if (a && f) {
                        for (p = 0; d = e[p++];) if (d(f, s, l)) {
                            u.push(f);
                            break
                        }
                        b && (W = w, N = ++r)
                    }
                    o && ((f = !d && f) && g--, i && v.push(f))
                }
                if (g += y, o && y !== g) {
                    for (p = 0; d = t[p++];) d(v, h, s, l);
                    if (i) {
                        if (g > 0) for (; y--;) v[y] || h[y] || (h[y] = K.call(u));
                        h = m(h)
                    }
                    ee.apply(u, h), b && !i && h.length > 0 && g + t.length > 1 && n.uniqueSort(u)
                }
                return b && (W = w, j = x), v
            };
            return o ? i(s) : s
        }

        function x(e, t, r) {
            for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
            return r
        }

        function T(e, t, n, r) {
            var i, o, a, s, l, u = p(e);
            if (!r && 1 === u.length) {
                if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && C.getById && 9 === t.nodeType && _ && k.relative[o[1].type]) {
                    if (t = (k.find.ID(a.matches[0].replace(Ce, Ne), t) || [])[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = ye.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !k.relative[s = a.type]);) if ((l = k.find[s]) && (r = l(a.matches[0].replace(Ce, Ne), de.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), e = r.length && d(o), !e) return ee.apply(n, r), n;
                    break
                }
            }
            return A(e, u)(r, t, !_, n, de.test(e)), n
        }

        var w, C, N, k, E, S, A, j, D, L, H, q, _, M, O, F, B, P = "sizzle" + -new Date, R = e.document, W = 0, $ = 0,
            I = r(), z = r(), X = r(), U = !1, V = function (e, t) {
                return e === t ? (U = !0, 0) : 0
            }, Y = typeof t, J = 1 << 31, G = {}.hasOwnProperty, Q = [], K = Q.pop, Z = Q.push, ee = Q.push, te = Q.slice,
            ne = Q.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
                return -1
            },
            re = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]", oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ae = oe.replace("w", "w#"),
            se = "\\[" + ie + "*(" + oe + ")" + ie + "*(?:([*^$|!~]?=)" + ie + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ae + ")|)|)" + ie + "*\\]",
            le = ":(" + oe + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + se.replace(3, 8) + ")*)|.*)\\)|)",
            ue = RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            fe = RegExp("^" + ie + "*," + ie + "*"), pe = RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            de = RegExp(ie + "*[+~]"), he = RegExp("=" + ie + "*([^\\]'\"]*)" + ie + "*\\]", "g"), ge = RegExp(le),
            me = RegExp("^" + ae + "$"), ye = {
                ID: RegExp("^#(" + oe + ")"),
                CLASS: RegExp("^\\.(" + oe + ")"),
                TAG: RegExp("^(" + oe.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + se),
                PSEUDO: RegExp("^" + le),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: RegExp("^(?:" + re + ")$", "i"),
                needsContext: RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            }, ve = /^[^{]+\{\s*\[native \w/, be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            xe = /^(?:input|select|textarea|button)$/i, Te = /^h\d$/i, we = /'|\\/g,
            Ce = RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"), Ne = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
            };
        try {
            ee.apply(Q = te.call(R.childNodes), R.childNodes), Q[R.childNodes.length].nodeType
        } catch (ke) {
            ee = {
                apply: Q.length ? function (e, t) {
                    Z.apply(e, te.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                    e.length = n - 1
                }
            }
        }
        S = n.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, C = n.support = {}, L = n.setDocument = function (e) {
            var n = e ? e.ownerDocument || e : R, r = n.defaultView;
            return n !== H && 9 === n.nodeType && n.documentElement ? (H = n, q = n.documentElement, _ = !S(n), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function () {
                L()
            }), C.attributes = o(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), C.getElementsByTagName = o(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), C.getElementsByClassName = o(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), C.getById = o(function (e) {
                return q.appendChild(e).id = P, !n.getElementsByName || !n.getElementsByName(P).length
            }), C.getById ? (k.find.ID = function (e, t) {
                if (typeof t.getElementById !== Y && _) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, k.filter.ID = function (e) {
                var t = e.replace(Ce, Ne);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function (e) {
                var t = e.replace(Ce, Ne);
                return function (e) {
                    var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = C.getElementsByTagName ? function (e, n) {
                return typeof n.getElementsByTagName !== Y ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, k.find.CLASS = C.getElementsByClassName && function (e, n) {
                return typeof n.getElementsByClassName !== Y && _ ? n.getElementsByClassName(e) : t
            }, O = [], M = [], (C.qsa = ve.test(n.querySelectorAll)) && (o(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || M.push("\\[" + ie + "*(?:value|" + re + ")"), e.querySelectorAll(":checked").length || M.push(":checked")
            }), o(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && M.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (C.matchesSelector = ve.test(F = q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && o(function (e) {
                C.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), O.push("!=", le)
            }), M = M.length && RegExp(M.join("|")), O = O.length && RegExp(O.join("|")), B = ve.test(q.contains) || q.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, V = q.compareDocumentPosition ? function (e, t) {
                if (e === t) return U = !0, 0;
                var r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return r ? 1 & r || !C.sortDetached && t.compareDocumentPosition(e) === r ? e === n || B(R, e) ? -1 : t === n || B(R, t) ? 1 : D ? ne.call(D, e) - ne.call(D, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, l = [e], u = [t];
                if (e === t) return U = !0, 0;
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : D ? ne.call(D, e) - ne.call(D, t) : 0;
                if (o === a) return s(e, t);
                for (r = e; r = r.parentNode;) l.unshift(r);
                for (r = t; r = r.parentNode;) u.unshift(r);
                for (; l[i] === u[i];) i++;
                return i ? s(l[i], u[i]) : l[i] === R ? -1 : u[i] === R ? 1 : 0
            }, n) : H
        }, n.matches = function (e, t) {
            return n(e, null, null, t)
        }, n.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== H && L(e), t = t.replace(he, "='$1']"), !(!C.matchesSelector || !_ || O && O.test(t) || M && M.test(t))) try {
                var r = F.call(e, t);
                if (r || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {
            }
            return n(t, H, null, [e]).length > 0
        }, n.contains = function (e, t) {
            return (e.ownerDocument || e) !== H && L(e), B(e, t)
        }, n.attr = function (e, n) {
            (e.ownerDocument || e) !== H && L(e);
            var r = k.attrHandle[n.toLowerCase()], i = r && G.call(k.attrHandle, n.toLowerCase()) ? r(e, n, !_) : t;
            return i === t ? C.attributes || !_ ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
        }, n.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, n.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (U = !C.detectDuplicates, D = !C.sortStable && e.slice(0), e.sort(V), U) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return e
        }, E = n.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r]; r++) n += E(t);
            return n
        }, k = n.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ye,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Ce, Ne), e[3] = (e[4] || e[5] || "").replace(Ce, Ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                }, PSEUDO: function (e) {
                    var n, r = !e[5] && e[2];
                    return ye.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && ge.test(r) && (n = p(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Ce, Ne).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = I[e + " "];
                    return t || (t = RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && I(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, r) {
                    return function (i) {
                        var o = n.attr(i, e);
                        return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode,
                            y = s && t.nodeName.toLowerCase(), v = !l && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];) if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                for (c = m[P] || (m[P] = {}), u = c[e] || [], d = u[0] === W && u[1], p = u[0] === W && u[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();) if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [W, d, p];
                                    break
                                }
                            } else if (v && (u = (t[P] || (t[P] = {}))[e]) && u[0] === W) p = u[1]; else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[P] || (f[P] = {}))[e] = [W, p]), f !== t));) ;
                            return p -= i, p === r || 0 === p % r && p / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var r, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return o[P] ? o(t) : o.length > 1 ? (r = [e, e, "", t], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, n) {
                        for (var r, i = o(e, t), a = i.length; a--;) r = ne.call(e, i[a]), e[r] = !(n[r] = i[a])
                    }) : function (e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [], n = [], r = A(e.replace(ue, "$1"));
                    return r[P] ? i(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }), has: i(function (e) {
                    return function (t) {
                        return n(e, t).length > 0
                    }
                }), contains: i(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                    }
                }), lang: i(function (e) {
                    return me.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Ce, Ne).toLowerCase(), function (t) {
                        var n;
                        do if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === q
                }, focus: function (e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                }, parent: function (e) {
                    return !k.pseudos.empty(e)
                }, header: function (e) {
                    return Te.test(e.nodeName)
                }, input: function (e) {
                    return xe.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                }, first: c(function () {
                    return [0]
                }), last: c(function (e, t) {
                    return [t - 1]
                }), eq: c(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: c(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }), odd: c(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }), lt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }), gt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
                    return e
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) k.pseudos[w] = l(w);
        for (w in{submit: !0, reset: !0}) k.pseudos[w] = u(w);
        f.prototype = k.filters = k.pseudos, k.setFilters = new f, A = n.compile = function (e, t) {
            var n, r = [], i = [], o = X[e + " "];
            if (!o) {
                for (t || (t = p(e)), n = t.length; n--;) o = v(t[n]), o[P] ? r.push(o) : i.push(o);
                o = X(e, b(i, r))
            }
            return o
        }, C.sortStable = P.split("").sort(V).join("") === P, C.detectDuplicates = U, L(), C.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(H.createElement("div"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function (e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }), C.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function (e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || a(re, function (e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
        }), ce.find = n, ce.expr = n.selectors, ce.expr[":"] = ce.expr.pseudos, ce.unique = n.uniqueSort, ce.text = n.getText, ce.isXMLDoc = n.isXML, ce.contains = n.contains
    }(e);
    var ke = {};
    ce.Callbacks = function (e) {
        e = "string" == typeof e ? ke[e] || r(e) : ce.extend({}, e);
        var n, i, o, a, s, l, u = [], c = !e.once && [], f = function (t) {
            for (i = e.memory && t, o = !0, s = l || 0, l = 0, a = u.length, n = !0; u && a > s; s++) if (u[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                i = !1;
                break
            }
            n = !1, u && (c ? c.length && f(c.shift()) : i ? u = [] : p.disable())
        }, p = {
            add: function () {
                if (u) {
                    var t = u.length;
                    !function r(t) {
                        ce.each(t, function (t, n) {
                            var i = ce.type(n);
                            "function" === i ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== i && r(n)
                        })
                    }(arguments), n ? a = u.length : i && (l = t, f(i))
                }
                return this
            }, remove: function () {
                return u && ce.each(arguments, function (e, t) {
                    for (var r; (r = ce.inArray(t, u, r)) > -1;) u.splice(r, 1), n && (a >= r && a--, s >= r && s--)
                }), this
            }, has: function (e) {
                return e ? ce.inArray(e, u) > -1 : !(!u || !u.length)
            }, empty: function () {
                return u = [], a = 0, this
            }, disable: function () {
                return u = c = i = t, this
            }, disabled: function () {
                return !u
            }, lock: function () {
                return c = t, i || p.disable(), this
            }, locked: function () {
                return !c
            }, fireWith: function (e, t) {
                return !u || o && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : f(t)), this
            }, fire: function () {
                return p.fireWith(this, arguments), this
            }, fired: function () {
                return !!o
            }
        };
        return p
    }, ce.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", ce.Callbacks("once memory"), "resolved"], ["reject", "fail", ce.Callbacks("once memory"), "rejected"], ["notify", "progress", ce.Callbacks("memory")]],
                n = "pending", r = {
                    state: function () {
                        return n
                    }, always: function () {
                        return i.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return ce.Deferred(function (n) {
                            ce.each(t, function (t, o) {
                                var a = o[0], s = ce.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && ce.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? ce.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, ce.each(t, function (e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t, n, r, i = 0, o = oe.call(arguments), a = o.length,
                s = 1 !== a || e && ce.isFunction(e.promise) ? a : 0, l = 1 === s ? e : ce.Deferred(),
                u = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? oe.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (a > 1) for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && ce.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;
            return s || l.resolveWith(r, o), l.promise()
        }
    }), ce.support = function (t) {
        var n, r, i, o, a, s, l, u, c, f = G.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*") || [], r = f.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        o = G.createElement("select"), s = o.appendChild(G.createElement("option")), i = f.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== f.className, t.leadingWhitespace = 3 === f.firstChild.nodeType, t.tbody = !f.getElementsByTagName("tbody").length, t.htmlSerialize = !!f.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!i.value, t.optSelected = s.selected, t.enctype = !!G.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete f.test
        } catch (p) {
            t.deleteExpando = !1
        }
        i = G.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = G.createDocumentFragment(), a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), f.cloneNode(!0).click());
        for (c in{
            submit: !0,
            change: !0,
            focusin: !0
        }) f.setAttribute(l = "on" + c, "t"), t[c + "Bubbles"] = l in e || f.attributes[l].expando === !1;
        f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === f.style.backgroundClip;
        for (c in ce(t)) break;
        return t.ownLast = "0" !== c, ce(function () {
            var n, r, i,
                o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = G.getElementsByTagName("body")[0];
            a && (n = G.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ce.swap(a, null != a.style.zoom ? {zoom: 1} : {}, function () {
                t.boxSizing = 4 === f.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {width: "4px"}).width, r = f.appendChild(G.createElement("div")), r.style.cssText = f.style.cssText = o, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof f.style.zoom !== Y && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = f = i = r = null)
        }), n = o = a = s = r = i = null, t
    }({});
    var Ee = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Se = /([A-Z])/g;
    ce.extend({
        cache: {},
        noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return e = e.nodeType ? ce.cache[e[ce.expando]] : e[ce.expando], !!e && !s(e)
        },
        data: function (e, t, n) {
            return i(e, t, n)
        },
        removeData: function (e, t) {
            return o(e, t)
        },
        _data: function (e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return o(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && ce.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), ce.fn.extend({
        data: function (e, n) {
            var r, i, o = null, s = 0, l = this[0];
            if (e === t) {
                if (this.length && (o = ce.data(l), 1 === l.nodeType && !ce._data(l, "parsedAttrs"))) {
                    for (r = l.attributes; r.length > s; s++) i = r[s].name, 0 === i.indexOf("data-") && (i = ce.camelCase(i.slice(5)), a(l, i, o[i]));
                    ce._data(l, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                ce.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                ce.data(this, e, n)
            }) : l ? a(l, e, ce.data(l, e)) : null
        }, removeData: function (e) {
            return this.each(function () {
                ce.removeData(this, e)
            })
        }
    }), ce.extend({
        queue: function (e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = ce._data(e, n), r && (!i || ce.isArray(r) ? i = ce._data(e, n, ce.makeArray(r)) : i.push(r)), i || []) : t
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = ce.queue(e, t), r = n.length, i = n.shift(), o = ce._queueHooks(e, t), a = function () {
                ce.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ce._data(e, n) || ce._data(e, n, {
                empty: ce.Callbacks("once memory").add(function () {
                    ce._removeData(e, t + "queue"), ce._removeData(e, n)
                })
            })
        }
    }), ce.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? ce.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = ce.queue(this, e, n);
                ce._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ce.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                ce.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = ce.fx ? ce.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            var r, i = 1, o = ce.Deferred(), a = this, s = this.length, l = function () {
                --i || o.resolveWith(a, [a])
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = ce._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var Ae, je, De = /[\t\r\n\f]/g, Le = /\r/g, He = /^(?:input|select|textarea|button|object)$/i, qe = /^(?:a|area)$/i,
        _e = /^(?:checked|selected)$/i, Me = ce.support.getSetAttribute, Oe = ce.support.input;
    ce.fn.extend({
        attr: function (e, t) {
            return ce.access(this, ce.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                ce.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return ce.access(this, ce.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = ce.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        }, addClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
            if (ce.isFunction(e)) return this.each(function (t) {
                ce(this).addClass(e.call(this, t, this.className))
            });
            if (l) for (t = (e || "").match(pe) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(De, " ") : " ")) {
                for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = ce.trim(r)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (ce.isFunction(e)) return this.each(function (t) {
                ce(this).removeClass(e.call(this, t, this.className))
            });
            if (l) for (t = (e || "").match(pe) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(De, " ") : "")) {
                for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                n.className = e ? ce.trim(r) : ""
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ce.isFunction(e) ? this.each(function (n) {
                ce(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) for (var t, r = 0, i = ce(this), o = e.match(pe) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else (n === Y || "boolean" === n) && (this.className && ce._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ce._data(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(De, " ").indexOf(t) >= 0) return !0;
            return !1
        }, val: function (e) {
            var n, r, i, o = this[0];
            return arguments.length ? (i = ce.isFunction(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, ce(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ce.isArray(o) && (o = ce.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
            })) : o ? (r = ce.valHooks[o.type] || ce.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(Le, "") : null == n ? "" : n)) : void 0
        }
    }), ce.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = ce.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            }, select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++) if (n = r[l], !(!n.selected && l !== i || (ce.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ce.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ce(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = ce.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = ce.inArray(ce(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }, attr: function (e, n, r) {
            var i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === Y ? ce.prop(e, n, r) : (1 === a && ce.isXMLDoc(e) || (n = n.toLowerCase(), i = ce.attrHooks[n] || (ce.expr.match.bool.test(n) ? je : Ae)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : (o = ce.find.attr(e, n), null == o ? t : o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : (ce.removeAttr(e, n), t))
        }, removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(pe);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = ce.propFix[n] || n, ce.expr.match.bool.test(n) ? Oe && Me || !_e.test(n) ? e[r] = !1 : e[ce.camelCase("default-" + n)] = e[r] = !1 : ce.attr(e, n, ""), e.removeAttribute(Me ? n : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ce.support.radioValue && "radio" === t && ce.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !ce.isXMLDoc(e), a && (n = ce.propFix[n] || n, o = ce.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = ce.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : He.test(e.nodeName) || qe.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), je = {
        set: function (e, t, n) {
            return t === !1 ? ce.removeAttr(e, n) : Oe && Me || !_e.test(n) ? e.setAttribute(!Me && ce.propFix[n] || n, n) : e[ce.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = ce.expr.attrHandle[n] || ce.find.attr;
        ce.expr.attrHandle[n] = Oe && Me || !_e.test(n) ? function (e, n, i) {
            var o = ce.expr.attrHandle[n],
                a = i ? t : (ce.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return ce.expr.attrHandle[n] = o, a
        } : function (e, n, r) {
            return r ? t : e[ce.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), Oe && Me || (ce.attrHooks.value = {
        set: function (e, n, r) {
            return ce.nodeName(e, "input") ? (e.defaultValue = n, t) : Ae && Ae.set(e, n, r)
        }
    }), Me || (Ae = {
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, ce.expr.attrHandle.id = ce.expr.attrHandle.name = ce.expr.attrHandle.coords = function (e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, ce.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        }, set: Ae.set
    }, ce.attrHooks.contenteditable = {
        set: function (e, t, n) {
            Ae.set(e, "" !== t && t, n)
        }
    }, ce.each(["width", "height"], function (e, n) {
        ce.attrHooks[n] = {
            set: function (e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), ce.support.hrefNormalized || ce.each(["href", "src"], function (e, t) {
        ce.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ce.support.style || (ce.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), ce.support.optSelected || (ce.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ce.propFix[this.toLowerCase()] = this
    }), ce.support.enctype || (ce.propFix.enctype = "encoding"), ce.each(["radio", "checkbox"], function () {
        ce.valHooks[this] = {
            set: function (e, n) {
                return ce.isArray(n) ? e.checked = ce.inArray(ce(e).val(), n) >= 0 : t
            }
        }, ce.support.checkOn || (ce.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Fe = /^(?:input|select|textarea)$/i, Be = /^key/, Pe = /^(?:mouse|contextmenu)|click/,
        Re = /^(?:focusinfocus|focusoutblur)$/, We = /^([^.]*)(?:\.(.+)|)$/;
    ce.event = {
        global: {},
        add: function (e, n, r, i, o) {
            var a, s, l, u, c, f, p, d, h, g, m, y = ce._data(e);
            if (y) {
                for (r.handler && (u = r, r = u.handler, o = u.selector), r.guid || (r.guid = ce.guid++), (s = y.events) || (s = y.events = {}), (f = y.handle) || (f = y.handle = function (e) {
                    return typeof ce === Y || e && ce.event.triggered === e.type ? t : ce.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(pe) || [""], l = n.length; l--;) a = We.exec(n[l]) || [], h = m = a[1], g = (a[2] || "").split(".").sort(), h && (c = ce.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = ce.event.special[h] || {}, p = ce.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ce.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, u), (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, c.setup && c.setup.call(e, i, g, f) !== !1 || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), ce.event.global[h] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, l, u, c, f, p, d, h, g, m = ce.hasData(e) && ce._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(pe) || [""], u = t.length; u--;) if (s = We.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = ce.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) a = p[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                    l && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ce.removeEvent(e, d, m.handle), delete c[d])
                } else for (d in c) ce.event.remove(e, d + t[u], n, r, !0);
                ce.isEmptyObject(c) && (delete m.handle, ce._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var a, s, l, u, c, f, p, d = [i || G], h = le.call(n, "type") ? n.type : n,
                g = le.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = f = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !Re.test(h + ce.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), s = 0 > h.indexOf(":") && "on" + h, n = n[ce.expando] ? n : new ce.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ce.makeArray(r, [n]), c = ce.event.special[h] || {}, o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!o && !c.noBubble && !ce.isWindow(i)) {
                    for (u = c.delegateType || h, Re.test(u + h) || (l = l.parentNode); l; l = l.parentNode) d.push(l), f = l;
                    f === (i.ownerDocument || G) && d.push(f.defaultView || f.parentWindow || e)
                }
                for (p = 0; (l = d[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? u : c.bindType || h, a = (ce._data(l, "events") || {})[n.type] && ce._data(l, "handle"), a && a.apply(l, r), a = s && l[s], a && ce.acceptData(l) && a.apply && a.apply(l, r) === !1 && n.preventDefault();
                if (n.type = h, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), r) === !1) && ce.acceptData(i) && s && i[h] && !ce.isWindow(i)) {
                    f = i[s], f && (i[s] = null), ce.event.triggered = h;
                    try {
                        i[h]()
                    } catch (m) {
                    }
                    ce.event.triggered = t, f && (i[s] = f)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = ce.event.fix(e);
            var n, r, i, o, a, s = [], l = oe.call(arguments), u = (ce._data(this, "events") || {})[e.type] || [],
                c = ce.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = ce.event.handlers.call(this, e, u), n = 0; (o = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, a = 0; (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ce.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? ce(r, this).index(u) >= 0 : ce.find(r, this, null, [u]).length), o[r] && o.push(i);
                o.length && s.push({elem: u, handlers: o})
            }
            return n.length > l && s.push({elem: this, handlers: n.slice(l)}), s
        },
        fix: function (e) {
            if (e[ce.expando]) return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Pe.test(i) ? this.mouseHooks : Be.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ce.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || G), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, a = n.button, s = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || G, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== c() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === c() && this.blur ? (this.blur(), !1) : t
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return ce.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }, _default: function (e) {
                    return ce.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = ce.extend(new ce.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? ce.event.trigger(i, null, t) : ce.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ce.removeEvent = G.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Y && (e[r] = null), e.detachEvent(r, n))
    }, ce.Event = function (e, n) {
        return this instanceof ce.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : u) : this.type = e, n && ce.extend(this, n), this.timeStamp = e && e.timeStamp || ce.now(), this[ce.expando] = !0, t) : new ce.Event(e, n)
    }, ce.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = l, this.stopPropagation()
        }
    }, ce.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        ce.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !ce.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ce.support.submitBubbles || (ce.event.special.submit = {
        setup: function () {
            return !ce.nodeName(this, "form") && (ce.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target, r = ce.nodeName(n, "input") || ce.nodeName(n, "button") ? n.form : t;
                r && !ce._data(r, "submitBubbles") && (ce.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), ce._data(r, "submitBubbles", !0))
            }), t)
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ce.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            return !ce.nodeName(this, "form") && (ce.event.remove(this, "._submit"), t)
        }
    }), ce.support.changeBubbles || (ce.event.special.change = {
        setup: function () {
            return Fe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ce.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ce.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ce.event.simulate("change", this, e, !0)
            })), !1) : (ce.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Fe.test(t.nodeName) && !ce._data(t, "changeBubbles") && (ce.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ce.event.simulate("change", this.parentNode, e, !0)
                }), ce._data(t, "changeBubbles", !0))
            }), t)
        }, handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        }, teardown: function () {
            return ce.event.remove(this, "._change"), !Fe.test(this.nodeName)
        }
    }), ce.support.focusinBubbles || ce.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            ce.event.simulate(t, e.target, ce.event.fix(e), !0)
        };
        ce.event.special[t] = {
            setup: function () {
                0 === n++ && G.addEventListener(e, r, !0)
            }, teardown: function () {
                0 === --n && G.removeEventListener(e, r, !0)
            }
        }
    }), ce.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = u; else if (!i) return this;
            return 1 === o && (s = i, i = function (e) {
                return ce().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = ce.guid++)), this.each(function () {
                ce.event.add(this, e, i, r, n)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ce(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = u), this.each(function () {
                ce.event.remove(this, e, r, n)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                ce.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, n) {
            var r = this[0];
            return r ? ce.event.trigger(e, n, r, !0) : t
        }
    });
    var $e = /^.[^:#\[\.,]*$/, Ie = /^(?:parents|prev(?:Until|All))/, ze = ce.expr.match.needsContext,
        Xe = {children: !0, contents: !0, next: !0, prev: !0};
    ce.fn.extend({
        find: function (e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e) return this.pushStack(ce(e).filter(function () {
                for (t = 0; i > t; t++) if (ce.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) ce.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ce.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, has: function (e) {
            var t, n = ce(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++) if (ce.contains(this, n[t])) return !0
            })
        }, not: function (e) {
            return this.pushStack(p(this, e || [], !0))
        }, filter: function (e) {
            return this.pushStack(p(this, e || [], !1))
        }, is: function (e) {
            return !!p(this, "string" == typeof e && ze.test(e) ? ce(e) : e || [], !1).length
        }, closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ze.test(e) || "string" != typeof e ? ce(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
                n = o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? ce.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? ce.inArray(this[0], ce(e)) : ce.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            var n = "string" == typeof e ? ce(e, t) : ce.makeArray(e && e.nodeType ? [e] : e),
                r = ce.merge(this.get(), n);
            return this.pushStack(ce.unique(r))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ce.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return ce.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return ce.dir(e, "parentNode", n)
        }, next: function (e) {
            return f(e, "nextSibling")
        }, prev: function (e) {
            return f(e, "previousSibling")
        }, nextAll: function (e) {
            return ce.dir(e, "nextSibling");
        }, prevAll: function (e) {
            return ce.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return ce.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return ce.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return ce.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return ce.sibling(e.firstChild)
        }, contents: function (e) {
            return ce.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ce.merge([], e.childNodes)
        }
    }, function (e, t) {
        ce.fn[e] = function (n, r) {
            var i = ce.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ce.filter(r, i)), this.length > 1 && (Xe[e] || (i = ce.unique(i)), Ie.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), ce.extend({
        filter: function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, dir: function (e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ce(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ve = / jQuery\d+="(?:null|\d+)"/g, Ye = RegExp("<(?:" + Ue + ")[\\s/>]", "i"), Je = /^\s+/,
        Ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Qe = /<([\w:]+)/,
        Ke = /<tbody/i, Ze = /<|&#?\w+;/, et = /<(?:script|style|link)/i, tt = /^(?:checkbox|radio)$/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i, rt = /^$|\/(?:java|ecma)script/i, it = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, at = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ce.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, st = d(G), lt = st.appendChild(G.createElement("div"));
    at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td, ce.fn.extend({
        text: function (e) {
            return ce.access(this, function (e) {
                return e === t ? ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var n, r = e ? ce.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ce.cleanData(x(n)), n.parentNode && (t && ce.contains(n.ownerDocument, n) && y(x(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ce.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ce.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return ce.clone(this, e, t)
            })
        }, html: function (e) {
            return ce.access(this, function (e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ve, "") : t;
                if (!("string" != typeof e || et.test(e) || !ce.support.htmlSerialize && Ye.test(e) || !ce.support.leadingWhitespace && Je.test(e) || at[(Qe.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Ge, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (ce.cleanData(x(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = ce.map(this, function (e) {
                return [e.nextSibling, e.parentNode]
            }), t = 0;
            return this.domManip(arguments, function (n) {
                var r = e[t++], i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), ce(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t, n) {
            e = re.apply([], e);
            var r, i, o, a, s, l, u = 0, c = this.length, f = this, p = c - 1, d = e[0], h = ce.isFunction(d);
            if (h || !(1 >= c || "string" != typeof d || ce.support.checkClone) && nt.test(d)) return this.each(function (r) {
                var i = f.eq(r);
                h && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (l = ce.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = ce.map(x(l, "script"), g), o = a.length; c > u; u++) i = l, u !== p && (i = ce.clone(i, !0, !0), o && ce.merge(a, x(i, "script"))), t.call(this[u], i, u);
                if (o) for (s = a[a.length - 1].ownerDocument, ce.map(a, m), u = 0; o > u; u++) i = a[u], rt.test(i.type || "") && !ce._data(i, "globalEval") && ce.contains(s, i) && (i.src ? ce._evalUrl(i.src) : ce.globalEval((i.text || i.textContent || i.innerHTML || "").replace(ot, "")));
                l = r = null
            }
            return this
        }
    }), ce.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        ce.fn[e] = function (e) {
            for (var n, r = 0, i = [], o = ce(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ce(o[r])[t](n), ie.apply(i, n.get());
            return this.pushStack(i)
        }
    }), ce.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, l = ce.contains(e.ownerDocument, e);
            if (ce.support.html5Clone || ce.isXMLDoc(e) || !Ye.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (lt.innerHTML = e.outerHTML, lt.removeChild(o = lt.firstChild)), !(ce.support.noCloneEvent && ce.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e))) for (r = x(o), s = x(e), a = 0; null != (i = s[a]); ++a) r[a] && b(i, r[a]);
            if (t) if (n) for (s = s || x(e), r = r || x(o), a = 0; null != (i = s[a]); a++) v(i, r[a]); else v(e, o);
            return r = x(o, "script"), r.length > 0 && y(r, !l && x(e, "script")), r = s = i = null, o
        }, buildFragment: function (e, t, n, r) {
            for (var i, o, a, s, l, u, c, f = e.length, p = d(t), h = [], g = 0; f > g; g++) if (o = e[g], o || 0 === o) if ("object" === ce.type(o)) ce.merge(h, o.nodeType ? [o] : o); else if (Ze.test(o)) {
                for (s = s || p.appendChild(t.createElement("div")), l = (Qe.exec(o) || ["", ""])[1].toLowerCase(), c = at[l] || at._default, s.innerHTML = c[1] + o.replace(Ge, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!ce.support.leadingWhitespace && Je.test(o) && h.push(t.createTextNode(Je.exec(o)[0])), !ce.support.tbody) for (o = "table" !== l || Ke.test(o) ? "<table>" !== c[1] || Ke.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ce.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (ce.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = p.lastChild
            } else h.push(t.createTextNode(o));
            for (s && p.removeChild(s), ce.support.appendChecked || ce.grep(x(h, "input"), T), g = 0; o = h[g++];) if ((!r || -1 === ce.inArray(o, r)) && (a = ce.contains(o.ownerDocument, o), s = x(p.appendChild(o), "script"), a && y(s), n)) for (i = 0; o = s[i++];) rt.test(o.type || "") && n.push(o);
            return s = null, p
        }, cleanData: function (e, t) {
            for (var n, r, i, o, a = 0, s = ce.expando, l = ce.cache, u = ce.support.deleteExpando, c = ce.event.special; null != (n = e[a]); a++) if ((t || ce.acceptData(n)) && (i = n[s], o = i && l[i])) {
                if (o.events) for (r in o.events) c[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, o.handle);
                l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== Y ? n.removeAttribute(s) : n[s] = null, te.push(i))
            }
        }, _evalUrl: function (e) {
            return ce.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }
    }), ce.fn.extend({
        wrapAll: function (e) {
            if (ce.isFunction(e)) return this.each(function (t) {
                ce(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ce(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return ce.isFunction(e) ? this.each(function (t) {
                ce(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = ce(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = ce.isFunction(e);
            return this.each(function (n) {
                ce(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                ce.nodeName(this, "body") || ce(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var ut, ct, ft, pt = /alpha\([^)]*\)/i, dt = /opacity\s*=\s*([^)]*)/, ht = /^(top|right|bottom|left)$/,
        gt = /^(none|table(?!-c[ea]).+)/, mt = /^margin/, yt = RegExp("^(" + fe + ")(.*)$", "i"),
        vt = RegExp("^(" + fe + ")(?!px)[a-z%]+$", "i"), bt = RegExp("^([+-])=(" + fe + ")", "i"), xt = {BODY: "block"},
        Tt = {position: "absolute", visibility: "hidden", display: "block"}, wt = {letterSpacing: 0, fontWeight: 400},
        Ct = ["Top", "Right", "Bottom", "Left"], Nt = ["Webkit", "O", "Moz", "ms"];
    ce.fn.extend({
        css: function (e, n) {
            return ce.access(this, function (e, n, r) {
                var i, o, a = {}, s = 0;
                if (ce.isArray(n)) {
                    for (o = ct(e), i = n.length; i > s; s++) a[n[s]] = ce.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? ce.style(e, n, r) : ce.css(e, n)
            }, e, n, arguments.length > 1)
        }, show: function () {
            return N(this, !0)
        }, hide: function () {
            return N(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                C(this) ? ce(this).show() : ce(this).hide()
            })
        }
    }), ce.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = ft(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": ce.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = ce.camelCase(n), u = e.style;
                if (n = ce.cssProps[l] || (ce.cssProps[l] = w(u, l)), s = ce.cssHooks[n] || ce.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r, "string" === a && (o = bt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ce.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ce.cssNumber[l] || (r += "px"), ce.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    u[n] = r
                } catch (c) {
                }
            }
        },
        css: function (e, n, r, i) {
            var o, a, s, l = ce.camelCase(n);
            return n = ce.cssProps[l] || (ce.cssProps[l] = w(e.style, l)), s = ce.cssHooks[n] || ce.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = ft(e, n, i)), "normal" === a && n in wt && (a = wt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || ce.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (ct = function (t) {
        return e.getComputedStyle(t, null)
    }, ft = function (e, n, r) {
        var i, o, a, s = r || ct(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
        return s && ("" !== l || ce.contains(e.ownerDocument, e) || (l = ce.style(e, n)), vt.test(l) && mt.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : G.documentElement.currentStyle && (ct = function (e) {
        return e.currentStyle
    }, ft = function (e, n, r) {
        var i, o, a, s = r || ct(e), l = s ? s[n] : t, u = e.style;
        return null == l && u && u[n] && (l = u[n]), vt.test(l) && !ht.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    }), ce.each(["height", "width"], function (e, n) {
        ce.cssHooks[n] = {
            get: function (e, r, i) {
                return r ? 0 === e.offsetWidth && gt.test(ce.css(e, "display")) ? ce.swap(e, Tt, function () {
                    return S(e, n, i)
                }) : S(e, n, i) : t
            }, set: function (e, t, r) {
                var i = r && ct(e);
                return k(e, t, r ? E(e, n, r, ce.support.boxSizing && "border-box" === ce.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ce.support.opacity || (ce.cssHooks.opacity = {
        get: function (e, t) {
            return dt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = ce.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ce.trim(o.replace(pt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = pt.test(o) ? o.replace(pt, i) : o + " " + i)
        }
    }), ce(function () {
        ce.support.reliableMarginRight || (ce.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? ce.swap(e, {display: "inline-block"}, ft, [e, "marginRight"]) : t
            }
        }), !ce.support.pixelPosition && ce.fn.position && ce.each(["top", "left"], function (e, n) {
            ce.cssHooks[n] = {
                get: function (e, r) {
                    return r ? (r = ft(e, n), vt.test(r) ? ce(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), ce.expr && ce.expr.filters && (ce.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ce.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ce.css(e, "display"))
    }, ce.expr.filters.visible = function (e) {
        return !ce.expr.filters.hidden(e)
    }), ce.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        ce.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Ct[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, mt.test(e) || (ce.cssHooks[e + t].set = k)
    });
    var kt = /%20/g, Et = /\[\]$/, St = /\r?\n/g, At = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
    ce.fn.extend({
        serialize: function () {
            return ce.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = ce.prop(this, "elements");
                return e ? ce.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ce(this).is(":disabled") && jt.test(this.nodeName) && !At.test(e) && (this.checked || !tt.test(e))
            }).map(function (e, t) {
                var n = ce(this).val();
                return null == n ? null : ce.isArray(n) ? ce.map(n, function (e) {
                    return {name: t.name, value: e.replace(St, "\r\n")}
                }) : {name: t.name, value: n.replace(St, "\r\n")}
            }).get()
        }
    }), ce.param = function (e, n) {
        var r, i = [], o = function (e, t) {
            t = ce.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = ce.ajaxSettings && ce.ajaxSettings.traditional), ce.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function () {
            o(this.name, this.value)
        }); else for (r in e) D(r, e[r], n, o);
        return i.join("&").replace(kt, "+")
    }, ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        ce.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ce.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Dt, Lt, Ht = ce.now(), qt = /\?/, _t = /#.*$/, Mt = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Bt = /^(?:GET|HEAD)$/, Pt = /^\/\//,
        Rt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Wt = ce.fn.load, $t = {}, It = {}, zt = "*/".concat("*");
    try {
        Lt = J.href
    } catch (Xt) {
        Lt = G.createElement("a"), Lt.href = "", Lt = Lt.href
    }
    Dt = Rt.exec(Lt.toLowerCase()) || [], ce.fn.load = function (e, n, r) {
        if ("string" != typeof e && Wt) return Wt.apply(this, arguments);
        var i, o, a, s = this, l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), ce.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ce.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, s.html(i ? ce("<div>").append(ce.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ce.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ce.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Lt,
            type: "GET",
            isLocal: Ft.test(Dt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": ce.parseJSON, "text xml": ce.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? q(q(e, ce.ajaxSettings), t) : q(ce.ajaxSettings, e)
        },
        ajaxPrefilter: L($t),
        ajaxTransport: L(It),
        ajax: function (e, n) {
            function r(e, n, r, i) {
                var o, f, v, b, T, C = n;
                2 !== x && (x = 2, l && clearTimeout(l), c = t, s = i || "", w.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, r && (b = _(p, w, r)), b = M(p, b, w, o), o ? (p.ifModified && (T = w.getResponseHeader("Last-Modified"), T && (ce.lastModified[a] = T), T = w.getResponseHeader("etag"), T && (ce.etag[a] = T)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, f = b.data, v = b.error, o = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (n || C) + "", o ? g.resolveWith(d, [f, C, w]) : g.rejectWith(d, [w, C, v]), w.statusCode(y), y = t, u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [w, p, o ? f : v]), m.fireWith(d, [w, C]), u && (h.trigger("ajaxComplete", [w, p]), --ce.active || ce.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, l, u, c, f, p = ce.ajaxSetup({}, n), d = p.context || p,
                h = p.context && (d.nodeType || d.jquery) ? ce(d) : ce.event, g = ce.Deferred(),
                m = ce.Callbacks("once memory"), y = p.statusCode || {}, v = {}, b = {}, x = 0, T = "canceled", w = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!f) for (f = {}; t = Ot.exec(s);) f[t[1].toLowerCase()] = t[2];
                            t = f[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === x ? s : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, v[e] = t), this
                    }, overrideMimeType: function (e) {
                        return x || (p.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (2 > x) for (t in e) y[t] = [y[t], e[t]]; else w.always(e[w.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || T;
                        return c && c.abort(t), r(0, t), this
                    }
                };
            if (g.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || Lt) + "").replace(_t, "").replace(Pt, Dt[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ce.trim(p.dataType || "*").toLowerCase().match(pe) || [""], null == p.crossDomain && (i = Rt.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === Dt[1] && i[2] === Dt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Dt[3] || ("http:" === Dt[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ce.param(p.data, p.traditional)), H($t, p, n, w), 2 === x) return w;
            u = p.global, u && 0 === ce.active++ && ce.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Bt.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (qt.test(a) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Mt.test(a) ? a.replace(Mt, "$1_=" + Ht++) : a + (qt.test(a) ? "&" : "?") + "_=" + Ht++)), p.ifModified && (ce.lastModified[a] && w.setRequestHeader("If-Modified-Since", ce.lastModified[a]), ce.etag[a] && w.setRequestHeader("If-None-Match", ce.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers) w.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === x)) return w.abort();
            T = "abort";
            for (o in{success: 1, error: 1, complete: 1}) w[o](p[o]);
            if (c = H(It, p, n, w)) {
                w.readyState = 1, u && h.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (l = setTimeout(function () {
                    w.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, c.send(v, r)
                } catch (C) {
                    if (!(2 > x)) throw C;
                    r(-1, C)
                }
            } else r(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, n) {
            return ce.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return ce.get(e, t, n, "script")
        }
    }), ce.each(["get", "post"], function (e, n) {
        ce[n] = function (e, r, i, o) {
            return ce.isFunction(r) && (o = o || i, i = r, r = t), ce.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), ce.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return ce.globalEval(e), e
            }
        }
    }), ce.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ce.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = G.head || ce("head")[0] || G.documentElement;
            return {
                send: function (t, i) {
                    n = G.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                }, abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Ut = [], Vt = /(=)\?(?=&|$)|\?\?/;
    ce.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Ut.pop() || ce.expando + "_" + Ht++;
            return this[e] = !0, e
        }
    }), ce.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s,
            l = n.jsonp !== !1 && (Vt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ce.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Vt, "$1" + o) : n.jsonp !== !1 && (n.url += (qt.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || ce.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Ut.push(o)), s && ce.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Yt, Jt, Gt = 0, Qt = e.ActiveXObject && function () {
        var e;
        for (e in Yt) Yt[e](t, !0)
    };
    ce.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && O() || F()
    } : O, Jt = ce.ajaxSettings.xhr(), ce.support.cors = !!Jt && "withCredentials" in Jt, Jt = ce.support.ajax = !!Jt, Jt && ce.ajaxTransport(function (n) {
        if (!n.crossDomain || ce.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) l.setRequestHeader(s, i[s])
                    } catch (u) {
                    }
                    l.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, u, c, f;
                        try {
                            if (r && (i || 4 === l.readyState)) if (r = t, a && (l.onreadystatechange = ce.noop, Qt && delete Yt[a]), i) 4 !== l.readyState && l.abort(); else {
                                f = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (f.text = l.responseText);
                                try {
                                    c = l.statusText
                                } catch (p) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                            }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        f && o(s, c, f, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Gt, Qt && (Yt || (Yt = {}, ce(e).unload(Qt)), Yt[a] = r), l.onreadystatechange = r) : r()
                }, abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Kt, Zt, en = /^(?:toggle|show|hide)$/, tn = RegExp("^(?:([+-])=|)(" + fe + ")([a-z%]*)$", "i"),
        nn = /queueHooks$/, rn = [$], on = {
            "*": [function (e, t) {
                var n = this.createTween(e, t), r = n.cur(), i = tn.exec(t), o = i && i[3] || (ce.cssNumber[e] ? "" : "px"),
                    a = (ce.cssNumber[e] || "px" !== o && +r) && tn.exec(ce.css(n.elem, e)), s = 1, l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, ce.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    ce.Animation = ce.extend(R, {
        tweener: function (e, t) {
            ce.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], on[n] = on[n] || [], on[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? rn.unshift(e) : rn.push(e)
        }
    }), ce.Tween = I, I.prototype = {
        constructor: I, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = I.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ce.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ce.cssProps[e.prop]] || ce.cssHooks[e.prop]) ? ce.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ce.each(["toggle", "show", "hide"], function (e, t) {
        var n = ce.fn[t];
        ce.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, r, i)
        }
    }), ce.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(C).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = ce.isEmptyObject(e), o = ce.speed(t, n, r), a = function () {
                var t = R(this, ce.extend({}, e), o);
                (i || ce._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, n = null != e && e + "queueHooks", o = ce.timers, a = ce._data(this);
                if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && nn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && ce.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = ce._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = ce.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, ce.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), ce.each({
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        ce.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), ce.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? ce.extend({}, e) : {
            complete: n || !n && t || ce.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ce.isFunction(t) && t
        };
        return r.duration = ce.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ce.fx.speeds ? ce.fx.speeds[r.duration] : ce.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            ce.isFunction(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue)
        }, r
    }, ce.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ce.timers = [], ce.fx = I.prototype.init, ce.fx.tick = function () {
        var e, n = ce.timers, r = 0;
        for (Kt = ce.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || ce.fx.stop(), Kt = t
    }, ce.fx.timer = function (e) {
        e() && ce.timers.push(e) && ce.fx.start()
    }, ce.fx.interval = 13, ce.fx.start = function () {
        Zt || (Zt = setInterval(ce.fx.tick, ce.fx.interval))
    }, ce.fx.stop = function () {
        clearInterval(Zt), Zt = null
    }, ce.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ce.fx.step = {}, ce.expr && ce.expr.filters && (ce.expr.filters.animated = function (e) {
        return ce.grep(ce.timers, function (t) {
            return e === t.elem
        }).length
    }), ce.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            ce.offset.setOffset(this, e, t)
        });
        var n, r, i = {top: 0, left: 0}, o = this[0], a = o && o.ownerDocument;
        return a ? (n = a.documentElement, ce.contains(n, o) ? (typeof o.getBoundingClientRect !== Y && (i = o.getBoundingClientRect()), r = X(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i) : void 0
    }, ce.offset = {
        setOffset: function (e, t, n) {
            var r = ce.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = ce(e), s = a.offset(), l = ce.css(e, "top"), u = ce.css(e, "left"),
                c = ("absolute" === r || "fixed" === r) && ce.inArray("auto", [l, u]) > -1, f = {}, p = {};
            c ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0), ce.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f)
        }
    }, ce.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, r = this[0];
                return "fixed" === ce.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ce.nodeName(e[0], "html") || (n = e.offset()), n.top += ce.css(e[0], "borderTopWidth", !0), n.left += ce.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ce.css(r, "marginTop", !0),
                    left: t.left - n.left - ce.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Q; e && !ce.nodeName(e, "html") && "static" === ce.css(e, "position");) e = e.offsetParent;
                return e || Q
            })
        }
    }), ce.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var r = /Y/.test(n);
        ce.fn[e] = function (i) {
            return ce.access(this, function (e, i, o) {
                var a = X(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? ce(a).scrollLeft() : o, r ? o : ce(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    }), ce.each({Height: "height", Width: "width"}, function (e, n) {
        ce.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
            ce.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return ce.access(this, function (n, r, i) {
                    var o;
                    return ce.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ce.css(n, r, s) : ce.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), ce.fn.size = function () {
        return this.length
    }, ce.fn.andSelf = ce.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ce : (e.jQuery = e.$ = ce, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ce
    }))
}(window);