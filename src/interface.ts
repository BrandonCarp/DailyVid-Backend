
export interface YoutubeVideoSnippet {
  title: string;
  description: string;
  publishedAt: string;
  thumbnails: {
    default: {
      url: string;
    };
    medium: {
      url: string;
    };
    high: {
      url: string;
    };
  };
}

export interface YoutubeVideo {
  snippet: YoutubeVideoSnippet;
}

export interface YoutubePlaylistItem {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
      medium: {
        url: string;
      };
      high: {
        url: string;
      };
    };
  };
}

export interface YoutubePlaylistItemsResponse {
  items: YoutubePlaylistItem[];
}

export interface YoutubePlaylist {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
      medium: {
        url: string;
      };
      high: {
        url: string;
      };
    };
  };
}

export interface YoutubePlaylistsResponse {
  items: YoutubePlaylist[];
}