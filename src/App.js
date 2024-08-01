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
    setPackages((prev) => {
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
    setPackages((prev) => {
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
  const addSecondPackage = () => {
    setPackages((prev) => {
      return {
        ...prev,
        bundle2: {
          ...prev.bundle2,
          isAdded: true
        }
      }
    })
  };

  const removeSecondPackage = () => {
    setPackages((prev) => {
      return {
        ...prev,
        bundle2: {
          ...prev.bundle2,
          isAdded: false
        }
      }
    })
  }
  return (
    <div className="App">

      <section className="current-package">
        <h2>Current Package</h2>
        {packages.currentPackage.isEdit ? <FormComp edit={editCurrentPackage} bundle={packages.currentPackage} done={() => doneEditing('currentPackage')} /> : <DetailsComp edit={startEditing} bundle={packages.currentPackage} />}
      </section>
      <section className={packages.bundle2.isAdded ? 'bundle-double-left' : 'bundle-1-single'} >
        <h2>{packages.bundle2.isAdded ? 'Package 1' : 'New Package'}</h2>
        {packages.bundle1.isEdit ? <FormComp edit={editBundle1} bundle={packages.bundle1} done={() => doneEditing('bundle1')} /> : <DetailsComp bundle={packages.bundle1} />}
      </section>
      {packages.bundle2.isAdded ? 
      <button onClick={removeSecondPackage} className="package-2-button">-</button>
      :
      <button onClick={addSecondPackage} className="package-2-button">+</button>} 
      {packages.bundle2.isAdded && <section className="bundle-double-right">
        <h2>Package 2</h2>
        {packages.bundle2.isEdit ? <FormComp edit={editBundle2} bundle={packages.bundle2} done={() => doneEditing('bundle2')} /> : <DetailsComp bundle={packages.bundle2} />}
      </section>}

    </div>
  );
}

export default App;
