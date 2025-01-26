/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import Column from './Column';

const Row = ({ onSelectItem, getRowDataFromRow, row }) => {
	const [columns, setColumns] = useState(row.data || [{
		id: Date.now(), content: [], type: 'column',
		props: {
			backgroundColor: '#fff'
		},
		index: 1
	}]);

	const [{ isOver }, drop] = useDrop({
    accept: 'column',
    drop: (item) => addColumnToRow(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

	useEffect(() => {
		getRowDataFromRow(getRowData());
	}, [columns]);

	const addColumnToRow = () => {
		const newColumn = {
			id: Date.now(),
			content: [],
			type: 'column',
			props: {
				backgroundColor: '#fff'
			},
			index: 1
		};
		setColumns((prevColumns) => [...prevColumns, newColumn]);
	};

  const removeColumn = (columnId) => {
    const updatedColumns = columns.filter((column) => column.id !== columnId);
    setColumns(updatedColumns);
  };

  useEffect(() => {
    getRowDataFromRow(columns);
  }, [columns]);

	const getRowData = useCallback(() => {
		return columns.map((column) => ({
			id: column.id,
			props: column.props,
			index: 1,
			type: column.type,
			content: column.content.map((item) => ({
				type: item.type,
				props: item.props,
			})),
		}));
	}, [columns]);

	const updateColumnsData = (columnId, newContent, newProps) => {
		const updatedColumns = columns.map((col) =>
			col.id === columnId
				? { ...col, content: newContent || col.content, props: { ...col.props, ...newProps } }
				: col
		);
		setColumns(updatedColumns);
	};

	return (
		<div
			ref={drop}
			style={{ backgroundColor: isOver ? 'lightgray' : 'white' }}
			className='row-root bordered bordered-large'
		>
			<div className='row-component'>
				<span className='row-component-title'>Container </span>
			</div>
			{columns.map((column, index) => (
				<>
					<Column
						key={column.id}
						onSelectItem={(selectedItem) => {
							if (selectedItem.type === 'column') {
								const columnData = {
									...column,
									updateContentItem: (index, newProps) =>
										updateColumnsData(column.id, null, newProps),
								};
								onSelectItem(columnData);
							} else {
								onSelectItem(selectedItem);
							}
						}}
						setContent={(newContent) => updateColumnsData(column.id, newContent)}
						content={column.content}
						column={column}
						props={column.props}
						index={column.index}
						removeColumn={removeColumn}
					/>
				</>
			))}

		</div>
	);
};

export default Row;