<template>
  <div>
    <Header />
    <FrontPageMain />
    <Footer />
  </div>
</template>

<script>
import FrontPageMain from '@/components/frontPage/FrontPageMain.vue'
import Header from '@/components/mainTemplates/Header.vue'
import Footer from '@/components/mainTemplates/Footer.vue'
export default {
  components: {
    FrontPageMain,
    Header,
    Footer,
  }
}
</script>

<style>

</style>