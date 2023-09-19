<template>
    <span class="root">
       Text =  <span class="inside" >{{ text }}</span>
    </span>
</template>

<script>
export default {
    name: 'UiText',

    props:{
        text: {
            type: String,
        },

        color: {
            type: String,
            default: 'inherit'
        }
    }
}
</script>

<style scoped>
    .text{
        background-color: #7edf8e;
    }
    .root{
        font-size: 30px;
        font-style: italic;
    }
    .inside{
        color: v-bind(color);
    }
</style>

