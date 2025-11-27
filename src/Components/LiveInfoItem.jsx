import PropTypes from "prop-types"

const LiveInfoItem = ({label,value}) => {
  return (
    <div className="flex justify-between">
      <span className="uppercase opacity-70">{label.replace(/_/g, " ")}</span>
      <span className="font-mono text-teal-400 font-semibold">{value}</span>
    </div>
  )
}

LiveInfoItem.propTypes={
    label:PropTypes.string,
    value:PropTypes.string
}

export default LiveInfoItem