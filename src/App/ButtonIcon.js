import NAVIGATION_ICON from "../images/navigation";

const ButtonIcon = ({ type, content }) => {
  return (
    <div className="flex items-center ">
      {NAVIGATION_ICON(type)}
      <p className="">{content}</p>
    </div>
  );
};
export default ButtonIcon;
