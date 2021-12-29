const getTicketOptions = (numSilver, numGold, numDiamond) => {
  return [
    { value: "silver", label: `Silver Ticket (${numSilver})` },
    { value: "gold", label: `Gold Ticket (${numGold})` },
    { value: "diamond", label: `Diamond Ticket (${numDiamond})` },
  ];
};

export default getTicketOptions;
