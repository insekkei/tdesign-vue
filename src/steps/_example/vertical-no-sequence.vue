<template>
  <t-space class="justify-around">
    <t-steps layout="vertical" theme="dot" :current="1" readonly>
      <t-step-item title="已完成的步骤" content="这里是提示文字"></t-step-item>
      <t-step-item title="进行中的步骤" content="这里是提示文字"></t-step-item>
      <t-step-item title="未进行的步骤" content="这里是提示文字"></t-step-item>
      <t-step-item title="未进行的步骤" content="这里是提示文字"></t-step-item>
    </t-steps>

    <t-steps layout="vertical" sequence="reverse" theme="dot" :current="1" readonly>
      <t-step-item title="已完成的步骤" content="这里是提示文字"></t-step-item>
      <t-step-item title="进行中的步骤" content="这里是提示文字"></t-step-item>
      <t-step-item title="未进行的步骤" content="这里是提示文字"></t-step-item>
      <t-step-item title="未进行的步骤" content="这里是提示文字"></t-step-item>
    </t-steps>
  </t-space>
</template>
<style scoped>
.justify-around {
  justify-content: space-around;
}
</style>
