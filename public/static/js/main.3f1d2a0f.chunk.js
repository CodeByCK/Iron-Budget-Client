(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){e.exports=a(267)},115:function(e,t,a){},116:function(e,t,a){},153:function(e,t,a){},266:function(e,t,a){},267:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(25),r=a.n(c),l=(a(115),a(116),a(4)),s=a(5),i=a(7),m=a(6),u=a(8),d=a(28),p=a(99),h=a.n(p),g=a(16),f=a(34),E=a.n(f),v=E.a.initializeApp({apiKey:"AIzaSyDdlitz1gowXIescnAAcfBW1vIzx5CpiyA",authDomain:"ironhack-budget-app.firebaseapp.com",databaseURL:"https://ironhack-budget-app.firebaseio.com",projectId:"ironhack-budget-app",storageBucket:"ironhack-budget-app.appspot.com",messagingSenderId:"501374111775",appId:"1:501374111775:web:418068f8e35c0f43"}),b=new E.a.auth.GoogleAuthProvider,N=new E.a.auth.FacebookAuthProvider,y=a(21),w=a(9),C=a.n(w),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={email:"",password:"",message:null,loggedIn:!1},a.login=function(e){e.preventDefault(),v.auth().signInWithEmailAndPassword(a.state.email,a.state.password).then(function(e){console.log(e),C.a.post("".concat("","/login")).then(function(e){console.log("asdasdsadsad",e.data)}).catch(function(e){console.error(e)}),a.setState({loggedIn:!0})}).catch(function(e){a.setState({message:e.message}),console.log(e)})},a.googleLogin=function(){v.auth().signInWithPopup(b).then(function(e){console.log(e),C.a.post("".concat("","/login"),{uid:e.uid,email:e.email}).then(function(e){console.log("asdasdsadsad",e)}).catch(function(e){console.error(e)}),a.setState({loggedIn:!0})}).catch(function(e){console.log(e)})},a.facebookLogin=function(){v.auth().signInWithPopup(N).then(function(e){console.log(e)}).catch(function(e){a.setState({loggedIn:!0}),console.log(e)})},a.handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,!!this.state.loggedIn&&o.a.createElement(d.a,{to:"/"}),o.a.createElement("div",{className:"simple-login-container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 text-center"},o.a.createElement("img",{className:"logo",src:"/images/logo.png",alt:"logo",width:"100%"}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 text-center text-secondary"},o.a.createElement("h2",null,"Sign In"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 form-group"},o.a.createElement("input",{value:this.state.email,onChange:this.handleChange,className:"form-control",type:"email",name:"email",placeholder:"Enter Email"}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 form-group"},o.a.createElement("input",{value:this.state.password,onChange:this.handleChange,className:"form-control",type:"password",name:"password",placeholder:"Password"}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 form-group"},o.a.createElement("input",{onClick:this.login,type:"submit",className:"btn btn-block btn-login"}),this.state.message)),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 form-group"},o.a.createElement("div",{className:"or-box"},o.a.createElement("span",{class:"or"},"OR")),o.a.createElement("button",{onClick:this.facebookLogin,className:"btn btn-block btn-primary mb-3",type:"button"},o.a.createElement("span",null,o.a.createElement("i",{className:"fab fa-facebook-f"})," Sign in with Facebook")," "),o.a.createElement("button",{onClick:this.googleLogin,className:"btn btn-block btn-danger",type:"button"},o.a.createElement("span",null,o.a.createElement("i",{className:"fab fa-google-plus-g"})," Sign in with Google+")," "))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 form-group text-center"},o.a.createElement("div",{className:"or-box"},o.a.createElement("span",null,"New to Iron Budget? ",o.a.createElement(y.b,{to:"/signup"},"Sign up now!")))))))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={email:"",password:"",confirmPassword:"",message:null,signedUp:!1},a.signup=function(e){e.preventDefault(),a.state.password===a.state.confirmPassword?v.auth().createUserWithEmailAndPassword(a.state.email,a.state.password).then(function(e){a.setState({signedUp:!0})}).catch(function(e){a.setState({message:e.message}),console.log(e)}):a.setState({message:"Passwords do not match."})},a.googleLogin=function(){v.auth().signInWithPopup(b).then(function(e){a.setState({signedUp:!0})}).catch(function(e){console.log(e)})},a.facebookLogin=function(){v.auth().signInWithPopup(N).then(function(e){a.setState({signedUp:!0})}).catch(function(e){console.log(e)})},a.handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,!!this.state.signedUp&&o.a.createElement(d.a,{to:"/"}),o.a.createElement("div",{className:"simple-login-container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 text-center"},o.a.createElement(y.b,{to:"/"},o.a.createElement("img",{src:"/images/logo.png",alt:"logo",width:"100%"})))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 text-center text-secondary"},o.a.createElement("h2",null,"Create an account"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 form-group"},o.a.createElement("input",{value:this.state.email,onChange:this.handleChange,className:"form-control",type:"email",name:"email",placeholder:"Enter Email"}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 form-group"},o.a.createElement("input",{value:this.state.password,onChange:this.handleChange,className:"form-control",type:"password",name:"password",placeholder:"Password"}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 form-group"},o.a.createElement("input",{value:this.state.confirmPassword,onChange:this.handleChange,className:"form-control",type:"password",name:"confirmPassword",placeholder:"Verify Password"}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 form-group"},o.a.createElement("input",{onClick:this.signup,type:"submit",className:"btn btn-block btn-login",placeholder:"Enter your Password"}),this.state.message)),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 form-group"},o.a.createElement("div",{className:"or-box"},o.a.createElement("span",{className:"or"},"OR")),o.a.createElement("button",{onClick:this.facebookLogin,className:"btn btn-block btn-primary mb-3",type:"button"},o.a.createElement("span",null,o.a.createElement("i",{className:"fab fa-facebook-f"})," Create with Facebook")," "),o.a.createElement("button",{onClick:this.googleLogin,className:"btn btn-block btn-danger",type:"button"},o.a.createElement("span",null,o.a.createElement("i",{className:"fab fa-google-plus-g"})," Create with Google+")," "))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 form-group text-center"},o.a.createElement("div",{className:"or-box"},o.a.createElement("span",null,"Have an account? ",o.a.createElement(y.b,{to:"/login"},"Sign in now!")))))))}}]),t}(n.Component),j=a(29),x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={isMenuOpen:!1},a.toggleMenu=function(){a.setState({isMenuOpen:!a.state.isMenuOpen})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("i",{className:"fas fa-chevron-right ml-3 mt-3",onMouseOver:this.toggleMenu,style:{fontSize:"1rem",cursor:"pointer"}}),o.a.createElement("div",{className:"sidebar-menu".concat(!0===this.state.isMenuOpen?" open":"")},o.a.createElement("button",{type:"button",className:"button small float-right text-white",onClick:this.toggleMenu},o.a.createElement("h3",null,"X")),o.a.createElement("div",{className:"container"},o.a.createElement("div",{ClassName:"row"},o.a.createElement("div",{className:"footer"},o.a.createElement("i",{onClick:this.props.logout,className:"fas fa-sign-out-alt signout-logo"}),o.a.createElement("br",null),o.a.createElement("div",{className:"logout"},"LOG OUT"))))))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={name:"Paycheck",planned:0,received:[],user:a.props.user,incomes:[],collapsed:!1,hovered:!1,text:"",contentEditable:!0,form:!1,editActive:!1,trash:!0,amount:0,id:"",receivedTotal:0},a.eventHandler=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.submitHandler=function(e){e.preventDefault();var t={userId:a.state.user,name:a.state.name,planned:Number.parseFloat(a.state.planned),received:Number.parseFloat(a.state.received)};C.a.post("".concat("","/api/newPaycheck"),t).then(function(e){a.setState({incomes:[].concat(Object(j.a)(a.state.incomes),[e.data]),name:"",planned:""}),a.updateIncomeAmount()})},a.collapse=function(){a.setState({collapsed:!a.state.collapsed})},a.editIncome=function(e){var t=e.target.getAttribute("name"),n=e.target.getAttribute("id"),o=e.target.innerHTML;C.a.post("".concat("","/api/paychecks/editIncome/").concat(n),{name:t,val:o}).then(function(){a.updateIncomeAmount()}).catch(function(e){console.log(e)})},a.deleteIncome=function(e){e.preventDefault(),console.log("clicked");var t=e.target.getAttribute("id");C.a.post("".concat("","/api/paychecks/deleteIncome/").concat(t)).then(function(){a.updateIncomeAmount()}).catch(function(e){console.log(e)})},a.showForm=function(){a.setState({form:!a.state.form})},a.toggleDelete=function(){a.setState({trash:!a.state.trash})},a.updateIncomeAmount=function(){C.a.get("".concat("","/api/paychecks/").concat(a.state.user)).then(function(e){a.setState({incomes:e.data.response},function(){return a.totalReceived()}),a.totalAmount(),a.props.onClick(a.state.amount)})},a.totalAmount=function(){var e=0;a.state.incomes.map(function(t){e+=Number(t.planned)}),console.log("amoutnnnt",e),a.setState({amount:e})},a.totalReceived=function(e){var t=0;return a.state.incomes.map(function(a){a._id===e&&a.received.map(function(e){t+=e})}),t},a.ReceivedAmount=function(){var e=0;return a.state.incomes.map(function(t){t.received.map(function(t){e+=t})}),e},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateIncomeAmount()}},{key:"render",value:function(){var e=this;return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"card incomeCard mb-3"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-4"},o.a.createElement("i",{"data-toggle":"collapse","data-target":"#incomeCollapse",onClick:this.collapse,style:{cursor:"pointer",color:"orange"},className:"fas fa-chevron-".concat(!0===this.state.collapsed?"down":"up")}),o.a.createElement("strong",{"data-toggle":"collapse","data-target":"#incomeCollapse",onClick:this.collapse},"  INCOME ")),o.a.createElement("div",{className:"col col-sm-4 text-right"},o.a.createElement("strong",null,"Planned")),o.a.createElement("div",{className:"col col-sm-4 text-right"},o.a.createElement("strong",null,"Received"))),o.a.createElement("div",{className:"collapse show",id:"incomeCollapse"},o.a.createElement("div",{className:"card mt-2",style:{border:"none"}},this.state.incomes.map(function(t,a){return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"row editActive"},o.a.createElement("div",{className:"trashIcon text-left"},o.a.createElement("i",{className:"fas fa-trash-alt",id:t._id,onClick:e.deleteIncome})),o.a.createElement("div",{className:"col-4",contentEditable:"true",data:"name",onBlur:e.editIncome,id:t._id,name:"name"},t.name),o.a.createElement("div",{className:"col text-right dollar",contentEditable:"true",onBlur:e.editIncome,id:t._id,name:"planned"},Number(t.planned).toFixed(2)),o.a.createElement("div",{className:"col text-right",id:t._id,style:{color:"green"}},"$ ",e.totalReceived(t._id).toFixed(2))),o.a.createElement("hr",null))}),o.a.createElement("form",{id:"incomeForm",className:"incomeForm",style:{display:!0===this.state.form?"inline-block":"none"},onSubmit:this.submitHandler},o.a.createElement("div",{className:"row mb-2"},o.a.createElement("div",{className:"col-4"},o.a.createElement("input",{type:"text",name:"name",placeholder:"Paycheck #",value:this.state.name,onChange:this.eventHandler,required:!0,autoComplete:"off"})),o.a.createElement("div",{className:"col col-sm-4 text-right"},o.a.createElement("input",{className:"text-right",type:"number",name:"planned",step:"any",min:"0",placeholder:"0.00",value:this.state.planned,onChange:this.eventHandler,required:!0,autoComplete:"off"})),o.a.createElement("div",{className:"col col-sm-4 text-right"},o.a.createElement("button",{onClick:this.showForm,className:"fas fa-check",type:"submit",form:"incomeForm",style:{color:"#0097a8",fontSize:"25px",borderRadius:"20px"}})))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-4"},o.a.createElement("p",{style:{cursor:"pointer",color:"#0097a8"},onClick:this.showForm},o.a.createElement("i",{className:"fas fa-plus text"}),o.a.createElement("strong",null," Income"))),o.a.createElement("div",{className:"col col-sm-4 text-right"},o.a.createElement("strong",null," $ ",Number(this.state.amount).toFixed(2))),o.a.createElement("div",{className:"col col-sm-4 text-right"},o.a.createElement("strong",null,"$ ",Number(this.ReceivedAmount()).toFixed(2)))))))))}}]),t}(n.Component),A=a(269),F=a(270),S=a(37),T=(a(153),a(35)),D=a.n(T),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={transactions:[]},a.getTransactions=function(e){var t=a.props.user;C.a.get("".concat("","/api/transactions/").concat(t)).then(function(e){a.setState({transactions:e.data})}).catch(function(e){console.log(e)})},a.deleteTransaction=function(e){e.preventDefault();var t=e.target.getAttribute("id");C.a.get("".concat("","/api/deleteTransaction/").concat(t)).then(function(){a.getTransactions()}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getTransactions()}},{key:"componentWillReceiveProps",value:function(){this.props.reload()}},{key:"render",value:function(){var e=this;return o.a.createElement(n.Fragment,null,this.state.transactions.map(function(t,a){return o.a.createElement("div",{className:"card mt-2 tCard"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-3"},o.a.createElement("span",{className:"month text-right"},o.a.createElement(D.a,{format:"MMM",withTitle:!0},t.date)),o.a.createElement("br",null),o.a.createElement("span",{className:"day text-right"},o.a.createElement(D.a,{format:"DD",withTitle:!0},t.date))),o.a.createElement("div",{className:"col-5 text-center"},o.a.createElement("div",{className:"card-block"},o.a.createElement("div",{className:"card-title"},o.a.createElement("span",{className:"tTitle"},t.name)),o.a.createElement("p",null))),o.a.createElement("div",{className:"col mt-2 "},o.a.createElement("span",{className:"tAmount float-right"},"$ ",Number(t.amount).toFixed(2),o.a.createElement("i",{onClick:e.deleteTransaction,id:t._id,style:{color:"red",fontSize:"0.9em",cursor:"pointer"},className:"fas fa-minus-circle ml-2"})))))}))}}]),t}(n.Component),P=a(103),H=a.n(P),M=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleOnSuccess",value:function(e,t){}},{key:"handleOnExit",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("h1",null,"Bank Transaction Here"),o.a.createElement(H.a,{clientName:"Your app name",env:"sandbox",product:["auth","transactions"],publicKey:"614be98f819e9bd8d0db9abec1c08a",onExit:this.handleOnExit,onSuccess:this.handleOnSuccess},"Open Link and connect your bank!"))}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={amount:null,date:null,items:[],name:"",itemId:"",user:a.props.user},a.eventHandler=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.createTransaction=function(e){e.preventDefault();var t=a.state.date,n=a.state.name,o=a.state.itemId,c=Number.parseFloat(-a.state.amount),r=a.props.user;C.a.post("".concat("","/api/createTransaction/"),{date:t,name:n,itemId:o,amount:c,userId:r}).then(function(e){a.setState({amount:0,date:null,name:"",itemId:""},function(){return a.props.reload()}),console.log(e)}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("form",{className:"mt-3",onSubmit:this.createTransaction},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"Number",min:"0",autoComplete:"off",step:"any",value:this.state.amount,onChange:this.eventHandler,className:"form-control text-center",name:"amount",placeholder:"$ 0.00",required:!0})),o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"col"},o.a.createElement("input",{type:"date",value:this.state.date,onChange:this.eventHandler,className:"form-control input-group date",name:"date",placeholder:"Date",required:!0})),o.a.createElement("div",{className:"col"},o.a.createElement("input",{type:"text",value:this.state.name,onChange:this.eventHandler,className:"form-control",name:"name",autoComplete:"off",placeholder:"Name ",required:!0}))),o.a.createElement("div",{className:"form-row mt-3"},o.a.createElement("select",{name:"itemId",value:this.state.itemId,onChange:this.eventHandler,className:"form-control",required:!0},o.a.createElement("option",{required:!0,selected:!0},"(Choose Budget Item)"),this.props.groups.map(function(e,t){return e.items.map(function(e,t){return console.log("============>",e),o.a.createElement("option",{value:e._id,key:t},e.name)})}))),o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{onChange:this.eventHandler,type:"submit",className:"btn btn-danger btn-sm mt-2"},"SUBMIT"))))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={incomes:[],amount:null,date:null,name:"",incomeId:"",user:a.props.user},a.eventHandler=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.createTransaction=function(e){e.preventDefault();var t=a.state.date,n=a.state.name,o=a.state.incomeId,c=Number.parseFloat(a.state.amount),r=a.props.user;C.a.post("".concat("","/api/createIncomeTransaction/"),{date:t,name:n,incomeId:o,amount:c,userId:r}).then(function(e){a.setState({amount:0,date:null,name:"",incomeId:""},function(){return a.props.reload()})}).catch(function(e){})},a.getIncome=function(){C.a.get("".concat("","/api/paychecks/").concat(a.state.user)).then(function(e){a.setState({incomes:e.data.response})})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getIncome()}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("form",{className:"mt-3",onSubmit:this.createTransaction},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"Number",min:"0",autoComplete:"off",step:"any",value:this.state.amount,onChange:this.eventHandler,className:"form-control text-center",name:"amount",placeholder:"$ 0.00",required:!0})),o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"col"},o.a.createElement("input",{type:"date",value:this.state.date,onChange:this.eventHandler,className:"form-control input-group date",name:"date",placeholder:"Date",required:!0})),o.a.createElement("div",{className:"col"},o.a.createElement("input",{type:"text",value:this.state.name,onChange:this.eventHandler,className:"form-control",name:"name",autoComplete:"off",placeholder:"Name ",required:!0}))),o.a.createElement("div",{className:"form-row mt-3"},o.a.createElement("select",{name:"incomeId",value:this.state.incomeId,onChange:this.eventHandler,className:"form-control",required:!0},o.a.createElement("option",{required:!0,selected:!0},"(Choose Income Item)"),this.state.incomes.map(function(e,t){return o.a.createElement("option",{value:e._id,key:t},e.name)}))),o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{onChange:this.eventHandler,type:"submit",className:"btn btn-danger btn-sm mt-2"},"SUBMIT"))))}}]),t}(n.Component),_=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement(A.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title"}),o.a.createElement(A.a.Header,{closeButton:!0},o.a.createElement(A.a.Title,{id:"contained-modal-title"},"Transactions")),o.a.createElement(A.a.Body,null,o.a.createElement(S.Tabs,{style:{cursor:"pointer"},onSelect:function(e,t){return console.log(t+" selected")}},o.a.createElement(S.Tab,{label:"Add"},o.a.createElement(G,{reload:this.props.reload,user:this.props.user,groups:this.props.groups})),o.a.createElement(S.Tab,{label:"Income"},o.a.createElement(L,{user:this.props.user,groups:this.props.groups})),o.a.createElement(S.Tab,{className:"listItems",label:"Search"},o.a.createElement(B,{reload:this.props.reload,user:this.props.user})),o.a.createElement(S.Tab,{label:"Your Bank"},o.a.createElement(M,null)))),o.a.createElement(A.a.Footer,null,o.a.createElement(F.a,{style:{backgroundColor:"orange",borderColor:"orange"},onClick:this.props.onHide},"Close"))))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={modalShow:!1,date:Date.now()},a.modalClose=function(){a.setState({modalShow:!a.state.modalShow})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement(_,{user:this.props.user,groups:this.props.groups,show:this.state.modalShow,onHide:this.modalClose,reload:this.props.reload}),o.a.createElement("div",{className:"topNav "},o.a.createElement("div",{className:"col topNav"},o.a.createElement("div",null,o.a.createElement("span",null,o.a.createElement("strong",{className:"h3 font-weight-bold"},o.a.createElement(D.a,{format:"MMM",withTitle:!0},this.state.date)),o.a.createElement("label",{className:"h3",id:"year"},o.a.createElement(D.a,{format:"YYYY",withTitle:!0},this.state.date)),o.a.createElement("i",{onClick:this.modalClose,className:"fas fa-plus-circle float-right mr-4",style:{color:"orange",fontSize:"40px",cursor:"pointer"}}))),o.a.createElement("div",null,o.a.createElement("span",{id:"leftBudget"},o.a.createElement("strong",{className:"amount"},"$ ",Number(this.props.amount-this.props.groupAmount).toFixed(2))," ",o.a.createElement("span",{style:{color:"orange"}},"left to budget")," ",o.a.createElement("p",{className:"float-right"},"Transactions")))),o.a.createElement("hr",null)))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={id:a.props._id,transactions:[],spent:0},a.getSpentAmount=function(){var e=a.state.id;C.a.get("".concat("","/api/getTransaction/").concat(e)).then(function(e){a.setState({transactions:e.data},function(){return a.totalAmount()})}).catch(function(e){console.log(e)})},a.totalAmount=function(){var e=0;a.state.transactions.length>0&&(a.state.transactions.map(function(t){e+=Number(t.amount)}),a.setState({spent:e}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(){this.getSpentAmount()}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"row editActive"},o.a.createElement("div",{className:"trashIcon text-left"},o.a.createElement("i",{className:"fas fa-trash-alt",id:this.props._id,onClick:this.props.delete})),o.a.createElement("div",{className:"col-4",contentEditable:"true",data:"name",onBlur:this.props.edit,id:this.props._id,name:"name"},this.props.name),o.a.createElement("div",{className:"col text-right dollar",contentEditable:"true",onBlur:this.props.edit,id:this.props._id,name:"planned"},Number(this.props.planned).toFixed(2)),o.a.createElement("div",{className:"col text-right",style:{color:Number(-1*this.state.spent)>this.props.planned?"red":"green",fontWeight:500}},"$ ",Number(-1*this.state.spent).toFixed(2))),o.a.createElement("hr",null))}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={collapsed:!1,items:a.props.group.items,amount:0,name:"",user:a.props.user,itemName:"",itemPlanned:"",groupId:"",form:!1},a.collapse=function(){a.setState({collapsed:!a.state.collapsed})},a.editGroup=function(e){var t=e.target.getAttribute("id"),a=e.target.getAttribute("name"),n=e.target.innerHTML.toUpperCase();C.a.post("".concat("","/api/editGroup/").concat(t),{name:a,val:n}).then(function(e){}).catch(function(e){})},a.createItem=function(e){e.preventDefault();var t=e.target.getAttribute("id"),n=a.state.itemName,o=Number.parseFloat(a.state.itemPlanned);C.a.post("".concat("","/api/createItem/"),{groupId:t,name:n,planned:o}).then(function(e){console.log(e),a.setState({items:[].concat(Object(j.a)(a.state.items),[{groupId:t,name:n,planned:o}])},function(){a.props.reload()})}).catch(function(e){}),a.showForm()},a.editItem=function(e){var t=e.target.getAttribute("id"),n=e.target.getAttribute("name"),o=e.target.innerHTML;C.a.post("".concat("","/api/editItem/").concat(t),{name:n,val:o}).then(function(e){a.props.reload()}).catch(function(e){})},a.deleteItem=function(e){e.preventDefault();var t=e.target.getAttribute("id");C.a.post("".concat("","/api/deleteItem/").concat(t)).then(function(e){var n=Object(j.a)(a.state.items);n.forEach(function(e,a){e._id===t&&n.splice(a,1)}),a.setState({items:n}),a.props.calculateTotal(),a.props.reload()}).catch(function(e){})},a.showForm=function(e){a.setState({form:!a.state.form})},a.eventHandler=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(n.Fragment,null,o.a.createElement("div",{key:this.props.i,className:"card incomeCard mb-3"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-4"},o.a.createElement("div",{className:"row"},o.a.createElement("i",{"data-toggle":"collapse","data-target":"#groupCollapse".concat(this.props.i),onClick:this.collapse,style:{cursor:"pointer",color:"orange",marginLeft:"13px",marginRight:"5px",marginTop:"5px"},className:"fas fa-chevron-".concat(!0===this.state.collapsed?"down":"up")}),o.a.createElement("strong",null,o.a.createElement("div",{style:{width:"100%",display:"inline-block",cursor:"pointer"},"data-toggle":"collapse","data-target":"#groupCollapse".concat(this.props.i),onClick:this.collapse,onBlur:this.editGroup,id:this.props.group._id,contentEditable:"true",name:"name"},this.props.group.name)))),o.a.createElement("div",{className:"col col-sm-4 text-right"},o.a.createElement("strong",null,"Planned")),o.a.createElement("div",{className:"col col-sm-4 text-right"},o.a.createElement("strong",null,"Spent"),o.a.createElement("i",{style:{float:"right",marginLeft:"10px",paddingLeft:"10px",color:"red",cursor:"pointer"},className:"fas fa-minus-circle",id:this.props.group._id,onClick:this.props.deleteGroup}))),o.a.createElement("div",{className:"collapse show",id:"groupCollapse".concat(this.props.i)},o.a.createElement("div",{className:"card mt-2",style:{border:"none"}},this.state.items.map(function(t,a){return o.a.createElement(U,Object.assign({},t,{edit:e.editItem,delete:e.deleteItem}))}),o.a.createElement("form",{className:"incomeForm",style:{display:!0===this.state.form?"inline-block":"none"},onSubmit:this.createItem},o.a.createElement("div",{className:"row mb-2"},o.a.createElement("div",{className:"col-4"},o.a.createElement("input",{type:"text",name:"itemName",placeholder:"ex. Gas",defaultValue:this.state.itemName,onChange:this.eventHandler,autoComplete:"off"})),o.a.createElement("div",{className:"col col-sm-4 text-right"},o.a.createElement("input",{className:"text-right",type:"number",name:"itemPlanned",min:"0",step:"any",placeholder:"0.00",defaultValue:this.state.planned,onChange:this.eventHandler,autoComplete:"off"})),o.a.createElement("div",{className:"col col-sm-4 text-right"},o.a.createElement("button",{id:this.props.group._id,onClick:this.createItem,className:"fas fa-check",type:"submit",style:{color:"#0097a8",fontSize:"25px",borderRadius:"20px"}})))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-4"},o.a.createElement("p",{style:{cursor:"pointer",color:"#0097a8"},onClick:this.showForm},o.a.createElement("i",{className:"fas fa-plus text"}),o.a.createElement("strong",null," Add Item")))))))))}}]),t}(n.Component),z=a(108),W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).getTotals=function(){var e=[];return a.props.groups.map(function(t,a){e[a]=e[a]?e[a]:0,t.items.map(function(t){e[a]+=t.planned})}),e},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={labels:this.props.groups.map(function(e){return e.name}),datasets:[{data:this.getTotals(),backgroundColor:["#FF6384","#36A2EB","#FFCE56","#FF6656","#FFA75B","#44C94C","#9A3AA7","#C948BE","#EA5489","#FF675B","#FFA45B","#FFC85B","#FFDD5B","#FFFE5B","#BDF357","#4FDD4F","#45C0AF","#5282C6","#6D58CB","#9250C8","#F8443A","#016065"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]};return o.a.createElement(n.Fragment,null,o.a.createElement(z.a,{data:e,options:{legend:{position:"bottom"},title:{display:!0,text:"PLANNED BUDGET"},animation:{duration:1e3,easing:"easeInSine"}},width:83,height:50}))}}]),t}(n.Component),$=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={amount:null,budget:null,groups:[],itemRefresh:!1,groupAmount:null},a.retrieveAmount=function(e){console.log("retrieved",e),a.setState({amount:e})},a.calculateTotal=function(){var e=0;console.log("calulateTotal"),a.state.groups.map(function(t,a){t.items.map(function(t,a){e+=Number(t.planned)})}),a.setState({groupAmount:e})},a.getGroup=function(){var e=a.props.user;C.a.get("".concat("","/api/Group/").concat(e)).then(function(e){a.setState({groups:e.data.response},function(){return a.calculateTotal()}),a.calculateTotal()}).catch(function(e){console.log(e)})},a.createGroup=function(){var e=a.props.user;C.a.post("".concat("","/api/createGroup"),{user:e}).then(function(e){a.setState({groups:[].concat(Object(j.a)(a.state.groups),[e.data])},function(){return a.calculateTotal()})}).catch(function(e){console.log(e)})},a.deleteGroup=function(e){e.preventDefault(),console.log("clicked");var t=e.target.getAttribute("id");C.a.post("".concat("","/api/deleteGroup/").concat(t)).then(function(){a.getGroup(),console.log("deleted")}).catch(function(e){console.log(e)})},a.logout=function(){E.a.auth().signOut()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getGroup()}},{key:"render",value:function(){var e=this;return o.a.createElement(n.Fragment,null,o.a.createElement(x,{logout:this.logout}),o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-2"}),o.a.createElement("div",{className:"col-md-7"},o.a.createElement(R,{groupAmount:this.state.groupAmount,user:this.props.user,amount:this.state.amount,reload:this.getGroup,groups:this.state.groups}),o.a.createElement(W,{groups:this.state.groups,items:this.state.groups.items}),o.a.createElement(I,{user:this.props.user,onClick:this.retrieveAmount}),this.state.groups.map(function(t,a){return o.a.createElement(q,{calculateTotal:e.calculateTotal,groupAmount:e.retrieveGroupAmount,deleteGroup:e.deleteGroup,reload:e.getGroup,group:t,i:a,user:e.props.user})}),o.a.createElement("div",{className:"card addGroup mb-3"},o.a.createElement("div",{className:"card-body"},o.a.createElement("span",{style:{cursor:"pointer"},onClick:this.createGroup},o.a.createElement("i",{className:"fas fa-plus text"}),o.a.createElement("strong",null,"Add Group"))))),o.a.createElement("div",{className:"col-md-3"}))))}}]),t}(n.Component),Y=(a(266),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){C.a.get("".concat("")).then(function(e){console.log(e.data)})}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("div",{id:"body"},o.a.createElement("nav",{className:"navbar navbar-dark bg-transparent"},o.a.createElement("div",{className:"navbar-brand"},o.a.createElement("img",{className:"logo",src:"/images/logo.png",alt:"logo"})),o.a.createElement("button",{className:"btn btn-primary"},"Start")),o.a.createElement("header",{className:"masthead"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-7 my-auto"},o.a.createElement("div",{className:"header-content mx-auto"},o.a.createElement("h1",{className:"mb-5"},"New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!"),o.a.createElement("a",{href:"#download",className:"btn btn-outline btn-xl"},"Start Now for Free!"))),o.a.createElement("div",{className:"col-lg-5 my-auto"},o.a.createElement("div",{className:"device-container"},o.a.createElement("div",{className:"device-mockup iphone6_plus portrait white"},o.a.createElement("div",{className:"device"},o.a.createElement("div",{className:"screen"},o.a.createElement("img",{src:"/images/iphone.png",className:"img-fluid",alt:!0})),o.a.createElement("div",{className:"button"}))))))))))}}]),t}(n.Component)),J=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={user:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;v.auth().onAuthStateChanged(function(t){t?e.setState({user:t},function(){C.a.post("".concat("","/api/newUser"),{email:e.state.user.email,uid:e.state.user.uid}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}):e.setState({user:!1})})}},{key:"render",value:function(){var e=this;return console.log("THIS IS FROM APP.JS=============",this.state.user),o.a.createElement(n.Fragment,null,null===this.state.user?o.a.createElement(h.a,{className:"PageLoader",type:"spinningBubbles",color:"green",height:"14%",width:"14%"}):!1===this.state.user?o.a.createElement(n.Fragment,null,o.a.createElement(d.d,null,o.a.createElement(d.b,{exact:!0,path:"/login",component:O}),o.a.createElement(d.b,{exact:!0,path:"/signup",component:k}),o.a.createElement(d.b,{exact:!0,path:"/",component:Y}))):o.a.createElement(n.Fragment,null,o.a.createElement(d.d,null,o.a.createElement(d.b,{exact:!0,path:"/",user:this.state.user,component:function(t){return o.a.createElement($,Object.assign({},t,{user:e.state.user.uid}))}}))))}}]),t}(n.Component);r.a.render(o.a.createElement(y.a,null,o.a.createElement(J,null)),document.getElementById("root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.3f1d2a0f.chunk.js.map