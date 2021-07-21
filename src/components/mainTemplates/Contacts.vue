<template>
  <section class="contacts-container">
    <div class="contacts1">
      <p>Gerne steht Ihnen unser Beraterteam auch persönlich zur Verfügung.</p>
      <a href="#">
        Hier finden Sie weitere Informationen und Ihre Ansprechpartner
      </a>
    </div>
    <div class="contacts2">
      <p>
        Hinweis: Dieses Angebot richtet sich ausschließlich an Gewerbetreibende.
      </p>
      <a href="#">Allgemeine Geschäftsbedingungen</a>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.contacts-container {
  text-align: center;

  a {
    color: #007bff;
    text-decoration-line: none;

    &:hover {
      text-decoration-line: underline;
      color: #0056b3;
    }
  }

  p {
    margin-bottom: 5px;
  }

  div:last-child {
    margin-top: 30px;

    p {
      font-weight: bold;
    }
  }
}
</style>