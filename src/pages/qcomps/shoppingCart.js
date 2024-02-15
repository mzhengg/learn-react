import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((prevPending) => prevPending + 1);

    // Use the current value of pending before delay
    await delay(3000);

    // Update the completed state based on the latest value of pending
    setCompleted((prevCompleted) => prevCompleted + 1);

    // Decrement the pending state after completion
    setPending((prevPending) => prevPending - 1);
  }

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}