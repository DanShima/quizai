(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t){},104:function(e,t){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(67),o=a.n(l),u=(a(79),a(68)),r=a(69),s=a(72),c=a(70),d=a(73),m=(a(80),a(71)),b=a.n(m),v=[{id:"q1",question:"Do you often see the best in things?",options:[{id:"q1a",label:"Always",value:1},{id:"q1b",label:"Usually, yes",value:.75},{id:"q1c",label:"Not really",value:.25},{id:"q1d",label:"Never!",value:0},{id:"q1e",label:"Sometimes",value:.5}]},{id:"q2",question:"Do you feel like most things are your fault?",options:[{id:"q2a",label:"Everything I touch dies",value:0},{id:"q2b",label:"Yes",value:.25},{id:"q2c",label:"Sometimes",value:.5},{id:"q2d",label:"Rarely",value:.75},{id:"q2e",label:"Never",value:1}]},{id:"q3",question:"You look wonderful today.",options:[{id:"q3a",label:"Yah that makes my day <3!",value:1},{id:"q3b",label:"Thanks!",value:.75},{id:"q3c",label:"I really hate compliments",value:0},{id:"q3d",label:"Ok",value:.5},{id:"q3e",label:"Do you want something from me?",value:.25}]},{id:"q4",question:"How do you feel about perfection?",options:[{id:"q4a",label:"Neutral",value:.5},{id:"q4b",label:"Perfection is quite important to me",value:.25},{id:"q4c",label:"Everything I do must be perfect",value:0},{id:"q4d",label:"I don't mind as long as everyone's happy!",value:1},{id:"q4e",label:"Sometimes perfection is desired",value:.7}]},{id:"q5",question:"Imagine you have a absolutely delicious pizza. An obscured wet floor causes you to slip and drop it on the floor.",options:[{id:"q5a",label:"I deserved that.",value:0},{id:"q5b",label:"These things happen. I'll get another",value:1},{id:"q5c",label:"Top 5 worst days of my life",value:.25},{id:"q5d",label:"Rest in Pepperoni, pizza.",value:.7},{id:"q5e",label:"Bummer",value:.5}]}],p=[{id:"vq1",question:"How full is the proverbial glass?",options:[{id:"vq1a",label:"As empty as MY SOUL",value:0},{id:"vq1b",label:"Definitely half empty",value:.25},{id:"vq1c",label:"It's half full",value:.75},{id:"vq1d",label:"Full to the brim",value:1},{id:"vq1e",label:"I don't know",value:.5}]},{id:"vq2",question:"Do you have trust and faith in people?",options:[{id:"vq2d",label:"Always",value:1},{id:"vq2a",label:"They are only out to destroy me",value:0},{id:"vq2b",label:"Rarely",value:.2},{id:"vq2c",label:"Most of the time",value:.75},{id:"vq2e",label:"Sometimes",value:.5}]}],h=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(s.a)(this,Object(c.a)(t).call(this))).isOptionChecked=function(t,a){return 0!==e.state.trainingAnswers[t][a]},e.onOptionChange=function(t,a){e.setState(function(e){var n=Object.assign(e,{}).trainingAnswers;return n[t]=Array(5).fill(0),n[t][a]=1,{trainingAnswers:n}})},e.buildOptions=function(t,a){return a.map(function(a,n){var l=0!==e.state.trainingAnswers[t][n],o="q".concat(t,"-o").concat(n);return i.a.createElement("label",{className:"option-label",key:o,htmlFor:o},i.a.createElement("input",{type:"radio",required:!0,name:"q".concat(t),id:o,checked:l,onChange:function(){return e.onOptionChange(t,n)}}),i.a.createElement("span",null,a.label))})},e.buildQuestions=function(t){return t.map(function(t,a){return i.a.createElement("div",{className:"question",key:t.id},i.a.createElement("h4",null,"".concat(a+1,". ").concat(t.question)),i.a.createElement("div",{className:"options"},e.buildOptions(a,t.options)))})},e.buildValidationOptions=function(e,t){return t.map(function(t,a){return i.a.createElement("span",{className:"option-label",key:t.id},i.a.createElement("span",null,"".concat(t.label,": ").concat(Math.round(100*[e[0][a]]),"%")),i.a.createElement("div",{className:"bar",style:{width:"".concat(Math.round(100*e[0][a]),"%")}}))})},e.buildValidationQuestions=function(t,a){return a.map(function(a,n){return i.a.createElement("div",{className:"question",key:a.id},i.a.createElement("h4",null,"".concat(n+1,". ").concat(a.question)),i.a.createElement("div",{className:"options"},e.buildValidationOptions(t,a.options)))})},e.getPredictions=function(){var t=p.map(function(t){return e.net.run(t.options.map(function(e){return e.value}))});e.setState({training:!1,predictions:t})},e.onSubmit=function(t){t.preventDefault();var a=e.state.trainingAnswers,n=v.map(function(e,t){return{input:e.options.map(function(e){return e.value}),output:a[t]}});e.setState({training:!0}),e.net.trainAsync(n).then(function(t){console.log(t),e.getPredictions()})},e.reset=function(){return e.setState(e.initialState)},e.initialState={trainingAnswers:v.map(function(){return Array(5).fill(0)}),validationAnswers:p.map(function(){return Array(5).fill(0)}),training:!1,predictions:void 0},e.state=e.initialState,e.net=new b.a.NeuralNetwork({hiddenLayers:[5]}),e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.training,a=e.predictions;return i.a.createElement("main",{className:"App"},!a&&i.a.createElement(i.a.Fragment,null,!t&&i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("h2",null,"Quiz"),this.buildQuestions(v),i.a.createElement("button",{type:"submit"},"Submit")),t&&i.a.createElement("h1",{className:"loading"},"Loading...")),a&&i.a.createElement("div",null,i.a.createElement("h2",null,"The neural network predicts:"),this.buildValidationQuestions(a,p),i.a.createElement("button",{type:"button",onClick:this.reset},"Back to quiz")))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,t,a){e.exports=a(134)},79:function(e,t,a){},80:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.9f854de4.chunk.js.map