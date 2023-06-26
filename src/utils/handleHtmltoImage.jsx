import { toPng, toJpeg, toSvg } from 'html-to-image';

export const exportFormat = (format, node) => {
  switch (format) {
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

const createLinkElement = (dataUrl, formatLowercase) => {
  const link = document.createElement('a');
  link.download = `codeText-image.${formatLowercase}`;
  link.href = dataUrl;
  link.click();
}

const _pngFormat = (node) => {
  toPng(node, { cacheBust: true })
    .then((dataUrl) => {
      createLinkElement(dataUrl, 'png');
    })
    .catch((err) => {
      console.log(err)
    })
}

const _jpegFormat = (node) => {
  toJpeg(node, { cacheBust: true })
    .then((dataUrl) => {
      createLinkElement(dataUrl, 'jpeg');
    })
    .catch((err) => {
      console.log(err)
    })
}

const _svgFormat = (node) => {
  toSvg(node, { cacheBust: true })
    .then((dataUrl) => {
      createLinkElement(dataUrl, 'svg');
    })
    .catch((err) => {
      console.log(err)
    })
}
