(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bdec78a"],{1397:function(t,a,e){"use strict";var i=e("d247"),s=e.n(i);s.a},"242d":function(t,a,e){"use strict";var i=e("815f"),s=e.n(i);s.a},"489c":function(t,a,e){"use strict";var i=e("8cc8"),s=e.n(i);s.a},"6b9f":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrap"},[t._m(0),e("div",{staticClass:"gridder"},[e("div",{staticClass:"mainer"},[e("div",[e("h3",[t._v("Menu")]),e("RecipesModule",{attrs:{items:t.rcdata.recipes}})],1),e("div",[e("h3",[t._v("Ingredients")]),e("IngredientsModule",{attrs:{items:t.indata.ingredients}})],1)]),e("div",{staticClass:"subser"},[t.ingredients?e("div",[e("h3",[t._v("Ingredients")]),e("WorkForceModule",{attrs:{items:t.ingredients}})],1):e("h2",[t._v("Loading...")]),e("div",[e("h3",[t._v("Equipment")]),e("EquipmentModule",{attrs:{items:t.eqdata.equipment}})],1)])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("article",{staticClass:"slab-stat-small",attrs:{"data-name":"slab-stat-small"}},[e("div",{staticClass:"cf"},[e("dl",{staticClass:"fl fn-l w-50 dib-l w-auto-l lh-title mr5-l"},[e("dd",{staticClass:"f6 fw4 ml0"},[t._v("Closed Issues")]),e("dd",{staticClass:"f3 fw6 ml0"},[t._v("1,024")])]),e("dl",{staticClass:"fl fn-l w-50 dib-l w-auto-l lh-title mr5-l"},[e("dd",{staticClass:"f6 fw4 ml0"},[t._v("Open Issues")]),e("dd",{staticClass:"f3 fw6 ml0"},[t._v("993")])]),e("dl",{staticClass:"fl fn-l w-50 dib-l w-auto-l lh-title mr5-l"},[e("dd",{staticClass:"f6 fw4 ml0"},[t._v("Next Release")]),e("dd",{staticClass:"f3 fw6 ml0"},[t._v("10-22")])]),e("dl",{staticClass:"fl fn-l w-50 dib-l w-auto-l lh-title mr5-l"},[e("dd",{staticClass:"f6 fw4 ml0"},[t._v("Days Left")]),e("dd",{staticClass:"f3 fw6 ml0"},[t._v("4")])]),e("dl",{staticClass:"fl fn-l w-50 dib-l w-auto-l lh-title mr5-l"},[e("dd",{staticClass:"f6 fw4 ml0"},[t._v("Favorite Cat")]),e("dd",{staticClass:"f3 fw6 ml0"},[t._v("All of Them")])]),e("dl",{staticClass:"fl fn-l w-50 dib-l w-auto-l lh-title"},[e("dd",{staticClass:"f6 fw4 ml0"},[t._v("App Downloads")]),e("dd",{staticClass:"f3 fw6 ml0"},[t._v("1,200")])])])])}],n=e("aede"),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"list pl0 mt0"},t._l(t.items,function(a){return e("li",{key:a.id,staticClass:"flex items-center lh-copy pa3 ph0-l bb b--black-10"},[e("img",{staticClass:"w2 h2 w3-ns h3-ns br-100",attrs:{src:"http://tachyons.io/img/avatar-mrmrs.jpg"}}),e("div",{staticClass:"pl3 flex-auto"},[e("span",{staticClass:"pv2 pr2 tl b b--black-20"},[t._v(t._s(a.name))]),e("small",{staticClass:"small"},[t._v(t._s(a.description))]),e("span",{staticClass:"pv2 pr2 b--black-20"},[t._v(t._s(a.unit))]),e("span",{staticClass:"pv2 pr2 b--black-20"},[t._v(t._s(a.cost))]),e("span",{staticClass:"pv2 pr2 b--black-20"},[t._v(t._s(a.qtyIn))]),e("span",{staticClass:"pv2 pr2 b--black-20"},[t._v(t._s(a.qtyOut))])]),e("div",[e("a",{staticClass:"f6 link blue hover-dark-gray",on:{click:function(e){return t.editField("Edit",a.id)}}},[e("i",{staticClass:"material-icons"},[t._v("edit")])])])])}),0)},d=[],r={name:"RecipesModule",props:{items:{required:!0,type:Array}},methods:{editField:function(t,a){alert(t+" and "+a)}}},c=r,o=(e("6d9d"),e("2877")),u=Object(o["a"])(c,l,d,!1,null,"0f4274dc",null),m=u.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ingredients-module"},[e("ul",t._l(t.items,function(a){return e("li",{key:a.id},[e("a",{staticClass:"ingredients f6 lh-title mv2",on:{click:function(e){return t.editField("Edit",a.id)}}},[e("span",{staticClass:"dib b"},[t._v("\n          "+t._s(a.name)+" —  \n          "),e("small",{staticClass:"small"},[t._v(t._s(a.description))])]),e("span",{staticClass:"pv2 pr2 b--black-20"},[t._v(t._s(a.unit))]),e("span",{staticClass:"pv2 pr2 b--black-20"},[t._v(t._s(a.cost))]),e("span",{staticClass:"pv2 pr2 b--black-20"},[t._v(t._s(a.qtyIn))]),e("span",{staticClass:"pv2 pr2 b--black-20"},[t._v(t._s(a.qtyOut))])])])}),0)])},f=[],b={name:"IngredientsModule",props:{items:{required:!0,type:Array}},methods:{editField:function(t,a){alert(t+" and "+a)}}},v=b,_=(e("242d"),Object(o["a"])(v,p,f,!1,null,null,null)),C=_.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"workforce-module"},[e("ul",t._l(t.items,function(a){return e("li",{key:a.id},[e("router-link",{staticClass:"workforce f6 lh-title mv2",attrs:{to:"/ingredient/"+a.id}},[e("span",{staticClass:"dib b"},[t._v(t._s(a.name)+" —  ")]),e("span",{staticClass:"dib ml0 gray"},[t._v("$"+t._s(a.description))])])],1)}),0)])},q=[],w={name:"WorkforceModule",props:{items:{required:!0,type:Array}}},h=w,g=(e("b504"),Object(o["a"])(h,y,q,!1,null,null,null)),k=g.exports,I=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"equipment-module"},[e("ul",t._l(t.items,function(a){return e("li",{key:a.id},[e("a",{staticClass:"equipment f6 lh-title mv2",on:{click:function(e){return t.editField("Edit",a.id)}}},[e("span",{staticClass:"dib b"},[t._v(t._s(a.name)+" —  ")]),e("span",{staticClass:"dib ml0 gray"},[t._v("$"+t._s(a.rate))])])])}),0)])},O=[],z={name:"EquipmentModule",props:{items:{required:!0,type:Array}},methods:{editField:function(t,a){alert(t+" and "+a)}}},A=z,M=(e("489c"),Object(o["a"])(A,I,O,!1,null,null,null)),E=M.exports,j=e("9530"),F=e.n(j),$={recipes:[{id:"5ad91c249351d",name:"Carne Molida",description:"Carne molida preparada",unit:"oz",cost:"1.778",qtyIn:"0.00",qtyOut:"0.00"},{id:"5ace454484574",name:"Carne Molida1",description:"Carne molida preparada",unit:"oz",cost:"1.778",qtyIn:"0.00",qtyOut:"0.10"},{id:"5ace5b549e07f",name:"Empanada de Queso",description:"Empanada grande de queso",unit:"unit",cost:"26.797",qtyIn:"0.00",qtyOut:"0.00"},{id:"5ace4f5013063",name:"Pollo",description:"Pollo preparado para",unit:"oz",cost:"2.366",qtyIn:"0.00",qtyOut:"0.00"}]},x=$,B={ingredients:[{id:"5abbc037ac8ae",name:"Aceite Maiz",description:"Aceite de Maiz",unit:"l",cost:"2.010",qtyIn:"0.00",qtyOut:"0.00"},{id:"5adf8c7201458",name:"Arroz",description:"Arroz blanco",unit:"oz",cost:"1.100",qtyIn:"0.00",qtyOut:"0.00"},{id:"5abba905861b4",name:"Arroz Blanco",description:"Arroz blanco",unit:"oz",cost:"1.250",qtyIn:"0.00",qtyOut:"0.00"},{id:"5abbca03d0108",name:"Camarones",description:"Camarones sin cocinar",unit:"lbs",cost:"3.250",qtyIn:"0.00",qtyOut:"0.00"},{id:"5abbca6e916a2",name:"Camarones 2",description:"Camarones cocidos nro2",unit:"lbs",cost:"4.590",qtyIn:"0.00",qtyOut:"0.00"},{id:"5acd7d98aa79c",name:"Carne molida",description:"carne molida sin cocinar",unit:"oz",cost:"0.750",qtyIn:"0.00",qtyOut:"0.00"},{id:"5abbb1a745bd5",name:"Frijoles Negros",description:"Frijoles Negros",unit:"oz",cost:"0.550",qtyIn:"0.00",qtyOut:"0.00"},{id:"5addec9d09816",name:"Grouper Filet",description:"Grouper filets",unit:"oz",cost:"4.950",qtyIn:"0.00",qtyOut:"0.00"},{id:"5ace9b50bc9cd",name:"Salsa de Soya",description:"Salsa de Soya",unit:"oz",cost:"0.020",qtyIn:"0.00",qtyOut:"0.00"}]},L=B,N={workforce:[{id:"5ad91cb031db1",name:"+Team1",description:"Cooking team 1",rate:1.141},{id:"5abbb2c04297c",name:"Armador",description:"Armador Empanadas",rate:8.99},{id:"5abbb2346c814",name:"Ayudante",description:"Ayudante de cocina",rate:8.22},{id:"5abbb2d55fcf4",name:"Freidor",description:"Freidor cocina",rate:9}]},P=N,R={equipment:[{id:"5abbb1ed1dcbf",name:"Bandeja aluminio",description:"Bandeja empanadas pequena",rate:5},{id:"5abbb288079fa",name:"Bandeja aluminio Grande",description:"Bandeja de Aluminio grande",rate:5.591},{id:"5ae0631167a96",name:"Licuadora Ninja",description:"Licuadora profesional",rate:220},{id:"5ad9139d795e4",name:"Pinzas",description:"Pinzas para freir",rate:4.59}]},S=R;function G(){var t=Object(n["a"])(["\n  query recipes {\n    ingredients {\n      id\n      name\n      description\n    }\n  }\n"]);return G=function(){return t},t}var W=F()(G()),D={name:"Home",components:{EquipmentModule:E,IngredientsModule:C,WorkForceModule:k,RecipesModule:m},data:function(){return{rcdata:x,indata:L,wfdata:P,eqdata:S,loading:0,ingredients:null}},apollo:{$loadingKey:"loading",ingredients:{query:W}}},J=D,T=(e("1397"),Object(o["a"])(J,i,s,!1,null,"30104293",null));a["default"]=T.exports},"6d9d":function(t,a,e){"use strict";var i=e("94d8"),s=e.n(i);s.a},"815f":function(t,a,e){},"8cc8":function(t,a,e){},"94d8":function(t,a,e){},b504:function(t,a,e){"use strict";var i=e("bb90"),s=e.n(i);s.a},bb90:function(t,a,e){},d247:function(t,a,e){}}]);
//# sourceMappingURL=chunk-6bdec78a.8c824dcb.js.map