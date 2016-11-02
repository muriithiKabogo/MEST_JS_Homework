**
 * Created by Jerry on 2016-10-22.
 */

/*  1. Explain the following code:
 *
 *  function func() {
 *      console.log(this);
 *  }
 //answer:>>this functions is called func which outputs all window obects
 *
 *  func(); // what is the output? Why?
 /*the output is Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage, 
 sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}*/
 //why?since the value is not set by the call,it defaults to the global object which is the window
 *
 *  var obj = {
 *      func: func // what is the second func here?
 *  };
 //the first one is a property while the second func refers to the function func()
 *
 *  obj.func(); //what is the output? try to explain why.
 /*outputs Object {} because the function func is a value of the property func.
 since function func outputs 'this','this' now refers to the object 'obj'.'this'
 executes to return all properties and methods of the object 'obj'
 */
 *
 *  obj.func.bind(window)(); // what is the output? why?
 */*The output is Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage:
  Storage, sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}*/
/*why?because 'this' in func is passed to window object and thus displays all the methods
in window*/

 *  obj.func.bind(this)();  // what is the output? why?
 /*Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage, sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}	*/
 //'this' refers to window object
 *  var people = {
 *      name: 'ashwin',
 *      age: 40
 *  };
 *
 *  obj.func.bind(people)(); //what is the output? why?
 *
/* output:>>Object {name: "ashwin", age: 40}*/
//why:>>'this' is now bound to the object people and hence brings back all methods and properties of object people
/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 */
function capitalize(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
 
   return splitStr.join(' '); 
}

/*
 *  3. Write reg expresion for email validation(This is not an easy
 *  question, please make sure you do your research on this).
 *
 */
//answer:>>official standard(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])

/*
 * 4. what is localStorage and sessionStorge under window object? What is the
 *    difference*/
 //answer:>>local storage property allows you to store data on the client window permanently
 		//Session storage is a property that allows the client to store data for a particular page session
 		//The key difference is that one is permanent and the other is temporal
