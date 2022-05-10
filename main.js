const app = Vue.createApp({
  data()  {
    return {
      cart: 0,

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


app.mount('#app')