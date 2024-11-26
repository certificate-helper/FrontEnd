import HeaderUI from "../atoms/Header";
import "./ranking.css";
export default function Ranking(){
    const ranks=[
        {
            id:1,
            rank:1,
            name:"서나정",
            test:13
        },
        {
            id:2,
            rank:2,
            name:"박민찬",
            test:10
        },
        {
            id:3,
            rank:3,
            name:"김정훈",
            test:9
        },
        {
            id:4,
            rank:4,
            name:"박명고",
            test:5
        },
        {
            id:5,
            rank:5,
            name:"윤희원",
            test:3
        }

    ];

    return (
        <div>
        <HeaderUI />
        <div className="main">
            <h1>오답 문제풀이 랭킹 TOP 5</h1>
            {ranks.map((rank) => (
                <div key={rank.id} className="rank-card">
                    <h2>{rank.rank} {rank.name} 오답 문제풀이 수:{rank.test}</h2>
                </div>
            ))}
        </div>
    </div>
    );
}