
const getHtmlCenter = () => {
  const htmlElement = document.documentElement;
  return [htmlElement.offsetWidth / 2, htmlElement.offsetHeight / 2];
};
export default function (a: number | "center", b: number | "center") {
  if (!a || !b) return null;
  const [centerX, centerY] = getHtmlCenter();
  const x = a === "center" ? centerX : a,
        y = b === "center" ? centerY : b;
  return document.elementFromPoint(x, y);
}
