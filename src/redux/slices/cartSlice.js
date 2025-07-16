import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        cartQuantity: 0,
        //array of objects -> {details of the product, individual quantity of each product}
        cartProducts: []
    },
    reducers: {
        addToCart:(state,action)=>{
                state.cartQuantity += 1; //incrementing the cart quantity by 1
                const productToBeAdded = action.payload; //getting the product details from the action payload
                const requiredProduct = state.cartProducts
                      .find((cProduct)=>{
                        return cProduct.id === productToBeAdded.id; //checking if the product is already present in the cart
                      })//getting the cartProducts array from the state
                //before adding the product to the cart, we need to check if the product is already present in the cart
                //if not present, we will add the product to the cartProducts array , if already present, we will increment the quantity of the product by 1
                      if(requiredProduct==undefined){ //if the product is not present in the cart
                       
                        productToBeAdded.indQuantity = 1; //setting the quantity of the product to 1(initializing the quantity of the product to 1)
                       state.cartProducts.push(productToBeAdded); 
                      }else{ //if the product is already present in the cart
                        requiredProduct.indQuantity += 1; //incrementing the quantity of the product by 1
                      }
        },
        deleteFromCart:(state,action)=>{
            const productToBeDeleted = action.payload; //getting the product details from the action payload
            const productIdx = state.cartProducts
                  .findIndex((cProduct)=>{
                    return cProduct.id === productToBeDeleted.id; //checking if the product is already present in the cart
                  }) //getting the index of the product to be deleted from the cartProducts array, checking happens as in increment
                  if(productIdx == -1){ //if the product is not present in the cart, we will decrement the cart quantity by 1
                    state.cartProducts.splice(productIdx,1); //removing the product from the cartProducts array
                    state.cartQuantity -= 1; //decrementing the cart quantity by 1
                  }
                  else{
                    
                    let product = state.cartProducts[productIdx]; //getting the product from the cartProducts array
                    if(product.indQuantity == 0){
                        
                    }
                    else{
                        state.cartProducts[productIdx].indQuantity -= 1; //if the quantity of the product is not 0, we will decrement the quantity of the product by 1
                        state.cartQuantity --; //if the product is not present in the cart, we will decrement the cart quantity by 1
                    
                    }
                    
                  }
        },
    }
});
export const action = cartSlice.actions; //this action is used to access the actions present inside cartSlice
export default cartSlice;