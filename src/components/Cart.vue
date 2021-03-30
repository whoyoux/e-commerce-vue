<template>
   <div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
         <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-dark">Cart</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-dark">
               <div :items="cartItems">
                  <div>
                     <!-- <table class="table table-cart">
                        <tr v-for="(item, index) in $store.state.CART" v-bind:key="index">
                           <td>{{item.name}}</td>
                           <td style="width:120px">QTY:
                              <input v-modal="item.qty" class="form-control input-qty" type="number">
                           </td>
                           <td class="text-right">$cena</td>
                           <td>
                              <button class="btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                 </button>
                           </td>
                        </tr>
                        <tr v-if="$store.state.CART.length === 0">
                           <td colspan="4" class="text-center">Cart is empty</td>
                        </tr>
                        <tr v-else-if="$store.state.CART.length > 0">
                           <td></td>
                           <td class="text-right">Cart Total</td>
                           <td class="text-right">$2342342342</td>
                           <td></td>
                        </tr>
                     </table> -->

                    <div v-if="$store.state.CART.length > 0">
                        <table class="table">
                            <thead>
                                <th scope="col">Item name</th>
                                <th scope="col">QTY</th>
                                <th scope="col">Price</th>
                                <th scope="col"></th>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in $store.state.CART" v-bind:key="index">
                                    <td>{{item.name}}</td>
                                    <td>
                                        <input v-model="item.qty" v-on:input="addToCart(item)" min="0" class="form-control input-qty" type="number"/>
                                    </td>
                                    <td>{{item.price}}$</td>
                                    <td>
                                        <button class="btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="text-right h5">
                            Total: {{getTotalPrice}}$
                        </div>
                        <button class="btn btn-success">CHECKOUT</button>
                    </div>
                    
                    <h4 v-else>
                        Nothing is there :(
                    </h4>
                    
                  </div>
               </div>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
    name: 'Cart',
    computed: {
        getTotalPrice() {
            let total = 0;
            this.$store.state.CART.forEach(item => {
                total += (item.price * item.qty)
            });
            return total;
        }
    },
    methods: {
        addToCart(item) {
            this.$store.dispatch("changeQty", {
                id: item.id,
                qty: parseInt(item.qty)
            });
        }
    }
}
</script>

<style scoped>
.input-qty {
  width: 80px;
}

td button {
    padding: 0;
}

td {
    line-height: 38px;
}

</style>