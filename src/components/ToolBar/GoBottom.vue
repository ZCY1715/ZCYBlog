<script setup>
import GoBottom from '../../assets/svgs/GoBottom.svg?vueComponent'
import useScroll from '../../hooks/useScroll'

const [scrollNode, _] = useScroll()

function goBottom() {
  scrollNode.value && (
    scrollNode.value.scrollTo({ top: scrollNode.value.scrollHeight })
  )
}

</script>

<template>
  <GoBottom @click="goBottom" />
</template>