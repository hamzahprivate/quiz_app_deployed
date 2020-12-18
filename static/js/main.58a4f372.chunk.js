(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{59:function(e,t,a){e.exports=a(72)},64:function(e,t,a){},65:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),s=a.n(o),i=(a(64),a(65),a(31)),c=a(2),l=a(20),u=function(e){var t=e.component,a=Object(c.a)(e,["component"]),n=a.routeCondition,o=a.redirectPath;return r.a.createElement(l.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(l.a,{to:{pathname:o,state:{alertMsg:a.alertMsg}}})}}))},m=a(33),d=a(19),f=Object(n.createContext)(),p=function(e){var t=Object(n.useState)(0),a=Object(d.a)(t,2),o=a[0],s=a[1],i=Object(n.useState)(!1),c=Object(d.a)(i,2),l=c[0],u=c[1],p=Object(n.useState)([{questText:"Who discovered gravity?",correctAns:"Isaac Newton",userAns:void 0,answered:!1,allOptions:["Nickola Tesla","Albert Einstein","Isaac Newton","Michael Jackson"]},{questText:"Which metal is liquid at room temperature?",correctAns:"Mercury",userAns:void 0,answered:!1,allOptions:["Mercury","Iron","Copper","Gold"]},{questText:"Which one of these is not a starter Pokemon?",correctAns:"Agumon",userAns:void 0,answered:!1,allOptions:["Bulbasaur","Agumon","Charizard","Squirtle"]},{questText:"Which of these is the largest continent of the world?",correctAns:"Asia",userAns:void 0,answered:!1,allOptions:["Africa","Asia","Australia","Europe"]},{questText:"Oil, Natural gas, and coal are examples of...",correctAns:"Fossil Fuels",userAns:void 0,answered:!1,allOptions:["Renewable resources","Biofuels","Geothermal resources","Fossil Fuels"]}]),b=Object(d.a)(p,2),g=b[0],h=b[1],E=!(o<g.length-1),x=g.every((function(e){return!0===e.answered}));return r.a.createElement(f.Provider,{value:{questions:g,questIndex:o,setQuestIndex:s,isLastQuestion:E,ansAllQuest:x,markAnswered:function(e,t){h(g.map((function(a,n){return n===e?Object(m.a)({},a,{answered:!0,userAns:t}):a})))},submitQuiz:l,setSubmitQuiz:u,setQuestions:h}},e.children)},b=Object(n.createContext)(),g=function(e){var t=Object(n.useState)(0),a=Object(d.a)(t,2),o=a[0],s=a[1];return r.a.createElement(b.Provider,{value:{userScore:o,increaseScore:function(){s(o+10)},setUserScore:s}},e.children)},h=a(100),E=a(98),x=Object(E.a)({button:{width:"80%",marginTop:"5%",borderRadius:"15px",height:"70%",border:"3px solid #5794ff",color:"#5794ff",fontSize:"16px"},buttonFilled:{width:"80%",marginTop:"7%",borderRadius:"15px",height:"70%",backgroundColor:"#5794ff",color:"#ffffff",fontSize:"16px"}}),v=function(e){var t=x(),a=Object(n.useContext)(f),o=a.questIndex,s=a.setQuestIndex,i=a.isLastQuestion,c=a.markAnswered,l=Object(n.useContext)(b).increaseScore,u=e.option,m=e.correctAns,d=e.userAns;return r.a.createElement(h.a,{className:d===u?t.button:t.buttonFilled,onClick:function(){c(o,u),i||s(o+1),u===m&&l()}},u)},A=a(102),y=a(73),O=Object(E.a)({card:{maxWidth:"90%",margin:"auto"},paper:{padding:"6% 2%",margin:"0% 5% 10% 5%",borderRadius:"20px"}}),w=function(e){var t=O(),a=e.question,n=a.questText,o=a.correctAns,s=a.allOptions,i=a.userAns;return r.a.createElement("div",null,r.a.createElement("div",{className:t.card},r.a.createElement(y.a,{elevation:10,className:t.paper},r.a.createElement("div",{style:{fontSize:"80%"}},n)),r.a.createElement(A.a,{container:!0},s.map((function(e){return r.a.createElement(A.a,{item:!0,xs:12,sm:6},r.a.createElement(v,{option:e,correctAns:o,userAns:i}))})))))},C=a(113),S=a(103),j=a(75),k=Object(E.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},submitBbutton:{width:"82%",marginTop:"10%",borderRadius:"15px",backgroundColor:"#ffffff",border:"1px solid  #1E88E5 ","&:hover":{backgroundColor:" #5794ff ",color:"white"}}}})),T=Object(l.f)((function(e){var t=k(),a=Object(n.useState)(!1),o=Object(d.a)(a,2),s=o[0],i=o[1],c=Object(n.useContext)(f),l=c.ansAllQuest,u=c.setSubmitQuiz,m=function(){i(!1)};return r.a.createElement("div",null,r.a.createElement(h.a,{type:"button",size:"large",onClick:function(){i(!0)},className:t.submitBbutton,variant:"contained"},"Submit"),r.a.createElement(C.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:s,onClose:m,closeAfterTransition:!0,BackdropComponent:S.a,BackdropProps:{timeout:500}},r.a.createElement(j.a,{in:s},r.a.createElement("div",{className:t.paper},l?r.a.createElement("p",{id:"transition-modal-description"},"Submit your quiz? You can't change your answers after submission."):r.a.createElement("p",{id:"transition-modal-description"},"You haven't attempted all questions. Are you sure you want to submit?"),r.a.createElement(h.a,{onClick:function(){u(!0),localStorage.setItem("submitQuiz",!0),e.history.push("/results")},variant:"outlined",color:"primary"},"Submit"),r.a.createElement(h.a,{onClick:m,variant:"outlined",color:"secondary",style:{marginLeft:"2%"}},"Cancel")))))})),N=a(114),z=a(104),Q=a(105),q=a(48),I=a.n(q),M=a(47),P=a.n(M),R=function(e){var t=Object(n.useContext)(f),a=t.questions,o=t.questIndex,s=t.setQuestIndex,i=t.isLastQuestion;return r.a.createElement("div",null,r.a.createElement(z.a,null,e.location.state&&r.a.createElement(N.a,{icon:!1,severity:"error"},e.location.state.alertMsg),r.a.createElement("div",{style:{textAlign:"right",marginRight:"12%"}},r.a.createElement(Q.a,{onClick:function(){o>0&&s(o-1)}},r.a.createElement(P.a,null)),r.a.createElement("span",{style:{fontSize:"15px"}},o+1," / ",a.length),r.a.createElement(Q.a,{onClick:function(){i||s(o+1)}},r.a.createElement(I.a,null))),r.a.createElement(w,{question:a[o],style:{marginTop:"0px"}}),r.a.createElement(T,null)))},B=a(107),F=a(111),W=a(110),J=a(106),L=a(108),U=a(109),Y=a(49),G=a.n(Y),$=a(50),D=a.n($),H=Object(E.a)({button:{marginTop:"5%",backgroundColor:" #5794ff",color:"#ffffff",width:"100%",border:"1px solid   #5794ff",borderRadius:"15px","&:hover":{backgroundColor:" #ffffff ",color:"black",border:"1px solid   #ffffff"}},bodyText:{fontSize:"18px"},headingText:{fontSize:"20px"}}),K=function(e){var t=H(),a=Object(n.useContext)(f),o=a.questions,s=a.setSubmitQuiz,i=a.setQuestIndex,c=a.setQuestions,l=Object(n.useContext)(b).setUserScore;return r.a.createElement(z.a,{style:{marginTop:"10%"}},e.location.state&&r.a.createElement(N.a,{icon:!1,severity:"error"},e.location.state.alertMsg),r.a.createElement(J.a,{component:y.a},r.a.createElement(B.a,{"aria-label":"simple table"},r.a.createElement(L.a,null,r.a.createElement(U.a,null,r.a.createElement(W.a,{align:"center",className:t.headingText},"Q.No"),r.a.createElement(W.a,{align:"center",className:t.headingText},"Correct?"),r.a.createElement(W.a,{align:"center",className:t.headingText},"Correct Answer"),r.a.createElement(W.a,{align:"center",className:t.headingText},"You Answered"))),r.a.createElement(F.a,null,o.map((function(e,a){return r.a.createElement(U.a,{key:a},r.a.createElement(W.a,{align:"center",className:t.bodyText},a+1),r.a.createElement(W.a,{align:"center",className:t.bodyText},e.userAns===e.correctAns?r.a.createElement(G.a,{style:{color:"green"}}):r.a.createElement(D.a,{style:{color:"red"}})),r.a.createElement(W.a,{align:"center",className:t.bodyText},e.correctAns),r.a.createElement(W.a,{align:"center",className:t.bodyText},e.userAns||"Unattempted"))}))))),r.a.createElement(h.a,{className:t.button,variant:"contained",onClick:function(){c(o.map((function(e){return Object(m.a)({},e,{answered:!1,userAns:void 0})}))),s(!1),localStorage.removeItem("submitQuiz"),i(0),l(0),e.history.push("/")}},"Reset"))},V=a(112);var X=function(){var e=Object(n.useContext)(f).submitQuiz,t=JSON.parse(localStorage.getItem("submitQuiz"));return r.a.useEffect((function(){t=JSON.parse(localStorage.getItem("submitQuiz"))}),[e]),r.a.createElement("div",{className:"App"},r.a.createElement(V.a,{position:"static",style:{height:"100px",backgroundColor:"#5794ff"}},r.a.createElement("h4",{style:{fontFamily:"Merriweather, serif"}},"React Quiz App")),r.a.createElement(g,null,r.a.createElement(i.a,null,r.a.createElement(u,{exact:!0,path:"/",redirectPath:"/results",alertMsg:"Please press the reset button to retake the quiz.",component:R,routeCondition:!t}),r.a.createElement(u,{exact:!0,path:"/results",redirectPath:"/",alertMsg:"Please submit the exam to view the result.",component:K,routeCondition:t}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(p,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[59,1,2]]]);
//# sourceMappingURL=main.58a4f372.chunk.js.map