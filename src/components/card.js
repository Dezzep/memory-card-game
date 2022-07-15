const Card = (props) => {
  return (
    <div className="h-80 flex hover:scale-105 transit ease-in duration-75" onClick={(e) => props.sendIdToDeck(props.cardID)}>
      <div className="ease-in duration-200 bg-neutral p-12 hover:bg-neutral-focus hover:shadow-lg shadow-md shadow-error/60 hover:shadow-error rounded-lg">
        <img src={process.env.PUBLIC_URL + `/got/${props.image}` }alt={props.alt}></img>
        <h1>{props.title}</h1>
      </div>
    </div>
  )
}

export default Card