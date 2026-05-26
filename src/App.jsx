import './App.css'
import { useInView } from 'react-intersection-observer'

import Masonry from 'react-masonry-css'

// Add this breakpoint config
const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1
}

function App() {
  const [bioRef, bioInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <div className="container">
      {/* Top section: Image + Bio side by side */}
      <div className="top-section">
        {/* Image box */}
        <div className="image-box">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Photograph_of_a_Photographer.jpg" alt="Profile" />
        </div>

        {/* Bio box */}
        <div className={`bio-box ${bioInView ? 'slide-in' : ''}`} ref={bioRef}>
          <h1>Emily Thompson</h1>
          <h3>Professional Photographer</h3>
          <div className="channels">
            <p>📧 emilytakespics@gmail.com</p>
            <p>💼 linkedin.com/in/emilythompson</p>
          </div>
        </div>
      </div>

      {/* About Me box underneath */}
      <div className={`about-box ${aboutInView ? 'slide-in' : ''}`} ref={aboutRef}>
        <h2>About Me</h2>
        <div className={`about-text ${aboutInView ? 'fade-in' : ''}`}>
          <p>
            I'm a professional photographer with over 8 years of experience capturing 
            life's most precious moments. Based between New York and California, my work 
            focuses on portrait, wedding, and documentary photography.
          </p>
          <p>
            My approach is candid, natural, and story-driven. I believe the best photos 
            happen when you forget the camera exists. I've worked with clients like 
            Vogue, Nike, and Airbnb, but my favorite projects are intimate family sessions 
            and creative collaborations with emerging artists.
          </p>
          <p>
            When I'm not behind the lens, you'll find me hiking, developing film in my 
            darkroom, or hunting for the perfect cup of coffee. Let's create something 
            beautiful together.
          </p>
        </div>
      </div>


      <div className="portfolio-box">
        <h2>Portfolio</h2>
        <Masonry
          breakpointCols={breakpointColumns}
          className="masonry-grid"
          columnClassName="masonry-column"
        >
          <div className="portfolio-item">
            <img src="https://cdn.prod.website-files.com/66183c0b716e9e387bbf091a/677c6fe8ede7b98f669b689b_4S6A1873.jpg" alt="WeddingCouple" />
          </div>
          <div className="portfolio-item">
            <img src="https://images.squarespace-cdn.com/content/v1/5a2421b11f318d2a02e7d6bc/043e7312-1755-425d-95a4-b1189aeb31dd/editorial-photography-31.jpg" alt="Magazine Issue" />
          </div>
          <div className="portfolio-item">
            <img src="https://images.squarespace-cdn.com/content/v1/5edf06dcd417cb4da8ba2163/1628011081602-J6NGWSV31HDZ3MWCMFX3/IMG_0487.jpg" alt="AuthorPortrait" />
          </div>
          <div className="portfolio-item">
            <img src="https://www.inmadelvalle.com/wp-content/uploads/2020/06/editorial-de-moda-masculina-08-1024x682.jpg" alt="MensFashion" />
          </div>
          <div className="portfolio-item">
            <img src="https://res.cloudinary.com/yaffa-publishing/image/fetch/q_auto:best,c_fit,w_630,f_auto/http%3A%2F%2Fyaffa-cdn.s3.amazonaws.com%2Fyaffadsp%2Fimages%2FdmImage%2FSourceImage%2Fren-pidgeon---0007.jpg" alt="WomensFashion" />
          </div>
          <div className="portfolio-item">
            <img src="https://images.squarespace-cdn.com/content/v1/5af47284e17ba38b04db30fb/a7263359-e00a-42d4-9f63-08f69e36433a/Editorial_Wedding_Photographer_Danielle_Victoria_Photography_Wootton_Hall-282.jpg" alt="WeddingBride" />
          </div>
          <div className="portfolio-item">
            <img src="https://covers.storytel.com/contributor/557847/649cf285-ccfb-4939-835b-8f06ae8af894.jpg?optimize=high&quality=70&width=600" alt="AuthorPortrait" />
          </div>
          <div className="portfolio-item">
            <img src="https://images.squarespace-cdn.com/content/v1/574512d92eeb81676262d877/1756670291131-8PQ9YLRFBSW1B9AQMIBQ/Fashion-Photographer-London-UK_Ian-Kobylanski_Editorial_Repurpose_Trend-Prive-Magazine_011.jpg" alt="CoverPhoto" />
          </div>
          <div className="portfolio-item">
            <img src="https://images.squarespace-cdn.com/content/v1/5edf06dcd417cb4da8ba2163/1627751793893-07MK9CYB64CQ6UMGGUHX/savannah-brown.jpeg" alt="AuthorPortrait" />
          </div>
        </Masonry>
      </div>

    </div>
  )
}

export default App