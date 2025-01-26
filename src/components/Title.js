import React from 'react';

const TitleComponent = ({ text, classNames = '', alignment = 'left' }) => {
	return (
		<div
			className={classNames}
			style={{ textAlign: alignment, wordBreak: 'break-word' }}
			dangerouslySetInnerHTML={{ __html: text }}
		/>
	);
};

export default React.memo(TitleComponent);
