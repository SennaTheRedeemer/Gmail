<template>
  <v-container>
    <DisplayMails :items="displayMails" title="דואר זבל" :trash="true" class="mails" :styleStr='"max-height: 74vh !important"'>
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
    ...mapActions(['trashRemoveMail'])
  },
  mounted() {
    bus.$on("deleteMail", (mail) => {
      this.trashRemoveMail(mail);
    })
  },
  computed: {
    ...mapGetters(['getTrash']),
    displayMails() {
      if (this.favoriteOnly) {
        return this.getTrash.filter(mail => {return mail.favorite})
      }
      else {
        return this.getTrash;
      }
    }
  },
  data: () => ({
    favoriteOnly: false,
    }),
};
</script>
<style scoped>
.trashBox {
  background-color: sandybrown !important;
}
</style>
