<template>
  <div >

    <h1>Show subscriber</h1>

    <dl v-if="subscriber">

      <dt>Name</dt>
      <dd>{{ getFieldValue('name') }}</dd>

      <dt>Email</dt>
      <dd>{{ getFieldValue('email') }}</dd>

      <dt>Address</dt>
      <dd>{{ getFieldValue('address') }}</dd>

      <dt>State</dt>
      <dd>{{ getFieldValue('state') }}</dd>


    </dl>

    <router-link v-if="subscriber" class="btn btn-primary" :to="`/subscribers/edit/${subscriber.id}`" tag="button">Edit</router-link>

  </div>
</template>

<script>
import axios from "axios";
import collect from "collect.js";

export default {
    name: "Subscriber",

    data(){
      return {
        subscriber:null
      }
    },

    mounted() {
      axios.get(process.env.VUE_APP_API_URL + '/subscribers/' + this.$route.params.id)
          .then((response)=>{
              this.subscriber = response.data.data
          })
    },

  computed:{
    getExtraFields(){
      return collect(this.subscriber.fields).whereNotIn('alias',[
        'name',
        'email',
        'address',
        'state',
      ])
    }
  },

  methods:{

    getFieldValue(field){
      let foundField = collect(this.subscriber.fields).firstWhere('alias',field);
      let value;
      if(foundField.type==='array'){
        value = collect(foundField.extra).firstWhere('key',foundField.value).value
      }
      else{
        value = foundField.value
      }

      return value!=="" || value ? value : '-'
    },

  }
}
</script>

<style scoped>

</style>
