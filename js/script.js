// Cotação das moedas
const USD = 4.87
const EUR = 6.06
const GBP = 7.27
const OMR = 15.07
const BHD = 15.39
const CHF = 6.48

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
    const regex = /\D+/g
    amount.value = amount.value.replace(regex, "")
}) 

// Captando evento de envio do formulário
form.onsubmit = (event) => {
    event.preventDefault()

    //console.log(currency.value)
    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break // Se for esse o caso ele nem olha os outros
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
        case "OMR":
            convertCurrency(amount.value, OMR, "﷼.")
            break
        case "BHD":
            convertCurrency(amont.value, BHD, "د. ب")
            break
        case "CHF":
            convertCurrency(amount.value, CHF, "Fr")
            break
    }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol){
    try{
        // Exibindo a cotação da moeda selecionada.
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
       
        // Calcula o total
        let total = amount * price

        // Verifica se o resultado não é um número
        if(isNaN(total)){
            return alert("Por favor, digite apenas números.")
        }
        // Formatando o valor total
        total = formatCurrencyBRL(total).replace("R$", "")

        // Exibe o resultado total
        result.textContent = `${total} Reais`
       
        // Aplica a classe que exibe o footer para mostrar o resultado.
        footer.classList.add("show-result")
    }catch(error){
        // Remove a classe do footer removendo ele da tela.
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possível converter. Tente mais tarde.")
    }
    
}

function formatCurrencyBRL(value){
    // Converte para número para utilizar o toLocaleString para formatar no padrão BRL (R$0,00)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}