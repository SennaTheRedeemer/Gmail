<template>
    <div class="header">
        {{text}}
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        text: String,
    },
};
</script>

<style scoped>
    .header {
        background-color: red;
        direction: rtl;
        text-align: right;
        color: white;
        border-radius: 10px;
    }
</style>
