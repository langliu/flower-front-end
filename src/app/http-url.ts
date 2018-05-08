const baseUrl = 'http://127.0.0.1:5000';
const httpUrl = {
  // 登录
  login: `/login`,
  // 注册
  register: `/register`,
  // 获取团队用户
  getUsers: `/getUsers`,
  // 获取团队项目
  getProjects: `/getProjects`,
  // 获取项目详情
  getProjectDetail: '/getProjectDetail',
  // 添加新的项目
  addProject: '/addProject',
  // 完成项目任务
  itemAccomplished: '/item_accomplished'
};

Object.keys(httpUrl).forEach((value) => {
  httpUrl[value] = `${baseUrl}${httpUrl[value]}`;
});
export {httpUrl};
