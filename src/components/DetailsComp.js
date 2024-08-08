
import '../styles/App.css';
import '../styles/print.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
export default function DetailsComp({ bundle, edit, total, name }) {

    const { internet, mobile, entertainment } = bundle;

    const handleEdit = () => {

        edit()
    }
    return (
        <article className="details">
            <button className={`${name}-button`} onClick={handleEdit} ><FontAwesomeIcon icon={faPenToSquare} /></button>
            <section className="details-section">
                <h3>Internet: <span>${internet.cost.toFixed(2)}</span></h3>
                {internet.notes &&
                    <div className="notes">
                        <p>{internet.notes}</p>
                    </div>}
            </section>
            {entertainment.cost > 0 &&
                <section className="details-section">
                    <h3>Entertainment: <span>${entertainment.cost.toFixed(2)}</span></h3>
                    {entertainment.notes &&
                        <div className="notes">
                            <p>{entertainment.notes}</p>
                        </div>}
                </section>
            }
            <section className="details-section">
                <h3>mobile: <span>${mobile.cost.toFixed(2)}</span></h3>
                {mobile.notes &&
                    <div className="notes">
                        <p>{mobile.notes}</p>
                    </div>}
            </section>
            <h3 className={`${name}-total`}>Total: <span>${total.toFixed(2)}</span></h3>
        </article>
    )
}