import { getRandomCard } from '../../public/random.js';

export function render (context) {

  const card = getRandomCard();

  // language=HTML
  return `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>bfcache</title>
      <link rel="icon" href="data:,">
      <link rel="stylesheet" href="index.css">
      <script src="index.js" async></script>
    </head>
    <body>
    <h1 id="h1">Back/Forward cache</h1>

    <div class="card">${card}</div>
    
    <div>
      <input id="theInput" type="text" value="Back/Forward cache">
    </div>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat dui at leo porta dignissim. Etiam ut purus ultrices, pulvinar tellus quis, cursus massa. Mauris dignissim accumsan ex, at vestibulum lectus fermentum id. Quisque nec magna arcu. Quisque in metus sed erat sodales euismod eget id purus. Sed sagittis rhoncus mauris. Ut sit amet urna ac nunc semper porta. Nam ut felis eu velit luctus rutrum. Nam leo nisl, molestie a varius non, ullamcorper sit amet tortor. Donec in convallis ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent hendrerit venenatis erat, eu malesuada nulla viverra eu. Curabitur porta risus augue, non rutrum lectus hendrerit a. Sed volutpat dolor nec rutrum vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer rhoncus turpis orci, at tempor tortor scelerisque varius. Integer nec fermentum dui. Integer vitae dolor sit amet erat ullamcorper elementum. Donec blandit lacinia erat, vitae blandit libero ornare id. In luctus odio a lacus dignissim, id posuere tortor lacinia. Pellentesque sed massa ac tellus tincidunt rutrum. Praesent commodo enim nibh, ut consectetur tortor consequat non. Aliquam mi enim, mattis eu velit quis, sollicitudin fringilla ex. Donec at augue ultrices, porta justo in, mattis tortor. Nunc sollicitudin nisi eget urna condimentum semper. Pellentesque sagittis quam eu mollis viverra. Proin tincidunt auctor nibh quis suscipit.</p>

    </body>
    </html>
  `;
}
