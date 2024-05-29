import * as React from "react";
import {
  Grid,
  GridItem,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { ReSearchValue } from "../api/homeService";
export default function HomePage() {
  const Form = ({ ...props }) => {
    const id = React.useId();
    return (
      <FormControl>
        <FormLabel mb={0.5} htmlFor={id}>
          Nhập
        </FormLabel>
        <Input placeholder={props.placeholder} id={id} />
      </FormControl>
    );
  };
  // eslint-disable-next-line no-undef
  React.useEffect(() => {
    ReSearchValue().then((response) => {
      console.log("response", response);
    });
  }, []);
  return (
    <Grid h="100vh" w="100vh" templateRows="repeat(6, 1fr)">
      <GridItem rowSpan={1}>
        <Form placeholder="Nhập tên diễn viên" />
      </GridItem>
      <GridItem rowSpan={5}></GridItem>
    </Grid>
  );
}
