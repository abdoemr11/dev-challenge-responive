const form = document.getElementsByTagName('form')[0]
console.log(form);

form.onsubmit = () => {
    alert('Your order is placed')
}