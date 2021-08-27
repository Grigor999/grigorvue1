<template>
  <div>
    <h1>Hey {{ name }}</h1>
    <child-component />
  </div>
</template>
import ChildComponent from "./ChildComponent";
<script>

export default {
    component :{ChildComponent},
    data(){
        return{
            name: "Grigor"
        }
    }

}
</script>

<style scoped >

</style>