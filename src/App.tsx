import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./Components/JobCard";
import { Container, Title, SimpleGrid, MantineProvider } from "@mantine/core";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  experience: string;
  salary: string;
}

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <MantineProvider>
    <Container size="lg" py="xl">
      <Title order={2} mb="xl" ta="center">
        🚀 Available Jobs
      </Title>

      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing="lg"
      >
        {jobs.map((job, index) => (
          <JobCard key={job.id} job={job} index={index} />
        ))}
      </SimpleGrid>
    </Container>
    </MantineProvider>
  );
}

export default App;
