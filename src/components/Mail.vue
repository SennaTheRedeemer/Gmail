<template>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title v-text="mail.title"></v-list-item-title>
            <v-list-item-subtitle v-text="mail.from" class="text--primary"></v-list-item-subtitle>
            <v-list-item-subtitle v-text="mail.content"></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-icon>
            <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
            <v-checkbox :on-icon="'mdi-star'" :off-icon="'mdi-star'" color="#FFD600"></v-checkbox>
        </v-list-item-icon>
    </v-list-item>
</template>

<script>
export default {
    name: 'MailCard',
    props: {
        mail: Object,
    },
}
</script>
