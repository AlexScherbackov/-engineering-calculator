class modelCilender extends Model{
	constructor (namesArray) {
		super(namesArray);
	}
	//Управляет вычислением объёма цилиндра
	calculateSize () {
		
		switch (this._data['calc-type'].value){
			case 0:
				this.volume = this.getCilinderVolume('radius', 'height',(a,b)=>{return Math.PI*Math.pow(a, 2)*b});
				break;
			case 1:
				this.volume = this.getCilinderVolume('diametr', 'height',(a,b)=>{return Math.PI*b*Math.pow(a, 2)/4});
				break;
			case 2:
				this.volume = this.getCilinderVolume('area', 'height',(a,b)=>{return a*b});
				break;
		}

		this.emmit('showResult', this.volume);
	}

	//вычисляет объём цилиндра
	getCilinderVolume (firstFactor, secondFactor, formula) {
		let fFactor = +this._data[firstFactor].value;
		const fFactorUnits = +this._data[`${firstFactor}-units`].value;
		let sFactor = +this._data[secondFactor].value;
		const sFactorUnits = +this._data[`${secondFactor}-units`].value;

		fFactor = fFactorUnits <= sFactorUnits ? fFactor : this.formatToSI(fFactor, fFactorUnits, sFactorUnits);
		sFactor = fFactorUnits >= sFactorUnits ? sFactor : this.formatToSI(sFactor, sFactorUnits, fFactorUnits);

		return {
					'value':formula(fFactor, sFactor), 
					units: fFactorUnits <= sFactorUnits ? fFactorUnits : sFactorUnits,
					precision: this._data.round_of.value
				};
	}

	//приводит к требуемому формату
	formatToSI (number, aUnits, bUnits) {
		const si = Math.pow(10,(aUnits - bUnits));
		return number*si;
	}
	
	//Переводит результат в новые единицы измерения
	changeResultUnits(index){
		this.volume.value = this.formatToSI(+this.volume.value, this.volume.units, index+1);
		this.volume.units = index+1;
	}
}