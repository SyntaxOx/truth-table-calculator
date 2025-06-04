import { useState } from 'react';
import TruthTable from './TruthTable';

export default function App() {
  const [expression, setExpression] = useState('');

  return (
    <div id="container">
      <h1 id="title">Logic Truth Table Generator</h1>
      <input
        id="inputExpression"
        placeholder="Enter Logical Expression"
        value={expression}
        onChange={(e) => setExpression(e.target.value.toUpperCase())}
      />
      <TruthTable expression={expression} />
    </div>
  );
}
