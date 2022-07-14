import Card from "./card";

const cardMake = (img) => {
  return (
    <div className="h-80 flex hover:scale-105 transit ease-in duration-75">
      <Card image={`/got/${img}`}/>
    </div>
  )
}


const Deck = () => {
  // 
  return (<div className="grid grid-cols-4 gap-6">
  
  {cardMake('Arryn.png')}
  {cardMake('Baratheon.png')}
  {cardMake('Brynden.png')}
  {cardMake('Clegane.png')}
  {cardMake('direwolf.png')}
  {cardMake('Greyjoy.png')}
  {cardMake('Joffrey_Baratheon.png')}
  {cardMake('Karstark.png')}
  {cardMake('Lannister.png')}
  {cardMake('Martell.png')}
  {cardMake('Mormont.png')}
  {cardMake('Night_Watch.png')}
  {cardMake('Payne.png')}
  {cardMake('Stannis_Baratheon.png')}
  {cardMake('Targaryen.png')}
  {cardMake('Tully.png')}
  {cardMake('Tyrell.png')}


  
    
    
    </div>
    
    )
}
export default Deck