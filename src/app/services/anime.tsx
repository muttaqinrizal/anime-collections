import { gql, TypedDocumentNode } from '@apollo/client';

type AnimeListData = {
  Page: {
    pageInfo: {
      total: number;
      currentPage: number;
      lastPage: number;
      hasNextPage: boolean;
      perPage: number;
    };
    media: {
      id: number;
      title: {
        romaji: string;
      };
      coverImage: {
        large: string;
      };
      genres: string[];
      startDate: {
        year: number;
      };
    }[];
  };
};

type AnimeListVariables = {
  page: number,
  perPage: number,
  search?: string,
};

export function createVariables(page: number, search: string): AnimeListVariables {
  if (search === '') {
    return {
      page,
      perPage: 10
    }
  } else {
    return {
      page,
      perPage: 10,
      search
    }
  }
}

export const GET_ANIME_LIST: TypedDocumentNode<AnimeListData, AnimeListVariables> = gql(`
  query ($page: Int!, $perPage: Int!, $search: String) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (search: $search) {
        id
        title {
          romaji,
        }
        coverImage {
          large
        }
        genres
        startDate {
          year
        }
      }
    }
  }
`);
