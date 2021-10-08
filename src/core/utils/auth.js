import Cookies from "js-cookie"

const TokenKey = import.meta.env.VITE_APP_TOKENKEY || "dex_token"

export function getToken() {
  return Cookies.get(TokenKey)
}

// 设置过期时间，双重过期认证，todos:如果需要refreshToken,后续需要相应处理
export function setToken(token) {
  return Cookies.set(TokenKey, token, { expires: 1 })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
