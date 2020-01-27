import React from 'react'

const Footer = () => (
  <div className="site-footer bg-transparent">
    <h4 className="text-center">DEVLAB</h4>
    <p className="text-center">Follow us on social media</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://www.facebook.com/abdullah.samadov"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <i className="fab fa-facebook-f fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/iam_abon"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <i className="fab fa-twitter fa-2x" />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/abon"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/abon"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <i className="fab fa-github fa-2x" />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
