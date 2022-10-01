<script setup>
import useStore from "../../store"
import useScroll from "../../hooks/useScroll"
import Arrow from '../../assets/svgs/Arrow.svg?vueComponent'
import typed from '../../utils/typed'
import { computed, onMounted, ref } from 'vue'
import { IsPC } from "../../utils"
import useRandomImg from "../../hooks/useRandomImg"

const store = useStore()

const randomImg = useRandomImg()
const bannerImg = computed(() => {
  return store.config.bannerImg || randomImg()
})

const logoName = computed(() => {
  return store.config.logoName || `༺ۣۖ神ۣۖ༒ۣ仙ۣۖ༻`
})

const [scrollNode, _] = useScroll()
function scrollDown() {
  scrollNode.value && scrollNode.value.scrollTo({ top: window.innerHeight })
}

const mottoRef = ref(null)
const motto = computed(() => {
  return store.config.motto || `君子藏器于身，待时而动！`
})
onMounted(() => {
  typed(mottoRef.value, motto.value)
})

const showBanner = ref(IsPC())

</script>

<template>
  <div :class="$style.container">
    <Picture :src="bannerImg" :class="$style.bannerImg" />
    <div :class="$style.arrowDown" @click="scrollDown">
      <span>
        <Arrow />
      </span>
    </div>
    <template v-if="showBanner">
      <div :class="$style.banner_wave_1"></div>
      <div :class="$style.banner_wave_2"></div>
    </template>
    <div :class="$style.bannerMain">
      <div :date-text="logoName" :class="$style.logoName">
        {{ logoName }}
      </div>
      <div :class="$style.motto">
        <span ref="mottoRef"></span>
        <span>※</span>
      </div>
    </div>
  </div>
</template>

<style module>
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.bannerImg {
  width: 100%;
  height: 100%;
  position: relative;
}

.arrowDown {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 70px;
  bottom: 0;
  display: flex;
  justify-content: center;
  cursor: var(--pointer);
}

@keyframes arrowDown_animation {
  0% {
    top: 0;
    opacity: 0.5;
  }

  5% {
    top: 0;
    opacity: 0.5;
  }

  45% {
    top: 20px;
    opacity: 1;
  }

  55% {
    top: 20px;
    opacity: 1;
  }

  95% {
    top: 0;
    opacity: 0.5;
  }

  100% {
    top: 0;
    opacity: 0.5;
  }
}

.arrowDown span {
  position: absolute;
  opacity: 0.5;
  animation: arrowDown_animation 2s ease-in-out infinite;
  width: 25px;
  height: 25px;
  cursor: var(--pointer);
}

@-webkit-keyframes wave1

/*Safari and Chrome*/
  {
  0% {
    left: -1500px;
    bottom: -5px
  }

  50% {
    left: 0px;
    bottom: 0px
  }

  100% {
    left: -1500px;
    bottom: -5px
  }
}

@-webkit-keyframes wave2 {
  0% {
    left: -1450px
  }

  50% {
    left: 0px
  }

  100% {
    left: -1450px
  }

}

@keyframes wave1

/*Safari and Chrome*/
  {
  0% {
    left: -1500px;
    bottom: -5px
  }

  50% {
    left: 0px;
    bottom: 0px
  }

  100% {
    left: -1500px;
    bottom: -5px
  }
}

@keyframes wave2 {
  0% {
    left: -1450px
  }

  50% {
    left: 0px
  }

  100% {
    left: -1450px
  }

}

.banner_wave_1 {
  width: auto;
  height: 65px;
  background: url("../../assets/wave1.png") repeat-x;
  filter: brightness(var(--z-wave-brightness));
  _filter: alpha(opacity=80);
  position: absolute;
  bottom: 0;
  width: 400%;
  left: -236px;
  opacity: 1;
  animation: wave1 90s infinite;
  -webkit-animation: wave1 90s infinite;
}

.banner_wave_2 {
  width: auto;
  height: 80px;
  background: url("../../assets/wave2.png") repeat-x;
  _filter: alpha(opacity=80);
  position: absolute;
  bottom: 0;
  width: 400%;
  left: 0;
  opacity: 1;
  animation: wave2 90s infinite;
  -webkit-animation: wave2 90s infinite;
}

@media(max-width:860px) {

  .banner_wave_1,
  .banner_wave_2 {
    display: inline-block;

  }

  @-webkit-keyframes wave1

  /*Safari and Chrome*/
    {
    0% {
      left: -750px;
      bottom: -2px
    }

    50% {
      left: 0px;
      bottom: 0px
    }

    100% {
      left: -750px;
      bottom: -2px
    }
  }

  @-webkit-keyframes wave2 {
    0% {
      left: -750px
    }

    50% {
      left: 0px
    }

    100% {
      left: -750px
    }

  }

  @keyframes wave1

  /*Safari and Chrome*/
    {
    0% {
      left: -750px;
      bottom: -2px
    }

    50% {
      left: 0px;
      bottom: 0px
    }

    100% {
      left: -750px;
      bottom: -2px
    }
  }

  @keyframes wave2 {
    0% {
      left: -750px
    }

    50% {
      left: 0px
    }

    100% {
      left: -750px
    }

  }

  .banner_wave_1 {
    width: auto;
    height: 65px;
    background: url("../../assets/wave1.png") repeat-x;
    _filter: alpha(opacity=80);
    position: absolute;
    bottom: 0;
    width: 400%;
    left: 750px;
    z-index: 5;
    opacity: 1;
    animation: wave1 90s infinite;
    -webkit-animation: wave1 60s infinite;
  }

  .banner_wave_2 {
    width: auto;
    height: 80px;
    background: url("../../assets/wave2.png") repeat-x;
    _filter: alpha(opacity=80);
    position: absolute;
    bottom: 0;
    width: 400%;
    left: 0;
    z-index: 4;
    opacity: 1;
    animation: wave2 90s infinite;
    -webkit-animation: wave2 60s infinite;
  }
}

@keyframes animation-before {
  0% {
    clip-path: inset(0 0 0 0);
  }

  5% {
    clip-path: inset(.8em 0 .4em 0);
  }

  10% {
    clip-path: inset(.4em 0 .8em 0);
  }

  15% {
    clip-path: inset(.1em 0 1em 0);
  }

  20% {
    clip-path: inset(.3em 0 .6em 0);
  }

  25% {
    clip-path: inset(.8em 0 .5em 0);
  }

  30% {
    clip-path: inset(.5em 0 .8em 0);
  }

  35% {
    clip-path: inset(1em 0 .1em 0);
  }

  40% {
    clip-path: inset(.7em 0 .35em 0);
  }

  45% {
    clip-path: inset(.5em 0 .2em 0);
  }

  50% {
    clip-path: inset(.2em 0 .5em 0);
  }

  55% {
    clip-path: inset(.35em 0 .7em 0);
  }

  60% {
    clip-path: inset(.1em 0 .9em 0);
  }

  65% {
    clip-path: inset(.8em 0 .46em 0);
  }

  70% {
    clip-path: inset(.66em 0 .33em 0);
  }

  75% {
    clip-path: inset(.48em 0 .23em 0);
  }

  80% {
    clip-path: inset(.23em 0 .48em 0);
  }

  85% {
    clip-path: inset(.39em 0 .79em 0);
  }

  90% {
    clip-path: inset(.33em 0 .66em 0);
  }

  95% {
    clip-path: inset(1em 0 .3em 0);
  }

  100% {
    clip-path: inset(.62em 0 .29em 0);
  }
}

@keyframes animation-after {
  0% {
    clip-path: inset(0 0 0 0);
  }

  5% {
    clip-path: inset(.4em 0 .8em 0);
  }

  10% {
    clip-path: inset(.8em 0 .4em 0);
  }

  15% {
    clip-path: inset(1em 0 .1em 0);
  }

  20% {
    clip-path: inset(.6em 0 .3em 0);
  }

  25% {
    clip-path: inset(.5em 0 .8em 0);
  }

  30% {
    clip-path: inset(.8em 0 .5em 0);
  }

  35% {
    clip-path: inset(.1em 0 1em 0);
  }

  40% {
    clip-path: inset(.35em 0 .7em 0);
  }

  45% {
    clip-path: inset(.2em 0 .5em 0);
  }

  50% {
    clip-path: inset(.5em 0 .2em 0);
  }

  55% {
    clip-path: inset(.7em 0 .35em 0);
  }

  60% {
    clip-path: inset(.9em 0 .1em 0);
  }

  65% {
    clip-path: inset(.46em 0 .8em 0);
  }

  70% {
    clip-path: inset(.33em 0 .66em 0);
  }

  75% {
    clip-path: inset(.23em 0 .48em 0);
  }

  80% {
    clip-path: inset(.48em 0 .23em 0);
  }

  85% {
    clip-path: inset(.79em 0 .39em 0);
  }

  90% {
    clip-path: inset(.66em 0 .33em 0);
  }

  95% {
    clip-path: inset(.3em 0 1em 0);
  }

  100% {
    clip-path: inset(.29em 0 .62em 0);
  }
}

.bannerMain {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logoName {
  display: inline-block;
  font-size: 65px;
  padding: 0 4px;
  color: white;
  height: 100px;
  position: relative;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -khtml-user-select: none;
  -webkit-touch-callout: none;
}

.logoName::before {
  content: attr(date-text);
  position: absolute;
  left: -2px;
  width: 100%;
  height: 100%;
  text-shadow: 2px 0 rgb(73, 235, 52);
  animation: animation-before 10s infinite linear alternate-reverse;
}

.logoName::after {
  content: attr(date-text);
  position: absolute;
  left: 2px;
  width: 100%;
  height: 100%;
  text-shadow: -2px 0 rgb(248, 164, 86);
  animation: animation-after 10s infinite linear alternate-reverse;
}

.motto {
  margin-top: 60px;
  height: 50px;
  user-select: none;
}

.motto span {
  font-size: 40px;
  color: #fff;
}

@media screen and (max-width: 1000px) {
  .motto {
    display: none;
  }
}
</style>