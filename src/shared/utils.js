export function getDeviceOrientation(){
  return window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape"
}