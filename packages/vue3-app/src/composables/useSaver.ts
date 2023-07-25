import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default function useSaver(element: HTMLElement, name?: string) {
  const n = name || +new Date(), // 
    { offsetHeight, offsetWidth } = element,
    pdf = new jsPDF({
      unit: "px",
      format: [offsetWidth, offsetHeight],
    });
  html2canvas(element, {
    scale: 2,
  }).then((canvas) => {
    const png = canvas.toDataURL("image/png");
    pdf.addImage(png, "png", 0, 0, offsetWidth, offsetHeight);
    pdf.save(n + ".pdf");
  });
  return { pdf };
}
