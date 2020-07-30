<template>
  <div class="container mx-auto px-4 pt-20 pb-12">
    <div class="w-4/6 mx-auto flex flex-col">
      <div class="flex">
        <div class="w-5/12 mr-16 flex items-center">
          <img class="w-full object-cover" alt="Кросівки" v-bind:src="image">
        </div>
        <div>
          <h1 class="text-4xl font-bold mb-4">{{ title }}</h1>

          <div class="mb-6 uppercase text-sm">
            <!-- <p v-show="inStock" class="font-semibold">In Stock</p> -->
            <p v-if="inStock" class="font-semibold">In Stock</p>
            <!-- <p v-if="inventory > 10" class="font-semibold">In Stock</p>
            <p v-else-if="inventory<=10 && inventory > 0" class="font-semibold">Almost sold out!</p> -->
            <p v-else class="font-semibold">Out of Stock</p>
            <!-- Premium це props -->
            <!-- <p>User is premium {{ premium }}</p> -->

            <p>Shipping: <span class="font-semibold">{{ shipping }}</span></p>
          </div>

          <ul class="list-inside list-disc text-sm uppercase text-gray-800">
            <li v-for="detail in details" :key="detail">{{ detail }}</li>
          </ul>
  <!-- <div class="w-10 h-10 bg-red-300 mr-2">{{ variant.variantColor }}</div> -->
          <div class="mt-6 flex">
            <!-- <div v-for="variant in variants" v-bind:key="variant.variantId" class="mr-2">
              <div @mouseover="updateProduct(variant.variantImage)"
                  class="w-10 h-10"
                  :class="variant.variantColor"></div>
            </div> -->
            <!-- Інший варіант того самого, але з index -->
            <div v-for="(variant, index) in variants" v-bind:key="variant.variantId" class="mr-2">
              <div @mouseover="updateProduct(index)"
                  class="w-10 h-10"
                  :class="variant.variantColor"></div>
            </div>
          </div>

          <!-- <button v-on:click="cart += 1" class="btn btn-green mt-6">Add to cart</button> -->
          <!-- Якщо inStock false то блокує кнопку робить disabled відповідно додаючи потрібний -->
          <!-- клас disabledButton якщо перевернутий стан inStock буде true-->
          <button v-on:click="addToCart"
                  :disabled="!inStock"
                  :class="{ disabledButton: !inStock }" class="btn btn-green mt-6">Add to cart</button>
        </div>
      </div>

      <productTabs :reviews="reviews" class="w-7/12 mt-16"></productTabs>
    </div>

    
  </div>
</template>

<script>
import { eventBus } from '../main'
import ProductTabs from '@/components/ProductTabs.vue'

export default {
  props: {
    premium: {
      type: Boolean,
      required: true,
    }
  },
  components: {
    ProductTabs
  },
  data() {
    return {
      brand: 'Adidas',
      product: 'Sneakers',
      // inStock: true,
      // inventory: 0,
      // image: require('@/assets/images/product-01-pink.jpg'),
      selectedVariant: 0,
      details: ['Rubber outsole', 'Warm textile lining', 'Two-tone laces'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'bg-red-300',
          variantImage: require('@/assets/images/product-01-pink.jpg'),
          variantQuantity: 11
        },
        {
          variantId: 2235,
          variantColor: 'bg-green-900',
          variantImage: require('@/assets/images/product-02-olive.jpg'),
          variantQuantity: 0
        }
      ],
      reviews: []
    }
  },
  methods: {
    addToCart: function() {
      // $emit передає дію у метод add-to-cart який знаходиться у батьківському елементі(app)
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    // updateProduct: function(variantImage) {
    //   this.image = variantImage
    // },
    updateProduct: function(index) {
      this.selectedVariant = index
      // console.log(index)
    },
    // addReview(productReview) {
    //   this.reviews.push(productReview)
    // }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    // Замість значення підставляється ось цей метод, який витягує значення об'єкта по індексу
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    shipping() {
      if (this.premium) {
        return 'Free'
      }
      return 2.99
    }
  },
  // Після того як є готовий дом, слухає подію review-submitted
  // це автобус який прописується в main.js для того, щоб викливати фукнцію якусь
  // прописується в main.js
  mounted() {
    eventBus.$on('review-submitted', productReview => {
      this.reviews.push(productReview)
    })
  }
}
</script>

<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-green {
    @apply bg-green-700 text-white;
  }
  .btn-green:hover {
    @apply bg-green-800;
  }
  .disabledButton {
    opacity: .70;
    /* @apply bg-red-300; */
  }

  .disabledButton:hover,
  .disabledButton:active {
    /* @apply bg-red-300; */
    @apply bg-green-700;
    cursor: auto;
  }
</style>