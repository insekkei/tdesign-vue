<template>
  <t-time-picker v-model="value" @change="timechange" @open="open" @close="close" />
</template>

<script>
export default {
  name: 'hms',
  data() {
    return {
      value: '12:20:30',
    };
  },
  methods: {
    timechange(time) {
      console.log(time);
    },
    open() {
      console.log('open');
    },
    close() {
      console.log('close');
    },
  },
};
</script>
