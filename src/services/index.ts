import { request, gql } from "graphql-request";

const graphqlAPI: string =
  "https://api-ap-northeast-1.hygraph.com/v2/clkx41le008ok01uj2vkz5tgj/master";

export interface Post {
  author: {
    bio: string;
    name: string;
    id: string;
    avatar: {
      url: string;
    };
  };
  postId: number;
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: {
    url: string;
  };
  categories: Array<{ name: string; slug: string }>;
  content: {
    html: string;
  };
}

export const getPosts = async (): Promise<any> => {
  const query: string = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              avatar {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            thumbnail {
              url
            }
            categories {
              name
              slug
            }
            content {
              html
            }
            postId
            id
          }
        }
      }
    }
  `;

  const result: any = await request(graphqlAPI, query);
  const posts: Post[] = result.postsConnection.edges.map(
    (edge: any) => edge.node
  );

  return posts;
};

export const getCategorizedPosts = async (
  categorySlug: string
): Promise<Post[]> => {
  const query: string = gql`
    query GetCategorizedPosts($categorySlug: String!) {
      postsConnection(where: { categories_some: { slug: $categorySlug } }) {
        edges {
          node {
            author {
              bio
              name
              id
              avatar {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            thumbnail {
              url
            }
            categories {
              name
              slug
            }
            content {
              html
            }
            postId
            id
          }
        }
      }
    }
  `;

  const variables = {
    categorySlug,
  };

  const result: any = await request(graphqlAPI, query, variables);
  const posts: Post[] = result.postsConnection.edges.map(
    (edge: any) => edge.node
  );

  return posts;
};

export const getLimitedPosts = async (limit: number): Promise<Post[]> => {
  const query: string = gql`
    query GetLimitedPosts($limit: Int!) {
      postsConnection(first: $limit) {
        edges {
          node {
            author {
              bio
              name
              id
              avatar {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            thumbnail {
              url
            }
            categories {
              name
              slug
            }
            content {
              html
            }
            postId
            id
          }
        }
      }
    }
  `;

  const variables = {
    limit,
  };

  const result: any = await request(graphqlAPI, query, variables);
  const posts: Post[] = result.postsConnection.edges.map(
    (edge: any) => edge.node
  );

  return posts;
};

export const getSmallPosts = async (): Promise<Post[]> => {
  const query: string = gql`
    query MyQuery {
      postsConnection(where: { postId_in: [2, 3, 4] }) {
        edges {
          node {
            author {
              bio
              name
              id
              avatar {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            thumbnail {
              url
            }
            categories {
              name
              slug
            }
            content {
              html
            }
            postId
            id
          }
        }
      }
    }
  `;

  const result: any = await request(graphqlAPI, query);
  const posts: Post[] = result.postsConnection.edges.map(
    (edge: any) => edge.node
  );

  return posts;
};

export const getDetailedPosts = async (slug: string): Promise<Post[]> => {
  const query: string = gql`
    query MyQuery($slug: String!) {
      postsConnection(where: { slug: $slug }) {
        edges {
          node {
            author {
              bio
              name
              id
              avatar {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            thumbnail {
              url
            }
            categories {
              name
              slug
            }
            content {
              html
            }
            postId
            id
          }
        }
      }
    }
  `;

  const variables = {
    slug: slug,
  };

  try {
    const result: any = await request(graphqlAPI, query, variables);
    const posts: Post[] = result.postsConnection.edges.map(
      (edge: any) => edge.node
    );
    return posts;
  } catch (error) {
    // Handle error if necessary
    console.error(error);
    return [];
  }
};
