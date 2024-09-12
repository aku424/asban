!function(){"use strict";var e={n:function(t){var l=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(l,{a:l}),l},d:function(t,l){for(var a in l)e.o(l,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:l[a]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.i18n,l=window.wp.blocks,a=window.wp.blockEditor,n=window.wp.components,c=window.wp.serverSideRender,s=e.n(c),r=React.createElement("svg",{viewBox:"0 0 56 56"},React.createElement("g",null,React.createElement("g",null,React.createElement("g",null,React.createElement("rect",{x:"29.5",y:"10",width:"14",height:"3"}),React.createElement("rect",{x:"29.5",y:"17",width:"24",height:"3"}))),React.createElement("g",null,React.createElement("path",{d:"M4.5,20.7l-1.5-2l6.4-4.9c0.1-0.1,0.2-0.1,0.3,0l2.9,2.1c0.1,0.1,0.2,0.1,0.3,0l5.2-4.5c0.1-0.1,0.2-0.1,0.3,0l6.1,4.5 l-1.5,2l-4.5-3.3c-0.1-0.1-0.2-0.1-0.3,0L13,19.1c-0.1,0.1-0.2,0.1-0.3,0l-3-2.2c-0.1-0.1-0.2-0.1-0.3,0L4.5,20.7z"}),React.createElement("path",{d:"M25,24.8H2.5V5.2H25V24.8z M5,22.2h17.5V7.8H5V22.2z"}))),React.createElement("g",null,React.createElement("g",null,React.createElement("g",null,React.createElement("rect",{x:"29.5",y:"36",width:"14",height:"3"}),React.createElement("rect",{x:"29.5",y:"43",width:"24",height:"3"}))),React.createElement("g",null,React.createElement("path",{d:"M4.5,46.7l-1.5-2l6.4-4.9c0.1-0.1,0.2-0.1,0.3,0l2.9,2.1c0.1,0.1,0.2,0.1,0.3,0l5.2-4.5c0.1-0.1,0.2-0.1,0.3,0l6.1,4.5 l-1.5,2l-4.5-3.3c-0.1-0.1-0.2-0.1-0.3,0L13,45.1c-0.1,0.1-0.2,0.1-0.3,0l-3-2.2c-0.1-0.1-0.2-0.1-0.3,0L4.5,46.7z"}),React.createElement("path",{d:"M25,50.8H2.5V31.2H25V50.8z M5,48.2h17.5V33.8H5V48.2z"})))),o=JSON.parse('{"u2":"loos/post-list"}');const m=["h2","h3","h4","div"];var i=({value:e,onClick:l,tags:a})=>{const c=a||m;return React.createElement(n.BaseControl,null,React.createElement(n.BaseControl.VisualLabel,null,(0,t.__)("タイトルのHTMLタグ","swell")),React.createElement(n.ButtonGroup,{className:"ark-btns--minWidth"},c.map((t=>{const a=t===e;return React.createElement(n.Button,{key:`htag_${t}`,variant:a?"primary":"",onClick:()=>{l(t)}},t||"-")}))))};const u=[{label:(0,t.__)("新着順","swell"),value:"date"},{label:(0,t.__)("更新日順","swell"),value:"modified"},{label:(0,t.__)("人気順","swell"),value:"pv"},{label:(0,t.__)("ランダム","swell"),value:"rand"}],_=[{label:(0,t.__)("降順","swell"),val:"DESC"},{label:(0,t.__)("昇順","swell"),val:"ASC"}],p=[{label:(0,t.__)("カード型","swell"),value:"card"},{label:(0,t.__)("リスト型","swell"),value:"list"},{label:(0,t.__)("リスト型","swell")+(0,t.__)("（左右交互）","swell"),value:"list2"},{label:(0,t.__)("サムネイル型","swell"),value:"thumb"},{label:(0,t.__)("テキスト型","swell"),value:"simple"}],R=[{label:(0,t.__)("表示しない","swell"),value:"none"},{label:(0,t.__)("サムネイル画像の上","swell"),value:"on_thumb"},{label:(0,t.__)("日付の横","swell"),value:"beside_date"}],w=[{label:(0,t.__)("1列","swell"),val:"1"},{label:(0,t.__)("2列","swell"),val:"2"},{label:(0,t.__)("3列","swell"),val:"3"}],E=[{label:(0,t.__)("1列","swell"),val:"1"},{label:(0,t.__)("2列","swell"),val:"2"}],d=[{label:(0,t.__)("0","swell"),val:0},{label:(0,t.__)("40","swell"),val:40},{label:(0,t.__)("80","swell"),val:80},{label:(0,t.__)("120","swell"),val:120},{label:(0,t.__)("160","swell"),val:160}];function h({attributes:e,setAttributes:l}){const{listType:a,listCount:c,pcCol:s,spCol:r,showDate:o,showModified:m,showAuthor:h,showPV:b,showTitle:g,addSticky:v,order:C,orderby:y,catPos:N,hTag:x,moreText:B,moreUrl:P,pcExcerptLength:V,spExcerptLength:k,pcHideLast:L,spHideLast:T}=e,f=[{name:"showDate",label:(0,t.__)("公開日を表示する","swell"),description:"",attrVal:o},{name:"showModified",label:(0,t.__)("更新日を表示する","swell"),description:"",attrVal:m},{name:"showAuthor",label:(0,t.__)("著者を表示する","swell"),attrVal:h},{name:"showPV",label:(0,t.__)("PV数を表示する","swell"),attrVal:b},{name:"showTitle",label:(0,t.__)("タイトルを表示する","swell"),description:(0,t.__)("※ サムネイル型でのみ有効です","swell"),attrVal:g}];return React.createElement(n.PanelBody,{title:(0,t.__)("表示設定","swell"),initialOpen:!0,className:"post_list_controles"},React.createElement(n.RangeControl,{className:"u-mb-10",label:(0,t.__)("表示する投稿数","swell"),value:c,onChange:e=>{l({listCount:e})},min:1,max:24}),React.createElement(n.ToggleControl,{label:(0,t.__)("先頭固定記事を追加する","swell"),checked:v,onChange:e=>{l({addSticky:e})}}),React.createElement(n.RadioControl,{label:(0,t.__)("レイアウトを選択","swell"),selected:a,options:p,onChange:e=>{l({listType:e})}}),React.createElement(n.RadioControl,{className:"u-mb-10",label:(0,t.__)("投稿の表示順序","swell"),selected:y,options:u,onChange:e=>{l({orderby:e})}}),React.createElement("div",{className:"components-base-control","data-swl-disable":"rand"===y||null},React.createElement(n.ButtonGroup,{className:"swl-btns--minWidth"},_.map((e=>React.createElement(n.Button,{isPrimary:e.val===C,onClick:()=>{l({order:e.val})},key:`order_${e.val}`},e.label))))),React.createElement(n.BaseControl,{className:"swl-toggleGroup"},React.createElement(n.BaseControl.VisualLabel,null,(0,t.__)("各種表示設定","swell")),f.map((e=>{const t="1"===e.attrVal,a=""===e.description?e.label:React.createElement("span",null,e.label,React.createElement("br",null),React.createElement("small",null,e.description));return React.createElement(n.ToggleControl,{label:a,checked:t,onChange:t=>{l(t?{[e.name]:"1"}:{[e.name]:""})},key:`toggle_${e.name}`})}))),React.createElement(n.RadioControl,{label:(0,t.__)("カテゴリー表示位置","swell"),selected:N,options:R,onChange:e=>{l({catPos:e})}}),React.createElement(i,{value:x,onClick:e=>{l({hTag:e})}}),React.createElement(n.BaseControl,null,React.createElement(n.BaseControl.VisualLabel,null,(0,t.__)("最大カラム数","swell")+" (PC)"),React.createElement("small",{className:"swl-helptext--btns"},(0,t.__)("※ カード型またはサムネイル型でのみ有効","swell")),React.createElement(n.ButtonGroup,{className:"swl-btns--minWidth"},w.map((e=>{const t=e.val===s;return React.createElement(n.Button,{variant:t?"primary":"secondary",onClick:()=>{l({pcCol:e.val})},key:`pcCol_${e.val}`},e.label)})))),React.createElement(n.BaseControl,null,React.createElement(n.BaseControl.VisualLabel,null,(0,t.__)("最大カラム数","swell")+" (SP)"),React.createElement("small",{className:"swl-helptext--btns"},(0,t.__)("※ カード型またはサムネイル型でのみ有効","swell")),React.createElement(n.ButtonGroup,{className:"swl-btns--minWidth"},E.map((e=>{const t=e.val===r;return React.createElement(n.Button,{isSecondary:!t,isPrimary:t,onClick:()=>{l({spCol:e.val})},key:`spCol_${e.val}`},e.label)})))),React.createElement(n.BaseControl,null,React.createElement(n.BaseControl.VisualLabel,null,(0,t.__)("抜粋文の文字数","swell")+" (PC)"),React.createElement(n.ButtonGroup,{className:"swl-btns--minWidth"},d.map((e=>{const t=e.val===V;return React.createElement(n.Button,{variant:t?"primary":"secondary",onClick:()=>{l({pcExcerptLength:e.val})},key:`pcExcerptLength_${e.val}`},e.label)})))),React.createElement(n.BaseControl,null,React.createElement(n.BaseControl.VisualLabel,null,(0,t.__)("抜粋文の文字数","swell")+" (SP)"),React.createElement(n.ButtonGroup,{className:"swl-btns--minWidth"},d.map((e=>{const t=e.val===k;return React.createElement(n.Button,{variant:t?"primary":"secondary",onClick:()=>{l({spExcerptLength:e.val})},key:`spExcerptLength_${e.val}`},e.label)})))),React.createElement(n.BaseControl,null,React.createElement(n.BaseControl.VisualLabel,null,(0,t.__)("MOREリンクの表示テキスト","swell")),React.createElement(n.TextControl,{value:B,placeholder:(0,t.__)("もっと見る","swell"),onChange:e=>l({moreText:e})})),React.createElement(n.BaseControl,{help:React.createElement("small",null,(0,t.__)("※カテゴリーを指定した場合などは自動でURLを取得しますので、入力する必要はありません。","swell"))},React.createElement(n.BaseControl.VisualLabel,null,(0,t.__)("MOREリンクのURL","swell")),React.createElement(n.TextControl,{value:P,onChange:e=>l({moreUrl:e})})),React.createElement(n.BaseControl,{className:"swl-checkboxGroup"},React.createElement(n.BaseControl.VisualLabel,null,(0,t.__)("最後の投稿を非表示にするかどうか","swell")),React.createElement(n.CheckboxControl,{label:(0,t.__)("PC表示で非表示にする","swell"),checked:L,onChange:e=>l({pcHideLast:e})}),React.createElement(n.CheckboxControl,{label:(0,t.__)("SP表示で非表示にする","swell"),checked:T,onChange:e=>l({spHideLast:e})})))}var b=window.wp.data,g=window.wp.element,v=function(e){let{icon:t,size:l=24,...a}=e;return(0,g.cloneElement)(t,{width:l,height:l,...a})},C=window.wp.primitives,y=(0,g.createElement)(C.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,g.createElement)(C.Path,{d:"M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5z"})),N=(0,g.createElement)(C.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,g.createElement)(C.Path,{d:"M20.1 11.2l-6.7-6.7c-.1-.1-.3-.2-.5-.2H5c-.4-.1-.8.3-.8.7v7.8c0 .2.1.4.2.5l6.7 6.7c.2.2.5.4.7.5s.6.2.9.2c.3 0 .6-.1.9-.2.3-.1.5-.3.8-.5l5.6-5.6c.4-.4.7-1 .7-1.6.1-.6-.2-1.2-.6-1.6zM19 13.4L13.4 19c-.1.1-.2.1-.3.2-.2.1-.4.1-.6 0-.1 0-.2-.1-.3-.2l-6.5-6.5V5.8h6.8l6.5 6.5c.2.2.2.4.2.6 0 .1 0 .3-.2.5zM9 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"})),x=(0,g.createElement)(C.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,g.createElement)(C.Path,{fillRule:"evenodd",d:"M5 5.5h14a.5.5 0 01.5.5v1.5a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 9.232A2 2 0 013 7.5V6a2 2 0 012-2h14a2 2 0 012 2v1.5a2 2 0 01-1 1.732V18a2 2 0 01-2 2H6a2 2 0 01-2-2V9.232zm1.5.268V18a.5.5 0 00.5.5h12a.5.5 0 00.5-.5V9.5h-13z",clipRule:"evenodd"}));const{groupBy:B}=lodash;function P(e){if(!e)return[];const t=e.map((e=>({children:[],parent:null,...e}))),l=B(t,"parent");if(l.null&&l.null.length)return t;const a=e=>e.map((e=>{const t=l[e.id];return{...e,children:t&&t.length?a(t):[]}}));return a(l[0]||[])}var V=(0,g.createElement)(C.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,g.createElement)(C.Path,{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"}));const k=(0,g.createInterpolateElement)((0,t.sprintf)((0,t.__)("Macなら%1$sキー、Windowsなら%2$sキーを押しながらクリックすると複数選択できます。","swell"),"<code>command</code>","<code>ctrl</code>"),{code:React.createElement("code",null)});var L=({type:e="",label:l="",text:a="",tag:n="div"})=>{let c="",s="";"multiple-select"===e?(c=(0,t.__)("複数選択できます","swell"),s=k):(c=l,s=a);const r=n;return React.createElement(r,{className:"swl-helpPopover"},c&&React.createElement("span",{className:"swl-helpPopover__label"},c),React.createElement(v,{icon:V,size:"20",className:"swl-helpPopover__icon"}),React.createElement("span",{className:"swl-helpPopover__desc"},s))};const T=({ids:e,relation:l,attr:a,setOptions:c,forArchive:s=!1})=>{const r=!s&&1<e.length;return(0,g.useEffect)((()=>{r||"AND"!==l||c({[a]:"IN"})}),[r,l]),React.createElement(React.Fragment,null,React.createElement(n.ButtonGroup,{className:"swl-btns--logicalRelation"},r?React.createElement(React.Fragment,null,React.createElement(n.Button,{text:React.createElement(React.Fragment,null,"IN",React.createElement("span",null,(0,t.__)("一つでも該当する","swell"))),isPrimary:"IN"===l,onClick:()=>{c({[a]:"IN"})}}),React.createElement(n.Button,{text:React.createElement(React.Fragment,null,"AND",React.createElement("span",null,(0,t.__)("全てに該当する","swell"))),isPrimary:"AND"===l,onClick:()=>{c({[a]:"AND"})}}),React.createElement(n.Button,{text:React.createElement(React.Fragment,null,"NOT IN",React.createElement("span",null,(0,t.__)("該当しない","swell"))),isPrimary:"NOT IN"===l,onClick:()=>{c({[a]:"NOT IN"})}})):React.createElement(React.Fragment,null,React.createElement(n.Button,{text:React.createElement(React.Fragment,null,"IN",React.createElement("span",null,(0,t.__)("該当する","swell"))),isPrimary:"NOT IN"!==l,onClick:()=>{c({[a]:"IN"})}}),React.createElement(n.Button,{text:React.createElement(React.Fragment,null,"NOT IN",React.createElement("span",null,(0,t.__)("該当しない","swell"))),isPrimary:"NOT IN"===l,onClick:()=>{c({[a]:"NOT IN"})}}))))};var f=({setOptions:e,attrs:l,type:a=""})=>{const{catID:c,tagID:s,taxName:r,termID:o,catRelation:m,tagRelation:i,termRelation:u,queryRelation:_,exCatChildren:p}=l,R="archive"===a,w=(0,b.useSelect)((e=>{const t=e("core").getTaxonomies({per_page:-1,context:"view"}),l=[];if(null!==t)for(const e of t)-1===["category","post_tag","nav_menu","parts_use"].indexOf(e.slug)&&l.push({label:e.name,value:e.slug});return l}),[])||[],E=(0,b.useSelect)((e=>e("core").getEntityRecords("taxonomy","category",{per_page:-1}))),d=(0,b.useSelect)((e=>e("core").getEntityRecords("taxonomy","post_tag",{per_page:-1}))),h=(0,b.useSelect)((e=>e("core").getEntityRecords("taxonomy",r,{per_page:-1})),[r]);let g="category";!c&&s&&(g="tag"),c||s||!o||(g="taxonomy");const C=c.split(","),B=s.split(","),V=o.split(","),k=React.createElement(React.Fragment,null,React.createElement(n.TreeSelect,{className:"swl-tree-select -category",noOptionLabel:"----",onChange:t=>{const l=t.join(",");e({catID:l.replace(/^,/,"")})},selectedId:C,tree:P(E),multiple:!0}),React.createElement(L,{type:"multiple-select"}),"query"===a&&React.createElement(n.CheckboxControl,{className:"__exCatChildren",label:(0,t.__)("子カテゴリのみの記事を除外","swell"),checked:p,onChange:t=>{e({exCatChildren:t})}}),React.createElement("div",{"data-swl-disable":!c||null},React.createElement(n.BaseControl,{className:"__termRelation"},React.createElement(n.BaseControl.VisualLabel,null,(0,t.__)("選択したタームの論理関係","swell")),React.createElement(T,{ids:C,attr:"catRelation",relation:m,setOptions:e,forArchive:R})))),f=React.createElement(React.Fragment,null,React.createElement(n.TreeSelect,{className:"swl-tree-select -tag",noOptionLabel:"----",onChange:t=>{const l=t.join(",");e({tagID:l.replace(/^,/,"")})},selectedId:B,tree:P(d),multiple:!0}),React.createElement(L,{type:"multiple-select"}),React.createElement("div",{"data-swl-disable":!s||null},React.createElement(n.BaseControl,{className:"__termRelation"},React.createElement(n.BaseControl.VisualLabel,null,(0,t.__)("選択したタームの論理関係","swell")),React.createElement(T,{ids:B,attr:"tagRelation",relation:i,setOptions:e,forArchive:R})))),I=0<w.length?React.createElement(React.Fragment,null,React.createElement(n.SelectControl,{label:"タクソノミーを選択",value:r,options:[{label:"---",value:""},...w],onChange:t=>{e({taxName:t})}}),r&&React.createElement(React.Fragment,null,React.createElement(n.TreeSelect,{label:(0,t.__)("ターム","swell"),className:"swl-tree-select -term",noOptionLabel:"----",onChange:t=>{const l=t.join(",");e({termID:l.replace(/^,/,"")})},selectedId:V,tree:P(h),multiple:!0}),React.createElement(L,{type:"multiple-select"}),React.createElement("div",{"data-swl-disable":!o||null},React.createElement(n.BaseControl,{className:"__termRelation"},React.createElement(n.BaseControl.VisualLabel,null,(0,t.__)("選択したタームの論理関係","swell")),React.createElement(T,{ids:V,attr:"termRelation",relation:u,setOptions:e,forArchive:R}))))):React.createElement("p",null,(0,t.__)("選択可能なタクソノミーがありません。","swell"));return React.createElement(React.Fragment,null,React.createElement(n.TabPanel,{className:"swl-tabPanel -terms",activeClass:"is-active",tabs:[{name:"category",title:React.createElement(React.Fragment,null,React.createElement(v,{icon:y}),React.createElement("span",null,(0,t.__)("カテゴリー","swell"))),className:"swl-tabPanel__menu--v -category"},{name:"tag",title:React.createElement(React.Fragment,null,React.createElement(v,{icon:N}),React.createElement("span",null,(0,t.__)("タグ","swell"))),className:"swl-tabPanel__menu--v -tag"},{name:"taxonomy",title:React.createElement(React.Fragment,null,React.createElement(v,{icon:x}),React.createElement("span",null,(0,t.__)("タクソノミー","swell"))),className:"swl-tabPanel__menu--v -taxonomy"}],initialTabName:g},(e=>"category"===e.name?k:"tag"===e.name?f:"taxonomy"===e.name?I:void 0)),React.createElement("hr",{style:{borderBottomStyle:"dashed"}}),React.createElement("div",{"data-swl-disable":R||null},React.createElement(n.SelectControl,{label:(0,t.__)("各タクソノミー条件の関係","swell"),value:_,options:[{label:(0,t.__)("どれか1つでも条件に合うかどうか","swell"),value:"OR"},{label:(0,t.__)("全ての条件に合うかどうか","swell"),value:"AND"}],onChange:t=>{e({queryRelation:t})},help:R?(0,t.__)("個別ページでの判定時のみ有効です","swell"):null})))};function I({attributes:e,setAttributes:l}){const{postID:a,excID:c,authorID:s,postType:r}=e,o=((e={})=>{const t=e.ignoreTypes||["attachment"];return(0,b.useSelect)((e=>{const l=e("core").getPostTypes({per_page:-1});if(null===l)return[];const a=[];for(const e of l)e.viewable&&-1===t.indexOf(e.slug)&&a.push({label:e.name,value:e.slug});return a}),[])})({ignoreTypes:["attachment","lp"]})||[],m=(0,b.useSelect)((e=>e("core").getUsers({who:"authors"})),[]),i=[{label:"----",value:0}];return m&&m.forEach((e=>{i.push({label:e.name,value:e.id})})),React.createElement(React.Fragment,null,React.createElement(n.PanelBody,{title:(0,t.__)("投稿IDで絞り込む","swell"),initialOpen:!0,className:"swell-panel-postList--postid"},React.createElement(n.TextControl,{label:(0,t.__)("投稿IDを直接指定","swell"),placeholder:(0,t.__)("ex) 8,120,272","swell"),help:(0,t.__)("※ 複数の場合は , 区切りで入力して下さい。","swell"),value:a||"",onChange:e=>{l({postID:e})}}),React.createElement(n.TextControl,{label:(0,t.__)("除外する投稿ID","swell"),placeholder:(0,t.__)("ex) 6,112,264","swell"),help:(0,t.__)("※ 複数の場合は , 区切りで入力して下さい。","swell"),value:c||"",onChange:e=>{l({excID:e})}})),!a&&React.createElement(React.Fragment,null,React.createElement(n.PanelBody,{title:(0,t.__)("投稿タイプで絞り込む","swell"),initialOpen:!0,className:"swell-panel-postList--postType"},React.createElement(n.SelectControl,{value:r,options:[{label:(0,t.__)("すべて","swell"),value:"any"},...o],onChange:e=>{l({postType:e})}})),React.createElement(n.PanelBody,{title:(0,t.__)("タクソノミーの条件設定","swell"),initialOpen:!0,className:"swell-panel-postList--pickup"},React.createElement(f,{attrs:e,setOptions:l,type:"query"})),React.createElement(n.PanelBody,{title:(0,t.__)("著者で絞り込む","swell"),initialOpen:!0,className:"swell-panel-postList--author"},i.length>1&&React.createElement(n.SelectControl,{value:s,options:i,onChange:e=>{l({authorID:parseInt(e)})}}),1===i.length&&React.createElement(React.Fragment,null,React.createElement("p",null,"※ ユーザーデータの取得に失敗しました。ユーザーIDを直接入力して絞り込みが可能です。"),React.createElement(n.TextControl,{value:s,type:"number",onChange:e=>{l({authorID:parseInt(e||0)})}})))))}(0,l.registerBlockType)(o.u2,{title:(0,t.__)("投稿リスト","swell"),description:(0,t.__)("投稿リストを好きな条件で呼び出すことができます。","swell"),icon:r,edit:({attributes:e,setAttributes:l})=>{const c=(0,a.useBlockProps)({className:"loos-block-post-list post_content"});return React.createElement(React.Fragment,null,React.createElement(a.InspectorControls,null,React.createElement(n.TabPanel,{className:"swl-tabPanel -postList",activeClass:"is-active",tabs:[{name:"display",title:React.createElement(React.Fragment,null,React.createElement("i",{className:"dashicons-before dashicons-admin-settings"}),(0,t.__)("Settings","swell")),className:"swl-tabPanel__menu--v __display"},{name:"pickup",title:React.createElement(React.Fragment,null,React.createElement("i",{className:"dashicons-before dashicons-post-status"}),(0,t.__)("Pickup","swell")),className:"swl-tabPanel__menu--v __pickup"}],initialTabName:"display"},(t=>"pickup"===t.name?React.createElement(I,{attributes:e,setAttributes:l}):"display"===t.name?React.createElement(h,{attributes:e,setAttributes:l}):void 0))),React.createElement("div",c,React.createElement(s(),{block:"loos/post-list",attributes:e})))},save:()=>null})}();