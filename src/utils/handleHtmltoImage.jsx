import { toPng, toJpeg, toSvg } from 'html-to-image';

export const exportFormat = (format, node) => {
  switch(format){
    case 'png':
      _pngFormat(node);
      break;
    case 'jpeg':
      _jpegFormat(node);
      break;
    case 'svg':
      _svgFormat(node);
      break;
    default:
      alert('Erro ao escolher o formato');
      break;
  }
}

const _pngFormat = (node) => {
  toPng(node, { cacheBust: true })
  .then((dataUrl) => {
    const link = document.createElement('a');
    link.download = `codeText-image.png`;
    link.href = dataUrl;
    link.click();
  })
  .catch((err) => {
    console.log(err)
  })
}

const _jpegFormat = (node) => {
  toJpeg(node, { cacheBust: true })
  .then((dataUrl) => {
    const link = document.createElement('a');
    link.download = `codeText-image.jpeg`;
    link.href = dataUrl;
    link.click();
  })
  .catch((err) => {
    console.log(err)
  })
}

const _svgFormat = (node) => {
  toSvg(node, { cacheBust: true })
  .then((dataUrl) => {
    const link = document.createElement('a');
    link.download = `codeText-image.svg`;
    link.href = dataUrl;
    link.click();
  })
  .catch((err) => {
    console.log(err)
  })
}
