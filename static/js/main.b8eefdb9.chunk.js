(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t){},104:function(e,t){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(67),l=a.n(o),r=(a(79),a(68)),u=a(69),s=a(72),d=a(70),c=a(73),b=(a(80),a(71)),m=a.n(b),v=[{id:"q1",question:"Your friend asks if they can choose an outfit for you to wear, one that is radically different from your own style.",options:[{id:"q1d",label:"No way!",value:0},{id:"q1a",label:"LOVE this plan!",value:1},{id:"q1b",label:"Grudgingly let them pick one, but refuse to wear it in public",value:.4},{id:"q1c",label:"Reluctantly try the look out in public",value:.6}]},{id:"q2",question:"You discover that your favorite author is an outspoken misogynist.",options:[{id:"q2a",label:"Never read his books again",value:0},{id:"q2b",label:"Read his books one last time but will not look for new books",value:.2},{id:"q2d",label:"Like him more because you are a misogynist too",value:.8},{id:"q2c",label:"feel upset but continue to read his books",value:.6}]},{id:"q3",question:"Your date has got some surprisingly racist beliefs.",options:[{id:"q3a",label:"understand and discover what else you have in common",value:.9},{id:"q3b",label:"understand why and gently try to open his mind",value:.7},{id:"q3c",label:"Get up and walk away",value:.1},{id:"q3d",label:"Chew him/her out for being close-minded",value:.2}]},{id:"q4",question:"How do you feel about fiction with an uncertain ending, where you are left to imagine what happens next?",options:[{id:"q4a",label:"Meh",value:.3},{id:"q4b",label:"That is great sometimes",value:.6},{id:"q4c",label:"No thanks",value:.1},{id:"q4d",label:"Yes! I would love to exercise my imagination!",value:1}]},{id:"q5",question:"Would you be willing to try a strange new dish in a foreign country?",options:[{id:"q5a",label:"No weird food for me, weirdo.",value:0},{id:"q5b",label:"Sure, I will try anything",value:1},{id:"q5c",label:"only if reviews say it is tasty",value:.3},{id:"q5d",label:"I might try some weird foods, but not all",value:.5}]},{id:"q6",question:'Finish this sentence: "It has been done this way for 500 years, and..."',options:[{id:"q6d",label:"probably for a good reason",value:.3},{id:"q6a",label:"it will always be done this way",value:0},{id:"q6c",label:"it is probably about time for a change",value:.7},{id:"q6b",label:"I am sure we could come up with a better way to do it",value:1}]},{id:"q7",question:"Do you sometimes find yourself changing your mind about important social and political issues as you learn more about them?",options:[{id:"q7a",label:"Never",value:0},{id:"q7b",label:"Sure",value:1},{id:"q7c",label:"Depends, I can form a better understanding as I know more about a certain issue",value:.7},{id:"q7d",label:"Sometimes",value:.5}]},{id:"q8",question:"I prefer to follow most rules and instructions.",options:[{id:"q8a",label:"Never",value:1},{id:"q8b",label:"Absolutely",value:0},{id:"q8c",label:"I do not like to, but mostly have to",value:.7},{id:"q8d",label:"Sometimes",value:.5}]}],p=[{id:"vq1",question:"Do you believe your nation could learn something from other parts of the world?",options:[{id:"vq1a",label:"Definitely not",value:0},{id:"vq1b",label:"I doubt that seriously",value:.2},{id:"vq1c",label:"Perhaps in some areas",value:.6},{id:"vq1d",label:"Sure, there is always room for improvement",value:1}]},{id:"vq2",question:"Comfort is often more important to me than trying something new.",options:[{id:"vq2a",label:"Strongly agree",value:0},{id:"vq2b",label:"Agree",value:.8},{id:"vq2c",label:"Neutral",value:.5},{id:"vq2d",label:"Disagree",value:1}]}],h=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).isOptionChecked=function(t,a){return 0!==e.state.trainingAnswers[t][a]},e.onOptionChange=function(t,a){e.setState(function(e){var n=Object.assign(e,{}).trainingAnswers;return n[t]=Array(4).fill(0),n[t][a]=1,{trainingAnswers:n}})},e.buildOptions=function(t,a){return a.map(function(a,n){var o=0!==e.state.trainingAnswers[t][n],l="q".concat(t,"-o").concat(n);return i.a.createElement("label",{className:"option-label",key:l,htmlFor:l},i.a.createElement("input",{type:"radio",required:!0,name:"q".concat(t),id:l,checked:o,onChange:function(){return e.onOptionChange(t,n)}}),i.a.createElement("span",null,a.label))})},e.buildQuestions=function(t){return t.map(function(t,a){return i.a.createElement("div",{className:"question",key:t.id},i.a.createElement("h4",null,"".concat(a+1,". ").concat(t.question)),i.a.createElement("div",{className:"options"},e.buildOptions(a,t.options)))})},e.buildValidationOptions=function(e,t){return t.map(function(t,a){return i.a.createElement("span",{className:"option-label",key:t.id},i.a.createElement("span",null,"".concat(t.label,": ").concat(Math.round(100*[e[0][a]]),"%")),i.a.createElement("div",{className:"bar",style:{width:"".concat(Math.round(100*e[0][a]),"%")}}))})},e.buildValidationQuestions=function(t,a){return a.map(function(a,n){return i.a.createElement("div",{className:"question",key:a.id},i.a.createElement("h4",null,"".concat(n+1,". ").concat(a.question)),i.a.createElement("div",{className:"options"},e.buildValidationOptions(t,a.options)))})},e.getPredictions=function(){var t=p.map(function(t){return e.net.run(t.options.map(function(e){return e.value}))});e.setState({training:!1,predictions:t})},e.onSubmit=function(t){t.preventDefault();var a=e.state.trainingAnswers,n=v.map(function(e,t){return{input:e.options.map(function(e){return e.value}),output:a[t]}});e.setState({training:!0}),e.net.trainAsync(n).then(function(t){console.log(t),e.getPredictions()})},e.reset=function(){return e.setState(e.initialState)},e.initialState={trainingAnswers:v.map(function(){return Array(4).fill(0)}),validationAnswers:p.map(function(){return Array(4).fill(0)}),training:!1,predictions:void 0},e.state=e.initialState,e.net=new m.a.NeuralNetwork({hiddenLayers:[4]}),e}return Object(c.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.training,a=e.predictions;return i.a.createElement("main",{className:"App"},!a&&i.a.createElement(i.a.Fragment,null,!t&&i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("h2",null,"How open-minded are you?"),this.buildQuestions(v),i.a.createElement("button",{type:"submit"},"Submit")),t&&i.a.createElement("h1",{className:"loading"},"Loading...")),a&&i.a.createElement("div",null,i.a.createElement("h2",null,"The neural network predicts:"),this.buildValidationQuestions(a,p),i.a.createElement("button",{type:"button",onClick:this.reset},"Back to quiz")))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,t,a){e.exports=a(134)},79:function(e,t,a){},80:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.b8eefdb9.chunk.js.map