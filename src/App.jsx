import './App.css'
import { useInView } from 'react-intersection-observer'

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
    </div>
  )
}

export default App