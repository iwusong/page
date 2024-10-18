<script setup>
import { ref } from 'vue'
import { add, list } from '@/api/index.js'
import { showDialog, showToast } from 'vant'

let msg = ref('')

function increased_activities(user, des) {
  add(user, des).then(x => {
    console.log(x)
    if (x.success) {
      showToast({
        message: 'asd',
        position: 'top',
        className:"toas"
      })
    }
  })
}

function list_activities(user) {
  list(user).then(
    x => {
      console.log(x)
      showDialog({ message: x.toString() })
    }
  )
}

</script>

<template>
  <main>

  </main>
</template>
<style scoped></style>
