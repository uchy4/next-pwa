import { Container } from "../../components/Container";
import { Typography } from "@material-ui/core";
import { NextPageContext } from "next";

export const Page = () => (
  <Container>
    <Typography children="Admin page" variant="h6" />
    {/* <Typography children={show?.summary?.replace(/<[/]?[pb]>/g, "")} />
    <br />
    {show?.image ? <img src={show.image.medium} /> : null} */}
  </Container>
);

// export async function getServerSideProps(context: NextPageContext) {
//   const { id } = context.query;
//   const tempId = 2
//   const res = await fetch(`https://api.tvmaze.com/shows/${tempId}`);
//   const show = await res.json();
//   return { show };
// };

export default Page;