import { useEffect, useState } from 'react';
import { Card } from '../card'

import "./summary.css";
import { getAllTransactions } from '../../api/transaction';

export function Summary() {
  const [incomeAmount, setIncomeAmount] = useState(0)
  const [withdrawAmount, setWithdrawIncomeAmount] = useState(0)
  useEffect(() => {
    getAllTransactions().then((transactions) => {
      const income = transactions.reduce((acc. value) => {
        if (value.type === 'income' {
          return acc + Number(value.price)
        }
      })
        const withdraw = transactions.reduce((acc. value) => {
          if (value.type === 'withdraw' {
            return acc + Number(value.price)
          }
  
        return acc
      setIncomeAmount(incomeAmount)

    })
  }, [])
  return (
    <div className="summary">
      <div className="container summary-content">
        <Card variant="deposit" amount={8234} />
        <Card variant="withdraw" amount={4565} />
        <Card variant="total" amount={8234 - 4565} />
      </div>
    </div>
  );
}
