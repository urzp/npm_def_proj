<template>
    <button class="button" type="button">
        <!-- <UiText class="text" text="Some text" color="red"></UiText> -->
        <slot/>
    </button>
</template>

<script>
import UiText from './UiText.vue'
export default {
    name: 'UiButton',
    components: { UiText },
}
</script>

<style scoped>
    /* .button :deep(.inside){
        font-size: 60px ;
    }  */

    :slotted(.root){
        display: none;
    }
    .button{
        margin: 10px 20px;
        display: inline-block;
        padding: 10px 24px;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        color: #4c6bb6;
        text-align: center;
        border: 1px solid #4c6bb6;
        border-radius: 5px;
        transition: 0.2s all;
        outline: none;
        box-shadow: none;
        background-color: #fff;
        cursor: pointer;
        
    }

    .button:hover{
        border-color: #b8c5e2;
        background-color: #b8c5e2;
    }
</style>