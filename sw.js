if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const a=e=>i(e,c),t={module:{uri:c},exports:r,require:a};s[c]=Promise.all(n.map((e=>t[e]||a(e)))).then((e=>(o(...e),r)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-ykDQS1JV.js",revision:null},{url:"index.html",revision:"e0a0f6abd55d8600cb1ca284718fd9ca"},{url:"registerSW.js",revision:"12846ee8c133944c5629be5c52b44064"},{url:"assets/icons/favicon.ico",revision:"e7a1a1289664bd22e7b3d82b8c17a769"},{url:"assets/icons/apple-touch-icon.png",revision:"45dd48eb088d7cb5d1a1392ffac2aafd"},{url:"assets/icons/icon-72x72.png",revision:"bfb8ca546eda0789953f6ed95a4d8166"},{url:"assets/icons/icon-144x144.png",revision:"aab68c0030963af5fcf59e80a0be86b4"},{url:"assets/icons/icon-192x192.png",revision:"a607789f62fd3b4f37a7fb2aca0a08b7"},{url:"assets/icons/icon-512x512.png",revision:"7768ab2df3df293e48f5e659deeae326"},{url:"manifest.webmanifest",revision:"ce5a55e18b79ba783bc50e3f9205ad2a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));