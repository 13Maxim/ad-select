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
  components: {
    Header,
    Footer,
    OrderPageMain,
  },
  data() {
    return {
      productData: {
        heading: 'City-Light-Poster (CLP)',
        name: 'City-Light-Poster 4/1 (4/0-farbig)',
        realSize: '118,5 x 175 cm',
        virtualSize: '115,0 x 171 cm',
        img: 'https://omniprint.omni-media.de/images/Druckkosten-CLP.jpg',
      },
    }
  },
}
</script>

<style>

</style>
