import React, { useEffect, useState } from 'react';
import base from './base'

function App() {

  const [scenarios, setScenarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = base.db;
      const data = await db.collection("scenarios").get();
      setScenarios(data.docs.map(doc => doc.data()));
    }
    fetchData().catch((error) => { console.log(`Cannot fetch scenarios: ${error}`); });
  }, []);

  return (
    <div className="App">
       <h1>Scenarios here!</h1>
       <ul>
       {scenarios.map(s => (
         <li key={s.id}>{s.title}</li>
       ))}
       </ul>
    </div>
  );
}

export default App;
