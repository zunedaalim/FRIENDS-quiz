var readlineSync=require("readline-sync"),score=0
console.log(new Array(17).join(" ")+"\x1b[0m\x1b[38;5;226m ╚(▀̿Ĺ̯▀̿ ̿)╗\x1b[0m\n\n")
console.log("\n\n\x1b[1m\x1b[38;5;158m\x1b[7m"+new Array(8).join(" ")+"Welcome to Zuned's quiz on FRIENDS "+new Array(5).join(" ")+"\x1b[0m")
console.log("\x1b[1m\x1b[38;5;63m\x1b[7m"+new Array(11).join(" ")+`Answer to 10 questions`+new Array(15).join(" ")+"\x1b[0m")
console.log("\x1b[7m"+new Array(47).join(" "))
console.log(new Array(11).join(" ")+"( ͡ಠ( ͡ಠ ͜ʖ( ͡ಠ ͜ʖ ͡ಠ ) ͜ʖ ͡ಠ) ͡ಠ)"+new Array(12).join(" "))
console.log(new Array(47).join(" ")+"\x1b[0m\n")
function test(question,answer){
  var useranswer=readlineSync.keyIn(question+"\n\x1b[1mYour answer \x1b[0m: ",{limit:'abcd'});
  if(useranswer.toUpperCase()==answer.toUpperCase()){console.log("\n\x1b[48;5;76m\x1b[1mCorrect!\x1b[0m"),score++;}
  else console.log("\n\x1b[48;5;160m\x1b[1mWrong! \x1b[0m")
}

const questbank=[
  {question:`\x1b[38:5:205m\x1b[4m\x1b[1mHow many sisters does Joey have?\n\x1b[0m
  a. 7
  b. 5
  c. 2
  d. None\n`,
   answer:`a`
  },
  {
    question:`\x1b[38:5:137m\x1b[4m\x1b[1mWhat is the name of Joey’s Cabbage-Patch kid?\n\x1b[0m
a. Ken Adams
b. Maurice
c. Hugsy
d. Alicia May Emory\n`,
    answer: `d`
  },
  {
    question:`\x1b[38:5:54m\x1b[4m\x1b[1mWhich famous actor’s butt does Joey play in a shower scene?\n\x1b[0m

a. Bruce Willis
b. Al Pacino
c. Charlton Heston
d. Jeff Goldblum\n`,
      answer:` b`
  },
{
   question: `\x1b[38:5:244m\x1b[4m\x1b[1mWhat is the name of Joey’s character in the commercial for opening milk cartons?\n\x1b[0m

a. Mike
b. Tommy
c. Kevin
d. Drake\n`,
     answer:`c`
},
{question: `\x1b[38:5:85m\x1b[4m\x1b[1m Where does Ross spend the night with Emily after they first meet?\n\x1b[0m

a. hotel in Poughkeepsie
b. bed and breakfast in Vermont
c. bungalow in Tulsa
d. park in Atlantic City\n
`,answer:`b`},
  {
    question: `\x1b[38:5:44m\x1b[4m\x1b[1mWhat song does Ross’ monkey, Marcel, keep playing?\n\x1b[0m

a. The Lion Sleeps Tonight‘ by The Tokens
b. Tiny Dancer’ by Elton John
c. The Way You Looked Tonight’ by Tony Bennett
d. Careless Whisper’ by George Michael\n`
    ,answer : 'a'
  },
  {
    question:`\x1b[38:5:35m\x1b[4m\x1b[1mWhat does Chandler have to do to get Joey to forgive him, after having kissed Cathy?\n\x1b[0m

a. Wear blue lipstick
b. Lie in a wooden box for six hours
c. Furnish their apartment
d. Move to Yemen\n`,
    answer:'b'
  },
  {
    question:`\x1b[38:5:29m\x1b[4m\x1b[1mWhat happens to Rachel’s boss, Joanna, the night before her promotion goes through?\n\x1b[0m

a. She gets hit by a taxi
b. She goes on a date with Chandler
c. She falls down an elevator shaft
d. She moves to Paris\n`,
      answer:'a'
  },
{
  question:`\x1b[38:5:99m\x1b[4m\x1b[1m“Now imagine you live at the supermarket.”\x1b[0m

a. Chandler
b. Ross
c. Gunther
d. Nora Bing\n`,
  answer:'a'
},
  {
    question:`\x1b[38:5:209m\x1b[4m\x1b[1m“You will always be the guy who peed on me.”\x1b[0m

a. Phoebe
b. Monica
c. Bonnie
d. Susan\n`,
answer :'b'
  }
]

for(var i=0;i<questbank.length;i++){
  var varquestion=questbank[i];
  test(varquestion.question,varquestion.answer)
  console.log("\x1b[2m\nPress e to exit, any other key to continue...... \n\x1b[0m")
  var exit=readlineSync.keyIn("",{hideEchoBack: true,mask:''})
if (exit=='e'){break;}
}
console.log(new Array(25).join(" ")+"\x1b[1m\x1b[7m\x1b[17m\x1b[38;5;123m" +" Your score is "+ score+"\x1b[0m\n\n"+new Array(25).join("---"))
console.log("\x1b[1m\nPlease rate the quiz :\x1b[0m")
var value=0,key,MAX=20,MIN=0;
console.log("\n"+"\x1b[1m"+"Press"+"\x1b[38;5;112m"+" X "+"\x1b[0m"+"\x1b[1m"+"for forward, "+ "\x1b[0m\x1b[1m\x1b[38;5;160m"+"Z "+"\x1b[0m\x1b[1m"+"for backward"+"\x1b[0m\x1b[1m"+" and "+"\x1b[0m"+"\x1b[1m\x1b[38;5;33m"+"Space bar"+"\x1b[0m\x1b[1m"+" to select"+"\n\n"+"\x1b[0m") ;
while(true){
  console.log("\x1B[1A\x1B[K"+new Array(Math.max(value,0)).join("--")+"\x1b[1m\x1b[38;5;226m"+"╭∩╮"+"\x1b[0m"+(new Array(MAX-value+1).join("--"))+" (ಥ_ಥ) "+"\x1b[1m\x1b[38;5;196m"+ value/2+"\x1b[0m");
 key = readlineSync.keyIn('',{hideEchoBack:true,mask:'',limit:'xz '});
  if (key === 'z') { if (value>MIN) { value=value-2;} }
  else if (key === 'x') { if (value < MAX) { value=value+2; } }
  else { break; }
}

console.log("\n\n\x1b[1m\x1b[38;5;63\x1b[7m"+new Array(17).join(" ")+"You selected "+value/2+new Array(17).join(" ")+"\x1b[0m")
console.log("\x1b[1m\x1b[38;5;63\x1b[7m"+new Array(19).join(" ")+`Thank you!`+new Array(19).join(" "))
console.log(new Array(47).join(" "))
console.log(new Array(9).join(" ")+"╭∩╮（︶︿︶）╭∩╮╭∩╮(︶ε︶*)chu"+new Array(9).join(" "))
console.log(new Array(47).join(" "))
