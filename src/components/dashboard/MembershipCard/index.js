// Images
import check from "public/profile/check.svg";

// Next
import Image from "next/image";
import CommonHeading from "components/common/Heading";
import CommonTextField from "components/common/TextField";

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
            <CommonHeading heading={card?.name} level={2}/>
            <h2 className="card__price">
              £{card?.price}
              <sup>
                <del>£{card?.oldPrice}</del>
              </sup>
            </h2>
          </div>
          <div className="card__body">
            <CommonHeading level={3} heading={"What You will get"} mb={5} />
            <CommonTextField text={card?.text} mb={15} />
            {card?.isActive ? (
              <p className="active__membership">
                <Image src={check} alt=" " />
                <CommonTextField text={"Active Membership"} />
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
