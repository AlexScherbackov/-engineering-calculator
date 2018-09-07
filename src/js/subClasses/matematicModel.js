class matematicModel extends Model{
	constructor(namesArray){
		super(namesArray);
	}

	updateResult(name, data, value){

		const item = this.getItem(name);
	
		if(this.isNumeric(data)){
			item.value = value.call({symbol: data}, item.value)
		} else{
			item.value = this.matematicOperation(item.value, data, value);
		}
		
	
		return item;
	}

	isNumeric(n){
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	matematicOperation(value, data, func){
		
		let dataArray = value.toString().replace(/\s/g, '');
		const regexp = /[\+\-\*\^\%\÷\√]/g;
		let result;
		let lastIndex = 0;
		let operation = [];
		let operand;

		while(result = regexp.exec(dataArray)){
			operation.push(dataArray.slice(lastIndex, result.index));
			if(operation.length == 2){
				let buf = this[operand](+operation[0], +operation[1]);
				operation = [];
				operation.push(buf)
			}
			if(result[0]){
				operand = result[0].toString();
			}
			

			lastIndex = regexp.lastIndex;
		}
		if(operation.length){
			let lasArg = dataArray.slice(lastIndex, dataArray.length);
			value = this[operand](+operation[0], +lasArg);
		}
		
	
		data = func.call({symbol: data}, value);

		return data;

	}

	'+'(a,b){
		return a+b;
	}

	'-'(a,b){
		return a-b;
	}

	'*'(a,b){
		return a*b;
	}

	'÷'(a,b){
		return a/b;
	}

	'^'(a,b){
	 return Math.pow(a,b);
	}

	'%'(a,b){
		return (a*b)/100;
	}

	'√'(a=1,b){
		return  a*Math.sqrt(b);
	}

	deleteLastSymbol(){
		const item = this.getItem('calc-input');
		const str = item.value.toString()
		
		if(str.length > 1){
			item.value = str.slice(0, str.length-1);
		} else {
			item.value = 0
		}
		return item;
	}

	generateResult(){
		const item = this.getItem('calc-input');

		item.value = this.matematicOperation(item.value, '', (val)=>{return val;});
		return item;
	}

	saveNumber(){
		const item = this.getItem('calc-input');
		const saveNumber = this.getItem('save-number');

		saveNumber.value = item.value;
		
	}

	getNumber(){
		const item = this.getItem('calc-input');
		const saveNumber = this.getItem('save-number');
		if((item.value.length==1)&&(+item.value.charAt(data.length-1)==0)){
			item.value = saveNumber.value;
		} else{
			item.value = item.value + saveNumber.value;
		}
	}

	cleanMemory(){
		const saveNumber = this.getItem('save-number');
		saveNumber.value = null;
	}

	clearAll(){
		const item = this.getItem('calc-input');
		const saveNumber = this.getItem('save-number');

		saveNumber.value = null;
		item.value = item.default;
	}

	clearCalc(){
		const item = this.getItem('calc-input');
		item.value = item.default;
	}

	symbolSearch(symbol){
		const symbols = this.getType('symbol');
		let result;
		
		symbols.forEach((item)=>{
			let dataElement = this.getItem(item);
			Object.keys(dataElement).forEach((data)=>{
				if((data == 'symbol')&&(dataElement[data].toString()==symbol)){
					result = dataElement;
				}
			});
		})

		return result
	}
}