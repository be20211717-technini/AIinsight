export interface Creator {
  rank: number;
  name: string;
  articles: number;
  description?: string;
}

export interface KeywordData {
  name: string;
  count: number;
  color: string;
}

export interface TitlePattern {
  icon: any;
  name: string;
  example: string;
  effect: string;
  color: string;
}

export interface SentimentData {
  name: string;
  value: number;
  color: string;
}
