const lib=require("k-lib-im");
/**
 * @typedef {Object} t1988 [주식] ELW - 기초자산리스트조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1988_OutBlock} t1988OutBlock
 * @property {Array<t1988_OutBlock1>} t1988OutBlock1
 */
/**
 * @typedef {Object} t1988_OutBlock [주식] ELW - 기초자산리스트조회 
 * @property {string} ksp_cnt 코스피종목건수(4)
 * @property {string} ksd_cnt 코스닥종목건수(4)
 */
/**
 * @typedef {Object} t1988_OutBlock1 [주식] ELW - 기초자산리스트조회 
 * @property {string} shcode 단축코드(6)
 * @property {string} expcode 표준코드(12)
 * @property {string} hname 종목명(20)
 * @property {string} price 현재가(12)
 * @property {string} sign 부호(1)
 * @property {string} change 대비(12)
 * @property {number} rate 등락율(5.2)
 * @property {string} volume 누적거래량(주)(12)
 * @property {string} value 누적거래대금(백만)(12)
 * @property {string} mkt_gb 시장구분(1)
 * @property {string} jvolume 전일동시간대거래량(주)(12)
 */
/**
 * [주식] ELW - 기초자산리스트조회 (초당 2건 제한)
 * @param {string} mkt_gb 시장구분(0:전체1:코스피2:코스닥)(1) - 0:전체 1:코스피 2:코스닥
 * @param {string} chk_price 가격설정(0:전체1:조건설정)(1) - 
 * @param {string} from_price 가격1(12) - 
 * @param {string} to_price 가격2(12) - 
 * @param {string} chk_vol 거래량설정(0:전체1:조건설정)(1) - 
 * @param {string} from_vol 거래량1(12) - 
 * @param {string} to_vol 거래량2(12) - 
 * @param {string} chk_rate 등락율설정(0:전체1:조건설정)(1) - 
 * @param {number} from_rate 등락율1(5.2) - 
 * @param {number} to_rate 등락율2(5.2) - 
 * @param {string} chk_amt 거래대금설정(0:전체1:조건설정)(1) - 
 * @param {string} from_amt 거래대금1(12) - 
 * @param {string} to_amt 거래대금2(12) - 
 * @param {string} chk_up 양봉설정(0:전체1:조건설정)(1) - 
 * @param {string} chk_down 음봉설정(0:전체1:조건설정)(1) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1988|null>}  실패시 null 반환
 */
module.exports= async(mkt_gb="",chk_price="",from_price="",to_price="",chk_vol="",from_vol="",to_vol="",chk_rate="",from_rate=0,to_rate=0,chk_amt="",from_amt="",to_amt="",chk_up="",chk_down="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1988",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1988InBlock":{
        "mkt_gb":mkt_gb,
        "chk_price":chk_price,
        "from_price":from_price,
        "to_price":to_price,
        "chk_vol":chk_vol,
        "from_vol":from_vol,
        "to_vol":to_vol,
        "chk_rate":chk_rate,
        "from_rate":from_rate,
        "to_rate":to_rate,
        "chk_amt":chk_amt,
        "from_amt":from_amt,
        "to_amt":to_amt,
        "chk_up":chk_up,
        "chk_down":chk_down
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/elw",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}