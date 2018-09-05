//Для реализации каждого конкретного калькулятора мы создаём подкласс для базовых классов. 
//Это позволяет нам расширять функционал приложения бережно относясь к ресурсам браузера 
//и нервам програмистов, которые поддерживают этот код
//
//Сабкласс представления реализует методы обработки ошибок и отображения результатов
//характерные для калькулятора объёма цилиндра
class viewerCilender extends Viewer{
	constructor(id, result, namesArray){
		super(id, result, namesArray);
	}

	//расширение метода отображающео представление
	show(data){
		super.show(data);
		
		Object.keys(data).forEach((item)=>{
			
			switch (data[item]['type']){
				case 'flag':
					
					break;
				case 'select':
					
					break;
				case 'settings':
					
					break;
				case 'radio':
					data[item].changeForm(data[item].value);
					data[item].pastFormula(data[item].value);
					break;
			}
		})

		
	}

	//Отображение ошибок ввода 
	errorAction(obj){
		
		const errorElem = this.form.querySelector(`[name=${obj.name}]`);

		if(!errorElem.classList.contains('on-error')){
			errorElem.classList.add('on-error');
		}

		alert(obj.error);
	}

	//Отображение результатов вычисления
	showResult(obj){
		const elem = document.querySelector('#calculation-result');
		const volumeElem = elem.querySelector('.volume');

		volumeElem.textContent = 'Объём цилиндра: ' + removeTrailingZeros(obj.value.toFixed(obj.precision));
		
		if(!elem.querySelector('.units')){
			const select = createElement('select', {'className': 'calcsoft__select units mt-10', 'name':'result-unit'});
			const arr = ['куб.мм', 'куб.см', 'куб.дм', 'куб.м', 'л.'];
			
			select.addEventListener('change', this.handleResultUnits.bind(this));

			arr.forEach((item)=>{
				let option = createElement('option',{}, item);
				select.appendChild(option);
			})

			for (var i = 0; i < select.options.length; i++) {
				let option = select.options[i];
				if(i == obj.units-1) {
					option.selected = true;
				}
			}

			elem.appendChild(select);
		} else{
			const select = elem.querySelector('.units');

			for (var i = 0; i < select.options.length; i++) {
				let option = select.options[i];
				if(i == obj.units-1) {
					option.selected = true;
				}
			}
		}
	}

	//Перехват события изменения единиц измерения
	handleResultUnits(e){
		let index = e.target.selectedIndex;
		
		this.emmit('changeResultUnits', index)
	}
}