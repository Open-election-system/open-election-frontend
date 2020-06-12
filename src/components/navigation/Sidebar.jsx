import React from "react";
import folder from "../../images/folder.svg";
import statistic from "../../images/statistic.svg";
import mail from "../../images/mail.svg";
import file from "../../images/file.svg";
import settings from "../../images/settings.svg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="icon-folder">
        <img src={folder} alt="folder" />
      </div>
      <div className="icon-statistic">
        <img src={statistic} alt="statistic" />
      </div>
      <div className="icon-mail">
        <img src={mail} alt="mail" />
      </div>
      <div className="icon-file">
        <img src={file} alt="file" />
      </div>
      <div className="divider"></div>
      <div className="icon-settings">
        <img src={settings} alt="settings" />
      </div>
    </div>
  );
}
