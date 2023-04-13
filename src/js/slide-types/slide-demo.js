import { css, html } from 'lit';
import { Slide } from './base.js';

function gnome (path, body) {
  return fetch('http://localhost:7000' + path, {
    credentials: 'include',
    mode: 'cors',
    method: (body != null) ? 'POST' : 'GET',
    headers: {
      Authorization: 'foobar',
    },
    body: (body != null) ? JSON.stringify(body) : null,
  }).then((r) => r.json());
}

async function placeWindow (window, div) {

  if (window == null) {
    return;
  }

  const rect = div.getBoundingClientRect();

  const windowRect = document.body.getBoundingClientRect();
  // const ratio = 1920 / windowRect.width;
  const ratio = 1400 / windowRect.width;

  const MOZINNERSCREENY = globalThis.mozInnerScreenY;

  await gnome('/move-window', {
    id: window.id,
    x: Math.ceil(rect.x * ratio),
    y: Math.ceil((rect.y + MOZINNERSCREENY) * ratio),
    width: Math.ceil(rect.width * ratio),
    height: Math.ceil(rect.height * ratio),
    minimize: false,
    above: true,
  }).catch(() => null);
}

async function hideWindow (window) {
  if (window == null) {
    return;
  }
  await gnome('/move-window', {
    id: window.id,
    minimize: true,
    above: false,
  }).catch(() => null);
}

const logos = ['chromium', 'firefox', 'webkit', 'terminal'];

let gnomeWindows = [];

try {
  const windowList = await gnome('/windows');

  const gnomeWindowsMeta = document.querySelector('meta[name="gnome-windows"]');
  const gnomeWindowsJson = gnomeWindowsMeta.getAttribute('content');
  gnomeWindows = JSON.parse(gnomeWindowsJson).map((win) => {
    return {
      ...win,
      window: windowList.find(({ pid }) => pid === win.pid),
    };
  });
}
catch (e) {
}

customElements.define('slide-demo', class extends Slide {

  async onEnter (elements) {
    if (elements == null) {
      return;
    }
    gnomeWindows.forEach((w) => {
      if (elements[w.id] != null) {
        placeWindow(w.window, elements[w.id]);
      }
      else {
        hideWindow(w.window);
      }
    });
  }

  async onLeave (elements) {
    const currentSlide = document.querySelector('[data-position="current"]');
    const currentSlideType = currentSlide.tagName.toLowerCase();
    if (currentSlideType !== 'slide-demo') {
      gnomeWindows.forEach((w) => {
        hideWindow(w.window);
      });
    }
  }

  _toggle (id) {
    Array
      .from(this.shadowRoot.querySelectorAll('.wrapper'))
      .forEach((wrapper) => {
        if (wrapper.dataset.id !== id) {
          wrapper.classList.toggle('dn');
        }
      });
    const elements = Object.fromEntries(
      Array
        .from(this.shadowRoot.querySelectorAll(`.wrapper:not(.dn)`))
        .map((wrapper) => [wrapper.dataset.id, wrapper.querySelector('.window')]),
    );
    this.setAttribute('data-setup', Object.keys(elements).join(','));
    this.onEnter(elements);
  }

  renderSlide ({ content, attrs }) {

    const windows = (content ?? '')
      .trim()
      .split('\n')
      .filter((a) => a !== '')
      .map((line) => {
        const [id, ...label] = line.trim().split(' ');
        return {
          id,
          label: label.join(' '),
        };
      });

    this.setAttribute('data-setup', windows.map((w) => w.id).join(','));

    return html`
      ${(attrs.nodemo != null) ? html`
        <div class="no-demo">Pas de démo</div>
      ` : ''}
      ${windows.map(({ id, label }) => html`
        <div class="wrapper" data-id="${id}">
          ${logos.includes(id) ? html`
            <img class="logo" src="src/img/logo-${id}.svg" alt="" @click="${() => this._toggle(id)}">
          ` : ''}
          ${id !== '_' ? html`
            <div class="label">${label}</div>
            <div id=${id} class="window"></div>
          ` : ''}
        </div>
      `)}
    `;
  }

  // language=CSS
  static get styles () {
    return [
      ...Slide.styles,
      css`
        :host {
          --gap: 0.75rem;
          background-image: url(/src/img/tuiles-pattern.jpg);
          background-size: 5rem;
          background-position: center center;
          background-color: #fff;
          display: grid;
          padding: var(--gap);
          grid-auto-columns: 1fr;
          grid-auto-flow: column;
          gap: var(--gap);
        }
        
        .no-demo {
          font-family: "Hiruzen Exist", sans-serif;
          font-size: 7rem;
          justify-self: center;
          align-self: center;
        }

        /*:host([data-setup="_,terminal"]),*/
        /*:host([data-setup="firefox,terminal"]),*/
        /*:host([data-setup="chromium,terminal"]),*/
        /*:host([data-setup="webkit,terminal"]) {*/
        /*  grid-template-columns: auto 25rem;*/
        /*}*/

        .wrapper {
          display: flex;
          flex-direction: column;
          gap: var(--gap);
          position: relative;
        }

        :host([bottom-terminal]) .wrapper[data-id="terminal"] {
          grid-row: 2 / 3;
          /* 16/3 */
          grid-column: 1 / 4;
          /* 4/3 */
          grid-column: 1 / 3;
        }

        .logo {
          height: 3.5rem;
          width: 3.5rem;
          position: absolute;
          left: 0.5rem;
          z-index: 1;
          filter: drop-shadow(0 0 0.2rem #555);
        }

        .label {
          align-self: end;
          font-size: 1.25rem;
          border-radius: 0.1rem;
          font-family: Parisine, sans-serif;
          line-height: 1;
          padding: 0.25rem 0.5rem;
          box-shadow: 0 0 0.25rem #555;
          background-color: #050D9E;
          color: #ffffff;
        }

        .window {
          background-color: #000000;
          box-shadow: 0 0 0.25rem #555;
          border-radius: 0.25rem;
          flex: 1 1 0;
          z-index: 2;
        }

        .dn {
          display: none;
        }
      `,
    ];
  };
});
