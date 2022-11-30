import { cleanup, render, screen } from '@testing-library/react';
import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {

	const testCases = [
    { amount: 1000000000 },
    { amount: 20 },
    { amount: 200, },
    { amount: 345 },
  ];

	const exchangeRate = 3.5;

	const formatAmount = (amount, currency) => {
		const formatter = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: currency,
			minimumFractionDigits: 2
		});
		return formatter.format(amount).replace(/\u00a0/g, ' ');
	};

	for (let testData of testCases) {
		it('should render proper info about conversion when PLN -> USD', () => {
			render(<ResultBox from='PLN' to='USD' amount={testData.amount} />);
			const resultBox = screen.getByTestId('result-box');
			expect(resultBox).toHaveTextContent(`${formatAmount(testData.amount, 'PLN')} = ${formatAmount(testData.amount/exchangeRate, 'USD')}`);
		});
		cleanup();

		it('should render proper info about conversion when USD -> PLN', () => {
			render(<ResultBox from='USD' to='PLN' amount={testData.amount} />);
			const resultBox = screen.getByTestId('result-box');
			expect(resultBox).toHaveTextContent(`${formatAmount(testData.amount, 'USD')} = ${formatAmount(testData.amount*exchangeRate, 'PLN')}`);
		});
		cleanup();

		it('should render proper info about conversion when PLN -> PLN', () => {
			render(<ResultBox from='PLN' to='PLN' amount={testData.amount} />);
			const resultBox = screen.getByTestId('result-box');
			expect(resultBox).toHaveTextContent(`${formatAmount(testData.amount, 'PLN')} = ${formatAmount(testData.amount, 'PLN')}`);
		});
		cleanup();

		it('should render proper info about conversion when USD -> USD', () => {
			render(<ResultBox from='USD' to='USD' amount={testData.amount} />);
			const resultBox = screen.getByTestId('result-box');
			expect(resultBox).toHaveTextContent(`${formatAmount(testData.amount, 'USD')} = ${formatAmount(testData.amount, 'USD')}`);
		});
		cleanup();
	}
});