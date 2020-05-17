<template>
    <v-mailcard :title="'תפריט'" :maxHeight="500" class="pt-12 mt-12">
      <v-list class="viewCard">
        <v-list-item-group v-model="model">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content @click="route(item.link)" > 
                <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-mailcard>
</template>
<script>
import MailCard from "../components/MailCard.vue"

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
        route: function (link) {
            this.$router.push(link)
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