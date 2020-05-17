<template>
    <v-card class="ml-4 mt-12" v-if="mail">
    <v-app-bar
      dark
      color="primary"
    >
      <v-toolbar-title>{{mail.title}}</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
        <v-card-subtitle>{{mail.from}}</v-card-subtitle>
        <v-card-text>{{mail.content}}</v-card-text>
    </v-card>
</template>
<script>
export default {
    name: 'DisplayMail',
    props: {
        mail: Object
    },
     data: () => ({
    }),
}
</script>
<style scoped>

</style>