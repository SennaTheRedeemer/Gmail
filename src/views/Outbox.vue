<template>
  <v-container>
    <DisplayMails :items="getOutbox" title="דואר יוצא" :trash="false" class="mails" :styleStr='"max-height: 40vh !important"'></DisplayMails>
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
  props: {
    title: String
  },
  methods: {
    ...mapActions(['outboxRemoveMail', 'trashAddMail'])
  },
  computed: {
    ...mapGetters(['getOutbox']),
  },
  data: () => ({
      outbox
    }),
  mounted() {
    bus.$on("deleteMail", (mail) => {
      this.outboxRemoveMail(mail);
      mail.position = "trash";
      mail.new = true;
      this.trashAddMail(mail);
    })
  },
};
</script>
<style scoped>
.trashBox {
  background-color: sandybrown !important;
}
</style>
