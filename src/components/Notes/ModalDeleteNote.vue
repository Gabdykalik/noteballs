<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button class="delete" @click="closeModal()" aria-label="close"></button>
      </header>
      <section class="modal-card-body">Are you sure you want to delete this note?</section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <div class="buttons">
          <button class="button" @click="closeModal()">Cancel</button>
          <button class="button is-danger has-text-white" @click="storeNotes.deleteNote(noteId)">
            Delete
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
import { onMounted, onUnmounted, ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'

const storeNotes = useStoreNotes()

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const closeModal = () => {
  emit('update:modelValue', false)
}

const modalCardRef = ref(null)

onClickOutside(modalCardRef, closeModal)

const handleKeyboard = (e) => {
  if (e.key === 'Escape') closeModal()
}

onMounted(() => {
  document.addEventListener('keyup', handleKeyboard)
})

onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyboard)
})
</script>

<style lang="scss" scoped></style>
