interface Props {
	data: { [key: string]: number };
	headers: string[];
	title: string;
}

const Table = ( { data, headers, title }: Props ) => {
	if (!data || Object.keys(data).length === 0) {
		return null;
	}

	return (
		<div>
			<h3>{title}</h3>
			<table className="table table-sm table-bordered table-hover">
				<thead className="thead-dark">
				<tr>
					{headers.map((header) => (
						<th key={header}>{header}</th>
					))}
				</tr>
				</thead>
				<tbody>
				{Object.entries(data).map(([key, value]) => (
					<tr key={key}>
						<td>{key}</td>
						<td>{value}</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;