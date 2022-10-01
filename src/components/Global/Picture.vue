<script>
import Loading from './Loading.vue'
import picError from '../../assets/PicError.webp'
import { clone } from '../../utils'

function trySrcs(srcs = [], onSuccess, onError) {
  if (srcs.length === 0) {
    onError && onError()
    return
  }
  const img = new Image()
  img.src = srcs[0]
  img.onerror = () => {
    trySrcs(srcs.slice(1), onSuccess, onError)
  }
  img.onload = () => {
    onSuccess && onSuccess(srcs[0])
  }
}

export default {
  data() {
    return {
      isLoading: true,
      srcs: [],
      imgSrc: ''
    }
  },
  props: {
    lazy: {
      type: Boolean,
      default: false
    },
    src: {
      type: [String, Array],
      required: true
    },
    defaultSrc: {
      type: String,
      default: picError
    }
  },
  components: { Loading },
  methods: {
    loadImg() {
      trySrcs(
        this.srcs,
        result => {
          this.imgSrc = result
          this.isLoading = false
        },
        () => {
          this.imgSrc = this.defaultSrc
          this.isLoading = false
        })
    },
  },
  created() {
    const srcs = clone(this.src)
    this.srcs = srcs instanceof Array ? srcs : [srcs]
  },
  mounted() {
    if (!this.lazy) {
      return this.loadImg()
    }
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entery => {
        if (entery.isIntersecting) {
          this.loadImg()
          observer.disconnect()
        }
      }
      )
    }, {
      threshold: 0.1,
    })
    observer.observe(this.$el)
  }
}

</script>

<template>
  <div :class="$style.container">
    <Loading v-if="isLoading" />
    <img :src="imgSrc" v-else />
  </div>
</template>

<style module>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.container img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: brightness(var(--z-img-brightness));
  user-select: none;
}
</style>