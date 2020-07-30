<template>
  <div id="app">
    <button class="absolute top-0 right-0 mt-6 mr-8 hover:bg-red-300 hover:border-red-400 hover:text-red-500 text-red-400 font-normal py-2 px-4 border border-red-300 rounded">
      Cart ({{ cart.length }})
    </button>
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
      cart: [],
    }
  },
  methods: {
    updateCart(id) {
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
</style>
