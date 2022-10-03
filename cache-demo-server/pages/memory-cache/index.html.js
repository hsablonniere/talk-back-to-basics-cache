export async function render (context) {

  // language=HTML
  return `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Memory cache</title>
      <link rel="stylesheet" href="index.css">

<!--            <link rel="preload" href="/memory-cache/esm-one.js" as="script">-->
<!--            <link rel="preload" href="/memory-cache/esm-two.js" as="script">-->
<!--            <link rel="preload" href="/memory-cache/esm-three.js" as="script">-->
<!--            <link rel="preload" href="/memory-cache/esm-four.js" as="script">-->

<!--      <link rel="modulepreload" href="/memory-cache/esm-one.js">-->
<!--      <link rel="modulepreload" href="/memory-cache/esm-two.js">-->
<!--      <link rel="modulepreload" href="/memory-cache/esm-three.js">-->
<!--      <link rel="modulepreload" href="/memory-cache/esm-four.js">-->

      <!--      <link rel="preload" href="/beatles.jpg?counter=0" as="image">-->
      <!--      <link rel="preload" href="/beatles.jpg?counter=1" as="image">-->
      <!--      <link rel="preload" href="/beatles.jpg?counter=2" as="image">-->
      <!--      <link rel="preload" href="/beatles.jpg?counter=3" as="image">-->
      
<!--            <link rel="preload" href="index.js" as="script">-->
    </head>
    <body>
    <h1>Memory cache</h1>

    <div>
      <button class="clear">clear</button>
      <button class="add-image">add image</button>
      <button class="add-delayed-image-counter">add delayed image with counter</button>
    </div>

    <br>

    <div class="images"></div>

    <script>

    let counter = 0;

    document.querySelector('.clear').addEventListener('click', () => {
      document.querySelector('.images').innerHTML = '';
    });
    document.querySelector('.add-image').addEventListener('click', () => {
      const img = document.createElement('img');
      img.width = '100';
      img.src = '/beatles.jpg';
      document.querySelector('.images').appendChild(img);
    });
    document.querySelector('.add-delayed-image-counter').addEventListener('click', () => {
      const img = document.createElement('img');
      img.width = '100';
      img.src = '/beatles.jpg?counter=' + (counter++);
      setTimeout(() => {
        document.querySelector('.images').appendChild(img);
      }, 1000);
    });

    setTimeout(() => {
      // const script = document.createElement('script');
      // // script.src = 'index.js';
      // script.src = '/memory-cache/esm-one.js';
      // script.type = 'module';
      // document.querySelector('body').appendChild(script);
    }, 2000);

    // document.body.classList.add('foo');
    </script>

    
<!--    <script src="index.js"></script>-->
<!--    <script src="index.js"></script>-->
<!--    <script src="index.js"></script>-->
    
    
    <script type="module" src="index.js"></script>
    <script type="module" src="index.js"></script>
    <script type="module" src="/foo/../index.js"></script>
    
    <!--    <script src="index.js"></script>-->
    <!--    <script src="index.js"></script>-->

<!--        <script type="module" src="/memory-cache/esm-one.js"></script>-->

    </body>
    </html>
  `;
}
