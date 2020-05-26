<template>
    <div>
        <v-list-item>
            <v-list-item-content  @click="chooseMail(mail)">
                <v-list-item-title v-text="mail.title"></v-list-item-title>
                <v-list-item-subtitle v-text="mail.from" class="text--primary"></v-list-item-subtitle>
                <v-list-item-subtitle v-text="mail.content"></v-list-item-subtitle>
                
            </v-list-item-content>

            <v-list-item-action @change.stop @click.stop @input.stop @submit.stop @mousedown.stop @select.stop>
                <v-list-item-action-text v-text="mail.date" class="english"></v-list-item-action-text>
                <v-checkbox :on-icon="'mdi-star'" :off-icon="'mdi-star'" :value="selected" color="#FFD600"></v-checkbox>
            </v-list-item-action>

        </v-list-item>
        <v-divider ></v-divider>
    </div>
</template>

<script>
import bus from "../eventbus"

export default {
    name: 'MailCard',
    props: {
        mail: Object,
    },
    data: () => ({
        selected: false,
    }),
    methods: {
        chooseMail(mail) {
            console.log(mail)
            bus.$emit("chooseMail", mail)
        }
    }
}
</script>
<style>
</style>