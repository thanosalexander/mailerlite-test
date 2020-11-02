<template>

  <h1>Fields</h1>

  <div class="text-right my-3">
    <router-link class="btn btn-outline-success" to="/fields/create" tag="a">Create field</router-link>
  </div>

  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Alias</th>
        <th>Type</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(field,index) in fields" :key="field.id">
        <td>{{ field.id }}</td>
        <td>{{ field.title }}</td>
        <td>{{ field.alias }}</td>
        <td>{{ field.type }}</td>
        <td>
          <div class="btn-group btn-group-sm" role="group" aria-label="Actions">
            <router-link class="btn btn-info" :to="`/fields/${field.id}`" tag="button">View</router-link>
            <router-link class="btn btn-primary" :to="`/fields/edit/${field.id}`" tag="button">Edit</router-link>
            <button type="button" class="btn btn-danger" @click.stop.prevent="destroy(index,field.id)">Delete</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "Fields.vue",

  mounted() {

    axios.get(process.env.VUE_APP_API_URL + '/fields')
        .then(response => {
          if(response.data.status === 'success'){
            this.fields = response.data.data
          }
        })
  },

  data() {
    return {
      fields:[]
    }
  },

  methods:{
    destroy(index,id){
      axios.delete(process.env.VUE_APP_API_URL + '/fields/'+id)
          .then(() => (
              this.fields.splice(index,1)
          ))
    }
  }
}
</script>

<style scoped>

</style>
