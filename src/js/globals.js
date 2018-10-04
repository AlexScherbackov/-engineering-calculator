/* eslint-disable no-unused-vars */

let $window = window;
let $document = document;
let $html = document.documentElement;
let $body = document.body;

const NAME_STACK = [
{
	name: 'calc-input',
	type: 'settings',
	default: 0,
	value: 0,
	check: function(data){
		return true;
	}
},
{
	name: 'settings',
	type: 'radio',
	default: 0,
	value: 0
},
{
	name: 'number-one',
	type: 'symbol',
	symbol: 1,
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'number-two',
	type: 'symbol',
	symbol: 2,
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'number-three',
	type: 'symbol',
	symbol: 3,
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'number-four',
	type: 'symbol',
	symbol: 4,
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'number-five',
	type: 'symbol',
	symbol: 5,
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'number-six',
	type: 'symbol',
	symbol: 6,
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'number-seven',
	type: 'symbol',
	symbol: 7,
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'number-eight',
	type: 'symbol',
	symbol: 8,
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'number-nine',
	type: 'symbol',
	symbol: 9,
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'zero',
	type: 'symbol',
	symbol: 0,
	value: function(number){
		const data = number.toString();
		return data + this.symbol;
	}
},
{
	name: 'duble-zero',
	type: 'symbol',
	symbol:'00',
	value: function(number){
		const data = number.toString();
		return data + this.symbol;
	}
},
{
	name: 'dot',
	type: 'symbol',
	symbol:'.',
	value: function(number){
		const data = number.toString();
		
		if(data.indexOf('.') ==-1){
			return `${data}${this.symbol}`;
		} else{
			return number;
		}
		
	}
},
{
	name: 'mat-plus',
	type: 'symbol',
	symbol:' + ',
	value: function(number){
		const data = number.toString();
		return data + this.symbol;
	}
},
{
	name: 'mat-mult',
	type: 'symbol',
	symbol:' * ',
	value: function(number){
		const data = number.toString();
		return data + this.symbol;
	}
},
{
	name: 'division',
	type: 'symbol',
	symbol:' / ',
	value: function(number){
		const data = number.toString();
		return data + this.symbol;
	}
},
{
	name: 'mat-substr',
	type: 'symbol',
	symbol:' - ',
	value: function(number){
		const data = number.toString();
		return data + this.symbol;
	}
},
{
	name: 'comma',
	type: 'symbol',
	symbol:' , ',
	value: function(number){
		const data = number.toString();
		return data + this.symbol;
	}
},
{
	name: 'procent',
	type: 'action',
	symbol:' % ',
	action: 'procentCalc',
	value: function(number){
		const data = number.toString();
		return data + this.symbol;
	}
},
{
	name: 'mat-pow-2',
	type: 'symbol',
	symbol:' ^ 2 ',
	value: function(number){
		const data = number.toString();
		return data + this.symbol;
	}
},
{
	name: 'mat-pow-3',
	type: 'symbol',
	symbol:' ^ 3 ',
	value: function(number){
		const data = number.toString();
		return data + this.symbol;
	}
},
{
	name: 'mat-pow-y',
	type: 'symbol',
	symbol:' ^ ',
	value: function(number){
		const data = number.toString();
		return data + this.symbol;
	}
},
{
	name: 'sinus',
	type: 'action',
	action: 'sinus',
	symbol:' sin( ',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'arcsinus',
	type: 'action',
	action: 'arcsinus',
	symbol:' arcsin( ',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'cosinus',
	type: 'action',
	action: 'cosinus',
	symbol:' cos( ',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'arccosinus',
	type: 'action',
	action: 'arccosinus',
	symbol:' arccos( ',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'tangens',
	type: 'action',
	action: 'tangens',
	symbol:' tg( ',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'arctangens',
	type: 'action',
	action: 'arctangens',
	symbol:' arctg( ',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'cotangens',
	type: 'action',
	action: 'cotangens',
	symbol:' cot( ',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'arccotangens',
	type:  'action',
	action: 'arccotangens',
	symbol:' arcctg( ',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'left-delim',
	type: 'symbol',
	symbol:' ( ',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'right-delim',
	type: 'symbol',
	symbol:' ) ',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'eiler-const',
	type: 'action',
	symbol:' e ',
	action: 'eilerConst',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'pi-const',
	type: 'action',
	symbol: ' π ',
	action: 'piConst',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'mat-sqrt',
	type: 'action',
	symbol:' √( ',
	action: 'matSqrt',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'mat-cbrt',
	type: 'action',
	symbol:' ∛( ',
	action: 'matCbrt',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'mat-y-sqrt',
	type: 'action',
	symbol:' √( ',
	action: 'matYsqrt',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'natural-logarifm',
	type: 'action',
	symbol:' Ln( ',
	action: 'matNaturalLogarifm',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'logarifm-ten',
	type: 'action',
	symbol:' Lg( ',
	action: 'matTenLogarifm',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'logarifm',
	type: 'action',
	symbol:' log( ',
	action: 'matLogarifm',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'abs',
	type: 'symbol',
	symbol:' abs( ',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'factorial',
	type: 'symbol',
	symbol:'! ',
	value: function(number){
		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return data + this.symbol;
		}
	}
},
{
	name: 'change-mat-sign',
	type: 'action',
	action: 'changeMatSign'
},
{
	name: 'clean-end',
	type: 'action',
	action: 'deleteLastSymbol'
},
{
	name: 'save-number',
	type: 'action',
	value: null,
	action: 'saveNumber'
},

{
	name: 'output-from-memory',
	type: 'action',
	target: 'save-number',
	action: 'getNumber'
},
{
	name: 'clear-memory',
	type: 'action',
	target: 'save-number',
	action: 'cleanMemory'
},
{
	name: 'clear-all',
	type: 'action',
	action: 'clearAll'
},
{
	name: 'clear-calc',
	type: 'action',
	action: 'clearCalc'
},
{
	name: 'mat-result',
	type: 'action',
	action:'generateResult'
}
];




