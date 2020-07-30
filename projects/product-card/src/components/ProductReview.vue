<template>
  <div class="border-solid border-2 border-red-300 mt-4 px-4 py-4">
    <form class="review-form" @submit.prevent="onSubmit">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </p>

      <p>
        <label for="name" class="block text-gray-800 text-sm font-semibold mb-2">Name</label>
        <input id="name" v-model="name" type="text" class="bg-red-100 appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </p>

      <p class="mt-4">
        <label for="review" class="block text-gray-800 text-sm font-semibold mb-2">Review</label>
        <textarea id="review" v-model="review" class="bg-red-100 appearance-none border-none rounded w-full h-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
      </p>

      <p class="mt-4">
        <label for="rating" class="block text-gray-800 text-sm font-semibold mb-2">Rating</label>
        <select id="rating" v-model.number="rating" class="bg-red-100 border-none rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <button class="mt-6 btn btn-red">Add Review</button>
    </form>
  </div>
</template>

<script>
import {eventBus} from '../main'

export default {
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: []
    }
  },
  methods: {
    onSubmit() {
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          date: Date.now().toString(),
        }

        eventBus.$emit('review-submitted', productReview)
        eventBus.$emit('review-selected', 'Reviews')

        this.name = null
        this.review = null
        this.rating = null
        this.date = null
      } else {
        if (!this.name) this.errors.push("Name required.")
        if (!this.review) this.errors.push("Review required.")
        if (!this.rating) this.errors.push("Rating required.")
      }
    }
  }
}
</script>

<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-red {
    @apply bg-red-500 text-white;
  }
  .btn-red:hover {
    @apply bg-red-600;
  }
</style>