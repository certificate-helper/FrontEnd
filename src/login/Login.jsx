import './Login.css'

const Login =()=>{
    return(
        <div className="Login">
            
            <div className='Info'>
            <h3>로그인하세요</h3>          
            <label>ID</label>
            <input type="text" placeholder='ID를 입력해주세요'></input>
            <label>PW</label>
            <input type="password" placeholder='PW를 입력해주세요'></input>
            </div>
            <button>로그인</button>
            
            
            
        </div>
    )
}
export default Login;