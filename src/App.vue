<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  font-family: "MuseoSansRegular", sans-serif;
}

.box-padding {
  padding: 25px 20px;
}

.main {
  .container {
    padding-bottom: 40px;

    @media (max-width: 652px) {
      padding-bottom: 56px;
    }

    @media (max-width: 350px) {
      padding-bottom: 72px;
    }
  }
}

.container {
  padding: 0 105px 33px 105px;

  @media (max-width: 768px) {
    padding-right: 50px;
    padding-left: 50px;
  }

  @media (max-width: 550px) {
    padding-left: 10px;
    padding-right: 10px;
  }
}

.content {
  border: 1px solid #b20018;

  &__wrapper {
    color: #212529;

    h2,
    h3,
    h4 {
      font-weight: 300;
      font-size: 16px;
    }

    &-graybox {
      background-color: #f2f2f2;
    }
  }
}
</style>
