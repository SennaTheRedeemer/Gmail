<template>
  <v-container>
    <DisplayMails :items="getInbox" title="דואר נכנס" :trash="false" class="mails" :styleStr='"max-height: 40vh !important"'></DisplayMails>
  </v-container>
</template>

<script>
import DisplayMails from '../components/DisplayMails.vue'
import DisplayMail from '../components/DisplayMail.vue'
import { mapGetters, mapActions } from 'vuex'
import bus from "../eventbus"

export default {
  name: 'MailBox',
  components: {
    DisplayMails,
    DisplayMail
  },
  mounted() {
    bus.$on("deleteMail", (mail) => {
      this.inboxRemoveMail(mail);
      mail.position = "trash";
      mail.new = true;
      this.trashAddMail(mail);
    })
  },
  props: {
    title: String
  },
  methods: {
    ...mapActions(['inboxRemoveMail', 'trashAddMail'])
  },
  computed: {
    ...mapGetters(['getInbox']),
  },
  data: () => ({
      items: inbox
    }),
};
</script>
<style>
.mail {
  height: 25vh !important
}
</style>
