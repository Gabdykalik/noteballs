<template>
  <AddEditNote
    v-model="noteContent"
    bgColor="link"
    placeholder="Edit note"
    label="Edit note"
    ref="addEditNoteRef"
  >
    <template #buttons>
      <button class="button is-link is-light mr-2" @click="$router.back()">Cancel</button>
      <button
        @click="handleSaveClicked"
        class="button is-link has-background-link"
        :disabled="!noteContent"
      >
        Save Note
      </button>
    </template>
  </AddEditNote>
</template>

<script setup>
import { useStoreNotes } from '@/stores/storeNotes'
import { useRoute, useRouter } from 'vue-router'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { ref } from 'vue'

const storeNotes = useStoreNotes()
const route = useRoute()
const router = useRouter()

const noteContent = ref('')
noteContent.value = storeNotes.getNoteContent(route.params.id)

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value)
  router.push('/')
}
</script>
