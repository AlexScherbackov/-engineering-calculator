
// создание элемента вёрстки
function createElement(tag, props, ...children) {
	const element = document.createElement(tag);

	Object.keys(props).forEach((key) => {
		if (key.startsWith('data-')) {
			element.setAttribute(key, props[key]);
		} else {
			element[key] = props[key];
		}
	});

	children.forEach((child) => {
		if (typeof child === 'string') {
			child = document.createTextNode(child);
		}

		element.appendChild(child);
	});

	return element;
}

// Обрезает нули после запятой в дробях
function removeTrailingZeros(value) {
	value = value.toString();

	if (value.indexOf('.') === -1) {
		return value;
	}

	while ((value.slice(-1) === '0' || value.slice(-1) === '.') && value.indexOf('.') !== -1) {
		value = value.substr(0, value.length - 1);
	}

	return value;
}

