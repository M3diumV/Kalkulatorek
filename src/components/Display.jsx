export default function Display({ average }) {
    return (
      <table className="average-table">
        <tbody>
          <tr>
            <td>Średnia ważona:</td>
            <td>{average !== null ? average.toFixed(2) : '_.__'}</td>
          </tr>
        </tbody>
      </table>
    );
  }
  