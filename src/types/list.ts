export type ListItem = {
  text: string;
  href: string;
};

export type List = ListItem[];
export type ListItemFile = ListItem & {
  size: string;
};
export type ListFiles = ListItemFile[];
