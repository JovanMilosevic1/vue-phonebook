<template>
  <div class="index container">
    <div v-if="loadData">
      <!-- search -->
      <search @search="updateSearch($event)"></search>
      <!-- counter  -->
      <a class="waves-effect waves-light btn right btn-counter">
        <i class="material-icons left">person</i>
        {{numberContact}}
      </a>
      <table>
        <thead>
          <tr> 
            <th>Name</th>
            <th>Last Name</th>
            <th>Number</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <!-- default content -->
        <tbody v-if="search == ''">
          <tr v-for="contact in sortedContacts" :key="contact.id">
            <td>{{ contact.name | capitalize  }} </td>
            <td>{{ contact.lastName | capitalize }} </td>
            <td>{{ contact.number   }} </td>
            <td>
              <i class="material-icons delete-icon" @click=" deleteContact(contact.id)"> delete </i>
            </td>
            <td> 
              <router-link :to="{ name: 'EditContact', params: {id: contact.id}}">
                <i class="material-icons edit-icon"> edit </i> 
              </router-link> 
            </td>
          </tr>
        </tbody>
        <!-- if something search -->
        <tbody v-else>
          <tr  v-for="contact in filteredContacts" :key="contact.id">
            <td>{{ contact.name | capitalize  }} </td>
            <td>{{ contact.lastName | capitalize }} </td>
            <td>{{ contact.number  }} </td>
            <td>
              <i class="material-icons delete-icon" @click=" deleteContact(contact.id)"> delete </i>
            </td>
            <td> 
              <router-link :to="{ name: 'EditContact', params: {id: contact.id}}">
                <i class="material-icons edit-icon"> edit </i> 
              </router-link> 
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <spinner></spinner>
    </div>
    <!-- scroll top -->
    <scroll-top></scroll-top>
    <Footer></Footer>
    
  </div>
</template>

<script>
import dataBase from "../firebase/init"
import Search from "./Search"
import ScrollTop from "./ScrollTop"
import Spinner from './Spinner'
import Footer from './Footer'

export default {
  name: "Index",
  components: {
    Search,
    ScrollTop,
    Spinner,
    Footer
  },
  data() {
    return {
      contacts: [],
      search:'',
      loadData : false
    }
  },
  methods: {
    // notification, remove from firestore, update UI
    deleteContact(id) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#008080',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if (result.value) {
            this.$swal({
              position: 'center',
              type: 'success',
              title: 'Your contact has deleted',
              showConfirmButton: false,
              timer: 800
            })
            // after press yes
            // remove document from firestore.
            dataBase.collection('contacts').doc(id)
            .delete()
            // after remove in firestore, remove UI.
            .then(() => {
              this.contacts = this.contacts.filter(contact => {
                return contact.id != id
              })
            });
          }
        }) 
    },
    updateSearch(searchVal) {
      this.search = searchVal
    }
  },
  
  // fetch data from firestore
  created() {
    dataBase.collection('contacts').get()
    .then(snapshot => {
      snapshot.forEach(document => {
        let contacts = document.data()
        // add id from fb to local contacts 
        contacts.id = document.id
        // console.log(contacts)
        this.contacts.push(contacts)
        this.loadData = true
      })
    })
  },
  
  computed: {
    filteredContacts() {
      return this.contacts.filter((contact)=>{
        return contact.name.match(this.search)
      });
    },
    numberContact() {
      if(this.search == '') {
        return this.contacts.length
      }
      else {
        return this.filteredContacts.length
      }
    },
    sortedContacts() {
      // same contacts array from data
      let contacts = this.contacts.slice()
      let newContacts = contacts.sort((a,b) => {
      if(a.name > b.name) return 1;
        else if(b.name > a.name) return -1;
        else return 0;
      });
      // new sorted contacts Alphabetically
      return newContacts;
    }
  },

  filters: {
    capitalize (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  i {
    cursor: pointer;
  }
  .index {
    margin-top: 60px;
  }
  .delete-icon {
     color:#ef5350
  }
  .edit-icon {
    color:gray
  }
  input {
    text-transform: capitalize;
  }
  table{
    margin-top:20px;
  }
  .btn-counter {
    margin-top: -10px;
  }
  .edit-icon:hover{
    color: #80cbc4;
  }
  .delete-icon:hover{
    color: #e53935;
  }
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
</style>
