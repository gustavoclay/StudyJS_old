class NegociacaoController {

	constructor() {
		//imitando jquery
		let $ = document.querySelector.bind(document);

		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}

	adiciona(event) {
		event.preventDefault();

		let data = new Date(this._inputData.split('-'));

		let negociacao = new Negociacao(
			data,
			this._inputQuantidade.value,
			this._inputValor.value,
		);

		console.log(negociacao);

	}


}
