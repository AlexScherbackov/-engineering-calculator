class matematicControl extends Control {
	constructor(model, viewer) {
		super(model, viewer);

		this.viewer.on('keypress', this.handleKeyPress.bind(this));
		this.model.on('saveNumber', this.handleSave.bind(this));
		
	}

	changeSettings(obj) {
		if (obj.value.toString().trim() == '') {
			obj.value = 0;
		}

		const logicResut = this.model.updateData(obj.name, obj.value);

		if (logicResut) {
			this.viewer.show(this.model.data);
		}
	}

	handleKeyPress(value) {
		const userInput = {};
		const item = this.model.getItem('calc-input');
		const update = this.model.updateResult.bind(this.model);
		
		userInput.item = this.model.symbolSearch(value);
		
		if(userInput.item){
			
			if (update('calc-input', userInput.item.symbol, userInput.item.value)) {
				this.viewer.show(this.model.data);
			}
		} 
		
	}

	handleSave(value){
		this.viewer.saveNumber(value);
		this.viewer.show(this.model.data);
	}

	handleHint(hint){
		this.viewer.showHint(hint);
		this.viewer.show(this.model.data);
	}

	//вызов действия над символом
	callAction(name) {
		const item = this.model.getItem(name);
		
		if(item.hasOwnProperty('symbol')){
			this.model.updateResult('calc-input', item.symbol, item.value);
		}

		const logicResut = this.model[item.action]();
		if (logicResut) {
			this.viewer.show(this.model.data);
		}
	}

	toggleRadio(obj) {
		super.toggleRadio(obj);
		let unit;

		
		switch(obj.value){
			case 0:
				unit = 'deg';
				break;
			case 1:
				unit = 'rad';
				break;
		}
		
		this.model.changeUnitsOfCalculation(unit);

	}

	fixedError(){
		this.viewer.showError();
	}

}
