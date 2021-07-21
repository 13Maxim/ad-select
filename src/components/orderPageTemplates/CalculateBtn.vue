<template>
  <router-link :to="{path: '/'}">
    <button class="control-btn">Kalkulieren</button>
  </router-link>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .control-btn {
    height: 40px;
    width: 90px;
    cursor: pointer;
    border: 1px solid #b20018;
    background-color: #efe6e7;
    color: #b20018;
    outline: none;
  }

  .control-btn:first-child {
    margin-right: 5px;
  }
</style>