import { useState } from "react";
import { MainView } from "../components/MainView/";
import { SentenceForm } from "../components/SentenceForm";
import { Sentence } from "../components/Sentence";

export function IndexPage() {
  const [sentence, setSentence] = useState("");
  const [isValid, setIsValid] = useState(false);

  const userInput = (data) => {
    if (data.who && data.what && data.where && data.when) {
      setSentence(`${data.who} ${data.what} ${data.where} ${data.when}.`);
      setIsValid(true);
    } else {
      setSentence("Please fill all the input fields.");
      setIsValid(false);
    }
  };

  return (
    <MainView>
      <SentenceForm userInput={userInput} />
      <Sentence sentence={sentence} isValid={isValid} />
    </MainView>
  );
}
