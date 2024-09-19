function match(candidate, job) {
    if (!candidate.minSalary || !job.maxSalary) {
        throw new Error("Salary's value is missing");
    } else {
        return candidate.minSalary * 0.9 <= job.maxSalary;
    }
}