# Mofo v2.0

Mofo é um modal inspirado inicialmente no showModal do Delphi. 
Ele usa nativamente javascript em sua construção.

## Instalação

Clone o repositório em um diretório local.

```sh
    git clone git@github.com:guigagb/mofo-v2.git
```

## Importando

<h3>Forma 1</h3>

Para usar o mofo você deve chamá-lo em seu arquivo .js através de import.

```javascript
    import mofo from './mofo-v2';
```

<h3>Forma 2</h3>

Em seu html declare o arquivo js.

```html
    <script src="./mofo-v2.js"></script>
```

É necessário comentar/descomentar as linhas no arquivo mofo-v2.js:

```javascript
    export default (function() { //comentar essa linha
    let mofo = (function() { // descomentar essa linha
```

## Modo de uso

É necessário uma div no seu html com um id
```html
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <title>Mofo v2.0</title>
        <link rel="stylesheet" href="mofoV2.css">
    </head>
    <body>
        <div id="minhaDiv" style="display: none">Hello World!</div>
        <script src="index.js" type="module"></script>
    </body>
    </html>
```
No javascript iremos instanciar o objeto da seguinte forma:

```javascript
    const minhaDiv = new mofo.create({
    el: '#minhaDiv',
    height: 200,
    width: 400
})

//// Abre o modal
minhaDiv.open();
```

## Métodos

<h3>Create</h3>

Método responsável pela instância do mofo. Recebe um objeto como parâmetro que pode ter as seguintes propriedades passadas:

<table>
    <tr>
        <th>Propriedades</th>
        <th>Descrição</th>
        <th>Tipo</th>
        <th>Default</th>
    </tr>
    <tr>
        <td>el</td>
        <td>Id do elemento (div) onde será instanciado o mofo. <strong>(Obrigatório)</strong></td>
        <td>String</td>
        <td></td>
    </tr>
    <tr>
        <td>title</td>
        <td>Título da janela.</td>
        <td>String</td>
        <td>Mensagem do Sistema</td>
    </tr>
    <tr>
        <td>width</td>
        <td>Largura da janela.</td>
        <td>Numeric</td>
        <td>innerWidth - 25%</td>
    </tr>
    <tr>
        <td>height</td>
        <td>Altura da janela.</td>
        <td>Numeric</td>
        <td>innerHeight - 25%</td>
    </tr>
    <tr>
        <td>resize</td>
        <td>Propriedade que informa se poderá redimensionar a janela.</td>
        <td>Boolean</td>
        <td>False</td>
    </tr>
    <tr>
        <td>theme</td>
        <td>Tema que será utilizado na janela, temas disponíveis:<br>
        mofo-blue, mofo-opacity, mofo-dark </td>
        <td>String</td>
        <td>mofo-blue</td>
    </tr>
    <tr>
        <td>left</td>
        <td>Define a posição (left) onde a janela será aberta.</td>
        <td>Numeric</td>
        <td></td>
    </tr>
    <tr>
        <td>top</td>
        <td>Define a posição (top) onde a janela será aberta.</td>
        <td>Numeric</td>
        <td></td>
    </tr>
    <tr>
        <td>fullscreen</td>
        <td>Caso queira que a janela abre em tela cheia, informe true.</td>
        <td>Boolean</td>
        <td>False</td>
    </tr>
    <tr>
        <td>closeBtn</td>
        <td>Mostra o botão fechar no canto superior direito da janela</td>
        <td>Boolean</td>
        <td>True</td>
    </tr>
</table>

## Temas

<table>
    <tr>
        <th>mofo-blue</th>
        <th>mofo-opacity</th>
        <th>mofo-dark</th>
    </tr>
    <tr>
        <td><img src="images/mofo.png"></td>
        <td><img src="images/mofo-opacity.png"></td>
        <td><img src="images/mofo-dark.png"></td>
    </tr>
</table>

## Desenvolvedores

Francisco Alves<br>
Guilherme Trindade