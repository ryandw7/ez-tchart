
import '../styles/App.css';
import '../styles/print.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCheck } from '@fortawesome/free-solid-svg-icons';
export default function DetailsComp({ bundle, edit, total }) {

    const { internet, mobile, entertainment } = bundle;

    const handleEdit = () => {

        edit()
    }
    return (
        <div className="details">
            <button onClick={handleEdit} className="edit-button"><FontAwesomeIcon icon={faPenToSquare} /></button>

            <h3>Internet: <span>${internet.cost.toFixed(2)}</span></h3>
            {internet.notes &&
                <div>
                    <p>{internet.notes}</p>
                </div>}

            {entertainment.cost > 0 &&
                <div>
                    <h3>Entertainment: <span>${entertainment.cost.toFixed(2)}</span></h3>
                    {entertainment.notes &&
                        <div>
                            <p>{entertainment.notes}</p>
                        </div>}
                </div>
            }


            <h3>mobile: <span>${mobile.cost.toFixed(2)}</span></h3>
            {mobile.notes &&
                <div>
                    <p>{mobile.notes}</p>
                </div>}
            <h3>Total: ${total}</h3>
        </div>
    )
}