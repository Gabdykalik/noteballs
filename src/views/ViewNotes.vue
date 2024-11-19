<template>
  <div class="notes">
    <AddEditNote v-model="newNote" placeholder="Add note" ref="addEditNoteRef">
      <template #buttons>
        <button
          :disabled="!newNote"
          @click="addNote()"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>
    <progress v-if="!storeNotes.notesLoaded" class="progress is-large is-success" max="100" />
    <template v-else>
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
      <div
        v-if="!storeNotes.notes.length"
        class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
      >
        No notes here yet...
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { useWatchCharacters } from '@/use/useWatchCharacters'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

const storeNotes = useStoreNotes()

const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextArea()
}

useWatchCharacters(newNote)
</script>

<style></style>
