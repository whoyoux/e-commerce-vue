<template>
    <div class="container">
        <div class="row item-hero">
            <div class="col-lg-6 col-sm-12 p-0 side">
                <img :src=img class="item-hero--img img-fluid rounded" alt="...">
            </div>
            <div class="col-lg-6 col-sm-12 p-0 side">
                <div class="text">
                    <h2>{{$route.params.id}}</h2>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie placerat mauris nec finibus. Suspendisse non tempor lacus.
                         Vestibulum orci magna, volutpat id magna eu, sollicitudin vulputate risus. Nunc velit urna, faucibus et lorem at, rhoncus commodo est.
                         Sed sit amet ipsum nisi. Aenean ultrices vehicula feugiat. Nam sit amet mattis diam, quis scelerisque lectus. In facilisis efficitur ornare.
                    </p>
                    <div class="d-flex flex-row-reverse">
                        <h3>{{price}}$</h3>
                    </div>
                    <div class="d-flex flex-row-reverse">
                        <button class="btn btn-success" @click="addToCart">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    name: 'ItemPage',
    data() {
        return {
            price: 25,
            img: "https://www.cnet.com/a/img/-e95qclc6pwSnGE2YccC2oLDW_8=/1200x675/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg",
            qty: 1,
            name: "Test Item",
        }
    },
    methods: {
        addToCart() {
            this.$store.dispatch("addItem", {
                id: this.$route.params.id,
                name: this.name,
                img: this.img,
                qty: parseInt(this.qty),
                price: this.price
            })
            console.log(this.$store.state.CART);
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-start',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Added to cart!'
            })
        }
    }
}
</script>

<style scoped>

@media (min-width: 1000px) { 
  .item-hero {
      width: 90vw;
      height: auto;
  }
}

.item-hero {
    width: 100%;
    height: auto;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
}

.item-hero img {
    width: 100%;
}

.text {
    padding-top: 25px;
    margin-left: 25px;
}

</style>