export const mock = async (url: string, data: any) => {
    const getUsers = () => {
      const stored = localStorage.getItem('users');
      return stored ? JSON.parse(stored) : [];
    };
  
    const saveUsers = (users: any[]) => {
      localStorage.setItem('users', JSON.stringify(users));
    };
  
    if (url === '/register') {
      const { username, password } = data;
      const users = getUsers();
  
      if (users.find((u:any) => u.username === username)) {
        throw { response: { data: { message: '이미 존재하는 아이디입니다.' } } };
      }
  
      users.push({ username, password });
      saveUsers(users);
      return { data: { message: '가입 성공' }, status: 200 };
    }
  
    if (url === '/login') {
      const { username, password } = data;
      const users = getUsers();
      const found = users.find((u) => u.username === username && u.password === password);
  
      if (!found) {
        throw { response: { data: { message: '아이디 또는 비밀번호가 틀렸습니다.' } } };
      }
  
      return { data: { token: 'fake-jwt-token-123' }, status: 200 };
    }
  
    throw { response: { data: { message: '알 수 없는 요청' } } };
  };
  