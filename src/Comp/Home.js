import React, { useState } from 'react';
import html2canvas from 'html2canvas';

const Dwonload = () => {
  var container = document.getElementById('Preview');
  html2canvas(container).then(function (canvas) {
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.download = `Card.png`;
    link.href = canvas.toDataURL();
    link.target = '_blank';
    link.click();
    link.remove();
  });
};

const Home = () => {
  const [Name, setName] = useState('');
  const [Profesion, setProfesion] = useState('');
  const [Website, setWebsite] = useState('');
  const [Email, setEmail] = useState('');
  const [About, setAbout] = useState('');

  return (
    <div>
      <main>
        <div className="Form">
          <h1>Contact Card Generator</h1>

          <input value={Name} onChange={e => setName(e.target.value)} type="text" placeholder="Your Name" />
          <input value={Profesion} onChange={e => setProfesion(e.target.value)} type="text" placeholder="Profesion" />
          <input value={Website} onChange={e => setWebsite(e.target.value)} type="text" placeholder="Website" />
          <input value={Email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
          <textarea value={About} onChange={e => setAbout(e.target.value)} cols="30" rows="10"></textarea>

          <button onClick={Dwonload} id="download">
            Download Card
          </button>
        </div>

        <div id="Preview" className="Preview">
          <div className="CardName">{Name ? <h2>{Name}</h2> : <h2>Your Name</h2>}</div>
          <hr />
          <div className="CardProfesion">{Profesion ? <p>{Profesion}</p> : <p>Your Profesion</p>}</div>
          <hr />
          <div className="CardWebsite">{Website ? <p>{Website}</p> : <p>Your Website</p>}</div>
          <hr />
          <div className="CardAbout">{About ? <p> {About}</p> : <p>About : </p>}</div>
          <hr />
          <div className="CardEmail">{Email ? <h3>{Email}</h3> : <h3> exemple@email.com</h3>}</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
