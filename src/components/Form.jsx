export default function Form({ addItem, clearList, gradeRef }) {
    return (
      <form onSubmit={addItem} className="form-container">
        <div className="input-row">
          <div className="input-wrapper">
            <label htmlFor="grade">Ocena</label>
            <input id="grade" name="grade" type="number" step="0.1" min="0" max="6" required autoFocus ref={gradeRef} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="weight">Waga</label>
            <input id="weight" name="weight" type="number" min="1" step="1" required />
          </div>
        </div>
        <div className="button-row">
          <button type="submit">Dodaj</button>
          <button type="button" onClick={clearList}>Wyczyść</button>
        </div>
      </form>
    );
  }
  