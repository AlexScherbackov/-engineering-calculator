class mathModel extends Model{
	constructor(data){
		super(data);
		
		this.firstOperator = null;
		this.secondOperator = null;
		this.operand = null;
		this.result = null;
	}

	isNumeric(n) {
  		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	updateResult(name, data, func){
		const item = this.getItem(name);
		
		if((item.value === 0)&&(data == 0)){
			item.value = 0
		} else {
			item.value = func.call({symbol: data}, item.value);
		}
		
		this.formExpression(+item.value);

		return item;
		
	}
	

	formExpression(value){
		if(this.operand == null){
			this.firstOperator = value;
		} else {
			this.secondOperator = value;
		}
	}

	checkOperators(){
		if((this.firstOperator!==null)&&(this.secondOperator!==null)&&(this.operand!==null)){
			return true;
		}
	}

	buildOp(){
		if(this.checkOperators()){
			return this[this.operand](this.firstOperator, this.secondOperator);
		}
	}

	generateResult(){
		const item = this.getItem('calc-input');

		item.value = +removeTrailingZeros(this.buildOp());
		this.result = +item.value;
		this.firstOperator = this.result;

		return item;
		
	}

	checkOperand(operand){
		let flag;

		this.operand == operand ? flag = true : flag = false;

		return flag;
	}

	plus(){
		const OPERAND = '+';
		const item = this.getItem('calc-input');

		this.operand = '+';
		item.value = 0;
	}

	minus(){
		const OPERAND = '-';
		const item = this.getItem('calc-input');

		this.operand = '-';
		item.value = 0;
	}

	mult(){
		const OPERAND = '*';
		const item = this.getItem('calc-input');

		this.operand = '*';
		item.value = 0;
	}

	div(){
		const OPERAND = '÷';
		const item = this.getItem('calc-input');

		this.operand = '÷';
		item.value = 0;
		
	}

	matPow2(){
		const OPERAND = '^';

		this.operand = '^';
		this.secondOperator = 2;
		this.generateResult();

		return true;
	}

	matPowY(){
		const OPERAND = '^';

		const item = this.getItem('calc-input');
		this.operand = '^';
		item.value = 0;
	}

	procentCalc(){
		const OPERAND = '%';

		switch (this.operand) {
			case '+':
				this['%'] = function(){return +this.firstOperator + (+this.firstOperator*+this.secondOperator)/100};
				break;
			case '-':
				this['%'] = function(){return +this.firstOperator - (+this.firstOperator*+this.secondOperator)/100};
				break;
			case '*':
				this['%'] = function(){return (+this.firstOperator*+this.secondOperator)/100};
				break;
			case '÷':
				this['%'] = function(){return(+this.firstOperator*+this.secondOperator)/100};
				break;
		}
		
		this.operand = '%';
		this.generateResult();

		return true;
	}

	matSqrt(){
		
		this.operand = 'sqrt';
		this.secondOperator = 0;
		this.generateResult();

		return true;
		
	}

	changeMatSign(){
		const item = this.getItem('calc-input');

		if(+item.value > 0){
			item.value = '-'+item.value;
		} else if(+item.value < 0){
			item.value = -(+item.value);
		} else{
			item.value = item.value;
		}

		if(Math.abs(item.value) == this.firstOperator){
			this.firstOperator = +item.value;
		} else {
			this.secondOperator = +item.value;
		}
		
		return true;
	}

	deleteLastSymbol(){
		const item = this.getItem('calc-input');
		const str = item.value.toString()
		const opStr = this.firstOperator.toString();

		if(str.length > 1){
			item.value = str.slice(0, str.length-1);
		} else {
			item.value = 0
		}

		if(Math.abs(item.value) == Math.abs(opStr.slice(0, opStr.length -1))){
			this.firstOperator = +item.value;
		} else {
			this.secondOperator = +item.value;
		}

		return item;
	}

	'+'(a,b){
		return (+a+(+b)).toFixed(10);
	}

	'-'(a,b){
		return (+a-+b).toFixed(10);
	}

	'*'(a,b){
		return (+a*(+b)).toFixed(10);
	}

	'÷'(a,b){
		return (+a/+b).toFixed(10);
	}

	'^'(a,b){
		return (Math.pow(+a,+b)).toFixed(10);
	}

	'sqrt'(a){
		return (Math.sqrt(+a)).toFixed(10);
	}

	setDefault(){
		this.firstOperator = null;
		this.secondOperator = null;
		this.operand = null;
		this.result = null;
	}

	clearCalc(){
		const item = this.getItem('calc-input');
		item.value = item.default;
		this.setDefault();

		return true;
	}

	clearAll(){
		const item = this.getItem('calc-input');
		const saveNumber = this.getItem('save-number');

		saveNumber.value = null;
		item.value = item.default;
		this.setDefault();

		this.emmit('saveNumber', '');
		
		return true;
	}

	cleanMemory(){
		const saveNumber = this.getItem('save-number');

		saveNumber.value = null;
		this.emmit('saveNumber', '');

		return true;
	}

	getNumber(){
		const item = this.getItem('calc-input');
		const saveNumber = this.getItem('save-number');

		if(saveNumber.value){
			item.value = saveNumber.value;
			this.formExpression(item.value);
		}		
		
		return true;
	}

	saveNumber(){
		const item = this.getItem('calc-input');
		const saveNumber = this.getItem('save-number');

		saveNumber.value = item.value;
		this.emmit('saveNumber', `Memory: ${saveNumber.value}`);
		
		return true;
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