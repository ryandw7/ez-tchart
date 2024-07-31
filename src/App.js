import React, { useState } from 'react'
import './App.css';
import FormComp from './components/FormComp';
import DetailsComp from './components/DetailsComp'
function App() {
  const [packages, setPackages] = useState({
    currentPackage: {
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
    }, bundle1: {

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
    bundle2: {

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
    }
  })
  const setValue = (bundle, service, value) => {
    setPackages((prev) => {

      const newObj = {
        ...prev,
        [bundle]: {
          ...prev[bundle],
          [service]: value
        }
      }

      return newObj;

    });
  }
  const doneEditing = (bundle) => {
    setPackages((prev)=>{
      return {
        ...prev,
        [bundle]: {
          ...prev[bundle],
          isEdit: false
        }
      }
    })
  }
 
  const startEditing = (bundle) => {
    setPackages((prev)=>{
      return {
        ...prev,
        [bundle]: {
          ...prev[bundle],
          isEdit: true
        }
      }
    })
  }

  const editCurrentPackage = (key, valueObj) => {
    setValue('currentPackage', key, valueObj)
  };
  const editBundle1 = (key, valueObj) => {
    setValue('bundle1', key, valueObj)
  }
  const editBundle2 = (key, valueObj) => {
    setValue('bundle2', key, valueObj)
  }
  return (
    <div className="App">
      <section className="current-package">
        <h2>Current Package</h2>
        {packages.currentPackage.isEdit ? <FormComp edit={editCurrentPackage} bundle={packages.currentPackage} done={doneEditing} /> : <DetailsComp edit={startEditing} bundle={packages.currentPackage} />}
      </section>
      <section className="bundle-1">
        <h2>Current Package</h2>
        {packages.bundle1.isEdit ? <FormComp edit={editBundle1} bundle={packages.bundle1} /> : <DetailsComp bundle={packages.bundle1} />}
      </section>

      {packages.bundle2.isAdded && <section className="bundle-2">
        <h2>Current Package</h2>
        {packages.bundle2.isEdit ? <FormComp edit={editBundle2} bundle={packages.bundle2} /> : <DetailsComp bundle={packages.bundle2} />}
      </section>}

    </div>
  );
}

export default App;
