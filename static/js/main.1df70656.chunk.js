(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){"use strict";n.r(e);var a=n(4),c=n.n(a),s=n(2),i=n(1),o=n.n(i),b=n(0),r=function(t){var e,n=t.arrTabs,a=t.selTabId,c=t.selContent,s=t.onChangeButton,i=t.onChangeContent;return Object(b.jsxs)("div",{className:"Tabs",children:[Object(b.jsxs)("h1",{className:"box title",children:["Selected tab is\xa0",null===(e=n.find((function(t){return t.id===a})))||void 0===e?void 0:e.title]}),Object(b.jsx)("div",{className:"notification level center",children:n.map((function(t){return Object(b.jsx)(o.a.Fragment,{children:Object(b.jsx)("button",{className:"button is-primary m-2",type:"button",onClick:function(){s(t.id),i(t.content)},children:t.title})},t.id)}))}),Object(b.jsx)("p",{className:"box title is-4","data-cy":"tab-content",children:c})]})},l=(n(10),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),d=function(){var t=Object(i.useState)([].concat(l)),e=Object(s.a)(t,1)[0],n=Object(i.useState)("tab-1"),a=Object(s.a)(n,2),c=a[0],o=a[1],d=Object(i.useState)("Some text 1"),j=Object(s.a)(d,2),u=j[0],m=j[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(r,{arrTabs:e,selTabId:c,selContent:u,onChangeButton:o,onChangeContent:m})})};c.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.1df70656.chunk.js.map