import type { ShareLinks } from "./share-links";
import type { ContentBlocks } from "./content-blocks";
import type { SocialMediaLinks } from "./social-media-links";

export type Profile = {
  name: string;
  bio: string;
  avatar_url: string;
  social_media_links: ShareLinks;
  content_blocks: ContentBlocks;
  share_links: SocialMediaLinks;
};
