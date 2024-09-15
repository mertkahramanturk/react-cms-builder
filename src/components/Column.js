/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import DraggableComponent from './DraggableComponent';

const Column = ({ width = 12, onSelectItem, setContent, column, key, ...props }) => {
  const [content, setLocalContent] = useState([]);

  useEffect(() => {
    setContent(content);
  }, [content]);

  const [{ isOver }, drop] = useDrop({
    accept: ['image', 'video', 'text', 'title', 'paragraph', 'button', 'banner'],
    drop: (item) => addItemToColumn(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const addItemToColumn = (item) => {
    setLocalContent((prevContent) => [...prevContent, item]);
  };

  const updateContentItem = (index, newProps) => {
    setLocalContent((prevContent) => {
      const updatedContent = prevContent.map((item, i) =>
        i === index ? { ...item, props: { ...item.props, ...newProps } } : item
      );
      return updatedContent;
    });
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const draggedItem = content[dragIndex];
    const updatedContent = [...content];
    updatedContent.splice(dragIndex, 1);
    updatedContent.splice(hoverIndex, 0, draggedItem);
    setLocalContent(updatedContent);
  };

  const removeItem = (index) => {
    setLocalContent((prevContent) => prevContent.filter((_, i) => i !== index));
  };

  return (
    <div
      ref={drop}
      style={{
        flex: width / 12,
        backgroundColor: isOver ? 'lightyellow' : 'white',
      }}
      className='column-root'
    >
      <div className='column-component'>
        <span className='column-component-title' onClick={() => onSelectItem({ ...column,  key, updateContentItem })}>Column </span>
      </div>
      {content.map((item, index) => (
        <div className="column-element">
          <DraggableComponent
            key={index}
            index={index}
            item={item}
            moveItem={moveItem}
            onSelectItem={onSelectItem}
            updateContentItem={updateContentItem}
            removeItem={removeItem}
          />
        </div>
      ))}
    </div>
  );
};

export default Column;
