class mathModel extends Model{
	constructor(data){
		super(data);
		
		this.formula = '0';
		this.result = null;
		this.changeUnitsOfCalculation('deg');
	}

	isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	updateResult(name, data, func){
		const item = this.getItem(name);

		if((item.value === 0)&&(data == 0)){
			item.value = 0;
			this.formula = 0;
		} else {
			item.value = func.call({symbol: data}, item.value);
			this.formula = func.call({symbol: data}, this.formula);
		}
		
		return item;
		
	}
	

	generateResult(){
		const item = this.getItem('calc-input');
		let calcResult = 0;
		
		try{
			calcResult = +removeTrailingZeros(math.parse(this.formula).eval());
			item.value = +calcResult;
			this.result = +item.value;
			this.formula = this.result;

		} catch(err){
			this.emmit('error');
		}	 
		
		return item;
		
		
	}

	procentCalc(){
		const OPERAND = '%';
		const formula = this.formula.trim().split(' ');
		const procentArr = formula.splice(-4, 4, '');
		const operand = procentArr[1];
		const firstOperator = math.eval(procentArr[0]);
		const secondOperator = math.eval(procentArr[2]);

		let res;

		switch (operand) {
			case '+':
			res =  +firstOperator + (+firstOperator*+secondOperator)/100;
			break;
			case '-':
			res =  +firstOperator - (+firstOperator*+secondOperator)/100;
			break;
			case '*':
			res = +firstOperator*+secondOperator/100;
			break;
			case '/':
			res = +firstOperator*+secondOperator/100;
			break;
		}
		
		formula.splice(-1, 1, res);
		this.formula = formula.join(' ');

		return true;
	}

	replaceLastOperator(substityte){
		const formula = this.formula.toString().trim().split(' ');
		
		if(this.isNumeric(formula[formula.length-2])){
 			substityte = `* ${substityte}`;
		} 

		formula.splice(-1, 1, substityte)
		this.formula = formula.join(' ');

	}

	sinus(){
		this.replaceLastOperator('sin( ');
		return true;
	}

	arcsinus(){
		this.replaceLastOperator('asin( ');
		return true;
	}

	cosinus(){
		this.replaceLastOperator('cos( ');
		return true;
	}

	arccosinus(){
		this.replaceLastOperator('acos( ');
		return true;
	}

	tangens(){
		this.replaceLastOperator('tan( ');
		return true;
	}

	arctangens(){
		this.replaceLastOperator('atan( ');
		return true;
	}

	cotangens(){
		this.replaceLastOperator('cot( ');
		return true;
	}

	arccotangens(){
		this.replaceLastOperator('acot( ');
		return true;
	}

	eilerConst(){
		this.replaceLastOperator(Math.E);
		return true;
	}

	piConst(){
		this.replaceLastOperator(Math.PI);
		return true;
	}

	matSqrt(){
		this.replaceLastOperator('sqrt( ');
		return true;
	}

	matCbrt(){
		this.replaceLastOperator('cbrt( ');
		return true;
	}

	matYsqrt(){
		this.replaceLastOperator('pow( ');
		//this.emmit('showHint', '√( число , степень )');
		return true;
	}

	/*matYsqrt(){
		const x = prompt('Введите степень', 2);
		const y = prompt('Введите выражение', 0);
		
		if(x&&y){
			const res = Math.pow(math.eval(y), 1/math.eval(x));
			const str = `${x}√(${y}) `
			const item = this.getItem('calc-input');
			const formula = this.formula.toString().trim().split(' ');
			formula.push(res);
			if(this.formula == 0){
				this.formula = res;
				item.value = str;
			} else {
				this.formula = formula.join(' ');
				item.value += str;
			}
			
			return true;
		}
		
	}*/
	matLogarifm(){
		this.replaceLastOperator('log( ');
		//this.emmit('showHint', 'log( число , основание )');
		return true;
	}
	/*matLogarifm(){
		const x = prompt('Введите основание', 10);
		const y = prompt('Введите выражение', 0);
		
		if(x&&y){
			let res = math.log(math.eval(y), math.eval(x));

			//Для движка v8
			if(Math.round(res)==3){
				res = Math.round(res);
			}

			const str = `Log(${y},${x}) `;
			const item = this.getItem('calc-input');
			const formula = this.formula.toString().trim().split(' ');
			formula.push(res);
			if(this.formula == 0){
				this.formula = res;
				item.value = str;
			} else {
				this.formula = formula.join(' ');
				item.value += str;
			}
			
			return true;
		}
	}*/

	matNaturalLogarifm(){
		const formula = this.formula.toString().trim().split(' '); 
		formula.splice(-1, 1, 'log( ');
		this.formula = formula.join(' ');
		
		return true;
	}

	matTenLogarifm(){
		const formula = this.formula.trim().split(' ');
		formula.splice(-1, 1, 'log10( ');
		this.formula = formula.join(' ');
		
		return true;
	}

	matAbs(){
		const formula = this.formula.trim().split(' ');
		formula.splice(-1, 1, 'abs( ');
		this.formula = formula.join(' ');
		
		return true;
	}

	changeMatSign(){
		const item = this.getItem('calc-input');
		const displayExp  = item.value.toString().split(' ').reverse();
		const formula = this.formula.toString().split(' ').reverse();
		
		if(formula.length > 0){
			let firstNumericElement = formula.find(this.isNumeric);
			let index = formula.indexOf(firstNumericElement);
			firstNumericElement = math.unaryMinus(firstNumericElement);
			formula[index] = firstNumericElement;
			this.formula = formula.reverse().join(' ');
		}

		if(displayExp.length > 0){
			let firstNumericElement = displayExp.find(this.isNumeric);
			let index = displayExp.indexOf(firstNumericElement);
			firstNumericElement = math.unaryMinus(firstNumericElement);
			displayExp[index] = firstNumericElement;
			item.value = displayExp.reverse().join(' ');
		}

		return true;
	}

	deleteLastSymbol(){
		const item = this.getItem('calc-input');
		let str = item.value.toString().trim().split(' ');
		let formula = this.formula.toString().trim().split(' ');
		
		if(this.isNumeric(str[str.length-1])){
			let num = str[str.length-1].toString();
			if(num.length > 1){
				num = +num.slice(0, num.length-1);
				str[str.length-1] = num;
				item.value = str.join(' ');

				formula[formula.length-1] = num;
				this.formula = formula.join(' ');
			} else {
				str[str.length - 1] = '';
				item.value = str.join(' ');

				formula[formula.length-1] = '';
				this.formula = formula.join(' ');
			}
		} else {
			str[str.length - 1] = '';
			item.value = str.join(' ');

			formula[formula.length-1] = '';
			this.formula = formula.join(' ');
		}

		return item;
	}

	setDefault(){
		this.formula = 0;
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
				if((data == 'symbol')&&(dataElement[data].toString().trim()==symbol)){
					result = dataElement;
				}
			});
		})

		return result
	}

	changeUnitsOfCalculation(unit){

		// our extended configuration options
		const config = {
    		angles: unit // 'rad', 'deg', 'grad'
    	}

    	let replacements = {}

    	

  		// create trigonometric functions replacing the input depending on angle config
  		const fns1 = ['sin', 'cos', 'tan', 'sec', 'cot', 'csc']
  	
  		fns1.forEach(function(name) {

    		const fn = math[name] // the original function

    		const fnNumber = function (x) {
      		// convert from configured type of angles to radians
      			switch (config.angles) {
      				case 'deg':
      				return fn(x / 360 * 2 * Math.PI)
      				case 'rad':
      				return fn(x*180/Math.PI)
      				default:
      				return fn(x)
      			}
     		}

    		// create a typed-function which check the input types
    			replacements[name] = math.typed(name, {
    				'number': fnNumber,
    				'Array | Matrix': function (x) {
    					return math.map(x, fnNumber)
    				}
    			})
			})

  	// create trigonometric functions replacing the output depending on angle config
  		const fns2 = ['asin', 'acos', 'atan', 'atan2', 'acot', 'acsc', 'asec']
  		fns2.forEach(function(name) {
   				const fn = math[name] // the original function

    			const fnNumber = function (x) {
    			const result = fn(x)

    			if (typeof result === 'number') {
        	// convert to radians to configured type of angles
        		switch(config.angles) {
        			case 'deg':  return result*180/Math.PI
        			case 'rad': return result*Math.PI/180
        			default: return result
        			}
    		}

    		return result
		}

    	// create a typed-function which check the input types
   			replacements[name] = math.typed(name, {
    			'number': fnNumber,
    			'Array | Matrix': function (x) {
    				return math.map(x, fnNumber)
    			}
    		})
		})

 		math.import(replacements, {override: true});

	}


}