<template>
  <v-container>
    <DisplayMails :items="displayMails" title="דואר יוצא" :trash="false" class="mails" :styleStr='"max-height: 40vh !important; min-height: 40vh !important"'>
    </DisplayMails>
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
    ...mapGetters(['getOutbox', 'getFavoriteOnly']),
    displayMails() {
      if (this.getFavoriteOnly) {
        return this.getOutbox.filter(mail => {return mail.favorite})
      }
      else {
        return this.getOutbox;
      }
    }
  },
  data: () => ({
    }),
  mounted() {
    bus.$on("deleteMail", (mail) => {
      this.outboxRemoveMail(mail);
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
