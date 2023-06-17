import Button from "../../Elements/Button";
import googleIcon from "../../assets/googleIcon.svg";
import userImage from "../../assets/userImage.svg";
import arrow from "../../assets/arrow.svg";

const Header = () => {
  return (
    <header className="flex justify-end px-9 py-5 border-b border-headerBorderGray">
      <div className="flex items-center">
        <span className="mr-4">
          <Button
            text="Add to Chrome"
            icon={googleIcon}
            backgroundColor="bg-white"
          />
        </span>

        <Button
          text="Upgrade to Pro"
          backgroundColor="bg-primary"
          textColor="text-white"
        />
      </div>

      <div className="flex items-center justify-center w-fit ml-20">
        <img src={userImage} alt="" className="w-9 h-9 mr-2" />

        <img src={arrow} alt="" />
      </div>
    </header>
  );
};

export default Header;
