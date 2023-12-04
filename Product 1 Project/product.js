const data = [
  {
    id: 1,
    name: "Google Pixel 7",
    img: "https://res.cloudinary.com/ceenobi/image/upload/v1668153032/Gadgets/pixel-7-pro_cjxuki.png",
    price: 300000,
    cat: "Phones",
  },
  {
    id: 2,
    name: "Apple Watch 7",
    img: "https://res.cloudinary.com/ceenobi/image/upload/v1655244443/Gadgets/apple-watch-series-7-lte-41mm-productred-aluminum-productred-sport-band-mkhd3ll-a-sku4790164_iurfo9.jpg",
    price: 150000,
    cat: "Smartwatch",
  },
  {
    id: 3,
    name: "Samsung Watch 3",
    img: "https://res.cloudinary.com/ceenobi/image/upload/v1654264504/Gadgets/61Nhi7ovjkL._SL1500__gbmxgo.jpg",
    price: 180000,
    cat: "Smartwatch",
  },
  {
    id: 4,
    name: "Samsung Buds Pro",
    img: "https://res.cloudinary.com/ceenobi/image/upload/v1637412312/Gadgets/samsung_galaxy_buds_pro_r190_08_ad_l_qwjmug.jpg",
    price: 120000,
    cat: "Earbuds",
  },
  {
    id: 5,
    name: "Iphone 12 Pro Max",
    img: "https://res.cloudinary.com/ceenobi/image/upload/v1636041986/Gadgets/iPhone-12-Pro-Max-128GB-Graphite_talqdb_pmraau.jpg",
    price: 400000,
    cat: "Phones",
  },
];

const testing = data.name
console.log(testing)

const categoryContainer = document.querySelector('.cats')
const priceRange = document.querySelector('.price-range')
const priceValue = document.querySelector('.price-value')
const productContainer = document.querySelector('.products')
const searchInput = document.querySelector('.search')

//fetch products

const displayProducts = (products) => {
    productContainer.innerHTML = products.map((product) =>`<div class='product'>
    <img src=${product.img} alt=${product.name} title =${product.name}>
    <p class='name'>${product.name}</p>
    <p class='price-text'> $${product.price}</p></div>`).join()
}


//display categories

const setCategories = () => {
    const allCats = data.map((item) => item.cat)
    console.log(allCats)
    const removeDuplicate = ['All', ...allCats.filter((item, i) => allCats.indexOf(item) === i)]
    console.log(removeDuplicate)
    categoryContainer.innerHTML = removeDuplicate.map((item) => `<span class='cat-items'>${item}</span>`).join('')
    categoryContainer.addEventListener('click', (e) => {
        const selectedCategory = e.target.textContent
        selectedCategory ==='All'
        ? displayProducts(data)
        :displayProducts(data.filter((item) => item.cat === selectedCategory))
    })
}
const setPrices = () => {
    const priceList = data.map((product) => product.price)
    const minPrice = Math.min(...priceList)
    const maxPrice = Math.max(...priceList)
    priceRange.min = minPrice
    priceRange.max = maxPrice
    priceValue.textContent = '$' + maxPrice
    priceRange.addEventListener('input', (e)=> {
        priceValue.textContent = '$' + e.target.value
        displayProducts(data.filter((item)=> item.price <= e.target.value))
    })
}
searchInput.addEventListener('keyup', (e) => {
    const query = e.target.value.toLowerCase()
    if (query) {
        displayProducts(data.filter((item)=> item.name.toLowerCase().indexOf(query)
        !== -1 ))
    }
})

setCategories()
setPrices()
displayProducts(data)
