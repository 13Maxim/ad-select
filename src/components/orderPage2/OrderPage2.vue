<template>
  <div>
    <Header />
    <OrderPageMain 
      :productData="productData"
    />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/mainTemplates/Header.vue'
import Footer from '@/components/mainTemplates/Footer.vue'
import OrderPageMain from '@/components/orderPageTemplates/OrderPageMain.vue'

export default {
  data() {
    return {
      productData: {
        heading: 'Großfläche',
        name: 'Großflächen (18/1-Format)',
        format: '356 x 252 cm',
        img: 'https://omniprint.omni-media.de/images/Druckkosten-GF.jpg',    
      }
    }
  },
  components: {
    Header,
    OrderPageMain,
    Footer,
  }
}
</script>

<style>

</style>