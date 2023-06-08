import { FixedNavbar } from './components/fixed-navbar/FixedNavbar';
import Footer from './components/footer/Footer';
import { Navbar3 } from './components/navbar3/Navbar3';
import Whatsapp from './components/whatsapp/Whatsapp';
import Areas from './modules/areas/Areas';
import { ContactBanner } from './modules/contact-banner/ContactBanner';
import { Details } from './modules/details/Details';
import { Hero } from './modules/hero/Hero';
import { Services } from './modules/services/Services';
import { TeamMembers } from './modules/team-members/TeamMembers';

function App() {
  return (
    <>
      <Whatsapp />
      <FixedNavbar />
      <Navbar3 />
      <Hero />
      <Services />
      <Details />
      <Areas />
      <ContactBanner />
      <TeamMembers />
      <Footer />
    </>
  );
}

export default App;
