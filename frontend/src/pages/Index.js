import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import PredictionForm from "@/components/PredictionForm";
import ProjectDetails from "../components/ProjectDetails";
import InsuranceForm from "../components/InsuranceForm";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar />
      <Hero />
      <InsuranceForm />
      <ProjectDetails /> 
      <Footer />
    </div>
  );
};

export default Index;
