
export default function DetailsComp({ details }) {
    const { internet, mobile, entertainment } = details;
    return (
        <div className="details">
            <section className="detail-section">
                <h3>Internet: {internet.value}</h3>
                {internet.notes &&
                    <div>
                        <h4>Notes:</h4>
                        <p>{internet.notes}</p>
                    </div>}
            </section>
            {entertainment.value > 0 &&
                <section className="detail-section">
                    <h3>Entertainment: {entertainment.value}</h3>
                    {entertainment.notes &&
                        <div>
                            <h4>Notes:</h4>
                            <p>{entertainment.notes}</p>
                        </div>}
                </section>
            }

            <section className="detail-section">
                <h3>mobile: {mobile.value}</h3>
                {mobile.notes &&
                    <div>
                        <h4>Notes:</h4>
                        <p>{mobile.notes}</p>
                    </div>}
            </section>
        </div>
    )
}