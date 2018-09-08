// Класс контроллер
//
class Control {
	constructor(model, viewer) {
		this.model = model;
		this.viewer = viewer;

		viewer.on('generate', this.generateResult.bind(this));
		viewer.on('radioToggle', this.toggleRadio.bind(this));
		viewer.on('toggle', this.toggleCheckbox.bind(this));
		viewer.on('select', this.changeSelect.bind(this));
		viewer.on('settings', this.changeSettings.bind(this));
		viewer.on('pressSymbol', this.pressSymbol.bind(this));
		viewer.on('callAction', this.callAction.bind(this));

		viewer.show(model.data);

		model.on('error', this.fixedError.bind(this));
	}

	toggleRadio(obj) {
		this.model.updateData(obj.name, obj.value);
		this.viewer.show(model.data);
	}

	toggleCheckbox(obj) {
		this.model.updateData(obj.name, obj.checked);
		this.viewer.show(model.data);
	}

	changeSelect(obj) {
		this.model.updateData(obj.name, obj.value);
		this.viewer.show(model.data);
	}

	changeSettings(obj) {
		const logicResut = this.model.updateData(obj.name, obj.value);

		if (logicResut) {
			this.viewer.show(model.data);
		}
	}

	generateResult() {
		// Интерфейс для генерации результата прописывается в классе потомке
	}

	fixedError() {
		// Интерфейс для обработки ошибок прописывается в классе потомке
	}

	//Добавление символа ко вводу
	pressSymbol(name) {
		const item = this.model.getItem(name);
		const logicResut = this.model.updateResult('calc-input', item.symbol, item.value);

		if (logicResut) {
			this.viewer.show(this.model.data);
		}
	}

	//вызов действия над символом
	callAction(name) {
		const item = this.model.getItem(name);
		
		const logicResut = this.model[item.action]();
		if (logicResut) {
			this.viewer.show(this.model.data);
		}
	}
}
