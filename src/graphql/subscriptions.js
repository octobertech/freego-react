/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlogByBlogId = /* GraphQL */ `
  subscription OnCreateBlogByBlogId($blogBlogId: ID!) {
    onCreateBlogByBlogId(blogBlogId: $blogBlogId) {
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
      blogs {
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
          reportData
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
export const onUpdateBlogByBlogId = /* GraphQL */ `
  subscription OnUpdateBlogByBlogId($blogBlogId: ID!) {
    onUpdateBlogByBlogId(blogBlogId: $blogBlogId) {
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
      blogs {
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
          reportData
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
export const onCreatePostByBlogId = /* GraphQL */ `
  subscription OnCreatePostByBlogId($postBlogId: ID!) {
    onCreatePostByBlogId(postBlogId: $postBlogId) {
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
export const onUpdatePostByBlogId = /* GraphQL */ `
  subscription OnUpdatePostByBlogId($postBlogId: ID!) {
    onUpdatePostByBlogId(postBlogId: $postBlogId) {
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
export const onCreateCommentByPostId = /* GraphQL */ `
  subscription OnCreateCommentByPostId($commentPostId: ID!) {
    onCreateCommentByPostId(commentPostId: $commentPostId) {
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
export const onUpdateCommentByPostId = /* GraphQL */ `
  subscription OnUpdateCommentByPostId($commentPostId: ID!) {
    onUpdateCommentByPostId(commentPostId: $commentPostId) {
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
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
      blogs {
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
          reportData
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
      blogs {
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
          reportData
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
      blogs {
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
          reportData
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
