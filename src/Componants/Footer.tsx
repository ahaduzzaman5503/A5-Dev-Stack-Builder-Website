import logoText from "../assets/logo-text.png";
export default function Footer() {
  return (
    <>
      <div className=" bg-black">
        <footer className=" container mx-auto footer sm:footer-horizontal bg-base-200 text-base-content p-10">
          <aside>
            <a className="btn btn-ghost text-xl group">
              <img
                src={logoText}
                alt="logo"
                className="group-hover:invert transition duration-200"
              />
            </a>
            <p>
              Dev Stack Industries Ltd.
              <br />
              Providing reliable Technologies since 1950
            </p>

            <nav className="flex gap-2">
              <a className="link link-hover">GitHub</a>
              <a className="link link-hover">Twitter</a>
              <a className="link link-hover">Instagram</a>
            </nav>
          </aside>

          <nav>
            <h6 className="footer-title">Products</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Technologies</a>
            <a className="link link-hover">Projects</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Careers</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Terms of use</a>
          </nav>
        </footer>
        <div className="container mx-auto">
          <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
            <aside className="grid-flow-col items-center">
              <p>Copyright © {new Date().getFullYear()} -  Dev Stack. All rights reserved.</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Terms of use</a>
            </nav>
          </footer>
        </div>
      </div>
    </>
  );
}
