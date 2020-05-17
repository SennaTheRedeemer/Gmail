<template>
    <v-card class="ml-4 mt-12 pt-12">
        <v-card-title>{{mail.title}}</v-card-title>
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
        model: 1,
    }),
}
</script>