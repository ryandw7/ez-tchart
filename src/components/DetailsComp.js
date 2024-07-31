
import { formatNum } from "../utils";
export default function DetailsComp({ bundle, edit }) {

    const { internet, mobile, entertainment } = bundle;
    
    const handleEdit = () => {

        edit('currentPackage')
    }
    return (
        <div className="details">
            <div onClick={handleEdit}>EDIT</div>
            <section className="detail-section">
                <h3>Internet:${formatNum(internet.cost)}</h3>
                {internet.notes &&
                    <div>
                        <h4>Notes:</h4>
                        <p>{internet.notes}</p>
                    </div>}
            </section>
            {entertainment.value > 0 &&
                <section className="detail-section">
                    <h3>Entertainment: ${formatNum(entertainment.cost)}</h3>
                    {entertainment.notes &&
                        <div>
                            <h4>Notes:</h4>
                            <p>{entertainment.notes}</p>
                        </div>}
                </section>
            }

            <section className="detail-section">
                <h3>mobile: ${formatNum(mobile.cost)}</h3>
                {mobile.notes &&
                    <div>
                        <h4>Notes:</h4>
                        <p>${mobile.notes}</p>
                    </div>}
            </section>
        </div>
    )
}