<template>
    <div :class="{'hidden': !scrollTop}">
        <Icon name="fluent-mdl2:chrome-back-mirrored" class="text-3xl md:text-4xl rotate-90 animate-swing"/>
    </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";

const scrollTop = ref<boolean>(true);

onMounted(() => {
    window.addEventListener('scroll', () => {
        scrollTop.value = window.scrollY == 0;
    });
})
</script>

<style scoped>
.animate-swing {
    animation: spin 1s alternate infinite;
}

@keyframes spin {
    from {
        transform: rotate(90deg) translateX(0);
    }
    to {
        transform: rotate(90deg) translateX(-1rem);
    }
}
</style>
