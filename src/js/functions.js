// Возвращает случайное число между min (включительно) и max (не включая max)
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Переключатель классов
function toggleClass (className, ...rest){
	rest.forEach((item)=>{
		const elem = $document.querySelector(item);
		elem.classList.toggle(className);
	})
}

//Прямое сравнение
function compareNumeric (a, b) {
  if (+a > +b) return 1;
  if (+a < +b) return -1;
}

//Обратное сравнение
function compareNumericReverse (a, b) {
  if (+a < +b) return 1;
  if (+a > +b) return -1;
}

//сортировка массива пузырьком
function bubbleSort(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

//создание элемента вёрстки
function createElement(tag, props, ...children) {
    const element = document.createElement(tag);

    Object.keys(props).forEach(key => {
      if(key.startsWith('data-')){
        element.setAttribute(key, props[key])
      } else{
        element[key] = props[key]
      }
      
    });

    children.forEach(child => {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }

        element.appendChild(child);
    });

    return element;
}

//Обрезает нули после запятой в дробях
function removeTrailingZeros(value) {
    value = value.toString();

    
    if (value.indexOf('.') === -1) {
        return value;
    }

  
    while((value.slice(-1) === '0' || value.slice(-1) === '.') && value.indexOf('.') !== -1) {
        value = value.substr(0, value.length - 1);
    }
    return value;
}



