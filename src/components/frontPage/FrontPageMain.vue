<template>
  <main class="main"> 
    <div class="container">
      <div class="content">
        <MainHead :heading="mainHeading" />
        <section class="content__wrapper">
          <FrontPageTopBox />  
          <section class="content__wrapper-graybox box-padding">
            <FrontPagePosters />
            <Contacts /> 
          </section>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import FrontPagePosters from '@/components/frontPage/FrontPagePosters.vue'
import FrontPageTopBox from '@/components/frontPage/FrontPageTopBox.vue'
import MainHead from '@/components/mainTemplates/MainHead.vue'
import Contacts from '@/components/mainTemplates/Contacts.vue'
export default {
  data() {
    return {
      mainHeading: 'Plakatkostenrechner',
    }
  },
  components: {
    FrontPagePosters,
    FrontPageTopBox,
    MainHead,
    Contacts,
  },
}
</script>

<style lang="scss">
</style>