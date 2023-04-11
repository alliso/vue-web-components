<template>
  <div class="greetings">
    <button @click="log()">Log</button>
  </div>
</template>

<script>
  export default {
    methods: {
  log(){
  console.log("Log")
  }
    }
  }
</script>
