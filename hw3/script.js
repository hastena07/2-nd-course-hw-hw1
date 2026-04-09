//Задание 1

let password='пароль';
let userInput=prompt('Введите пароль:');
if(userInput===password){
alert('Пароль введён верно');
}else{
alert('Пароль введён неправильно');
}

//Задание 2

let c =2;

if(c >0 && c <10){
    console.log('Верно');
}else{
    console.log('Неверно');
}

//let c =0;

//if(c >0&& c <10){
//    console.log('Верно');
//}else{
//    console.log('Неверно');
//}
//
//let c =-3;
// if(c >0&& c <10){//
//    console.log('Верно');
//}else{
    //console.log('Неверно');
//}

//let c =10;

//if(c >0&& c <10){
//    console.log('Верно');
//}else{
 //   console.log('Неверно');
//}

//Задание 3

let d =120;// например, 120
let e =45;// например, 45

if(d >100|| e >100){
    console.log('Верно');
}else{
    console.log('Неверно');
}

//задание 4

let a ='2';
let b ='3';
alert(+a + +b);

// задание 5

let monthNumber= prompt('Введите номер месяца');
let season;

if(monthNumber<1||monthNumber>12){
console.log("Неверный номер месяца. Программа завершена.");
}else{




switch(monthNumber){
case'1':
console.log(' январь');
case'2':
console.log('февраль');
case'12':
console.log('декабрь');
            season ="зима";
break;
case'3':
console.log('март');
case'4':
console.log('апрель');
case'5':
console.log('май');
            season ="весна";
break;
case'6':
console.log('июнь');
case'7':
console.log('июль');
case'8':
console.log('август');
            season ="лето";
break;
case'9':
console.log('сентябрь');
case'10':
console.log('октябрь');
case'11':
console.log('ноябрь');
            season ="осень";
break;
}
console.log(`Месяц №${monthNumber}относится к сезону: ${season}.`);

}

//Дополнительные задания 
//Задание 1

let useInput=prompt("Пожалуйста, введите любое число:");
let number=parseInt(useInput);
if(isNaN(number)){
alert("Вы ввели не число. Пожалуйста, попробуйте ещё раз.");
}else{
if(number%2===0){
alert("Число "+ number +" — чётное.");
}else{
alert("Число "+number+" — нечётное.");
}
}

//Задание 2

let clientOS=0;
if(clientOS===0){
console.log("Установите версию приложения для iOS по ссылке");
}
else if(clientOS===1){
console.log("Установите версию приложения для Android по ссылке");
}
else{
console.log("Не удалось определить операционную систему.");
}

//Задание 3
//let clientOS=0;
//let clientDeviceYear=2014;
//constcurrentYear=newDate().getFullYear();
//let isLiteVersionNeeded=clientDeviceYear<2015;
//let platform =clientOS===0?"iOS":"Android";
//let message="Установите ";
//if(isLiteVersionNeeded){
 //   message +="облегчённуюверсию ";
//}
//message+=`приложения для ${platform} по ссылке`;
//console.log(message);





