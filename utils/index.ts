/**
 * 保存较大资源
 */
export function saveLarge(data: string, name: string): void {
  const dataURLtoBlob = (dataurl: string) => {
    const [head, body] = dataurl.split(","),
      [m ,type] = head.match(/:(.*?);/)!,
      bstr = atob(body);
    let n = bstr.length,
      u8arr = new Uint8Array(n);
      console.log(head)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
  console.log(head)
    return new Blob([u8arr], { type });
  };
  const blob = dataURLtoBlob(data);
  const url = URL.createObjectURL(blob),
    link = document.createElement("a");
  link.download = name;
  link.href = url;
  link.click();
}

/**
 * 获取目标类型
 * Null Undefined Number Object Boolean Function Symbol Array
 */
export function getTypeT(o: unknown) {
  const type: string = Object.prototype.toString.call(o);
  return type.match(/\w+/g)![1];
}
