import { Card, CardContent } from "@mui/material";

const CardContainer = ({ children }) => {
  return (
    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardContainer;
