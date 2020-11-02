<template>
  <div>
    <h1>Create subscriber</h1>
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


export default {
    name: "CreateSubscriber",


    data(){
      return {
          fields:[],
          form:{
            fields:[]
          },
          errors:null,
          errorMessage:null,
      }
    },

  mounted() {
    axios.get(process.env.VUE_APP_API_URL + '/fields')
        .then((response)=>{

          let fields = {}

          Array.from(response.data.data).forEach((field)=>{
            this.fields.push(field)

            fields[field.alias]={
              id:field.id,
              alias:field.alias,
              value:null
            }
          })

          this.form.fields = fields
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

      store(){
          axios.post(process.env.VUE_APP_API_URL + '/subscribers',this.form)
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
