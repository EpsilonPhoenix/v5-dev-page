export const team = [
  {
    name: "EpsilonPhoenix",
    userId: "899647076370092042",
    avatarHash: "a_7bb74a7952c1eae2543c3cbb63160571",
    role: "Developer",
    note: "Making shit prototypes",
  },
  {
    name: "Zurviq",
    userId: "790294721943699477",
    avatarHash: "777c2a37db244179fcb36c01f01e93b6",
    role: "Developer",
    note: "Making those prototypes better",
  },
  {
    name: "Rdbt",
    userId: "777346923232886784",
    avatarHash: "7680fe362ade8758b39da240038da044",
    role: "Developer",
    note: "Making everything polished",
  },
  {
    name: "Nathan",
    userId: "1367543367277219840",
    avatarHash: "ef6a28b2f77cad9c3c7f32de5fadd73e",
    role: "Developer",
    note: "Made mixins and rendering!",
  },

  // Contributors
  {
    name: "IcyHenryT",
    userId: "1160548899711356958",
    avatarHash: "1ac3735028f8bb5ff98ec5bda128e7ce",
    role: "Contributor",
    note: "Let us use pathfinder and helps!",
  },

  {
    name: "real",
    userId: "496139113997664257",
    avatarHash: "8bb214e4ae179b02ce37949dc70163d2",
    role: "Contributor",
    note: "He's cool",
  },
];

export function getDiscordAvatarUrl(userId: string, avatarHash: string) {
  const extension = avatarHash.startsWith('a_') ? 'gif' : 'png';
  return `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.${extension}?size=256`;
}