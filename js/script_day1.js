/*Определить является ли число 3243 чётным или нечётным.
Сообщить о результате через консоль*/

let num = 3243;

console.log(num % 2 ? 'Нечётное' : 'Чётное');


/*Определить является ли человек совершеннолетним.
В переменную age поместить любое число (положительное, не более 100)*/

let age = 24;

if (age >= 18) {
	if (age < 100) {
		console.log('Совершеннолетний');
	} else {
		console.log('Слишком старый')
	}
	
} else {
	console.log('Несовершеннолетний');
}

/*Даны два числа a и b. Напечатать то, которое меньше.
Если они равны, напечатать "числа равные"*/

let a = 10;
let b = 4;

if (a > b) {
	console.log(b + ' меньше чем ' + a);
} else {
	console.log(a + ' большк чем ' + b);
}

/*Напишите ф-ю, которая выводит в консоль числа от 1 до n,
где n - целое число, которое ф-я принимает в качестве параметра,
при этом: fizz кратное 3м, buzz кратное 5, fizzbuzz кратно 3 и 5*/


let n = 5;
if (n % 3 === 0) {
	if (n % 5 === 0) {
		console.log('fizzbuzz')
	} else {
		console.log('fizz')
	}
} else if (n % 5 === 0) {
	console.log('buzz');
} else {
	console.log(n)
}


/*используя while вывести числа от 1 до 20 */
var number = 1;
	while(number < 20) {
		console.log(++number);
	}
	
/*Выведите все нечётные числа от 1 до 20*/
var number = 1;
	while (number < 20) {
		if (number % 2 != 0) {
			console.log(++number);
		} else {
			number++;
		}
	}
	
/*Вывести квадраиы всех числе от 1 до 20*/
var number = 1;
	while(number < 21) {
		console.log(number * number);
		number++;
	}

/*Сформировать прототип html-таблицы для календаря (6х7)*/
const rows = 6, cols = 7;
let table = '<table border=1>';
let row = 0;
let col;
let k = 1;
	while (row < rows) {
		table += '<tr>';
		col = 0;
			while (col < cols) {
				table += '<td>'+k;
				col++;
				k++;
			}
		table += '<td>';
		row++;
	}
	
table += '</table>'
document.write(table);

/* вывести в консоли 'ёлку'*/
let sym = '';
for (let i=0; i<=4; i++) {
	sym+='**';
	console.log(sym);
}
/*вариант 2*/
for (let i = 0, n = 4, s= '*'; i < n; i++) {
	console.log(s);
	s+= '**';
}

/*Построить таблицу умножения 10х10 в консоли*/
s = '';
for(let i = 1; i < 11; i++) {
	for (let j = 1; j < 11; j++) {
		s += i * j +'\t';
		}
	s += '\n';
}
console.log(s);

