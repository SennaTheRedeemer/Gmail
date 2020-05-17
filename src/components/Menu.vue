<template>
    <v-card class="ml-4 mt-12 pt-12" height="573">
      <v-card-title>Menu</v-card-title>
      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content @click="route(item.link)"> 
                <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
</template>
<script>
export default {
    name: 'Menu',
    props: {
        items: Array
    },
     data: () => ({
        model: 1,
    }),
    methods: {
        route: function (link) {
            this.$router.push(link)
        },
    }
}
</script>
<style scoped>
a {
    text-decoration: none;
    color: black !important;
}
</style>