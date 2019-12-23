export type SongsMapType = Record<string, Song>;
export type StoreLinksType = Record<string, StoreLink>;

export type Song = {
  label: string;
  soundcloudTrackId: string;
  storeLinks: StoreLinksType;
};

export type StoreLink = {
  url: string;
};
