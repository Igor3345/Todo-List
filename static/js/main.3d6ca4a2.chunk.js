(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(3),a=n.n(s),r=(n(14),n(4)),c=n(5),u=n(2),l=n(7),o=n(6),d=n(9),h=n(1),j=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).createTasks=i.createTasks.bind(Object(u.a)(i)),i}return Object(c.a)(n,[{key:"delete",value:function(e){this.props.delete(e)}},{key:"createTasks",value:function(e){var t=this;return Object(h.jsx)("li",{onClick:function(){return t.delete(e.key)},children:e.text},e.key)}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return Object(h.jsx)("ul",{className:"theList",children:Object(h.jsx)(d.a,{duration:250,easing:"easing-out",children:e})})}}]),n}(i.Component),b=(n(16),function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={items:[]},i.addItem=i.addItem.bind(Object(u.a)(i)),i.deleteItem=i.deleteItem.bind(Object(u.a)(i)),i}return Object(c.a)(n,[{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.items;""!==this._inputElement.value&&(t.unshift({text:this._inputElement.value,key:Date.now()}),this.setState({items:t}),this._inputElement.value="")}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"todoListMain",children:Object(h.jsxs)("div",{className:"header",children:[Object(h.jsxs)("form",{onSubmit:this.addItem,children:[Object(h.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",ref:function(t){return e._inputElement=t}}),Object(h.jsx)("button",{type:"submit",children:"ok"})]}),Object(h.jsx)(j,{entries:this.state.items,delete:this.deleteItem})]})})}}]),n}(i.Component)),m=document.querySelector("#container");a.a.render(Object(h.jsx)("div",{children:Object(h.jsx)(b,{})}),m)}},[[17,1,2]]]);
//# sourceMappingURL=main.3d6ca4a2.chunk.js.map