import styled from 'styled-components'
import { useState } from 'react'
import { TRates } from '../types'

const Wrapper = styled.div`
  width: 280px;
  padding: 20px 15px 0px;
  box-shadow: 0 1px 4px #4d4d4d;
`

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  color: #666666;
`

const Input = styled.input`
  width: 250px;
  height: 40px;
  box-shadow: 0 0 5px #b6b6b6;
  border-radius: 3px;
  padding: 10px;
  font-size: 18px;
  color: #242424;
  margin-bottom: 20px;
`

const Select = styled.select`
  width: 250px;
  height: 40px;
  box-shadow: 0 0 5px #b6b6b6;
  border-radius: 3px;
  padding: 10px;
  font-size: 18px;
  color: #242424;
  margin-bottom: 20px;
`

type TProps = {
  rates: TRates
}

export const ConversionForm = ({ rates }: TProps) => {
  const [ruble, setRuble] = useState<string>('')
  const [select, setSelect] = useState<string>(`${rates.USD}`)
  const [selectedCurrency, setSelectedCurrency] = useState<string>('')

  return (
    <Wrapper>
      <Label>Рубль</Label>
      <Input
        value={ruble}
        onChange={({ target: { value } }) => {
          if (Number(value) || value === '') {
            setRuble(value)
            setSelectedCurrency('')
          }
        }}
        placeholder={((1 / +select) * +selectedCurrency).toFixed(3)}
      />
      <Label>Выберите валюту</Label>
      <Select value={select} onChange={({ target: { value } }) => setSelect(value)}>
        {Object.keys(rates).map((e, i) => {
          return (
            <option key={`${rates[e] + e + i}`} value={rates[e]}>
              {e}
            </option>
          )
        })}
      </Select>
      <Label>Выбранная валюта</Label>
      <Input
        value={selectedCurrency}
        onChange={({ target: { value } }) => {
          if (Number(value) || value === '') {
            setSelectedCurrency(value)
            setRuble('')
          }
        }}
        placeholder={(+select * +ruble).toFixed(3)}
      />
    </Wrapper>
  )
}
