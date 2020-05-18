<template>
    <v-mailcard :title="'תפריט'" :maxHeight="1500" class="pt-12 mt-12">
        <v-responsive :aspect-ratio="51/100">
            <v-list class="viewCard">
                <v-list-item-group v-model="model">
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                >
                    <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content @click="route(item.link, item.text)" > 
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-responsive>
    </v-mailcard>
</template>
<script>
import MailCard from "../components/MailCard.vue"
import { mapActions } from 'vuex'

export default {
    name: 'Menu',
    props: {
        items: Array
    },
    components: {
        'v-mailcard': MailCard
    },
     data: () => ({
        model: 0,
    }),
    methods: {
        ...mapActions(['setTitle']),
        route: function (link, title) {
            this.setTitle(title);
            this.$router.push(link);
        },
    }
}
</script>
<style>
a {
    text-decoration: none;
    color: black !important;
}
</style>