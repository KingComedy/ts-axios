import { request } from "http"
import {AxiosConfig, AxiosPromise, MethodType} from '../types'
import dispatchRequest from "./dispatchRequest"
export default class Axios {
  request(url?: any, config?: any): AxiosPromise {
    if (typeof url === 'string') {
      if (!config) {
        config = {}
      }
      config.url = url
    } else {
      config = url
    }
    return dispatchRequest(config)
  }
  get(url: string, config?: AxiosConfig):AxiosPromise {
    return this._requestMethodWithoutData('get', url, config)
  }

  delete(url: string, config?: AxiosConfig):AxiosPromise {
    return this._requestMethodWithoutData('delete', url, config)
  }

  head(url: string, config?: AxiosConfig):AxiosPromise {
    return this._requestMethodWithoutData('head', url, config)
  }
  options(url: string, config?: AxiosConfig):AxiosPromise {
    return this._requestMethodWithoutData('options', url, config)
  }
  post(url: string, data?: any, config?:AxiosConfig) {
    return this._requestMethodWithData('post', url, data, config)
  }
  put(url: string, data?: any, config?:AxiosConfig) {
    return this._requestMethodWithData('put', url, data, config)
  }
  patch(url: string, data?: any, config?:AxiosConfig) {
    return this._requestMethodWithData('patch', url, data, config)
  }
  _requestMethodWithoutData(method: MethodType, url: string, config?: AxiosConfig) {
    return this.request(
      Object.assign(config || {}, {
        method,
        url
      })
    )
  }
  _requestMethodWithData(method: MethodType, url: string, data?: any, config?: AxiosConfig) {
    return this.request(Object.assign(config || {}, {
      method,
      url,
      data
    }))
  }
}