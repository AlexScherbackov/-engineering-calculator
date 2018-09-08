// Kласс для работы с входными данными

class Model extends eventEmitter {
	constructor(namesArray) {
		super();
		this._data = {};
		namesArray.forEach((item) => {
			this.getData(item);
		});
	}

	get data() {
		return this._data;
	}

	// Метод получения данных и формирования первичной модели объекта
	getData(nameObject) {
		// наличие имени свидетельствует о том что это изменяемое пользовательем значение, требующее наблюдения
		if (nameObject.hasOwnProperty('name')) {
			this.formData(nameObject);
		} else {
			// для вложенных элементов
			Object.keys(nameObject).forEach((item) => {
				if (item != 'name' && item != 'check' && item != 'default' && item != 'type' && item != 'value') {
					this.getData(nameObject[item]);
				}
			});
		}
	}

	// Метод формирующий конкретную структуру данных
	formData(data) {
		this._data[data.name] = {};

		Object.keys(data).forEach((item) => {
			if (item != 'name') {
				this._data[data.name][item] = data[item];
			}
		});
	}

	// Метод возвращающий элемент данных с определённым именем из общего объекта
	getItem(name) {
		return this._data[name];
	}

	// Метод возвращающий элемент данных с определённым типом из общего объекта
	getType(type) {
		const items = [];

		Object.keys(this._data).forEach((item) => {
			if (this._data[item].hasOwnProperty('type') && this._data[item].type == type) {
				items.push(item);
			}
		});

		return items;
	}

	// Метод обновляющий элемент данных
	updateData(name, data) {
		const item = this.getItem(name);

 		if (item.hasOwnProperty('check') && !item.check(data)) {
 			this.emmit('error', {name,
				item,
				data});

			return false;
 		}

 		item.value = data;

		// this.emmit('change', this._data);

		return item;
	}

	updateSettings(name) {

	}

	updateFlags(name) {
		const item = this.getItem(name);
		const flags = this.getType('flag');
		const itemValue = item.value.split('');

		flags.forEach((item) => {
			let flag = this.getItem(item);

			let trigger = flag.regexp.split('').some((item) => {
				if (itemValue.indexOf(item) != -1) {
					return true;
				}

				return false;
			});

			if (trigger) {
				flag.value = true;
			} else {
				flag.value = false;
			}
		});
	}

	// Возвращает асоциативный массив имя-тип
	getNames() {
		const namesArr = [];

		Object.keys(this._data).forEach((item) => {
			namesArr.push({[item]: this._data[item].type});
		});

		return namesArr;
	}
}

