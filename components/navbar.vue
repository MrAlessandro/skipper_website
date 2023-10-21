<template>
    <nav class=" z-40 fixed left-0 top-0 right-0 text-primary bg-primary/80 transition-colors" :class="{
        '!bg-primary/0': scrollTop || menuOpen,
        'backdrop-blur-sm': !scrollTop && !menuOpen
    }">
        <div class="container flex justify-end items-center h-16">
            <span @click="menuOpen = !menuOpen" class="text-light">
                <Icon :name="menuIcon" :size="menuIconSize"/>
            </span>
        </div>
    </nav>
    <client-only>
        <Menu :open="menuOpen"></Menu>
        <template #fallback>
            <span></span>
        </template>
    </client-only>

</template>

<script setup lang="ts">
import {onMounted} from "vue";
import Menu from "~/components/menu.vue";

const scrollTop = ref<boolean>(true);
const menuOpen = ref<boolean>(false);
const menuIcon = computed(() => menuOpen.value ? 'fluent-mdl2:chrome-close' : 'fluent-mdl2:list-mirrored');
const menuIconSize = computed(() => menuOpen.value ? '1.85rem' : '2.2rem');

onMounted(() => {
    window.addEventListener('scroll', () => {
        scrollTop.value = window.scrollY == 0;
    });
})

</script>

<style scoped>


</style>
