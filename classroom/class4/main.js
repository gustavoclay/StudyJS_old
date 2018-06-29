//AJAX PURO
/* var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/gustavoclay');
xhr.send(null);

xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		console.log(JSON.parse(xhr.responseText));
	}
}
 */
//PROMISSES
/* var minhaPromisse = function () {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://api.github.com/users/gustavoclay');
		xhr.send(null)

		xhr.onreadystatechange = 	function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					resolve(JSON.parse(xhr.responseText));
				} else {
					reject('Erro na requisição');
				}
			}
		}
	});
}

minhaPromisse()
	.then(function(response) {
		console.log(response);
	})
	.catch(function(error) {
		console.warn(error);
	}); */
//AXIOS
axios.get('https://api.github.com/users/gustavoclay')
	.then(function(response) {
		console.log(response);
	})
	.catch(function(error) {
		console.warn(error);
	});
