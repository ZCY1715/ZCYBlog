---

# 默认为文件名称
title: 

tags:
  - loading

# 类别中已包含文件夹名称
categories:

description: 

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-23 16:19:00
updateTime: 2022-08-27 16:03:20
 
# 默认随机
img: 

# 目录
toc: false

# 评论
comment: true
---

```js
<script>

export default {
  data() {
    return {
      timer: null,
      pointNum: 0,
    }
  },
  props: ['message', 'el','modelValue'],
  emits: ["update:modelValue"],
  computed: {
      targetNode(){
          return this.el || document.body
      },
      isShow: {
          get(){
              return this.modelValue
          },
          set(value){
              this.$emit("update:modelValue",value)
          }
      }
  }
  mounted() {
    this.timer = setInterval(() => {
      this.pointNum = (this.pointNum + 1) % 6
    }, 400)
  },
  beforeMount() {
    clearInterval(this.timer)
  }
}

</script>

<template>
	<Teleport :to="targetNode">
  		<div :class="$style.conatiner" v-if="isShow">
    		<div :class="$style['sk-chase']">
                <div :class="$style['sk-chase-dot']"></div>
                <div :class="$style['sk-chase-dot']"></div>
                <div :class="$style['sk-chase-dot']"></div>
                <div :class="$style['sk-chase-dot']"></div>
                <div :class="$style['sk-chase-dot']"></div>
                <div :class="$style['sk-chase-dot']"></div>
            </div>
            <div :class="$style.description" v-if="message">
                {{ message }}
                <span>{{ ".".repeat(pointNum) }}</span>
                <span style="visibility: hidden;">{{ ".".repeat(6 - pointNum) }}</span>
            </div>
  		</div>
	</Teleport>
</template>

<style module>
.conatiner {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}

.description {
  margin-top: 20px;
}

.sk-chase {
  width: 60px;
  height: 60px;
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: sk-chase-dot 2.0s infinite ease-in-out both;
}

.sk-chase-dot:before {
  content: '';
  display: block;
  width: 30%;
  height: 30%;
  position: absolute;
  left: 5px;
  top: 5px;
  background-color: #F4AF43;
  border-radius: 100%;
  animation: sk-chase-dot-before 2.0s infinite ease-in-out both;
}

.sk-chase-dot:nth-child(1) {
  animation-delay: -1.1s;
}

.sk-chase-dot:nth-child(2) {
  animation-delay: -1.0s;
}

.sk-chase-dot:nth-child(3) {
  animation-delay: -0.9s;
}

.sk-chase-dot:nth-child(4) {
  animation-delay: -0.8s;
}

.sk-chase-dot:nth-child(5) {
  animation-delay: -0.7s;
}

.sk-chase-dot:nth-child(6) {
  animation-delay: -0.6s;
}

.sk-chase-dot:nth-child(1):before {
  animation-delay: -1.1s;
}

.sk-chase-dot:nth-child(2):before {
  animation-delay: -1.0s;
}

.sk-chase-dot:nth-child(3):before {
  animation-delay: -0.9s;
}

.sk-chase-dot:nth-child(4):before {
  animation-delay: -0.8s;
}

.sk-chase-dot:nth-child(5):before {
  animation-delay: -0.7s;
}

.sk-chase-dot:nth-child(6):before {
  animation-delay: -0.6s;
}

@keyframes sk-chase {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chase-dot {

  80%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4);
  }

  100%,
  0% {
    transform: scale(1.0);
  }
}
</style>
```

