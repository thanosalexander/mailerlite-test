<template>
  <label :for="field.key">{{ field.title  }}</label>
  <input :id="`text-${field.id}`" class="form-control" type="text" @input.stop.prevent="handleInput" :value="modelValue"/>
</template>

<script>

export default {
  name: "text",

  props: {
    modelValue: String,
    field: Object
  },

  methods: {
    handleInput (e) {
      this.$emit('update:modelValue', e.target.value)
    },
  }
}
</script>

<style scoped>

</style>