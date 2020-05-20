<template>
    <BaseCard class="ml-4 mt-12 viewCard" :title="'מידע נוסף'" v-if="mail" >
        <v-container>
            <v-row class="pt-3 flex-row display">
                <v-container>
                    <v-card-title>{{mail.title}}</v-card-title>
                    <v-card-subtitle>{{mail.from}}</v-card-subtitle>
                    <v-card-text>{{mail.content}}</v-card-text>
                </v-container>
            </v-row>
        </v-container>
    </BaseCard>
</template>
<script>
import BaseCard from "../components/BaseCard.vue"

export default {
    name: 'DisplayMail',
    props: {
        mail: Object
    },
     data: () => ({
    }),
    components: {
        BaseCard
    },
}
</script>
