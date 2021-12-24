class Product{
    constructor(name,price,year){
        this.name =name;
        this.price= price;
        this.year=year;
    }
}

class UI{
    addProduct(product){
        const productList = document.getElementById('lista-producto');
        const element = document.createElement('tbody');
        element.innerHTML=` 
        <tr class="table-active text-white">
            <td>${product.name} </td>
            <td>${product.price} </td>
            <td>${product.year} </td>

        </tr>
        `;
        productList.appendChild(element);
    }
    deleteProduct()
    {

    }

    showMessage(){

    }
}

document.getElementById('form-producto').addEventListener('submit',function(e){
    const name= document.getElementById('name').value;
    const price= document.getElementById('price').value;
    const year= document.getElementById('year').value;

    const product = new Product(name,price,year);
    const ui = new UI();
    ui.addProduct(product);
    e.preventDefault(); 

})