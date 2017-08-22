// @flow

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

export type Action = ActionT<'SET_SEARCH_TERM', string>;
