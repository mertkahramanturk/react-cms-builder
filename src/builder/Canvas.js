import React, { useState } from 'react';
import Row from '../components/Row';

const Canvas = ({ onSelectItem }) => {
  const [rows, setRows] = useState([{ id: 1 }]);
  const [rowData, setRowData] = useState([]);

  const getRowDataFromRow = (id, data) => {
    setRowData((prevData) => ({
      ...prevData,
      [id]: data
    }));
  };
  const exportToJson = () => {
    const allRows = Object.values(rowData);
    const jsonOutput = JSON.stringify(allRows);
    console.log(jsonOutput);
  };

  const addRow = () => {
    const newRow = { id: rows.length + 1, columns: [{ id: 1, width: 12, content: [] }] };
    setRows([...rows, newRow]);
  };

  return (
    <div style={{ padding: '10px', backgroundColor: '#f0f0f0', minHeight: '500px', width: '100%' }}>
      {rows.map((row, index) => (
        <Row
          key={index}
          onSelectItem={onSelectItem}
          getRowDataFromRow={(data) => getRowDataFromRow(row.id, data)}
        />))}
      <div className='button-container'>
        <button onClick={addRow}>Add Row</button>
        <button onClick={exportToJson}>Save as JSON</button>
      </div>
    </div>
  );
};

export default Canvas;
