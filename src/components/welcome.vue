<template>
   <div> Welcome Myinfo loading... </div> 
</template>
<style scoped>
  div{
      width:100%;
      background: #333;
      height: 100vh;
      text-align: center;
      color:white;
      font-size: 16px;
      font-weight:600; 
  } 
</style>
<script>
export default {
    mounted() {
       setTimeout(()=>{
          this.$router.push('/main');   
       },5000); 
    }
}
</script>