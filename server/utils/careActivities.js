const dogCare = [
    { name: "New Puppy Visit", frequency: 'Once', category: 'vetAppt', isComplete: true, dateComplete: ''  },
    { name: "Dewormer Medication", frequency: 'Once', category: 'prevent', isComplete: true, dateComplete: ''  },
    { name: "Vacination Visit", frequency: 'Once', category: 'vetAppt', isComplete: true, dateComplete: ''  },
    { name: 'Microchip', frequency: 'Once', category: 'prevent', isComplete: true, dateComplete: ''  },
    { name: 'Heartworm', frequency: 'Once', category: 'prevent', isComplete: true, dateComplete: ''  },
    { name: 'Flea & Tick Preventative', frequency: 'Monthly', category: 'prevent', isComplete: true, dateComplete: '' },
    { name: 'DHPP Vaccine', frequency: 'everyThree', isComplete: true, dateComplete: '' },
    { name: 'Leptospirosis', frequency: 'Once', category: 'vaccine', isComplete: true, dateComplete: '' }, 
    { name: 'Lyme', frequency: 'Once', category: 'vaccine', isComplete: true, dateComplete: '' },
    { name: 'Bordetella', frequency: 'Once', category: 'vaccine', dateComplete: ''  },
    { name: 'Spay/Neuter', frequency: 'Once', category: 'vetAppt', isComplete: true, dateComplete: ''  }, 
    { name: 'Rabies Vaccine', frequency: 'everyThree', isComplete: true, dateComplete: '' },
    { name: 'Vet Appointment: Wellness Visit', frequency: 'Yearly', isComplete: true, dateComplete: '' },
    { name: 'Heartworm Test', frequency: 'Yearly', isComplete: true, dateComplete: '' },
];

const catCare = [
    { name: "New Kitten VisNit", frequency: 'Once', category: 'vetAppt', isComplete: true, dateComplete: ''  },
    { name: "Dewormer Medication", frequency: 'Once', category: 'prevent', isComplete: true, dateComplete: ''  },
    { name: "FVRCP Vaccine", frequency: 'Once', category: 'prevent', isComplete: true, dateComplete: ''  },
    { name: "Feline Veukemia Vaccine", frequency: 'Once', category: 'prevent', isComplete: true, dateComplete: ''  },
    { name: "Rabies Vaccine", frequency: 'Once', category: 'prevent', isComplete: true, dateComplete: ''  },
];


module.exports = { dogCare, catCare };