import * as Types from '../../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAllNodesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllNodesQuery = { __typename?: 'Query', allNodes?: Array<{ __typename?: 'Node', id: string, data: { __typename?: 'Data', label: string }, position: { __typename?: 'Position', x: number, y: number } }> | null };


export const GetAllNodesDocument = gql`
    query getAllNodes {
  allNodes {
    id
    data {
      label
    }
    position {
      x
      y
    }
  }
}
    `;

/**
 * __useGetAllNodesQuery__
 *
 * To run a query within a React component, call `useGetAllNodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllNodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllNodesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllNodesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllNodesQuery, GetAllNodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllNodesQuery, GetAllNodesQueryVariables>(GetAllNodesDocument, options);
      }
export function useGetAllNodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllNodesQuery, GetAllNodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllNodesQuery, GetAllNodesQueryVariables>(GetAllNodesDocument, options);
        }
export type GetAllNodesQueryHookResult = ReturnType<typeof useGetAllNodesQuery>;
export type GetAllNodesLazyQueryHookResult = ReturnType<typeof useGetAllNodesLazyQuery>;
export type GetAllNodesQueryResult = Apollo.QueryResult<GetAllNodesQuery, GetAllNodesQueryVariables>;