//variaveis dos formularios
const formGains = document.querySelector('#form__gains');
const formExpend = document.querySelector('#form__expends');

//variaveis dos inputs
const inputGainsGet = document.querySelector('#input__gains');
const inputExpendGet = document.querySelector('#input__expend');

//variaveis do balance
const paymentGet = document.querySelector('#payment'); 
const expendGet = document.querySelector('#expend');
const btnBalance = document.querySelector('#btn__balance');
const balanceGet = document.querySelector('#balance');
const lista = document.querySelector('.statement');

//variaveis do formulario
const formGroupGains = document.querySelector('#form__group-gains');
const formGroupExpend = document.querySelector('#form__group-expend');
const errorSpan = document.createElement('span');

//variaveis dos possiveis erros dos inputs
const formErrorGains = document.querySelector('.error__form-gains');
const formErrorExpend = document.querySelector('.error__form-expend');

formGains.addEventListener('submit', (event) => {
    event.preventDefault();

    //Tornando os inputs em numeros
    const inputGains = parseInt(inputGainsGet.value);

    if (inputGains > 0) {
        //transformando as variaveis em numeros, e somando no payment
        const payment = parseInt(paymentGet.textContent);
        paymentGet.textContent = payment + inputGains;

        //Criação da lista de extratos
        const itemLista = document.createElement('li');
        itemLista.classList.add('statement__line', 'statement__green');
        itemLista.textContent = 'R$' + inputGains;
        lista.appendChild(itemLista);
        //console.log(itemLista.textContent);

        inputGainsGet.value = "";
        //Remove as mensagens de erros (se ouver)
        if (formErrorGains.children.length > 0) {
            formErrorGains.removeChild(errorSpan);
        }
        }   
        else {
            errorMessage(formErrorGains);
        }
}); 

//Onclick no botao de atualizar o saldo da conta
btnBalance.addEventListener('click', function(){
    balanceGet.textContent = parseInt(paymentGet.textContent) - parseInt(expendGet.textContent);
});

formExpend.addEventListener('submit', (event) => {
    event.preventDefault();

    //Tornando os inputs em numeros
    const inputExpend = parseInt(inputExpendGet.value);

    if (inputExpend > 0) {
        //transformando as variaveis em numeros, e somando no expend
        const expend = parseInt(expendGet.textContent);
        expendGet.textContent = expend + inputExpend;

        //Criação da lista de extratos
        const itemLista = document.createElement('li');
        itemLista.classList.add('statement__line', 'statement__red');
        itemLista.textContent = 'R$' + inputExpend;
        lista.appendChild(itemLista);
        
        inputExpendGet.value = '';
        //Remove as mensagens de erros (se ouver)
        if (formErrorExpend.children.length > 0) {
            formErrorExpend.removeChild(errorSpan);
        }
        } 
        else {
            errorMessage(formErrorExpend);
        }
});

//Botao para remover a mensagem de bem vindo
const welcomeDelete = document.getElementById('statement__line-welcome--delete');
const welcomeText = document.querySelector('.statement__line-welcome');
welcomeDelete.addEventListener('click', function() {
    lista.removeChild(welcomeText);
});

const errorList = [];

function errorMessage(elemento) {
    if (errorList.length >= 0) {  
        errorList.push('O valor não pode ser negativo');
        errorSpan.classList.add('error__message');
        errorSpan.textContent = errorList[0];
        elemento.appendChild(errorSpan);
    }
};