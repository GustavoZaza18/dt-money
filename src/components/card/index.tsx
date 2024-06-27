import './card.css'

interface CardProps {
  variant: 'deposit' | 'withdraw' | 'total'
  amount: number
}

export function Card({ variant, amount }: CardProps) {
  const label = {
    deposit: 'Entradas',
    withdraw: 'Saídas',
    total: 'Total'
  }

  return (
    <div className={`card ${variant}`}>
      <span>{label[variant]}</span>
      <strong>{amount.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })}</strong>
    </div>
  )
}
