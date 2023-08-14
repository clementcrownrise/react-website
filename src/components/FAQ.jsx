import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"


const FAQ = ({id, question, answer}) => {
    const [isAnswerShowing, SetIsAnswerShowing] = useState(false);
  return (
    <article className="faq" onClick={()=> SetIsAnswerShowing(prev =>!prev) }>
        <div>
            <h4>{question}</h4>
            <button>
                {
                    isAnswerShowing ? <AiOutlineMinus/>:<AiOutlinePlus/>
                }
            </button>
        </div>
     { isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQ
