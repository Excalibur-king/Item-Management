<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
uni.loadFontFace({
  global: true,
  family: 'Microsoft YaHei',
  source: 'url("/static/fonts/MSYH.TTC")',
  success() {
    console.log('success load font.')
  },
  fail(e) {
    console.log('err：', e)
  }
})
</script>
<style lang="scss">
@import 'uview-plus/index.scss';
body {
  font-family: 'Microsoft YaHei' !important;
}
</style>
