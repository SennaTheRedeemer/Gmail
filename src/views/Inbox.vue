<template>
  <v-app>
    <v-display-mails :items="items"></v-display-mails>
    <v-display-mail :mail="selectedMail"></v-display-mail>
  </v-app>
</template>

<script>
import DisplayMails from '../components/DisplayMails.vue'
import DisplayMail from '../components/DisplayMail.vue'

export default {
  name: 'Inbox',
  components: {
    'v-display-mails': DisplayMails,
    'v-display-mail': DisplayMail
  },
  data: () => ({
      selectedMail: {
        id: 1,
        title: 'Hi',
        sent: '15 min',
        from: 'Ofir Norani',
        content: "Hello World"
      },
      items: [
        {
          icon: 'mdi-star',
          text: 'PLACEHOLDER',
        },
        {
          icon: 'mdi-star',
          text: 'PLACEHOLDER',
        },
        {
          icon: 'mdi-star',
          text: 'PLACEHOLDER',
        },
        {
          icon: 'mdi-star',
          text: 'PLACEHOLDER',
        },
      ],
    }),
};
</script>
