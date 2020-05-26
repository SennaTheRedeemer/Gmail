<template>
    <BaseCard :title="'תפריט'" class="pt-8 mt-12 viewCard" style="height: 85vh !important">
            <v-list class="viewCard">
                <v-list-item-group v-model="selected">
                    <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                    >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <!--<v-list-item-content @click="route(item.link, item.text)">  for vuex -->
                        <v-list-item-content @click="emitTitle(item.text)">
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
    </BaseCard>
</template>
<script>
import BaseCard from "../components/BaseCard.vue"
import { mapActions } from 'vuex'
import Vue from "vue"
import bus from "../eventbus"

export default {
    name: 'Menu',
    props: {
        items: Array
    },
    components: {
        BaseCard
    },
     data: () => ({
        selected: 0,
    }),
    methods: {
        /*...mapActions(['setTitle']),
        route: function (link, title) {
            this.setTitle(title);
            this.$router.push(link);
        },                                   - for vuex*/ 
        emitTitle(title) {
            bus.$emit('changeView', title)
        }
    }
}
</script>
<style>
a {
    text-decoration: none;
    color: black !important;
}
</style>