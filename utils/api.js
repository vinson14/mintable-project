// simulate an api call
export const getTickets = async () => {
  return {
    silver: 6,
    gold: 3,
    diamond: 4,
  };
};

// simulate getting ticket
export const getRevealedTicket = async (color) => {
  console.log(color);
  return true;
};
