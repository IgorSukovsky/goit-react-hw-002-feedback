(this["webpackJsonpgoit-react-hw-002-feedback"]=this["webpackJsonpgoit-react-hw-002-feedback"]||[]).push([[0],{10:function(t,e,n){t.exports={title:"Notification_title__1Z7GW"}},11:function(t,e,n){t.exports={title:"Section_title__2ydeu"}},12:function(t,e,n){t.exports={conteiner:"App_conteiner__2UpgB"}},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(6),i=n.n(s),r=n(7),o=n(8),l=n(9),u=n(14),d=n(13),b=n(4),j=n.n(b),h=n(0),x=function(t){var e=t.handleChange;return Object(h.jsxs)("div",{className:j.a.boxBtn,children:[Object(h.jsx)("button",{className:j.a.button,type:"button",name:"good",onClick:e,children:"good"}),Object(h.jsx)("button",{className:j.a.button,type:"button",name:"neutral",onClick:e,children:"neutral"}),Object(h.jsx)("button",{className:j.a.button,type:"button",name:"bad",onClick:e,children:"bad"})]})},m=n(10),O=n.n(m),g=function(t){var e=t.message;return Object(h.jsx)("h3",{className:O.a.title,children:e})},p=n(2),f=n.n(p),v=n(11),_=n.n(v),k=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:_.a.title,children:e}),n]})};k.Prototype={title:f.a.string.isRequired,children:f.a.element.isRequired};var N=k,y=n(3),R=n.n(y),C=function(t){var e=t.good,n=t.neutral,a=t.bad,c=t.total,s=t.result;return Object(h.jsxs)("ul",{className:R.a.list,children:[Object(h.jsxs)("li",{className:R.a.text,children:["Good:",e]}),Object(h.jsxs)("li",{className:R.a.text,children:["Neutral:",n]}),Object(h.jsxs)("li",{className:R.a.text,children:["Bad:",a]}),Object(h.jsxs)("li",{className:R.a.text,children:["Total:",c]}),Object(h.jsxs)("li",{className:R.a.text,children:["Result:",s,"%"]})]})};C.protoType={good:f.a.number.isRequired,neutral:f.a.number.isRequired,bad:f.a.number.isRequired,total:f.a.number.isRequired,result:f.a.number.isRequired};var q=C,F=n(12),w=n.n(F),B=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handleChange=function(e){var n=e.target.name;t.setState((function(t){return Object(r.a)({},n,t[n]+1)}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.countTotalFeedback(),n=e?100*t.state.good/e:0;return Math.round(n)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.countTotalFeedback(),e=this.countPositiveFeedbackPercentage();return Object(h.jsxs)("div",{className:w.a.conteiner,children:[Object(h.jsx)(N,{title:"Please leave feedback",children:Object(h.jsx)(x,{handleChange:this.handleChange})}),Object(h.jsx)(N,{title:"Statistics",children:t?Object(h.jsx)(q,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:t,result:e}):Object(h.jsx)(g,{message:"No feedback given"})})]})}}]),n}(a.Component),P=B;i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={list:"Statistics_list__2dzw_",text:"Statistics_text__39Juo"}},4:function(t,e,n){t.exports={boxBtn:"FeedbackOptions_boxBtn__3RXc8",button:"FeedbackOptions_button__1gMWL"}}},[[22,1,2]]]);
//# sourceMappingURL=main.a33d3502.chunk.js.map