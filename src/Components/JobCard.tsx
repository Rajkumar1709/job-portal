import { Card, Text, Group, Badge, Button } from "@mantine/core";
import { IconMapPin, IconCurrencyDollar } from "@tabler/icons-react";
import "./JobCard.css";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  experience: string;
  salary: string;
}

interface JobCardProps {
  job: Job;
  index: number;
}

const colors = [
  "card-blue",
  "card-green",
  "card-purple",
  "card-orange",
  "card-pink",
  "card-cyan"
];

function JobCard({ job, index }: JobCardProps) {
  const colorClass = colors[index % colors.length];

  return (
    <Card
      shadow="lg"
      padding="lg"
      radius="lg"
      withBorder
      className={`job-card ${colorClass}`}
    >
      <Group justify="space-between" mb="xs">
        <Text fw={700} size="lg">
          {job.title}
        </Text>
        <Badge variant="light">
          {job.experience}
        </Badge>
      </Group>

      <Text size="sm" c="dimmed" mb="sm">
        {job.company}
      </Text>

      <Group gap="xs" mb="xs">
        <IconMapPin size={16} />
        <Text size="sm">{job.location}</Text>
      </Group>

      <Group gap="xs" mb="md">
        <IconCurrencyDollar size={16} />
        <Text size="sm">{job.salary}</Text>
      </Group>

      <Button fullWidth radius="md">
        Apply Now
      </Button>
    </Card>
  );
}

export default JobCard;
