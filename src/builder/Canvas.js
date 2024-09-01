import React, { useState } from 'react';
import Row from '../components/Row';

const Canvas = ({onSelectItem}) => {
  const [rows, setRows] = useState([{ id: 1 }]); // Bir adet Row ile başlıyoruz
  return (
    <div style={{ padding: '10px', backgroundColor: '#f0f0f0', minHeight: '500px', width: '100%' }}>
      {rows.map((row, index) => (
        <Row key={index} onSelectItem={onSelectItem} />
      ))}
    </div>
  );
};

export default Canvas;
