<script setup>
import { ref, onMounted } from "vue";
import { createThree } from "./three/index";
import { createCube } from "./three/loaderModel";

const viewport = ref(null);

onMounted(() => {
  const [scene, animate] = createThree(viewport);
  const cube = createCube();
  scene.add(cube);
  animate();
});
</script>

<template>
  <canvas ref="viewport"></canvas>
</template>

<style scoped></style>
