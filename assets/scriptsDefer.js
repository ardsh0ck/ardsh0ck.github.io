! function(e) {
    function t(a) {
        if (n[a]) return n[a].exports;
        var i = n[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, a) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: a
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 3)
}([function(e, t, n) {
    "use strict";
    var a, i, r;
    "function" == typeof Symbol && Symbol.iterator, i = [n(2)], void 0 !== (r = "function" == typeof(a = function(e) {
        return e
    }) ? a.apply(t, i) : a) && (e.exports = r)
}, function(e, t, n) {
    "use strict";
    var a, i, r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    i = [n(0), n(10), n(11)], void 0 !== (r = "function" == typeof(a = function(e, t, n, a) {
        function i(t, n, o) {
            if (!(this instanceof i)) return new i(t, n, o);
            this.el = a, this.events = {}, this.maskset = a, this.refreshValue = !1, !0 !== o && (e.isPlainObject(t) ? n = t : (n = n || {}).alias = t, this.opts = e.extend(!0, {}, this.defaults, n), this.noMasksCache = n && n.definitions !== a, this.userOptions = n || {}, this.isRTL = this.opts.numericInput, r(this.opts.alias, n, this.opts))
        }

        function r(t, n, o) {
            var s = i.prototype.aliases[t];
            return s ? (s.alias && r(s.alias, a, o), e.extend(!0, o, s), e.extend(!0, o, n), !0) : (null === o.mask && (o.mask = t), !1)
        }

        function s(t, n) {
            function r(t, r, o) {
                var s = !1;
                if (null !== t && "" !== t || ((s = null !== o.regex) ? t = (t = o.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (s = !0, t = ".*")), 1 === t.length && !1 === o.greedy && 0 !== o.repeat && (o.placeholder = ""), o.repeat > 0 || "*" === o.repeat || "+" === o.repeat) {
                    var l = "*" === o.repeat ? 0 : "+" === o.repeat ? 1 : o.repeat;
                    t = o.groupmarker.start + t + o.groupmarker.end + o.quantifiermarker.start + l + "," + o.repeat + o.quantifiermarker.end
                }
                var c, u = s ? "regex_" + o.regex : o.numericInput ? t.split("").reverse().join("") : t;
                return i.prototype.masksCache[u] === a || !0 === n ? (c = {
                    mask: t,
                    maskToken: i.prototype.analyseMask(t, s, o),
                    validPositions: {},
                    _buffer: a,
                    buffer: a,
                    tests: {},
                    metadata: r,
                    maskLength: a
                }, !0 !== n && (i.prototype.masksCache[u] = c, c = e.extend(!0, {}, i.prototype.masksCache[u]))) : c = e.extend(!0, {}, i.prototype.masksCache[u]), c
            }
            if (e.isFunction(t.mask) && (t.mask = t.mask(t)), e.isArray(t.mask)) {
                if (t.mask.length > 1) {
                    t.keepStatic = null === t.keepStatic || t.keepStatic;
                    var o = t.groupmarker.start;
                    return e.each(t.numericInput ? t.mask.reverse() : t.mask, function(n, i) {
                        o.length > 1 && (o += t.groupmarker.end + t.alternatormarker + t.groupmarker.start), i.mask === a || e.isFunction(i.mask) ? o += i : o += i.mask
                    }), r(o += t.groupmarker.end, t.mask, t)
                }
                t.mask = t.mask.pop()
            }
            return t.mask && t.mask.mask !== a && !e.isFunction(t.mask.mask) ? r(t.mask.mask, t.mask, t) : r(t.mask, t.mask, t)
        }

        function l(r, s, c) {
            function m(e, t, n) {
                t = t || 0;
                var i, r, o, s = [],
                    l = 0,
                    u = v();
                do {
                    !0 === e && h().validPositions[l] ? (r = (o = h().validPositions[l]).match, i = o.locator.slice(), s.push(!0 === n ? o.input : !1 === n ? r.nativeDef : I(l, r))) : (r = (o = b(l, i, l - 1)).match, i = o.locator.slice(), (!1 === c.jitMasking || l < u || "number" == typeof c.jitMasking && isFinite(c.jitMasking) && c.jitMasking > l) && s.push(!1 === n ? r.nativeDef : I(l, r))), l++
                } while ((Q === a || l < Q) && (null !== r.fn || "" !== r.def) || t > l);
                return "" === s[s.length - 1] && s.pop(), h().maskLength = l + 1, s
            }

            function h() {
                return s
            }

            function g(e) {
                var t = h();
                t.buffer = a, !0 !== e && (t.validPositions = {}, t.p = 0)
            }

            function v(e, t, n) {
                var i = -1,
                    r = -1,
                    o = n || h().validPositions;
                for (var s in e === a && (e = -1), o) {
                    var l = parseInt(s);
                    o[l] && (t || !0 !== o[l].generatedInput) && (l <= e && (i = l), l >= e && (r = l))
                }
                return -1 !== i && e - i > 1 || r < e ? i : r
            }

            function y(t, n, i, r) {
                var o, s = t,
                    l = e.extend(!0, {}, h().validPositions),
                    u = !1;
                for (h().p = t, o = n - 1; o >= s; o--) h().validPositions[o] !== a && (!0 !== i && (!h().validPositions[o].match.optionality && function(e) {
                    var t = h().validPositions[e];
                    if (t !== a && null === t.match.fn) {
                        var n = h().validPositions[e - 1],
                            i = h().validPositions[e + 1];
                        return n !== a && i !== a
                    }
                    return !1
                }(o) || !1 === c.canClearPosition(h(), o, v(), r, c)) || delete h().validPositions[o]);
                for (g(!0), o = s + 1; o <= v();) {
                    for (; h().validPositions[s] !== a;) s++;
                    if (o < s && (o = s + 1), h().validPositions[o] === a && M(o)) o++;
                    else {
                        var p = b(o);
                        !1 === u && l[s] && l[s].match.def === p.match.def ? (h().validPositions[s] = e.extend(!0, {}, l[s]), h().validPositions[s].input = p.input, delete h().validPositions[o], o++) : P(s, p.match.def) ? !1 !== R(s, p.input || I(o), !0) && (delete h().validPositions[o], o++, u = !0) : M(o) || (o++, s--), s++
                    }
                }
                g(!0)
            }

            function k(e, t) {
                for (var n, i = e, r = v(), o = h().validPositions[r] || S(0)[0], s = o.alternation !== a ? o.locator[o.alternation].toString().split(",") : [], l = 0; l < i.length && (!((n = i[l]).match && (c.greedy && !0 !== n.match.optionalQuantifier || (!1 === n.match.optionality || !1 === n.match.newBlockMarker) && !0 !== n.match.optionalQuantifier) && (o.alternation === a || o.alternation !== n.alternation || n.locator[o.alternation] !== a && O(n.locator[o.alternation].toString().split(","), s))) || !0 === t && (null !== n.match.fn || /[0-9a-bA-Z]/.test(n.match.def))); l++);
                return n
            }

            function b(e, t, n) {
                return h().validPositions[e] || k(S(e, t ? t.slice() : t, n))
            }

            function x(e) {
                return h().validPositions[e] ? h().validPositions[e] : S(e)[0]
            }

            function P(e, t) {
                for (var n = !1, a = S(e), i = 0; i < a.length; i++)
                    if (a[i].match && a[i].match.def === t) {
                        n = !0;
                        break
                    }
                return n
            }

            function S(t, n, i) {
                function r(n, i, o, l) {
                    function u(o, l, p) {
                        function d(t, n) {
                            var a = 0 === e.inArray(t, n.matches);
                            return a || e.each(n.matches, function(e, i) {
                                if (!0 === i.isQuantifier && (a = d(t, n.matches[e - 1]))) return !1
                            }), a
                        }

                        function y(t, n, i) {
                            var r, o;
                            if (h().validPositions[t - 1] && i && h().tests[t])
                                for (var s = h().validPositions[t - 1].locator, l = h().tests[t][0].locator, c = 0; c < i; c++)
                                    if (s[c] !== l[c]) return s.slice(i + 1);
                            return (h().tests[t] || h().validPositions[t]) && e.each(h().tests[t] || [h().validPositions[t]], function(e, t) {
                                var s = i !== a ? i : t.alternation,
                                    l = t.locator[s] !== a ? t.locator[s].toString().indexOf(n) : -1;
                                (o === a || l < o) && -1 !== l && (r = t, o = l)
                            }), r ? r.locator.slice((i !== a ? i : r.alternation) + 1) : i !== a ? y(t, n) : a
                        }
                        if (f > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + h().mask;
                        if (f === t && o.matches === a) return m.push({
                            match: o,
                            locator: l.reverse(),
                            cd: v
                        }), !0;
                        if (o.matches !== a) {
                            if (o.isGroup && p !== o) {
                                if (o = u(n.matches[e.inArray(o, n.matches) + 1], l)) return !0
                            } else if (o.isOptional) {
                                var k = o;
                                if (o = r(o, i, l, p)) {
                                    if (!d(s = m[m.length - 1].match, k)) return !0;
                                    g = !0, f = t
                                }
                            } else if (o.isAlternator) {
                                var b, x = o,
                                    P = [],
                                    S = m.slice(),
                                    w = l.length,
                                    A = i.length > 0 ? i.shift() : -1;
                                if (-1 === A || "string" == typeof A) {
                                    var E, C = f,
                                        O = i.slice(),
                                        R = [];
                                    if ("string" == typeof A) R = A.split(",");
                                    else
                                        for (E = 0; E < x.matches.length; E++) R.push(E);
                                    for (var M = 0; M < R.length; M++) {
                                        if (E = parseInt(R[M]), m = [], i = y(f, E, w) || O.slice(), !0 !== (o = u(x.matches[E] || n.matches[E], [E].concat(l), p) || o) && o !== a && R[R.length - 1] < x.matches.length) {
                                            var _ = e.inArray(o, n.matches) + 1;
                                            n.matches.length > _ && (o = u(n.matches[_], [_].concat(l.slice(1, l.length)), p)) && (R.push(_.toString()), e.each(m, function(e, t) {
                                                t.alternation = l.length - 1
                                            }))
                                        }
                                        b = m.slice(), f = C, m = [];
                                        for (var D = 0; D < b.length; D++) {
                                            var j = b[D],
                                                N = !1;
                                            j.alternation = j.alternation || w;
                                            for (var I = 0; I < P.length; I++) {
                                                var F = P[I];
                                                if ("string" != typeof A || -1 !== e.inArray(j.locator[j.alternation].toString(), R)) {
                                                    if (U = F, (L = j).match.nativeDef === U.match.nativeDef || L.match.def === U.match.nativeDef || L.match.nativeDef === U.match.def) {
                                                        N = !0, j.alternation === F.alternation && -1 === F.locator[F.alternation].toString().indexOf(j.locator[j.alternation]) && (F.locator[F.alternation] = F.locator[F.alternation] + "," + j.locator[j.alternation], F.alternation = j.alternation), j.match.nativeDef === F.match.def && (j.locator[j.alternation] = F.locator[F.alternation], P.splice(P.indexOf(F), 1, j));
                                                        break
                                                    }
                                                    if (j.match.def === F.match.def) {
                                                        N = !1;
                                                        break
                                                    }
                                                    if (function(e, n) {
                                                            return null === e.match.fn && null !== n.match.fn && n.match.fn.test(e.match.def, h(), t, !1, c, !1)
                                                        }(j, F) || function(e, n) {
                                                            return null !== e.match.fn && null !== n.match.fn && n.match.fn.test(e.match.def.replace(/[\[\]]/g, ""), h(), t, !1, c, !1)
                                                        }(j, F)) {
                                                        j.alternation === F.alternation && -1 === j.locator[j.alternation].toString().indexOf(F.locator[F.alternation].toString().split("")[0]) && (j.na = j.na || j.locator[j.alternation].toString(), -1 === j.na.indexOf(j.locator[j.alternation].toString().split("")[0]) && (j.na = j.na + "," + j.locator[F.alternation].toString().split("")[0]), N = !0, j.locator[j.alternation] = F.locator[F.alternation].toString().split("")[0] + "," + j.locator[j.alternation], P.splice(P.indexOf(F), 0, j));
                                                        break
                                                    }
                                                }
                                            }
                                            N || P.push(j)
                                        }
                                    }
                                    "string" == typeof A && (P = e.map(P, function(t, n) {
                                        if (isFinite(n)) {
                                            var i = t.alternation,
                                                r = t.locator[i].toString().split(",");
                                            t.locator[i] = a, t.alternation = a;
                                            for (var o = 0; o < r.length; o++) - 1 !== e.inArray(r[o], R) && (t.locator[i] !== a ? (t.locator[i] += ",", t.locator[i] += r[o]) : t.locator[i] = parseInt(r[o]), t.alternation = i);
                                            if (t.locator[i] !== a) return t
                                        }
                                    })), m = S.concat(P), f = t, g = m.length > 0, o = P.length > 0, i = O.slice()
                                } else o = u(x.matches[A] || n.matches[A], [A].concat(l), p);
                                if (o) return !0
                            } else if (o.isQuantifier && p !== n.matches[e.inArray(o, n.matches) - 1])
                                for (var T = o, G = i.length > 0 ? i.shift() : 0; G < (isNaN(T.quantifier.max) ? G + 1 : T.quantifier.max) && f <= t; G++) {
                                    var B = n.matches[e.inArray(T, n.matches) - 1];
                                    if (o = u(B, [G].concat(l), B)) {
                                        if ((s = m[m.length - 1].match).optionalQuantifier = G > T.quantifier.min - 1, d(s, B)) {
                                            if (G > T.quantifier.min - 1) {
                                                g = !0, f = t;
                                                break
                                            }
                                            return !0
                                        }
                                        return !0
                                    }
                                } else if (o = r(o, i, l, p)) return !0
                        } else f++;
                        var L, U
                    }
                    for (var p = i.length > 0 ? i.shift() : 0; p < n.matches.length; p++)
                        if (!0 !== n.matches[p].isQuantifier) {
                            var d = u(n.matches[p], [p].concat(o), l);
                            if (d && f === t) return d;
                            if (f > t) break
                        }
                }

                function o(e) {
                    if (c.keepStatic && t > 0 && e.length > 1 + ("" === e[e.length - 1].match.def ? 1 : 0) && !0 !== e[0].match.optionality && !0 !== e[0].match.optionalQuantifier && null === e[0].match.fn && !/[0-9a-bA-Z]/.test(e[0].match.def)) {
                        if (h().validPositions[t - 1] === a) return [k(e)];
                        if (h().validPositions[t - 1].alternation === e[0].alternation) return [k(e)];
                        if (h().validPositions[t - 1]) return [k(e)]
                    }
                    return e
                }
                var s, l, u, p = h().maskToken,
                    f = n ? i : 0,
                    d = n ? n.slice() : [0],
                    m = [],
                    g = !1,
                    v = n ? n.join("") : "";
                if (t > -1) {
                    if (n === a) {
                        for (var y, b = t - 1;
                            (y = h().validPositions[b] || h().tests[b]) === a && b > -1;) b--;
                        y !== a && b > -1 && (l = y, u = [], e.isArray(l) || (l = [l]), l.length > 0 && (l[0].alternation === a ? 0 === (u = k(l.slice()).locator.slice()).length && (u = l[0].locator.slice()) : e.each(l, function(e, t) {
                            if ("" !== t.def)
                                if (0 === u.length) u = t.locator.slice();
                                else
                                    for (var n = 0; n < u.length; n++) t.locator[n] && -1 === u[n].toString().indexOf(t.locator[n]) && (u[n] += "," + t.locator[n])
                        })), v = (d = u).join(""), f = b)
                    }
                    if (h().tests[t] && h().tests[t][0].cd === v) return o(h().tests[t]);
                    for (var x = d.shift(); x < p.length && !(r(p[x], d, [x]) && f === t || f > t); x++);
                }
                return (0 === m.length || g) && m.push({
                    match: {
                        fn: null,
                        cardinality: 0,
                        optionality: !0,
                        casing: null,
                        def: "",
                        placeholder: ""
                    },
                    locator: [],
                    cd: v
                }), n !== a && h().tests[t] ? o(e.extend(!0, [], m)) : (h().tests[t] = e.extend(!0, [], m), o(h().tests[t]))
            }

            function w() {
                return h()._buffer === a && (h()._buffer = m(!1, 1), h().buffer === a && (h().buffer = h()._buffer.slice())), h()._buffer
            }

            function A(e) {
                return h().buffer !== a && !0 !== e || (h().buffer = m(!0, v(), !0)), h().buffer
            }

            function E(e, t, n) {
                var i, r;
                if (!0 === e) g(), e = 0, t = n.length;
                else
                    for (i = e; i < t; i++) delete h().validPositions[i];
                for (r = e, i = e; i < t; i++)
                    if (g(!0), n[i] !== c.skipOptionalPartCharacter) {
                        var o = R(r, n[i], !0, !0);
                        !1 !== o && (g(!0), r = o.caret !== a ? o.caret : o.pos + 1)
                    }
            }

            function C(t, n, a) {
                switch (c.casing || n.casing) {
                    case "upper":
                        t = t.toUpperCase();
                        break;
                    case "lower":
                        t = t.toLowerCase();
                        break;
                    case "title":
                        var r = h().validPositions[a - 1];
                        t = 0 === a || r && r.input === String.fromCharCode(i.keyCode.SPACE) ? t.toUpperCase() : t.toLowerCase();
                        break;
                    default:
                        if (e.isFunction(c.casing)) {
                            var o = Array.prototype.slice.call(arguments);
                            o.push(h().validPositions), t = c.casing.apply(this, o)
                        }
                }
                return t
            }

            function O(t, n, i) {
                for (var r, o = c.greedy ? n : n.slice(0, 1), s = !1, l = i !== a ? i.split(",") : [], u = 0; u < l.length; u++) - 1 !== (r = t.indexOf(l[u])) && t.splice(r, 1);
                for (var p = 0; p < t.length; p++)
                    if (-1 !== e.inArray(t[p], o)) {
                        s = !0;
                        break
                    }
                return s
            }

            function R(t, n, r, o, s, l) {
                function u(e) {
                    var t = J ? e.begin - e.end > 1 || e.begin - e.end == 1 : e.end - e.begin > 1 || e.end - e.begin == 1;
                    return t && 0 === e.begin && e.end === h().maskLength ? "full" : t
                }

                function p(n, i, r) {
                    var s = !1;
                    return e.each(S(n), function(l, p) {
                        for (var d = p.match, m = i ? 1 : 0, k = "", b = d.cardinality; b > m; b--) k += j(n - (b - 1));
                        if (i && (k += i), A(!0), !1 !== (s = null != d.fn ? d.fn.test(k, h(), n, r, c, u(t)) : (i === d.def || i === c.skipOptionalPartCharacter) && "" !== d.def && {
                                c: I(n, d, !0) || d.def,
                                pos: n
                            })) {
                            var x = s.c !== a ? s.c : i;
                            x = x === c.skipOptionalPartCharacter && null === d.fn ? I(n, d, !0) || d.def : x;
                            var P = n,
                                S = A();
                            if (s.remove !== a && (e.isArray(s.remove) || (s.remove = [s.remove]), e.each(s.remove.sort(function(e, t) {
                                    return t - e
                                }), function(e, t) {
                                    y(t, t + 1, !0)
                                })), s.insert !== a && (e.isArray(s.insert) || (s.insert = [s.insert]), e.each(s.insert.sort(function(e, t) {
                                    return e - t
                                }), function(e, t) {
                                    R(t.pos, t.c, !0, o)
                                })), s.refreshFromBuffer) {
                                var w = s.refreshFromBuffer;
                                if (E(!0 === w ? w : w.start, w.end, S), s.pos === a && s.c === a) return s.pos = v(), !1;
                                if ((P = s.pos !== a ? s.pos : n) !== n) return s = e.extend(s, R(P, x, !0, o)), !1
                            } else if (!0 !== s && s.pos !== a && s.pos !== n && (P = s.pos, E(n, P, A().slice()), P !== n)) return s = e.extend(s, R(P, x, !0)), !1;
                            return (!0 === s || s.pos !== a || s.c !== a) && (l > 0 && g(!0), f(P, e.extend({}, p, {
                                input: C(x, d, P)
                            }), o, u(t)) || (s = !1), !1)
                        }
                    }), s
                }

                function f(t, n, i, r) {
                    if (r || c.insertMode && h().validPositions[t] !== a && i === a) {
                        var o, s = e.extend(!0, {}, h().validPositions),
                            l = v(a, !0);
                        for (o = t; o <= l; o++) delete h().validPositions[o];
                        h().validPositions[t] = e.extend(!0, {}, n);
                        var u, p = !0,
                            f = h().validPositions,
                            m = !1,
                            y = h().maskLength;
                        for (o = u = t; o <= l; o++) {
                            var k = s[o];
                            if (k !== a)
                                for (var b = u; b < h().maskLength && (null === k.match.fn && f[o] && (!0 === f[o].match.optionalQuantifier || !0 === f[o].match.optionality) || null != k.match.fn);) {
                                    if (b++, !1 === m && s[b] && s[b].match.def === k.match.def) h().validPositions[b] = e.extend(!0, {}, s[b]), h().validPositions[b].input = k.input, d(b), u = b, p = !0;
                                    else if (P(b, k.match.def)) {
                                        var x = R(b, k.input, !0, !0);
                                        p = !1 !== x, u = x.caret || x.insert ? v() : b, m = !0
                                    } else if (!(p = !0 === k.generatedInput) && b >= h().maskLength - 1) break;
                                    if (h().maskLength < y && (h().maskLength = y), p) break
                                }
                            if (!p) break
                        }
                        if (!p) return h().validPositions = e.extend(!0, {}, s), g(!0), !1
                    } else h().validPositions[t] = e.extend(!0, {}, n);
                    return g(!0), !0
                }

                function d(t) {
                    for (var n = t - 1; n > -1 && !h().validPositions[n]; n--);
                    var i, r;
                    for (n++; n < t; n++) h().validPositions[n] === a && (!1 === c.jitMasking || c.jitMasking > n) && ("" === (r = S(n, b(n - 1).locator, n - 1).slice())[r.length - 1].match.def && r.pop(), (i = k(r)) && (i.match.def === c.radixPointDefinitionSymbol || !M(n, !0) || e.inArray(c.radixPoint, A()) < n && i.match.fn && i.match.fn.test(I(n), h(), n, !1, c)) && !1 !== (x = p(n, I(n, i.match, !0) || (null == i.match.fn ? i.match.def : "" !== I(n) ? I(n) : A()[n]), !0)) && (h().validPositions[x.pos || n].generatedInput = !0))
                }
                r = !0 === r;
                var m = t;
                t.begin !== a && (m = J && !u(t) ? t.end : t.begin);
                var x = !0,
                    w = e.extend(!0, {}, h().validPositions);
                if (e.isFunction(c.preValidation) && !r && !0 !== o && !0 !== l && (x = c.preValidation(A(), m, n, u(t), c)), !0 === x) {
                    if (d(m), u(t) && (V(a, i.keyCode.DELETE, t, !0, !0), m = h().p), m < h().maskLength && (Q === a || m < Q) && (x = p(m, n, r), (!r || !0 === o) && !1 === x && !0 !== l)) {
                        var D = h().validPositions[m];
                        if (!D || null !== D.match.fn || D.match.def !== n && n !== c.skipOptionalPartCharacter) {
                            if ((c.insertMode || h().validPositions[_(m)] === a) && !M(m, !0))
                                for (var N = m + 1, F = _(m); N <= F; N++)
                                    if (!1 !== (x = p(N, n, r))) {
                                        ! function(t, n) {
                                            var i = h().validPositions[n];
                                            if (i)
                                                for (var r = i.locator, o = r.length, s = t; s < n; s++)
                                                    if (h().validPositions[s] === a && !M(s, !0)) {
                                                        var l = S(s).slice(),
                                                            c = k(l, !0),
                                                            u = -1;
                                                        "" === l[l.length - 1].match.def && l.pop(), e.each(l, function(e, t) {
                                                            for (var n = 0; n < o; n++) {
                                                                if (t.locator[n] === a || !O(t.locator[n].toString().split(","), r[n].toString().split(","), t.na)) {
                                                                    var i = r[n],
                                                                        s = c.locator[n],
                                                                        l = t.locator[n];
                                                                    i - s > Math.abs(i - l) && (c = t);
                                                                    break
                                                                }
                                                                u < n && (u = n, c = t)
                                                            }
                                                        }), (c = e.extend({}, c, {
                                                            input: I(s, c.match, !0) || c.match.def
                                                        })).generatedInput = !0, f(s, c, !0), h().validPositions[n] = a, p(n, i.input, !0)
                                                    }
                                        }(m, x.pos !== a ? x.pos : N), m = N;
                                        break
                                    }
                        } else x = {
                            caret: _(m)
                        }
                    }!1 === x && c.keepStatic && !r && !0 !== s && (x = function(t, n, i) {
                        var r, s, l, u, p, f, d, m, y = e.extend(!0, {}, h().validPositions),
                            k = !1,
                            b = v();
                        for (u = h().validPositions[b]; b >= 0; b--)
                            if ((l = h().validPositions[b]) && l.alternation !== a) {
                                if (r = b, s = h().validPositions[r].alternation, u.locator[l.alternation] !== l.locator[l.alternation]) break;
                                u = l
                            }
                        if (s !== a) {
                            m = parseInt(r);
                            var x = u.locator[u.alternation || s] !== a ? u.locator[u.alternation || s] : d[0];
                            x.length > 0 && (x = x.split(",")[0]);
                            var P = h().validPositions[m],
                                w = h().validPositions[m - 1];
                            e.each(S(m, w ? w.locator : a, m - 1), function(r, l) {
                                d = l.locator[s] ? l.locator[s].toString().split(",") : [];
                                for (var u = 0; u < d.length; u++) {
                                    var b = [],
                                        S = 0,
                                        w = 0,
                                        A = !1;
                                    if (x < d[u] && (l.na === a || -1 === e.inArray(d[u], l.na.split(",")) || -1 === e.inArray(x.toString(), d))) {
                                        h().validPositions[m] = e.extend(!0, {}, l);
                                        var E = h().validPositions[m].locator;
                                        for (h().validPositions[m].locator[s] = parseInt(d[u]), null == l.match.fn ? (P.input !== l.match.def && (A = !0, !0 !== P.generatedInput && b.push(P.input)), w++, h().validPositions[m].generatedInput = !/[0-9a-bA-Z]/.test(l.match.def), h().validPositions[m].input = l.match.def) : h().validPositions[m].input = P.input, p = m + 1; p < v(a, !0) + 1; p++)(f = h().validPositions[p]) && !0 !== f.generatedInput && /[0-9a-bA-Z]/.test(f.input) ? b.push(f.input) : p < t && S++, delete h().validPositions[p];
                                        for (A && b[0] === l.match.def && b.shift(), g(!0), k = !0; b.length > 0;) {
                                            var C = b.shift();
                                            if (C !== c.skipOptionalPartCharacter && !(k = R(v(a, !0) + 1, C, !1, o, !0))) break
                                        }
                                        if (k) {
                                            h().validPositions[m].locator = E;
                                            var O = v(t) + 1;
                                            for (p = m + 1; p < v() + 1; p++)((f = h().validPositions[p]) === a || null == f.match.fn) && p < t + (w - S) && w++;
                                            k = R((t += w - S) > O ? O : t, n, i, o, !0)
                                        }
                                        if (k) return !1;
                                        g(), h().validPositions = e.extend(!0, {}, y)
                                    }
                                }
                            })
                        }
                        return k
                    }(m, n, r)), !0 === x && (x = {
                        pos: m
                    })
                }
                if (e.isFunction(c.postValidation) && !1 !== x && !r && !0 !== o && !0 !== l) {
                    var T = c.postValidation(A(!0), x, c);
                    if (T.refreshFromBuffer && T.buffer) {
                        var G = T.refreshFromBuffer;
                        E(!0 === G ? G : G.start, G.end, T.buffer)
                    }
                    x = !0 === T ? x : T
                }
                return x && x.pos === a && (x.pos = m), !1 !== x && !0 !== l || (g(!0), h().validPositions = e.extend(!0, {}, w)), x
            }

            function M(e, t) {
                var n = b(e).match;
                if ("" === n.def && (n = x(e).match), null != n.fn) return n.fn;
                if (!0 !== t && e > -1) {
                    var a = S(e);
                    return a.length > 1 + ("" === a[a.length - 1].match.def ? 1 : 0)
                }
                return !1
            }

            function _(e, t) {
                var n = h().maskLength;
                if (e >= n) return n;
                var a = e;
                for (S(n + 1).length > 1 && (m(!0, n + 1, !0), n = h().maskLength); ++a < n && (!0 === t && (!0 !== x(a).match.newBlockMarker || !M(a)) || !0 !== t && !M(a)););
                return a
            }

            function D(e, t) {
                var n, a = e;
                if (a <= 0) return 0;
                for (; --a > 0 && (!0 === t && !0 !== x(a).match.newBlockMarker || !0 !== t && !M(a) && ((n = S(a)).length < 2 || 2 === n.length && "" === n[1].match.def)););
                return a
            }

            function j(e) {
                return h().validPositions[e] === a ? I(e) : h().validPositions[e].input
            }

            function N(t, n, i, r, o) {
                if (r && e.isFunction(c.onBeforeWrite)) {
                    var s = c.onBeforeWrite.call(Y, r, n, i, c);
                    if (s) {
                        if (s.refreshFromBuffer) {
                            var l = s.refreshFromBuffer;
                            E(!0 === l ? l : l.start, l.end, s.buffer || n), n = A(!0)
                        }
                        i !== a && (i = s.caret !== a ? s.caret : i)
                    }
                }
                t !== a && (t.inputmask._valueSet(n.join("")), i === a || r !== a && "blur" === r.type ? H(t, i, 0 === n.length) : d && r && "input" === r.type ? setTimeout(function() {
                    G(t, i)
                }, 0) : G(t, i), !0 === o && (ee = !0, e(t).trigger("input")))
            }

            function I(t, n, i) {
                if ((n = n || x(t).match).placeholder !== a || !0 === i) return e.isFunction(n.placeholder) ? n.placeholder(c) : n.placeholder;
                if (null === n.fn) {
                    if (t > -1 && h().validPositions[t] === a) {
                        var r, o = S(t),
                            s = [];
                        if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0))
                            for (var l = 0; l < o.length; l++)
                                if (!0 !== o[l].match.optionality && !0 !== o[l].match.optionalQuantifier && (null === o[l].match.fn || r === a || !1 !== o[l].match.fn.test(r.match.def, h(), t, !0, c)) && (s.push(o[l]), null === o[l].match.fn && (r = o[l]), s.length > 1 && /[0-9a-bA-Z]/.test(s[0].match.def))) return c.placeholder.charAt(t % c.placeholder.length)
                    }
                    return n.def
                }
                return c.placeholder.charAt(t % c.placeholder.length)
            }

            function F(t, r, o, s, l) {
                var u = s.slice(),
                    p = "",
                    f = -1,
                    d = a;
                if (g(), o || !0 === c.autoUnmask) f = _(f);
                else {
                    var m = w().slice(0, _(-1)).join(""),
                        y = u.join("").match(new RegExp("^" + i.escapeRegex(m), "g"));
                    y && y.length > 0 && (u.splice(0, y.length * m.length), f = _(f))
                }
                if (-1 === f ? (h().p = _(f), f = 0) : h().p = f, e.each(u, function(n, i) {
                        if (i !== a)
                            if (h().validPositions[n] === a && u[n] === I(n) && M(n, !0) && !1 === R(n, u[n], !0, a, a, !0)) h().p++;
                            else {
                                var r = new e.Event("_checkval");
                                r.which = i.charCodeAt(0), p += i;
                                var s = v(a, !0),
                                    l = h().validPositions[s],
                                    m = b(s + 1, l ? l.locator.slice() : a, s);
                                if (! function(e, t) {
                                        return -1 !== w().slice(e, _(e)).join("").indexOf(t) && !M(e) && x(e).match.nativeDef === t.charAt(t.length - 1)
                                    }(f, p) || o || c.autoUnmask) {
                                    var y = o ? n : null == m.match.fn && m.match.optionality && s + 1 < h().p ? s + 1 : h().p;
                                    d = ie.keypressEvent.call(t, r, !0, !1, o, y), f = y + 1, p = ""
                                } else d = ie.keypressEvent.call(t, r, !0, !1, !0, s + 1);
                                if (!1 !== d && !o && e.isFunction(c.onBeforeWrite)) {
                                    var k = d;
                                    if (d = c.onBeforeWrite.call(Y, r, A(), d.forwardPosition, c), (d = e.extend(k, d)) && d.refreshFromBuffer) {
                                        var P = d.refreshFromBuffer;
                                        E(!0 === P ? P : P.start, P.end, d.buffer), g(!0), d.caret && (h().p = d.caret, d.forwardPosition = d.caret)
                                    }
                                }
                            }
                    }), r) {
                    var k = a;
                    n.activeElement === t && d && (k = c.numericInput ? D(d.forwardPosition) : d.forwardPosition), N(t, A(), k, l || new e.Event("checkval"), l && "input" === l.type)
                }
            }

            function T(t) {
                if (t) {
                    if (t.inputmask === a) return t.value;
                    t.inputmask && t.inputmask.refreshValue && ie.setValueEvent.call(t)
                }
                var n = [],
                    i = h().validPositions;
                for (var r in i) i[r].match && null != i[r].match.fn && n.push(i[r].input);
                var o = 0 === n.length ? "" : (J ? n.reverse() : n).join("");
                if (e.isFunction(c.onUnMask)) {
                    var s = (J ? A().slice().reverse() : A()).join("");
                    o = c.onUnMask.call(Y, s, o, c)
                }
                return o
            }

            function G(e, i, r, o) {
                function s(e) {
                    return !0 === o || !J || "number" != typeof e || c.greedy && "" === c.placeholder || (e = A().join("").length - e), e
                }
                var l;
                if (i === a) return e.setSelectionRange ? (i = e.selectionStart, r = e.selectionEnd) : t.getSelection ? (l = t.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && l.commonAncestorContainer !== e || (i = l.startOffset, r = l.endOffset) : n.selection && n.selection.createRange && (r = (i = 0 - (l = n.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + l.text.length), {
                    begin: s(i),
                    end: s(r)
                };
                if (i.begin !== a && (r = i.end, i = i.begin), "number" == typeof i) {
                    i = s(i), r = "number" == typeof(r = s(r)) ? r : i;
                    var p = parseInt(((e.ownerDocument.defaultView || t).getComputedStyle ? (e.ownerDocument.defaultView || t).getComputedStyle(e, null) : e.currentStyle).fontSize) * r;
                    if (e.scrollLeft = p > e.scrollWidth ? p : 0, u || !1 !== c.insertMode || i !== r || r++, e.setSelectionRange) e.selectionStart = i, e.selectionEnd = r;
                    else if (t.getSelection) {
                        if (l = n.createRange(), e.firstChild === a || null === e.firstChild) {
                            var f = n.createTextNode("");
                            e.appendChild(f)
                        }
                        l.setStart(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), l.setEnd(e.firstChild, r < e.inputmask._valueGet().length ? r : e.inputmask._valueGet().length), l.collapse(!0);
                        var d = t.getSelection();
                        d.removeAllRanges(), d.addRange(l)
                    } else e.createTextRange && ((l = e.createTextRange()).collapse(!0), l.moveEnd("character", r), l.moveStart("character", i), l.select());
                    H(e, {
                        begin: i,
                        end: r
                    })
                }
            }

            function B(t) {
                var n, i, r = A(),
                    o = r.length,
                    s = v(),
                    l = {},
                    c = h().validPositions[s],
                    u = c !== a ? c.locator.slice() : a;
                for (n = s + 1; n < r.length; n++) u = (i = b(n, u, n - 1)).locator.slice(), l[n] = e.extend(!0, {}, i);
                var p = c && c.alternation !== a ? c.locator[c.alternation] : a;
                for (n = o - 1; n > s && ((i = l[n]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || p && (p !== l[n].locator[c.alternation] && null != i.match.fn || null === i.match.fn && i.locator[c.alternation] && O(i.locator[c.alternation].toString().split(","), p.toString().split(",")) && "" !== S(n)[0].def)) && r[n] === I(n, i.match); n--) o--;
                return t ? {
                    l: o,
                    def: l[o] ? l[o].match : a
                } : o
            }

            function L(e) {
                for (var t, n = B(), i = e.length, r = h().validPositions[v()]; n < i && !M(n, !0) && (t = r !== a ? b(n, r.locator.slice(""), r) : x(n)) && !0 !== t.match.optionality && (!0 !== t.match.optionalQuantifier && !0 !== t.match.newBlockMarker || n + 1 === i && "" === (r !== a ? b(n + 1, r.locator.slice(""), r) : x(n + 1)).match.def);) n++;
                for (;
                    (t = h().validPositions[n - 1]) && t && t.match.optionality && t.input === c.skipOptionalPartCharacter;) n--;
                return e.splice(n), e
            }

            function U(t) {
                if (e.isFunction(c.isComplete)) return c.isComplete(t, c);
                if ("*" === c.repeat) return a;
                var n = !1,
                    i = B(!0),
                    r = D(i.l);
                if (i.def === a || i.def.newBlockMarker || i.def.optionality || i.def.optionalQuantifier) {
                    n = !0;
                    for (var o = 0; o <= r; o++) {
                        var s = b(o).match;
                        if (null !== s.fn && h().validPositions[o] === a && !0 !== s.optionality && !0 !== s.optionalQuantifier || null === s.fn && t[o] !== I(o, s)) {
                            n = !1;
                            break
                        }
                    }
                }
                return n
            }

            function V(t, n, r, o, s) {
                if ((c.numericInput || J) && (n === i.keyCode.BACKSPACE ? n = i.keyCode.DELETE : n === i.keyCode.DELETE && (n = i.keyCode.BACKSPACE), J)) {
                    var l = r.end;
                    r.end = r.begin, r.begin = l
                }
                n === i.keyCode.BACKSPACE && (r.end - r.begin < 1 || !1 === c.insertMode) ? (r.begin = D(r.begin), h().validPositions[r.begin] !== a && h().validPositions[r.begin].input === c.groupSeparator && r.begin--) : n === i.keyCode.DELETE && r.begin === r.end && (r.end = M(r.end, !0) && h().validPositions[r.end] && h().validPositions[r.end].input !== c.radixPoint ? r.end + 1 : _(r.end) + 1, h().validPositions[r.begin] !== a && h().validPositions[r.begin].input === c.groupSeparator && r.end++), y(r.begin, r.end, !1, o), !0 !== o && function() {
                    if (c.keepStatic) {
                        for (var n = [], i = v(-1, !0), r = e.extend(!0, {}, h().validPositions), o = h().validPositions[i]; i >= 0; i--) {
                            var s = h().validPositions[i];
                            if (s) {
                                if (!0 !== s.generatedInput && /[0-9a-bA-Z]/.test(s.input) && n.push(s.input), delete h().validPositions[i], s.alternation !== a && s.locator[s.alternation] !== o.locator[s.alternation]) break;
                                o = s
                            }
                        }
                        if (i > -1)
                            for (h().p = _(v(-1, !0)); n.length > 0;) {
                                var l = new e.Event("keypress");
                                l.which = n.pop().charCodeAt(0), ie.keypressEvent.call(t, l, !0, !1, !1, h().p)
                            } else h().validPositions = e.extend(!0, {}, r)
                    }
                }();
                var u = v(r.begin, !0);
                if (u < r.begin) h().p = _(u);
                else if (!0 !== o && (h().p = r.begin, !0 !== s))
                    for (; h().p < u && h().validPositions[h().p] === a;) h().p++
            }

            function K(a) {
                var i = (a.ownerDocument.defaultView || t).getComputedStyle(a, null),
                    r = n.createElement("div");
                r.style.width = i.width, r.style.textAlign = i.textAlign, ($ = n.createElement("div")).className = "im-colormask", a.parentNode.insertBefore($, a), a.parentNode.removeChild(a), $.appendChild(r), $.appendChild(a), a.style.left = r.offsetLeft + "px", e(a).on("click", function(e) {
                    return G(a, function(e) {
                        var t, r = n.createElement("span");
                        for (var o in i) isNaN(o) && -1 !== o.indexOf("font") && (r.style[o] = i[o]);
                        r.style.textTransform = i.textTransform, r.style.letterSpacing = i.letterSpacing, r.style.position = "absolute", r.style.height = "auto", r.style.width = "auto", r.style.visibility = "hidden", r.style.whiteSpace = "nowrap", n.body.appendChild(r);
                        var s, l = a.inputmask._valueGet(),
                            c = 0;
                        for (t = 0, s = l.length; t <= s; t++) {
                            if (r.innerHTML += l.charAt(t) || "_", r.offsetWidth >= e) {
                                var u = e - c,
                                    p = r.offsetWidth - e;
                                r.innerHTML = l.charAt(t), t = (u -= r.offsetWidth / 3) < p ? t - 1 : t;
                                break
                            }
                            c = r.offsetWidth
                        }
                        return n.body.removeChild(r), t
                    }(e.clientX)), ie.clickEvent.call(a, [e])
                }), e(a).on("keydown", function(e) {
                    e.shiftKey || !1 === c.insertMode || setTimeout(function() {
                        H(a)
                    }, 0)
                })
            }

            function H(e, t, i) {
                function r() {
                    f || null !== s.fn && l.input !== a ? f && (null !== s.fn && l.input !== a || "" === s.def) && (f = !1, p += "</span>") : (f = !0, p += "<span class='im-static'>")
                }

                function o(a) {
                    !0 !== a && d !== t.begin || n.activeElement !== e || (p += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>")
                }
                var s, l, u, p = "",
                    f = !1,
                    d = 0;
                if ($ !== a) {
                    var m = A();
                    if (t === a ? t = G(e) : t.begin === a && (t = {
                            begin: t,
                            end: t
                        }), !0 !== i) {
                        var g = v();
                        do {
                            o(), h().validPositions[d] ? (l = h().validPositions[d], s = l.match, u = l.locator.slice(), r(), p += m[d]) : (l = b(d, u, d - 1), s = l.match, u = l.locator.slice(), (!1 === c.jitMasking || d < g || "number" == typeof c.jitMasking && isFinite(c.jitMasking) && c.jitMasking > d) && (r(), p += I(d, s))), d++
                        } while ((Q === a || d < Q) && (null !== s.fn || "" !== s.def) || g > d || f); - 1 === p.indexOf("im-caret") && o(!0), f && r()
                    }
                    var y = $.getElementsByTagName("div")[0];
                    y.innerHTML = p, e.inputmask.positionColorMask(e, y)
                }
            }
            s = s || this.maskset, c = c || this.opts;
            var z, q, Q, $, W, Y = this,
                Z = this.el,
                J = this.isRTL,
                X = !1,
                ee = !1,
                te = !1,
                ne = !1,
                ae = {
                    on: function(t, n, r) {
                        var o = function(t) {
                            if (this.inputmask === a && "FORM" !== this.nodeName) {
                                var n = e.data(this, "_inputmask_opts");
                                n ? new i(n).mask(this) : ae.off(this)
                            } else {
                                if ("setvalue" === t.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === c.tabThrough && t.keyCode === i.keyCode.TAB))) {
                                    switch (t.type) {
                                        case "input":
                                            if (!0 === ee) return ee = !1, t.preventDefault();
                                            break;
                                        case "keydown":
                                            X = !1, ee = !1;
                                            break;
                                        case "keypress":
                                            if (!0 === X) return t.preventDefault();
                                            X = !0;
                                            break;
                                        case "click":
                                            if (p || f) {
                                                var o = this,
                                                    s = arguments;
                                                return setTimeout(function() {
                                                    r.apply(o, s)
                                                }, 0), !1
                                            }
                                    }
                                    var l = r.apply(this, arguments);
                                    return !1 === l && (t.preventDefault(), t.stopPropagation()), l
                                }
                                t.preventDefault()
                            }
                        };
                        t.inputmask.events[n] = t.inputmask.events[n] || [], t.inputmask.events[n].push(o), -1 !== e.inArray(n, ["submit", "reset"]) ? null !== t.form && e(t.form).on(n, o) : e(t).on(n, o)
                    },
                    off: function(t, n) {
                        var a;
                        t.inputmask && t.inputmask.events && (n ? (a = [])[n] = t.inputmask.events[n] : a = t.inputmask.events, e.each(a, function(n, a) {
                            for (; a.length > 0;) {
                                var i = a.pop(); - 1 !== e.inArray(n, ["submit", "reset"]) ? null !== t.form && e(t.form).off(n, i) : e(t).off(n, i)
                            }
                            delete t.inputmask.events[n]
                        }))
                    }
                },
                ie = {
                    keydownEvent: function(t) {
                        var a, r, o = this,
                            s = e(o),
                            l = t.keyCode,
                            u = G(o);
                        if (l === i.keyCode.BACKSPACE || l === i.keyCode.DELETE || f && l === i.keyCode.BACKSPACE_SAFARI || t.ctrlKey && l === i.keyCode.X && (a = n.createElement("input"), (r = "oncut" in a) || (a.setAttribute("oncut", "return;"), r = "function" == typeof a.oncut), a = null, !r)) t.preventDefault(), V(o, l, u), N(o, A(!0), h().p, t, o.inputmask._valueGet() !== A().join("")), o.inputmask._valueGet() === w().join("") ? s.trigger("cleared") : !0 === U(A()) && s.trigger("complete");
                        else if (l === i.keyCode.END || l === i.keyCode.PAGE_DOWN) {
                            t.preventDefault();
                            var p = _(v());
                            c.insertMode || p !== h().maskLength || t.shiftKey || p--, G(o, t.shiftKey ? u.begin : p, p, !0)
                        } else l === i.keyCode.HOME && !t.shiftKey || l === i.keyCode.PAGE_UP ? (t.preventDefault(), G(o, 0, t.shiftKey ? u.begin : 0, !0)) : (c.undoOnEscape && l === i.keyCode.ESCAPE || 90 === l && t.ctrlKey) && !0 !== t.altKey ? (F(o, !0, !1, z.split("")), s.trigger("click")) : l !== i.keyCode.INSERT || t.shiftKey || t.ctrlKey ? !0 === c.tabThrough && l === i.keyCode.TAB ? (!0 === t.shiftKey ? (null === x(u.begin).match.fn && (u.begin = _(u.begin)), u.end = D(u.begin, !0), u.begin = D(u.end, !0)) : (u.begin = _(u.begin, !0), u.end = _(u.begin, !0), u.end < h().maskLength && u.end--), u.begin < h().maskLength && (t.preventDefault(), G(o, u.begin, u.end))) : t.shiftKey || !1 === c.insertMode && (l === i.keyCode.RIGHT ? setTimeout(function() {
                            var e = G(o);
                            G(o, e.begin)
                        }, 0) : l === i.keyCode.LEFT && setTimeout(function() {
                            var e = G(o);
                            G(o, J ? e.begin + 1 : e.begin - 1)
                        }, 0)) : (c.insertMode = !c.insertMode, G(o, c.insertMode || u.begin !== h().maskLength ? u.begin : u.begin - 1));
                        c.onKeyDown.call(this, t, A(), G(o).begin, c), te = -1 !== e.inArray(l, c.ignorables)
                    },
                    keypressEvent: function(t, n, r, o, s) {
                        var l = this,
                            u = e(l),
                            p = t.which || t.charCode || t.keyCode;
                        if (!(!0 === n || t.ctrlKey && t.altKey) && (t.ctrlKey || t.metaKey || te)) return p === i.keyCode.ENTER && z !== A().join("") && (z = A().join(""), setTimeout(function() {
                            u.trigger("change")
                        }, 0)), !0;
                        if (p) {
                            46 === p && !1 === t.shiftKey && "" !== c.radixPoint && (p = c.radixPoint.charCodeAt(0));
                            var f, d = n ? {
                                    begin: s,
                                    end: s
                                } : G(l),
                                m = String.fromCharCode(p);
                            h().writeOutBuffer = !0;
                            var v = R(d, m, o);
                            if (!1 !== v && (g(!0), f = v.caret !== a ? v.caret : n ? v.pos + 1 : _(v.pos), h().p = f), !1 !== r && (setTimeout(function() {
                                    c.onKeyValidation.call(l, p, v, c)
                                }, 0), h().writeOutBuffer && !1 !== v)) {
                                var y = A();
                                N(l, y, c.numericInput && v.caret === a ? D(f) : f, t, !0 !== n), !0 !== n && setTimeout(function() {
                                    !0 === U(y) && u.trigger("complete")
                                }, 0)
                            }
                            if (t.preventDefault(), n) return !1 !== v && (v.forwardPosition = f), v
                        }
                    },
                    pasteEvent: function(n) {
                        var a, i = n.originalEvent || n,
                            r = e(this),
                            o = this.inputmask._valueGet(!0),
                            s = G(this);
                        J && (a = s.end, s.end = s.begin, s.begin = a);
                        var l = o.substr(0, s.begin),
                            u = o.substr(s.end, o.length);
                        if (l === (J ? w().reverse() : w()).slice(0, s.begin).join("") && (l = ""), u === (J ? w().reverse() : w()).slice(s.end).join("") && (u = ""), J && (a = l, l = u, u = a), t.clipboardData && t.clipboardData.getData) o = l + t.clipboardData.getData("Text") + u;
                        else {
                            if (!i.clipboardData || !i.clipboardData.getData) return !0;
                            o = l + i.clipboardData.getData("text/plain") + u
                        }
                        var p = o;
                        if (e.isFunction(c.onBeforePaste)) {
                            if (!1 === (p = c.onBeforePaste.call(Y, o, c))) return n.preventDefault();
                            p || (p = o)
                        }
                        return F(this, !1, !1, J ? p.split("").reverse() : p.toString().split("")), N(this, A(), _(v()), n, z !== A().join("")), !0 === U(A()) && r.trigger("complete"), n.preventDefault()
                    },
                    inputFallBackEvent: function(t) {
                        var n = this,
                            a = n.inputmask._valueGet();
                        if (A().join("") !== a) {
                            var r = G(n);
                            if (!1 === function(t, n, a) {
                                    if ("." === n.charAt(a.begin - 1) && "" !== c.radixPoint && ((n = n.split(""))[a.begin - 1] = c.radixPoint.charAt(0), n = n.join("")), n.charAt(a.begin - 1) === c.radixPoint && n.length > A().length) {
                                        var i = new e.Event("keypress");
                                        return i.which = c.radixPoint.charCodeAt(0), ie.keypressEvent.call(t, i, !0, !0, !1, a.begin - 1), !1
                                    }
                                }(n, a, r)) return !1;
                            if (a = a.replace(new RegExp("(" + i.escapeRegex(w().join("")) + ")*"), ""), !1 === function(t, n, a) {
                                    if (p) {
                                        var i = n.replace(A().join(""), "");
                                        if (1 === i.length) {
                                            var r = new e.Event("keypress");
                                            return r.which = i.charCodeAt(0), ie.keypressEvent.call(t, r, !0, !0, !1, h().validPositions[a.begin - 1] ? a.begin : a.begin - 1), !1
                                        }
                                    }
                                }(n, a, r)) return !1;
                            r.begin > a.length && (G(n, a.length), r = G(n));
                            var o = A().join(""),
                                s = a.substr(0, r.begin),
                                l = a.substr(r.begin),
                                u = o.substr(0, r.begin),
                                f = o.substr(r.begin),
                                d = r,
                                m = "",
                                g = !1;
                            if (s !== u) {
                                d.begin = 0;
                                for (var v = (g = s.length >= u.length) ? s.length : u.length, y = 0; s.charAt(y) === u.charAt(y) && y < v; y++) d.begin++;
                                g && (m += s.slice(d.begin, d.end))
                            }
                            l !== f && (l.length > f.length ? g && (d.end = d.begin) : l.length < f.length ? d.end += f.length - l.length : l.charAt(0) !== f.charAt(0) && d.end++), N(n, A(), d), m.length > 0 ? e.each(m.split(""), function(t, a) {
                                var i = new e.Event("keypress");
                                i.which = a.charCodeAt(0), te = !1, ie.keypressEvent.call(n, i)
                            }) : (d.begin === d.end - 1 && G(n, D(d.begin + 1), d.end), t.keyCode = i.keyCode.DELETE, ie.keydownEvent.call(n, t)), t.preventDefault()
                        }
                    },
                    setValueEvent: function(t) {
                        this.inputmask.refreshValue = !1;
                        var n = this.inputmask._valueGet(!0);
                        e.isFunction(c.onBeforeMask) && (n = c.onBeforeMask.call(Y, n, c) || n), n = n.split(""), F(this, !0, !1, J ? n.reverse() : n), z = A().join(""), (c.clearMaskOnLostFocus || c.clearIncomplete) && this.inputmask._valueGet() === w().join("") && this.inputmask._valueSet("")
                    },
                    focusEvent: function(e) {
                        var t = this.inputmask._valueGet();
                        c.showMaskOnFocus && (!c.showMaskOnHover || c.showMaskOnHover && "" === t) && (this.inputmask._valueGet() !== A().join("") ? N(this, A(), _(v())) : !1 === ne && G(this, _(v()))), !0 === c.positionCaretOnTab && !1 === ne && "" !== t && (N(this, A(), G(this)), ie.clickEvent.apply(this, [e, !0])), z = A().join("")
                    },
                    mouseleaveEvent: function(e) {
                        if (ne = !1, c.clearMaskOnLostFocus && n.activeElement !== this) {
                            var t = A().slice(),
                                a = this.inputmask._valueGet();
                            a !== this.getAttribute("placeholder") && "" !== a && (-1 === v() && a === w().join("") ? t = [] : L(t), N(this, t))
                        }
                    },
                    clickEvent: function(t, i) {
                        var r = this;
                        setTimeout(function() {
                            if (n.activeElement === r) {
                                var t = G(r);
                                if (i && (J ? t.end = t.begin : t.begin = t.end), t.begin === t.end) switch (c.positionCaretOnClick) {
                                    case "none":
                                        break;
                                    case "radixFocus":
                                        if (function(t) {
                                                if ("" !== c.radixPoint) {
                                                    var n = h().validPositions;
                                                    if (n[t] === a || n[t].input === I(t)) {
                                                        if (t < _(-1)) return !0;
                                                        var i = e.inArray(c.radixPoint, A());
                                                        if (-1 !== i) {
                                                            for (var r in n)
                                                                if (i < r && n[r].input !== I(r)) return !1;
                                                            return !0
                                                        }
                                                    }
                                                }
                                                return !1
                                            }(t.begin)) {
                                            var o = A().join("").indexOf(c.radixPoint);
                                            G(r, c.numericInput ? _(o) : o);
                                            break
                                        }
                                    default:
                                        var s = t.begin,
                                            l = v(s, !0),
                                            u = _(l);
                                        if (s < u) G(r, M(s, !0) || M(s - 1, !0) ? s : _(s));
                                        else {
                                            var p = h().validPositions[l],
                                                f = b(u, p ? p.match.locator : a, p),
                                                d = I(u, f.match);
                                            if ("" !== d && A()[u] !== d && !0 !== f.match.optionalQuantifier && !0 !== f.match.newBlockMarker || !M(u, !0) && f.match.def === d) {
                                                var m = _(u);
                                                (s >= m || s === u) && (u = m)
                                            }
                                            G(r, u)
                                        }
                                }
                            }
                        }, 0)
                    },
                    dblclickEvent: function(e) {
                        var t = this;
                        setTimeout(function() {
                            G(t, 0, _(v()))
                        }, 0)
                    },
                    cutEvent: function(a) {
                        var r = e(this),
                            o = G(this),
                            s = a.originalEvent || a,
                            l = t.clipboardData || s.clipboardData,
                            c = J ? A().slice(o.end, o.begin) : A().slice(o.begin, o.end);
                        l.setData("text", J ? c.reverse().join("") : c.join("")), n.execCommand && n.execCommand("copy"), V(this, i.keyCode.DELETE, o), N(this, A(), h().p, a, z !== A().join("")), this.inputmask._valueGet() === w().join("") && r.trigger("cleared")
                    },
                    blurEvent: function(t) {
                        var n = e(this);
                        if (this.inputmask) {
                            var i = this.inputmask._valueGet(),
                                r = A().slice();
                            "" !== i && (c.clearMaskOnLostFocus && (-1 === v() && i === w().join("") ? r = [] : L(r)), !1 === U(r) && (setTimeout(function() {
                                n.trigger("incomplete")
                            }, 0), c.clearIncomplete && (g(), r = c.clearMaskOnLostFocus ? [] : w().slice())), N(this, r, a, t)), z !== A().join("") && (z = r.join(""), n.trigger("change"))
                        }
                    },
                    mouseenterEvent: function(e) {
                        ne = !0, n.activeElement !== this && c.showMaskOnHover && this.inputmask._valueGet() !== A().join("") && N(this, A())
                    },
                    submitEvent: function(e) {
                        z !== A().join("") && q.trigger("change"), c.clearMaskOnLostFocus && -1 === v() && Z.inputmask._valueGet && Z.inputmask._valueGet() === w().join("") && Z.inputmask._valueSet(""), c.removeMaskOnSubmit && (Z.inputmask._valueSet(Z.inputmask.unmaskedvalue(), !0), setTimeout(function() {
                            N(Z, A())
                        }, 0))
                    },
                    resetEvent: function(e) {
                        Z.inputmask.refreshValue = !0, setTimeout(function() {
                            q.trigger("setvalue")
                        }, 0)
                    }
                };
            if (i.prototype.positionColorMask = function(e, t) {
                    e.style.left = t.offsetLeft + "px"
                }, r !== a) switch (r.action) {
                case "isComplete":
                    return Z = r.el, U(A());
                case "unmaskedvalue":
                    return Z !== a && r.value === a || (W = r.value, W = (e.isFunction(c.onBeforeMask) && c.onBeforeMask.call(Y, W, c) || W).split(""), F(a, !1, !1, J ? W.reverse() : W), e.isFunction(c.onBeforeWrite) && c.onBeforeWrite.call(Y, a, A(), 0, c)), T(Z);
                case "mask":
                    ! function(t) {
                        ae.off(t);
                        var i = function(t, i) {
                            var r = t.getAttribute("type"),
                                s = "INPUT" === t.tagName && -1 !== e.inArray(r, i.supportsInputType) || t.isContentEditable || "TEXTAREA" === t.tagName;
                            if (!s)
                                if ("INPUT" === t.tagName) {
                                    var l = n.createElement("input");
                                    l.setAttribute("type", r), s = "text" === l.type, l = null
                                } else s = "partial";
                            return !1 !== s ? function(t) {
                                function r() {
                                    return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== v() || !0 !== i.nullable ? n.activeElement === this && i.clearMaskOnLostFocus ? (J ? L(A().slice()).reverse() : L(A().slice())).join("") : l.call(this) : "" : l.call(this)
                                }

                                function s(t) {
                                    c.call(this, t), this.inputmask && e(this).trigger("setvalue")
                                }
                                var l, c;
                                if (!t.inputmask.__valueGet) {
                                    if (!0 !== i.noValuePatching) {
                                        if (Object.getOwnPropertyDescriptor) {
                                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === o("test".__proto__) ? function(e) {
                                                return e.__proto__
                                            } : function(e) {
                                                return e.constructor.prototype
                                            });
                                            var u = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : a;
                                            u && u.get && u.set ? (l = u.get, c = u.set, Object.defineProperty(t, "value", {
                                                get: r,
                                                set: s,
                                                configurable: !0
                                            })) : "INPUT" !== t.tagName && (l = function() {
                                                return this.textContent
                                            }, c = function(e) {
                                                this.textContent = e
                                            }, Object.defineProperty(t, "value", {
                                                get: r,
                                                set: s,
                                                configurable: !0
                                            }))
                                        } else n.__lookupGetter__ && t.__lookupGetter__("value") && (l = t.__lookupGetter__("value"), c = t.__lookupSetter__("value"), t.__defineGetter__("value", r), t.__defineSetter__("value", s));
                                        t.inputmask.__valueGet = l, t.inputmask.__valueSet = c
                                    }
                                    t.inputmask._valueGet = function(e) {
                                        return J && !0 !== e ? l.call(this.el).split("").reverse().join("") : l.call(this.el)
                                    }, t.inputmask._valueSet = function(e, t) {
                                        c.call(this.el, null === e || e === a ? "" : !0 !== t && J ? e.split("").reverse().join("") : e)
                                    }, l === a && (l = function() {
                                        return this.value
                                    }, c = function(e) {
                                        this.value = e
                                    }, function(t) {
                                        if (e.valHooks && (e.valHooks[t] === a || !0 !== e.valHooks[t].inputmaskpatch)) {
                                            var n = e.valHooks[t] && e.valHooks[t].get ? e.valHooks[t].get : function(e) {
                                                    return e.value
                                                },
                                                r = e.valHooks[t] && e.valHooks[t].set ? e.valHooks[t].set : function(e, t) {
                                                    return e.value = t, e
                                                };
                                            e.valHooks[t] = {
                                                get: function(e) {
                                                    if (e.inputmask) {
                                                        if (e.inputmask.opts.autoUnmask) return e.inputmask.unmaskedvalue();
                                                        var t = n(e);
                                                        return -1 !== v(a, a, e.inputmask.maskset.validPositions) || !0 !== i.nullable ? t : ""
                                                    }
                                                    return n(e)
                                                },
                                                set: function(t, n) {
                                                    var a, i = e(t);
                                                    return a = r(t, n), t.inputmask && i.trigger("setvalue"), a
                                                },
                                                inputmaskpatch: !0
                                            }
                                        }
                                    }(t.type), function(t) {
                                        ae.on(t, "mouseenter", function(t) {
                                            var n = e(this);
                                            this.inputmask._valueGet() !== A().join("") && n.trigger("setvalue")
                                        })
                                    }(t))
                                }
                            }(t) : t.inputmask = a, s
                        }(t, c);
                        if (!1 !== i && (q = e(Z = t), -1 === (Q = Z !== a ? Z.maxLength : a) && (Q = a), !0 === c.colorMask && K(Z), d && (Z.hasOwnProperty("inputmode") && (Z.inputmode = c.inputmode, Z.setAttribute("inputmode", c.inputmode)), "rtfm" === c.androidHack && (!0 !== c.colorMask && K(Z), Z.type = "password")), !0 === i && (ae.on(Z, "submit", ie.submitEvent), ae.on(Z, "reset", ie.resetEvent), ae.on(Z, "mouseenter", ie.mouseenterEvent), ae.on(Z, "blur", ie.blurEvent), ae.on(Z, "focus", ie.focusEvent), ae.on(Z, "mouseleave", ie.mouseleaveEvent), !0 !== c.colorMask && ae.on(Z, "click", ie.clickEvent), ae.on(Z, "dblclick", ie.dblclickEvent), ae.on(Z, "paste", ie.pasteEvent), ae.on(Z, "dragdrop", ie.pasteEvent), ae.on(Z, "drop", ie.pasteEvent), ae.on(Z, "cut", ie.cutEvent), ae.on(Z, "complete", c.oncomplete), ae.on(Z, "incomplete", c.onincomplete), ae.on(Z, "cleared", c.oncleared), d || !0 === c.inputEventOnly ? Z.removeAttribute("maxLength") : (ae.on(Z, "keydown", ie.keydownEvent), ae.on(Z, "keypress", ie.keypressEvent)), ae.on(Z, "compositionstart", e.noop), ae.on(Z, "compositionupdate", e.noop), ae.on(Z, "compositionend", e.noop), ae.on(Z, "keyup", e.noop), ae.on(Z, "input", ie.inputFallBackEvent), ae.on(Z, "beforeinput", e.noop)), ae.on(Z, "setvalue", ie.setValueEvent), z = w().join(""), "" !== Z.inputmask._valueGet(!0) || !1 === c.clearMaskOnLostFocus || n.activeElement === Z)) {
                            var r = e.isFunction(c.onBeforeMask) && c.onBeforeMask.call(Y, Z.inputmask._valueGet(!0), c) || Z.inputmask._valueGet(!0);
                            "" !== r && F(Z, !0, !1, J ? r.split("").reverse() : r.split(""));
                            var s = A().slice();
                            z = s.join(""), !1 === U(s) && c.clearIncomplete && g(), c.clearMaskOnLostFocus && n.activeElement !== Z && (-1 === v() ? s = [] : L(s)), N(Z, s), n.activeElement === Z && G(Z, _(v()))
                        }
                    }(Z);
                    break;
                case "format":
                    return W = (e.isFunction(c.onBeforeMask) && c.onBeforeMask.call(Y, r.value, c) || r.value).split(""), F(a, !0, !1, J ? W.reverse() : W), r.metadata ? {
                        value: J ? A().slice().reverse().join("") : A().join(""),
                        metadata: l.call(this, {
                            action: "getmetadata"
                        }, s, c)
                    } : J ? A().slice().reverse().join("") : A().join("");
                case "isValid":
                    r.value ? (W = r.value.split(""), F(a, !0, !0, J ? W.reverse() : W)) : r.value = A().join("");
                    for (var re = A(), oe = B(), se = re.length - 1; se > oe && !M(se); se--);
                    return re.splice(oe, se + 1 - oe), U(re) && r.value === A().join("");
                case "getemptymask":
                    return w().join("");
                case "remove":
                    return Z && Z.inputmask && (q = e(Z), Z.inputmask._valueSet(c.autoUnmask ? T(Z) : Z.inputmask._valueGet(!0)), ae.off(Z), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Z), "value") && Z.inputmask.__valueGet && Object.defineProperty(Z, "value", {
                        get: Z.inputmask.__valueGet,
                        set: Z.inputmask.__valueSet,
                        configurable: !0
                    }) : n.__lookupGetter__ && Z.__lookupGetter__("value") && Z.inputmask.__valueGet && (Z.__defineGetter__("value", Z.inputmask.__valueGet), Z.__defineSetter__("value", Z.inputmask.__valueSet)), Z.inputmask = a), Z;
                case "getmetadata":
                    if (e.isArray(s.metadata)) {
                        var le = m(!0, 0, !1).join("");
                        return e.each(s.metadata, function(e, t) {
                            if (t.mask === le) return le = t, !1
                        }), le
                    }
                    return s.metadata
            }
        }
        var c = navigator.userAgent,
            u = /mobile/i.test(c),
            p = /iemobile/i.test(c),
            f = /iphone/i.test(c) && !p,
            d = /android/i.test(c) && !p;
        return i.prototype = {
            dataAttribute: "data-inputmask",
            defaults: {
                placeholder: "_",
                optionalmarker: {
                    start: "[",
                    end: "]"
                },
                quantifiermarker: {
                    start: "{",
                    end: "}"
                },
                groupmarker: {
                    start: "(",
                    end: ")"
                },
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                regex: null,
                oncomplete: e.noop,
                onincomplete: e.noop,
                oncleared: e.noop,
                repeat: 0,
                greedy: !0,
                autoUnmask: !1,
                removeMaskOnSubmit: !1,
                clearMaskOnLostFocus: !0,
                insertMode: !0,
                clearIncomplete: !1,
                alias: null,
                onKeyDown: e.noop,
                onBeforeMask: null,
                onBeforePaste: function(t, n) {
                    return e.isFunction(n.onBeforeMask) ? n.onBeforeMask.call(this, t, n) : t
                },
                onBeforeWrite: null,
                onUnMask: null,
                showMaskOnFocus: !0,
                showMaskOnHover: !0,
                onKeyValidation: e.noop,
                skipOptionalPartCharacter: " ",
                numericInput: !1,
                rightAlign: !1,
                undoOnEscape: !0,
                radixPoint: "",
                radixPointDefinitionSymbol: a,
                groupSeparator: "",
                keepStatic: null,
                positionCaretOnTab: !0,
                tabThrough: !1,
                supportsInputType: ["text", "tel", "password"],
                ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
                isComplete: null,
                canClearPosition: e.noop,
                preValidation: null,
                postValidation: null,
                staticDefinitionSymbol: a,
                jitMasking: !1,
                nullable: !0,
                inputEventOnly: !1,
                noValuePatching: !1,
                positionCaretOnClick: "lvp",
                casing: null,
                inputmode: "verbatim",
                colorMask: !1,
                androidHack: !1,
                importDataAttributes: !0
            },
            definitions: {
                9: {
                    validator: "[0-9１-９]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                a: {
                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                "*": {
                    validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]",
                    cardinality: 1
                }
            },
            aliases: {},
            masksCache: {},
            mask: function(o) {
                var c = this;
                return "string" == typeof o && (o = n.getElementById(o) || n.querySelectorAll(o)), o = o.nodeName ? [o] : o, e.each(o, function(n, o) {
                    var u = e.extend(!0, {}, c.opts);
                    ! function(n, i, o, s) {
                        if (!0 === i.importDataAttributes) {
                            var l, c, u, p, f = function(e, i) {
                                    null !== (i = i !== a ? i : n.getAttribute(s + "-" + e)) && ("string" == typeof i && (0 === e.indexOf("on") ? i = t[i] : "false" === i ? i = !1 : "true" === i && (i = !0)), o[e] = i)
                                },
                                d = n.getAttribute(s);
                            if (d && "" !== d && (d = d.replace(new RegExp("'", "g"), '"'), c = JSON.parse("{" + d + "}")), c)
                                for (p in u = a, c)
                                    if ("alias" === p.toLowerCase()) {
                                        u = c[p];
                                        break
                                    }
                            for (l in f("alias", u), o.alias && r(o.alias, o, i), i) {
                                if (c)
                                    for (p in u = a, c)
                                        if (p.toLowerCase() === l.toLowerCase()) {
                                            u = c[p];
                                            break
                                        }
                                f(l, u)
                            }
                        }
                        e.extend(!0, i, o), ("rtl" === n.dir || i.rightAlign) && (n.style.textAlign = "right"), ("rtl" === n.dir || i.numericInput) && (n.dir = "ltr", n.removeAttribute("dir"), i.isRTL = !0)
                    }(o, u, e.extend(!0, {}, c.userOptions), c.dataAttribute);
                    var p = s(u, c.noMasksCache);
                    p !== a && (o.inputmask !== a && (o.inputmask.opts.autoUnmask = !0, o.inputmask.remove()), o.inputmask = new i(a, a, !0), o.inputmask.opts = u, o.inputmask.noMasksCache = c.noMasksCache, o.inputmask.userOptions = e.extend(!0, {}, c.userOptions), o.inputmask.isRTL = u.isRTL || u.numericInput, o.inputmask.el = o, o.inputmask.maskset = p, e.data(o, "_inputmask_opts", u), l.call(o.inputmask, {
                        action: "mask"
                    }))
                }), o && o[0] && o[0].inputmask || this
            },
            option: function(t, n) {
                return "string" == typeof t ? this.opts[t] : "object" === (void 0 === t ? "undefined" : o(t)) ? (e.extend(this.userOptions, t), this.el && !0 !== n && this.mask(this.el), this) : void 0
            },
            unmaskedvalue: function(e) {
                return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {
                    action: "unmaskedvalue",
                    value: e
                })
            },
            remove: function() {
                return l.call(this, {
                    action: "remove"
                })
            },
            getemptymask: function() {
                return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {
                    action: "getemptymask"
                })
            },
            hasMaskedValue: function() {
                return !this.opts.autoUnmask
            },
            isComplete: function() {
                return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {
                    action: "isComplete"
                })
            },
            getmetadata: function() {
                return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {
                    action: "getmetadata"
                })
            },
            isValid: function(e) {
                return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {
                    action: "isValid",
                    value: e
                })
            },
            format: function(e, t) {
                return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {
                    action: "format",
                    value: e,
                    metadata: t
                })
            },
            analyseMask: function(t, n, r) {
                function o(e, t, n, a) {
                    this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = n || !1, this.isAlternator = a || !1, this.quantifier = {
                        min: 1,
                        max: 1
                    }
                }

                function s(t, o, s) {
                    s = s !== a ? s : t.matches.length;
                    var l = t.matches[s - 1];
                    if (n) 0 === o.indexOf("[") || y && /\\d|\\s|\\w]/i.test(o) || "." === o ? t.matches.splice(s++, 0, {
                        fn: new RegExp(o, r.casing ? "i" : ""),
                        cardinality: 1,
                        optionality: t.isOptional,
                        newBlockMarker: l === a || l.def !== o,
                        casing: null,
                        def: o,
                        placeholder: a,
                        nativeDef: o
                    }) : (y && (o = o[o.length - 1]), e.each(o.split(""), function(e, n) {
                        l = t.matches[s - 1], t.matches.splice(s++, 0, {
                            fn: null,
                            cardinality: 0,
                            optionality: t.isOptional,
                            newBlockMarker: l === a || l.def !== n && null !== l.fn,
                            casing: null,
                            def: r.staticDefinitionSymbol || n,
                            placeholder: r.staticDefinitionSymbol !== a ? n : a,
                            nativeDef: n
                        })
                    })), y = !1;
                    else {
                        var c = (r.definitions ? r.definitions[o] : a) || i.prototype.definitions[o];
                        if (c && !y) {
                            for (var u = c.prevalidator, p = u ? u.length : 0, f = 1; f < c.cardinality; f++) {
                                var d = p >= f ? u[f - 1] : [],
                                    m = d.validator,
                                    h = d.cardinality;
                                t.matches.splice(s++, 0, {
                                    fn: m ? "string" == typeof m ? new RegExp(m, r.casing ? "i" : "") : new function() {
                                        this.test = m
                                    } : new RegExp("."),
                                    cardinality: h || 1,
                                    optionality: t.isOptional,
                                    newBlockMarker: l === a || l.def !== (c.definitionSymbol || o),
                                    casing: c.casing,
                                    def: c.definitionSymbol || o,
                                    placeholder: c.placeholder,
                                    nativeDef: o
                                }), l = t.matches[s - 1]
                            }
                            t.matches.splice(s++, 0, {
                                fn: c.validator ? "string" == typeof c.validator ? new RegExp(c.validator, r.casing ? "i" : "") : new function() {
                                    this.test = c.validator
                                } : new RegExp("."),
                                cardinality: c.cardinality,
                                optionality: t.isOptional,
                                newBlockMarker: l === a || l.def !== (c.definitionSymbol || o),
                                casing: c.casing,
                                def: c.definitionSymbol || o,
                                placeholder: c.placeholder,
                                nativeDef: o
                            })
                        } else t.matches.splice(s++, 0, {
                            fn: null,
                            cardinality: 0,
                            optionality: t.isOptional,
                            newBlockMarker: l === a || l.def !== o && null !== l.fn,
                            casing: null,
                            def: r.staticDefinitionSymbol || o,
                            placeholder: r.staticDefinitionSymbol !== a ? o : a,
                            nativeDef: o
                        }), y = !1
                    }
                }

                function l() {
                    if (b.length > 0) {
                        if (s(f = b[b.length - 1], u), f.isAlternator) {
                            d = b.pop();
                            for (var e = 0; e < d.matches.length; e++) d.matches[e].isGroup = !1;
                            b.length > 0 ? (f = b[b.length - 1]).matches.push(d) : k.matches.push(d)
                        }
                    } else s(k, u)
                }
                var c, u, p, f, d, m, h, g = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                    v = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                    y = !1,
                    k = new o,
                    b = [],
                    x = [];
                for (n && (r.optionalmarker.start = a, r.optionalmarker.end = a); c = n ? v.exec(t) : g.exec(t);) {
                    if (u = c[0], n) switch (u.charAt(0)) {
                        case "?":
                            u = "{0,1}";
                            break;
                        case "+":
                        case "*":
                            u = "{" + u + "}"
                    }
                    if (y) l();
                    else switch (u.charAt(0)) {
                        case r.escapeChar:
                            y = !0, n && l();
                            break;
                        case r.optionalmarker.end:
                        case r.groupmarker.end:
                            if ((p = b.pop()).openGroup = !1, p !== a)
                                if (b.length > 0) {
                                    if ((f = b[b.length - 1]).matches.push(p), f.isAlternator) {
                                        d = b.pop();
                                        for (var P = 0; P < d.matches.length; P++) d.matches[P].isGroup = !1, d.matches[P].alternatorGroup = !1;
                                        b.length > 0 ? (f = b[b.length - 1]).matches.push(d) : k.matches.push(d)
                                    }
                                } else k.matches.push(p);
                            else l();
                            break;
                        case r.optionalmarker.start:
                            b.push(new o(!1, !0));
                            break;
                        case r.groupmarker.start:
                            b.push(new o(!0));
                            break;
                        case r.quantifiermarker.start:
                            var S = new o(!1, !1, !0),
                                w = (u = u.replace(/[{}]/g, "")).split(","),
                                A = isNaN(w[0]) ? w[0] : parseInt(w[0]),
                                E = 1 === w.length ? A : isNaN(w[1]) ? w[1] : parseInt(w[1]);
                            if ("*" !== E && "+" !== E || (A = "*" === E ? 0 : 1), S.quantifier = {
                                    min: A,
                                    max: E
                                }, b.length > 0) {
                                var C = b[b.length - 1].matches;
                                (c = C.pop()).isGroup || ((h = new o(!0)).matches.push(c), c = h), C.push(c), C.push(S)
                            } else(c = k.matches.pop()).isGroup || (n && null === c.fn && "." === c.def && (c.fn = new RegExp(c.def, r.casing ? "i" : "")), (h = new o(!0)).matches.push(c), c = h), k.matches.push(c), k.matches.push(S);
                            break;
                        case r.alternatormarker:
                            if (b.length > 0) {
                                var O = (f = b[b.length - 1]).matches[f.matches.length - 1];
                                m = f.openGroup && (O.matches === a || !1 === O.isGroup && !1 === O.isAlternator) ? b.pop() : f.matches.pop()
                            } else m = k.matches.pop();
                            if (m.isAlternator) b.push(m);
                            else if (m.alternatorGroup ? (d = b.pop(), m.alternatorGroup = !1) : d = new o(!1, !1, !1, !0), d.matches.push(m), b.push(d), m.openGroup) {
                                m.openGroup = !1;
                                var R = new o(!0);
                                R.alternatorGroup = !0, b.push(R)
                            }
                            break;
                        default:
                            l()
                    }
                }
                for (; b.length > 0;) p = b.pop(), k.matches.push(p);
                return k.matches.length > 0 && (function t(i) {
                    i && i.matches && e.each(i.matches, function(e, o) {
                        var l = i.matches[e + 1];
                        (l === a || l.matches === a || !1 === l.isQuantifier) && o && o.isGroup && (o.isGroup = !1, n || (s(o, r.groupmarker.start, 0), !0 !== o.openGroup && s(o, r.groupmarker.end))), t(o)
                    })
                }(k), x.push(k)), (r.numericInput || r.isRTL) && function e(t) {
                    for (var n in t.matches = t.matches.reverse(), t.matches)
                        if (t.matches.hasOwnProperty(n)) {
                            var i = parseInt(n);
                            if (t.matches[n].isQuantifier && t.matches[i + 1] && t.matches[i + 1].isGroup) {
                                var o = t.matches[n];
                                t.matches.splice(n, 1), t.matches.splice(i + 1, 0, o)
                            }
                            t.matches[n].matches !== a ? t.matches[n] = e(t.matches[n]) : t.matches[n] = ((s = t.matches[n]) === r.optionalmarker.start ? s = r.optionalmarker.end : s === r.optionalmarker.end ? s = r.optionalmarker.start : s === r.groupmarker.start ? s = r.groupmarker.end : s === r.groupmarker.end && (s = r.groupmarker.start), s)
                        }
                    var s;
                    return t
                }(x[0]), x
            }
        }, i.extendDefaults = function(t) {
            e.extend(!0, i.prototype.defaults, t)
        }, i.extendDefinitions = function(t) {
            e.extend(!0, i.prototype.definitions, t)
        }, i.extendAliases = function(t) {
            e.extend(!0, i.prototype.aliases, t)
        }, i.format = function(e, t, n) {
            return i(t).format(e, n)
        }, i.unmask = function(e, t) {
            return i(t).unmaskedvalue(e)
        }, i.isValid = function(e, t) {
            return i(t).isValid(e)
        }, i.remove = function(t) {
            e.each(t, function(e, t) {
                t.inputmask && t.inputmask.remove()
            })
        }, i.escapeRegex = function(e) {
            return e.replace(new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim"), "\\$1")
        }, i.keyCode = {
            ALT: 18,
            BACKSPACE: 8,
            BACKSPACE_SAFARI: 127,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91,
            X: 88
        }, i
    }) ? a.apply(t, i) : a) && (e.exports = r)
}, function(e, t) {
    e.exports = jQuery
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    n(4), n(9), n(12), n(13), n(14), n(15);
    var i = a(n(1)),
        r = a(n(0)),
        o = a(n(2));
    r.default === o.default && n(16), window.Inputmask = i.default
}, function(e, t, n) {
    var a = n(5);
    "string" == typeof a && (a = [
        [e.i, a, ""]
    ]);
    var i = {
        hmr: !0,
        transform: void 0
    };
    n(7)(a, i), a.locals && (e.exports = a.locals)
}, function(e, t, n) {
    (e.exports = n(6)(void 0)).push([e.i, "span.im-caret {\r\n    -webkit-animation: 1s blink step-end infinite;\r\n    animation: 1s blink step-end infinite;\r\n}\r\n\r\n@keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\nspan.im-static {\r\n    color: grey;\r\n}\r\n\r\ndiv.im-colormask {\r\n    display: inline-block;\r\n    border-style: inset;\r\n    border-width: 2px;\r\n    -webkit-appearance: textfield;\r\n    -moz-appearance: textfield;\r\n    appearance: textfield;\r\n}\r\n\r\ndiv.im-colormask > input {\r\n    position: absolute;\r\n    display: inline-block;\r\n    background-color: transparent;\r\n    color: transparent;\r\n    -webkit-appearance: caret;\r\n    -moz-appearance: caret;\r\n    appearance: caret;\r\n    border-style: none;\r\n    left: 0; /*calculated*/\r\n}\r\n\r\ndiv.im-colormask > input:focus {\r\n    outline: none;\r\n}\r\n\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > input::selection{\r\n    background: none;\r\n}\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > div {\r\n    color: black;\r\n    display: inline-block;\r\n    width: 100px; /*calculated*/\r\n}", ""])
}, function(e, t) {
    function n(e, t) {
        var n, a = e[1] || "",
            i = e[3];
        if (!i) return a;
        if (t && "function" == typeof btoa) {
            var r = (n = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                o = i.sources.map(function(e) {
                    return "/*# sourceURL=" + i.sourceRoot + e + " */"
                });
            return [a].concat(o).concat([r]).join("\n")
        }
        return [a].join("\n")
    }
    e.exports = function(e) {
        var t = [];
        return t.toString = function() {
            return this.map(function(t) {
                var a = n(t, e);
                return t[2] ? "@media " + t[2] + "{" + a + "}" : a
            }).join("")
        }, t.i = function(e, n) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var a = {}, i = 0; i < this.length; i++) {
                var r = this[i][0];
                "number" == typeof r && (a[r] = !0)
            }
            for (i = 0; i < e.length; i++) {
                var o = e[i];
                "number" == typeof o[0] && a[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), t.push(o))
            }
        }, t
    }
}, function(e, t, n) {
    function a(e, t) {
        for (var n = 0; n < e.length; n++) {
            var a = e[n],
                i = f[a.id];
            if (i) {
                for (i.refs++, o = 0; o < i.parts.length; o++) i.parts[o](a.parts[o]);
                for (; o < a.parts.length; o++) i.parts.push(c(a.parts[o], t))
            } else {
                for (var r = [], o = 0; o < a.parts.length; o++) r.push(c(a.parts[o], t));
                f[a.id] = {
                    id: a.id,
                    refs: 1,
                    parts: r
                }
            }
        }
    }

    function i(e, t) {
        for (var n = [], a = {}, i = 0; i < e.length; i++) {
            var r = e[i],
                o = t.base ? r[0] + t.base : r[0],
                s = {
                    css: r[1],
                    media: r[2],
                    sourceMap: r[3]
                };
            a[o] ? a[o].parts.push(s) : n.push(a[o] = {
                id: o,
                parts: [s]
            })
        }
        return n
    }

    function r(e, t) {
        var n = m(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var a = v[v.length - 1];
        if ("top" === e.insertAt) a ? a.nextSibling ? n.insertBefore(t, a.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), v.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var i = m(e.insertInto + " " + e.insertAt.before);
            n.insertBefore(t, i)
        }
    }

    function o(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = v.indexOf(e);
        t >= 0 && v.splice(t, 1)
    }

    function s(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css", l(t, e.attrs), r(e, t), t
    }

    function l(e, t) {
        Object.keys(t).forEach(function(n) {
            e.setAttribute(n, t[n])
        })
    }

    function c(e, t) {
        var n, a, i, c;
        if (t.transform && e.css) {
            if (!(c = t.transform(e.css))) return function() {};
            e.css = c
        }
        if (t.singleton) {
            var p = g++;
            n = h || (h = s(t)), a = u.bind(null, n, p, !1), i = u.bind(null, n, p, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
            var t = document.createElement("link");
            return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", l(t, e.attrs), r(e, t), t
        }(t), a = function(e, t, n) {
            var a = n.css,
                i = n.sourceMap,
                r = void 0 === t.convertToAbsoluteUrls && i;
            (t.convertToAbsoluteUrls || r) && (a = y(a)), i && (a += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var o = new Blob([a], {
                    type: "text/css"
                }),
                s = e.href;
            e.href = URL.createObjectURL(o), s && URL.revokeObjectURL(s)
        }.bind(null, n, t), i = function() {
            o(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = s(t), a = function(e, t) {
            var n = t.css,
                a = t.media;
            if (a && e.setAttribute("media", a), e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), i = function() {
            o(n)
        });
        return a(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    a(e = t)
                } else i()
            }
    }

    function u(e, t, n, a) {
        var i = n ? "" : a.css;
        if (e.styleSheet) e.styleSheet.cssText = b(t, i);
        else {
            var r = document.createTextNode(i),
                o = e.childNodes;
            o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(r, o[t]) : e.appendChild(r)
        }
    }
    var p, f = {},
        d = function() {
            return void 0 === p && (p = function() {
                return window && document && document.all && !window.atob
            }.apply(this, arguments)), p
        },
        m = function(e) {
            var t = {};
            return function(e) {
                if (void 0 === t[e]) {
                    var n = function(e) {
                        return document.querySelector(e)
                    }.call(this, e);
                    if (n instanceof window.HTMLIFrameElement) try {
                        n = n.contentDocument.head
                    } catch (e) {
                        n = null
                    }
                    t[e] = n
                }
                return t[e]
            }
        }(),
        h = null,
        g = 0,
        v = [],
        y = n(8);
    e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = d()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = i(e, t);
        return a(n, t),
            function(e) {
                for (var r = [], o = 0; o < n.length; o++) {
                    var s = n[o];
                    (l = f[s.id]).refs--, r.push(l)
                }
                for (e && a(i(e, t), t), o = 0; o < r.length; o++) {
                    var l = r[o];
                    if (0 === l.refs) {
                        for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                        delete f[l.id]
                    }
                }
            }
    };
    var k, b = (k = [], function(e, t) {
        return k[e] = t, k.filter(Boolean).join("\n")
    })
}, function(e, t) {
    e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
            a = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
            var i, r = t.trim().replace(/^"(.*)"$/, function(e, t) {
                return t
            }).replace(/^'(.*)'$/, function(e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r) ? e : (i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : a + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
        })
    }
}, function(e, t, n) {
    "use strict";
    var a, i, r;
    "function" == typeof Symbol && Symbol.iterator, i = [n(0), n(1)], void 0 !== (r = "function" == typeof(a = function(e, t) {
        return t.extendAliases({
            "dd/mm/yyyy": {
                mask: "1/2/y",
                placeholder: "dd/mm/yyyy",
                regex: {
                    val1pre: new RegExp("[0-3]"),
                    val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
                    val2pre: function(e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|[12][0-9]|3[01])" + n + "[01])")
                    },
                    val2: function(e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|[12][0-9])" + n + "(0[1-9]|1[012]))|(30" + n + "(0[13-9]|1[012]))|(31" + n + "(0[13578]|1[02]))")
                    }
                },
                leapday: "29/02/",
                separator: "/",
                yearrange: {
                    minyear: 1900,
                    maxyear: 2099
                },
                isInYearRange: function(e, t, n) {
                    if (isNaN(e)) return !1;
                    var a = parseInt(e.concat(t.toString().slice(e.length))),
                        i = parseInt(e.concat(n.toString().slice(e.length)));
                    return !isNaN(a) && t <= a && a <= n || !isNaN(i) && t <= i && i <= n
                },
                determinebaseyear: function(e, t, n) {
                    var a = (new Date).getFullYear();
                    if (e > a) return e;
                    if (t < a) {
                        for (var i = t.toString().slice(0, 2), r = t.toString().slice(2, 4); t < i + n;) i--;
                        var o = i + r;
                        return e > o ? e : o
                    }
                    if (e <= a && a <= t) {
                        for (var s = a.toString().slice(0, 2); t < s + n;) s--;
                        var l = s + n;
                        return l < e ? e : l
                    }
                    return a
                },
                onKeyDown: function(n, a, i, r) {
                    var o = e(this);
                    if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
                        var s = new Date;
                        o.val(s.getDate().toString() + (s.getMonth() + 1).toString() + s.getFullYear().toString()), o.trigger("setvalue")
                    }
                },
                getFrontValue: function(e, t, n) {
                    for (var a = 0, i = 0, r = 0; r < e.length && "2" !== e.charAt(r); r++) {
                        var o = n.definitions[e.charAt(r)];
                        o ? (a += i, i = o.cardinality) : i++
                    }
                    return t.join("").substr(a, i)
                },
                postValidation: function(e, t, n) {
                    var a, i, r = e.join("");
                    return 0 === n.mask.indexOf("y") ? (i = r.substr(0, 4), a = r.substring(4, 10)) : (i = r.substring(6, 10), a = r.substr(0, 6)), t && (a !== n.leapday || function(e) {
                        return isNaN(e) || 29 === new Date(e, 2, 0).getDate()
                    }(i))
                },
                definitions: {
                    1: {
                        validator: function(e, t, n, a, i) {
                            var r = i.regex.val1.test(e);
                            return a || r || e.charAt(1) !== i.separator && -1 === "-./".indexOf(e.charAt(1)) || !(r = i.regex.val1.test("0" + e.charAt(0))) ? r : (t.buffer[n - 1] = "0", {
                                refreshFromBuffer: {
                                    start: n - 1,
                                    end: n
                                },
                                pos: n,
                                c: e.charAt(0)
                            })
                        },
                        cardinality: 2,
                        prevalidator: [{
                            validator: function(e, t, n, a, i) {
                                var r = e;
                                isNaN(t.buffer[n + 1]) || (r += t.buffer[n + 1]);
                                var o = 1 === r.length ? i.regex.val1pre.test(r) : i.regex.val1.test(r);
                                if (o && t.validPositions[n] && (i.regex.val2(i.separator).test(e + t.validPositions[n].input) || (t.validPositions[n].input = "0" === e ? "1" : "0")), !a && !o) {
                                    if (o = i.regex.val1.test(e + "0")) return t.buffer[n] = e, t.buffer[++n] = "0", {
                                        pos: n,
                                        c: "0"
                                    };
                                    if (o = i.regex.val1.test("0" + e)) return t.buffer[n] = "0", {
                                        pos: ++n
                                    }
                                }
                                return o
                            },
                            cardinality: 1
                        }]
                    },
                    2: {
                        validator: function(e, t, n, a, i) {
                            var r = i.getFrontValue(t.mask, t.buffer, i); - 1 !== r.indexOf(i.placeholder[0]) && (r = "01" + i.separator);
                            var o = i.regex.val2(i.separator).test(r + e);
                            return a || o || e.charAt(1) !== i.separator && -1 === "-./".indexOf(e.charAt(1)) || !(o = i.regex.val2(i.separator).test(r + "0" + e.charAt(0))) ? o : (t.buffer[n - 1] = "0", {
                                refreshFromBuffer: {
                                    start: n - 1,
                                    end: n
                                },
                                pos: n,
                                c: e.charAt(0)
                            })
                        },
                        cardinality: 2,
                        prevalidator: [{
                            validator: function(e, t, n, a, i) {
                                isNaN(t.buffer[n + 1]) || (e += t.buffer[n + 1]);
                                var r = i.getFrontValue(t.mask, t.buffer, i); - 1 !== r.indexOf(i.placeholder[0]) && (r = "01" + i.separator);
                                var o = 1 === e.length ? i.regex.val2pre(i.separator).test(r + e) : i.regex.val2(i.separator).test(r + e);
                                return o && t.validPositions[n] && (i.regex.val2(i.separator).test(e + t.validPositions[n].input) || (t.validPositions[n].input = "0" === e ? "1" : "0")), a || o || !(o = i.regex.val2(i.separator).test(r + "0" + e)) ? o : (t.buffer[n] = "0", {
                                    pos: ++n
                                })
                            },
                            cardinality: 1
                        }]
                    },
                    y: {
                        validator: function(e, t, n, a, i) {
                            return i.isInYearRange(e, i.yearrange.minyear, i.yearrange.maxyear)
                        },
                        cardinality: 4,
                        prevalidator: [{
                            validator: function(e, t, n, a, i) {
                                var r = i.isInYearRange(e, i.yearrange.minyear, i.yearrange.maxyear);
                                if (!a && !r) {
                                    var o = i.determinebaseyear(i.yearrange.minyear, i.yearrange.maxyear, e + "0").toString().slice(0, 1);
                                    if (r = i.isInYearRange(o + e, i.yearrange.minyear, i.yearrange.maxyear)) return t.buffer[n++] = o.charAt(0), {
                                        pos: n
                                    };
                                    if (o = i.determinebaseyear(i.yearrange.minyear, i.yearrange.maxyear, e + "0").toString().slice(0, 2), r = i.isInYearRange(o + e, i.yearrange.minyear, i.yearrange.maxyear)) return t.buffer[n++] = o.charAt(0), t.buffer[n++] = o.charAt(1), {
                                        pos: n
                                    }
                                }
                                return r
                            },
                            cardinality: 1
                        }, {
                            validator: function(e, t, n, a, i) {
                                var r = i.isInYearRange(e, i.yearrange.minyear, i.yearrange.maxyear);
                                if (!a && !r) {
                                    var o = i.determinebaseyear(i.yearrange.minyear, i.yearrange.maxyear, e).toString().slice(0, 2);
                                    if (r = i.isInYearRange(e[0] + o[1] + e[1], i.yearrange.minyear, i.yearrange.maxyear)) return t.buffer[n++] = o.charAt(1), {
                                        pos: n
                                    };
                                    if (o = i.determinebaseyear(i.yearrange.minyear, i.yearrange.maxyear, e).toString().slice(0, 2), r = i.isInYearRange(o + e, i.yearrange.minyear, i.yearrange.maxyear)) return t.buffer[n - 1] = o.charAt(0), t.buffer[n++] = o.charAt(1), t.buffer[n++] = e.charAt(0), {
                                        refreshFromBuffer: {
                                            start: n - 3,
                                            end: n
                                        },
                                        pos: n
                                    }
                                }
                                return r
                            },
                            cardinality: 2
                        }, {
                            validator: function(e, t, n, a, i) {
                                return i.isInYearRange(e, i.yearrange.minyear, i.yearrange.maxyear)
                            },
                            cardinality: 3
                        }]
                    }
                },
                insertMode: !1,
                autoUnmask: !1
            },
            "mm/dd/yyyy": {
                placeholder: "mm/dd/yyyy",
                alias: "dd/mm/yyyy",
                regex: {
                    val2pre: function(e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[13-9]|1[012])" + n + "[0-3])|(02" + n + "[0-2])")
                    },
                    val2: function(e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + n + "30)|((0[13578]|1[02])" + n + "31)")
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                leapday: "02/29/",
                onKeyDown: function(n, a, i, r) {
                    var o = e(this);
                    if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
                        var s = new Date;
                        o.val((s.getMonth() + 1).toString() + s.getDate().toString() + s.getFullYear().toString()), o.trigger("setvalue")
                    }
                }
            },
            "yyyy/mm/dd": {
                mask: "y/1/2",
                placeholder: "yyyy/mm/dd",
                alias: "mm/dd/yyyy",
                leapday: "/02/29",
                onKeyDown: function(n, a, i, r) {
                    var o = e(this);
                    if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
                        var s = new Date;
                        o.val(s.getFullYear().toString() + (s.getMonth() + 1).toString() + s.getDate().toString()), o.trigger("setvalue")
                    }
                }
            },
            "dd.mm.yyyy": {
                mask: "1.2.y",
                placeholder: "dd.mm.yyyy",
                leapday: "29.02.",
                separator: ".",
                alias: "dd/mm/yyyy"
            },
            "dd-mm-yyyy": {
                mask: "1-2-y",
                placeholder: "dd-mm-yyyy",
                leapday: "29-02-",
                separator: "-",
                alias: "dd/mm/yyyy"
            },
            "mm.dd.yyyy": {
                mask: "1.2.y",
                placeholder: "mm.dd.yyyy",
                leapday: "02.29.",
                separator: ".",
                alias: "mm/dd/yyyy"
            },
            "mm-dd-yyyy": {
                mask: "1-2-y",
                placeholder: "mm-dd-yyyy",
                leapday: "02-29-",
                separator: "-",
                alias: "mm/dd/yyyy"
            },
            "yyyy.mm.dd": {
                mask: "y.1.2",
                placeholder: "yyyy.mm.dd",
                leapday: ".02.29",
                separator: ".",
                alias: "yyyy/mm/dd"
            },
            "yyyy-mm-dd": {
                mask: "y-1-2",
                placeholder: "yyyy-mm-dd",
                leapday: "-02-29",
                separator: "-",
                alias: "yyyy/mm/dd"
            },
            datetime: {
                mask: "1/2/y h:s",
                placeholder: "dd/mm/yyyy hh:mm",
                alias: "dd/mm/yyyy",
                regex: {
                    hrspre: new RegExp("[012]"),
                    hrs24: new RegExp("2[0-4]|1[3-9]"),
                    hrs: new RegExp("[01][0-9]|2[0-4]"),
                    ampm: new RegExp("^[a|p|A|P][m|M]"),
                    mspre: new RegExp("[0-5]"),
                    ms: new RegExp("[0-5][0-9]")
                },
                timeseparator: ":",
                hourFormat: "24",
                definitions: {
                    h: {
                        validator: function(e, t, n, a, i) {
                            if ("24" === i.hourFormat && 24 === parseInt(e, 10)) return t.buffer[n - 1] = "0", t.buffer[n] = "0", {
                                refreshFromBuffer: {
                                    start: n - 1,
                                    end: n
                                },
                                c: "0"
                            };
                            var r = i.regex.hrs.test(e);
                            if (!a && !r && (e.charAt(1) === i.timeseparator || -1 !== "-.:".indexOf(e.charAt(1))) && (r = i.regex.hrs.test("0" + e.charAt(0)))) return t.buffer[n - 1] = "0", t.buffer[n] = e.charAt(0), {
                                refreshFromBuffer: {
                                    start: ++n - 2,
                                    end: n
                                },
                                pos: n,
                                c: i.timeseparator
                            };
                            if (r && "24" !== i.hourFormat && i.regex.hrs24.test(e)) {
                                var o = parseInt(e, 10);
                                return 24 === o ? (t.buffer[n + 5] = "a", t.buffer[n + 6] = "m") : (t.buffer[n + 5] = "p", t.buffer[n + 6] = "m"), (o -= 12) < 10 ? (t.buffer[n] = o.toString(), t.buffer[n - 1] = "0") : (t.buffer[n] = o.toString().charAt(1), t.buffer[n - 1] = o.toString().charAt(0)), {
                                    refreshFromBuffer: {
                                        start: n - 1,
                                        end: n + 6
                                    },
                                    c: t.buffer[n]
                                }
                            }
                            return r
                        },
                        cardinality: 2,
                        prevalidator: [{
                            validator: function(e, t, n, a, i) {
                                var r = i.regex.hrspre.test(e);
                                return a || r || !(r = i.regex.hrs.test("0" + e)) ? r : (t.buffer[n] = "0", {
                                    pos: ++n
                                })
                            },
                            cardinality: 1
                        }]
                    },
                    s: {
                        validator: "[0-5][0-9]",
                        cardinality: 2,
                        prevalidator: [{
                            validator: function(e, t, n, a, i) {
                                var r = i.regex.mspre.test(e);
                                return a || r || !(r = i.regex.ms.test("0" + e)) ? r : (t.buffer[n] = "0", {
                                    pos: ++n
                                })
                            },
                            cardinality: 1
                        }]
                    },
                    t: {
                        validator: function(e, t, n, a, i) {
                            return i.regex.ampm.test(e + "m")
                        },
                        casing: "lower",
                        cardinality: 1
                    }
                },
                insertMode: !1,
                autoUnmask: !1
            },
            datetime12: {
                mask: "1/2/y h:s t\\m",
                placeholder: "dd/mm/yyyy hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "mm/dd/yyyy hh:mm xm": {
                mask: "1/2/y h:s t\\m",
                placeholder: "mm/dd/yyyy hh:mm xm",
                alias: "datetime12",
                regex: {
                    val2pre: function(e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[13-9]|1[012])" + n + "[0-3])|(02" + n + "[0-2])")
                    },
                    val2: function(e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + n + "30)|((0[13578]|1[02])" + n + "31)")
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                leapday: "02/29/",
                onKeyDown: function(n, a, i, r) {
                    var o = e(this);
                    if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
                        var s = new Date;
                        o.val((s.getMonth() + 1).toString() + s.getDate().toString() + s.getFullYear().toString()), o.trigger("setvalue")
                    }
                }
            },
            "hh:mm t": {
                mask: "h:s t\\m",
                placeholder: "hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "h:s t": {
                mask: "h:s t\\m",
                placeholder: "hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "hh:mm:ss": {
                mask: "h:s:s",
                placeholder: "hh:mm:ss",
                alias: "datetime",
                autoUnmask: !1
            },
            "hh:mm": {
                mask: "h:s",
                placeholder: "hh:mm",
                alias: "datetime",
                autoUnmask: !1
            },
            date: {
                alias: "dd/mm/yyyy"
            },
            "mm/yyyy": {
                mask: "1/y",
                placeholder: "mm/yyyy",
                leapday: "donotuse",
                separator: "/",
                alias: "mm/dd/yyyy"
            },
            shamsi: {
                regex: {
                    val2pre: function(e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + n + "[0-3])")
                    },
                    val2: function(e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + n + "30)|((0[1-6])" + n + "31)")
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                yearrange: {
                    minyear: 1300,
                    maxyear: 1499
                },
                mask: "y/1/2",
                leapday: "/12/30",
                placeholder: "yyyy/mm/dd",
                alias: "mm/dd/yyyy",
                clearIncomplete: !0
            },
            "yyyy-mm-dd hh:mm:ss": {
                mask: "y-1-2 h:s:s",
                placeholder: "yyyy-mm-dd hh:mm:ss",
                alias: "datetime",
                separator: "-",
                leapday: "-02-29",
                regex: {
                    val2pre: function(e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[13-9]|1[012])" + n + "[0-3])|(02" + n + "[0-2])")
                    },
                    val2: function(e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + n + "30)|((0[13578]|1[02])" + n + "31)")
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                onKeyDown: function(e, t, n, a) {}
            }
        }), t
    }) ? a.apply(t, i) : a) && (e.exports = r)
}, function(e, t, n) {
    "use strict";
    var a;
    "function" == typeof Symbol && Symbol.iterator, void 0 !== (a = function() {
        return window
    }.call(t, n, t, e)) && (e.exports = a)
}, function(e, t, n) {
    "use strict";
    var a;
    "function" == typeof Symbol && Symbol.iterator, void 0 !== (a = function() {
        return document
    }.call(t, n, t, e)) && (e.exports = a)
}, function(e, t, n) {
    "use strict";
    var a, i, r;
    "function" == typeof Symbol && Symbol.iterator, i = [n(0), n(1)], void 0 !== (r = "function" == typeof(a = function(e, t) {
        return t.extendDefinitions({
            A: {
                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                cardinality: 1,
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                cardinality: 1,
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                cardinality: 1,
                casing: "upper"
            }
        }), t.extendAliases({
            url: {
                definitions: {
                    i: {
                        validator: ".",
                        cardinality: 1
                    }
                },
                mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
                insertMode: !1,
                autoUnmask: !1,
                inputmode: "url"
            },
            ip: {
                mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
                definitions: {
                    i: {
                        validator: function(e, t, n, a, i) {
                            return n - 1 > -1 && "." !== t.buffer[n - 1] ? (e = t.buffer[n - 1] + e, e = n - 2 > -1 && "." !== t.buffer[n - 2] ? t.buffer[n - 2] + e : "0" + e) : e = "00" + e, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)
                        },
                        cardinality: 1
                    }
                },
                onUnMask: function(e, t, n) {
                    return e
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                onBeforePaste: function(e, t) {
                    return (e = e.toLowerCase()).replace("mailto:", "")
                },
                definitions: {
                    "*": {
                        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                        cardinality: 1,
                        casing: "lower"
                    },
                    "-": {
                        validator: "[0-9A-Za-z-]",
                        cardinality: 1,
                        casing: "lower"
                    }
                },
                onUnMask: function(e, t, n) {
                    return e
                },
                inputmode: "email"
            },
            mac: {
                mask: "##:##:##:##:##:##"
            },
            vin: {
                mask: "V{13}9{4}",
                definitions: {
                    V: {
                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                        cardinality: 1,
                        casing: "upper"
                    }
                },
                clearIncomplete: !0,
                autoUnmask: !0
            }
        }), t
    }) ? a.apply(t, i) : a) && (e.exports = r)
}, function(e, t, n) {
    "use strict";
    var a, i, r;
    "function" == typeof Symbol && Symbol.iterator, i = [n(0), n(1)], void 0 !== (r = "function" == typeof(a = function(e, t, n) {
        function a(e, n) {
            for (var a = "", i = 0; i < e.length; i++) t.prototype.definitions[e.charAt(i)] || n.definitions[e.charAt(i)] || n.optionalmarker.start === e.charAt(i) || n.optionalmarker.end === e.charAt(i) || n.quantifiermarker.start === e.charAt(i) || n.quantifiermarker.end === e.charAt(i) || n.groupmarker.start === e.charAt(i) || n.groupmarker.end === e.charAt(i) || n.alternatormarker === e.charAt(i) ? a += "\\" + e.charAt(i) : a += e.charAt(i);
            return a
        }
        return t.extendAliases({
            numeric: {
                mask: function(e) {
                    if (0 !== e.repeat && isNaN(e.integerDigits) && (e.integerDigits = e.repeat), e.repeat = 0, e.groupSeparator === e.radixPoint && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), " " === e.groupSeparator && (e.skipOptionalPartCharacter = n), e.autoGroup = e.autoGroup && "" !== e.groupSeparator, e.autoGroup && ("string" == typeof e.groupSize && isFinite(e.groupSize) && (e.groupSize = parseInt(e.groupSize)), isFinite(e.integerDigits))) {
                        var t = Math.floor(e.integerDigits / e.groupSize),
                            i = e.integerDigits % e.groupSize;
                        e.integerDigits = parseInt(e.integerDigits) + (0 === i ? t - 1 : t), e.integerDigits < 1 && (e.integerDigits = "*")
                    }
                    e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && !1 === e.integerOptional && (e.positionCaretOnClick = "lvp"), e.definitions[";"] = e.definitions["~"], e.definitions[";"].definitionSymbol = "~", !0 === e.numericInput && (e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e.decimalProtect = !1);
                    var r = "[+]";
                    if (r += a(e.prefix, e), !0 === e.integerOptional ? r += "~{1," + e.integerDigits + "}" : r += "~{" + e.integerDigits + "}", e.digits !== n) {
                        e.radixPointDefinitionSymbol = e.decimalProtect ? ":" : e.radixPoint;
                        var o = e.digits.toString().split(",");
                        isFinite(o[0] && o[1] && isFinite(o[1])) ? r += e.radixPointDefinitionSymbol + ";{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional ? r += "[" + e.radixPointDefinitionSymbol + ";{1," + e.digits + "}]" : r += e.radixPointDefinitionSymbol + ";{" + e.digits + "}")
                    }
                    return r += a(e.suffix, e), r += "[-]", e.greedy = !1, r
                },
                placeholder: "",
                greedy: !1,
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                groupSize: 3,
                groupSeparator: "",
                autoGroup: !1,
                allowMinus: !0,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                integerDigits: "+",
                integerOptional: !0,
                prefix: "",
                suffix: "",
                rightAlign: !0,
                decimalProtect: !0,
                min: null,
                max: null,
                step: 1,
                insertMode: !0,
                autoUnmask: !1,
                unmaskAsNumber: !1,
                inputmode: "numeric",
                preValidation: function(t, a, i, r, o) {
                    if ("-" === i || i === o.negationSymbol.front) return !0 === o.allowMinus && (o.isNegative = o.isNegative === n || !o.isNegative, "" === t.join("") || {
                        caret: a,
                        dopost: !0
                    });
                    if (!1 === r && i === o.radixPoint && o.digits !== n && (isNaN(o.digits) || parseInt(o.digits) > 0)) {
                        var s = e.inArray(o.radixPoint, t);
                        if (-1 !== s) return !0 === o.numericInput ? a === s : {
                            caret: s + 1
                        }
                    }
                    return !0
                },
                postValidation: function(a, i, r) {
                    var o = r.suffix.split(""),
                        s = r.prefix.split("");
                    if (i.pos === n && i.caret !== n && !0 !== i.dopost) return i;
                    var l = i.caret !== n ? i.caret : i.pos,
                        c = a.slice();
                    r.numericInput && (l = c.length - l - 1, c = c.reverse());
                    var u = c[l];
                    if (u === r.groupSeparator && (u = c[l += 1]), l === c.length - r.suffix.length - 1 && u === r.radixPoint) return i;
                    u !== n && u !== r.radixPoint && u !== r.negationSymbol.front && u !== r.negationSymbol.back && (c[l] = "?", r.prefix.length > 0 && l >= (!1 === r.isNegative ? 1 : 0) && l < r.prefix.length - 1 + (!1 === r.isNegative ? 1 : 0) ? s[l - (!1 === r.isNegative ? 1 : 0)] = "?" : r.suffix.length > 0 && l >= c.length - r.suffix.length - (!1 === r.isNegative ? 1 : 0) && (o[l - (c.length - r.suffix.length - (!1 === r.isNegative ? 1 : 0))] = "?")), s = s.join(""), o = o.join("");
                    var p = c.join("").replace(s, "");
                    if (p = (p = (p = (p = p.replace(o, "")).replace(new RegExp(t.escapeRegex(r.groupSeparator), "g"), "")).replace(new RegExp("[-" + t.escapeRegex(r.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(t.escapeRegex(r.negationSymbol.back) + "$"), ""), isNaN(r.placeholder) && (p = p.replace(new RegExp(t.escapeRegex(r.placeholder), "g"), "")), p.length > 1 && 1 !== p.indexOf(r.radixPoint) && ("0" === u && (p = p.replace(/^\?/g, "")), p = p.replace(/^0/g, "")), p.charAt(0) === r.radixPoint && "" !== r.radixPoint && !0 !== r.numericInput && (p = "0" + p), "" !== p) {
                        if (p = p.split(""), (!r.digitsOptional || r.enforceDigitsOnBlur && "blur" === i.event) && isFinite(r.digits)) {
                            var f = e.inArray(r.radixPoint, p),
                                d = e.inArray(r.radixPoint, c); - 1 === f && (p.push(r.radixPoint), f = p.length - 1);
                            for (var m = 1; m <= r.digits; m++) r.digitsOptional && (!r.enforceDigitsOnBlur || "blur" !== i.event) || p[f + m] !== n && p[f + m] !== r.placeholder.charAt(0) ? -1 !== d && c[d + m] !== n && (p[f + m] = p[f + m] || c[d + m]) : p[f + m] = i.placeholder || r.placeholder.charAt(0)
                        }
                        if (!0 !== r.autoGroup || "" === r.groupSeparator || u === r.radixPoint && i.pos === n && !i.dopost) p = p.join("");
                        else {
                            var h = p[p.length - 1] === r.radixPoint && i.c === r.radixPoint;
                            p = t(function(e, t) {
                                var n = "";
                                if (n += "(" + t.groupSeparator + "*{" + t.groupSize + "}){*}", "" !== t.radixPoint) {
                                    var a = e.join("").split(t.radixPoint);
                                    a[1] && (n += t.radixPoint + "*{" + a[1].match(/^\d*\??\d*/)[0].length + "}")
                                }
                                return n
                            }(p, r), {
                                numericInput: !0,
                                jitMasking: !0,
                                definitions: {
                                    "*": {
                                        validator: "[0-9?]",
                                        cardinality: 1
                                    }
                                }
                            }).format(p.join("")), h && (p += r.radixPoint), p.charAt(0) === r.groupSeparator && p.substr(1)
                        }
                    }
                    if (r.isNegative && "blur" === i.event && (r.isNegative = "0" !== p), p = s + p, p += o, r.isNegative && (p = r.negationSymbol.front + p, p += r.negationSymbol.back), p = p.split(""), u !== n)
                        if (u !== r.radixPoint && u !== r.negationSymbol.front && u !== r.negationSymbol.back)(l = e.inArray("?", p)) > -1 ? p[l] = u : l = i.caret || 0;
                        else if (u === r.radixPoint || u === r.negationSymbol.front || u === r.negationSymbol.back) {
                        var g = e.inArray(u, p); - 1 !== g && (l = g)
                    }
                    r.numericInput && (l = p.length - l - 1, p = p.reverse());
                    var v = {
                        caret: u === n || i.pos !== n ? l + (r.numericInput ? -1 : 1) : l,
                        buffer: p,
                        refreshFromBuffer: i.dopost || a.join("") !== p.join("")
                    };
                    return v.refreshFromBuffer ? v : i
                },
                onBeforeWrite: function(a, i, r, o) {
                    if (a) switch (a.type) {
                        case "keydown":
                            return o.postValidation(i, {
                                caret: r,
                                dopost: !0
                            }, o);
                        case "blur":
                        case "checkval":
                            var s;
                            if (function(e) {
                                    e.parseMinMaxOptions === n && (null !== e.min && (e.min = e.min.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), null !== e.max && (e.max = e.max.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done")
                                }(o), null !== o.min || null !== o.max) {
                                if (s = o.onUnMask(i.join(""), n, e.extend({}, o, {
                                        unmaskAsNumber: !0
                                    })), null !== o.min && s < o.min) return o.isNegative = o.min < 0, o.postValidation(o.min.toString().replace(".", o.radixPoint).split(""), {
                                    caret: r,
                                    dopost: !0,
                                    placeholder: "0"
                                }, o);
                                if (null !== o.max && s > o.max) return o.isNegative = o.max < 0, o.postValidation(o.max.toString().replace(".", o.radixPoint).split(""), {
                                    caret: r,
                                    dopost: !0,
                                    placeholder: "0"
                                }, o)
                            }
                            return o.postValidation(i, {
                                caret: r,
                                placeholder: "0",
                                event: "blur"
                            }, o);
                        case "_checkval":
                            return {
                                caret: r
                            }
                    }
                },
                regex: {
                    integerPart: function(e, n) {
                        return n ? new RegExp("[" + t.escapeRegex(e.negationSymbol.front) + "+]?") : new RegExp("[" + t.escapeRegex(e.negationSymbol.front) + "+]?\\d+")
                    },
                    integerNPart: function(e) {
                        return new RegExp("[\\d" + t.escapeRegex(e.groupSeparator) + t.escapeRegex(e.placeholder.charAt(0)) + "]+")
                    }
                },
                definitions: {
                    "~": {
                        validator: function(e, a, i, r, o, s) {
                            var l = r ? new RegExp("[0-9" + t.escapeRegex(o.groupSeparator) + "]").test(e) : new RegExp("[0-9]").test(e);
                            if (!0 === l) {
                                if (!0 !== o.numericInput && a.validPositions[i] !== n && "~" === a.validPositions[i].match.def && !s) {
                                    var c = a.buffer.join(""),
                                        u = (c = (c = c.replace(new RegExp("[-" + t.escapeRegex(o.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(t.escapeRegex(o.negationSymbol.back) + "$"), "")).split(o.radixPoint);
                                    u.length > 1 && (u[1] = u[1].replace(/0/g, o.placeholder.charAt(0))), "0" === u[0] && (u[0] = u[0].replace(/0/g, o.placeholder.charAt(0))), c = u[0] + o.radixPoint + u[1] || "";
                                    var p = a._buffer.join("");
                                    for (c === o.radixPoint && (c = p); null === c.match(t.escapeRegex(p) + "$");) p = p.slice(1);
                                    l = (c = (c = c.replace(p, "")).split(""))[i] === n ? {
                                        pos: i,
                                        remove: i
                                    } : {
                                        pos: i
                                    }
                                }
                            } else r || e !== o.radixPoint || a.validPositions[i - 1] !== n || (a.buffer[i] = "0", l = {
                                pos: i + 1
                            });
                            return l
                        },
                        cardinality: 1
                    },
                    "+": {
                        validator: function(e, t, n, a, i) {
                            return i.allowMinus && ("-" === e || e === i.negationSymbol.front)
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    "-": {
                        validator: function(e, t, n, a, i) {
                            return i.allowMinus && e === i.negationSymbol.back
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    ":": {
                        validator: function(e, n, a, i, r) {
                            var o = "[" + t.escapeRegex(r.radixPoint) + "]",
                                s = new RegExp(o).test(e);
                            return s && n.validPositions[a] && n.validPositions[a].match.placeholder === r.radixPoint && (s = {
                                caret: a + 1
                            }), s
                        },
                        cardinality: 1,
                        placeholder: function(e) {
                            return e.radixPoint
                        }
                    }
                },
                onUnMask: function(e, n, a) {
                    if ("" === n && !0 === a.nullable) return n;
                    var i = e.replace(a.prefix, "");
                    return i = (i = i.replace(a.suffix, "")).replace(new RegExp(t.escapeRegex(a.groupSeparator), "g"), ""), "" !== a.placeholder.charAt(0) && (i = i.replace(new RegExp(a.placeholder.charAt(0), "g"), "0")), a.unmaskAsNumber ? ("" !== a.radixPoint && -1 !== i.indexOf(a.radixPoint) && (i = i.replace(t.escapeRegex.call(this, a.radixPoint), ".")), i = (i = i.replace(new RegExp("^" + t.escapeRegex(a.negationSymbol.front)), "-")).replace(new RegExp(t.escapeRegex(a.negationSymbol.back) + "$"), ""), Number(i)) : i
                },
                isComplete: function(e, n) {
                    var a = e.join("");
                    if (e.slice().join("") !== a) return !1;
                    var i = a.replace(n.prefix, "");
                    return i = (i = i.replace(n.suffix, "")).replace(new RegExp(t.escapeRegex(n.groupSeparator), "g"), ""), "," === n.radixPoint && (i = i.replace(t.escapeRegex(n.radixPoint), ".")), isFinite(i)
                },
                onBeforeMask: function(e, a) {
                    if (a.isNegative = n, e = e.toString().charAt(e.length - 1) === a.radixPoint ? e.toString().substr(0, e.length - 1) : e.toString(), "" !== a.radixPoint && isFinite(e)) {
                        var i = e.split("."),
                            r = "" !== a.groupSeparator ? parseInt(a.groupSize) : 0;
                        2 === i.length && (i[0].length > r || i[1].length > r || i[0].length <= r && i[1].length < r) && (e = e.replace(".", a.radixPoint))
                    }
                    var o = e.match(/,/g),
                        s = e.match(/\./g);
                    if (e = s && o ? s.length > o.length ? (e = e.replace(/\./g, "")).replace(",", a.radixPoint) : o.length > s.length ? (e = e.replace(/,/g, "")).replace(".", a.radixPoint) : e.indexOf(".") < e.indexOf(",") ? e.replace(/\./g, "") : e.replace(/,/g, "") : e.replace(new RegExp(t.escapeRegex(a.groupSeparator), "g"), ""), 0 === a.digits && (-1 !== e.indexOf(".") ? e = e.substring(0, e.indexOf(".")) : -1 !== e.indexOf(",") && (e = e.substring(0, e.indexOf(",")))), "" !== a.radixPoint && isFinite(a.digits) && -1 !== e.indexOf(a.radixPoint)) {
                        var l = e.split(a.radixPoint)[1].match(new RegExp("\\d*"))[0];
                        if (parseInt(a.digits) < l.toString().length) {
                            var c = Math.pow(10, parseInt(a.digits));
                            e = e.replace(t.escapeRegex(a.radixPoint), "."), e = (e = Math.round(parseFloat(e) * c) / c).toString().replace(".", a.radixPoint)
                        }
                    }
                    return e
                },
                canClearPosition: function(e, t, n, a, i) {
                    var r = e.validPositions[t],
                        o = r.input !== i.radixPoint || null !== e.validPositions[t].match.fn && !1 === i.decimalProtect || r.input === i.radixPoint && e.validPositions[t + 1] && null === e.validPositions[t + 1].match.fn || isFinite(r.input) || t === n || r.input === i.groupSeparator || r.input === i.negationSymbol.front || r.input === i.negationSymbol.back;
                    return !o || "+" !== r.match.nativeDef && "-" !== r.match.nativeDef || (i.isNegative = !1), o
                },
                onKeyDown: function(n, a, i, r) {
                    var o = e(this);
                    if (n.ctrlKey) switch (n.keyCode) {
                        case t.keyCode.UP:
                            o.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(r.step)), o.trigger("setvalue");
                            break;
                        case t.keyCode.DOWN:
                            o.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(r.step)), o.trigger("setvalue")
                    }
                }
            },
            currency: {
                prefix: "$ ",
                groupSeparator: ",",
                alias: "numeric",
                placeholder: "0",
                autoGroup: !0,
                digits: 2,
                digitsOptional: !1,
                clearMaskOnLostFocus: !1
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                digits: 0,
                radixPoint: ""
            },
            percentage: {
                alias: "numeric",
                digits: 2,
                digitsOptional: !0,
                radixPoint: ".",
                placeholder: "0",
                autoGroup: !1,
                min: 0,
                max: 100,
                suffix: " %",
                allowMinus: !1
            }
        }), t
    }) ? a.apply(t, i) : a) && (e.exports = r)
}, function(e, t, n) {
    "use strict";
    var a, i, r;
    "function" == typeof Symbol && Symbol.iterator, i = [n(0), n(1)], void 0 !== (r = "function" == typeof(a = function(e, t) {
        function n(e, t) {
            var n = (e.mask || e).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
                a = (t.mask || t).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
                i = (e.mask || e).split("#")[0],
                r = (t.mask || t).split("#")[0];
            return 0 === r.indexOf(i) ? -1 : 0 === i.indexOf(r) ? 1 : n.localeCompare(a)
        }
        var a = t.prototype.analyseMask;
        return t.prototype.analyseMask = function(t, n, i) {
            var r = {};
            return i.phoneCodes && (i.phoneCodes && i.phoneCodes.length > 1e3 && (function e(n, a, i) {
                i = i || r, "" !== (a = a || "") && (i[a] = {});
                for (var o = "", s = i[a] || i, l = n.length - 1; l >= 0; l--) s[o = (t = n[l].mask || n[l]).substr(0, 1)] = s[o] || [], s[o].unshift(t.substr(1)), n.splice(l, 1);
                for (var c in s) s[c].length > 500 && e(s[c].slice(), c, s)
            }((t = t.substr(1, t.length - 2)).split(i.groupmarker.end + i.alternatormarker + i.groupmarker.start)), t = function t(n) {
                var a = "",
                    r = [];
                for (var o in n) e.isArray(n[o]) ? 1 === n[o].length ? r.push(o + n[o]) : r.push(o + i.groupmarker.start + n[o].join(i.groupmarker.end + i.alternatormarker + i.groupmarker.start) + i.groupmarker.end) : r.push(o + t(n[o]));
                return 1 === r.length ? a += r[0] : a += i.groupmarker.start + r.join(i.groupmarker.end + i.alternatormarker + i.groupmarker.start) + i.groupmarker.end, a
            }(r)), t = t.replace(/9/g, "\\9")), a.call(this, t, n, i)
        }, t.extendAliases({
            abstractphone: {
                groupmarker: {
                    start: "<",
                    end: ">"
                },
                countrycode: "",
                phoneCodes: [],
                mask: function(e) {
                    return e.definitions = {
                        "#": t.prototype.definitions[9]
                    }, e.phoneCodes.sort(n)
                },
                keepStatic: !0,
                onBeforeMask: function(e, t) {
                    var n = e.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                    return (n.indexOf(t.countrycode) > 1 || -1 === n.indexOf(t.countrycode)) && (n = "+" + t.countrycode + n), n
                },
                onUnMask: function(e, t, n) {
                    return e.replace(/[()#-]/g, "")
                },
                inputmode: "tel"
            }
        }), t
    }) ? a.apply(t, i) : a) && (e.exports = r)
}, function(e, t, n) {
    "use strict";
    var a, i, r;
    "function" == typeof Symbol && Symbol.iterator, i = [n(0), n(1)], void 0 !== (r = "function" == typeof(a = function(e, t) {
        return t.extendAliases({
            Regex: {
                mask: "r",
                greedy: !1,
                repeat: "*",
                regex: null,
                regexTokens: null,
                tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                quantifierFilter: /[0-9]+[^,]/,
                isComplete: function(e, t) {
                    return new RegExp(t.regex, t.casing ? "i" : "").test(e.join(""))
                },
                definitions: {
                    r: {
                        validator: function(t, n, a, i, r) {
                            function o(e, t) {
                                this.matches = [], this.isGroup = e || !1, this.isQuantifier = t || !1, this.quantifier = {
                                    min: 1,
                                    max: 1
                                }, this.repeaterPart = void 0
                            }

                            function s(t, n) {
                                var a = !1;
                                n && (p += "(", d++);
                                for (var i = 0; i < t.matches.length; i++) {
                                    var o = t.matches[i];
                                    if (!0 === o.isGroup) a = s(o, !0);
                                    else if (!0 === o.isQuantifier) {
                                        var c = e.inArray(o, t.matches),
                                            u = t.matches[c - 1],
                                            f = p;
                                        if (isNaN(o.quantifier.max)) {
                                            for (; o.repeaterPart && o.repeaterPart !== p && o.repeaterPart.length > p.length && !(a = s(u, !0)););
                                            (a = a || s(u, !0)) && (o.repeaterPart = p), p = f + o.quantifier.max
                                        } else {
                                            for (var m = 0, h = o.quantifier.max - 1; m < h && !(a = s(u, !0)); m++);
                                            p = f + "{" + o.quantifier.min + "," + o.quantifier.max + "}"
                                        }
                                    } else if (void 0 !== o.matches)
                                        for (var g = 0; g < o.length && !(a = s(o[g], n)); g++);
                                    else {
                                        var v;
                                        if ("[" == o.charAt(0)) {
                                            for (v = p, v += o, b = 0; b < d; b++) v += ")";
                                            a = (x = new RegExp("^(" + v + ")$", r.casing ? "i" : "")).test(l)
                                        } else
                                            for (var y = 0, k = o.length; y < k; y++)
                                                if ("\\" !== o.charAt(y)) {
                                                    v = p, v = (v += o.substr(0, y + 1)).replace(/\|$/, "");
                                                    for (var b = 0; b < d; b++) v += ")";
                                                    var x = new RegExp("^(" + v + ")$", r.casing ? "i" : "");
                                                    if (a = x.test(l)) break
                                                }
                                        p += o
                                    }
                                    if (a) break
                                }
                                return n && (p += ")", d--), a
                            }
                            var l, c, u = n.buffer.slice(),
                                p = "",
                                f = !1,
                                d = 0;
                            null === r.regexTokens && function() {
                                var e, t, n = new o,
                                    a = [];
                                for (r.regexTokens = []; e = r.tokenizer.exec(r.regex);) switch ((t = e[0]).charAt(0)) {
                                    case "(":
                                        a.push(new o(!0));
                                        break;
                                    case ")":
                                        c = a.pop(), a.length > 0 ? a[a.length - 1].matches.push(c) : n.matches.push(c);
                                        break;
                                    case "{":
                                    case "+":
                                    case "*":
                                        var i = new o(!1, !0),
                                            s = (t = t.replace(/[{}]/g, "")).split(","),
                                            l = isNaN(s[0]) ? s[0] : parseInt(s[0]),
                                            u = 1 === s.length ? l : isNaN(s[1]) ? s[1] : parseInt(s[1]);
                                        if (i.quantifier = {
                                                min: l,
                                                max: u
                                            }, a.length > 0) {
                                            var p = a[a.length - 1].matches;
                                            (e = p.pop()).isGroup || ((c = new o(!0)).matches.push(e), e = c), p.push(e), p.push(i)
                                        } else(e = n.matches.pop()).isGroup || ((c = new o(!0)).matches.push(e), e = c), n.matches.push(e), n.matches.push(i);
                                        break;
                                    default:
                                        a.length > 0 ? a[a.length - 1].matches.push(t) : n.matches.push(t)
                                }
                                n.matches.length > 0 && r.regexTokens.push(n)
                            }(), u.splice(a, 0, t), l = u.join("");
                            for (var m = 0; m < r.regexTokens.length; m++) {
                                var h = r.regexTokens[m];
                                if (f = s(h, h.isGroup)) break
                            }
                            return f
                        },
                        cardinality: 1
                    }
                }
            }
        }), t
    }) ? a.apply(t, i) : a) && (e.exports = r)
}, function(e, t, n) {
    "use strict";
    var a, i, r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    i = [n(2), n(1)], void 0 !== (r = "function" == typeof(a = function(e, t) {
        return void 0 === e.fn.inputmask && (e.fn.inputmask = function(n, a) {
            var i, r = this[0];
            if (void 0 === a && (a = {}), "string" == typeof n) switch (n) {
                case "unmaskedvalue":
                    return r && r.inputmask ? r.inputmask.unmaskedvalue() : e(r).val();
                case "remove":
                    return this.each(function() {
                        this.inputmask && this.inputmask.remove()
                    });
                case "getemptymask":
                    return r && r.inputmask ? r.inputmask.getemptymask() : "";
                case "hasMaskedValue":
                    return !(!r || !r.inputmask) && r.inputmask.hasMaskedValue();
                case "isComplete":
                    return !r || !r.inputmask || r.inputmask.isComplete();
                case "getmetadata":
                    return r && r.inputmask ? r.inputmask.getmetadata() : void 0;
                case "setvalue":
                    e(r).val(a), r && void 0 === r.inputmask && e(r).triggerHandler("setvalue");
                    break;
                case "option":
                    if ("string" != typeof a) return this.each(function() {
                        if (void 0 !== this.inputmask) return this.inputmask.option(a)
                    });
                    if (r && void 0 !== r.inputmask) return r.inputmask.option(a);
                    break;
                default:
                    return a.alias = n, i = new t(a), this.each(function() {
                        i.mask(this)
                    })
            } else {
                if ("object" == (void 0 === n ? "undefined" : o(n))) return i = new t(n), void 0 === n.mask && void 0 === n.alias ? this.each(function() {
                    if (void 0 !== this.inputmask) return this.inputmask.option(n);
                    i.mask(this)
                }) : this.each(function() {
                    i.mask(this)
                });
                if (void 0 === n) return this.each(function() {
                    (i = new t(a)).mask(this)
                })
            }
        }), e.fn.inputmask
    }) ? a.apply(t, i) : a) && (e.exports = r)
}]);
window.yii = function(t) {
    var e = {
        reloadableScripts: [],
        clickableSelector: 'a, button, input[type="submit"], input[type="button"], input[type="reset"], input[type="image"]',
        changeableSelector: "select, input, textarea",
        getCsrfParam: function() {
            return t("meta[name=csrf-param]").attr("content")
        },
        getCsrfToken: function() {
            return t("meta[name=csrf-token]").attr("content")
        },
        setCsrfToken: function(e, i) {
            t("meta[name=csrf-param]").attr("content", e), t("meta[name=csrf-token]").attr("content", i)
        },
        refreshCsrfToken: function() {
            var i = e.getCsrfToken();
            i && t('form input[name="' + e.getCsrfParam() + '"]').val(i)
        },
        confirm: function(t, e, i) {
            window.confirm(t) ? !e || e() : !i || i()
        },
        handleAction: function(i, n) {
            var r, a = i.attr("data-form") ? t("#" + i.attr("data-form")) : i.closest("form"),
                o = !i.data("method") && a ? a.attr("method") : i.data("method"),
                c = i.attr("href"),
                s = c && "#" !== c,
                d = i.data("params"),
                l = d && t.isPlainObject(d),
                u = i.data("pjax"),
                p = void 0 !== u && 0 !== u && t.support.pjax,
                f = {};
            if (t.each(["submit", "reset", "elements", "length", "name", "acceptCharset", "action", "enctype", "method", "target"], function(t, e) {
                    l && d.hasOwnProperty(e) && console.error("Parameter name '" + e + "' conflicts with a same named form property. Please use another name.")
                }), p && (void 0 !== (r = i.data("pjax-container")) && r.length || (r = i.closest("[data-pjax-container]").attr("id") ? "#" + i.closest("[data-pjax-container]").attr("id") : ""), r.length || (r = "body"), f = {
                    container: r,
                    push: !!i.data("pjax-push-state"),
                    replace: !!i.data("pjax-replace-state"),
                    scrollTo: i.data("pjax-scrollto"),
                    pushRedirect: i.data("pjax-push-redirect"),
                    replaceRedirect: i.data("pjax-replace-redirect"),
                    skipOuterContainers: i.data("pjax-skip-outer-containers"),
                    timeout: i.data("pjax-timeout"),
                    originalEvent: n,
                    originalTarget: i
                }), void 0 !== o) {
                var m, h, g = !a.length;
                if (g) {
                    s || (c = e.getCurrentUrl()), a = t("<form/>", {
                        method: o,
                        action: c
                    });
                    var v = i.attr("target");
                    if (v && a.attr("target", v), /(get|post)/i.test(o) || (a.append(t("<input/>", {
                            name: "_method",
                            value: o,
                            type: "hidden"
                        })), o = "post", a.attr("method", o)), /post/i.test(o)) {
                        var y = e.getCsrfParam();
                        y && a.append(t("<input/>", {
                            name: y,
                            value: e.getCsrfToken(),
                            type: "hidden"
                        }))
                    }
                    a.hide().appendTo("body")
                } else m = a.attr("method"), a.attr("method", o), s && (h = a.attr("action"), a.attr("action", c));
                var x = a.data("yiiActiveForm");
                x && (x.submitObject = i), l && t.each(d, function(e, i) {
                    a.append(t("<input/>").attr({
                        name: e,
                        value: i,
                        type: "hidden"
                    }))
                }), p && a.on("submit", function(e) {
                    t.pjax.submit(e, f)
                }), a.trigger("submit"), t.when(a.data("yiiSubmitFinalizePromise")).done(function() {
                    g ? a.remove() : (void 0 !== h && a.attr("action", h), a.attr("method", m), l && t.each(d, function(e) {
                        t('input[name="' + e + '"]', a).remove()
                    }))
                })
            } else s ? p ? t.pjax.click(n, f) : window.location.assign(c) : i.is(":submit") && a.length && (p && a.on("submit", function(e) {
                t.pjax.submit(e, f)
            }), a.trigger("submit"))
        },
        getQueryParams: function(e) {
            var i = e.indexOf("?");
            if (i < 0) return {};
            for (var n = t.grep(e.substring(i + 1).split("#")[0].split("&"), function(t) {
                    return "" !== t
                }), r = {}, a = 0, o = n.length; a < o; a++) {
                var c = n[a].split("="),
                    s = decodeURIComponent(c[0].replace(/\+/g, "%20")),
                    d = c.length > 1 ? decodeURIComponent(c[1].replace(/\+/g, "%20")) : "";
                s.length && (void 0 === r[s] ? r[s] = d || "" : (t.isArray(r[s]) || (r[s] = [r[s]]), r[s].push(d || "")))
            }
            return r
        },
        initModule: function(i) {
            (void 0 === i.isActive || i.isActive) && (t.isFunction(i.init) && i.init(), t.each(i, function() {
                t.isPlainObject(this) && e.initModule(this)
            }))
        },
        init: function() {
            var r, a;
            t.ajaxPrefilter(function(t, i, n) {
                !t.crossDomain && e.getCsrfParam() && n.setRequestHeader("X-CSRF-Token", e.getCsrfToken())
            }), e.refreshCsrfToken(), t(document).ajaxComplete(function(t, e) {
                var i = e && e.getResponseHeader("X-Redirect");
                i && window.location.assign(i)
            }), r = {}, t("script[src]").each(function() {
                var t = n(this.src);
                r[t] = !0
            }), t.ajaxPrefilter("script", function(t, e, a) {
                if ("jsonp" != t.dataType) {
                    var o = n(t.url),
                        c = !0 === r[o] && !i(o),
                        s = void 0 !== r[o] && !0 === r[o].xhrDone;
                    c || s ? a.abort() : (void 0 !== r[o] && !0 !== r[o] || (r[o] = {
                        xhrList: [],
                        xhrDone: !1
                    }), a.done(function(t, e, i) {
                        if (!0 !== r[i.yiiUrl].xhrDone) {
                            r[i.yiiUrl].xhrDone = !0;
                            for (var n = 0, a = r[i.yiiUrl].xhrList.length; n < a; n++) {
                                var o = r[i.yiiUrl].xhrList[n];
                                o && o.readyState !== XMLHttpRequest.DONE && o.abort()
                            }
                            r[i.yiiUrl] = !0
                        }
                    }).fail(function(t, e) {
                        if ("abort" !== e) {
                            delete r[t.yiiUrl].xhrList[t.yiiIndex];
                            for (var i = !0, n = 0, a = r[t.yiiUrl].xhrList.length; n < a; n++) r[t.yiiUrl].xhrList[n] && (i = !1);
                            i && delete r[t.yiiUrl]
                        }
                    }), a.yiiIndex = r[o].xhrList.length, a.yiiUrl = o, r[o].xhrList[a.yiiIndex] = a)
                }
            }), t(document).ajaxComplete(function() {
                var e = [];
                t("link[rel=stylesheet]").each(function() {
                    var r = n(this.href);
                    i(r) || (-1 === t.inArray(r, e) ? e.push(r) : t(this).remove())
                })
            }), a = function(i) {
                var n = t(this),
                    r = n.data("method"),
                    a = n.data("confirm"),
                    o = n.data("form");
                return void 0 === r && void 0 === a && void 0 === o || (void 0 !== a && !1 !== a && "" !== a ? t.proxy(e.confirm, this)(a, function() {
                    e.handleAction(n, i)
                }) : e.handleAction(n, i), i.stopImmediatePropagation(), !1)
            }, t(document).on("click.yii", e.clickableSelector, a).on("change.yii", e.changeableSelector, a)
        },
        getBaseCurrentUrl: function() {
            return window.location.protocol + "//" + window.location.host
        },
        getCurrentUrl: function() {
            return window.location.href
        }
    };

    function i(t) {
        for (var i = 0; i < e.reloadableScripts.length; i++) {
            var r = n(e.reloadableScripts[i]);
            if (!0 === new RegExp("^" + (a = r, a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")).split("\\*").join(".+") + "$").test(t)) return !0
        }
        var a;
        return !1
    }

    function n(t) {
        return "/" === t.charAt(0) ? e.getBaseCurrentUrl() + t : t
    }
    return e
}(window.jQuery), window.jQuery(function() {
    window.yii.initModule(window.yii)
});
! function(t) {
    function e(e, a, r) {
        r = y(a, r);
        var i = function(e) {
            var a = r;
            a.container || ((a = t.extend({
                history: !0
            }, r)).container = t(this).attr("data-pjax")), n(e, a)
        };
        return t(e).removeClass("data-pjax"), this.off("click.pjax", e, i).on("click.pjax", e, i)
    }

    function n(e, n, a) {
        a = y(n, a);
        var i = e.currentTarget,
            o = t(i);
        if (0 !== parseInt(o.data("pjax"))) {
            if ("A" !== i.tagName.toUpperCase()) throw "$.fn.pjax or $.pjax.click requires an anchor element";
            if (!(e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || location.protocol !== i.protocol || location.hostname !== i.hostname || i.href.indexOf("#") > -1 && x(i) == x(location) || e.isDefaultPrevented())) {
                var s = {
                        url: i.href,
                        container: o.attr("data-pjax"),
                        target: i
                    },
                    c = t.extend({}, s, a),
                    l = t.Event("pjax:click");
                o.trigger(l, [c]), l.isDefaultPrevented() || (r(c), e.preventDefault(), o.trigger("pjax:clicked", [c]))
            }
        }
    }

    function a(e, n, a) {
        if (!1 === e.result) return !1;
        a = y(n, a);
        var i = e.currentTarget,
            o = t(i);
        if ("FORM" !== i.tagName.toUpperCase()) throw "$.pjax.submit requires a form element";
        var s = {
            type: (o.attr("method") || "GET").toUpperCase(),
            url: o.attr("action"),
            container: o.attr("data-pjax"),
            target: i
        };
        if ("GET" !== s.type && void 0 !== window.FormData) s.data = new FormData(i), s.processData = !1, s.contentType = !1;
        else {
            if (o.find(":file").length) return;
            s.data = o.serializeArray()
        }
        r(t.extend({}, s, a)), e.preventDefault()
    }

    function r(e) {
        e = t.extend(!0, {}, t.ajaxSettings, r.defaults, e), t.isFunction(e.url) && (e.url = e.url());
        var n = v(e.url).hash,
            a = t.type(e.container);
        if ("string" !== a) throw "expected string value for 'container' option; got " + a;
        var i, s = e.context = t(e.container);
        if (!s.length) throw "the container selector '" + e.container + "' did not match anything";

        function c(n, a, r) {
            r || (r = {}), r.relatedTarget = e.target;
            var i = t.Event(n, r);
            return s.trigger(i, a), !i.isDefaultPrevented()
        }
        if (e.data || (e.data = {}), t.isArray(e.data) ? (e.data = t.grep(e.data, function(t) {
                return "_pjax" !== t.name
            }), e.data.push({
                name: "_pjax",
                value: e.container
            })) : e.data._pjax = e.container, e.beforeSend = function(t, a) {
                if ("GET" !== a.type && (a.timeout = 0), t.setRequestHeader("X-PJAX", "true"), t.setRequestHeader("X-PJAX-Container", e.container), a.ieRedirectCompatibility) {
                    var r = window.navigator.userAgent;
                    (r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0 || r.indexOf("Edge/") > 0) && t.setRequestHeader("X-Ie-Redirect-Compatibility", "true")
                }
                if (!c("pjax:beforeSend", [t, a])) return !1;
                a.timeout > 0 && (i = setTimeout(function() {
                    c("pjax:timeout", [t, e]) && t.abort("timeout")
                }, a.timeout), a.timeout = 0);
                var o = v(a.url);
                n && (o.hash = n), e.requestUrl = m(o), void 0 === e.async || e.async || (c("pjax:start", [t, e]), c("pjax:send", [t, e]))
            }, e.complete = function(t, n) {
                i && clearTimeout(i), c("pjax:complete", [t, n, e]), c("pjax:end", [t, e])
            }, e.error = function(t, n, a) {
                var r = w("", t, e),
                    i = t.status >= 301 && t.status <= 303,
                    s = i || c("pjax:error", [t, n, a, e]);
                (i || "GET" == e.type && "abort" !== n && s) && (e.replaceRedirect ? o(r.url) : e.pushRedirect && (window.history.pushState(null, "", r.url), window.location.replace(r.url)))
            }, e.success = function(a, i, l) {
                var u = r.state,
                    p = "function" == typeof t.pjax.defaults.version ? t.pjax.defaults.version() : t.pjax.defaults.version,
                    f = l.getResponseHeader("X-PJAX-Version"),
                    h = w(a, l, e),
                    m = v(h.url);
                if (n && (m.hash = n, h.url = m.href), p && f && p !== f) o(h.url);
                else if (h.contents) {
                    if (r.state = {
                            id: e.id || d(),
                            url: h.url,
                            title: h.title,
                            container: e.container,
                            fragment: e.fragment,
                            timeout: e.timeout,
                            cache: e.cache
                        }, e.history && (e.push || e.replace) && window.history.replaceState(r.state, h.title, h.url), t.contains(s, document.activeElement)) try {
                        document.activeElement.blur()
                    } catch (t) {}
                    h.title && (document.title = h.title), c("pjax:beforeReplace", [h.contents, e], {
                        state: r.state,
                        previousState: u
                    }), s.html(h.contents);
                    var x = s.find("input[autofocus], textarea[autofocus]").last()[0];
                    if (x && document.activeElement !== x && x.focus(), function(e, n) {
                            if (!e) return;
                            var a = t("script[src]"),
                                r = 0,
                                i = function() {
                                    if (!(r >= e.length)) {
                                        var o = e[r];
                                        r++,
                                        function(e) {
                                            var r = this.src;
                                            if (a.filter(function() {
                                                    return this.src === r
                                                }).length) return void e();
                                            r ? (t.getScript(r).done(e).fail(e), document.head.appendChild(this)) : (n.append(this), e())
                                        }.call(o, i)
                                    }
                                };
                            i()
                        }(h.scripts, s), function(e) {
                            if (!e) return;
                            var n = t("link[href]");
                            e.each(function() {
                                var t = this.href,
                                    e = n.filter(function() {
                                        return this.href === t
                                    });
                                e.length || document.head.appendChild(this)
                            })
                        }(h.links), "function" == typeof e.scrollTo) var y = e.scrollTo(s, n);
                    else {
                        y = e.scrollTo;
                        if (n || !0 === y) {
                            var g = decodeURIComponent(n.slice(1)),
                                j = !0 === y ? s : document.getElementById(g) || document.getElementsByName(g)[0];
                            j && (y = t(j).offset().top)
                        }
                    }
                    if ("function" == typeof e.scrollOffset) var b = e.scrollOffset(y);
                    else b = e.scrollOffset;
                    "number" == typeof y && ((y += b) < 0 && (y = 0), t(window).scrollTop(y)), c("pjax:success", [a, i, l, e])
                } else o(h.url)
            }, r.state || (r.state = {
                id: d(),
                url: window.location.href,
                title: document.title,
                container: e.container,
                fragment: e.fragment,
                timeout: e.timeout,
                cache: e.cache
            }, e.history && window.history.replaceState(r.state, document.title)), !(r.xhr && r.xhr.readyState < 4 && r.options.skipOuterContainers)) {
            f(r.xhr), r.options = e;
            var l = r.xhr = t.ajax(e);
            return l.readyState > 0 && (e.history && e.push && !e.replace && (! function(t, e) {
                if (!r.options.cache) return;
                b[t] = e, E.push(t), S(T, 0), S(E, r.defaults.maxCacheLength)
            }(r.state.id, [e.container, h(s)]), window.history.pushState(null, "", e.requestUrl)), (void 0 === e.async || e.async) && (c("pjax:start", [l, e]), c("pjax:send", [l, e]))), r.xhr
        }
    }

    function i(e, n) {
        var a = {
            url: window.location.href,
            push: !1,
            replace: !0,
            scrollTo: !1
        };
        return r(t.extend(a, y(e, n)))
    }

    function o(t) {
        r.options.history && (window.history.replaceState(null, "", r.state.url), window.location.replace(t))
    }
    var s = !0,
        c = window.location.href,
        l = window.history.state;

    function u(e) {
        s || f(r.xhr);
        var n, a = r.state,
            i = e.state;
        if (i && i.container) {
            if (s && c == i.url) return;
            if (a) {
                if (a.id === i.id) return;
                n = a.id < i.id ? "forward" : "back"
            }
            var l = b[i.id] || [],
                u = l[0] || i.container,
                p = t(u),
                d = l[1];
            if (p.length) {
                var m = {
                    id: i.id,
                    url: i.url,
                    container: u,
                    push: !1,
                    fragment: i.fragment,
                    timeout: i.timeout,
                    cache: i.cache,
                    scrollTo: !1
                };
                a && m.cache && function(t, e, n) {
                    var a, i;
                    b[e] = n, "forward" === t ? (a = E, i = T) : (a = T, i = E);
                    a.push(e), (e = i.pop()) && delete b[e];
                    S(a, r.defaults.maxCacheLength)
                }(n, a.id, [u, h(p)]);
                var v = t.Event("pjax:popstate", {
                    state: i,
                    direction: n
                });
                if (p.trigger(v), d) {
                    p.trigger("pjax:start", [null, m]), r.state = i, i.title && (document.title = i.title);
                    var x = t.Event("pjax:beforeReplace", {
                        state: i,
                        previousState: a
                    });
                    p.trigger(x, [d, m]), p.html(d), p.trigger("pjax:end", [null, m])
                } else r(m);
                p[0].offsetHeight
            } else o(location.href)
        }
        s = !1
    }

    function p(e) {
        var n = t.isFunction(e.url) ? e.url() : e.url,
            a = e.type ? e.type.toUpperCase() : "GET",
            r = t("<form>", {
                method: "GET" === a ? "GET" : "POST",
                action: n,
                style: "display:none"
            });
        "GET" !== a && "POST" !== a && r.append(t("<input>", {
            type: "hidden",
            name: "_method",
            value: a.toLowerCase()
        }));
        var i = e.data;
        if ("string" == typeof i) t.each(i.split("&"), function(e, n) {
            var a = n.split("=");
            r.append(t("<input>", {
                type: "hidden",
                name: a[0],
                value: a[1]
            }))
        });
        else if (t.isArray(i)) t.each(i, function(e, n) {
            r.append(t("<input>", {
                type: "hidden",
                name: n.name,
                value: n.value
            }))
        });
        else if ("object" == typeof i) {
            var o;
            for (o in i) r.append(t("<input>", {
                type: "hidden",
                name: o,
                value: i[o]
            }))
        }
        t(document.body).append(r), r.submit()
    }

    function f(e) {
        e && e.readyState < 4 && (e.onreadystatechange = t.noop, e.abort())
    }

    function d() {
        return (new Date).getTime()
    }

    function h(e) {
        var n = e.clone();
        return n.find("script").each(function() {
            this.src || t._data(this, "globalEval", !1)
        }), n.contents()
    }

    function m(t) {
        return t.search = t.search.replace(/([?&])(_pjax|_)=[^&]*/g, "").replace(/^&/, ""), t.href.replace(/\?($|#)/, "$1")
    }

    function v(t) {
        var e = document.createElement("a");
        return e.href = t, e
    }

    function x(t) {
        return t.href.replace(/#.*/, "")
    }

    function y(e, n) {
        return e && n ? ((n = t.extend({}, n)).container = e, n) : t.isPlainObject(e) ? e : {
            container: e
        }
    }

    function g(t, e) {
        return t.filter(e).add(t.find(e))
    }

    function j(e) {
        return t.parseHTML(e, document, !0)
    }

    function w(e, n, a) {
        var r, i, o = {},
            s = /<html/i.test(e),
            c = n.getResponseHeader("X-PJAX-URL");
        if (o.url = c ? m(v(c)) : a.requestUrl, s) {
            i = t(j(e.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));
            var l = e.match(/<head[^>]*>([\s\S.]*)<\/head>/i);
            r = null != l ? t(j(l[0])) : i
        } else r = i = t(j(e));
        if (0 === i.length) return o;
        if (o.title = g(r, "title").last().text(), a.fragment) {
            var u = i;
            "body" !== a.fragment && (u = g(u, a.fragment).first()), u.length && (o.contents = "body" === a.fragment ? u : u.contents(), o.title || (o.title = u.attr("title") || u.data("title")))
        } else s || (o.contents = i);
        return o.contents && (o.contents = o.contents.not(function() {
            return t(this).is("title")
        }), o.contents.find("title").remove(), o.scripts = g(o.contents, "script").remove(), o.contents = o.contents.not(o.scripts), o.links = g(o.contents, "link[href]").remove(), o.contents = o.contents.not(o.links)), o.title && (o.title = t.trim(o.title)), o
    }
    l && l.container && (r.state = l), "state" in window.history && (s = !1);
    var b = {},
        T = [],
        E = [];

    function S(t, e) {
        for (; t.length > e;) delete b[t.shift()]
    }

    function C() {
        return t("meta").filter(function() {
            var e = t(this).attr("http-equiv");
            return e && "X-PJAX-VERSION" === e.toUpperCase()
        }).attr("content")
    }

    function R() {
        t.fn.pjax = e, t.pjax = r, t.pjax.enable = t.noop, t.pjax.disable = k, t.pjax.click = n, t.pjax.submit = a, t.pjax.reload = i, t.pjax.defaults = {
            history: !0,
            cache: !0,
            timeout: 650,
            push: !0,
            replace: !1,
            type: "GET",
            dataType: "html",
            scrollTo: 0,
            scrollOffset: 0,
            maxCacheLength: 20,
            version: C,
            pushRedirect: !1,
            replaceRedirect: !0,
            skipOuterContainers: !1,
            ieRedirectCompatibility: !0
        }, t(window).on("popstate.pjax", u)
    }

    function k() {
        t.fn.pjax = function() {
            return this
        }, t.pjax = p, t.pjax.enable = R, t.pjax.disable = t.noop, t.pjax.click = t.noop, t.pjax.submit = t.noop, t.pjax.reload = function() {
            window.location.reload()
        }, t(window).off("popstate.pjax", u)
    }
    t.event.props && t.inArray("state", t.event.props) < 0 ? t.event.props.push("state") : "state" in t.Event.prototype || t.event.addProp("state"), t.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/), t.support.pjax ? R() : k()
}(jQuery);
! function(t) {
    t.fn.yiiActiveForm = function(i) {
        return f[i] ? f[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? (t.error("Method " + i + " does not exist on jQuery.yiiActiveForm"), !1) : f.init.apply(this, arguments)
    };
    var i, e = "beforeValidate",
        a = "afterValidate",
        r = "beforeValidateAttribute",
        n = "afterValidateAttribute",
        s = "beforeSubmit",
        o = "ajaxBeforeSend",
        u = "ajaxComplete",
        l = "afterInit",
        d = {
            encodeErrorSummary: !0,
            errorSummary: ".error-summary",
            validateOnSubmit: !0,
            errorCssClass: "has-error",
            successCssClass: "has-success",
            validatingCssClass: "validating",
            ajaxParam: "ajax",
            ajaxDataType: "json",
            validationUrl: void 0,
            scrollToError: !0,
            scrollToErrorOffset: 0,
            validationStateOn: "container"
        },
        c = {
            id: void 0,
            name: void 0,
            container: void 0,
            input: void 0,
            error: ".help-block",
            encodeError: !0,
            validateOnChange: !0,
            validateOnBlur: !0,
            validateOnType: !1,
            validationDelay: 500,
            enableAjaxValidation: !1,
            validate: void 0,
            status: 0,
            cancelled: !1,
            value: void 0,
            updateAriaInvalid: !0
        },
        v = function(t) {
            i && (i.resolve(), i = void 0, t.removeData("yiiSubmitFinalizePromise"))
        },
        f = {
            init: function(i, e) {
                return this.each(function() {
                    var a = t(this);
                    if (!a.data("yiiActiveForm")) {
                        var r = t.extend({}, d, e || {});
                        void 0 === r.validationUrl && (r.validationUrl = a.attr("action")), t.each(i, function(e) {
                            i[e] = t.extend({
                                value: S(a, this)
                            }, c, this), h(a, i[e])
                        }), a.data("yiiActiveForm", {
                            settings: r,
                            attributes: i,
                            submitting: !1,
                            validated: !1,
                            validate_only: !1,
                            options: F(a)
                        }), a.on("reset.yiiActiveForm", f.resetForm), r.validateOnSubmit && (a.on("mouseup.yiiActiveForm keyup.yiiActiveForm", ":submit", function() {
                            a.data("yiiActiveForm").submitObject = t(this)
                        }), a.on("submit.yiiActiveForm", f.submitForm));
                        var n = t.Event(l);
                        a.trigger(n)
                    }
                })
            },
            add: function(i) {
                var e = t(this);
                i = t.extend({
                    value: S(e, i)
                }, c, i), e.data("yiiActiveForm").attributes.push(i), h(e, i)
            },
            remove: function(i) {
                var e = t(this),
                    a = e.data("yiiActiveForm").attributes,
                    r = -1,
                    n = void 0;
                return t.each(a, function(t) {
                    if (a[t].id == i) return r = t, n = a[t], !1
                }), r >= 0 && (a.splice(r, 1), m(e, n)), n
            },
            validateAttribute: function(i) {
                var e = f.find.call(this, i);
                null != e && g(t(this), e, !0)
            },
            find: function(i) {
                var e = t(this).data("yiiActiveForm").attributes,
                    a = void 0;
                return t.each(e, function(t) {
                    if (e[t].id == i) return a = e[t], !1
                }), a
            },
            destroy: function() {
                return this.each(function() {
                    t(this).off(".yiiActiveForm"), t(this).removeData("yiiActiveForm")
                })
            },
            data: function() {
                return this.data("yiiActiveForm")
            },
            validate: function(i) {
                i && (t(this).data("yiiActiveForm").submitting = !0);
                var a = t(this),
                    n = a.data("yiiActiveForm"),
                    s = !1,
                    l = {},
                    d = A(),
                    c = n.submitting;
                if (c) {
                    var f = t.Event(e);
                    if (a.trigger(f, [l, d]), !1 === f.result) return n.submitting = !1, void v(a)
                }
                t.each(n.attributes, function() {
                    this.$form = a;
                    var i = E(a, this);
                    if (i.toArray().reduce(function(i, e) {
                            return i && t(e).is(":disabled")
                        }, !0)) return !0;
                    if (i.length && "select" === i[0].tagName.toLowerCase()) {
                        var e = i[0].options,
                            o = !e || !e.length,
                            u = i.attr("required"),
                            c = i.attr("multiple"),
                            v = i.attr("size") || 1;
                        if (u && !c && 1 === parseInt(v, 10)) {
                            if (o) return !0;
                            if (e[0] && "" !== e[0].value && "" !== e[0].text) return !0
                        }
                    }
                    if (this.cancelled = !1, n.submitting || 2 === this.status || 3 === this.status) {
                        var f = l[this.id];
                        void 0 === f && (f = [], l[this.id] = f);
                        var h = t.Event(r);
                        a.trigger(h, [this, f, d]), !1 !== h.result ? (this.validate && this.validate(this, S(a, this), f, d, a), this.enableAjaxValidation && (s = !0)) : this.cancelled = !0
                    }
                }), t.when.apply(this, d).always(function() {
                    for (var i in l) 0 === l[i].length && delete l[i];
                    if (s && (t.isEmptyObject(l) || n.submitting)) {
                        var e = n.submitObject,
                            r = "&" + n.settings.ajaxParam + "=" + a.attr("id");
                        e && e.length && e.attr("name") && (r += "&" + e.attr("name") + "=" + e.attr("value")), t.ajax({
                            url: n.settings.validationUrl,
                            type: a.attr("method"),
                            data: a.serialize() + r,
                            dataType: n.settings.ajaxDataType,
                            complete: function(t, i) {
                                a.trigger(u, [t, i])
                            },
                            beforeSend: function(t, i) {
                                a.trigger(o, [t, i])
                            },
                            success: function(i) {
                                null !== i && "object" == typeof i ? (t.each(n.attributes, function() {
                                    this.enableAjaxValidation && !this.cancelled || delete i[this.id]
                                }), j(a, t.extend(l, i), c)) : j(a, l, c)
                            },
                            error: function() {
                                n.submitting = !1, v(a)
                            }
                        })
                    } else n.submitting ? window.setTimeout(function() {
                        j(a, l, c)
                    }, 200) : j(a, l, c)
                })
            },
            submitForm: function() {
                var e = t(this),
                    a = e.data("yiiActiveForm");
                if (a.validated) {
                    a.submitting = !1;
                    var r = t.Event(s);
                    return e.trigger(r), !1 === r.result ? (a.validated = !1, v(e), !1) : (O(e), !0)
                }
                return function(e) {
                    i = t.Deferred(), e.data("yiiSubmitFinalizePromise", i.promise())
                }(e), void 0 !== a.settings.timer && clearTimeout(a.settings.timer), a.submitting = !0, f.validate.call(e), !1
            },
            resetForm: function() {
                var i = t(this),
                    e = i.data("yiiActiveForm");
                window.setTimeout(function() {
                    t.each(e.attributes, function() {
                        this.value = S(i, this), this.status = 0;
                        var t = i.find(this.container),
                            a = E(i, this);
                        ("input" === e.settings.validationStateOn ? a : t).removeClass(e.settings.validatingCssClass + " " + e.settings.errorCssClass + " " + e.settings.successCssClass), t.find(this.error).html("")
                    }), i.find(e.settings.errorSummary).hide().find("ul").html("")
                }, 1)
            },
            updateMessages: function(i, e) {
                var a = t(this),
                    r = a.data("yiiActiveForm");
                t.each(r.attributes, function() {
                    w(a, this, i)
                }), e && T(a, i)
            },
            updateAttribute: function(i, e) {
                var a = f.find.call(this, i);
                if (null != a) {
                    var r = {};
                    r[i] = e, w(t(this), a, r)
                }
            }
        },
        h = function(i, e) {
            var a = E(i, e);
            e.validateOnChange && a.on("change.yiiActiveForm", function() {
                g(i, e, !1)
            }), e.validateOnBlur && a.on("blur.yiiActiveForm", function() {
                0 != e.status && 1 != e.status || g(i, e, !0)
            }), e.validateOnType && a.on("keyup.yiiActiveForm", function(a) {
                -1 === t.inArray(a.which, [16, 17, 18, 37, 38, 39, 40]) && e.value !== S(i, e) && g(i, e, !1, e.validationDelay)
            })
        },
        m = function(t, i) {
            E(t, i).off(".yiiActiveForm")
        },
        g = function(i, e, a, r) {
            var n = i.data("yiiActiveForm");
            a && (e.status = 2), t.each(n.attributes, function() {
                y(this.value, S(i, this)) || (this.status = 2, a = !0)
            }), a && (void 0 !== n.settings.timer && clearTimeout(n.settings.timer), n.settings.timer = window.setTimeout(function() {
                n.submitting || i.is(":hidden") || (t.each(n.attributes, function() {
                    if (2 === this.status) {
                        this.status = 3;
                        var t = i.find(this.container),
                            e = E(i, this);
                        ("input" === n.settings.validationStateOn ? e : t).addClass(n.settings.validatingCssClass)
                    }
                }), f.validate.call(i))
            }, r || 200))
        },
        y = function(t, i) {
            return t instanceof Object ? b(t, i) : Array.isArray(t) ? p(t, i) : t === i
        },
        b = function(t, i) {
            if (!(t instanceof Object && i instanceof Object)) return !1;
            var e = Object.keys(t),
                a = Object.keys(i);
            if (e.length !== a.length) return !1;
            for (var r = 0; r < e.length; r += 1) {
                if (!i.hasOwnProperty(e[r])) return !1;
                if (t[e[r]] !== i[e[r]]) return !1
            }
            return !0
        },
        p = function(t, i) {
            if (!Array.isArray(t) || !Array.isArray(i)) return !1;
            if (t.length !== i.length) return !1;
            for (var e = 0; e < t.length; e += 1)
                if (t[e] !== i[e]) return !1;
            return !0
        },
        A = function() {
            var i = [];
            return i.add = function(i) {
                this.push(new t.Deferred(i))
            }, i
        },
        C = ["action", "target", "method", "enctype"],
        F = function(t) {
            for (var i = {}, e = 0; e < C.length; e++) i[C[e]] = t.attr(C[e]);
            return i
        },
        j = function(i, e, r) {
            var n = i.data("yiiActiveForm");
            if (void 0 === n) return !1;
            var s = [];
            if (t.each(n.attributes, function() {
                    var t = r && w(i, this, e) || !r && x(i, this, e);
                    E(i, this).is(":disabled") || this.cancelled || !t || s.push(this)
                }), i.trigger(a, [e, s]), r)
                if (T(i, e), s.length) {
                    if (n.settings.scrollToError) {
                        var o = t(document).height(),
                            u = i.find(t.map(s, function(t) {
                                return t.input
                            }).join(",")).first().closest(":visible").offset().top - n.settings.scrollToErrorOffset;
                        u = u < 0 ? 0 : u > o ? o : u;
                        var l = t(window).scrollTop();
                        (u < l || u > l + t(window).height()) && t(window).scrollTop(u)
                    }
                    n.submitting = !1
                } else n.validated = !0, n.validate_only || (n.submitObject && function(t, i) {
                    for (var e = 0; e < C.length; e++) {
                        var a = i.attr("form" + C[e]);
                        a && t.attr(C[e], a)
                    }
                }(i, n.submitObject), i.submit(), n.submitObject && function(t) {
                    for (var i = t.data("yiiActiveForm"), e = 0; e < C.length; e++) t.attr(C[e], i.options[C[e]] || null)
                }(i));
            else t.each(n.attributes, function() {
                this.cancelled || 2 !== this.status && 3 !== this.status || w(i, this, e)
            });
            v(i)
        },
        O = function(i) {
            var e = i.data("yiiActiveForm").submitObject || i.find(":submit:first");
            if (e.length && "submit" == e.attr("type") && e.attr("name")) {
                var a = t('input[type="hidden"][name="' + e.attr("name") + '"]', i);
                a.length ? a.attr("value", e.attr("value")) : t("<input>").attr({
                    type: "hidden",
                    name: e.attr("name"),
                    value: e.attr("value")
                }).appendTo(i)
            }
        },
        w = function(i, e, a) {
            var r = i.data("yiiActiveForm"),
                s = E(i, e),
                o = x(i, e, a);
            if (t.isArray(a[e.id]) || (a[e.id] = []), e.status = 1, s.length) {
                var u = i.find(e.container),
                    l = u.find(e.error);
                D(i, e, o);
                var d = "input" === r.settings.validationStateOn ? s : u;
                o ? (e.encodeError ? l.text(a[e.id][0]) : l.html(a[e.id][0]), d.removeClass(r.settings.validatingCssClass + " " + r.settings.successCssClass).addClass(r.settings.errorCssClass)) : (l.empty(), d.removeClass(r.settings.validatingCssClass + " " + r.settings.errorCssClass + " ").addClass(r.settings.successCssClass)), e.value = S(i, e)
            }
            return i.trigger(n, [e, a[e.id]]), o
        },
        x = function(i, e, a) {
            var r = E(i, e),
                n = !1;
            return t.isArray(a[e.id]) || (a[e.id] = []), r.length && (n = a[e.id].length > 0), n
        },
        T = function(i, e) {
            var a = i.data("yiiActiveForm"),
                r = i.find(a.settings.errorSummary),
                n = r.find("ul").empty();
            r.length && e && (t.each(a.attributes, function() {
                if (t.isArray(e[this.id]) && e[this.id].length) {
                    var i = t("<li/>");
                    a.settings.encodeErrorSummary ? i.text(e[this.id][0]) : i.html(e[this.id][0]), n.append(i)
                }
            }), r.toggle(n.find("li").length > 0))
        },
        S = function(i, e) {
            var a = E(i, e),
                r = a.attr("type");
            if ("checkbox" === r || "radio" === r) {
                var n = a.filter(":checked");
                if (n.length > 1) {
                    var s = [];
                    return n.each(function(i) {
                        s.push(t(n.get(i)).val())
                    }), s
                }
                return n.length || (n = i.find('input[type=hidden][name="' + a.attr("name") + '"]')), n.val()
            }
            return a.val()
        },
        E = function(t, i) {
            var e = t.find(i.input);
            return e.length && "div" === e[0].tagName.toLowerCase() ? e.find("input") : e
        },
        D = function(t, i, e) {
            i.updateAriaInvalid && t.find(i.input).attr("aria-invalid", e ? "true" : "false")
        }
}(window.jQuery);
yii.validation = function(e) {
    var a = {
        isEmpty: function(a) {
            return null == a || e.isArray(a) && 0 === a.length || "" === a
        },
        addMessage: function(e, a, s) {
            e.push(a.replace(/\{value\}/g, s))
        },
        required: function(e, s, t) {
            var i = !1;
            if (void 0 === t.requiredValue) {
                var r = "string" == typeof e || e instanceof String;
                (t.strict && void 0 !== e || !t.strict && !a.isEmpty(r ? n(e) : e)) && (i = !0)
            } else(!t.strict && e == t.requiredValue || t.strict && e === t.requiredValue) && (i = !0);
            i || a.addMessage(s, t.message, e)
        },
        boolean: function(e, s, t) {
            t.skipOnEmpty && a.isEmpty(e) || (!t.strict && (e == t.trueValue || e == t.falseValue) || t.strict && (e === t.trueValue || e === t.falseValue) || a.addMessage(s, t.message, e))
        },
        string: function(e, s, t) {
            t.skipOnEmpty && a.isEmpty(e) || ("string" == typeof e ? void 0 === t.is || e.length == t.is ? (void 0 !== t.min && e.length < t.min && a.addMessage(s, t.tooShort, e), void 0 !== t.max && e.length > t.max && a.addMessage(s, t.tooLong, e)) : a.addMessage(s, t.notEqual, e) : a.addMessage(s, t.message, e))
        },
        file: function(a, n, i) {
            var r = s(a, n, i);
            e.each(r, function(e, a) {
                t(a, n, i)
            })
        },
        image: function(n, i, r, o) {
            var l = s(n, i, r);
            e.each(l, function(s, n) {
                if (t(n, i, r), "undefined" != typeof FileReader) {
                    var l = e.Deferred();
                    a.validateImage(n, i, r, l, new FileReader, new Image), o.push(l)
                }
            })
        },
        validateImage: function(e, a, s, t, n, i) {
            i.onload = function() {
                ! function(e, a, s, t) {
                    t.minWidth && a.width < t.minWidth && s.push(t.underWidth.replace(/\{file\}/g, e.name));
                    t.maxWidth && a.width > t.maxWidth && s.push(t.overWidth.replace(/\{file\}/g, e.name));
                    t.minHeight && a.height < t.minHeight && s.push(t.underHeight.replace(/\{file\}/g, e.name));
                    t.maxHeight && a.height > t.maxHeight && s.push(t.overHeight.replace(/\{file\}/g, e.name))
                }(e, i, a, s), t.resolve()
            }, i.onerror = function() {
                a.push(s.notImage.replace(/\{file\}/g, e.name)), t.resolve()
            }, n.onload = function() {
                i.src = this.result
            }, n.onerror = function() {
                t.resolve()
            }, n.readAsDataURL(e)
        },
        number: function(e, s, t) {
            t.skipOnEmpty && a.isEmpty(e) || ("string" != typeof e || t.pattern.test(e) ? (void 0 !== t.min && e < t.min && a.addMessage(s, t.tooSmall, e), void 0 !== t.max && e > t.max && a.addMessage(s, t.tooBig, e)) : a.addMessage(s, t.message, e))
        },
        range: function(s, t, n) {
            if (!n.skipOnEmpty || !a.isEmpty(s))
                if (n.allowArray || !e.isArray(s)) {
                    var i = !0;
                    e.each(e.isArray(s) ? s : [s], function(a, s) {
                        return -1 != e.inArray(s, n.range) || (i = !1, !1)
                    }), void 0 === n.not && (n.not = !1), n.not === i && a.addMessage(t, n.message, s)
                } else a.addMessage(t, n.message, s)
        },
        regularExpression: function(e, s, t) {
            t.skipOnEmpty && a.isEmpty(e) || (!t.not && !t.pattern.test(e) || t.not && t.pattern.test(e)) && a.addMessage(s, t.message, e)
        },
        email: function(e, s, t) {
            if (!t.skipOnEmpty || !a.isEmpty(e)) {
                var n = !0,
                    i = /^((?:"?([^"]*)"?\s)?)(?:\s+)?(?:(<?)((.+)@([^>]+))(>?))$/.exec(e);
                if (null === i) n = !1;
                else {
                    var r = i[5],
                        o = i[6];
                    t.enableIDN && (r = punycode.toASCII(r), o = punycode.toASCII(o), e = i[1] + i[3] + r + "@" + o + i[7]), n = !(r.length > 64) && (!((r + "@" + o).length > 254) && (t.pattern.test(e) || t.allowName && t.fullPattern.test(e)))
                }
                n || a.addMessage(s, t.message, e)
            }
        },
        url: function(e, s, t) {
            if (!t.skipOnEmpty || !a.isEmpty(e)) {
                t.defaultScheme && !/:\/\//.test(e) && (e = t.defaultScheme + "://" + e);
                var n = !0;
                if (t.enableIDN) {
                    var i = /^([^:]+):\/\/([^\/]+)(.*)$/.exec(e);
                    null === i ? n = !1 : e = i[1] + "://" + punycode.toASCII(i[2]) + i[3]
                }
                n && t.pattern.test(e) || a.addMessage(s, t.message, e)
            }
        },
        trim: function(e, s, t, i) {
            var r = e.find(s.input);
            if (r.is(":checkbox, :radio")) return i;
            if (i = r.val(), !(t.skipOnEmpty && a.isEmpty(i) || t.skipOnArray && Array.isArray(i))) {
                if (Array.isArray(i))
                    for (var o = 0; o < i.length; o++) i[o] = n(i[o], t);
                else i = n(i, t);
                r.val(i)
            }
            return i
        },
        captcha: function(s, t, n) {
            if (!n.skipOnEmpty || !a.isEmpty(s)) {
                var i = e("body").data(n.hashKey);
                i = null == i ? n.hash : i[n.caseSensitive ? 0 : 1];
                for (var r = n.caseSensitive ? s : s.toLowerCase(), o = r.length - 1, l = 0; o >= 0; --o) l += r.charCodeAt(o) << o;
                l != i && a.addMessage(t, n.message, s)
            }
        },
        compare: function(s, t, n, i) {
            if (!n.skipOnEmpty || !a.isEmpty(s)) {
                var r, o = !0;
                if (void 0 === n.compareAttribute) r = n.compareValue;
                else {
                    var l = e("#" + n.compareAttribute);
                    l.length || (l = i.find('[name="' + n.compareAttributeName + '"]')), r = l.val()
                }
                switch ("number" === n.type && (s = s ? parseFloat(s) : 0, r = r ? parseFloat(r) : 0), n.operator) {
                    case "==":
                        o = s == r;
                        break;
                    case "===":
                        o = s === r;
                        break;
                    case "!=":
                        o = s != r;
                        break;
                    case "!==":
                        o = s !== r;
                        break;
                    case ">":
                        o = s > r;
                        break;
                    case ">=":
                        o = s >= r;
                        break;
                    case "<":
                        o = s < r;
                        break;
                    case "<=":
                        o = s <= r;
                        break;
                    default:
                        o = !1
                }
                o || a.addMessage(t, n.message, s)
            }
        },
        ip: function(e, s, t) {
            if (!t.skipOnEmpty || !a.isEmpty(e)) {
                var n = null,
                    i = null,
                    r = new RegExp(t.ipParsePattern).exec(e);
                if (r && (n = r[1] || null, e = r[2], i = r[4] || null), !0 !== t.subnet || null !== i)
                    if (!1 !== t.subnet || null === i)
                        if (!1 !== t.negation || null === n) 6 == (-1 === e.indexOf(":") ? 4 : 6) ? (new RegExp(t.ipv6Pattern).test(e) || a.addMessage(s, t.messages.message, e), t.ipv6 || a.addMessage(s, t.messages.ipv6NotAllowed, e)) : (new RegExp(t.ipv4Pattern).test(e) || a.addMessage(s, t.messages.message, e), t.ipv4 || a.addMessage(s, t.messages.ipv4NotAllowed, e));
                        else a.addMessage(s, t.messages.message, e);
                else a.addMessage(s, t.messages.hasSubnet, e);
                else a.addMessage(s, t.messages.noSubnet, e)
            }
        }
    };

    function s(a, s, t) {
        if ("undefined" == typeof File) return [];
        var n = e(a.input, a.$form).get(0);
        if (void 0 === n) return [];
        var i = n.files;
        return i ? 0 === i.length ? (t.skipOnEmpty || s.push(t.uploadRequired), []) : t.maxFiles && t.maxFiles < i.length ? (s.push(t.tooMany), []) : i : (s.push(t.message), [])
    }

    function t(e, a, s) {
        if (s.extensions && s.extensions.length > 0) {
            for (var t = !1, n = e.name.toLowerCase(), i = 0; i < s.extensions.length; i++) {
                var r = s.extensions[i].toLowerCase();
                if ("" === r && -1 === n.indexOf(".") || n.substr(n.length - s.extensions[i].length - 1) === "." + r) {
                    t = !0;
                    break
                }
            }
            t || a.push(s.wrongExtension.replace(/\{file\}/g, e.name))
        }
        s.mimeTypes && s.mimeTypes.length > 0 && (function(e, a) {
            for (var s = 0, t = e.length; s < t; s++)
                if (new RegExp(e[s]).test(a)) return !0;
            return !1
        }(s.mimeTypes, e.type) || a.push(s.wrongMimeType.replace(/\{file\}/g, e.name))), s.maxSize && s.maxSize < e.size && a.push(s.tooBig.replace(/\{file\}/g, e.name)), s.minSize && s.minSize > e.size && a.push(s.tooSmall.replace(/\{file\}/g, e.name))
    }

    function n(e, s = {
        skipOnEmpty: !0,
        chars: null
    }) {
        if (!1 !== s.skipOnEmpty && a.isEmpty(e)) return e;
        if (e = new String(e), s.chars || !String.prototype.trim) {
            var t = s.chars ? s.chars.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "$1") : " \\s ";
            return e.replace(new RegExp("^[" + t + "]+|[" + t + "]+$", "g"), "")
        }
        return e.trim()
    }
    return a
}(jQuery);
! function(e) {
    e.fn.yiiGridView = function(i) {
        return o[i] ? o[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? (e.error("Method " + i + " does not exist in jQuery.yiiGridView"), !1) : o.init.apply(this, arguments)
    };
    var i = {
            filterUrl: void 0,
            filterSelector: void 0,
            filterOnFocusOut: !0
        },
        t = {},
        r = {
            beforeFilter: "beforeFilter",
            afterFilter: "afterFilter"
        },
        n = {},
        o = {
            init: function(r) {
                return this.each(function() {
                    var n = e(this),
                        a = e.extend({}, i, r || {}),
                        c = n.attr("id");
                    void 0 === t[c] && (t[c] = {}), t[c] = e.extend(t[c], {
                        settings: a
                    });
                    var f = !1;
                    l(n, "filter", "change.yiiGridView keydown.yiiGridView", a.filterSelector, function(e) {
                        if ("keydown" === e.type) {
                            if (13 !== e.keyCode) return;
                            f = !0
                        } else if (f) return void(f = !1);
                        return !(!a.filterOnFocusOut && "keydown" !== e.type) && (o.applyFilter.apply(n), !1)
                    })
                })
            },
            applyFilter: function() {
                var i = e(this),
                    n = t[i.attr("id")].settings,
                    o = {};
                e.each(e(n.filterSelector).serializeArray(), function() {
                    this.name in o || (o[this.name] = []), o[this.name].push(this.value)
                });
                var l = Object.keys(o);
                e.each(yii.getQueryParams(n.filterUrl), function(i, t) {
                    -1 === l.indexOf(i) && -1 === l.indexOf(i.replace(/\[\d*\]$/, "")) && (e.isArray(t) || (t = [t]), i in o ? e.each(t, function(t, r) {
                        e.inArray(r, o[i]) && o[i].push(r)
                    }) : o[i] = t)
                });
                var a = n.filterUrl.indexOf("?"),
                    c = a < 0 ? n.filterUrl : n.filterUrl.substring(0, a),
                    f = n.filterUrl.indexOf("#");
                a >= 0 && f >= 0 && (c += n.filterUrl.substring(f)), i.find("form.gridview-filter-form").remove();
                var d = e("<form/>", {
                    action: c,
                    method: "get",
                    class: "gridview-filter-form",
                    style: "display:none",
                    "data-pjax": ""
                }).appendTo(i);
                e.each(o, function(i, t) {
                    e.each(t, function(t, r) {
                        d.append(e("<input/>").attr({
                            type: "hidden",
                            name: i,
                            value: r
                        }))
                    })
                });
                var s = e.Event(r.beforeFilter);
                i.trigger(s), !1 !== s.result && (d.submit(), i.trigger(r.afterFilter))
            },
            setSelectionColumn: function(i) {
                var r = e(this),
                    n = e(this).attr("id");
                if (void 0 === t[n] && (t[n] = {}), t[n].selectionColumn = i.name, i.multiple && i.checkAll) {
                    var o = "#" + n + " input[name='" + i.checkAll + "']",
                        a = i.class ? "input." + i.class : "input[name='" + i.name + "']",
                        c = "#" + n + " " + a + ":enabled";
                    l(r, "checkAllRows", "click.yiiGridView", o, function() {
                        r.find(a + ":enabled").prop("checked", this.checked).change()
                    }), l(r, "checkRow", "click.yiiGridView", c, function() {
                        var e = r.find(a).length == r.find(a + ":checked").length;
                        r.find("input[name='" + i.checkAll + "']").prop("checked", e).change()
                    })
                }
            },
            getSelectedRows: function() {
                var i = e(this),
                    r = t[i.attr("id")],
                    n = [];
                return r.selectionColumn && i.find("input[name='" + r.selectionColumn + "']:checked").each(function() {
                    n.push(e(this).parent().closest("tr").data("key"))
                }), n
            },
            destroy: function() {
                var i = [".yiiGridView", r.beforeFilter, r.afterFilter].join(" ");
                this.off(i);
                var o = e(this).attr("id");
                return e.each(n[o], function(i, t) {
                    e(document).off(t.event, t.selector)
                }), delete t[o], this
            },
            data: function() {
                var i = e(this).attr("id");
                return t[i]
            }
        };

    function l(i, t, r, o, l) {
        var a = i.attr("id"),
            c = n[a];
        if (void 0 !== c && void 0 !== c[t]) {
            var f = c[t];
            e(document).off(f.event, f.selector)
        }
        void 0 === c && (n[a] = {}), e(document).on(r, o, l), n[a][t] = {
            event: r,
            selector: o
        }
    }
}(window.jQuery);
var kvExpandRow;
! function(t) {
    "use strict";
    kvExpandRow = function(e, n) {
        var a = ".kvExpandRowColumn",
            i = "kvRowNum_" + n,
            l = e.gridId,
            o = e.hiddenFromExport,
            s = e.detailUrl,
            d = e.onDetailLoaded,
            r = e.expandIcon,
            c = e.collapseIcon,
            h = e.expandTitle,
            p = e.collapseTitle,
            v = e.expandAllTitle,
            f = e.collapseAllTitle,
            u = e.expandOneOnly,
            x = e.enableRowClick,
            g = e.rowClickExcludedTags,
            k = e.enableCache,
            w = e.extraData,
            $ = e.msgDetailLoading,
            m = o ? e.rowCssClass + " skip-export" : e.rowCssClass,
            C = e.animationDuration,
            y = t("#" + l),
            A = "." + n,
            I = y.find(".kv-expand-header-cell.kv-batch-toggle" + A),
            b = I.find(".kv-expand-header-icon"),
            R = void 0 !== e.collapseAll && e.collapseAll,
            T = void 0 !== e.expandAll && e.expandAll,
            E = y.find("td.kv-expand-icon-cell" + A + " .kv-expand-row:not(.kv-state-disabled)"),
            K = E.length,
            N = "kv-expand-detail-loading",
            D = function() {
                var e = y.find("td.kv-expand-icon-cell" + A + ":first"),
                    n = e && e.length ? e.closest("tr") : "",
                    a = 0;
                return n && n.length ? (n.find("> td").each(function() {
                    "none" !== t(this).css("display") && a++
                }), a) : 0
            }(),
            j = function(t) {
                return t.hasClass("kv-state-collapsed") && !t.hasClass("kv-state-disabled")
            },
            L = function(t) {
                return t.hasClass("kv-state-expanded") && !t.hasClass("kv-state-disabled")
            },
            O = function(t, e) {
                t.length && t.removeClass(e).addClass(e)
            },
            P = function(t) {
                t.removeClass("kv-state-collapsed").addClass("kv-state-expanded")
            },
            S = function(t) {
                t.removeClass("kv-state-expanded").addClass("kv-state-collapsed")
            },
            U = function(t) {
                O(t, N)
            },
            F = function(t) {
                if (t.length) {
                    var e = isNaN(C) ? 1e3 : C + 200;
                    setTimeout(function() {
                        t.removeClass(N)
                    }, e)
                }
            },
            Q = function() {
                var t = y.data(i);
                return t = t ? parseInt(t) : 0, isNaN(t) ? 0 : t
            },
            _ = function(t) {
                y.data(i, t)
            },
            q = function() {
                var t = Q();
                y.data(i, t + 1)
            },
            z = function(t, e, n, i) {
                var l = i ? e : e.split(" ").join(a + " ") + a;
                t.length && t.off(l).on(l, n)
            },
            B = function(t) {
                this.$element = t, this.init()
            };
        B.prototype = {
            constructor: B,
            init: function() {
                var t;
                this.$row = this.$element.closest("tr"), this.$icon = this.$element.find(">.kv-expand-icon"), this.$detail = this.$element.find(".kv-expanded-row" + A + ":first"), this.$cell = this.$icon.closest(".kv-expand-icon-cell"), this.$container = this.$cell.find(".kv-expand-detail:first"), this.vKey = this.$detail.data("key"), this.vInd = this.$detail.data("index"), 0 === this.$detail.length && (this.vKey = this.$row.data("key"), t = this.$row.next('tr.kv-expand-detail-row[data-key="' + this.vKey + '"]'), this.$detail = t.find(".kv-expanded-row"))
            },
            run: function() {
                var e = this,
                    n = e.$row,
                    a = e.$cell,
                    i = e.$icon;
                if (j(i) || L(i)) {
                    if (T) return L(i) && e.load(function() {
                        e.expand(!0), q(), Q() >= K && (F(I), b.focus())
                    }), void(Q() >= K && (F(I), b.focus()));
                    if (R) return j(i) && (e.collapse(), q(), Q() >= K && (F(I), b.focus())), void(Q() >= K && (F(I), b.focus()));
                    j(i) && (s ? e.load(function() {
                        e.expand(!1)
                    }) : e.expand(!1)), z(a, "click", function(t) {
                        e.toggle(), t.stopPropagation()
                    }), z(n, "click", function(n) {
                        var a = n.target,
                            i = t(a).length && t(a).hasClass("kv-disable-click") || -1 !== t.inArray(a.nodeName, g);
                        x && !i && e.toggle()
                    })
                }
            },
            load: function(e) {
                var n = this.$cell,
                    a = this.$detail,
                    i = this.vKey,
                    l = this.vInd,
                    o = t.extend({
                        expandRowKey: i,
                        expandRowInd: l
                    }, w),
                    r = !k || 0 === a.html().length;
                s.length > 0 && r ? t.ajax({
                    type: "POST",
                    data: o,
                    url: s,
                    beforeSend: function() {
                        U(n), y.trigger("kvexprow:beforeLoad", [l, i, w]), a.html($)
                    },
                    success: function(t) {
                        a.html(t), F(n), "function" == typeof d && d(), e(), y.trigger("kvexprow:loaded", [l, i, w])
                    },
                    error: function() {
                        a.html('<div class="alert alert-danger">Error fetching data. Please try again later.</div>'), y.trigger("kvexprow:error", [l, i, w]), F(n)
                    }
                }) : (F(n), "function" == typeof e && e())
            },
            expand: function(e) {
                var n = this.$row,
                    a = this.$icon,
                    i = this.$cell,
                    l = this.$detail,
                    o = this.vKey,
                    d = this.vInd,
                    r = s.length > 0;
                if (!j(a)) {
                    r || U(i), y.find('tr[data-index="' + d + '"]').remove(), l.hide(), n.after(l);
                    var h = '<tr class="kv-expand-detail-row ' + m + '" data-key="' + o + '" data-index="' + d + '">';
                    l.wrap('<td colspan="' + D + '">').parent().wrap(h), a.html(c), i.attr("title", p), e ? l.slideDown(C, function() {
                        S(a), l.show()
                    }) : (l.show(), S(a));
                    var v = n.prevAll(),
                        f = n.index() + 1;
                    v.push(n), t.each(v, function(e, n) {
                        var a = t(n).find("td[rowspan]");
                        t.each(a, function(e, a) {
                            var i = parseInt(t(a).attr("rowspan"));
                            t(n).index() + i > f && t(a).attr("rowspan", i + 1)
                        })
                    }), r || F(i)
                }
            },
            collapse: function(e) {
                var n = this.$row,
                    a = this.$icon,
                    i = this.$cell,
                    l = this.$detail,
                    o = this.$container;
                L(a) || (e || U(i), o.html(""), a.html(r), i.attr("title", h), l.slideUp(C, function() {
                    l.unwrap().unwrap(), l.appendTo(o), P(a);
                    var e = n.prevAll();
                    e.push(n);
                    var i = n.index() + 1;
                    t.each(e, function(e, n) {
                        var a = t(n).find("td[rowspan]");
                        t.each(a, function(e, a) {
                            var l = parseInt(t(a).attr("rowspan"));
                            t(n).index() + l > i && t(a).attr("rowspan", l - 1)
                        })
                    })
                }), e || F(i))
            },
            toggle: function() {
                var e, n = this,
                    a = n.$icon,
                    i = n.$cell,
                    l = !1,
                    o = n.vKey,
                    s = n.vInd;
                if (!i.hasClass(N)) return L(a) ? ((e = u && !R) && (E.each(function() {
                    new B(t(this)).collapse(!0)
                }), l = !0), n.load(function() {
                    n.expand(!0)
                }), void(e && !l || (y.trigger("kvexprow:toggle", [s, o, w, !0]), a.focus()))) : void(j(a) && (n.collapse(), y.trigger("kvexprow:toggle", [s, o, w, !1]), a.focus()))
            }
        }, E.each(function() {}), y.data(i) || _(0), 0 === w.length && (w = {}), 0 !== E.length ? (E.each(function() {
            var e = t(this),
                n = new B(e),
                a = e.find(">.kv-expand-icon");
            j(a) && (n.collapse(!1), n.expand(!1)), n.run()
        }), I.length && z(I, "click", function() {
            if (!I.hasClass(N) && 0 !== E.length) {
                var a = L(b),
                    i = j(b),
                    l = t.extend(!0, {}, e, {
                        expandAll: i,
                        collapseAll: a
                    });
                U(I), i ? (_(E.find(".kv-state-collapsed").length), P(b), b.html(c), I.attr("title", f), y.trigger("kvexprow:toggleAll", [w, !1])) : a && (_(E.find(".kv-state-expanded").length), S(b), b.html(r), I.attr("title", v), y.trigger("kvexprow:toggleAll", [w, !0])), kvExpandRow(l, n)
            }
        })) : O(I, "kv-state-disabled")
    }
}(window.jQuery);

function modalUrl(e, t) {
    var r = e;
    return r += -1 === r.indexOf("?") ? "?" : "&", t && (r += $.param(t)), r
}! function(e) {
    "use strict";

    function t(e, t) {
        this.element = e, this.init(t)
    }
    t.prototype.init = function(e) {
        this.selector = e.selector || null, this.initalRequestUrl = e.url, this.ajaxSubmit = e.ajaxSubmit, jQuery(this.element).on("show.bs.modal", this.shown.bind(this))
    }, t.prototype.shown = function(e) {
        if (e.target == this.element) {
            var t = this;
            if (jQuery(this.element).hasClass("in")) return t;
            jQuery(this.element).find(".modal-body").html('<div class="modal-ajax-loader"></div>'), jQuery.ajax({
                url: this.initalRequestUrl,
                context: this,
                beforeSend: function(e, r) {
                    jQuery(t.element).triggerHandler("kbModalBeforeShow", [e, r])
                },
                success: function(e, r, i) {
                    this.injectHtml(e), this.ajaxSubmit && jQuery(t.element).off("submit").on("submit", this.formSubmit.bind(this)), jQuery(t.element).triggerHandler("kbModalShow", [e, r, i, this.selector])
                },
                complete: function(e, r) {
                    jQuery(t.element).triggerHandler("kbModalShowComplete", [e, r])
                }
            })
        }
    }, t.prototype.injectHtml = function(e) {
        jQuery(this.element).find("form").length > 0 && jQuery(this.element).find("form").off().yiiActiveForm("destroy").remove(), jQuery(this.element).find(".modal-body").html(e);
        var t, r, i = (t = [], jQuery("script[src]").each(function() {
                t.push(jQuery(this).attr("src"))
            }), t),
            n = (r = [], jQuery('link[rel="stylesheet"]').each(function() {
                r.push(jQuery(this).attr("href"))
            }), r),
            o = [],
            a = [],
            l = 0,
            s = jQuery("head");
        s.length < 1 && (s = jQuery("body")).length < 1 && (s = jQuery(document)), jQuery(e).filter('link[rel="stylesheet"]').each(function() {
            var e = jQuery(this).attr("href");
            n.indexOf(e) < 0 && (s.append(jQuery(this).prop("outerHTML")), n.push(e))
        }), jQuery(e).filter("script").each(function() {
            var e = jQuery(this).attr("src");
            void 0 === e ? a.push(jQuery(this).text()) : i.indexOf(e) < 0 && (e += e.indexOf("?") < 0 ? "?" : "&", o.push(e))
        });
        for (var u = function() {
                if ((l += 1) === o.length)
                    for (var e = 0; e < a.length; e += 1) window.eval(a[e])
            }, h = 0; h < o.length; h += 1) jQuery.getScript(o[h] + (new Date).getTime(), u)
    }, t.prototype.formSubmit = function() {
        var e = jQuery(this.element).find("form"),
            t = this;
        return "GET" !== e.attr("method") && void 0 !== window.FormData ? jQuery.ajax({
            method: e.attr("method"),
            url: e.attr("action"),
            data: new FormData(e[0]),
            processData: !1,
            contentType: !1,
            context: this,
            beforeSend: function(e, r) {
                jQuery(t.element).triggerHandler("kbModalBeforeSubmit", [e, r])
            },
            success: function(e, r, i) {
                (i.getResponseHeader("content-type") || "").indexOf("html") > -1 && (this.injectHtml(e), r = !1), jQuery(t.element).triggerHandler("kbModalSubmit", [e, r, i, this.selector])
            },
            complete: function(e, r) {
                jQuery(t.element).triggerHandler("kbModalSubmitComplete", [e, r])
            }
        }) : jQuery.ajax({
            method: e.attr("method"),
            url: e.attr("action"),
            data: e.serialize(),
            context: this,
            beforeSend: function(e, r) {
                jQuery(t.element).triggerHandler("kbModalBeforeSubmit", [e, r])
            },
            success: function(e, r, i) {
                (i.getResponseHeader("content-type") || "").indexOf("html") > -1 && (this.injectHtml(e), r = !1), jQuery(t.element).triggerHandler("kbModalSubmit", [e, r, i, this.selector])
            },
            complete: function(e, r) {
                jQuery(t.element).triggerHandler("kbModalSubmitComplete", [e, r])
            }
        }), !1
    }, e.fn.kbModalAjax = function(r) {
        return this.each(function() {
            e.data(this, "kbModalAjax") ? (e.data(this, "kbModalAjax").initalRequestUrl = r.url, e.data(this, "kbModalAjax").selector = r.selector || null) : e.data(this, "kbModalAjax", new t(this, r))
        })
    }
}(jQuery);

function uniqueConcat(t, e) {
    for (var n = t.concat(e), o = [], i = 0; i < n.length; i += 1) - 1 == o.indexOf(n[i]) && o.push(n[i]);
    return o
}

function isInView(t) {
    return !!t.length && (t.is(":visible") && t.offset().top - $(window).scrollTop() < $(window).height())
}

function getUrlParameter(t) {
    var e, n, o = decodeURIComponent(window.location.search.substring(1)).split("&");
    for (n = 0; n < o.length; n++)
        if ((e = o[n].split("="))[0] === t) return void 0 === e[1] || e[1]
}

function createModal(t, e, n, o, i) {
    var a = $('<div class="modal paywall" tabindex="-1" role="dialog">   <div class="modal-dialog" role="document">       <div class="modal-content">           <div class="modal-header"></div>           <div class="modal-body">');
    return o && a.attr("id", o), a.find(".modal-body").append(t), a.appendTo("body"), a.modal(e ? {} : {
        backdrop: "static",
        keyboard: !1
    }).modal("show"), a.on("hidden.bs.modal", function() {
        a.remove()
    }), e && a.find(".modal-header").append('<button type="button" class="close" data-dismiss="modal" aria-hidden="true" tabindex="-1">×</button>'), n && a.find(".modal-content").append('<div class="modal-footer">' + n + "</div>"), e && i && a.on("hidden.bs.modal", function() {
        location.reload()
    }), a
}
Array.prototype.forEach || (Array.prototype.forEach = function(t) {
    var e = this.length;
    if ("function" != typeof t) throw new TypeError;
    for (var n = arguments[1], o = 0; o < e; o++) o in this && t.call(n, this[o], o, this)
}), $(function() {
    $(document).on("click.yii contextmenu.yii", function(t) {
        var e = $(t.target).closest(yii.clickableSelector);
        (e.data("method") || e.data("confirm") || e.data("form")) && t.preventDefault()
    }), $(document).on("blur", "input[type=text]", function() {
        $(this).val($.trim($(this).val()))
    }), $(document).on("keypress", "input[type=text]", function(t) {
        13 == (t.charCode ? t.charCode : t.keyCode ? t.keyCode : 0) && $(this).val($.trim($(this).val()))
    })
}), $.fn.findIncludingSelf = function(t) {
    return this.find(t).add(this.filter(t))
}, $.fn.nullWhenEmpty = function() {
    return this.length ? this : null
}, $.ajaxPrefilter(function(t, e, n) {
    n.modalOnError = function() {
        return this.fail(function(t) {
            $(".modal.in").modal("hide");
            var e = yii.t("exception", "error_modal_content_1") + '<a href="' + routes["user-orders"] + '">“' + yii.t("user", "my_orders") + "”</a>" + yii.t("exception", "error_modal_content_2") + "<br/>" + yii.t("exception", "error_modal_content_3") + '<a href="' + routes["customer-service"] + '">' + yii.t("contact", "customer_support") + "</a>."; - 1 !== t.getResponseHeader("Content-Type").indexOf("text/html") && (e = "<p>" + $(t.responseText).find("h1").text() + '</p><p class="small">' + e + "</p>");
            var n = createModal(e, !0);
            n.find(".modal-content").addClass("modal-danger"), n.find(".modal-header").prepend("<strong>" + yii.t("exception", "error_occurred") + "</strong>")
        }), this
    }
}), $(window).on("load", function() {
    for (var t in defferedUntilLoaded) $(defferedUntilLoaded[t])
}), $(function() {
    if (location.hash) {
        var t = location.hash;
        location.hash = "", location.hash = t
    } else if (!device.isMobile) {
        var e = $(".nav-flex #company-search-name");
        e.length && "INPUT" !== document.activeElement.tagName && e.focus()
    }
}), void 0 === $.fn.selectize && ($.fn.selectize = function(t) {
    var e = this;
    setTimeout(function() {
        e.selectize(t)
    }, 100)
}), void 0 === $.fn.daterangepicker && ($.fn.daterangepicker = function(t, e) {
    var n = this;
    setTimeout(function() {
        n.daterangepicker(t, e)
    }, 1e3)
}), yii.translations = {}, yii.t = function(t, e, n) {
    var o = yii.translations[mhApp.lang.substring(0, 2)][t][e];
    return void 0 === o ? e : new IntlMessageFormat.IntlMessageFormat(o).format(n)
};
$(function() {
    $(".admin-generated-files").each(function(e, a) {
        n(a)
    });
    var e = setInterval(function() {
        $(".admin-generated-files:has(.files-in-progress)").each(function(e, a) {
            n(a)
        }), 0 == $(".admin-generated-files:has(.files-in-progress)").length && clearInterval(e)
    }, 5e3);

    function n(e) {
        var n = $(e);
        $.get(n.data("ajax-url")).success(function(e) {
            n.html(e)
        }).fail(function() {
            n.html('<p class="text-danger">Problem with downloading files list</p>')
        })
    }
});
"use strict";
var routes = [],
    urlPrefix = "en-GB" === mhApp.lang ? "/en" : "",
    UrlManager = {
        getLangPrefixedRoute: function(e) {
            return urlPrefix ? "object" == typeof e ? e[0].startsWith(urlPrefix) ? e : urlPrefix + e[0] : "string" != typeof e ? e : e.startsWith(urlPrefix) ? e : urlPrefix + e : e
        },
        forCompanyProfile: function(e, o) {
            return o.startsWith(urlPrefix) && (o = o.replace(urlPrefix, "")), e.replace("/{company}/", "/" + o + "/").replace("//", "/")
        },
        forPersonProfile: function(e, o) {
            return o.startsWith(urlPrefix) && (o = o.replace(urlPrefix, "")), e.replace("/{person}/", "/" + o + "/").replace("//", "/")
        },
        getProfileUriFromCurrentLocation: function() {
            return document.URL.search("/p/") > 0 ? document.URL.split("/")[urlPrefix ? 5 : 4] : document.URL.split("/")[urlPrefix ? 4 : 3]
        }
    };
for (var route in routes.home = "/", routes["load-additional-annual-reports"] = "/api/company/load-additional-annual-reports", routes["load-paid-annual-reports"] = "/api/company/load-paid-annual-reports", routes["load-additional-jobs"] = "/api/company/load-additional-jobs", routes["load-more-annual-reports"] = "/api/company/annual-reports-list", routes["load-more-jobs"] = "/api/company/jobs-list", routes["load-more-company-administrators"] = "/api/company/administrators", routes["load-more-company-publications"] = "/api/company/publications", routes["load-more-company-network"] = "/api/company/network", routes["load-more-company-former-addresses"] = "/api/company/former-addresses", routes["load-more-company-employees"] = "/api/company/employees", routes["load-more-company-patents"] = "/api/company/patents", routes["load-more-company-complementaries"] = "/api/company/complementaries", routes["load-more-person-all-active-connections"] = "/api/people/all-active-connections", routes["load-more-person-all-inactive-connections"] = "/api/people/all-inactive-connections", routes["load-more-person-all-publications"] = "/api/people/all-publications", routes["load-more-person-network"] = "/api/people/network", routes["load-more-publications"] = "/api/publication/load-more-publications", routes["external-job-content"] = ["/company-job/external-job-content", "job"], routes["additional-annual-report-content"] = "/api/company/unternehmensregister-annual-report-content", routes["additional-annual-report-content-check"] = "/api/company/unternehmensregister-annual-report-content-check", routes["cancel-contact-research"] = "/admin/contact-research/cancel", routes["banner-disable"] = "/api/banner/disable", routes["payment-datatrans-cancel-payment"] = "/user/payment/datatrans-cancel-payment", routes.autocomplete = "/Autocomplete/", routes["ownership/ensure-d-k-crawled"] = "/{company}/ownership/ensure-d-k-crawled", routes["user-email-details"] = "/user/email/details", routes["api-company-managers"] = "/api/company/managers", routes["api-company-load-patents"] = "/api/company/load-patents", routes["api-company-patent-content"] = "/api/company/patent-content", routes["api-company-documents"] = "/api/documents/", routes["api-user-search"] = "/api/user/search", routes["premium-with-economic-report/filter-companies"] = "/premium/premium-with-economic-report/filter-companies/", routes["customer-service"] = "/Kontakt", routes["user-orders"] = "/user/bestellungen", routes["company-network-cypher"] = "/{company}/company/network/cypher", routes["person-network-cypher"] = "/{person}/person/network/cypher", routes["company-network-cypher-transaction-commit"] = "/{company}/company/network/cypher/db/data/transaction/commit", routes["person-network-cypher-transaction-commit"] = "/{person}/person/network/cypher/db/data/transaction/commit", routes["admin-custom-premium-calculation"] = "/admin/premium-user/calculate-amounts", routes["admin-jira-update-zoho-id"] = "/admin/jira/update-zoho-id", routes["admin-background-task-exists"] = "/admin/background-task/exists", routes["admin-publication-coverage-get-logs"] = "/admin/publication-coverage/get-logs", routes["check-cookie"] = "/check-cookie", routes.premium = "/Premium", routes) routes[route] = UrlManager.getLangPrefixedRoute(routes[route]);
$(function() {
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
        setTimeout(e, 100)
    });
    var e = $(".delayed-render"),
        n = function() {
            e.first().removeClass("delayed-render"), (e = e.slice(1)).length ? window.requestAnimationFrame(n) : $("body").addClass("tiles-rendered"), $(window).resize()
        };
    window.requestAnimationFrame(n)
});
var HttpCode = {
    SWITCHING_PROTOCOLS: 101,
    PROCESSING: 102,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTI_STATUS: 207,
    ALREADY_REPORTED: 208,
    IM_USED: 226,
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    RESERVED: 306,
    TEMPORARY_REDIRECT: 307,
    PERMANENTLY_REDIRECT: 308,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    REQUEST_ENTITY_TOO_LARGE: 413,
    REQUEST_URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    REQUESTED_RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    I_AM_A_TEAPOT: 418,
    UNPROCESSABLE_ENTITY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    RESERVED_FOR_WEBDAV_ADVANCED_COLLECTIONS_EXPIRED_PROPOSAL: 425,
    UPGRADE_REQUIRED: 426,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    VERSION_NOT_SUPPORTED: 505,
    VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL: 506,
    INSUFFICIENT_STORAGE: 507,
    LOOP_DETECTED: 508,
    NOT_EXTENDED: 510,
    NETWORK_AUTHENTICATION_REQUIRED: 511
};
$(function() {
    function e(e) {
        var t;
        t = $tileWrapper.find('a[data-activetab="active"]').parent().hasClass("active") ? "#person-active-Fuehrung" : "#person-inactive-Fuehrung";
        var a = $(t),
            r = a.find("span.sort-asc"),
            i = a.find("span.sort-desc"),
            l = 0,
            n = null;
        r.length ? (l = 4, n = r.closest("a").data("param")) : i.length && (l = 3, n = i.closest("a").data("param"));
        var o = a.find(filterNameTextSelector),
            s = a.find(filterFunctionSelectSelector),
            c = a.find(filterAuthorisationSelectSelector),
            p = a.find(filterStartDateSelector),
            d = a.find(filterEndDateSelector),
            v = a.find(resultsPerPageSelector);
        if (s.find(":selected").data("required-registration")) {
            var f = s.find(":selected").data("url");
            showAjaxModal(f, "")
        } else {
            ! function(e, t) {
                $.ajax({
                    url: ajaxUrl,
                    data: e,
                    dataType: "json",
                    beforeSend: function() {
                        $tileWrapper.addClass("loading")
                    },
                    success: function(e) {
                        var a = $(e);
                        $tileWrapper.find(t + " .content-rows").html(a.find(t + " .content-rows").html());
                        var r = a.find(".pagination").html();
                        void 0 === r && (r = ""), $tileWrapper.find(".pagination").html(r)
                    },
                    complete: function() {
                        $tileWrapper.removeClass("loading")
                    }
                })
            }({
                company: companyUri,
                page: e,
                activeTab: $tileWrapper.find(activeTabSelector + " a").data("activetab"),
                function: s.val(),
                name: o.val(),
                authorisation: c.val(),
                start: p.val(),
                end: d.val(),
                sortParam: n,
                sortDirection: l,
                resultsPerPage: v.val()
            }, t)
        }
    }
    $tileWrapper = $("#Fuehrung"), tabActivePeopleSelector = '.show-people[data-activetab="active"]', tabAllPeopleSelector = '.show-people[data-activetab="inactive"]', activeTabSelector = ".nav-pills li.active", inactiveTabSelector = ".nav-pills li:not(.active)", filterFunctionSelectSelector = 'select[name="function"]', filterNameTextSelector = 'input[name="person-name"]', filterAuthorisationSelectSelector = 'select[name="authorisation"]', filterStartDateSelector = 'input[name="start"]', filterEndDateSelector = 'input[name="end"]', resultsPerPageSelector = 'select[name="results-per-page"]', inactivePageSelector = ".pagination li:not(.active) a", activePageSelector = ".pagination li.active a", ajaxUrl = routes["api-company-managers"], $tileWrapper.on("click", inactiveTabSelector, function() {
        $tileWrapper.find(filterFunctionSelectSelector).val(""), $tileWrapper.find(filterAuthorisationSelectSelector).val(0), $tileWrapper.find(filterNameTextSelector).val(""), $tileWrapper.find(filterStartDateSelector).val(""), $tileWrapper.find(filterEndDateSelector).val("")
    }), $tileWrapper.on("change", function() {
        e(0)
    }), $tileWrapper.on("click", "a.sort", function() {
        var t = $(this).find("span.sort-icon");
        t.hasClass("sort-desc") ? (t.removeClass("sort-desc"), t.removeClass("glyphicon-sort-by-attributes-alt")) : t.hasClass("sort-asc") ? (t.removeClass("sort-asc"), t.addClass("sort-desc"), t.removeClass("glyphicon-sort-by-attributes"), t.addClass("glyphicon-sort-by-attributes-alt")) : (t.addClass("sort-asc"), t.addClass("glyphicon-sort-by-attributes"));
        var a = $(this).closest(".header-cell").siblings().find("a.sort span.sort-icon");
        a.removeClass("glyphicon-sort-by-attributes"), a.removeClass("glyphicon-sort-by-attributes-alt"), a.removeClass("sort-asc"), a.removeClass("sort-desc"), e(0)
    }), $tileWrapper.on("change", resultsPerPageSelector, function() {
        e(0)
    }), $tileWrapper.on("shown.bs.tab", ".nav-pills a", function(t) {
        e(0)
    }), $tileWrapper.on("click", activePageSelector, function(e) {
        e.preventDefault()
    }), $tileWrapper.on("click", inactivePageSelector, function(t) {
        t.preventDefault(), e($(this).data("page"))
    })
});

function isModalTypeOf(a, t) {
    return a === getModalTypeFromSelector(t)
}

function getModalTypeFromSelector(a) {
    return a.first().data("modal-type")
}

function showAjaxModal(a, t, o, e) {
    triggerModal($("<a></a>").attr("class", "btn-ajax-modal-dynamic").data(e || {}), a, !0, t, o || !1)
}

function triggerModal(a, t, o, e, d) {
    var n = $("#" + ajaxModalId);
    n.on("kbModalBeforeShow", function(a, t, o) {
        n.find("> .modal-dialog").removeAttr("id")
    }), n.find(".modal-header span").html(e), n.kbModalAjax({
        selector: a,
        url: t,
        ajaxSubmit: o
    });
    var l = n.data("bs.modal");
    d ? (l.options.keyboard = !1, l.options.backdrop = "static", n.off("keydown.dismiss.bs.modal")) : (l.options.keyboard = !0, l.options.backdrop = !0, l.escape()), n.modal("show")
}
$(function() {
    var a = $("#ajax-modal");

    function t(a) {
        var t = {
            status: "",
            hideHeader: !1,
            title: "",
            content: "",
            message: "",
            js: "",
            mainClass: ""
        };
        return void 0 !== a.content ? $.extend(t, a) : t.content = a, t
    }

    function o(t, o) {
        if (t.status != HttpCode.FOUND) {
            if (o) {
                var e = o.attr("title");
                modalTitleClass = o.data("title-class"), e && a.find(".modal-header span").removeClass().addClass(modalTitleClass).html(e);
                var d = a.find(".modal-dialog"),
                    n = o.data("id");
                d.attr("id", n)
            }
            a.find(".modal-body").html(t.title + t.message + t.content), t.hideHeader && a.find(".modal-header").html("");
            var l = a.find(".modal-content");
            l.attr("class", "modal-content"), t.mainClass.length > 0 && l.addClass(t.mainClass), a.find(".btn-ajax-modal").length && a.on("click", ".btn-ajax-modal", ($modalPackages = $(".modal-package-price"), $modalPackages.sort(function(a, t) {
                var o = parseInt($(a).text()),
                    e = parseInt($(t).text());
                return o < e ? -1 : o > e ? 1 : 0
            }), $($modalPackages).parent().removeClass("modal-package").addClass("no-fill"), void $($modalPackages[0]).parent().addClass("modal-package").removeClass("no-fill")))
        } else window.location.href = t.content
    }

    function e(a, e) {
        var d = t(a.responseText);
        a.status != HttpCode.FOUND && (d.message = '<div class="alert alert-danger">' + a.statusText + "</div>"), d.code = a.status, o(d, e)
    }
    a.on("kbModalSubmit", function(a, e, d, n, l) {
        o(t(e), l)
    }), a.on("kbModalShow", function(a, e, d, n, l) {
        o(t(e), l)
    }), a.on("click", ".btn-ajax-inside-modal", function(d) {
        d.preventDefault();
        var n = $(this),
            l = n.attr("href") || $(this).data("href") || $(this).data("url"),
            s = n.data();
        return $.ajax({
            type: "POST",
            url: l,
            data: s,
            dataType: "json",
            beforeSend: function(t, o, e, d) {
                a.find(".modal-header").html(""), a.find(".modal-body").html('<div class="modal-ajax-loader"></div>')
            }
        }).done(function(a) {
            o(t(a), n), $(this).updatePolyfill()
        }).fail(function(a, t) {
            e(a, n)
        }), !1
    }), $(document).ajaxError(function(a, t, o) {
        try {
            "ModalAjax" === o.context.constructor.name && e(t)
        } catch (a) {}
    })
});
$(function() {
    $("#profile-header-tabs > .see-more > a").click(function(e) {
        e.preventDefault(), $(this).parent().parent().toggleClass("uncollapsed")
    })
});
$(function() {
    loadFulltextSearchTab(), loadWebsiteSearchTab();
    var e = null,
        t = $("#company-search");
    t.submit(function(e) {
        e.preventDefault();
        var a = new SearchPhrase($(this).find("#company-search-name").val());
        window.location = UrlManager.getLangPrefixedRoute("/Suche/" + a.toString() + t.attr("action"))
    });
    var a = $("#company-search .dropdown"),
        r = new SearchPhrase("");
    $("#company-search-name").keyup(function(t) {
        var n = new SearchPhrase($(this).val());
        n != r && (e && clearTimeout(e), r = n, n.hasAutocompleteMinimumLength() ? e = setTimeout(function() {
            $("#company-search").addClass("loading"), $.ajax({
                url: routes.autocomplete + n.urlEncode(),
                success: function(e) {
                    a.html(e), a.toggleClass("expanded", Boolean(e)), $("#company-search").removeClass("loading")
                },
                done: function() {
                    $("#company-search").removeClass("loading")
                }
            })
        }, 400) : a.removeClass("expanded"))
    }).keydown(function(e) {
        if (a.hasClass("expanded")) {
            var t = a.find(".selected");
            if (27 == e.keyCode) a.removeClass("expanded"), e.preventDefault();
            else if (13 == e.keyCode) t.length && (t[0].click(), e.preventDefault());
            else if (38 == e.keyCode || 40 == e.keyCode) {
                var r;
                38 == e.keyCode ? r = t.length ? t.prev() : a.children().last() : 40 == e.keyCode && (r = t.length ? t.next() : a.children().first()), r.length && (t.removeClass("selected"), r.addClass("selected"), e.preventDefault())
            }
        }
    }).bind("paste", function(e) {
        setTimeout(function() {
            $(this).keyup()
        }, 0)
    }), $(".disabled-premium > .btn > .glyphicon-lock").click(function() {
        showOverlay()
    }), $(document).on("click", '.search a[data-toggle="tab"]', function(e) {
        var t = $(this).attr("href");
        localStorage.setItem("lastSearchTab", t), toggleSearchStatusFilter(t)
    });
    var n = null,
        o = null,
        l = $("#simple-search-form"),
        i = l.find(":input"),
        s = $(".subsiteContent");
    $("#simple-search-page").on("keyup change", "input, select, date", function() {
        clearTimeout(n), n = setTimeout(function() {
            l.yiiActiveForm("validate");
            var e = l.serialize();
            l.find(".has-error").length || o == e || (s.addClass("div-loading"), i.prop("disabled", !0), $.pjax({
                container: "#simple-search-content",
                timeout: 3e4,
                scrollTo: !1,
                url: l.attr("action") + "?" + e,
                replace: !0,
                push: !1
            }), o = e)
        }, 500)
    }), $(document).on("pjax:success", function() {
        var e = localStorage.getItem("lastSearchTab") || $('.search li.active a[data-toggle="tab"]').attr("href");
        $('.search a[data-toggle="tab"][href="' + e + '"]').click(), toggleSearchStatusFilter(e), i.prop("disabled", !1), s.removeClass("div-loading"), loadFulltextSearchTab()
    })
});
var toggleSearchStatusFilter = function(e) {
    "#Volltext" === e ? $("#search-form-container #search-city-filter, #search-birthday-filter, #search-status-filter").toggleClass("hidden", "#Volltext" === e) : "#Firmen" === e ? ($("#search-form-container #search-city-filter, #search-birthday-filter").toggleClass("hidden", "#Firmen" === e), $("#search-form-container #search-status-filter").toggleClass("hidden", "#Firmen" !== e)) : "#Personen" === e ? $("#search-form-container #search-city-filter, #search-birthday-filter, #search-status-filter").toggleClass("hidden", "#Personen" !== e) : "#Branchen" === e ? $("#search-form-container #search-city-filter, #search-birthday-filter, #search-status-filter").toggleClass("hidden", "#Branchen" === e) : "#Website" === e && $("#search-form-container #search-city-filter, #search-birthday-filter, #search-status-filter").toggleClass("hidden", "#Website" === e)
};

function SearchPhrase(e) {
    var t = function(e) {
        return e.substring(0, 250)
    }(e.replace(/[~`!@#$%*()=|\}\]{\[:;?\/><\\]+/g, ""));
    this.toString = function() {
        return t
    }, this.urlEncode = function() {
        return encodeURIComponent(t).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+")
    }, this.hasAutocompleteMinimumLength = function() {
        return t.length >= 3
    }
}

function loadFulltextSearchTab() {
    var e = document.querySelector('input[name="Volltext"]');
    if (e) {
        var t = document.querySelector("#Volltext_tab"),
            a = document.querySelector("#Volltext"),
            r = e.value,
            n = Date.now();
        $.get(r, function(e) {
            a.classList.remove("infoBox", "loading"), a.innerHTML = e, t.innerHTML = a.querySelector("#Volltext_tab_update").innerHTML, t.classList.remove("loading"), Date.now() - n, setupLoadMore($("#Volltext"), routes["load-more-publications"], "div.ownersRow", $("#Volltext .load-more:first").data())
        })
    }
}

function loadWebsiteSearchTab() {
    var e = document.querySelector('input[name="Website"]');
    if (e) {
        var t = document.querySelector("#Website_tab"),
            a = document.querySelector("#Website"),
            r = e.value,
            n = Date.now();
        $.get(r, function(e) {
            a.classList.remove("infoBox", "loading"), a.innerHTML = e, t.innerHTML = a.querySelector("#Website_tab_update").innerHTML, t.classList.remove("loading"), Date.now() - n, window.addEllipsisedText(), setupLoadMore($("#Website"), routes["load-fulltext-websites"], "div.ownersRow", $("#Website .load-more:first").data())
        })
    }
}
$(function() {
    var t = $("#right-content"),
        o = t.find(".adContainer"),
        n = $(".nav-column > .profile-tabs");
    $(".profile-main span.button-shopping");
    $(window).on("scroll resize", function() {
        var t, o, i, s, e, a, p, r;
        n.length && (o = (t = n).parent().offset().top, i = t.parent(), s = i[0].getBoundingClientRect(), e = Math.abs(s.top - t.outerHeight()), a = t.parent().outerHeight(), p = s.bottom - 10, r = 10 + parseInt(t.data("stickyMarginTop") || 0), a - e <= 0 ? (i.css("flex-basis", t[0].offsetWidth), window.innerWidth < 767 ? t.css({
            position: "relative",
            top: "auto",
            bottom: $(window).height() - p
        }) : t.css({
            position: "fixed",
            top: "auto",
            bottom: $(window).height() - p
        })) : $(window).scrollTop() >= o ? (i.css("flex-basis", t[0].offsetWidth), t.css({
            position: "fixed",
            top: r,
            bottom: "auto"
        })) : (t.css({
            position: "",
            top: "",
            bottom: ""
        }), i.css({
            flexBasis: 0
        })))
    }), o.length && null === o[0].offsetParent && t.parent().css("margin-left", 0), $(window).load(function() {
        t.width() < 1 && t.parent().css("display", "none")
    })
});
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).IntlMessageFormat = {})
}(this, function(e) {
    "use strict";
    var t, r;

    function n(e) {
        return e.type === t.literal
    }

    function o(e) {
        return e.type === t.argument
    }

    function u(e) {
        return e.type === t.number
    }

    function a(e) {
        return e.type === t.date
    }

    function i(e) {
        return e.type === t.time
    }

    function c(e) {
        return e.type === t.select
    }

    function s(e) {
        return e.type === t.plural
    }

    function l(e) {
        return e.type === t.pound
    }

    function f(e) {
        return e.type === t.tag
    }

    function p(e) {
        return !(!e || "object" != typeof e || 0 !== e.type)
    }

    function h(e) {
        return !(!e || "object" != typeof e || 1 !== e.type)
    }! function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
    }(t || (t = {})),
    function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
    }(r || (r = {}));
    var g, m = (g = function(e, t) {
            return (g = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
        }, function(e, t) {
            function r() {
                this.constructor = e
            }
            g(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        }),
        d = function() {
            return (d = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        },
        y = function(e) {
            function t(r, n, o, u) {
                var a = e.call(this) || this;
                return a.message = r, a.expected = n, a.found = o, a.location = u, a.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(a, t), a
            }
            return m(t, e), t.buildMessage = function(e, t) {
                function r(e) {
                    return e.charCodeAt(0).toString(16).toUpperCase()
                }

                function n(e) {
                    return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
                        return "\\x0" + r(e)
                    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
                        return "\\x" + r(e)
                    })
                }

                function o(e) {
                    return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
                        return "\\x0" + r(e)
                    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
                        return "\\x" + r(e)
                    })
                }

                function u(e) {
                    switch (e.type) {
                        case "literal":
                            return '"' + n(e.text) + '"';
                        case "class":
                            var t = e.parts.map(function(e) {
                                return Array.isArray(e) ? o(e[0]) + "-" + o(e[1]) : o(e)
                            });
                            return "[" + (e.inverted ? "^" : "") + t + "]";
                        case "any":
                            return "any character";
                        case "end":
                            return "end of input";
                        case "other":
                            return e.description
                    }
                }
                return "Expected " + function(e) {
                    var t, r, n = e.map(u);
                    if (n.sort(), n.length > 0) {
                        for (t = 1, r = 1; t < n.length; t++) n[t - 1] !== n[t] && (n[r] = n[t], r++);
                        n.length = r
                    }
                    switch (n.length) {
                        case 1:
                            return n[0];
                        case 2:
                            return n[0] + " or " + n[1];
                        default:
                            return n.slice(0, -1).join(", ") + ", or " + n[n.length - 1]
                    }
                }(e) + " but " + ((a = t) ? '"' + n(a) + '"' : "end of input") + " found.";
                var a
            }, t
        }(Error);
    var v = function(e, r) {
            r = void 0 !== r ? r : {};
            var n, o = {},
                u = {
                    start: Ft
                },
                a = Ft,
                i = function(e) {
                    return e.join("")
                },
                c = function(e) {
                    return d({
                        type: t.literal,
                        value: e
                    }, er())
                },
                s = "#",
                l = bt("#", !1),
                f = function() {
                    return d({
                        type: t.pound
                    }, er())
                },
                p = xt("tagElement"),
                h = "<",
                g = bt("<", !1),
                m = "/>",
                v = bt("/>", !1),
                A = function(e) {
                    return d({
                        type: t.literal,
                        value: e.join("")
                    }, er())
                },
                b = function(e, r, n) {
                    return e !== n && At('Mismatch tag "' + e + '" !== "' + n + '"', vt()), d({
                        type: t.tag,
                        value: e,
                        children: r
                    }, er())
                },
                w = function() {
                    return Kt.push("openingTag"), !0
                },
                x = ">",
                C = bt(">", !1),
                E = function(e) {
                    return Kt.pop(), !0
                },
                D = function(e) {
                    return e
                },
                F = "</",
                I = bt("</", !1),
                k = function() {
                    return Kt.push("closingTag"), !0
                },
                _ = xt("argumentElement"),
                S = "{",
                T = bt("{", !1),
                O = "}",
                j = bt("}", !1),
                N = function(e) {
                    return d({
                        type: t.argument,
                        value: e
                    }, er())
                },
                P = xt("numberSkeletonId"),
                L = /^['\/{}]/,
                R = wt(["'", "/", "{", "}"], !1, !1),
                M = {
                    type: "any"
                },
                V = xt("numberSkeletonTokenOption"),
                z = "/",
                Z = bt("/", !1),
                B = function(e) {
                    return e
                },
                U = xt("numberSkeletonToken"),
                G = function(e, t) {
                    return {
                        stem: e,
                        options: t
                    }
                },
                H = function(e) {
                    return d({
                        type: 0,
                        tokens: e
                    }, er())
                },
                Y = "::",
                $ = bt("::", !1),
                q = function(e) {
                    return e
                },
                X = function() {
                    return Kt.push("numberArgStyle"), !0
                },
                J = function(e) {
                    return Kt.pop(), e.replace(/\s*$/, "")
                },
                K = ",",
                Q = bt(",", !1),
                W = "number",
                ee = bt("number", !1),
                te = function(e, r, n) {
                    return d({
                        type: "number" === r ? t.number : "date" === r ? t.date : t.time,
                        style: n && n[2],
                        value: e
                    }, er())
                },
                re = "'",
                ne = bt("'", !1),
                oe = /^[^']/,
                ue = wt(["'"], !0, !1),
                ae = /^[^a-zA-Z'{}]/,
                ie = wt([
                    ["a", "z"],
                    ["A", "Z"], "'", "{", "}"
                ], !0, !1),
                ce = /^[a-zA-Z]/,
                se = wt([
                    ["a", "z"],
                    ["A", "Z"]
                ], !1, !1),
                le = function(e) {
                    return d({
                        type: 1,
                        pattern: e
                    }, er())
                },
                fe = function() {
                    return Kt.push("dateOrTimeArgStyle"), !0
                },
                pe = "date",
                he = bt("date", !1),
                ge = "time",
                me = bt("time", !1),
                de = "plural",
                ye = bt("plural", !1),
                ve = "selectordinal",
                Ae = bt("selectordinal", !1),
                be = "offset:",
                we = bt("offset:", !1),
                xe = function(e, r, n, o) {
                    return d({
                        type: t.plural,
                        pluralType: "plural" === r ? "cardinal" : "ordinal",
                        value: e,
                        offset: n ? n[2] : 0,
                        options: o.reduce(function(e, t) {
                            var r = t.id,
                                n = t.value,
                                o = t.location;
                            return r in e && At('Duplicate option "' + r + '" in plural element: "' + yt() + '"', vt()), e[r] = {
                                value: n,
                                location: o
                            }, e
                        }, {})
                    }, er())
                },
                Ce = "select",
                Ee = bt("select", !1),
                De = function(e, r) {
                    return d({
                        type: t.select,
                        value: e,
                        options: r.reduce(function(e, t) {
                            var r = t.id,
                                n = t.value,
                                o = t.location;
                            return r in e && At('Duplicate option "' + r + '" in select element: "' + yt() + '"', vt()), e[r] = {
                                value: n,
                                location: o
                            }, e
                        }, {})
                    }, er())
                },
                Fe = "=",
                Ie = bt("=", !1),
                ke = function(e) {
                    return Kt.push("select"), !0
                },
                _e = function(e, t) {
                    return Kt.pop(), d({
                        id: e,
                        value: t
                    }, er())
                },
                Se = function(e) {
                    return Kt.push("plural"), !0
                },
                Te = function(e, t) {
                    return Kt.pop(), d({
                        id: e,
                        value: t
                    }, er())
                },
                Oe = xt("whitespace"),
                je = /^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
                Ne = wt([
                    ["\t", "\r"], " ", "", " ", " ", [" ", " "], "\u2028", "\u2029", " ", " ", "　"
                ], !1, !1),
                Pe = xt("syntax pattern"),
                Le = /^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,
                Re = wt([
                    ["!", "/"],
                    [":", "@"],
                    ["[", "^"], "`", ["{", "~"],
                    ["¡", "§"], "©", "«", "¬", "®", "°", "±", "¶", "»", "¿", "×", "÷", ["‐", "‧"],
                    ["‰", "‾"],
                    ["⁁", "⁓"],
                    ["⁕", "⁞"],
                    ["←", "⑟"],
                    ["─", "❵"],
                    ["➔", "⯿"],
                    ["⸀", "⹿"],
                    ["、", "〃"],
                    ["〈", "〠"], "〰", "﴾", "﴿", "﹅", "﹆"
                ], !1, !1),
                Me = xt("optional whitespace"),
                Ve = xt("number"),
                ze = "-",
                Ze = bt("-", !1),
                Be = function(e, t) {
                    return t ? e ? -t : t : 0
                },
                Ue = xt("double apostrophes"),
                Ge = "''",
                He = bt("''", !1),
                Ye = function() {
                    return "'"
                },
                $e = function(e, t) {
                    return e + t.replace("''", "'")
                },
                qe = function(e) {
                    return (tr() || "<" !== e) && "{" !== e && !(Wt() && "#" === e) && !(Qt() && "}" === e) && !(!tr() && Qt() && ">" === e)
                },
                Xe = "\n",
                Je = bt("\n", !1),
                Ke = function(e) {
                    return "<" === e || ">" === e || "{" === e || "}" === e || Wt() && "#" === e
                },
                Qe = xt("argNameOrNumber"),
                We = xt("validTag"),
                et = xt("argNumber"),
                tt = "0",
                rt = bt("0", !1),
                nt = function() {
                    return 0
                },
                ot = /^[1-9]/,
                ut = wt([
                    ["1", "9"]
                ], !1, !1),
                at = /^[0-9]/,
                it = wt([
                    ["0", "9"]
                ], !1, !1),
                ct = function(e) {
                    return parseInt(e.join(""), 10)
                },
                st = xt("argName"),
                lt = xt("tagName"),
                ft = 0,
                pt = 0,
                ht = [{
                    line: 1,
                    column: 1
                }],
                gt = 0,
                mt = [],
                dt = 0;
            if (void 0 !== r.startRule) {
                if (!(r.startRule in u)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
                a = u[r.startRule]
            }

            function yt() {
                return e.substring(pt, ft)
            }

            function vt() {
                return Et(pt, ft)
            }

            function At(e, t) {
                throw function(e, t) {
                    return new y(e, [], "", t)
                }(e, t = void 0 !== t ? t : Et(pt, ft))
            }

            function bt(e, t) {
                return {
                    type: "literal",
                    text: e,
                    ignoreCase: t
                }
            }

            function wt(e, t, r) {
                return {
                    type: "class",
                    parts: e,
                    inverted: t,
                    ignoreCase: r
                }
            }

            function xt(e) {
                return {
                    type: "other",
                    description: e
                }
            }

            function Ct(t) {
                var r, n = ht[t];
                if (n) return n;
                for (r = t - 1; !ht[r];) r--;
                for (n = {
                        line: (n = ht[r]).line,
                        column: n.column
                    }; r < t;) 10 === e.charCodeAt(r) ? (n.line++, n.column = 1) : n.column++, r++;
                return ht[t] = n, n
            }

            function Et(e, t) {
                var r = Ct(e),
                    n = Ct(t);
                return {
                    start: {
                        offset: e,
                        line: r.line,
                        column: r.column
                    },
                    end: {
                        offset: t,
                        line: n.line,
                        column: n.column
                    }
                }
            }

            function Dt(e) {
                ft < gt || (ft > gt && (gt = ft, mt = []), mt.push(e))
            }

            function Ft() {
                return It()
            }

            function It() {
                var e, t;
                for (e = [], t = kt(); t !== o;) e.push(t), t = kt();
                return e
            }

            function kt() {
                var t;
                return (t = function() {
                    var e, t;
                    return e = ft, (t = _t()) !== o && (pt = e, t = c(t)), e = t
                }()) === o && (t = function() {
                    var t, r, n, u;
                    return dt++, t = ft, 123 === e.charCodeAt(ft) ? (r = S, ft++) : (r = o, 0 === dt && Dt(T)), r !== o && Vt() !== o && (n = Gt()) !== o && Vt() !== o ? (125 === e.charCodeAt(ft) ? (u = O, ft++) : (u = o, 0 === dt && Dt(j)), u !== o ? (pt = t, r = N(n), t = r) : (ft = t, t = o)) : (ft = t, t = o), dt--, t === o && (r = o, 0 === dt && Dt(_)), t
                }()) === o && (t = function() {
                    var t;
                    return (t = function() {
                        var t, r, n, u, a, i, c, s, l;
                        return t = ft, 123 === e.charCodeAt(ft) ? (r = S, ft++) : (r = o, 0 === dt && Dt(T)), r !== o && Vt() !== o && (n = Gt()) !== o && Vt() !== o ? (44 === e.charCodeAt(ft) ? (u = K, ft++) : (u = o, 0 === dt && Dt(Q)), u !== o && Vt() !== o ? (e.substr(ft, 6) === W ? (a = W, ft += 6) : (a = o, 0 === dt && Dt(ee)), a !== o && Vt() !== o ? (i = ft, 44 === e.charCodeAt(ft) ? (c = K, ft++) : (c = o, 0 === dt && Dt(Q)), c !== o && (s = Vt()) !== o && (l = function() {
                            var t, r, n;
                            return t = ft, e.substr(ft, 2) === Y ? (r = Y, ft += 2) : (r = o, 0 === dt && Dt($)), r !== o && (n = function() {
                                var e, t, r;
                                if (e = ft, t = [], (r = Ot()) !== o)
                                    for (; r !== o;) t.push(r), r = Ot();
                                else t = o;
                                return t !== o && (pt = e, t = H(t)), e = t
                            }()) !== o ? (pt = t, r = q(n), t = r) : (ft = t, t = o), t === o && (t = ft, pt = ft, (r = (r = X()) ? void 0 : o) !== o && (n = _t()) !== o ? (pt = t, r = J(n), t = r) : (ft = t, t = o)), t
                        }()) !== o ? i = c = [c, s, l] : (ft = i, i = o), i === o && (i = null), i !== o && (c = Vt()) !== o ? (125 === e.charCodeAt(ft) ? (s = O, ft++) : (s = o, 0 === dt && Dt(j)), s !== o ? (pt = t, r = te(n, a, i), t = r) : (ft = t, t = o)) : (ft = t, t = o)) : (ft = t, t = o)) : (ft = t, t = o)) : (ft = t, t = o), t
                    }()) === o && (t = function() {
                        var t, r, n, u, a, i, c, s, l;
                        return t = ft, 123 === e.charCodeAt(ft) ? (r = S, ft++) : (r = o, 0 === dt && Dt(T)), r !== o && Vt() !== o && (n = Gt()) !== o && Vt() !== o ? (44 === e.charCodeAt(ft) ? (u = K, ft++) : (u = o, 0 === dt && Dt(Q)), u !== o && Vt() !== o ? (e.substr(ft, 4) === pe ? (a = pe, ft += 4) : (a = o, 0 === dt && Dt(he)), a === o && (e.substr(ft, 4) === ge ? (a = ge, ft += 4) : (a = o, 0 === dt && Dt(me))), a !== o && Vt() !== o ? (i = ft, 44 === e.charCodeAt(ft) ? (c = K, ft++) : (c = o, 0 === dt && Dt(Q)), c !== o && (s = Vt()) !== o && (l = function() {
                            var t, r, n;
                            return t = ft, e.substr(ft, 2) === Y ? (r = Y, ft += 2) : (r = o, 0 === dt && Dt($)), r !== o && (n = function() {
                                var t, r, n, u;
                                if (t = ft, r = ft, n = [], (u = jt()) === o && (u = Nt()), u !== o)
                                    for (; u !== o;) n.push(u), (u = jt()) === o && (u = Nt());
                                else n = o;
                                return (r = n !== o ? e.substring(r, ft) : n) !== o && (pt = t, r = le(r)), t = r
                            }()) !== o ? (pt = t, r = q(n), t = r) : (ft = t, t = o), t === o && (t = ft, pt = ft, (r = (r = fe()) ? void 0 : o) !== o && (n = _t()) !== o ? (pt = t, r = J(n), t = r) : (ft = t, t = o)), t
                        }()) !== o ? i = c = [c, s, l] : (ft = i, i = o), i === o && (i = null), i !== o && (c = Vt()) !== o ? (125 === e.charCodeAt(ft) ? (s = O, ft++) : (s = o, 0 === dt && Dt(j)), s !== o ? (pt = t, r = te(n, a, i), t = r) : (ft = t, t = o)) : (ft = t, t = o)) : (ft = t, t = o)) : (ft = t, t = o)) : (ft = t, t = o), t
                    }()), t
                }()) === o && (t = function() {
                    var t, r, n, u, a, i, c, s, l, f, p;
                    if (t = ft, 123 === e.charCodeAt(ft) ? (r = S, ft++) : (r = o, 0 === dt && Dt(T)), r !== o)
                        if (Vt() !== o)
                            if ((n = Gt()) !== o)
                                if (Vt() !== o)
                                    if (44 === e.charCodeAt(ft) ? (u = K, ft++) : (u = o, 0 === dt && Dt(Q)), u !== o)
                                        if (Vt() !== o)
                                            if (e.substr(ft, 6) === de ? (a = de, ft += 6) : (a = o, 0 === dt && Dt(ye)), a === o && (e.substr(ft, 13) === ve ? (a = ve, ft += 13) : (a = o, 0 === dt && Dt(Ae))), a !== o)
                                                if (Vt() !== o)
                                                    if (44 === e.charCodeAt(ft) ? (i = K, ft++) : (i = o, 0 === dt && Dt(Q)), i !== o)
                                                        if (Vt() !== o)
                                                            if (c = ft, e.substr(ft, 7) === be ? (s = be, ft += 7) : (s = o, 0 === dt && Dt(we)), s !== o && (l = Vt()) !== o && (f = zt()) !== o ? c = s = [s, l, f] : (ft = c, c = o), c === o && (c = null), c !== o)
                                                                if ((s = Vt()) !== o) {
                                                                    if (l = [], (f = Lt()) !== o)
                                                                        for (; f !== o;) l.push(f), f = Lt();
                                                                    else l = o;
                                                                    l !== o && (f = Vt()) !== o ? (125 === e.charCodeAt(ft) ? (p = O, ft++) : (p = o, 0 === dt && Dt(j)), p !== o ? (pt = t, r = xe(n, a, c, l), t = r) : (ft = t, t = o)) : (ft = t, t = o)
                                                                } else ft = t, t = o;
                    else ft = t, t = o;
                    else ft = t, t = o;
                    else ft = t, t = o;
                    else ft = t, t = o;
                    else ft = t, t = o;
                    else ft = t, t = o;
                    else ft = t, t = o;
                    else ft = t, t = o;
                    else ft = t, t = o;
                    else ft = t, t = o;
                    else ft = t, t = o;
                    return t
                }()) === o && (t = function() {
                    var t, r, n, u, a, i, c, s, l;
                    if (t = ft, 123 === e.charCodeAt(ft) ? (r = S, ft++) : (r = o, 0 === dt && Dt(T)), r !== o)
                        if (Vt() !== o)
                            if ((n = Gt()) !== o)
                                if (Vt() !== o)
                                    if (44 === e.charCodeAt(ft) ? (u = K, ft++) : (u = o, 0 === dt && Dt(Q)), u !== o)
                                        if (Vt() !== o)
                                            if (e.substr(ft, 6) === Ce ? (a = Ce, ft += 6) : (a = o, 0 === dt && Dt(Ee)), a !== o)
                                                if (Vt() !== o)
                                                    if (44 === e.charCodeAt(ft) ? (i = K, ft++) : (i = o, 0 === dt && Dt(Q)), i !== o)
                                                        if (Vt() !== o) {
                                                            if (c = [], (s = Pt()) !== o)
                                                                for (; s !== o;) c.push(s), s = Pt();
                                                            else c = o;
                                                            c !== o && (s = Vt()) !== o ? (125 === e.charCodeAt(ft) ? (l = O, ft++) : (l = o, 0 === dt && Dt(j)), l !== o ? (pt = t, r = De(n, c), t = r) : (ft = t, t = o)) : (ft = t, t = o)
                                                        } else ft = t, t = o;
                    else ft = t, t = o;
                    else ft = t, t = o;
                    else ft = t, t = o;
                    else ft = t, t = o;
                    else ft = t, t = o;
                    else ft = t, t = o;
                    else ft = t, t = o;
                    else ft = t, t = o;
                    else ft = t, t = o;
                    return t
                }()) === o && (t = function() {
                    var t, r, n, u, a, i;
                    return dt++, t = ft, r = ft, 60 === e.charCodeAt(ft) ? (n = h, ft++) : (n = o, 0 === dt && Dt(g)), n !== o && (u = Ht()) !== o && (a = Vt()) !== o ? (e.substr(ft, 2) === m ? (i = m, ft += 2) : (i = o, 0 === dt && Dt(v)), i !== o ? r = n = [n, u, a, i] : (ft = r, r = o)) : (ft = r, r = o), r !== o && (pt = t, r = A(r)), (t = r) === o && (t = ft, (r = function() {
                        var t, r, n, u;
                        return t = ft, 60 === e.charCodeAt(ft) ? (r = h, ft++) : (r = o, 0 === dt && Dt(g)), r !== o ? (pt = ft, (w() ? void 0 : o) !== o && (n = Ht()) !== o ? (62 === e.charCodeAt(ft) ? (u = x, ft++) : (u = o, 0 === dt && Dt(C)), u !== o ? (pt = ft, (E() ? void 0 : o) !== o ? (pt = t, r = D(n), t = r) : (ft = t, t = o)) : (ft = t, t = o)) : (ft = t, t = o)) : (ft = t, t = o), t
                    }()) !== o && (n = It()) !== o && (u = function() {
                        var t, r, n, u;
                        return t = ft, e.substr(ft, 2) === F ? (r = F, ft += 2) : (r = o, 0 === dt && Dt(I)), r !== o ? (pt = ft, (k() ? void 0 : o) !== o && (n = Ht()) !== o ? (62 === e.charCodeAt(ft) ? (u = x, ft++) : (u = o, 0 === dt && Dt(C)), u !== o ? (pt = ft, (E() ? void 0 : o) !== o ? (pt = t, r = D(n), t = r) : (ft = t, t = o)) : (ft = t, t = o)) : (ft = t, t = o)) : (ft = t, t = o), t
                    }()) !== o ? (pt = t, r = b(r, n, u), t = r) : (ft = t, t = o)), dt--, t === o && (r = o, 0 === dt && Dt(p)), t
                }()) === o && (t = function() {
                    var t, r;
                    return t = ft, 35 === e.charCodeAt(ft) ? (r = s, ft++) : (r = o, 0 === dt && Dt(l)), r !== o && (pt = t, r = f()), t = r
                }()), t
            }

            function _t() {
                var e, t, r;
                if (e = ft, t = [], (r = Zt()) === o && (r = Bt()) === o && (r = Ut()), r !== o)
                    for (; r !== o;) t.push(r), (r = Zt()) === o && (r = Bt()) === o && (r = Ut());
                else t = o;
                return t !== o && (pt = e, t = i(t)), e = t
            }

            function St() {
                var t, r, n, u, a;
                if (dt++, t = ft, r = [], n = ft, u = ft, dt++, (a = Rt()) === o && (L.test(e.charAt(ft)) ? (a = e.charAt(ft), ft++) : (a = o, 0 === dt && Dt(R))), dt--, a === o ? u = void 0 : (ft = u, u = o), u !== o ? (e.length > ft ? (a = e.charAt(ft), ft++) : (a = o, 0 === dt && Dt(M)), a !== o ? n = u = [u, a] : (ft = n, n = o)) : (ft = n, n = o), n !== o)
                    for (; n !== o;) r.push(n), n = ft, u = ft, dt++, (a = Rt()) === o && (L.test(e.charAt(ft)) ? (a = e.charAt(ft), ft++) : (a = o, 0 === dt && Dt(R))), dt--, a === o ? u = void 0 : (ft = u, u = o), u !== o ? (e.length > ft ? (a = e.charAt(ft), ft++) : (a = o, 0 === dt && Dt(M)), a !== o ? n = u = [u, a] : (ft = n, n = o)) : (ft = n, n = o);
                else r = o;
                return t = r !== o ? e.substring(t, ft) : r, dt--, t === o && (r = o, 0 === dt && Dt(P)), t
            }

            function Tt() {
                var t, r, n;
                return dt++, t = ft, 47 === e.charCodeAt(ft) ? (r = z, ft++) : (r = o, 0 === dt && Dt(Z)), r !== o && (n = St()) !== o ? (pt = t, t = r = B(n)) : (ft = t, t = o), dt--, t === o && (r = o, 0 === dt && Dt(V)), t
            }

            function Ot() {
                var e, t, r, n;
                if (dt++, e = ft, Vt() !== o)
                    if ((t = St()) !== o) {
                        for (r = [], n = Tt(); n !== o;) r.push(n), n = Tt();
                        r !== o ? (pt = e, e = G(t, r)) : (ft = e, e = o)
                    } else ft = e, e = o;
                else ft = e, e = o;
                return dt--, e === o && 0 === dt && Dt(U), e
            }

            function jt() {
                var t, r, n, u;
                if (t = ft, 39 === e.charCodeAt(ft) ? (r = re, ft++) : (r = o, 0 === dt && Dt(ne)), r !== o) {
                    if (n = [], (u = Zt()) === o && (oe.test(e.charAt(ft)) ? (u = e.charAt(ft), ft++) : (u = o, 0 === dt && Dt(ue))), u !== o)
                        for (; u !== o;) n.push(u), (u = Zt()) === o && (oe.test(e.charAt(ft)) ? (u = e.charAt(ft), ft++) : (u = o, 0 === dt && Dt(ue)));
                    else n = o;
                    n !== o ? (39 === e.charCodeAt(ft) ? (u = re, ft++) : (u = o, 0 === dt && Dt(ne)), u !== o ? t = r = [r, n, u] : (ft = t, t = o)) : (ft = t, t = o)
                } else ft = t, t = o;
                if (t === o)
                    if (t = [], (r = Zt()) === o && (ae.test(e.charAt(ft)) ? (r = e.charAt(ft), ft++) : (r = o, 0 === dt && Dt(ie))), r !== o)
                        for (; r !== o;) t.push(r), (r = Zt()) === o && (ae.test(e.charAt(ft)) ? (r = e.charAt(ft), ft++) : (r = o, 0 === dt && Dt(ie)));
                    else t = o;
                return t
            }

            function Nt() {
                var t, r;
                if (t = [], ce.test(e.charAt(ft)) ? (r = e.charAt(ft), ft++) : (r = o, 0 === dt && Dt(se)), r !== o)
                    for (; r !== o;) t.push(r), ce.test(e.charAt(ft)) ? (r = e.charAt(ft), ft++) : (r = o, 0 === dt && Dt(se));
                else t = o;
                return t
            }

            function Pt() {
                var t, r, n, u, a;
                return t = ft, Vt() !== o && (r = $t()) !== o && Vt() !== o ? (123 === e.charCodeAt(ft) ? (n = S, ft++) : (n = o, 0 === dt && Dt(T)), n !== o ? (pt = ft, (ke() ? void 0 : o) !== o && (u = It()) !== o ? (125 === e.charCodeAt(ft) ? (a = O, ft++) : (a = o, 0 === dt && Dt(j)), a !== o ? (pt = t, t = _e(r, u)) : (ft = t, t = o)) : (ft = t, t = o)) : (ft = t, t = o)) : (ft = t, t = o), t
            }

            function Lt() {
                var t, r, n, u, a;
                return t = ft, Vt() !== o && (r = function() {
                    var t, r, n, u;
                    return t = ft, r = ft, 61 === e.charCodeAt(ft) ? (n = Fe, ft++) : (n = o, 0 === dt && Dt(Ie)), n !== o && (u = zt()) !== o ? r = n = [n, u] : (ft = r, r = o), (t = r !== o ? e.substring(t, ft) : r) === o && (t = $t()), t
                }()) !== o && Vt() !== o ? (123 === e.charCodeAt(ft) ? (n = S, ft++) : (n = o, 0 === dt && Dt(T)), n !== o ? (pt = ft, (Se() ? void 0 : o) !== o && (u = It()) !== o ? (125 === e.charCodeAt(ft) ? (a = O, ft++) : (a = o, 0 === dt && Dt(j)), a !== o ? (pt = t, t = Te(r, u)) : (ft = t, t = o)) : (ft = t, t = o)) : (ft = t, t = o)) : (ft = t, t = o), t
            }

            function Rt() {
                var t;
                return dt++, je.test(e.charAt(ft)) ? (t = e.charAt(ft), ft++) : (t = o, 0 === dt && Dt(Ne)), dt--, t === o && 0 === dt && Dt(Oe), t
            }

            function Mt() {
                var t;
                return dt++, Le.test(e.charAt(ft)) ? (t = e.charAt(ft), ft++) : (t = o, 0 === dt && Dt(Re)), dt--, t === o && 0 === dt && Dt(Pe), t
            }

            function Vt() {
                var t, r, n;
                for (dt++, t = ft, r = [], n = Rt(); n !== o;) r.push(n), n = Rt();
                return t = r !== o ? e.substring(t, ft) : r, dt--, t === o && (r = o, 0 === dt && Dt(Me)), t
            }

            function zt() {
                var t, r, n;
                return dt++, t = ft, 45 === e.charCodeAt(ft) ? (r = ze, ft++) : (r = o, 0 === dt && Dt(Ze)), r === o && (r = null), r !== o && (n = Yt()) !== o ? (pt = t, t = r = Be(r, n)) : (ft = t, t = o), dt--, t === o && (r = o, 0 === dt && Dt(Ve)), t
            }

            function Zt() {
                var t, r;
                return dt++, t = ft, e.substr(ft, 2) === Ge ? (r = Ge, ft += 2) : (r = o, 0 === dt && Dt(He)), r !== o && (pt = t, r = Ye()), dt--, (t = r) === o && (r = o, 0 === dt && Dt(Ue)), t
            }

            function Bt() {
                var t, r, n, u, a, i;
                if (t = ft, 39 === e.charCodeAt(ft) ? (r = re, ft++) : (r = o, 0 === dt && Dt(ne)), r !== o)
                    if ((n = function() {
                            var t, r, n, u;
                            return t = ft, r = ft, e.length > ft ? (n = e.charAt(ft), ft++) : (n = o, 0 === dt && Dt(M)), n !== o ? (pt = ft, (u = (u = Ke(n)) ? void 0 : o) !== o ? r = n = [n, u] : (ft = r, r = o)) : (ft = r, r = o), t = r !== o ? e.substring(t, ft) : r
                        }()) !== o) {
                        for (u = ft, a = [], e.substr(ft, 2) === Ge ? (i = Ge, ft += 2) : (i = o, 0 === dt && Dt(He)), i === o && (oe.test(e.charAt(ft)) ? (i = e.charAt(ft), ft++) : (i = o, 0 === dt && Dt(ue))); i !== o;) a.push(i), e.substr(ft, 2) === Ge ? (i = Ge, ft += 2) : (i = o, 0 === dt && Dt(He)), i === o && (oe.test(e.charAt(ft)) ? (i = e.charAt(ft), ft++) : (i = o, 0 === dt && Dt(ue)));
                        (u = a !== o ? e.substring(u, ft) : a) !== o ? (39 === e.charCodeAt(ft) ? (a = re, ft++) : (a = o, 0 === dt && Dt(ne)), a === o && (a = null), a !== o ? (pt = t, t = r = $e(n, u)) : (ft = t, t = o)) : (ft = t, t = o)
                    } else ft = t, t = o;
                else ft = t, t = o;
                return t
            }

            function Ut() {
                var t, r, n, u;
                return t = ft, r = ft, e.length > ft ? (n = e.charAt(ft), ft++) : (n = o, 0 === dt && Dt(M)), n !== o ? (pt = ft, (u = (u = qe(n)) ? void 0 : o) !== o ? r = n = [n, u] : (ft = r, r = o)) : (ft = r, r = o), r === o && (10 === e.charCodeAt(ft) ? (r = Xe, ft++) : (r = o, 0 === dt && Dt(Je))), t = r !== o ? e.substring(t, ft) : r
            }

            function Gt() {
                var t, r;
                return dt++, t = ft, (r = Yt()) === o && (r = $t()), t = r !== o ? e.substring(t, ft) : r, dt--, t === o && (r = o, 0 === dt && Dt(Qe)), t
            }

            function Ht() {
                var t, r;
                return dt++, t = ft, (r = Yt()) === o && (r = function() {
                    var t, r, n, u, a;
                    if (dt++, t = ft, r = [], 45 === e.charCodeAt(ft) ? (n = ze, ft++) : (n = o, 0 === dt && Dt(Ze)), n === o && (n = ft, u = ft, dt++, (a = Rt()) === o && (a = Mt()), dt--, a === o ? u = void 0 : (ft = u, u = o), u !== o ? (e.length > ft ? (a = e.charAt(ft), ft++) : (a = o, 0 === dt && Dt(M)), a !== o ? n = u = [u, a] : (ft = n, n = o)) : (ft = n, n = o)), n !== o)
                        for (; n !== o;) r.push(n), 45 === e.charCodeAt(ft) ? (n = ze, ft++) : (n = o, 0 === dt && Dt(Ze)), n === o && (n = ft, u = ft, dt++, (a = Rt()) === o && (a = Mt()), dt--, a === o ? u = void 0 : (ft = u, u = o), u !== o ? (e.length > ft ? (a = e.charAt(ft), ft++) : (a = o, 0 === dt && Dt(M)), a !== o ? n = u = [u, a] : (ft = n, n = o)) : (ft = n, n = o));
                    else r = o;
                    return t = r !== o ? e.substring(t, ft) : r, dt--, t === o && (r = o, 0 === dt && Dt(lt)), t
                }()), t = r !== o ? e.substring(t, ft) : r, dt--, t === o && (r = o, 0 === dt && Dt(We)), t
            }

            function Yt() {
                var t, r, n, u, a;
                if (dt++, t = ft, 48 === e.charCodeAt(ft) ? (r = tt, ft++) : (r = o, 0 === dt && Dt(rt)), r !== o && (pt = t, r = nt()), (t = r) === o) {
                    if (t = ft, r = ft, ot.test(e.charAt(ft)) ? (n = e.charAt(ft), ft++) : (n = o, 0 === dt && Dt(ut)), n !== o) {
                        for (u = [], at.test(e.charAt(ft)) ? (a = e.charAt(ft), ft++) : (a = o, 0 === dt && Dt(it)); a !== o;) u.push(a), at.test(e.charAt(ft)) ? (a = e.charAt(ft), ft++) : (a = o, 0 === dt && Dt(it));
                        u !== o ? r = n = [n, u] : (ft = r, r = o)
                    } else ft = r, r = o;
                    r !== o && (pt = t, r = ct(r)), t = r
                }
                return dt--, t === o && (r = o, 0 === dt && Dt(et)), t
            }

            function $t() {
                var t, r, n, u, a;
                if (dt++, t = ft, r = [], n = ft, u = ft, dt++, (a = Rt()) === o && (a = Mt()), dt--, a === o ? u = void 0 : (ft = u, u = o), u !== o ? (e.length > ft ? (a = e.charAt(ft), ft++) : (a = o, 0 === dt && Dt(M)), a !== o ? n = u = [u, a] : (ft = n, n = o)) : (ft = n, n = o), n !== o)
                    for (; n !== o;) r.push(n), n = ft, u = ft, dt++, (a = Rt()) === o && (a = Mt()), dt--, a === o ? u = void 0 : (ft = u, u = o), u !== o ? (e.length > ft ? (a = e.charAt(ft), ft++) : (a = o, 0 === dt && Dt(M)), a !== o ? n = u = [u, a] : (ft = n, n = o)) : (ft = n, n = o);
                else r = o;
                return t = r !== o ? e.substring(t, ft) : r, dt--, t === o && (r = o, 0 === dt && Dt(st)), t
            }
            var qt, Xt, Jt, Kt = ["root"];

            function Qt() {
                return Kt.length > 1
            }

            function Wt() {
                return "plural" === Kt[Kt.length - 1]
            }

            function er() {
                return r && r.captureLocation ? {
                    location: vt()
                } : {}
            }

            function tr() {
                return r && r.ignoreTag
            }
            if ((n = a()) !== o && ft === e.length) return n;
            throw n !== o && ft < e.length && Dt({
                type: "end"
            }), qt = mt, Xt = gt < e.length ? e.charAt(gt) : null, Jt = gt < e.length ? Et(gt, gt + 1) : Et(gt, gt), new y(y.buildMessage(qt, Xt), qt, Xt, Jt)
        },
        A = function() {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
            var n = Array(e),
                o = 0;
            for (t = 0; t < r; t++)
                for (var u = arguments[t], a = 0, i = u.length; a < i; a++, o++) n[o] = u[a];
            return n
        },
        b = /(^|[^\\])#/g;
    var w = function() {
            return (w = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        },
        x = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

    function C(e) {
        var t = {};
        return e.replace(x, function(e) {
            var r = e.length;
            switch (e[0]) {
                case "G":
                    t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
                    break;
                case "y":
                    t.year = 2 === r ? "2-digit" : "numeric";
                    break;
                case "Y":
                case "u":
                case "U":
                case "r":
                    throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                case "q":
                case "Q":
                    throw new RangeError("`q/Q` (quarter) patterns are not supported");
                case "M":
                case "L":
                    t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
                    break;
                case "w":
                case "W":
                    throw new RangeError("`w/W` (week) patterns are not supported");
                case "d":
                    t.day = ["numeric", "2-digit"][r - 1];
                    break;
                case "D":
                case "F":
                case "g":
                    throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                case "E":
                    t.weekday = 4 === r ? "short" : 5 === r ? "narrow" : "short";
                    break;
                case "e":
                    if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                    t.weekday = ["short", "long", "narrow", "short"][r - 4];
                    break;
                case "c":
                    if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                    t.weekday = ["short", "long", "narrow", "short"][r - 4];
                    break;
                case "a":
                    t.hour12 = !0;
                    break;
                case "b":
                case "B":
                    throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                case "h":
                    t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
                    break;
                case "H":
                    t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
                    break;
                case "K":
                    t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
                    break;
                case "k":
                    t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
                    break;
                case "j":
                case "J":
                case "C":
                    throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                case "m":
                    t.minute = ["numeric", "2-digit"][r - 1];
                    break;
                case "s":
                    t.second = ["numeric", "2-digit"][r - 1];
                    break;
                case "S":
                case "A":
                    throw new RangeError("`S/A` (second) pattenrs are not supported, use `s` instead");
                case "z":
                    t.timeZoneName = r < 4 ? "short" : "long";
                    break;
                case "Z":
                case "O":
                case "v":
                case "V":
                case "X":
                case "x":
                    throw new RangeError("`Z/O/v/V/X/x` (timeZone) pattenrs are not supported, use `z` instead")
            }
            return ""
        }), t
    }
    var E = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        D = /^(@+)?(\+|#+)?$/g;

    function F(e) {
        var t = {};
        return e.replace(D, function(e, r, n) {
            return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        }), t
    }

    function I(e) {
        switch (e) {
            case "sign-auto":
                return {
                    signDisplay: "auto"
                };
            case "sign-accounting":
                return {
                    currencySign: "accounting"
                };
            case "sign-always":
                return {
                    signDisplay: "always"
                };
            case "sign-accounting-always":
                return {
                    signDisplay: "always",
                    currencySign: "accounting"
                };
            case "sign-except-zero":
                return {
                    signDisplay: "exceptZero"
                };
            case "sign-accounting-except-zero":
                return {
                    signDisplay: "exceptZero",
                    currencySign: "accounting"
                };
            case "sign-never":
                return {
                    signDisplay: "never"
                }
        }
    }

    function k(e) {
        var t = I(e);
        return t || {}
    }

    function _(e) {
        for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r];
            switch (o.stem) {
                case "percent":
                    t.style = "percent";
                    continue;
                case "currency":
                    t.style = "currency", t.currency = o.options[0];
                    continue;
                case "group-off":
                    t.useGrouping = !1;
                    continue;
                case "precision-integer":
                case ".":
                    t.maximumFractionDigits = 0;
                    continue;
                case "measure-unit":
                    t.style = "unit", t.unit = o.options[0].replace(/^(.*?)-/, "");
                    continue;
                case "compact-short":
                    t.notation = "compact", t.compactDisplay = "short";
                    continue;
                case "compact-long":
                    t.notation = "compact", t.compactDisplay = "long";
                    continue;
                case "scientific":
                    t = w(w(w({}, t), {
                        notation: "scientific"
                    }), o.options.reduce(function(e, t) {
                        return w(w({}, e), k(t))
                    }, {}));
                    continue;
                case "engineering":
                    t = w(w(w({}, t), {
                        notation: "engineering"
                    }), o.options.reduce(function(e, t) {
                        return w(w({}, e), k(t))
                    }, {}));
                    continue;
                case "notation-simple":
                    t.notation = "standard";
                    continue;
                case "unit-width-narrow":
                    t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
                    continue;
                case "unit-width-short":
                    t.currencyDisplay = "code", t.unitDisplay = "short";
                    continue;
                case "unit-width-full-name":
                    t.currencyDisplay = "name", t.unitDisplay = "long";
                    continue;
                case "unit-width-iso-code":
                    t.currencyDisplay = "symbol";
                    continue
            }
            if (E.test(o.stem)) {
                if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
                o.stem.replace(E, function(e, r, n, o, u, a) {
                    return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : u && a ? (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length + a.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
                }), o.options.length && (t = w(w({}, t), F(o.options[0])))
            } else if (D.test(o.stem)) t = w(w({}, t), F(o.stem));
            else {
                var u = I(o.stem);
                u && (t = w(w({}, t), u))
            }
        }
        return t
    }

    function S(e, t) {
        var r = v(e, t);
        return t && !1 === t.normalizeHashtagInPlural || function e(t) {
            t.forEach(function(t) {
                (s(t) || c(t)) && Object.keys(t.options).forEach(function(r) {
                    for (var o, u = t.options[r], a = -1, i = void 0, c = 0; c < u.value.length; c++) {
                        var s = u.value[c];
                        if (n(s) && b.test(s.value)) {
                            a = c, i = s;
                            break
                        }
                    }
                    if (i) {
                        var l = i.value.replace(b, "$1{" + t.value + ", number}"),
                            f = v(l);
                        (o = u.value).splice.apply(o, A([a, 1], f))
                    }
                    e(u.value)
                })
            })
        }(r), r
    }
    var T = function() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var n = Array(e),
            o = 0;
        for (t = 0; t < r; t++)
            for (var u = arguments[t], a = 0, i = u.length; a < i; a++, o++) n[o] = u[a];
        return n
    };

    function O(e) {
        return JSON.stringify(e.map(function(e) {
            return e && "object" == typeof e ? (t = e, Object.keys(t).sort().map(function(e) {
                var r;
                return (r = {})[e] = t[e], r
            })) : e;
            var t
        }))
    }
    var j, N = function(e, t) {
            return void 0 === t && (t = {}),
                function() {
                    for (var r, n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                    var u = O(n),
                        a = u && t[u];
                    return a || (a = new((r = e).bind.apply(r, T([void 0], n))), u && (t[u] = a)), a
                }
        },
        P = function() {
            var e = function(t, r) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                    })(t, r)
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }();
    (j = e.ErrorCode || (e.ErrorCode = {})).MISSING_VALUE = "MISSING_VALUE", j.INVALID_VALUE = "INVALID_VALUE", j.MISSING_INTL_API = "MISSING_INTL_API";
    var L, R = function(e) {
            function t(t, r, n) {
                var o = e.call(this, t) || this;
                return o.code = r, o.originalMessage = n, o
            }
            return P(t, e), t.prototype.toString = function() {
                return "[formatjs Error: " + this.code + "] " + this.message
            }, t
        }(Error),
        M = function(e) {
            function t(t, r, n, o) {
                return e.call(this, 'Invalid values for "' + t + '": "' + r + '". Options are "' + Object.keys(n).join('", "') + '"', "INVALID_VALUE", o) || this
            }
            return P(t, e), t
        }(R),
        V = function(e) {
            function t(t, r, n) {
                return e.call(this, 'Value for "' + t + '" must be of type ' + r, "INVALID_VALUE", n) || this
            }
            return P(t, e), t
        }(R),
        z = function(e) {
            function t(t, r) {
                return e.call(this, 'The intl string context variable "' + t + '" was not provided to the string "' + r + '"', "MISSING_VALUE", r) || this
            }
            return P(t, e), t
        }(R);

    function Z(e) {
        return "function" == typeof e
    }

    function B(e, t, r, g, m, d, y) {
        if (1 === e.length && n(e[0])) return [{
            type: 0,
            value: e[0].value
        }];
        for (var v = [], A = 0, b = e; A < b.length; A++) {
            var w = b[A];
            if (n(w)) v.push({
                type: 0,
                value: w.value
            });
            else if (l(w)) "number" == typeof d && v.push({
                type: 0,
                value: r.getNumberFormat(t).format(d)
            });
            else {
                var x = w.value;
                if (!(m && x in m)) throw new z(x, y);
                var E = m[x];
                if (o(w)) E && "string" != typeof E && "number" != typeof E || (E = "string" == typeof E || "number" == typeof E ? String(E) : ""), v.push({
                    type: "string" == typeof E ? 0 : 1,
                    value: E
                });
                else if (a(w)) {
                    var D = "string" == typeof w.style ? g.date[w.style] : h(w.style) ? C(w.style.pattern) : void 0;
                    v.push({
                        type: 0,
                        value: r.getDateTimeFormat(t, D).format(E)
                    })
                } else if (i(w)) {
                    D = "string" == typeof w.style ? g.time[w.style] : h(w.style) ? C(w.style.pattern) : void 0;
                    v.push({
                        type: 0,
                        value: r.getDateTimeFormat(t, D).format(E)
                    })
                } else if (u(w)) {
                    D = "string" == typeof w.style ? g.number[w.style] : p(w.style) ? _(w.style.tokens) : void 0;
                    v.push({
                        type: 0,
                        value: r.getNumberFormat(t, D).format(E)
                    })
                } else {
                    if (f(w)) {
                        var F = w.children,
                            I = w.value,
                            k = m[I];
                        if (!Z(k)) throw new V(I, "function", y);
                        var S = k(B(F, t, r, g, m, d).map(function(e) {
                            return e.value
                        }));
                        Array.isArray(S) || (S = [S]), v.push.apply(v, S.map(function(e) {
                            return {
                                type: "string" == typeof e ? 0 : 1,
                                value: e
                            }
                        }))
                    }
                    if (c(w)) {
                        if (!(T = w.options[E] || w.options.other)) throw new M(w.value, E, Object.keys(w.options), y);
                        v.push.apply(v, B(T.value, t, r, g, m))
                    } else if (s(w)) {
                        var T;
                        if (!(T = w.options["=" + E])) {
                            if (!Intl.PluralRules) throw new R('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', "MISSING_INTL_API", y);
                            var O = r.getPluralRules(t, {
                                type: w.pluralType
                            }).select(E - (w.offset || 0));
                            T = w.options[O] || w.options.other
                        }
                        if (!T) throw new M(w.value, E, Object.keys(w.options), y);
                        v.push.apply(v, B(T.value, t, r, g, m, E - (w.offset || 0)))
                    } else;
                }
            }
        }
        return function(e) {
            return e.length < 2 ? e : e.reduce(function(e, t) {
                var r = e[e.length - 1];
                return r && 0 === r.type && 0 === t.type ? r.value += t.value : e.push(t), e
            }, [])
        }(v)
    }(L = e.PART_TYPE || (e.PART_TYPE = {}))[L.literal = 0] = "literal", L[L.object = 1] = "object";
    var U = function() {
        return (U = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };

    function G(e, t) {
        return t ? Object.keys(e).reduce(function(r, n) {
            var o, u;
            return r[n] = (o = e[n], (u = t[n]) ? U(U(U({}, o || {}), u || {}), Object.keys(o).reduce(function(e, t) {
                return e[t] = U(U({}, o[t]), u[t] || {}), e
            }, {})) : o), r
        }, U({}, e)) : e
    }

    function H(e) {
        return void 0 === e && (e = {
            number: {},
            dateTime: {},
            pluralRules: {}
        }), {
            getNumberFormat: N(Intl.NumberFormat, e.number),
            getDateTimeFormat: N(Intl.DateTimeFormat, e.dateTime),
            getPluralRules: N(Intl.PluralRules, e.pluralRules)
        }
    }
    var Y = function() {
        function e(t, r, n, o) {
            var u = this;
            if (void 0 === r && (r = e.defaultLocale), this.formatterCache = {
                    number: {},
                    dateTime: {},
                    pluralRules: {}
                }, this.format = function(e) {
                    var t = u.formatToParts(e);
                    if (1 === t.length) return t[0].value;
                    var r = t.reduce(function(e, t) {
                        return e.length && 0 === t.type && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
                    }, []);
                    return r.length <= 1 ? r[0] || "" : r
                }, this.formatToParts = function(e) {
                    return B(u.ast, u.locales, u.formatters, u.formats, e, void 0, u.message)
                }, this.resolvedOptions = function() {
                    return {
                        locale: Intl.NumberFormat.supportedLocalesOf(u.locales)[0]
                    }
                }, this.getAst = function() {
                    return u.ast
                }, "string" == typeof t) {
                if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                this.ast = e.__parse(t, {
                    normalizeHashtagInPlural: !1,
                    ignoreTag: null == o ? void 0 : o.ignoreTag
                })
            } else this.ast = t;
            if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
            this.formats = G(e.formats, n), this.locales = r, this.formatters = o && o.formatters || H(this.formatterCache)
        }
        return Object.defineProperty(e, "defaultLocale", {
            get: function() {
                return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
            },
            enumerable: !0,
            configurable: !0
        }), e.memoizedDefaultLocale = null, e.__parse = S, e.formats = {
            number: {
                currency: {
                    style: "currency"
                },
                percent: {
                    style: "percent"
                }
            },
            date: {
                short: {
                    month: "numeric",
                    day: "numeric",
                    year: "2-digit"
                },
                medium: {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                },
                long: {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                },
                full: {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            },
            time: {
                short: {
                    hour: "numeric",
                    minute: "numeric"
                },
                medium: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                },
                long: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                },
                full: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                }
            }
        }, e
    }();
    e.FormatError = R, e.IntlMessageFormat = Y, e.InvalidValueError = M, e.InvalidValueTypeError = V, e.MissingValueError = z, e.createDefaultFormatters = H, e.default = Y, e.formatToParts = B, e.isFormatXMLElementFn = Z, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
document.addEventListener("DOMContentLoaded", function() {
    var e, n = document.querySelectorAll("img.lazy");

    function t() {
        e && clearTimeout(e), e = setTimeout(function() {
            var e = window.pageYOffset;
            n.forEach(function(n) {
                n.offsetTop < window.innerHeight + e && (n.src = n.dataset.lazysrc, n.classList.remove("lazy"))
            }), 0 == n.length && (document.removeEventListener("scroll", t), window.removeEventListener("resize", t), window.removeEventListener("orientationChange", t))
        }, 20)
    }
    document.addEventListener("scroll", t), window.addEventListener("resize", t), window.addEventListener("orientationChange", t)
});

function isAjaxModal(t) {
    return t.hasClass("btn-ajax-modal") || t.hasClass("add-to-basket") || t.hasClass("remove-from-basket")
}
$(function() {
    $(document).on("click", "[data-href]", function() {
        if (!isAjaxModal($(this))) {
            var t = $(this).data("href");
            return t ? (window.location.href = t, !1) : void 0
        }
    })
}), $(function() {
    $("[data-href], [data-method]").click(function() {
        if (!isAjaxModal($(this))) {
            if ("" === $(this).data("href")) return !0;
            var t = $("<form>");
            return $(this).data("method") && (t[0].method = $(this).data("method"), $("<input>", {
                name: $("meta[name=csrf-param]").attr("content"),
                value: $("meta[name=csrf-token]").attr("content")
            }).appendTo(t)), t[0].action = $(this).data("href") || $(this).attr("href"), "_blank" === $(this).attr("target") && (t[0].target = "_blank"), t.appendTo("body").submit(), !1
        }
    })
});
var LoadingBar = function(t, i, n) {
    if (!t instanceof jQuery) throw "Container should be jquery instance";
    var o, r, e, s = 0,
        a = 0;
    n = void 0 !== n ? n : 0, this.init = function() {
        t.html(function(t) {
            return t = void 0 !== t ? t : "", $('<div class="loading-bar-container"><div class="center">' + t + '</div><div class="loading-bar"><div class="bar"></div></div></div>')
        }(i)), o = t.find(".loading-bar-container"), r = t.find(".loading-bar"), e = r.find(".bar")
    }, this.setProgress = function(t) {
        s = t, e && e.width(s + "%")
    }, this.incProgress = function() {
        this.incIteration(), this.updateIteration()
    }, this.incIteration = function() {
        a++
    }, this.getIteration = function() {
        return a
    }, this.isLastIteration = function() {
        return a === n
    }, this.updateIteration = function() {
        if (!n) throw "Max iteration didnt setted";
        this.setProgress(Math.round(a * (100 / n)))
    }, this.getContent = function() {
        return r
    }, this.show = function() {
        if (this.init(), !r.length) throw "Cant find bar content";
        r.show()
    }, this.hide = function() {
        r && r.fadeOut()
    }, this.remove = function() {
        o && o.remove()
    }
};
deferUntilLoaded(function() {
    var e = $("#premium-modal");
    window.mhdeUser && $("#advanced-search-page").on("click", ".disabled-premium", function(i) {
        i.preventDefault(), i.stopPropagation();
        var a = $(this).data("origin");
        e.find(".button-premium").attr("href", routes.premium + (a ? "?origin=" + a : "")), e.modal("show")
    })
});

function throttle(t, a) {
    var e = !1,
        n = !1;
    return function() {
        e ? n = !0 : (t.call(), e = !0, setTimeout(function() {
            e = !1, n && t.call(), n = !1
        }, a))
    }
}
var addFlashMessage = function(t, a, e) {
    $("#flash-message-container").empty().append('<div class="alert alert-' + (a || "success") + '"><span class="glyphicon glyphicon-info-sign alert-icon"></span>' + t + "</div>"), e && setTimeout(function() {
        $("#flash-message-container").find(".alert").fadeOut("slow")
    }, e)
};

function MhDateTime(t) {
    var a = void 0 === t ? new Date : new Date(t);
    this.formatSql = function() {
        var t = String(a.getDate()).padStart(2, "0"),
            e = String(a.getMonth() + 1).padStart(2, "0");
        return a.getFullYear() + "-" + e + "-" + t + " " + String(a.getHours()).padStart(2, "0") + ":" + String(a.getMinutes()).padStart(2, "0") + ":" + String(a.getSeconds()).padStart(2, "0")
    }
}
$(document).ready(function() {
    var e = $("#sub-header-banner");
    e.length && e.on("click", ".close", function(e) {
        var n = $(e.target).parents("#sub-header-banner"),
            a = n.data("banner-id"),
            t = n.data("entity-id"),
            r = routes["banner-disable"] + "?bannerId=" + a + "&entityId=" + t;
        $.post(r), n.remove()
    })
});
$(function() {
    var t = 1,
        a = 4,
        o = 5,
        e = $("#ajax-modal"),
        n = [],
        d = $(".shopping-cart.btn-ajax-modal");
    d = d.clone().hide(), $("body").append(d);
    var r = function(t) {
        return $('.add-to-basket[data-hash="' + t + '"], .add-to-basket-modal[data-hash="' + t + '"]')
    };

    function c() {
        var t;
        t = [], $(".product-in-basket[data-product]").each(function(a, o) {
            t.push($(o).data("product").hash)
        }), n = t, $(".add-to-basket[data-products]").each(function(t, a) {
            ! function(t, a) {
                var o = [];
                return t.forEach(function(t, a) {
                    o.push(t.hash)
                }), uniqueConcat(o, a).length === a.length
            }($(a).data("products"), n) ? $(a).removeClass("product-in-basket"): $(a).addClass("product-in-basket")
        })
    }

    function s(t) {
        var a = JSON.parse(t);
        return Array.isArray(a) ? a : [a]
    }

    function i(t) {
        setTimeout(function() {
            var a = $(".basket-product-count");
            a.text(t), a.closest("li").removeClass("hidden")
        }, 200)
    }

    function l(t, a) {
        return a = "data-" + (a = a || "product"), $("[" + a + "]").filter(function(o, e) {
            return !$(e).closest(".basket-container").length && $(e).attr(a) == t
        })
    }

    function u() {
        var t = [];
        return $("[data-product]").each(function(a, o) {
            if ($(o).closest(".basket-container").length) return !1;
            var e = $(o).attr("data-product"); - 1 == t.indexOf(e) && t.push(e)
        }), t
    }

    function h(t) {
        $.each(t, function(t, a) {
            var o = !a.match(/[1-9]/);
            l(t).toggleClass("free-product", o), l(t, "for-product").html(a)
        })
    }
    $(document).on("click", ".add-to-basket-inner-link", function(t) {
        t.stopPropagation()
    }), $(document).on("change", '.add-to-basket input[type="checkbox"]', function(t) {
        var a = $(this).parent().closest(".add-to-basket"),
            o = a.attr("data-href").split("&" + this.name + "=" + (this.checked ? 0 : 1)).join("");
        o += "&" + this.name + "=" + (this.checked ? 1 : 0), a.attr("data-href", o)
    }), $(document).on("click", ".add-to-basket", function(t) {
        t.preventDefault(), t.stopPropagation();
        var a = $(this);
        if (e.find(".modal-header span").html(""), e.find(".modal-body").html('<div class="modal-ajax-loader"></div>'), e.modal("show"), a.hasClass("product-in-basket")) e.hasClass("in") ? (e.one("hidden.bs.modal", function() {
            d.trigger("click")
        }), e.modal("hide")) : d.trigger("click");
        else {
            var o = function() {
                var t = a.attr("data-product"),
                    o = a.data("redirectToCheckout"),
                    r = a.data("invoiced"),
                    c = a.hasClass("free-product"),
                    s = a.data("href");
                c && (s += (s.indexOf("?") > -1 ? "&" : "?") + "free=1"), $.post({
                    url: s,
                    dataType: "json",
                    data: {
                        product: t,
                        allProducts: u(),
                        hash: a.data("hash")
                    },
                    beforeSend: function(t, a) {
                        r && e.modal("hide"), e.hasClass("in") && e.triggerHandler("kbModalBeforeSubmit", [t, a])
                    },
                    success: function(c) {
                        if (h(c.prices), c.denyHtml) e.find(".modal-header span").html(""), e.find(".modal-body").html(c.denyHtml);
                        else if (c.ajaxSuccessUrl) {
                            var s = a.data("replace") ? a.closest(".tile-content").nullWhenEmpty() : null;
                            c.replaceModal ? s || (s = $("#ajax-modal > .modal-dialog > .modal-content > .modal-body")) : e.modal("hide"), loadProduct(c.ajaxSuccessUrl, s, r), n(a, t)
                        } else {
                            if (o) return void(window.location.href = "/user/payment/checkout");
                            e.hasClass("in") ? (h(c.prices), e.find(".modal-header span").html(d.attr("title")), e.find(".modal-body").html(c.basketHtml)) : d.trigger("click"), n(a, t), i(c.count), centerModal(), "undefined" != typeof googletag && googletag.cmd.push(function() {
                                googletag.destroySlots()
                            })
                        }
                    }
                }).modalOnError()
            };
            a.hasClass("free-product") && a.data("free-confirm") ? yii.confirm(a.data("free-confirm"), o) : o()
        }

        function n(t, a) {
            var o = s(a);
            t.addClass("product-in-basket"), o.forEach(function(t, a) {
                r(t.hash).addClass("product-in-basket")
            })
        }
    }), $(document).on("click", ".remove-from-basket", function() {
        var n = $(this),
            d = n.attr("data-product");
        ! function(e, n) {
            var d = s(n);
            (d = function(e) {
                var n = [],
                    d = $(".add-to-basket.product-in-basket[data-products]"),
                    r = e[0].group;
                return d.each(function(e, d) {
                    t === $(d).data("products")[0].group && [a, o].indexOf(r) > -1 && (n = $(d).data("products").map(function(t, a) {
                        return t.hash
                    }))
                }), e.filter(function(t) {
                    return -1 === n.indexOf(t.hash)
                })
            }(d)).forEach(function(t, a) {
                r(t.hash).removeClass("product-in-basket")
            })
        }(0, d), c();
        var l = $(this).data("href");
        $.ajax({
            url: l,
            type: "POST",
            dataType: "json",
            data: {
                product: d,
                allProducts: u()
            },
            beforeSend: function(t, a) {
                e.triggerHandler("kbModalBeforeSubmit", [t, a])
            },
            success: function(t) {
                e.hasClass("in") ? (h(t.prices), e.find(".modal-body").html(t.basketHtml), i(t.count), centerModal()) : window.location.reload()
            }
        }).modalOnError()
    })
});
$(document).on("switchChange.bootstrapSwitch", function(t, e) {
    var a = jQuery.extend({
            state: e
        }, $(t.target).data()),
        o = a.forceReload;
    delete a.size, delete a.url, delete a.bootstrapSwitch, $.ajax({
        method: "post",
        url: $(t.target).data("url"),
        data: a,
        success: function() {
            o && window.location.reload()
        }
    }).modalOnError()
});
$(function() {
    var e, t, n = null,
        o = null,
        l = null,
        a = $("#companyMapDetail"),
        i = $(".map-placeholder"),
        r = $(".branch-results-detail");
    if (r.length && a.length) {
        var s = null,
            c = null,
            d = !1;
        r.length && i.length ? $(this).find(".map-placeholder a").on("click", function() {
            ! function(e) {
                r.length && (l = $("#branch-results-detail-" + e), i = $("#map-placeholder-" + e), n = $("#map-container-" + e), a = n.find("#companyMapDetail"), o = n.find(".maps-grid"), s = a.data("map"), c = {
                    uri: s.uri,
                    address: s.address,
                    addressId: s.addressId,
                    streetViewAvailable: s.streetViewAvailable,
                    lat: s.lat,
                    lng: s.lng,
                    result: null
                }, l.addClass("loading"))
            }($(this).parent()[0].id.replace("map-placeholder-", "")), u(), i.fadeOut()
        }) : u(), a.on("click", function() {
            e && e.scrollWheelZoom.enable(), t && t.setOptions({
                scrollwheel: !0
            })
        }), $(".enlarge-branch-map").click(function() {
            $(this).parents().eq(3).toggleClass("enlarged"), e && e.invalidateSize(), t && google.maps.event.trigger(t, "resize")
        })
    }

    function p() {
        try {
            if (!d) return n = p, d && n(), loadStyles("osm.css"), void $.getScript(baseScriptPath + "/osm.js", function() {
                d = !0, n()
            });
            e = L.map(a[0], {
                center: [c.lat, c.lng],
                zoom: 15,
                scrollWheelZoom: !1
            }), L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).on("tileerror", function(e, t) {
                console.log(e), console.log(t)
            }).addTo(e);
            var t = L.icon({
                iconUrl: "/img/pointer-company.png",
                iconSize: [41, 54],
                iconAnchor: [20.5, 54]
            });
            L.marker([c.lat, c.lng], {
                icon: t
            }).addTo(e)
        } catch (e) {
            throw g(), e
        } finally {
            l.removeClass("loading")
        }
        var n
    }

    function g() {
        n.find(".show-maps-alert").removeClass("hidden"), o.remove()
    }

    function h() {
        c.lat && c.lng ? p() : g()
    }

    function u() {
        var e;
        r.length && ((e = l).length && e.is(":visible") && e.offset().top - $(window).scrollTop() < $(window).height() && (l.addClass("loading"), !s.lat && s.address.length ? $.getJSON("https://photon.komoot.io/api/?limit=1&q=" + encodeURIComponent(s.address), function(e) {
            if (void 0 === e.features || e.features.length < 1) return console.error(e), void g();
            c.lat = e.features[0].geometry.coordinates[1], c.lng = e.features[0].geometry.coordinates[0], h()
        }) : h()))
    }
});
$(function() {
    $("#branch-search").submit(function() {
        var a = $(this).find("#branch-search-name").val(),
            n = $(this).find("#city-branch-search-name").val();
        return n ? (window.location = UrlManager.getLangPrefixedRoute("/Branche/" + cleanBranchSearchPhrase(a) + "/" + cleanBranchSearchPhrase(n)), !1) : (window.location = UrlManager.getLangPrefixedRoute("/Branche/" + cleanBranchSearchPhrase(a)), !1)
    })
}), $(".city-button").click(function() {
    var a = $("#branch-search"),
        n = a.find("#branch-searched-name").val(),
        e = a.find("#branch-search-name").val(),
        r = e || n,
        c = $(this).val();
    return window.location = UrlManager.getLangPrefixedRoute("/Branche/" + cleanBranchSearchPhrase(r) + "/" + cleanBranchSearchPhrase(c)), !1
}), $(".single-branch-button").click(function() {
    var a = $(this).val();
    return window.location = UrlManager.getLangPrefixedRoute("/Branche/" + cleanBranchSearchPhrase(a)), !1
});
var cleanBranchSearchPhrase = function(a) {
    return a.replace(/[~`\\!@#$%*()=|\}\]{\[:;?\/><]+/g, "")
};
$(function() {
    var e = $("#premiumdocumentpackageaddtobasket-documentpackageoption");

    function a() {
        $(".preferred").length > 1 && ($selectedPackages.sort(function(e, a) {
            var t = parseInt($(e).text()),
                r = parseInt($(a).text());
            return t < r ? -1 : t > r ? 1 : 0
        }), $($selectedPackages).parent().hide(), $($selectedPackages).parent().parent().find(".bundle-price").show(), $($selectedPackages).parent().parent().find(".bundle-free").hide(), $($selectedPackages[0]).parent().show(), $($selectedPackages[0]).parent().parent().find(".bundle-price").hide(), $($selectedPackages[0]).parent().parent().find(".bundle-free").show())
    }
    $(".preferred input").attr("checked", !0), $(".bundle-package").hide(), $selectedPackages = $(".bundle-package del"), a(), e.on("change", 'input[type="radio"]', function() {
        var e = $(this).closest("label");
        e.closest("label").addClass("preferred"), e.siblings().removeClass("preferred")
    }), e.on("click", "input[type=checkbox]", function() {
        var e = $(this).closest("label");
        e.toggleClass("preferred first").fadeOut(250).fadeIn(250), $selectedPackages = $(".preferred .bundle-package del"), e.hasClass("preferred") || ($(".bundle-price").show(), $(".bundle-free").hide(), $(".bundle-package").hide()), a()
    })
});

function checkCookie() {
    var e = window.location.pathname;
    if ("check-cookie" === e.substring(e.lastIndexOf("/") + 1)) return !1;
    var o = navigator.cookieEnabled;
    return o || (document.cookie = "testcookie", o = -1 !== document.cookie.indexOf("testcookie")), o || window.location.replace(routes["check-cookie"])
}

function hrefLinkEvent(e) {
    var o = $(e.target).data("toggle"),
        t = void 0 !== o && !1 !== o,
        n = $(this).data("href");
    !t && (void 0 !== n && !1 !== n) && ($(this).attr("target") ? window.open(n, $(this).attr("target")) : location.href = n, e.stopImmediatePropagation(), e.preventDefault())
}

function applyLinkBehavior() {
    $(".href").off("click", hrefLinkEvent).on("click", hrefLinkEvent)
}

function loadStyles(e, o) {
    void 0 === o && (e = baseScriptPath + "/" + e), $("head").append($("<link rel='stylesheet' href='" + e + "' type='text/css'/>"))
}

function refreshPageWhenReprocessingDone(e) {
    var o = function() {
        setTimeout(function() {
            $.get(routes["admin-background-task-exists"], {
                id: e
            }, function(e) {
                "0" !== e ? o() : window.location.reload()
            })
        }, 1e3)
    };
    o()
}
checkCookie(), $(".nestedLink").on("click", function(e) {
    e.stopPropagation()
}), $(function() {
    var e = $("body");
    jQuery().tooltip && e.tooltip({
        selector: '[data-toggle="tooltip"]'
    }), jQuery().popover && e.popover({
        selector: '[data-toggle="popover"]'
    }), $("#profile-content").on("click", function(e) {
        var o = $('[data-toggle="popover"]');
        o.is(e.target) || 0 !== o.has(e.target).length || 0 !== $(".popover").has(e.target).length || (((o.popover("hide").data("bs.popover") || {}).inState || {}).click = !1)
    }), e.on("ajaxBeforeSend", function(e, o) {
        o.modalOnError()
    }), e.on("click", ".password-toggle", function(e) {
        var o = $(e.target).prevAll("input");
        o.attr("type", "password" === o.attr("type") ? "text" : "password")
    })
}), $('.ownersRow div[data-toggle="tooltip"]').on("click", function(e) {
    return $(this).parent().trigger("click"), !1
}), $("body").on("click", ".checkout-register-login-toggle", function(e) {
    e.preventDefault();
    var o = $(".registration-form-wrapper"),
        t = $(".login-form-wrapper"),
        n = o.find("#register-form-email"),
        i = t.find("#login-form-login"),
        r = o.is(":visible") ? n.val() : i.val();
    i.val(r), n.val(r), o.toggle(), t.toggle()
}), $(document).on("click", ".show-older-documents", function(e) {
    e.preventDefault(), $(e.currentTarget).addClass("hidden").prev("ul").find("li").removeClass("hidden")
}), applyLinkBehavior(), $(document).ajaxComplete(function() {
    applyLinkBehavior()
}), $(".no-link").on("click", function(e) {
    e.preventDefault()
}), $(function() {
    $(".copy-to-clipboard").on("click", function() {
        var e = $(this).text(),
            o = document.createElement("textarea");
        document.body.appendChild(o), o.value = e, o.select(), document.execCommand("copy"), document.body.removeChild(o)
    })
});
$(function() {
    var t = function() {
            if ("undefined" != typeof missingAnnualReportContentIds) {
                var t = function() {
                    var e = missingAnnualReportContentIds.shift();
                    void 0 !== e && n(e, function(n) {
                        t()
                    }, "additional-annual-report-content-check")
                };
                t()
            }
        },
        n = function(t, e, o) {
            $.get({
                url: function(t, n) {
                    return routes[n] + "?annualReport=" + t
                }(t, o),
                success: function(a, s, r) {
                    r.status == HttpCode.OK ? e(a) : r.status != HttpCode.ACCEPTED && r.status != HttpCode.CREATED || setTimeout(function() {
                        n(t, e, o)
                    }, 2e3)
                }
            }).modalOnError()
        },
        e = function(n, e, o) {
            var a = $("#" + n),
                s = !1;
            if (a.length && void 0 !== window[o]) {
                var r = function() {
                    $.ajax({
                        url: routes[e] + "?company=" + companyUri,
                        success: function(n, o, s) {
                            if (s.status == HttpCode.OK) {
                                var i = $(n.html);
                                a.replaceWith(i), a.removeClass("preloaded"), setupCompanyLoadMore(i, routes[e], "a.ownersRow"), t()
                            } else s.status == HttpCode.ACCEPTED || s.status == HttpCode.CREATED ? setTimeout(function() {
                                r()
                            }, 2e3) : a.removeClass("loading")
                        },
                        error: function(t) {
                            a.removeClass("loading")
                        }
                    })
                };
                $(window).on("scroll resize", function() {
                    s || !isInView(a) && !a.hasClass("preloaded") || (s = !0, a.addClass("loading"), r())
                })
            }
        };
    e("Hinterlegte-Bilanzen", "load-paid-annual-reports", "shouldRequestForPaidAnnualReports"), e("Jahresabschluesse", "load-additional-annual-reports", "shouldRequestForAnnualReports");
    var o = $("#anual-report-preloader"),
        a = o.data("id");
    o.length ? n(a, function(t) {
        o.removeClass("text-center").html(t.html), $(".backBtn").removeClass("hidden")
    }, "additional-annual-report-content") : $(".backBtn").removeClass("hidden"), t()
});
$(function() {
    $("#balanceAnalysisTable .expandable").on("click", function() {
        $(this).toggleClass("expanded");
        var e = $(this).is(".expanded"),
            a = $(this).data("level"),
            l = $(this).nextUntil('[data-level="' + a + '"]').removeClass("expanded");
        e && (l = l.filter('[data-level="' + (a + 1) + '"]')), l.toggleClass("shown", e)
    })
});
$(function() {
    ! function() {
        var t = $(".btn-primary.trade-register-get-list");
        if (!t.length) return $("#OffizielleRegisterdokumente .tile-content .register-documents-list").addClass("done"), !1;
        var e, n = $("#OffizielleRegisterdokumente").find(".tile-content"),
            r = t.data("ajax-url"),
            i = t.data("loading-label"),
            o = !1,
            s = t.data("download-on-mousemove"),
            u = t.data("download-on-pageload"),
            d = 2e3,
            c = function() {
                return 0 === n.find(".register-documents-list").length
            },
            l = function() {
                $.ajax({
                    url: r,
                    success: function(t) {
                        e.incIteration();
                        try {
                            d = v(e.getIteration(), d)
                        } catch (t) {
                            if (t instanceof RangeError) return void e.hide();
                            throw t
                        }
                        if (function(t) {
                                return t.statusDK && 103 !== Number(t.statusDK) && t.statusADCDHD && 103 !== Number(t.statusADCDHD) && t.statusAnnualReport && 103 !== Number(t.statusAnnualReport)
                            }(t)) return n.html(t.html), n.find(".register-documents-list").addClass("done"), a(), void e.hide();
                        if (c()) {
                            if (t.html) {
                                var i = $("#tmpRegisterDocumentsContainer");
                                i.length || ((i = $("<span></span>")).attr("id", "tmpRegisterDocumentsContainer"), n.prepend(i)), i.html(t.html), a()
                            }
                            10 == e.getIteration() ? (r = r.replace("&final=1", ""), e.hide()) : e.getIteration() < 10 && (e.updateIteration(), e.getIteration() + 1 == 10 && (r += "&final=1"))
                        }
                        setTimeout(l, d)
                    },
                    error: function(t) {
                        e.hide()
                    }
                })
            },
            f = 1,
            h = 50,
            m = 30,
            g = m,
            p = 0,
            v = function(t, e) {
                t > m && (g > 1 && (g = Math.floor(g / 2), m += g), t % h == 0 && f++, h > 1 && t % 10 == 0 && h--, e += 1e3 * f);
                var n = Math.floor(e / 1e3),
                    a = p += n,
                    r = Math.floor(a / 60);
                if (Math.floor(r / 60) > 1) throw new RangeError("Reach hours limit");
                return e
            },
            w = function() {
                o || (o = !0, e = new LoadingBar(n, i, 10), c() && e.show(), t.remove(), l())
            };
        t.click(function() {
            w()
        }), 1 === u ? w() : 1 === s && $("body").on("mousemove", function() {
            w()
        })
    }();
    var t, e = !1,
        n = $("#free_register_document");
    n.length && n.on("hide.bs.modal", function() {
        e && r(t.data("refresh-url"))
    });
    var a = function() {
        $(".freeDocumentOrderLink").click(function(n) {
            n.preventDefault();
            var a = (t = $(this)).data("ajax-url") + "?resultId=" + t.data("result-id") + "&company=" + t.data("company"),
                r = $("#free_register_document");
            r.modal();
            var i = r.find("#free_document_content_container"),
                o = new LoadingBar(i, t.data("document-name") + " wird abgerufen....", 15);
            o.getContent().after('<br>Falls Sie nicht warten möchten, können Sie dieses Fenster auch schliessen. Sie erhalten das bestellte Dokument dann per E-Mail an <span class="donthyphenate">' + mhdeUser.email + "</span> zugeschickt."), o.show();
            var s = function(t) {
                $.ajax({
                    url: t,
                    success: function(n) {
                        o.getIteration() + 2 == 15 && (t = a + "&lastRequest=1"), o.incProgress(), !e && o.getIteration() > 1 && (e = !0), 2 === n.status || n.status < 0 || 15 == o.getIteration() ? i.html(n.html) : r.hasClass("in") && o.getIteration() < 15 && setTimeout(function() {
                            s(t)
                        }, 2e3)
                    },
                    error: function(t) {
                        o.hide()
                    }
                })
            };
            return s(a), !1
        })
    };
    a();
    var r = function(t) {
        $.ajax({
            url: t,
            success: function(t) {
                t.html && ($("#OffizielleRegisterdokumente .tile-content").html(t.html), e = !1, a())
            },
            error: function(t) {}
        })
    }
}), $(function() {
    var t = $("#profile-tabs").find(".active").attr("data-tab-id");
    !window.mhdeUser && window.companyUri && "overview" === t && $.get(routes["api-company-documents"] + window.companyUri, {}, function(t) {
        t.forEach(function(t) {
            if (t.id) {
                var e = $("#" + t.id);
                e.length && (e.addClass(t.class).attr({
                    title: t.title,
                    "data-href": t.data.href,
                    "data-product": JSON.stringify(t.data.product),
                    "data-hash": t.data.hash
                }), e.find("a").click(function(t) {
                    t.preventDefault()
                }))
            }
        })
    })
});
$(function() {
    $(".document-report-download-grabber").click(function(a) {
        a.preventDefault();
        var e = $(this);
        return e.after('<div class="loader"></div>'), e.remove(), $.ajax({
            url: e.data("ajax-url"),
            complete: function(a, e) {
                location.reload()
            }
        }), !1
    })
});
var balanceAnalysisChartData = [],
    balanceAnalysisChartsSum = 0,
    chartsSum = 0;
if (setBalanceAnalysisChartData(), void 0 !== balanceAnalysisChartData) {
    function init() {
        $(drawCharts), $(window).resize(drawCharts);
        var a = $(".financial-data-groups .nav-link");
        a.length > 1 && (financialDataGrouping(), a.on("click", function(a) {
            return $(".financial-data-groups .nav-item").removeClass("active"), $(this).closest(".nav-item").addClass("active"), financialDataGrouping(), !1
        })), $(".financialChart a.toggle-chart").on("click", function(a) {
            $(this).parent().parent().children(".active").first().removeClass("active");
            var t = $(this).closest("li");
            return drawChartsForSelectedTile(t, !1), t.addClass("active"), !1
        })
    }

    function drawChartsForSelectedTile(a, t) {
        var n = $(a).closest(".financialChart"),
            i = $(a).data("chart-id");
        if (i = void 0 === i ? n.find("li.active").first().data("chart-id") : i, console.log(i), void 0 !== i) {
            var e, r = n.attr("id"),
                l = i.split("-")[1];
            e = t && void 0 !== l ? $("#" + r + " .balanceAnalysisChart").eq(l) : r.length > 1 ? $("#" + r + " .balanceAnalysisChart").first() : $(".balanceAnalysisChart").first();
            var o = balanceAnalysisChartData["balanceAnalysisChartData_" + e.attr("id")];
            console.log("balanceAnalysisChartData_" + e.attr("id")), o && o.hasOwnProperty(i) && (drawChartInner(o[i].columns, o[i].rows, o[i].type, o[i].showCurrency, e.attr("id")), $(e).prev(".loader").remove())
        }
    }

    function drawCharts() {
        $(".financialChart li.active").each(function(a, t) {
            drawChartsForSelectedTile(t, !0)
        })
    }

    function drawChartInner(a, t, n, i, e) {
        var r = new google.visualization.DataTable;
        a.forEach(function(a) {
            r.addColumn(a)
        }), t.forEach(function(a) {
            r.addRow(a)
        });
        var l = i ? "€ " : "";
        new google.visualization.NumberFormat({
            pattern: "####"
        }).format(r, 0);
        for (var o = 1; o < r.length; o++) new google.visualization.NumberFormat({
            prefix: l,
            decimalSymbol: ",",
            groupingSymbol: "."
        }).format(r, o);
        var s, c = t.map(function(a) {
                return a[0]
            }),
            h = t.map(function(a) {
                return a[1]
            }),
            u = h.filter(function(a) {
                return a < 0
            }).length > 0,
            d = " ".concat(l),
            f = {
                legend: "bottom",
                width: "100%",
                pointSize: 10,
                colors: ["#3C8499", "#CA9A2C", "#f9654f"],
                hAxis: {
                    format: "####",
                    ticks: c,
                    minValue: Math.min.apply(null, c) - .5,
                    maxValue: Math.max.apply(null, c) + .5,
                    gridlines: {
                        color: "none"
                    }
                },
                vAxis: {
                    format: "short",
                    formatOptions: {
                        prefix: u ? d : l,
                        decimalSymbol: ",",
                        groupingSymbol: "."
                    },
                    minValue: .8 * Math.min.apply(null, h),
                    maxValue: 1.05 * Math.min.apply(null, h)
                },
                tooltip: {
                    isHtml: !0
                },
                interpolateNulls: !0
            };
        switch (n) {
            case "LineChart":
                s = new google.visualization.LineChart(document.getElementById(e));
                var m = Math.min.apply(null, f.hAxis.ticks),
                    g = Math.max.apply(null, f.hAxis.ticks);
                f.hAxis.ticks = Array.apply(0, Array(g - m + 1)).map(function(a, t) {
                    return m + t
                });
                break;
            case "ColumnChart":
                s = new google.visualization.ColumnChart(document.getElementById(e));
                break;
            default:
                return
        }
        google.visualization.events.addListener(s, "ready", function() {
            setTimeout(function() {
                chartsSum++, "function" == typeof window.callPhantom && chartsSum === balanceAnalysisChartsSum && window.callPhantom({
                    msg: "renderDone"
                })
            })
        }), s.draw(r, f)
    }
    $.getScript("https://www.gstatic.com/charts/loader.js", function() {
        google.charts.load("current", {
            packages: ["corechart"],
            language: "de"
        }), google.charts.setOnLoadCallback(init)
    })
}

function setBalanceAnalysisChartData() {
    Object.keys(window).filter(function(a) {
        return a.indexOf("balanceAnalysisChartData") > -1
    }).forEach(function(a) {
        balanceAnalysisChartData[a] = window[a], "balanceAnalysisChartData" !== a && balanceAnalysisChartsSum++
    })
}

function financialDataGrouping() {
    var a = $(".financial-data-groups").find(".active").data("charts").split(",");
    $(".financial-data-groups-links .nav li").show().each(function() {
        a.includes(this.getAttribute("data-chart-name")) || $(this).hide()
    })
}
$(function() {
    var e = $("#Stellenangebote"),
        t = !1;
    if (e.length && "undefined" != typeof shouldRequestForJob) {
        var o = function() {
            $.ajax({
                url: routes["load-additional-jobs"] + "?company=" + companyUri,
                success: function(t, n, a) {
                    a.status == HttpCode.OK ? ($newJobTile = $(t.html), e.replaceWith($newJobTile), setupCompanyLoadMore($newJobTile, routes["load-more-jobs"], "a.ownersRow")) : a.status == HttpCode.ACCEPTED || a.status == HttpCode.CREATED ? setTimeout(function() {
                        o()
                    }, 2e3) : e.removeClass("loading")
                },
                error: function(t) {
                    e.removeClass("loading")
                }
            })
        };
        $(window).on("scroll resize", function() {
            !t && isInView(e) && (t = !0, e.addClass("loading"), o())
        })
    }
}), $(function() {
    var e = $("#external-job-content");
    if (e.length) {
        var t = e.find("#external-job-preloader");
        if (t.length) {
            var o = function(e) {
                    return routes["external-job-content"][0] + "?" + routes["external-job-content"][1] + "=" + e
                },
                n = function(a) {
                    $.ajax({
                        url: o(a),
                        success: function(o, s, r) {
                            r.status == HttpCode.OK ? e.html(o.html) : r.status == HttpCode.ACCEPTED || r.status == HttpCode.CREATED ? setTimeout(function() {
                                n(a)
                            }, 2e3) : t.remove()
                        },
                        error: function(e) {
                            t.remove()
                        }
                    })
                };
            n(t.data("id"))
        }
    }
});
$(function() {
    var e, o, t = [],
        a = $("#KontaktundLageplan"),
        n = ($("#staticMap1"), $("#staticMap2"), $("#companyMapDetail")),
        l = $("#companyGoogleMapStreet"),
        i = $(".maps-grid"),
        s = $(".map-placeholder");
    if (!$(".branch-results-detail").length && n.length) {
        var r = n.data("map"),
            c = {
                uri: companyUri,
                address: r.address,
                addressId: r.addressId,
                streetViewAvailable: r.streetViewAvailable,
                lat: r.lat,
                lng: r.lng,
                result: null
            };
        s.length ? $(this).find(".map-placeholder a").on("click", function() {
            p(), s.fadeOut()
        }) : p(), $(".enlarge-map").click(function() {
            $(".maps-grid").toggleClass("enlarged"), e && e.invalidateSize(), o && google.maps.event.trigger(o, "resize")
        }), $(window).on("scroll", function() {
            $(".mobile-map-overlay").show()
        }), $(".mobile-map-overlay").on("click", function() {
            $(this).hide()
        }), n.on("click", function() {
            e && e.scrollWheelZoom.enable(), o && o.setOptions({
                scrollwheel: !0
            })
        }), l.on("click", function() {
            (void 0).setOptions({
                scrollwheel: !0
            })
        })
    }

    function p() {
        isInView(a) && (a.addClass("loading"), !r.lat && r.address.length ? function(e) {
            if (null === t) return void setTimeout(e);
            t.length || $.getScript("//maps.googleapis.com/maps/api/js?key=" + googleMapsAPIKey + "&libraries=geometry", function() {
                t.forEach(function(e) {
                    e()
                }), t = null
            });
            t.push(e)
        }(function() {
            (new google.maps.Geocoder).geocode({
                address: r.address
            }, function(e, o) {
                o === google.maps.GeocoderStatus.OK && ($(".show-maps").hide(), c.lat = e[0].geometry.location.lat(), c.lng = e[0].geometry.location.lng(), c.result = JSON.stringify(e)), g()
            })
        }) : g())
    }

    function g() {
        c.lat && c.lng ? function() {
            try {
                loadStyles("osm.css"), $.getScript(baseScriptPath + "/osm.js", function() {
                    map = L.map(n[0], {
                        center: [c.lat, c.lng],
                        zoom: 15,
                        scrollWheelZoom: !1
                    }), L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    }).on("tileerror", function(e, o) {
                        console.log(e), console.log(o)
                    }).addTo(map);
                    var e = L.icon({
                        iconUrl: "/img/pointer-company.png",
                        iconSize: [41, 54],
                        iconAnchor: [20.5, 54]
                    });
                    L.marker([c.lat, c.lng], {
                        icon: e
                    }).addTo(map)
                })
            } catch (e) {
                throw d(), e
            } finally {
                a.removeClass("loading")
            }
        }() : d()
    }

    function d() {
        $(".show-maps-alert").removeClass("hidden"), i.remove()
    }
});
$(document).ready(function() {
    var t = $("#contactform-topic");
    t.on("change", function() {
        $(".contact-qa").hide(0), $("#contact-qa-" + this.selectedIndex).show(), $("#contact-full-form").toggle(this.value && "showContactForm" in this.options[this.selectedIndex].dataset)
    }), t.length > 0 && t.val().length > 0 && t.trigger("change");
    var o = $("#showMore"),
        n = $("#showLess");
    o.on("click", function() {
        $(this).hide(), n.show()
    }), n.on("click", function() {
        $(this).hide(), o.show()
    })
});

function counter(e, n) {
    var t = document.querySelector(e);
    if (!t) throw "Deadline Counter not found";
    var r = new Date(n).getTime();
    if (!(r - (new Date).getTime() < 0)) {
        t.classList.remove("hidden");
        var o = t.querySelector("#c-counter");
        if (!o) throw "Counter not found";
        o.classList.remove("hidden");
        var i = {
            sec: o.querySelector("#c-sec"),
            min: o.querySelector("#c-min"),
            hour: o.querySelector("#c-hour"),
            day: o.querySelector("#c-day")
        };
        this.update = function() {
            if (n) {
                var e = r - (new Date).getTime();
                if (e < 0) Object.keys(i).forEach(e => i[e].innerHTML = "--");
                else {
                    var t = Math.floor(e / 864e5),
                        o = Math.floor(e % 864e5 / 36e5),
                        u = Math.floor(e % 36e5 / 6e4),
                        a = Math.floor(e % 6e4 / 1e3);
                    i.sec.innerHTML = c(a), i.min.innerHTML = c(u), i.hour.innerHTML = c(o), i.day.innerHTML = c(t)
                }
            }
        }, this.install = function() {
            setInterval(() => this.update(), 1e3)
        }
    }

    function c(e) {
        return ("0" + e).slice(-2)
    }
}

function setCounter(e) {
    e && new counter("#deadline-counter", e).install()
}
$(function() {
    $('[type="date"]').length && $.getScript("//cdn.jsdelivr.net/webshim/1.15.10/polyfiller.js", function() {
        $.swap = function(e, t, n, i) {
            var o, s, r = {};
            for (s in t) r[s] = e.style[s], e.style[s] = t[s];
            for (s in o = n.apply(e, i || []), t) e.style[s] = r[s];
            return o
        }, webshims.setOptions("forms-ext", {
            types: "date",
            replaceUI: !0
        }), webshims.polyfill("forms forms-ext"), webshim.ready("form-number-date-ui", function() {
            setTimeout(function() {
                $('input[type="date"]').getShadowElement().on("keydown", function(e) {
                    if (13 === e.keyCode) return this.blur(), !1
                })
            })
        })
    })
});
$(function() {
    var o = $("#debt-notification-modal");
    o.length && (o.modal("show"), Cookies.set("shown_debt_notification_modal", "1"))
});
window.addEllipsisedText = function() {
    for (var e = document.querySelectorAll(".content-ellipsised-multiline.content-ellipsised-4-line"), t = 0; t < e.length; t++) ! function(e) {
        var t = parseInt(window.getComputedStyle(e)["max-height"], 10),
            l = e.parentNode.querySelector(".readmore");
        !l || e.scrollHeight < t || (l.style.display = "inline-block", l.addEventListener("click", function(t) {
            t.preventDefault(), this.classList.contains("unfolded") ? (e.style.overflow = "", e.style.maxHeight = "", this.classList.remove("unfolded")) : (e.style.overflow = "visible", e.style.maxHeight = "none", this.classList.add("unfolded"))
        }))
    }(e[t])
}, window.addEllipsisedText();
$("label img").click(function() {
    $(this).closest("label").click()
});
$(function() {
    $(".inputmask-zip").inputmask("99999")
});

function setupPersonLoadMore(e, o, a, n) {
    setupLoadMore(e, o, a, {
        person: personUri
    }, null, n)
}

function setupCompanyLoadMore(e, o, a, n) {
    setupLoadMore(e, o, a, {
        company: companyUri
    }, n)
}

function setupLoadMore(e, o, a, n, t, r) {
    var s = e.find(".load-more"),
        i = e.find(".nav a");

    function d(t, r, i) {
        $.ajax({
            url: o,
            data: $.extend({
                offset: t.find(a).length
            }, n, r),
            dataType: "json",
            beforeSend: function() {
                e.addClass("loading")
            },
            success: function(o) {
                e.find(".error-summary").remove(), t.append(o.html), i && i(o), o.moreAvailable || s.hide()
            },
            error: function() {
                t.append('<div class="ownersRow error-summary">Ein Fehler aufgetreten</div>')
            },
            complete: function() {
                e.removeClass("loading")
            }
        })
    }
    i.length || s.click(function() {
        var o;
        o = t || (e.find(".tab-pane.active").length > 0 ? ".tab-pane.active" : ".tile-content"), d(e.find(o), {}, r)
    }), i.each(function() {
        var o = $(this),
            a = !1,
            n = !0,
            t = o.data("activetab");
        o.parent().is(".active") && (a = !0, "none" === e.find(".load-more").css("display") && (n = !1)), o.on("shown.bs.tab", function(e) {
            a || (a = !0, s.trigger("click")), n && void 0 !== s.data("fortabs") && void 0 !== s.data("fortabs")[t] && s.text(s.data("fortabs")[t]), n && s.removeClass("hidden"), s.toggle(n)
        }), s.click(function() {
            if (o.parent().is(".active")) {
                var a = o.attr("href");
                d(a ? e.find(a) : e.find(".tab-content .tab-pane.active"), {
                    activeTab: t
                }, function(e) {
                    o.tab("show"), e.moreAvailable || (n = !1)
                })
            }
        })
    })
}

function setupExpandingWithAjax(e) {
    e.on("click", '.href:not(".loading")', function() {
        if ($(this).hasClass("loaded")) {
            $(this).toggleClass("arrow-down");
            var o = $(this).next(".expanded-detail");
            o.toggle();
            var a = o.siblings(".expanded-detail");
            return a.hide(), void a.prev(".arrow-down").removeClass("arrow-down")
        }
        var n = $(this);
        n.addClass("loading"), $.ajax({
            url: n.data("ajax-url"),
            success: function(o) {
                n.siblings(".expanded-detail").length > 0 && n.siblings(".arrow-down").removeClass("arrow-down").siblings(".expanded-detail").hide(), n.after(o.html).addClass("loaded arrow-down").next(".expanded-detail").show(), $(".ownersRow.error-summary").remove(), e.off("click", n)
            },
            error: function(e) {
                n.after('<div class="ownersRow error-summary">Ein Fehler aufgetreten</div>')
            },
            complete: function() {
                n.removeClass("loading")
            }
        })
    })
}

function setupPublicationsDisplayMore() {
    $(document).on("click", "#Volltext .publication", function(e) {
        if ("A" != $(e.target).prop("tagName").toUpperCase()) return e.preventDefault(), $(this).toggleClass("expanded"), !1
    })
}
$(function() {
    "undefined" != typeof personUri && personUri && (setupPersonLoadMore($("#verbindungen-aktuelle"), routes["load-more-person-all-active-connections"], "a.ownersRow"), setupPersonLoadMore($("#verbindungen-fruhere"), routes["load-more-person-all-inactive-connections"], "a.ownersRow"), setupPersonLoadMore($("#LetzteRegisterbekanntmachungen"), routes["load-more-person-all-publications"], "div.tileText"), setupPersonLoadMore($("#Netzwerk"), routes["load-more-person-network"], "div.ownersRow:not(.expanded-detail)")), setupExpandingWithAjax($("#Netzwerk")), setupExpandingWithAjax($("#Vertraege")), setupLoadMore($("#Volltext"), routes["load-more-publications"], "div.ownersRow", $("#Volltext .load-more:first").data()), setupPublicationsDisplayMore(), "undefined" != typeof companyUri && companyUri && (setupCompanyLoadMore($("#LetzteRegisterbekanntmachungen"), routes["load-more-company-publications"], "div.tileText"), setupCompanyLoadMore($("#Netzwerk"), routes["load-more-company-network"], "div.ownersRow:not(.expanded-detail)"), setupCompanyLoadMore($("#Jahresabschluesse"), routes["load-more-annual-reports"], "a.ownersRow"), setupCompanyLoadMore($("#Stellenangebote"), routes["load-more-jobs"], "a.ownersRow"), setupCompanyLoadMore($("#KontaktundLageplan"), routes["load-more-company-former-addresses"], "div", "#former-addresses"), setupCompanyLoadMore($("#Mitarbeiter"), routes["load-more-company-employees"], "div.ownersRow.employee"), setupCompanyLoadMore($("#Patente"), routes["load-more-company-patents"], ".ownersRow:not(.ownersHeader)"), setupCompanyLoadMore($("#Aufsichtsrat"), routes["load-more-company-administrators"], ".ownersRow:not(.ownersHeader)"))
});
var isPerson, searchString = "",
    $lockModal = $("#editLockModal");
$(".person-lock-flag, .company-lock-flag").on("click", function() {
    return $lockModal.modal("show", this), !1
}), $lockModal.on("show.bs.modal", function(o) {
    $(".input-group .form-control").css("z-index", 0);
    var e = !1,
        t = $(o.relatedTarget),
        n = $(this),
        r = t.data("id"),
        i = t.data("entityname"),
        a = t.data("tolockflag");

    function c(o, e) {
        return '<div class="alert alert-' + o + '">' + e + "</div>"
    }
    isPerson = t.data("isperson"), searchString = t.data("searchstring"), n.find("h2 span").remove(), n.find("input[name='Lock[entity_id]']").attr("value", r), n.find("h2").append("<span> - " + i), n.find("#lock-lockflag").val(a), setTimeout(function() {
        n.find("input[name='Lock[email]']").focus()
    }, 1e3), $("form#lock-form0, form#lock-form1, form#lock-form2").on("beforeSubmit", function() {
        if (e) return !1;
        var o = $(this),
            t = $(o.attr("data-target"));
        return $("#lock-is_delayed_correction").is(":checked") && "" === $("#lock-correction_reason").val() ? (o.yiiActiveForm("updateAttribute", "lock-correction_reason", ["Bitte gib möglichst viele Details zur Datenkorrektur an."]), !1) : ($.ajax({
            type: o.attr("method"),
            url: "" + o.attr("action"),
            data: o.serialize(),
            success: function(o) {
                if ("ok" == o.status) var e = "success";
                else e = "danger";
                t.html(c(e, o.message)), n.find(".form-group").remove(), n.find(".btn").hide(), n.find(".btn-ok").removeClass("hidden").show()
            },
            error: function() {
                t.html(c("danger", "Ein interner Fehler ist aufgetreten. Bitte versuchen Sie noch einmal"))
            }
        }), e = !0, !1)
    })
}).on("hide.bs.modal", function() {
    $(".input-group .form-control").css("z-index", 2)
}), $(".lock-redirect-btn").on("click", function() {
    window.location.href = window.location.href
});
$(function() {
    $("#mails-grid [data-key]").click(function() {
        var a = $(this);
        a.toggleClass("expanded"), a.hasClass("loaded") || $.ajax(routes["user-email-details"], {
            data: {
                mail: a.data("key")
            },
            success: function(i) {
                a.next().children().first().append(i)
            },
            complete: function() {
                a.addClass("loaded")
            }
        })
    }), $("#mails-grid .new-window").click(function(a) {
        a.stopPropagation()
    })
});
$(function() {
    var n = $(".user-menu-icon, .sign-in-menu"),
        c = $(".site-menu-icon"),
        e = $(".login-menu"),
        o = $(".navbar-secondary");

    function i(n, c, e) {
        n.click(function() {
            c.slideDown(function() {
                $(document).on(e, function(n) {
                    var o;
                    $(n.target).closest(c).length || (o = function() {
                        $(document).off(e)
                    }, c.slideUp(), $.isFunction(o) && o())
                })
            })
        })
    }
    $companySearch = $(".search-wrapper"), $searchMenu = $(".search-collapse-button"), i(n, e, "click.login-menu"), i(c, o, "click.login-menu"), i($searchMenu, $companySearch, "click.search-wrapper")
});

function showPayWallOverlay() {
    if (!$("body").hasClass("modal-open") || $("#paywall:visible").length) {
        var o = $("#paywall"),
            t = !0,
            e = $(o).hasClass("activate"),
            a = document.cookie.indexOf("activationOverlayShown") >= 0;
        e && a && (t = !1), t && o.length && !o.hasClass("in") && (o.modal(), e && (document.cookie = "activationOverlayShown=true;secure"))
    } else setTimeout(showPayWallOverlay, 1e3)
}

function centerModal() {
    $(this).css("display", "block");
    var o = $(window).height();
    $("body").find(".modal-dialog").each(function() {
        var t = $(this),
            e = (o - t.height()) / 2 - 200,
            a = parseInt(t.css("marginBottom"), 10);
        e < a && (e = a), t.css("margin-top", e)
    })
}
$(function() {
    $.fn.modal.Constructor.DEFAULTS.keyboard = !1, document.cookie.indexOf("activationOverlayShown") < 0 && setTimeout(showPayWallOverlay, 15e3)
}), $('[data-toggle="modal"]').on("click", function() {
    return $($(this).attr("data-target")).modal("toggle", this), !1
}), $(".modal").on("show.bs.modal", function() {
    $('[data-toggle="tooltip"]').tooltip("hide"), $(".input-group .form-control").css("z-index", 0)
}).on("hide.bs.modal", function() {
    if ($(".input-group .form-control").css("z-index", 2), $(this).hasClass("refreshOnClose")) {
        var o = new Date;
        o.setSeconds(o.getSeconds() + 30), Cookies.set("overlay-scroll", $(window).scrollTop(), {
            expires: o
        }), location.reload()
    }
}), $.fn.updateModalContent = function(o) {
    var t = $(this);
    $.get(o, {}, function(o) {
        var e = t.find(".modal-body");
        e.html(o), e.removeClass("div-loading")
    })
}, $(".paywall.modal").on("show.bs.modal", function(o) {
    var t = o.relatedTarget ? o.relatedTarget.dataset : null;
    if (t && void 0 !== t.url) $(this).updateModalContent(t.url);
    else {
        var e = o.relatedTarget ? $(o.relatedTarget) : null;
        null != e && ($(e).hasClass("set-selected-documents-checkboxes") && ($("form#trade_register-form input:checkbox").each(function() {
            $('input:checkbox[value="' + this.getAttribute("class") + '"]').prop("checked", this.checked)
        }), $("form#company-products-order-form input:checkbox").change(function() {
            $("form#trade_register-form input." + $(this).val()).prop("checked", this.checked)
        })), $(e).hasClass("set-credit-report-checkbox") && $('input:checkbox[value="CREDIT-REPORT-1"]').prop("checked", !0), $(e).hasClass("set-short-credit-report-checkbox") && $('input:checkbox[value="CREDIT-REPORT-2"]').prop("checked", !0))
    }
}), $(document).on("show.bs.modal", ".modal", centerModal), $(window).on("resize", function() {
    $(".modal:visible").each(centerModal)
}), yii.confirm = function(o, t, e) {
    var a = $("#modal-confirm");
    a.length || (a = createModal("", !0, '<button type="button" class="btn btn-primary confirm-ok" data-dismiss="modal">' + yii.t("user", "Continue") + '</button><button type="button" class="btn btn-default confirm-cancel pull-right" data-dismiss="modal">' + yii.t("search", "cancel") + "</button>", "modal-confirm")), a.find(".modal-body").html("<p>" + o + "</p>"), a.on("click", "button.confirm-ok", function() {
        t && t()
    }), a.on("click", "button.confirm-cancel", function() {
        e && e()
    }), a.modal("show"), centerModal()
}, yii.alert = function(o) {
    createModal("<p>" + o + "</p>", !0).modal("show"), centerModal()
};
$(function() {
    if ("undefined" != typeof mhdeUser && "undefined" != typeof companyUri) {
        var t = $("#Patente");
        if (0 !== t.length && (!t.length || $("*[data-refresh-content='yes']", t).length)) {
            var e = function() {
                $.ajax({
                    url: routes["api-company-load-patents"] + "?company=" + companyUri,
                    success: function(n, a, o) {
                        if (o.status === HttpCode.OK) {
                            $("#profile-tabs li[data-tab-id='Patente']").length || ($("#profile-tabs").html($(n.nav).html()), $(window).trigger("resize"));
                            var r = $(n.html),
                                s = $("ul.nav-pills", t).attr("id");
                            if ($("ul.nav-pills", r).attr("id", s), t.length) {
                                if (t.html() === r.html()) return
                            } else
                                for (var i, l = n.order; i = l.pop();) {
                                    var d = $("#" + i);
                                    if (d.length) {
                                        d.after(r);
                                        break
                                    }
                                }
                            t.replaceWith(r), setupCompanyLoadMore(r, routes["load-more-company-patents"], ".ownersRow:not(.ownersHeader)")
                        } else o.status !== HttpCode.ACCEPTED && o.status !== HttpCode.CREATED || setTimeout(e, 2e3)
                    }
                })
            };
            e()
        }
    }
}), $(function() {
    var t = $("#patent-content-preloader"),
        e = t.data("id");
    t.length ? runAndWaitForPatentContent(e, function(e) {
        t.removeClass("text-center").html(e.html), $(".backBtn").removeClass("hidden")
    }) : $(".backBtn").removeClass("hidden")
});
var runAndWaitForPatentContent = function(t, e) {
    $.get({
        url: routes["api-company-patent-content"] + "?patent=" + t,
        success: function(n, a, o) {
            o.status == HttpCode.OK ? e(n) : o.status != HttpCode.ACCEPTED && o.status != HttpCode.CREATED || setTimeout(function() {
                runAndWaitForPatentContent(t, e)
            }, 2e3)
        }
    }).modalOnError()
};
$(function() {
    var e = $("#payment-form, #profile-form");
    if (e.length) {
        setInterval(function() {
            $.ajax(routes.home)
        }, 12e5);
        var a = function() {
                e.addClass("profile-visible")
            },
            t = function() {
                $(".addressFormData .has-error").size() && a()
            };
        t(), e.on("afterValidate", t), e.find(".profile-hidden").click(a);
        var o = function() {
            if (e.is("#payment-form")) {
                var t = $('input[type="radio"][name="ExternalPaymentMethodForm[pay_method]"]:checked').val(),
                    o = "DEBTF" == t;
                $("#externalpaymentmethodform-pay_method .radio").removeClass("active"), $('input[value="' + t + '"]').closest(".radio").addClass("active"), e.toggleClass("on-credit-card", -1 != creditCardMethods.indexOf(t)), e.toggleClass("on-billpay", "BPY" == t), e.toggleClass("on-paypal", "PAP" == t), e.toggleClass("on-klarna", "DIB" == t), e.toggleClass("on-advance", o), "BPY" === t && a()
            }
            var n = $('input[name="Profile[usage]"]:checked').val();
            e.toggleClass("on-private", 1 == n), e.toggleClass("on-company", 2 == n || void 0 === n),
                function(e) {
                    var a = $("#payment-form"),
                        t = "register-form-password",
                        o = {
                            id: t,
                            input: "#" + t,
                            name: "password",
                            container: ".field-" + t,
                            value: "",
                            enableAjaxValidation: !0,
                            error: !1
                        };
                    a.data("yiiActiveForm") && (e ? a.yiiActiveForm("find", t) && a.yiiActiveForm("remove", t) : a.yiiActiveForm("find", t) || a.yiiActiveForm("add", o))
                }(o)
        };
        o();
        var n = function() {
            $("#asterisk-explanation").toggleClass("hidden", !$(".required[class*=field-profile]").length)
        };
        e.on("beforeValidateAttribute", function(e, a) {
            "externalpaymentmethodform-pay_method" != a.id && "profile-usage" != a.id || o()
        }), e.on("ajaxBeforeSend", function() {
            e.addClass("form-validating"), $.each(e.data("yiiActiveForm").attributes, function() {
                1 == this.status && (this.status = 2)
            })
        }), e.on("ajaxComplete", function(a, t, o) {
            var r, i, s;
            (e.removeClass("form-validating"), null != t.responseJSON) && ("success" != o && "notmodified" != o && e.find(".error-summary").html("<p>Ein Fehler augfetreten.</p>").show(), t.responseJSON && void 0 !== t.responseJSON["basket-serialized_products"] && e.find(".error-summary").html(t.responseJSON["basket-serialized_products"][0]).show(), t.responseJSON && void 0 !== t.responseJSON.vat && (r = t.responseJSON.vat, i = t.responseJSON.vatAmount, $("#productList").toggleClass("with-vat", Boolean(r)).toggleClass("swiss", "CH" == e.find("#profile-country").val()), $("#vat-rate-value").html(100 * r), $("#vat-amount-value").html(i)), t.responseJSON && void 0 !== t.responseJSON.totalAmount && $(".total-price-cell").html(t.responseJSON.totalAmount), s = t.responseJSON.requiredProfileFields, $(".required[class*=field-profile]").removeClass("required"), $.each(s, function(e, a) {
                $(".field-profile-" + a).addClass("required")
            }), n())
        });
        var r = !1;
        e.on("beforeValidate", function() {
            r = !0
        }), e.on("afterValidate", function() {
            r = !1
        });
        var i = !1;
        e.on("beforeSubmit", function a() {
            var t = $('input:radio[name="ExternalPaymentMethodForm[pay_method]"]:checked').val();
            if (paymentMethod.DATATRANS_METHODS.indexOf(t) >= 0 && "payment-form" === e.attr("id")) return 1 == r ? window.setTimeout(a, 50) : function() {
                if (i) return !1;
                i = !0;
                try {
                    var a = e.serializeArray().concat([{
                        name: "datatrans-lightbox-submit",
                        value: !0
                    }]);
                    $.ajax({
                        url: e.attr("action"),
                        method: "post",
                        async: !1,
                        data: a
                    }).done(function(e) {
                        $("#externalPaymentForm").remove();
                        var a = $('<form id="externalPaymentForm"></form>');
                        Object.keys(e).forEach(function(t) {
                            a.attr("data-" + t, e[t])
                        }), $("#payment-form").after(a)
                    }).fail(function() {
                        throw new Error("Can't start payment")
                    }), Datatrans.startPayment({
                        form: "#externalPaymentForm",
                        opened: function() {
                            i = !0
                        },
                        closed: function() {
                            $.ajax({
                                url: routes["payment-datatrans-cancel-payment"],
                                async: !1
                            }), i = !1
                        },
                        error: function(e) {
                            console.warn(e)
                        }
                    })
                } catch (e) {
                    i = !1, console.error(e)
                }
                i = !0
            }(), !1;
            return !0
        }), $('input[type="text"][name="ExternalPaymentMethodForm[cardNumber]"]').on("blur", function() {
            var e = $(this).val().replace(/[^0-9]/g, "");
            $(this).val(e)
        }), $(".form-disabled input,.form-disabled select,.form-disabled textarea, .form-disabled button").each(function() {
            $(this).prop("disabled", "disabled")
        }), $(".form-disabled").on("click", function() {
            $("#checkout-registration-alert").show()
        }), $("#profile-not_have_vatin:checked").length && $(".field-profile-vatin input").prop("disabled", !0), $("#profile-not_have_vatin").click(function() {
            $(".field-profile-vatin input").prop("disabled", $("#profile-not_have_vatin").is(":checked")).val("")
        }), n(), e.find('select[name="premium-option"]').change(function() {
            $("[data-premium-option]").each(function() {
                $(this).addClass("hidden")
            }), $('[data-premium-option="' + $(this).val() + '"]').removeClass("hidden")
        }), $('[data-premium-option="' + e.find('select[name="premium-option"]').val() + '"]').removeClass("hidden")
    }
});
$("#table-collapse").on("shown.bs.collapse", function(e) {
    $("html, body").animate({
        scrollTop: $(".subscribe-details-header").first().offset().top - 150
    }, 300)
});
var mediaQuery = window.matchMedia("(max-width: 767px)");

function widthChange(e) {
    e.matches ? $("#table-collapse").removeClass("in") : $("#table-collapse").addClass("in")
}
mediaQuery.addListener(widthChange), widthChange(mediaQuery);
$(function() {
    var n = $("#company-grid");
    $(document).on("keyup", "#pwer__company_filter", function() {
        var e = $(this).val();
        e.length < 3 ? $("#company-grid").replaceWith(n) : setTimeout(function() {
            null,
            $.ajax({
                url: routes["premium-with-economic-report/filter-companies"],
                data: {
                    searchString: e
                }
            }).done(function(n) {
                $("#company-grid").replaceWith(n)
            })
        }, 400)
    });
    $(document).on("change", ".company-list", function() {
        $("#section-1").css({
            opacity: .5,
            "pointer-events": "none"
        }), $("#section-2").css({
            opacity: 1,
            "pointer-events": "all"
        })
    })
});
$(function() {
    var e = $('#registration-form .field-profile-usage input[type="checkbox"]');
    if (e.length) {
        function t() {
            e.closest(".form-group").siblings(".form-group").toggle(!e.is(":checked"))
        }
        e.change(t), t()
    }
    var i = [{
        field: $("#profile-mobilephonenumber"),
        mask: "[99] 9[9999999999999999999]"
    }, {
        field: $("#profile-phonenumber"),
        mask: "99[99] 9999[999999999999999]"
    }, {
        field: $("#profile-zip"),
        mask: "99999"
    }];

    function n(e) {
        $("#" + e + " option:selected").html($("#" + e + " option:selected").attr("value"))
    }

    function o(e) {
        $("#" + e).on("blur", function() {
            n(e)
        }), n(e), $("#" + e).on("change", function() {
            $("#" + e + "option").each(function() {
                $(this).html($(this).attr("data-text"))
            }), n(e), $(this).blur()
        }), $("#" + e).on("focus", function() {
            $("#" + e + " option").each(function() {
                $(this).html($(this).attr("data-text"))
            })
        })
    }
    $("#profile-country").on("change", function(e) {
        for (var t = 0, n = i.length; t < n; t++)
            if ("DE" === $(e.target).val()) i[t].field.inputmask(i[t].mask);
            else {
                var o = i[t].field.inputmask("unmaskedvalue");
                i[t].field.inputmask("remove").val(o)
            }
    }).change(), o("profile-phoneprefix"), o("profile-mobilephoneprefix")
});
var loadProductCounter = 0;

function showGoogleReviewBoxIfNeeded(o) {
    $.ajax(o, {
        global: !1,
        success: function(o, a, e) {
            e.status === HttpCode.OK && o.showReview && $(".google-review-box").removeClass("hide")
        }
    }).modalOnError()
}

function loadProduct(o, a, e) {
    var t;

    function r(n, l, s) {
        if (s && s.status === HttpCode.OK) {
            ++loadProductCounter;
            var i = $(".google-review-box-url").data("ajax-show-google-review-box-url");
            i && loadProductCounter > 0 && $("[data-ajax-success-url]").length === loadProductCounter && (showGoogleReviewBoxIfNeeded(i), ++loadProductCounter)
        }
        s && s.status === HttpCode.ACCEPTED && (function() {
            d++;
            var a = o + (-1 === o.indexOf("?") ? "?" : "&") + "trial=" + d;
            $.get(a, r).modalOnError()
        }(), !n) || (s && s.status === HttpCode.ALREADY_REPORTED && $("#payment-notification-form").hasClass("hidden") && ($("#payment-notification-form").removeClass("hidden"), $("html, body").animate({
            scrollTop: $("#payment-notification-form").offset().top
        }, 750)), n = $($.parseHTML(n, !0)), a ? (a.empty(), a.append(n)) : (t && t.modal("hide"), t = createModal(n, !(!s || !s.getResponseHeader("Modal-Closeable")), null, null, e)), n.findIncludingSelf("form").submit(function() {
            var a = $(this);
            return $.ajax({
                url: o,
                method: a.attr("method") || "GET",
                data: a.serialize(),
                success: r
            }).modalOnError(), r("<div class='loader'></div>"), !1
        }), n.findIncludingSelf("[data-background-url]").each(function() {
            $.get($(this).data("background-url"), function() {
                $.get(o, r).modalOnError()
            })
        }))
    }
    r("<div class='loader'></div>"), $.get(o, r).modalOnError();
    var d = 1
}
$(function() {
    $("[data-ajax-success-url]").each(function() {
        loadProduct($(this).data("ajax-success-url"), $(this))
    })
});
$(function() {
    var t = $("#ajax-modal");
    t.on("change", "form#data-report-form #correctionticket-category", function() {
        var t = $(this).find("option:selected").data("value"),
            e = $("form#data-report-form .current-data-value"),
            i = $("#correctionticket-current_value");
        void 0 !== t && t.length ? (e.parent().removeClass("hidden"), e.html(t), i.val(t)) : (e.parent().addClass("hidden"), i.val(""))
    }), t.find(".btn.new-ticket").click(function() {
        t.find(".form-group").show(), t.find(".btn").show(), t.find(".btn-ok").hide(), t.find(".alert").remove(), t.find("#correctionticket-message").val("")
    }), t.on("mouseup.yiiActiveForm keyup.yiiActiveForm", ":submit", function(t) {
        var e = $("#data-report-form");
        e.length > 0 && (e.data("yiiActiveForm").submitObject = null)
    })
});
$(".moreArrow").click(function() {
    $(this).parents(".profile-wrapper").toggleClass("shrink-left")
});
$(function() {
    var i = $("#sticky-footer"),
        e = $("#to-top"),
        o = $(".premium-highlights-promo"),
        n = o.length ? o.offset().top + o.outerHeight() + 200 : 1e3,
        t = !1;
    $(window).on("scroll resize", function() {
            $(window).scrollTop() + $(window).height() > n + 120 ? t || (t = !0, i.animate({
                height: 120
            }, 300), e.show()) : t && (t = !1, i.animate({
                height: 0
            }, 300), e.hide())
        }), e.on("click", function() {
            $("html").animate({
                scrollTop: 0
            }, "slow")
        }),
        function() {
            var i = $(".premium-highlights-checkout .radio-list"),
                e = $(".premium-highlights-checkout .price");

            function o() {
                var o = i.find('input[type="radio"]:checked').parent().index();
                e.addClass("hidden"), e.eq(o).removeClass("hidden"), i.find("label").css("outline", "none"), i.find("label:eq(" + o + ")").css("outline", "1px solid  #777")
            }
            i.length && (o(), i.on("change", 'input[type="radio"]', function() {
                o()
            }))
        }()
});
$(function() {
    var t = $(".subscribe-options > .subscribe-options-row"),
        o = $(".row-flex > .subscribe-header-smaller"),
        s = function(t) {
            var o = t.parent().offset().top,
                s = t.parent(),
                i = s[0].getBoundingClientRect(),
                e = Math.abs(i.top - t.outerHeight()),
                n = t.parent().outerHeight(),
                r = i.bottom,
                a = s.width();
            n - e <= 0 ? t.addClass("sticky").css({
                top: "auto",
                bottom: $(window).height() - r,
                width: a
            }) : $(window).scrollTop() >= o ? t.addClass("sticky").css({
                top: 0,
                bottom: "auto",
                width: a
            }) : t.removeClass("sticky").css({
                position: "",
                top: "",
                bottom: "",
                width: "",
                boxShadow: ""
            })
        };
    $(window).on("scroll resize", function() {
        window.innerWidth > 767 ? t.length && s(t) : (t.removeClass("sticky").css({
            position: "",
            top: "",
            bottom: "",
            width: "",
            boxShadow: ""
        }), o.length && s(o))
    })
});
$(function() {
    var t = $(".tile-col-md-left");
    $(".tile-col-md-right  .tile-switch-left").each(function(e, o) {
        var f = $(o);
        f.offset().top > t.offset().top + t.outerHeight(!0) && t.append(f)
    })
});
$(function() {
    var e = $(".orders-table").first();
    e.on("kvexprow.toggle", function(o, r, a, n, d) {
        $("tr.ownersRow:not(.ownersHeader)", e).removeClass("expanded"), d && $("tr[data-key=" + a + "]", e).addClass("expanded")
    })
});
yii.translations = {
    de: {
        common: {
            city: "Ort"
        },
        company: {
            function_name_200: "Zweigniederlassung"
        },
        contact: {
            customer_support: "Kundendienst"
        },
        duration: {
            now: "jetzt"
        },
        exception: {
            error_modal_content_1: "Falls Sie eine Auskunft abgerufen haben, prüfen Sie bitte unter ",
            error_modal_content_2: ", ob diese bereitgestellt wurde.",
            error_modal_content_3: "Falls kein Eintrag vorhanden ist und der Fehler erneut auftritt, wenden Sie sich bitte an den ",
            error_occurred: "Ein Fehler ist aufgetreten"
        },
        "network-graph": {
            connections: "Verbindungen",
            get_credit_reports: "Bonität prüfen",
            get_documents: "Registerdokumente abrufen",
            load_more_connections: "mehr Verbindungen",
            no_more_connections: "Keine weiteren Verbindungen..."
        },
        people: {
            function_name_1: "Geschäftsführer{isMale, select, 0{in} other{}}",
            function_name_2: "Vorstand",
            function_name_3: "Notgeschäftsführer",
            function_name_4: "Vorstandsvorsitzender",
            function_name_6: "Bürgermeister{isMale, select, 0{in} other{}}",
            function_name_7: "Direktor{isMale, select, 0{in} other{}}",
            function_name_8: "Inhaber{isMale, select, 0{in} other{}}",
            function_name_9: "Kommanditist{isMale, select, 0{in} other{}}",
            function_name_10: "Liquidator{isMale, select, 0{in} other{}}",
            function_name_11: "Präsident",
            function_name_12: "Mieter{isMale, select, 0{in} other{}}",
            function_name_13: "Beiratsmitglied",
            function_name_14: "Vorsitzender des Beirats",
            function_name_20: "Mitglied",
            function_name_21: "Partner{isMale, select, 0{in} other{}}",
            function_name_22: "Rat",
            function_name_26: "Abteilungsleiter{isMale, select, 0{in} other {}}",
            function_name_30: "Prokurist",
            function_name_33: "Investmentmanager",
            function_name_36: "Ehrenmitglied",
            function_name_39: "Ehrenvorsitzender",
            function_name_40: "Aufsichtsratsmitglied",
            function_name_41: "Vorsitzende{isMale, select, 1{r} other{}} des Aufsichtsrates",
            function_name_42: "Gesellschafter",
            function_name_44: "Finanzdekan",
            function_name_48: "Gründer{isMale, select, 0{in} other {}}",
            function_name_56: "Leiter{isMale, select, 0{in} other {}}",
            function_name_57: "Manager{isMale, select, 0{in} other{}}",
            function_name_61: "Repräsentant{isMale, select, 0{in} other{}}",
            function_name_67: "Sekretär{isMale, select, 0{in} other{}}",
            function_name_81: "Stellvertreter{isMale, select, 0{in} other{}}",
            function_name_83: "Persönlich haftender Gesellschafter",
            function_name_87: "Wirtschaftsprüfer{isMale, select, 0{in} other{}}",
            function_name_102: "Mitarbeiter{isMale, select, 0{in} other{}}",
            function_name_201: "Geschäftsführer{isMale, select, 0{in} other{}} (K)",
            function_name_230: "Prokurist (K)",
            function_name_50: "Schatzmeister",
            birth_date: "Geburtsdatum"
        },
        profile: {
            email_alert_follow_company: "Firma folgen",
            email_alert_follow_person: "Person folgen"
        },
        search: {
            cancel: "Abbrechen",
            search_criteria_too_long: "Bitte überprüfen Sie Ihre Eingaben, da mindestens ein Wert die zugelassene Zeichenzahl überschreitet.",
            search_criteria_provide_additional: "Bitte geben Sie weitere Suchkriterien."
        },
        user: {
            Continue: "Weiter",
            my_orders: "Meine Bestellungen"
        },
        watchlist: {
            add_to_list: "Zur Liste hinzufügen"
        }
    },
    en: {
        common: {
            city: "City"
        },
        company: {
            function_name_200: "Branch"
        },
        contact: {
            customer_support: "Customer service"
        },
        duration: {
            now: "now"
        },
        exception: {
            error_modal_content_1: "If you have requested information, please check ",
            error_modal_content_2: ", to see if it has been provided.",
            error_modal_content_3: "If there is no entry and the error occurs again, please contact ",
            error_occurred: "An error has occurred"
        },
        "network-graph": {
            connections: "connections",
            get_credit_reports: "Get credit reports",
            get_documents: "Get register documents",
            load_more_connections: "load more connection",
            no_more_connections: "no more connections..."
        },
        people: {
            function_name_1: "Managing director",
            function_name_2: "Board member",
            function_name_3: "Emergency manager",
            function_name_4: "CEO",
            function_name_6: "Mayor",
            function_name_7: "Director",
            function_name_8: "Owner",
            function_name_9: "Limited partner",
            function_name_10: "Liquidator",
            function_name_11: "President",
            function_name_12: "Tenant",
            function_name_13: "Member of the Advisory Board",
            function_name_14: "Chairman of the Advisory Board",
            function_name_20: "Member",
            function_name_21: "Partner",
            function_name_22: "Council",
            function_name_26: "Head of Department",
            function_name_30: "Authorized signatory",
            function_name_33: "Investment Manager",
            function_name_36: "Honorary Member",
            function_name_39: "Honorary Chairman",
            function_name_40: "Non-executive director",
            function_name_41: "Chairman of the supervisory board",
            function_name_42: "Shareholder",
            function_name_44: "Dean of Finance",
            function_name_48: "Founder",
            function_name_56: "Leader",
            function_name_57: "Manager",
            function_name_61: "Representative",
            function_name_67: "Secretary",
            function_name_81: "Deputy",
            function_name_83: "General partner",
            function_name_87: "Auditor",
            function_name_102: "Employee",
            function_name_201: "Managing director (C)",
            function_name_230: "Authorized signatory (C)",
            function_name_50: "Treasurer",
            birth_date: "Birth date"
        },
        profile: {
            email_alert_follow_company: "Follow company",
            email_alert_follow_person: "Follow person"
        },
        search: {
            cancel: "Cancel",
            search_criteria_too_long: "Please check your entries, as at least one value exceeds the permitted number of characters.",
            search_criteria_provide_additional: "Please enter further search criteria."
        },
        user: {
            Continue: "Weiter",
            my_orders: "My orders"
        },
        watchlist: {
            add_to_list: "Add to list"
        }
    }
};
$(function() {
    var t = document.location.hash,
        a = "#tab_" === t.substr(0, "#tab_".length) ? "#" + t.substr("#tab_".length) : localStorage.getItem("lastSearchTab");
    a && !$(a).find(".alert").length && $('.search a[data-toggle="tab"][href="' + a + '"]').tab("show") && toggleSearchStatusFilter(a)
});