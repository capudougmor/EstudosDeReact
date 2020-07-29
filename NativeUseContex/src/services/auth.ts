export function signin() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: "sdfh9fg8jfh7kfgjl0fhj8l6gjkç6gj0",
        user: {
          name: "Douglas",
          email: "capu@gmail.com"
        }
      });
    }, 1500);
  });
}
