export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Data = {
  __typename?: 'Data';
  label: Scalars['String'];
};

export type Node = {
  __typename?: 'Node';
  data: Data;
  id: Scalars['String'];
  position: Position;
};

export type Position = {
  __typename?: 'Position';
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  allNodes?: Maybe<Array<Node>>;
};
