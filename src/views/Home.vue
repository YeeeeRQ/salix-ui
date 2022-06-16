<template>
    <div>
        <TopNav></TopNav>
        <div class="banner">
            <h1>Mint UI</h1>
            <p class="tagline">简洁 轻量 </p>
            <p class="tagline">快速引用无负担</p>
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
    > h1{
        font-size: 3rem;
    }

    > .tagline{
        font-size: 1.5rem;
        font-weight: lighter;
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