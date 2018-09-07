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
	name: 'two-zero',
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
		return `${data}${this.symbol}`;
	}
},
{
	name: 'mat-plus',
	type: 'symbol',
	symbol:'+',
	value: function(data){
		return `${data} ${this.symbol} `;
	}
},
{
	name: 'mat-mult',
	type: 'symbol',
	symbol:'*',
	value: function(data){
		return `${data} ${this.symbol} `;
	}
},
{
	name: 'division',
	type: 'symbol',
	symbol:'÷',
	value: function(data){
		return `${data} ${this.symbol} `;
	}
},
{
	name: 'mat-substr',
	type: 'symbol',
	symbol:'-',
	value: function(data){
		return `${data} ${this.symbol} `;
	}
},
{
	name: 'procent',
	type: 'symbol',
	symbol:'%',
	value: function(data){
		return `${data} ${this.symbol} `;
	}
},
{
	name: 'mat-pow-2',
	type: 'symbol',
	symbol:'^ 2',
	value: function(data){
		return `${data} ${this.symbol} `;
	}
},
{
	name: 'mat-pow-y',
	type: 'symbol',
	symbol:'^',
	value: function(data){
		return `${data} ${this.symbol} `;
	}
},
{
	name: 'change-mat-sign',
	type: 'symbol',

	value: function(data){
		if(+data > 0){
			return '-'+data;
		} else if(+data < 0){
			return -(+data);
		} else{
			return data;
		}
	}
},
{
	name: 'clean-end',
	type: 'action',
	action: 'deleteLastSymbol'
},
{
	name: 'mat-sqrt',
	type: 'symbol',
	symbol:'√',
	value: function(number){

		const data = number.toString();
		if((data.length==1)&&(+data.charAt(data.length-1)==0)){
			return this.symbol;
		} else{
			return `${data} ${this.symbol} `;
		}
		return ;
	}
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




