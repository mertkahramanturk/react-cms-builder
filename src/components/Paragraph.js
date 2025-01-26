import React from 'react';

const ParagraphComponent = ({ text, classNames = '', alignment}) => {
	
	return (
		<div
			className={classNames}
			style={{textAlign: alignment, wordBreak :'break-word'}}
			dangerouslySetInnerHTML={{ __html: text }} 
		/>
	);
};

export default React.memo(ParagraphComponent);
