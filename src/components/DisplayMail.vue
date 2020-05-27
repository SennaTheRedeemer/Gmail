<template>
    <BaseCard class="ml-4 mt-12 viewCard" :title="'מידע נוסף'" v-if="mail" >
        <div>
            <v-card-title class="mt-0 pb-0"> כותרת: {{mail.title}}</v-card-title>
            <v-divider></v-divider>
            <v-card-subtitle> שולח: {{mail.from}}</v-card-subtitle>
            <v-card-text> תוכן: {{mail.content}}</v-card-text>
        </div>
    </BaseCard>
</template>
<script>
import BaseCard from "../components/BaseCard.vue"
import bus from "../eventbus"

export default {
    name: 'DisplayMail',
    props: {
    },
    mounted() {
        bus.$on("chooseMail", mail => {
            this.mail = mail
        })
    },
     data: () => ({
        // mail: {
        //     title: "",
        //     from: "",
        //     content: ""
        // }
        mail: null
    }),
    components: {
        BaseCard
    },
}
</script>
