import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { requestRates } from './api'
import { ConversionForm } from './components/ConversionForm'
import { CurrencyTable } from './components/CurrencyTable'
import { Loader } from './components/Loader'
import { Global } from './styles/Global'
import { TRates } from './types'

const Wrapper = styled.div`
  width: 800px;
  margin: 100px auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const App = () => {
  const [rates, setRates] = useState<TRates>()
  const ratesRequestSetInterval = useRef<number | undefined>()

  useEffect(() => {
    requestRates().then(data => setRates(data.rates))
    ratesRequestSetInterval.current = window.setInterval(() => {
      requestRates().then(data => setRates(data.rates))
    }, 10000)
    return () => {
      window.clearInterval(ratesRequestSetInterval.current)
    }
  }, [])
  if (!rates?.USD) return <Loader />

  return (
    <>
      <Global />
      <Wrapper>
        <ConversionForm rates={rates} />
        <CurrencyTable rates={rates} />
      </Wrapper>
    </>
  )
}
