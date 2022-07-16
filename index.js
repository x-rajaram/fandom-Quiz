var readlinesync=require("readline-sync");
var uname=readlinesync.question("may i know ur name?")
//var useranswer=readlinesync.question("welcome "+uname+" DO YOU KNOW Raja?");
var score=0;

function play(question,answer){
  var userAnswer=readlinesync.question(question);
  if(answer.toUpperCase()===userAnswer.toUpperCase()){
    console.log("you are right");
    score=score+1
    console.log("your score is ",score);
    console.log("cool...");
  }else{
    
    console.log("Sadly, I like it");
  }

}

var questionAndAnswers=[{
  question: "welcome "+uname+" DO YOU like Quiz? ",
  answer: "Yes"  
},{
  question: "Do you like Lord of Rings movies? ",
  answer: "yes"
},{
  question:"Do you love SuperHero Movies? ",
  answer: "Yes"
  },{
  question: "Do you like SpidereMan? ",
  answer: "Yes"
  }                        
];
for(var i=0;i<questionAndAnswers.length;i++){  //console.log("test"+questionAndAnswers[i].question,questionAndAnswers[i].answer);
  var urquestion=questionAndAnswers[i].question;
  var ans=questionAndAnswers[i].answer;
  play(urquestion,ans);
}
