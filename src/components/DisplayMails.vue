<template>
    <v-card 
        id="scroll-target"
        class="ml-4 overflow-hidden">
      <v-app-bar
      absolute
      elevate-on-scroll
      scroll-target="#mails"
    >
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-sheet
      id="mails"
      class="overflow-y-auto pt-12"
      max-height="300"
    >
      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-checkbox :on-icon="item.icon" :off-icon="item.icon" color="#FFD600"></v-checkbox>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-sheet>
    </v-card>
</template>
<script>
export default {
    name: 'DisplayMails',
    props: {
        items: Array,
        title: String
    },
     data: () => ({
        model: null,
    }),
}
</script>