
export type MenuItem = {
  decoration?: string;
  isGranted?:string[];
  open?:string
  active?: boolean;
  link?: string;
  text: string;
  children?: MenuItem[]
}

export interface MenuMiddleware {
  filter(menuConfig: MenuItem[]): MenuItem[]
}
