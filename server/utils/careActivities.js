const dogCare = [
    { name: "New Puppy Visit", frequency: '12weeks', category: 'young', isComplete: true, lastCompleted: ''  },
    { name: "Dewormer Medication", frequency: '12weeks', category: 'young', isComplete: true, lastCompleted: ''  },
    { name: 'Microchip', frequency: '12weeks', category: 'young', isComplete: true, lastCompleted: ''  },
    { name: 'Heartworm', frequency: '12weeks', category: 'young', isComplete: true, lastCompleted: ''  },
    { name: 'Flea & Tick Preventative', frequency: 'monthly', category: 'young', isComplete: true, lastCompleted: '' },
    { name: 'DHPP Vaccine', frequency: '12weeks', category: 'young', isComplete: true, lastCompleted: '' },
    { name: 'DHPP Vaccine', frequency: '15weeks', category: 'young', isComplete: true, lastCompleted: '' },
    { name: 'DHPP Vaccine', frequency: '18weeks', category: 'young', isComplete: true, lastCompleted: '' },
    { name: 'Leptospirosis Vaccine', frequency: '15weeks', category: 'young', isComplete: true, lastCompleted: '' }, 
    { name: 'Leptospirosis Vaccine', frequency: '18weeks', category: 'young', isComplete: true, lastCompleted: '' }, 
    { name: 'Lyme Vaccine', frequency: '15weeks', category: 'young', isComplete: true, lastCompleted: '' },
    { name: 'Lyme Vaccine', frequency: '18weeks', category: 'young', isComplete: true, lastCompleted: '' },
    { name: 'Bordetella Vaccine', frequency: '18weeks', category: 'young', lastCompleted: ''  },
    { name: 'Spay/Neuter', frequency: '24weeks', category: 'young', isComplete: true, lastCompleted: ''  }, 
    { name: 'Rabies Vaccine', frequency: '24weeks', category: 'young', isComplete: true, lastCompleted: '' },

    { name: 'Flea & Tick Preventative', frequency: 'monthly', category: 'adult', isComplete: true, lastCompleted: '' },
    { name: 'Vet Appointment: Wellness Visit', frequency: 'yearly', category: 'adult', isComplete: true, lastCompleted: '' },
    { name: 'Heartworm Test', frequency: 'yearly', category: 'adult', isComplete: true, lastCompleted: '' },
    { name: 'Leptospirosis Vaccine', frequency: 'yearly', category: 'adult', isComplete: true, lastCompleted: '' }, 
    { name: 'Lyme Vaccine', frequency: 'yearly', category: 'adult', isComplete: true, lastCompleted: '' },
    { name: 'Bordetella Vaccine', frequency: 'yearly', category: 'adult', lastCompleted: ''  },
    { name: 'DHPP Vaccine', frequency: 'everyThreeYears', category: 'adult', isComplete: true, lastCompleted: ''},
    { name: 'Rabies Vaccine', frequency: 'everyThreeYears', category: 'adult', isComplete: true, lastCompleted: ''}
];

const catCare = [
    { name: "New Kitten Visit", frequency: '12 Weeks Old', category: 'young', isComplete: true, lastCompleted: ''  },
    { name: "Dewormer Medication", frequency: '12 Weeks Old', category: 'young', isComplete: true, lastCompleted: ''  },
    { name: "FVRCP Vaccine", frequency: '12weeks', category: 'young', isComplete: true, lastCompleted: ''  },
    { name: "FVRCP Vaccine", frequency: '15weeks', category: 'young', isComplete: true, lastCompleted: ''  },
    { name: "FVRCP Vaccine", frequency: '18weeks', category: 'young', isComplete: true, lastCompleted: ''  },
    { name: "Feline Leukemia Vaccine", frequency: '15weeks', category: 'young', isComplete: true, lastCompleted: ''  },
    { name: "Feline Leukemia Vaccine", frequency: '18weeks', category: 'young', isComplete: true, lastCompleted: ''  },
    { name: "Rabies Vaccine", frequency: '24weeks', category: 'young', isComplete: true, lastCompleted: ''  },

    { name: 'Flea & Tick Preventative', frequency: 'monthly', category: 'adult', isComplete: true, lastCompleted: '' },
    { name: "FVRCP Vaccine", frequency: 'everyThreeYears', category: 'adult', isComplete: true, lastCompleted: ''  },
    { name: "Feline Leukemia Vaccine", frequency: 'yearly', category: 'adult', isComplete: true, lastCompleted: ''  },
    { name: "Rabies Vaccine", frequency: 'yearly', category: 'adult', isComplete: true, lastCompleted: ''  },
]



module.exports = { dogCare, catCare };