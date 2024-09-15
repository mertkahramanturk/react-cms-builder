import React from 'react';

const BannerSettings = ({ props, setProps }) => (
  <div className='setting-root'>
   {/* <label className='setting-label'>
   <p>Appearance</p>
    <div>
      <label>Poster</label>
      <input
        type="radio"
        name="appearance"
        value="poster"
        checked={props.appearance === 'poster'}
        onChange={() => setProps({ ...props, appearance: 'poster' })}
      />
      <label>Collage Left</label>
      <input
        type="radio"
        name="appearance"
        value="collageLeft"
        checked={props.appearance === 'collageLeft'}
        onChange={() => setProps({ ...props, appearance: 'collageLeft' })}
      />
      <label>Collage Center</label>
      <input
        type="radio"
        name="appearance"
        value="collageCenter"
        checked={props.appearance === 'collageCenter'}
        onChange={() => setProps({ ...props, appearance: 'collageCenter' })}
      />
      <label>Collage Right</label>
      <input
        type="radio"
        name="appearance"
        value="collageRight"
        checked={props.appearance === 'collageRight'}
        onChange={() => setProps({ ...props, appearance: 'collageRight' })}
      />
    </div>
    </label>  */}
    <label className='setting-label'>
    <p>Minimum Height</p>
    <input
      type="text"
      value={props.minHeight}
      onChange={(e) => setProps({ ...props, minHeight: e.target.value })}
    />px
    </label>

   <label className='setting-label'>
 <p>Background</p>
    <label>Background Color</label>
    <input
      type="color"
      value={props.backgroundColor}
      onChange={(e) => setProps({ ...props, backgroundColor: e.target.value })}
    />
   </label>

   <label className='setting-label'>
<p>Background Type</p>
    <select
      value={props.backgroundType}
      onChange={(e) => setProps({ ...props, backgroundType: e.target.value })}
    >
      <option value="image">Image</option>
      <option value="video">Video</option>
    </select>

   </label>

   <label className='setting-label'>
{props.backgroundType === 'image' && (
      <>
        <p>Background Image</p>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProps({ ...props, backgroundImage: URL.createObjectURL(e.target.files[0]) })}
        />
      </>
    )}
</label>
    
<label className='setting-label'>
  <p>Background Position</p>
    <select
      value={props.backgroundPosition}
      onChange={(e) => setProps({ ...props, backgroundPosition: e.target.value })}
    >
      <option value="top left">Top Left</option>
      <option value="center">Center</option>
      <option value="bottom right">Bottom Right</option>
    </select>
   </label>
  
   <label className='setting-label'>
 <p>Background Size</p>
    <select
      value={props.backgroundSize}
      onChange={(e) => setProps({ ...props, backgroundSize: e.target.value })}
    >
      <option value="cover">Cover</option>
      <option value="contain">Contain</option>
      <option value="auto">Auto</option>
    </select>
</label>
   
<label className='setting-label'>
  <p>Content</p>
    <label>Message Text</label>
    <textarea
      value={props.messageText}
      onChange={(e) => setProps({ ...props, messageText: e.target.value })}
    />
   </label>
   <label className='setting-label'>
  <p>Link</p>
    <span>URL</span>
    <input
      type="text"
      value={props.buttonLink}
      onChange={(e) => setProps({ ...props, buttonLink: e.target.value })}
    />
</label>
<label className='setting-label'>
<p>Open in new tab </p>
      <input
        type="checkbox"
        checked={props.openInNewTab}
        onChange={(e) => setProps({ ...props, openInNewTab: e.target.checked })}
      /> YES
     
   
   </label>
    <h3>Button</h3>
    <label className='setting-label'>
      <p>Show Button</p>
    <select
      value={props.showButton}
      onChange={(e) => setProps({ ...props, showButton: e.target.value })}
    >
      <option value={false}>Never Show</option>
      <option value={true}>Show</option>
    </select> 
    </label>
   
      {props.showButton === 'true' && (
      <>
      <label className='setting-label'>
      <p>Button Text</p>
        <input
          type="text"
          value={props.buttonText}
          onChange={(e) => setProps({ ...props, buttonText: e.target.value })}
        />
      </label>
      <label className='setting-label'>
      <p>Button Type</p>
        <select
          value={props.buttonType}
          onChange={(e) => setProps({ ...props, buttonType: e.target.value })}
        >
          <option value="primary">Primary</option>
          <option value="outlinePrimary">Outline Primary</option>
        </select>
      </label>
      <label className='setting-label'>
      <p>Overlay Color</p>
        <input
          type="color"
          value={props.overlayColor}
          onChange={(e) => setProps({ ...props, overlayColor: e.target.value })}
        />
      </label>
     

   

     
      </>
    )}

    <h3>Customization</h3>

      <label className='setting-label'>
      <p>Alignment</p>
    <select
      value={props.alignment}
      onChange={(e) => setProps({ ...props, alignment: e.target.value })}
    >
      <option value="left">Left</option>
      <option value="center">Center</option>
      <option value="right">Right</option>
    </select>
      </label>
    
  </div>
);

export default BannerSettings;
