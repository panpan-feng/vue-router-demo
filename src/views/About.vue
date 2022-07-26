<template>
  <div class="">this is a page of about !{{ $route.params.id }}{{ id }}</div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    id: {
      type: String,
      default: "",
      require: true,
    },
  },
  data() {
    return {
    };
  },
  mounted() {
    console.log(this.$route.params);
  },
  methods: {},
};
</script>

<style scoped></style>
