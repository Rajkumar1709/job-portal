import { IconInfoCircle } from '@tabler/icons-react';
import { Center, Text, TextInput, Tooltip } from '@mantine/core';

function TooltipIcon() {
  const rightSection = (
    <Tooltip
      label="We store your data securely"
      position="top-end"
      withArrow
      transitionProps={{ transition: 'pop-bottom-right' }}
    >
      <Text component="div" c="dimmed" style={{ cursor: 'help' }}>
        <Center>
          <IconInfoCircle size={18} stroke={1.5} />
        </Center>
      </Text>
    </Tooltip>
  );
 return (
    <TextInput
      rightSection={rightSection}
      label="Tooltip shown on icon hover"
      placeholder="Your email"
    />
  );
}
export default TooltipIcon;