<template>
  <label class="v-checkbox">
    <div class="v-checkbox__block"
      :class="{ 'v-checkbox_checked': checked }">
      <CheckboxSvg v-if="checked" />
      <input v-model="value" type="checkbox"
        class="v-checkbox__input" />
    </div>
    <span>
      <slot />
    </span>
  </label>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue?: any
}>();
const emit = defineEmits(["update:modelValue"]);
const value = computed({
  get: () => props.modelValue,
  set: (v) => emit("update:modelValue", v),
});

const checked = computed(() => {
  return value.value;
});
</script>

<style lang="scss" scoped>
.v-checkbox {
  display: flex;
  gap: 10px;
  color: rgba(44, 44, 44, 0.8);
  cursor: pointer;
  align-items: flex-start;

  @include atMd {
    font-size: 14px;
  }

  &__block {
    min-width: 24px;
    height: 24px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: #fff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &_checked {
    background: $additional;
  }

  // .v-checkbox__input
  &__input {
    width: 24px;
    height: 24px;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
  }
}
</style>
