class Negociacao {

	constructor() {

		this._data = new Date();
		this._quantidade = 1;
		this._valor = 0.0;

	}

	getVolume() {
		return this._quantidade * this._data;
	}


	getData() {
		return this._data;
	}

	setData(value) {
		this._data = value;
	}

	getQuantidade() {
		return this._quantidade;
	}

	setQuantidade(value) {
		this._quantidade = value;
	}

	getValor() {
		return this._valor;
	}

	setValor(value) {
		this._valor = value;
	}
}

