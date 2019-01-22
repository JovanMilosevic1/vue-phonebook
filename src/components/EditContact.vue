<template>
    <div class="edit-contact container">
        <h4 class="center-align">Edit Contact</h4>
        <div id="icons">
            <!-- Go to main page -->
            <span @click="goBack" class="left">
                <transition name="slide" appear>
                    <i class="material-icons">arrow_back</i>
                </transition>
            </span> 
            <!-- Clear all input fields -->
            <span @click="resetInput" class="right">
                <transition name="slide2" appear>
                    <i class="material-icons">clear_all</i>
                 </transition>
            </span> 
        </div>
        <div v-if="contact" class="main-form">
            <form @submit.prevent="editContact">
                <!-- Name -->
                <div class="field name">
                    <label for="name">Name:</label>
                    <input type="text" name="title" v-model="contact.name" :maxlength="max" :minLength="min" required>
                </div>
                <!-- Last Name -->
                <div class="field lastName">
                    <label for="lastName">Last Name:</label>
                    <input type="text" name="lastName" v-model="contact.lastName" :maxlength="max" :minLength="min">
                </div>
                <!-- Number -->
                <div class="field number">
                    <label for="number">Number:</label>
                    <input type="number" name="number" v-model="contact.number" :minlength="minNumber" :maxlength="maxNumber" required> 
                </div>
                <!-- Update button -->
                <div class="field center-align">
                    <button class="btn update-contact">Update Contact</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import dataBase from '../firebase/init'
export default {
    data() {
        return {
            // id from url
            id: this.$route.params.id,
            max: 12,
            min: 2,
            maxNumber: 12,
            minNumber: 4,
            contact: null
        }
    },
    created() {
        // get data from fs where id is id send in url
        dataBase.collection('contacts').doc(this.id).get()
        .then(response => {
            this.contact = response.data()
        })
    },
    methods: {
        editContact() {
            // console.log(this.contact.name, this.contact.lastName, this.contact.number)
            dataBase.collection('contacts').doc(this.id).update({
                // set new values in fs
                name: this.contact.name,
                lastName: this.contact.lastName,
                number: this.contact.number
            })
            .then(() => {
                // redirect to Index
                this.$router.push({ name: 'Index' })
            })
        },
        resetInput() {
            this.contact.name = '',
            this.contact.lastName = '',
            this.contact.number = ''
        },
        goBack() {
            this.$router.push({ name: 'Index' })
        }
    }
}
</script>

<style scoped>
    .main-form{
        margin-top:100px;
    }
    i {
        cursor: pointer;
    }
    h3 {
        color:#1e1e1f;
    }
    .update-contact {
        margin-top:25px;
    }
    .edit-contact{
        margin-top: 20px;
        padding: 20px;
    }
    .field{
        margin-top: 25px;
    }
    /*  animation for arrow left */
    .slide-enter {
        opacity: 0;
    }
    .slide-enter-active {
        animation: slide-from-left 1s ease-out forwards;
        transition: opacity .5s;
    }
    @keyframes slide-from-left {
        from {
            transform: translateX(-60px);
        }
        to {
            transform: translateX(0);
        }
    }
    /* animation for reset right */
     .slide2-enter {
        opacity: 0;
    }
    .slide2-enter-active {
        animation: slide-from-right 1s ease-out forwards;
        transition: opacity .5s;
    }
    @keyframes slide-from-right {
        from {
            transform: translateX(60px);
        }
        to {
            transform: translateX(0);
        }
    }
</style>
