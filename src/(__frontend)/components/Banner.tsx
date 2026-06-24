import React from "react";

type BannerProps = {
  topTitle: React.ReactNode;
  title: React.ReactNode;
  bannerImage: string;
  description: React.ReactNode;
  button?: React.ReactNode;
  pathname?: string;
};

const Banner = ({
  topTitle,
  title,
  bannerImage,
  description
}: BannerProps) => {
  return (
    <section
      className="hero-banner"
      style={{
        backgroundImage: `linear-gradient(
        to bottom right,
        rgba(13,110,253,0.7),
        rgba(0,0,0,0.6)
      ), url(${bannerImage})`
      }}
    >
      <div className="hero-overlay">
        <div className="container text-center hero-content">
          <div className="hero-badge">{topTitle}</div>

          <h1 className="hero-title">{title}</h1>

          <p className="hero-description">{description}</p>

          <div className="hero-actions">

          
                <button className="banner-btn-primary">
                  Start Withdrawal
                </button>

                <button className="banner-btn-outline">
                  Learn More
                </button>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;