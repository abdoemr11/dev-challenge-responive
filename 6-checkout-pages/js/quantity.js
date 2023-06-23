const decrementButtons = document.querySelectorAll('.quantity p:first-of-type')
const incrementtButtons = document.querySelectorAll('.quantity p:last-of-type')
console.log(decrementButtons);
console.log(incrementtButtons);

decrementButtons.forEach(decBtn => {
    decBtn.addEventListener('click', () => {
        const quantityLabel = decBtn.parentElement.querySelector('p:nth-of-type(2)')

        let newValue = Number((quantityLabel.textContent)) - 1
        if (newValue < 0)
            newValue = 0
        quantityLabel.textContent = newValue
        updateTotalLabel(priceValue * newValue)
    })
})

incrementtButtons.forEach(decBtn => {
    decBtn.addEventListener('click', () => {
        let quantityLabel = decBtn.parentElement.querySelector('p:nth-of-type(2)')
        let newValue = Number((quantityLabel.textContent)) + 1
        quantityLabel.textContent = newValue
    })
})

const updateTotalLabel = (newPrice) => {
    const totalLabel = document.getElementById('total-price')
    totalLabel.textContent = '$' + newPrice
}