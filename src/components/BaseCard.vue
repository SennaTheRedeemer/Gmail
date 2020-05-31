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
            <v-switch v-model="getFavoriteOnly" v-if="showFavoriteSwitch" class="pt-0 mt-0" @change="setFavoriteOnly()"  :label="`הראה מועדפים בלבד`" />
        </v-app-bar>

        <v-sheet
        class="pt-12 viewCard"
        >
            <slot></slot>
        </v-sheet>
        
    </v-card>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Card',
    props: {
        title: String,
        showFavoriteSwitch: Boolean
    },
    computed: {
        ...mapGetters(['getFavoriteOnly'])
    },
    methods: {
        ...mapActions(['setFavoriteOnly']),
    }
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