import { getRandomCard } from '../../public/random.js';
import fs from 'node:fs';

export async function render (context) {

  const page = context.requestUrl.searchParams.get('page') ?? 'index';
  const serverCard = fs.readFileSync('public/bfcache/server-card.txt', 'utf8');

  const bodyStyle = ({
    black: 'border: 1em solid #000000',
    blue: 'border: 1em solid #7777FF',
    green: 'border: 1em solid #007700',
    red: 'border: 1em solid #FF0000',
    orange: 'border: 1em solid orange',
    purple: 'border: 1em solid rebeccapurple',
    brown: 'border: 1em solid brown',
  })[page] ?? 'transparent';

  // language=HTML format=false
  return `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Back/Forward cache ${page}</title>
      <link rel="stylesheet" href="index.css">
    </head>
    <body style="${bodyStyle}">
    <h1>Back/Forward cache ${page}</h1>

    <ul class="links">
      <li><a href="?page=black" class="page ${page === 'black' ? 'active' : ''}">black</a></li>
      <li><a href="?page=blue" class="page ${page === 'blue' ? 'active' : ''}">blue</a></li>
      <li><a href="?page=green" class="page ${page === 'green' ? 'active' : ''}">green</a></li>
      <li><a href="?page=red" class="page ${page === 'red' ? 'active' : ''}">red</a></li>
      <li><a href="?page=orange" class="page ${page === 'orange' ? 'active' : ''}">orange</a></li>
      <li><a href="?page=purple" class="page ${page === 'purple' ? 'active' : ''}">purple</a></li>
      <li><a href="?page=brown" class="page ${page === 'brown' ? 'active' : ''}">brown</a></li>
    </ul>

    <br>
    <br>

    <div class="cards">
      <div class="card-server">
        <span class="card-name">server</span>
        <span class="card-value">${serverCard}</span>
      </div>
      <div class="card-client">
        <span class="card-name">client</span>
        <span class="card-value">?</span>
      </div>
    </div>
    
    <!-- TODO: not sure if necessary -->
    <div>
      ${'' && Array.from(new Array(60)).map((_, i) => `
        <img src="https://placekitten.com/${i + 100}/${i + 100}?t=${Math.random()}">
      `).join('')}
    </div>
    
    <div>
      <input type="text">
    </div>

    <script type="module">
    import { getRandomCard } from '/cache-demo-server/old/public/random.js';
    
    // TODO use this through a param
    // window.onunload = () => console.log('unload');

    window.addEventListener('pageshow', (event) => {
      console.log(document.title, 'pageshow', 'persisted:' + event.persisted);
    });
    window.addEventListener('pagehide', (event) => console.log(document.title, 'pagehide'));
    window.addEventListener('freeze', (event) => console.log(document.title, 'freeze'));
    window.addEventListener('resume', (event) => console.log(document.title, 'resume'));

    window.resetClientCard = () => {
      const clientCard = getRandomCard();
      localStorage.setItem('client-card', clientCard);
      console.log(clientCard);
    }

    setTimeout(() => {
      const serverCard = document.querySelector('.card-server .card-value').textContent;
      let clientCard = localStorage.getItem('client-card');
      if (clientCard == null) {
        window.resetClientCard();
        clientCard = localStorage.getItem('client-card');
      }
      document.querySelector('.card-client .card-value').textContent = clientCard;
    }, 1000);
    </script>

    </body>
    </html>
  `;
}
