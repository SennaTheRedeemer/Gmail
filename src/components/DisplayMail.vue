<template>
    <BaseCard class="ml-4 mt-12 viewCard" :title="'מידע נוסף'" v-if="getSelectedMail" >
        <div>
            <v-card-title class="mt-1 pb-0"> כותרת: {{getSelectedMail.title}}</v-card-title>
            <v-divider></v-divider>
            <v-card-subtitle> שולח: {{getSelectedMail.from}}</v-card-subtitle>
            <v-card-text> תוכן: {{getSelectedMail.content}}</v-card-text>
        </div>
    </BaseCard>
</template>
<script>
import BaseCard from "../components/BaseCard.vue"
import { mapGetters } from 'vuex'

export default {
    name: 'DisplayMail',
    props: {
    },
    computed: {
        ...mapGetters(['getSelectedMail']),
    },
     data: () => ({
        mail: null
    }),
    components: {
        BaseCard
    },
}
</script>
