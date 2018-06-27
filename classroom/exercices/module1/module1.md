# Exercícios: Módulo 01

## 1º exercício

Crie uma função que dado o objeto a seguir:

```js
var endereco = {
  rua: 'Rua dos pinheiros',
  numero: 1293,
  bairro: 'Centro',
  cidade: 'São Paulo',
  uf: 'SP'
};
```

Retorne o seguinte conteúdo:

```
O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.
```

## 2º exercício

Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

```js
function pares(x, y) {
  // código aqui
}

pares(32, 321);
```

## 3º exercício

Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano ```true/false``` caso exista ou não.

```js
function temHabilidade(skills) {
  // código aqui
}

var skills = ['Javascript', 'ReactJS', 'React Native'];
temHabilidade(skills); // true ou false
```

_Dica: para verificar se um vetor contém um valor, utilize o método [indexOf](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)._

## 4º exercício

Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

```js
function experiencia(anos) {
  // código aqui
}

var anosEstudo = 7;
experiencia(anosEstudo);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
```

## 5º exercício

Dado o seguinte vetor de objetos:

```js
var usuarios = [
  {
    nome: 'Diego',
    habilidades: ['Javascript', 'ReactJS', 'Redux']
  },
  {
    nome: 'Gabriel',
    habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
  }
];
```

Escreva uma função que produza o seguinte resultado:

```
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
```

_Dica: Para percorrer um vetor você deve utilizar a sintaxe [for...of](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of) e para unir valores de um array com um separador utilize o [join](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join)._

## 6º exercício (Desafio master, vai encarar?)

Em uma página crie uma função que dado um número de minutos crie um countdown em tempo real (de segundo a segundo) até chegar em zero no formato ```08:30:20```, por exemplo:

```js
function countdown(minutos) {
  // código aqui
}

countdown(70);

// 70 minutos equivalem a 1 hora e 10 minutos

// 01:10:00
// 01:09:59
// 01:09:58
// 01:09:57
// 01:09:56
```

_Dica: Para manipular datas e horários você pode utilizar a [classe Date do Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date)._
