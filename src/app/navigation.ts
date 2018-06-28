export interface Navigation {
  name: string;
  title: string;
  children?: (ChildrenEntity)[] | null;
  isActive?: string | null;
  
}
export interface ChildrenEntity {
  name: string;
  title: string;
  shortTitle?: string | null;
  url?: string | null;
  altText?: string | null;
  children?: (Entity)[] | null | string;
  isActive?: string | null;
  image?: string | null;
}
export interface Entity {
  name: string;
  title: string;
  shortTitle: string;
  url: string;
  altText: string;
  isRouter?: string | null;
  isActive?: string | null;
}
interface Link {
  globalLinks: Array<GlobalLinks>;
  accountLinks: Array<AccountLink>;
  navs: Array<Primary>;
  homeUrl: string;
  registerUrl: string;
  loginUrl: string;
}

interface GlobalLinks {
  url: string;
  label: string;
}

interface Primary {
  id: string;
  label: string;
  url: string;
  csrUrl: string;
  children: Array<Secondary>;
  urlShort: string;
}

interface Secondary {
  id: string;
  label: string;
  url: string;
}

interface AccountLink {
  label: string;
  url: string;
}
