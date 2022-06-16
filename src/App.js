import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './routes/routes';
import Home from './pages/Home';
import ColorComp from './components/ColorComp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.COLORS} element={<ColorComp />} />
      </Routes>
    </Router>
  );
}

export default App;

//  The goal of the task is to implement SPA application with
// just one view. You should use the below API
// endpoint to display the paginated list of
// products. At the top of the view, there should
// be text input, which allows the user to filter
// results by id. The input should accept only numbers,
// other signs should not even appear. Below this input
// user should see a table displaying the following items’
// properties: id, name, and year. Additionally, the background
//  of each row should be taken from the color property. The table
//   display 5 items per page. Under the table, there should be a
//   pagination component, which allows switching between pages with
//    and “previous” arrows. Apart from React, the technology stack totally
//     to you, the same applies to styling. As a result of the task, we expect
//      a link to a repository on GitHub, GitLab, or bitbucket. Your app should
//      start after running npm install & npm start.

// Extra requirement(optional):

// Please reflect pagination and filtering in the address URL, so users can copy and share the URL with each other.

// API endpoint
// https://reqres.in/api/products
