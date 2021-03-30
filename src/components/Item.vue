<template>
  <div class="item rounded shadow card">
    <img src="https://www.cnet.com/a/img/-e95qclc6pwSnGE2YccC2oLDW_8=/1200x675/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg" @click="click" class="card-img-top" alt="...">
    <div class="row card-body">
        <div class="text-start col">
            <h5 class="card-title" v-if="!isAd"  style="line-height: calc(300px - (0.8 * 300px))">{{name}}</h5>
            <h5 class="card-title" v-else  style="line-height: calc(300px - (0.8 * 300px))">Ad</h5>
        </div>
        <div class="text-center col">
            <button class="btn btn-success" @click="addToCart">Add to cart</button>
        </div>
        <div class="text-end col">
            <h5 class="card-title" style="line-height: calc(300px - (0.8 * 300px))">25$</h5>
        </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    name: 'Item',
    props: {
        name: String,
        isAd: Boolean,
        id: String,
    },
    data() {
        return {
            price: 25,
            img: "https://www.cnet.com/a/img/-e95qclc6pwSnGE2YccC2oLDW_8=/1200x675/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg",
            qty: 1,
        }
    },
    methods: {
        click() {
            this.$router.push(`/item/${this.id}`);
        },
        addToCart() {
            this.$store.dispatch("addItem", {
                id: this.id,
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

<style>
.item {
    width: 450px;
    max-width: 450px;
    height: 300px;
    background-color: rgb(233, 233, 233);
    margin: var(--flex-gap);
    flex-grow: 1;
    transition: 0.1s ease-in-out;
    border: none;
    cursor: pointer;
}

.card-body {
    padding-top: 0;
    padding-bottom: 0;
    line-height: calc(300px - (0.8 * 300px)) !important;
}

.card-img-top {
    height: 80%;
}

.item:hover {
    transform: scale(1.1);
    text-shadow: 2px 2px #ccc;
    box-shadow:  8px 8px 5px 6px rgb(0, 0, 0);
}

.item img {
    transition: 0.1s ease-in-out;
}

</style>