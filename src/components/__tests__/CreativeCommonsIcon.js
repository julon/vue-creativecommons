import Vue from "vue";
import CreativeCommonsLabel from "../CreativeCommonsIcon";

// helper function that mounts and returns the rendered text
function getRendered(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({ propsData: propsData }).$mount();
  return vm;
}

describe("CreativeCommonsIcon.vue", () => {
  const vm = getRendered(CreativeCommonsLabel, {
    allowAdaptations: "yes",
    allowCommercialUse: "yes",
    iconSize: "normal"
  });
  it("should render correct contents", () => {
    expect(vm.$el.querySelector(".creative-commons-icon--link").href).toEqual(
      "http://creativecommons.org/licenses/by/4.0/"
    );
    expect(vm.$el.querySelector(".creative-commons-icon--img").alt).toEqual(
      "Creative Commons Attribution 4.0 International License"
    );
  });
  it("should match the snapshot", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
