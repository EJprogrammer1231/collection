const averageSalary = document.getElementById("average-salary");
const highestSalary = document.getElementById("highest-salary");
const lowestSalary = document.getElementById("lowest-salary");
const popularCity = document.getElementById("popular-city")
const popularStatus = document.getElementById("popular-status");

const updateAverageSalary = () => {
  const totalSalary = applications.reduce((total,application) => {
    return total + application.salary;
  }, 0);

  const average = totalSalary / applications.length;

  averageSalary.textContent = average;
};

const updateHighestSalary = () => {
  if (applications.length === 0) return;

  const highest_salary = applications.reduce((highest,application) => {
    if (application.salary > highest.salary) {
      return application;
    }

    return highest;
  });

  highestSalary.textContent = highest_salary.salary;
};

const updateLowestSalary = () => {
  if (applications.length === 0) return;

  const lowest_salary = applications.reduce((lowest,application) => {
    if (application.salary < lowest.salary) {
      return application;
    }

    return lowest;
  });

  lowestSalary.textContent = lowest_salary.salary;
};

const updateMostAppliedCity = () => {

  if (applications.length === 0) {
    popularCity.textContent = "N/A";
    return;
  }

  const cityCount = applications.reduce((count, application) => {
    count[application.location] = (count[application.location] || 0) + 1;
    return count;
  }, {});

  const mostAppliedCity = Object.keys(cityCount).reduce((highest, city) => {
    return cityCount[city] > cityCount[highest] ? city : highest;
  });

  popularCity.textContent = mostAppliedCity;
};

const updateMostCommonStatus = () => {
  if (applications.length === 0) {
    popularStatus.textContent = "N/A";
    return;
  }

  const statusCount = applications.reduce((count, application) => {
    count[application.status] = (count[application.status] || 0) + 1;
    return count;
  }, {});

  const mostCommonStatus = Object.keys(statusCount).reduce((highest, status) => {
    return statusCount[status] > statusCount[highest]
      ? status
      : highest;
  });

  popularStatus.textContent = mostCommonStatus;
};