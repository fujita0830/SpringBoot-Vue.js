<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <div>code: {{ code }}</div>
        <div>value: {{ value }}</div>
        <v-btn color="info" v-on:click="callSampleWebapi"
          >クリックすると、Javaで設定したデータを取得します！</v-btn
        >
        <v-btn color="info" @click="$router.push('/routerTest')"
          >Vue_Routerの遷移テスト！</v-btn
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      code: "(空)",
      value: "(空)"
    };
  },
  methods: {
    callSampleWebapi: async function() {
      try {
        const response = await axios.post("/webapi/sample");
        this.$set(this, "code", response.data.code);
        this.$set(this, "value", response.data.value);
      } catch (err) {
        alert(err);
      }
    }
  }
};
</script>

<style></style>
