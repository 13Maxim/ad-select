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
        heading: 'Ganzsäule 6/1 Bogen',
        name: 'Ganzsäule (6/1-Format)',
        format: '119 x 252 cm',
        img: 'https://omniprint.omni-media.de/images/Druckkosten-GS.jpg',     
        productNote: 'Pro Ganzsäule werden 3 x 6/1 Plakate gedruckt.',   
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