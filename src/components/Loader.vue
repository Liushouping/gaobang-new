<!-- FontLoader.vue -->
<template>
    <Transition name="fade">
      <div v-if="isLoading" class="loading-overlay">
        <!-- -->
      </div>
    </Transition>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const isLoading = ref(true)
  
  onMounted(() => {
    // 使用 Font Loading API 檢測字體載入
    document.fonts.ready.then(() => {
      // 給予一個小延遲讓動畫更順暢
      setTimeout(() => {
        isLoading.value = false
      }, 500)
    })
  })
  </script>
  
  <style scoped>
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    animation: gradientRotate 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    background: linear-gradient(90deg, #FF4E50 10%, #F9D423 90%);
  }
  
  
@keyframes gradientRotate {
  0% {
    background: linear-gradient(90deg, #FF4E50 10%, #F9D423 90%);
  }
  5% {
    background: linear-gradient(85.5deg, #FF4E50 10%, #F9D423 90%);
  }
  10% {
    background: linear-gradient(81deg, #FF4E50 10%, #F9D423 90%);
  }
  15% {
    background: linear-gradient(76.5deg, #FF4E50 10%, #F9D423 90%);
  }
  20% {
    background: linear-gradient(72deg, #FF4E50 10%, #F9D423 90%);
  }
  25% {
    background: linear-gradient(67.5deg, #FF4E50 10%, #F9D423 90%);
  }
  30% {
    background: linear-gradient(63deg, #FF4E50 10%, #F9D423 90%);
  }
  35% {
    background: linear-gradient(58.5deg, #FF4E50 10%, #F9D423 90%);
  }
  40% {
    background: linear-gradient(54deg, #FF4E50 10%, #F9D423 90%);
  }
  45% {
    background: linear-gradient(49.5deg, #FF4E50 10%, #F9D423 90%);
  }
  50% {
    background: linear-gradient(45deg, #FF4E50 10%, #F9D423 90%);
  }
  55% {
    background: linear-gradient(40.5deg, #FF4E50 10%, #F9D423 90%);
  }
  60% {
    background: linear-gradient(36deg, #FF4E50 10%, #F9D423 90%);
  }
  65% {
    background: linear-gradient(31.5deg, #FF4E50 10%, #F9D423 90%);
  }
  70% {
    background: linear-gradient(27deg, #FF4E50 10%, #F9D423 90%);
  }
  75% {
    background: linear-gradient(22.5deg, #FF4E50 10%, #F9D423 90%);
  }
  80% {
    background: linear-gradient(18deg, #FF4E50 10%, #F9D423 90%);
  }
  85% {
    background: linear-gradient(13.5deg, #FF4E50 10%, #F9D423 90%);
  }
  90% {
    background: linear-gradient(9deg, #FF4E50 10%, #F9D423 90%);
  }
  95% {
    background: linear-gradient(4.5deg, #FF4E50 10%, #F9D423 90%);
  }
  100% {
    background: linear-gradient(0deg, #FF4E50 10%, #F9D423 90%);
  }
}

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>