
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('vatCalculator', {
  calculateVAT: (amount) => {
    const value = parseFloat(amount);
    if (isNaN(value)) return { error: 'Invalid input' };

    const vat = value * 0.20;
    const total = value + vat;
    return { net: value.toFixed(2), vat: vat.toFixed(2), total: total.toFixed(2) };
  }
});
