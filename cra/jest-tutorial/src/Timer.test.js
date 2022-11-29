import Timer from './Timer';

// Timer Test
test("Timer Test", () => {
  const el = <Timer />;
  expect(el).toMatchSnapshot();
});