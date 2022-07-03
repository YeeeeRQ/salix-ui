<template>
    <div>
        <TopNav></TopNav>
        <div class="content">
            <aside v-if="asideVisible">
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
            <main>内容</main>
        </div>
    </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
import { inject, Ref } from "vue";

export default {
    name: "Doc",
    components: { TopNav },

    setup() {

        const asideVisible = inject<Ref<boolean>>('asideVisible');
        console.log('Doc MenuVisible:' + asideVisible.value);
        return { asideVisible }
    }
}



</script>

<style lang="scss">
aside {
    background-color: lightblue;
    width: 150px;
    padding: 16px;

    >h2 {
        margin-bottom: 4px;
    }

    >ol {
        >li {
            padding: 4px 0;
        }
    }

    @media (max-width: 500px){
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 70px;
    }
}
</style>