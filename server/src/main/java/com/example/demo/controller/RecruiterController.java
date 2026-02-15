package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Job;
import com.example.demo.repository.JobRepository;

@RestController
@RequestMapping("/recruiter")
public class RecruiterController {

    private final JobRepository jobRepository;

    public RecruiterController(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    // ✅ GET: View all posted jobs (currently all jobs)
    @GetMapping("/jobs")
    public List<Job> getRecruiterJobs() {
        return jobRepository.findAll();
    }

    // ✅ PUT: Update a job
    @PutMapping("/jobs/{id}")
    public Job updateJob(
            @PathVariable Long id,
            @RequestBody Job updatedJob) {

        Job existingJob = jobRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Job not found"));

        existingJob.setTitle(updatedJob.getTitle());
        existingJob.setCompany(updatedJob.getCompany());
        existingJob.setLocation(updatedJob.getLocation());
        existingJob.setExperience(updatedJob.getExperience());
        existingJob.setSalary(updatedJob.getSalary());

        return jobRepository.save(existingJob);
    }

    // ✅ DELETE: Delete a job
    @DeleteMapping("/jobs/{id}")
    public void deleteJob(@PathVariable Long id) {
        jobRepository.deleteById(id);
    }
}
