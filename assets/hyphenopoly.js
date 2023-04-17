var hyphenopolyRequireConfig = {
    de: "Silbentrennungsalgorithmus"
};
"de-DE" !== mhApp.lang && (hyphenopolyRequireConfig = {
    "en-gb": "Supercalifragilisticexpialidocious"
});
var Hyphenopoly = {
    require: hyphenopolyRequireConfig,
    hyphen: hyphenopolyHyphen,
    paths: {
        patterndir: baseScriptPath + "/hyphenopoly/patterns/",
        maindir: baseScriptPath + "/hyphenopoly/"
    },
    setup: {
        hide: "text"
    }
};
! function(e, n, t, s) {
    "use strict";
    const a = sessionStorage,
        o = e.WebAssembly,
        i = new Map,
        r = new Map;

    function c() {
        return s.create(null)
    }

    function l(e, n) {
        s.keys(e).forEach(n)
    }

    function p(e, s) {
        const a = n.createElement("script");
        a.src = e + s, "hyphenEngine.asm.js" === s && a.addEventListener("load", function() {
            t.events.dispatch("engineLoaded", {
                msg: "asm"
            })
        }), n.head.appendChild(a)
    }
    t.cacheFeatureTests && a.getItem("Hyphenopoly_Loader") ? t.cf = JSON.parse(a.getItem("Hyphenopoly_Loader")) : t.cf = {
            langs: c(),
            polyfill: !1,
            wasm: null
        },
        function() {
            const e = n.currentScript ? n.currentScript.src.replace(/Hyphenopoly_Loader.js/i, "") : "../",
                a = e + "patterns/";
            t.paths ? (t.paths.maindir = t.paths.maindir || e, t.paths.patterndir = t.paths.patterndir || a) : t.paths = s.create({
                maindir: e,
                patterndir: a
            })
        }(), t.setup ? (t.setup.selectors = t.setup.selectors || {
            ".hyphenate": {}
        }, t.setup.timeout = t.setup.timeout || 1e3, t.setup.hide = t.setup.hide || "all") : t.setup = {
            hide: "all",
            selectors: {
                ".hyphenate": {}
            },
            timeout: 1e3
        }, l(t.require, function(e) {
            r.set(e.toLowerCase(), t.require[e])
        }), t.fallbacks && l(t.fallbacks, function(e) {
            i.set(e.toLowerCase(), t.fallbacks[e].toLowerCase())
        }), t.toggle = function(e) {
            if ("on" === e) {
                const e = n.getElementById("H9Y_Styles");
                e && e.parentNode.removeChild(e)
            } else {
                const e = " {visibility: hidden !important}\n",
                    s = n.createElement("style");
                let a = "";
                switch (s.id = "H9Y_Styles", t.setup.hide) {
                    case "all":
                        a = "html" + e;
                        break;
                    case "element":
                        l(t.setup.selectors, function(n) {
                            a += n + e
                        });
                        break;
                    case "text":
                        l(t.setup.selectors, function(e) {
                            a += e + " {color: transparent !important}\n"
                        })
                }
                s.appendChild(n.createTextNode(a)), n.head.appendChild(s)
            }
        },
        function() {
            const n = new Map,
                s = [],
                a = [];

            function o(e, t, s) {
                n.set(e, {
                    cancellable: s,
                    default: t,
                    register: []
                })
            }

            function i(e, s, o) {
                n.has(e) ? n.get(e).register.push(s) : o ? a.push({
                    handler: s,
                    name: e
                }) : t.events.dispatch("error", {
                    lvl: "warn",
                    msg: 'unknown Event "' + e + '" discarded'
                })
            }
            o("timeout", function(n) {
                t.toggle("on"), e.console.info("Hyphenopolys 'FOUHC'-prevention timed out after %dms", n.delay)
            }, !1), o("error", function(n) {
                switch (n.lvl) {
                    case "info":
                        e.console.info(n.msg);
                        break;
                    case "warn":
                        e.console.warn(n.msg);
                        break;
                    default:
                        e.console.error(n.msg)
                }
            }, !0), o("contentLoaded", function(e) {
                s.push({
                    data: e,
                    name: "contentLoaded"
                })
            }, !1), o("engineLoaded", function(e) {
                s.push({
                    data: e,
                    name: "engineLoaded"
                })
            }, !1), o("hpbLoaded", function(e) {
                s.push({
                    data: e,
                    name: "hpbLoaded"
                })
            }, !1), o("loadError", function(e) {
                s.push({
                    data: e,
                    name: "loadError"
                })
            }, !1), o("tearDown", null, !0), t.handleEvent && l(t.handleEvent, function(e) {
                i(e, t.handleEvent[e], !0)
            }), t.events = c(), t.events.deferred = s, t.events.tempRegister = a, t.events.dispatch = function(e, t) {
                t = t || c();
                let s = !1;
                n.get(e).register.forEach(function(a) {
                    t.preventDefault = function() {
                        n.get(e).cancellable && (s = !0)
                    }, a(t)
                }), !s && n.get(e).default && n.get(e).default(t)
            }, t.events.define = o, t.events.addListener = i
        }();
    const d = new Map;

    function h(n, s, a, i) {
        var r, c, l, p;
        d.has(s) ? "hyphenEngine" !== a && d.get(s).push(i) : (d.set(s, [i]), t.cf.wasm ? (r = n, c = s, l = a, p = i, e.fetch(r + c, {
            credentials: "include"
        }).then(function(e) {
            if (e.ok)
                if ("hyphenEngine" === l) t.bins.set(l, e.arrayBuffer().then(function(e) {
                    return new o.Module(e)
                })), t.events.dispatch("engineLoaded", {
                    msg: p
                });
                else {
                    const n = d.get(c);
                    n.forEach(function(s) {
                        t.bins.set(s, n.length > 1 ? e.clone().arrayBuffer() : e.arrayBuffer()), t.events.dispatch("hpbLoaded", {
                            msg: s
                        })
                    })
                }
            else t.events.dispatch("loadError", {
                file: c,
                msg: p,
                name: l,
                path: r
            })
        })) : function(e, n, s, a) {
            const o = new XMLHttpRequest;
            o.onload = function() {
                200 === o.status ? d.get(n).forEach(function(e) {
                    t.bins.set(e, o.response), t.events.dispatch("hpbLoaded", {
                        msg: e
                    })
                }) : t.events.dispatch("loadError", {
                    file: n,
                    msg: a,
                    name: s,
                    path: e
                })
            }, o.open("GET", e + n), o.responseType = "arraybuffer", o.send()
        }(n, s, a, i))
    }

    function u() {
        t.setup.hide.match(/^(?:element|text)$/) && t.toggle("off"), t.events.dispatch("contentLoaded", {
            msg: ["contentLoaded"]
        })
    }! function() {
        const s = function() {
            let e = null;
            const s = ["visibility:hidden", "-moz-hyphens:auto", "-webkit-hyphens:auto", "-ms-hyphens:auto", "hyphens:auto", "width:48px", "font-size:12px", "line-height:12px", "border:none", "padding:0", "word-wrap:normal"].join(";");
            return {
                append: function(n) {
                    return e ? (n.appendChild(e), e) : null
                },
                clear: function() {
                    e && e.parentNode.removeChild(e)
                },
                create: function(a) {
                    if (t.cf.langs[a]) return;
                    e = e || n.createElement("body");
                    const o = n.createElement("div");
                    o.lang = a, o.style.cssText = s, o.appendChild(n.createTextNode(r.get(a).toLowerCase())), e.appendChild(o)
                }
            }
        }();

        function a(e) {
            let n = e + ".hpb",
                s = e;
            t.cf.polyfill = !0, t.cf.langs[e] = "H9Y", i && i.has(e) && (n = (s = i.get(e)) + ".hpb"), t.bins = t.bins || new Map, h(t.paths.patterndir, n, s, e)
        }
        null === t.cf.wasm && (t.cf.wasm = function() {
            if ("object" == typeof o && "function" == typeof o.Instance) {
                const e = new o.Module(Uint8Array.from([0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1, 127, 1, 127, 3, 2, 1, 0, 5, 3, 1, 0, 1, 7, 5, 1, 1, 116, 0, 0, 10, 16, 1, 14, 0, 32, 0, 65, 1, 54, 2, 0, 32, 0, 40, 2, 0, 11]));
                return 0 !== new o.Instance(e).exports.t(4)
            }
            return !1
        }()), r.forEach(function(e, n) {
            "FORCEHYPHENOPOLY" === e || t.cf.langs[n] && "H9Y" === t.cf.langs[n] ? a(n) : s.create(n)
        });
        const d = s.append(n.documentElement);
        if (null !== d) {
            const e = d.querySelectorAll("div");
            Array.prototype.forEach.call(e, function(e) {
                var n;
                ("auto" === (n = e).style.hyphens || "auto" === n.style.webkitHyphens || "auto" === n.style.msHyphens || "auto" === n.style["-moz-hyphens"]) && e.offsetHeight > 12 ? t.cf.langs[e.lang] = "CSS" : a(e.lang)
            }), s.clear()
        }
        t.cf.polyfill && (p(t.paths.maindir, "Hyphenopoly.js"), t.cf.wasm ? h(t.paths.maindir, "hyphenEngine.wasm", "hyphenEngine", "wasm") : p(t.paths.maindir, "hyphenEngine.asm.js"), l(t.cf.langs, function(n) {
            "H9Y" === t.cf.langs[n] && (function(e) {
                const n = new Map([
                    ["de", 54],
                    ["hu", 205],
                    ["nb-no", 91],
                    ["nl", 41]
                ]).get(e) || 32;
                if (t.specMems = t.specMems || new Map, t.cf.wasm) t.specMems.set(e, new o.Memory({
                    initial: n,
                    maximum: 256
                }));
                else {
                    const s = 2 << Math.floor(Math.log(n) * Math.LOG2E) << 16;
                    t.specMems.set(e, new ArrayBuffer(s))
                }
            }(n), function(n) {
                t.hyphenators = t.hyphenators || c(), t.hyphenators[n] || (e.Promise ? (t.hyphenators[n] = new Promise(function(e, s) {
                    t.events.addListener("engineReady", function(s) {
                        s.msg === n && e(t.createHyphenator(s.msg))
                    }, !0), t.events.addListener("loadError", function(e) {
                        e.name !== n && "hyphenEngine" !== e.name || s(new Error("File " + e.file + " can't be loaded from " + e.path))
                    }, !1)
                }), t.hyphenators[n].catch(function(e) {
                    t.events.dispatch("error", {
                        lvl: "error",
                        msg: e.message
                    })
                })) : t.hyphenators[n] = {
                    then: function() {
                        t.events.dispatch("error", {
                            msg: "Promises not supported in this engine. Use a polyfill."
                        })
                    }
                })
            }(n))
        }))
    }(), t.cf.polyfill ? ("all" === t.setup.hide && t.toggle("off"), "none" !== t.setup.hide && (t.setup.timeOutHandler = e.setTimeout(function() {
        t.toggle("on"), t.events.dispatch("timeout", {
            delay: t.setup.timeout
        })
    }, t.setup.timeout)), "loading" === n.readyState ? n.addEventListener("DOMContentLoaded", u, {
        once: !0,
        passive: !0
    }) : u()) : (t.events.dispatch("tearDown", {}), e.Hyphenopoly = null), t.cacheFeatureTests && a.setItem("Hyphenopoly_Loader", JSON.stringify(t.cf))
}(window, document, Hyphenopoly, Object);