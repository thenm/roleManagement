<template>
  <div>
    <h1>
      Register
    </h1>

    <input type="email" name="email" placeholder="email" v-model="vEmail"/>
    <input type="password" name="password" placeholder="password" v-model="vPassword"/>
    <br/>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/Authentication'
export default {
  name: 'Register',
  data () {
    return {
     vEmail: '',
     vPassword: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.vEmail,
        password: this.vPassword
      })
      console.log('Response', response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
