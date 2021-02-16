<template lang="pug">
section.page_top.width-100per(:class="'page_' + name")
  .page_top_inner.mg-auto
    p.page_top_title {{ title }}
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