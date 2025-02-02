let cartData = []

const products = [
    {
        id: 1,
        products_name: 'Shoes Office',
        type: 'man shoes',
        description: 'this man shoes brooo',
        stock: 10,
        price: 250000,
        img_url: 'images/product-1.jpeg'
    },
    {
        id: 2,
        products_name: 'Shoes Sport',
        type: 'man shoes',
        description: 'this man shoes Sport brooo',
        stock: 10,
        price: 350000,
        img_url: 'images/product-2.jpeg'
    },
    {
        id: 3,
        products_name: 'Shoes Boats',
        type: 'women shoes',
        description: 'this women shoes brooo',
        stock: 10,
        price: 2500000,
        img_url: 'images/product-3.jpeg'
    },
]

const cart = document.getElementById("cart")
const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(number);
}


const listProduct = products?.map((product) => `<div class="col-lg-3">
                <div class="card" style="width: 18rem;">
                    <img src="${product.img_url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${product.products_name}</h5>
                        <h6 class="card-title">Price: ${rupiah(product.price)}</h6>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">Stock: ${product.stock}</p>
                        <p class="card-text">Price: ${product.price}</p>
                        <button type="button" class="btn btn-success" onclick="addToCart(${product.id})">Add To Chart</button>
                    </div>
                </div>
            </div>`).join(",").replaceAll(",", " ")

const productsId = document.getElementById('products')
productsId.innerHTML = listProduct
cart.innerHTML = cartData.length

function addToCart(id) {
    alert('Barang sudah asupkeun ka kranjang')
    let filterBarang = products?.filter(product => product.id === id)
    filterBarang.map(f => cartData.push(f))
    console.log(`button difilter by ID: ${JSON.stringify(cartData)}`)
    cart.innerHTML = cartData.length
}