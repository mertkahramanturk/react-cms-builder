import React from 'react';

const ColumnSettings = ({ props, setProps }) => {
	const handleBackgroundColorChange = (e) => {
		setProps({ ...props, backgroundColor: e.target.value });
	};
	return (
		<div className='setting-root'>
			<label className='setting-label'>
				<p htmlFor="backgroundColor">Background Color:</p>
				<input
					type="color"
					id="backgroundColor"
					value={props.backgroundColor || '#fff'}
					onChange={handleBackgroundColorChange}
				/>
			</label>
		</div>
	);
};

export default ColumnSettings;
