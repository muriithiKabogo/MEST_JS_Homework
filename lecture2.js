/*
/*
 * 1. explain the special meaning of the following special characters
 \0 the null character
 \n new line 
 Makes sure that the characters after the new line character go to the next line
 \r carriage return
 \v vertical tab
 \t
 \backspace
 \f form feed
 */

/*
 *  2.Please combine those two array together as one array by using concate:
 *  var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
 *  var arr2 = ['Thursday', 'Friday', 'Saturday']
 */
 console.log(arr1.concat(arr2));

/*
 *  3.Please combine those three array together as one array by only using concate() function once:
 *  var arr1 = ['Sunday', 'Monday']
 *  var arr2 = ['Tuesday', 'Wednesday']
 *  var arr3 = ['Thursday', 'Friday', 'Saturday']
 */
 console.log(arr1.concat(arr2,arr3));

/*
 * 4. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.sort());
 *    console.log(arr);
 */
["Enoch", "Todd", "Yaw", "ashwin", "jerry", "lars", "mike"]//capital letters come before small letters
/*
 * 5. what is the result(output of following code):
 *    var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
 *    console.log(arr.sort());
 *    console.log(arr);
 */
 [1, 2, 3, "apple", "black", "orange", "test"] //numbers have a higher priority

/*
 * 6. Please remove mike, jerry, adn Enoch from the following array by using slice
  var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
*/ 
console.log(arr.slice(2, 4));
console.log(arr.slice(5,6));
/*
 * 7. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-3, -1));
 *    console.log(arr);
 */
["Yaw", "Enoch"]
["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]

/*
 * 8. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(2));
 *    console.log(arr);
 */
["mike", "jerry", "Yaw", "Enoch", "lars"]
["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]
/*
 * 9. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-2));
 *    console.log(arr);
 */
["Enoch", "lars"]
 ["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]
/*
 * 10. convert the following function to function expression:
 *   function addTwoNumber (num1, num2) {
 *     return num1 + num2;
 *   }
 *
 *   and invoke the function expression to caluate the result of 256 + 532
 */
var addTwoNumber=function(num1,num2){
	return num1+num2
};
addTwoNumber(256,532)
/*
 * 11. create an immediately invoked function expression
 * store the iife within a variable and call it
 */
(function addTwoNumber(num1,num2){
	return num1+num2
})(256,532)
/*
 * 12. you have following objects:
 *     var person1 = {
 *          name: 'ashwin'
 *     };
 *
 *     var person2 = {
 *          name: 'lars'
 *     };
 *
 *    function namer() {
 *          return this.name;
 *    }
 *
 *    use bind function here to make namer() function to call 'ashwin'
 *    and lars
 */
var person1Name = namer.bind(person1)

/*
 * 12. you have following object:
 *     var number = {
 *          x: 22,
 *          y: 33
 *     };
 *
 *    var count = function() {
 *          console.log(this.x + this.y);
 *    }
 *  a. what is the result when we invoke count()?
 *  b. use bind on function expression to make this work.
 */
ans a
unexpected identifier

ans b
 var add = count.bind(number);

/*
 * 13. you have following objects:
 *     var person1 = {
 *          firstName: 'ashwin'
 *          lastName: 'Yaw'
 *     };
 *
 *     var person2 = {
 *          firstName: 'lars',
 *          lastName: 'Mike'
 *     };
 *
 *     function hello(greeting) {
 *          console.log(greeting + ' ' + this.firstName + '' + lastName);
 *    }
 *
 *  use call methods on function expression to make this work.
 */
function hello(greeting) {
          console.log(greeting + ' ' + this.firstName + '' + lastName);
     }
     hello.call(person1,hi)
/*
 * 14. We have a following string:
 *     var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
 *
 *     please write a function to change the first letter of every word to upper case.
 */
 function capitalize(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var elm = 0; elm < splitStr.length; i++) {
       
       splitStr[elm] = splitStr[elm].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
 
   return splitStr.join(' '); 
}
