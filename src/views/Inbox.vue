<template>
  <v-container>
    <DisplayMails :items="displayMails" :inbox="true" title="דואר נכנס" :trash="false" class="mails" :styleStr='"max-height: 40vh !important; min-height: 40vh !important"'>
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
  },
  props: {
    title: String
  },
  methods: {
    ...mapActions(['inboxRemoveMail', 'trashAddMail'])
  },
  computed: {
    ...mapGetters(['getInbox', 'getFavoriteOnly']),
    displayMails() {
      if (this.getFavoriteOnly) {
        return this.getInbox.filter(mail => {return mail.favorite})
      }
      else {
        return this.getInbox;
      }
    }
  },
  data: () => ({
    }),
};
</script>
<style>
.mail {
  height: 25vh !important
}
</style>
