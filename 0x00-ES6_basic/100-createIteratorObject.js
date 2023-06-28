export default function createIteratorObject(report) {
  const employeesList = Object.values(report.allEmployees).flat();
  let currentIndex = 0;

  return {
    next() {
      if (currentIndex < employeesList.length) {
        return { value: employeesList[currentIndex++], done: false };
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
