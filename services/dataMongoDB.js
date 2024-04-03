const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

const createUser = async (name, role, email) => {
  const newUser = new User({ name, role, email });
  return await newUser.save();
};

const getAllUsers = async () => {
  return await User.find().populate("posts");
};

const getUsersWithPost = async () => {
  try {
    const usersWithPosts = await User.aggregate([
      {
        $lookup: {
          from: "posts",
          localField: "_id",
          foreignField: "user",
          as: "posts",
        },
      },
      {
        $addFields: {
          postCount: { $size: "$posts" },
        },
      },
      {
        $match: { postCount: { $gte: 1 } },
      },
    ]);
    return getUsersWithPost;
  } catch (error) {
    console.error("Error in getUsersWithPost", error);
    throw error;
  }
};

const getUsersWithMore2Comments = async () => {
  try {
    const usersWithMoreLike2Comments = await User.aggregate([
      {
        $lookup: {
          from: "comment",
          localField: "_id",
          foreignField: "user",
          as: "comment",
        },
      },
      {
        $addFields: {
          commentCount: { $size: "$comment" },
        },
      },
      {
        $match: { commentCount: { $gte: 2 } },
      },
    ]);
    return usersWithMoreLike2Comments;
  } catch (error) {
    console.error("Error in getUsersWithPost", error);
    throw error;
  }
};

const createPost = async (title, content, userId) => {
  const newPost = new Post({ title, content, user: userId });
  await newPost.save();
  return await User.findByIdAndUpdate(
    userId,
    { $push: { posts: newPost._id } },
    { new: true }
  );
};

const createComment = async (login, content, userId) => {
  const newComment = new Comment({ login, content, user: userId });
  await newComment.save();
  return await User.findByIdAndUpdate(
    userId,
    { $push: { comment: newComment._id } },
    { new: true }
  );
};

const deleteUserPostsAndComment = async (userId) => {
  try {
    await User.findByIdAndDelete(userId);
    await Post.deleteMany({ user: userId });
    await Comment.deleteMany({ user: userId });
  } catch (error) {
    throw new Error("Failed to delete data");
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUsersWithPost,
  getUsersWithMore2Comments,
  createPost,
  createComment,
  deleteUserPostsAndComment,
};
