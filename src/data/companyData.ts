import { ServiceItem, ReviewItem, AreaItem, FaqItem } from '../types';

export const BUSINESS_INFO = {
  name: 'London Plumbers',
  subtitle: 'PLUMBING • HEATING • DRAINAGE',
  website: 'https://www.londonplumbers.com/',
  phone: '+44 7796 345453',
  phoneDisplay: '07796 345453',
  phoneTel: 'tel:+447796345453',
  email: 'enquiries@londonplumbers.com',
  emailMailto: 'mailto:enquiries@londonplumbers.com',
  address: '43 Sunnyside Road, London, W5 5HT, United Kingdom',
  addressShort: '43 Sunnyside Road, London, W5 5HT',
  googleRating: 4.7,
  googleReviewsCount: 189,
  mainServiceArea: 'Greater London',
  emergencyAvailability: '24/7 Emergency Plumbing Service',
  gasSafeNote: 'Gas Safe Registered Engineers',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=43+Sunnyside+Road+London+W5+5HT'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    shortDesc: 'For urgent leaks, burst pipes and unexpected plumbing failures across London.',
    fullDesc: 'When plumbing emergencies strike, swift response prevents major structural water damage. Our qualified London emergency plumbers are equipped to isolate leaks, repair ruptured pipes, stop flooding, and restore domestic water flow safely at any hour.',
    image: '/src/assets/images/service_leak_repair_1791529060344.jpg',
    iconName: 'AlertCircle',
    features: [
      '24/7 emergency dispatch',
      'Rapid leak isolation & trace',
      'Burst copper & plastic pipe repairs',
      'Domestic & light commercial callouts'
    ],
    commonIssues: ['Burst pipe under floorboards', 'Severe ceiling water leak', 'Overflowing water storage tank', 'Faulty main stopcock']
  },
  {
    id: 'boiler-repairs',
    title: 'Boiler Repairs',
    shortDesc: 'Help diagnosing boiler breakdowns, fault codes, loss of hot water and heating problems.',
    fullDesc: 'Experiencing an unexpected loss of hot water or no heating? Our Gas Safe registered heating engineers carry modern diagnostic equipment to identify error codes, pump failures, pressure drops, and faulty thermistors on all major boiler brands.',
    image: '/src/assets/images/service_boiler_repair_1791529036332.jpg',
    iconName: 'Wrench',
    features: [
      'Gas Safe registered diagnosis',
      'Digital fault code interrogation',
      'Combi, system, & regular boilers',
      'Clear explanation before repairs begin'
    ],
    commonIssues: ['No hot water or heating', 'Boiler losing pressure constantly', 'Strange banging or whistling noises', 'Pilot light extinguishing']
  },
  {
    id: 'boiler-installation',
    title: 'Boiler Installation',
    shortDesc: 'Information and enquiries for replacement boilers and new energy-efficient installations.',
    fullDesc: 'Upgrade to a high-efficiency A-rated combi or system boiler designed to lower monthly energy bills and provide reliable household warmth. We provide transparent recommendations based on property size, water demand, and radiator layout.',
    image: '/src/assets/images/hero_boiler_engineer_1791529021286.jpg',
    iconName: 'Flame',
    features: [
      'A-rated energy efficient models',
      'System sizing & heat loss assessment',
      'Full system chemical flush',
      'Manufacturer warranty compliance'
    ],
    commonIssues: ['Old inefficient 15+ yr boiler', 'Frequent breakdowns & high repair bills', 'Home extension requiring higher flow rate', 'Converting from tank to combi']
  },
  {
    id: 'drain-unblocking',
    title: 'Drain Unblocking',
    shortDesc: 'Help with blocked sinks, toilets and foul drains using professional equipment.',
    fullDesc: 'Blocked sinks, gurgling toilets, or overflowing exterior gullies require targeted clearance. Our technicians use electro-mechanical rodding and high-pressure unblocking tools to quickly clear blockages without damaging internal pipework.',
    image: '/src/assets/images/service_drain_unblocking_1791529049109.jpg',
    iconName: 'Droplets',
    features: [
      'Mechanical drain clearing tools',
      'Internal sink & waste pipe unblocking',
      'Toilet & soil stack clearing',
      'Odour & slow drainage investigation'
    ],
    commonIssues: ['Toilet water rising near rim', 'Kitchen sink draining very slowly', 'Foul drain smell in bathroom or utility', 'External drain backing up']
  },
  {
    id: 'leak-detection-repairs',
    title: 'Leak Detection & Repairs',
    shortDesc: 'Assistance with leaking taps, concealed pipes and persistent water leaks.',
    fullDesc: 'Even minor dripping taps and pinhole leaks waste thousands of litres of water and damage plasterwork. We locate hard-to-find leaks behind kitchen cabinets, in bathroom boxing, and under floors, completing permanent joint and valve replacements.',
    image: '/src/assets/images/service_leak_repair_1791529060344.jpg',
    iconName: 'Search',
    features: [
      'Acoustic & moisture detection',
      'Dripping mixer tap repair & washer replacement',
      'Push-fit and solder copper pipe joint repairs',
      'Isolating valves and stopcocks'
    ],
    commonIssues: ['Damp patch on ceiling or skirting', 'Constant running sound in pipes', 'Dripping tap that will not shut off', 'High water bill with no obvious cause']
  },
  {
    id: 'central-heating-repairs',
    title: 'Central Heating Repairs',
    shortDesc: 'Support for radiator problems, heating faults, thermostats and heating controls.',
    fullDesc: 'Restore even warmth to every room in your London property. We diagnose circulating pump failures, motorised zone valves, faulty digital programmers, and magnetic filter blockages so your entire heating system functions smoothly.',
    iconName: 'Thermometer',
    features: [
      'Motorised zone valve troubleshooting',
      'Circulation pump diagnostics & replacement',
      'Thermostat & smart control wiring checks',
      'Cold radiator balance and system flow tuning'
    ],
    commonIssues: ['Upstairs radiators cold while downstairs are hot', 'Heating turns on when hot water is called', 'Programmer not turning boiler on', 'Noisy central heating pipes']
  },
  {
    id: 'bathroom-plumbing',
    title: 'Bathroom Plumbing',
    shortDesc: 'Plumbing repairs and installation-related enquiries for bathroom fixtures.',
    fullDesc: 'From repairing leaking toilet cisterns that constantly trickle into the bowl to installing new thermostatic shower valves, bath taps, and basins, we deliver neat pipe routing and reliable watertight seals.',
    iconName: 'Bath',
    features: [
      'Cistern inlet valve & siphon repairs',
      'Thermostatic shower mixer replacement',
      'Basin, bath & bidet plumbing connections',
      'Waste trap cleaning & resealing'
    ],
    commonIssues: ['Toilet cistern constantly filling/running', 'Shower temperature fluctuates wildly', 'Leak beneath vanity unit', 'Low shower water pressure']
  },
  {
    id: 'radiators-heating',
    title: 'Radiators & Heating',
    shortDesc: 'Radiator maintenance, replacement, power flushing and troubleshooting enquiries.',
    fullDesc: 'Cold spots at the bottom of radiators often indicate magnetite sludge buildup, while cold tops indicate trapped air. We bleed radiators, replace sticking thermostatic radiator valves (TRVs), and install replacement designer or compact panels.',
    image: '/src/assets/images/why_choose_plumber_1791529071217.jpg',
    iconName: 'Sun',
    features: [
      'Thermostatic Radiator Valve (TRV) replacement',
      'Bleeding air and balancing system flow',
      'Sludge assessment & system flushing advice',
      'New panel & column radiator installation'
    ],
    commonIssues: ['Radiator cold at bottom (sludge accumulation)', 'Radiator cold at top (air lock)', 'Stuck or leaking TRV valve pin', 'Radiator pinhole leak or rust spot']
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Verified London Homeowner',
    location: 'Ealing, London',
    rating: 5,
    date: 'Recent Google Review',
    theme: 'Prompt help with a boiler fault and efficient diagnosis',
    summary: 'Called following an unexpected boiler fault code that left us with no heating. The engineer arrived punctually, diagnosed the faulty component swiftly, and explained the solution clearly before carrying out the repair. Courteous and professional throughout.'
  },
  {
    id: 'rev-2',
    author: 'Resident Client',
    location: 'West Ealing / Hanwell',
    rating: 5,
    date: 'Recent Google Review',
    theme: 'Responsive communication and help with an obstructed toilet and a leak',
    summary: 'Superb communication from the first phone enquiry. Had an urgent obstructed toilet and a persistent pipe leak in the downstairs cloakroom. Both issues were cleared and repaired neatly without any fuss or mess left behind. Truly reliable local service.'
  },
  {
    id: 'rev-3',
    author: 'Local Property Customer',
    location: 'Chiswick & Acton Area',
    rating: 5,
    date: 'Recent Google Review',
    theme: 'Quick emergency assistance and professional service',
    summary: 'Needed emergency plumbing help for an unexpected water leak that threatened our flooring. They were quick to answer the phone, provided straightforward guidance over the line, and took care of the repair with great trade expertise.'
  }
];

export const AREAS_COVERED: AreaItem[] = [
  {
    name: 'Ealing',
    postcodes: 'W5, W13',
    description: 'Rapid residential and commercial emergency response across Ealing Broadway, Common, and surrounding avenues.'
  },
  {
    name: 'West Ealing',
    postcodes: 'W13',
    description: 'Comprehensive boiler repairs, heating tune-ups, and emergency leak detection for local properties.'
  },
  {
    name: 'Northfields',
    postcodes: 'W5, W13',
    description: 'Fast callouts for blocked drains, toilet repairs, and radiator maintenance in family homes.'
  },
  {
    name: 'Hanwell',
    postcodes: 'W7',
    description: 'Expert local plumbing support for period conversions, detached properties, and local businesses.'
  },
  {
    name: 'Acton',
    postcodes: 'W3',
    description: 'Full-spectrum plumbing solutions across East, West, North, and South Acton day and night.'
  },
  {
    name: 'Greenford',
    postcodes: 'UB6',
    description: 'Dependable drainage unblocking, central heating fault-finding, and appliance installations.'
  },
  {
    name: 'Brentford',
    postcodes: 'TW8',
    description: 'Modern apartment plumbing, high-efficiency boiler servicing, and emergency callouts.'
  },
  {
    name: 'Chiswick',
    postcodes: 'W4',
    description: 'Premium boiler replacements, thermostatic valve adjustments, and precision leak repair.'
  },
  {
    name: 'Hounslow',
    postcodes: 'TW3, TW4',
    description: 'Reliable 24/7 domestic plumbing attendance and planned heating improvements.'
  },
  {
    name: 'Twickenham',
    postcodes: 'TW1, TW2',
    description: 'Prompt service for boiler breakdowns, bathroom plumbing fixtures, and drain clearance.'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Do you offer emergency plumbing services?',
    answer: 'Yes. London Plumbers provides emergency plumbing services available 24/7 across Greater London. If you have an urgent burst pipe, overflowing drain, or severe leak, call us directly on 07796 345453 so our team can discuss the situation and dispatch an engineer.'
  },
  {
    question: 'Can you help with a boiler breakdown?',
    answer: 'Yes. Our Gas Safe registered heating engineers are experienced in diagnosing and repairing domestic boiler breakdowns, loss of hot water, heating failure, and system error codes across all leading boiler manufacturers.'
  },
  {
    question: 'Do you provide boiler installations?',
    answer: 'Yes. We provide complete consultations, quotes, and installations for energy-efficient replacement boilers and new central heating setups. We can discuss your property requirements and advise on the most suitable A-rated models.'
  },
  {
    question: 'Which areas of London do you cover?',
    answer: 'We cover Greater London, with regular service in Ealing, West Ealing, Northfields, Hanwell, Acton, Greenford, Brentford, Chiswick, Hounslow, and Twickenham.'
  },
  {
    question: 'Can I request a quote before arranging work?',
    answer: 'Yes, we believe in clear, upfront pricing. You can discuss the required work over the phone or submit an enquiry through our online quote form to understand the next steps and costs before authorising work.'
  },
  {
    question: 'How can I book an appointment?',
    answer: 'For emergency assistance, call us directly on 07796 345453 for immediate coordination. For non-urgent repairs, routine boiler servicing, or installation enquiries, you can also submit our online appointment enquiry form and our team will get in touch to confirm a convenient time.'
  },
  {
    question: 'What should I do if I have a serious water leak?',
    answer: 'If safe to do so, locate and turn off your main water stopcock (often found under the kitchen sink or near the front entrance) to prevent further water ingress. Switch off electrical appliances in the affected area, avoid touching wet switches, and call our emergency team immediately on 07796 345453.'
  }
];
