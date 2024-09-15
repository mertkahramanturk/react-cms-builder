import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import ImageComponent from './Image';
import VideoComponent from './Video';
import TextComponent from './Text';
import TitleComponent from './Title';
import ParagraphComponent from './Paragraph';
import ButtonComponent from './Button';
import BannerComponent from './Banner'
import RowComponent from './Row';
import ColumnComponent from './Column';

const DraggableComponent = ({ item, index, moveItem, onSelectItem, updateContentItem, removeItem }) => {
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
      className="draggable-component"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        padding: '5px',
        marginBottom: '5px',
        border: '1px dashed gray',
         position: 'relative'
      }}
      onClick={() => onSelectItem({ ...item, index, updateContentItem })}
    >
      <Component {...item.props} onSelectItem={onSelectItem} />
      <div className="toolbar">
            <div className="toolbar-wrapper">
              <div className="toolbar-element">
                <span
                  className="delete-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeItem(index);
                  }}
                >
                  Trash
                </span>
              </div>
              <div className="toolbar-element">
                <span
                  className="delete-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectItem({ ...item, index, updateContentItem })
                  }}
                >
                  Edit
                </span>
              </div>
              <div className="toolbar-element">
                <span
                  className="delete-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Move
                </span>
              </div>
            </div>
          </div>
    </div>
  );
};

function getComponentByType(type) {
  switch (type) {
    case 'row':
      return RowComponent;
    case 'column':
      return ColumnComponent;
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
    case 'banner':
      return BannerComponent;
    default:
      return null;
  }
}

export default DraggableComponent;
