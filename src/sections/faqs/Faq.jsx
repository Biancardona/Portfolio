import { useState } from 'react';
import Card from '../../components/Card';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

const Faq = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Card className='faq' onClick={() => setShowAnswer(!showAnswer)}>
      <div>
        <h5 className='faq__question'> {faq.question}</h5>
        <button className='faq__icon'>
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <p className='faq__answer'>{showAnswer && faq.answer}</p>
    </Card>
  );
};

export default Faq;
