/* eslint-disable react/no-unescaped-entities */
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
export default function Hero() {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Ayush Rawat,</span>frontend developer based in India
      </h1>
      <p>
        I am frontend developer from Dehradun,Uttrakhand with 1 year of
        experience.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}
