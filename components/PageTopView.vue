<template lang="pug">
section.page_top.width-100per(:class="'page_' + name")
  .page_top_inner.mg-auto
    p.page_top_title(v-if="title") {{ title }}
    img.page_top_title_svg(v-else :src="require('@/assets/images/title/title_' + name + '.svg')" :alt="name + ' ' + caption")
    p.page_top_caption.text-center(v-if="title") {{ caption }}
    p.page_top_caption.no_title.text-center(v-else) {{ caption }}
</template>

<script>
export default {
  props: {
    name: String,
    title: String,
    caption: String,
  },
};
</script>