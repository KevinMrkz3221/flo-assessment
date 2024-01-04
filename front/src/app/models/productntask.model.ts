export interface ProductTask {
  id: number;
  product: {
    id: number;
    id_api: number;
    title: string;
    price: number;
    description: string;
    image: string;
  };
  task: {
    id: number;
    created_at: string;
    title: string;
    description: string;
    done: boolean;
  };
}

export interface PTask{
  product: number;
  task: number;
}