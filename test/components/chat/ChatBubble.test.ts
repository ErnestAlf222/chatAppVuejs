import ChatBubble from '@/components/chat/ChatBubble.vue';
import { mount } from '@vue/test-utils';

describe('<ChatBubble/>', () => {
  test('renders own messages correctly', () => {
    // mount => Obtiene el componente

    const message = 'Hola mundo';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: true },
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
  });

  test('renders received message correctly', () => {
    const message = 'Hola mundo';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: false },
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBe(false);
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    // Prueba de que la imagen no exista
    expect(wrapper.find('img').exists()).toBe(false);
  });
});
