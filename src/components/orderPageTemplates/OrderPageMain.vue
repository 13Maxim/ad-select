<template>
  <main class="main">
    <div class="container">
      <div class="content">
        <MainHead :heading="productData.heading" />
        <section class="content__wrapper">
          <section class="content__wrapper-top-box box-padding">
            <ImageBox 
              :img="productData.img"
            />

            <RightBox
              :productData="productData"
             />
          </section>
          <section class="content__wrapper-graybox box-padding">
            <Contacts />
          </section>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import MainHead from '@/components/mainTemplates/MainHead.vue'
import Contacts from '@/components/mainTemplates/Contacts.vue'
import ImageBox from '@/components/orderPageTemplates/ImageBox.vue'
import RightBox from '@/components/orderPageTemplates/RightBox.vue'
export default {
  props: ['productData'],
  components: {
    MainHead,
    Contacts,
    ImageBox,
    RightBox,
  },
}
</script>

<style lang="scss">
.content__wrapper-top-box {
  display: flex;

  @media(max-width: 650px) {
    flex-direction: column;
  }
}
</style>