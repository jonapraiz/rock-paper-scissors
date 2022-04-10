import { shallowMount } from "@vue/test-utils";
import ScoreboardView from "@/views/ScoreboardView.vue";


describe('Testing de la vista ScoreboardView', () => {
  it('Se renderiza el título', () => {
    const wrapper = shallowMount(ScoreboardView)
    expect(wrapper.find('.rps-title').text()).toEqual("scoreboard")
  })
})
