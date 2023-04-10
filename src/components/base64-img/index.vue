<template>
  <div
    class="dropzone"
    ref="warp"
    @dragenter.prevent="DragEnter"
    @dragleave.prevent="DragLeave"
    @dragover.prevent="DragOver"
    @drop.prevent="Drop"
  >
    <div v-if="isImg">
      <img class="showMinImg" :src="showMinImgSrc" />
      <div><span>Name:</span>{{ name }}</div>
      <div><span>Size:</span>{{ size }}</div>
      <div><span>Type:</span>{{ type }}</div>
    </div>
  </div>
  <input type="file" @change="chooseImg" />
  <div>
    <textarea name="" id="" cols="30" rows="10">{{ showMinImgSrc }} </textarea>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
const isImg = ref(false);
const showMinImgSrc = ref('');

const name = ref('');
const size = ref('0');
const type = ref('');

// file input 选择文件
const chooseImg = (e) => {
  console.log(e);
  if (!e) return;
  const { files } = e.target;
  if (files.length <= 0) return;
  const fileReader = new FileReader();
  fileReader.readAsDataURL(files[0]);
  fileReader.onload = (event) => {
    try {
      isImg.value = true;
      showMinImgSrc.value = event.target?.result as string;
      name.value = e.target.files[0].name;
      size.value = getfilesize(e.target.files[0].size);
      type.value = e.target.files[0].type;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(e, e.target.files[0]);
};

const DragEnter = () => {
  console.log('DragEnter');
};
const DragLeave = () => {
  console.log('DragLeave');
};
const DragOver = () => {
  console.log('DragOver');
};
const Drop = (e) => {
  e.preventDefault();
  console.log(e, e.dataTransfer.files[0]);
  let copyObj = e.dataTransfer.files[0];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(e.dataTransfer.files[0]);
  fileReader.onload = (event) => {
    try {
      isImg.value = true;
      showMinImgSrc.value = event.target?.result as string;
      name.value = copyObj.name;
      size.value = getfilesize(copyObj.size);
      type.value = copyObj.type;
      console.log(event);
    } catch (error) {
      console.log(error);
    }
  };
  console.log('Drop');
};
function getfilesize(size) {
  //把字节转换成正常文件大小
  if (!size) return '';
  var num = 1024.0; //byte
  if (size < num) return size + 'B';
  if (size < Math.pow(num, 2)) return (size / num).toFixed(2) + 'KB'; //kb
  if (size < Math.pow(num, 3))
    return (size / Math.pow(num, 2)).toFixed(2) + 'MB'; //M
  if (size < Math.pow(num, 4))
    return (size / Math.pow(num, 3)).toFixed(2) + 'G'; //G
  return (size / Math.pow(num, 4)).toFixed(2) + 'T'; //T
}
</script>
<style scoped>
.dropzone {
  height: 300px;
  width: 300px;
  border: 1px solid black;
}
.showMinImg {
  height: 80px;
  width: 80px;
}
</style>
