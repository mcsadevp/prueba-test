// tests/unit/views/About.spec.js
import { shallowMount, mount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'
import { createRouter, createWebHistory } from "vue-router";

describe('AboutView.vue', () => {
  it('renders About page', () => {
    const wrapper = shallowMount(AboutView)
    expect(wrapper.text()).toMatch('This is an about page')
    //Aserción
    expect(wrapper.html()).toMatchSnapshot()
  })
});
it("Test - Probar la existencia del componente en la ruta", async () => {
  const routes = [
    {
      path: "/about",
      name: "About",
      component: () => AboutView,
    },
  ];
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

  router.push("/about");
  await router.isReady();

  const wrapper = mount(AboutView, {
    global: {
      plugins: [router],
    },
  });

  expect(wrapper.findComponent(AboutView).exists()).toBe(true);
});