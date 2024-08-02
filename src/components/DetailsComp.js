
import '../styles/App.css'
export default function DetailsComp({ bundle, edit, total }) {

    const { internet, mobile, entertainment } = bundle;
    
    const handleEdit = () => {

        edit('currentPackage')
    }
    return (
        <div className="details">
            <button onClick={handleEdit} className="edit-button">EDIT</button>
            <section className="detail-section">
                <h3>Internet: <span>${internet.cost.toFixed(2)}</span></h3>
                {internet.notes &&
                    <div>
                        <p>{internet.notes}</p>
                    </div>}
            </section>
            {entertainment.cost > 0 &&
                <section className="detail-section">
                    <h3>Entertainment: <span>${entertainment.cost.toFixed(2)}</span></h3>
                    {entertainment.notes &&
                        <div>
                            <p>{entertainment.notes}</p>
                        </div>}
                </section>
            }

            <section className="detail-section">
                <h3>mobile: <span>${mobile.cost.toFixed(2)}</span></h3>
                {mobile.notes &&
                    <div>
                        <p>{mobile.notes}</p>
                    </div>}
            </section>
            <h3>Total: ${total}</h3>
        </div>
    )
}