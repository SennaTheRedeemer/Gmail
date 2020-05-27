<template>
    <div>
        <v-list-item>
            <v-list-item-content  @click="chooseMail(mail)">
                <v-list-item-title v-text="mail.title"></v-list-item-title>
                <v-list-item-subtitle v-text="mail.from" class="text--primary"></v-list-item-subtitle>
                <v-list-item-subtitle v-text="shortenedText"></v-list-item-subtitle>
                
            </v-list-item-content>

            <v-list-item-action @change.stop @click.stop @input.stop @submit.stop @mousedown.stop @select.stop>
                <v-list-item-action-text v-text="dateString"></v-list-item-action-text>
                <v-checkbox :on-icon="'mdi-star'" :off-icon="'mdi-star'" :value="selected" color="#FFD600"></v-checkbox>
            </v-list-item-action>

        </v-list-item>
        <v-divider></v-divider>
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
    computed: {
        dateString() {
            let dateStr = "לפני ";

            let msgDate = new Date(this.mail.date);

            let daysDifference = new Date().getDate() - msgDate.getDate();
            let hoursDifference = new Date().getHours() - msgDate.getHours();
            // If difference is longer than a week
            if (
                new Date().getYear() - msgDate.getYear() > 0 ||
                new Date().getMonth() - msgDate.getMonth() > 0 ||
                daysDifference > 7
            ) {
                dateStr = msgDate;
            } else if ( 2 < daysDifference && daysDifference <= 7) {
                dateStr = daysDifference + " ימים";
            } else if (daysDifference == 1) {
                dateStr = "אתמול";
            } else if (daysDifference == 1) {
                dateStr = "יומיים";
            } else if (hoursDifference > 2) {
                dateStr = hoursDifference + " שעות";
            } else if (hoursDifference == 2) {
                dateStr = "שעתיים";
            } else if (hoursDifference == 1) {
                dateStr = "שעה";
            } else {
                dateStr =
                new Date().getMinutes() - msgDate.getMinutes() + " דקות";
            }
            return dateStr;
    },
    shortenedText() {
        if(this.mail.content.length > 40) {
            return this.mail.content.slice(0, 40) + "..."
        }
        else {
            return this.mail.content
        }
    }
    },
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