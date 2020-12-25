<template>
    <div class="feedback">
        <div class="reaction">
            <h4 >What's your opinion about this story?</h4>
            <div class="reaction__container">
                <div class="reaction__placholder">
                    <a href="#" @click.prevent="handleHappyReaction">
                        <font-awesome-icon :icon="['fas', 'smile']" />
                    </a>
                    <p>{{happyTotal}} total</p>
                </div>
                <div class="reaction__placholder">
                    <a href="#" @click.prevent="handleSadReaction">
                        <font-awesome-icon :icon="['fas', 'frown']" /></a>
                    <p>{{sadTotal}} total</p>
                </div>
            </div>
        </div>
        <div class="comment-input__placeholder">
            <h4>Write your thought</h4>
            <form @submit="submitComment">

                <p v-if="errors.length">
                    <ul>
                        <li v-for="(error, index) in errors" class="error-text" :key="index">{{ error }}</li>
                    </ul>
                </p>
                <input class="comment__input-email" type="email" v-model="email" placeholder="Email">
                <textarea class="comment__input-text" rows="4" v-model="comment" ></textarea>
                <button type="submit" class="comment__input-button">Submit comment</button>
            </form>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios';
export default {
    props : ['cerita'],
    data(){
        return{
            email: '',
            comment: '',
            errors: [],
            happyTotal: this.cerita.happy_reaction_count,
            sadTotal: this.cerita.sad_reaction_count,
        }
    },
    methods: {
        submitComment(e){
             if (this.email && this.comment) {
                let data = {
                    'cerita_id' : this.cerita.id,
                    'email' : this.email,
                    'comment' : this.comment
                };
                this.$emit('sendcomment', data);
                this.email = '';
                this.comment = '';
                this.errors= [];
            } else {
                 this.errors = [];

                if (!this.email) {
                    this.errors.push('Name required.');
                }
                if (!this.comment) {
                    this.errors.push('Comment required.');
                } 
            }
            e.preventDefault();
        },
        handleHappyReaction(){
            axios.get(`http://127.0.0.1:8000/api/cerita/${this.cerita.id}/happy-reaction`)
                .then(res => {
                    this.happyTotal = res.data.happy_reaction_count;
            });
        },
        handleSadReaction(){
                axios.get(`http://127.0.0.1:8000/api/cerita/${this.cerita.id}/sad-reaction`)
                .then(res => {
                    this.sadTotal = res.data.sad_reaction_count;
            });    
        }
    }
}
</script>

<style scoped>
.feedback{
    margin-left:40px;
    margin-right:40px;
    display: flex;
}

.reaction {
    width: 50%;
}

.reaction__container{
    display: flex;
}

.reaction__placholder{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.svg-inline--fa {
    font-size: 30px;
    color: grey;
}

.svg-inline--fa:hover {
    color: black;
}

.comment-input__placeholder {
    width: 50%;
}

.error-text{
    color: red;
}

.comment__input-email{
    width: 95%;
    margin-bottom: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
}
.comment__input-text{
    width: 95%;
    margin-bottom: 5px;
}
.comment__input-button{
    width: 97%;
    margin-bottom: 5px;
    background-color: black;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    border-color: black;
}
.comment__input-button:hover{
    cursor: pointer;
}
</style>