import request from '@/utils/request'

export function useInventoryApi() {
  return {
    // 获取库存列表
    getInventoryList({ page, size }) {
      return request({
        url: '/api/inventory/list',
        method: 'get',
        params: { page, size }
      })
    },

    // 获取单个库存详情
    getInventoryById(id) {
      return request({
        url: `/api/inventory/${id}`,
        method: 'get'
      })
    },

    // 创建库存
    createInventory(data) {
      return request({
        url: '/api/inventory',
        method: 'post',
        data
      })
    },

    // 更新库存
    updateInventory(id, data) {
      return request({
        url: `/api/inventory/${id}`,
        method: 'put',
        data
      })
    },

    // 删除库存
    deleteInventory(id) {
      return request({
        url: `/api/inventory/${id}`,
        method: 'delete'
      })
    },

    // 库存入库
    stockIn(data) {
      return request({
        url: '/api/inventory/stock-in',
        method: 'post',
        data
      })
    },

    // 库存出库
    stockOut(data) {
      return request({
        url: '/api/inventory/stock-out',
        method: 'post',
        data
      })
    },

    // 获取所有商品名称列表（用于自动提示）
    getAllProductNames() {
      return request({
        url: '/api/inventory/product-names',
        method: 'get'
      })
    },

    // 根据商品名称获取库存详情（用于自动填充价格）
    getInventoryByProductName(productName) {
      return request({
        url: `/api/inventory/by-name/${encodeURIComponent(productName)}`,
        method: 'get'
      })
    }
  }
}