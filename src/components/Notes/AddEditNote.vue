<template>
  <div class="card p-4 mb-5" :class="` has-background-${bgColor}`">
    <label v-if="label" class="label has-text-white">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          :value="props.modelValue"
          @input="(event) => emit('update:modelValue', event.target.value)"
          class="textarea"
          :placeholder="placeholder"
          ref="textareaRef"
          v-auto-focus
          maxlength="100"
        />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { vAutoFocus } from '@/directives/vAutoFocus'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: 'success',
  },
  placeholder: {
    type: String,
    default: '...',
  },
  label: {
    type: String,
  },
})

const emit = defineEmits(['update:modelValue'])

const textareaRef = ref(null)

const focusTextArea = () => {
  textareaRef.value.focus()
}

defineExpose({
  focusTextArea,
})
</script>
