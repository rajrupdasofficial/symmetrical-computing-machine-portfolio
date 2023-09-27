import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footerfirst">
          <h3>Rajrup's Portfolio</h3>
        </div>
        {/* <form action="" method="post">
            <label for="email">Input Your Email for News Lettter</label>
            <input type="email" name="please enter email" id="email">
        </form> */}
      </div>
      <div className="footer-text-center">
        &copy; {new Date().getFullYear()} rajrupmmc300.dev | All rights reserved
      </div>
    </footer>
  );
};
export default Footer;
