<script>

export default {
  data() {
    return {
      typeColors: [
        {
          type: 'INFO',
          bgColor: '#E6F7FF',
          beforeColor: '#91D5FF'
        }, {
          type: 'SUCCESS',
          bgColor: '#F6FFED',
          beforeColor: '#B7EB8F'
        }, {
          type: 'WARN',
          bgColor: '#FFFBE6',
          beforeColor: '#FFE58F'
        }, {
          type: 'ERROR',
          bgColor: '#FFF2F0',
          beforeColor: '#FFCCC7'
        }
      ]
    }
  },
  props: {
    type: {
      type: String,
      default: 'INFO'
    },
    message: {
      type: [String, Array]
    },
  },
  computed: {
    targetType() {
      return this.typeColors.find(item => item.type === this.type)
    },
    targetMessage() {
      if (this.message instanceof Array) {
        return [...this.message]
      } else {
        return [this.message]
      }
    },
    styleStr() {
      return '--bgColor: ' + this.targetType.bgColor + '; --beforeColor: ' + this.targetType.beforeColor
    }
  }
}

</script>

<template>
  <div :class="$style.AlertBar" :style="styleStr">
    <span v-for="item of targetMessage" :key="item" v-html="item">
    </span>
  </div>
</template>

<style module>
.AlertBar {
  background-color: var(--bgColor);
  padding: 10px 20px 10px 20px;
  font-size: 18px;
  position: relative;
  border-radius: 0 5px 5px 0;
  margin: 20px 0 20px 0;
}

.AlertBar::before {
  content: "";
  position: absolute;
  width: 3px;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--beforeColor);
}

.AlertBar span {
  color: #000 !important;
  display: block;
  line-height: 25px;
}

a {
  text-decoration: underline !important;
}

a:hover {
  background-color: var(--theme-color);
}
</style>