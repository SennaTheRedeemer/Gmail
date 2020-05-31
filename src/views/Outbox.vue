<template>
  <v-container>
    <DisplayMails :items="displayMails" title="דואר יוצא" :trash="false" class="mails" :styleStr='"max-height: 40vh !important"'>
      <v-switch class="pt-0 mt-0" v-model="favoriteOnly" :label="`הראה מועדפים בלבד`"></v-switch>
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
    ...mapGetters(['getOutbox']),
    displayMails() {
      if (this.favoriteOnly) {
        return this.getOutbox.filter(mail => {return mail.favorite})
      }
      else {
        return this.getOutbox;
      }
    }
  },
  data: () => ({
    favoriteOnly: false,
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
