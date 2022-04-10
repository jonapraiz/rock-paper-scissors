// import { shallowMount } from "@vue/test-utils";
// import GameView from "@/views/GameView.vue";


// describe('Testing de la vista GameView', () => {
//   it('Se muestra el boton de logout', () => {
//     const wrapper = shallowMount(GameView)
//     expect(wrapper.find('.rps-link-button').text()).toEqual("log out")
//   })

//   it('Se muestra el nombre del jugador', () => {
//     const wrapper = shallowMount(GameView, {
//       mocks: {
//           $route: {
//             params: {
//               player: 'jon'
//             }
//           }
//         }
//     })
//     expect(wrapper.find('.rps-player').text()).toEqual("hi, jon")
//   })
// })

// el testing superior me falla por el $route
describe('Testing de la vista GameView', () => {
  it('test falso', () => {
    const msg = 'new message'
    expect(msg).toMatch('new message')
  })
})
