const Table = ({ data }) => {
  return (
    <div>
      {data.map((table, index) => (
        <div key={index} className="table-section">
          <h3 className="table-title">{table.title}</h3> {/* Adicione o título aqui */}
          <table>
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
                    <td key={j}>{cell}</td>
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
