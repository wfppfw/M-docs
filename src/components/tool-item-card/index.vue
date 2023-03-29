<template>
  <a
    class="my-link"
    rel="noreferrer"
    target="_blank"
    :href="props.link"
    :aria-controls="props.desc"
    ><span class="img"><img :src="props.img" /></span
    ><span class="info"
      ><span class="title">{{ props.title }}</span>
      <div class="desc">{{ props.desc }}</div></span
    ></a
  >
</template>
<script lang="ts" setup>
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
.my-link:before {
  visibility: hidden;
  opacity: 0;
  transform: translateZ(0);
  transition: all 0.3s ease 0.2s;
  box-sizing: border-box;
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 8px 0 8px;
  border-color: #30363d transparent transparent transparent;
  left: calc(50% - 8px);
  top: 0px;
  /* transform: translate(0) translateY(-2px); */
}
.my-link:after {
  visibility: hidden;
  opacity: 0;
  transform: translate(-50%) translateZ(0);
  transition: all 0.3s ease 0.2s;
  box-sizing: border-box;
  font-size: 12px;
  color: #f4f4f5;
  content: attr(aria-controls);
  position: absolute;
  padding: 6px 10px;
  z-index: -1;
  left: 50%;
  bottom: 100%;
  /* transform: translate(-50%) translateY(-2px); */
  background: #30363d;
  border-radius: 4px;
  width: auto;
  line-height: 1.5;
}
.my-link:hover {
  opacity: 0.7;
  box-shadow: 0 0 10px #ccc;
}

.my-link:hover::after {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%) translateY(-2px);
  /* transition: all 0.3s ease 0.2s; */
  box-sizing: border-box;
}
.my-link:hover::before {
  visibility: visible;
  opacity: 1;
  /* transform: translate(-50%) translateY(-2px); */
  transform: translate(0) translateY(-2px);
  /* transition: all 0.3s ease 0.2s; */
  box-sizing: border-box;
}
.my-link {
  width: calc(50% - 6px);
  position: relative;
  z-index: 12;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  border-radius: 4px;
  box-sizing: border-box;
  height: 100%;
  background-color: #f9f9f9;
  padding: 10px 12px;
  margin-top: 12px;
  margin-right: 12px;
}

.img {
  display: flex;
  width: 48px;
  height: 36px;
  align-items: center;
  justify-content: center;
}
img {
  max-width: 36px;
  box-sizing: border-box;
  height: 36px;
  margin-right: 12px;
  display: block;
  overflow-clip-margin: content-box;
  overflow: clip;
}
.info {
  display: flex;
  flex: 1;
  width: 0;
  flex-direction: column;
  justify-content: center;
}
.desc {
  line-height: 18px;
  color: #999;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
}
.title {
  line-height: 22px;
}
@media screen and (min-width: 640px) {
  .my-link {
    width: calc(50% - 12px);
  }
}
</style>
