<template>
    <div class="path-history">
        <HomeSvg 
          @click="$router.push({path: '/'})" 
          class="path-item"
        /> 
        <span v-for="(item, index) in path" :key="index">
            <PathArrowSvg />
            <p 
              class="path-item__link" 
              :class="index+1 === path.length ? 'path-item__link-current' : ''"
              @click="moveToHistoryUrl(index, item.url)"
            >
              {{ item.name }}
            </p>
        </span>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from '#app';

const props = defineProps<{
  path: any[]
}>();
const router = useRouter();

const moveToHistoryUrl = (list: number, url: string): void => {
  if(list + 1 != props.path.length) {
    router.push({ path: url });
  };
};
</script>
<style lang="scss" scoped>
.path-history {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    color: #737781;
    font-size: 14px;


    span {
        display: flex;
        align-items: center;
        gap: 3px;

    }
}
.path-item {
  cursor: pointer;
}
.path-item__link-current {
  color:black
}
.path-item__link {
  margin-top: 1px;

  box-sizing: border-box;
  margin-bottom: 1px;
  cursor: pointer;
  &:hover {
      border-bottom: 1px solid #737781;
      box-sizing: border-box;
      margin-bottom: 0px;
  }
}
</style>