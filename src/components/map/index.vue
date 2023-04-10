<template>
  <div id="container">ssss</div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
function initMap() {
  //定义地图中心点坐标
  var center = new window.TMap.LatLng(39.98412, 116.307484);
  //定义map变量，调用 TMap.Map() 构造函数创建地图
  var map = new window.TMap.Map(document.getElementById('container'), {
    center: center, //设置地图中心点坐标
    zoom: 17.2, //设置地图缩放级别
  });
}
async function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src =
    'https://map.qq.com/api/gljs?v=1.exp&key=J4YBZ-3PFRI-KZ4GT-UZK7S-MHP43-BNBW6&callback=initMap';
  document.body.appendChild(script);
}
onMounted(async () => {
  console.log('sss--');
  await loadScript();
  initMap();
});
</script>

<style scoped>
#container {
  height: 500px;
  width: 500px;
}
</style>
