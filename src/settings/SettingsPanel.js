import React, { useState, useEffect } from 'react';
import ImageSettings from './ImageSettings';
import VideoSettings from './VideoSettings';
import TextSettings from './TextSettings';
import TitleSettings from './TitleSettings';
import ParagraphSettings from './ParagraphSettings';
import ButtonSettings from './ButtonSettings';

const SettingsPanel = ({ selectedItem, updateSettings }) => {
  const [props, setProps] = useState(selectedItem ? selectedItem.props : {});

  useEffect(() => {
    if (selectedItem) {
      setProps(selectedItem.props);
    }
  }, [selectedItem]);

  if (!selectedItem) return null;

  const saveSettings = () => {
    if (selectedItem && selectedItem.updateContentItem) {
      selectedItem.updateContentItem(selectedItem.index, props);
    }
    updateSettings(props); 
  };
  
  

  const renderSettings = () => {
    switch (selectedItem.type) {
      case 'image':
        return <ImageSettings props={props} setProps={setProps} />;
      case 'video':
        return <VideoSettings props={props} setProps={setProps} />;
      case 'text':
        return <TextSettings props={props} setProps={setProps} />;
      case 'title':
        return <TitleSettings props={props} setProps={setProps} />;
      case 'paragraph':
        return <ParagraphSettings props={props} setProps={setProps} />;
      case 'button':
        return <ButtonSettings props={props} setProps={setProps} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h3>Edit {selectedItem.type} Settings</h3>
      {renderSettings()}
      <button onClick={saveSettings}>Save</button>
    </div>
  );
};

export default SettingsPanel;
