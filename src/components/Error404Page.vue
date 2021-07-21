<template>
  <div>
    <Header />
    <main>
      <div class="container">
        <div class="content">
          <MainHead :heading="heading" />
          <section class="box-padding">
            <h1 class="error-heading">Error 404</h1>
            <p class="error-text">
              Konnte den Request "{{ $route.params.pathMatch.replace('/', '') }}" nicht auflösen.
            </p>
          </section>
          <section class="content__wrapper-graybox box-padding">
            <Contacts />
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/mainTemplates/Header.vue'
import Contacts from '@/components/mainTemplates/Contacts.vue'
import MainHead from '@/components/mainTemplates/MainHead.vue'
export default {
  data() {
    return {
      heading: 'Seite nicht gefunden',
    }
  },
  components: {
    Header,
    Contacts,
    MainHead,
  },
}
</script>

<style lang="scss">
.error-heading,
.error-text {
  text-align: center;
}
</style>