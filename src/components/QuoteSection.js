import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function QuoteSection(){
    return(
        <div className="section quote">
            <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/>Food is everything we are. Its an extension of nationalist feeling, ethnic feeling, 
                your personal history, your province, your region, your
                tribe, your grandma. Its inseperable from those from the get.go</p>
                <p className="quote-author">- Antony Bourdain</p>
        </div>
    )
}