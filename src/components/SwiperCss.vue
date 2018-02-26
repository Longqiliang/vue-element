<template>
  <div class="swiper-box">
    <div class="swiper">
      <div :class="msg.class" v-for="(msg,index) in msgs" :key="msg.id" v-html="msg.id" @click="change(index)"></div> 
    </div>
    <el-tag 
      closable 
      v-for="(tag,index) in tags"
      :key="tag.name"
      :type="tag.type"
      @close="handleClose({tag,index})">
      {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
export default {
  name: 'SwiperCss',
  data () {
    return {
      msgs: [
        {
          id: '1',
          class: 'swiper__item'
        },
        {
          id: '2',
          class: 'swiper__item'
        },
        {
          id: '3',
          class: 'swiper__item'
        }
      ],
      tags: [
        {name: '标签一', type: ''}
      ]
    }
  },
  methods: {
    handleClose ({tag, index}) {
      this.tags.splice(index, 1)
    },
    change (index) {
      console.log(this.msgs[index])
    }
  }
}
</script>

<style lang="scss" scoped>
$swiper-width:50px;
$swiper-height:50px;
$swiper-bg-green:green;
$swiper-bg-blue:blue;
$swiper-bg-primary: #6180e9;
$swiper-mg:10px;
$swiper-color:#fff;
.swiper {
    margin: $swiper-mg 0;
    display: flex;
    &__item {
        width: $swiper-width;
        height: $swiper-height;
        background: $swiper-bg-primary;
        margin-right: $swiper-mg;
        animation: swiperAni 1s ease both alternate infinite;
        display: flex;
        color: $swiper-color;
        align-items: center;
        justify-content: center;
    }
    &-primary {
      background: $swiper-bg-primary;
    }
    @for $i from 1 to 6 {
        &__item:nth-child(#{$i}) {
            animation-delay: -$i*0.1s;
        }
    }
}
@keyframes swiperAni {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
</style>

