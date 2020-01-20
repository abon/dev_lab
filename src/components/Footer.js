import React from "react"

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">Dev:Lab</h4>
    <p className="text-center">Follow us on social media</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <i className="fab fa-facebook-f fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="http://twitter.com/iam_abon"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </li>

        <li>
          <a
            href="http://github.com/abon"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <i class="fab fa-github fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="http://linkedin.com/abon"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
