<script setup>
import { list } from '@/api/index.js'
import { ref } from 'vue'

let data = ref([])
list('user').then((x) => {
  console.log(x)
  data.value = x
})
</script>

<template>
  <div class="h-15/100 shadow-md rounded">
    <div class="h-10/100"></div>
    <div class="h-50/100 flex items-center justify-between">
      <div class="ml-4 text-3xl font-bold font-sans">Ar</div>
      <van-icon class="mr-4" name="setting-o" size="2rem" />
    </div>
    <div class="h-40/100 flex flex-nowrap overflow-x-auto noscroll">
      <div class="flex-shrink-0" v-for="i in 19">
        <van-button
          icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"
          class="mx-1"
          color="#fff"
          round
          size="small"
          type="success"
        >
          <span class="text-black font-bold">锻炼 </span>
        </van-button>
      </div>
    </div>
    <!--    <div class="h-10/100"></div>-->
  </div>

  <div class="h-85/100 flex">
    <div class="w-10/12 h-full overflow-y-scroll">
      <div v-for="i in data" :key="i.id" class="bg-white h-20 m-3 mr-2 rounded-2xl shadow">
        {{ i }}
      </div>
    </div>
    <div class="w-2/12 p-1 flex flex-col justify-between">
      <div class="flex flex-col items-center">
        <div>23年</div>
        <div>9月</div>
        <div>6日</div>
      </div>
      <div class="h-20/100">
        <div class="shadow-md rounded-full w-12">
          <van-icon name="add-o" size="3rem" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.noscroll {
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}

.noscroll::-webkit-scrollbar {
  display: none;
}
</style>
