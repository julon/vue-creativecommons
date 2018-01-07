import Vue from "vue";
import HelloWorld from "../HelloWorld";

describe("Hello.vue", () => {
  const Constructor = Vue.extend(HelloWorld);
  const vm = new Constructor().$mount();
  test("should render correct contents", () => {
    expect(vm.$el.querySelector(".hello h1").textContent).toEqual(
      "Welcome to Your Vue.js Library"
    );
  });
  test("should match the snapshot", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
