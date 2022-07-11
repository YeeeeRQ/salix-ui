<template>
  <div class="topNavWrapper">
    <div class="topNav">
      <div class="logo">
        <SvgIcon name="LOGO"></SvgIcon>
        <span>alix</span>
      </div>
      <ul class="menu">
        <li>文档</li>
        <li>帮助</li>
      </ul>
      <span class="toggleAside" @click="toggleMenu"></span>
    </div>
  </div>
</template>

<script lang="ts">
import SvgIcon from "../components/SvgIcon.vue";
import { inject, Ref } from "vue";

export default {
  name: "TopNav",
  components: {
    SvgIcon,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    console.log("TopNav asideVisible:" + asideVisible.value);
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
.topNavWrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.topNav {
  color: #303030;
  display: flex;
  padding: 6px 16px;
  box-shadow: 0 1px 2px 1px #bdbdbd55;

  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;

  > .logo {
    // outline: 1px dashed red;
    max-width: 6em;
    margin-right: auto;
    display: flex;
    > svg {
      width: 40px;
      height: 40px;
    }
    > span {
      color: #a0e4b0;
      font-size: 2rem;
      font-weight: bolder;
      font-family: "lucida grande", "lucida sans unicode", lucida, helvetica,
        "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
      position: relative;
      left: -0.6rem;
      bottom: -0.3rem;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);

    display: none;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: block;
    }
  }
}
</style>
