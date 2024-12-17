const Table = ({ data }) => {
  return (
    <div className="table-container">
      {data.map((table, index) => (
        <div key={index} className="table-section">
          <h3 className="table-title">{table.title}</h3>
          <table className="styled-table">
            <thead>
              <tr>
                {table.headers.map((header, i) => (
                  <th key={i}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} data-label={table.headers[j]}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Table;
