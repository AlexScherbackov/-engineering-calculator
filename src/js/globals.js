/* eslint-disable no-unused-vars */

let $window = $(window);
let $document = $(document);
let $html = $(document.documentElement);
let $body = $(document.body);


const NAME_STACK = [
		{
			name: "number_of_results",
			text: "Количество генерируемых чисел:",
			minLevel: 1,
			maxLevel: 50,
			check: function (value) {
				if((value >= this.minLevel)&&(value<=this.maxLevel)){
					return true;
				} else{
					return false;
				}
			},
			onChange: changeControl
		},
		{
			
			minLevel: {
				name: "min_level",
				text: "Нижняя граница диапазона значений:",
				minLevel: 1,
				maxLevel: 1000000000,
				check: function(value){
					if((value<=this.maxLevel)&&(value>=this.minLevel)){
						return true;
					} else {
						return false;
					}
				},
				onChange: changeRange
			},
			maxLevel:{
				name: "max_level",
				text: "Верхняя граница диапазона значений:",
				minLevel: 1,
				maxLevel: 1000000000,
				check: function(value){
					if((value<=this.maxLevel)&&(value>=this.minLevel)){
						return true;
					} else {
						return false;
					}
				},
				onChange: changeRange
			},
			exclude: {
				name: "exclude_values",
				text: "Исключить числа:",
				check: function(value){
					if(Array.isArray(value)){
						let flag = true;
						value.forEach((item)=>{
							if(!isNaN(parseFloat(item)) && isFinite(item)){
								flag = false;
							}
						});
						return flag;
					} else{
						return false;
					}
				},
				onChange: changeControl
			} 
		},
		{
			list: {
				name: "value_list",
				check: function(value){
					if(Array.isArray(value)){
						let flag = true;
						value.forEach((item)=>{
							if(!isNaN(parseFloat(item)) && isFinite(item)){
								flag = false;
							}
						});
						return flag;
					} else {
						return false;
					}
				},
				onChange: changeControl
			}
		},
		{
			name: "without_repeat",
			type: 'settings',
			onChange: changeCalculationRepeat,
		},
		{
			name: "order",
			onChange: changeCalculationOrder,
		},
		{
			name: "delimiter",
			text: "Разделитель чисел:",
			allowableRange: [" ", ",", ";", "-"],
			check: function (value) {
				if(this.allowableRange.indexOf(value)!=-1) {
					return true;
				} else {
					return false;
				}
			},
			onChange: changeCalculationDelimiter,

		}		
	];

console.log(NAME_STACK);