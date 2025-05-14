export default function Table({ items, removeItem }) {
    return (
      <table>
        <thead>
          <tr>
            <th className="delete-cell"></th>
            <th>Ocena</th>
            <th>Waga</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="delete-cell">
                <span className="delete-button" onClick={() => removeItem(index)}>x</span>
              </td>
              <td>{item.value}</td>
              <td>{item.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  