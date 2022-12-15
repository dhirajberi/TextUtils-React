import React, {useState} from 'react'

const TextForm = () => {

  const handleUp = () => {
    setText(text.toUpperCase());
  }

  const handleDown = () => {
    setText(text.toLowerCase());
  }

  const handleClear = () => {
    setText("");
  }

  const handleOnchange = (event) => {
    setText(event.target.value);
  }

  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container my-3">
        <h2>Enter the text to analyze</h2>
        <textarea className="form-control" rows="8" value={text} onChange={handleOnchange}></textarea>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUp}>Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleDown}>Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleSpeak}>Speak</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
    </div>

    <div className="container my-3">
        <h2>Your text summary</h2>
        <p><b>{text.split(" ").length}</b> words, <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").length}</b> minutes reading time</p>
    </div>
    </>
  )
}

export default TextForm