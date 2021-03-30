<template>
<div class="form-signin">
<form @submit.prevent="Alert">
    <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="57">
    <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

    <div class="form-floating">
      <input type="email" class="form-control bottom-without-border" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control bottom-without-border top-without-border" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control top-without-border mb-3" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>
    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> I agree to the user agreement.
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary mb-2" type="submit">Sign up</button>
</form>
    <p class="text-muted mb-2"><em>or if you have account.</em></p>
    <button class="w-100 btn btn-secondary" type="submit" @click="this.$router.push('/login')">Sign in</button>
    <p class="mt-5 mb-3 text-muted">whoyoux &copy; 2021</p>
</div>
    
</template>

<script>
export default {
    name: 'Register',
    methods: {
        Alert() {
            this.$router.push("/");
        }
    }
}
</script>

<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
}
.form-signin input[type="password"] {
  margin-bottom: -1px;
}

.bottom-without-border {
    border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.top-without-border {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

</style>