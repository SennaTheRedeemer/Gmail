<template>
    <v-card 
    rounded
    id="scroll-target"
    class="ml-4 overflow-hidden rounded">
        <v-app-bar
        absolute
        color="amber lighten-3"
        elevate-on-scroll 
        scroll-target="#scrollable"
        >
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-sheet
        id="scrollable"
        class="pt-12 overflow-y-auto viewCard"
        :max-height="maxHeight"
        >
            <slot></slot>
        </v-sheet>
        
    </v-card>
</template>
<script>
export default {
    name: 'MailCard',
    props: {
        maxHeight: Number,
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