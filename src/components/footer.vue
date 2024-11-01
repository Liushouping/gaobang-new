<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>
<template>
    <footer 
    class="fixed bottom-5 w-full flex flex-col justify-center items-center">
        <div 
        class="flex flex-col justify-center items-center">
        <a 
        class="text-white text-[10px] font-GenJyuuGothicRegular" 
        href="mailto:pkbaby0707@gmail.com">Copyright © {{ currentYear }} GAO BANG CREATIVITY All Rights Reserved</a>
        </div>
    </footer>
</template>