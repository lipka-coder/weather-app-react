import React from 'react';

export default function Footer() {
    return (
      <div className="Footer">
        <footer>
          <a
            href="https://github.com/lipka-coder/weather-app-react"
            className="github-link"
          >
            Open-source code 
          </a>
            {" "} by <a
            href="https://www.linkedin.com/in/katarzyna-podlipska"
            className="linkedin-link">
              Kasia Podlipska </a>👩‍💻
        </footer>
      </div>
    );
  }