//1
function upperCase(text) {
	if (/^[A-Z]/.test(text)) {
	  console.log("String's starts with uppercase character");
  } else {
	  console.log("String's not starts with uppercase character");
  }
}
upperCase("regexp");
upperCase("RegExp");

//2
function checkEmail(text) {
    if (true) {
        return (/\S+@\S+\.\S+/.test(text));
    }
}
console.log(checkEmail("Qmail2@gmail.com"));
console.log(checkEmail("2gmailcom"));

//3
let string = "cdbBdbsbz";
let result = /d(b+)(d)/i;
result.exec(string);

//4


let result = /(\w+)\s(\w+)/; 
let string = "Java Script";
let newString = string.replace(result, '$2, $1');
console.log(newString);

//5
function cardValide(card) {
    let result = /\d{4}-\d{4}-\d{4}-\d{4}/;
    if (true) {
      return result.test(card);
    }
  }
console.log(cardValide("9999-9999-9999-9999"));
console.log(cardValide("9999-9999-99 9-9999"));

//6
function checkEmail(text) {
	let result =/^[w]+(([\-]?([\d\w_]+))|(([\d\w_]+)[\-]?))@([\w])+\.([\w])+/gi;
	let result2 = result.test(text);
	if (result2 == true) {
	  console.log((text) + "Email is correct!");
	} else {
	  console.log((text) + "Email is not correct!");
	}
  }
  checkEmail('my_mail@gmail.com');
  checkEmail('#my_mail@gmail.com');

   //7

   function checkLogin(text) {
	if ((text.length > 2) && (text.length <= 10)){
	  let result = /^[a-z]([\d.\d\w]+?[\d\w]+){2,}/gi;
	  let result2 = /(\d\.\d)|(\d)/gi;
	  let login = result.test(text);
	  let number = text.match(result2);
	  console.log(login);
	  console.log(number);
	}
  }
  
  checkLogin('ee1.1ret3');
  checkLogin('ee1*1ret3');
  



