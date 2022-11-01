export default function detectBrowser() {
  let browserMobile = false
  if ('ontouchstart' in document.documentElement) {
    browserMobile = true
  } else {
    browserMobile = false
  }

  return browserMobile
}
