---

# 默认为文件夹名
title: 

# 默认为文件夹序号, 作为展示顺序
rank: 

# 英文且不能包含空格, 作为URL路径
# 必填项
path: nav

# 配置项
config:

  img: 
  
  description: 保持热爱，奔赴山海！

---

<script setup>
import { inject } from 'vue'
import _data from './_data.yaml'
import Collection from './Collection.vue'
import TitleNav from './TitleNav.vue'

const _config = inject('config')

const data = _data.filter(
    item => 
      item.title &&
      item.children && 
      item.children instanceof Array && 
      item.children.length > 0
  )

const titles = data.map(item => item.title)

</script>

<div :class="$style.container">
  <TitleNav />
  <Collection :data="data" :api="_config.api.getFavicon"/>
</div>

<style module>
.container {
  width: 100%;
  height: calc(100vh - 120px);
  margin-top: 120px;
  display: flex;
  flex-direction: column;
}
</style>