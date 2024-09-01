import React, { useEffect, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import ImageComponent from './Image';
import VideoComponent from './Video';
import TextComponent from './Paragraph';
import TitleComponent from './Title';
import ParagraphComponent from './Paragraph';
import ButtonComponent from './Button';

const Column = ({ width = 12, onSelectItem }) => {
  const [content, setContent] = useState([]);

  const [{ isOver }, drop] = useDrop({
    accept: ['image', 'video', 'text', 'title', 'paragraph', 'button'],
    drop: (item) => addItemToColumn(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const addItemToColumn = (item) => {
    setContent((prevContent) => [...prevContent, item]);
  };
  const updateContentItem = (index, newProps) => {
    setContent((prevContent) => {
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
    setContent(updatedContent);
  };

  return (
    <div
      ref={drop}
      style={{
        flex: width / 12,
        border: '1px solid black',
        padding: '10px',
        minHeight: '50px',
        backgroundColor: isOver ? 'lightyellow' : 'white',
      }}
    >
   {content.map((item, index) => (
        <DraggableComponent
          key={index}
          index={index}
          item={item}
          moveItem={moveItem}
          onSelectItem={onSelectItem}
          updateContentItem={updateContentItem}
        />
      ))}
    </div>
  );
};

export default Column;

const DraggableComponent = ({ item, index, moveItem, onSelectItem, updateContentItem }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: 'component',
    hover: (draggedItem) => {
      if (!ref.current) return;

      const dragIndex = draggedItem.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      moveItem(dragIndex, hoverIndex);
      draggedItem.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'component',
    item: { type: item.type, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const Component = getComponentByType(item.type);
  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        padding: '5px',
        marginBottom: '5px',
        border: '1px dashed gray',
      }}
      onClick={() => onSelectItem({ ...item, index, updateContentItem })}
    >
      <Component {...item.props} />
    </div>
  );
};

function getComponentByType(type) {
  switch (type) {
    case 'image':
      return ImageComponent;
    case 'video':
      return VideoComponent;
    case 'text':
      return TextComponent;
    case 'title':
      return TitleComponent;
    case 'paragraph':
      return ParagraphComponent;
    case 'button':
      return ButtonComponent;
    default:
      return null;
  }
}