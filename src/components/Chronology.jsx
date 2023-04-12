import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Chrono } from "react-chrono";

// Contexts
import { useApp } from '../contexts/AppContext';

// Styles
import './Chronology.scss';

// Assets
import Image1 from '../assets/timeline-current.svg';

export default function Chronology() {

  const { chronology, isShowingChronology, setShowingChronology } = useApp();
  const [ chronologyData, setChronologyData ] = useState([]);

  useEffect(() => {
    const data = [];

    if (chronology && chronology.length > 0) {
      chronology.forEach((card) => {
        const technology = [];
        if (card.tech && card.tech.length >0) {
          card.tech.forEach( (tech, i) => {
            technology.push(
              <span key={i} className={tech.type}>{tech.title}</span>
            )
          })
        }

        data.push({
          title: card.title,
          cardTitle: card.cardTitle,
          url: card.url,
          cardSubtitle: card.cardSubtitle,
          timelineContent: <div>
            <p>{card.cardDetailedText}</p>
            <div className="card_tech">{technology}</div>
          </div>
        })
      })

      setChronologyData(data);
    }

  }, [chronology]);

  const onClickClose = () => {
    setShowingChronology(false);
  }

  if (isShowingChronology) {
    return(
      <div className="chronology">
        <div className="chronology__inner">
          <Chrono items={chronologyData} mode="VERTICAL" hideControls useReadMore={true} theme={{
              primary: 'white',
              secondary: 'white',
              cardBgColor: 'white',
              titleColor: 'white',
              titleColorActive: 'black',
              cardTitle: '2rem',
            }}
            classNames={{
              card: 'chronology__card',
              cardSubTitle: 'chronology__subtitle',
              cardText: 'chronology__text',
              cardTitle: 'chronology__title',
              title: 'my-title',
            }}
            >
            <div className="chrono-icons">
              <img src={Image1} alt="image1" />
            </div>
          </Chrono>
        </div>
        <Link onClick={onClickClose} className="btn chronology__close">Close</Link>
      </div>
    )
  }

  return null;
}