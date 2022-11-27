import CardProps from "../Interfaces/CardProps";
import bgCard from "../assets/images/bg-card-front.png";
import logoCard from "../assets/images/card-logo.svg";

const CardFront = ({ number, name, expiryMM, expiryYY }: CardProps) => {
  return (
    <div
      className="relative z-10 bg-cover p-5"
      style={{
        backgroundImage: "url(" + bgCard + ")",
        width: "447px",
        height: "245px",
      }}
    >
      <div className="">
        <div>
          <img src={logoCard} />
        </div>
        <div className="tracking-widest text-white pt-10">
          <span className="text-3xl">{number || "0000 0000 0000 0000"}</span>
        </div>
        <div className="tracking-widest text-white pt-10">
          <div className="flex justify-between">
            <span>{name.toUpperCase() || "John Doe"}</span>
            <span>
              <span>{expiryMM || "MM"}</span>/<span>{expiryYY || "YY"}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
