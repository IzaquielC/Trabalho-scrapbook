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