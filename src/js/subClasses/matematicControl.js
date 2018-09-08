class matematicControl extends Control {
	constructor(model, viewer) {
		super(model, viewer);

		this.viewer.on('keypress', this.handleKeyPress.bind(this));
		this.model.on('saveNumber', this.handleSave.bind(this))
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
		
		if(this.model.isNumeric(value)||value == '.'){
			userInput.item = this.model.symbolSearch(value);
			if (update('calc-input', userInput.item.symbol, userInput.item.value)) {
				this.viewer.show(this.model.data);
			}
		} else {
			
			if(this.model.checkOperators()){
				this.model.generateResult();
				this.viewer.show(this.model.data);
			} 
			
			this.model.operand = value;
			item.value = 0;
			
			
		}
		
	}

	handleSave(value){
		this.viewer.saveNumber(value);
		this.viewer.show(this.model.data);
	}
}
