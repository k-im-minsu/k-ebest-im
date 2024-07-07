const lib=require("k-lib-im");
/**
 * @typedef {Object} t8419 [업종] 시세 - 업종챠트_일주월
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t8419_OutBlock} t8419OutBlock
 * @property {Array<t8419_OutBlock1>} t8419OutBlock1
 */
/**
 * @typedef {Object} t8419_OutBlock [업종] 시세 - 업종챠트_일주월 
 * @property {string} shcode 단축코드(3)
 * @property {number} jisiga 전일시가(7.2)
 * @property {number} jihigh 전일고가(7.2)
 * @property {number} jilow 전일저가(7.2)
 * @property {number} jiclose 전일종가(7.2)
 * @property {number} jivolume 전일거래량(12)
 * @property {number} disiga 당일시가(7.2)
 * @property {number} dihigh 당일고가(7.2)
 * @property {number} dilow 당일저가(7.2)
 * @property {number} diclose 당일종가(7.2)
 * @property {number} disvalue 당일거래대금(12)
 * @property {string} cts_date 연속일자(8)
 * @property {string} s_time 업종시작시간(6)
 * @property {string} e_time 업종종료시간(6)
 * @property {string} dshmin 동시호가처리시간(MM:분)(2)
 * @property {number} rec_count 레코드카운트(7)
 */
/**
 * @typedef {Object} t8419_OutBlock1 [업종] 시세 - 업종챠트_일주월 
 * @property {string} date 날짜(8)
 * @property {number} open 시가(7.2)
 * @property {number} high 고가(7.2)
 * @property {number} low 저가(7.2)
 * @property {number} close 종가(7.2)
 * @property {number} jdiff_vol 거래량(12)
 * @property {number} value 거래대금(12)
 */
/**
 * [업종] 시세 - 업종챠트_일주월 (초당 1건 제한)
 * @param {string} shcode 단축코드(3) - 
 * @param {string} gubun 주기구분(2:일3:주4:월)(1) - 
 * @param {number} qrycnt 요청건수(최대-압축:2000비압축:500)(4) - 요청건수 압축모듈인 경우 최대 2000건까지 조회가능. 비압축인 경우 최대 500건까지 조회가능
 * @param {string} sdate 시작일자(8) - 기본값 : Space (edate(필수입력) 기준으로 qrycnt 만큼 조회) 조회구간을 설정하여 필터링 하고 싶은 경우 입력
 * @param {string} edate 종료일자(8) - 처음조회기준일(LE) 처음조회일 경우 이 값 기준으로 조회 ("99999999" 혹은 '당일')
 * @param {string} cts_date 연속일자(8) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 cts_date 값으로 설정
 * @param {string} comp_yn 압축여부(Y:압축N:비압축)(1) - N:비압축 모듈 Y: 압 축 모듈
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t8419|null>}  실패시 null 반환
 */
module.exports = async(shcode="",gubun="",qrycnt=0,sdate="",edate="",cts_date="",comp_yn="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t8419",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t8419InBlock":{
        "shcode":shcode,
        "gubun":gubun,
        "qrycnt":qrycnt,
        "sdate":sdate,
        "edate":edate,
        "cts_date":cts_date,
        "comp_yn":comp_yn
       }
    }
  const result= await lib.http.post(__ebestim.url+"/indtp/market-data",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}