<template>
  <section>
    <router-link :to="{ path: path }">
      <a>
        <img :src="imgSrc" class="card-item__image" />
      </a>
    </router-link>
    <h4 class="image-sign">{{ title }}</h4>
  </section>
</template>

<script>
export default {
  props: ['title', 'imgSrc', 'path'],
}
</script>

<style>
</style>