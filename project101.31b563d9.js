// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"5j6Kf":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d68ad56631b563d9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_SERVER_PORT: string;
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
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
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
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
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
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
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
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
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    if (cssTimeout || typeof document === 'undefined') return;
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
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
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

},{}],"a0t4e":[function(require,module,exports,__globalThis) {
var _lang = require("./js/lang");
var _heroModal = require("./js/hero-modal");
var _modal = require("./js/modal");
var _modal2 = require("./js/modal-2");
var _scrollPage = require("./js/scrollPage");
var _smoothscroll = require("./js/smoothscroll");
var _telegram1 = require("./js/telegram-1");
var _telegram2 = require("./js/telegram-2");
new Splide('#slider1').mount();
new Splide('#slider2').mount();
new Splide('#slider3').mount();
// Щоб анімація була послудовною AOS
const stack = [];
const delayFactor = 300;
const options = {
    rootMargin: '0px',
    threshold: 0.2
};
const callback = (entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            stack.push(entry.target);
            const delay = (stack.length - 1) * delayFactor;
            entry.target.setAttribute('data-aos-delay', `${delay}`);
            setTimeout(()=>{
                stack.shift();
            }, delay);
        }
    });
};
const observer = new IntersectionObserver(callback, options);
const elementsToTrack = document.querySelectorAll('[data-aos]:not([data-aos-delay])');
elementsToTrack.forEach((element)=>{
    observer.observe(element);
});

},{"./js/lang":"1omfJ","./js/hero-modal":"f3iay","./js/modal":"jJ31c","./js/modal-2":"6uTUe","./js/scrollPage":"d2GrK","./js/smoothscroll":"5UCjr","./js/telegram-1":"kkPQb","./js/telegram-2":"i7dOi"}],"1omfJ":[function(require,module,exports,__globalThis) {
const htmlEl = document.querySelector('html');
const buttonEl = document.querySelector('.js-container');
buttonEl.addEventListener('click', onClickButton2);
function onClickButton2(e) {
    console.log(e.target.textContent);
    if (e.target.classList.contains('en')) {
        htmlEl.setAttribute('lang', 'en');
        console.log("\u041F\u0440\u0438\u0432\u0456\u0442");
    } else if (e.target.classList.contains('pl')) htmlEl.setAttribute('lang', 'pl');
    else if (e.target.classList.contains('ua')) htmlEl.setAttribute('lang', 'ua');
    else if (e.target.classList.contains('ru')) htmlEl.setAttribute('lang', 'ru');
    return;
}
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
    'portfolio-title': {
        ua: "\u041C\u043E\u0454 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E",
        ru: "\u041C\u043E\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E",
        pl: 'My portfolio',
        en: 'Moje portfolio'
    },
    'header_menu-home': {
        ua: "\u0413\u043E\u043B\u043E\u0432\u043D\u0430",
        ru: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
        pl: "G\u0142\xf3wna",
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
        en: 'Contact'
    },
    'header_banner-name': {
        ua: 'Yurii Bukhtii',
        ru: 'Yurii Bukhtii',
        pl: 'Yurii Bukhtii',
        en: 'Yurii Bukhtii'
    },
    // 'header_banner-title': {
    //   ua: 'Брокер комерційної нерухомості в Варшаві',
    //   ru: 'Брокер коммерческой недвижимости в Варшаве',
    //   pl: 'Broker nieruchomości komercyjnych w Warszawie',
    //   en: 'Commercial real estate broker in Warsaw',
    // },
    'header_banner-pre-title': {
        ua: "\u0420\u0456\u0435\u043B\u0442\u043E\u0440 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u043E\u0457 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456 \u0443 \u0412\u0430\u0440\u0448\u0430\u0432\u0456",
        ru: "\u0420\u0438\u044D\u043B\u0442\u043E\u0440 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0435",
        pl: "Wynajem Biur, nieruchomo\u015Bci komercyjnych w Warszawie",
        en: 'Renting of Office space, commercial real estate in Warsaw'
    },
    // 'header_banner-advantages-1': {
    //   ua: '✓ оренду офісу в Варшаві',
    //   ru: '✓ аренду офиса Варшаве',
    //   pl: '✓ wynajem biura w Warszawie',
    //   en: '✓ office space to rent',
    // },
    // 'header_banner-advantages-2': {
    //   ua: '✓ склад в Польщі',
    //   ru: '✓ склад в Польше',
    //   pl: '✓ magazyn w Polsce',
    //   en: '✓ warehouses to rent',
    // },
    // 'header_banner-advantages-3': {
    //   ua: '✓ зареєструвати фірму в Польщі',
    //   ru: '✓ зарегистрировать фирму в Польше',
    //   pl: '✓ rejestracja firmy w Polsce',
    //   en: '✓ assistance with company registration',
    // },
    'header_banner-button': {
        ua: "\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F",
        ru: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",
        pl: "Wys\u0142a\u0107 pytanie",
        en: 'Send an enquiry'
    },
    'header_banner-link': {
        ua: "\u0410\u0431\u043E \u0437\u0430\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u043D\u043E\u043C\u0435\u0440\u043E\u043C +48 570 804 478",
        ru: "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C",
        pl: "Zadzwoni\u0107",
        en: 'Call'
    },
    service_title: {
        ua: "\u041C\u043E\u0457 \u043F\u043E\u0441\u043B\u0443\u0433\u0438",
        ru: "\u042F \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0441\u044C \u043F\u043E\u0438\u0441\u043A\u043E\u043C \u043B\u0443\u0447\u0448\u0438\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u0430\u0440\u0435\u043D\u0434\u044B \u043E\u0444\u0438\u0441\u043E\u0432",
        pl: 'Szukam najlepszych opcji wynajmu biur',
        en: 'I find the most suitable office rental offers'
    },
    'service_pre-title-1': {
        ua: "\u041E\u0440\u0435\u043D\u0434\u0430 \u043E\u0444\u0456\u0441\u0443 \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0456",
        ru: "\u0410\u0440\u0435\u043D\u0434\u0430 \u043E\u0444\u0438\u0441\u0443 \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0435",
        pl: "Biuro do wynaj\u0119cia w Warszawie",
        en: 'Office rental in Warsaw'
    },
    'service_description-1': {
        ua: "\u0414\u043B\u044F \u0412\u0430\u0441 \u044F \u0437\u043D\u0430\u0439\u0434\u0443 \u043E\u0444\u0456\u0441 \u0432 \u0440\u0456\u0437\u043D\u0438\u0445 \u0440\u0430\u0439\u043E\u043D\u0430\u0445 \u0412\u0430\u0440\u0448\u0430\u0432\u0438.",
        ru: "\u0414\u043B\u044F \u0432\u0430\u0441 \u043D\u0430\u0439\u0434\u0443 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043F\u043E\u0434 \u043E\u0444\u0438\u0441 \u0432 \u043B\u044E\u0431\u043E\u043C \u0440\u0430\u0439\u043E\u043D\u0435 \u0412\u0430\u0440\u0448\u0430\u0432\u044B.",
        pl: "Znajd\u0119 dla Ciebie biuro w r\xf3\u017Cnych dzielnicach Warszawy.",
        en: 'I will find an office space in Warsaw.'
    },
    'service_description-1-2': {
        ua: "\u041E\u0444\u0456\u0441 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u044F\u043A \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u043C\u0435\u0431\u043B\u044C\u043E\u0432\u0430\u043D\u0438\u0439, \u0442\u0430\u043A \u0456 \u0437\u0430\u043F\u0440\u043E\u0454\u043A\u0442\u043E\u0432\u0430\u043D\u0438\u0439 \u0437\u0433\u0456\u0434\u043D\u043E \u0412\u0430\u0448\u0438\u0445 \u043F\u043E\u0431\u0430\u0436\u0430\u043D\u044C.",
        ru: "\u041E\u0444\u0438\u0441 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043A\u0430\u043A \u0433\u043E\u0442\u043E\u0432 \u043C\u0435\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u043D, \u0442\u0430\u043A \u0438 \u0437\u0430\u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u0412\u0430\u0448\u0438\u043C \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F\u043C.",
        pl: "Biuro mo\u017Ce by\u0107 w pe\u0142ni umeblowane lub zaprojektowane wed\u0142ug Waszych potrzeb.",
        en: 'The office can be designed according to your needs or an office space wich is fully serviced and ready to move in. '
    },
    'service_description-1-3': {
        ua: "\u041C\u0435\u0442\u0440\u0430\u0436 \u0432\u0456\u0434 100 \u0434\u043E 30 000 \u043C\u043A\u0432",
        ru: "\u041C\u0435\u0442\u0440\u0430\u0436 \u043E\u0442 100 \u0434\u043E 30000 \u043C\u043A\u0432.",
        pl: 'Powierzchnia od 100 do 30 000 m2.',
        en: 'Area from 100 to 30 000 sq.m.'
    },
    'service_description-1-4': {
        ua: "*\u041F\u043E\u0441\u043B\u0443\u0433\u0430 \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0430 \u0456 \u043D\u0435\u043C\u0430\u0454 \u043F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u043A\u043E\u043C\u0456\u0441\u0456\u0439",
        ru: "*\u0423\u0441\u043B\u0443\u0433\u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u0438 \u043D\u0435\u0442 \u0441\u043A\u0440\u044B\u0442\u044B\u0445 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0439",
        pl: "*Us\u0142uga jest ca\u0142kowicie bezp\u0142atna i nie zawiera \u017Cadnych ukrytych op\u0142at",
        en: '*My service is free and there are no hidden costs.'
    },
    'service_button-1': {
        ua: "\u0417\u0430\u043B\u0438\u0448\u0438\u0442\u0438 \u0437\u0430\u044F\u0432\u043A\u0443",
        ru: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",
        pl: "Wys\u0142a\u0107 pytanie",
        en: 'Send an enquiry'
    },
    'service_link-1': {
        ua: "\u041F\u043E\u0434\u0437\u0432\u043E\u043D\u0438\u0442\u0438",
        ru: "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C",
        pl: "Zadzwoni\u0107",
        en: 'Call'
    },
    'service_pre-title-2': {
        ua: "\u0421\u043A\u043B\u0430\u0434 \u0432 \u041F\u043E\u043B\u044C\u0449\u0456",
        ru: "\u0421\u043A\u043B\u0430\u0434 \u0432 \u041F\u043E\u043B\u044C\u0448\u0435",
        pl: 'Magazyn w Polsce',
        en: 'Warehouse in Poland'
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
        pl: "Dost\u0119pna jest baza danych w\u0142a\u015Bcicieli/operator\xf3w Magazyn\xf3w w Polsce.",
        en: 'I have access to a database of owners/operators of warehouses.'
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
        pl: 'Powierzchnia od 500 do 30 000 m2.',
        en: 'Area from 500 to 30 000 sq.m.'
    },
    'service_description-2-5': {
        ua: "*\u041F\u043E\u0441\u043B\u0443\u0433\u0430 \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0430 \u0456 \u043D\u0435\u043C\u0430\u0454 \u043F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u043A\u043E\u043C\u0456\u0441\u0456\u0439",
        ru: "*\u0423\u0441\u043B\u0443\u0433\u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430 \u0438 \u043D\u0435\u0442 \u0441\u043A\u0440\u044B\u0442\u044B\u0445 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0439",
        pl: "*Us\u0142uga jest ca\u0142kowicie bezp\u0142atna i nie zawiera \u017Cadnych ukrytych op\u0142at",
        en: '*My service is free and there are no hidden costs.'
    },
    'service_button-2': {
        ua: "\u0417\u0430\u043B\u0438\u0448\u0438\u0442\u0438 \u0437\u0430\u044F\u0432\u043A\u0443",
        ru: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",
        pl: "Wys\u0142a\u0107 pytanie",
        en: 'Send an enquiry'
    },
    'service_link-2': {
        ua: "\u041F\u043E\u0434\u0437\u0432\u043E\u043D\u0438\u0442\u0438",
        ru: "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C",
        pl: "Zadzwoni\u0107",
        en: 'Call'
    },
    'service_pre-title-3': {
        ua: "\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457 \u0444\u0456\u0440\u043C\u0438 \u0432 \u041F\u043E\u043B\u044C\u0449\u0456 \u0442\u0430 \u0441\u0443\u043F\u0440\u043E\u0432\u0456\u0434",
        ru: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0444\u0438\u0440\u043C\u044B \u0432 \u041F\u043E\u043B\u044C\u0448\u0435 \u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435",
        pl: 'Rejestracja firmy w Polsce',
        en: 'I assist in:'
    },
    'service_description-3': {
        ua: "\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430\u044E \u0432 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0442\u0456 \u0444\u0456\u0440\u043C \u0432 \u041F\u043E\u043B\u044C\u0449\u0456, \u043F\u043E\u0432\u043D\u0438\u0439 \u0441\u0443\u043F\u0440\u043E\u0432\u0456\u0434 \u0457\u0457 \u0434\u0456\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0456.",
        ru: "\u041F\u043E\u043C\u043E\u0449\u044C\u044E \u0432 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0438 \u0444\u0438\u0440\u043C \u0432 \u041F\u043E\u043B\u044C\u0448\u0435, \u043F\u043E\u043B\u043D\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0435\u0435 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438.",
        pl: "Pomagam w otwieraniu firm w Polsce, pe\u0142ne wsparcie jej dzia\u0142alno\u015Bci.",
        en: '- the process of registering companies and all the services,'
    },
    'service_description-3-1': {
        ua: "\u041B\u0435\u0433\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0456\u0432 \u0412\u0430\u0448\u043E\u0457 \u0444\u0456\u0440\u043C\u0438.",
        ru: "\u041B\u0435\u0433\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u043E\u0432 \u0432\u0430\u0448\u0435\u0439 \u0444\u0438\u0440\u043C\u044B.",
        pl: "Legalizacja pracownik\xf3w Twojej firmy.",
        en: '- legalisation of your company`s employees.'
    },
    'service_description-3-2': {
        ua: "\u0417\u0432\u0435\u0440\u0442\u0430\u0439\u0442\u0435\u0441\u044F \u044F \u0437 \u0440\u0430\u0434\u0456\u0441\u0442\u044E \u0412\u0430\u043C \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0443",
        ru: "\u041E\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044C \u0441 \u0440\u0430\u0434\u043E\u0441\u0442\u044C\u044E \u0412\u0430\u043C \u043F\u043E\u043C\u043E\u0433\u0443",
        pl: "Skontaktuj si\u0119 ze mn\u0105, ch\u0119tnie Ci pomog\u0119",
        en: 'Contact me with pleasure, I will help you.'
    },
    'service_description-3-3': {
        ua: "*\u041F\u043E\u0441\u043B\u0443\u0433\u0430 \u043F\u043B\u0430\u0442\u043D\u0430",
        ru: "*\u0423\u0441\u043B\u0443\u0433\u0430 \u043F\u043B\u0430\u0442\u043D\u0430\u044F",
        pl: "*Us\u0142uga jest p\u0142atna",
        en: '*Service is paid.'
    },
    'service_button-3': {
        ua: "\u0417\u0430\u043B\u0438\u0448\u0438\u0442\u0438 \u0437\u0430\u044F\u0432\u043A\u0443",
        ru: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",
        pl: "Wys\u0142a\u0107 pytanie",
        en: 'Send an enquiry'
    },
    'service_link-3': {
        ua: "\u041F\u043E\u0434\u0437\u0432\u043E\u043D\u0438\u0442\u0438",
        ru: "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C",
        pl: "Zadzwoni\u0107",
        en: 'Call'
    },
    advantages_title: {
        ua: "\u041F\u0435\u0440\u0435\u0432\u0430\u0433\u0438 \u0441\u043F\u0456\u0432\u043F\u0440\u0430\u0446\u0456 \u0437\u0456 \u043C\u043D\u043E\u044E",
        ru: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0430\u0442\u044C \u0441\u043E \u043C\u043D\u043E\u0439",
        pl: "5 powod\xf3w, dla kt\xf3rych warto ze mn\u0105 wsp\xf3\u0142pracowa\u0107",
        en: '5 reasons to contact me'
    },
    'advantages_pre-title-1': {
        ua: "\u041C\u0430\u044E \u0443\u0441\u043F\u0456\u0448\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u0432 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0456\u0439 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u0456\u0441\u0442\u0456",
        ru: "\u0418\u043C\u0435\u044E \u0443\u0441\u043F\u0435\u0448\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0432 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438",
        pl: "Mam udane do\u015Bwiadczenie w Nieruchomo\u015Bciach Komercyjnych",
        en: 'I have successful experience in commercial real estate'
    },
    'advantages_pre-title-2': {
        ua: "\u041F\u0440\u043E\u043F\u043E\u043D\u0443\u044E \u0442\u0456\u043B\u044C\u043A\u0438 \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u0456 \u0432\u0430\u0440\u0456\u0430\u043D\u0442\u0438 \u043E\u0440\u0435\u043D\u0434\u0438",
        ru: "\u041F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044E \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0443\u0447\u0448\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043E\u0440\u0435\u043D\u0434\u044B",
        pl: "Proponuj\u0119 tylko odpowiednie opcje wynajmu",
        en: 'I offer only the best rental options'
    },
    'advantages_pre-title-3': {
        ua: "\u041C\u043E\u0457 \u043F\u043E\u0441\u043B\u0443\u0433\u0438 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0456 \u0456 \u044F \u043D\u0435 \u0431\u0435\u0440\u0443 \u043D\u0456\u044F\u043A\u0438\u0445 \u043A\u043E\u043C\u0456\u0441\u0456\u0439",
        ru: "\u041C\u043E\u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435 \u0438 \u044F \u043D\u0435 \u0431\u0435\u0440\u0443 \u043D\u0438\u043A\u0430\u043A\u0438\u0445 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0439",
        pl: "Moje us\u0142ugi s\u0105 bezp\u0142atne i nie pobieram \u017Cadnych prowizji",
        en: 'My services are free and there are no hidden costs'
    },
    'advantages_pre-title-4': {
        ua: "\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430\u044E \u043D\u0430 \u0432\u0441\u0456\u0445 \u0435\u0442\u0430\u043F\u0430\u0445 \u043F\u0456\u0434\u043F\u0438\u0441\u0430\u043D\u043D\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u043F\u043E \u043E\u0440\u0435\u043D\u0434\u0456",
        ru: "\u041F\u043E\u043C\u043E\u0433\u0430\u044E \u043D\u0430 \u0432\u0441\u0435\u0445 \u044D\u0442\u0430\u043F\u0430\u0445 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u043F\u043E \u043E\u0440\u0435\u043D\u0434\u0435",
        pl: 'Pomagam na wszystkich etapach podpisywania umowy najmu',
        en: 'I help you at all stages of signing a rental agreement'
    },
    'advantages_pre-title-5': {
        ua: "\u0412 \u043C\u0435\u043D\u0435 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0430 \u0431\u0430\u0437\u0430 \u043E\u0440\u0435\u043D\u0434\u0438 \u043E\u0444\u0456\u0441\u0456\u0432 \u0442\u0430 \u0441\u043A\u043B\u0430\u0434\u0456\u0432 \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0456",
        ru: "\u0423 \u043C\u0435\u043D\u044F \u0441\u0430\u043C\u0430\u044F \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0431\u0430\u0437\u0430 \u0430\u0440\u0435\u043D\u0434\u044B \u043E\u0444\u0438\u0441\u043E\u0432 \u0438 \u0441\u043A\u043B\u0430\u0434\u043E\u0432 \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0435",
        pl: "Mam najwi\u0119ksz\u0105 baz\u0119 wynajm\xf3w biur oraz magazyn\xf3w",
        en: 'I have the largest base of office space and warehouses in Warsaw'
    },
    about_title: {
        ua: "\u041F\u0440\u043E \u043C\u0435\u043D\u0435",
        ru: "\u042F \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B \u0438 \u0443\u043C\u0435\u044E \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442",
        pl: "Jestem profesjonalist\u0105 i potrafi\u0119 znale\u017A\u0107 idealn\u0105 lokalizacj\u0119",
        en: 'I am a professional and know how to find the perfect location'
    },
    // about_name: {
    //   ua: 'Yurii Bukhtii',
    //   ru: 'Yurii Bukhtii',
    //   pl: 'Yurii Bukhtii',
    //   en: 'Yurii Bukhtii',
    // },
    about_description: {
        ua: "\u041F\u0440\u0438\u0432\u0456\u0442! \u041C\u0435\u043D\u0435 \u0437\u0432\u0430\u0442\u0438 Yurii Bukhtii.",
        ru: "\u041F\u0440\u0438\u0432\u0435\u0442! \u041C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 Yurii Bukhtii.",
        pl: "Cze\u015B\u0107! Nazywam si\u0119 Yurii Bukhtii.",
        en: 'Hello! My name is Yurii Bukhtii.'
    },
    about_description2: {
        ua: "\u042F \u0431\u0440\u043E\u043A\u0435\u0440 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u043E\u0457 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456 \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0456.",
        ru: "\u042F \u0431\u0440\u043E\u043A\u0435\u0440 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0435.",
        pl: "Jestem brokerem nieruchomo\u015Bci komercyjnych w Warszawie.",
        en: 'I am a commercial real estate broker in Warsaw.'
    },
    about_description3: {
        ua: "\u041C\u043E\u044F \u0440\u043E\u0431\u043E\u0442\u0430 \u043F\u043E\u043B\u044F\u0433\u0430\u0454 \u0443 \u0442\u043E\u043C\u0443, \u0449\u043E\u0431 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 \u0456\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430\u043C, \u043F\u0456\u0434\u043F\u0440\u0438\u0454\u043C\u0446\u044F\u043C \u0442\u0430 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F\u043C \u0437\u043D\u0430\u0439\u0442\u0438 \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0438\u0439 \u043E\u0444\u0456\u0441 \u0434\u043B\u044F \u0457\u0445\u043D\u044C\u043E\u0457 \u0434\u0456\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0456.",
        ru: "\u041C\u043E\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043C\u043E\u0447\u044C \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430\u043C, \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044F\u043C \u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F\u043C \u043D\u0430\u0439\u0442\u0438 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0444\u0438\u0441 \u0434\u043B\u044F \u0438\u0445 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438.",
        pl: "Moj\u0105 prac\u0105 jest wsparcie inwestor\xf3w, przedsi\u0119biorc\xf3w i organizacji w znalezieniu idealnego biura dla ich biznesu.",
        en: 'My job is to help investors, entrepreneurs, and organizations find the perfect office space for their operations.'
    },
    about_description4: {
        ua: "\u042F \u043F\u0440\u043E\u0432\u043E\u0434\u0436\u0443 \u0412\u0430\u0441 \u0447\u0435\u0440\u0435\u0437 \u0446\u0456\u043B\u0438\u0439 \u043F\u0440\u043E\u0446\u0435\u0441 \u043D\u0430\u0439\u043C\u0443 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u043E\u0457 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456 \u0434\u043E \u043F\u0456\u0434\u043F\u0438\u0441\u0443 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u043E\u0433\u043E \u0434\u043B\u044F \u0412\u0430\u0441 \u043E\u0444\u0456\u0441\u0443.",
        ru: "\u042F \u043F\u0440\u043E\u0432\u043E\u0436\u0443 \u0412\u0430\u0441 \u0447\u0435\u0440\u0435\u0437 \u0446\u0435\u043B\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043D\u0430\u0439\u043C\u0430 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0434\u043E \u043F\u043E\u0434\u043F\u0438\u0441\u0438 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u043B\u0443\u0447\u0448\u0435\u0433\u043E \u0434\u043B\u044F \u0412\u0430\u0441 \u043E\u0444\u0438\u0441\u0430.",
        pl: "Przeprowadz\u0119 Ci\u0119 przez ca\u0142y proces wynajmu nieruchomo\u015Bci komercyjnej a\u017C do podpisania umowy na najlepsze dla Ciebie biuro.",
        en: 'I will guide you through the entire process of renting commercial real estate until the contract is signed.'
    },
    about_description5: {
        ua: "\u0412 \u043C\u0435\u043D\u0435 \u0437 \u043A\u043B\u0456\u0454\u043D\u0442\u0430\u043C\u0438 \u043D\u0430\u0434\u0456\u0439\u043D\u0456 \u0442\u0430 \u043F\u0440\u043E\u0437\u043E\u0440\u0456 \u0432\u0456\u0434\u043D\u043E\u0441\u0438\u043D\u0438, \u0442\u0430\u043A\u043E\u0436 \u044F \u043C\u0430\u044E \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0432\u0435\u043B\u0438\u043A\u043E\u0457 \u0431\u0430\u0437\u0438 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456 \u0456 \u0446\u0435 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454 \u043C\u0435\u043D\u0456 \u0448\u0432\u0438\u0434\u043A\u043E \u0437\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0438 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043E\u0440\u0435\u043D\u0434\u0438 \u044F\u043A\u0456 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0456 \u043C\u043E\u0457\u043C \u043A\u043B\u0456\u0454\u043D\u0442\u0430\u043C. ",
        ru: "\u0423 \u043C\u0435\u043D\u044F \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438 \u043D\u0430\u0434\u0435\u0436\u043D\u044B\u0435 \u0438 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F, \u0442\u0430\u043A\u0436\u0435 \u0443 \u043C\u0435\u043D\u044F \u0435\u0441\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0431\u0430\u0437\u0435 \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438 \u0438 \u044D\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043C\u043D\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0430\u0440\u0435\u043D\u0434\u044B \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0443\u0436\u043D\u044B \u043C\u043E\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C.",
        pl: "Mam rzeteln i przejrzyst relacj ze swoimi klientami Mam dost\u0119p do du\u017Cej bazy nieruchomo\u015Bci, co pozwala mi szybko znale\u017A\u0107 lokale do wynaj\u0119cia, kt\xf3rych potrzebuj\u0105 moi klienci.",
        en: 'I have access to a large real estate database, which enables me to find the ideal office space for my clients.'
    },
    about_description6: {
        ua: "\u041F\u0440\u043E\u0436\u0438\u0432\u0430\u044E \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0456 \u0456 \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u0457\u0445\u0430\u0442\u0438 \u0434\u043E \u043C\u0435\u043D\u0435 \u0432 \u043E\u0444\u0456\u0441 \u0430\u0431\u043E \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0437\u0443\u0441\u0442\u0440\u0456\u0442\u0438\u0441\u044F \u0434\u0435 \u0412\u0430\u043C \u0431\u0443\u0434\u0435 \u0437\u0440\u0443\u0447\u043D\u0456\u0448\u0435. ",
        ru: "\u041F\u0440\u043E\u0436\u0438\u0432\u0430\u044E \u0432 \u0412\u0430\u0440\u0448\u0430\u0432\u0435 \u0438 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u0435\u0445\u0430\u0442\u044C \u043A\u043E \u043C\u043D\u0435 \u0432 \u043E\u0444\u0438\u0441 \u0438\u043B\u0438 \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0442\u044C\u0441\u044F, \u0433\u0434\u0435 \u0412\u0430\u043C \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u043E\u0431\u043D\u0435\u0435.",
        pl: "Pracuj\u0119 w Warszawie i mo\u017Cesz przyjecha\u0107 do mojego biura lub mo\u017Cemy spotka\u0107 si\u0119 tam, gdzie jest wygodniej dla Ciebie.",
        en: 'I work in Warsaw and we can meet at my office or wherever is convenient for you.'
    },
    about_description7: {
        ua: "\u042F \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 \u0412\u0430\u043C \u0437\u043D\u0430\u0439\u0442\u0438 \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0443 \u041B\u043E\u043A\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044E!",
        ru: "\u042F \u0433\u043E\u0442\u043E\u0432 \u043F\u043E\u043C\u043E\u0447\u044C \u0412\u0430\u043C \u043D\u0430\u0439\u0442\u0438 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u0443\u044E \u043B\u043E\u043A\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044E!",
        pl: "Jestem gotowy pom\xf3c Ci w znalezieniu idealnej lokalizacji!",
        en: 'I am ready to help you find your perfect location.'
    },
    contacts_title: {
        ua: "\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F",
        ru: "\u0417\u0432\u043E\u043D\u0438\u0442\u0435, \u043F\u0438\u0448\u0438\u0442\u0435 \u0438\u043B\u0438 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443",
        pl: "Pa\u0144stwo mog\u0105 zadzwoni\u0107, napisa\u0107 lub wys\u0142a\u0107 zapytanie do mnie",
        en: 'You can call, or send your questions to me'
    },
    contacts_logo: {
        ua: "\u042F \u0437\u043D\u0430\u0439\u0434\u0443 \u0434\u043B\u044F \u0412\u0430\u0441 \u043E\u0444\u0456\u0441 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u043C\u0443 \u0440\u0430\u0439\u043E\u043D\u0456 \u0412\u0430\u0440\u0448\u0430\u0432\u0438",
        ru: "\u042F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u043D\u0430\u0439\u0434\u0443 \u0434\u043B\u044F \u0432\u0430\u0441 \u043E\u0444\u0438\u0441 \u0432 \u043B\u044E\u0431\u043E\u043C \u0440\u0430\u0439\u043E\u043D\u0435 \u0412\u0430\u0440\u0448\u0430\u0432\u044B. \u0417\u0432\u043E\u043D\u0438\u0442\u0435 \u0438\u043B\u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0439\u0442\u0435 \u0444\u043E\u0440\u043C\u0443 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438 \u0438\u043B\u0438 \u043F\u0438\u0448\u0438\u0442\u0435 \u0432 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C\u043C\u044B.",
        pl: "Za darmo znajd\u0119 dla Ciebie biuro w ka\u017Cdej dzielnicy Warszawy. Zadzwo\u0144 lub wype\u0142nij formularz kontaktowy lub napisz do mnie na telegram.",
        en: 'I will find an office space for you for free in any district of Warsaw. Call or fill out the feedback form or write to me via Telegram.'
    },
    form_title: {
        ua: "\u0417\u0430\u043B\u0438\u0448\u0442\u0435 \u0441\u0432\u043E\u0457 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456, \u0456 \u043C\u0438 \u0437\u0432`\u044F\u0436\u0435\u043C\u043E\u0441\u044F \u0437 \u0432\u0430\u043C\u0438",
        ru: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",
        pl: "Wys\u0142a\u0107 pytanie",
        en: 'Send an enquiry'
    },
    form_name: {
        ua: "\u0406\u043C`\u044F*",
        ru: "\u0418\u043C\u044F*",
        pl: "Imi\u0119*",
        en: 'Name*'
    },
    form_tel: {
        ua: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443*",
        ru: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430*",
        pl: 'Phone number*',
        en: 'Phone number*'
    },
    form_comment: {
        ua: "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440",
        ru: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
        pl: 'Comment',
        en: 'Message'
    },
    form_btn: {
        ua: "\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438",
        ru: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
        pl: "Wys\u0142a\u0107 pytanie",
        en: 'Send an enquiry'
    },
    form_title2: {
        ua: "\u0417\u0430\u043B\u0438\u0448\u0442\u0435 \u0441\u0432\u043E\u0457 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456, \u0456 \u043C\u0438 \u0437\u0432`\u044F\u0436\u0435\u043C\u043E\u0441\u044F \u0437 \u0432\u0430\u043C\u0438",
        ru: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",
        pl: "Wys\u0142a\u0107 pytanie",
        en: 'Send an enquiry'
    },
    form_name2: {
        ua: "\u0406\u043C`\u044F*",
        ru: "\u0418\u043C\u044F*",
        pl: "Imi\u0119*",
        en: 'Name*'
    },
    form_tel2: {
        ua: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443*",
        ru: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430*",
        pl: 'Phone number*',
        en: 'Phone number*'
    },
    form_comment2: {
        ua: "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440",
        ru: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
        pl: 'Comment',
        en: 'Message'
    },
    form_btn2: {
        ua: "\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438",
        ru: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
        pl: "Wys\u0142a\u0107",
        en: 'Send'
    },
    form_answer1: {
        ua: "\u2705 \u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E.",
        ru: "\u2705 \u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E.",
        pl: "\u2705 Pytanie wys\u0142ano",
        en: "\u2705 Message sent."
    },
    form_answer12: {
        ua: "\u0417\u0432`\u044F\u0436\u0443\u0441\u044F \u0437 \u0412\u0430\u043C\u0438 \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u043E\u0434\u043D\u0456\u0454\u0457 \u0433\u043E\u0434\u0438\u043D\u0438.",
        ru: "\u042F \u0441\u0432\u044F\u0436\u0443\u0441\u044C \u0441 \u0412\u0430\u043C\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u0447\u0430\u0441\u0430.",
        pl: "Skontaktuj\u0119 si\u0119 z Tob\u0105 w ci\u0105gu godziny.",
        en: 'I will contact you within one hour.'
    },
    form_answer21: {
        ua: "\u2705 \u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E.",
        ru: "\u2705 \u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E.",
        pl: "\u2705 Wiadomo\u015B\u0107 wys\u0142ana.",
        en: "\u2705 Message sent."
    },
    form_answer22: {
        ua: "\u0417\u0432`\u044F\u0436\u0443\u0441\u044F \u0437 \u0412\u0430\u043C\u0438 \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u043E\u0434\u043D\u0456\u0454\u0457 \u0433\u043E\u0434\u0438\u043D\u0438.",
        ru: "\u042F \u0441\u0432\u044F\u0436\u0443\u0441\u044C \u0441 \u0412\u0430\u043C\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u0447\u0430\u0441\u0430.",
        pl: "Skontaktuj\u0119 si\u0119 z Tob\u0105 w ci\u0105gu jednej godziny.",
        en: 'I will contact You within one hour.'
    }
};
// console.log(htmlEl.lang);
// return;
// const langButtons = document.querySelectorAll('[data-btn]');
const langButtons = document.querySelectorAll('.btn');
const allLangs = [
    'ua',
    'ru',
    'pl',
    'en'
];
const currentPathName = window.location.pathname;
let currentLang = 'ua';
// localStorage.getItem('language') || checkBrowserLang() || 'ua';
let currentTexts = {};
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
            // localStorage.setItem('language', event.target.dataset.btn);
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
// function checkActiveLangButton(e) {
//   switch (currentLang) {
//     case 'ua':
//       document.querySelector('[data-btn="ua"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'ua');
//       break;
//     case 'ru':
//       document.querySelector('[data-btn="ru"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'ru');
//       break;
//     case 'pl':
//       document.querySelector('[data-btn="pl"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'pl');
//       break;
//     case 'de':
//       document.querySelector('[data-btn="en"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'en');
//       break;
//     default:
//       document.querySelector('[data-btn="ua"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'uk');
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

},{}],"f3iay":[function(require,module,exports,__globalThis) {
const refsContainerButton2 = {
    //   containerRef: document.querySelector('.service__list'),
    openModalRef: document.querySelector('.js-button'),
    closeModalBtnRef: document.querySelector('.js-close-modal'),
    backdrop2Ref: document.querySelector('.js-backdrop-2')
};
refsContainerButton2.openModalRef.addEventListener('click', onClickButton2);
refsContainerButton2.closeModalBtnRef.addEventListener('click', onCloseModal2);
refsContainerButton2.backdrop2Ref.addEventListener('click', onBackdropModal2);
function onClickButton2(e) {
    //   console.log(e);
    //   if (!e.target.classList.contains('js-button')) {
    //     return;
    //   }
    refsContainerButton2.backdrop2Ref.classList.remove('is-hidden-2');
    window.addEventListener('keydown', onEscKeyPress2);
    document.body.classList.add('show-modal');
//   refsContainerButton.modalTitle.textContent = e.target.textContent;
}
function onCloseModal2() {
    refsContainerButton2.backdrop2Ref.classList.add('is-hidden-2');
    window.removeEventListener('keydown', onEscKeyPress2);
    document.body.classList.remove('show-modal');
}
function onBackdropModal2(event) {
    if (event.currentTarget === event.target) onCloseModal2();
}
function onEscKeyPress2(event) {
    if (event.code === 'Escape') onCloseModal2();
}

},{}],"jJ31c":[function(require,module,exports,__globalThis) {
// скрипт делегування щоб в контенере при натискі на будь яку кнопку відкривилося модалька
const refsContainerButton = {
    containerEl: document.querySelector('.js-modal'),
    backdrop: document.querySelector('.js-backdrop')
};
refsContainerButton.containerEl.addEventListener('click', onClickButton);
function onClickButton(e) {
    if (!e.target.classList.contains('btn')) return;
    console.log(e.target);
    onCloseModal();
}
function onCloseModal() {
    document.body.classList.remove('show-modal');
    refsContainerButton.backdrop.classList.add('is-hidden');
}

},{}],"6uTUe":[function(require,module,exports,__globalThis) {
const refsContainerButton2 = {
    containerRef: document.querySelector('.service__list'),
    openModalRef: document.querySelector('.js-button'),
    closeModalBtnRef: document.querySelector('.js-close-modal'),
    backdrop2Ref: document.querySelector('.js-backdrop-2')
};
refsContainerButton2.containerRef.addEventListener('click', onClickButton2);
refsContainerButton2.closeModalBtnRef.addEventListener('click', onCloseModal2);
refsContainerButton2.backdrop2Ref.addEventListener('click', onBackdropModal2);
function onClickButton2(e) {
    console.log(e);
    if (!e.target.classList.contains('js-button')) return;
    refsContainerButton2.backdrop2Ref.classList.remove('is-hidden-2');
    window.addEventListener('keydown', onEscKeyPress2);
    document.body.classList.add('show-modal');
//   refsContainerButton.modalTitle.textContent = e.target.textContent;
}
function onCloseModal2() {
    refsContainerButton2.backdrop2Ref.classList.add('is-hidden-2');
    window.removeEventListener('keydown', onEscKeyPress2);
    document.body.classList.remove('show-modal');
}
function onBackdropModal2(event) {
    if (event.currentTarget === event.target) onCloseModal2();
}
function onEscKeyPress2(event) {
    if (event.code === 'Escape') onCloseModal2();
}

},{}],"d2GrK":[function(require,module,exports,__globalThis) {
// скрол
window.addEventListener('scroll', ()=>{
    let scrollDistance = window.scrollY;
    // console.log(scrollDistance);
    document.querySelectorAll('.scroll').forEach((el, i)=>{
        if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
            document.querySelectorAll('.nav a').forEach((el)=>{
                if (el.classList.contains('active')) el.classList.remove('active');
            });
            document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
        }
    });
});

},{}],"5UCjr":[function(require,module,exports,__globalThis) {
SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 800,
    // Размер шага в пикселях
    stepSize: 75,
    // Дополнительные настройки:
    // Ускорение
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 2,
    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,
    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,
    // Поддержка тачпада
    touchpadSupport: true
});

},{}],"kkPQb":[function(require,module,exports,__globalThis) {
// const TOKEN = '6470796582:AAEzk1WSMbpsvtk_zU8M9E4AEclnoD5ovB8';
// const CHAT_ID = '-1002084469289';
const TOKEN = '8169061476:AAHtDS5WvAkDO9fKRI7oDyzOKKibMVvLoN0';
const CHAT_ID = '-1002317382342';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const formText1 = document.querySelector('.form__text1');
const formBlock1 = document.querySelector('.form_answer1');
document.getElementById('form1').addEventListener('submit', function(e) {
    e.preventDefault();
    let message = `<b>\u{411}\u{415}\u{421}\u{41F}\u{41B}\u{410}\u{422}\u{41D}\u{410}\u{42F} \u{41A}\u{41E}\u{41D}\u{421}\u{423}\u{41B}\u{42C}\u{422}\u{410}\u{426}\u{418}\u{42F}</b>
`;
    message += `<b>\u{418}\u{43C}\u{44F}: </b> ${this.name.value}\n`;
    message += `<b>\u{422}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}: </b> ${this.tel.value}\n`;
    message += `<b>\u{41A}\u{43E}\u{43C}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}\u{438}\u{439}: </b> ${this.comment.value}\n`;
    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    }).then((res)=>{
        this.name.value = '';
        this.tel.value = '';
        this.comment.value = '';
        // this.comment.value = `+✅ I will contact You within one hour.`;
        formText1.classList.add('form__none1');
        formBlock1.classList.add('form_answer-block1');
    }).catch((error)=>{
        console.log(error);
    }).finally(()=>{
        console.log("\u041A\u043E\u043D\u0435\u0446");
    });
});

},{}],"i7dOi":[function(require,module,exports,__globalThis) {
// const TOKEN = '6470796582:AAEzk1WSMbpsvtk_zU8M9E4AEclnoD5ovB8';
// const CHAT_ID = '-1002084469289';
const TOKEN = '8169061476:AAHtDS5WvAkDO9fKRI7oDyzOKKibMVvLoN0';
const CHAT_ID = '-1002317382342';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const formText = document.querySelector('.form__text2');
const formBlock = document.querySelector('.form_answer2');
document.getElementById('form2').addEventListener('submit', function(e) {
    e.preventDefault();
    let message1 = `<b>\u{411}\u{415}\u{421}\u{41F}\u{41B}\u{410}\u{422}\u{41D}\u{410}\u{42F} \u{41A}\u{41E}\u{41D}\u{421}\u{423}\u{41B}\u{42C}\u{422}\u{410}\u{426}\u{418}\u{42F}</b>
`;
    message1 += `<b>\u{418}\u{43C}\u{44F}: </b> ${this.name.value}\n`;
    message1 += `<b>\u{422}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}: </b> ${this.tel.value}\n`;
    message1 += `<b>\u{41A}\u{43E}\u{43C}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}\u{438}\u{439}: </b> ${this.comment.value}\n`;
    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message1
    }).then((res)=>{
        this.name.value = '';
        this.tel.value = '';
        this.comment.value = '';
        // this.comment.value = `✅ I will contact You within one hour.`;
        formText.classList.add('form__none2');
        formBlock.classList.add('form_answer-block2');
    }).catch((error)=>{
        console.log(error);
    }).finally(()=>{
        console.log("\u041A\u043E\u043D\u0435\u0446");
    });
});

},{}]},["5j6Kf","a0t4e"], "a0t4e", "parcelRequiredf42", {})

//# sourceMappingURL=project101.31b563d9.js.map
