import { css, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { defineSlideType } from './base.js';
import { getMeta, getTitle, markup, pipeline } from '../utils.mjs';

defineSlideType('slide-poster', {
  render ({ attrs, content }) {

    const meta = getMeta();
    const title = pipeline(
      content ?? getTitle(),
      (text) => text.replace(', ', ' '),
      markup,
    );

    return html`
      <div class="details">
        <div class="date">${meta.date}</div>
        <div class="event">${meta.event}</div>
      </div>
      <div class="title">
        ${unsafeHTML(title)}
      </div>
      <div class="details">
        <div class="author">${meta.author}</div>
        <div class="author-twitter">${meta.authorTwitter}</div>
        <div class="author-company">${meta.authorCompany}</div>
      </div>
    `;
  },
  // language=CSS
  styles: css`
    :host {
      display: grid;
      background-image: url(/src/img/tile-pattern.jpg);
      background-image: url(/src/img/white-tiled-parisian-metro.jpg);
      background-image: url(/src/img/tuiles-pattern.jpg);
      background-size: 50vw;
      background-size: 5rem;
      background-position: center center;
      background-color: #fff;
      grid-template-rows: min-content 1fr min-content;
    }

    .details {
      font-family: "Hiruzen Exist", sans-serif;
      font-size: 3rem;
      display: flex;
      justify-content: center;
      gap: 4rem;
      margin: 2rem 0;
      --shift: 0.25rem;
      --color: yellow;
      stext-shadow:
        calc(var(--shift) * 1) calc(var(--shift) * 1) 0 var(--color),
        calc(var(--shift) * -1) calc(var(--shift) * 1) 0 var(--color),
        calc(var(--shift) * 1) calc(var(--shift) * -1) 0 var(--color),
        calc(var(--shift) * -1) calc(var(--shift) * -1) 0 var(--color)
      ;
    }

    .author-twitter {
      display: none;
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
