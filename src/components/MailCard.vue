<template>
    <v-card 
    id="scroll-target"
    class="ml-4 overflow-hidden">
        <v-app-bar
        absolute
        elevate-on-scroll
        scroll-target="#scrollable"
        >
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-sheet
        id="scrollable"
        class="overflow-y-auto pt-12"
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