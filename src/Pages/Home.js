import React from "react";
import AppointmentHero from "../Components/AppointmentHero";
import Banner from "../Components/Banner";
import ExceptionalDental from "../Components/ExceptionalDental";
import HomeContact from "../Components/HomeContact";
import InfoCards from "../Components/InfoCards";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <ExceptionalDental></ExceptionalDental>
      <AppointmentHero></AppointmentHero>
      <Testimonials></Testimonials>
      <HomeContact></HomeContact>
    </div>
  );
};

export default Home;
