export interface Data {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: data[];
  support: {
    url: string;
    text: string;
  };
}

export interface data {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
