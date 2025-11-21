import React, { useEffect, useRef } from 'react';
import './Advertise.css';
import { LuCircle } from 'react-icons/lu';

export default function Advertise() {
  const marqueeRef = useRef(null);
  
  // તમારો ડેટા (3 વાર રીપીટ)
  const items = [
    { text: "Free Delivery And Return Up To $190" },
    { text: "Summer Sale Up To 50% Off" },
    { text: "Use Code #51407 For 30% Off", isCode: true },
    { text: "Kids Clothing Up To 50% Off" },
  ];
  const marqueeContent = [...items, ...items, ...items]; // 3 વાર રીપીટ

  useEffect(() => {
    if (marqueeRef.current) {
      // 1. ટ્રેકની કુલ પહોળાઈ મેળવો (જેમાં 3 સેટ છે)
      const totalWidth = marqueeRef.current.scrollWidth;
      
      // 2. આપણે માત્ર એક સેટનું 1/3 અંતર ખસવાનું છે, પણ એનિમેશન -50% પર જ છે.
      // લૂપની સ્પીડ કન્ટેન્ટની લંબાઈ પર નિર્ભર હોવી જોઈએ.
      // 100 પિક્સેલ દીઠ 1 સેકન્ડની સ્પીડ સેટ કરીએ.
      const speed = totalWidth / 100; // આ મૂલ્ય (Duration) સેકન્ડ્સમાં આવશે
      
      // 3. CSS Variable સેટ કરો
      marqueeRef.current.style.setProperty('--scroll-duration', `${speed}s`);
    }
  }, [marqueeContent.length]); // ડેટા બદલાય તો ફરી ગણતરી થાય

  return (
    <div className="advertise-marquee">
      {/* ref અહીં લગાવવું */}
      <div className="marquee-track" ref={marqueeRef}>
        {marqueeContent.map((item, index) => (
          <div className="marquee-item" key={index}>
            {item.isCode ? (
              <span>
                Use Code <span className="code-badge">#51407</span> For 30% Off
              </span>
            ) : (
              <span>{item.text}</span>
            )}
            <span className="separator">
               <LuCircle size={7} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}