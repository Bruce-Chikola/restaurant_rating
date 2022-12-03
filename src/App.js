import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './store'
import './App.css';
import Home from './views/home'
import RatingInfo from './views/ratingInfo'
import Header from './views/common/Header';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/ratingInfo/:restaurant" element={<RatingInfo />} />
        </Routes>
      </BrowserRouter >
    </Provider>
  )
}

export default App;
