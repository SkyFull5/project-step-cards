import { modalHeaders } from './tools/modalHeaders';

export class Modal {
    ANIMATION_SPEED = 200;
    EXIT_SVG = `<svg class="modal-close" data-close="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 24 24"><path data-close="true" d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>`;
    closing = false;
    modal = document.createElement('div');

    constructor(options = {}) {
        this.title = options.title;
        this.closable = options.closable;
        this.width = options.width;
        this.content = options.content;
        this.footerButtons = options.footerButtons;
        this.onClose = options.onClose;
        this._createModal();
        this._listener = e => {
            if (e.target.dataset.close) {
                this.close();
            }
        };
    }
    open() {
        // if (this.destroyed) {
        //     return console.log('Modal is destroyed');
        // }
        !this.closing && this.modal.classList.add('open');
    }

    close() {
        this.closing = true;
        this.modal.classList.remove('open');
        this.modal.classList.add('hide');
        setTimeout(() => {
            this.modal.classList.remove('hide');
            this.closing = false;
            // if (typeof this.onClose === 'function') {
            //     this.onClose();
            // }
            this.destroy();
        }, this.ANIMATION_SPEED);
    }

    destroy() {
        this.modal.parentNode.removeChild(this.modal);
    }

    setModal(type = 'create-visit', html) {
        this.setTitle(type);
        this.setContent(html);
    }
    setContent(html) {
        this.modal.querySelector('[data-content]').append(html);
    }
    setTitle(type = 'create') {
        this.modal.querySelector('.modal-header').innerHTML = `
            <h4 class="modal-title">${modalHeaders[type].title || 'Окно'}</h4>
          ${modalHeaders[type].closable ? this.EXIT_SVG : ''}
        `;
    }

    _createModal() {
        const DEFAULT_WIDTH = '466px';
        this.modal.classList.add('vmodal');
        this.modal.insertAdjacentHTML(
            'afterbegin',
            `
    <div class="modal-overlay" data-close="true">
        <div class="modal-window" style="width: ${this.width || DEFAULT_WIDTH}">
        <div class="modal-header">
          <h4 class="modal-title">${this.title || 'Окно'}</h4>
          ${this.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
        </div>
        <div class="modal-body" data-content>
          ${this.content || ''}
        </div>
        </div>
    </div>
    `
        );
        const footer = this._createModalFooter(this.footerButtons);
        footer && this.modal.querySelector('[data-content]').insertAdjacentElement('afterend', footer);
        this.modal.addEventListener('click', e => this._listener(e));
        document.body.append(this.modal);
    }

    _createModalFooter(buttons = []) {
        if (buttons.length === 0) {
            return false;
        }
        const wrap = document.createElement('div');
        wrap.classList.add('modal-footer');
        buttons.forEach(btn => {
            const button = document.createElement('button');
            button.textContent = btn.text;
            button.classList.add('btn', `btn-${btn.type || 'confirm'}`);
            btn.form && button.setAttribute('form', `${btn.form}`);
            btn.type && button.setAttribute('type', `${btn.type}`);
            const voidF = () => {};
            button.onclick = btn.handler || voidF;
            wrap.append(button);
        });
        return wrap;
    }
}
