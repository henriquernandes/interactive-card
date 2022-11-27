import CardProps from "../Interfaces/CardProps";
import bgCard from "../assets/images/bg-card-back.png";

const CardBack = ({ cvc }: CardProps) => {
  return (
    <div
      className="relative z-0"
      style={{
        backgroundImage: "url(" + bgCard + ")",
        width: "447px",
        height: "245px",
      }}
    >
      <div className="absolute w-full h-full top-0 right-0 flex flex-col justify-between p-8">
        <div className="tracking-widest text-white pt-20 text-right pr-5">
          <span className="text-lg">{cvc || "000"}</span>
        </div>
      </div>
    </div>
  );
};

export default CardBack;
