import request from '@/utils/request'
export function getDemoTestList (params) {
  return request({
    url: '/api/demo_test/list',
    method: 'get',
    params,
    redirect: '404'
  })
}

export function createDemoTest (data) {
  return request({
    url: '/api/demo_test',
    method: 'post',
    data
  })
}

export function updateDemoTest (data) {
  return request({
    url: `/api/demo_test/${data.demoId}`,
    method: 'put',
    data
  })
}

export function deleteDemoTest (demoId) {
  return request({
    url: `/api/demo_test/${demoId}`,
    method: 'delete'
  })
}

export function getDemoTestData (params) {
  // return request({
  //   url: '/api/demo_data',
  //   method: 'get',
  //   params
  // })

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          a: 1,
          b: 2
        }
      })
    }, 2000)
  })
}
