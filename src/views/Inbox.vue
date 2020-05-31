<template>
  <v-container>
    <DisplayMails :items="displayMails" :inbox="true" title="דואר נכנס" :trash="false" class="mails" :styleStr='"max-height: 40vh !important"'>
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
  mounted() {
    bus.$on("deleteMail", (mail) => {
      this.inboxRemoveMail(mail);
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
    displayMails() {
      if (this.favoriteOnly) {
        return this.getInbox.filter(mail => {return mail.favorite})
      }
      else {
        return this.getInbox;
      }
    }
  },
  data: () => ({
    favoriteOnly: false,
    }),
};
</script>
<style>
.mail {
  height: 25vh !important
}
</style>
