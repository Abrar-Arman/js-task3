//select element
var form=document.querySelector('form');
var productName=document.querySelector("#name")
var productDescription=document.querySelector("#description")
var productPrice=document.querySelector("#price")
var table=document.querySelector('tbody')
//global var
var products=[]
var content='';
//function
function drowTable(){
    content=''  
    for (var ind=0; ind<products.length; ind++)
       content+= `<tr>
            <td>${products[ind].name}</td>
            <td>${products[ind].description}</td>
            <td>${products[ind].price}</td>
            </tr>`
 table.innerHTML=content
           
}

form.onsubmit= function(e){
    e.preventDefault();
    var product={
        name: productName.value,
        description: productDescription.value,
        price: productPrice.value
    }
    products.push(product)
    drowTable()
}
