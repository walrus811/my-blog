import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { EmailImage, GitHubLogoImage } from "./Images";

interface ProfileCardProps {
  name: string;
  description: string;
  email: string;
  githubUrl: string;
}

const ProfileCard = ({
  name,
  description,
  email,
  githubUrl,
}: ProfileCardProps) => {
  const IMAGE_SIZE = 160;
  const IMAGE_PATH = "../images/profile.png";
  const ICON_SIZE = 28;
  return (
    <figure className="flex gap-8 p-2 w-full items-center">
      <StaticImage
        className="rounded-full flex"
        src={IMAGE_PATH}
        alt="profile"
        aspectRatio={1}
        width={IMAGE_SIZE}
        layout="fixed"
        placeholder="dominantColor"
      ></StaticImage>
      <figcaption className="flex flex-col gap-4 truncate">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="break-all">{description}</p>
        <a
          href={`mailto:${email}`}
          target="_blank"
          className="group flex gap-2 items-center"
        >
          <EmailImage
            className="fill-zinc-800 dark:fill-zinc-100 group-hover:fill-violet-700 dark:group-hover:fill-peach-500"
            width={ICON_SIZE}
            height={ICON_SIZE}
            fill="#000000"
          ></EmailImage>
          <span className="group-hover:text-violet-700 dark:group-hover:text-peach-500 group-hover:underline underline-offset-2">
            {email}
          </span>
        </a>
        <a
          href={`${githubUrl}`}
          target="_blank"
          className="group flex gap-2 items-center"
        >
          <GitHubLogoImage
            className="fill-zinc-800 dark:fill-zinc-100 group-hover:fill-violet-700 dark:group-hover:fill-peach-500"
            width={ICON_SIZE}
            height={ICON_SIZE}
            fill="#000000"
          ></GitHubLogoImage>
          <span className="group-hover:text-violet-700 dark:group-hover:text-peach-500 group-hover:underline underline-offset-2">
            {githubUrl}
          </span>
        </a>
      </figcaption>
    </figure>
  );
};

export default ProfileCard;
