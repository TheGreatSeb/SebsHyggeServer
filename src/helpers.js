/**
 * Convert hex string to rgb array
 * @param {string} hex Hex color code
 * @returns {number[]} Array of rgb values
 */
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16),
  ] : null;
};

/**
 * Convert rgb array to hex string
 * @param {number[]} rgb Array of rgb values
 * @returns {string} Hex color code (includes #)
 */
// eslint-disable-next-line no-bitwise,implicit-arrow-linebreak
const rgbToHex = rgb => `#${((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1)}`;

/**
 * Lerp between color a and b using rgb
 * @param {number[]} a Start color
 * @param {number[]} b End color
 * @param {number} amount Amount towards end color, clamped to 0-1
 * @returns {number[]} Array of rgb values
 */
const lerpColor = (a, b, amount) => {
  const result = a.slice();
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + Math.max(0, Math.min(amount, 1)) * (b[i] - a[i]));
  }
  return result;
};

/**
 * Prepends a zero if value is under 10
 * @param {number} value
 * @returns {string}
 */
function doubleDigit(value) {
  return value < 10 ? `0${value}` : value.toString();
}

export {
  hexToRgb, rgbToHex, lerpColor, doubleDigit,
};
