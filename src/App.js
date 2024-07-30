import React, { useState } from 'react'
import './App.css';
import FormComp from './components/FormComp';
import DetailsComp from './components/DetailsComp'
function App() {
  const [packages, setPackages] = useState([{
    title: 'Current Package',
    isEdit: true,
    internet: {
      cost: 20, notes: ''
    },
    mobile: {
      cost: 0, notes: ''
    },
    entertainment: {
      cost: 0, notes: ''
    }
  }, {
    title: 'Bundle #1',
    isEdit: true,
    internet: {
      cost: 0, notes: ''
    },
    mobile: {
      cost: 0, notes: ''
    },
    entertainment: {
      cost: 0, notes: ''
    }
  },
  {
    title: 'Bundle #2',
    isAdded: false,
    isEdit: true,
    internet: {
      cost: 0, notes: ''
    },
    mobile: {
      cost: 0, notes: ''
    },
    entertainment: {
      cost: 0, notes: ''
    }
  }])
  const setValue = (bundleName, key, valueObj) => {
    setPackages(prev => {
      const bundle = prev.filter(item => item.title === bundleName);
      return [...prev.filter(item => item.title !== bundleName), {
        ...bundle,
        [key]: valueObj
      }]
    })
  };

  const editCurrentPackage = (key, valueObj) => {
    setValue('Current Package', key, valueObj)
  };
  const editBundle1 = (key, valueObj) => {
    setValue('Current Package', key, valueObj)
  }
  const editBundle2 = (key, valueObj) => {
    setValue('Current Package', key, valueObj)
  }
  return (
    <div className="App">
      <section className="current-package">
        <h2>Current Package</h2>
        {packages[0].isEdit ? <FormComp edit={editCurrentPackage} bundle={packages[0]} /> : <DetailsComp bundle={packages[0]} />}
      </section>
      <section className="bundle-1">
        <h2>Current Package</h2>
        {packages[1].isEdit ? <FormComp edit={editBundle1} bundle={packages[0]} /> : <DetailsComp bundle={packages[1]} />}
      </section>

      {packages[2].isAdded && <section className="bundle-2">
        <h2>Current Package</h2>
        {packages[1].isEdit ? <FormComp edit={editBundle2} bundle={packages[0]} /> : <DetailsComp bundle={packages[2]} />}
      </section>}

    </div>
  );
}

export default App;
