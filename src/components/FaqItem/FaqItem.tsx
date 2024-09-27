import React from 'react'
import classes from './FaqItem.module.css'

type FaqItemProps = {
    question: string
    answer: string
}



const FaqItem = ({ question, answer }: FaqItemProps) => {
    const [view, setView] = React.useState(false)
    const handleView = () => {
        setView((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <div className={classes.faq_item}>
            <div className="d-f jc-sb">
                <h4 className={classes.faq_item_question} style={view ?{color: "#CDA274"} : {color: "#292F36"}} >
                    {question}
                </h4>
                <button className='btn-clear d-b' onClick={handleView}>
                    <img src={view ? "/images/arrow-down.png" :  "/images/arrow-right.png"} alt="arrow" />
                </button>
            </div>
            <p className={view ? classes.faq_item_answer : "d-n"}>{answer}</p>
        </div>
    )
}

export default FaqItem