<template>
    <div class="space">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
type SpaceProps = {
    size: number;
}
const props = withDefaults(defineProps<SpaceProps>(), {
    size: 10
});
const size = computed(()=>{
    return props.size + 'px'
})
</script>

<style scoped lang="less">
.space {
    display: flex;
    gap: v-bind(size);
}
</style>
