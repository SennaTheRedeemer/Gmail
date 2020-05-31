<template>
  <v-container>
    <DisplayMails :items="getTrash" title="דואר זבל" :trash="true" class="mails" :styleStr='"max-height: 74vh !important"'></DisplayMails>
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
  },
  data: () => ({
    }),
};
</script>
<style scoped>
.trashBox {
  background-color: sandybrown !important;
}
</style>
