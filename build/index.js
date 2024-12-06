(()=>{"use strict";const e=window.React,t=window.wp.plugins,a=window.wp.editPost,n=window.wp.components,r=window.wp.data,l=window.wp.element;(0,t.registerPlugin)("sidebar-search-replace",{render:()=>{const[t,c]=(0,l.useState)(""),[o,i]=(0,l.useState)(""),s=(0,r.useSelect)((e=>e("core/editor").getEditedPostContent()),[]),{editPost:d}=(0,r.useDispatch)("core/editor");return(0,e.createElement)(a.PluginDocumentSettingPanel,{name:"sidebar-search-replace",title:"Search & Replace",className:"sidebar-search-replace-panel"},(0,e.createElement)(n.TextControl,{label:"Search Text",value:t,onChange:e=>c(e)}),(0,e.createElement)(n.TextControl,{label:"Replace With",value:o,onChange:e=>i(e)}),(0,e.createElement)(n.Button,{isPrimary:!0,onClick:()=>{if(!t)return;const e=s.replaceAll(t,o);d({content:e}),alert(`Replaced all occurrences of "${t}" with "${o}".`)},style:{marginTop:"1rem"}},"Replace"))}})})();