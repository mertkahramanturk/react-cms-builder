import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './builder/Sidebar';
import Canvas from './builder/Canvas';
import SettingsPanel from './settings/SettingsPanel';
import FullScreenModal from './modal/FullScreenModal';
import './index.css'

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true); 
  };

  const handleUpdateSettings = (newProps) => {
    if (selectedItem && selectedItem.updateContentItem) {
      selectedItem.updateContentItem(selectedItem.index, newProps);
    }
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false); 
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Canvas onSelectItem={handleSelectItem} />
        <FullScreenModal isOpen={isModalOpen} onClose={closeModal}>
        <SettingsPanel selectedItem={selectedItem} updateSettings={handleUpdateSettings} onClose={closeModal}/>

        </FullScreenModal>
      </div>
    </DndProvider>
  );
};

export default App;
