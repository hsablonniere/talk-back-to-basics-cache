import { css, html } from 'lit';
import { defineSlideType } from './base.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { markup } from '../utils.mjs';

defineSlideType('slide-lapin', {
  render ({ content, attrs }) {
    return html`
      <img src="/src/img/serge-lapin-jaune.jpg" alt="">
      <div class="message">${unsafeHTML(markup(content))}</div>
    `;
  },
  // language=CSS
  styles: css`
    :host {
      background-color: #ffdf1c;
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 1rem;
      padding: 2rem;
    }

    img {
      height: 100%;
      object-fit: contain;
      width: 100%;
    }

    .message {
      align-self: center;
      font-size: 1.75rem;
      font-family: Parisine, sans-serif;
      color: #707070;
      padding-right: 1rem;
      line-height: 1.5;
    }
    
    .underline {
      text-decoration: underline;
    }
  `,
});
