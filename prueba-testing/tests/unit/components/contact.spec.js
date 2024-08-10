// tests/unit/views/Contact.spec.js
import { shallowMount, mount} from '@vue/test-utils'
import { createRouter, createWebHistory } from "vue-router";
import ContactView from '@/views/ContactView.vue';

describe('ContactView.vue', () => {
  it('renders Contact page', () => {
    const wrapper = shallowMount(ContactView)
    expect(wrapper.text()).toMatch('This is the Contact page.')
  })
})
it("Test - Probar la existencia del componente en la ruta", async () => {
  const routes = [
    {
      path: "/contact",
      name: "Contact",
      component: () => ContactView,
    },
  ];
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

  router.push("/contact");
  await router.isReady();

  const wrapper = mount(ContactView, {
    global: {
      plugins: [router],
    },
  });

  expect(wrapper.findComponent(ContactView).exists()).toBe(true);
});