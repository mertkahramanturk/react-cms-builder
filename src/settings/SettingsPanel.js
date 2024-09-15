import React, { useState, useEffect } from 'react';
import ImageSettings from './ImageSettings';
import VideoSettings from './VideoSettings';
import TextSettings from './TextSettings';
import TitleSettings from './TitleSettings';
import ParagraphSettings from './ParagraphSettings';
import ButtonSettings from './ButtonSettings';
import BannerSettings from './BannerSettings';

const SettingsPanel = ({ selectedItem, updateSettings, onClose }) => {
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
      case 'banner':
        return <BannerSettings props={props} setProps={setProps} />;
      default:
        return null;
    }
  };

  return (
    <div className='setting-container'>
      <div className='setting-header'>
        <h3>Edit {selectedItem.type} Settings</h3>
        <div className='setting--button-container'>
          <button className='setting--cancel-button' onClick={onClose}>Close</button>
          <button className='setting--save-button' onClick={saveSettings}>Save</button>
        </div>
      </div>

      {renderSettings()}
    </div>
  );
};

export default SettingsPanel;
