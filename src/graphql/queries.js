/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      slug
      meta
      status
      owner
      blogBlogId
      createdAt
      updatedAt
      public
      views
      blog {
        id
        name
        slug
        meta
        status
        owner
        blogBlogId
        createdAt
        updatedAt
        public
        views
        blog {
          id
          name
          slug
          meta
          status
          owner
          blogBlogId
          createdAt
          updatedAt
          public
          views
        }
        blogs {
          nextToken
        }
        posts {
          nextToken
        }
        editors {
          nextToken
        }
        tags {
          nextToken
        }
      }
      blogs (
        sortDirection: DESC
      ) {
        items {
          id
          name
          slug
          meta
          status
          owner
          blogBlogId
          createdAt
          updatedAt
          public
          views
        }
        nextToken
      }
      posts {
        items {
          id
          content
          status
          owner
          group
          postBlogId
          createdAt
          updatedAt
          public
          isReport
          comments {
            items {
                id
                commentPostId
                content
                status
                createdAt
                updatedAt
                public
                owner
            }
            nextToken
          }
        }
        nextToken
      }
      editors {
        items {
          id
          blogID
          editorID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      tags {
        items {
          id
          blogID
          tagID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slug
        meta
        status
        owner
        blogBlogId
        createdAt
        updatedAt
        public
        views
        blog {
          id
          name
          slug
          meta
          status
          owner
          blogBlogId
          createdAt
          updatedAt
          public
          views
        }
        blogs {
          nextToken
        }
        posts {
          nextToken
        }
        editors {
          nextToken
        }
        tags {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const blogsCities = /* GraphQL */ `
  query BlogsCities(
    $blogBlogId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    blogsCities(
      blogBlogId: $blogBlogId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        slug
        meta
        status
        owner
        blogBlogId
        createdAt
        updatedAt
        public
        views
        blog {
          id
          name
          slug
          meta
          status
          owner
          blogBlogId
          createdAt
          updatedAt
          public
          views
        }
        blogs {
          nextToken
        }
        posts {
          nextToken
        }
        editors {
          nextToken
        }
        tags {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      content
      status
      owner
      group
      postBlogId
      createdAt
      updatedAt
      public
      isReport
      reportData
      blog {
        id
        name
        slug
        meta
        status
        owner
        blogBlogId
        createdAt
        updatedAt
        public
        views
        blog {
          id
          name
          slug
          meta
          status
          owner
          blogBlogId
          createdAt
          updatedAt
          public
          views
        }
        blogs {
          nextToken
        }
        posts {
          nextToken
        }
        editors {
          nextToken
        }
        tags {
          nextToken
        }
      }
      comments {
        items {
          id
          commentPostId
          content
          status
          createdAt
          updatedAt
          public
          owner
        }
        nextToken
      }
      editors {
        items {
          id
          postID
          editorID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        status
        owner
        group
        postBlogId
        createdAt
        updatedAt
        public
        isReport
        reportData
        blog {
          id
          name
          slug
          meta
          status
          owner
          blogBlogId
          createdAt
          updatedAt
          public
          views
        }
        comments {
          nextToken
        }
        editors {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      commentPostId
      content
      status
      createdAt
      updatedAt
      public
      post {
        id
        content
        status
        owner
        group
        postBlogId
        createdAt
        updatedAt
        public
        isReport
        blog {
          id
          name
          slug
          meta
          status
          owner
          blogBlogId
          createdAt
          updatedAt
          public
          views
        }
        comments {
          nextToken
        }
        editors {
          nextToken
        }
      }
      owner
      editors {
        items {
          id
          commentID
          editorID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        commentPostId
        content
        status
        createdAt
        updatedAt
        public
        post {
          id
          content
          status
          owner
          group
          postBlogId
          createdAt
          updatedAt
          public
          isReport
          reportData
        }
        owner
        editors {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      name
      bio
      city
      public
      createdAt
      updatedAt
      owner
      posts {
        items {
          id
          postID
          editorID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      blogs {
        items {
          id
          blogID
          editorID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          commentID
          editorID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        bio
        city
        public
        createdAt
        updatedAt
        owner
        posts {
          nextToken
        }
        blogs {
          nextToken
        }
        comments {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUserByUsername = /* GraphQL */ `
  query GetUserByUsername(
    $username: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        name
        bio
        city
        public
        createdAt
        updatedAt
        owner
        posts {
          nextToken
        }
        blogs {
          nextToken
        }
        comments {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      name
      slug
      meta
      public
      createdAt
      updatedAt
      blogs {
        items {
          id
          blogID
          tagID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slug
        meta
        public
        createdAt
        updatedAt
        blogs {
          nextToken
        }
      }
      nextToken
    }
  }
`;
