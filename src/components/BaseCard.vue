<template>
    <v-card 
    rounded
    class="ml-4 overflow-hidden rounded">
        <v-app-bar
        absolute
        color="amber lighten-3"
        >
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-sheet
        class="pt-12 viewCard"
        >
            <slot></slot>
        </v-sheet>
        
    </v-card>
</template>
<script>
export default {
    name: 'Card',
    props: {
        title: String,
    },
}
</script>
<style>
.viewCard {
    background-color: #FFFDE7 !important;
}
.rounded {
    border-radius: 15px !important;
}
</style>