import { Component } from "react";
import JobItem from "./JobItem";
import "./styles.css";

class JobsList extends Component {
  state = {
    inputValue: "",
    jobs: [
      { id: 1, name: "ვარჯიში", completed: false },
      { id: 2, name: "წიგნის კითხვა", completed: false },
    ],
  };

  onChange = (event) => {
    const value = event.target.value;
    this.setState({ inputValue: value });
  };

  addjob = (event) => {
    event.preventDefault();
    const job = {
      id: this.state.jobs.length + 1,
      name: this.state.inputValue,
      completed: false,
    };

    this.setState({
      jobs: [...this.state.jobs, job],
      inputValue: "",
    });
  };

  removejob = (id) => {
    const jobs = this.state.jobs.filter((job) => job.id !== id);
    this.setState({ jobs });
  };

  onCompete = (id) => {
    const newJobs = this.state.jobs.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
    this.setState({ jobs: newJobs });
  };

  render() {
    return (
      <div>
        <div className="jobs">
          <h2>შესასრულებელი სამუშაოები</h2>
          <form onSubmit={this.addjob} className="job-form">
            <input
              type="text"
              onChange={this.onChange}
              value={this.state.inputValue}
            />
            <button type="submit">დავალების დამატება</button>
          </form>
          {this.state.jobs
            .filter((job) => !job.completed)
            .map((job) => (
              <JobItem
                key={job.id}
                id={job.id}
                name={job.name}
                onRemove={this.removejob}
                onComplete={this.onCompete}
                completed={job.completed}
              />
            ))}
        </div>
        <div className="jobs">
          <h2>შესრულებული სამუშაოები</h2>

          {this.state.jobs
            .filter((job) => job.completed)
            .map((job) => (
              <JobItem
                key={job.id}
                id={job.id}
                name={job.name}
                onRemove={this.removejob}
                onComplete={this.onCompete}
                completed={job.completed}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default JobsList;
