/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'

import React from 'react';

const App = () => {
  const items = [
    { 
      title: "Technology",
      sites: [
        { name: "The Verge", link: "https://www.theverge.com/" },
        { name: "Wired", link: "https://www.wired.com/magazine/" },
        { name: "MIT Technology Review", link: "https://www.technologyreview.com/" },
        { name: "The Economic Times - Tech", link: "https://tech.economictimes.indiatimes.com/" },
        { name: "Gadgets 360", link: "https://www.gadgets360.com/" },
        { name: "YourStory", link: "https://yourstory.com/" }
      ]
    },
    { 
      title: "Finance",
      sites: [
        { name: "The Wall Street Journal", link: "https://www.wsj.com/" },
        { name: "Bloomberg", link: "https://www.bloomberg.com/" },
        { name: "Financial Times", link: "https://www.ft.com/" },
        { name: "The Economic Times - Markets", link: "https://economictimes.indiatimes.com/markets/stocks/news" },
        { name: "Mint - Market News", link: "https://www.livemint.com/market/" },
        { name: "Moneycontrol", link: "https://www.moneycontrol.com/" }
      ]
    },
    { 
      title: "Economics",
      sites: [
        { name: "The Economist", link: "https://www.economist.com/" },
        { name: "Project Syndicate", link: "https://www.project-syndicate.org/" },
        { name: "International Monetary Fund (IMF)", link: "https://www.imf.org/en/Home" },
        { name: "Business Standard", link: "https://www.business-standard.com/" },
        { name: "Centre for Policy Research", link: "https://www.cprindia.org/" },
        { name: "Reserve Bank of India", link: "https://rbi.org.in/" }
      ]
    },
    { 
      title: "Politics",
      sites: [
        { name: "The New York Times", link: "https://www.nytimes.com/" },
        { name: "The Washington Post", link: "https://www.washingtonpost.com/" },
        { name: "BBC News", link: "https://www.bbc.com/" },
        { name: "The Hindu", link: "https://www.thehindu.com/" },
        { name: "NDTV", link: "https://www.ndtv.com/" },
        { name: "India Today", link: "https://www.indiatoday.in/" }
      ]
    },
    { 
      title: "Business",
      sites: [
        { name: "Forbes", link: "https://www.forbes.com/" },
        { name: "Fortune", link: "https://fortune.com/" },
        { name: "CNBC", link: "https://www.cnbc.com/" },
        { name: "The Economic Times", link: "https://economictimes.indiatimes.com/" },
        { name: "Business Standard", link: "https://www.business-standard.com/" },
        { name: "Mint", link: "https://www.livemint.com/" }
      ]
    },
    { 
      title: "Geopolitics",
      sites: [
        { name: "Foreign Policy", link: "https://foreignpolicy.com/" },
        { name: "The Diplomat", link: "https://magazine.thediplomat.com/" },
        { name: "International Crisis Group", link: "https://www.crisisgroup.org/" },
        { name: "The Indian World Affair", link: "#" }, // Invalid URL removed
        { name: "Observer Research Foundation", link: "https://www.orfonline.org/" },
        { name: "Institute for Defence Studies and Analyses", link: "https://www.idsa.in/" }
      ]
    },
    { 
      title: "Society",
      sites: [
        { name: "The Atlantic", link: "https://www.theatlantic.com/" },
        { name: "The Guardian", link: "https://www.theguardian.com/" },
        { name: "National Geographic", link: "https://www.nationalgeographic.com/" },
        { name: "Down To Earth", link: "https://www.downtoearth.org.in/" },
        { name: "The Caravan", link: "https://caravanmagazine.in/" },
        { name: "Scroll.in", link: "https://scroll.in/" }
      ]
    },
    { 
      title: "Environment",
      sites: [
        { name: "The New York Times - Climate", link: "https://www.nytimes.com/2023/07/11/climate/when-climate-change-hits-home.html" },
        { name: "The Guardian - Environment", link: "https://www.theguardian.com/uk/environment" },
        { name: "National Geographic - Environment", link: "https://www.nationalgeographic.com/environment" },
        { name: "Down To Earth", link: "https://www.downtoearth.org.in/" },
        { name: "Mongabay India", link: "https://india.mongabay.com/" },
        { name: "Centre for Science and Environment", link: "https://www.cseindia.org/" }
      ]
    }
  ];
  

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">TET Research Hub</h2>
          <p className="mt-4 text-gray-300">
            One stop site for all TET writers to get access to reputable sources of Information and access to new topics of research.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div key={index} className="block rounded-xl border border-gray-800 p-8 shadow-xl transition">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  className="size-10 text-[#C61414]"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path d="M12 14l9-5-9-5-9 5 9 5z" />
  <path
    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
  />
</svg>

              <h2 className="mt-4 text-xl font-bold text-white">{item.title}</h2>
              <ul className="mt-2 text-gray-300">
                {item.sites.map((site, i) => (
                  <li key={i}>
                    <a className="hover:text-[#C61414]" href={site.link}>{site.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.scribbr.com/citation/generator/apa/"
            className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Citation Generator
          </a>
        </div>
      </div>
    </section>
  );
};

export default App;
