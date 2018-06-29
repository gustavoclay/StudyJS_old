# Exercícios: Módulo 02

## 1º exercício

Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve aparecer na tela.

## 2º exercício

Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

```js
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var newColor = getRandomColor(); // #E943F0
```

## 3º exercício

A partir do seguinte vetor:

```js
var nomes = ['Diego', 'Gabriel', 'Lucas'];
```

Preencha uma lista (```<ul>```) no HTML com os itens da seguinte forma:

* Diego
* Gabriel
* Lucas

## 4º exercício

Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:

```html
<input type="text" name="nome">
<button onClick="adicionar()">Adicionar</button>
```

Ao clicar no botão, a função ```adicionar()``` deve ser disparada adicionando um novo item a lista de nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.

## 5º exercício (Desafio master, vai encarar?)

Dado o seguinte vetor:

```js
var users = [
  {
    nome: 'Diego',
    idade: 23,
    sexo: 'M',
  },
  {
    nome: 'Gabriela',
    idade: 18,
    sexo: 'F',
  },
  {
    nome: 'José',
    idade: 30,
    sexo: 'M',
  },
  {
    nome: 'Maria',
    idade: 27,
    sexo: 'F',
  }
];
```

Exiba os dados em tela em forma de lista como a seguir e crie 3 botões abaixo:

```html
<ul>
  <li>Diego é homem e possui 23 anos</li>
  <li>Gabriela é mulher e possui 18 anos</li>
  <li>José é homem e possui 30 anos</li>
  <li>Maria é mulher e possui 27 anos</li>
</ul>

<button onClick="">Ordenar por nome</button>
<button onClick="">Ordenar por idade</button>

<button onClick="">Exibir apenas homens</button>
<button onClick="">Exibir apenas mulheres</button>
<button onClick="">Exibir todos</button>
```

Os dois primeiros botões devem ordenar a lista, por nome e por idade. Os outros 3 botões devem aplicar filtros na lista exibindo apenas homens, apenas mulheres ou todos. Lembrando que o filtro deve funcionar junto da ordenação então deve ser possível filtrar apenas homens e ordenar por idade.