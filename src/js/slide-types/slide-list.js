import { css, html } from 'lit';
import { defineSlideType } from './base.js';

defineSlideType('slide-list', {
  render ({ attrs, content }) {

    const items = (content ?? '')
      .trim()
      .split('\n')
      .map((a) => a.trim())
      .filter((a) => a !== '');
    const current = Number(attrs.current ?? items.length);

    return html`
      <ul>
        ${items.map((item, index) => html`
          <li class="item" data-nb="${index + 1}" data-hidden="${index >= current}">
            <span class="number">${index + 1}</span>
            <span class="text">${item}</span>
          </li>
        `)}
      </ul>
    `;
  },
  // language=CSS
  styles: css`
    :host {
      display: grid;
      justify-items: center;
      align-content: center;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .item {
      --zoom: 1.75;
      align-items: center;
      display: flex;
      gap: 1rem;
      font-size: calc(1.3rem * var(--zoom));
      font-family: 'Parisine', sans-serif;
      padding: 0.5rem 0;
    }

    .number {
      height: calc(2rem * var(--zoom));
      width: calc(2rem * var(--zoom));
      border-radius: calc(1rem * var(--zoom));
      text-align: center;
      line-height: calc(2rem * var(--zoom));
    }

    [data-nb="1"] .number {
      background-color: #fece00;
      color: #000;
    }

    [data-nb="2"] .number {
      background-color: #0065ae;
      color: #fff;
    }

    [data-nb="3"] .number {
      background-color: #9f971a;
      color: #fff;
    }

    [data-nb="4"] .number {
      background-color: #be418d;
      color: #fff;
    }

    [data-nb="5"] .number {
      background-color: #f19043;
      color: #000;
    }

    [data-nb="6"] .number {
      background-color: #84c28e;
      color: #000;
    }

    [data-nb="7"] .number {
      background-color: #f2a4b7;
      color: #000;
    }

    [data-nb="8"] .number {
      background-color: #cdaccf;
      color: #000;
    }

    [data-nb="9"] .number {
      background-color: #d5c900;
      color: #000;
    }

    [data-nb="10"] .number {
      background-color: #e4b327;
      color: #000;
    }

    [data-nb="11"] .number {
      background-color: #8c5e24;
      color: #fff;
    }

    [data-nb="12"] .number {
      background-color: #007e49;
      color: #fff;
    }

    [data-nb="13"] .number {
      background-color: #99d4de;
      color: #000;
    }

    [data-nb="14"] .number {
      background-color: #622280;
      color: #fff;
    }
    
    [data-hidden="true"] {
      visibility: hidden;
    }

    .text {
      color: #000;
    }
  `,
});
