<template>
  <TopNav />
  <div class="banner">
    <SvgIcon name="LOGO"></SvgIcon>
    <h1>Salix</h1>
    <p class="tagline">简洁 轻量</p>
    <p class="tagline">快速引用无负担</p>
    <p class="actions">
      <a href="https://github.com">GitHub</a>
      <router-link to="/doc" as="a">开始</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import SvgIcon from '../components/SvgIcon.vue';

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
  // border: 1px solid red;
  overflow: hidden;
  // background-color: #e2f0ec;
  // background: linear-gradient(
  //   135deg,
  //   rgba(146, 224, 182, 1) 0%,
  //   rgba(208, 251, 212, 1) 51%,
  //   rgba(226, 240, 236, 1) 100%
  // );
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
    font-family: "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
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
</style>
