<template>
  <TopNav />
  <div class="banner">
    <SvgIcon name="LOGO"></SvgIcon>
    <h1>Salix UI</h1>
    <p class="tagline">简洁 轻量</p>
    <p class="tagline">快速引用无负担</p>
    <p class="actions">
      <a href="https://github.com">GitHub</a>
      <router-link to="/doc" as="a">开始</router-link>
    </p>
  </div>
  <div class="features">
    <div class="featuresWrapper">
      <article>
        <h1>基于Vue3</h1>
        <p>基于最新的 Composition API</p>
      </article>
      <article>
        <h1>TypeScript</h1>
        <p>组件源码采用 TypeScirpt 书写</p>
      </article>
      <article>
        <h1>代码易读</h1>
        <p>源码简洁，方便使用</p>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import SvgIcon from "../components/SvgIcon.vue";

export default {
  name: "Home",
  components: { TopNav, SvgIcon },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/style/helper.scss";
.home {
  width: 800px;
  border: 1px solid red;
  // overflow: hidden;
  margin-left: auto;
  margin-right: auto;
}

.topNavAndBanner {
  overflow: hidden;
}

.banner {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
  padding: 2.25rem 0;
  > h1 {
    font-size: 3.2rem;
    font-weight: lighter;
    font-family: "lucida grande", "lucida sans unicode", lucida, helvetica,
      "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  }

  > .tagline {
    font-size: 1.5rem;
    font-weight: lighter;
    margin-top: 0.5em;
  }

  > .actions {
    display: flex;
    justify-content: center;
    > a {
      // border: 1px solid red;
      background-color: $color-highlight;
      color: #fff;
      font-size: smaller;
      font-weight: lighter;
      border-radius: 2em;
      padding: 0.6em 1em;
      margin: 0.3em;
      margin-top: 2.25rem;
    }
  }
}

.features {
  width: 80%;
  margin: 0 auto;

  margin-bottom: 300px;

  > .featuresWrapper {
    display: flex;
    flex-wrap: nowrap;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    @media (max-width: 800px) {
      flex-direction: column;
    }

    > article {
      flex: 1;
      display: inline-block;
      padding: 4rem 3rem;

      @media (max-width: 800px) {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        text-align: center;
      }
      > p {
        padding-top: 1rem;
      }
    }
  }
}
</style>
