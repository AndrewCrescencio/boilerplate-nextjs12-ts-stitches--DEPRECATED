export type Config = {
  provider?: string;
  url?: string;
  qrcode_image_url?: string;
  email?: string;
};

export type ContentBlocks = {
  title: string;
  type: string;
  type_label: string;
  config: Config;
};
