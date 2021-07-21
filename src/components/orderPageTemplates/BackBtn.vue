<template>
  <router-link :to="{path: '/'}">
    <button 
      class="control-btn"
    >Zurück
    </button>
  </router-link>
</template>

<script>
export default {
  methods: {
    click() {
      console.log('here')
    }
  }
}
</script>

<style lang="scss">



</style>