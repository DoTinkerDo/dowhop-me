// @flow

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

declare module 'main.scss' {
  declare var exports: 'main.scss';
}
