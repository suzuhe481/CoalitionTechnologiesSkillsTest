import Logo from "../../assets/images/icons/TestLogo.png";
import OverviewIcon from "../../assets/images/icons/home_FILL0_wght300_GRAD0_opsz24.png";
import PatientsIcon from "../../assets/images/icons/group_FILL0_wght300_GRAD0_opsz24.png";
import ScheduleIcon from "../../assets/images/icons/calendar_today_FILL0_wght300_GRAD0_opsz24.png";
import MessageIcon from "../../assets/images/icons/chat_bubble_FILL0_wght300_GRAD0_opsz24.png";
import TransactionIcon from "../../assets/images/icons/credit_card_FILL0_wght300_GRAD0_opsz24.png";

import DoctorImage from "../../assets/images/people/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import CogIcon from "../../assets/images/icons/settings_FILL0_wght300_GRAD0_opsz24.png";
import KebabVerticalIcon from "../../assets/images/icons/more_vert_FILL0_wght300_GRAD0_opsz24.png";

import "./Navbar.scss";

function Navbar() {
  const nav = (
    <div className="navbar">
      <img className="logo" src={Logo} />
      <div className="options">
        <div>
          <img className="overview" src={OverviewIcon} />
          <p className="text">Overview</p>
        </div>
        <div className="selected">
          <img className="patients" src={PatientsIcon} />
          <p className="text">Patients</p>
        </div>
        <div>
          <img className="schedule" src={ScheduleIcon} />
          <p className="text">Schedule</p>
        </div>
        <div>
          <img className="message" src={MessageIcon} />
          <p className="text">Message</p>
        </div>
        <div>
          <img className="transactions" src={TransactionIcon} />
          <p className="text">Transactions</p>
        </div>
      </div>

      <div className="doctor-and-settings">
        <div className="doctor">
          <img className="doctor-image" src={DoctorImage} />
          <div className="doctor-info">
            <div className="name">Dr. Jose Simmons</div>
            <div className="title">General Practictioner</div>
          </div>
        </div>

        <div className="settings">
          <img className="cog" src={CogIcon} />
          <img className="dots" src={KebabVerticalIcon} />
        </div>
      </div>
    </div>
  );

  return <>{nav}</>;
}

export default Navbar;
