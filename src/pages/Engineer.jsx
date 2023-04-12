import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

// Contexts
import { useApp } from '../contexts/AppContext';

// Components
import Page from '../layouts/Page';

export default function Engineer() {

  const { setBackgroundFade, setChronology, setShowingChronology } = useApp();

  const cards=[
    {
      title: "Current",
      cardTitle: "Together",
      url: "https://thisisunfolded.com",
      cardSubtitle:"Lead web engineer",
      cardDetailedText: "Lead front end engineer building ethical fashion platforms with React and Shopify, from full modern theme development to a React fashion swapping platform.",
      tech: [
        { title: "React", type: "code" },
        { title: "Liquid", type: "code" },
        { title: "JS", type: "code" },
        { title: "SCSS", type: "code" },
        { title: "Shopify", type: "platform" },
        { title: "UI/UX", type: "design" },
        { title: "Design", type: "design" },
        { title: "Tooling", type: "project" }
      ]
    },
    {
      title: "2020-2021",
      cardTitle: "Lost Stock",
      url: "https://thisisunfolded.com",
      cardSubtitle:"Lead web engineer",
      cardDetailedText: "Shopyfied e-commerce platform for sustainable fashion, custom-theme development and JavaScript based Box Building.",
      tech: [
        { title: "Liquid", type: "code" },
        { title: "JS", type: "code" },
        { title: "SCSS", type: "code" },
        { title: "Shopify", type: "platform" },
        { title: "UI/UX", type: "design" },
        { title: "Design", type: "design" }
      ]
    },
    {
      title: "2017-2022",
      cardTitle: "Mallzee",
      cardSubtitle:"Software engineer",
      cardDetailedText: "Architecture and developement of ethical future fashion platforms; accessible, progressive, mobile-first development in React. Data portals and visualsations.",
      tech: [
        { title: "React", type: "code" },
        { title: "Liquid", type: "code" },
        { title: "JS", type: "code" },
        { title: "SCSS", type: "code" },
        { title: "Shopify", type: "platform" },
        { title: "Linux", type: "platform" },
        { title: "UI/UX", type: "design" },
        { title: "PhotoShop", type: "design" },
        { title: "Design", type: "design" },
        { title: "Tooling", type: "project" }
      ]
    },
    {
      title: "2014-2017",
      cardTitle: "Signal",
      url: "https://www.signal.co.uk/",
      cardSubtitle:"Lead Frontend Developer",
      cardDetailedText: "Lead digital agency role in delivering for multiple clients: TDK, Williams and Glyn, Sainsburys, Marriot Hotels, FoA. The creation of Progressive, accessible web solutions. Scrum master & agile process management.",
      tech: [
        { title: "JS", type: "code" },
        { title: "SCSS", type: "code" },
        { title: "PHP", type: "code" },
        { title: "UI/UX", type: "design" },
        { title: "Design", type: "design" },
        { title: "Project", type: "project" },
        { title: "Tooling", type: "project" },
        { title: "Agile/Scrum", type: "project" }
      ]
    },
    {
      title: "2011-2014",
      cardTitle: "Aridhia Informatics",
      url: "https://www.aridhia.com/",
      cardSubtitle:"Web Applications Developer",
      cardDetailedText: "Building informatics platforms and R-language research consoles. Scrum master & agile process management",
      tech: [
        { title: "JS", type: "code" },
        { title: "SCSS", type: "code" },
        { title: "BackboneJS", type: "design" },
        { title: "Agile/Scrum", type: "project" }
      ]
    },
    {
      title: "2011-2013",
      cardTitle: "Anime Picks / Bite-Sized Japan",
      cardSubtitle: "Lead designer, developer",
      cardDetailedText: "Design, development and continued support of magazine style content-driven website based on WordPress platform. PHP, CSS / HTML, jQuery, feature development and platform support.",
      tech: [
        { title: "PHP", type: "code" },
        { title: "JS", type: "code" },
        { title: "jQuery", type: "code" },
        { title: "SCSS", type: "code" },
        { title: "WordPress", type: "platform" },
        { title: "MySQL", type: "platform" },
        { title: "Design", type: "design" },
        { title: "Video", type: "design" }
      ]
    },
    {
      title: "2005-2011",
      cardTitle: "Yell.com",
      url: "https://yell.com/",
      cardSubtitle: "Software Engineer",
      cardDetailedText: "Lead development of in-house Intranet platform, presentational applications in Flash, and internal UIs",
      tech: [
        { title: "VBS", type: "code" },
        { title: "PHP", type: "code" },
        { title: "JS", type: "code" },
        { title: "jQuery", type: "code" },
        { title: "CSS", type: "code" },
        { title: "WordPress", type: "platform" },
        { title: "MySQL", type: "platform" },
        { title: "Design", type: "design" },
        { title: "Flash", type: "design" }
      ]
    },
    {
      title: "2004-2006",
      cardTitle: "Freelance",
      cardSubtitle: "Developer / Designer, various music artists",
      cardDetailedText: "Band site development for Garbage, Bowie and RHCP, fan service, videography and event coverage for UltraStar / UMG / QPrime",
      tech: [
        { title: "JS", type: "code" },
        { title: "jQuery", type: "code" },
        { title: "VBS", type: "code" },
        { title: "PHP", type: "code" },
        { title: "CSS", type: "code" },
        { title: "WordPress", type: "platform" },
        { title: "MySQL", type: "platform" },
        { title: "UI/UX", type: "design" },
        { title: "Design", type: "design" },
        { title: "Flash", type: "design" },
        { title: "Video", type: "design" }
      ]
    },
    {
      title: "2004-2005",
      cardTitle: "Vianet",
      cardSubtitle: "Web Designer",
      cardDetailedText: "UI development for customer-facing reporting system",
      tech: [
        { title: "JS", type: "code" },
        { title: "JSP", type: "code" },
        { title: "CSS", type: "code" },
        { title: "Design", type: "design" }
      ]
    },
    {
      title: "2001-2004",
      cardTitle: "Kwik-Fit",
      cardSubtitle: "Web Designer",
      cardDetailedText: "Lead design and development of new Kwik-Fit fleet and Dial-A-Tyre e-commerce",
      url: "https://www.kwik-fit.com/",
      tech: [
        { title: "JS", type: "code" },
        { title: "jQuery", type: "code" },
        { title: "VBS", type: "code" },
        { title: "CSS", type: "code" },
        { title: "MySQL", type: "platform" },
        { title: "Windows Server", type: "platform" },
        { title: "UI/UX", type: "design" },
        { title: "Design", type: "design" }
      ]
    },
    {
      title: "2000-2001",
      cardTitle: "Scarlet Training",
      cardSubtitle: "Web Designer",
      cardDetailedText: "Development of training portal software",
      tech: [
        { title: "JS", type: "code" },
        { title: "VBS", type: "code" },
        { title: "CSS", type: "code" },
        { title: "MySQL", type: "platform" },
        { title: "Windows Server", type: "platform" },
        { title: "UI", type: "design" }
      ]
    },
    {
      title: "1997-2000",
      cardTitle: "AXA Insurance",
      cardSubtitle: "Web Designer",
      cardDetailedText: "Lead development of internal UIs, technical support and helpdesk",
      tech: [
        { title: "JS", type: "code" },
        { title: "VBA/VB6", type: "code" },
        { title: "UI", type: "design" },
        { title: "Flash", type: "design" },
        { title: "Video", type: "design" },
        { title: "Design", type: "design" },
        { title: "Tech support", type: "project" }
      ]
    }
  ]

  useEffect(() => {
    setBackgroundFade(true);
    setShowingChronology(false);
    setChronology(cards);
  }, []);

  const handleShowTimeline = () => {
    setShowingChronology(true)
  }

  return (
    <Page>
      <h1 className="small">Front end software engineer</h1>
      <p>Click below for work history and technical experience.</p>
      <Link onClick={handleShowTimeline} className="btn">View timeline</Link>
    </Page>
  )
}