<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrap">
        <div class="footer__copyright">
          <span>&copy;</span> <a href="#">media picker</a>
        </div>
        <div class="footer__contacts">
          <a href="#">Impressum</a>
          <a href="#">Datenschutzerklärung</a>
          <a href="#">Disclaimer</a>
          <a href="#">agb</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  min-width: 100%;

  background-color: #c54052;
  color: #fff;
  font-size: 14px;
  position: fixed;

  a {
    color: #fff;
  }

  .container {
    padding-bottom: 0;
  }

  &__wrap {
    display: flex;
    justify-content: space-between;
    padding: 3px 0;

    @media (max-width: 550px) {
      flex-direction: column-reverse;
      align-items: center;
    }
  }

  &__copyright {
    flex: 1 1 40%;

    a {
      text-transform: uppercase;
      font-size: 14px;
      text-decoration-line: none;

      &:hover {
        text-decoration-line: underline;
      }
    }
  }

  &__contacts {
    flex: 1 1 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    a:last-child {
      text-transform: uppercase;
    }

    a:hover {
      text-decoration-line: none;
    }

    a + a {
      margin-left: 30px;
      @media (max-width: 870px) {
        margin-left: 10px;
      }
    }

    @media (max-width: 768px) {
      justify-content: center;
    } 
  }
}
</style>