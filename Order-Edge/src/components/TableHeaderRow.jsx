const TableHeaderRow = ({thClassName = '', colList = []}) => {
	return (
		<tr>
			{colList.map((col, index) => (
				<th
					key={index}
					scope="col"
					className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${thClassName}`}
				>
					{col}
				</th>
			))}
		</tr>
	)
}

export default TableHeaderRow
