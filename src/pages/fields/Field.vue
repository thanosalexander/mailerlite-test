<template>
  <div >

    <h1>Show field</h1>

    <dl v-if="field">

      <dt>Title</dt>
      <dd>{{field.title}}</dd>

      <dt>Alias</dt>
      <dd>{{field.alias}}</dd>

      <dt>Type</dt>
      <dd>{{field.type}}</dd>

    </dl>

    <router-link v-if="field" class="btn btn-primary" :to="`/fields/edit/${field.id}`" tag="button">Edit</router-link>

  </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Field",

    data(){
      return {
        field:null
      }
    },

    mounted() {
      axios.get(process.env.VUE_APP_API_URL + '/fields/' + this.$route.params.id)
          .then((response)=>{
              this.field = response.data.data
          })
    }
}
</script>

<style scoped>

</style>
