<template>
<!-- <div class="row align-items-center">
    <div class="col-md-6 col-sm-12">
        
    </div>
    <div class="col-md-6 col-sm-12">
        <div class="text-center login-wrapper">
            <img src="@/assets/login.svg">
        </div>
    </div>
</div> -->
  
  <div class="text-center login-wrapper">
            <Register />
        </div>
</template>

<script>
import Register from '@/components/Register.vue'
export default {
  name: 'RegisterPage',
  components: {
    Register
  }
}
</script>

<style scoped>
.login-wrapper {
    margin-top: 5vh;
    display: flex;
    align-items:flex-end;
    padding-top: 20px;
    padding-bottom: 40px;
}
@media (min-width: 1650px) { 
    .login-wrapper::after {
        content: url('../assets/login.svg');
        position: absolute;
        top: 10vh;
        left: 50vw;
        z-index: -5;
    }
}


img {
    width: 500px;
}

.row {
    max-width: 100%;
}
</style>