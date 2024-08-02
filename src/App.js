import React, { useState } from 'react'
import './styles/App.css';
import FormComp from './components/FormComp';
import DetailsComp from './components/DetailsComp'
import PriceCompare from './components/PriceCompare';
import packagesObj from './data/packageObject.js';
function App() {
//State management
  const [packages, setPackages] = useState(packagesObj);

//State Modifiers
  //update cost or note values of state
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

  //stop editing section and switch to view comp
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
  
  //change edit status and render form comp
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
  
  //unified setValue logic for eac
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
  };

  const prevTotal = packages.currentPackage.internet.cost + packages.currentPackage.mobile.cost + packages.currentPackage.entertainment.cost;
  const newTotal1 = packages.bundle1.internet.cost + packages.bundle1.mobile.cost + packages.bundle1.entertainment.cost;
  const newTotal2 = packages.bundle2.internet.cost + packages.bundle2.mobile.cost + packages.bundle2.entertainment.cost;
  return (
    <div className="App">

      <header>
        <section className="current-package">
          <h2>Current Package</h2>
          {packages.currentPackage.isEdit ? <FormComp edit={editCurrentPackage} bundle={packages.currentPackage} done={() => doneEditing('currentPackage')} /> : <DetailsComp edit={startEditing} bundle={packages.currentPackage} total={prevTotal} />}
        </section>
      </header>

      <main className='new-packages'>

        <section className={packages.bundle2.isAdded ? 'bundle-double-left' : 'bundle-1-single'} >
          <h2>{packages.bundle2.isAdded ? 'Package 1' : 'New Package'}</h2>
          <div className="bundle-content">
            {packages.bundle1.isEdit ? <FormComp edit={editBundle1} bundle={packages.bundle1} done={() => doneEditing('bundle1')} /> : <DetailsComp bundle={packages.bundle1} total={newTotal1} />}
          </div>
        </section>

        {packages.bundle2.isAdded ?
          <button onClick={removeSecondPackage} className="package-2-button">-</button>
          :
          <button onClick={addSecondPackage} className="package-2-button">+</button>}

        {packages.bundle2.isAdded &&
          <section className="bundle-double-right">
            <h2>Package 2</h2>
            <div className="bundle-content">
              {packages.bundle2.isEdit ? <FormComp edit={editBundle2} bundle={packages.bundle2} done={() => doneEditing('bundle2')} /> : <DetailsComp bundle={packages.bundle2} total={newTotal2} />}
            </div>
          </section>
        }

      </main>
      <footer classname={packages.bundle2.isAdded ? 'price-compare-double' : 'price-compare-single'}>
        <PriceCompare prevTotal={prevTotal} newTotal={newTotal1} />
        {packages.bundle2.isAdded && <PriceCompare prevTotal={prevTotal} newTotal={newTotal2} />}
        <button onClick={() => { window.print() }}>PRINT</button>
      </footer>
    </div>
  );
}

export default App;
