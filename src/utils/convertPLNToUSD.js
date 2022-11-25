export const convertPLNToUSD = (PLN) => {
  
  if (typeof PLN === 'string' || PLN === undefined) {
    return NaN;
  } else if (typeof PLN !== 'number') {
    return 'Error';
  }

  const PLNtoUSD = PLN / 3.5;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  if (PLN < 0) {
    return formatter.format(0);
  }

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}