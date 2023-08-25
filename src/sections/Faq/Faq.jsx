import './Faq.css'
import Accordion from './../../components/Accordion/Accordion';
const sections=[
  {
    id:'1',
    title:'Jakie są terminy wizyt?',
    text:'Staramy się umawiać nowych pacjentów na najbliższe terminy ,które satysfakcjonują obie strony. '
  },
  {
    id:'2',
    title:'Czy poproszenie o ofertę wiąże się z jakimikolwiek kosztami lub zobowiązaniami?',
    text:'Oczywiście nie. Oferta zawiera niezbędne informacje do umówienia konkretnej wizyty.'
  },
  {
    id:'3',
    title:'Jak zapisać się na wizytę u stomatologa?',
    text:'Na wizytę u stomatologa najlepiej zapisać się telefonicznie. Nasze asystentki stomatologiczne umówią Państwa na najbliższy wolny termin. '
  },
  {
    id:'4',
    title:'Jak często zgłaszać się na wizyty kontrolne?',
    text:'Na okresowe przeglądy stomatologiczne warto zgłaszać się co sześć miesięcy. Nie można doprowadzić do powstawania stanów zapalnych zębów lub dziąseł.'
  },
]
const Faq = () => {
  return (
    <div className='faq'>
      <h4>FAQ</h4>
      <h1>Często zadawane pytania</h1>
      <Accordion sections={sections}/>
    </div>
  )
}

export default Faq