<script setup lang="ts">
import {ref} from 'vue';
import {CounterProps} from './types';

defineProps<CounterProps>();

const count = ref(0);

function increment() {
    count.value++;
}
</script>

<template>
    <button class="border border-green-300 px-1 py-2" :title="tooltip" @click="increment">
        Clicked Vue {{ count }} times.
    </button>
</template>
