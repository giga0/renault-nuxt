<template>

  <section class="shp-faq__header">

    <div class="shp-faq__header-image">

      <div class="shp-faq__header-image__text">
        <h1 class="text--bolder shp-faq__header-title">
          Questions
          <br> & Answers
        </h1>
      </div>

    </div>

    <div class="shp-faq__header-text">
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>

  </section>

</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/settings";

.shp-faq__header {
  position: relative;

  &-image {
    background: center no-repeat
        linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
      url("https://picsum.photos/375/200/?random");
    background-size: cover;
    height: 20rem;
    @include breakpoint(desktop) {
      background: center no-repeat
          linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
        url("https://picsum.photos/1152/608/?random");
      width: 115.2rem;
      height: 60.8rem;
    }

    &__text {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      padding-left: 2rem;
      @include breakpoint(desktop) {
        padding-left: 16.65rem;
      }
    }
  }

  &-title {
    color: $white;
    @include fontSizeRem(24, 71);
    line-height: 1.08;
    text-transform: uppercase;
    margin: 1.1rem 0;
    @include breakpoint(desktop) {
      margin: 2.2rem 0;
      line-height: 0.94;
    }
  }

  &-text {
    width: 100%;
    padding: 2rem 1.9rem 1.6rem;
    background: $white-two;
    @include fontSizeRem(16, 20);
    line-height: 1.5;
    @include breakpoint(desktop) {
      line-height: 1.4;
      width: 51.2rem;
      padding: 8.1rem 5.35rem;
      z-index: 2;
      position: absolute;
      right: 0;
      top: 12rem;
    }
  }
}
</style>