//**************************EXAMPLE */
////////////////////////////////////Task #



///////////////////////////////////my solution



///////////////////////////////////solution from codewars
//*****************************



////////////////////////////////////Task #1

//Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//Завершите функцию / метод, чтобы он возвращал URL-адрес с любыми объектами после удаления привязки (#).

///////////////////////////////////my solution

/*  function removeUrlAnchor(url) {
    const index = url.indexOf("#");
 
    return index === -1 ? url : url.slice(0, index);
 } */
// removeUrlAnchor('www.codewars.com#about')

///////////////////////////////////solution from codewars

// function removeUrlAnchor(url){
// 	return url.split('#')[0];
// }



////////////////////////////////////Task #2

//We want to generate a function that computes the series starting from 0 and ending until the given number.
//Мы хотим сгенерировать функцию, которая вычисляет ряд, начиная с 0 и заканчивая заданным числом.

///////////////////////////////////my solution

// var SequenceSum = (function() {
//   function SequenceSum() {}

//   SequenceSum.showSequence = function(count) {
// if (count < 0) {
// 	return `${count}<0`
// } else if (count === 0) {
// 	return `${count}=0`
// }
// else {
//        let array = [];
//       for (i = 0; i <= count; i += 1){
//         array.push(i);
//         console.log(array)
//        }
//     return `${array.join('+')} = ${array.reduce((a, b) => a + b)}`;
// } 
//   };

//   return SequenceSum;

// })();

// SequenceSum.showSequence(6),"0+1+2+3+4+5+6 = 21"


///////////////////////////////////solution from codewars

////////example first position

// var SequenceSum = (function() {
//   function SequenceSum() {}

//   SequenceSum.showSequence = function(count) {
//     var sum = 0;
//     var str = "";
//     if (count === 0) {
//       return "0=0";
//     } else if (count < 0) {
//       return count + "<0";
//     } else {
//       for (var i = 0; i < count; i++) {
//         sum += i;
//         str += i + "+";
//       };
//     sum += count;
//     str += count + " = " + sum;
//     return str;
//     };
//   };

//   return SequenceSum;

// })();


///////example second position

// class SequenceSum {
//   static showSequence(n) {
//     return n < 0
//       ? `${n}<0`
//       : `${Array.from({length: n+1}, (v, k) => k).join('+')}${n?' = ':'='}${n*(n+1)/2}`;
//   }
// }



////////////////////////////////////Task #3

// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Сказка
// Ваш интернет-магазин любит раздавать купоны для особых случаев. Некоторые клиенты пытаются обмануть систему, вводя неверные коды или используя просроченные купоны.

// Задача
// Ваша миссия:
// Напишите функцию с именем checkCoupon, которая проверяет действительность кода купона и его срок действия.

// Купон больше не действует в день ПОСЛЕ истечения срока его действия. Все даты будут передаваться в виде строк в следующем формате: «ДАТА МЕСЯЦА, ГОД».



///////////////////////////////////my solution

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate) 
// }

///////////////////////////////////solution from codewars




////////////////////////////////////Task # 4

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

// Добро пожаловать. В этом ката вас просят возвести в квадрат каждую цифру числа и соединить их.
// Например, если мы запустим 9119 через функцию, выйдет 811181, потому что 92 - это 81, а 12 - 1.
// Примечание: функция принимает целое число и возвращает целое число.

///////////////////////////////////my solution

// function squareDigits(num){
//   var res = "";
//   num = num.toString();
//   for (var i = 0; i < num.length; i++)
//   {
//     res = res + (num[i] * num[i]).toString();
//   }
//   return Number(res);
// }

///////////////////////////////////solution from codewars

// function squareDigits(num){
//   return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
// }


