<template>
  <div>
    <h1>Hi {{account.user.firstName}}!</h1>
    <p>You're logged in with Vue + Vuex & JWT!!</p>
    <h3>Users from secure api end point:</h3>
    <p>
      <router-link to="/login">Logout</router-link>
    </p>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState({
        account: state => state.account,
        // users: state => state.users.all
      })
    },
    created () {
      // this.getAllUsers();
    },
    methods: {
      ...mapActions('users', {
        // getAllUsers: 'getAll',
        // deleteUser: 'delete'
      })
    }
  };
</script>
<style>
</style>
