(this.webpackJsonpsocialweb=this.webpackJsonpsocialweb||[]).push([[0],{130:function(e,t,a){e.exports={content:"Dialogs_content___OaR_"}},132:function(e,t,a){},134:function(e,t,a){e.exports={content:"Description_content__1iUNc"}},136:function(e,t,a){e.exports={content:"Users_content__19OzP",selectedPage:"Users_selectedPage__1q73A"}},137:function(e,t,a){e.exports={login:"Login_login__SpNzn"}},164:function(e,t,a){e.exports=a(290)},169:function(e,t,a){},170:function(e,t,a){},290:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(65),i=a.n(c),s=(a(169),a(16)),u=a(17),l=a(19),m=a(18),d=(a(170),a(31)),p=a.n(d),f=a(11),g=function(e){return o.a.createElement("footer",{className:p.a.footer},o.a.createElement(f.b,{to:"/profile",activeClassName:p.a.active},o.a.createElement("img",{className:p.a.img,src:"https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png",alt:"Profile"})),o.a.createElement(f.b,{to:"/dialogs",activeClassName:p.a.active},o.a.createElement("img",{className:p.a.imgMessages,src:"https://www.logolynx.com/images/logolynx/75/75189e2b07df0d2a8cc42dee4cf889b7.png",alt:"messages"})),o.a.createElement(f.b,{to:"/users",activeClassName:p.a.active},o.a.createElement("img",{className:p.a.img,src:"https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-13/512/Users-icon.png",alt:""})))},h=a(130),b=a.n(h),v=a(10),E=a(71),_=a.n(E),O=a(132),j=a.n(O),P=function(e){return o.a.createElement("div",{className:j.a.preloader},o.a.createElement("h1",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."))},w=function(e){if(!e.profile)return o.a.createElement(P,null);var t=e.match.params.userID;return o.a.createElement("div",{className:_.a.me,id:"navbar"},o.a.createElement("div",{className:_.a.nameme}," \u0412\u044b ",e.profile.fullName," "),o.a.createElement("img",{src:e.profile.photos.large,alt:""}),e.match.params.userID&&o.a.createElement("div",null,o.a.createElement("div",{className:_.a.nameUser}," \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c:",o.a.createElement("div",null,e.dialogsReducer.users[t-1].name)),o.a.createElement("img",{src:e.dialogsReducer.users[t-1].img,alt:""})))},y=a(12),S=function(e){return{isAuth:e.AuthPageReducer.isAuth}},k=function(e){var t=function(t){Object(l.a)(n,t);var a=Object(m.a)(n);function n(){return Object(s.a)(this,n),a.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return this.props.isAuth?o.a.createElement(e,this.props):o.a.createElement(y.a,{to:"/login"})}}]),n}(o.a.Component);return Object(v.b)(S)(t)},x=a(6),U=a(9),C=a.n(U),A=a(15),N=a(70),T=a(4),R=a(133).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"be820c73-af0b-4ffa-9553-5bd0d04425d6"}}),D={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return R.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return R.post("follow/".concat(e)).then((function(e){return e.data.resultCode}))},unfollowUser:function(e){return R.delete("follow/".concat(e)).then((function(e){return e.data.resultCode}))}},I=function(){return R.get("auth/me").then((function(e){return e.data}))},M=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return R.post("auth/login",{email:e,password:t,rememberMe:a})},F=function(){return R.delete("auth/login")},Y=function(e){return R.get("profile/status/".concat(e)).then((function(e){return e.data}))},z=function(e){return R.get("profile/".concat(e)).then((function(e){return e.data}))},L=function(e){return R.put("profile/status",{status:e}).then((function(e){return e}))},H=function(e){var t=new FormData;return t.append("image",e),R.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},B=function(e,t,a,n){return e.map((function(e){return e[a]===t?Object(T.a)(Object(T.a)({},e),n):e}))},V={users:[],pageSize:25,totalUsers:0,currentPage:1,isFetching:!0,isDisabled:[],status:""},q=function(e){return{type:Q,users:e}},J=function(e){return{type:Z,userID:e}},W=function(e){return{type:$,userID:e}},G=function(e,t){return{type:te,bool:e,id:t}},K=function(e){return{type:ae,bool:e}},Q="SET_USERS",Z="FOLLOW_USER",$="UNFOLLOW_USER",X="SET_CURRENT_PAGE",ee="SET_TOTAL_USERS_COUNT",te="IS_DISABLED",ae="IS_FETCHING",ne=function(){var e=Object(A.a)(C.a.mark((function e(t,a,n,r){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(G(!0,a)),e.next=3,n(a);case 3:0==e.sent&&t(r(a)),t(G(!1,a));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(T.a)(Object(T.a)({},e),{},{users:B(e.users,t.userID,"id",{followed:!0})});case $:return Object(T.a)(Object(T.a)({},e),{},{users:B(e.users,t.userID,"id",{followed:!1})});case Q:return Object(T.a)(Object(T.a)({},e),{},{users:t.users});case X:return Object(T.a)(Object(T.a)({},e),{},{currentPage:t.currentPage});case ee:return Object(T.a)(Object(T.a)({},e),{},{totalUsers:t.totalCount});case ae:return Object(T.a)(Object(T.a)({},e),{},{isFetching:t.bool});case te:return Object(T.a)(Object(T.a)({},e),{},{isDisabled:t.bool?[].concat(Object(N.a)(e.isDisabled),[t.id]):e.isDisabled.filter((function(e){return e!=t.id}))});default:return e}},oe=function e(t){return{type:e,text:t}},ce={profilePage:[{id:1,text:"\u041f\u0440\u0438\u0432\u0435\u0442",name:"\u0412\u0430\u043b\u0435\u0440\u0438\u0439 \u0426\u0435\u043f\u043a\u0430\u043b\u043e",img:"https://officelife.media/upload/iblock/a67/a673bdc2396a44e83b19b8a1665800d0.jpg"},{id:2,text:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430?",name:"\u0412\u0430\u043b\u0435\u0440\u0438\u0439 \u0426\u0435\u043f\u043a\u0430\u043b\u043e",img:"https://officelife.media/upload/iblock/a67/a673bdc2396a44e83b19b8a1665800d0.jpg"},{id:3,text:"\u0427\u0442\u043e \u043d\u043e\u0432\u043e\u0433\u043e?",name:"\u0412\u0430\u043b\u0435\u0440\u0438\u0439 \u0426\u0435\u043f\u043a\u0430\u043b\u043e",img:"https://officelife.media/upload/iblock/a67/a673bdc2396a44e83b19b8a1665800d0.jpg"}],photo:"",status:"",profile:null},ie=function(e){return{type:"SET_PHOTO_USER",photo:e}},se=function(e){return{type:"SET_STATUS_USER",status:e}},ue=function(e){return function(){var t=Object(A.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y(e);case 2:n=t.sent,a(se(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},le=function(e){return function(){var t=Object(A.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(K(!0)),t.next=3,z(e);case 3:n=t.sent,a(ie(n.photos.large)),a({type:"SET_USER_PROFILE",profile:n}),a(ue(e)),a(K(!1));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:var a={id:5,text:t.text,name:"\u0412\u0430\u043b\u0435\u0440\u0438\u0439 \u0426\u0435\u043f\u043a\u0430\u043b\u043e",img:"https://officelife.media/upload/iblock/a67/a673bdc2396a44e83b19b8a1665800d0.jpg"};return Object(T.a)(Object(T.a)({},e),{},{profilePage:[].concat(Object(N.a)(e.profilePage),[a]),newPostText:t.text});case"SET_PHOTO_USER":return Object(T.a)(Object(T.a)({},e),{},{photo:t.photo});case"SET_STATUS_USER":return Object(T.a)(Object(T.a)({},e),{},{status:t.status});case"SAVE_PHOTO_SUCCESS":return Object(T.a)(Object(T.a)({},e),{},{photo:t.photos});case"SET_USER_PROFILE":return Object(T.a)(Object(T.a)({},e),{},{profile:t.profile});default:return e}},de=a(41),pe={id:null,email:null,login:null,isAuth:!1,password:null,rememberMe:null,hello:!1},fe=function(e,t,a,n){return{type:"SET_USER_DATA",payload:{id:e,email:t,login:a,isAuth:n}}},ge=function(){return function(){var e=Object(A.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:a=e.sent,t(K(!0)),0===a.resultCode&&t(fe(a.data.id,a.data.email,a.data.login,!0)),t(K(!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(T.a)(Object(T.a)({},e),t.payload);case"SET_HELLO":return Object(T.a)(Object(T.a)({},e),{},{hello:t.bool});case"LOGOUT":return Object(T.a)(Object(T.a)({},e),{},{isAuth:!1,login:null});default:return e}},be=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement(w,this.props)}}]),a}(o.a.Component),ve=Object(x.d)(Object(v.b)((function(e){return{profile:e.ProfilePageReducer.profile,dialogsReducer:e.dialogsReducer}}),{}),y.f,k,(function(e){var t=function(t){Object(l.a)(n,t);var a=Object(m.a)(n);function n(){return Object(s.a)(this,n),a.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getProfileThunk(this.props.id)}},{key:"render",value:function(){return o.a.createElement(e,this.props)}}]),n}(o.a.Component);return Object(v.b)((function(e){return{login:e.AuthPageReducer.login,id:e.AuthPageReducer.id}}),{getProfileThunk:le})(t)}))(be),Ee=a(72),_e=a.n(Ee),Oe=function(e){var t=e.name,a=e.img;return o.a.createElement("div",{className:_e.a.DialogItem},o.a.createElement("div",null,o.a.createElement("img",{src:a,alt:""})),o.a.createElement("div",null,t))},je=function(e){var t=e.dialogsReducer.users.map((function(e){return o.a.createElement(f.b,{key:e.id,activeClassName:_e.a.active,to:"/dialogs/".concat(e.id)},o.a.createElement(Oe,{name:e.name,img:e.img}))}));return o.a.createElement("div",{className:_e.a.dialogs},t)},Pe=Object(x.d)(Object(v.b)((function(e){return{dialogsReducer:e.dialogsReducer}}),{}),y.f,k)(je),we=a(36),ye=a(46),Se=a.n(ye),ke=a(68),xe=a.n(ke),Ue=function(e){if(e.match.params.userID){var t=e.dialogsReducer.messages[e.match.params.userID-1].a.map((function(e){var t;return o.a.createElement("div",{key:e.id,className:xe()((t={},Object(we.a)(t,Se.a.right,e.isYou),Object(we.a)(t,Se.a.message,!0),t),Se.a.pageNumber)},o.a.createElement("span",{className:Se.a.text},e.message))}));return o.a.createElement("div",{className:Se.a.MessageArea},t)}return o.a.createElement("span",null)},Ce={users:[{id:1,name:"\u0421\u0432\u0435\u0442\u043e\u0437\u0430\u0440 \u0422\u0440\u0443\u0431\u0435\u0446\u043a\u043e\u0439",img:"https://img04.rl0.ru/4c3a6c57c2a08a723214ba61ff9b2aef/c615x400i/news.rambler.ru/img/2017/08/31115059.047592.2664.jpeg"},{id:2,name:"\u041c\u0438\u043b\u0438\u0446\u0430 \u0413\u043e\u043b\u0438\u0446\u044b\u043d\u0430",img:"https://pbs.twimg.com/profile_images/811139177341485056/hvSO9ut1.jpg"},{id:3,name:"\u041b\u044e\u0431\u043e\u043c\u0438\u0440 \u042f\u0433\u0443\u0436\u0438\u043d\u0441\u043a\u0438\u0439",img:"https://storage.myseldon.com/news_pict_05/05E7E5C9CE6AA09669C839A987C3080C"},{id:4,name:"\u0414\u043e\u0431\u0440\u044b\u043d\u044f \u0410\u043b\u0442\u0443\u0444\u044c\u0435\u0432",img:"https://sun9-33.userapi.com/impf/c638418/v638418588/4a9e7/PUUC3W2ihCA.jpg?size=400x0&quality=90&sign=b34a698aa4dfc7fc4851449f08824abb&ava=1"}],messages:[{a:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442 \u043f\u0440\u0438\u044f\u0442\u0435\u043b\u044c!",isYou:!1},{id:2,message:"\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0432\u0443\u044e))",isYou:!0},{id:3,message:"\u041a\u0430\u043a \u0434\u0435\u043b\u0438\u0448\u043a\u0438?",isYou:!0},{id:4,message:"\u041d\u0443 \u0442\u0430\u043a\u043e\u0435....",isYou:!1},{id:5,message:"\u0410 \u0447\u0442\u043e \u0441\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c?",isYou:!0},{id:6,message:"\u0412 \u0448\u043a\u043e\u043b\u0435 \u0434\u0432\u043e\u0439\u043a\u0443 \u043f\u043e\u043b\u0443\u0447\u0438\u043b:(",isYou:!1},{id:7,message:"\u041d\u0443 \u043d\u0435 \u0440\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0439\u0441\u044f, \u0432\u0441\u0435 \u043d\u043e\u0440\u043c \u0431\u0443\u0434\u0435\u0442!",isYou:!0},{id:8,message:"\u041d\u0443 \u043d\u0435 \u0440\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0439\u0441\u044f, \u0432\u0441\u0435 \u043d\u043e\u0440\u043c \u0431\u0443\u0434\u0435\u0442!",isYou:!1}]},{a:[{id:1,message:"2edsfd",isYou:!1},{id:2,message:"dfdf dfdf dsd it-sdsd?",isYou:!0},{id:3,message:"fddfdf",isYou:!0},{id:4,message:"dffdf",isYou:!1},{id:5,message:"dfdfdf",isYou:!0}]},{a:[{id:1,message:"dfdfdfdfdfd",isYou:!1},{id:2,message:"dfdf is dsd dfdf-sdsd?",isYou:!0},{id:3,message:"qwq   wewe",isYou:!0},{id:4,message:"fdfdfdf",isYou:!1},{id:5,message:"fdf",isYou:!0}]},{a:[{id:1,message:"l;kwe;lmlksmd",isYou:!1},{id:2,message:"Hdsow is dsd it-wewe?",isYou:!0},{id:3,message:"dfdf",isYou:!0},{id:4,message:"dfdf",isYou:!1},{id:5,message:"ewdsdsd",isYou:!0}]}]},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ne=Object(x.d)(Object(v.b)((function(e){return{dialogsReducer:e.dialogsReducer}})),y.f,k)(Ue),Te=function(e){return o.a.createElement("div",{className:b.a.content},o.a.createElement(ve,null),o.a.createElement(Pe,null),o.a.createElement(Ne,null))},Re=a(39),De=a.n(Re),Ie=a(47),Me=a.n(Ie),Fe=function(e){return o.a.createElement("div",{className:Me.a.post},o.a.createElement("img",{className:Me.a.imgAva,src:e.photo||"https://img8.eadaily.com/r650x450/o/7ac/95f49146b4501082acd22918d4cc2.jpg",alt:e.name}),o.a.createElement("div",{className:Me.a.postArea},o.a.createElement("div",{className:Me.a.postName},e.fullname),o.a.createElement("div",{className:Me.a.postText},e.text)))},Ye=a(127),ze=a(128),Le=function(e){if(!e)return"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430!"},He=a(37),Be=function(e){var t=e.userID;t||(t=e.id);var a=Object(r.useState)(!1),n=Object(He.a)(a,2),c=n[0],i=n[1],s=Object(r.useState)(e.status),u=Object(He.a)(s,2),l=u[0],m=u[1];Object(r.useEffect)((function(){m(e.status)}),[e.status]);var d=function(){i(!0)};return o.a.createElement("div",null,c&&e.id==t?o.a.createElement("div",null," ",o.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},onBlur:function(){i(!1),e.updateStatus(l)},autoFocus:!0,value:l})):o.a.createElement("div",{onClick:d},"Status:",e.status||o.a.createElement("span",null,"3% ")))},Ve=a(94),qe=a(38),Je=a.n(qe),We=function(e){var t=e.input,a=e.meta,n=Object(Ve.a)(e,["input","meta"]),r=a.touched&&a.error;return o.a.createElement("div",{className:Je.a.formControl+" "+(r?Je.a.error:" ")},o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,n))),r&&o.a.createElement("span",null,a.error))},Ge=a(134),Ke=a.n(Ge),Qe=Object(ze.a)({form:"descriptionStatus"})((function(e){var t=e.contacts,a=e.lookingForAJob,n=e.handleSubmit,c=e.isOwner,i=Object(r.useState)(!1),s=Object(He.a)(i,2),u=s[0],l=s[1];return o.a.createElement("div",{className:Ke.a.content},u?o.a.createElement("div",null,o.a.createElement("form",{onSubmit:n},o.a.createElement("button",{onClick:function(){return l(!1)}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"),o.a.createElement("div",null,o.a.createElement(Ye.a,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 facebook",name:"facebook",component:We})),o.a.createElement("div",null,o.a.createElement(Ye.a,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0441\u0430\u0439\u0442",name:"website",component:"input"})),o.a.createElement("div",null,o.a.createElement(Ye.a,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0432\u043a",name:"vk",component:"input"})),o.a.createElement("div",null,o.a.createElement(Ye.a,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 twitter",name:"twitter",component:"input"})),o.a.createElement("div",null,o.a.createElement(Ye.a,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 instagram",name:"instagram",component:"input"})),o.a.createElement("div",null,o.a.createElement(Ye.a,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 youtube",name:"youtube",component:"input"})),o.a.createElement("div",null,o.a.createElement(Ye.a,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 youtube",name:"youtube",component:"input"})),o.a.createElement("div",null,o.a.createElement(Ye.a,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 github",name:"github",component:"input"})),o.a.createElement("div",null,o.a.createElement(Ye.a,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 mainLink",name:"mainLink",component:"input"})))):o.a.createElement("div",null,c?o.a.createElement("button",{onClick:function(){return l(!0)}},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"):o.a.createElement("div",null," "),o.a.createElement("div",null,a?o.a.createElement("div",null,"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443"):o.a.createElement("div",null,"\u041d\u0435 \u0438\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443")),o.a.createElement("div",null,o.a.createElement("b",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),": ",Object.keys(t).map((function(e){return o.a.createElement(Ze,{key:e,contactTitle:e,contactValue:t[e]})})))))})),Ze=function(e){var t=e.contactTitle,a=e.contactValue;return o.a.createElement("div",null,o.a.createElement("b",null,t),": ",o.a.createElement("span",null,a))},$e=Qe,Xe=(n=300,function(e){if(e.length>n)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ".concat(n," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432!")}),et=Object(ze.a)({form:"postAddPostForm"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement("div",null,o.a.createElement(Ye.a,{className:De.a.input,component:"textarea",name:"newPostBody",placeholder:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u043e\u0441\u0442",validate:[Le,Xe]})),o.a.createElement("div",null,o.a.createElement("button",{className:De.a.btn},"\u041e\u0442\u0440\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))})),tt=function(e){if(!e.profile)return o.a.createElement(P,null);var t=e.profilePage.map((function(t){return o.a.createElement(Fe,{img:t.img,text:t.text,key:t.id,name:t.name,fullname:e.profile.fullName,photo:e.profile.photos.large})}));return o.a.createElement("div",{className:De.a.content},e.isFetching?o.a.createElement(P,null):o.a.createElement("div",{className:De.a.ava},o.a.createElement("img",{src:e.photo?e.photo:"https://img8.eadaily.com/r650x450/o/7ac/95f49146b4501082acd22918d4cc2.jpg",alt:""}),e.isOwner&&o.a.createElement("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}})),o.a.createElement("div",{className:De.a.me},e.profile.fullName,o.a.createElement(Be,{status:e.status,updateStatus:e.updateStatusThunk,id:e.id,userID:e.match.params.userID}),o.a.createElement("div",null,"\u041e\u0431\u043e \u043c\u043d\u0435: ",e.profile.aboutMe)),o.a.createElement($e,{handleSubmit:function(e){console.log("formData",e)},contacts:e.profile.contacts,lookingForAJob:e.lookingForAJob,isOwner:e.isOwner}),o.a.createElement("div",{className:De.a.posts},e.isOwner&&o.a.createElement(et,{onSubmit:function(t){e.addPost(t.newPostBody)}}),t))},at=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||(e=this.props.id),this.props.getProfileThunk(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userID!=e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return o.a.createElement(tt,Object.assign({},this.props,{isOwner:!this.props.match.params.userID}))}}]),a}(o.a.Component),nt=Object(x.d)(Object(v.b)((function(e){return{profilePage:e.ProfilePageReducer.profilePage,newPostText:e.ProfilePageReducer.newPostText,photo:e.ProfilePageReducer.photo,isFetching:e.UsersPageReducer.isFetching,status:e.ProfilePageReducer.status,id:e.AuthPageReducer.id,profile:e.ProfilePageReducer.profile}}),(function(e){return{addPost:function(t){e(oe(t))},setPhotoUser:function(t){e(ie(t))},getProfileThunk:function(t){e(le(t))},updateStatusThunk:function(t){e(function(e){return function(){var t=Object(A.a)(C.a.mark((function t(a){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(e);case 2:0===t.sent.data.resultCode&&a(se(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},savePhoto:function(t){var a;e((a=t,function(){var e=Object(A.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(a);case 2:0===(n=e.sent).data.resultCode&&t({type:"SAVE_PHOTO_SUCCESS",photos:n.data.data.photos});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}}})),y.f)(at),rt=a(136),ot=a.n(rt),ct=function(e){return o.a.createElement("div",null,o.a.createElement(f.b,{to:"/profile/"+e.u.id},e.u.name,o.a.createElement("div",null,o.a.createElement("img",{src:e.u.photos.large?e.u.photos.large:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/1200px-VK.com-logo.svg.png",alt:e.u.name})),o.a.createElement("div",null,e.status)),e.u.followed?o.a.createElement("button",{disabled:e.Disabled.some((function(t){return t===e.u.id})),onClick:function(){return e.unfUser(e.u.id)}}," \u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f "):o.a.createElement("button",{disabled:e.Disabled.some((function(t){return t===e.u.id})),onClick:function(){return e.fUser(e.u.id)}}," \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f "))},it=a(74),st=a.n(it),ut=function(e){for(var t=e.totalItemsCount,a=e.pageSize,n=e.currentPage,c=e.onPageChanged,i=e.portionSize,s=void 0===i?10:i,u=Math.ceil(t/a),l=[],m=1;m<=u;m++)l.push(m);var d=Math.ceil(u/s),p=Object(r.useState)(1),f=Object(He.a)(p,2),g=f[0],h=f[1],b=(g-1)*s+1,v=g*s;return o.a.createElement("div",{className:st.a.paginator},o.a.createElement("button",{disabled:g<=1,onClick:function(){h(g-1)}},"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435"),l.filter((function(e){return e>=b&&e<=v})).map((function(e){return o.a.createElement("span",{className:xe()(Object(we.a)({},st.a.selectedPage,n===e),st.a.pageNumber),key:e,onClick:function(t){c(e)}},e)})),o.a.createElement("button",{disabled:d<=g,onClick:function(){h(g+1)}},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435"))},lt=function(e){var t=function(t){e.followUserThunk(t)},a=function(t){e.unfollowUserThunk(t)};return o.a.createElement("div",{className:ot.a.content},e.isFetching?o.a.createElement(P,null):o.a.createElement("div",null,o.a.createElement(ut,{currentPage:e.currentPage,onPageChanged:function(t){e.onPageChangedThunk(t,e.pageSize)},totalItemsCount:e.totalItemsCount,pageSize:e.pageSize}),e.users.map((function(n){return o.a.createElement(ct,{u:n,Disabled:e.Disabled,unfUser:a,fUser:t,key:n.id,status:e.status})}))))},mt=function(e){return e.UsersPageReducer.users},dt=function(e){return e.UsersPageReducer.pageSize},pt=function(e){return e.UsersPageReducer.totalUsers},ft=function(e){return e.UsersPageReducer.currentPage},gt=function(e){return e.UsersPageReducer.isFetching},ht=function(e){return e.UsersPageReducer.isDisabled},bt=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.getUserAC(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){for(var e=Math.ceil(this.props.totalUsers/this.props.pageSize),t=[],a=1;a<=e;a++)t.push(a);return o.a.createElement(lt,Object.assign({},this.props,{pages:t,followUser:D.followUser,unfollowUser:D.unfollowUser,currentPage:this.props.currentPage,totalItemsCount:this.props.totalUsers,pageSize:this.props.pageSize}))}}]),a}(o.a.Component),vt=Object(x.d)(Object(v.b)((function(e){return{users:mt(e),pageSize:dt(e),totalUsers:pt(e),currentPage:ft(e),isFetching:gt(e),Disabled:ht(e)}}),{getUserAC:function(e,t){return function(){var a=Object(A.a)(C.a.mark((function a(n){var r;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(K(!0)),a.next=3,D.getUsers(e,t);case 3:r=a.sent,n(q(r.items)),n((o=r.totalCount,{type:ee,totalCount:o})),n(K(!1));case 7:case"end":return a.stop()}var o}),a)})));return function(e){return a.apply(this,arguments)}}()},followUserThunk:function(e){return function(){var t=Object(A.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=D.followUser.bind(D),ne(a,e,n,J);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollowUserThunk:function(e){return function(){var t=Object(A.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=D.unfollowUser.bind(D),ne(a,e,n,W);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},onPageChangedThunk:function(e,t){return function(){var a=Object(A.a)(C.a.mark((function a(n){var r;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(K(!0)),n({type:X,currentPage:e}),a.next=4,D.getUsers(e,t);case 4:r=a.sent,n(q(r.items)),n(K(!1));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},getStatusThunk:ue}),k)(bt),Et=a(32),_t=a.n(Et),Ot=function(e){return e.profilePage?(console.log(e.profilePage.photos.large),o.a.createElement("header",{className:_t.a.header},o.a.createElement(f.b,{to:"/profile",activeClassName:_t.a.active},"\u041c\u043e\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"),o.a.createElement(f.b,{to:"/dialogs",activeClassName:_t.a.active},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),o.a.createElement(f.b,{to:"/users",activeClassName:_t.a.active},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"),e.isAuth?o.a.createElement("div",{className:_t.a.auth},e.login," ",o.a.createElement("img",{src:e.profilePage.photos.large?e.profilePage.photos.large:"https://avatars.yandex.net/get-music-content/175191/f26e7e1a.p.5821649/m1000x1000",alt:""})," ",o.a.createElement(f.b,{to:"/login",onClick:e.logout},"\u0412\u044b\u0439\u0442\u0438")):o.a.createElement("div",{className:_t.a.auth},o.a.createElement(f.b,{className:_t.a.logout,to:"/login"},"\u0412\u043e\u0439\u0434\u0438\u0442\u0435")))):o.a.createElement(P,null)},jt=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement(Ot,this.props)}}]),a}(o.a.Component),Pt=Object(v.b)((function(e){return{login:e.AuthPageReducer.login,profilePage:e.ProfilePageReducer.profile,isAuth:e.AuthPageReducer.isAuth}}),{setUserData:fe,setPhotoUser:ie,logoutAC:function(){return{type:"LOGOUT"}},logout:function(e){return function(){var e=Object(A.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:0===e.sent.data.resultCode&&t(fe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(jt),wt=a(137),yt=a.n(wt),St=Object(ze.a)({form:"login"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement("div",null,o.a.createElement(Ye.a,{placeholder:"login",name:"Login",component:We,validate:[Le]}),"  "),o.a.createElement("div",null,o.a.createElement(Ye.a,{placeholder:"password",name:"Password",type:"password",component:We,validate:[Le]}),"  "),o.a.createElement("div",null,o.a.createElement(Ye.a,{type:"checkbox",name:"Remember me",component:"c"})," \u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f  "),e.error&&o.a.createElement("div",{className:Je.a.formSummaryError},e.error),o.a.createElement("div",null,o.a.createElement("button",null," \u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u0430\u0443\u043d\u0442 ")))})),kt=Object(v.b)((function(e){return{isAuth:e.AuthPageReducer.isAuth,isFetching:e.UsersPageReducer.isFetching}}),{setDataLoginThunk:function(e,t){return function(){var a=Object(A.a)(C.a.mark((function a(n){var r,o;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,M(e,t);case 2:0===(r=a.sent).data.resultCode?n(ge()):(o=r.data.messages.length>0?r.data.messages[0]:"\u041e\u0448\u0438\u0431\u043a\u0430",n(Object(de.a)("login",{_error:o})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?o.a.createElement(y.a,{to:"/profile"}):e.isFetching?o.a.createElement(P,null):o.a.createElement("div",{className:yt.a.login},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",o.a.createElement(St,{onSubmit:function(t){e.setDataLoginThunk(t.Login,t.Password),console.log(t.Password)}}))})),xt={initialized:!1},Ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(T.a)(Object(T.a)({},e),{},{initialized:!0});default:return e}},Ct=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?o.a.createElement("div",{className:"App"},o.a.createElement(Pt,null),o.a.createElement(y.b,{path:"/profile/:userID?",render:function(){return o.a.createElement(nt,null)}}),o.a.createElement(y.b,{path:"/dialogs/:userID?",component:Te}),o.a.createElement(y.b,{path:"/users",component:vt}),o.a.createElement(y.b,{path:"/login",component:kt}),o.a.createElement(g,null)):o.a.createElement(P,null)}}]),a}(o.a.Component),At=Object(v.b)((function(e){return{initialized:e.AppReducer.initialized}}),{initializeApp:function(){return function(e){var t=e(ge());Promise.all([t]).then((function(){e({type:"SET_INITIALIZED"})}))}}})(Ct);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Nt=a(138),Tt=a(129),Rt=Object(x.c)({ProfilePageReducer:me,UsersPageReducer:re,AuthPageReducer:he,form:Tt.a,AppReducer:Ut,dialogsReducer:Ae}),Dt=Object(x.e)(Rt,Object(x.a)(Nt.a));window.store=Dt;var It=Dt;i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f.a,null,o.a.createElement(v.a,{store:It},o.a.createElement(At,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t,a){e.exports={footer:"Footer_footer__1dvtT",img:"Footer_img__1lQzi",imgMessages:"Footer_imgMessages__1ACES",active:"Footer_active__1A6_j"}},32:function(e,t,a){e.exports={header:"Header_header__318n1",active:"Header_active__1tsaU",auth:"Header_auth__2-Am-",logout:"Header_logout__17PEw"}},38:function(e,t,a){e.exports={formControl:"FormsControls_formControl__1nahg",error:"FormsControls_error__c9KbS",formSummaryError:"FormsControls_formSummaryError__A9BDQ"}},39:function(e,t,a){e.exports={content:"Main_content__3Bs3o",ava:"Main_ava__1o9-r",me:"Main_me__3UC4q",posts:"Main_posts__lOreb",input:"Main_input__1jIeW",btn:"Main_btn__1fyob"}},46:function(e,t,a){e.exports={MessageArea:"MessageArea_MessageArea__3LRkz",right:"MessageArea_right__1Vt9Y",message:"MessageArea_message__3wlk0",text:"MessageArea_text__2syYp"}},47:function(e,t,a){e.exports={post:"Post_post__2V2IF",postArea:"Post_postArea__3QaqU",postName:"Post_postName__3RciP",postText:"Post_postText__1qnie"}},71:function(e,t,a){e.exports={me:"Me_me__mJ2AC",nameme:"Me_nameme__3nqDB"}},72:function(e,t,a){e.exports={dialogs:"Message_dialogs__bIMn1",DialogItem:"Message_DialogItem__2u7aY",active:"Message_active__2Ajpx"}},74:function(e,t,a){e.exports={paginator:"Paginator_paginator__3Vy7T",pageNumber:"Paginator_pageNumber__3M7aO",selectedPage:"Paginator_selectedPage__1sbx3"}}},[[164,1,2]]]);
//# sourceMappingURL=main.11e8a1b2.chunk.js.map