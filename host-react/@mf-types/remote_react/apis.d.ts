
    export type RemoteKeys = 'remote_react/Counter';
    type PackageType<T> = T extends 'remote_react/Counter' ? typeof import('remote_react/Counter') :any;