const HardMode = (props) => {
  return(
    <div className="form-control flex sm:w-1/3 mx-auto mt-4 tooltip" data-tip='Removes Names From The Cards'>
      <label className="label cursor-pointer " htmlFor="hardmode">
        <span className="label-text text-xl">Hard Mode:</span>
        <input type="checkbox" id="hardmode" className="toggle toggle-lg toggle-accent" onChange={e => {props.toggle()}}/>
      </label>
    </div>
)
}
export default HardMode