import "./LoadingScreen.css";

function LoadingScreen() {
  return (
    <div className="loading-screen">

      <div className="loader-content">

        <div className="loader-logo">
          🤖
        </div>

        <h1>
          CodeCareer AI
        </h1>

        <p>
          Finding your career path...
        </p>

        <div className="spinner"></div>

      </div>

    </div>
  );
}

export default LoadingScreen;