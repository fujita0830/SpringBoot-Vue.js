import { mount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import CallSampleWebapi from "@/components/CallSampleWebapi.vue";

describe("CallSampleWebapi.vue test", () => {
  it("init render test", () => {
    Vue.use(Vuetify);
    const wrapper = mount(CallSampleWebapi, {});
    expect(wrapper.html()).toContain("<div>code: (空)</div>");
  });
});
