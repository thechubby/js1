function Human(age,iq) { //конструктор
	this.age = age;
	this.iq = iq;
	this.info = function() { //метод
		console.log(age, iq);
	}
}

var christina = new Human(24,116); 
christina.info();

Human.prototype.walk = function() { //добавляем метод в прототип
	console.log('А я иду, шагаю по Москве...');
}

christina.walk();




//классы
class Cat{ //тоже конструктор, только в новых редакциях Ecma 
	constructor(n, a) {
		this.name = n;
		this.age = a;
	}
	voice() { //пропишется в прототип
		return 'Meow..';
	}
}

let cat1 = new Cat('Мурзик', 3);

console.log(cat1);
console.log(cat1.voice());


/*
class Tiger extends Cat { //перекрыл метод прототипа (нужно где-то добавить скобки)
	constructor(n,a, color = 'f00') { //вот
	super(n,a); //super - ссылка на самый самый первый прототип
	this.color = color;
} // вот
	voice(){
		return 'Rrr..' + super.voice(); //отрабатывает метод Cat
	}
let cat2 = new Tiger('Шерхан', 30)
console.log(cat2);
console.log(cat2.voice());
*/



//создать базовый класс Goods со свойствами _title, _price;
//Методом show() - показывающим свойства объекта
//Создать экземпляр объекта (new Goods(...))
class Goods {
	constructor(title,price) {
		this._title = title;
		this._price = price;
	}
	show() {
		for (let i in this)
			console.log(i + ' ' + this[i]);
	}
}

//Создать класс-наследник Phone
//со свойством _type и значением "смартфон"
//и переопределить конструктор Goods

class Phone extends Goods {
	constructor(title, price) {
		super(title, price);
		this.type = 'смартфон';
	}
}

let goods = [];
goods.push(new Goods('Книга',60));
goods.push(new Phone('Nokia', 1000));
goods.push(new Goods('JS', 665));
 
goods.forEach(function(item) {
	item.show();
}); 

//console.log(cat1 instanceof Cat); //true
//console.log(cat2 instanceof Tiger); //true
//console.log(cat2 instanceof Object); //true
//console.log(cat1 instanceof Tiger); //false



//getter setter
class Ipoteka{
	constructor(S,p,n) {
		this.S = S;
		this.p = p/1200;
		this.n = n * 12;
	}
	get A() { //getter
		/*let {S, p, n} = this;*/
		let
		S = this.S,
		p = this.p,
		n = this.n
		return S * p / (1 - Math.pow(1+p,-n));
	}
	set pAnnual(n) { //setter
		this.p = n / 1200;
	}
	static compute() { //статический метод
		return S * p / (1 - Math.pow(1+p,-n));
	}
}

let ipo = new Ipoteka(2000,10,20);
console.log(ipo.A);
console.log(Ipoteka.compute(2000,10.1200,20*12)); //считает не создавая объект
ipo.p = 12;


