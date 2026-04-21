"use client";

import React, { useState } from 'react';
import { 
  MessageCircle, ShieldCheck, MapPin, Car, X, Search, Zap, Award, Lock, Anchor, Globe, Maximize2 
} from 'lucide-react';

const vehicles = [
  {
    id: "camry-se-2013",
    name: "Toyota Camry 2013",
    price: "₦16,000,000",
    tag: "Sport Edition",
    location: "Lagos Cleared",
    description: "Clean USA Spec Sport Edition. Shipped directly from the USA and cleared in Lagos. Available for immediate inspection and pickup across our major hubs.",
    heroImage: "/camry2013se (1).jpg",
    images: ["/camry2013se (2).jpg", "/camry2013se (3).jpg"],
    video: "/camry2013se.MP4",
    specs: ["Direct USA Spec", "Tincan Lagos Cleared", "Sport Suspension"],
    hasThumbStart: false
  },
  {
    id: "camry-xle-2012",
    name: "Toyota Camry 2012",
    price: "₦16,000,000",
    tag: "XLE Premium",
    location: "Lagos Cleared",
    description: "Clean USA Spec XLE Edition with Thumb Start. Shipped directly from the USA and cleared in Lagos. Premium comfort meets reliability.",
    heroImage: "/camryxle2012 (2).jpg",
    images: ["/camryxle2012 (1).jpg"],
    video: "/camryxle2012.MP4",
    specs: ["Thumb Start", "Direct USA Spec", "Lagos Cleared"],
    hasThumbStart: true
  },
  {
    id: "lexus-rx350-2012",
    name: "Lexus RX 350 2012",
    price: "₦18,000,000",
    tag: "Luxury SUV",
    location: "Lagos Cleared",
    description: "Premium Black on Black Edition. Clean USA Spec with dark wood trim and perforated leather. Exceptionally maintained luxury SUV cleared in Lagos.",
    heroImage: "/lexus (7).jpg",
    images: ["/lexus (1).jpg", "/lexus (3).jpg", "/lexus (4).jpg", "/lexus (5).jpg", "/lexus (6).jpg"],
    video: null,
    specs: ["Black on Black", "Direct USA Spec", "AWD Luxury"],
    hasThumbStart: true
  },
  {
    id: "highlander-2017-xle",
    name: "Toyota Highlander 2017",
    price: "₦32,000,000 (Neg.)",
    tag: "XLE Package",
    location: "Lagos Cleared",
    description: "Modern family luxury. Clean white exterior with premium cream leather. Shipped directly from USA and cleared in Lagos. Available for immediate pickup.",
    heroImage: "/Toyota highlander (2).jpg",
    images: ["/Toyota highlander (1).jpg", "/Toyota highlander (3).jpg"],
    video: null,
    specs: ["XLE 3-Row", "Cream Leather", "Direct USA Spec"],
    hasThumbStart: true
  },
  {
    id: "highlander-2010-limited",
    name: "Toyota Highlander 2010",
    price: "₦20,000,000",
    tag: "Limited Edition",
    location: "Lagos Cleared",
    description: "Reliable and spacious 7-seater SUV. Features the powerful 3.5L V6 engine, smooth 4WD capability, and premium Limited trim styling.",
    heroImage: "/Thighlander2010 (2).jpg",
    images: ["/Thighlander2010 (1).jpg", "/Thighlander2010 (4).jpg", "/Thighlander2010 (6).jpg", "/Thighlander2010 (7).jpg"],
    video: "/Thighlander2010 (1).MP4",
    specs: ["3.5L V6", "4WD", "7-Seater", "JBL Audio"],
    hasThumbStart: false
  },

  {
    id: "lexus-rx350-2013",
    name: "Lexus RX 350 2013",
    price: "₦24,000,000",
    tag: "Luxury SUV",
    location: "Lagos Cleared",
    description: "Elegant 2013 Lexus RX 350. Features premium styling, smooth performance, and a luxurious cabin. A perfect blend of comfort and reliability, fully cleared and ready.",
    heroImage: "/lexus2013 (1).jpg",
    images: ["/lexus2013 (2).jpg", "/lexus2013 (3).jpg", "/lexus2013 (4).jpg"],
    video: null,
    specs: ["Luxury SUV", "Direct USA Spec", "Premium Comfort"],
    hasThumbStart: true
  }
];

export default function ZuwamenAutosShowroom() {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
  const dealerPhone = "+17703769997";
  const cleanPhone = dealerPhone.replace(/[^0-9]/g, '');

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 selection:bg-blue-100 pb-20">
      
      {/* --- LIGHTBOX --- */}
      {activeLightboxImage && (
        <div className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-200" onClick={() => setActiveLightboxImage(null)}>
          <img src={activeLightboxImage} className="max-w-full max-h-[90vh] rounded-3xl shadow-2xl ring-1 ring-white/20 object-contain" alt="Zuwamen Autos Unit Detail" />
        </div>
      )}

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-100">
            <Car className="w-6 h-6 text-white" />
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase italic">
            ZUWAMEN<span className="text-blue-600">AUTOS</span>
          </span>
        </div>
        <a href={`https://wa.me/${cleanPhone}`} target="_blank" className="bg-[#25D366] text-white px-6 py-3 rounded-2xl font-bold text-xs shadow-xl shadow-green-100 flex items-center gap-2 hover:scale-105 transition-all">
            <MessageCircle className="w-5 h-5" /> DM FOR DETAILS
        </a>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-16 border-l-4 border-blue-600 pl-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-1">USA Spec Collection</h2>
            <p className="text-slate-400 font-bold text-xs tracking-[0.3em] uppercase flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-500" /> Shipped from USA <span className="text-slate-200">|</span> <Anchor className="w-4 h-4 text-slate-400" /> Lagos Tincan Cleared
            </p>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {vehicles.map((car) => (
            <article key={car.id} className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col group transition-all hover:-translate-y-2">
              
              {/* MEDIA CONTAINER */}
              <div className="relative aspect-video bg-slate-900 overflow-hidden">
                {car.video ? (
                  <video controls className="w-full h-full object-cover" poster={car.heroImage}>
                    <source src={car.video} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={car.heroImage} 
                    alt={car.name} 
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
                    onClick={() => setActiveLightboxImage(car.heroImage)}
                  />
                )}
                
                {/* Badges */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl">
                        {car.tag}
                    </span>
                    {car.hasThumbStart && (
                        <span className="bg-white text-blue-600 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-lg border border-blue-100">
                            <Zap className="w-3.5 h-3.5 fill-blue-600" /> Thumb Start
                        </span>
                    )}
                </div>
              </div>

              {/* INFO CONTENT */}
              <div className="p-10 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 leading-none tracking-tighter mb-2 uppercase">{car.name}</h3>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                        <ShieldCheck className="w-4 h-4" /> Zuwamen Verified Unit
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-slate-900 tracking-tighter block">{car.price}</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest italic">{car.location}</span>
                  </div>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-8 border-l-2 border-blue-50 pl-4">
                  {car.description}
                </p>

                {/* Photo Gallery Row */}
                <div className="grid grid-cols-4 gap-3 mb-8">
                  {car.images.map((img, i) => (
                    <button 
                        key={i} 
                        onClick={() => setActiveLightboxImage(img)}
                        className="h-16 rounded-2xl overflow-hidden border-2 border-slate-50 hover:border-blue-400 transition-all active:scale-90 shadow-sm"
                    >
                        <img src={img} className="w-full h-full object-cover" alt="Zuwamen Autos detail" />
                    </button>
                  ))}
                </div>

                {/* Footer Specs & CTA */}
                <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                   <div className="flex flex-wrap gap-1.5 max-w-[60%]">
                        {car.specs.slice(0, 3).map((s, i) => (
                            <span key={i} className="text-[8px] font-black text-slate-400 uppercase px-2 py-1 bg-slate-50 rounded border border-slate-100 tracking-tighter">{s}</span>
                        ))}
                   </div>
                   <a 
                   href={`https://wa.me/${cleanPhone}?text=Hello%20Zuwamen%20Autos,%20I%20want%20to%20buy%20the%20${encodeURIComponent(car.name)}%20for%20${car.price}.`}
                   target="_blank"
                   className="bg-[#25D366] text-white px-8 py-4 rounded-[1.5rem] font-black text-sm shadow-xl shadow-green-100 active:scale-95 transition-all flex items-center gap-2"
                   >
                     <MessageCircle className="w-5 h-5" /> DM INFO
                   </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* --- ZUWAMEN FOOTER --- */}
      <footer className="max-w-7xl mx-auto px-6 pt-20 text-center">
        <div className="bg-slate-950 rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
                <ShieldCheck className="text-blue-500 w-12 h-12 mx-auto mb-6" />
                <h4 className="text-4xl font-black tracking-tighter uppercase mb-4 italic">Zuwamen Autos LLC</h4>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto mb-12 font-medium">
                    We specialize in premium USA Imports. Every vehicle is hand-selected, Tincan cleared, and delivered to our secure hubs in Abuja, Lagos, and Port Harcourt.
                </p>
                <div className="flex justify-center flex-wrap gap-8 text-[10px] font-bold text-slate-600 tracking-[0.5em] uppercase border-t border-white/5 pt-10">
                    <span className="flex items-center gap-2"><MapPin className="w-3 h-3"/> Lagos Hub</span>
                    <span className="flex items-center gap-2"><MapPin className="w-3 h-3"/> Abuja HQ</span>
                    <span className="flex items-center gap-2"><MapPin className="w-3 h-3"/> PH Delivery</span>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-transparent"></div>
            </div>
        </div>
        <p className="mt-12 mb-20 text-[8px] font-bold text-slate-300 tracking-[0.4em] uppercase">© 2026 ZUWAMEN AUTOS LLC • THE LUXURY SPEC SPECIALIST</p>
      </footer>
    </div>
  );
}