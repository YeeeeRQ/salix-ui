<template>
    <!-- <div class="sx-msg-wrapper">
        <div class="sx-msg-container">
            <div class="sx-msg">
            </div>
        </div>
    </div> -->
    <div class="sx-msg">
        <slot name="content" />
    </div>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
    name: "Message",
    components: { Button }
}
</script>

<style lang="scss">
.sx-msg {
    z-index: 2100;
    position: fixed;
    top: 0;
    left: 0;
    border: 1px dashed black;
    background-color: aquamarine;
    // margin-top: 10px;
    // margin-left: auto;
    // margin-right: auto;
    // padding: 10px 14px;
    width: 60%;

}

// .sx-msg-wrapper{
//     position: fixed;
//     top: 0px;
//     left: 0px;
//     width: 100vw;
//     height: 100vh;

//     border: 5px solid red;
//     display: flex;
//     z-index: 15;

//     .sx-msg-container{
//         border: 1px dashed green;
//         margin: 6% auto;
//         width: 80%;
//         overflow: hidden;


//     }
// }
// .sx-msg {
//     // display: inline-block;
//     border: 1px solid red;
//     background-color: #fff;
//     padding: 8px 12px;

//     // position:absolute;
//     z-index: 20;
// }
</style>