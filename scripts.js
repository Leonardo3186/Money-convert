const button = document.getElementById('convert-button')
const select = document.getElementById('currancy-select')

const dolar = 5.1;
const euro = 5.3;

const convertValue = () => {
   const inputReais = document.getElementById('input-real').value
   const realValueText = document.getElementById('real-value-text')
   const currencyValueText = document.getElementById('currency-value-text')

   realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: 'BRL',
   }).format(inputReais);

   if (select.value === "US$ Dólar americano") {
      currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: 'USD',
      }).format(inputReais / dolar);
   }

   if (select.value === "€ Euro") {
      currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: 'EUR',
      }).format(inputReais / euro);
   }
};

changeCurrancy = () => {
   const currencyName = document.getElementById("currency-name")
   const currencyImg = document.getElementById("currency-img")

   if (select.value === "US$ Dólar americano") {
      currencyName.innerHTML = "Dólar americano"
      currencyImg.src = "assets/eua.png"
   }

   if (select.value === "€ Euro") {
      currencyName.innerHTML = "Euro"
      currencyImg.src = "assets/euro.png"
   }

   convertValue()
}

button.addEventListener("click", convertValue)
select.addEventListener("change", changeCurrancy)