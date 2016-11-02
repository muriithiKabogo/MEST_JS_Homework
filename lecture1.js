/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

var firstCar = 'Doge';/*Not valid because identifiers should either start with a letter and underscore or a dollar sign*/
var variable = 'variable';/*the naming was not correct since the identifier was var which is a reserved name*/
var firstName = 'Jerry';/*not valid compound words should be joined using a hyphen or camel case*/
var Sch00lName = 'MEST';/*Valid*/
var totalNumber = 100;/*Valid but it is not the best practice.I used camel case*/

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  'It\'s nice to me you today!';/*not valid because of using":" instead of ";" at the end*/
var response = "Ashwin said, "Yes Sir!"";


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here

 Ans
 The comparison returns true because they are equal
 */


/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */
var pizza={color:"white",size:"large",cost:60 ,flavour:"cheese"};/*literal*/

var pizza=new object();/*keyword new*/
piza.color="white";
pizza.size="large";
pizza.cost=60 ;
pizza.flavour="cheese";

function pizza(crust,size,cost,flavour)/*constructor*/
{
this.crustOfPizza=crust;
this.sizeOfPizza=size;
this.costOfPizza=cost;
this.flaours=flavour;
}


/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */
function Animal(breed, age) {
	this.breedName = breed;
	this.theAge = age;
	this.displayName = function() {return this.breedName};
	this.myAge = function() { return this.theAge };
}
var cow = new Animal("zebu",2);
cow.myAge();
var sheep = new Animal("Merino",1);

/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
function menu() {
	var myMenu = parseInt(prompt('Enter a number between 1 and 3: '));
	if (myMenu == 1) {
		console.log('Banku');
	} else if (myMenu == 2) {
		console.log('kenkey');
	} else {
		console.log('jollof');
	};
};

function menu() {
	var myMenu = parseInt(prompt('Enter a number between 1 and 3: '));
	switch(myMenu) {
		case 1: 
			console.log('Banku');
			break;
		case 2:
			console.log('kenkey');
			break;
		case 3:
			console.log('jollof');
			break;
		default:
			console.log('Enter an appropriate number');
			break;
	};
};
/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */

function checkGrade() {
	var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
	for (i = 0; i < studentScores.length; i++) {
		if (studentScores[i] >= 70) {
			console.log('Grade A ' + studentScores[i]);
		} else if (studentScores[i] >= 60 && studentScores[i] < 70) {
			console.log('Grade B ' + studentScores[i]);
		} else if (studentScores[i] >= 50 && studentScores[i] < 60) {
			console.log('Grade C ' + studentScores[i]);
		} else {
			console.log('Grade D ' + studentScores[i]);
		};
	};
};

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */
function checkGrade() {
	var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
 	studentScores.forEach(function(i) {
 		if (i >= 70) {
			console.log('Grade A ' + i);
		} else if (i >= 60 && i < 70) {
			console.log('Grade B ' + i);
		} else if (i >= 50 && i < 60) {
			console.log('Grade C ' + i);
		} else {
			console.log('Grade D ' + i);
		};
 	});
};
