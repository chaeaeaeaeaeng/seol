import styles from './login.css'
import Link from "next/link";

export default function home() {
    return(
        <div className="container">
            {/*로그인*/}
            <div className="title">
                <h1>로그인</h1>
            </div>

            <div className="contents">
                {/*ID/PW 입력창*/}
                <table className="table">
                    <tbody>
                    <tr>
                        <td>ID</td>
                        <td><input type="text" placeholder="아이디를 입력하세요"/></td>
                    </tr>
                    <tr>
                        <td>PW</td>
                        <td><input type="password" placeholder="비밀번호를 입력하세요"/></td>
                    </tr>
                    </tbody>
                </table>
                {/*로그인 버튼*/}
                <div className="loginbtn">
                    <Link href="/home">로그인</Link>
                </div>
                {/*아이디 저장/자동로그인*/}
                <div className="checkbox">
                    <div>
                        <input type="checkbox" id="save" name="login-option"/>
                        <label htmlFor="save">아이디 저장</label>
                    </div>
                    <div>
                        <input type="checkbox" id="auto" name="login-option"/>
                        <label htmlFor="auto">자동로그인</label>
                    </div>
                </div>
                {/*구분선*/}
                <div className="divider"></div>
                {/*아이디찾기/비밀번호찾기/회원가입*/}
                <div className="option">
                    <Link href="/find">아이디 찾기</Link>
                    <span>|</span>
                    <Link href="/find">비밀번호 찾기</Link>
                    <span>|</span>
                    <Link href="/join">회원가입</Link>
                </div>
            </div>
            {/*/!*이전/다음 버튼*!/*/}
            {/*<div className="btn">*/}
            {/*    <Link href="">이전</Link>*/}
            {/*    <Link href="">다음</Link>*/}
            {/*</div>*/}
        </div>
    )
}