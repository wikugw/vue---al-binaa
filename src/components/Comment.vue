<template>
    <div class="comment__card">
        <h4 class="comment__email">By: {{comment.email}}, {{moment(comment.created_at).startOf('minute').fromNow()}}</h4>
        <span>
            {{comment.comment}}
        </span>
    </div>
</template>

<script>
var moment = require('moment');

export default {
    props: ['comment'],
    data() {
        return {
            moment : moment
        }
    },
    computed: {
    date (created_at) {
      return  moment(created_at).format('MMM Do');
    }
  }
}
</script>

<style scoped>
.comment__card{
    border-radius: 10px;
    margin: 0 40px;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 20px;
    background-color: #DCDCDC;    
}

.comment__email {
    margin: 0;
    margin-bottom: 10px;
}
</style>