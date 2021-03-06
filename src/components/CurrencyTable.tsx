import styled from 'styled-components'
import { TRates } from '../types'

const Wrapper = styled.div`
  height: 80vh;
  overflow-y: auto;
  box-shadow: 0 1px 4px #4d4d4d;
`

const Table = styled.table`
  table-layout: fixed;
  width: 450px;
  border-collapse: collapse;
  color: #242424;
  tr {
    :nth-child(odd) {
      background-color: #ffffff;
      height: 30px;
    }
    :nth-child(even) {
      background-color: #e7e7e7;
      height: 30px;
    }
  }
  th {
    letter-spacing: 2px;
    text-align: center;
    color: #666666;
    border-bottom: 1px solid #bbbbbb;
    height: 30px;
    font-size: 20px;
  }
  td {
    letter-spacing: 1px;
    text-align: center;
  }
`

type TProps = {
  rates: TRates
}

export const CurrencyTable = ({ rates }: TProps) => {
  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            <th>Валюта</th>
            <th>Курс</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(rates).map((e, i) => (
            <tr key={`${rates[e] + e + i}`}>
              <td>{e}</td>
              <td>{rates[e].toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  )
}
