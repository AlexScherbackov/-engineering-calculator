//Для реализации каждого конкретного калькулятора мы создаём подкласс для базовых классов. 
//Это позволяет нам расширять функционал приложения бережно относясь к ресурсам браузера 
//и нервам програмистов, которые поддерживают этот код
//
//Сабкласс контроллера содержит методы специфичные для калькулятора объёма цилиндра 
class controlCilender extends Control{
	constructor(model, viewer){
		super(model, viewer);

		model.on('showResult', this.showResult.bind(this));//слушаем событие выдачи результата вычислений
		viewer.on('changeResultUnits', this.changeResultUnits.bind(this));//слушаем событие изменения единиц измерения результата
	}

	//инициируем расссчё результата
	generateResult(){
		const results = this.model.calculateSize();
	}

	//инициируем вывод уведомления об ошибках и сответствующие де	ствия
	fixedError(obj){
		const errorStr = `Допустимо вводить численные значения от ${obj.item.minLevel} до ${obj.item.maxLevel}`;
		this.viewer.errorAction({'name':obj.name, 'value':obj.data, 'error':errorStr});
	}

	//инициируем отображение результата
	showResult(obj){
		this.viewer.showResult(obj);
	}

	//инициируем изменение единиц измерения результата
	changeResultUnits(index){
		this.model.changeResultUnits(index);
		this.viewer.showResult(this.model.volume);
	}

}