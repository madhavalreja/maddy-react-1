import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const changeHandler = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    const words = text.split(' ');
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);
  }, [text]);

  return (
    <div className='container'>
      <h2>Responsive Paragraph Word <br/> Count</h2>
      <div>
        <textarea
          value={text}
          onChange={changeHandler}
        ></textarea>

        <div>
          <p className='word-count'>Word Count: {wordCount}</p>
        </div>
      </div>
    </div>
  );
}

export default App;