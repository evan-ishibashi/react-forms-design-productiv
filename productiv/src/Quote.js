import { useState } from "react";

function Quote() {
  const [quote, setQuote] = useState("");

  async function getQuote() {
    const resp = await fetch("https://inspo-quotes-api.herokuapp.com/quotes/random");

    const quoteData = await resp.json();
    return `${quoteData.quote.text} -${quoteData.quote.author}`;
  }

  async function populateQuote() {
    const newQuote = await getQuote();
    setQuote(newQuote);
  }


  return (
    <div>
      {quote}
      <br/>
      <button onClick={populateQuote}>{
        quote === "" ?
          'Click here for an inspirational quote' :
          'New quote'
          }
      </button>
    </div>


  );
}

export default Quote;