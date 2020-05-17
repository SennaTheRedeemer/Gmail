<template>
    <v-card class="ml-4 mt-12" height="510">
      <v-app-bar
      dark
      color="primary"
    >
      <v-toolbar-title>תפריט</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
      <v-list>
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
    </v-card>
</template>
<script>
export default {
    name: 'Menu',
    props: {
        items: Array
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