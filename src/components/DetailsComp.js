
import { formatNum } from "../utils";
import './Components.css'
export default function DetailsComp({ bundle, edit }) {

    const { internet, mobile, entertainment } = bundle;
    
    const handleEdit = () => {

        edit('currentPackage')
    }
    return (
        <div className="details">
            <button onClick={handleEdit} className="edit-button">EDIT</button>
            <section className="detail-section">
                <h3>Internet: ${internet.cost.toFixed(2)}</h3>
                {internet.notes &&
                    <div>
                        <p>{internet.notes}</p>
                    </div>}
            </section>
            {entertainment.cost > 0 &&
                <section className="detail-section">
                    <h3>Entertainment: ${entertainment.cost.toFixed(2)}</h3>
                    {entertainment.notes &&
                        <div>
                            <p>{entertainment.notes}</p>
                        </div>}
                </section>
            }

            <section className="detail-section">
                <h3>mobile: ${mobile.cost.toFixed(2)}</h3>
                {mobile.notes &&
                    <div>
                        <p>{mobile.notes}</p>
                    </div>}
            </section>
        </div>
    )
}