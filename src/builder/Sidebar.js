import React from 'react';
import { useDrag } from 'react-dnd';

const SidebarItem = ({ type, label, props = {} }) => {
  const [{ isDragging }, drag] = useDrag({
    type,
    item: { type, props },  // props içerisine bileşenin özelliklerini ekliyoruz
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, padding: '8px', border: '1px solid #ccc', marginBottom: '4px', cursor: 'pointer' }}>
      {label}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div style={{ padding: '10px', borderRight: '1px solid #ccc' }}>
      <SidebarItem type="column" label="Column" props={{ width: 6 }} />
      <SidebarItem type="image" label="Image" props={{ src: 'https://via.placeholder.com/150', alt: 'Placeholder Image' }} />
      <SidebarItem type="video" label="Video" props={{ src: 'video.mp4', controls: true }} />
      <SidebarItem type="text" label="Text" props={{ content: 'Sample Text' }} />
      <SidebarItem type="title" label="Title" props={{ level: 1, text: 'Sample Title' }} />
      <SidebarItem type="paragraph" label="Paragraph" props={{ content: 'Sample Paragraph' }} />
      <SidebarItem type="button" label="Button" props={{ text: 'Click Me', onClick: () => alert('Button clicked!') }} />
    </div>
  );
};

export default Sidebar;
