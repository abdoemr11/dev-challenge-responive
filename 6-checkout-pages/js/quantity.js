let { store, component } = reef;
// Create a reactive data store
let data = store({
    countries: ['USA', 'Canada', 'UK', 'Germany', 'France', 'Australia'],
    products: [
        {
            name: "Vintage Backpack",
            price: 54.99,
            discountedPrice: 94.99,
            image: "images/photo1.png",
            qunatity: 2
        },
        {
            name: "Levi Shoes",
            price: 74.99,
            discountedPrice: 124.99,
            image: "images/photo2.png",
            qunatity: 1

        },
        {
            name: "another thing",
            price: 74.99,
            discountedPrice: 124.99,
            image: "images/photo2.png",
            qunatity: 1

        }
    ]

});

function CardTemplate() {
    const productsHtml = data.products.map(product => `
    <div class="card">
      <img src="${product.image}" alt="">
      <div class="info" onclick="testMe()">
        <h3>${product.name}</h3>
        <p class="price">
          $${product.price.toFixed(2)} <span>$${product.discountedPrice.toFixed(2)}</span>
        </p>
        <div class="quantity">
          <span onclick="decreaseQuantity(${data.products.indexOf(product)})" class="material-icons modifier">
          remove
          </span>
          <p>${product.qunatity}</p>
          <span  class="material-icons modifier" onclick>
          add
          </span>
        </div>
      </div>
    </div>
  `).join('');
    const totalPrice = data.products.reduce((sum, product) => sum + product.qunatity * product.price, 0);

    const summaryHtml = `  <div class="summarize">
            <p><span>Shipping</span> <span>$19</span></p>
            <p><span>Total</span> <span id="total-price">${totalPrice.toFixed(2)}</span></p>
        
        </div>`

    return productsHtml.concat(summaryHtml)
}
component('.products', CardTemplate)

//Create the countries
function countriesTemplate() {
    let countriesHtml = `
    <option value="" hidden disabled selected>Your country..</option>

    `
    countriesHtml += data.countries.map(country => `
    <option value="${country.toLowerCase()}" >${country}</option>

    `)
    return countriesHtml
}

component('#country', countriesTemplate)