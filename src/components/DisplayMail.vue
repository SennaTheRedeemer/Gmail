<template>
    <v-mailcard class="ml-4 mt-12" :title="mail.title" v-if="mail">
        <v-card-subtitle>{{mail.from}}</v-card-subtitle>
        <v-card-text>{{mail.content}}</v-card-text>
    </v-mailcard>
</template>
<script>
import MailCard from "../components/MailCard.vue"

export default {
    name: 'DisplayMail',
    props: {
        mail: Object
    },
     data: () => ({
    }),
    components: {
        'v-mailcard': MailCard
    },
}
</script>
<style scoped>

</style>