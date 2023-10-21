<template>
    <Transition name="slide-fade">
        <div v-if="props.open" class="fixed z-30 w-screen h-screen bg-primary-dark flex flex-col justify-around items-center">
            <NuxtImg src="skipper_icon_light.svg.png"
                     class="h-[80px] absolute top-4 left-1/2 -translate-x-1/2"></NuxtImg>
            <nav>
                <ul class="text-light">
                    <li class="text-3xl md:text-4xl mb-12"><a href="/" class="hover:text-primary-light">Home</a></li>
                    <li class="text-3xl md:text-4xl"><a href="/" class="hover:text-primary-light">Menu</a></li>
                </ul>
            </nav>
        </div>
    </Transition>

</template>

<script setup lang="ts">
const props = defineProps({
    open: {
        type: Boolean,
        required: true,
    }
});

watch(() => props.open, () => {
    document.body.style.position = props.open ? 'fixed' : 'relative';
}, {immediate: true})

</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
}
</style>
