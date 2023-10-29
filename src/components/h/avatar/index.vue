<template>
    <div class="avatar">
        <img :src="props.src" :alt="props.alt" />
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

enum Size {
    small = 24,
    default = 40,
    large = 56
}
enum Shape {
    circle = 'circle',
    square = 'square'
}
type AvatarProps = {
    src: string;
    size?: string | number;
    shape?: 'circle' | 'square';
    alt?: string;
};

const props = withDefaults(defineProps<AvatarProps>(), {
    shape: Shape.circle,
    size: 'default'
});
const size = computed(() => {
    return Size[props.size] || props.size;
});

const radius = computed(() => {
    const { circle, square } = Shape;
    let value = '';
    switch (props.shape) {
        case circle:
            value = '50%';
            break;
        case square:
            value = '8px';
            break;
        default:
            break;
    }
    return value;
});
</script>

<style scoped lang="less">
.avatar {
    --size: v-bind(size + 'px');
    width: var(--size);
    height: var(--size);
    border-radius: v-bind(radius);
    background-color: #2a2a2a;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
