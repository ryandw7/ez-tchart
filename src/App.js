import React, { useState } from 'react'
import './styles/App.css';
import './styles/print.css';
import FormComp from './components/FormComp';
import DetailsComp from './components/DetailsComp'
import PriceCompare from './components/PriceCompare';
import Additional from './components/Additional';
import { MobileProvider } from './context/MobileContext.js';
import packagesObj from './data/packageObject.js';
import Mobile from './features/Mobile.js'
function App() {
  //State management
  const [mobileDetails, setMobileDetails] = useState(false)
  const [packages, setPackages] = useState(packagesObj);
  const toggleMobileDetails = (e) => {
    e.preventDefault()
    console.log('toggling')
    if (mobileDetails === true) {
      setMobileDetails(false)
    } else if (mobileDetails === false) {
      setMobileDetails(true)
    }
  }
  console.log(mobileDetails)
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

  //unified setValue logic for each
  const editCurrentPackage = (key, valueObj) => {
    setValue('currentPackage', key, valueObj)
  };
  const editBundle1 = (key, valueObj) => {
    setValue('bundle1', key, valueObj)
  };
  const editBundle2 = (key, valueObj) => {
    setValue('bundle2', key, valueObj)
  };

  //update interface for additional new package
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

  //update interface to remove additional package
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

  const editAdditionalInfo = (key, value) => {
    setPackages((prev) => {
      return {
        ...prev,
        additional: {
          ...prev.additional,
          [key]: value
        }
      }
    })
  }

  const startEditAdditional = () => {
    setPackages((prev) => {
      return {
        ...prev,
        additional: {
          ...prev.additional,
          isEdit: true
        }
      }
    })
  }

  const stopEditAdditional = () => {
    setPackages((prev) => {
      return {
        ...prev,
        additional: {
          ...prev.additional,
          isEdit: false
        }
      }
    })
  }

  const print = () => {
    setPackages((prev) => {
      return {
        currentPackage: {
          ...prev.currentPackage,
          isEdit: false
        },
        bundle1: {
          ...prev.bundle1,
          isEdit: false
        },
        bundle2: {
          ...prev.bundle2,
          isEdit: false
        },
        additional: {
          ...prev.additional,
          isEdit: false
        }
      }
    });

    setTimeout(() => {
      window.print()
    }, 500)

  }
  //total costs to be added into the price compare component
  const prevTotal = packages.currentPackage.internet.cost + packages.currentPackage.mobile.cost + packages.currentPackage.entertainment.cost;
  const newTotal1 = packages.bundle1.internet.cost + packages.bundle1.mobile.cost + packages.bundle1.entertainment.cost;
  const newTotal2 = packages.bundle2.internet.cost + packages.bundle2.mobile.cost + packages.bundle2.entertainment.cost;

  return (

    <div className="App">
      <button onClick={toggleMobileDetails}>MOBILE</button>
      {mobileDetails ? 
      <MobileProvider><Mobile /></MobileProvider>
        :
        <>
          <header>
            <h2>Current Package</h2>
            {packages.currentPackage.isEdit ? <FormComp edit={editCurrentPackage} bundle={packages.currentPackage} done={() => doneEditing('currentPackage')} name={'current-package'} /> : <DetailsComp edit={() => { startEditing('currentPackage') }} bundle={packages.currentPackage} total={prevTotal} name={'current-package'} />}
          </header>
          <main>
            <section className={packages.bundle2.isAdded ? 'bundle-double' : 'bundle1-single'} >
              <h2>{packages.bundle2.isAdded ? 'Package 1' : 'New Package'}</h2>

              {packages.bundle1.isEdit ? <FormComp edit={editBundle1} bundle={packages.bundle1} done={() => doneEditing('bundle1')} name={'bundle1'} /> : <DetailsComp bundle={packages.bundle1} total={newTotal1} edit={() => { startEditing('bundle1') }} name={'bundle1'} />}

            </section>
            {packages.bundle2.isAdded ?
              <button onClick={removeSecondPackage} className="package-2-button">-</button>
              :
              <button onClick={addSecondPackage} className="package-2-button">+</button>}
            {packages.bundle2.isAdded &&
              <section className="bundle-double">
                <h2>Package 2</h2>

                {packages.bundle2.isEdit ? <FormComp edit={editBundle2} bundle={packages.bundle2} done={() => doneEditing('bundle2')} name={'bundle2'} /> : <DetailsComp bundle={packages.bundle2} total={newTotal2} edit={() => { startEditing('bundle2') }} name={'bundle2'} />}

              </section>

            }
            <section className={packages.bundle2.isAdded ? 'price-compare-double' : 'price-compare-single'}>
              <PriceCompare prevTotal={prevTotal} newTotal={newTotal1} />
              {packages.bundle2.isAdded && <PriceCompare prevTotal={prevTotal} newTotal={newTotal2} />}
            </section>
          </main>
          <footer >
            <section className="additional-info">
              <Additional start={startEditAdditional} stop={stopEditAdditional} isEdit={packages.additional.isEdit} edit={editAdditionalInfo} data={packages.additional} />
            </section>
            <button id="print-button" onClick={print}>PRINT</button>
          </footer>
          <span id="disclaimer">THIS IS NOT A LEGAL DOCUMENT! Pricing is estimated.</span>
        </>
      }
    </div>

  );

}

export default App;
