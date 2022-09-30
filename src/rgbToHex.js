// 将 RGB 转换为十六进制
export const rgbToHex = (r, g, b) =>
  '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
