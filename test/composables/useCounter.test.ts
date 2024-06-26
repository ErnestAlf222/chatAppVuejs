import { useCounter } from '@/composables/useCounter';

describe('useCounter', () => {
  test('Initializes counter with provided initial value', () => {
    const initialValue = 10;
    const { counter, squareCounter } = useCounter(initialValue);

    expect(counter.value).toBe(initialValue);
  });
});
