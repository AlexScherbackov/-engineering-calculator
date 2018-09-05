/* eslint-disable no-unused-vars */

let $window = window;
let $document = document;
let $html = document.documentElement;
let $body = document.body;

const NAME_STACK = [
		{
			name: 'calc-type',
			type: 'radio',
			default: 0,
			value: 0,
			changeForm: function(data){
				const resultsBlock = document.querySelectorAll('.calc-type'); 
				const decor = document.querySelectorAll('.decor'); 

				resultsBlock.forEach(item=>{
					if(!item.classList.contains('no-visible')){
						item.classList.add('no-visible');
					}
				});

				decor.forEach(item =>{
					if(!item.classList.contains('no-visible')){
						item.classList.add('no-visible');
					}
				})

				if(data == 2){
					document.querySelector('#area').style.fill= 'red';
				} else{
					decor[data].classList.remove('no-visible');
					document.querySelector('#area').style.fill= 'transparent';
				}

				resultsBlock[data].classList.remove('no-visible');
			},
			pastFormula: function(data){
				const elem = document.querySelector('#calculation-result');
				const formulaElem = elem.querySelector('.formula');
				let formula;
				
				switch(data){
					case 0:
						formula = 'V=π·r²·h';
						break;
					case 1:
						formula = 'V=π·h·D²/4';
						break;
					case 2:
						formula = 'V=S·h';
						break;
				}
				formulaElem.textContent = `Формула расчёта: ${formula}`
			}
		},
		{
			name: 'radius',
			type: 'settings',
			minLevel: 0.000001,
			maxLevel: 999999.999999,
			value: '',
			check: function(data){
				if((data >=this.minLevel)&&(data<=this.maxLevel)){
					return true;
				}
				return false;
			}
		},
		{
			name: 'radius-units',
			type: 'select',
			default: 1,
			value: 1
		},
		{
			name: 'height',
			type: 'settings',
			minLevel: 0.000001,
			maxLevel: 999999.999999,
			value: '',
			check: function(data){
				if((data >=this.minLevel)&&(data<=this.maxLevel)){
					return true;
				}
				return false;
			}
		},
		{
			name: 'height-units',
			type: 'select',
			default: 1,
			value: 1
		},
		{
			name: 'diametr',
			type: 'settings',
			minLevel: 0.000001,
			maxLevel: 999999.999999,
			value: '',
			check: function(data){
				if((data >=this.minLevel)&&(data<=this.maxLevel)){
					return true;
				}
				return false;
			}
		},
		{
			name: 'diametr-units',
			type: 'select',
			default: 1,
			value: 1
		},
		{
			name: 'area',
			type: 'settings',
			minLevel: 0.000001,
			maxLevel: 999999.999999,
			value: '',
			check: function(data){
				if((data >=this.minLevel)&&(data<=this.maxLevel)){
					return true;
				}
				return false;
			}
		},
		{
			name: 'area-units',
			type: 'select',
			default: 1,
			value: 1
		},
		{
			name: 'round_of',
			type: 'settings',
			minLevel: 0,
			maxLevel: 9,
			default: 3,
			value: 3,
			check: function(data){
				if((data >=this.minLevel)&&(data<=this.maxLevel)){
					return true;
				}
				return false;
			}
		}
	];




