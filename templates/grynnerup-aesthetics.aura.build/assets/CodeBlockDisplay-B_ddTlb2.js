import{cb as V,j as e,u as q,d as z,k as W,r as d,X as B,C as X,bl as D,am as Y}from"./index-D0qeGPq_.js";import{u as _}from"./useIntersectionObserver-BeNT1iMp.js";import{g as k}from"./componentCenteringUtils-D5WdjxUy.js";import{M as J}from"./minus-BanfOPOi.js";import{M as K}from"./maximize-2-BsjdsICg.js";import{L as M}from"./lock-TngCzjqx.js";import{P as Q}from"./pause-tXLezOPF.js";import{P as Z}from"./play-BlxllurK.js";import{C as ee}from"./copy-DjLOdPDk.js";import{h as te}from"./prism-Rg0-4uAe.js";import{v as re}from"./vsc-dark-plus-CcVsXCy1.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=V("SquareArrowUpRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 8h8v8",key:"b65dnt"}],["path",{d:"m8 16 8-8",key:"13b9ih"}]]),xe=(t,n)=>{t({title:"Pro Component",description:e.jsxs(e.Fragment,{children:["This component is only available for Pro users. Upgrade to Pro to access premium components."," ",e.jsx("button",{onClick:()=>n("/pricing"),className:"text-blue-400 hover:text-blue-300 underline font-medium",children:"View Pricing"})]}),variant:"default"})},ye=(t,n)=>{t({title:"Pro Template",description:e.jsxs(e.Fragment,{children:["This template is only available for Pro users. Upgrade to Pro to access premium templates."," ",e.jsx("button",{onClick:()=>n("/pricing"),className:"text-blue-400 hover:text-blue-300 underline font-medium",children:"View Pricing"})]}),variant:"default"})},we=(t,n,s)=>{t({title:"Pro Components",description:e.jsxs(e.Fragment,{children:[s," premium component(s) are only available for Pro users. Upgrade to Pro to access premium components."," ",e.jsx("button",{onClick:()=>n("/pricing"),className:"text-blue-400 hover:text-blue-300 underline font-medium",children:"View Pricing"})]}),variant:"default"})},ve=(t,n,s)=>{t({title:"Pro Templates",description:e.jsxs(e.Fragment,{children:[s," premium template(s) are only available for Pro users. Upgrade to Pro to access premium templates."," ",e.jsx("button",{onClick:()=>n("/pricing"),className:"text-blue-400 hover:text-blue-300 underline font-medium",children:"View Pricing"})]}),variant:"default"})},I=(t,n,s)=>{const p=s==="copy"?"copy premium code":"view premium content";t({title:"Pro Content",description:e.jsxs(e.Fragment,{children:["This code is only available for Pro users. Upgrade to Pro to ",p,"."," ",e.jsx("button",{onClick:()=>n("/pricing"),className:"text-blue-400 hover:text-blue-300 underline font-medium",children:"View Pricing"})]}),variant:"default"})},ne=t=>{var h;if(!t)return"";const n='<script src="https://cdn.tailwindcss.com"><\/script>',s=`
    <style>
      /* Disable animations */
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
        scroll-behavior: auto !important;
        animation: none !important;
      }
      
      /* Disable CSS transforms that might be animated */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
      
      /* Override opacity-0 class during preview to keep elements visible */
      .opacity-0 {
        opacity: 1 !important;
      }
      
      /* Disable classes with "animate" in their name */
      [class*="animate"] {
        animation: none !important;
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        animation-iteration-count: 1 !important;
        animation-fill-mode: none !important;
        opacity: 1 !important;
        filter: none !important;
        -webkit-filter: none !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
      }
      
      /* Hide Spline embeds */
      spline-viewer,
      [data-spline],
      iframe[src*="spline.design"],
      iframe[src*="my.spline.design"],
      embed[src*="spline.design"],
      embed[src*="my.spline.design"],
      object[data*="spline.design"],
      object[data*="my.spline.design"] {
        display: none !important;
        visibility: hidden !important;
      }
      
      /* Hide canvas elements that might be used for threejs */
      canvas:not([data-allow-canvas]) {
        display: none !important;
        visibility: hidden !important;
      }
    </style>
    <script>
      (function() {
        // Disable requestAnimationFrame
        window.requestAnimationFrame = function(callback) {
          return -1;
        };
        
        // Disable setTimeout for short intervals (likely animations)
        const originalSetTimeout = window.setTimeout;
        window.setTimeout = function(callback, delay) {
          if (delay < 100) {
            // Return a valid timer ID but don't execute the callback
            return originalSetTimeout.call(this, function() {}, delay);
          }
          return originalSetTimeout.apply(this, arguments);
        };
        
        // Disable setInterval (likely animations)
        const originalSetInterval = window.setInterval;
        window.setInterval = function(callback, delay) {
          // Return a valid timer ID but don't execute the callback
          return originalSetInterval.call(this, function() {}, delay);
        };
        
        // Disable canvas rendering
        const originalGetContext = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function(contextType, contextAttributes) {
          // Allow canvas if explicitly marked as allowed
          if (this.hasAttribute('data-allow-canvas')) {
            return originalGetContext.call(this, contextType, contextAttributes);
          }
          
          const context = originalGetContext.call(this, contextType, contextAttributes);
          if (!context) return context;
          
          // For 2D context, override drawing methods
          if (contextType === '2d') {
            const drawingMethods = [
              'clearRect', 'fillRect', 'strokeRect', 'fillText', 'strokeText',
              'drawImage', 'putImageData', 'fill', 'stroke', 'arc', 'arcTo',
              'beginPath', 'closePath', 'lineTo', 'moveTo', 'quadraticCurveTo',
              'bezierCurveTo', 'rect', 'ellipse'
            ];
            
            drawingMethods.forEach(method => {
              if (typeof context[method] === 'function') {
                context[method] = function() {
                  return this;
                };
              }
            });
          }
          
          // For WebGL context, override key methods
          else if (contextType === 'webgl' || contextType === 'webgl2' || contextType === 'experimental-webgl') {
            const webglMethods = [
              'clear', 'drawArrays', 'drawElements', 'useProgram', 'bindBuffer',
              'bindTexture', 'bindFramebuffer', 'viewport', 'enable', 'disable'
            ];
            
            webglMethods.forEach(method => {
              if (typeof context[method] === 'function') {
                context[method] = function() {
                  return this;
                };
              }
            });
          }
          
          return context;
        };
        
        // Disable Three.js specific functionality
        setTimeout(() => {
          if (typeof THREE !== 'undefined') {
            if (THREE.WebGLRenderer) {
              THREE.WebGLRenderer.prototype.render = function() {
                return this;
              };
            }
            
            if (THREE.AnimationMixer) {
              THREE.AnimationMixer.prototype.update = function() {
                return this;
              };
            }
          }
        }, 100);
        
        // Disable Spline functionality
        const hideSplineElements = () => {
          const splineSelectors = [
            'spline-viewer',
            '[data-spline]',
            'iframe[src*="spline.design"]',
            'iframe[src*="my.spline.design"]',
            'embed[src*="spline.design"]',
            'embed[src*="my.spline.design"]',
            'object[data*="spline.design"]',
            'object[data*="my.spline.design"]'
          ];
          
          splineSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
              el.style.display = 'none';
              el.style.visibility = 'hidden';
            });
          });
        };
        
        hideSplineElements();
        
        // Monitor for new spline elements being added
        if (document.body instanceof Node) {
          const observer = new MutationObserver(hideSplineElements);
          observer.observe(document.body, { 
            childList: true, 
            subtree: true,
            attributes: true,
            attributeFilter: ['src', 'data']
          });
        }
        
        // Disable Spline runtime
        if (typeof window.Spline !== 'undefined') {
          window.Spline = function() {
            return {
              load: () => Promise.resolve(),
              setSize: () => {},
              dispose: () => {},
              play: () => {},
              pause: () => {},
              stop: () => {}
            };
          };
        }
        
        Object.defineProperty(window, 'Spline', {
          set: function(value) {
            window._SplineOriginal = value;
          },
          get: function() {
            return function() {
              return {
                load: () => Promise.resolve(),
                setSize: () => {},
                dispose: () => {},
                play: () => {},
                pause: () => {},
                stop: () => {}
              };
            };
          },
          configurable: true
        });
      })();
    <\/script>
  `;if(t.toLowerCase().includes("<html")&&t.toLowerCase().includes("<head")&&t.toLowerCase().includes("<body")){let o=t;const a=[];t.includes("fonts.googleapis.com")||(a.push('<link rel="preconnect" href="https://fonts.googleapis.com">'),a.push('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'),a.push('<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">')),t.includes("https://cdn.tailwindcss.com")||a.push(n),t.includes("lucide")||a.push('<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"><\/script>'),(!t.includes("font-family")||!t.includes("Inter"))&&a.push(`<style>
      body { font-family: 'Inter', sans-serif; }
    </style>`);const f=[...a,s];if(f.length>0){const l=f.join(`
  `);o.toLowerCase().includes("</head>")?o=o.replace(/(<\/head>)/i,`  ${l}
$1`):o.toLowerCase().includes("<head>")&&(o=o.replace(/(<head[^>]*>)/i,`$1
  ${l}`))}if(o.toLowerCase().includes("<body")){const l=o.match(/<body[^>]*>([\s\S]*)<\/body>/i);if(l){const g=l[1],x=((h=l[0].match(/<body[^>]*>/i))==null?void 0:h[0])||"<body>";o.toLowerCase().includes("</head>")&&(o=o.replace(/(<\/head>)/i,`
    <style>
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      .component-wrapper {
        width: 100%;
        height: 100%;
        padding: 0;
        box-sizing: border-box;
        overflow: auto;
      }
    </style>
$1`)),o=o.replace(/<body[^>]*>([\s\S]*)<\/body>/i,`${x}
    <div class="component-wrapper">
      ${g}
    </div>
    ${k()}
  </body>`)}}return o}return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${`
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  ${n}
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body { font-family: 'Inter', sans-serif; }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>`}
  ${s}
  <title>Preview</title>
</head>
<body>
  <div class="component-wrapper">
  ${t}
  </div>
  ${k()}
</body>
</html>`},ke=({rawHtmlContent:t,onPromoteToMainPreview:n,height:s="240px",startHidden:p=!1,defaultEffectsEnabled:h=!1,zoom:o=.5,backgroundColor:a="white",centerContent:f=!1,defaultView:l="preview",premium:g=!1})=>{const{userTier:x}=q(),{toast:y}=z(),j=W(),C=d.useRef(null),T=_(C,{root:null,rootMargin:"200px 0px 200px 0px",threshold:.01}),[u,w]=d.useState(l),[P,b]=d.useState(p),[F,S]=d.useState(!1),[m,R]=d.useState(h);d.useEffect(()=>{w(l)},[l]),d.useEffect(()=>{b(p)},[p]);const A=Y.isProUser(x),r=g&&!A,U=()=>{if(r){I(y,j,"copy");return}navigator.clipboard.writeText(t),S(!0),setTimeout(()=>S(!1),2e3)},N=()=>{if(r){I(y,j,"view");return}n&&n(D(t))},H=()=>{R(!m)},G=!P&&u==="preview"&&T&&!r?(()=>{var $;if(u!=="preview")return"";try{let i=t.length>5e5?t:m?D(t):ne(t);if(i.toLowerCase().includes("<body")){const v=i.match(/<body[^>]*>([\s\S]*)<\/body>/i);if(v){let c=v[1];const O=(($=v[0].match(/<body[^>]*>/i))==null?void 0:$[0])||"<body>",L=`
      <style>
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
        }
        .component-wrapper {
          width: 100%;
          height: 100%;
          padding: 0;
          box-sizing: border-box;
          overflow: auto;
        }
      </style>`;i.includes(".component-wrapper")||(i.toLowerCase().includes("</head>")?i=i.replace(/(<\/head>)/i,`${L}
$1`):i.toLowerCase().includes("<head>")&&(i=i.replace(/(<head[^>]*>)/i,`$1
${L}`))),!c.includes('class="component-wrapper"')&&!c.includes("class='component-wrapper'")&&(c=`<div class="component-wrapper">${c}</div>`),!c.includes("getComponentCenteringScript")&&!c.includes("checkAndCenter")&&(c=`${c}
    ${k()}`),i=i.replace(/<body[^>]*>([\s\S]*)<\/body>/i,`${O}
      ${c}
    </body>`)}}return i}catch(E){return console.warn("Failed to prepare HTML for preview, using raw content:",E),t}})():"";return e.jsxs("div",{ref:C,className:"my-2 rounded-md overflow-hidden border border-black/5 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900",children:[e.jsxs("div",{className:"flex items-center justify-between p-1 px-1 bg-neutral-50 dark:bg-neutral-800/80 border-b border-border/50 text-xs",children:[e.jsxs("div",{className:"flex items-center space-x-1.5 pl-1.5",children:[e.jsx("span",{className:"block w-2.5 h-2.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-red-400 rounded-full transition-colors relative group cursor-pointer",onClick:()=>b(!0),children:e.jsx(B,{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 text-white",strokeWidth:3})}),e.jsx("span",{className:"block w-2.5 h-2.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-yellow-400 rounded-full transition-colors relative group cursor-pointer",onClick:()=>b(!0),children:e.jsx(J,{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 text-white",strokeWidth:3})}),e.jsx("span",{className:`block w-2.5 h-2.5 bg-neutral-300 dark:bg-neutral-700 rounded-full transition-colors relative group ${r?"cursor-not-allowed opacity-50":"hover:bg-green-400 cursor-pointer"}`,onClick:N,children:e.jsx(K,{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 text-white",strokeWidth:3})}),e.jsxs("div",{className:"flex items-center space-x-1",children:[n&&e.jsx(e.Fragment,{children:e.jsxs("button",{onClick:N,title:r?"Pro content - Upgrade to view":"Show in main preview",disabled:r,className:`flex gap-1 items-center ml-1 p-0 px-1 rounded border text-[10px] font-medium ${r?"cursor-not-allowed opacity-50 border-neutral-200 dark:border-neutral-700 text-neutral-400":"hover:bg-neutral-100 dark:hover:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 text-neutral-500"}`,children:[r?e.jsx(M,{className:"h-2.5 w-2.5 text-muted-foreground opacity-50"}):e.jsx(oe,{className:"h-2.5 w-2.5 text-muted-foreground opacity-50"}),r?"Locked":"View"]})}),e.jsx("button",{onClick:H,disabled:r,title:r?"Pro content - Upgrade to toggle effects":m?"Disable animations & effects":"Enable animations & effects",className:`flex gap-1 items-center p-0 px-1 rounded border text-[10px] font-medium transition-colors h-[18px] ${r?"cursor-not-allowed opacity-50 border-neutral-200 dark:border-neutral-700 text-neutral-400":m?"text-green-600 dark:text-green-400 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30":"text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600"}`,children:m?e.jsx(Q,{className:"h-2.5 w-2.5 opacity-50"}):e.jsx(Z,{className:"h-2.5 w-2.5 opacity-50"})})]})]}),e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsxs("button",{onClick:U,disabled:r,className:`flex gap-1 items-center ml-1 p-0 px-1 rounded border text-[10px] font-medium ${r?"cursor-not-allowed opacity-50 border-neutral-200 dark:border-neutral-700 text-neutral-400":"hover:bg-neutral-100 dark:hover:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 text-neutral-500"}`,title:r?"Pro content - Upgrade to copy":"Copy code to clipboard",children:[r?e.jsx(M,{className:"h-2.5 w-2.5 text-muted-foreground opacity-50"}):F?e.jsx(X,{className:"h-2.5 w-2.5 text-muted-foreground opacity-50"}):e.jsx(ee,{className:"h-2.5 w-2.5 text-muted-foreground opacity-50"}),r?"Locked":"Copy"]}),e.jsxs("div",{className:"flex items-center bg-neutral-200/70 dark:bg-neutral-700/70 rounded-md p-[0.5px] border border-border/60",children:[e.jsx("button",{onClick:()=>{r||w("preview")},disabled:r,className:`px-2 py-0 text-[9px] font-medium rounded-[4px] transition-all ${r?"cursor-not-allowed opacity-50":u==="preview"?"bg-white dark:bg-neutral-600 text-primary shadow-sm":"text-muted-foreground hover:text-foreground"}`,children:"Preview"}),e.jsx("button",{onClick:()=>{r||w("code")},disabled:r,className:`px-2 py-0 text-[9px] font-medium rounded-[4px] transition-all ${r?"cursor-not-allowed opacity-50":u==="code"?"bg-white dark:bg-neutral-600 text-primary shadow-sm":"text-muted-foreground hover:text-foreground"}`,children:"Code"})]})]})]}),P?e.jsx("div",{className:"h-[30px] flex items-center justify-center",children:e.jsx("button",{onClick:()=>b(!1),className:"text-[10px] text-muted-foreground hover:text-foreground",children:"Click to show content"})}):e.jsx("div",{className:"overflow-auto",style:{height:s},children:T?u==="code"?e.jsx(te,{language:"html",style:re,customStyle:{margin:0,fontSize:"11px",fontFamily:"Geist Mono, monospace",backgroundColor:"var(--syntax-bg)",color:"var(--syntax-color)",padding:"10px",lineHeight:"1.4"},codeTagProps:{style:{fontFamily:"Geist Mono, monospace"}},className:"w-full",children:t}):e.jsx("div",{className:"w-full h-full overflow-hidden",style:{backgroundColor:a},children:e.jsx("iframe",{srcDoc:G,title:"Embedded HTML Preview",style:{width:`${100/o}%`,height:`${100/o}%`,transform:`scale(${o})`,transformOrigin:"top left",border:"none",backgroundColor:a},sandbox:"allow-scripts allow-forms allow-popups allow-modals"})}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-[10px] text-muted-foreground bg-neutral-50 dark:bg-neutral-900/60",children:"Code preview paused (off-screen)"})})]})};export{ke as C,oe as S,ve as a,ye as b,xe as c,we as s};
