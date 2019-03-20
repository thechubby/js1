let car = {
	color: 'red',
	power: 3.5,
	show: function() {
		for (let x in this) {
			if (typeof this[x] != 'function')
			console.log(x, this[x])
		}
	},
	toString: function() {
		return 'машина цвета ' +this.color;
	}
};
car.show();
/*
console.log(car.color);
console.log(car['power']);

console.log('power' in car) //есть ли свойство внутри объекта
 */
 for (let i in car) {
 	console.log(i, car[i]);
 }



 /*Создать произвольный объект с 2-3 свойствами.
 Измените отдельное свойство
 Вывести все свойства в цикле*/
 let human = {
 	age: 24,
 	iq: 116
 };

human.age = 25;
console.log(human.age);

for (let x in human) {
	console.log(x, human[x])
}



let cat = {
	name: 'Барс',
	weight: 10
}
car.show.apply(cat)