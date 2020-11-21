import { get } from "../utils/request";

/**
 * 加载商品列表
 */
export function loadProducts(page = 1) {
  return get("/api/v1/products", { page });
}

/**
 * 根据id加载详情
 * @param {*} id
 */
export function loadProductDetail(id) {
  return get("/api/v1/products/" + id);
}
