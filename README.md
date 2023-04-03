views --> page


components --> moudle

topbar --> 切换插件

To monitor page position in Vue 3, you can use the ref function to create a reference to the element whose position you want to monitor. Then, you can use the onMounted() function to run a function when the component is mounted to the DOM. Within that function, you can use the getBoundingClientRect() method to get the element's position relative to the viewport. This method returns an object with properties for the element's top, bottom, left, right, width, and height.
You can then update a reactive variable with the element's position, using the watchEffect() function to automatically update the variable when the position changes.
Here's an example:
<template>
  <div ref="myElement">My Element</div>
</template>

<script>
import { ref, onMounted, watchEffect } from 'vue';

export default {
  setup() {
    const myElement = ref(null);
    const position = ref({});

    onMounted(() => {
      position
