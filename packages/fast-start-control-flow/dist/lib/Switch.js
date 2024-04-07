"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),i=e.defineComponent({name:"If",__name:"If",props:{when:{type:[null,Boolean]}},setup(c){const l=o=>o;return(o,u)=>o.when?e.renderSlot(o.$slots,"default",{key:0,value:l(o.when)}):e.renderSlot(o.$slots,"fallback",{key:1})}}),f=e.defineComponent({name:"Switch",__name:"Switch",setup(c){const l=e.useSlots();function o(){return l.default?l.default():null}function u(t,s){Array.isArray(t)||(t=[t]);for(let n=0;n<t.length;n++){const r=t[n].props.when;if(r)return[n,r,t[n]]}return[-1]}const a=e.computed(()=>{let t=o();if(!t)return;const[s,n,r]=u(t);return{index:s,when:n,slot:r}});return(t,s)=>{var n;return e.openBlock(),e.createBlock(i,{when:((n=a.value)==null?void 0:n.index)!==-1},{fallback:e.withCtx(()=>[e.renderSlot(t.$slots,"fallback")]),default:e.withCtx(()=>{var r;return[(e.openBlock(),e.createBlock(e.resolveDynamicComponent((r=a.value)==null?void 0:r.slot)))]}),_:3},8,["when"])}}});exports.default=f;
//# sourceMappingURL=Switch.js.map
