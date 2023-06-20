import Sidebar from "@components/contents/Sidebar";
import Navbar from "@components/contents/Navbar";
import ContactBox from "@components/contents/ContactBox";
import MessageBox from "@components/contents/MessageBox";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex minH="100vh">
        {/* Sidebar */}
        <Sidebar />
        {/* Sidebar */}

        {/* Content */}
        <Box w="full">
          {/* Navbar */}
          <Navbar />
          {/* Navbar */}

          <Grid templateColumns="30% 70%">
            {/* Contact Box */}
            <GridItem minH="87.5vh" borderRight="1px" borderColor="gray.200">
              <ContactBox />
            </GridItem>
            {/* Contact Box */}

            {/* Message Box */}
            <GridItem>
              <MessageBox />
            </GridItem>
            {/* Message Box */}
          </Grid>
        </Box>
        {/* Content */}
      </Flex>
    </>
  );
}
