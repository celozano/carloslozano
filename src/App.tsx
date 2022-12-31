import { Route, Routes } from 'react-router-dom';
import { About, Home, Layout, Work } from './views';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:id" element={<Work />} />
      </Route>
    </Routes>
  );
};

export default App;
