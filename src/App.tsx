import { MainLayout } from './layouts/MainLayout';
import { Header } from './components/Header/Header';
import { Hero } from './features/Hero/Hero';
import { Benefits } from './features/Benefits/Benefits';
import { Testimonials } from './features/Testimonials/Testimonials';
import { Accordion } from './features/FAQ/Accordion';
import { Explore } from './features/Explore/Explore';

<Accordion />
function App() {
  return (
    <MainLayout>
      <Header />
      <Hero />
       <Benefits />
       <Testimonials />
        <Accordion />
        <Explore />
    </MainLayout>
  );
}

export default App;