// comenterario de apenes 1 linha

/*
comentario de varias linhas como abaixo
*/

// alert ('ola') aparece na pagina inicial do site quando voce entra é como se fosse um print da vida.

/* console.log (const selecionada)
    ex: const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        imagens [1].classList.add('ativa')
        console.log(imagens)
        
        o console.log vai mostrar direto na paginada do site se o comando está funcionando como estamos progamando, no site basta aperta f12 e realizar os comando que dezeja no site para verificar o codigo.
*/

/*
OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

- passo 1 - dar um jeito de pegar o elemento HTML dos botoes

- passo 2 - indentificar o clique do usuario no botao.

- passo 3 - desmarcar botao selecionado anterior.

- passo 4 - marcar botao clicando como se estivesse selecionado.

- passo 5 - esconder imagem anterior

- passo 6 - fazer aparecer a imagem correspondente ao botao clicado

*/

// passo 1 - dar um jeito de pegar o elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2 - indentificar o clique do usuario no botao.
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
       
        // passo 3 - desmarcar botao selecionado anterior.
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        
        // passo 4 - marcar botao clicando como se estivesse selecionado
        botao.classList.add('selecionado')
        
        // passo 5 - esconder imagem atica de fundo anterior
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //passo 6 -fazer aparecer a imagem correspondente ao botao clicado
        imagens [indice].classList.add('ativa')
        
    })
} )
