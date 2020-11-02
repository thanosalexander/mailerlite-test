<template>
  <label :for="field.id">{{ field.title  }}</label>
  <select :id="`select-${field.id}`" class="form-control" type="text" @change="changeValue">
    <option value=""></option>
    <option v-for="(item,index) in field.extra" :selected="item.key === modelValue" :value="item.key" :key="index">{{ item.value}}</option>
  </select>
</template>

<script>

export default {
  name: "select",

  props: {
    modelValue: String,
    field: Object
  },

  methods: {
    changeValue() {
      this.$emit('update:modelValue', document.getElementById(`select-${this.field.id}`).value)
    },

  }
}
</script>

<style scoped>

</style>