<template>
  <header>
    <div class="container">
      <div class="header-wrap">
        <a href="#" class="header-wrap__logo"></a>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header-wrap {
  padding-top: 13px;

  @media(max-width: 768px) {
    display: flex;
    justify-content: center;
  }

  &__logo {
    display: block;
    width: 278px;
    height: 54px;
    background-image: url(../../assets/logo_omni.svg);
  }
}
</style>