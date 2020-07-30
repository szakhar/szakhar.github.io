<template>
  <div id="app">
    <button class="absolute top-0 right-0 mt-6 mr-8 hover:bg-red-300 hover:border-red-400 hover:text-red-500 text-red-400 font-normal py-2 px-4 border border-red-300 rounded">
      <!-- Cart ({{cart}}) -->
      <!-- .length потрібно бо cart це масив куди додаємо id і щоб порахувати кількість доданих товарів -->
      Cart ({{ cart.length }})
    </button>

    <!-- @add-to-cart - спрацьовує дана функція, коли в дитини Card.vue спрацює якась дія -->
    <!-- і спрацює $emit щоб передати цю дію сюди, а тут викличеться функція updateCart -->
    <Card :premium="premium" @add-to-cart="updateCart"></Card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'App',
  data() {
    return {
      premium: false,
      // cart: 0,
      cart: [],
    }
  },
  methods: {
    updateCart(id) {
      // this.cart += 1
      this.cart.push(id)
    }
  },
  components: {
    Card
  }
}
</script>

<style>
body {
    @apply bg-red-200;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
