

import '../styles/App.css';
import '../styles/print.css';

export default function PriceCompare({prevTotal, newTotal}) {
return (
<div>
    <h3>Savings Per Month: <span>${(prevTotal - newTotal).toFixed(2)}</span></h3>
    <h3>Savings Annually: <span>${((prevTotal - newTotal) * 12).toFixed(2)}</span></h3>
</div>
)
}