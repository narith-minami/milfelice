<template lang="pug">
section.page_top.width-100per
  .page_top_inner.mg-auto
    p.page_top_title {{ title }}
    p.page_top_caption.text-center {{ caption }}
</template>

<script>
export default {
  props: {
    title: String,
    caption: String,
  },
};
</script>