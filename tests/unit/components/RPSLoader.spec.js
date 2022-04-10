import { mount } from "@vue/test-utils";
import RPSLoader from "@/components/RPSLoader.vue";

describe("Testing del componente RPSLoader", () => {
  it("Mostrar el loader", () => {
    const wrapper = mount(<RPSLoader />, {
      props: {
        show: true
      }
    })
    const expected = '<div class="rps-loader"></div>'
    expect(wrapper.html()).toContain(expected)
  })

  it("Ocultar el loader", () => {
    const wrapper = mount(<RPSLoader />, {
      props: {
        show: false
      }
    })
    const expected = '<div class="rps-loader" style="display: none;"></div>'
    expect(wrapper.html()).toContain(expected)
  })
})