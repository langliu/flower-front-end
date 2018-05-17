export interface TaskPostData {
  value: string;
  list_item_id: number;
}

export interface TaskResponse {
  success: boolean;
  item_detail: ItemDetail;
}

interface ItemDetail {
  list_item_id: number;
  item_detail_id: number;
  value: string;
  status: boolean;
}
