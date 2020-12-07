//its a node packgae to highlight the text and change the font style 
var chalk=require('chalk');
//its a node package for taking or reading the input provided by the user
var readLineSync=require('readline-sync');
//this variable is used for incrementing the score each time the user enetrs the correct answer
var score=0;
var userName=readLineSync.question(chalk.red.bgBlackBright.bold(("What's your name ? --> ")));
console.log();
console.log(chalk.yellow("Hey! welcome "+chalk.blue.bold(userName.toUpperCase())+"! Do you know about NITHYA?"));
console.log()
console.log("********************************************")
console.log()
//play function
function play(que,answer){
	var userAns=readLineSync.question(que);
	if(userAns.toUpperCase()==answer.toUpperCase()){
		console.log("--> you have entered "+userAns.toUpperCase())
		console.log("--> you are right !");
		score=score+1;
		//console.log("your score is: "+score);
		//console.log("------------");
	}else{
		console.log("--> you have entered "+userAns.toUpperCase())
		console.log("--> you are wrong!");
		console.log("-->The correct answer is "+answer.toUpperCase());
		//console.log("your score is:"+score)
	 	//console.log("-----------");	
	}
	console.log(chalk.yellowBright("->> your score is: "+score))
	console.log(chalk.cyanBright("---------------------------------------"));
}
	//Here we are putting two consoles outside the if..else condition bcz it is repeated in both the conditions. so, we remove them from the conditions and put them out side so that when ever the condtion is true the condition block exicutes and the console outside are also printed .
	//Here we have put the array of objetcs for question and anwers in the form of key:value pairs
var arrayOfObj=[{
		question:chalk.red("Where does Nithya stay ? "),
		answer:"donthi"
},{
	question:chalk.red("In which clg does Nithya study ? "),
	answer:"bvrit"
},{
	question:chalk.red("what is Nithya's favourite color? "),
	answer:"blue"
},{
	question:chalk.red("What is Nithya's favourite dish ? "),
	answer:"chiken"
}]
//Now we have to loop through the array of objects
for(var i=0;i<arrayOfObj.length;i++){
	var currentQues=arrayOfObj[i];
	play(currentQues.question,currentQues.answer);
}
console.log()
//here we are printing the final output.
console.log(chalk.bgBlackBright.bold("Yay! you scored: "+score))