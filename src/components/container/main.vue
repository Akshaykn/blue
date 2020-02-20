<template>
    <div :class="[`${name}`]">
        <div :class="[`${name}__header`]">
        <ak-header> </ak-header>
        </div>
        <div :class="[`${name}__container`]">
        </div>
         <div :class="[`${name}__footer`]">
        <ak-footer> </ak-footer>
        </div>
    </div>
</template>

<script>
import header from './header';
import footer from './footer';
export default {
  name: 'main',
  data() {
    return {
     name:'main',
    };
  },
  components:{
    'ak-header':header,
    'ak-footer':footer,
  }
}
</script>
<style scoped>
  .main{
    display:flex;
    flex-direction: column;
    
  }
  .main__header{
      align-items: flex-start;
    }
    .main__footer{
      align-items: flex-end;
    }
    .main__container{
      flex:75vh;
    }
</style>
