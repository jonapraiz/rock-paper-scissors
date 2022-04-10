import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe('Testing de la vista HomeView', () => {
  it('Se renderiza el título', () => {
    const wrapper = shallowMount(HomeView)
    expect(wrapper.find('.rps-title').text()).toEqual("create a new player")
  })
})
