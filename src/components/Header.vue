<template>
  <header class="p-3 bg-dark text-white">
  <div class="container">
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <router-link to="/" class="link"><span class="navbar-brand mb-0 h1" style="margin-left: auto; margin-rigth: auto">e-commerce</span></router-link>
      </a>

      <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
        <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
        <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
        <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
        <li><a href="#" class="nav-link px-2 text-white">About</a></li>
      </ul>

      <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" @submit.prevent="">
        <input type="search" class="form-control form-control-dark" placeholder="Search...">
      </form>

      <div class="text-end" v-if="!isLogged">
        <button type="button" class="btn btn-warning mr-1" @click="$router.push('/register')">Sign-up</button>
        <button type="button" class="btn btn-outline-light me-2" @click="$router.push('/login')">Login</button>
      </div>

      <div class="dropdown text-end" v-else>
        <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="true">
          <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
        </a>
        <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1" data-popper-placement="bottom-end" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(-110px, 34px);">
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
      <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#cartModal">🛒 {{ $store.state.CART.length != 0 ? '(' + $store.state.CART.length + ')' : ''}}</button>
      <Cart/>
    </div>
  </div>
</header>

</template>

<script>
import Cart from '@/components/Cart';
export default {
    name: 'Header',
    components: {
      Cart
    },
    data() {
      return {
        isLogged: false
      }
    }
}
</script>

<style scoped>
.link {
  text-decoration: none;
}

@media (max-width: 1000px) { 
  .bottom-spacer {
    border-bottom: none;
  }
}

@media (max-width: 991px) { 
    .form-control {
      width: 40vw;
      margin-left: auto;
      margin-right: auto;
    }
}

@media (max-width: 750px) { 
    .form-control {
      width: 60vw;
      margin-left: auto;
      margin-right: auto;
    }
}

@media (max-width: 500px) { 
    .form-control {
      width: 80vw;
      margin-left: auto;
      margin-right: auto;
    }
}



.dropdown-toggle::after {
  color: white;
}
</style>