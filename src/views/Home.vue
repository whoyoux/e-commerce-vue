<template>
  <main class="text-center">
    <h1 class="mt-5">Produkty 🛒</h1>
    <Baner />
    <Ad />
    <div class="items-container">
      <Item :name="index" :isAd=false :id=index v-for="(item, index) in Array(7)"  v-bind:key="index"/>
      <Item :name="index" :isAd=true :id=index v-for="(item, index) in Array(3)"  v-bind:key="index"/>
      <Item :name="index" :isAd=false :id=index v-for="(item, index) in Array(7)"  v-bind:key="index"/>
    </div>
  </main>
</template>

<script>
import Item from '@/components/Item'
import Baner from '@/components/Baner'
import Ad from '@/components/Ad'
export default {
  name: 'Home',
  components: {
    Item,
    Baner,
    Ad
  }
}
</script>

<style scoped>
.items-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
