const Card = (props) => {
  return (
    <div className="h-72 flex sm:hover:scale-105 transit ease-in duration-75 mt-6" onClick={() => props.sendIdToDeck(props.cardID)}>
      <div className="ease-in duration-200 bg-neutral p-12 hover:bg-neutral-focus sm:hover:shadow-lg shadow-md shadow-error/60 sm:hover:shadow-error rounded-lg">
        <img src={process.env.PUBLIC_URL + `/southpark/${props.image}` }alt={props.alt}></img>
        <h1 className="text-center mt-8 text-lg font-bold">{props.title}</h1>
      </div>
    </div>
  )
}

export default Card