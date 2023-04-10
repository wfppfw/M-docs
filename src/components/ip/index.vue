<template>
  <a-row>
    <a-col
      ><a-input :style="{ width: '320px' }" placeholder="输入ip" allow-clear />
    </a-col>
    <a-col>
      <a-button> 查询地址</a-button>
    </a-col>
  </a-row>

  <a-row>
    <a-col>
      <a-button> 请求本机ip地址</a-button>
    </a-col>
  </a-row>

  <a-row>
    <a-col>
      <a-button> 网址跳转附加ip获取</a-button>
      <div>长链接生成短链接</div>
    </a-col>
  </a-row>
</template>
<script lang="ts" setup>
import axios from 'axios';
// import { jsonp } from 'vue-jsonp';

import { onMounted, ref } from 'vue';
const ipInput = ref('');
// let xhr = new XMLHttpRequest();
// const url = 'https://gamematrix.qq.com/sdk/v2/get_gateway';
// xhr.open('GET', url, true);

// xhr.setRequestHeader('Content-type', 'application/json');
// try {
//   xhr.send(); //改了这里
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       console.log(JSON.parse(xhr.responseText)); //输入相应的内容
//     }
//   };
// } catch (error) {
//   console.log(error);
// }

// const getIpadress = () => {
//   console.log('starts');
//   //   if (ipInput.value) {
//   console.log('starts2');
//   axios.get(url).then((res) => {
//     console.log(res);
//   });
//   //   }
// };

// const Fn = (res) => {
//   console.log(res);
// };
// const addjsonp = (url, Fn) => {
//   let script = document.createElement('script');
//   script.src = url + `cb=${Fn.name}`;
//   document.body.appendChild(script);
// };

// const getUserIp = async () => {
//   return new Promise((resolve, reject) => {
//     jsonp(
//       'https://apis.map.qq.com/ws/location/v1/ip?key=6CJBZ-EBHRH-I5BDY-WGC66-KN6OF-Y4FD5',
//       {
//         output: 'jsonp',
//         dataType: 'jsonp',
//       }
//     )
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
// };

onMounted(async () => {
  // addjsonp(url, Fn);
  // let res = await getUserIp();
  // console.log(res);
});
</script>

<style scoped>
input {
  height: 100px;
  width: 200px;
  border: 2px solid black;
}
</style>
