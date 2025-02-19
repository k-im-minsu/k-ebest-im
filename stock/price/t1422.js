const lib=require("k-lib-im");
/**
 * @typedef {Object} t1422 [주식] 시세 - 상_하한
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1422_OutBlock} t1422OutBlock
 * @property {Array<t1422_OutBlock1>} t1422OutBlock1
 */
/**
 * @typedef {Object} t1422_OutBlock [주식] 시세 - 상_하한 
 * @property {number} cnt CNT(4)
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t1422_OutBlock1 [주식] 시세 - 상_하한 
 * @property {string} hname 한글명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {number} diff_vol 거래증가율(10.2)
 * @property {number} offerrem1 매도잔량(12)
 * @property {number} bidrem1 매수잔량(12)
 * @property {string} last 최종진입(6)
 * @property {number} lmtdaycnt 연속(8)
 * @property {number} jnilvolume 전일거래량(12)
 * @property {string} shcode 종목코드(6)
 * @property {string} ex_shcode 거래소별단축코드(10)
 */
/**
 * [주식] 시세 - 상_하한 (초당 1건 제한)
 * @param {string} qrygb 조회구분(1) - 1:20종목씩 조회 2:전체조회
 * @param {string} gubun 구분(1) - 0:전체 1:코스피 2:코스닥
 * @param {string} jnilgubun 전일구분(1) - 0:당일 1:전일
 * @param {string} sign 상하한구분(1) - 1:상한 4:하한
 * @param {number} jc_num 대상제외(12) - 대상제외값(설정시 저장됨) 증거금50 : 0x00400000 증거금100 : 0x00800000 증거금50/100 : 0x00200000 관리종목 : 0x00000080 시장경보 : 0x00000100 거래정지 : 0x00000200 우선주 : 0x00004000 투자유의 : 0x04000000 정리매매 : 0x01000000 불성실공시 : 0x80000000
 * @param {number} sprice 시작가격(8) - 현재가 >= sprice
 * @param {number} eprice 종료가격(8) - 현재가 <= eprice
 * @param {number} volume 거래량(12) - 거래량 >= volume
 * @param {number} idx IDX(4) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 idx 값으로 설정
 * @param {string} exchgubun 거래소구분코드(1)
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1422|null>}  실패시 null 반환
 */
module.exports= async(qrygb="",gubun="",jnilgubun="",sign="",jc_num=0,sprice=0,eprice=0,volume=0,idx=0,exchgubun="K",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1422",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1422InBlock":{
        "qrygb":qrygb,
        "gubun":gubun,
        "jnilgubun":jnilgubun,
        "sign":sign,
        "jc_num":jc_num,
        "sprice":sprice,
        "eprice":eprice,
        "volume":volume,
        "idx":idx,
        "exchgubun":exchgubun
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/market-data",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}