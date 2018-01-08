import Vue from "vue";
import CreativeCommonsLabel from "../CreativeCommonsLabel";

// helper function that mounts and returns the rendered text
function getRendered(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({ propsData: propsData }).$mount();
  return vm;
}

describe("CreativeCommonsLabel.vue", () => {
  const vm = getRendered(CreativeCommonsLabel, {
    allowAdaptations: "yes",
    allowCommercialUse: "yes"
  });
  it("should render correct contents", () => {
    expect(
      vm.$el.querySelector(".creative-commons-label--prefix").textContent
    ).toEqual("This work is licensed under a ");
    expect(
      vm.$el.querySelector(".creative-commons-label--suffix").textContent
    ).toEqual(".");
    expect(
      vm.$el.querySelector(".creative-commons-label--link").textContent
    ).toEqual("Creative Commons Attribution 4.0 International License");
  });
  it("should match the snapshot", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
