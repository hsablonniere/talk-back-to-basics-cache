let colors = ['tomato', 'lime', 'blue', 'yellow'];

let index = 0;

export function render () {

  index = (index + 1) % colors.length;
  console.log({ index });

  // language=CSS
  return `
    body {
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
      background-color: ${colors[index]};
    }
  `;
}
