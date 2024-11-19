<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
      <div class="columns is-mobile has-text-grey-light mt-2">
        <small class="column">{{ dateFormatted }}</small>
        <small class="column has-text-right">{{ characterLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${note.id}`" href="#" class="card-footer-item">Edit</RouterLink>
      <a href="#" @click.prevent="modals.deleteNote = true" class="card-footer-item">Delete</a>
    </footer>
    <ModalDeleteNote
      v-if="modals.deleteNote == true"
      v-model="modals.deleteNote"
      :noteId="note.id"
    />
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useDateFormat } from '@vueuse/core'
import ModalDeleteNote from './ModalDeleteNote.vue'

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
})

const dateFormatted = computed(() => {
  let date = new Date(parseInt(props.note.date))
  return useDateFormat(date, 'DD-MM-YYYY @ HH:mm')
})

const characterLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ? 'characters' : 'character'
  return `${length} ${description}`
})

const modals = reactive({
  deleteNote: false,
})

// const emit = defineEmits(['deleteClicked'])

// const handleDeleteClicked = () => {
//   emit('deleteClicked', props.note.id)
// }
</script>
