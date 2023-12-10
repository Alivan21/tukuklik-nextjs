import { httpClient } from "@/lib/httpClient";
import { BaseResponse } from "@/types/BaseResponse";
import { Category } from "@/types/Category";

export async function getCategoryList() {
  const res = await httpClient.get<BaseResponse<Category[]>>("/homepage/categories");
  if (res.data.data === undefined) return [];
  return res.data.data;
}
