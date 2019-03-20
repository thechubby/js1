const s = 'Ехал Грека через реку';
console.log(s.length);

console.log(s[5]);
console.log(s.charAt(5));

console.log(s.indexOf('ре'));
console.log(s.lastIndexOf('ре')); //в обратном порядке

//console.log(s.concat('ре'));
console.log(s.split(' '));

console.log(s.replace('ре',' ле'));

/*По значению переменной part='хром'
в строке str='Градации серого - монохромный цвет'
нужно найти слово монохромный*/
const part = 'хром';
const str = 'Градации серого - монохромный цвет';
let pos = str.indexOf(part);
let pos1 = str.lastIndexOf(' ', pos)+1;
let pos2 = str.indexOf(' ',pos);
console.log(str.slice(pos1, pos2));


/*создаит ф-ю substrCount(needle, haystack, offset, length)
Которая находит кол-во вхождений строки needle в строку haystack
со смещением offset на длине length*/
let n = substrCount('ма', 'ма-мама-ма', 2,5)

function substrCount(needle, haystack, offset, length) {
	haystack = haystack.slice(offset,offset+length);
	return haystack.split(needle).length-1;
}
console.log(n);



//Даты
let dt = new Date();
console.log(dt.getDay());
console.log(dt.getMonth());
console.log(dt.toLocaleTimeString());
console.log(dt.toLocaleDateString());
console.log(dt.getFullYear());

let dt1 = new Date('12 Dec 2020');
let dt2 = new Date('2020,11,10,5,4,1');

//ошибки
let x = +prompt('x',5);

try{
	if (x == 0) {
		throw new Error('Делить на ноль нельзя');
	}
	console.log(10 / x)
} catch(er) {
	console.log(er.message);
}




//JSON
let o = {
	name: 'Вася',
	age: 23
};
let str= '{"name":"Вася","age":"23"}';
console.log(JSON.stringify(o));
console.log(JSON.parce(str))

