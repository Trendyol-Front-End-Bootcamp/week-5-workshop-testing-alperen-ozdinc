import { expect } from "@jest/globals";
import axios from "axios";
import { getUsersPosts } from "../../src/services/users-posts-provider";

jest.mock("axios");

it("calls axios and returns posts of users", async () => {
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: [
        {
          userId: 1,
          id: 1,
          title: "title1",
          body: "body1",
        },
      ],
    })
  );
  const result = await getUsersPosts();
  expect(result).toEqual([
    {
      userId: 1,
      id: 1,
      title: "title1",
      body: "body1",
    },
  ]);
});
