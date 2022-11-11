//Creamos una clase para producto
class Product {
  //Metodo constructor
  constructor(name, price, year) {
    (this.name = name), (this.price = price), (this.year = year);
  }

  //Metodos
}
//Objeto de interfaz
class UI {
  //Metodo para manipular en el DOM
  addProduct(producto) {
    //Acceder a la interfaz
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `<div class="card text-center mb-4">
        <div class="card-body">
        <strong>Product: </strong> ${producto.name}
        <strong>Price: </strong> ${producto.price}
        <strong>Year: </strong> ${producto.year}
        <a href="#" class="btn btn-danger" name="delete">Delete</a>
        </div>
    </div>`;
    productList.appendChild(element);
    //Reseteamos el form
    this.resetForm();
  }
  //Limpiar inputs
  resetForm() {
    document.getElementById("product-form").reset();
  }
  deleteProduct(element) {
    //Comprobar si el elemento tiene la propiedad name === delete
    if(element.name === 'delete'){
        element.parentElement.parentElement.parentElement.remove();
        this.showMessage('Product deleted Successfully', 'info')
    }
  }
  //Recibe 2 parametros
  showMessage(message, cssClass) {
    const div = document.createElement('div');
    div.className = 'alert alert-'+cssClass;
    div.appendChild(document.createTextNode(message));
    //Showing in DOM
    const container = document.querySelector('.container');
    const app = document.querySelector('#App');
    container.insertBefore(div,app);
    setTimeout(()=>{
        document.querySelector('.alert').remove();
    }, 3000)

  }
}
//DOM events
//Buscamos el formulario
document.getElementById("product-form").addEventListener("submit", (e) => {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const year = document.getElementById("year").value;

  const product = new Product(name, price, year);
  //Creamos una interfaz
  const ui = new UI();
  //Añanimos al producto
  if(name===''|| price === '' || year===''){
    ui.showMessage('Please complete fields', 'danger');
  }
  else{
  ui.addProduct(product);
  //Mostramos mensaje 
  ui.showMessage('Product added successfully!','success')
  //Cancelar el refresh de la pagina
  e.preventDefault();
  }
});

//Evento de eliminar
document.getElementById('product-list').addEventListener('click', (e) =>{
  const ui = new UI();
  ui.deleteProduct(e.target);
})