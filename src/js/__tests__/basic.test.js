import test1 from "../user";
import httpGet from "../http";

jest.mock("../http");

beforeEach(() => {
  jest.resetAllMocks();
});

test("getHttpTest", () => {
  httpGet.mockReturnValue({status: 'ok', level: 50});

  test1(1);

  expect(httpGet).toBeCalledWith("https://server/user/1");
});

test("getHttpTest", () => {
  httpGet.mockReturnValue({});

  test1(1);

  expect(httpGet).toBeCalledWith("https://server/user/1");
});
