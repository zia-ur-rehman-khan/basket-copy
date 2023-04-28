// Images
import check from "public/profile/check.svg";

// Next
import Image from "next/image";

const cardInfo = [
  {
    name: "Gold Package",
    price: 150,
    oldPrice: 200,
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Quis Vel Eros Donec Ac Odio Tempor Orci Dapibus.",
    isActive: true,
  },
];

const MembershipCard = () => {
  return (
    <>
      {cardInfo?.map((card, i) => (
        <div className="membership__card" key={i}>
          <div className="card__header">
            <h2>{card?.name}</h2>
            <h2 className="card__price">
              £{card?.price}
              <sup>
                <del>£{card?.oldPrice}</del>
              </sup>
            </h2>
          </div>
          <div className="card__body">
            <h3>What You will get</h3>
            <p>{card?.text}</p>
            {card?.isActive ? (
              <p className="active__membership">
                <Image src={check} alt=" " />
                <span>Active Membership</span>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default MembershipCard;
