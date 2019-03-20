let a = [3,7,9,13,24,8];
a[3] = 15;
console.log(a+'');
console.log(a.length);

console.log(a.concat(56,100)); //не изменяет массив, возвращает новый массив
console.log(a.join('-'));
//document.write('<ul><li>'+a.join(<li>)+'</ul></li>')

console.clear();
console.log(a.pop()); //удаляет последний эл-т, возвращает этот эл-т
console.log(a.push('строка')); //добавляет параметр в конец массива, возвращает новую длинну массива
console.log(a.shift()); //удаляет 1й эл-т
console.log(a.unshift('start')); //добавляет эл-т в начало
console.log(a.sort()); //сортирует
console.log(a.splice(3)); //вырезает из массива начиная с 3го эл-та до конца. Может подставлять новые значения заместо удаленных

a.forEach(value => {console.log(value)} ); //для каждого эл-та применить
let b = a.map(value => value * 2);
console.log(b);


//создать массив из пяти чисел и вывести их в консоли
let arr = [1,2,3,4,5];
for (i = 0; i<arr.length; i++) {
	console.log(arr[i]);
}



//создать массив из 105 случайных чисел и ввывести их в консоли
for (j = 0; j < 106; j++) {
	arr[j] = Math.random()
}
console.log(arr);

//отсортируйте массив из 105 эл-в
for (j = 0; j < 106; j++) {
	arr[j] = Math.random()
}
arr.sort();
console.log(arr)

//создать массив из 40 эл-в последовательности Фибоначчи
arr = [0,1];
for (let i = 2; i<40; i++) {
	arr[i] = arr[i-1] + arr[i-2];
}
console.log(arr);
