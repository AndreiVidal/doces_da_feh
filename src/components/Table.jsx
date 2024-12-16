import React from "react";

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tamanhos</th>
          <th>2 Recheios</th>
          <th>3 Recheios</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>P - 15 fatias</td>
          <td>R$ 70,00</td>
          <td>R$ 90,00</td>
        </tr>
        <tr>
          <td>M - 30 fatias</td>
          <td>R$ 140,00</td>
          <td>R$ 175,00</td>
        </tr>
        <tr>
          <td>G - 60 fatias</td>
          <td>R$ 220,00</td>
          <td>R$ 280,00</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
