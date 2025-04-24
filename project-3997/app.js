const { BrowserRouter, Routes, Route } = ReactRouterDOM;

function App() {
  return (
    <BrowserRouter data-id="qcxyymz3v" data-path="app.js">
      <Navbar data-id="fgycc4ztl" data-path="app.js" />
      <Routes data-id="29duilckz" data-path="app.js">
        <Route path="/" element={<Home data-id="rmj2vttkr" data-path="app.js" />} data-id="31j5l91c5" data-path="app.js" />
        <Route path="/about" element={<AboutPage data-id="rdg9pib2t" data-path="app.js" />} data-id="8k6yhaahi" data-path="app.js" />
        <Route path="/competition" element={<CompetitionPage data-id="9aiehqbvn" data-path="app.js" />} data-id="4z1y3n4ca" data-path="app.js" />
        <Route path="/register" element={<RegisterPage data-id="33ej694a9" data-path="app.js" />} data-id="zjio15gay" data-path="app.js" />
        <Route path="/faq" element={<FAQPage data-id="k29d7wuq3" data-path="app.js" />} data-id="rgfzgvzyf" data-path="app.js" />
      </Routes>
      <Footer data-id="5591o35y5" data-path="app.js" />
    </BrowserRouter>);

}

// Render the App
ReactDOM.render(<App data-id="yn54nlvav" data-path="app.js" />, document.getElementById('root'));