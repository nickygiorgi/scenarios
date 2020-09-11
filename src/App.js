import React, { useEffect, useState } from 'react';
import firebase from './firebase'

function App() {

  const [scenarios, setScenarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("scenarios").get();
      setScenarios(data.docs.map(doc => doc.data()));
    }
    fetchData();
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
