<template>
  <div>
    <h1>Edit subscriber</h1>
    <form @submit.prevent.stop="store">

      <div class="alert alert-danger" v-if="errors">
        <h5 v-if="errorMessage">{{ errorMessage}}</h5>
        <ul>
          <li v-for="(value, key, index) in validationErrors" :key="index">
            {{value}}
          </li>
        </ul>
      </div>

      <div class="form-group" v-for="field in fields" :key="field.id">
        <component :is="currentFieldComponent(field)" :field="field" v-model="form.fields[field.alias].value"></component>
      </div>


      <div class="form-group">
        <button class="btn btn-success" type="submit">
          Save
        </button>
      </div>

    </form>
  </div>
</template>

<script>

import axios from 'axios'
import {  defineAsyncComponent } from 'vue'
import collect from 'collect.js'

export default {
  name: "EditSubscriber",


  data(){
    return {
      fields:[],
      form:{
        id:null,
        fields:[]
      },
      errors:null,
      errorMessage:null,
    }
  },

  mounted() {
    this.getFields()
      .then(()=>this.getSubscriber())
      .then((subscriber)=>{
        this.form.id = subscriber.id
        Array.from(subscriber.fields).forEach((field)=>{
          const formField = collect(this.form.fields).firstWhere('alias',field.alias)
          if(formField){

            let value
            switch(field.type){
              case 'boolean':
                value = !field.value ? false : field.value
                break;
              default:
                value = field.value
            }


            formField.value = value
            formField.subscriber_field_id= field.subscriber_field_id
          }
        })
      })
  },

  computed: {
    validationErrors(){
      if(!this.errors) return [];
      let errors = Object.values(this.errors);
      errors = errors.flat();
      return errors;
    },
  },

  methods:{

    getFields(){
      return new Promise((resolve,reject)=>{
        axios.get(process.env.VUE_APP_API_URL + '/fields')
            .then((response)=>{
              let fields = {}

              Array.from(response.data.data).forEach((field)=>{
                this.fields.push(field)

                fields[field.alias]={
                  id:field.id,
                  alias:field.alias,
                  value: field.type === 'boolean' ? false : null,
                }
              })

              this.form.fields = fields

              resolve()
            })
            .catch((e)=>{
              reject(e)
            })

      })
    },

    getSubscriber(){
      return new Promise((resolve,reject)=>{

        axios.get(process.env.VUE_APP_API_URL + '/subscribers/' + this.$route.params.id)
            .then((response)=>{
              resolve(response.data.data)
            })
            .catch((e)=>{
              reject(e)
            })
      })
    },


    store(){
      axios.put(process.env.VUE_APP_API_URL + '/subscribers/' + this.form.id,this.form)
          .then(()=>{
            this.$router.push('/subscribers');
          })
          .catch((error)=>{

            if(error.response.status===422){
              this.errors = error.response.data.data
              this.errorMessage = error.response.data.message
            }
            else{
              this.errors = null
              this.errorMessage = null
            }
          })
    },


    currentFieldComponent(field){

      let component
      switch (field.type) {
        case 'boolean':
          component = 'boolean';
          break;
        case 'array':
          component = 'select';
          break;
        case 'date':
        case 'number':
        case 'string':
        default:
          component = 'text';
      }

      return defineAsyncComponent(() =>
          import('../../components/' + component + '.vue')
      )
    }
  }

}
</script>

<style scoped>

</style>
