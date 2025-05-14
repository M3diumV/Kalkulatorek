import { useState, useRef } from 'react';
import Header from '../components/Header';
import GradeForm from '../components/Form';
import GradeTable from '../components/Table';
import AverageDisplay from '../components/Display';
import '/src/index.css';

export default function MainView() 
{
  const [items, setItems] = useState([]);
  const gradeRef = useRef(null);

  const addItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = parseFloat(formData.get('grade'));
    const weight = parseFloat(formData.get('weight'));
    if (!isNaN(value) && !isNaN(weight) && weight > 0) 
      {
      setItems([...items, { value, weight }]);
      e.target.reset();
      gradeRef.current?.focus();
    }
  };

  const clearList = () => setItems([]);
  const removeItem = (index) => setItems(items.filter((_, i) => i !== index));

  const calcAverage = () => 
    {
    if (items.length === 0) return null;
    const sum = items.reduce((acc, item) => acc + item.value * item.weight, 0);
    const total = items.reduce((acc, item) => acc + item.weight, 0);
    return sum / total;
  };

  return (
    <div className="container">
      <Header />
      <GradeForm addItem={addItem} clearList={clearList} gradeRef={gradeRef} />
      {items.length > 0 && <GradeTable items={items} removeItem={removeItem} />}
      <AverageDisplay average={calcAverage()} />
    </div>
  );
}
