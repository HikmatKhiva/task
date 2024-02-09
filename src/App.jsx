import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import {
  HeroSection,
  AboutSection,
  ServiceSection,
  SmallSection,
  Testimonial,
} from "./sections/";
function App() {
  return (
    <div className="min-h-screen bg-dark-blue">
      <Header />

      <main className="hidden 2xl:block">
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <Testimonial />
        <SmallSection />
      </main>
      <div className="flex flex-col md:max-w-[700px] text-center gap-y-4 text-white mx-auto py-10 2xl:hidden">
        <h1 className="text-[40px] text-center font-bold">Hey! 👋</h1>
        <p className="md:text-[24px] text-sm leading-normal font-light">
          This task is designed for a screen width of{" "}
          <span className="font-medium text-secondary-blue">
            1536px or greater
          </span>
          .<br />
          Please focus your evaluation and testing on this resolution. The
          assessment of mobile or smaller screen designs is not required at this
          stage, and we encourage you to concentrate on the larger screen
          format.
        </p>
        <p className="text-[24px] font-medium">Thank you and good luck! 🍀</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
