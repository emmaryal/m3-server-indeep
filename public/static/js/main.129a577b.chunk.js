(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{29:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n.n(r),o=n(45),i=n.n(o),c=n(13),l=n(6),h=n(8),d=n(11),u=n(10),j=(n(29),n(12)),p=n(24),b=n(15),m=n.n(b),g=new(function(){function e(){Object(l.a)(this,e),this.auth=m.a.create({baseURL:"https://indeep.herokuapp.com",withCredentials:!0})}return Object(h.a)(e,[{key:"signup",value:function(e,t,n,a){return this.auth.post("/auth/signup",{email:e,name:t,password:n,profilePic:a}).then((function(e){return e.data}))}},{key:"login",value:function(e,t){return this.auth.post("/auth/login",{email:e,password:t}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.get("/auth/logout").then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),O=s.a.createContext(),x=O.Consumer,f=O.Provider,v=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoggedIn:!1,isLoading:!0,user:null},e.signup=function(t,n,a,r){g.signup(t,n,a,r).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.login=function(t,n){g.login(t,n).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.logout=function(){g.logout().then((function(){return e.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;g.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,n=e.isLoading,r=e.user,s=this.signup,o=this.login,i=this.logout;return n?Object(a.jsx)("p",{children:"Loading"}):Object(a.jsx)(f,{value:{isLoggedIn:t,isLoading:n,user:r,signup:s,login:o,logout:i},children:this.props.children})}}]),n}(s.a.Component),C=function(e){return function(t){Object(d.a)(r,t);var n=Object(u.a)(r);function r(){return Object(l.a)(this,r),n.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){var t=this;return Object(a.jsx)(x,{children:function(n){var r=n.isLoggedIn,s=n.isLoading,o=n.user,i=n.signup,c=n.login,l=n.logout;return Object(a.jsx)(e,Object(p.a)(Object(p.a)({},t.props),{},{isLoggedIn:r,isLoading:s,user:o,signup:i,login:c,logout:l}))}})}}]),r}(s.a.Component)},y=C(function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={profilePlaceholder:"https://image.flaticon.com/icons/png/512/64/64572.png"},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("nav",{className:"navbar",children:[this.props.isLoggedIn?Object(a.jsx)(c.b,{to:"/private",id:"home-btn",children:Object(a.jsx)("img",{className:"rotate",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUxokMH9aY_2qzJ6F6M-rBq7oL56zwA2uWw&usqp=CAU",alt:"record"})}):Object(a.jsx)(c.b,{to:"/",id:"home-btn",children:Object(a.jsx)("img",{className:"rotate",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUxokMH9aY_2qzJ6F6M-rBq7oL56zwA2uWw&usqp=CAU",alt:"record"})}),Object(a.jsx)("h1",{className:"indeepTitle",children:"Indeep Records"}),Object(a.jsx)("div",{className:"rightnav",children:this.props.isLoggedIn?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:this.props.user.profilePic?Object(a.jsx)("img",{style:{margin:"20px"},src:this.props.user.profilePic,alt:"profile pic",width:"50",height:"60"}):Object(a.jsx)("img",{style:{margin:"20px"},src:this.state.profilePlaceholder,alt:"profile pic",width:"50",height:"60"})}),Object(a.jsx)("button",{onClick:this.props.logout,children:"Logout"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(c.b,{to:"/login",children:Object(a.jsx)("button",{className:"navbar-button",children:"Login"})}),Object(a.jsx)("br",{}),Object(a.jsx)(c.b,{to:"/signup",children:Object(a.jsx)("button",{className:"navbar-button",children:"Sign Up"})})]})})]})}}]),n}(r.Component)),w=n(23),S=n(18),P=n(2),L=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={search:""},e.handleInput=function(t){var n=t.target,a=n.value,r=n.name;e.setState(Object(S.a)({},r,a)),e.props.filterRecords(a)},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)(P.a,{children:Object(a.jsx)(P.a.Group,{controlId:"formBasicSearch",children:Object(a.jsx)(P.a.Control,{type:"text",name:"search",value:this.state.search,placeholder:"Search",onChange:this.handleInput})})})}}]),n}(r.Component),k=n(20),R=n(9),I=n(26),F=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e.getCurrentUser=function(){g.me().then((function(t){var n=t.email;e.setState({currentUser:n})})).catch((function(e){return console.log(e)}))},e.getNewReleases=function(){var t=Object(w.a)(e.props.newReleases);console.log(e.props);var n=t.slice(Math.max(t.length-10,0));e.setState({newReleases:n})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getCurrentUser(),this.getNewReleases()}},{key:"render",value:function(){this.props.newReleases;return Object(a.jsx)("div",{children:this.state.newReleases?this.state.newReleases.map((function(e){return Object(a.jsxs)("div",{className:"chart-list",children:[Object(a.jsx)(c.b,{to:"/records/".concat(e._id),children:Object(a.jsx)("p",{className:"chart-text",children:e.title})}),Object(a.jsxs)("span",{children:["artist: ",e.artist," "]}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:["label:",e.label," "]}),Object(a.jsxs)("p",{children:["Price: ",e.price,"\u20ac"]})]},e._id)})):Object(a.jsx)("h1",{children:"loading"})})}}]),n}(r.Component),N=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={firstThreeArray:[1],lastNumber:"",showEllipis:!0},e.prev=function(){e.props.currentPage>1&&e.props.changeCurrentPage(e.props.currentPage-1)},e.next=function(){e.props.currentPage<e.props.totalPages&&e.props.changeCurrentPage(e.props.currentPage+1)},e.changeCurrentPage=function(t){e.props.changeCurrentPage(t)},e.showEllipsis=function(){if(e.state.showEllipis)return Object(a.jsx)("a",{children:Object(a.jsx)("li",{children:"..."})})},e.isactive=function(t){return e.props.currentPage==t},e.showLastPage=function(){if(e.props.currentPage!==e.props.totalPages)return Object(a.jsx)("a",{className:e.isactive(e.props.totalPages)?"is-active":"",onClick:function(){e.changeCurrentPage(e.props.totalPages)},children:Object(a.jsx)("li",{children:e.props.totalPages})})},e.showPrev=function(){if(1!=e.props.currentPage)return Object(a.jsx)("a",{onClick:e.prev,children:Object(a.jsx)("li",{children:"<"})})},e.showNext=function(){if(e.props.currentPage<e.props.totalPages)return Object(a.jsx)("a",{onClick:e.next,children:Object(a.jsx)("li",{children:">"})})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){if(this.props.totalPages<=5){for(var e=[],t=1;t<=this.props.totalPages;t++)e.push(t);this.setState({firstThreeArray:e})}else{if(this.props.currentPage<3)this.setState({firstThreeArray:[1,2,3]});else{e=[];for(var n=1,a=this.props.currentPage;a>=0&&(e.push(a),3!==n);a--)n++;e.reverse(),this.setState({firstThreeArray:e})}this.setState({lastNumber:this.props.totalPages})}}},{key:"componentWillReceiveProps",value:function(e){if(e.totalPages<=5){for(var t=[],n=1;n<=e.totalPages;n++)t.push(n);this.setState({firstThreeArray:t})}else if(this.props.currentPage!==e.currentPage||this.props.totalPages!==e.totalPages){if(e.currentPage<3)this.setState({firstThreeArray:[1,2,3]});else(t=[]).push(e.currentPage-1),t.push(e.currentPage),e.currentPage+1<e.totalPages&&t.push(e.currentPage+1),e.currentPage==e.totalPages-2||e.currentPage==e.totalPages-1||e.currentPage==e.totalPages?this.setState({showEllipis:!1}):this.setState({showEllipis:!0}),this.setState({firstThreeArray:t});this.setState({lastNumber:e.totalPages})}}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:this.props.theme+" pagination",children:Object(a.jsxs)("ul",{children:[this.showPrev(),this.props.totalPages<=5?this.state.firstThreeArray.map((function(t,n){return Object(a.jsx)("a",{className:e.isactive(t)?"is-active":"",onClick:function(){e.changeCurrentPage(t)},children:Object(a.jsx)("li",{children:t})},n)})):Object(a.jsxs)(s.a.Fragment,{children:[this.state.firstThreeArray.map((function(t,n){return Object(a.jsx)("a",{className:e.isactive(t)?"is-active":"",onClick:function(){e.changeCurrentPage(t)},children:Object(a.jsx)("li",{children:t})},n)})),this.showEllipsis(),this.showLastPage()]}),this.showNext()]})})}}]),n}(s.a.Component),A=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={listOfRecords:[],currentRecords:[],newReleases:[],currentPage:1,currentUser:null},e.changeCurrentPage=function(t){e.setState({currentPage:t})},e.getAllRecords=function(){m.a.get("".concat("https://indeep.herokuapp.com","/api/records/")).then((function(t){e.setState({listOfRecords:t.data})}))},e.getCurrentUser=function(){g.me().then((function(t){var n=t.email;e.setState({currentUser:n})})).catch((function(e){return console.log(e)}))},e.filterRecords=function(t){var n=e.state.listOfRecords.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())||e.artist.toLowerCase().includes(t.toLowerCase())||e.label.toLowerCase().includes(t.toLowerCase())}));e.setState({listOfRecords:n})},e.handleRandom=function(){var t=Math.floor(e.state.listOfRecords.length*Math.random()),n=e.state.listOfRecords[t];e.setState({listOfRecords:n}),console.log(t),console.log(n),e.filterRecords(n.title)},e.handleSortByTitle=function(){var t=Object(w.a)(e.state.listOfRecords);t.sort((function(e,t){var n=e.title.toLowerCase(),a=t.title.toLowerCase();return n<a?-1:n>a?1:0})),e.setState({listOfRecords:t})},e.handleSortByArtist=function(){var t=Object(w.a)(e.state.listOfRecords);t.sort((function(e,t){var n=e.artist.toLowerCase(),a=t.artist.toLowerCase();return n<a?-1:n>a?1:0})),e.setState({listOfRecords:t})},e.handleSortByLabel=function(){var t=Object(w.a)(e.state.listOfRecords);t.sort((function(e,t){var n=e.label.toLowerCase(),a=t.label.toLowerCase();return n<a?-1:n>a?1:0})),e.setState({listOfRecords:t})},e.handleSortByAscPrice=function(){var t=Object(w.a)(e.state.listOfRecords);t.sort((function(e,t){var n=e.price,a=t.price;return n<a?-1:n>a?1:0})),e.setState({listOfRecords:t})},e.handleSortByDesPrice=function(){var t=Object(w.a)(e.state.listOfRecords);t.sort((function(e,t){var n=e.price,a=t.price;return n<a?1:n>a?-1:0})),e.setState({listOfRecords:t})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getAllRecords(),this.getCurrentUser()}},{key:"render",value:function(){var e=this,t=this.state.listOfRecords;t.length;return Object(a.jsxs)("div",{children:[Object(a.jsx)(L,{filterRecords:this.filterRecords}),Object(a.jsx)(k.a,{className:"mb-2",variant:"outline secondary",onClick:this.getAllRecords,children:"Show All"}),Object(a.jsx)(k.a,{className:"mb-2",variant:"outline secondary",onClick:this.handleRandom,children:"Record of the Day"}),Object(a.jsx)(k.a,{className:"mb-2",variant:"outline secondary",onClick:this.handleSortByTitle,children:"Sort By Title"}),Object(a.jsx)(k.a,{className:"mb-2",variant:"outline secondary",onClick:this.handleSortByArtist,children:"Sort By Artist"}),Object(a.jsx)(k.a,{className:"mb-2",variant:"outline secondary",onClick:this.handleSortByLabel,children:"Sort By Label"}),Object(a.jsx)(k.a,{className:"mb-2",variant:"outline secondary",onClick:this.handleSortByAscPrice,children:"Sort By Price (ascending)"}),Object(a.jsx)(k.a,{className:"mb-2",variant:"outline secondary",onClick:this.handleSortByDesPrice,children:"Sort By Price (descending)"}),Object(a.jsx)(I.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("p",{children:["current Page: ",Object(a.jsx)("strong",{children:this.state.currentPage})]}),Object(a.jsx)(N,{currentPage:this.state.currentPage,itemsCountPerPage:10,totalItemsCount:1910,totalPages:20,changeCurrentPage:this.changeCurrentPage,theme:"circle"})]})})}),Object(a.jsxs)(I.a,{children:[Object(a.jsx)(R.a,{sm:10,children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{class:"lds-ring",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]}),t.map((function(t){return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)(I.a,{children:[Object(a.jsxs)(R.a,{sm:8,children:[Object(a.jsx)(c.b,{to:"/records/".concat(t._id),children:Object(a.jsxs)("h5",{className:"indeepText",children:["Record Title : ",t.title]})}),Object(a.jsxs)("p",{children:["Artist : ",t.artist," "]}),Object(a.jsxs)("p",{children:["Label : ",t.label]}),Object(a.jsxs)("p",{children:["Price: ",t.price,"\u20ac"]})]}),Object(a.jsxs)(R.a,{sm:4,children:[Object(a.jsx)("img",{style:{width:"100px",padding:"10px"},src:"https://crossedcombs.typepad.com/.a/6a00e00980a6f38833017c37ab6210970b-pi",alt:"record"}),Object(a.jsx)("img",{style:{width:"100px",padding:"10px"},src:"https://crossedcombs.typepad.com/.a/6a00e00980a6f38833017c37ab6210970b-pi",alt:"record"}),"admin"===e.state.currentUser?Object(a.jsx)(c.b,{to:"/records/edit/".concat(t._id),children:Object(a.jsx)("p",{children:"Update or Delete this record"})}):null]})," "]})},t._id)}))]})}),Object(a.jsxs)(R.a,{sm:2,children:[Object(a.jsx)("h3",{children:"new releases"}),this.state.listOfRecords[0]?Object(a.jsx)(F,{newReleases:this.state.listOfRecords}):null]})]})]})}}]),n}(r.Component);var U=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(A,{})})},B=C(function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",name:"",password:"",profilePic:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.email,r=n.name,s=n.password,o=n.profilePic;e.props.signup(a,r,s,o)},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(S.a)({},a,r))},e.handleFileUpload=function(t){console.log("The file to be uploaded is: ",t.target.files);var n=t.target.files[0],a=new FormData;a.append("profilePic",n),m.a.post("".concat("https://indeep.herokuapp.com","/auth/upload"),a,{withCredentials:!0}).then((function(t){console.log("response is: ",t),e.setState({profilePic:t.data.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.name,r=e.password,s=e.profilePic;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Sign Up"}),Object(a.jsxs)(P.a,{onSubmit:this.handleFormSubmit,children:[Object(a.jsxs)(P.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)(P.a.Control,{type:"text",name:"email",value:t,onChange:this.handleChange,id:"exampleInputEmail1",class:"form-control","aria-describedby":"emailHelp"}),Object(a.jsx)("label",{children:"Name:"}),Object(a.jsx)(P.a.Control,{type:"text",name:"name",value:n,onChange:this.handleChange,id:"exampleInputName1",class:"form-control","aria-describedby":"nameHelp"}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)(P.a.Control,{type:"password",name:"password",value:r,onChange:this.handleChange,id:"exampleInputPassword1",class:"form-control","aria-describedby":"passwordHelp"}),Object(a.jsx)("label",{children:"Profile Image"}),Object(a.jsx)(P.a.Control,{name:"profilePic",type:"file",onChange:this.handleFileUpload}),Object(a.jsx)("span",{children:Object(a.jsx)("img",{style:{width:"100px"},src:s&&s,alt:""})})]}),Object(a.jsx)("input",{variant:"secondary",type:"submit",value:"Signup"})]}),Object(a.jsx)("p",{children:"Already have account?"}),Object(a.jsx)(c.b,{to:"/login",children:" Login"})]})}}]),n}(r.Component)),G=C(function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.email,r=n.password;e.props.login(a,r)},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(S.a)({},a,r))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsxs)(P.a,{className:"forms-input",onSubmit:this.handleFormSubmit,children:[Object(a.jsxs)(P.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)(P.a.Control,{type:"text",name:"email",value:t,onChange:this.handleChange,id:"exampleInputEmail1",className:"form-control","aria-describedby":"emailHelp"}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)(P.a.Control,{type:"password",name:"password",value:n,id:"exampleInputPassword1",onChange:this.handleChange,className:"form-control","aria-describedby":"passwordHelp"})]}),Object(a.jsx)("input",{variant:"secondary",type:"submit",value:"Login"})]})]})}}]),n}(r.Component)),T=C(function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={currentUser:null},e.getCurrentUser=function(){g.me().then((function(t){var n=t.email;console.log("data from promise:",t),e.setState({currentUser:n}),console.log("this.state:",e.state)})).catch((function(e){return console.log(e)}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getCurrentUser()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:["admin"===this.state.currentUser?Object(a.jsxs)(c.b,{to:"/records/add",children:[Object(a.jsx)("button",{className:"navbar-button",children:"Add Record"})," "]}):Object(a.jsx)("div",{children:Object(a.jsxs)("h4",{children:["Welcome ",this.props.user&&this.props.user.email]})}),Object(a.jsx)("br",{}),Object(a.jsx)(A,{})]})}}]),n}(r.Component)),D=new function e(){var t=this;Object(l.a)(this,e),this.getAll=function(){return t.api.get("/records")},this.getOneUser=function(e){return t.api.get("/users/".concat(e)).then((function(e){return e.data}))},this.getOne=function(e){return t.api.get("/records/".concat(e)).then((function(e){return e.data}))},this.create=function(e){return t.api.post("/records",e)},this.updateFave=function(e,n){return t.api.put("/users/".concat(e,"/records/").concat(n))},this.removeFave=function(e,n){return t.api.put("/records/".concat(e,"/users/").concat(n))},this.deleteOne=function(e){return t.api.delete("/records/".concat(e))},this.api=m.a.create({baseURL:"https://indeep.herokuapp.com/api",withCredentials:!0})},E=n(25),M=n(22),q=n(27),_=n(33),W=n.n(_),H=n(47),z={style:{base:{color:"#303238",fontSize:"16px",fontFamily:"sans-serif",fontSmoothing:"antialiased","::placeholder":{color:"#CFD7DF"}},invalid:{color:"#e5424d",":focus":{color:"#303238"}}}};var X=function(){return Object(a.jsxs)("label",{children:["Card details",Object(a.jsx)(M.CardElement,{options:z})]})},J=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(){var t=Object(H.a)(W.a.mark((function t(n){var a,r,s,o,i;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.props,r=a.stripe,s=a.elements,r&&s){t.next=4;break}return t.abrupt("return");case 4:return o=s.getElement(M.CardElement),t.next=7,r.createToken(o);case 7:(i=t.sent).error?console.log(i.error.message):console.log(i.token);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{class:"product-info",children:[Object(a.jsx)("h3",{className:"product-title",children:this.props.recordTitle}),Object(a.jsx)("h4",{className:"product-price",children:this.props.recordPrice})]}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)(X,{}),Object(a.jsx)("button",{disabled:!this.props.stripe,className:"btn-pay",children:"Buy Now"})]})]})}}]),n}(s.a.Component);function Q(){return Object(a.jsx)(M.ElementsConsumer,{children:function(e){var t=e.stripe,n=e.elements;return Object(a.jsx)(J,{stripe:t,elements:n})}})}var Y=Object(q.a)("pk_test_51HykoTFq2ycg13FNvuYLaF0ahXb5GLoqRe2KTQSQsWbCRzdSPw9NBIIUclD8i3EvDSG3e7kqU5IwdBSI8bXhXeg800d9VLE2v4"),K=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={id:"",recordId:"",listingId:"",title:" ",artist:" ",format:"",image:"",label:"",mediaCondition:"",sleeveCondition:"",weight:"",catno:"",comments:"",price:0,defaultImg:"./../images/recordPlaceholderImage.jpeg",favoritedBy:[],count:0,currentUser:null,isFavourite:!1},e.getCurrentSessionUser=function(){g.me().then((function(t){var n=t._id;console.log("id of current session user",n),console.log("data from promise:",t),e.setState({currentUser:n}),console.log("this.state:",e.state),D.getOneUser(n).then((function(t){console.log("currentUser from DB: ",t);var n=t._id;e.setState({currentUser:n}),console.log("this.state.currentUser:",e.state.currentUser),console.log("userId:",n)})).catch((function(e){return console.log(e)}))}))},e.getSingleRecord=function(){var t=e.props.match.params.id;console.log("record id:",t),D.getOne(t).then((function(t){console.log("data from getsinglerecord",t);var n=t.id,a=t.listingId,r=t.title,s=t.artist,o=t.format,i=t.image,c=t.label,l=t.mediaCondition,h=t.sleeveCondition,d=t.weight,u=t.catno,j=t.comments,p=t.price,b=t.favoritedBy;e.setState({id:n,listingId:a,title:r,artist:s,format:o,image:i,label:c,mediaCondition:l,sleeveCondition:h,weight:d,catno:u,comments:j,price:p,favoritedBy:b})})).catch((function(e){return console.log(e)}))},e.addFavourite=function(){e.setState({isFavourite:!e.state.isFavourite});var t=e.state.currentUser,n=e.props.match.params.id,a=n;console.log("isFavourite:",e.state.isFavourite),console.log("record id:",n),console.log("userid:",t),!1===e.state.isFavourite?D.updateFave(t,a).then().catch((function(e){return console.log(e)})):D.removeFave(a,t).then().catch((function(e){return console.log(e)}))},e.setPopularity=function(e){},e.setCheckout=function(){},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getSingleRecord(),this.getCurrentSessionUser()}},{key:"render",value:function(){return Object(a.jsx)(E.a,{className:"card",children:Object(a.jsxs)(I.a,{children:[Object(a.jsxs)(R.a,{className:"details-labels",lg:6,children:[Object(a.jsx)("h3",{children:this.state.title}),Object(a.jsx)("h4",{children:this.state.artist}),Object(a.jsxs)("p",{className:"details-labels",children:["label: ",this.state.label]}),Object(a.jsxs)("p",{children:["format: ",this.state.format]}),Object(a.jsxs)("p",{children:["label: ",this.state.label]}),Object(a.jsxs)("p",{children:["media condition: ",this.state.mediaCondition]}),Object(a.jsxs)("p",{children:["sleeve condition: ",this.state.sleeveCondition]}),Object(a.jsxs)("p",{children:["weight: ",this.state.weight,"g"]}),Object(a.jsxs)("p",{children:["catalogue no.: ",this.state.catno]}),Object(a.jsxs)("p",{children:["comments: ",this.state.comments]}),Object(a.jsxs)("div",{children:["price: ",this.state.price,"\u20ac"]}),Object(a.jsx)("br",{}),Object(a.jsx)(c.b,{to:"/",children:"see all"})]}),Object(a.jsxs)(R.a,{md:3,children:[Object(a.jsx)("img",{style:{width:"200px"},src:"https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/money/personal-finance/making-money/selling-vinyl-shutterstock-234267241.jpg",alt:"record"}),Object(a.jsx)("img",{style:{width:"200px"},src:"https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/money/personal-finance/making-money/selling-vinyl-shutterstock-234267241.jpg",alt:"record"}),Object(a.jsx)("br",{}),this.state.isFavourite?Object(a.jsx)("button",{onClick:this.addFavourite,children:"Remove from favourites"}):Object(a.jsx)("button",{onClick:this.addFavourite,children:"Add to favourites"})]}),Object(a.jsx)(R.a,{sm:3,children:Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("div",{className:"product",children:Object(a.jsx)("div",{children:Object(a.jsx)(M.Elements,{stripe:Y,children:Object(a.jsx)(Q,{recordTitle:this.state.title,recordPrice:this.state.price})})})})})})]})})}}]),n}(r.Component),V=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=r.state,n=t.title,s=t.artist,o=t.format,i=t.image,c=t.label,l=t.mediaCondition,h=t.sleeveCondition,d=t.weight,u=t.comments,p=t.catno,b=t.price;return m.a.post("".concat("https://indeep.herokuapp.com","/api/records"),{title:n,artist:s,format:o,image:i,label:c,mediaCondition:l,sleeveCondition:h,weight:d,comments:u,catno:p,price:b},{withCredentials:!0}).then((function(){r.setState({title:"",artist:"",format:"",image:"",label:"",mediaCondition:"",sleeveCondition:"",weight:"",comments:"",catno:"",price:0}),r.props.history.push("/")})).catch((function(e){return console.log(e)})),Object(a.jsx)(j.a,{to:"/"})},r.handleChange=function(e){var t=e.target,n=t.name,a=t.value;r.setState(Object(S.a)({},n,a))},r.state={title:"",artist:"",format:"",image:"",label:"",mediaCondition:"",sleeveCondition:"",weight:"",comments:"",catno:"",price:0},r}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)(E.a,{className:"card",children:Object(a.jsxs)(P.a,{className:"forms-input",onSubmit:this.handleFormSubmit,children:[Object(a.jsxs)(P.a.Row,{children:[Object(a.jsxs)(P.a.Group,{as:R.a,controlId:"exampleForm.ControlTitle",children:[Object(a.jsx)(P.a.Label,{children:"Title:"}),Object(a.jsx)(P.a.Control,{type:"text",name:"title",value:this.state.title,onChange:this.handleChange})]}),Object(a.jsxs)(P.a.Group,{as:R.a,controlId:"exampleForm.ControlLabel",children:[Object(a.jsx)(P.a.Label,{children:"Artist:"}),Object(a.jsx)(P.a.Control,{type:"text",name:"artist",value:this.state.artist,onChange:this.handleChange})]})]}),Object(a.jsxs)(P.a.Row,{children:[Object(a.jsxs)(P.a.Group,{as:R.a,controlId:"exampleForm.ControlmediaCond",children:[Object(a.jsx)(P.a.Label,{children:"Media Condition:"}),Object(a.jsx)(P.a.Control,{type:"text",name:"mediaCondition",value:this.state.mediaCondition,onChange:this.handleChange})]}),Object(a.jsxs)(P.a.Group,{as:R.a,controlId:"exampleForm.ControlsleeveCond",children:[Object(a.jsx)(P.a.Label,{children:"Sleeve Condition:"}),Object(a.jsx)(P.a.Control,{type:"text",name:"sleeveCondition",value:this.state.sleeveCondition,onChange:this.handleChange})]})]}),Object(a.jsxs)(P.a.Row,{children:[Object(a.jsxs)(P.a.Group,{as:R.a,controlId:"exampleForm.ControlFormat",children:[Object(a.jsx)(P.a.Label,{children:"Format:"}),Object(a.jsx)(P.a.Control,{type:"text",name:"format",value:this.state.format,onChange:this.handleChange})]}),Object(a.jsxs)(P.a.Group,{as:R.a,controlId:"exampleForm.ControlWeight",children:[Object(a.jsx)(P.a.Label,{children:"Weight (grammes):"}),Object(a.jsx)(P.a.Control,{type:"text",name:"weight",value:this.state.weight,onChange:this.handleChange})]}),Object(a.jsxs)(P.a.Group,{as:R.a,controlId:"exampleForm.ControlCatNo",children:[Object(a.jsx)(P.a.Label,{children:"Catalogue Number:"}),Object(a.jsx)(P.a.Control,{type:"text",name:"catno",value:this.state.catno,onChange:this.handleChange})]})]}),Object(a.jsxs)(P.a.Row,{children:[Object(a.jsxs)(P.a.Group,{as:R.a,md:8,controlId:"exampleForm.ControlComments",children:[Object(a.jsx)(P.a.Label,{children:"Comments:"}),Object(a.jsx)(P.a.Control,{type:"textarea",name:"comments",value:this.state.comments,onChange:this.handleChange})]}),Object(a.jsxs)(P.a.Group,{as:R.a,md:4,controlId:"exampleForm.ControlPrice",children:[Object(a.jsx)(P.a.Label,{children:"Price (\u20ac):"}),Object(a.jsx)(P.a.Control,{id:"price-field",type:"text",name:"price",value:this.state.price,onChange:this.handleChange})]})]}),Object(a.jsx)("input",{variant:"secondary",type:"submit",value:"Add Record"})]})})}}]),n}(r.Component),Z=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={title:"",artist:"",format:"",label:"",mediaCondition:"",sleeveCondition:"",weight:"",catno:"",comments:"",image:"",price:0},e.getSingleRecord=function(){var t=e.props.match.params.id;console.log("id:",t),D.getOne(t).then((function(t){console.log(t);var n=t.listingId,a=t.title,r=t.artist,s=t.format,o=t.image,i=t.label,c=t.mediaCondition,l=t.sleeveCondition,h=t.weight,d=t.catno,u=t.comments,j=t.price;e.setState({listingId:n,title:a,artist:r,format:s,image:o,label:i,mediaCondition:c,sleeveCondition:l,weight:h,catno:d,comments:u,price:j})})).catch((function(e){return console.log(e)}))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.title,r=n.artist,s=n.format,o=n.label,i=n.mediaCondition,c=n.sleeveCondition,l=n.weight,h=n.catno,d=n.image,u=n.comments,j=n.price,p=e.props.match.params.id;m.a.put("".concat("https://indeep.herokuapp.com","/api/records/").concat(p),{title:a,artist:r,format:s,label:o,mediaCondition:i,sleeveCondition:c,weight:l,catno:h,image:d,comments:u,price:j}).then((function(){e.getSingleRecord(),e.props.history.push("/")})).catch((function(e){return console.log(e)}))},e.deleteRecord=function(){var t=e.props.match.params.id;m.a.delete("".concat("https://indeep.herokuapp.com","/api/records/").concat(t)).then((function(){return e.props.history.push("/")})).catch((function(e){return console.log(e)}))},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(S.a)({},a,r))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getSingleRecord()}},{key:"render",value:function(){return Object(a.jsx)(E.a,{className:"card",children:Object(a.jsxs)(P.a,{className:"forms-input",onSubmit:this.handleFormSubmit,children:[Object(a.jsxs)(P.a.Row,{children:[Object(a.jsxs)(P.a.Group,{as:R.a,controlId:"exampleForm.ControlTitle",children:[Object(a.jsx)(P.a.Label,{children:"Title:"}),Object(a.jsx)(P.a.Control,{type:"text",name:"title",value:this.state.title,onChange:this.handleChange})]}),Object(a.jsxs)(P.a.Group,{as:R.a,controlId:"exampleForm.ControlLabel",children:[Object(a.jsx)(P.a.Label,{children:"Artist:"}),Object(a.jsx)(P.a.Control,{type:"text",name:"artist",value:this.state.artist,onChange:this.handleChange})]})]}),Object(a.jsxs)(P.a.Row,{children:[Object(a.jsxs)(P.a.Group,{as:R.a,controlId:"exampleForm.ControlmediaCond",children:[Object(a.jsx)(P.a.Label,{children:"Media Condition:"}),Object(a.jsx)(P.a.Control,{type:"text",name:"mediaCondition",value:this.state.mediaCondition,onChange:this.handleChange})]}),Object(a.jsxs)(P.a.Group,{as:R.a,controlId:"exampleForm.ControlsleeveCond",children:[Object(a.jsx)(P.a.Label,{children:"Sleeve Condition:"}),Object(a.jsx)(P.a.Control,{type:"text",name:"sleeveCondition",value:this.state.sleeveCondition,onChange:this.handleChange})]})]}),Object(a.jsxs)(P.a.Row,{children:[Object(a.jsxs)(P.a.Group,{as:R.a,controlId:"exampleForm.ControlFormat",children:[Object(a.jsx)(P.a.Label,{children:"Format:"}),Object(a.jsx)(P.a.Control,{type:"text",name:"format",value:this.state.format,onChange:this.handleChange})]}),Object(a.jsxs)(P.a.Group,{as:R.a,controlId:"exampleForm.ControlWeight",children:[Object(a.jsx)(P.a.Label,{children:"Weight (grammes):"}),Object(a.jsx)(P.a.Control,{type:"text",name:"weight",value:this.state.weight,onChange:this.handleChange})]}),Object(a.jsxs)(P.a.Group,{as:R.a,controlId:"exampleForm.ControlCatNo",children:[Object(a.jsx)(P.a.Label,{children:"Catalogue Number:"}),Object(a.jsx)(P.a.Control,{type:"text",name:"catno",value:this.state.catno,onChange:this.handleChange})]})]}),Object(a.jsxs)(P.a.Row,{children:[Object(a.jsxs)(P.a.Group,{as:R.a,md:8,controlId:"exampleForm.ControlComments",children:[Object(a.jsx)(P.a.Label,{children:"Comments:"}),Object(a.jsx)(P.a.Control,{type:"textarea",name:"comments",value:this.state.comments,onChange:this.handleChange})]}),Object(a.jsxs)(P.a.Group,{as:R.a,md:4,controlId:"exampleForm.ControlPrice",children:[Object(a.jsx)(P.a.Label,{children:"Price (\u20ac):"}),Object(a.jsx)(P.a.Control,{id:"price-field",type:"text",name:"price",value:this.state.price,onChange:this.handleChange})]})]})," ",Object(a.jsx)("input",{variant:"secondary",type:"submit",value:"Update Record"}),Object(a.jsx)("br",{}),Object(a.jsx)(k.a,{variant:"secondary",onClick:this.deleteRecord,children:"Delete Record"})]})})}}]),n}(r.Component),$=Object(j.g)(Z);var ee=C((function(e){var t=e.isLoggedIn,n=e.isLoading,r=e.component,s=e.exact,o=e.path;return n?"Loading":Object(a.jsx)(j.b,{exact:s,path:o,render:function(e){return t?Object(a.jsx)(j.a,{to:"/private"}):t?void 0:Object(a.jsx)(r,Object(p.a)({},e))}})}));var te=C((function(e){var t=e.isLoggedIn,n=e.isLoading,r=e.component,s=e.exact,o=e.path;return n?"Loading":Object(a.jsx)(j.b,{exact:s,path:o,render:function(e){return t?t?Object(a.jsx)(r,Object(p.a)({},e)):void 0:Object(a.jsx)(j.a,{to:"/login"})}})})),ne=(Object(q.a)("pk_test_51HykoTFq2ycg13FNvuYLaF0ahXb5GLoqRe2KTQSQsWbCRzdSPw9NBIIUclD8i3EvDSG3e7kqU5IwdBSI8bXhXeg800d9VLE2v4"),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(y,{}),Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{exact:!0,path:"/",component:U}),Object(a.jsx)(te,{exact:!0,path:"/records/add",component:V}),Object(a.jsx)(j.b,{exact:!0,path:"/records/:id",component:K}),Object(a.jsx)(ee,{exact:!0,path:"/signup",component:B}),Object(a.jsx)(ee,{exact:!0,path:"/login",component:G}),Object(a.jsx)(te,{exact:!0,path:"/private",component:T}),Object(a.jsx)(te,{exact:!0,path:"/records/edit/:id",component:$})]})]})}}]),n}(r.Component));n(78);i.a.render(Object(a.jsx)(c.a,{children:Object(a.jsx)(v,{children:Object(a.jsx)(ne,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.129a577b.chunk.js.map