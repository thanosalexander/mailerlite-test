<template>
  <div>
    <h1>Create field</h1>
    <form @submit.prevent.stop="store">

      <div class="alert alert-danger" v-if="errors">
        <ul>
          <li v-for="(value, key, index) in validationErrors" :key="index">
            {{value}}
          </li>
        </ul>
      </div>

      <div class="form-group">
        <label for="title">Title</label>
        <input v-model='form.title' id="title" type="text" class="form-control" name="title" placeholder="Insert field's title" autocomplete="off">
      </div>

      <div class="form-group">
        <label for="key">Alias</label>
        <input v-model='form.alias' id="alias" type="text" class="form-control" name="alias" placeholder="Insert field's alias" autocomplete="off">
      </div>

      <div class="form-group">
        <label for="type">Type</label>
        <select v-model='form.type' name="type" id="type" class="form-control">
          <option value="date">Date</option>
          <option value="number">Number</option>
          <option value="string">String</option>
          <option value="boolean">Boolean</option>
          <option value="array">List</option>
        </select>
      </div>

      <div class="form-group" v-if="form.type==='array'">
        <label for="type">Extra</label>


        <div class="text-right my-3">
          <button class="btn btn-sm btn-outline-success" @click.stop.prevent="addToList">Add</button>
        </div>

        <table class="table  table-sm">
          <thead>
          <tr>
            <th>#</th>
            <th>key</th>
            <th>value</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(listItem,index) in form.extra" :key="index">
            <td>
              {{ index +1 }}
            </td>
            <td>
              <input type="text" class="form-control" v-model="form.extra[index].key" >
            </td>

            <td>
              <input type="text" class="form-control" v-model="form.extra[index].value">
            </td>

            <td>
              <button class="btn btn-sm btn-danger" @click.stop.prevent="removeFromList(listItem,index)">
                Remove
              </button>
            </td>

          </tr>
          </tbody>
        </table>
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

export default {
    name: "CreateField",

    data(){
      return {
          form:{
            title:null,
            alias:null,
            type: null,
            extra: null
          },
        errors:null
      }
    },

    computed: {
      validationErrors(){
        let errors = Object.values(this.errors);
        errors = errors.flat();
        return errors;
      }
    },

    methods:{

      addToList(){
        if(this.form.extra===null) this.form.extra = [];
        this.form.extra.push({
          key:null,
          value:null
        })
      },

      removeFromList(listItem,index){
        this.form.extra.splice(index,1)
      },

      store(){
          axios.post(process.env.VUE_APP_API_URL + '/fields',this.form)
            .then(()=>{
                this.$router.push('/fields');
            })
              .catch((error)=>{
                if(error.response.status===422){
                  this.errors = error.response.data.data
                }
                else{
                  this.errors = null
                }
              })
      }
    }
}
</script>

<style scoped>

</style>
