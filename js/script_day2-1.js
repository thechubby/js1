function square(width, height) {
	return width * height
};
console.log(square(3,4));



function sign(t) {
	if (t<0) {
		return 'Меньше нуля'
	} else if (t>0) {
		return 'Больше нуля'
	} else {
		return 'Ноль!'
	}

};
console.log(sign(3));



function rand() {
	return Math.round(Math.random()*10);
}
console.log(rand());



let mySort = function(a,b) {
	//return a > b ? 1 : -1
	if (a>b) {
		return 1;
	}
	return -1;
}

function sum(a,b) {
	return a + b;
}

const summ = (a,b) => a + b; //стрелочная ф-я

(function () { //анонимная ф-я
	console.log('Сюрприз!');
}) (); //вызов ф-и





let a = 3;
function foo() {
	a = a + 5;
}
foo();
console.log(a);
//замыкания


function counter(n) {
	function a() {
		return ++n;
	}
	return a;
}
let count2 = counter(5);
//count() //6
//count() //7
//count() //8



function daysGenerator(i = 1) {
	return function() {
		let d;
		switch(i++) {
			case 1:
			d = 'Вс';
			break;
		} 
		i = ++i % 7;
		return d;
	}
}

let next = daysGenerator();
console.log(next()); //Пн
console.log(next()); //Вт



function triple(a) {
	return function(b) {
		return function(c) {
			return a + b + c;
		}
	}
}
//const triple =a => b => c=> a +b +c; //второй вариант, стрелочная ф-я
console.log(triple(5) (10) (4));



function avg() {

}
console.log(avg(10,20,30))
console.log(avg(10,20,30,2,4,5,6,7))



/* Создать ф-ю declension(n), которая правильно возвращает фразу "N товаров"*/
function declension(n,word1 = 'товаров',word2 = 'товар',word3 = 'товара')
let word = word1;
if ( n % 100 < 5 || n % 100 > 20 ) {
	if (n % 10 == 1) word=word2;
	if (n % 10 > 1 && n % 10 < 5) word = word3;
}
return `${n} ${word}`

