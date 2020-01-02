---
title: "1文字ずつspanで囲むVue ComponentとPHP"
date: "2019-01-03"
path: "/blog/2019/01/1文字ずつspanで囲むvuecomponentとphp/"
type: "blog"
categories: ["Programming", "Frontend"]
tags: ["PHP", "Vue"]
excerpt: "1文字ずつspanで囲むVue ComponentとPHP"
ogp: "./ogp.png"
---

<!-- wp:paragraph -->アニメーションで使うと便利なものの一つに、文字を1文字ずつ分解してspanで囲むというものがよくあると思います。  
コードはあとで調節しますが一旦おいておきます。(調節しないかもしれません)

## Vueコンポーネント

```markup
<template>
  <span><span v-for="list in lists" :class="!list.flag?'u-clipText':''" :style="list.delay" :data-text="list.text"><span>{{list.text}}</span></span></span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['text', 'delay', 'step'],
  data() {
    return {
      height:<number | null> null,
      list:<any> []
    }
  },
  methods: {

  },
  computed: {
    lists: function() {
      const arr:any = []
      const _texts = this.text.split('')
      let current = 0

      for (let i = 0; i < _texts.length; i++) {
        let flag = false
        const text = _texts[i]
        if (text !== ' ' && text !== '　') {
          if(i !==0 ){
            current = current + 1
          }
        } else {
          flag = true
        }
        const obj = {
          text,
          flag,
          delay: `transition-delay: ${current * Number(this.step) + Number(this.delay)}s`,
        }
        arr.push(obj)
      }

      return arr
    },
  },
  mounted() {
    console.log('page-clip-text-mount')
  },
  beforeDestroy() {
    console.log('page-clip-text-destroy')
  }
})
</script>
```

## PHP

```php
function sepText($text, $count = 0)
{
  $matches = preg_split("//u", $text, -1, PREG_SPLIT_NO_EMPTY);
  $text = '';
  foreach ($matches as $val) {
    $count++;
//    $text .= '<span class="m-title__anim m-title__anim--'.$count.'">'.$val.'</span>';
    if ($val === ' ' || $val === '　') {
      $text .= $val;
    } else {
      $text .= '<span>' . $val . '</span>';
    }
  }
  return $text;
}
```
