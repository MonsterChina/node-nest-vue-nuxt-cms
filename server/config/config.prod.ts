// 生产环境配置
export default () => ({
  mysql: {
    host: '120.53.225.40',
    port: 53306,
    username: 'root',
    password: '123456',
    database: 'nest_cms_api',
    synchronize: false,
  },
});
