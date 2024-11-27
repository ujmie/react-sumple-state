import { useState } from 'react' 

const characters = [
    { id:0, name: "ルフィ", bounty: "30億", nickname: "麦わらのルフィ" ,affiliation:"麦わら海賊団"},
    { id:1, name: "ゾロ", bounty: "11億1100万", nickname: "海賊狩りのゾロ", affiliation:"麦わら海賊団" },
    { id:2, name: "サンジ", bounty: "11億1100万", nickname: "黒足のサンジ",affiliation:"麦わら海賊団" },
    { id:3, name: "マーシャル・Ｄ・ティーチ", bounty: "22億4760万", nickname: "黒ひげ", affiliation:"黒ひげ海賊団" },
    { id:4, name: "ジーザス・バージェス", bounty: "0", nickname: "チャンピオン", affiliation:"黒ひげ海賊団" },
   ];
   
function Profile({name,bounty,nickname}){
    return(
        <>
       <section className="profile">
           <h2>{name}</h2>
                <ul>
                    <li><b>懸賞金:</b>{bounty}</li>
                    <li><b>二つ名:</b>{nickname}</li>
                </ul>
        </section>
        </>
    )
}
const hensumei = characters.filter((abcd) => abcd.affiliation === "麦わら海賊団");
const hensumei2 = characters.filter((abcd) => abcd.affiliation === "黒ひげ海賊団");
const hairetu = [hensumei,hensumei2]

function Gallery(){
    const [count, setCount] = useState(0)
    return(
        <>
        <h1>ワンピースの登場人物</h1>
        <label htmlFor="pirates">海賊団を選択</label>
        <select name="pirates" id="pirates" onChange={(k) => setCount((count) => k.target.value)}>
            <option value="0">麦わら海賊団</option>
            <option value="1">黒ひげ海賊団</option>
        </select>
        {
            hairetu[count].map((x)=><Profile key={x.id} name={x.name} bounty={x.bounty} nickname={x.nickname} />)
        }
             
        

        {/* <Profile name="ルフィ" bounty="30億ベリー" nickname="麦わらのルフィ" />
        <Profile name="ゾロ" bounty="11億1100万ベリー" nickname="海賊狩りのゾロ" /> */}
        {/* <section className="profile">
            <h2>ルフィ</h2>
                <ul>
                    <li><b>懸賞金</b>:30億ベリー</li>
                    <li><b>二つ名</b>:麦わらのルフィ</li>
                </ul>
        </section>
        <section>
        <h2>ゾロ</h2>
                <ul>
                    <li><b>懸賞金</b>:11億1100万ベリー</li>
                    <li><b>二つ名</b>:海賊狩りのゾロ</li>
                </ul>
        </section> */}
        </>
    )
}
export default Gallery