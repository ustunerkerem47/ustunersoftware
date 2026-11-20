import AppPage from './AppPage.jsx'
import { Tablet, DefteriaScreen } from '../components/Devices.jsx'

export default function Defteria() {
  return (
    <AppPage
      app="defteria"
      name="Defteria"
      light
      Device={{ C: Tablet, kind: 'tablet-stage', big: 860, small: 620 }}
      renderScreen={(k) => <DefteriaScreen kind={k} />}
      heroScreen="pen"
      deletion="/defteria/hesap-silme"
    />
  )
}
