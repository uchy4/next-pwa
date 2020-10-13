import { Container } from "../components/Container";
import { Typography } from "@material-ui/core";

export default () => (
  <Container>
    <Typography children="Home page" variant="h6" />
    <Typography paragraph>
      You need to login to gain access to this app
    </Typography>
  </Container>
);
