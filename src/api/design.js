// api/design.js
import request from '@/utils/request'

export function submitDesignData(data) {
  return request({
    url: 'http://127.0.0.1:5000/api/submit_design', // 确保这个URL与Flask后端API路由匹配
    method: 'post',
    data: data
  })
}
