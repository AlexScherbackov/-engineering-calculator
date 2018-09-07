class matematicControl extends Control{
	constructor(model, viewer){
		super(model, viewer);

		viewer.on('keypress', this.handleKeyPress.bind(this));
	}

	changeSettings(obj){
		
		if(obj.value.toString().trim() == ''){
			obj.value = 0;
		}

		const logicResut = this.model.updateData(obj.name, obj.value);
		
		if(logicResut){
			this.viewer.show(this.model.data);
		}
	}

	handleKeyPress(value){
		const item = this.model.symbolSearch(value);
		const logicResut = this.model.updateResult('calc-input', item.symbol, item.value);
		
		if(logicResut){
			this.viewer.show(this.model.data);
		}

	}
}