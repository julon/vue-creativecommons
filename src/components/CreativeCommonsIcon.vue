<template lang="pug">
.creative-commons-icon
  a.creative-commons-icon--link(v-if="license" rel="license" :href="license.link" target="_blank")
    img.creative-commons-icon--img(:alt="license.name" :src="icon")
</template>

<script>
import CreativeCommonsMixin from "./CreativeCommonsMixin";
import OptionValidatorService from "../services/OptionValidator";

const validator = OptionValidatorService.getOptionValidator;

export default {
  name: "CreativeCommonsIcon",
  mixins: [CreativeCommonsMixin],
  props: {
    iconSize: {
      type: String,
      required: true,
      validator: validator("iconSizeOptions")
    }
  },
  computed: {
    icon() {
      return this.license.icon[this.iconSize];
    }
  }
};</script>

<style lang="stylus" scoped>
.creative-commons-icon--link
  display: inline-block
.creative-commons-icon--img
  border: none
</style>
