if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,r)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}}))).then((e=>{const s=r(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-a8b10d99"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/AKrTpTwZ8jSYYvleS7DB-/_buildManifest.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/AKrTpTwZ8jSYYvleS7DB-/_ssgManifest.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/13383551.7c1a4d5be1eee2baef2c.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/1606726a.3f2711ff23a6d4765f5f.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/2a71daf2-a03b4b83ec16eaa91a79.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/36.eee152a9ffe29c79fec8.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/364-91540b19114e40a16123.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/374-b76adb2cb4a831aae3ea.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/410-803244545a087353dfe0.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/432.2a38bf46524c35b92820.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/466-2553a714cabe4ba93432.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/740-b825e284e03367a40e29.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/765-84914b85b1107e511e63.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/commons-a1437a35db08f80ed1eb.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/framework-0d6e9d38be559459b49b.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/main-214b122462c9a71ca2c7.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/pages/%5Bid%5D-9ca7cf5d9078d9162e74.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/pages/_app-9781ac84a86e61da0efa.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/pages/_error-bde7875b3c87048aec58.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/pages/index-693ceb12c30b0d69de78.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/pages/login-1f2144dc0a31ded64ab8.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/pages/settings-c5eb9a1a382b810f90f2.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/polyfills-bba4e3ae2a1f646feca8.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/chunks/webpack-11e8d1da42f0be8cc174.js",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/_next/static/css/7cd412922c8e22ca8f80.css",revision:"AKrTpTwZ8jSYYvleS7DB-"},{url:"/logo.svg",revision:"403f773f46bfa82857792ae4badde9fb"},{url:"/logo_1280x640.png",revision:"9fb1324f40f84c763ffa8aabbc1b7658"},{url:"/static/icons/icon-128x128.png",revision:"5cc9308d160893350d4ad2691feb2c58"},{url:"/static/icons/icon-144x144.png",revision:"10fafd514f6d81a1d88f4d5ba53b2e0c"},{url:"/static/icons/icon-152x152.png",revision:"4fa10918244cb7435eb968ddde190f5f"},{url:"/static/icons/icon-192x192.png",revision:"d36705211a4f3d6c3efe797e19fb9483"},{url:"/static/icons/icon-384x384.png",revision:"985217d38708cfe7211370e5417ab8ca"},{url:"/static/icons/icon-512x512.png",revision:"ebe418bf2f95510611bd837780239508"},{url:"/static/icons/icon-72x72.png",revision:"8e40b65c0939608aa38ca80c667fa51d"},{url:"/static/icons/icon-96x96.png",revision:"89c73707b1a53875f450feb090287028"},{url:"/static/manifest.json",revision:"a6d6aaf833e5404cfa536b22b9b5cf9f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));