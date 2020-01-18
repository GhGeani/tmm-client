<template lang="pug">
article.col-12.col-md-6.offset-md-3
    p.quote „{{ description }}”
    p.text-center.small {{ author }}
      | {{ date }}
</template>

<script>
export default {
  props: {
    author: String,
    description: String,
    date: String,
    id: String,
  },
};
</script>
