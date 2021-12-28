/** @module Discord */

import React from "react";
import { DiscordLogo } from "../Icons/Icons";
import { DISCORD_LINK } from "../../constants";

import "./styles/discord.scss";

const Discord = props => {
  return (
    <a className="discord-logo" href={DISCORD_LINK} target="_blank" rel="noreferrer">
      <DiscordLogo />
    </a>
  );
};

export default Discord;
