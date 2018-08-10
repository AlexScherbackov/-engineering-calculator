// Функция к-я вызывает переданную в неё функцию, 
// именно её мы будем дёргать в случае изменения переменных
// 
function watcher (){

    target = this.onChange.bind(this);
    target();
    target = null;
}

//Функция, которая будет возвращать некоторое количества случайных числе из переданного массива
function getRandomFromIntData (data, number) {
	let {number_of_results,	maxnumber_of_results,maxlevel} = data; //ходные параметры результата
	let random; //cлучайный индекс
	let result = [];// cюда положим результат

	

	if(Array.isArray(number)){
		console.log(number);
	} 

	//отсикаем занчения превышающие верхнюю границу
	const filterNumber = number.filter((item)=>item < maxlevel);

	console.log(filterNumber);

	for(let i = 1; i <= number_of_results; i++){
		random = getRandomInt(1, filterNumber.length);
		result.push(filterNumber.splice(random, 1).toString());
	}

	return result;
}


// Возвращает случайное число между min (включительно) и max (не включая max)
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//проверяем данные введённые пользователем
//
function checkData(){
		
}


function toggleClass(className, ...rest){
	rest.forEach((item)=>{
		const elem = document.querySelector(item);
		elem.classList.toggle(className);
	})
}
