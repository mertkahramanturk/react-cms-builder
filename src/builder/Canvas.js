import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Row from '../components/Row';

const Canvas = ({ onSelectItem, handleSave }) => {
  const [rows, setRows] = useState([{id: Date.now(), type: 'container'}]);

  const [{ isOver }, drop] = useDrop({
    accept: ['container'],
    drop: (item) => addRow(), 
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const addRow = () => {
    const newRow = { id: Date.now(), type: 'container'};
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const getRowDataFromRow = (id, data) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, data } : row))
    );
  };

  const exportToJson = () => {
    const jsonOutput = JSON.stringify(rows);
    if (handleSave) {
      handleSave(jsonOutput);
    } else {
      console.log(jsonOutput);
    }
  };

  return (
    <div ref={drop} style={{ padding: '10px', backgroundColor: isOver ? '#cce7ff' : '#ececec', minHeight: '100%', width: '100%' }}>
      {rows.map((row, index) => (
        <Row
          key={index}
          onSelectItem={onSelectItem}
          getRowDataFromRow={(data) => getRowDataFromRow(row.id, data)}
        />
      ))}
      <div className='button-container'>
        <button onClick={exportToJson}>Save as JSON</button>
      </div>
    </div>
  );
};

export default Canvas;
