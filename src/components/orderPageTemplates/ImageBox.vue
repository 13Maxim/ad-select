<template>
  <div class="top-box__left-container">
    <img :src="img" />
  </div>
</template>

<script>
export default {
  props: ['img'],
};
</script>

<style lang="scss">
.top-box__left-container {
  flex: 1 1 40%;

  @media (max-width: 850px) {
    flex: 1 1 50%;
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>