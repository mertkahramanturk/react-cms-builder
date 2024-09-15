import React from 'react';

const DynamicRenderer = ({ data=[] }) => {
  
  const renderComponent = (item) => {
    switch (item.type) {
      case 'text':
        return (
          <div
            key={item.props.text}
            className={item.props.classNames}
            style={{ textAlign: item.props.alignment }}
            dangerouslySetInnerHTML={{ __html: item.props.text }}
          />
        );
      case 'paragraph':
        return (
          <p
            key={item.props.content}
            style={{ textAlign: item.props.alignment }}
            className={item.props.classNames}
          >
            {item.props.content}
          </p>
        );
      case 'image':
        return (
          <img
            key={item.props.src}
            src={item.props.src}
            alt={item.props.alt}
            style={{
              objectFit: item.props.objectFit,
              borderRadius: item.props.borderRadius,
            }}
            className={item.props.classNames}
          />
        );
      case 'title':
        const TitleTag = `h${item.props.level}`;
        return (
          <TitleTag
            key={item.props.text}
            className={item.props.classNames}
            style={{ textAlign: item.props.alignment }}
            dangerouslySetInnerHTML={{ __html: item.props.text }}
          />
        );
      case 'button':
        return (
          <button
            key={item.props.text}
            style={{ borderRadius: item.props.borderRadius }}
            className={item.props.classNames}
          >
            {item.props.text}
          </button>
        );
      case 'banner':
        return (
          <div
            key={item.props.messageText}
            style={{
              backgroundColor: item.props.backgroundColor,
              minHeight: `${item.props.minHeight}px`,
              backgroundImage: `url(${item.props.backgroundImage})`,
              backgroundSize: 'cover',
            }}
          >
            {item.props.messageText}
          </div>
        );
      case 'video':
        return (
          <video
            key={item.props.src}
            src={item.props.src}
            controls={item.props.controls}
            autoPlay={item.props.autoPlay}
            style={{ borderRadius: item.props.borderRadius, width: '100%' }}
          />
        );
      default:
        return null;
    }
  };

  const renderColumn = (column) => (
    <div key={column.id} className="renderer-root" style={{ flex: column.width }}>
      {column.content.map((item) => renderComponent(item))}
    </div>
  );

  const renderContainer = (container) => (
    <div key={container.id} className="renderer-root">
      <div className="renderer-columns">
        {container.data.map((column) => renderColumn(column))}
      </div>
    </div>
  );

  return <>{data.map((container) => renderContainer(container))}</>;
};

export default DynamicRenderer;
