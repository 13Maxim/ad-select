<template>
  <div class="top-box__right-container">
    <dl>
      <dt>Medium:</dt>
      <dd>{{ productData.name }}</dd>
      <dt v-show="productData.realSize">Produktionsmaß:</dt>
      <dd>{{ productData.realSize }}</dd>
      <dt v-show="productData.virtualSize">Sichtmaß:</dt>
      <dd>{{ productData.virtualSize }}</dd>
      <dt v-show="productData.format">Format:</dt>
      <dd>{{ productData.format }}</dd>
    </dl>
    <p class="product-note" v-show="productData.productNote">
      {{ productData.productNote }}
    </p>
    <SelectMenu />
    <div class="right-container__btn-container">
      <CalculateBtn />
      <BackBtn />
    </div>
  </div>
</template>

<script>
import SelectMenu from '@/components/orderPageTemplates/SelectMenu.vue'
import CalculateBtn from '@/components/orderPageTemplates/CalculateBtn.vue'
import BackBtn from '@/components/orderPageTemplates/BackBtn.vue'
export default {
  props: ['productData'], 
  components: {
    SelectMenu,
    CalculateBtn,
    BackBtn,
  },
};
</script>

<style lang="scss">
.top-box__right-container {
  box-sizing: border-box;
  flex: 1 1 60%;
  display: flex;
  flex-direction: column;
  padding-left: 50px;

  dt {
    font-weight: bold;
    margin: 15px 0 5px 0;
    color: #b20018;
  }

  .right-container__btn-container {
    margin-top: 20px;
  }

  .product-note {
    font-weight: bold;
    margin-top: 0;
    color: red;
  }

  @media (max-width: 850px) {
    flex: 1 1 50%;
    padding-left: 20px;
  }

  @media(max-width: 650px) {
    padding: 0;
  }
}
</style>