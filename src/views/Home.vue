<template>
    <div>
        <TopNav></TopNav>
        <div class="banner">
            <h1>Mint UI</h1>
            <h3>简洁 轻量 </h3>
            <h3>快速引用无负担</h3>
            <p class="actions">
                <a href="https://github.com">GitHub</a>
                <router-link to="/doc" as="a">开始</router-link>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'

export default {
    name: "Home",
    components: { TopNav }
}

</script>

<style lang="scss" scoped>
@import "./src/assets/style/helper.scss";

.banner {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    > h3{
        margin-top: .5em;
    }
    >.actions {
        display: flex;
        justify-content: center;
        >a {
            // border: 1px solid red;
            background-color: $color-highlight;
            color: #fff;
            border-radius: 1em;
            padding: .2em .6em;
            margin: .3em;
        }
    }
}
</style>