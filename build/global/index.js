(()=>{var t={110:()=>{wp.hooks.addFilter("blocks.registerBlockType","afftra/attribute/global",(function(t,e){return e.includes("afftra/")&&(t.attributes={...t.attributes,uniqueId:{type:"string"},preview:{type:"boolean",default:!1},resMode:{type:"string",default:"Desktop"},blockStyle:{type:"object"}}),t}))}},e={};function a(r){var s=e[r];if(void 0!==s)return s.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,a),o.exports}(()=>{"use strict";a(110);const t=window.React,e=window.wp.data,r=window.wp.editPost,s=window.wp.i18n,o=window.wp.keyboardShortcuts,i=window.wp.plugins,n=window.wp.element,l=["afftra_flexDirectionDesk","afftra_flexDirectionTab","afftra_flexDirectionMob","afftra_columnGapRanges","afftra_rowGapRanges","afftra_columnGapUnits","afftra_rowGapUnits","afftra_icWidthRanges","afftra_icWidthUnits","afftra_flexWrapDesk","afftra_flexWrapTab","afftra_flexWrapMob","afftra_alignItemsDesk","afftra_alignItemsTab","afftra_alignItemsMob","afftra_justifyContentDesk","afftra_justifyContentTab","afftra_justifyContentMob"],f={copy:(0,t.createElement)("svg",{width:"14px",height:"14px",viewBox:"0 0 14 14",version:"1.1"},(0,t.createElement)("g",{id:"surface1"},(0,t.createElement)("path",{style:{fill:"none",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",stroke:"rgb(18.039216%,38.431373%,100%)",strokeOpacity:1,strokeMiterlimit:4},d:"M 47 17 L 47 23 C 47 24.107143 47.892857 25 49 25 L 55 25 L 47 17 L 41 17 L 41 46 C 41 47.107143 40.107143 48 39 48 L 11 48 C 9.892857 48 9 47.107143 9 46 L 9 7 C 9 5.892857 9.892857 5 11 5 L 33 5 L 41 13 L 35 13 C 33.892857 13 33 12.107143 33 11 L 33 5 ",transform:"matrix(0.21875,0,0,0.21875,0,0)"}),(0,t.createElement)("path",{style:{fill:"none",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",stroke:"rgb(18.039216%,38.431373%,100%)",strokeOpacity:1,strokeMiterlimit:4},d:"M 55 29 L 55 57 C 55 58.107143 54.107143 59 53 59 L 25 59 C 23.892857 59 23 58.107143 23 57 L 23 48 ",transform:"matrix(0.21875,0,0,0.21875,0,0)"}))),paste:(0,t.createElement)("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1"},(0,t.createElement)("g",{id:"surface1"},(0,t.createElement)("path",{style:{fill:"none",strokeWidth:5,strokeLinecap:"butt",strokeLinejoin:"miter",stroke:"rgb(18.039216%,38.431373%,100%)",strokeOpacity:1,strokeMiterlimit:4},d:"M 68 63 C 68 58.03125 72.03125 54 77 54 L 91.125 54 C 93 54 94.78125 54.75 96.09375 56.03125 L 100.9375 60.875 L 102.15625 62.21875 C 103.34375 63.53125 104 65.21875 104 66.96875 L 104 93 C 104 97.96875 99.96875 102 95 102 L 77 102 C 72.03125 102 68 97.96875 68 93 Z M 68 63 ",transform:"matrix(0.125,0,0,0.125,0,0)"}),(0,t.createElement)("path",{style:{fill:"none",strokeWidth:5,strokeLinecap:"butt",strokeLinejoin:"miter",stroke:"rgb(18.039216%,38.431373%,100%)",strokeOpacity:1,strokeMiterlimit:4},d:"M 91 54 L 91 35 C 91 30.03125 86.96875 26 82 26 L 42 26 C 37.03125 26 33 30.03125 33 35 L 33 93 C 33 97.96875 37.03125 102 42 102 L 80 102 M 91 55 L 91 65 C 91 66.65625 92.34375 68 94 68 L 104 68 ",transform:"matrix(0.125,0,0,0.125,0,0)"}),(0,t.createElement)("path",{style:{fill:"none",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"miter",stroke:"rgb(18.039216%,38.431373%,100%)",strokeOpacity:1,strokeMiterlimit:4},d:"M 50 34 C 51.1875 34 66.15625 34 73.5 34 ",transform:"matrix(0.125,0,0,0.125,0,0)"})))},c=(t=!1)=>{if(!window.localStorage)return null;if(!t)return localStorage;const e=localStorage.getItem(t);return e?JSON.parse(e):null};(0,i.registerPlugin)("afftra-block-copy-paste",{render:()=>{const{registerShortcut:a}=(0,e.useDispatch)(o.store),{hasMultiSelection:i}=(0,e.select)("core/block-editor"),p=c();(0,n.useEffect)((()=>{const t=c("afftraCopyPasteStyles");if(t||p.setItem("afftraCopyPasteStyles",JSON.stringify({})),t){for(const e in t)Math.abs(Date.now()-t[e].stylesSavedTimeStamp)/36e5>=8&&delete t[e];p.setItem("afftraCopyPasteStyles",JSON.stringify(t))}a({name:"afftra/copy",category:"block",description:(0,s.__)("Copy the selected block(s).","afftra-blocks"),keyCombination:{modifier:"primaryShift",character:"y"}}),a({name:"afftra/paste",category:"block",description:(0,s.__)("Paste the selected block(s).","afftra-blocks"),keyCombination:{modifier:"primaryShift",character:"u"}})}),[]);const u=()=>{const{getSelectedBlock:t,hasMultiSelection:a,getMultiSelectedBlocks:r}=(0,e.select)("core/block-editor");if(a())return void r().map((t=>(t&&k(t),t)));const s=t();s&&k(s)},d=()=>{const{getSelectedBlock:t,hasMultiSelection:a,getMultiSelectedBlocks:r}=(0,e.select)("core/block-editor");if(a())return void r().map((t=>(t&&y(t),t)));const s=t();s&&y(s)},k=t=>{const e=c("afftraCopyPasteStyles");p.setItem("afftraCopyPasteStyles",JSON.stringify({}));const{attributes:a,name:r,innerBlocks:s}=t;e&&p.setItem("afftraCopyPasteStyles",JSON.stringify({}));let o={};const i={};if(r.includes("afftra/")){const t=r.replace("afftra/","");let n=a;e[`${t}-styles`]={},e["global-style"]={},n&&e&&Object.keys(n).map((t=>{let e=t;return void 0===a[t]||null===a[t]||!e.includes("afftra_")&&!e.includes("aff_")||l.includes(e)||(o[e]=a[t],i[t]=a[t]),t})),s&&(i.innerblocks=s),o.stylesSavedTimeStamp=Date.now(),e[`${t}-styles`]=i,e["global-style"]=o,p.setItem("afftraCopyPasteStyles",JSON.stringify(e))}},y=t=>{const{name:e,clientId:a,innerBlocks:r}=t;let s,o;const i={},n=c("afftraCopyPasteStyles");if(e.includes("afftra/")){s=n["global-style"];const f=e.replace("afftra/",""),c=t.attributes;if(o=n[`${f}-styles`],c&&o){if(m(a,o),r){const t={};r.map(((e,a)=>{const r=e.name.replace("afftra/",""),s=e.attributes;return o.innerblocks[a].name==="afftra/"+r&&Object.keys(s).map((e=>(e.includes("afftra_")&&!l.includes(e)&&(t[e]=o.innerblocks[a].attributes[e]),t))),m(e.clientId,t),e}))}}else c&&s&&(Object.keys(c).map((t=>{const e=t;return Object.keys(s).map((a=>(a===e&&e.includes("afftra_")&&!l.includes(e)&&(i[t]=s[e]),i))),i})),m(a,i))}},m=(t,a)=>{(0,e.dispatch)("core/block-editor").updateBlockAttributes(t,a)};return(0,o.useShortcut)("afftra/copy",(t=>{u(),t.preventDefault()})),(0,o.useShortcut)("afftra/paste",(t=>{d(),t.preventDefault()})),i()&&(stylesText=(0,s.__)("Styles","afftra-blocks")),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.PluginBlockSettingsMenuItem,{icon:f.copy,label:(0,s.__)("Afftra Copy Styles","afftra-blocks"),onClick:u}),(0,t.createElement)(r.PluginBlockSettingsMenuItem,{icon:f.paste,label:(0,s.__)("Afftra Paste Styles","afftra-blocks"),onClick:d}))}})})()})();