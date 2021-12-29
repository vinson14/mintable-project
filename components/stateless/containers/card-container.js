import { Card, CardContent } from "@mui/material";

const CardContainer = ({ children }) => {
  return (
    <Card>
      <CardContent sx={{ p: 0 }}>{children}</CardContent>
    </Card>
  );
};

export default CardContainer;
