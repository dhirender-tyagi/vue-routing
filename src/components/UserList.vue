<template>
    <div>
        <h1>
            User List.
            <router-view></router-view>
            <!-- <router-view name="a"></router-view> -->
            <ul v-for="(user, index) in userList" v-bind:key="index">
                <li>
                    <router-link :to="{ name: 'user', params: { id: user.id }}">{{user.name}}</router-link>
                </li>
            </ul>
            <!-- <router-view></router-view> -->
            <!-- <router-view name="userList"></router-view> -->
        </h1>
    </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      userList: [
        {
          name: 'Alex',
          id: 1
        },
        {
          name: 'Jone',
          id: 2
        },
        {
          name: 'Blake',
          id: 3
        },
        {
          name: 'Hoze',
          id: 4
        },
        {
          name: 'Steve',
          id: 5
        }
      ]
    }
  },
  beforeRouteEnter (to, from, next) {
    // getPost(to.params.id, (err, post) => {
    //   next(vm => vm.setData(err, post))
    // })
    next();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

