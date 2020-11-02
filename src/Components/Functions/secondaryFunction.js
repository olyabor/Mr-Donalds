import React from 'react';

export const totalPriceItems = (order) => order.price * order.count;

export const formatCurrency = (currency) =>
  currency.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  });