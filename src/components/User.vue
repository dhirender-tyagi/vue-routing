<template>
    <div>
        <h1>
            Children {{$route.params.id}}.
            <button @click="goBack">Back</button>
        </h1>
    </div>
</template>

<script>
export default {
  name: 'UserDetails',
  methods: {
      goBack: function() {
        //   this.$router.go(-1);
        //   this.$router.back();
        //   this.$router.push('/');
        //   this.$router.push({});
      }
  }
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