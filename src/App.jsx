function App() {
  const navigate = (destination) => {
    alert(destination);
  }

  return (
    <div id="container">
      <div id="header" className="header_section">
        <h2 className="header_title">
            HOME
        </h2>

        <ul className="nav-bar">
            <li onClick={() => navigate('home1')} id="nav_home"><button>Home</button></li>
            <li onClick={() => navigate('home2')} id="nav_biography"><button>Biography</button></li>
            <li onClick={() => navigate('home3')} id="nav_projects"><button>Projects</button></li>
        </ul>
      </div>
      {/* end header */}

      <div id="content" class="content_section">
        <div id="home_content">
          <div id="introduction_content">
              <p id="introduction_subsection_content">
                  I'll become an alumni at California State University [Redacted] with a BS in Computer Science come springtime!
              </p>
              <p id="quote_content"></p>
          </div>
        </div>


        <div id="biography_content">
          <div id="skills_content">
              <h2>🖥️ Skills</h2>
              <p class="biography_subsection_content">
                  <b>Languages</b>
                      <ul>Python, Java, C++, SQL, C#, Javascript, HTML, CSS, x86 Assembly</ul>
              </p>
              <p class="biography_subsection_content">
                  <b>Frameworks</b>
                      <ul>Flask, .NET, React</ul>
              </p>
              <p class="biography_subsection_content">
                  <b>Developer Tools</b> 
                      <ul>Git, Google Cloud Platform, Adobe & Microsoft Suites, CLI, Powershell, bash, Virtual Box, Ghidra, PE-bear, Strings (Unix), Process Explorer & Process Monitor, REMnux, Wireshark, Netcat, ApateDNS, Unity, Unreal Engine 5, Visual Studio Code</ul>
              </p>
              <p class="biography_subsection_content">
                  <b>Libraries</b>
                      <ul>pandas, Scikit-Learn, pygame</ul>
              </p>
          </div>

          <div id="education_content">
              <h2>🎓 Education</h2>
              <p class="biography_subsection_content">
                  California State University, GO UNIVERSITY! <br />
                  Bachelor of Science, Computer Science <br />
                  Expected Graduation: May 2025
                  <br />
                  <br />
                  <b>Relevant Coursework:</b> <br />
                  <i>Web Front-End Engineering, Web Back-End Engineering, 
                      Algorithm Engineering, Data Structures, Operating Systems Concepts, 
                      File Structures and Database Systems, Compilers and Languages, 
                      Computer Communications (Network Protocols), Malware Analysis, 
                      Discrete Mathematical Structures I & II, Game Design and Production, 
                      Data Science and Big Data, Cybersecurity Fundamentals and Principles</i>
              </p>
          </div>

          <div id="background_content">
              <h2>🔆 Background & Interests</h2>
              <div class="biography_subsection_title">
                  <b>Biography</b>
              </div>
              <div><p>
                  I'm a computer science student at CSU Fullerton, having been born and raised in California. 
                  General puzzles and strategy games appealed to me as I grew up, eventually leading me to my major. 
                  These hobbies provide a creative outlet to continually express myself and broaden my horizons.
              </p></div>

              <div class="biography_subsection_title">
                  <b>Interests:</b>
              </div>
              <div id="interests_subsection_content">
                  <ul>
                      <li>Video Games & Game Development: <i>RPGs, puzzle, and strategy games with development experience in Pygame, Unity engine, and Unreal Engine</i></li>
                      <li>Clothesmaking: <i>Augmenting thrifted clothes with raw fabric and hand-sewn seams</i></li>
                      <li>Cooking & Baking: <i>Often simple homely meals. Cuisine ranges from East Asian to American to European</i></li>
                      <li>Art: <i>Primarily digital illustrations with some traditional mediums (Pen & Ink, Acrylic on Wood, Sticker Printing)</i></li>
                  </ul>
              </div>
          </div>

          <div id="contact_content">
              <div class="socials_subsection_content">
              </div>
          </div>
        </div>


        <div id="projects_content">
          <div class="projects_subsection_content">
              <h1><b>Canvas</b></h1>
              <div class="project_tool_subection_content">
              </div>
              <p  id="projects_subsection_description_canvas">
                  Developed and deployed a web application with Flask which allows users to simultaneously collaborate on a canvas with real-time connectivity.
              </p>
              <a class="project_github_link" href="https://github.com/PTanges/Canvas" target="_blank" rel="noopener noreferrer">Code</a>
              <a class="project_github_link" href="https://canvas-82fz.onrender.com" target="_blank" rel="noopener noreferrer">Project</a>
          </div>

          <div class="projects_subsection_content">
              <h1><b>Portfolio</b></h1>
              <div class="project_tool_subection_content">
              </div>
              <p  id="projects_subsection_description_portfolio">
                  Built a single-page website to display projects with HTML, CSS, and JavaScript.
              </p>
              <a class="project_github_link" href="https://github.com/PTanges/Portfolio" target="_blank" rel="noopener noreferrer">Code</a>
              <a class="project_github_link" href="https://ptanges.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">Project</a>
          </div>

          <div class="projects_subsection_content">
              <h1><b>Blackjack AI</b></h1>
              <div class="project_tool_subection_content">
              </div>
              <p id="projects_subsection_description_blackjack">
                  A Python command line interface program which allows a player to play Blackjack against an AI (utilizing the Monte Carlo algorithm) and the dealer. 
              </p>
              <a class="project_github_link" href="https://github.com/PTanges/Blackjack-AI/" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>

        <div id="project_subproject_content">
          <div id="project_subproject_section">
          </div>
        </div>
      </div>
      {/* end content */}

      <div id="footer" class="footer_section">
      </div>
      {/* end footer */}
    </div> // end container
  );
}

export default App;
