
    export type RemoteKeys = 'remote_vue/Counter';
    type PackageType<T> = T extends 'remote_vue/Counter' ? typeof import('remote_vue/Counter') :any;