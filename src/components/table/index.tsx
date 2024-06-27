import { useEffect, useState } from 'react';
import './table.css'
import { Transaction, getAllTransactions } from '../../api/transaction'

export function Table() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    getAllTransactions().then(setTransactions)
  }, [])

  console.log(transactions)

  return (

    <div className="table">
      <div className="container table-content">
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
           {transactions.map((transaction) =>  {
            return (
              <tr>
              <td>{transaction.name}</td>
              <td className={transaction.type === 'income' ? 'income' : 'withdraw'}>{transaction.price}</td>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(Number(transaction.price))}
              <td>{transaction.category}</td>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
            </tr>
            )

           })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
