export default function Bio() {
  return (
    <div className="intro"> {/* Use "className" instead of "class" for styling in JSX */}
      <h1>Welcome to my website!</h1>
      <p className="summary"> {/* Use "className" instead of "class" for styling in JSX */}
        You can find my thoughts here.
        <br/><br/>
        <b>And <i>pictures</i></b> of people!
      </p>
    </div>
  );
}
