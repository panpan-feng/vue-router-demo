<template>
  <div class="">
    <header>
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/about/5">About</router-link> -->
      <button @click="replace">replace</button>
      <button @click="goAbout">查看关于</button>
      <router-link to="/video">Video</router-link>
    </header>
    <router-view />
    <footer>底部UI</footer>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    goAbout() {
      this.$router.push({ name: "About", params: { id: 1 } });
    },
    replace(){
      this.$router.replace('/home');
    }
  },
};
</script>

<style scoped></style>
