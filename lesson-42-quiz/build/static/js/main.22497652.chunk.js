(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(2),c=a.n(r),i=(a(12),a(3)),o=a(4),l=a(5),m=a(6),u=function(e){return s.a.createElement("li",{className:"list-group-item pl-3"},s.a.createElement("div",{className:"form-check"},s.a.createElement("input",{className:"form-check-input",type:"radio",name:"answer",id:e.answer,onChange:function(){return e.activeAnswer(e.keyAnswer)},value:e.answer}),s.a.createElement("label",{className:"form-check-label",htmlFor:e.answer},e.answer)))},d=function(e){return s.a.createElement("ul",{className:"list-group list-group-flush ml-3 mr-3"},e.answers.map((function(t,a){return s.a.createElement(u,{key:a,keyAnswer:a,answer:t,activeAnswer:e.activeAnswer})})))},h=function(e){return s.a.createElement("button",{type:e.typeButton,onClick:e.onClick,className:e.classButton,disabled:e.disabled},e.children)},v=function(e){return s.a.createElement("form",{onSubmit:e.nextQuestion},s.a.createElement("div",{className:"card-body"},s.a.createElement("p",{className:"card-text font-weight-bold mb-1"},"\u0417\u0430\u043f\u0438\u0442\u0430\u043d\u043d\u044f \u2116",e.activeQuestion),s.a.createElement("p",{className:"card-text"},e.question.question)),s.a.createElement(d,{answers:e.answers,activeAnswer:e.activeAnswer}),s.a.createElement("div",{className:"card-body d-flex justify-content-end align-items-center mb-1"},s.a.createElement("div",{className:"mr-3"},e.activeQuestion,"/",e.quizLength),s.a.createElement(h,{classButton:"btn btn-dark",typeButton:"submit",disabled:e.isDisabledButton},"\u041f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438")))},w=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"card-body mt-n3"},s.a.createElement("hr",null),s.a.createElement("h4",{className:"card-text font-weight-bold mt-5 mb-2 text-center"},"\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"),s.a.createElement("p",{className:"card-text text-center display-2 font-weight-lighter"},e.correctAnswers/e.quizLength*100,"%"),s.a.createElement("p",{className:"text-center text-black-50"},"\u0412\u0438 \u0434\u0430\u043b\u0438 ",e.correctAnswers,"/",e.quizLength," \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0438\u0445 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456"),s.a.createElement("hr",{className:"mt-5"})),s.a.createElement("div",{className:"card-body d-flex justify-content-center align-items-center mb-3 mt-n3"},s.a.createElement(h,{classButton:"btn btn-dark",typeButton:"button",onClick:e.onRetry,disabled:e.isDisabledButton},"\u041f\u0440\u043e\u0439\u0442\u0438 \u0449\u0435 \u0440\u0430\u0437")))},b=function(e){return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"card col-11 col-lg-7 col-md-10 col-sm-12 col-xs-12 mx-auto pl-2 pr-2 mb-5",style:{width:"18rem",marginTop:"60px"}},s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title mt-2"},e.message,e.error?e.error:""))))},E=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isFinished:!1,activeQuestion:1,correctAnswers:0,activeAnswer:0,isDisabledButton:!0},e.nextQuestionHandler=function(t){t.preventDefault(),e.state.data[e.state.activeQuestion-1].correct_answers[0]===t.target.answer.value&&e.setState({correctAnswers:e.state.correctAnswers+1}),e.state.activeQuestion<Object.keys(e.state.items).length?e.setState({activeQuestion:e.state.activeQuestion+1}):e.setState({isFinished:!0}),t.target.answer[e.state.activeAnswer].checked=!1,e.setState({isDisabledButton:!0})},e.onActiveAnswerHandler=function(t){e.setState({activeAnswer:t,isDisabledButton:!1})},e.onRetryHandler=function(){e.setState({isFinished:!1,activeQuestion:1,correctAnswers:0,activeAnswer:0,isDisabledButton:!0})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("data/Questions.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t,data:Object.values(t)})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return t?s.a.createElement(b,{message:"\u041f\u043e\u043c\u0438\u043b\u043a\u0430: ",error:t.message}):a?s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"card col-11 col-lg-7 col-md-10 col-sm-12 col-xs-12 mx-auto pl-2 pr-2 mb-5",style:{width:"18rem",marginTop:"60px"}},s.a.createElement("div",{className:"card-body"},s.a.createElement("h1",{className:"card-title font-weight-bold mt-2 mb-n3"},"\u041d\u0430\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0442\u0438 \u043a\u0456\u0431\u0435\u0440\u0441\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u0438\u0439 \u0435\u043a\u0441\u043f\u0435\u0440\u0442")),this.state.isFinished?s.a.createElement(w,{correctAnswers:this.state.correctAnswers,quizLength:Object.keys(n).length,onRetry:this.onRetryHandler}):s.a.createElement(v,{question:n["question_"+this.state.activeQuestion],answers:n["question_"+this.state.activeQuestion].answers,activeQuestion:this.state.activeQuestion,quizLength:Object.keys(n).length,nextQuestion:this.nextQuestionHandler,activeAnswer:this.onActiveAnswerHandler,isDisabledButton:this.state.isDisabledButton}))):s.a.createElement(b,{message:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f..."})}}]),a}(s.a.Component);var f=function(){return s.a.createElement("div",{className:"container"},s.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.22497652.chunk.js.map