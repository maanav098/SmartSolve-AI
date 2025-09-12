import React from "react";
import "./footer.css";
import { responsiveFontSizes } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div style={{ fontSize: 14 }} className="footer-container">
        <section className="footer-section" aria-label="Brand">
          <h4>Smartsolve AI</h4>
          <p>
            An AI-powered full-stack web app with smart multimodal chat (text + images), leveraging Google's LLMs, React (TypeScript), and Flask (Python).
          </p>
        </section>

        <section className="footer-section" aria-label="Other Projects">
          <h4>Other Projects</h4>
          <ul>
            <li><a href="https://maanav-ghai-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
            <li><a href="#crop-price-prediction" target="_blank" rel="noopener noreferrer">Crop Price Prediction</a></li>
            <li><a href="#nexpend-ai" target="_blank" rel="noopener noreferrer">Nexpend AI</a></li>
          </ul>
        </section>

        <section className="footer-section" aria-label="Company">
          <h4>Contact Me</h4>
          <ul className="social-links">
            <li>
              <a href="https://github.com/maanav098" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 30 30" style={{ verticalAlign: 'middle', marginRight: 6 }}><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.203-0.004,0.544-0.01,0.95C21.733,25.066,25,20.512,25,15C25,8.373,19.627,3,13,3z"></path></svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/maanavghai" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 32 32" style={{ verticalAlign: 'middle', marginRight: 6 }}><path d="M29 0h-26c-1.654 0-3 1.346-3 3v26c0 1.654 1.346 3 3 3h26c1.654 0 3-1.346 3-3v-26c0-1.654-1.346-3-3-3zM10 27h-5v-13h5v13zM7.5 12c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM27 27h-5v-7c0-1.104-0.896-2-2-2s-2 0.896-2 2v7h-5v-13h5v2.184c0.895-1.282 2.366-2.184 4-2.184 2.757 0 5 2.243 5 5v8z"></path></svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:maanavg14@gmail.com">
                <svg width="18" height="18" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', marginRight: 6 }}><path d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.99c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.99c-1.104 0-2 .896-2 2v.217l11.99 7.065 11.99-7.065v-.217z"></path></svg>
                Email
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Footer;