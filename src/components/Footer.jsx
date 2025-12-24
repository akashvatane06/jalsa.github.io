import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="app-footer__inner">
        <div className="app-footer__row">
          <p className="app-footer__line">
            {/* Desktop / larger screens */}
            <span className="app-footer__desktop">
              <span className="app-footer__text">
                Developed &amp; Designed By <strong>Akash Vatane</strong>
              </span>
              <span className="app-footer__sep" aria-hidden="true">
                {' '}
                |{' '}
              </span>
              <span className="app-footer__text">
                Mob.No.:{' '}
                <a className="app-footer__link" href="tel:+919921870968">
                  +919921870968
                </a>
              </span>
              <span className="app-footer__sep" aria-hidden="true">
                {' '}
                |{' '}
              </span>
              <span className="app-footer__text">
                Email Id:{' '}
                <a className="app-footer__link" href="mailto:akashvatane06@gmail.com">
                  akashvatane06@gmail.com
                </a>
              </span>
            </span>

            {/* Mobile: compact one-line */}
            <span className="app-footer__mobile">
              <span className="app-footer__text app-footer__mobile-name">
                Designed and Developed by <strong>Akash Vatane</strong>
              </span>
              <span className="app-footer__sep" aria-hidden="true">
                |
              </span>
              <span className="app-footer__text app-footer__mobile-label">Mobile:</span>
              <a className="app-footer__link" href="tel:+919921870968">
                +919921870968
              </a>
              <span className="app-footer__sep" aria-hidden="true">
                |
              </span>
              <span className="app-footer__text app-footer__mobile-label">Email:</span>
              <a className="app-footer__link" href="mailto:akashvatane06@gmail.com">
                akashvatane06@gmail.com
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

