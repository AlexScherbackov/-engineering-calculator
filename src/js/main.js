// @include('globals.js')
// @include('functions.js')
// @include('observer.js')
// @include('model.js')

const calculationRandom = new Model('#calculation-random');
const calcTypeRadio = document.querySelectorAll(`[name=calc_type]`)
let target = null;


NAME_STACK.forEach((item)=>{
	calculationRandom.getData(item);
	calculationRandom.bindEvent(item);
});


calcTypeRadio.forEach((item)=>{
	item.addEventListener('change',changeCalculationType);
})

function changeControl(){
	const elem = calculationRandom.elem.querySelector(`[name=${this.name}]`);
	
		if(elem.value >= this.minLevel && elem.value <= this.maxLevel){
			
			calculationRandom.data[this.name] = elem.value;
			if(elem.classList.contains('on-error')){
				elem.classList.remove('on-error');
				elem.parentNode.querySelector('.js-target').textContent = this.text;
			}
		} else {
			
			if(!elem.classList.contains('on-error')){
				elem.classList.add('on-error');
			}
			
			if(elem.value > this.maxLevel){
				elem.parentNode.querySelector('.js-target').textContent = `Значение не может быть больше ${this.maxLevel}`;
			} else if(elem.value < this.minLevel){
				elem.parentNode.querySelector('.js-target').textContent = `Значение не может быть меньше ${this.minLevel}`;
			}

		}
	
}

function changeRange(){

	const caring = changeControl.bind(this);
	caring();
	
	const elem = calculationRandom.elem.querySelector(`[name=${this.name}]`);
	const parent = elem.parentNode.parentNode;
	
	if(this.name == "min_level"){
		const operate = calculationRandom.elem.querySelector(`[name=max_level]`);
		if(parseFloat(elem.value) > parseFloat(operate.value)){
			let buf = operate.value;
			operate.value = elem.value;
			elem.value = buf;
		}
	}

	if(this.name == "max_level"){
		const operate = calculationRandom.elem.querySelector(`[name=min_level]`);
		if(parseFloat(elem.value) < parseFloat(operate.value)){
			let buf = operate.value;
			operate.value = elem.value;
			elem.value = buf;
		}
	}
}

function changeCalculationType(){
	toggleClass('no-visible','#from-range', '#from-list' );
}

function changeCalculationRepeat(){
	const elem = calculationRandom.elem.querySelector(`[name=${this.name}]`);

	if(elem.getAttribute('checked')){
		console.log(true);	
	}
	
}

function changeCalculationOrder(){

}

function changeCalculationDelimiter(){

}