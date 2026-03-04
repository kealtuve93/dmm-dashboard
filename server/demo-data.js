// Realistic demo data for Dance Motion Marketing dashboard

const demoAccounts = [
  {
    id: "acc_001",
    name: "Rhythm & Flow Dance Academy",
    accountManager: "Sarah Mitchell",
    status: "green",
    statusReason: "Excellent campaign performance with strong ROAS",
    metrics: {
      monthlySpend: 2800,
      leads: 156,
      costPerLead: 17.95,
      appointmentsBooked: 34,
      conversionRate: 21.79,
      roas: 3.2
    },
    campaigns: [
      {
        id: "camp_001_a",
        name: "Summer Intensive Program",
        status: "active",
        objective: "Lead Generation",
        offerType: "Summer Camp",
        currentCPL: 16.50,
        currentCTR: 4.2,
        currentRoas: 3.5,
        dailyMetrics: generateDailyMetrics(14, { spend: 120, impressions: 3200, clicks: 95, leads: 8, appointments: 2 }),
        adSets: [
          { id: "ads_001_a1", name: "Ages 8-12 Target", targeting: "Parents, ages 25-45, interested in dance" },
          { id: "ads_001_a2", name: "Ages 13-18 Target", targeting: "Teens, ages 13-18, interested in dance" }
        ]
      },
      {
        id: "camp_001_b",
        name: "Fall Classes - All Levels",
        status: "active",
        objective: "Lead Generation",
        offerType: "Free Class",
        currentCPL: 19.20,
        currentCTR: 3.8,
        currentRoas: 3.0,
        dailyMetrics: generateDailyMetrics(14, { spend: 140, impressions: 2900, clicks: 82, leads: 7, appointments: 1.5 }),
        adSets: [
          { id: "ads_001_b1", name: "Beginners", targeting: "Parents looking for dance lessons" }
        ]
      }
    ]
  },
  {
    id: "acc_002",
    name: "Elite Dance Studio",
    accountManager: "Jake Rivera",
    status: "green",
    statusReason: "Strong engagement and consistent conversions",
    metrics: {
      monthlySpend: 4200,
      leads: 198,
      costPerLead: 21.21,
      appointmentsBooked: 42,
      conversionRate: 21.21,
      roas: 2.8
    },
    campaigns: [
      {
        id: "camp_002_a",
        name: "Competition Prep - Elite Track",
        status: "active",
        objective: "Lead Generation",
        offerType: "Competition Prep",
        currentCPL: 20.50,
        currentCTR: 5.1,
        currentRoas: 2.9,
        dailyMetrics: generateDailyMetrics(14, { spend: 200, impressions: 4100, clicks: 115, leads: 10, appointments: 2.5 }),
        adSets: [
          { id: "ads_002_a1", name: "Competitive Dancers", targeting: "Ages 12-25, interested in competitions" },
          { id: "ads_002_a2", name: "Performance-Focused", targeting: "Parents seeking performance opportunities" }
        ]
      },
      {
        id: "camp_002_b",
        name: "Technique Workshops",
        status: "active",
        objective: "Lead Generation",
        offerType: "Intro Offer",
        currentCPL: 22.30,
        currentCTR: 4.5,
        currentRoas: 2.7,
        dailyMetrics: generateDailyMetrics(14, { spend: 150, impressions: 3200, clicks: 88, leads: 7, appointments: 1.8 }),
        adSets: [
          { id: "ads_002_b1", name: "Advanced Dancers", targeting: "Experienced dancers looking to refine skills" }
        ]
      },
      {
        id: "camp_002_c",
        name: "Kids Summer Camp 2026",
        status: "paused",
        objective: "Lead Generation",
        offerType: "Summer Camp",
        currentCPL: 24.80,
        currentCTR: 3.2,
        currentRoas: 2.0,
        dailyMetrics: generateDailyMetrics(14, { spend: 85, impressions: 2100, clicks: 52, leads: 3.5, appointments: 0.7 }),
        adSets: [
          { id: "ads_002_c1", name: "Ages 5-8", targeting: "Parents with young children" }
        ]
      }
    ]
  },
  {
    id: "acc_003",
    name: "Grace Dance Center",
    accountManager: "Priya Patel",
    status: "yellow",
    statusReason: "CPL rising - recommend budget reallocation",
    metrics: {
      monthlySpend: 1800,
      leads: 62,
      costPerLead: 29.03,
      appointmentsBooked: 11,
      conversionRate: 17.74,
      roas: 1.6
    },
    campaigns: [
      {
        id: "camp_003_a",
        name: "Adult Ballet Classes",
        status: "active",
        objective: "Lead Generation",
        offerType: "Intro Offer",
        currentCPL: 28.50,
        currentCTR: 2.8,
        currentRoas: 1.7,
        dailyMetrics: generateDailyMetrics(14, { spend: 100, impressions: 2400, clicks: 52, leads: 3.5, appointments: 0.8 }),
        adSets: [
          { id: "ads_003_a1", name: "Adults 25-45", targeting: "Adult professionals interested in ballet" },
          { id: "ads_003_a2", name: "Wellness Focus", targeting: "People interested in dance for fitness" }
        ]
      },
      {
        id: "camp_003_b",
        name: "Contemporary & Modern",
        status: "active",
        objective: "Lead Generation",
        offerType: "Free Class",
        currentCPL: 29.60,
        currentCTR: 2.5,
        currentRoas: 1.5,
        dailyMetrics: generateDailyMetrics(14, { spend: 95, impressions: 2100, clicks: 48, leads: 3.2, appointments: 0.6 }),
        adSets: [
          { id: "ads_003_b1", name: "Artists & Creatives", targeting: "People interested in contemporary arts" }
        ]
      }
    ]
  },
  {
    id: "acc_004",
    name: "Urban Groove Dance",
    accountManager: "Sarah Mitchell",
    status: "green",
    statusReason: "Solid performance with growing lead volume",
    metrics: {
      monthlySpend: 3100,
      leads: 172,
      costPerLead: 18.02,
      appointmentsBooked: 38,
      conversionRate: 22.09,
      roas: 3.1
    },
    campaigns: [
      {
        id: "camp_004_a",
        name: "Hip Hop & Urban Styles",
        status: "active",
        objective: "Lead Generation",
        offerType: "Free Class",
        currentCPL: 17.30,
        currentCTR: 4.6,
        currentRoas: 3.3,
        dailyMetrics: generateDailyMetrics(14, { spend: 130, impressions: 3100, clicks: 98, leads: 7.5, appointments: 1.9 }),
        adSets: [
          { id: "ads_004_a1", name: "Teens & Young Adults", targeting: "Ages 13-25, interested in hip hop" },
          { id: "ads_004_a2", name: "Street Dance", targeting: "People interested in freestyle/street dance" }
        ]
      },
      {
        id: "camp_004_b",
        name: "Kids Classes",
        status: "active",
        objective: "Lead Generation",
        offerType: "Intro Offer",
        currentCPL: 18.75,
        currentCTR: 4.2,
        currentRoas: 2.9,
        dailyMetrics: generateDailyMetrics(14, { spend: 110, impressions: 2800, clicks: 85, leads: 6, appointments: 1.3 }),
        adSets: [
          { id: "ads_004_b1", name: "Ages 6-12", targeting: "Parents with children interested in dance" }
        ]
      }
    ]
  },
  {
    id: "acc_005",
    name: "Pirouette Academy",
    accountManager: "Jake Rivera",
    status: "red",
    statusReason: "Critical: High spend with low lead conversion - immediate action needed",
    metrics: {
      monthlySpend: 5000,
      leads: 89,
      costPerLead: 56.18,
      appointmentsBooked: 8,
      conversionRate: 8.99,
      roas: 0.7
    },
    campaigns: [
      {
        id: "camp_005_a",
        name: "Classical Ballet Program",
        status: "active",
        objective: "Lead Generation",
        offerType: "Free Class",
        currentCPL: 55.40,
        currentCTR: 1.8,
        currentRoas: 0.65,
        dailyMetrics: generateDailyMetrics(14, { spend: 250, impressions: 2100, clicks: 35, leads: 4.5, appointments: 0.4 }),
        adSets: [
          { id: "ads_005_a1", name: "Classical Focus", targeting: "Traditional ballet enthusiasts" },
          { id: "ads_005_a2", name: "Performance Track", targeting: "Parents seeking classical training" }
        ]
      },
      {
        id: "camp_005_b",
        name: "Pointe & Advanced",
        status: "paused",
        objective: "Lead Generation",
        offerType: "Competition Prep",
        currentCPL: 57.20,
        currentCTR: 1.5,
        currentRoas: 0.6,
        dailyMetrics: generateDailyMetrics(14, { spend: 180, impressions: 1400, clicks: 18, leads: 3, appointments: 0.2 }),
        adSets: [
          { id: "ads_005_b1", name: "Advanced Dancers", targeting: "Pointe-ready dancers" }
        ]
      },
      {
        id: "camp_005_c",
        name: "Summer Intensive",
        status: "active",
        objective: "Lead Generation",
        offerType: "Summer Camp",
        currentCPL: 56.80,
        currentCTR: 1.9,
        currentRoas: 0.75,
        dailyMetrics: generateDailyMetrics(14, { spend: 220, impressions: 1800, clicks: 32, leads: 3.9, appointments: 0.3 }),
        adSets: [
          { id: "ads_005_c1", name: "Summer Seekers", targeting: "Parents planning summer activities" }
        ]
      }
    ]
  },
  {
    id: "acc_006",
    name: "DanceFit Studios",
    accountManager: "Priya Patel",
    status: "green",
    statusReason: "Excellent fitness-focused campaign ROI",
    metrics: {
      monthlySpend: 2200,
      leads: 138,
      costPerLead: 15.94,
      appointmentsBooked: 32,
      conversionRate: 23.19,
      roas: 3.4
    },
    campaigns: [
      {
        id: "camp_006_a",
        name: "Zumba Fitness Classes",
        status: "active",
        objective: "Lead Generation",
        offerType: "Free Class",
        currentCPL: 14.80,
        currentCTR: 4.9,
        currentRoas: 3.6,
        dailyMetrics: generateDailyMetrics(14, { spend: 110, impressions: 3400, clicks: 102, leads: 7.4, appointments: 1.9 }),
        adSets: [
          { id: "ads_006_a1", name: "Fitness Enthusiasts", targeting: "People interested in dance fitness" },
          { id: "ads_006_a2", name: "Women 25-50", targeting: "Women interested in group fitness" }
        ]
      },
      {
        id: "camp_006_b",
        name: "Dance Cardio Bootcamp",
        status: "active",
        objective: "Lead Generation",
        offerType: "Intro Offer",
        currentCPL: 17.20,
        currentCTR: 4.5,
        currentRoas: 3.2,
        dailyMetrics: generateDailyMetrics(14, { spend: 105, impressions: 3100, clicks: 92, leads: 6.1, appointments: 1.4 }),
        adSets: [
          { id: "ads_006_b1", name: "HIIT Lovers", targeting: "People interested in high-intensity fitness" }
        ]
      }
    ]
  },
  {
    id: "acc_007",
    name: "Star Step Dance School",
    accountManager: "Sarah Mitchell",
    status: "yellow",
    statusReason: "Declining appointments - recommend audience refresh",
    metrics: {
      monthlySpend: 1500,
      leads: 85,
      costPerLead: 17.65,
      appointmentsBooked: 9,
      conversionRate: 10.59,
      roas: 1.8
    },
    campaigns: [
      {
        id: "camp_007_a",
        name: "Beginner Classes - All Ages",
        status: "active",
        objective: "Lead Generation",
        offerType: "Intro Offer",
        currentCPL: 16.90,
        currentCTR: 3.4,
        currentRoas: 1.9,
        dailyMetrics: generateDailyMetrics(14, { spend: 90, impressions: 2600, clicks: 78, leads: 5.3, appointments: 0.5 }),
        adSets: [
          { id: "ads_007_a1", name: "All Ages Beginners", targeting: "People new to dance" }
        ]
      },
      {
        id: "camp_007_b",
        name: "Tap & Jazz Combo",
        status: "active",
        objective: "Lead Generation",
        offerType: "Free Class",
        currentCPL: 18.50,
        currentCTR: 3.1,
        currentRoas: 1.7,
        dailyMetrics: generateDailyMetrics(14, { spend: 85, impressions: 2300, clicks: 68, leads: 4.6, appointments: 0.4 }),
        adSets: [
          { id: "ads_007_b1", name: "Classic Styles", targeting: "People interested in tap and jazz" }
        ]
      }
    ]
  },
  {
    id: "acc_008",
    name: "Motion Arts Academy",
    accountManager: "Jake Rivera",
    status: "green",
    statusReason: "Strong performance with balanced growth",
    metrics: {
      monthlySpend: 2600,
      leads: 148,
      costPerLead: 17.57,
      appointmentsBooked: 35,
      conversionRate: 23.65,
      roas: 3.3
    },
    campaigns: [
      {
        id: "camp_008_a",
        name: "Multi-Style Dance Program",
        status: "active",
        objective: "Lead Generation",
        offerType: "Free Class",
        currentCPL: 16.80,
        currentCTR: 4.8,
        currentRoas: 3.4,
        dailyMetrics: generateDailyMetrics(14, { spend: 135, impressions: 3300, clicks: 105, leads: 8, appointments: 2 }),
        adSets: [
          { id: "ads_008_a1", name: "Variety Seekers", targeting: "People interested in trying different dance styles" },
          { id: "ads_008_a2", name: "Family Classes", targeting: "Families wanting to dance together" }
        ]
      },
      {
        id: "camp_008_b",
        name: "Private Lessons",
        status: "active",
        objective: "Lead Generation",
        offerType: "Intro Offer",
        currentCPL: 18.40,
        currentCTR: 4.3,
        currentRoas: 3.2,
        dailyMetrics: generateDailyMetrics(14, { spend: 120, impressions: 2950, clicks: 93, leads: 6.5, appointments: 1.5 }),
        adSets: [
          { id: "ads_008_b1", name: "One-on-One Training", targeting: "People seeking personalized instruction" }
        ]
      }
    ]
  },
  {
    id: "acc_009",
    name: "Ballroom Bliss",
    accountManager: "Priya Patel",
    status: "green",
    statusReason: "Consistent niche market performance",
    metrics: {
      monthlySpend: 1400,
      leads: 82,
      costPerLead: 17.07,
      appointmentsBooked: 19,
      conversionRate: 23.17,
      roas: 2.9
    },
    campaigns: [
      {
        id: "camp_009_a",
        name: "Ballroom for Couples",
        status: "active",
        objective: "Lead Generation",
        offerType: "Free Class",
        currentCPL: 15.90,
        currentCTR: 5.2,
        currentRoas: 3.1,
        dailyMetrics: generateDailyMetrics(14, { spend: 85, impressions: 2900, clicks: 98, leads: 5.3, appointments: 1.4 }),
        adSets: [
          { id: "ads_009_a1", name: "Couples", targeting: "Couples interested in ballroom dancing" },
          { id: "ads_009_a2", name: "Date Night", targeting: "People looking for couples activities" }
        ]
      },
      {
        id: "camp_009_b",
        name: "Wedding First Dance",
        status: "active",
        objective: "Lead Generation",
        offerType: "Wedding Package",
        currentCPL: 18.30,
        currentCTR: 4.8,
        currentRoas: 2.7,
        dailyMetrics: generateDailyMetrics(14, { spend: 75, impressions: 2100, clicks: 85, leads: 4.1, appointments: 0.9 }),
        adSets: [
          { id: "ads_009_b1", name: "Engaged Couples", targeting: "People recently engaged or planning weddings" }
        ]
      }
    ]
  },
  {
    id: "acc_010",
    name: "Hip Hop Haven",
    accountManager: "Sarah Mitchell",
    status: "red",
    statusReason: "Critical: No leads in 3 days - immediate review required",
    metrics: {
      monthlySpend: 1200,
      leads: 28,
      costPerLead: 42.86,
      appointmentsBooked: 3,
      conversionRate: 10.71,
      roas: 0.5
    },
    campaigns: [
      {
        id: "camp_010_a",
        name: "Hip Hop for Teens",
        status: "active",
        objective: "Lead Generation",
        offerType: "Free Class",
        currentCPL: 41.50,
        currentCTR: 2.1,
        currentRoas: 0.52,
        dailyMetrics: generateDailyMetrics(14, { spend: 80, impressions: 1600, clicks: 28, leads: 1.9, appointments: 0.2 }),
        adSets: [
          { id: "ads_010_a1", name: "Teens 13-18", targeting: "Teenagers interested in hip hop" }
        ]
      },
      {
        id: "camp_010_b",
        name: "Street Freestyle",
        status: "paused",
        objective: "Lead Generation",
        offerType: "Intro Offer",
        currentCPL: 44.20,
        currentCTR: 1.8,
        currentRoas: 0.48,
        dailyMetrics: generateDailyMetrics(14, { spend: 60, impressions: 1200, clicks: 18, leads: 1.4, appointments: 0.1 }),
        adSets: [
          { id: "ads_010_b1", name: "Street Dance", targeting: "Freestyle and street dance enthusiasts" }
        ]
      }
    ]
  },
  {
    id: "acc_011",
    name: "Tiny Dancers Academy",
    accountManager: "Jake Rivera",
    status: "green",
    statusReason: "Strong performance in kids market segment",
    metrics: {
      monthlySpend: 1900,
      leads: 112,
      costPerLead: 16.96,
      appointmentsBooked: 28,
      conversionRate: 25.0,
      roas: 3.2
    },
    campaigns: [
      {
        id: "camp_011_a",
        name: "Preschool Dance Classes",
        status: "active",
        objective: "Lead Generation",
        offerType: "Free Class",
        currentCPL: 15.40,
        currentCTR: 5.3,
        currentRoas: 3.4,
        dailyMetrics: generateDailyMetrics(14, { spend: 95, impressions: 3200, clicks: 108, leads: 6.1, appointments: 1.6 }),
        adSets: [
          { id: "ads_011_a1", name: "Ages 2-4", targeting: "Parents with toddlers and preschoolers" }
        ]
      },
      {
        id: "camp_011_b",
        name: "Elementary School Program",
        status: "active",
        objective: "Lead Generation",
        offerType: "Intro Offer",
        currentCPL: 18.60,
        currentCTR: 4.8,
        currentRoas: 3.0,
        dailyMetrics: generateDailyMetrics(14, { spend: 100, impressions: 2900, clicks: 95, leads: 5.4, appointments: 1.2 }),
        adSets: [
          { id: "ads_011_b1", name: "Ages 5-10", targeting: "Parents with school-age children" }
        ]
      }
    ]
  },
  {
    id: "acc_012",
    name: "Salsa Soul Studio",
    accountManager: "Priya Patel",
    status: "yellow",
    statusReason: "Moderate performance - optimization needed",
    metrics: {
      monthlySpend: 1300,
      leads: 68,
      costPerLead: 19.12,
      appointmentsBooked: 10,
      conversionRate: 14.71,
      roas: 1.9
    },
    campaigns: [
      {
        id: "camp_012_a",
        name: "Salsa Basics",
        status: "active",
        objective: "Lead Generation",
        offerType: "Free Class",
        currentCPL: 18.20,
        currentCTR: 3.6,
        currentRoas: 2.0,
        dailyMetrics: generateDailyMetrics(14, { spend: 75, impressions: 2300, clicks: 68, leads: 4.1, appointments: 0.6 }),
        adSets: [
          { id: "ads_012_a1", name: "Salsa Beginners", targeting: "People interested in learning salsa" }
        ]
      },
      {
        id: "camp_012_b",
        name: "Advanced Salsa & Timing",
        status: "active",
        objective: "Lead Generation",
        offerType: "Intro Offer",
        currentCPL: 20.10,
        currentCTR: 3.2,
        currentRoas: 1.8,
        dailyMetrics: generateDailyMetrics(14, { spend: 65, impressions: 1900, clicks: 48, leads: 3.2, apartments: 0.4 }),
        adSets: [
          { id: "ads_012_b1", name: "Advanced Dancers", targeting: "Experienced salsa dancers" }
        ]
      }
    ]
  },
  {
    id: "acc_013",
    name: "Jazz Hands Academy",
    accountManager: "Sarah Mitchell",
    status: "green",
    statusReason: "Solid growth in jazz and musical theater",
    metrics: {
      monthlySpend: 2000,
      leads: 118,
      costPerLead: 16.95,
      appointmentsBooked: 28,
      conversionRate: 23.73,
      roas: 3.1
    },
    campaigns: [
      {
        id: "camp_013_a",
        name: "Jazz Dance Basics",
        status: "active",
        objective: "Lead Generation",
        offerType: "Free Class",
        currentCPL: 15.80,
        currentCTR: 4.7,
        currentRoas: 3.3,
        dailyMetrics: generateDailyMetrics(14, { spend: 100, impressions: 3100, clicks: 100, leads: 6.3, appointments: 1.5 }),
        adSets: [
          { id: "ads_013_a1", name: "Jazz Beginners", targeting: "People interested in jazz dance" }
        ]
      },
      {
        id: "camp_013_b",
        name: "Musical Theater Dance",
        status: "active",
        objective: "Lead Generation",
        offerType: "Intro Offer",
        currentCPL: 18.15,
        currentCTR: 4.2,
        currentRoas: 2.9,
        dailyMetrics: generateDailyMetrics(14, { spend: 95, impressions: 2800, clicks: 88, leads: 5.2, appointments: 1.2 }),
        adSets: [
          { id: "ads_013_b1", name: "Theater Lovers", targeting: "People interested in musical theater" }
        ]
      }
    ]
  },
  {
    id: "acc_014",
    name: "Contemporary Edge",
    accountManager: "Jake Rivera",
    status: "green",
    statusReason: "Strong performance in modern dance niche",
    metrics: {
      monthlySpend: 1700,
      leads: 101,
      costPerLead: 16.83,
      appointmentsBooked: 24,
      conversionRate: 23.76,
      roas: 3.0
    },
    campaigns: [
      {
        id: "camp_014_a",
        name: "Contemporary Dance",
        status: "active",
        objective: "Lead Generation",
        offerType: "Free Class",
        currentCPL: 15.50,
        currentCTR: 4.9,
        currentRoas: 3.2,
        dailyMetrics: generateDailyMetrics(14, { spend: 90, impressions: 3000, clicks: 99, leads: 5.8, appointments: 1.4 }),
        adSets: [
          { id: "ads_014_a1", name: "Contemporary Lovers", targeting: "People interested in modern and contemporary dance" }
        ]
      },
      {
        id: "camp_014_b",
        name: "Movement & Expression",
        status: "active",
        objective: "Lead Generation",
        offerType: "Intro Offer",
        currentCPL: 18.20,
        currentCTR: 4.4,
        currentRoas: 2.8,
        dailyMetrics: generateDailyMetrics(14, { spend: 85, impressions: 2700, clicks: 82, leads: 4.7, appointments: 1.0 }),
        adSets: [
          { id: "ads_014_b1", name: "Self-Expression Focus", targeting: "People interested in creative movement" }
        ]
      }
    ]
  },
  {
    id: "acc_015",
    name: "Dance Dynasty",
    accountManager: "Priya Patel",
    status: "green",
    statusReason: "Excellent multi-generational family appeal",
    metrics: {
      monthlySpend: 2400,
      leads: 142,
      costPerLead: 16.90,
      appointmentsBooked: 33,
      conversionRate: 23.24,
      roas: 3.2
    },
    campaigns: [
      {
        id: "camp_015_a",
        name: "Family Dance Classes",
        status: "active",
        objective: "Lead Generation",
        offerType: "Free Class",
        currentCPL: 15.70,
        currentCTR: 5.1,
        currentRoas: 3.4,
        dailyMetrics: generateDailyMetrics(14, { spend: 105, impressions: 3400, clicks: 110, leads: 6.7, appointments: 1.7 }),
        adSets: [
          { id: "ads_015_a1", name: "Family Bonding", targeting: "Families looking for activities together" }
        ]
      },
      {
        id: "camp_015_b",
        name: "Multi-Age Program",
        status: "active",
        objective: "Lead Generation",
        offerType: "Intro Offer",
        currentCPL: 18.10,
        currentCTR: 4.6,
        currentRoas: 3.0,
        dailyMetrics: generateDailyMetrics(14, { spend: 110, impressions: 3100, clicks: 98, leads: 6.1, appointments: 1.4 }),
        adSets: [
          { id: "ads_015_b1", name: "All Ages", targeting: "Multi-generational families" }
        ]
      }
    ]
  }
];

/**
 * Generate realistic daily metrics for a campaign
 */
function generateDailyMetrics(days, avgMetrics) {
  const metrics = [];
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  for (let i = 0; i < days; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + i);

    // Add some realistic variance to metrics
    const variance = (min, max) => Math.random() * (max - min) + min;

    metrics.push({
      date: currentDate.toISOString().split('T')[0],
      spend: Math.round(avgMetrics.spend * variance(0.8, 1.2) * 100) / 100,
      impressions: Math.round(avgMetrics.impressions * variance(0.75, 1.25)),
      clicks: Math.round(avgMetrics.clicks * variance(0.7, 1.3)),
      leads: Math.round(avgMetrics.leads * variance(0.6, 1.4) * 10) / 10,
      appointments: Math.round(avgMetrics.appointments * variance(0.5, 1.5) * 10) / 10
    });
  }

  return metrics;
}

/**
 * Get all demo accounts
 */
function getAllAccounts() {
  return demoAccounts;
}

/**
 * Get single account by ID
 */
function getAccountById(id) {
  return demoAccounts.find(acc => acc.id === id);
}

/**
 * Get campaigns for an account
 */
function getAccountCampaigns(accountId) {
  const account = getAccountById(accountId);
  return account ? account.campaigns : null;
}

/**
 * Get single campaign by ID
 */
function getCampaignById(campaignId) {
  for (const account of demoAccounts) {
    const campaign = account.campaigns.find(c => c.id === campaignId);
    if (campaign) {
      return campaign;
    }
  }
  return null;
}

/**
 * Get overview stats
 */
function getOverviewStats() {
  const totalAccounts = demoAccounts.length;
  const greenAccounts = demoAccounts.filter(a => a.status === 'green').length;
  const yellowAccounts = demoAccounts.filter(a => a.status === 'yellow').length;
  const redAccounts = demoAccounts.filter(a => a.status === 'red').length;

  const totalSpend = demoAccounts.reduce((sum, a) => sum + a.metrics.monthlySpend, 0);
  const totalLeads = demoAccounts.reduce((sum, a) => sum + a.metrics.leads, 0);
  const avgCPL = totalLeads > 0 ? totalSpend / totalLeads : 0;
  const totalAppointments = demoAccounts.reduce((sum, a) => sum + a.metrics.appointmentsBooked, 0);
  const avgRoas = demoAccounts.length > 0
    ? demoAccounts.reduce((sum, a) => sum + a.metrics.roas, 0) / demoAccounts.length
    : 0;

  return {
    totalAccounts,
    accountsByStatus: { green: greenAccounts, yellow: yellowAccounts, red: redAccounts },
    totalSpend: Math.round(totalSpend * 100) / 100,
    totalLeads,
    avgCPL: Math.round(avgCPL * 100) / 100,
    totalAppointments,
    avgRoas: Math.round(avgRoas * 100) / 100
  };
}

module.exports = {
  getAllAccounts,
  getAccountById,
  getAccountCampaigns,
  getCampaignById,
  getOverviewStats
};
