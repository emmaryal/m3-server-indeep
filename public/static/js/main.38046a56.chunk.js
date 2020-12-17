(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{27:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n.n(r),c=n(42),i=n.n(c),o=n(12),l=n(7),d=n(9),h=n(11),j=n(10),u=(n(27),n(13)),b=n(23),p=n(15),m=n.n(p),O=new(function(){function e(){Object(l.a)(this,e),this.auth=m.a.create({baseURL:"https://indeep.herokuapp.com",withCredentials:!0})}return Object(d.a)(e,[{key:"signup",value:function(e,t,n,a){return this.auth.post("/auth/signup",{email:e,name:t,password:n,profilePic:a}).then((function(e){return e.data}))}},{key:"login",value:function(e,t){return this.auth.post("/auth/login",{email:e,password:t}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.get("/auth/logout").then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),x=s.a.createContext(),g=x.Consumer,f=x.Provider,v=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoggedIn:!1,isLoading:!0,user:null},e.signup=function(t,n,a,r){O.signup(t,n,a,r).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.login=function(t,n){O.login(t,n).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.logout=function(){O.logout().then((function(){return e.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,n=e.isLoading,r=e.user,s=this.signup,c=this.login,i=this.logout;return n?Object(a.jsx)("p",{children:"Loading"}):Object(a.jsx)(f,{value:{isLoggedIn:t,isLoading:n,user:r,signup:s,login:c,logout:i},children:this.props.children})}}]),n}(s.a.Component),C=function(e){return function(t){Object(h.a)(r,t);var n=Object(j.a)(r);function r(){return Object(l.a)(this,r),n.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){var t=this;return Object(a.jsx)(g,{children:function(n){var r=n.isLoggedIn,s=n.isLoading,c=n.user,i=n.signup,o=n.login,l=n.logout;return Object(a.jsx)(e,Object(b.a)(Object(b.a)({},t.props),{},{isLoggedIn:r,isLoading:s,user:c,signup:i,login:o,logout:l}))}})}}]),r}(s.a.Component)},y=C(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={profilePlaceholder:"https://image.flaticon.com/icons/png/512/64/64572.png"},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("nav",{className:"navbar",children:[(this.props.isLoggedIn,Object(a.jsx)(o.b,{to:"/",id:"home-btn",children:Object(a.jsx)("img",{className:"rotate",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUxokMH9aY_2qzJ6F6M-rBq7oL56zwA2uWw&usqp=CAU",alt:"record"})})),Object(a.jsx)("h1",{className:"indeepTitle",children:"Indeep Records"}),Object(a.jsx)("div",{className:"rightnav",children:this.props.isLoggedIn?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:this.props.user.profilePic?Object(a.jsxs)(o.b,{to:"/private",id:"profile-btn",children:[Object(a.jsx)("img",{style:{margin:"20px"},src:this.props.user.profilePic,alt:"profile pic",width:"50",height:"50px"}),")"]}):Object(a.jsx)(o.b,{to:"/private",id:"profile-btn",children:Object(a.jsx)("img",{style:{margin:"20px"},src:this.state.profilePlaceholder,alt:"profile pic",width:"60px",height:"60px"})})}),Object(a.jsx)("button",{className:"btn-2 mb2",onClick:this.props.logout,children:"Logout"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(o.b,{to:"/login",children:Object(a.jsx)("button",{className:"btn-2 mb2",children:"Login"})}),Object(a.jsx)("br",{}),Object(a.jsx)(o.b,{to:"/signup",children:Object(a.jsx)("button",{className:"btn-2 mb2",children:"Sign Up"})})]})})]})}}]),n}(r.Component)),w=n(22),S=n(19),L=n(2),R=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={search:""},e.handleInput=function(t){var n=t.target,a=n.value,r=n.name;e.setState(Object(S.a)({},r,a)),e.props.filterRecords(a)},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)(L.a,{children:Object(a.jsx)(L.a.Group,{controlId:"formBasicSearch",children:Object(a.jsx)(L.a.Control,{type:"text",name:"search",value:this.state.search,placeholder:"Search",onChange:this.handleInput})})})}}]),n}(r.Component),I=n(18),k=n(8),F=n(25),N=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e.getCurrentUser=function(){O.me().then((function(t){var n=t.email;e.setState({currentUser:n})})).catch((function(e){return console.log(e)}))},e.getNewReleases=function(){var t=Object(w.a)(e.props.newReleases),n=t.slice(Math.max(t.length-10,0));e.setState({newReleases:n})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getCurrentUser(),this.getNewReleases()}},{key:"render",value:function(){this.props.newReleases;return Object(a.jsxs)("div",{className:"charts-div",children:[Object(a.jsx)("p",{className:"chart-text-title",children:"new releases"}),this.state.newReleases?this.state.newReleases.map((function(e){return Object(a.jsxs)("div",{className:"chart-list",children:[Object(a.jsx)(o.b,{to:"/records/".concat(e._id),children:Object(a.jsx)("p",{className:"chart-text",children:e.title})}),Object(a.jsxs)("p",{children:["artist: ",e.artist," "]}),Object(a.jsxs)("p",{children:["label:",e.label," "]}),Object(a.jsxs)("p",{children:["Price: ",e.price,"\u20ac"]})]},e._id)})):Object(a.jsx)("h1",{children:"loading"})]})}}]),n}(r.Component),U=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={listOfRecords:[],currentRecords:[],newReleases:[],currentUser:null},e.getAllRecords=function(){m.a.get("".concat("https://indeep.herokuapp.com","/api/records/")).then((function(t){e.setState({listOfRecords:t.data})}))},e.getCurrentUser=function(){O.me().then((function(t){var n=t.email;e.setState({currentUser:n})})).catch((function(e){return console.log(e)}))},e.filterRecords=function(t){var n=e.state.listOfRecords.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())||e.artist.toLowerCase().includes(t.toLowerCase())||e.label.toLowerCase().includes(t.toLowerCase())}));e.setState({listOfRecords:n})},e.handleRandom=function(){var t=Math.floor(e.state.listOfRecords.length*Math.random()),n=e.state.listOfRecords[t];e.setState({listOfRecords:n}),e.filterRecords(n.title)},e.handleSortByTitle=function(){var t=Object(w.a)(e.state.listOfRecords);t.sort((function(e,t){var n=e.title.toLowerCase(),a=t.title.toLowerCase();return n<a?-1:n>a?1:0})),e.setState({listOfRecords:t})},e.handleSortByArtist=function(){var t=Object(w.a)(e.state.listOfRecords);t.sort((function(e,t){var n=e.artist.toLowerCase(),a=t.artist.toLowerCase();return n<a?-1:n>a?1:0})),e.setState({listOfRecords:t})},e.handleSortByLabel=function(){var t=Object(w.a)(e.state.listOfRecords);t.sort((function(e,t){var n=e.label.toLowerCase(),a=t.label.toLowerCase();return n<a?-1:n>a?1:0})),e.setState({listOfRecords:t})},e.handleSortByAscPrice=function(){var t=Object(w.a)(e.state.listOfRecords);t.sort((function(e,t){var n=e.price,a=t.price;return n<a?-1:n>a?1:0})),e.setState({listOfRecords:t})},e.handleSortByDesPrice=function(){var t=Object(w.a)(e.state.listOfRecords);t.sort((function(e,t){var n=e.price,a=t.price;return n<a?1:n>a?-1:0})),e.setState({listOfRecords:t})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getAllRecords(),this.getCurrentUser()}},{key:"render",value:function(){var e=this,t=this.state.listOfRecords;t.length;return Object(a.jsxs)("div",{className:"sort-list",children:[Object(a.jsx)(R,{filterRecords:this.filterRecords}),Object(a.jsx)(I.a,{className:"btn-2 mb-2",variant:"outline secondary",onClick:this.getAllRecords,children:"Show All"}),Object(a.jsx)(I.a,{className:"btn-2 mb-2",variant:"outline secondary",onClick:this.handleRandom,children:"Record of the Day"}),Object(a.jsx)(I.a,{className:"btn-2 mb-2",variant:"outline secondary",onClick:this.handleSortByTitle,children:"Sort By Title"}),Object(a.jsx)(I.a,{className:"btn-2 mb-2",variant:"outline secondary",onClick:this.handleSortByArtist,children:"Sort By Artist"}),Object(a.jsx)(I.a,{className:"btn-2 mb-2",variant:"outline secondary",onClick:this.handleSortByLabel,children:"Sort By Label"}),Object(a.jsx)(I.a,{className:"btn-2 mb-2",variant:"outline secondary",onClick:this.handleSortByAscPrice,children:"Sort By Price \u2191"}),Object(a.jsx)(I.a,{className:"btn-2 mb-2",variant:"outline secondary",onClick:this.handleSortByDesPrice,children:"Sort By Price\u2193"}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(k.a,{sm:8,children:Object(a.jsx)("div",{children:t.map((function(t){return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)(F.a,{children:[Object(a.jsxs)(k.a,{sm:6,children:[Object(a.jsx)(o.b,{to:"/records/".concat(t._id),children:Object(a.jsx)("h6",{className:"indeepText",children:t.title})}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Artist: "})," ",t.artist," "]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Label: "}),t.label]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Price: "}),t.price,"\u20ac"]})]}),Object(a.jsxs)(k.a,{sm:6,children:[Object(a.jsx)("img",{style:{width:"100px",padding:"10px"},src:"https://crossedcombs.typepad.com/.a/6a00e00980a6f38833017c37ab6210970b-pi",alt:"record"}),Object(a.jsx)("img",{style:{width:"100px",padding:"10px"},src:"https://crossedcombs.typepad.com/.a/6a00e00980a6f38833017c37ab6210970b-pi",alt:"record"}),Object(a.jsx)("img",{style:{width:"100px",padding:"10px"},src:"https://crossedcombs.typepad.com/.a/6a00e00980a6f38833017c37ab6210970b-pi",alt:"record"}),"admin"===e.state.currentUser?Object(a.jsx)(o.b,{to:"/records/edit/".concat(t._id),children:Object(a.jsx)("p",{children:"Update or Delete this record"})}):null]})," "]})},t._id)}))})}),Object(a.jsx)(k.a,{sm:4,children:this.state.listOfRecords[0]?Object(a.jsx)(N,{newReleases:this.state.listOfRecords}):null})]})]})}}]),n}(r.Component);var A=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(U,{})})},P=C(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",name:"",password:"",profilePic:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.email,r=n.name,s=n.password,c=n.profilePic;e.props.signup(a,r,s,c)},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(S.a)({},a,r))},e.handleFileUpload=function(t){console.log("The file to be uploaded is: ",t.target.files);var n=t.target.files[0],a=new FormData;a.append("profilePic",n),m.a.post("".concat("https://indeep.herokuapp.com","/auth/upload"),a,{withCredentials:!0}).then((function(t){console.log("response is: ",t),e.setState({profilePic:t.data.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.name,r=e.password,s=e.profilePic;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Sign Up"}),Object(a.jsxs)(L.a,{onSubmit:this.handleFormSubmit,children:[Object(a.jsxs)(L.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)(L.a.Control,{type:"text",name:"email",value:t,onChange:this.handleChange,id:"exampleInputEmail1",class:"form-control","aria-describedby":"emailHelp"}),Object(a.jsx)("label",{children:"Name:"}),Object(a.jsx)(L.a.Control,{type:"text",name:"name",value:n,onChange:this.handleChange,id:"exampleInputName1",class:"form-control","aria-describedby":"nameHelp"}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)(L.a.Control,{type:"password",name:"password",value:r,onChange:this.handleChange,id:"exampleInputPassword1",class:"form-control","aria-describedby":"passwordHelp"}),Object(a.jsx)("label",{children:"Profile Image"}),Object(a.jsx)(L.a.Control,{name:"profilePic",type:"file",onChange:this.handleFileUpload}),Object(a.jsx)("span",{children:Object(a.jsx)("img",{style:{width:"100px"},src:s&&s,alt:""})})]}),Object(a.jsx)("input",{variant:"secondary",type:"submit",value:"Signup"})]}),Object(a.jsx)("p",{children:"Already have account?"}),Object(a.jsx)(o.b,{to:"/login",children:" Login"})]})}}]),n}(r.Component)),B=C(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.email,r=n.password;e.props.login(a,r)},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(S.a)({},a,r))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsxs)(L.a,{className:"forms-input",onSubmit:this.handleFormSubmit,children:[Object(a.jsxs)(L.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)(L.a.Control,{type:"text",name:"email",value:t,onChange:this.handleChange,id:"exampleInputEmail1",className:"form-control","aria-describedby":"emailHelp"}),Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)(L.a.Control,{type:"password",name:"password",value:n,id:"exampleInputPassword1",onChange:this.handleChange,className:"form-control","aria-describedby":"passwordHelp"})]}),Object(a.jsx)("input",{variant:"secondary",type:"submit",value:"Login"})]})]})}}]),n}(r.Component)),G=new function e(){var t=this;Object(l.a)(this,e),this.getAll=function(){return t.api.get("/records")},this.getOneUser=function(e){return t.api.get("/users/".concat(e)).then((function(e){return e.data}))},this.getOne=function(e){return t.api.get("/records/".concat(e)).then((function(e){return e.data}))},this.create=function(e){return t.api.post("/records",e)},this.updateFave=function(e,n){return t.api.put("/users/".concat(e,"/records/").concat(n))},this.removeFave=function(e,n){return t.api.put("/records/".concat(e,"/users/").concat(n))},this.deleteOne=function(e){return t.api.delete("/records/".concat(e))},this.api=m.a.create({baseURL:"https://indeep.herokuapp.com/api",withCredentials:!0})},D=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={userObj:{}},e.getFavourites=function(){var t=e.props.currentUser;G.getOneUser(t).then((function(t){e.setState({userObj:t})})).catch((function(e){return console.log(e)}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getFavourites()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{className:"chart-text-title",children:[this.state.userObj.name,"'s favourite records: "]}),this.state.userObj.favouriteRecords?this.state.userObj.favouriteRecords.map((function(e){return Object(a.jsxs)("div",{className:"fave-card",style:{width:"30%"},children:[Object(a.jsx)(o.b,{to:"/records/".concat(e._id),children:Object(a.jsx)("p",{className:"chart-text",children:e.title})}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Artist: "})," ",e.artist]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Label: "}),e.label]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Price: "}),e.price,"\u20ac"]})]},e._id)})):Object(a.jsxs)("p",{children:["Hey ",this.state.userObj.name,", you haven't any favourite records yet, why don't you check out our new releases?"]})]})}}]),n}(r.Component),_=C(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={currentUser:null,userObj:{}},e.getCurrentUser=function(){O.me().then((function(t){var n=t._id;e.setState({currentUser:n}),e.setState({userObj:t})})).catch((function(e){return console.log(e)}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getCurrentUser()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:["admin"===this.state.userObj.name?Object(a.jsxs)(o.b,{to:"/records/add",children:[Object(a.jsx)("button",{className:"btn-2 mb-2",children:"Add Record"})," "]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{children:Object(a.jsx)(D,{currentUser:this.props.user._id})})]}),Object(a.jsx)("br",{}),Object(a.jsx)(U,{})]})}}]),n}(r.Component)),M=n(24),T=C(function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={id:"",recordId:"",listingId:"",title:" ",artist:" ",format:"",image:"",label:"",mediaCondition:"",sleeveCondition:"",weight:"",catno:"",comments:"",price:0,defaultImg:"./../images/recordPlaceholderImage.jpeg",favoritedBy:[],favouritedByIds:[],count:0,currentUser:null,isFavourite:!1},e.getCurrentSessionUser=function(){O.me().then((function(t){var n=t._id;e.setState({currentUser:n}),G.getOneUser(n).then((function(t){var n=t._id;e.setState({currentUser:n})})).catch((function(e){return console.log(e)}))}))},e.getSingleRecord=function(){var t=e.props.match.params.id;G.getOne(t).then((function(t){var n=t.id,a=t.listingId,r=t.title,s=t.artist,c=t.format,i=t.image,o=t.label,l=t.mediaCondition,d=t.sleeveCondition,h=t.weight,j=t.catno,u=t.comments,b=t.price,p=t.favoritedBy,m=e.props.user._id,O=p?p.map((function(e){return e._id})):[],x=p&&O.includes(m);e.setState({id:n,listingId:a,title:r,artist:s,format:c,image:i,label:o,mediaCondition:l,sleeveCondition:d,weight:h,catno:j,comments:u,price:b,favoritedBy:p,isFavourite:x,favouritedByIds:O})})).catch((function(e){return console.log(e)}))},e.toggleFavourite=function(){var t=e.state.currentUser,n=e.props.match.params.id;e.state.favoritedBy&&e.state.favouritedByIds.includes(t)?G.removeFave(n,t).then((function(){e.setState({isFavourite:!1})})).catch((function(e){return console.log(e)})):G.updateFave(t,n).then((function(){e.setState({isFavourite:!0})})).catch((function(e){return console.log(e)}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getSingleRecord(),this.getCurrentSessionUser()}},{key:"render",value:function(){return Object(a.jsx)(M.a,{className:"card ",children:Object(a.jsxs)(F.a,{className:"forms-input",children:[Object(a.jsxs)(k.a,{className:"details-labels",md:8,children:[Object(a.jsx)("h3",{children:Object(a.jsx)("b",{children:this.state.title})}),Object(a.jsx)("br",{}),Object(a.jsxs)("h4",{children:[Object(a.jsx)("b",{children:"artist: "}),this.state.artist]}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"label: "})," ",this.state.label]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"format: "})," ",this.state.format]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"label: "}),this.state.label]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"media condition: "}),this.state.mediaCondition]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"sleeve condition: "}),this.state.sleeveCondition]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"weight: "}),this.state.weight,"g"]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"catalogue no.: "}),this.state.catno]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"comments: "}),this.state.comments]}),Object(a.jsx)("div",{children:Object(a.jsxs)("b",{children:["price: ",this.state.price,"\u20ac"]})}),Object(a.jsx)("br",{}),Object(a.jsx)(o.b,{to:"/private",children:"see all"})]}),Object(a.jsxs)(k.a,{md:4,children:[Object(a.jsx)("img",{style:{width:"200px"},src:"https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/money/personal-finance/making-money/selling-vinyl-shutterstock-234267241.jpg",alt:"record"}),this.state.isFavourite?Object(a.jsx)(I.a,{className:"btn-2 mb-2",variant:"outline secondary",onClick:this.toggleFavourite,children:"Remove from favourites"}):Object(a.jsx)(I.a,{className:"btn-2 mb-2",variant:"outline secondary",onClick:this.toggleFavourite,children:"Add to favourites"})]})]})})}}]),n}(r.Component)),H=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=r.state,n=t.title,s=t.artist,c=t.format,i=t.image,o=t.label,l=t.mediaCondition,d=t.sleeveCondition,h=t.weight,j=t.comments,b=t.catno,p=t.price;return m.a.post("".concat("https://indeep.herokuapp.com","/api/records"),{title:n,artist:s,format:c,image:i,label:o,mediaCondition:l,sleeveCondition:d,weight:h,comments:j,catno:b,price:p},{withCredentials:!0}).then((function(){r.setState({title:"",artist:"",format:"",image:"",label:"",mediaCondition:"",sleeveCondition:"",weight:"",comments:"",catno:"",price:0}),r.props.history.push("/")})).catch((function(e){return console.log(e)})),Object(a.jsx)(u.a,{to:"/"})},r.handleChange=function(e){var t=e.target,n=t.name,a=t.value;r.setState(Object(S.a)({},n,a))},r.state={title:"",artist:"",format:"",image:"",label:"",mediaCondition:"",sleeveCondition:"",weight:"",comments:"",catno:"",price:0},r}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)(M.a,{className:"card",children:Object(a.jsxs)(L.a,{className:"forms-input",onSubmit:this.handleFormSubmit,children:[Object(a.jsxs)(L.a.Row,{children:[Object(a.jsxs)(L.a.Group,{as:k.a,controlId:"exampleForm.ControlTitle",children:[Object(a.jsx)(L.a.Label,{children:"Title:"}),Object(a.jsx)(L.a.Control,{type:"text",name:"title",value:this.state.title,onChange:this.handleChange})]}),Object(a.jsxs)(L.a.Group,{as:k.a,controlId:"exampleForm.ControlLabel",children:[Object(a.jsx)(L.a.Label,{children:"Artist:"}),Object(a.jsx)(L.a.Control,{type:"text",name:"artist",value:this.state.artist,onChange:this.handleChange})]})]}),Object(a.jsxs)(L.a.Row,{children:[Object(a.jsxs)(L.a.Group,{as:k.a,controlId:"exampleForm.ControlmediaCond",children:[Object(a.jsx)(L.a.Label,{children:"Media Condition:"}),Object(a.jsx)(L.a.Control,{type:"text",name:"mediaCondition",value:this.state.mediaCondition,onChange:this.handleChange})]}),Object(a.jsxs)(L.a.Group,{as:k.a,controlId:"exampleForm.ControlsleeveCond",children:[Object(a.jsx)(L.a.Label,{children:"Sleeve Condition:"}),Object(a.jsx)(L.a.Control,{type:"text",name:"sleeveCondition",value:this.state.sleeveCondition,onChange:this.handleChange})]})]}),Object(a.jsxs)(L.a.Row,{children:[Object(a.jsxs)(L.a.Group,{as:k.a,controlId:"exampleForm.ControlFormat",children:[Object(a.jsx)(L.a.Label,{children:"Format:"}),Object(a.jsx)(L.a.Control,{type:"text",name:"format",value:this.state.format,onChange:this.handleChange})]}),Object(a.jsxs)(L.a.Group,{as:k.a,controlId:"exampleForm.ControlWeight",children:[Object(a.jsx)(L.a.Label,{children:"Weight (grammes):"}),Object(a.jsx)(L.a.Control,{type:"text",name:"weight",value:this.state.weight,onChange:this.handleChange})]}),Object(a.jsxs)(L.a.Group,{as:k.a,controlId:"exampleForm.ControlCatNo",children:[Object(a.jsx)(L.a.Label,{children:"Catalogue Number:"}),Object(a.jsx)(L.a.Control,{type:"text",name:"catno",value:this.state.catno,onChange:this.handleChange})]})]}),Object(a.jsxs)(L.a.Row,{children:[Object(a.jsxs)(L.a.Group,{as:k.a,md:8,controlId:"exampleForm.ControlComments",children:[Object(a.jsx)(L.a.Label,{children:"Comments:"}),Object(a.jsx)(L.a.Control,{type:"textarea",name:"comments",value:this.state.comments,onChange:this.handleChange})]}),Object(a.jsxs)(L.a.Group,{as:k.a,md:4,controlId:"exampleForm.ControlPrice",children:[Object(a.jsx)(L.a.Label,{children:"Price (\u20ac):"}),Object(a.jsx)(L.a.Control,{id:"price-field",type:"text",name:"price",value:this.state.price,onChange:this.handleChange})]})]}),Object(a.jsx)("input",{className:"btn-2 mb-2",variant:"secondary",type:"submit",value:"Add Record"})]})})}}]),n}(r.Component),E=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={title:"",artist:"",format:"",label:"",mediaCondition:"",sleeveCondition:"",weight:"",catno:"",comments:"",image:"",price:0},e.getSingleRecord=function(){var t=e.props.match.params.id;G.getOne(t).then((function(t){var n=t.listingId,a=t.title,r=t.artist,s=t.format,c=t.image,i=t.label,o=t.mediaCondition,l=t.sleeveCondition,d=t.weight,h=t.catno,j=t.comments,u=t.price;e.setState({listingId:n,title:a,artist:r,format:s,image:c,label:i,mediaCondition:o,sleeveCondition:l,weight:d,catno:h,comments:j,price:u})})).catch((function(e){return console.log(e)}))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.title,r=n.artist,s=n.format,c=n.label,i=n.mediaCondition,o=n.sleeveCondition,l=n.weight,d=n.catno,h=n.image,j=n.comments,u=n.price,b=e.props.match.params.id;m.a.put("".concat("https://indeep.herokuapp.com","/api/records/").concat(b),{title:a,artist:r,format:s,label:c,mediaCondition:i,sleeveCondition:o,weight:l,catno:d,image:h,comments:j,price:u}).then((function(){e.getSingleRecord(),e.props.history.push("/")})).catch((function(e){return console.log(e)}))},e.deleteRecord=function(){var t=e.props.match.params.id;m.a.delete("".concat("https://indeep.herokuapp.com","/api/records/").concat(t)).then((function(){return e.props.history.push("/")})).catch((function(e){return console.log(e)}))},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(S.a)({},a,r))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getSingleRecord()}},{key:"render",value:function(){return Object(a.jsx)(M.a,{className:"card",children:Object(a.jsxs)(L.a,{className:"forms-input",onSubmit:this.handleFormSubmit,children:[Object(a.jsxs)(L.a.Row,{children:[Object(a.jsxs)(L.a.Group,{as:k.a,controlId:"exampleForm.ControlTitle",children:[Object(a.jsx)(L.a.Label,{children:"Title:"}),Object(a.jsx)(L.a.Control,{type:"text",name:"title",value:this.state.title,onChange:this.handleChange})]}),Object(a.jsxs)(L.a.Group,{as:k.a,controlId:"exampleForm.ControlLabel",children:[Object(a.jsx)(L.a.Label,{children:"Artist:"}),Object(a.jsx)(L.a.Control,{type:"text",name:"artist",value:this.state.artist,onChange:this.handleChange})]})]}),Object(a.jsxs)(L.a.Row,{children:[Object(a.jsxs)(L.a.Group,{as:k.a,controlId:"exampleForm.ControlmediaCond",children:[Object(a.jsx)(L.a.Label,{children:"Media Condition:"}),Object(a.jsx)(L.a.Control,{type:"text",name:"mediaCondition",value:this.state.mediaCondition,onChange:this.handleChange})]}),Object(a.jsxs)(L.a.Group,{as:k.a,controlId:"exampleForm.ControlsleeveCond",children:[Object(a.jsx)(L.a.Label,{children:"Sleeve Condition:"}),Object(a.jsx)(L.a.Control,{type:"text",name:"sleeveCondition",value:this.state.sleeveCondition,onChange:this.handleChange})]})]}),Object(a.jsxs)(L.a.Row,{children:[Object(a.jsxs)(L.a.Group,{as:k.a,controlId:"exampleForm.ControlFormat",children:[Object(a.jsx)(L.a.Label,{children:"Format:"}),Object(a.jsx)(L.a.Control,{type:"text",name:"format",value:this.state.format,onChange:this.handleChange})]}),Object(a.jsxs)(L.a.Group,{as:k.a,controlId:"exampleForm.ControlWeight",children:[Object(a.jsx)(L.a.Label,{children:"Weight (grammes):"}),Object(a.jsx)(L.a.Control,{type:"text",name:"weight",value:this.state.weight,onChange:this.handleChange})]}),Object(a.jsxs)(L.a.Group,{as:k.a,controlId:"exampleForm.ControlCatNo",children:[Object(a.jsx)(L.a.Label,{children:"Catalogue Number:"}),Object(a.jsx)(L.a.Control,{type:"text",name:"catno",value:this.state.catno,onChange:this.handleChange})]})]}),Object(a.jsxs)(L.a.Row,{children:[Object(a.jsxs)(L.a.Group,{as:k.a,md:8,controlId:"exampleForm.ControlComments",children:[Object(a.jsx)(L.a.Label,{children:"Comments:"}),Object(a.jsx)(L.a.Control,{type:"textarea",name:"comments",value:this.state.comments,onChange:this.handleChange})]}),Object(a.jsxs)(L.a.Group,{as:k.a,md:4,controlId:"exampleForm.ControlPrice",children:[Object(a.jsx)(L.a.Label,{children:"Price (\u20ac):"}),Object(a.jsx)(L.a.Control,{id:"price-field",type:"text",name:"price",value:this.state.price,onChange:this.handleChange})]})]}),Object(a.jsx)("input",{className:"btn-2 mb-2",variant:"secondary",type:"submit",value:"Update Record"}),Object(a.jsx)("br",{}),Object(a.jsx)(I.a,{className:"btn-2 mb-2",variant:"secondary",onClick:this.deleteRecord,children:"Delete Record"})]})})}}]),n}(r.Component),W=Object(u.g)(E);var q=C((function(e){var t=e.isLoggedIn,n=e.isLoading,r=e.component,s=e.exact,c=e.path;return n?"Loading":Object(a.jsx)(u.b,{exact:s,path:c,render:function(e){return t?Object(a.jsx)(u.a,{to:"/private"}):t?void 0:Object(a.jsx)(r,Object(b.a)({},e))}})}));var J=C((function(e){var t=e.isLoggedIn,n=e.isLoading,r=e.component,s=e.exact,c=e.path;return n?"Loading":Object(a.jsx)(u.b,{exact:s,path:c,render:function(e){return t?t?Object(a.jsx)(r,Object(b.a)({},e)):void 0:Object(a.jsx)(u.a,{to:"/login"})}})}));var z=function(){return Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsx)("img",{src:"/images/soundcloud-icon.png",alt:"soundcloud"}),Object(a.jsx)("img",{src:"/images/instagram-icon.png",alt:"instagram"}),Object(a.jsx)("img",{src:"/images/envelope-icon.png",alt:"envelope"}),Object(a.jsx)("img",{src:"/images/facebook-icon.png",alt:"facebook"})]})},Y=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(y,{}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{exact:!0,path:"/",component:A}),Object(a.jsx)(J,{exact:!0,path:"/records/add",component:H}),Object(a.jsx)(u.b,{exact:!0,path:"/records/:id",component:T}),Object(a.jsx)(q,{exact:!0,path:"/signup",component:P}),Object(a.jsx)(q,{exact:!0,path:"/login",component:B}),Object(a.jsx)(J,{exact:!0,path:"/private",component:_}),Object(a.jsx)(J,{exact:!0,path:"/records/edit/:id",component:W})]}),Object(a.jsx)(z,{})]})}}]),n}(r.Component);n(73);i.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(v,{children:Object(a.jsx)(Y,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.38046a56.chunk.js.map