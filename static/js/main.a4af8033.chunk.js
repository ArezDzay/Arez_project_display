(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var s,c=a(1),r=a.n(c),n=a(36),i=a.n(n),o=a(2),d=a(3),l=a(5),j=a(4),u=a(12),h=a(6),b=a(13),p=a.n(b),m=a(37),O=a.n(m).a.create({baseURL:s||"https://vue-course-api.hexschool.io",timeout:5e3}),x=a(38),v=(a(65),a(0)),f=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={userName:""},e.logOut=function(){O.post("/logout"),p.a.remove("sony",{path:"/"})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){if(void 0!==p.a.load("sony")){var e=Object(x.a)(p.a.load("sony")).email,t=e.search("@"),a=e.substring(0,t).toUpperCase();this.setState({userName:a})}}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"headerContent",children:[Object(v.jsx)(u.b,{to:"/",className:"headerLeft",children:"SONY"}),Object(v.jsxs)("span",{className:"headerRightAdmin",children:[Object(v.jsxs)(u.b,{className:"userName",to:"/order",children:[Object(v.jsx)("span",{className:"headerImg",children:Object(v.jsx)("i",{className:"far fa-user"})}),this.state.userName]}),Object(v.jsx)("div",{children:Object(v.jsx)(u.b,{className:"logout",onClick:this.logOut,to:"/login",children:Object(v.jsx)("i",{className:"fas fa-sign-out-alt"})})})]})]})}}]),a}(r.a.Component),N=(a(74),function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"footerWrapper",children:[Object(v.jsxs)("div",{className:"footerBox",children:[Object(v.jsx)("div",{className:"footerTitle",children:"\u95dc\u65bc Sony"}),Object(v.jsx)("div",{className:"footerContent",children:"Sony \u4f01\u696d\u7db2\u7ad9"}),Object(v.jsx)("div",{className:"footerContent",children:"\u6578\u4f4d\u6559\u5ba4"})]}),Object(v.jsxs)("div",{className:"footerBox",children:[Object(v.jsx)("div",{className:"footerTitle",children:"\u5e38\u898b\u554f\u984c"}),Object(v.jsx)("div",{className:"footerContent",children:"\u7db2\u7ad9\u4f7f\u7528"}),Object(v.jsx)("div",{className:"footerContent",children:"Sony\u6703\u54e1"}),Object(v.jsx)("div",{className:"footerContent",children:"\u7db2\u7ad9\u8cfc\u7269"})]}),Object(v.jsxs)("div",{className:"footerBox",children:[Object(v.jsx)("div",{className:"footerTitle",children:"\u6703\u54e1\u5c08\u5340"}),Object(v.jsx)("div",{className:"footerContent",children:"\u4fee\u6539\u6703\u54e1\u8cc7\u6599"}),Object(v.jsx)("div",{className:"footerContent",children:"\u6211\u7684\u8ffd\u8e64\u6e05\u55ae"}),Object(v.jsx)("div",{className:"footerContent",children:"\u8cfc\u7269\u8a18\u9304\u67e5\u8a62"}),Object(v.jsx)("div",{className:"footerContent",children:"\u5230\u8ca8\u63d0\u9192\u8a2d\u5b9a"}),Object(v.jsx)("div",{className:"footerContent",children:"\u9001\u8ca8\u5730\u5740\u7ba1\u7406"})]})]})}}]),a}(r.a.Component)),y=(a(75),function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return void 0!==p.a.load("sony")?Object(v.jsxs)("div",{className:"Layout",children:[Object(v.jsx)(f,{}),this.props.children,Object(v.jsx)(N,{})]}):Object(v.jsx)(h.a,{to:"login"})}}]),a}(r.a.Component)),g=a(42),C=(a(76),function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={searchText:""},e.handleSearch=function(t){e.setState({searchText:t.target.value}),e.props.search(t.target.value)},e.clearSearch=function(){e.setState({searchText:""}),e.props.search("")},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.get("/api/data1/cart").then((function(t){var a=0;t.data.data.carts.forEach((function(e){a+=e.qty})),e.setState({cartNumber:a})}))}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"topBoxWrapper",children:[Object(v.jsxs)("div",{className:"topBoxWrapperContent",children:[Object(v.jsx)("div",{className:"topBoxLogo",children:"STORE"}),Object(v.jsxs)("div",{className:"topBoxCenter",children:[Object(v.jsx)("input",{onChange:this.handleSearch,className:"topBoxInput",value:this.state.searchText,placeholder:"Search Product"}),Object(v.jsx)("div",{onClick:this.clearSearch,className:"topBoxInputBtn",children:Object(v.jsx)("i",{className:"fas fa-times"})})]}),Object(v.jsxs)(u.b,{to:"/cart",className:"topBoxImg",children:[Object(v.jsx)("i",{className:"fas fa-shopping-cart fa-2x"}),Object(v.jsxs)("div",{className:"shoppingCounter",children:["(",this.props.cartNumber,")"]})]})]}),Object(v.jsxs)("div",{className:"topBoxCenter_2",children:[Object(v.jsx)("input",{onChange:this.handleSearch,className:"topBoxInput_2",value:this.state.searchText,placeholder:"Search Product"}),Object(v.jsx)("div",{onClick:this.clearSearch,className:"topBoxInputBtn_2",children:Object(v.jsx)("i",{className:"fas fa-times"})})]})]})}}]),a}(r.a.Component)),B=(a(77),function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={qty:1},e.addCart=function(){O.post("/api/data1/cart",{data:{product_id:e.props.product.id,qty:e.state.qty}}),e.props.updateCartNumber(),e.props.handleJumpWindow()},e.handleQty=function(t){var a=t.target.value;a>=5&&(a=5),a<=0&&(a=0),e.setState({qty:parseInt(a)})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.product,t=e.title,a=e.price,s=e.image;return Object(v.jsxs)("div",{className:"product",children:[Object(v.jsx)("div",{className:"productImg",children:Object(v.jsx)("img",{className:"productImgContent",src:s,alt:t})}),Object(v.jsx)("div",{className:"productName",children:t}),Object(v.jsxs)("div",{className:"productFooter",children:[Object(v.jsxs)("div",{className:"productPrice",children:["$",a]}),Object(v.jsx)("input",{onClick:this.clickQty,onChange:this.handleQty,className:"qty",type:"number",value:this.state.qty,min:"1",max:"5"}),Object(v.jsx)("div",{className:"btnSize",children:Object(v.jsx)("button",{onClick:this.addCart,type:"submit",className:"btnImg",children:Object(v.jsx)("i",{className:"fas fa-cart-plus fa-1x"})})})]})]})}}]),a}(r.a.Component)),k=(a(78),function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"skeletonWrapper",children:Object(v.jsxs)("div",{className:"skeletonproduct",children:[Object(v.jsx)("div",{className:"skeletonproductImg skeleton",children:Object(v.jsx)("div",{className:"skeletonproductImgContent"})}),Object(v.jsx)("div",{className:"skeletonproductName",children:Object(v.jsx)("div",{className:"skeletonName skeleton"})}),Object(v.jsxs)("div",{className:"skeletonproductFooter",children:[Object(v.jsx)("div",{className:"skeletonproductPrice",children:Object(v.jsx)("div",{className:"skeletonPrice skeleton"})}),Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"skeletonPrice skeletonQty skeleton"})}),Object(v.jsx)("div",{className:"skeletonbtnSize",children:Object(v.jsx)("button",{onClick:this.addCart,type:"submit",className:"skeletonbtnImg skeleton",children:Object(v.jsx)("div",{className:"skeletonImg"})})})]})]})})}}]),a}(r.a.Component)),w=(a(79),function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).JumpWindowRef=r.a.createRef(),e.state={context:""},e.handleJumpWindow=function(){e.JumpWindowRef.current.style.opacity="100%",setTimeout((function(){e.JumpWindowRef.current.style.opacity="0%"}),1500)},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.setState({context:this.props.content})}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"JumpWindowWrapper",children:Object(v.jsx)("div",{ref:this.JumpWindowRef,className:"JumpWindow",children:this.state.context})})}}]),a}(r.a.Component)),R=a(25),S=a(41),W=a.n(S),T=(a(95),a(96),a(97),function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"sliderBoxWrapper",children:Object(v.jsxs)(W.a,Object(R.a)(Object(R.a)({},{className:"",dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,autoplay:!0,speed:1e3,autoplaySpeed:4e3,cssEase:"linear"}),{},{children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:"https://store.sony.com.tw/resource/banner_img/flagship/ff8080817bca36b6017c079dede32ce3_BOT_pc_32ce30932.jpg",alt:""})}),Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:"https://store.sony.com.tw/resource/banner_img/flagship/ff8080817abcdc5d017af0abd825357b_A90J_pc_5357b1050.jpeg",alt:""})}),Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:"https://store.sony.com.tw/resource/banner_img/flagship/ff8080817b4e33dd017b51a8fbad068b_ZVE10_pc_d068b1040.jpg",alt:""})})]}))})}}]),a}(r.a.Component)),J=(a(98),function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).topBoxRef=r.a.createRef(),e.JumpWindowRef=r.a.createRef(),e.state={products:[],sourceProducts:[],cartNumber:0},e.updateCartNumber=function(){setTimeout((function(){O.get("/api/data1/cart").then((function(t){var a=0;t.data.data.carts.forEach((function(e){a+=e.qty})),e.setState({cartNumber:a})}))}),1e3)},e.search=function(t){var a=Object(g.a)(e.state.sourceProducts);a=a.filter((function(e){return null!==e.title.match(new RegExp(t,"gi"))})),e.setState({products:a})},e.handleJumpWindow=function(){e.JumpWindowRef.current.handleJumpWindow()},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.get("/api/data1/products").then((function(t){e.setState({products:t.data.products,sourceProducts:t.data.products})})),this.updateCartNumber()}},{key:"render",value:function(){var e=this;return Object(v.jsxs)(r.a.Fragment,{children:[Object(v.jsx)(w,{content:"\u5df2\u52a0\u5165\u8cfc\u7269\u8eca",ref:this.JumpWindowRef}),Object(v.jsx)(T,{}),Object(v.jsxs)("div",{className:"productsWrapper",children:[Object(v.jsx)(C,{closeJumpWindow:this.closeJumpWindow,ref:this.topBoxRef,search:this.search,cartNumber:this.state.cartNumber}),Object(v.jsx)("div",{className:"products",children:this.state.products.length>0?this.state.products.map((function(t){return Object(v.jsx)("div",{className:"column is-3",children:Object(v.jsx)(B,{handleJumpWindow:e.handleJumpWindow,updateCartNumber:e.updateCartNumber,product:t})},t.id)})):Object(v.jsxs)(r.a.Fragment,{children:[Object(v.jsx)("div",{className:"column is-3",children:Object(v.jsx)(k,{})}),Object(v.jsx)("div",{className:"column is-3",children:Object(v.jsx)(k,{})}),Object(v.jsx)("div",{className:"column is-3",children:Object(v.jsx)(k,{})}),Object(v.jsx)("div",{className:"column is-3",children:Object(v.jsx)(k,{})}),Object(v.jsx)("div",{className:"column is-3",children:Object(v.jsx)(k,{})}),Object(v.jsx)("div",{className:"column is-3",children:Object(v.jsx)(k,{})})]})})]})]})}}]),a}(r.a.Component)),I=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(v.jsx)(y,{children:Object(v.jsx)(J,{})})}}]),a}(r.a.Component),A=a(15),D=(a(99),function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).JumpWindowRef=r.a.createRef(),e.state={userName:"",password:""},e.handleChange=function(t){var a=t.target;e.setState(Object(A.a)({},a.name,a.value))},e.handleLogin=function(t){t.preventDefault(),O.post("/admin/signin",{username:e.state.userName,password:e.state.password}).then((function(t){if(!0===t.data.success){var a=t.data.token;p.a.save("sony",a,{path:"/"}),e.props.history.push("/")}else e.JumpWindowRef.current.handleJumpWindow()}))},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"loginBody",children:[Object(v.jsx)(w,{content:"\u5e33\u865f\u6216\u5bc6\u78bc\u932f\u8aa4",ref:this.JumpWindowRef}),Object(v.jsx)("div",{className:"loginImg"}),Object(v.jsxs)("form",{className:"loginWrapper",children:[Object(v.jsx)("div",{children:Object(v.jsxs)("label",{children:[Object(v.jsx)("div",{className:"loginContent",children:"Email"}),Object(v.jsx)("input",{onChange:this.handleChange,name:"userName",className:"loginInput",type:"text",placeholder:"\u8f38\u5165email"})]})}),Object(v.jsx)("div",{children:Object(v.jsxs)("label",{children:[Object(v.jsx)("div",{className:"loginContent",children:"Password"}),Object(v.jsx)("input",{onChange:this.handleChange,name:"password",className:"loginInput",type:"password",placeholder:"\u8f38\u5165password"})]})}),Object(v.jsx)("button",{onClick:this.handleLogin,className:"loginBtn",children:"LOGIN"})]}),Object(v.jsx)("div",{className:"explanation",children:"\u203b\u672c\u7db2\u7ad9\u50c5\u4f9b\u4f5c\u696d\u5c55\u793a"})]})}}]),a}(r.a.Component)),L=(a(100),function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={qty:e.props.cart.qty},e.deleteCart=function(){O.delete("/api/data1/cart/".concat(e.props.cart.id)),e.props.updateCart(e.props.cart.id),e.props.updateTotal(),setTimeout((function(){e.props.handleDisplay()}),1300)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.cart.product,t=e.image,a=e.title,s=e.price;return Object(v.jsxs)("div",{className:"cartBoxWrepper",children:[Object(v.jsx)("div",{className:"cartBoxImg",children:Object(v.jsx)("img",{src:t,alt:a})}),Object(v.jsxs)("div",{className:"cartBoxCenter",children:[Object(v.jsx)("div",{className:"cartBoxName",children:a}),Object(v.jsxs)("div",{className:"cartBoxPrice",children:["$",s]})]}),Object(v.jsxs)("div",{className:"cartBoxRight",children:[Object(v.jsxs)("div",{className:"purchaseQty",children:["\u6578\u91cf:",Object(v.jsx)("span",{className:"purchaseBox",children:this.props.cart.qty})]}),Object(v.jsxs)("div",{className:"box_2",children:["\u50f9\u683c:",Object(v.jsx)("span",{className:"purchaseBox",children:s*this.props.cart.qty})]}),Object(v.jsx)("div",{className:"cartBoxBtn",children:Object(v.jsx)("button",{onClick:this.deleteCart,children:Object(v.jsx)("i",{className:"far fa-trash-alt"})})})]})]})}}]),a}(r.a.Component)),_=(a(101),function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).JumpWindowRef=r.a.createRef(),e.noCartRef=r.a.createRef(),e.buyerDataRef=r.a.createRef(),e.buyerName=r.a.createRef(),e.buyerEmail=r.a.createRef(),e.buyerCode=r.a.createRef(),e.buyerAddress=r.a.createRef(),e.state={carts:[],total:0,buyerName:"",buyerEmail:"",buyerCode:"",buyerAddress:"",buyerMessage:""},e.updateTotal=function(){setTimeout((function(){O.get("/api/data1/cart").then((function(t){var a=0;t.data.data.carts.forEach((function(e){a=e.qty*e.product.price+a})),e.setState({total:a})}))}),1e3)},e.updateCart=function(t){var a=e.state.carts.filter((function(e){return e.id!==t}));e.setState({carts:a})},e.handleChange=function(t){var a=t.target;e.setState(Object(A.a)({},a.name,a.value))},e.handleDisplay=function(){e.handleNoCart(),e.handleBuyerData()},e.handleNoCart=function(){0!==e.state.total?e.noCartRef.current.display="none":e.noCartRef.current.classList.remove("hide")},e.handleBuyerData=function(){0!==e.state.total?e.buyerDataRef.current.classList.remove("hide"):e.buyerDataRef.current.classList.add("hide")},e.handleSubmit=function(t){var a=0;t.preventDefault(),""===e.state.buyerName?e.buyerName.current.classList.remove("hide"):(e.buyerName.current.classList.add("hide"),a+=1),""===e.state.buyerEmail?e.buyerEmail.current.classList.remove("hide"):(e.buyerEmail.current.classList.add("hide"),a+=1),""===e.state.buyerCode?e.buyerCode.current.classList.remove("hide"):(e.buyerCode.current.classList.add("hide"),a+=1),""===e.state.buyerAddress?e.buyerAddress.current.classList.remove("hide"):(e.buyerAddress.current.classList.add("hide"),a+=1),a>3&&(e.JumpWindowRef.current.handleJumpWindow(),O.post("/api/data1/order",{data:{user:{name:e.state.buyerName,email:e.state.buyerEmail,tel:e.state.buyerCode,address:e.state.buyerAddress},message:e.state.buyerMessage}}),e.setState({carts:[],total:0,buyerName:"",buyerEmail:"",buyerCode:"",buyerAddress:"",buyerMessage:""}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.get("/api/data1/cart").then((function(t){var a=0;t.data.data.carts.forEach((function(e){a=e.qty*e.product.price+a})),e.setState({carts:t.data.data.carts,total:a}),e.handleDisplay()}))}},{key:"render",value:function(){var e=this;return Object(v.jsxs)(r.a.Fragment,{children:[Object(v.jsx)(w,{content:"\u5df2\u5efa\u7acb\u8a02\u55ae",ref:this.JumpWindowRef}),Object(v.jsx)(y,{children:Object(v.jsxs)("div",{className:"cartWrapper",children:[Object(v.jsx)("div",{className:"cartLogo",children:"Shopping Cart"}),Object(v.jsxs)("div",{className:"shoppingCartCantent",children:[this.state.carts.map((function(t){return Object(v.jsx)(L,{handleDisplay:e.handleDisplay,updateTotal:e.updateTotal,updateCart:e.updateCart,cart:t},t.id)})),Object(v.jsx)("div",{ref:this.noCartRef,className:"noCart hide",children:"\u76ee\u524d\u6c92\u6709\u5546\u54c1"}),Object(v.jsx)("div",{className:"shoppingCartFooter",children:Object(v.jsxs)("div",{className:"shoppingCartTotal",children:["\u5408\u8a08:",Object(v.jsx)("span",{className:"shoppingCartcontent",children:this.state.total})]})}),Object(v.jsxs)("form",{ref:this.buyerDataRef,onSubmit:this.handleSubmit,className:"buyerData hide",children:[Object(v.jsxs)("div",{className:"buyerLeft",children:[Object(v.jsxs)("div",{className:"buyerBox buyerName",children:[Object(v.jsx)("div",{className:"buyerBox",children:"\u6536\u4ef6\u4eba\u59d3\u540d:"}),Object(v.jsx)("input",{onChange:this.handleChange,name:"buyerName",className:"buyerInput"}),Object(v.jsx)("div",{ref:this.buyerName,className:"errerText hide",children:"\u6b64\u9805\u76ee\u4e0d\u80fd\u70ba\u7a7a"})]}),Object(v.jsxs)("div",{className:"buyerBox buyerEmail",children:[Object(v.jsx)("div",{className:"buyerBox",children:"\u4fe1\u7bb1:"}),Object(v.jsx)("input",{onChange:this.handleChange,name:"buyerEmail",className:"buyerInput",type:"email"}),Object(v.jsx)("div",{ref:this.buyerEmail,className:"errerText hide",children:"\u6b64\u9805\u76ee\u4e0d\u80fd\u70ba\u7a7a"})]}),Object(v.jsxs)("div",{className:"buyerBox buyerCode",children:[Object(v.jsx)("div",{className:"buyerBox",children:"\u6536\u4ef6\u4eba\u96fb\u8a71:"}),Object(v.jsx)("input",{onChange:this.handleChange,name:"buyerCode",className:"buyerInput",type:"tel"}),Object(v.jsx)("div",{ref:this.buyerCode,className:"errerText hide",children:"\u6b64\u9805\u76ee\u4e0d\u80fd\u70ba\u7a7a"})]}),Object(v.jsxs)("div",{className:"buyerBox buyerAddress",children:[Object(v.jsx)("div",{className:"buyerBox",children:"\u6536\u4ef6\u4eba\u4f4f\u5740:"}),Object(v.jsx)("input",{onChange:this.handleChange,name:"buyerAddress",className:"buyerInput"}),Object(v.jsx)("div",{ref:this.buyerAddress,className:"errerText hide",children:"\u6b64\u9805\u76ee\u4e0d\u80fd\u70ba\u7a7a"})]})]}),Object(v.jsxs)("div",{className:"buyerRight",children:[Object(v.jsx)("textarea",{onChange:this.handleChange,name:"buyerMessage",className:"buyerMessage",type:"text",placeholder:"\u7559\u8a00\u7d66\u8ce3\u5bb6..."}),Object(v.jsx)("button",{className:"buyerBtn",type:"submit",children:"\u8cfc\u8cb7"})]})]})]})]})})]})}}]),a}(r.a.Component)),E=(a(102),function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={pay:"\u5c1a\u672a\u4ed8\u6b3e",products:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.order.is_paid&&this.setState({pay:"\u5df2\u4ed8\u6b3e"});var t=Object.keys(this.props.order.products).map((function(t){return e.props.order.products[t]}));this.setState({products:t})}},{key:"render",value:function(){var e=this.props.order,t=e.user,a=e.total;return Object(v.jsxs)("div",{className:"borderWrapper",children:[Object(v.jsxs)("div",{className:"changeOrderBoxWrapper",children:[Object(v.jsx)("div",{className:"orderBoxContent orderBoxTop orderBoxContentName",children:"\u6536\u4ef6\u4eba\u540d\u5b57"}),Object(v.jsx)("div",{className:"orderBoxContent orderBoxTop orderBoxContentNum",children:"\u61c9\u4ed8\u91d1\u984d"}),Object(v.jsx)("div",{className:"orderBoxContent orderBoxTop orderBoxContentPay",children:"\u662f\u5426\u4ed8\u6b3e"})]}),Object(v.jsxs)("div",{className:"orderBoxWrapper",children:[Object(v.jsx)("div",{className:"orderBoxContent orderBoxName",children:t.name}),Object(v.jsxs)("div",{className:"orderBoxProduct ",children:[Object(v.jsx)("div",{children:this.state.products.map((function(e){return Object(v.jsx)("div",{children:e.product.title},e.id)}))}),Object(v.jsx)("div",{children:this.state.products.map((function(e){return Object(v.jsx)("div",{children:e.qty},e.id)}))})]}),Object(v.jsx)("div",{className:"orderBoxContent orderBoxNum",children:a}),Object(v.jsx)("div",{className:"orderBoxContent orderBoxPay",children:this.state.pay})]}),Object(v.jsxs)("div",{className:"orderBoxProduct_2",children:[Object(v.jsx)("div",{children:this.state.products.map((function(e){return Object(v.jsx)("div",{children:e.product.title},e.id)}))}),Object(v.jsx)("div",{children:this.state.products.map((function(e){return Object(v.jsx)("div",{children:e.qty},e.id)}))})]})]})}}]),a}(r.a.Component)),P=(a(103),function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={orders:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.get("/api/data1/orders?page=1").then((function(t){e.setState({orders:t.data.orders})}))}},{key:"render",value:function(){return Object(v.jsxs)(r.a.Fragment,{children:[Object(v.jsx)(w,{}),Object(v.jsx)(y,{children:Object(v.jsxs)("div",{className:"orderWrapper",children:[Object(v.jsx)("div",{className:"orderLogo",children:"Track Order"}),Object(v.jsxs)("div",{className:"orderCantent",children:[Object(v.jsxs)("div",{className:"orderTop",children:[Object(v.jsx)("div",{className:"orderName orderContent",children:"\u6536\u4ef6\u4eba\u540d\u5b57"}),Object(v.jsx)("div",{className:"orderProduct orderContent",children:"\u8cfc\u8cb7\u5546\u54c1"}),Object(v.jsx)("div",{className:"orderPrice orderContent",children:"\u61c9\u4ed8\u91d1\u984d"}),Object(v.jsx)("div",{className:"pay orderContent",children:"\u662f\u5426\u4ed8\u6b3e"})]}),this.state.orders.map((function(e){return Object(v.jsx)("div",{children:Object(v.jsx)(E,{order:e})},e.id)}))]})]})})]})}}]),a}(r.a.Component)),q=function(){return Object(v.jsx)("h1",{children:"Not Found"})},M=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(v.jsx)(u.a,{basename:"/Arez_project_display",children:Object(v.jsxs)(h.d,{children:[Object(v.jsx)(h.b,{exact:!0,path:"/",component:I}),Object(v.jsx)(h.b,{path:"/login",component:D}),Object(v.jsx)(h.b,{path:"/cart",component:_}),Object(v.jsx)(h.b,{path:"/order",component:P}),Object(v.jsx)(h.b,{component:q})]})})}}]),a}(r.a.Component);i.a.render(Object(v.jsx)(M,{}),document.getElementById("root"))},65:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.a4af8033.chunk.js.map