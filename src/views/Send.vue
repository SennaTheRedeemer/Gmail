<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px" overlay-color="blue lighten-4">
      <v-card>
        <v-card-title>
          <span class="headline">שלח הודעה</span>
        </v-card-title>
        <v-card-text>
          <v-container>
              <v-form v-model="valid" lazy-validation ref="form">
                <v-row>
                <v-col cols="6" sm="6" md="6">
                    <v-text-field label="שלח ל*" 
                    v-model="from" 
                    required 
                    :counter="20"
                    :rules="nameRules">
                    </v-text-field>
                </v-col>
                <v-col cols="6" sm="6" md="6">
                    <v-text-field
                    v-model="title"
                    label="נושא*"
                    hint="נושא ההודעה"
                    required
                    :counter="40"
                    :rules="titleRules"
                    ></v-text-field>
                </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="12">
                        <v-textarea
                        v-model="content"
                        label="תוכן ההודעה*"
                        value=""
                        :counter="200"
                        :rules="contentRules"
                        hint="מה לשלוח?"
                        ></v-textarea>
                    </v-col>
                </v-row>
              </v-form>
          </v-container>
          <small>* - שדות חובה.</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">סגור חלון</v-btn>
          <v-btn color="blue darken-1" :disabled="!valid" text @click="send">שלח</v-btn>
          <v-btn color="blue darken-1" :disabled="!valid" text @click="sendMyself">שלח לעצמי</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      color="amber lighten-3"
      v-model="propAlert"
      :timeout="alertTimeout"
    >
      <strong class="blackWrite">{{ propText }} </strong>
      <v-btn
        color="black"
        text
        @click="propAlert = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>

  </v-row>
</template>

<script>
import bus from "../eventbus"
import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        propAlert: false,
        propText: 'המייל נשלח בהצלחה!',
        alertTimeout: 4000,
        dialog: false,
        valid: true,
        nameRules: [
            name => !!name || 'חובה למלא שם נמען',
            name => /[a-zA-Zא-ת]+\d*/.test(name) > 0 || "שם הנמען חייב להכיל אותיות",
            name => (name && name.length <= 20) || 'שדה זה חייב להיות באורך 20 אותיות או פחות',
        ],
        titleRules: [
            title => !!title || "חובה למלא נושא",
            title => (title && title.length <= 200) || "שדה זה חייב להיות באורך 40 אותיות או פחות"
        ],
        contentRules: [
            title => !!title || "חובה למלא תוכן",
            title => (title && title.length <= 200) || "שדה זה חייב להיות באורך 200 אותיות או פחות"
        ],
        title: '',
        from: '',
        content: '',
      }
    },
    mounted() {
        bus.$on("openSendDialog", () => {
            this.dialog = true;
        })
    },
    methods: {
        ...mapActions(['outboxAddMail', 'inboxAddMail']),
      send () {
        if(this.$refs.form.validate()){
            this.outboxAddMail({
                title: this.title,
                from: "Me",
                content: this.content,
                date: new Date().getTime(),
                favorite: false,
                new: true,
                position: "outbox"
            })
            this.reset();
            this.dialog = false;
            this.propAlert = true;
        }
      },
      sendMyself() {
          if(this.$refs.form.validate()){
              this.inboxAddMail({
                title: this.title,
                from: "Me",
                content: this.content,
                date: new Date().getTime(),
                favorite: false,
                new: true,
                position: "inbox"
            })
            this.reset();
            this.dialog = false;
            this.propAlert = true;
          }
      },
      close() {
          this.reset();
          this.dialog = false;
      },
      reset () {
        this.$refs.form.reset();
      },
      resetValidation () {
        this.$refs.form.resetValidation();
      },
    },
  }
</script>
<style scoped>
.blackWrite {
  color: black !important;
}
</style>