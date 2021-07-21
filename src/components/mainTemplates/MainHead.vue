<template>
  <section class="head-container">
    <div class="head-topbox">
      <h2>{{ heading }}</h2>
    </div>
  </section>
</template>

<script>
export default {
  props: ['heading'],
}
</script>

<style lang="scss">
@mixin text-box($bg-color, $color, $font-weight, $text-align) {
  height: 42px;
  padding: 13px 15px;
  box-sizing: border-box;
  text-align: $text-align;

  background-color: $bg-color;
  color: $color;
  h2 {
    margin: 0;
    padding: 0;
    font-weight: $font-weight;
    font-size: 16px;
    text-transform: uppercase;

    @media (max-width: 550px) {
      text-align: center;
    }
  }
}
.head-container {
  .head-topbox {
    @include text-box(#b20018, #fff, 100, start);
  }
}
</style>