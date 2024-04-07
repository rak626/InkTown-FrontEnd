import PropTypes from 'prop-types';
const TableHeaderRow = ({thClassName = '', colList = []}) => {
	return (
		<tr>
			{colList.map((col, index) => (
				<th
					key={index}
					scope="col"
					className={`px-6 py-3 text-left text-xs font-medium bg-gray-200 text-gray-500 uppercase tracking-wider ${thClassName}`}
				>
					{col}
				</th>
			))}
		</tr>
	)
}

TableHeaderRow.propTypes = {
	thClassName: PropTypes.string,
	colList: PropTypes.array
};
export default TableHeaderRow
