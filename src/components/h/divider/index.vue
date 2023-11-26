<template>
    <div
        class="divider"
        :class="props.direction"
        :style="{
            '--border-style': props.borderStyle,
            '--bg-color': props.borderStyle === 'none' ? '#dcdfe6' : 'transparent'
        }"
    >
        <div class="content" :class="props.contentPosition">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';
type DividerProps = {
    direction?: 'horizontal' | 'vertical';
    borderStyle?: string;
    contentPosition?: 'left' | 'right' | 'center';
};

const props = withDefaults(defineProps<DividerProps>(), {
    direction: 'horizontal',
    contentPosition: 'left',
    borderStyle: 'none'
});
console.log(props, 'props');
</script>

<style scoped lang="less">
.divider {
    --border-style: solid;
    --bg-color: #dcdfe6;
    position: relative;
    background-color: var(--bg-color);
    &.horizontal {
        margin: 24px 0;
        width: 100%;
        height: 1px;
        border-top: 1px #dcdfe6 var(--border-style);
    }
    &.vertical {
        margin: 0 1em;
        display: inline-block;
        width: 1px;
        height: 1em;
        border-left: 1px #dcdfe6 var(--border-style);
    }
    .content {
        padding: 0 24px;
        position: absolute;
        top: 0;
        font-size: 15px;
        font-weight: 500;
        color: #272727;
        background-color: #fff;
        &.left {
            left: 20px;
            transform: translate(0, -10px);
        }
        &.center {
            left: 50%;
            transform: translate(-50%, -10px);
        }
        &.right {
            right: 20px;
            transform: translate(0, -10px);
        }
    }
}
</style>
