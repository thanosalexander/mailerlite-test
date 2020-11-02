<template>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" :id="`boolean-${field.id}`" :checked="modelValue" @change="changeValue">
    <label :for="`boolean-${field.id}`">{{ field.title }}</label>
  </div>
</template>

<script>

export default {
  name: "boolean",

  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    field: Object
  },

  methods: {
    changeValue() {
      this.$emit('update:modelValue', document.getElementById(`boolean-${this.field.id}`).checked)
    },
  }
}
</script>

<style scoped>

</style>