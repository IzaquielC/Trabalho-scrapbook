import TrocarTela from './app';

const titulo = document.getElementsByName("titulo")[0];
const texto = document.getElementsByName("texto")[0];
let editando = null;
const trocarTela2 = new TrocarTela();

export default class Scrapbook {
    trocarTela() {
          
        document.getElementsByClassName('list')[0].classList.toggle('d-none');
        document.getElementsByClassName('register')[0].classList.toggle('d-none');
    
        this.resetarFormulario();
        this.resetarCampos();
    }

    salvar() {
        
        let valido = true;
    
        this.resetarFormulario();
    
        if (titulo.value.length === 0 || titulo.value.length > 20) {
            titulo.classList.add('error');
            valido = false;
        }
    
        if (texto.value.length === 0) {
            texto.classList.add('error');
            valido = false;
        }
    
        if (valido === false) {
            document.getElementsByClassName('alert-danger')[0].classList.remove('d-none');
        } else { 
    
            if (editando) {
                this.editar();
            } else {
                this.adicionar();
            }
    
            document.getElementsByClassName('alert-success')[0].classList.remove('d-none');
            this.resetarCampos();
        }
    }
    
    resetarFormulario() {
        titulo.classList.remove('error');
        texto.classList.remove('error');
        document.getElementsByClassName('alert-danger')[0].classList.add('d-none');
        document.getElementsByClassName('alert-success')[0].classList.add('d-none');
    }

    resetarCampos () {
        titulo.value = '';
        texto.value = '';
    }

    adicionar() {
        document.getElementsByClassName('row-empty')[0].classList.add('d-none');
        document.getElementsByClassName('row-cards')[0].classList.remove('d-none');
    
        document.getElementsByClassName('row-cards')[0].innerHTML += this.criarCard();

        this.atribuirEventos();
    }

    criarCard() {
        return `<div class="col-3 mt-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="action float-right">
                                <a href="#" class="btn-edit">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                    </svg>
                                </a>
                                <a href="#" class="btn-remove">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path fill-rule="evenodd"
                                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </a>
                            </div>
                            <p class="h2">${titulo.value}</p>
                            <p class="card-text">
                                ${texto.value}    
                            </p>
                            <small class="text-muted float-right">Izaquiel C. da Silva</small>
                        </div>
                    </div>
                </div>`;
    }

    atribuirEventos() {
        for (let botao of document.getElementsByClassName('btn-remove')) {  
            this.atribuirEventoRemover(botao);
        }
        
        for (let botao of document.getElementsByClassName('btn-edit')) { 
            this.atribuirEventoEditar(botao);
        }
    }
    
    atribuirEventoRemover(botao) {

        botao.addEventListener('click', function(event) {
            event.preventDefault();
            this.parentNode.parentNode.parentNode.parentNode.remove();
    
            if (document.querySelectorAll('.row-cards .col-3').length === 0) {
                document.getElementsByClassName('row-empty')[0].classList.remove('d-none');
            }
        })
    }
    
    atribuirEventoEditar(botao) {

        botao.addEventListener('click', function(event) {
            event.preventDefault();
    
            trocarTela2.trocarTela2();
            editando = botao.parentNode.parentNode.parentNode.parentNode;
            titulo.value = editando.getElementsByClassName('h2')[0].innerHTML.trim();
            texto.value = editando.getElementsByClassName('card-text')[0].innerHTML.trim();
        })
    }

    editar() {

        editando.getElementsByClassName('h2')[0].innerHTML = titulo.value;
        editando.getElementsByClassName('card-text')[0].innerHTML = texto.value;
    
        editando = null
    }

    pesquisar(event) {
        let cards = document.getElementsByClassName('card');
    
        for (let card of cards) {
            if (!card.getElementsByClassName('card-text')[0].innerText.toUpperCase().includes(event.target.value.toUpperCase())) {
                card.parentNode.classList.add('d-none');
            } else {
                card.parentNode.classList.remove('d-none');
            }
        }
    }
}

