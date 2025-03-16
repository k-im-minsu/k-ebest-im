const lib=require("k-lib-im");
/**
 * @typedef {Object} t8453 [주식] 차트 - 주식챠트_틱_n틱
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t8453_OutBlock} t8453OutBlock
 * @property {Array<t8453_OutBlock1>} t8453OutBlock1
 */
/**
 * @typedef {Object} t8453_OutBlock [주식] 차트 - 주식챠트_틱_n틱 
 * @property {string} shcode 단축코드(6)
 * @property {number} jisiga 전일시가(8)
 * @property {number} jihigh 전일고가(8)
 * @property {number} jilow 전일저가(8)
 * @property {number} jiclose 전일종가(8)
 * @property {number} jivolume 전일거래량(12)
 * @property {number} disiga 당일시가(8)
 * @property {number} dihigh 당일고가(8)
 * @property {number} dilow 당일저가(8)
 * @property {number} diclose 당일종가(8)
 * @property {number} highend 상한가(8)
 * @property {number} lowend 하한가(8)
 * @property {string} cts_date 연속일자(8)
 * @property {string} cts_time 연속시간(10)
 * @property {string} s_time 장시작시간(HHMMSS)(6)
 * @property {string} e_time 장종료시간(HHMMSS)(6)
 * @property {string} dshmin 동시호가처리시간(MM:분)(2)
 * @property {number} rec_count 레코드카운트(7)
 * @property {string} nxt_fm_s_time NXT프리마켓장시작시간(HHMMSS)(6)
 * @property {string} nxt_fm_e_time NXT프리마켓장종료시간(HHMMSS)(6)
 * @property {string} nxt_fm_dshmin NXT프리마켓동시호가처리시간(MM:분)(2)
 * @property {string} nxt_am_s_time NXT에프터마켓장시작시간(HHMMSS)(6)
 * @property {string} nxt_am_e_time NXT에프터마켓장종료시간(HHMMSS)(6)
 * @property {string} nxt_am_dshmin NXT에프터마켓동시호가처리시간(MM:분)(2)
 */
/**
 * @typedef {Object} t8453_OutBlock1 [주식] 차트 - 주식챠트_틱_n틱 
 * @property {string} date 날짜(8)
 * @property {string} time 시간(10)
 * @property {number} open 시가(8)
 * @property {number} high 고가(8)
 * @property {number} low 저가(8)
 * @property {number} close 종가(8)
 * @property {number} jdiff_vol 거래량(12)
 * @property {number} jongchk 수정구분(13)
 * @property {number} rate 수정비율(6.2)
 * @property {number} pricechk 수정주가반영항목(13)
 */
/**
 * [주식] 차트 - 주식챠트_틱_n틱 (초당 1건 제한)
 * @param {string} shcode 단축코드(6) - 
 * @param {number} ncnt 단위(n틱)(4) - 
 * @param {number} qrycnt 요청건수(최대-압축:2000비압축:500)(4) - 
 * @param {string} nday 조회영업일수(0:미사용1>=사용)(1) - 
 * @param {string} sdate 시작일자(8) - 기본값 : Space (edate(필수입력) 기준으로 qrycnt 만큼 조회) 조회구간을 설정하여 필터링 하고 싶은 경우 입력
 * @param {string} stime 시작시간(현재미사용)(6) - 
 * @param {string} edate 종료일자(8) - 처음조회기준일(LE) 처음조회일 경우 이 값 기준으로 조회 ("99999999" 혹은 '당일')
 * @param {string} etime 종료시간(현재미사용)(6) - 
 * @param {string} cts_date 연속일자(8) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 cts_date 값으로 설정
 * @param {string} cts_time 연속시간(10) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 cts_time 값으로 설정
 * @param {string} comp_yn 압축여부(1) - N:비압축 OPEN API 압축 미제공
 * @param {string} exchgubun 거래소구분코드 - K:KRX N:NXT U:통합 그외 입력값은 KRX로 처리
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t8453|null>}  실패시 null 반환
 */
module.exports = async(shcode="",ncnt=0,qrycnt=0,nday="",sdate="",stime="",edate="",etime="",cts_date="",cts_time="",comp_yn="N",exchgubun="K",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t8453",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t8453InBlock":{
        "shcode":shcode,
        "ncnt":ncnt,
        "qrycnt":qrycnt,
        "nday":nday,
        "sdate":sdate,
        "stime":stime,
        "edate":edate,
        "etime":etime,
        "cts_date":cts_date,
        "cts_time":cts_time,
        "comp_yn":comp_yn,
        "exchgubun":exchgubun
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/chart",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}