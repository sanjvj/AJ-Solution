export function Card(props) {
  return (
    <div className="">
      <img
        className="rounded-xl cursor-pointer"
        src={props.thumbnail}
        alt="thumbnail"
      />
      <div className="grid grid-cols-1 my-3">
        <div className="text-gray-300">{props.title}</div>
      </div>
    </div>
  );
}
