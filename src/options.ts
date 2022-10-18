export enum LineType {
  comment = 'comment',
  userAgent = 'user-agent',
  allow = 'allow',
  disallow = 'disallow',
  sitemap = 'sitemap',
  crawlDelay = 'crawl-delay'
}

export interface LineSplit {
  directive: string;
  value: string;
}

export interface Line {
  type: LineType;
  content: LineSplit;
}
