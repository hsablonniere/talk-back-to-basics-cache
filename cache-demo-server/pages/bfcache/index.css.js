export async function render (context) {

  // language=CSS
  return `
    html,
    body {
      height: 100%;
      margin: 0;
    }

    body {
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
      text-align: center;
      box-sizing: border-box;
    }
    
    .links {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      list-style: none;
      margin: 0 1em;
      padding: 0;
      gap: 1em 0.5em;
    }

    .page {
      border: 2px solid transparent;
      border-radius: 0.25em;
      padding: 0.25em 0.5em;
    }

    .page.active {
      border-color: #333;
    }

    .cards {
      display: flex;
      gap: 1em;
      justify-content: center;
    }

    .card-server,
    .card-client {
      display: flex;
      flex-direction: column; 
    }
    
    img {
      height: 3em;
      width: 3em;
    }
  `;
}
