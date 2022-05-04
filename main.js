const app = Vue.createApp({
  data()  {
    return {
      cart: 0,

      product: 'Sword',
      infoProduct: 'Shop',
      logo: '/assets/images/vue.svg',
      image: './assets/images/1.png',
      inStock: true,
      inventory: 2,
      onSale: true,
      
      details: ['80% steel', '12% wood', '8% leather'],
      variants: [
        {id: 1111, color: 'violet', name: 'Short Sword', image: './assets/images/1.png'},
        {id: 1112, color: 'red', name: 'Sabre', image: './assets/images/2.png'},
        {id: 1113, color: 'blue', name: 'Pirate Sabre', image: './assets/images/3.png'},
        {id: 1114, color: 'green', name: 'spars', image: './assets/images/4.png'}
      ],
      sizes: ['short', 'middle', 'long']


    }
  },
  methods: {
    addToCart() {
      this.cart = this.cart + 1
    },
    resetCart() {
      this.cart = 0
    },
    updateImage(variantImage) {
      this.image = variantImage
    }

  }
})


app.mount('#app')