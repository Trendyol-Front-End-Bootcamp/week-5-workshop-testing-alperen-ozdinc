import { getMostPost } from "../../src/services/users-posts-service";
import { getUsersPosts } from "../../src/services/users-posts-provider";

jest.mock("../../src/services/users-posts-provider");

it("should retun users with the most post title", async () => {
  getUsersPosts.mockImplementationOnce(() => {
    return Promise.resolve([
      { userId: 1, id: 1, title: "Title 1.1", body: "Body 1.1" },
      { userId: 1, id: 2, title: "Title 1.2", body: "Body 1.2" },
      { userId: 2, id: 3, title: "Title 2.1", body: "Body 2.1" },
      { userId: 2, id: 4, title: "Title 2.2", body: "Body 2.2" },
      { userId: 2, id: 5, title: "Title 2.3", body: "Body 2.3" },
      { userId: 3, id: 6, title: "Title 3.1", body: "Body 3.2" },
      { userId: 3, id: 7, title: "Title 3.2", body: "Body 3.3" },
    ]);
  });

  const titles = await getMostPost();

  expect(titles).toEqual(["Title 2.1", "Title 2.2", "Title 2.3"]);
});

it("should return last user titles if there are more than one users with the most post number", async () => {
  getUsersPosts.mockImplementationOnce(() => {
    return Promise.resolve([
      { userId: 1, id: 1, title: "Title 1.1", body: "Body 1.1" },
      { userId: 1, id: 2, title: "Title 1.2", body: "Body 1.2" },
      { userId: 2, id: 3, title: "Title 2.1", body: "Body 2.1" },
      { userId: 2, id: 4, title: "Title 2.2", body: "Body 2.2" },
      { userId: 3, id: 5, title: "Title 3.1", body: "Body 3.1" },
      { userId: 3, id: 6, title: "Title 3.2", body: "Body 3.2" },
    ]);
  });

  const titles = await getMostPost();

  expect(titles).toEqual(["Title 3.1", "Title 3.2"]);
});
