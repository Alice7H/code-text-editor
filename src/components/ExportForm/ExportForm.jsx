import { useState } from 'react';
import Button from '../Button';
import { exportFormat } from '../../utils/handleHtmltoImage';
import './ExportForm.css';

export default function ExportForm() {
  const [format, setFormat] = useState('png');
  const node = document.querySelector('.capture');

  const handleExport = (e) => {
    e.preventDefault();
    exportFormat(format,node);
  }

  return (
    <form className="export-form" onSubmit={handleExport}>
      <label htmlFor="format" className="screenReader-only">Selecione o formato</label>
      <select className="input" id="format" 
      onChange={(e)=> setFormat(e.target.value)}
      value={format}>
        <option value="png">PNG</option>
        <option value="jpeg">JPEG</option>
        <option value="svg">SVG</option>
      </select>
      <Button type="submit" className="button-outlined export-button">Exportar código</Button>
    </form>
  )
}
