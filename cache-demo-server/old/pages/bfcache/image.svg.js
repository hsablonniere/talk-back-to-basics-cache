export async function render (context) {

  const code = context.requestUrl.searchParams.get('code') ?? '??';

  // language=SVG
  return `
      <svg width="200" height="200" viewBox="0 0 52.917 52.917" xmlns="http://www.w3.org/2000/svg">
          <text
                  xml:space="preserve"
                  style="font-style:normal;font-weight:400;font-size:16.6991px;line-height:1.25;font-family:sans-serif;fill:#000;fill-opacity:1;stroke:none;stroke-width:.264583"
                  x="26.458"
                  y="32.445"
          >
    <tspan
            style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';text-align:center;text-anchor:middle;stroke-width:.264583"
            x="26.458"
            y="32.445"
    >
      ${code}
    </tspan>
  </text>
          <path style="fill:none;stroke:#000;stroke-width:5.29167;stroke-linecap:square;stroke-linejoin:miter;stroke-dasharray:none"
                d="M2.646 2.646h47.625v47.625H2.646z"/>
      </svg>
  `;
}
