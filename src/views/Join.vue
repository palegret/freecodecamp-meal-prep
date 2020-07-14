<template>
  <v-container fill-height>
    <v-row align-content="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-toolbar dark color="brown darken-4">
            <v-toolbar-title>Join Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                prepend-icon="person"
                name="email"
                label="Email"
                type="email"
                v-model="email"
                :rules="emailRules"
                required
              >
              </v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                id="password"
                type="password"
                required
                v-model="password"
                :rules="passwordRules"
              >
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              dark
              color="brown darken-4"
              :disabled="!valid"
              @click="submit"
            >
              Join
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'Join',
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be greater than 6 characters'
      ]
    };
  },
  computed: {
    formIsValid() {
      return this.$refs.form.validate();
    },
    newUser() {
      return {
        email: this.email,
        password: this.password
      };
    }
  },
  methods: {
    submit() {
      if (this.formIsValid) {
        this.$store.dispatch('userJoin', this.newUser);
      }
    }
  }
};
</script>
