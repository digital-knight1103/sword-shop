app.component('product-display', {
  props:{
    premium: {
      type: Boolean,
      require: true
    }
  },
  template:
  /*html*/
  `<div class="produckt-display">
        <div class="product-container">
          <div class="product-image">
            <img 
              v-bind:src="image"
              v-bind:class="{ outOfStockImg: !inStock }" 
              alt="Sword Foto">
          </div>
          <div class="product-info">
              <!-- Better assign computed value than join in HTML data value -->
              <!-- <h1>{{ product + ' ' + infoProduct }}</h1> -->
              <h1>{{ title }}</h1>
              <p>When you are Master of {{product}} you must visit our{{infoProduct}}</p>
              <p v-show="onSale">ON SALE Knight</p>
              <p v-if="inStock && inventory > 10">In Stock</p>
              <p v-else-if="inventory <=10 && inventory > 0 ">Almost sold out</p>
              <p v-else>Out of Stock</p>

              <p> Shipping: {{ shipping }}

              <!-- loop to array from data -->
              <ul>
                <li v-for="detail in details"> {{detail}} </li>
              </ul>

              <div 
                v-for="(variant, index) in variants"
                v-bind:key="variant.id"
                v-on:mouseover="updateVariant(index)"
                class="color-circle"
                v-bind:style="{ backgroundColor: variant.color}"> 
                <!-- {{variant.color + ': ' + variant.name}}  -->
                {{ variant.name}}
              </div>

              <ul>
                <p>Available Sizes</p>
                <li v-for="size in sizes"> {{size}} </li>
              </ul>

              <!-- disabledButton jest to klasa którą dodajemy kiedy inStock będzie false -->
              <button 
                class="button"
                v-bind:class="{ disabledButton: !inStock }"
                v-bind:disabled= "!inStock"
                v-on:click="addToCart">
                Add to cart
              </button>

              <button class="button" v-on:click="resetCart">Clean cart</button>
          </div>
        </div>
        <div>
        </div>
      </div>`,

  data()  {
    return {
      product: 'Sword',
      infoProduct: 'Shop',
      logo: '/assets/images/vue.svg',
      // image: './assets/images/1.png',
      selectedVariant: 0, // 0 bedziemy aktualizować po indeksie variantu
      // inStock: true,
      inventory: 30,
      onSale: true,
      
      details: ['80% steel', '12% wood', '8% leather'],
      variants: [
        {id: 1111, color: 'violet', name: 'Short Sword', image: './assets/images/1.png', quantity: 50},
        {id: 1112, color: 'red', name: 'Sabre', image: './assets/images/2.png', quantity: 0},
        {id: 1113, color: 'blue', name: 'Pirate Sabre', image: './assets/images/3.png', quantity: 10},
        {id: 1114, color: 'green', name: 'spars', image: './assets/images/4.png', quantity: 500}
      ],
      sizes: ['short', 'middle', 'long']


    }
  },
  computed: {
    title() {
      return this.product + ' ' + this.infoProduct
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    shipping() {
      if(this.premium) {
        return 'Free'
      } else {
        return 2.99
      }
    }
  },
  methods: {
    addToCart() {
      this.cart = this.cart + 1
    },
    resetCart() {
      this.cart = 0
    },
    updateVariant(index) {
      this.selectedVariant = index
      console.log(index)
    }
  }

})