import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
describe('Componente HomeView.vue', () => {
 test('Validación de match con el snapshot', () => {
 //Selección del sujeto de pruebas

 //Aserción
 })
})
describe('Componente HomeView.vue', () => {
    test('Validación de match con el snapshot', () => {
    //Selección el Sujeto de pruebas
    const wrapper = shallowMount(HomeView)
   
    //Aserción
    expect(wrapper.html()).toMatchSnapshot()
    })
   })
   