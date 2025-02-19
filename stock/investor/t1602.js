const lib=require("k-lib-im");
/**
 * @typedef {Object} t1602 [주식] 투자자 - 시간대별투자자매매추이
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1602_OutBlock} t1602OutBlock
 * @property {Array<t1602_OutBlock1>} t1602OutBlock1
 */
/**
 * @typedef {Object} t1602_OutBlock [주식] 투자자 - 시간대별투자자매매추이 
 * @property {string} cts_time CTSTIME(8)
 * @property {string} tjjcode_08 개인투자자코드(4)
 * @property {number} ms_08 개인매수(12)
 * @property {number} md_08 개인매도(12)
 * @property {number} rate_08 개인증감(12)
 * @property {number} svolume_08 개인순매수(12)
 * @property {string} jjcode_17 외국인투자자코드(4)
 * @property {number} ms_17 외국인매수(12)
 * @property {number} md_17 외국인매도(12)
 * @property {number} rate_17 외국인증감(12)
 * @property {number} svolume_17 외국인순매수(12)
 * @property {string} jjcode_18 기관계투자자코드(4)
 * @property {number} ms_18 기관계매수(12)
 * @property {number} md_18 기관계매도(12)
 * @property {number} rate_18 기관계증감(12)
 * @property {number} svolume_18 기관계순매수(12)
 * @property {string} jjcode_01 증권투자자코드(4)
 * @property {number} ms_01 증권매수(12)
 * @property {number} md_01 증권매도(12)
 * @property {number} rate_01 증권증감(12)
 * @property {number} svolume_01 증권순매수(12)
 * @property {string} jjcode_03 투신투자자코드(4)
 * @property {number} ms_03 투신매수(12)
 * @property {number} md_03 투신매도(12)
 * @property {number} rate_03 투신증감(12)
 * @property {number} svolume_03 투신순매수(12)
 * @property {string} jjcode_04 은행투자자코드(4)
 * @property {number} ms_04 은행매수(12)
 * @property {number} md_04 은행매도(12)
 * @property {number} rate_04 은행증감(12)
 * @property {number} svolume_04 은행순매수(12)
 * @property {string} jjcode_02 보험투자자코드(4)
 * @property {number} ms_02 보험매수(12)
 * @property {number} md_02 보험매도(12)
 * @property {number} rate_02 보험증감(12)
 * @property {number} svolume_02 보험순매수(12)
 * @property {string} jjcode_05 종금투자자코드(4)
 * @property {number} ms_05 종금매수(12)
 * @property {number} md_05 종금매도(12)
 * @property {number} rate_05 종금증감(12)
 * @property {number} svolume_05 종금순매수(12)
 * @property {string} jjcode_06 기금투자자코드(4)
 * @property {number} ms_06 기금매수(12)
 * @property {number} md_06 기금매도(12)
 * @property {number} rate_06 기금증감(12)
 * @property {number} svolume_06 기금순매수(12)
 * @property {string} jjcode_07 기타투자자코드(4)
 * @property {number} ms_07 기타매수(12)
 * @property {number} md_07 기타매도(12)
 * @property {number} rate_07 기타증감(12)
 * @property {number} svolume_07 기타순매수(12)
 * @property {string} jjcode_11 국가투자자코드(4)
 * @property {number} ms_11 국가매수(12)
 * @property {number} md_11 국가매도(12)
 * @property {number} rate_11 국가증감(12)
 * @property {number} svolume_11 국가순매수(12)
 * @property {string} jjcode_00 사모펀드코드(4)
 * @property {number} ms_00 사모펀드매수(12)
 * @property {number} md_00 사모펀드매도(12)
 * @property {number} rate_00 사모펀드증감(12)
 * @property {number} svolume_00 사모펀드순매수(12)
 * @property {string} ex_upcode 거래소별업종코드(4)
 */
/**
 * @typedef {Object} t1602_OutBlock1 [주식] 투자자 - 시간대별투자자매매추이 
 * @property {string} time 시간(8)
 * @property {number} sv_08 개인순매수(12)
 * @property {number} sv_17 외국인순매수(12)
 * @property {number} sv_18 기관계순매수(12)
 * @property {number} sv_01 증권순매수(12)
 * @property {number} sv_03 투신순매수(12)
 * @property {number} sv_04 은행순매수(12)
 * @property {number} sv_02 보험순매수(12)
 * @property {number} sv_05 종금순매수(12)
 * @property {number} sv_06 기금순매수(12)
 * @property {number} sv_07 기타순매수(12)
 * @property {number} sv_11 국가순매수(12)
 * @property {number} sv_00 사모펀드순매수(12)
 */
/**
 * [주식] 투자자 - 시간대별투자자매매추이 (초당 1건 제한)
 * @param {string} market 시장구분(1) - 1#코스피 2#KP200 3#코스닥 4#선물 5#콜옵션 6#풋옵션 7#ELW 8#ETF
 * @param {string} upcode 업종코드(3) - 001:코스피 101:KP200 301:코스닥 900:선 물 700:콜옵션 800:풋옵션 550:ELW 560:ETF
 * @param {string} gubun1 수량구분(1) - 1:수량 2:금액
 * @param {string} gubun2 전일분구분(1) - 0:금일 1:전일
 * @param {string} cts_time CTSTIME(8) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 cts_time 값으로 설정
 * @param {number} cts_idx CTSIDX(4) - 사용안함
 * @param {number} cnt 조회건수(4) - 
 * @param {string} gubun3 직전대비구분(C:직전대비)(1) - 
 * @param {string} exchgubun 거래소구분코드(1)
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1602|null>}  실패시 null 반환
 */
module.exports = async(market="",upcode="",gubun1="",gubun2="",cts_time="",cts_idx=0,cnt=0,gubun3="",exchgubun="K",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1602",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1602InBlock":{
        "market":market,
        "upcode":upcode,
        "gubun1":gubun1,
        "gubun2":gubun2,
        "cts_time":cts_time,
        "cts_idx":cts_idx,
        "cnt":cnt,
        "gubun3":gubun3,
        "exchgubun":exchgubun
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/investor",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}