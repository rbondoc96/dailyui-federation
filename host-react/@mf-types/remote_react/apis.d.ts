
    export type RemoteKeys = 'remote_react/Counter' | 'remote_react/DailyUI3';
    type PackageType<T> = T extends 'remote_react/DailyUI3' ? typeof import('remote_react/DailyUI3') :T extends 'remote_react/Counter' ? typeof import('remote_react/Counter') :any;