import { describe, test } from 'vitest';
import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

// Pruebas en componentes

describe('<MyCounter />', () => {
  test('Should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders the counter value conrrectly', () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    // expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
    //   `Square: ${value * value}`,
    // );
  });

  test('Increments the counter when +1 button is clicked', async () => {
    const value = 6;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });
    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    const btnIncrement = wrapper.find('button');
    // trigger => Dispara evento
    await btnIncrement.trigger('click');

    // expect(counterLabel.text()).toContain(`Counter: ${value + 1}`);
    // expect(squareLabel.text()).toContain(`Square: ${(value + 1) * (value + 1)}`);
  });
});
