import { css, html } from 'lit';
import { defineSlideType } from './base.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { markup } from '../utils.mjs';

defineSlideType('slide-section', {
  render ({ content }) {
    return html`
      <div class="title">${unsafeHTML(markup(content))}</div>
    `;
  },
  // language=CSS
  styles: css`
    :host {
      display: grid;
      background-image: url(/src/img/tuiles-pattern.jpg);
      background-size: 5rem;
      background-position: center center;
      background-color: #fff;
      grid-template-rows: 1fr;
    }

    .title {
      background-color: #050D9E;
      font-size: 5rem;
      color: #fff;
      box-shadow: 0 0.5rem 1rem #999;
      border-radius: 0.2rem;
      font-family: 'Parisine', sans-serif;
      text-align: center;
      align-self: center;
      justify-self: center;
      padding: 0 3rem 0.25rem 3rem;
      line-height: 1.5;
    }
  `,
});
