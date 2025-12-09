import { mount } from "@vue/test-utils";
import { describe, expect, vi } from "vitest";
import Home from "./Home.vue";

describe("Home", () => {
  vi.mock("../stores/user", () => ({
    useUserStore: () => ({
      user: "aaa",
      getUser: () => {},
    }),
  }));

  it("renders h2 element", () => {
    const wrapper = mount(Home);
    const titleElement = wrapper.find("h2");

    expect(titleElement.exists()).toBe(true);
  });

  it("has correct text in h2", () => {
    const wrapper = mount(Home);
    const titleElement = wrapper.find("h2");

    expect(titleElement.text()).toBe("Welcome to the Home Page");
  });

  it("increment counter when the button is clicked", async () => {
    const wrapper = mount(Home);

    expect(wrapper.find("#counter").text()).toContain("Counter: 1");

    await wrapper.find("#counter-btn").trigger("click");

    expect(wrapper.find("#counter").text()).toContain("Counter: 2");
  });
});
