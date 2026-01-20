import ClgNavbar from "../components/clgNavbar";
import ClgHero from "../components/clgHero";
import ClgFeatureCards from "../components/clgFeatureCards";
import ClgCoursesList from "../components/clgCoursesList";
import ClgGalleryGrid from "../components/clgGalleryGrid";
import ClgContactForm from "../components/clgContactForm";


export default function Home() {
  return (
    <>
      {/* Common Navbar */}
      <ClgNavbar />

      {/* Sections in scroll order */}
      <section id="home">
        <ClgHero />
      </section>
      
      <ClgFeatureCards />
      <ClgCoursesList />
      <ClgGalleryGrid />
      <ClgContactForm />

     
      
    </>
  );
}