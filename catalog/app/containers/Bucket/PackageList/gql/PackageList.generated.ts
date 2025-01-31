/* eslint-disable @typescript-eslint/naming-convention */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '../../../../model/graphql/types.generated'

export type containers_Bucket_PackageList_gql_PackageListQueryVariables = Types.Exact<{
  bucket: Types.Scalars['String']
  filter: Types.Maybe<Types.Scalars['String']>
  page: Types.Scalars['Int']
  perPage: Types.Scalars['Int']
  order: Types.PackageListOrder
}>

export type containers_Bucket_PackageList_gql_PackageListQuery = {
  readonly __typename: 'Query'
} & {
  readonly packages: Types.Maybe<
    { readonly __typename: 'PackageList' } & {
      readonly page: ReadonlyArray<
        { readonly __typename: 'Package' } & Pick<
          Types.Package,
          'bucket' | 'name' | 'modified'
        > & {
            readonly revisions: { readonly __typename: 'PackageRevisionList' } & Pick<
              Types.PackageRevisionList,
              'total'
            >
            readonly accessCounts: Types.Maybe<
              { readonly __typename: 'AccessCounts' } & Pick<
                Types.AccessCounts,
                'total'
              > & {
                  readonly counts: ReadonlyArray<
                    { readonly __typename: 'AccessCountForDate' } & Pick<
                      Types.AccessCountForDate,
                      'date' | 'value'
                    >
                  >
                }
            >
          }
      >
    }
  >
}

export const containers_Bucket_PackageList_gql_PackageListDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'containers_Bucket_PackageList_gql_PackageList' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'bucket' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'perPage' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'order' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'PackageListOrder' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'packages' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'bucket' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'bucket' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'page' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'number' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'perPage' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'perPage' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'order' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'order' } },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'bucket' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'modified' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'revisions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'accessCounts' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'counts' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'date' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'value' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  containers_Bucket_PackageList_gql_PackageListQuery,
  containers_Bucket_PackageList_gql_PackageListQueryVariables
>

export { containers_Bucket_PackageList_gql_PackageListDocument as default }
