<template>
    <div>
        <v-list-item :class="{ 'amber lighten-4': isReply }">
            <v-list-item-content  @click="chooseMail(mail)">
                <v-list-item-title v-text="mail.title"></v-list-item-title>
                <v-list-item-subtitle v-text="mail.from" class="text--primary"></v-list-item-subtitle>
                <v-list-item-subtitle v-text="shortenedText"></v-list-item-subtitle>   
            </v-list-item-content>

            <v-list-item-action @click.stop >
                <v-badge
                :value="isNewMail"
                color="blue"
                icon="mdi-exclamation"
                overlap
                v-if="isNewMail"
                >
                </v-badge>
                <v-list-item-action-text v-text="dateString"></v-list-item-action-text>
                <v-checkbox :on-icon="'mdi-star'" :off-icon="'mdi-star'" v-model="mail.favorite" color="#FFD600"></v-checkbox>
                <v-row>
                    <v-btn v-if="!trash" icon color="red" @click="deleteMail(mail)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn v-if="inbox" icon color="black" @click="replyMail(mail)">
                        <v-icon>mdi-reply</v-icon>
                    </v-btn>
                </v-row>
                <v-btn v-if="trash" icon color="black" @click="restoreMail(mail)">
                    <v-icon>mdi-undo</v-icon>
                </v-btn>
            </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
    </div>
</template>

<script>
import bus from "../eventbus"
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'MailItem',
    props: {
        mail: Object,
        trash: Boolean,
        inbox: Boolean
    },
    data: () => ({
        selected: false,
    }),
    computed: {
        isNewMail() {
            return this.mail.new
        },
        isReply() {
            return this.mail.reply
        },
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
            return this.mail.content.slice(0, 40) + "...";
        }
        else {
            return this.mail.content;
        }
    }
    },
    methods: {
        ...mapActions(['trashRemoveMail', 
                        'inboxAddMail', 
                        'outboxAddMail', 
                        'inboxRemoveMail',
                        'setSelectedMail',
                        'removeMail']),
        chooseMail(mail) {
            mail.new = false;
            this.setSelectedMail(mail);
        },
        deleteMail(mail) {
            mail.reply = false;
            mail.new = true;
            this.removeMail(mail);
        },
        restoreMail(mail) {
            mail.new = true;
            switch(mail.position) {
                case 'inbox': {
                    this.trashRemoveMail(mail);
                    this.inboxAddMail(mail);
                    break;
                }
                case 'outbox': {
                    this.trashRemoveMail(mail);
                    this.outboxAddMail(mail);
                    break;
                }
            }
        },
        replyMail(mail) {
            mail.reply = true;
            mail.from = 'Me';
            this.inboxRemoveMail(mail);
            this.outboxAddMail(mail);
        }
    }
}
</script>
<style>
</style>