class Viewer extends eventEmitter {
	constructor(id, result, namesArray){
		super();

		this.form = document.querySelector(id);
		this.result = document.querySelector(result);
		this.form.addEventListener('submit', this.handleSubmit.bind(this));

		namesArray.forEach((item)=>{
			Object.keys(item).forEach((key)=>{
				
				switch (item[key]){
					case 'flag':
						this[key] = this.form.querySelector(`[name=${key}]`);
						this[key].addEventListener('change', this.handleToggle.bind(this));
						break;
					case 'select':
						this[key] = this.form.querySelector(`[name=${key}]`);
						this[key].addEventListener('change', this.handleSelect.bind(this));
						break;
					case 'settings':
						this[key] = this.form.querySelector(`[name=${key}]`);
						this[key].addEventListener('change', this.handleSettings.bind(this));
						break;
					case 'radio':
						this[key] = this.form.querySelectorAll(`[name=${key}]`);
						this[key].forEach(item=>{
							item.addEventListener('change', this.handleRadio.bind(this));
						});
						break;
					case 'symbol':
						this[key] = this.form.querySelector(`[name=${key}]`);
						this[key].addEventListener('click', this.handleSymbol.bind(this));
						break;
					case 'action':
						this[key] = this.form.querySelector(`[name=${key}]`);
						this[key].addEventListener('click', this.handleAction.bind(this));
						break;
				}	
			}) 
						
		})
	}

	//Обновление представления
	show(data){
		
		Object.keys(data).forEach((item)=>{
			
			switch (data[item]['type']){
				case 'flag':
					this.setFlag(item, data[item].value);
					break;
				case 'select':
					this.setSelect(item, data[item].value);
					break;
				case 'settings':
					if((typeof data[item].check == 'function')&&data[item].check(data[item].value)){
						this.setSettings(item, data[item].value);
					}
					break;
				case 'radio':
					this.setRadio(item, data[item].value)
					break;

			}
		})
	}

	//Метод для простановки чекбоксов
	setFlag(item, value){
		this[item].checked = value;
	}

	//Метод для простановки селектов
	setSelect(item, value){
		const select = this[item];

		for (let i = 0; i < select.options.length; i++) {
			let option = select.options[i];
			if(option.value == value){
				option.selected = true;
			}
		}
	}

	//Метод для простановки радиокнопок
	setRadio(item, value){
		const radio = this[item];
		radio[value].checked = true;
	}

	//Метод для устнановки настроечных полей
	setSettings(item, value){
		this[item].value = value;
		if(this[item].classList.contains('on-error')){
			this[item].classList.remove('on-error');
		}
	}

	//Метод для нахождения элемента в представлении
	findItem(name){
		return this[name];
	}

	//Метод переключающий чекбоксы
	handleToggle(e){
		const name = e.target.getAttribute('name');
		const checked = e.target.checked;
		
		//Обновляем Модель
		this.emmit('toggle', {name, checked});
	}

	//Метод переключающий селекты
	handleSelect(e){
		const name = e.target.getAttribute('name');
		let value = 0;

		for (let i = 0; i < e.target.options.length; i++) {
  			let option = e.target.options[i];
  			if(option.selected ){
    			value = option.value;
    			break;
  			}
		}

		//Обновляем Модель
		this.emmit('select', {name, value});
	}

	//Метод обновляющий настроечные занчения
	handleSettings(e){
		const name = e.target.getAttribute('name');
		let value = e.target.value;

		//Обновляем Модель
		this.emmit('settings', {name, value});
	}

	handleRadio(e){
		const name = e.target.getAttribute('name');
		const typeResult = e.target;
		const elems = this.form.querySelectorAll(`[name=${name}]`);
		let value ;
		for(let i=0; i<elems.length; i++){
			if(elems[i]==typeResult){
				 value = i;
				 break;
			}
		}

		//Обновляем Модель
		this.emmit('radioToggle', {name, value});

	}
	//Метод нажатия на символ
	handleSymbol(e){
		e.preventDefault();
		this.emmit('pressSymbol',e.target.name);
	}
	//Метод нажатия на кнопку действия
	handleAction(e){
		e.preventDefault();
		this.emmit('callAction',e.target.name);
	}
	//Метод отправляющий формы
	handleSubmit(e){
		e.preventDefault();
		//инициируем событие генерации паролей
		this.emmit('generate');
	}



}