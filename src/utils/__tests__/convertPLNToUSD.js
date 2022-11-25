import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  
  it('should return NaN when text input', () => {
    expect(convertPLNToUSD('1')).toBeNaN();
    expect(convertPLNToUSD('0')).toBeNaN();
    expect(convertPLNToUSD('sth')).toBeNaN();
  });

  it('should return NaN when no input', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });

  it('should throw error when input is not number or text', () => {
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD(true)).toBe('Error');
  });

  it('should throw error when input is negative', () => {
    expect(convertPLNToUSD(-25)).toBe('$0.00');
    expect(convertPLNToUSD(-1)).toBe('$0.00');
    expect(convertPLNToUSD(-837375)).toBe('$0.00');
  });
});