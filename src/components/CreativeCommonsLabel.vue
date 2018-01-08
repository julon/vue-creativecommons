<template lang="pug">
.creative-commons-label
  span.creative-commons-label--prefix This work is licensed under a 
  a.creative-commons-label--link(rel="license" :href="license.link") {{ license.name }}
  span.creative-commons-label--suffix .
</template>

<script>
import CreativeCommonsMixin from "./CreativeCommonsMixin";

export default {
  name: "CreativeCommonsLabel",
  mixins: [CreativeCommonsMixin]
};
</script>
