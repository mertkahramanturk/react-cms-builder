import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Column from './Column';

const Row = ({onSelectItem}) => {
  const [columns, setColumns] = useState([]);

  const [{ isOver }, drop] = useDrop({
    accept: 'column',
    drop: (item) => addColumnToRow(item.column),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const addColumnToRow = (column) => {
    setColumns((prevColumns) => [...prevColumns, column]);
  };

  return (
    <div
      ref={drop}
      style={{
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid black',
        padding: '10px',
        minHeight: '50px',
        backgroundColor: isOver ? 'lightgray' : 'white',
        marginBottom: '10px',
      }}
    >
      {columns.map((column, index) => (
        <Column key={index} width={column?.width} onSelectItem={onSelectItem} />
      ))}
    </div>
  );
};

export default Row;
