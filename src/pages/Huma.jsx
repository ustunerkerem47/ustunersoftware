import AppPage from './AppPage.jsx'
import { Phone, HumaScreen } from '../components/Devices.jsx'

export default function Huma() {
  return (
    <AppPage
      app="huma"
      name="HÜMA"
      Device={{ C: Phone, kind: 'phones', big: 310, small: 290 }}
      renderScreen={(k) => <HumaScreen kind={k} />}
      heroScreen="list"
      deletion="/huma/hesap-silme"
    />
  )
}
