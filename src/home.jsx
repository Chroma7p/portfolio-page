import { Base } from "./base"
import { Block1 } from "./block1"
import { Block2 } from "./block2"
import { Block3 } from "./block3"
import { LinkBtn } from "./link-button"

const namecss={
    margin: "20px",
    fontSize:"40px",
}
const nmblk={
    margin: "10px 20px",
}


export const Home = () => {
    return (
        <Base title="Top">
            <Block1 title="自己紹介">
                <div style={nmblk}>
                    <div style={namecss}>
                        上濱 涼雅 
                    </div>
                    <p>
                    普段はくろまという名前でPythonを使って競技プログラミングコンテストに参加したり、CTFに参加したり、DiscordBot等の個人開発をしています。
                    </p>
                </div>
                <Block2 title="所属">
                    東京電機大学 工学部 情報通信工学科2年<br/>
                    角川ドワンゴ学園 N Code Labo 講師
                </Block2>
                <Block2 title="スキル">
                    <Block3 title="Python">
                        研究・趣味で3年程度<br/>
                        Numpy、Pandas、OpenCV等の基本的なライブラリやTensorFlow、scikit-learnのような機械学習ライブラリは一通り扱った経験あり
                    </Block3>
                    <Block3 title="Unity(C#)">
                        講師として1年程度<br/>
                        簡単なゲームを作れる程度
                    </Block3>
                    <Block3 title="C">
                        基本的な事項を学んだ程度
                    </Block3>
                    <Block3 title="C++">
                        競技プログラミングでの使用経験あり<br/>
                        基本的な事項を学んだ程度
                    </Block3>
                    <Block3 title="HTML/CSS/JavaScript">
                        現在勉強中
                    </Block3>

                </Block2>
            </Block1>
            <Block1 title="活動">
                <Block3 title="AtCoder">
                    競技プログラミングコンテスト<br/>
                    始めてから2年と少し、コンテスト参加89回(2022/05/30現在)<br/>
                    Rating:1048(Highest:1140)<br/>
                    <LinkBtn link="https://atcoder.jp/users/Chroma7p">
                        AtCoder プロフィール
                    </LinkBtn>
                </Block3>
                <Block3 title="paiza">
                    プログラミングスキルチェックサイト<br/>
                    Ｓランク<br/>
                    paizaレーティング:1859±124
                </Block3>
                <Block3 title="CTF">
                    セキュリティコンテスト<br/>
                    時々大学の人とチームで参加している<br/>
                    参加の記録は以下のQiitaを参照<br/>
                </Block3>
                <Block3 title="Qiita">
                    PythonでAtCoderに参加するためのコツや、CTF参加の記録をしている<br/>
                    <LinkBtn link="https://qiita.com/Chroma7p">
                        Qiita プロフィール
                    </LinkBtn>
                </Block3>
                <Block3 title="ハッカソン">
                    高校の同級生と"ご注文は豆腐職人ですか?"というチームでハッカソンに参加<br/>
                    <LinkBtn link="https://hacku.yahoo.co.jp/hacku2020online1/" >
                        Open Hack U 2020 Online Vol.1 
                    </LinkBtn>Happy Hacking賞<br/>
                    <LinkBtn link="https://special.discoveryjapan.jp/campaign/hackathon2021/" >
                        Discovery Hackathon 2021
                    </LinkBtn>最優秀賞<br/>

                    また、個人でもたまにハッカソンに参加している<br/>


                    制作物については<LinkBtn link="/work" >Workのページ</LinkBtn>を参照
                </Block3>
                <Block3 title="個人開発">
                    主にPythonを用いて、個人的な計算用のアプリケーションやスクレイピング、Bot制作等をしている<br/>
                    <LinkBtn link="/work" >Workのページ</LinkBtn>を参照
                </Block3>
                
            </Block1>
                
        </Base>
    )
}