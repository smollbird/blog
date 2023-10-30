<template>
    <button :type="props.nativeType" :disabled="props.disabled" class="button" :class="props.type">
        <slot name="loading"></slot>
        <slot name="icon"> </slot>
        <slot name="default"> </slot>
    </button>
</template>

<script setup lang="ts">
import type { Component } from 'vue';

type Props = {
    type: string;
    disabled?: boolean;
    loading?: boolean;
    size: 'small' | 'default' | 'large' | number;
    icon: string | Component;
    nativeType?: 'submit' | 'button' | 'reset';
};
const props = withDefaults(defineProps<Props>(), {
    type: 'primary',
    disabled: false,
    loading: false,
    size: 'small',
    icon: 'like',
    nativeType: 'button'
});
console.log(props);
</script>

<style scoped lang="less">
button {
    border: 1px solid #e3e3e3;
    background-color: transparent;
    border-radius: 4px;
    padding: 0 12px;
    height: 32px;
    text-align: center;
    cursor: pointer;
}
button:hover {
    background-color: #b8d5f93e;
    color: #297fe9;
    border-color: #b8d5f9d0;
}
.primary {
    color: #fff;
    background-color: #297fe9;
    border-color: #297fe9;
}
.primary:hover {
    background-color: #297fe9d6;
    color: #fff;
    border-color: #297fe9d6;
}
</style>
