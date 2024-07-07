const lib=require("k-lib-im");
/**
 * @typedef {Object} t1452 [주식] 상위종목 - 거래량상위
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1452_OutBlock} t1452OutBlock
 * @property {Array<t1452_OutBlock1>} t1452OutBlock1
 */
/**
 * @typedef {Object} t1452_OutBlock [주식] 상위종목 - 거래량상위 
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t1452_OutBlock1 [주식] 상위종목 - 거래량상위 
 * @property {string} hname 종목명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {number} vol 회전율(6.2)
 * @property {number} jnilvolume 전일거래량(12)
 * @property {number} bef_diff 전일비(10.2)
 * @property {string} shcode 종목코드(6)
 */
/**
 * [주식] 상위종목 - 거래량상위 (초당 2건 제한)
 * @param {string} gubun 구분(1) - 0:전체 1:코스피 2:코스닥
 * @param {string} jnilgubun 전일구분(1) - 1:당일 2:전일
 * @param {number} sdiff 시작등락율(3) - 현재등락율 >= sdiff
 * @param {number} ediff 종료등락율(3) - 현재등락율 <= ediff
 * @param {number} jc_num 대상제외(12) - 대상제외값 (0x00000080)관리종목 => 000000000128 (0x00000100)시장경보 => 000000000256 (0x00000200)거래정지 => 000000000512 (0x00004000)우선주 => 000000016384 (0x00200000)증거금50 => 000008388608 (0x01000000)정리매매 => 000016777216 (0x04000000)투자유의 => 000067108864 (0x80000000)불성실공시 => -02147483648 두개 이상 제외시 해당 값을 합산한다 예)관리종목 + 시장경보 = 000000000128 + 000000000256 = 000000000384
 * @param {number} sprice 시작가격(8) - 현재가 >= sprice
 * @param {number} eprice 종료가격(8) - 현재가 <= eprice
 * @param {number} volume 거래량(12) - 거래량 >= volume
 * @param {number} idx IDX(4) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 idx 값으로 설정
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1452|null>}  실패시 null 반환
 */
module.exports = async(gubun="",jnilgubun="",sdiff=0,ediff=0,jc_num=0,sprice=0,eprice=0,volume=0,idx=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1452",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1452InBlock":{
        "gubun":gubun,
        "jnilgubun":jnilgubun,
        "sdiff":sdiff,
        "ediff":ediff,
        "jc_num":jc_num,
        "sprice":sprice,
        "eprice":eprice,
        "volume":volume,
        "idx":idx
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/high-item",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}