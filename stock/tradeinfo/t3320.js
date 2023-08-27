const lib=require("k-lib-im");
/**
 * @typedef {Object} t3320 [주식] 투자정보 - FNG_요약
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t3320_OutBlock} t3320OutBlock
 * @property {t3320_OutBlock1} t3320OutBlock1
 */
/**
 * @typedef {Object} t3320_OutBlock [주식] 투자정보 - FNG_요약 
 * @property {string} upgubunnm 업종구분명(20)
 * @property {string} sijangcd 시장구분(1)
 * @property {string} marketnm 시장구분명(10)
 * @property {string} company 한글기업명(100)
 * @property {string} baddress 본사주소(100)
 * @property {string} btelno 본사전화번호(20)
 * @property {string} gsyyyy 최근결산년도(4)
 * @property {string} gsmm 결산월(2)
 * @property {string} gsym 최근결산년월(6)
 * @property {number} lstprice 주당액면가(12)
 * @property {number} gstock 주식수(12)
 * @property {string} homeurl Homepage(50)
 * @property {string} grdnm 그룹명(30)
 * @property {number} foreignratio 외국인(6.2)
 * @property {string} irtel 주담전화(30)
 * @property {number} capital 자본금(12)
 * @property {number} sigavalue 시가총액(12)
 * @property {number} cashsis 배당금(12)
 * @property {number} cashrate 배당수익율(13.2)
 * @property {number} price 현재가(8)
 * @property {number} jnilclose 전일종가(8)
 * @property {string} notice1 위험고지구분1_정리매매(1)
 * @property {string} notice2 위험고지구분2_투자위험(1)
 * @property {string} notice3 위험고지구분3_단기과열(1)
 */
/**
 * @typedef {Object} t3320_OutBlock1 [주식] 투자정보 - FNG_요약 
 * @property {string} gicode 기업코드(7)
 * @property {string} gsym 결산년월(6)
 * @property {string} gsgb 결산구분(1)
 * @property {number} per PER(13.2)
 * @property {number} eps EPS(13)
 * @property {number} pbr PBR(13.2)
 * @property {number} roa ROA(13.2)
 * @property {number} roe ROE(13.2)
 * @property {number} ebitda EBITDA(13.2)
 * @property {number} evebitda EVEBITDA(13.2)
 * @property {number} par 액면가(13.2)
 * @property {number} sps SPS(13.2)
 * @property {number} cps CPS(13.2)
 * @property {number} bps BPS(13)
 * @property {number} t_per T.PER(13.2)
 * @property {number} t_eps T.EPS(13)
 * @property {number} peg PEG(13.2)
 * @property {number} t_peg T.PEG(13.2)
 * @property {string} t_gsym 최근분기년도(6)
 */
/**
 * [주식] 투자정보 - FNG_요약 (초당 1건 제한)
 * @param {string} gicode 종목코드(7) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t3320|null>}  실패시 null 반환
 */
 exports.FNG_요약 = async(gicode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t3320",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t3320InBlock":{
        "gicode":gicode
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/investinfo",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}