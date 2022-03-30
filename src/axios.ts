import Axios from "./core/Axios"
import { extend } from "./helpers/uitls"
import { AxiosInstance } from "./types"

function createInstance() {
  const context = new Axios()

  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)
  return instance  as AxiosInstance
}
const axios = createInstance()
export default axios