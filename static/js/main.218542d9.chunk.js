(this["webpackJsonppokemon-db"]=this["webpackJsonppokemon-db"]||[]).push([[0],[,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/picachu-error.135dd484.png"},function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),l=n(1),i=n(2),s=n(3),u=n(4),m=(n(17),n(18),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).changePage=function(t){var n=document.getElementsByName("page");(0,e.props.onChangePage)(t.target.value);for(var a=0;a<n.length;a++)n[a].className="";t.target.className="active"},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"header navbar-collapse d-flex flex-row justify-content-around"},r.a.createElement("h1",null,"Pokemon DB"),r.a.createElement("ul",{className:"navbar-nav d-flex flex-row",value:"ul"},r.a.createElement("button",{value:"pokemon",name:"page",onClick:this.changePage},"Pokemons"),r.a.createElement("button",{value:"thing",name:"page",onClick:this.changePage},"Items"),r.a.createElement("button",{value:"location",name:"page",onClick:this.changePage},"Locations")))}}]),n}(a.Component)),f=n(5),h=n.n(f),p=n(6),d=function(){function e(){var t=this;Object(l.a)(this,e),this._apiBase="https://pokeapi.co/api/v2",this.getAllPokemons=Object(p.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/pokemon/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformPokemons));case 4:case"end":return e.stop()}}),e)}))),this.getPokemon=function(){var e=Object(p.a)(h.a.mark((function e(n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/pokemon/".concat(n,"/"));case 2:return a=e.sent,e.abrupt("return",t._transformPokemon(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllItems=Object(p.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/item/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformItems));case 4:case"end":return e.stop()}}),e)}))),this.getItem=function(){var e=Object(p.a)(h.a.mark((function e(n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/item/".concat(n,"/"));case 2:return a=e.sent,e.abrupt("return",t._transformItem(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllLocations=Object(p.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/location/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformLocations));case 4:case"end":return e.stop()}}),e)}))),this.getLocation=function(){var e=Object(p.a)(h.a.mark((function e(n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/location/".concat(n,"/"));case 2:return a=e.sent,e.abrupt("return",t._transformLocation(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._extractId=function(e){return e.url.match(/\/([0-9]*)\/$/)[1]},this._transformItem=function(e){return{id:e.id,name:e.name,cost:e.cost,category:e.category.name,sprite:e.sprites.default}},this._transformItems=function(e){return{id:t._extractId(e),name:e.name}},this._transformLocation=function(e){return{id:e.id,name:e.name,area:e.areas[0].name,region:e.region.name,sprite:"https://www.pngrepo.com/png/276269/180/location-pokemon.png"}},this._transformLocations=function(e){return{id:t._extractId(e),name:e.name}},this._transformPokemons=function(e){return{id:t._extractId(e),name:e.name}},this._transformPokemon=function(e){return{id:e.id,name:e.name,experience:e.base_experience,weight:e.weight,height:e.height,sprite:e.sprites.front_default}}}return Object(i.a)(e,[{key:"getResource",value:function(){var e=Object(p.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", received ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),g=(n(20),function(){return r.a.createElement("div",{className:"bg-primary spinner"},r.a.createElement("div",{className:"loadingio-spinner-double-ring-w8zdl9yb5ul"},r.a.createElement("div",{className:"ldio-kuzijtqhgsl"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)))))}),v=(n(9),function(e){var t=e.item,n=t.name,a=t.cost,c=t.category,o=t.sprite;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"item-image",alt:"Item",src:o}),r.a.createElement("div",{className:"item-description"},r.a.createElement("h2",{className:"description-title"},n),r.a.createElement("ul",{className:"description-list"},r.a.createElement("li",null,r.a.createElement("span",{className:"term"},"Cost: ")," ",r.a.createElement("span",null,a)),r.a.createElement("li",null,r.a.createElement("span",{className:"term"},"Category: ")," ",r.a.createElement("span",null,c)))))}),E=(n(21),n(11)),b=n.n(E),k=function(){return r.a.createElement("div",{className:"error-indicator"},r.a.createElement("img",{src:b.a,alt:"error-icon",width:"64"}),r.a.createElement("span",{className:"boom"},"BOOM!",r.a.createElement("br",null)," Something has gone wrong"),r.a.createElement("span",null,"It will be fixed soon"))},y=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).swapiService=new d,e.state={item:{},loading:!0,error:!1},e.onItemLoaded=function(t){e.setState({item:t,loading:!1})},e.onError=function(){e.setState({error:!0,loading:!1})},e.updateItem=function(){var t=Math.floor(20*Math.random())+2;e.swapiService.getItem(t).then(e.onItemLoaded).catch(e.onError)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.updateInterval;this.updateItem(),this.interval=setInterval(this.updateItem,e)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.item,n=e.loading,a=e.error,c=!(n||a),o=a?r.a.createElement(k,null):null,l=n?r.a.createElement(g,null):null,i=c?r.a.createElement(v,{item:t}):null;return n?r.a.createElement(g,null):r.a.createElement("div",{className:"random-item bg-primary "},o,l,i)}}]),n}(a.Component);y.defaultProps={updateInterval:3e3};var j=y,w=(n(22),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(i.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(k,null):this.props.children}}]),n}(a.Component)),O=(n(7),n(23),function(e){var t=e.left,n=e.right;return r.a.createElement("div",{className:"row mb2"},r.a.createElement("div",{className:"col-md-6"},t),r.a.createElement("div",{className:"col-md-6"},n))}),I=(n(24),function(e){var t=e.item,n=e.field,a=e.label;return r.a.createElement("li",null,a,": ",t[n])}),S=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).pokeapiservice=new d,e.state={item:null,hasData:!1,loading:!0,error:!1},e.onItemLoading=function(){e.setState({loading:!0})},e.onItemLoaded=function(t){e.setState({item:t,loading:!1})},e.onError=function(){e.setState({error:!0,loading:!1})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.itemId!==e.itemId&&this.updateItem()}},{key:"updateItem",value:function(){var e=this.props,t=e.itemId,n=e.getData;t&&(this.onItemLoading(),n(t).then(this.onItemLoaded).catch(this.onError))}},{key:"render",value:function(){var e=this.state,t=e.item,n=e.loading,a=e.error;if(!t||n)return r.a.createElement(g,null);if(a)return r.a.createElement(k,null);var c=t.name,o=t.sprite;return r.a.createElement("div",{className:"item-details bg-primary d-flex"},r.a.createElement("div",{className:"item-image"},r.a.createElement("img",{alt:"item",width:"150",height:"150",src:o})),r.a.createElement("div",{className:"item-description"},r.a.createElement("h2",{className:"description-title"},c),r.a.createElement("ul",{className:"description-list"},r.a.Children.map(this.props.children,(function(e){return r.a.cloneElement(e,{item:t})})))))}}]),n}(a.Component),x=function(e){return function(t){Object(u.a)(a,t);var n=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={data:null,loading:!0,error:!1},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.update()}},{key:"update",value:function(){var e=this;this.setState({loading:!0,error:!1}),this.props.getData().then((function(t){e.setState({data:t,loading:!1})})).catch((function(){e.setState({loading:!1,error:!0})}))}},{key:"render",value:function(){var t=this.state,n=t.data,a=t.loading,c=t.error;return a?r.a.createElement(g,null):c?r.a.createElement(k,null):r.a.createElement(e,Object.assign({},this.props,{data:n}))}}]),a}(a.Component)},N=r.a.createContext(),C=N.Provider,P=N.Consumer,_=function(e){return function(t){return function(n){return r.a.createElement(P,null,(function(a){var c=e(a);return r.a.createElement(t,Object.assign({},n,c))}))}}},A=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},D=function(e){return function(t){return function(n){return r.a.createElement(t,n,e)}}},L=_((function(e){return{getData:e.getPokemon}}))((function(e){return r.a.createElement(S,e,r.a.createElement(I,{field:"name",label:"Name"}),r.a.createElement(I,{field:"height",label:"Height"}),r.a.createElement(I,{field:"weight",label:"Weight"}),r.a.createElement(I,{field:"experience",label:"Experience"}))})),T=_((function(e){return{getData:e.getItem}}))((function(e){return r.a.createElement(S,e,r.a.createElement(I,{field:"cost",label:"Cost"}),r.a.createElement(I,{field:"category",label:"Category"}))})),R=_((function(e){return{getData:e.getLocation}}))((function(e){return r.a.createElement(S,e,r.a.createElement(I,{field:"area",label:"Area"}),r.a.createElement(I,{field:"region",label:"Region"}))})),B=(n(25),function(e){var t=e.data,n=e.onItemSelected,a=e.children,c=t.map((function(e){var t=e.id,c=a(e);return r.a.createElement("li",{className:"list-group-item",key:t,onClick:function(){return n(t)}},c)}));return r.a.createElement("div",{className:"item-list"},r.a.createElement("ul",{className:"list-group "},c))});B.defaultProps={onItemSelected:function(){}};var M=B,z=function(e){var t=e.name;return r.a.createElement("span",null,t)},J=A(_((function(e){return{getData:e.getAllPokemons}})),x,D(z))(M),U=A(_((function(e){return{getData:e.getAllItems}})),x,D(z))(M),W=A(_((function(e){return{getData:e.getAllLocations}})),x,D(z))(M),q=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).pokeapiService=new d,e.state={selectedPokemon:null},e.onPokemonSelected=function(t){e.setState({selectedPokemon:t})},e}return Object(i.a)(n,[{key:"render",value:function(){if(this.state.hasError)return r.a.createElement(k,null);var e=r.a.createElement(w,null,r.a.createElement(J,{onItemSelected:this.onPokemonSelected})),t=r.a.createElement(w,null,r.a.createElement(L,{itemId:this.state.selectedPokemon}));return this.state.selectedPokemon?r.a.createElement(O,{left:e,right:t}):r.a.createElement(O,{left:e,right:r.a.createElement("span",null,"Choose pokemon")})}}]),n}(a.Component),F=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).pokeapiService=new d,e.state={selectedThing:null},e.onThingSelected=function(t){e.setState({selectedThing:t})},e}return Object(i.a)(n,[{key:"render",value:function(){if(this.state.hasError)return r.a.createElement(k,null);var e=r.a.createElement(w,null,r.a.createElement(W,{onItemSelected:this.onThingSelected})),t=r.a.createElement(w,null,r.a.createElement(R,{itemId:this.state.selectedThing}));return this.state.selectedThing?r.a.createElement(O,{left:e,right:t}):r.a.createElement(O,{left:e,right:r.a.createElement("span",null,"Choose location")})}}]),n}(a.Component),H=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).pokeapiService=new d,e.state={selectedThing:null},e.onThingSelected=function(t){e.setState({selectedThing:t})},e}return Object(i.a)(n,[{key:"render",value:function(){if(this.state.hasError)return r.a.createElement(k,null);var e=r.a.createElement(w,null,r.a.createElement(U,{onItemSelected:this.onThingSelected})),t=r.a.createElement(w,null,r.a.createElement(T,{itemId:this.state.selectedThing}));return this.state.selectedThing?r.a.createElement(O,{left:e,right:t}):r.a.createElement(O,{left:e,right:r.a.createElement("span",null,"Choose item")})}}]),n}(a.Component),$=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).pokeapiService=new d,e.state={toggle:!0,hasError:!1,page:""},e.toggleItem=function(){var t=!e.state.toggle;e.setState({toggle:t})},e.changePage=function(t){e.setState({page:t})},e}return Object(i.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){if(this.state.hasError)return r.a.createElement(k,null);var e=this.state,t=e.toggle,n=e.page,a=t?r.a.createElement(j,{updateInterval:5e3}):null,c=null;return c="pokemon"===n?r.a.createElement(q,null):"thing"===n?r.a.createElement(H,null):"location"===n?r.a.createElement(F,null):null,r.a.createElement(w,null,r.a.createElement(C,{value:this.pokeapiService},r.a.createElement("div",{className:"star-db"},r.a.createElement(m,{onChangePage:this.changePage}),a,r.a.createElement("button",{className:"toggle",onClick:this.toggleItem},"Toggle random item"),c)))}}]),n}(a.Component);o.a.render(r.a.createElement($,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.218542d9.chunk.js.map