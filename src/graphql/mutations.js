/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPostEditor = /* GraphQL */ `
  mutation CreatePostEditor(
    $input: CreatePostEditorInput!
    $condition: ModelPostEditorConditionInput
  ) {
    createPostEditor(input: $input, condition: $condition) {
      id
      postID
      editorID
      createdAt
      updatedAt
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
      editor {
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
      owner
    }
  }
`;
export const updatePostEditor = /* GraphQL */ `
  mutation UpdatePostEditor(
    $input: UpdatePostEditorInput!
    $condition: ModelPostEditorConditionInput
  ) {
    updatePostEditor(input: $input, condition: $condition) {
      id
      postID
      editorID
      createdAt
      updatedAt
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
      editor {
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
      owner
    }
  }
`;
export const deletePostEditor = /* GraphQL */ `
  mutation DeletePostEditor(
    $input: DeletePostEditorInput!
    $condition: ModelPostEditorConditionInput
  ) {
    deletePostEditor(input: $input, condition: $condition) {
      id
      postID
      editorID
      createdAt
      updatedAt
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
      editor {
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
      owner
    }
  }
`;
export const createBlogEditor = /* GraphQL */ `
  mutation CreateBlogEditor(
    $input: CreateBlogEditorInput!
    $condition: ModelBlogEditorConditionInput
  ) {
    createBlogEditor(input: $input, condition: $condition) {
      id
      blogID
      editorID
      createdAt
      updatedAt
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
      editor {
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
      owner
    }
  }
`;
export const updateBlogEditor = /* GraphQL */ `
  mutation UpdateBlogEditor(
    $input: UpdateBlogEditorInput!
    $condition: ModelBlogEditorConditionInput
  ) {
    updateBlogEditor(input: $input, condition: $condition) {
      id
      blogID
      editorID
      createdAt
      updatedAt
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
      editor {
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
      owner
    }
  }
`;
export const deleteBlogEditor = /* GraphQL */ `
  mutation DeleteBlogEditor(
    $input: DeleteBlogEditorInput!
    $condition: ModelBlogEditorConditionInput
  ) {
    deleteBlogEditor(input: $input, condition: $condition) {
      id
      blogID
      editorID
      createdAt
      updatedAt
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
      editor {
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
      owner
    }
  }
`;
export const createCommentEditor = /* GraphQL */ `
  mutation CreateCommentEditor(
    $input: CreateCommentEditorInput!
    $condition: ModelCommentEditorConditionInput
  ) {
    createCommentEditor(input: $input, condition: $condition) {
      id
      commentID
      editorID
      createdAt
      updatedAt
      comment {
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
        }
        owner
        editors {
          nextToken
        }
      }
      editor {
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
      owner
    }
  }
`;
export const updateCommentEditor = /* GraphQL */ `
  mutation UpdateCommentEditor(
    $input: UpdateCommentEditorInput!
    $condition: ModelCommentEditorConditionInput
  ) {
    updateCommentEditor(input: $input, condition: $condition) {
      id
      commentID
      editorID
      createdAt
      updatedAt
      comment {
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
        }
        owner
        editors {
          nextToken
        }
      }
      editor {
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
      owner
    }
  }
`;
export const deleteCommentEditor = /* GraphQL */ `
  mutation DeleteCommentEditor(
    $input: DeleteCommentEditorInput!
    $condition: ModelCommentEditorConditionInput
  ) {
    deleteCommentEditor(input: $input, condition: $condition) {
      id
      commentID
      editorID
      createdAt
      updatedAt
      comment {
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
        }
        owner
        editors {
          nextToken
        }
      }
      editor {
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
      owner
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createTagBlog = /* GraphQL */ `
  mutation CreateTagBlog(
    $input: CreateTagBlogInput!
    $condition: ModelTagBlogConditionInput
  ) {
    createTagBlog(input: $input, condition: $condition) {
      id
      blogID
      tagID
      createdAt
      updatedAt
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
      tag {
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
      owner
    }
  }
`;
export const updateTagBlog = /* GraphQL */ `
  mutation UpdateTagBlog(
    $input: UpdateTagBlogInput!
    $condition: ModelTagBlogConditionInput
  ) {
    updateTagBlog(input: $input, condition: $condition) {
      id
      blogID
      tagID
      createdAt
      updatedAt
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
      tag {
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
      owner
    }
  }
`;
export const deleteTagBlog = /* GraphQL */ `
  mutation DeleteTagBlog(
    $input: DeleteTagBlogInput!
    $condition: ModelTagBlogConditionInput
  ) {
    deleteTagBlog(input: $input, condition: $condition) {
      id
      blogID
      tagID
      createdAt
      updatedAt
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
      tag {
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
      owner
    }
  }
`;
