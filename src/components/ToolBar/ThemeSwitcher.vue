<script setup>
import Sun from '../../assets/svgs/Sun.svg?vueComponent'
import Moon from '../../assets/svgs/Moon.svg?vueComponent'
import useTheme from '../../hooks/useTheme'

const [isDay, switchTheme] = useTheme()

</script>

<template>
  <span :class="$style.container" @click="switchTheme">
    <Sun :class="[isDay ? $style.front : $style.back]" />
    <Moon :class="[isDay ? $style.back : $style.front]" />
  </span>
</template>

<style module>
.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container>:first-child,
.container>:nth-child(2) {
  position: absolute;
  backface-visibility: hidden;
  perspective: 500px;
}

.front {
  transform: rotateY(0deg);
  animation: frontAnimation .7s;
  opacity: 1;
}

@keyframes frontAnimation {
  from {
    transform: rotateY(180deg);
    opacity: 0;
  }

  to {
    transform: rotateY(0);
    opacity: 1;
  }
}

.back {
  transform: rotateY(-180deg);
  animation: backAnimation .7s;
  opacity: 0;
}

@keyframes backAnimation {
  from {
    transform: rotateY(0);
    opacity: 1;
  }

  to {
    transform: rotateY(-180deg);
    opacity: 0;
  }
}
</style>