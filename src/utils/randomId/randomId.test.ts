import { randomId } from "./randomId";

describe("randomId", () => {
  test("get count calls random id", () => {
    const jestRandomId = jest.fn(randomId);

    jestRandomId();

    expect(jestRandomId).toHaveReturnedTimes(1);
  });

  test("get random id returned string", () => {
    const result = randomId();
    expect(typeof result === "string").toBe(true);
  });
});
