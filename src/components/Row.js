/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import Column from './Column';

const Row = ({ onSelectItem, getRowDataFromRow }) => {
  const [columns, setColumns] = useState([{ id: Date.now(), width: 12, content: [] }]);

  const [{ isOver }, drop] = useDrop({
    accept: 'column',
    drop: (item) => addColumnToRow(),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });


  useEffect(() => {
    getRowDataFromRow(getRowData());
  }, [columns]);

  const addColumnToRow = () => {
    const newColumn = {
      id: Date.now(),
      width: 12,
      content: [],
    };
    setColumns((prevColumns) => [...prevColumns, newColumn]);
  };
 
  const getRowData = useCallback(() => {
    return columns.map((column) => ({
      id: column.id,
      width: column.width,
      content: column.content.map((item) => ({
        type: item.type,
        props: item.props,
      })),
    }));
  }, [columns]);

  const updateColumnsData = (columnId, newContent) => {
    const updatedColumns = columns.map((col) =>
      col.id === columnId ? { ...col, content: newContent } : col
    );
    setColumns(updatedColumns);
  };
  return (
    <div
      ref={drop}
      style={{

        backgroundColor: isOver ? 'lightgray' : 'white',
      }}
      className='row-root bordered bordered-large'
    >
      <div className='row-component'>
        <span className='row-component-title'>Row </span>
      </div>
      {columns.map((column, index) => (
        <>
        <Column
          key={index}
          width={column?.width}
          onSelectItem={onSelectItem}
          setContent={(newContent) => updateColumnsData(column.id, newContent)}
          content={column.content}
        />
           
        </>
        
      ))}
     
    </div>
  );
};

export default Row;