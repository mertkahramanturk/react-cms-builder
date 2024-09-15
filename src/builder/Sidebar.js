import React from 'react';
import { useDrag } from 'react-dnd';

const SidebarItem = ({ type, label, props = {} }) => {
  const [{ isDragging }, drag] = useDrag({
    type,
    item: { type, props },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} className='sidebar-item'>
      {label}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div  className='sidebar-root'>
      <SidebarItem type="container" label="Container" props={{id: Date.now(), type: 'container'}} />
      <SidebarItem type="column" label="Column" props={{id: Date.now(), content: [], type: 'column' }} />
      <SidebarItem type="image" label="Image" props={{ src: 'https://via.placeholder.com/250', alt: 'Placeholder Image' }} />
      <SidebarItem type="video" label="Video" props={{ src: 'youtube url paste here!', controls: true }} />
      <SidebarItem type="text" label="Text" props={{ text: 'Click here to edit this text' }} />
      <SidebarItem type="title" label="Title" props={{ level: 1, text: 'Click here to edit this title!' }} />
      <SidebarItem type="paragraph" label="Paragraph" props={{ content: 'Click here to edit this paragraph' }} />
      <SidebarItem type="button" label="Button" props={{ text: 'Edit Button Text' }} />
      <SidebarItem type="banner" label="Banner" props={{ width: 6, messageText: 'Click here to edit this banner' }} />
    </div>
  );
};

export default Sidebar;
