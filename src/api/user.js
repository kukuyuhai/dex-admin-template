import request from "@/utils/request"

export function login(data) {
  return request({
    url: "/",
    method: "POST",
    data
  })
}
