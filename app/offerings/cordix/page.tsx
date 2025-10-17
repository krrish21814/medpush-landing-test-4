'use client';

import Image from 'next/image';
import OfferingCard from '@/components/offerings/OfferingCard';
import { useState, useEffect, useRef } from 'react';

const CordixPage = () => {
    const [isHeroVisible, setIsHeroVisible] = useState(false);
    const [isGridVisible, setIsGridVisible] = useState(false);
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    
    const heroRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const offerings = [
        {
            image: '/images/cordix/cordix-1.png',
            title: 'Real Time Campaign Review',
            logo: '/images/cordix/preemptive-logo.png',
            bulletPoints: [
                'Scrutiny of strategy and plans for all media including influencers',
                'Secure best possible results'
            ]
        },
        {
            image: '/images/cordix/cordix-2.png',
            title: 'Media Audit (Post Campaign)',
            logo: '/images/cordix/captive-logo.png',
            bulletPoints: [
                'Monthly or yearly',
                'Planning effectiveness & Buying efficiency',
                'Compliance and transparency'
            ]
        },
        {
            image: '/images/cordix/cordix-3.png',
            title: 'Pitch Process Management',
            logo: '/images/cordix/path-logo.png',
            bulletPoints: [
                'Technical and Commercial parts',
                'Briefing, process, and templates',
                'Front or back seat role'
            ]
        },
        {
            image: '/images/cordix/cordix-4.png',
            title: 'Agency Performance Evaluation',
            logo: '/images/cordix/flame-logo.png',
            bulletPoints: [
                'A 360-degree model',
                'Advertiser-Agency evaluation',
                'Covering all aspects'
            ]
        },
        {
            image: '/images/cordix/cordix-5.png',
            title: 'Invoices Review',
            logo: '/images/cordix/assure-logo.png',
            bulletPoints: [
                'Monthly validation',
                'Track ROI, billing, payment, etc.',
                'Ads appearance and proofs'
            ]
        },
        {
            image: '/images/cordix/cordix-6.png',
            title: 'Marketing Mix Modelling',
            logo: '/images/cordix/spire-logo.png',
            bulletPoints: [
                'Across all touch points',
                'Uncover sales drivers',
                'Predictive Analytics'
            ]
        },
        {
            image: '/images/cordix/cordix-7.png',
            title: 'Orientation and Coaching',
            logo: '/images/cordix/strive-logo.png',
            bulletPoints: [
                'Communication process',
                'Planning and buying techniques',
                'Practical exercise'
            ]
        },
        {
            image: '/images/cordix/cordix-8.png',
            title: 'SM Community Management Review',
            logo: '/images/cordix/foster-logo.png',
            bulletPoints: [
                'KPIs vs. business objectives',
                'Posting and performance',
                'Commercial and compliance'
            ]
        },
        {
            image: '/images/cordix/cordix-9.png',
            title: 'Real Time Campaign Review',
            logo: '/images/cordix/energize-logo.png',
            bulletPoints: [
                'Business restructuring',
                'Protocols and frameworks',
                'Performance enhancement'
            ]
        }
    ];

    useEffect(() => {
        // Hero animation on mount
        setIsHeroVisible(true);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === gridRef.current && entry.isIntersecting) {
                        setIsGridVisible(true);
                        offerings.forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleCards((prev) => [...prev, index]);
                            }, index * 100);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (gridRef.current) observer.observe(gridRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 1s ease-out forwards;
                }

                .animate-slideUp {
                    animation: slideUp 0.8s ease-out forwards;
                    animation-delay: 0.3s;
                    opacity: 0;
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
            `}</style>

            <div className="min-h-screen">
                {/* Hero Section */}
                <section ref={heroRef} className={`relative w-full h-[200px] md:h-[300px] overflow-hidden mt-16 md:mt-24 ${isHeroVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
                    <Image
                        src="/images/cordix-hero.png"
                        alt="Cordix Division"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative z-10 h-full flex items-center justify-center px-4">
                        <h1 className={`text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center ${isHeroVisible ? 'animate-slideUp' : 'opacity-0'}`}>
                            Cordix division offerings
                        </h1>
                    </div>
                </section>

                {/* Offerings Grid */}
                <section ref={gridRef} className="relative w-full bg-white py-12 md:py-16 lg:py-20">
                    <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                            {offerings.map((offering, index) => (
                                <div 
                                    key={index}
                                    className={visibleCards.includes(index) ? 'animate-fadeInUp' : 'opacity-0'}
                                >
                                    <OfferingCard
                                        image={offering.image}
                                        title={offering.title}
                                        logo={offering.logo}
                                        bulletPoints={offering.bulletPoints}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default CordixPage;
