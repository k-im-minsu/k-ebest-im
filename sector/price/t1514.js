const lib=require("k-lib-im");
/**
 * @typedef {Object} t1514 [업종] 시세 - 업종기간별추이
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1514_OutBlock} t1514OutBlock
 * @property {Array<t1514_OutBlock1>} t1514OutBlock1
 */
/**
 * @typedef {Object} t1514_OutBlock [업종] 시세 - 업종기간별추이 
 * @property {string} cts_date CTS_일자(8) - 연속조회키값(다음데이타가 있을 경우에 한해서 세팅 됨) 이 필드의 데이터를 다음 조회시 InBlock의 date 필드에 넣어준다.
 */
/**
 * @typedef {Object} t1514_OutBlock1 [업종] 시세 - 업종기간별추이 
 * @property {string} date 일자(8)
 * @property {number} jisu 지수(12.2)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(7.2)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 거래량(12)
 * @property {number} diff_vol 거래증가율(12.2)
 * @property {number} value1 거래대금1(12)
 * @property {number} high 상승(4)
 * @property {number} unchg 보합(4)
 * @property {number} low 하락(4)
 * @property {number} uprate 상승종목비율(6.2)
 * @property {number} frgsvolume 외인순매수(8)
 * @property {number} openjisu 시가(12.2)
 * @property {number} highjisu 고가(12.2)
 * @property {number} lowjisu 저가(12.2)
 * @property {number} value2 거래대금2(12)
 * @property {number} up 상한(4)
 * @property {number} down 하한(4)
 * @property {number} totjo 종목수(4)
 * @property {number} orgsvolume 기관순매수(8)
 * @property {string} upcode 업종코드(3)
 * @property {number} rate 거래비중(7.2)
 * @property {number} divrate 업종배당수익률(7.2)
 */
/**
 * [업종] 시세 - 업종기간별추이 (초당 1건 제한)
 * @param {string} upcode 업종코드(3) - 
 * @param {string} gubun1 구분1(1) - 미사용항목임 - 스페이스설정
 * @param {string} gubun2 구분2(1) - 일#1 주#2 월#3 분
 * @param {string} cts_date CTS_일자(8) - 연속조회기준일(LT) - 연속조회일 경우 이 값 기준으로 조회(cont:1일때) (이전 조회한 t1514OutBlock.cts_date 값으로 설정) -처음조회시 스페이스설정.
 * @param {number} cnt 조회건수(4) - 
 * @param {string} rate_gbn 비중구분(1) - 비중구분 - 1:거래량비중 - 2:거래대금비중
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1514|null>}  실패시 null 반환
 */
 exports.업종기간별추이 = async(upcode="",gubun1="",gubun2="",cts_date="",cnt=0,rate_gbn="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1514",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1514InBlock":{
        "upcode":upcode,
        "gubun1":gubun1,
        "gubun2":gubun2,
        "cts_date":cts_date,
        "cnt":cnt,
        "rate_gbn":rate_gbn
       }
    }
  const result= await lib.http.post(__ebestim.url+"/indtp/market-data",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}