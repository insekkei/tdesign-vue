<template>
  <div class="tdesign-tree-demo">
    <h3>render:</h3>
    <t-tree :data="items" expand-all :label="label"></t-tree>
    <h3>scope slot:</h3>
    <t-tree :data="items" expand-all checkable>
      <template #label="{ node }">
        <font color="blue">label: {{ node.label }}, value: {{ node.value }}</font>
      </template>
    </t-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: '1',
          children: [
            {
              label: '1.1',
            },
            {
              label: '1.2',
            },
          ],
        },
        {
          label: '2',
          children: [
            {
              label: '2.1',
            },
            {
              label: '2.2',
            },
          ],
        },
      ],
      label(createElement, node) {
        return createElement('strong', {
          domProps: {
            innerHTML: `value: ${node.value}, label: ${node.label}`,
          },
        });
      },
    };
  },
};
</script>

<style>
.tdesign-tree-demo .t-tree {
  margin-bottom: 20px;
}
.tdesign-tree-demo .title {
  margin-bottom: 10px;
}
.tdesign-tree-demo .tips {
  margin-bottom: 10px;
}
.tdesign-tree-demo .operations {
  margin-bottom: 10px;
}
.tdesign-tree-demo .t-form__item {
  margin-bottom: 5px;
}
.tdesign-tree-demo .t-button {
  margin: 0 10px 10px 0;
}
</style>
