<template>
  <div>
    <span
      class="tab uppercase text-sm font-semibold mr-4"
      :class="{ activeTab: selectedTab === tab }"
      v-for="(tab, index) in tabs"
      :key="index"
      @click="selectedTab = tab">
      {{ tab }}</span>

    <div
      v-show="selectedTab === 'Reviews'"
      class="border-solid border-2 border-red-300 mt-4 px-2 py-2">
      <p v-if="!reviews.length" class="px-1 py-1">There are no reviews yet.</p>
      <ul>
        <li v-for="(review, index) in orderedReview" :key="index" class="px-4 py-2">
          <p class="uppercase font-semibold font-xs text-gray-800 flex items-center">{{ review.name }} 
            <span class="font-medium normal-case text-xs text-gray-700 ml-2">( Rating: {{ review.rating }} )</span></p>
          <p class="text-gray-800 text-sm">{{ review.review }}</p>
          </li>
      </ul>
    </div>

    <ProductReview
      v-show="selectedTab === 'Make a Review'"></ProductReview>
  </div>
</template>

<script>
import ProductReview from '@/components/ProductReview.vue'
import { eventBus } from '../main'
import { orderBy } from 'lodash'

export default {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tabs: ['Reviews', 'Make a Review'],
      selectedTab: 'Reviews'
    }
  },
  components: {
    ProductReview
  },
  computed: {
    orderedReview: function () {
    return orderBy(this.reviews, 'date', 'desc')
  }
  },
  mounted() {
    eventBus.$on('review-selected', reviewSelected => {
      this.selectedTab = reviewSelected
    })
  }
}
</script>

<style>
  .tab {
    @apply text-green-600;
    cursor: pointer;
  }

  .activeTab {
    @apply text-gray-800;
  }
</style>