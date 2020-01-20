export default {
  getAll: async () => {
    let res = await fetch("/api/task");
    console.log(res);
    return res.json() || [];
  }
};
