<template>
  <div class="select">
    <div @click="showSelectItems = !showSelectItems" class="select__bar">
      <span v-if="pickedValue === 0" class="select__bar-option">Auflage</span>
      <span v-else class="select__bar-option">{{ pickedValue }}</span>
      <span class="select__bar-btn"></span>
    </div>
    <transition name="fade">
      <div class="select__items" v-show="showSelectItems">
        <ul class="select__menu">
          <li :key="n" v-for="n of 100" @click="saveValue(n)">
            {{ n }} 
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script> 
export default {
  data() {
    return {
      showSelectItems: false,
      pickedValue: 0,
    }
  },
  methods: {
    saveValue(n) {
      this.pickedValue = n
      sessionStorage.setItem('pickedValue', `${this.pickedValue}`)
      this.showSelectItems = false
      console.log(sessionStorage.getItem('pickedValue'))
    },
  },
}
</script>

<style lang="scss">
.select {
  width: 20%; 
  min-width: 120px;
  position: relative;

  &__bar {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    height: 40px;
    border: 1px solid #b20018;
    background-color: #efe6e7;
    cursor: pointer;
    color: #b20018;

    &-btn {
      display: block;
      width: 40px;
      height: 100%;
      position: relative;

      &::after,
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        right: 54%;
        width: 10px;
        height: 2px;
        background-color: #b20018;
        transform: rotate(45deg);
      }

      &::after {
        left: 15px;
        bottom: 15px;
        transform: rotate(-45deg);
      }
    }
  }

  .select__items {
    position: absolute;
    height: 150px;
    overflow-y: scroll;
    margin-top: 1px;
    border: 1px solid #b20018;
    background-color: #efe6e7;
    width: 98%;

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        padding: 5px;
        cursor: pointer;

        &:hover {
          color: #fff;
          background-color: #e4a6ae;
        }
      }
    }
  }
}

.fade-enter-active {
  transition: opacity 500ms;
}
.fade-enter {
  opacity: 0;
}
</style>