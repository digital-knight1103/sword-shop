const app = Vue.createApp({
  data()  {
    return {
      product: 'Sword',
      infoProduct: 'Shop',
      logo: '/assets/images/vue.svg',
      image: './assets/images/1.png',
      inStock: true,
      inventory: 2,
      onSale: true,
      

    }
  }
})


app.mount('#app')