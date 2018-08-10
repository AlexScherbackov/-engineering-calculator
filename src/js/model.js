//Kласс для работы с входными данными
//

class Model {

	constructor (selector) {
		this.elem = document.querySelector(selector);
		this.data = {};
	}
	getData (nameObject) {
		const elem = this.elem.querySelector(`[name=${nameObject.name}]`);
		
		if(nameObject.hasOwnProperty('type') && nameObject['type']=='select'){
			this.formData({'name': nameObject.name, 'value' : elem.value});
		}

		if(nameObject.hasOwnProperty('type')&& nameObject['type']=='checkbox'){
			this.formData({'name': nameObject.name, 'value' : nameObject.value});
		}

		if(nameObject.hasOwnProperty('check')){
			if(nameObject.check(elem.value)){
				this.formData({'name': nameObject.name, 'value' : elem.value});
			}
		} else{
			Object.keys(nameObject).forEach((item)=>{
				if(item != 'name' && item != 'check' && item != 'onChange' && item != 'type' && item != 'value'){
					this.getData(nameObject[item]);
				}
			})
		}

	}

	formData (data) {

		this.data[data.name] = data.value;
		
		//Внутрення переменная дескриптора
		let internalValue = this.data[data.name];

		// С каждым свойством будет связан собственный
    	// экземпляр класса Dep
   		const dep = new Dep();

   		//Добавляем свойству дескриптор(геттер и сеттер)
		Object.defineProperty(this.data, data.name, {
			get() {
            	dep.depend(); // запоминаем выполняемую функцию target
            	return internalValue;
        	},
        	set(newVal) {
        		internalValue = newVal;
            	dep.notify(); // повторно выполняем сохранённые функции
        	}
    	});
		
	}

	bindEvent(nameObject){

		const elem = this.elem.querySelector(`[name=${nameObject.name}]`);

		if(nameObject.hasOwnProperty('onChange')||(nameObject.hasOwnProperty('type')&&nameObject['settings'])){
			elem.addEventListener('change', watcher.bind(nameObject));
		}

		Object.keys(nameObject).forEach((item)=>{
			const toString = {}.toString;
					
			if(toString.call(nameObject[item]) == '[object Object]'){
				const sub = this.elem.querySelector(`[name=${nameObject[item].name}]`);
				sub.addEventListener('change', watcher.bind(nameObject[item]));
			}
		})

	}
}