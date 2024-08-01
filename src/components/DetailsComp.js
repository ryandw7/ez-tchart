
import { formatNum } from "../utils";
import './Components.css'
export default function DetailsComp({ bundle, edit }) {

    const { internet, mobile, entertainment } = bundle;
    
    const handleEdit = () => {

        edit('currentPackage')
    }
    return (
        <div className="details">
            <div onClick={handleEdit}>EDIT</div>
            <section className="detail-section">
                <h3>Internet:${internet.cost.toFixed(2)}</h3>
                {internet.notes &&
                    <div>
                        <h4>Notes:</h4>
                        <p>{internet.notes}</p>
                    </div>}
            </section>
            {entertainment.cost > 0 &&
                <section className="detail-section">
                    <h3>Entertainment: ${entertainment.cost.toFixed(2)}</h3>
                    {entertainment.notes &&
                        <div>
                            <h4>Notes:</h4>
                            <p>{entertainment.notes}</p>
                        </div>}
                </section>
            }

            <section className="detail-section">
                <h3>mobile: ${mobile.cost.toFixed(2)}</h3>
                {mobile.notes &&
                    <div>
                        <h4>Notes:</h4>
                        <p>{mobile.notes}</p>
                    </div>}
            </section>
        </div>
    )
}