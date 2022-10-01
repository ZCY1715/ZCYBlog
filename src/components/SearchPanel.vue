<script setup>
import Close from '../assets/svgs/Close.svg?vueComponent'
import Search from '../assets/svgs/Search.svg?vueComponent'
import { debounce } from '../utils'
import useStore from '../store'
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import CategoryBar from './CategoryBar.vue'
import TagBar from './TagBar.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(["update:modelValue"])

const showPanel = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    searchValue.value = ""
    emit("update:modelValue", value)
  }
})

const router = useRouter()
const toDetail = id => router.push({ name: 'DetailPage', params: { id } })
const route = useRoute()
watch(route, () => showPanel.value = false)


const store = useStore()
const searchValue = ref("")
const postList = ref([])
const isLoading = ref(false)
const debounceSearch = computed(() => {
  return debounce(() => {
    postList.value = store.postSet.searchMdsByKeyword(searchValue.value)
    isLoading.value = false
  }, 1000)
})
watch(searchValue, (now) => {
  if (!now) {
    postList.value = []
    isLoading.value = false
    return
  }
  isLoading.value = true
  debounceSearch.value()
})

onMounted(() => {
  const postNode = document.querySelector("[post-container]")
  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      for (const node of mutation.addedNodes) {
        if (node.getAttribute && node.getAttribute("post-id")) {
          node.innerHTML = node.innerHTML.replace(/(?<=>).*?(?=<)/g, search => {
            if (!search) return ""
            const re = new RegExp(`${searchValue.value}`, "gi")
            return search.replace(re, "<strong style='color: lightgreen'>$&</strong>")
          })
          node.firstChild.addEventListener("click", () => {
            toDetail(node.getAttribute("post-id"))
          })
        }
      }
    })
  })
  observer.observe(postNode, { childList: true })
})

</script>

<template>
  <Teleport to="body">
    <div :class="$style.container" v-show="showPanel">
      <span :class="$style.closeBth">
        <Close @click="() => showPanel = false" />
      </span>
      <div :class="$style.warp">
        <div :class="$style.headTitle">
          需要找点什么呢？
        </div>
        <div :class="$style.searchInput">
          <input v-model="searchValue" />
          <span>
            <Search />
          </span>
        </div>
        <div :class="[$style.searchContent, 'scrollY']" post-container>
          <Loading v-if="isLoading" />
          <div v-else-if="postList.length === 0 && searchValue" :class="$style.noPost">
            暂时没有相关内容~
          </div>
          <div v-else v-for="item of postList" :key="item.id" :post-id="item.id" :class="$style.postItem">
            <div>
              <span>{{ item.title }}</span>
              <span>{{ item.publishTime }}</span>
            </div>
            <CategoryBar :data="item.categories" />
            <TagBar :data="item.tags" />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style module>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  background-color: var(--z-searchPanel-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  animation: showSearch 1s;
}

@keyframes showSearch {
  from {
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
  }

  to {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }
}

.closeBth {
  position: absolute;
  right: 10px;
  top: 10px;
}

.closeBth svg {
  width: 25px;
  height: 25px;
}

.warp {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.headTitle {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.searchInput {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
}

.searchInput>:first-child {
  flex-grow: 1;
  height: 80%;
  display: flex;
  align-items: center;
  border: none;
  outline: 0;
  font-size: 18px;
  caret-color: var(--theme-color);
  border-bottom: 1px solid var(--theme-color);
  background-color: var(--z-searchPanel-background);
  transition: none;
  letter-spacing: 1px;
}

.searchInput>:first-child:focus {
  border-bottom: 2px solid var(--theme-color);
}

.searchInput svg {
  width: 30px;
  height: 30px;
}

.searchContent {
  width: 100%;
  min-height: 300px;
  max-height: calc(100vh - 300px);
  margin-top: 10px;
  padding: 10px;
  margin-left: 10px;
}

.searchContent::-webkit-scrollbar {
  display: none;
}

.noPost {
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

.postItem {
  width: calc(100% - 30px);
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 10px 30px 10px 30px;
  animation: showPostItem 1s;
  border-radius: 5px;
}

@keyframes showPostItem {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (min-width: 800px) {
  .headTitle {
    font-size: 30px;
  }

  .warp {
    width: 70%;
  }

  .postItem {
    box-shadow: var(--z-searchPanel-shadow) 0 0 5px;
  }

  .postItem:hover {
    box-shadow: var(--z-searchPanel-shadow) 0 0 10px;
  }

  .postItem:hover>:first-child * {
    color: var(--theme-color) !important;
  }

  .postItem>:first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    cursor: var(--pointer);
  }

  .postItem>:first-child * {
    cursor: var(--pointer);
  }

  .postItem>:first-child>:first-child {
    font-size: 20px;
    width: 500px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .postItem>:first-child>:nth-child(2) {
    font-size: 18px;
    opacity: 0;
  }

  .postItem:hover>:first-child>:nth-child(2) {
    opacity: 1;
  }
}

@media screen and (max-width: 800px) {
  .headTitle {
    font-size: 24px;
  }

  .warp {
    width: 90%;
  }

  .postItem {
    background-color: var(--z-searchPanel-post-background);
  }

  .postItem>:first-child {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }


  .postItem>:first-child>:first-child {
    font-size: 20px;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .postItem>:first-child>:nth-child(2) {
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>