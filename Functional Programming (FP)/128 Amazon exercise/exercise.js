//Amazon shopping
//implement a cart feature
//1.Add items to cart
//2.Add 3% tax to item in cart
//3.Buy them: cart--> purchase
//4.Empty cart


const user=
    {
        name:'Kim',
        active:true,
        cart:[],
        purchase:[]
    }
    let amazonHistory=[]
const compose=(f,g)=>(...args)=>f(g(...args));

purchaseItem(emptyCart,buyItem,applyToTaxToItems,addItemToCart)(user,{name: 'laptop',price:200})


function purchaseItem(...fns){
    amazonHistory.push(user);
    return fns.reduce(compose);
}

function addItemToCart(user,item)
{
    amazonHistory.push(user);
   const updatedCart=user.cart.concat([item])
    return Object.assign({},user,{cart:updatedCart})
}

function applyToTaxToItems(user)
{
    amazonHistory.push(user);
 const {cart}=user;
 console.log(cart);
 const taxRate=1.3;
 const updatedCart=cart.map(item=>
 {
     return
     {
         name:item.name;
         price:item.price*taxRate;
     }
 })

    return Object.assign({},user,{cart:updatedCart})

}
function buyItem(user)
{
    amazonHistory.push(user);
return Object.assign({},user,{purchases:user.cart})
}

function emptyCart(user)
{
    amazonHistory.push(user);
return Object.assign({},user,{cart: []})
}