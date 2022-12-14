import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, Hero, News, Skills } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <div className="gradient-02 z-0" />
      <News />
      <Skills />
      <Feedback />
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
  </div>
);

export default Page;
