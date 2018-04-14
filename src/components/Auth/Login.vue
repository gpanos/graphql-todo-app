<template>
  <div class="container">
    <div class="card">
      <div class="card-header text-center">
        Login
      </div>
      <div class="card-body">
        <form method="POST" @submit.prevent="login">
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
          <button class="btn btn-primary btn-block">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { LOGIN_MUTATION } from '@/graphql'

export default {
  name: 'LogIn',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$apollo
        .mutate({
          mutation: LOGIN_MUTATION,
          variables: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          localStorage.setItem('duetodo-app-token', response.data.login)
          this.$router.replace('/user/tasks')
        })
      }
    }
}
</script>

<style>
</style>
