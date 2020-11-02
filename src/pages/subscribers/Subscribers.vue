<template>

  <h1>Subscribers</h1>

  <div class="text-right my-3">
    <router-link class="btn btn-outline-success" to="/subscribers/create" tag="a">Create subscriber</router-link>
  </div>

  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>State</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(subscriber,index) in subscribers" :key="subscriber.id">
        <td>{{ subscriber.id }}</td>
        <td>{{ getFieldValue('name',index) }}</td>
        <td>{{ getFieldValue('email',index) }}</td>
        <td>{{ getFieldValue('address',index) }}</td>
        <td>{{ getFieldValue('state',index) }}</td>
        <td>
          <div class="btn-group btn-group-sm" role="group" aria-label="Actions">
            <router-link class="btn btn-info" :to="`/subscribers/${subscriber.id}`" tag="button">View</router-link>
            <router-link class="btn btn-primary" :to="`/subscribers/edit/${subscriber.id}`" tag="button">Edit</router-link>
            <button type="button" class="btn btn-danger" @click.stop.prevent="destroy(index,subscriber.id)">Delete</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import axios from 'axios'
import collect from 'collect.js'

export default {
  name: "Subscribers.vue",

  mounted() {

    axios.get(process.env.VUE_APP_API_URL + '/subscribers')
        .then(response => {
          if(response.data.status === 'success'){
            Array.from(response.data.data).forEach((subscriber)=>{
              this.subscribers.push(subscriber)
            })
          }
        })
  },

  data() {
    return {
      subscribers:[]
    }
  },

  methods:{
    destroy(index,id){
      axios.delete(process.env.VUE_APP_API_URL + '/subscribers/'+id)
          .then(() => (
              this.subscribers.splice(index,1)
          ))
    },

    getFieldValue(field,index){
      let foundField = collect(this.subscribers[index].fields).firstWhere('alias',field);

      let value;
      if(foundField){
        if(foundField.type==='array' && foundField.value){
          value = collect(foundField.extra).firstWhere('key',foundField.value).value
        }
        else{
          value = foundField.value
        }
      }



      return value!=="" || value ? value : '-'
    }
  }
}
</script>

<style scoped>

</style>
