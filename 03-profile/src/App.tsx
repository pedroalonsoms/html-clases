function App() {
  return (
    <div className="max-w-screen-md">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">
          Pedro Alonso Moreno Salcedo
        </h1>
      </header>

      <div className="mb-8 bg-slate-700 rounded-lg text-gray-300 p-8">
        <h2 className="text-2xl font-semibold text-orange-400">Education</h2>
        <p className="text-lg">Graduating in June 2025</p>
        <p className="text-lg">
          <b className="text-orange-400">GPA: </b>98/100
        </p>
        <p className="text-lg">
          <b className="text-orange-400">School: </b>Tecnológico de Monterrey
          (ITESM)
        </p>
        <p className="text-lg">
          Bachelor's Degree in Computer Science and Technology Engineering (ITC)
        </p>
        <p className="text-lg">
          <b className="text-orange-400">Key Coursework:</b> Programming of Data
          Structures and Fundamental Algorithms, Object-Oriented Programming,
          Software Construction and Decision Making
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Skills</h2>
        <p className="text-lg">
          Languages: English (Intermediate, B2 Pearson) - Spanish (Native)
        </p>
        <p className="text-lg">
          Programming: JavaScript, TypeScript, React.js, Node.js, Express.js,
          HTML, CSS, TailwindCSS, Astro
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Major Professional Projects
        </h2>
        <p className="text-lg">
          2023 Development of In-Trend (
          <a
            href="https://www.in-trend-ltd.com/"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.in-trend-ltd.com/
          </a>
          )
        </p>
        <ul className="list-disc ml-8 text-lg">
          <li>
            Implemented a website for a professional make-up agency in the UK on
            a freelance project
          </li>
          <li>
            95+ LightHouse page-load performance score achieved with image
            compression and the use of the Astro framework
          </li>
          <li>
            Developed integration with external email API’s and serverless
            functions to implement a contact form
          </li>
          <li>
            Collaborated with a professional designer and other developer to
            implement new web-development features
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Major Personal Projects
        </h2>
        <p className="text-lg">
          2021 Design and Development of Sinaloa Covid App (
          <a
            href="https://sinaloa-covid-app.netlify.app/"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://sinaloa-covid-app.netlify.app/
          </a>
          )
        </p>
        <ul className="list-disc ml-8 text-lg">
          <li>
            A web-app with a dashboard of statistics about the pandemic that
            included a map, graphs and tables
          </li>
          <li>10X improvements on first-page-load time</li>
          <li>
            +5K total views. Optimized map-related performance issues compared
            to the already-existing version of the
          </li>
          <li>Met with the municipal president of my community</li>
        </ul>
      </div>

      <footer className="text-center text-lg text-white rounded-lg bg-slate-700 p-8">
        <p>
          <b className="text-orange-400">Main email: </b>
          <a href="mailto:pedro123ben10@gmail.com" className="text-blue-500">
            pedro123ben10@gmail.com
          </a>
        </p>
        <p>
          <b className="text-orange-400">School email: </b>
          <a href="mailto:A01741437@tec.mx" className="text-blue-500">
            A01741437@tec.mx
          </a>
        </p>
        <p>
          <b className="text-orange-400">Phone: </b>
          <a href="tel:+526681453188" className="text-blue-500">
            +52 (668)-145-3188
          </a>
        </p>
        <p>
          <b className="text-orange-400">LinkedIn: </b>
          <a
            href="https://www.linkedin.com/in/pedroalonsoms"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/pedroalonsoms
          </a>
        </p>
        <p>
          <b className="text-orange-400">GitHub: </b>
          <a
            href="https://github.com/pedroalonsoms"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/pedroalonsoms
          </a>
        </p>
        <p>
          <b className="text-orange-400">Portfolio: </b>
          <a
            href="https://sites.google.com/view/ben10pedrin"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://sites.google.com/view/ben10pedrin
          </a>
        </p>
        <p className="text-white">Monterrey, Nuevo León, México</p>
      </footer>
    </div>
  );
}

export default App;
