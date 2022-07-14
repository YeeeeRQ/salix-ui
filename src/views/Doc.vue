<template>
  <div>
    <div class="layout">
      <TopNav :toggleMenuButtonVisible="true" class="nav" />
      <div class="content">
        <aside v-if="asideVisible">
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">开始使用</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs</router-link>
            </li>
          </ol>
        </aside>
        <main>
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import { inject, Ref } from "vue";

export default {
  name: "Doc",
  components: { TopNav },

  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    // console.log("Doc MenuVisible:" + asideVisible.value);
    return { asideVisible };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;

    padding-top: 50px;
    padding-left: 150px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    // display: none;
    flex-shrink: 0;
    z-index: 5;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
    // background: lightgreen;
  }
}

aside {
  background-color: #f6f6f6;
  // border: 5px dashed 1px;
  width: 150px;

  position: fixed;
  top: 0;
  left: 0;

  // padding: 16px;
  padding-top: 70px;
  height: 100%;
  border-right: 1px solid rgba(0,0,0,.1);

  > h2 {
    margin-bottom: 4px;
    padding: 8px 12px;
  }

  > ol {
    display: block;
    display: flex;
    flex-direction: column;
    > li {
      display: inline-block;
      // border: 1px solid red;
      // padding: 4px 0;
      // padding-left: 16px;
      // padding-top: 6px;
      > a {
        display: block;
        padding: 4px 24px;
      }
      .router-link-active {
        text-decoration: underline;
        // background-color: #f6f6f6;
      }

      :hover {
        color: #a3e5b2;
        // background-color: #e0e0f0;
        // background: black;
      }
    }
  }
}

main {
  overflow: auto;
}
</style>
