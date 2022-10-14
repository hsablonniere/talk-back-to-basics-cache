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
      <img src="/src/img/plan-metro.svg" alt="">
      <div class="details details--top">
        <div class="date">${meta.date}</div>
        <div class="event">${meta.event}</div>
      </div>
      <div class="title">
        ${unsafeHTML(title)}
      </div>
      <div class="details details--bottom">
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
      background-color: #fff;
      grid-template-columns: 1fr;
      grid-template-rows: min-content 1fr min-content;
      grid-template-areas: "header" "title" "footer";
    }

    @keyframes zoom {
      0% {
        transform: scale(1.15);
      }
      100% {
        transform: scale(2.5);
      }
    }

    img {
      object-fit: cover;
      object-position: center center;
      grid-row: 1 / -1;
      grid-column: 1 / -1;
      height: 100%;
      width: 100%;
      z-index: 1;
      animation: 80s linear zoom;
      animation-fill-mode: forwards;
      animation-play-state: paused;
    }

    :host([data-position="current"]) img {
      animation-play-state: running;
    }

    .details {
      background-color: #2e9f81;
      color: #fff;
      font-family: 'Parisine', sans-serif;
      gap: 1rem;
      padding: 0.2rem 1rem;
      display: flex;
      font-size: 1.5rem;
      box-shadow: 0 0 0.25rem #666;
      z-index: 2;
    }

    .details--top {
      grid-area: header;
      justify-self: start;
      border-bottom-right-radius: 0.2rem;
    }

    .details--bottom {
      grid-area: footer;
      justify-self: end;
      border-top-left-radius: 0.2rem;
    }

    .title {
      grid-area: title;
      background-color: #050D9E;
      /*background-color: #2745a1;*/
      font-size: 4rem;
      color: #fff;
      box-shadow: 0 0.5rem 1rem #999;
      border-radius: 0.2rem;
      font-family: 'Parisine', sans-serif;
      text-align: center;
      align-self: center;
      justify-self: center;
      padding: 0 3rem 0.25rem 3rem;
      line-height: 1.5;
      z-index: 2;
    }
  `,
});
