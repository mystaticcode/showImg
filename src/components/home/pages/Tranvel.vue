<template>
    <div class="tanvel">
        <Tranvel_list></Tranvel_list>
    </div>
</template>



<script>
import Tranvel_list from './Tranvel_list.vue'
export default {
    name : 'Tranvel',
    components:{
        Tranvel_list,
    }
}
</script>

<style scoped>
   .tanvel{
       padding-bottom: 2rem;
   }
</style>

