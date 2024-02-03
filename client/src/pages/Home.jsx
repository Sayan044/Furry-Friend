import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World Pet Care Site</p>
              <h1>Welcome to HappyPaws</h1>
              <p>
              Welcome to HappyPaws, your go-to platform for the well-being of domestic animals. Our MongoDB-powered treatment portal ensures confidential care for wounded animals, while our adoption and donation sections provide opportunities to give strays a second chance and contribute to their well-being. Explore shelter options and report animal cruelty swiftly through our user-friendly interface. PawsNWellness: Nurturing Lives, One Paw at a Time.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
            Welcome to HappyPaws!, your go-to platform for the well-being of domestic animals. Our MongoDB-powered treatment portal ensures confidential care for wounded animals, while our adoption and donation sections provide opportunities to give strays a second chance and contribute to their well-being. Explore shelter options and report animal cruelty swiftly through our user-friendly interface. PawsNWellness: Nurturing Lives, One Paw at a Time.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};