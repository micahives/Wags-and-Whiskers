
export const handleFrequency = (activity) => {
    switch (activity) {
    case '12weeks':
      return 'At 12 weeks old';
    case '15weeks':
      return 'At 15 weeks old';
    case '18weeks':
      return 'At 18 weeks old';
    case '24weeks':
      return 'At 24 weeks old';
    case 'monthly':
      return 'Monthly';
    case 'yearly':
      return 'Yearly';
    case 'everyThreeYears':
      return 'Every Three Years';
    default:2
      return '';
    }
};