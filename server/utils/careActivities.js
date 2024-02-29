const dogCare = [
    { name: 'Flea & Tick Preventative', frequency: 'monthly', category: 'young', isComplete: false, lastCompleted: '' },
    { name: "New Puppy Visit", frequency: '12weeks', category: 'young', isComplete: false, lastCompleted: ''  },
    { name: "Dewormer Medication", frequency: '12weeks', category: 'young', isComplete: false, lastCompleted: ''  },
    { name: 'Microchip', frequency: '12weeks', category: 'young', isComplete: false, lastCompleted: ''  },
    { name: 'Heartworm', frequency: '12weeks', category: 'young', isComplete: false, lastCompleted: ''  },
    { name: 'DHPP Vaccine', frequency: '12weeks', category: 'young', isComplete: false, lastCompleted: '' },
    { name: 'DHPP Vaccine', frequency: '15weeks', category: 'young', isComplete: false, lastCompleted: '' },
    { name: 'Leptospirosis Vaccine', frequency: '15weeks', category: 'young', isComplete: false, lastCompleted: '' }, 
    { name: 'Lyme Vaccine', frequency: '15weeks', category: 'young', isComplete: false, lastCompleted: '' },
    { name: 'DHPP Vaccine', frequency: '18weeks', category: 'young', isComplete: false, lastCompleted: '' },
    { name: 'Leptospirosis Vaccine', frequency: '18weeks', category: 'young', isComplete: false, lastCompleted: '' }, 
    { name: 'Lyme Vaccine', frequency: '18weeks', category: 'young', isComplete: false, lastCompleted: '' },
    { name: 'Bordetella Vaccine', frequency: '18weeks', category: 'young', lastCompleted: ''  },
    { name: 'Spay/Neuter', frequency: '24weeks', category: 'young', isComplete: false, lastCompleted: ''  }, 
    { name: 'Rabies Vaccine', frequency: '24weeks', category: 'young', isComplete: false, lastCompleted: '' },

    { name: 'Flea & Tick Preventative', frequency: 'monthly', category: 'adult', isComplete: false, lastCompleted: '' },
    { name: 'Vet Appointment: Wellness Visit', frequency: 'yearly', category: 'adult', isComplete: false, lastCompleted: '' },
    { name: 'Heartworm Test', frequency: 'yearly', category: 'adult', isComplete: false, lastCompleted: '' },
    { name: 'Leptospirosis Vaccine', frequency: 'yearly', category: 'adult', isComplete: false, lastCompleted: '' }, 
    { name: 'Lyme Vaccine', frequency: 'yearly', category: 'adult', isComplete: false, lastCompleted: '' },
    { name: 'Bordetella Vaccine', frequency: 'yearly', category: 'adult', lastCompleted: ''  },
    { name: 'DHPP Vaccine', frequency: 'everyThreeYears', category: 'adult', isComplete: false, lastCompleted: ''},
    { name: 'Rabies Vaccine', frequency: 'everyThreeYears', category: 'adult', isComplete: false, lastCompleted: ''}
];

const catCare = [
    { name: "New Kitten Visit", frequency: '12weeks', category: 'young', isComplete: false, lastCompleted: ''  },
    { name: "Dewormer Medication", frequency: '12weeks', category: 'young', isComplete: false, lastCompleted: ''  },
    { name: "FVRCP Vaccine", frequency: '12weeks', category: 'young', isComplete: false, lastCompleted: ''  },
    { name: "FVRCP Vaccine", frequency: '15weeks', category: 'young', isComplete: false, lastCompleted: ''  },
    { name: "Feline Leukemia Vaccine", frequency: '15weeks', category: 'young', isComplete: false, lastCompleted: ''  },
    { name: "FVRCP Vaccine", frequency: '18weeks', category: 'young', isComplete: false, lastCompleted: ''  },
    { name: "Feline Leukemia Vaccine", frequency: '18weeks', category: 'young', isComplete: false, lastCompleted: ''  },
    { name: "Rabies Vaccine", frequency: '24weeks', category: 'young', isComplete: false, lastCompleted: ''  },
    { name: 'Spay/Neuter', frequency: '24weeks', category: 'young', isComplete: false, lastCompleted: ''  }, 

    { name: 'Flea & Tick Preventative', frequency: 'monthly', category: 'adult', isComplete: false, lastCompleted: '' },
    { name: 'Vet Appointment: Wellness Visit', frequency: 'yearly', category: 'adult', isComplete: false, lastCompleted: '' },
    { name: "Feline Leukemia Vaccine", frequency: 'yearly', category: 'adult', isComplete: false, lastCompleted: ''  },
    { name: "Rabies Vaccine", frequency: 'yearly', category: 'adult', isComplete: false, lastCompleted: ''  },
    { name: "FVRCP Vaccine", frequency: 'everyThreeYears', category: 'adult', isComplete: false, lastCompleted: ''  },
]



module.exports = { dogCare, catCare };