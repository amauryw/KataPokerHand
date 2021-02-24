import { main } from "../main";

describe("PokerHands", () => {
  it("should say hello world", () => {
    console.log = jest.fn();
    main();
    expect(console.log).toHaveBeenCalledWith("🌲 Hello World 🍏");
  });
});
