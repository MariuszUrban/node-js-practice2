import appMock  from "./app";
import from "./index.js";

jest.mock("./app");

describe("index.js - app entry", () => {
  it("should call app.listen()", () => {
    expect(appMock.listen).toHaveBeenCalled();
  });
});
