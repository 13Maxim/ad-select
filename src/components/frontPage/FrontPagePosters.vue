<template>
  <section class="content__card-container">
    <FrontPagePosterItem
      class="card-container__card-item"
      :key="poster"
      v-for="poster of posters"
      :title="poster.title"
      :imgSrc="poster.img"
      :path="poster.path"
    />
  </section>
</template>

<script>
import FrontPagePosterItem from '@/components/frontPage/FrontPagePosterItem.vue'
export default {
  data() {
    return {
      posters: [
        {
          img: 'https://omniprint.omni-media.de/images/Druckkosten-CLP.jpg',
          title: 'clp',
          path: '/order1',
        },
        {
          img: 'https://omniprint.omni-media.de/images/Druckkosten-GF.jpg',
          title: 'grossfläche',
          path: '/order2',
        },
        {
          img: 'https://omniprint.omni-media.de/images/Druckkosten-GS.jpg',
          title: 'ganzsäule',
          path: '/order3',
        },
      ],
    }
  },
  components: {
    FrontPagePosterItem,
  },
}
</script>

<style lang="scss">
.content__card-container {
  display: flex;
  justify-content: space-between;

  @media (max-width: 550px) {
    flex-direction: column;
  }

  .card-container__card-item {
    flex-basis: 32%;
    display: flex;
    flex-direction: column;
    text-align: center;

    .card-item__image {
      max-width: 100%;
      max-height: 100%;
      border: 2px solid transparent;

      &:hover {
        border-color: #b20018;
      }
    }

    .image-sign {
      margin-top: 5pxе65е4;
      text-transform: uppercase;
    }
  }
}
</style>