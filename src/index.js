import Scrapbook from './scrapbook';

const scrapbook = new Scrapbook();

document.getElementsByClassName("btn-add")[0].addEventListener("click", function(event) {
    event.preventDefault();
    scrapbook.trocarTela();
    
}) 

document.getElementsByClassName("btn-back")[0].addEventListener("click", function(event) {
    event.preventDefault();
    scrapbook.trocarTela();
    
}) 

document.getElementsByClassName("btn-salvar")[0].addEventListener("click", function(event) {
    event.preventDefault();
    scrapbook.salvar();
})

document.getElementsByName("search")[0].addEventListener("keyup", function(event) {
    scrapbook.pesquisar(event);
})