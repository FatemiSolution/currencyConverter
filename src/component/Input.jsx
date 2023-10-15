import React from 'react'
import {useId } from 'react'
function Input({
    label,
    className = '',
    amount,
    onAmountChange,
    onCurrencyChange,
    amountDisable = false,
    currencyDisable = false,
    currencyOptions = [],
    selectCurrency= usd,
}) {
    const id = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2'>
            <label
             htmlFor={id}
             className='text-black/40 mb-2 inline-block'
             >
                {label}
            </label>
            <input 
            className='outline-none w-full bg-transparent py-1.5'
            type="number"
            placeholder="Amount"
            id={id} 
            value={amount}
            disabled={amountDisable} 
            onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
            />
        </div>
        <div className='w-1/2 flex-wrap flex justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select
        className='round-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
        value={selectCurrency}
        onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
        disabled={currencyDisable}
        >
            {currencyOptions.map((currency)=>(
                <option key={currency} value={currency}>
                {currency}
                </option>
            ))}
        </select>
    </div>
    </div>
  )
}

export default Input