import "./index.css"
import elips from "./elips.svg"
import Heading from "../heading"

export default function Contact({ phone, response_time, response_rate, info }) {
    return (
        <div>
            <img src={elips} alt="elips"/>
            <div className="title">
                <Heading>Господар – Kerthy</Heading>
                <div className="subtitle">
                    <span className="title_item">{phone}</span>
                    <span className="title_item">{response_time}</span>
                    <span className="title_item">{response_rate}% відсотків швидкості відгуку</span>
                </div>
            </div>
        </div>
    )
}
