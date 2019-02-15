// 根據給定的cookie字符串，獲取指定名稱的cookie值
export function getCookie(cookieString, name) {
  const resultMap = {}
  const sections = cookieString.split(';')

  sections.forEach(section => {
    const cleanSection = section.trim()

    const splitContent = cleanSection.split('=')
    const splitName = splitContent[0]
    const splitValue = splitContent[1]

    resultMap[splitName] = splitValue
  })

  return resultMap[name]
}

// 设置cookie
export function setCookie(name, value, expiredHours) {
  var d = new Date()
  d.setTime(d.getTime() + (expiredHours * 60 * 60 * 1000))
  var expires = 'expires=' + d.toUTCString()
  document.cookie = name + '=' + value + '; ' + expires
}

// 清除cookie
export function clearCookie() {
  var keys = document.cookie.match(/[^ =;]+(?==)/g) || []

  keys.forEach(key => {
    document.cookie = key + '=0;expires=' + new Date(0).toUTCString()
  })
}