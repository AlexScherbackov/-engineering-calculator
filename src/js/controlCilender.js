class controlCilender extends Control{
	constructor(model, viewer){
		super(model, viewer);

		model.on('showResult', this.showResult.bind(this));
		viewer.on('changeResultUnits', this.changeResultUnits.bind(this));
	}

	generateResult(){
		const results = this.model.calculateSize();
	}

	fixedError(obj){
		const errorStr = `Допустимо вводить численные значения от ${obj.item.minLevel} до ${obj.item.maxLevel}`;
		this.viewer.errorAction({'name':obj.name, 'value':obj.data, 'error':errorStr});
	}

	showResult(obj){
		this.viewer.showResult(obj);
	}

	changeResultUnits(index){
		this.model.changeResultUnits(index);
		this.viewer.showResult(this.model.volume);
	}

}