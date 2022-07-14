const Card = (props) => {
  return (
    <div className="ease-in duration-200 bg-neutral p-12 hover:bg-neutral-focus hover:shadow-lg shadow-md shadow-error/60 hover:shadow-error rounded-lg'">
      <img src={process.env.PUBLIC_URL + `${props.image}` }alt={props.alt}></img>
    </div>
  )
}

export default Card