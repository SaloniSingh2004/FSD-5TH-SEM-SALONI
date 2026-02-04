import React from 'react'

function Usestate() {
  function change() {
    const p = document.getElementById("p");
    let num = parseInt(p.innerText);
    p.innerText = num + 1;
  }
  return (
    <div>
        <p id="p">0</p>
      <button onClick={change}>Click</button>

    </div>
  )
}

export default Usestate