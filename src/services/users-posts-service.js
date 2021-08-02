import { getUsersPosts } from "./users-posts-provider.js";

export const getMostPost = async () => {
  const postCount = {};
  const titleList = [];
  const usersPost = await getUsersPosts();

  usersPost.forEach((post) => {
    if (post.userId in postCount) {
      postCount[post.userId]++;
    } else {
      postCount[post.userId] = 1;
    }
  });
  
  const maxUserId = Object.keys(postCount).reduce((a, b) => {
    return postCount[a] > postCount[b] ? a : b;
  });

  usersPost.forEach((post) => {
    if (post.userId == maxUserId) {
      titleList.push(post.title);
    }
  });
  return titleList;
};

