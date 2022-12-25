
// cart slid
let cartIcon = document.querySelector('#carticon'); 
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
};
// img1
function changeImageSrc(anything){
    document.querySelector('.phonee').src = anything;}

    
function changeImageSrcs(anything){
    document.querySelector('.gal').src = anything;}



    
function changeImageSrce(anything){
    document.querySelector('.watch').src = anything;}

function changeImageSr(anything){
    document.querySelector('.air').src = anything;}






    if(document.readyState == 'loading'){
        document.addEventListener('DOMContentLoaded', ready)
    }else{
        ready()
    }
    
    // Making Function
    function ready(){
        var removeCartButtons = document.getElementsByClassName('remove-cart')
        
        for (var i = 0; i < removeCartButtons.length; i++){
            var button =removeCartButtons[i]
            button.addEventListener('click', removeCartItem)
        }
        // quantity chang
        var quantityInputs = document.getElementsByClassName('cart-quantity')
        for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change',quantityChanged)
        }
        // add card
        var addCart = document.getElementsByClassName('add-cart')
        for (var i = 0; i < addCart.length; i++){
            var button = addCart[i];
            button.addEventListener('click',addCartClicked)
        }
    
    // ?buy button work
    document.getElementsByClassName('btn-buy')[0]
    .addEventListener('click',buyButtonClicked)
    }
    // ?buy button work
    function buyButtonClicked(){
    alert('Your Order Is Aready')
    var carcontent = document.getElementsByClassName( 'cart-content' )[0]
    while(carcontent.hasChildNodes()){
        carcontent.removeChild(carcontent.firstChild)
    }
    updatetotal()
    }
    
    // remove item
    function removeCartItem (event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updatetotal()
    }
    // quantity 
    function quantityChanged(event){
        var input = event.target
        if (isNaN(input.value) || input.value <= 0){
        input.value = 1
        }
        updatetotal()
    }
    // add to cart
    function addCartClicked (event){
        var button = event.target
        var shopProducts = button.parentElement.parentElement
        var tit = shopProducts.getElementsByClassName('titles')[0].innerText
        var price = shopProducts.getElementsByClassName('pricess')[0].innerText
        var productImg = shopProducts.getElementsByClassName('mam')[0].src
        addProductToCart( tit, price, productImg)
        updatetotal()
    }
    
    function addProductToCart(tit, price, productImg) {
        var cartShopBox = document.createElement('div')
    cartShopBox.classList.add('cat-box')
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('card-title')
    for (var i = 0; i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == tit){
            alert('You Have Aready Add This Item')
            return
        }
    }
    var  cartBoxContent = `
    <img src="${productImg}" width="120px" alt="">
    <div class="detail-box ">
    <div class="card-title ">${tit}</div>
      <div class="cart-price">${price}</div>
      <input type="number" value="1" class="cart-quantity">
    </div>
  
    <!-- remove cart -->
    <i class='bx bxs-trash remove-cart ' ></i>
    `;
            
    cartShopBox.innerHTML = cartBoxContent
    cartItems.append(cartShopBox)
    cartShopBox.getElementsByClassName('remove-cart')[0].addEventListener('click',removeCartItem)
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change',quantityChanged)
    
    }
    // updatetotal
    function updatetotal() {
        var carcontent =  document.getElementsByClassName('cart-content')[0]
        var cartBoxes =  carcontent.getElementsByClassName('cat-box')
        var total = 0
        for (var i = 0; i < cartBoxes.length; i++){
            var cartBox = cartBoxes[i]
            var priceElement = cartBox.getElementsByClassName('cart-price')[0]
            var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
            var price = parseFloat(priceElement.innerText.replace('$',''))
            var quantity = quantityElement.value
            total = total + (price * quantity)
            
        }
        total = Math.round(total*100) / 100;
            document.getElementsByClassName('total-price')[0].innerText = '$'+ total
    
    }
    // search
    const product = [{
        id:'1',
        productName:`<div class="content">Huawei MatePad</div>`,
        poster:"iPad-Pro-with-Keyboard-Mockup-removebg-preview.png"
    },
    {
        id:'2',
        productName:`  <div class="content">Apple watch</div>`,
        poster:"shopping.png"
    },
    {
        id:'3',
        productName:` <div class="content">GALAXY</div>`,
        poster:"sm1.png"
    },
    {
        id:'4',
        productName:` <div class="content">Iphone 14 pro max</div>`,
        poster:"black.png"
    },
    {
        id:'5',
        productName:` <div class="content">Airpods</div>`,
        poster:"air3.png"
    },
    {
        id:'6',
        productName:`  <div class="content">Laptop</div>`,
        poster:"Series-7-mobile-PC-600x473-removebg-preview.png"
    },
    ]
    
    
    let autocom_box = document.getElementsByClassName('autocom_box')[0];
    product .forEach(element => {
        const {id, productName, poster}=element;
        let sseco = document.createElement('a');
        sseco.classList.add('card3');
        sseco.href='#'+id;
        sseco.innerHTML =`
        <img src="${poster}"  width="35px" alt="">
        <div class="content">${productName}</div>
        `;
        autocom_box.appendChild(sseco);
    });
    let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', () =>{
let input_value = input.value.toUpperCase();
let items = autocom_box.getElementsByTagName('a');
for(let i = 0 ; i< items.length;i++){
    let as = items[i].getElementsByClassName('content')[0];
    let text_value = as.textContent || as.innerText;
    if (text_value.toUpperCase().indexOf(input_value) > -1){
        items[i].style.display="flex"; }
        else{
            items[i].style.display="none";
        }
    if( input.value == 0){
        autocom_box.style.display ="none";
    }else{
        autocom_box.style.display ="";
    }
}
})
