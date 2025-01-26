// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4UjUW":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d46729f7cb6e59e8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"2rD5z":[function(require,module,exports,__globalThis) {
const homeTexts = {
    // 'home_page-title': {
    //   ua: 'Yurii Bukhtii',
    //   ru: 'Yurii Bukhtii',
    //   pl: 'Yurii Bukhtii',
    //   en: 'Yurii Bukhtii',
    // },
    // 'header_logo-title': {
    //   ua: 'Yurii Bukhtii',
    //   ru: 'Yurii Bukhtii',
    //   pl: 'Yurii Bukhtii',
    //   en: 'Yurii Bukhtii',
    // },
    'header_menu-home': {
        ua: "\u0413\u043E\u043B\u043E\u0432\u043D\u0430",
        ru: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
        pl: "G\u0142\xf3wny",
        en: 'Home'
    },
    'header_menu-service': {
        ua: "\u041F\u043E\u0441\u043B\u0443\u0433\u0438",
        ru: "\u0423\u0441\u043B\u0443\u0433\u0438",
        pl: "Us\u0142ugi",
        en: 'Services'
    },
    'header_menu-advantages': {
        ua: "\u041F\u0435\u0440\u0435\u0432\u0430\u0433\u0438",
        ru: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430",
        pl: 'Zalety',
        en: 'Advantages'
    },
    'header_menu-about': {
        ua: "\u041F\u0440\u043E \u043C\u0435\u043D\u0435",
        ru: "\u041E\u0431\u043E \u043C\u043D\u0435",
        pl: 'O mnie',
        en: 'About me'
    },
    'header_menu-contacts': {
        ua: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",
        ru: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
        pl: 'Kontakty',
        en: 'Contacts'
    },
    'header_banner-name': {
        ua: 'Yurii Bukhtii',
        ru: 'Yurii Bukhtii',
        pl: 'Yurii Bukhtii',
        en: 'Yurii Bukhtii'
    },
    'header_banner-title': {
        ua: "\u0411\u0440\u043E\u043A\u0435\u0440 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u043E\u0457 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456 \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0456",
        ru: "\u0411\u0440\u043E\u043A\u0435\u0440 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0435",
        pl: "Po\u015Brednik nieruchomo\u015Bci komercyjnych w Warszawie",
        en: 'Commercial real estate broker in Warsaw'
    },
    'header_banner-pre-title': {
        ua: "\u0414\u043E\u043F\u043E\u043C\u043E\u0436\u0443 \u0437\u043D\u0430\u0439\u0442\u0438 \u0434\u043B\u044F \u0412\u0430\u0441",
        ru: "\u041F\u043E\u043C\u043E\u0433\u0443 \u043D\u0430\u0439\u0442\u0438 \u0434\u043B\u044F \u0412\u0430\u0441",
        pl: "Pomog\u0119 ci znale\u017A\u0107",
        en: 'I will help to find for you'
    },
    'header_banner-advantages-1': {
        ua: "\u2713 \u043E\u0440\u0435\u043D\u0434\u0430 \u043E\u0444\u0456\u0441\u0443 \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0456",
        ru: "\u2713 \u0430\u0440\u0435\u043D\u0434\u0430 \u043E\u0444\u0438\u0441\u0430 \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0435",
        pl: "\u2713 wynajem biura w Warszawie",
        en: "\u2713 office rental in Warsaw"
    },
    'header_banner-advantages-2': {
        ua: "\u2713 \u0441\u043A\u043B\u0430\u0434 \u0432 \u041F\u043E\u043B\u044C\u0449\u0456",
        ru: "\u2713 \u0441\u043A\u043B\u0430\u0434 \u0432 \u041F\u043E\u043B\u044C\u0448\u0435",
        pl: "\u2713 magazyn w Polsce",
        en: "\u2713 warehouse in Poland"
    },
    'header_banner-advantages-3': {
        ua: "\u2713 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0444\u0456\u0440\u043C\u0438 \u0432 \u041F\u043E\u043B\u044C\u0449\u0456",
        ru: "\u2713 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0444\u0438\u0440\u043C\u044B \u0432 \u041F\u043E\u043B\u044C\u0448\u0435",
        pl: "\u2713 rejestracja firmy w Polsce",
        en: "\u2713 company registration in Poland"
    },
    'header_banner-button': {
        ua: "\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F",
        ru: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F",
        pl: 'Darmowa konsultacja',
        en: 'Free consultation'
    },
    'header_banner-link': {
        ua: "\u041F\u043E\u0434\u0437\u0432\u043E\u043D\u0438\u0442\u0438",
        ru: "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C",
        pl: "Zadzwoni\u0107",
        en: 'Call'
    },
    service_title: {
        ua: "\u041F\u043E\u0441\u043B\u0443\u0433\u0438",
        ru: "\u0423\u0441\u043B\u0443\u0433\u0438",
        pl: "Us\u0142ugi",
        en: 'Services'
    },
    'service_pre-title-1': {
        ua: "1 \u041E\u0440\u0435\u043D\u0434\u0430 \u043E\u0444\u0456\u0441\u0443 \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0456",
        ru: "1 \u0410\u0440\u0435\u043D\u0434\u0430 \u043E\u0444\u0438\u0441\u0443 \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0435",
        pl: "1 Biuro do wynaj\u0119cia w Warszawie",
        en: '1 Office rental in Warsaw'
    },
    'service_description-1': {
        ua: "\u0414\u043B\u044F \u0412\u0430\u0441 \u044F \u0437\u043D\u0430\u0439\u0434\u0443 \u043E\u0444\u0456\u0441 \u0432 \u0440\u0456\u0437\u043D\u0438\u0445 \u0440\u0430\u0439\u043E\u043D\u0430\u0445 \u0412\u0430\u0440\u0448\u0430\u0432\u0438.",
        ru: "\u0414\u043B\u044F \u0432\u0430\u0441 \u043D\u0430\u0439\u0434\u0443 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043F\u043E\u0434 \u043E\u0444\u0438\u0441 \u0432 \u043B\u044E\u0431\u043E\u043C \u0440\u0430\u0439\u043E\u043D\u0435 \u0412\u0430\u0440\u0448\u0430\u0432\u044B.",
        pl: "Znajd\u0119 dla Ciebie biuro w r\xf3\u017Cnych dzielnicach Warszawy.",
        en: 'I will find an office for you in different areas of Warsaw.'
    },
    'service_description-1-2': {
        ua: "\u041E\u0444\u0456\u0441 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u044F\u043A \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u043C\u0435\u0431\u043B\u044C\u043E\u0432\u0430\u043D\u0438\u0439, \u0442\u0430\u043A \u0456 \u0437\u0430\u043F\u0440\u043E\u0454\u043A\u0442\u043E\u0432\u0430\u043D\u0438\u0439 \u0437\u0433\u0456\u0434\u043D\u043E \u0412\u0430\u0448\u0438\u0445 \u043F\u043E\u0431\u0430\u0436\u0430\u043D\u044C.",
        ru: "\u041E\u0444\u0438\u0441 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043A\u0430\u043A \u0433\u043E\u0442\u043E\u0432 \u043C\u0435\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u043D, \u0442\u0430\u043A \u0438 \u0437\u0430\u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u0412\u0430\u0448\u0438\u043C \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F\u043C.",
        pl: "Biuro mo\u017Ce by\u0107 w pe\u0142ni umeblowane lub zaprojektowane wed\u0142ug Pa\u0144stwa \u017Cycze\u0144.",
        en: 'The office can be either fully furnished or designed according to your wishes.'
    },
    'service_description-1-3': {
        ua: "\u041C\u0435\u0442\u0440\u0430\u0436 \u0432\u0456\u0434 100 \u0434\u043E 30 000 \u043C\u043A\u0432",
        ru: "\u041C\u0435\u0442\u0440\u0430\u0436 \u043E\u0442 100 \u0434\u043E 30000 \u043C\u043A\u0432.",
        pl: 'Powierzchnia od 100 do 30 000 m2.',
        en: 'Area from 100 to 30,000 sq m.'
    },
    'service_description-1-4': {
        ua: "*\u041F\u043E\u0441\u043B\u0443\u0433\u0430 \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0430 \u0456 \u043D\u0435\u043C\u0430\u0454 \u043F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u043A\u043E\u043C\u0456\u0441\u0456\u0439",
        ru: "*\u0423\u0441\u043B\u0443\u0433\u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430 \u0438 \u043D\u0435\u0442 \u0441\u043A\u0440\u044B\u0442\u044B\u0445 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0439",
        pl: "*Us\u0142uga jest ca\u0142kowicie bezp\u0142atna i nie zawiera \u017Cadnych ukrytych op\u0142at",
        en: '*The service is completely free and there are no hidden fees'
    },
    'service_button-1': {
        ua: "\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F",
        ru: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F",
        pl: "Bezp\u0142atne konsultacje",
        en: 'Kostenlose Beratung'
    },
    'service_link-1': {
        ua: "\u041F\u043E\u0434\u0437\u0432\u043E\u043D\u0438\u0442\u0438",
        ru: "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C",
        pl: "Zadzwoni\u0107",
        en: 'Call'
    },
    'service_pre-title-2': {
        ua: "2 \u0421\u043A\u043B\u0430\u0434 \u0432 \u041F\u043E\u043B\u044C\u0449\u0456",
        ru: "2 \u0421\u043A\u043B\u0430\u0434 \u0432 \u041F\u043E\u043B\u044C\u0448\u0435",
        pl: '2 Magazyn w Polsce',
        en: '2 Warehouse in Poland'
    },
    'service_description-2': {
        ua: "\u042F \u0442\u0430\u043A\u043E\u0436 \u0437\u0430\u0439\u043C\u0430\u044E\u0441\u044F \u043E\u0440\u0435\u043D\u0434\u043E\u044E \u0441\u043A\u043B\u0430\u0434\u0456\u0432 \u0432 \u041F\u043E\u043B\u044C\u0449\u0456.",
        ru: "\u042F \u0442\u0430\u043A\u0436\u0435 \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0441\u044C \u0430\u0440\u0435\u043D\u0434\u043E\u0439 \u0441\u043A\u043B\u0430\u0434\u043E\u0432 \u0432 \u041F\u043E\u043B\u044C\u0448\u0435.",
        pl: "Wynajmuj\u0119 r\xf3wnie\u017C magazyny w Polsce.",
        en: 'I also rent warehouses in Poland.'
    },
    'service_description-2-2': {
        ua: "\u0412 \u0434\u043E\u0441\u0442\u0443\u043F\u0456 \u0454 \u0431\u0430\u0437\u0430 \u0432\u043B\u0430\u0441\u043D\u0438\u043A\u0456\u0432/\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0456\u0432 \u0421\u043A\u043B\u0430\u0434\u0456\u0432 \u0432 \u041F\u043E\u043B\u044C\u0449\u0456 \u0437 \u043E\u0444\u0456\u0441\u043D\u0438\u043C\u0438 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u044F\u043C\u0438.",
        ru: "\u0412 \u0434\u043E\u0441\u0442\u0443\u043F\u0435 \u0435\u0441\u0442\u044C \u0431\u0430\u0437\u0430 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432/\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432 \u0432 \u041F\u043E\u043B\u044C\u0448\u0435 \u0441 \u043E\u0444\u0438\u0441\u043D\u044B\u043C\u0438 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F\u043C\u0438.",
        pl: "Dost\u0119pna jest baza danych w\u0142a\u015Bcicieli/operator\xf3w Magazyn\xf3w w Polsce posiadaj\u0105cych lokale biurowe.",
        en: 'A database of owners/operators of warehouses in Poland with office space is available.'
    },
    'service_description-2-3': {
        ua: "\u0414\u043E\u0431\u0440\u0430 \u043F\u043E\u0431\u043B\u0438\u0437\u0443 \u0456\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0456 \u0434\u043E\u0457\u0437\u0434.",
        ru: "\u0425\u043E\u0440\u043E\u0448\u0430\u044F \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0432\u0431\u043B\u0438\u0437\u0438 \u0438 \u0434\u043E\u0435\u0437\u0434.",
        pl: "W pobli\u017Cu dobra infrastruktura i dojazd.",
        en: 'Good infrastructure nearby and easy access.'
    },
    'service_description-2-4': {
        ua: "\u041C\u0435\u0442\u0440\u0430\u0436 \u0432\u0456\u0434 100 \u0434\u043E 30 000 \u043C\u043A\u0432",
        ru: "\u041C\u0435\u0442\u0440\u0430\u0436 \u043E\u0442 100 \u0434\u043E 30000 \u043C\u043A\u0432.",
        pl: 'Powierzchnia od 100 do 30 000 m2.',
        en: 'Area from 100 to 30,000 sq m.'
    },
    'service_description-2-5': {
        ua: "*\u041F\u043E\u0441\u043B\u0443\u0433\u0430 \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0430 \u0456 \u043D\u0435\u043C\u0430\u0454 \u043F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u043A\u043E\u043C\u0456\u0441\u0456\u0439",
        ru: "*\u0423\u0441\u043B\u0443\u0433\u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430 \u0438 \u043D\u0435\u0442 \u0441\u043A\u0440\u044B\u0442\u044B\u0445 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0439",
        pl: "*Us\u0142uga jest ca\u0142kowicie bezp\u0142atna i nie zawiera \u017Cadnych ukrytych op\u0142at",
        en: '*The service is completely free and there are no hidden fees'
    },
    'service_button-2': {
        ua: "\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F",
        ru: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F",
        pl: 'Darmowa konsultacja',
        en: 'Free consultation'
    },
    'service_link-2': {
        ua: "\u041F\u043E\u0434\u0437\u0432\u043E\u043D\u0438\u0442\u0438",
        ru: "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C",
        pl: "Zadzwoni\u0107",
        en: 'Call'
    },
    'service_pre-title-3': {
        ua: "3 \u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457 \u0444\u0456\u0440\u043C\u0438 \u0432 \u041F\u043E\u043B\u044C\u0449\u0456 \u0442\u0430 \u0441\u0443\u043F\u0440\u043E\u0432\u0456\u0434",
        ru: "3 \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0444\u0438\u0440\u043C\u044B \u0432 \u041F\u043E\u043B\u044C\u0448\u0435 \u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435",
        pl: '3 Rejestracja firmy w Polsce i pomoc',
        en: '3 Company registration in Poland'
    },
    'service_description-3': {
        ua: "\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430\u044E \u0432 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0442\u0456 \u0444\u0456\u0440\u043C \u0432 \u041F\u043E\u043B\u044C\u0449\u0456, \u043F\u043E\u0432\u043D\u0438\u0439 \u0441\u0443\u043F\u0440\u043E\u0432\u0456\u0434 \u0457\u0457 \u0434\u0456\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0456.",
        ru: "\u041F\u043E\u043C\u043E\u0449\u044C\u044E \u0432 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0438 \u0444\u0438\u0440\u043C \u0432 \u041F\u043E\u043B\u044C\u0448\u0435, \u043F\u043E\u043B\u043D\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0435\u0435 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438.",
        pl: "Pomagam w otwieraniu firm w Polsce, pe\u0142ne wsparcie jej dzia\u0142alno\u015Bci.",
        en: 'I help with opening companies in Poland, full support of its activities.'
    },
    'service_description-3-1': {
        ua: "\u041B\u0435\u0433\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0456\u0432 \u0412\u0430\u0448\u043E\u0457 \u0444\u0456\u0440\u043C\u0438.",
        ru: "\u041B\u0435\u0433\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u043E\u0432 \u0432\u0430\u0448\u0435\u0439 \u0444\u0438\u0440\u043C\u044B.",
        pl: "Legalizacja pracownik\xf3w Twojej firmy.",
        en: 'Legalization of your company`s employees.'
    },
    'service_description-3-2': {
        ua: "\u0417\u0432\u0435\u0440\u0442\u0430\u0439\u0442\u0435\u0441\u044F \u044F \u0437 \u0440\u0430\u0434\u0456\u0441\u0442\u044E \u0412\u0430\u043C \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0443",
        ru: "\u041E\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044C \u0441 \u0440\u0430\u0434\u043E\u0441\u0442\u044C\u044E \u0412\u0430\u043C \u043F\u043E\u043C\u043E\u0433\u0443",
        pl: "Skontaktuj si\u0119 ze mn\u0105, ch\u0119tnie Ci pomog\u0119",
        en: 'Contact me, I will be happy to help you'
    },
    'service_description-3-3': {
        ua: "*\u041F\u043E\u0441\u043B\u0443\u0433\u0430 \u043F\u043B\u0430\u0442\u043D\u0430",
        ru: "*\u0423\u0441\u043B\u0443\u0433\u0430 \u043F\u043B\u0430\u0442\u043D\u0430\u044F",
        pl: "*Us\u0142uga jest p\u0142atna",
        en: '*Service is paid.'
    },
    'service_button-3': {
        ua: "\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F",
        ru: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F",
        pl: 'Darmowa konsultacja',
        en: 'Free consultation'
    },
    'service_link-3': {
        ua: "\u041F\u043E\u0434\u0437\u0432\u043E\u043D\u0438\u0442\u0438",
        ru: "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C",
        pl: "Zadzwoni\u0107",
        en: 'Call'
    },
    advantages_title: {
        ua: "\u041F\u0435\u0440\u0435\u0432\u0430\u0433\u0438",
        ru: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430",
        pl: 'Zalety',
        en: 'Advantages'
    },
    'advantages_pre-title-1': {
        ua: "\u0414\u043E\u0441\u0432\u0456\u0434 \u0432 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0456\u0439 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456",
        ru: "\u041E\u043F\u044B\u0442 \u0432 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438",
        pl: "Do\u015Bwiadczenie w nieruchomo\u015Bciach komercyjnych",
        en: 'Experience in commercial real estate'
    },
    'advantages_pre-title-2': {
        ua: "\u0422\u0443\u0440\u0431\u043E\u0442\u0430 \u043F\u0440\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0430",
        ru: "\u0417\u0430\u0431\u043E\u0442\u0430 \u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0435",
        pl: "Dba\u0142o\u015B\u0107 o klienta",
        en: 'Care for the client'
    },
    'advantages_pre-title-3': {
        ua: "\u0412\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0441\u0442\u044C \u043A\u043E\u043C\u0456\u0441\u0456\u0457 \u0437\u0430 \u043F\u043E\u0441\u043B\u0443\u0433\u0438",
        ru: "\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0439 \u0437\u0430 \u0443\u0441\u043B\u0443\u0433\u0438",
        pl: "Brak prowizji za us\u0142ugi",
        en: 'No commission for services'
    },
    'advantages_pre-title-4': {
        ua: "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0446\u0456\u044F \u043C\u0456\u0441\u044F\u0447\u043D\u043E\u0457 \u043E\u0440\u0435\u043D\u0434\u0438",
        ru: "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0446\u0438\u044F \u043C\u0435\u0441\u044F\u0447\u043D\u043E\u0439 \u0430\u0440\u0435\u043D\u0434\u044B",
        pl: "Obliczanie miesi\u0119cznego czynszu",
        en: 'Monthly rent calculation'
    },
    'advantages_pre-title-5': {
        ua: "\u0414\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0443\u0441\u0456\u0445 \u043E\u0444\u0456\u0441\u043D\u0438\u0445 \u0431\u0443\u0434\u0438\u043D\u043A\u0456\u0432 \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0456",
        ru: "\u0414\u043E\u0441\u0442\u0443\u043F \u043A\u043E \u0432\u0441\u0435\u043C \u043E\u0444\u0438\u0441\u043D\u044B\u043C \u0434\u043E\u043C\u0430\u043C \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0435",
        pl: "Dost\u0119p do wszystkich biurowc\xf3w w Warszawie",
        en: 'Access to all office buildings in Warsaw'
    },
    about_title: {
        ua: "\u041F\u0440\u043E \u043C\u0435\u043D\u0435",
        ru: "\u041E\u0431\u043E \u043C\u043D\u0435",
        pl: 'O mnie',
        en: 'About me'
    },
    // about_name: {
    //   ua: 'Yurii Bukhtii',
    //   ru: 'Yurii Bukhtii',
    //   pl: 'Yurii Bukhtii',
    //   en: 'Yurii Bukhtii',
    // },
    about_description: {
        ua: "\u041F\u0440\u0438\u0432\u0456\u0442! ",
        ru: "\u041F\u0440\u0438\u0432\u0435\u0442! ",
        pl: 'Pozdrowienia!',
        en: 'Greetings!'
    },
    about_description2: {
        ua: "\u042F \u0431\u0440\u043E\u043A\u0435\u0440 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u043E\u0457 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456 \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0456.",
        ru: "\u042F \u0431\u0440\u043E\u043A\u0435\u0440 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0435.",
        pl: "Jestem po\u015Brednikiem w obrocie nieruchomo\u015Bciami komercyjnymi w Warszawie.",
        en: 'I am a commercial real estate broker in Warsaw.'
    },
    about_description3: {
        ua: "\u041C\u043E\u044F \u0440\u043E\u0431\u043E\u0442\u0430 \u043F\u043E\u043B\u044F\u0433\u0430\u0454 \u0443 \u0442\u043E\u043C\u0443, \u0449\u043E\u0431 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 \u0456\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430\u043C, \u043F\u0456\u0434\u043F\u0440\u0438\u0454\u043C\u0446\u044F\u043C \u0442\u0430 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F\u043C \u0437\u043D\u0430\u0439\u0442\u0438 \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0438\u0439 \u043E\u0444\u0456\u0441 \u0434\u043B\u044F \u0457\u0445\u043D\u044C\u043E\u0457 \u0434\u0456\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0456.",
        ru: "\u041C\u043E\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043C\u043E\u0447\u044C \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430\u043C, \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044F\u043C \u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F\u043C \u043D\u0430\u0439\u0442\u0438 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0444\u0438\u0441 \u0434\u043B\u044F \u0438\u0445 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438.",
        pl: "Moj\u0105 prac\u0105 jest pomaganie inwestorom, przedsi\u0119biorcom i organizacjom w znalezieniu idealnego biura dla ich biznesu.",
        en: 'My job is to help investors, entrepreneurs, and organizations find the perfect office for their operations.'
    },
    about_description4: {
        ua: "\u042F \u043F\u0440\u043E\u0432\u043E\u0434\u0436\u0443 \u0412\u0430\u0441 \u0447\u0435\u0440\u0435\u0437 \u0446\u0456\u043B\u0438\u0439 \u043F\u0440\u043E\u0446\u0435\u0441 \u043D\u0430\u0439\u043C\u0443 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u043E\u0457 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456 \u0434\u043E \u043F\u0456\u0434\u043F\u0438\u0441\u0443 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u043E\u0433\u043E \u0434\u043B\u044F \u0412\u0430\u0441 \u043E\u0444\u0456\u0441\u0443.",
        ru: "\u042F \u043F\u0440\u043E\u0432\u043E\u0436\u0443 \u0412\u0430\u0441 \u0447\u0435\u0440\u0435\u0437 \u0446\u0435\u043B\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043D\u0430\u0439\u043C\u0430 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0434\u043E \u043F\u043E\u0434\u043F\u0438\u0441\u0438 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u043B\u0443\u0447\u0448\u0435\u0433\u043E \u0434\u043B\u044F \u0412\u0430\u0441 \u043E\u0444\u0438\u0441\u0430.",
        pl: "Przeprowadz\u0119 Ci\u0119 przez ca\u0142y proces wynajmu nieruchomo\u015Bci komercyjnej a\u017C do podpisania umowy na najlepsze dla Ciebie biuro.",
        en: 'I will guide you through the entire process of renting commercial real estate until you sign the contract for the best office for you.'
    },
    about_description5: {
        ua: "\u0412 \u043C\u0435\u043D\u0435 \u0437 \u043A\u043B\u0456\u0454\u043D\u0442\u0430\u043C\u0438 \u043D\u0430\u0434\u0456\u0439\u043D\u0456 \u0442\u0430 \u043F\u0440\u043E\u0437\u043E\u0440\u0456 \u0432\u0456\u0434\u043D\u043E\u0441\u0438\u043D\u0438, \u0442\u0430\u043A\u043E\u0436 \u044F \u043C\u0430\u044E \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0432\u0435\u043B\u0438\u043A\u043E\u0457 \u0431\u0430\u0437\u0438 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456 \u0456 \u0446\u0435 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454 \u043C\u0435\u043D\u0456 \u0448\u0432\u0438\u0434\u043A\u043E \u0437\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0438 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043E\u0440\u0435\u043D\u0434\u0438 \u044F\u043A\u0456 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0456 \u043C\u043E\u0457\u043C \u043A\u043B\u0456\u0454\u043D\u0442\u0430\u043C. ",
        ru: "\u0423 \u043C\u0435\u043D\u044F \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438 \u043D\u0430\u0434\u0435\u0436\u043D\u044B\u0435 \u0438 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F, \u0442\u0430\u043A\u0436\u0435 \u0443 \u043C\u0435\u043D\u044F \u0435\u0441\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0431\u0430\u0437\u0435 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0438 \u044D\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043C\u043D\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0430\u0440\u0435\u043D\u0434\u044B \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0443\u0436\u043D\u044B \u043C\u043E\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C.",
        pl: "Mam rzeteln\u0105 i przejrzyst\u0105 relacj\u0119 ze swoimi klientami, a tak\u017Ce mam dost\u0119p do du\u017Cej bazy nieruchomo\u015Bci, co pozwala mi szybko znale\u017A\u0107 lokale do wynaj\u0119cia, kt\xf3rych potrzebuj\u0105 moi klienci.",
        en: 'I have reliable and transparent relationships with my clients, and I also have access to a large real estate database, which allows me to quickly find the rental properties my clients need.'
    },
    about_description6: {
        ua: "\u041F\u0440\u043E\u0436\u0438\u0432\u0430\u044E \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0456 \u0456 \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u0457\u0445\u0430\u0442\u0438 \u0434\u043E \u043C\u0435\u043D\u0435 \u0432 \u043E\u0444\u0456\u0441 \u0430\u0431\u043E \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0437\u0443\u0441\u0442\u0440\u0456\u0442\u0438\u0441\u044F \u0434\u0435 \u0412\u0430\u043C \u0431\u0443\u0434\u0435 \u0437\u0440\u0443\u0447\u043D\u0456\u0448\u0435. ",
        ru: "\u041F\u0440\u043E\u0436\u0438\u0432\u0430\u044E \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0435 \u0438 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u0435\u0445\u0430\u0442\u044C \u043A\u043E \u043C\u043D\u0435 \u0432 \u043E\u0444\u0438\u0441 \u0438\u043B\u0438 \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0442\u044C\u0441\u044F, \u0433\u0434\u0435 \u0412\u0430\u043C \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u043E\u0431\u043D\u0435\u0435.",
        pl: "Mieszkam w Warszawie i mo\u017Cesz przyjecha\u0107 do mojego biura lub mo\u017Cemy spotka\u0107 si\u0119 tam, gdzie jest Ci wygodniej.",
        en: 'I live in Warsaw and you can come to my office or we can meet wherever is more convenient for you.'
    },
    about_description7: {
        ua: "\u042F \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 \u0412\u0430\u043C \u0437\u043D\u0430\u0439\u0442\u0438 \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0443 \u041B\u043E\u043A\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044E!",
        ru: "\u042F \u0433\u043E\u0442\u043E\u0432 \u043F\u043E\u043C\u043E\u0447\u044C \u0412\u0430\u043C \u043D\u0430\u0439\u0442\u0438 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u0443\u044E \u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044E!",
        pl: "Jestem gotowy pom\xf3c Ci znale\u017A\u0107 idealn\u0105 lokalizacj\u0119!",
        en: 'I am ready to help you find the perfect Localization!'
    },
    contacts_title: {
        ua: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",
        ru: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
        pl: 'Kontakty',
        en: 'Contacts'
    }
};
// const html = document.querySelector('.html');
const langButtons = document.querySelectorAll('[data-btn]');
const allLangs = [
    'ua',
    'ru',
    'pl',
    'en'
];
const currentPathName = window.location.pathname;
let currentLang = localStorage.getItem('language') || checkBrowserLang() || 'ua';
let currentTexts = {};
// const anotherTexts = {
//   'another_page-title': {
//     ru: 'Другая страница',
//     en: 'Another page',
//     de: 'Eine andere Seite',
//   },
//   'another_page-1': {
//     ru: 'Первый параграф',
//     en: 'First paragraph on another page',
//     de: 'Erster Paragraph auf einer anderen Seite',
//   },
//   'another_page-2': {
//     ru: 'Второй параграф',
//     en: 'Second paragraph on another page',
//     de: 'Zweiter Absatz auf einer anderen Seite',
//   },
//   'another_page-3': {
//     ru: 'Третий параграф',
//     en: 'Third paragraph on another page',
//     de: 'Dritter Absatz auf einer anderen Seite',
//   },
//   'another_page-4': {
//     ru: 'Домашняя страница',
//     en: 'Homepage',
//     de: 'Startseite',
//   },
// };
// Проверка пути страницы сайта
function checkPagePathName() {
    switch(currentPathName){
        case '/index.html':
            currentTexts = homeTexts;
            break;
        // case '/another_page.html':
        //   currentTexts = anotherTexts;
        //   break;
        default:
            currentTexts = homeTexts;
            break;
    }
}
checkPagePathName();
// Изменение языка у текстов
function changeLang() {
    for(const key in currentTexts){
        let elem = document.querySelector(`[data-lang=${key}]`);
        if (elem) elem.textContent = currentTexts[key][currentLang];
    }
}
changeLang();
// Вешаем обработчики на каждую кнопку
langButtons.forEach((btn)=>{
    btn.addEventListener('click', (event)=>{
        if (!event.target.classList.contains('header__btn_active')) {
            currentLang = event.target.dataset.btn;
            localStorage.setItem('language', event.target.dataset.btn);
            resetActiveClass(langButtons, 'header__btn_active');
            btn.classList.add('header__btn_active');
            changeLang();
        }
    });
});
// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
    arr.forEach((elem)=>{
        elem.classList.remove(activeClass);
    });
}
// Проверка активной кнопки
// function checkActiveLangButton() {
//   switch (currentLang) {
//     case 'ua':
//       document
//         .querySelector('[data-btn="ua"]')
//         .classList.add('header__btn_active');
//       break;
//     case 'ru':
//       document
//         .querySelector('[data-btn="ru"]')
//         .classList.add('header__btn_active');
//       break;
//     case 'pl':
//       document
//         .querySelector('[data-btn="pl"]')
//         .classList.add('header__btn_active');
//       break;
//     case 'de':
//       document
//         .querySelector('[data-btn="de"]')
//         .classList.add('header__btn_active');
//       break;
//     default:
//       document
//         .querySelector('[data-btn="ua"]')
//         .classList.add('header__btn_active');
//       break;
//   }
// }
// checkActiveLangButton();
// Проверка языка браузера
function checkBrowserLang() {
    const navLang = navigator.language.slice(0, 2).toLowerCase();
    const result = allLangs.some((elem)=>{
        return elem === navLang;
    });
    if (result) return navLang;
}
console.log('navigator.language', checkBrowserLang());

},{}]},["4UjUW","2rD5z"], "2rD5z", "parcelRequire94c2")

//# sourceMappingURL=index.cb6e59e8.js.map
