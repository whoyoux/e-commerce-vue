import { createStore } from 'vuex'

export default createStore({
  state: {
    CART: []
  },
  mutations: {
    ADD_ITEM(state, itemToAdd) {
      let itemInCart = this.state.CART.filter(item => item.id === itemToAdd.id);

      if(itemInCart.length > 0) {
        itemInCart[0].qty += parseInt(itemToAdd.qty);
      } else {
        state.CART.push(itemToAdd);
      }
      itemToAdd.qty = 1;
    },
    REMOVE_ITEM(state, index) {
      state.CART.splice(index, 1);
    },
    CHANGE_QTY(state, itemToAdd) {
      state.CART.forEach(item => {
        if(item.id === itemToAdd.id) {
          item.qty = parseInt(itemToAdd.qty);
        }
      });
    }
  },
  actions: {
    addItem(ctx, item) {
      ctx.commit("ADD_ITEM", item);
    },
    removeItem(ctx, index) {
      ctx.commit("REMOVE_ITEM", index);
    },
    changeQty(ctx, itemToAdd) {
      ctx.commit("CHANGE_QTY", itemToAdd);
    }
  },
  modules: {
  }
})
