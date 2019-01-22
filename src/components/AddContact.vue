<template>
    <div class="add-contact container">
        <h4 class="center-align ">Add New Contact</h4>
            <!-- Arrow for back -->
        <span @click="goBack">
            <transition name="slide" appear>
                <i class="material-icons" v-if="show">arrow_back </i>
            </transition>
        </span>       
        <form @submit.prevent="addContact">
            <!-- Name -->
            <div class="field name">
                <label for="name">Name:</label>
                <input type="text" name="title" v-model="name" :maxlength="max" :minLength="min" required  >
            </div>
             <!-- Last Name  -->
             <div class="field lastName">
                <label for="lastName">Last Name:</label>
                <input type="text" name="lastName" v-model="lastName" :maxlength="max" :minLength="min">
            </div>
            <!-- Number -->
            <div class="field number">
                <label for="number">Number:</label>
                <input type="number" name="number" v-model="number"  required> 
            </div>
            <div class="field center-align">
                <button class="waves-effect waves-light btn">Add Contact</button>
            </div>
        </form>
    </div>
</template>
<script>
import dataBase from '../firebase/init'

export default {
    name: 'AddContact',
    data() {
        return {
            name: null,
            lastName: null,
            // max and min length (name, last name)
            max: 15,
            min:2,
            number: null,
            show:true
        }
    },
   
    methods: {
        addContact() {
            if((this.name && this.number) || (this.lastName && this.number)) {
                this.feedback = null
                dataBase.collection('contacts').add({
                    name: this.name,
                    lastName: this.lastName,
                    // current solution for max number 
                    number: this.number.substr(0,14)
                }).then(() => {
                    this.$router.push({name:'Index'})
                }).catch(error => {
                    // console.log(error)
                })
            }
            else {
                this.feedback = 'You must enter a Name or Last Name and Number'
            }
        },
        resetInput() {
            this.name = null,
            this.lastName = null,
            this.number = null
        },
        goBack() {
            this.$router.push({ name: 'Index' })
        }
    }
}
</script>
<style scoped>
    .add-contact{
        margin-top: 20px;
        padding: 20px;
    }
    .field{
        margin-top: 25px;
    }
    .number {
        position: relative;
    }
    .number a {
        position: absolute;
        right: auto;
    }
    .number a i {
        color:teal
    }
    h3 {
        color:#1e1e1f;
    }
    i {
        cursor: pointer;
    }

    .slide-enter {
        opacity: 0;
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }
    @keyframes slide-in {
        from {
            transform: translateX(-60px);
        }
        to {
            transform: translateX(0);
        }
    }
</style>
