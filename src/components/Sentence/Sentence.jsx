import styles from "./Sentence.module.css";

function Sentence(props) {
  return (
    <div className='container'>
      <p className={`${styles.sentence} ${!props.isValid && styles.invalid}`}>
        {props.sentence}
      </p>
    </div>
  );
}

export default Sentence;
