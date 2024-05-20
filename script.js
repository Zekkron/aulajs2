const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

titulo.innerText = 'Bem-vindo ao meu Projeto!';
link.innerText = 'Visite a Proz Educação';

listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2 </li>
    <li>Item 3 </li>
`;

listaOrdenada.innerHTML = `
    <li><a href="https://google.com">Google</a></li>
    <li><a href="https://facebook.com">Facebook</a></li>
    <li><a href="https://twitter.com">Twitter</a></li>
`;