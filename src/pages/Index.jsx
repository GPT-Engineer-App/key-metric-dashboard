import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Heading } from "@chakra-ui/react";
import { FaDollarSign, FaShoppingCart, FaUsers, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={10}>Business Dashboard</Heading>
      <SimpleGrid columns={2} spacing={10}>
        <StatBox icon={FaDollarSign} title="Revenue" amount="$30K" percentage="12.5%" status="increase" />
        <StatBox icon={FaShoppingCart} title="Sales" amount="260 units" percentage="3.8%" status="decrease" />
        <StatBox icon={FaUsers} title="New Customers" amount="80" percentage="20%" status="increase" />
        <StatBox icon={FaChartLine} title="Expenses" amount="$12K" percentage="5%" status="decrease" />
      </SimpleGrid>
    </Box>
  );
};

const StatBox = ({ icon: Icon, title, amount, percentage, status }) => {
  return (
    <Stat p={5} shadow="md" border="1px" borderColor="gray.200">
      <Flex alignItems="center">
        <Box fontSize="3xl" as={Icon} mr={2} />
        <Text fontWeight="bold">{title}</Text>
      </Flex>
      <StatNumber fontSize="2xl">{amount}</StatNumber>
      <StatHelpText>
        <StatArrow type={status} />
        {percentage}
      </StatHelpText>
    </Stat>
  );
};

export default Index;
