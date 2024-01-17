import { useState } from "preact/hooks";

function Greating({ messages }) {
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  const [state, setState] = useState(randomMessage());
  
  return (
    <div>
      <h3>Thank you to visit the site! {state}</h3>
      <button onClick={() => setState(randomMessage())}>
        change!
      </button>
    </div>
  )
}

export { Greating }