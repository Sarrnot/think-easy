import { useState } from "react";
import styles from "./SentenceForm.module.css";

function SentenceForm(props) {
  const [userInput, setUserInput] = useState({
    who: "",
    what: "",
    when: "",
    where: "",
  });

  function onChangeHandler(event) {
    setUserInput((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }

  props.userInput(userInput);

  return (
    <form onChange={onChangeHandler} className={styles.sentenceForm}>
      <div>
        <label for='who'>Who?</label>
        <input
          type='text'
          placeholder={`Example: John`}
          id='who'
          value={userInput.who}
          className={!userInput.who && styles.invalid}
        />
      </div>
      <div>
        <label for='what'>What?</label>
        <input
          type='text'
          placeholder={`Example: was flying`}
          id='what'
          value={userInput.what}
          className={!userInput.what && styles.invalid}
        />
      </div>
      <div>
        <label for='when'>When?</label>
        <input
          type='text'
          placeholder={`Example: yesterday`}
          id='when'
          value={userInput.when}
          className={!userInput.when && styles.invalid}
        />
      </div>
      <div>
        <label for='where'>Where?</label>
        <input
          type='text'
          placeholder={`Example: to London`}
          id='where'
          value={userInput.where}
          className={!userInput.where && styles.invalid}
        />
      </div>
    </form>
  );
}

export default SentenceForm;
