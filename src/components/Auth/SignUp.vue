<template>
  <div class="container">
    <div class="card">
      <div class="card-header text-center">
        Signup
      </div>
      <div class="card-body">
        <form method="POST" @submit.prevent="signup">
          <div class="form-group">
            <label for="email">Username</label>
            <input type="text"
                   class="form-control"
                   placeholder="Enter username"
                   v-model="username"
            >
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email"
                   class="form-control"
                   placeholder="Enter email"
                   v-model="email"
            >
          </div>
          <div class="form-group">
            <label for="email">Password</label>
            <input type="password"
                   class="form-control"
                   placeholder="Enter password"
                   v-model="password"
            >
          </div>
          <button class="btn btn-primary btn-block">SignUp</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { SIGNUP_MUTATION } from '@/graphql'

export default {
  name: 'SignUp',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signup () {
      this.$apollo
        .mutate({
          mutation: SIGNUP_MUTATION,
          variables: {
            username: this.username,
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          // redirect to login page
          this.$router.replace('/login')
        })
    }
  }
}
</script>

<style lang="css">

</style>
