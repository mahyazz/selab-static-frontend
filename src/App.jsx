import './App.css'

function App() {
  return (
    <div className="container">
      {/* Top section: Image + Bio side by side */}
      <div className="top-section">
        {/* Image box */}
        <div className="image-box">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Photograph_of_a_Photographer.jpg" alt="Profile" />
        </div>

        {/* Bio box */}
        <div className="bio-box">
          <h1>Emily Thompson</h1>
          <h3>Professional Photographer</h3>
          <div className="channels">
            <p>📧 emilytakespics@gmail.com</p>
            <p>💼 linkedin.com/in/emilytakespics</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App